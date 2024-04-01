<template>
    <div class="col-12 borderPrincipal" :class="preIdStore.VistaRapida == true ? '' : 'mb-5'">  
        <div class="row g-3">                
            <div class="col-md-11">
                    <h5 class="col-12 fw-bold"> NOTA PREANESTÉSICA </h5>                                                                                                                    
            </div>
            <div class="col-md-1 justificar-icono-nota">
                <label class="form-label fw-bold alinear-icono-nota">
                    <template v-if="microfonoEscucha === false">
                        <span id="microfono" :class="microfono == false ? 'microfono-off' : 'microfono-on'" @click="empezarReconocimiento">
                            <font-awesome-icon class="" icon="fa-solid fa-microphone" size="2xl"/>
                        </span>
                    </template>

                    <template v-else>
                        <span class="microfono-on" @click="detenerReconocimiento">
                            <font-awesome-icon class="" icon="fa-solid fa-microphone" size="2xl"/>
                        </span>
                    </template>                                
                </label>     
            </div>
            
            <div class="col-md-12">
                <textarea class="form-control"
                          id=""
                          rows="20"
                          @keyup.capture="enviarDatosNota"
                          v-model="textoNota.nota"
                          :class="textoNota.nota != undefined && textoNota.nota != '' ?
                                 'form-control border border-success formSombra' : 'form-control'">
                </textarea>
            </div>            
        </div>
    </div>    
</template>

<script lang="ts">
import type { notaPre } from "@/interfaces/regPreAnest";
import { usePreIdStore } from "@/stores/preId-store";
import { defineComponent } from "vue";

const preIdStore = usePreIdStore();

export default defineComponent({
    
    data () {
        return{
            textoNota: {} as notaPre,
            preIdStore,

            btnActualizarNota:false,
            microfono: false,
            intervalId: null,
            microfonoEscucha: false,
            recognition: null,
        }
    },

    methods: {
        async vaciarInputsNota(){
            try {
                this.textoNota.nota = ""
    
                this.enviarDatosNota()        
            } catch (error) {
            window.log.error('Ocurrió un error:', error);
            }
        },

        async guardarDatosNota(){
            try {
                if(preIdStore.nuevoRegistroPaciente == false){
                    if(preIdStore.actualizarRegNota == false ){
                        // Guardar datos
                        preIdStore.savePreNota(this.textoNota.nota, preIdStore.pacienteID._id, preIdStore.pacienteCxID._id)
                        preIdStore.actualizarRegNota = true
                    }else if(preIdStore.actualizarRegNota == true){
                        // Actualizar datos
                        preIdStore.updatePreNota(this.textoNota.nota, preIdStore.pacienteID._id)
                    }
    
                }else if(preIdStore.nuevoRegistroPaciente == true){
                    if(preIdStore.actualizarRegNota == false ){
                        // Guardar nuevos datos
                        preIdStore.saveNuevoPreNota(this.textoNota.nota, preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
                        preIdStore.actualizarRegNota = true
                    }else if(preIdStore.actualizarRegNota == true){
                        // Actualizar nuevos datos
                        preIdStore.updateNuevoPreNota(this.textoNota.nota, preIdStore.pacienteID.pid, preIdStore.cirugiaID)
                    }
    
                }        
            } catch (error) {
            window.log.error('Ocurrió un error:', error);
            }
        },

        enviarDatosNota() {
            try {
                this.$emit('recibe-datos-nota', preIdStore.NotaPre=this.textoNota.nota)        
            } catch (error) {
                window.log.error('Ocurrió un error:', error);
            }
        },        

        async empezarReconocimiento() {
            this.recognition = new (window as any).webkitSpeechRecognition(); // Crear instancia del reconocimiento de voz
            this.recognition.lang = 'es-ES'; // Establecer idioma a español, puede cambiar
            this.recognition.continuous = true; // Permitir reconocimiento continuo
            this.recognition.start(); // Iniciar reconocimiento de voz
            
            this.microfono=true
            this.microfonoEscucha=true

            const tiempoEspera = 500;

            if(this.textoNota.nota === undefined || this.textoNota.nota === ''){             
                this.textoNota.nota = '';
            }
            
            // Manejar evento de resultado del reconocimiento
            this.recognition.onresult = (event) => {
                let escuchado = event.results[0][0].transcript; // Obtener texto reconocido
                this.textoNota.nota += ' ' + escuchado;
                console.log('Texto reconocido:', escuchado);

                // Reiniciar el temporizador si se detecta otra transcripción mientras el temporizador está en marcha
                if (this.intervalId !== null) {
                    clearTimeout(this.intervalId);
                }

                this.intervalId = setTimeout(() => {
                    this.recognition.stop(); // Detener reconocimiento después del tiempo especificado sin transcripciones adicionales
                    this.microfono = false; // Cerrar micrófono después del tiempo especificado sin transcripciones adicionales
                }, tiempoEspera);
            };            

            // Manejar evento de error del reconocimiento
            this.recognition.onerror = (event) => {
                this.microfono=false
                console.error('Error en reconocimiento de voz:', event.error);
            };            

            // Manejar evento de fin del reconocimiento
            this.recognition.onend = () => {
                if (this.intervalId !== null) {
                    clearTimeout(this.intervalId);
                }
                this.microfono = false;

                // Iniciar reconocimiento de voz nuevamente después de un pequeño retraso
                setTimeout(() => {
                    this.recognition.start();
                    this.microfono = true;
                }, 50); // Ajustar el valor del retraso según sea necesario
            };
        },

        detenerReconocimiento() {      
            this.recognition.onend = () => {
                clearTimeout(this.intervalId);
            };

            if (this.recognition) {
                this.recognition.stop();
                clearTimeout(this.intervalId);
                this.microfono = false;
                this.microfonoEscucha=false
            }
        }        
    }
})
</script>

<style scoped>
.borderPrincipal {
  border-radius: 5px;
  padding: 1rem;
  margin-top :10px;
  backdrop-filter: blur(40px) brightness(97%);
}
.formSombra:focus{
    border-color:#6BD99B;
    outline:0;
    -webkit-box-shadow:0 0 8px #6BD99B;
    box-shadow:0 0 8px #6BD99B
}
.border-success {
    --bs-border-opacity: 1;
    border-color: #6BD99B !important;
}

.btn-guardar-info{
    --bs-btn-bg: none;
    --bs-btn-color: #E88300;    
    --bs-btn-border-color: #E88300;
    --bs-btn-hover-bg: #E88300;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-border-color: #E88300;          
    --bs-btn-active-bg: #E88300;
    --bs-btn-active-color: #ffffff;
    --bs-btn-active-border-color: #E88300;
    width: 150px;        
}
.alinear-btn{
    text-align: end;
}
h5{
    color: #002D60;
    margin-top: 11px;    
}
.alinear-icono-nota{
    margin-top: 6px;
}
.justificar-icono-nota{
    text-align: center;
}

.microfono-off{
    text-align: right;
    cursor: pointer;
}

.microfono-on{
    text-align: right;
    cursor: pointer;
    color: #E88300;
}
</style>