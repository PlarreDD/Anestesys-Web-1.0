<template>
    <div class="col-12 borderPrincipal" :class="preIdStore.VistaRapida == true ? '' : 'mb-5'">  
        <form @submit.prevent="" class="row g-3">                
            <div class="col-md-11">
                    <h5 class="col-12 fw-bold"> NOTA PREANESTÉSICA </h5>                                                                                                                    
            </div>
            <div class="col-md-1 justificar-icono-nota">
                <label 
                        class="form-label fw-bold alinear-icono-nota">
                            <span style="text-align: right;">
                                <font-awesome-icon icon="fa-solid fa-microphone" size="2xl"/>
                            </span>
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
        </form>
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

            btnActualizarNota:false
        }
    },

    methods: {
        async vaciarInputsNota(){
            this.textoNota.nota = ""

            this.enviarDatosNota()
        },

        async guardarDatosNota(){
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
        },

        enviarDatosNota() {
            this.$emit('recibe-datos-nota', preIdStore.NotaPre=this.textoNota.nota)
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
</style>