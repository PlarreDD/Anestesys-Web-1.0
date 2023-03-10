<template>

    <div class="col-12 borderPrincipal">  
        <form @submit.prevent="obtenerDatos" class="row g-3">
            <div class="col-md-4">
                <label for="" class="form-label fw-bold"> Número de Expediente </label>                
                <input type="text" 
                    v-model="id.numExped" 
                    pattern="[0-9]{8}"
                    title="Sólo números, ocho dígitos"
                    id="numExpediente" 
                    class="form-control"
                    :class="{ 'form-control border border-danger': propRojoNum, 'form-control border border-success formSombra': propVerdeNum }">                

                <div :class="propNumExp == true ? 'visible validaCampo' : 'invisible'"
                     id="validaNumExp">                     
                    Escriba el número de expediente                    
                </div>                
            </div>

            <div class="col-md-6">
                <label for="" class="form-label fw-bold"> Nombre del Paciente </label>
                
                <input class="form-control" 
                       type="text" 
                       @keyup.capture="enviarDatos"
                       v-model="id.nomPaciente"
                       id="nombrePaciente" 
                       :class="{ 'form-control border border-danger': propRojoNom, 'form-control border border-success formSombra': propVerdeNom }">

                <div :class="propNomPac == true ? 'visible validaCampo' : 'invisible'"
                     id="validaNomPac">
                    Escriba el nombre del paciente
                </div>        
            </div>

            <div class="col-md-2">
                <label for="" class="form-label fw-bold"> Habitación </label>
                <input type="text"
                       class="form-control"
                       v-model="id.habitacion"
                       :class="id.habitacion != '' ? 'form-control border border-success formSombra' : 'form-control'">
            </div>

            <div class="col-md-3">
                <label for="" class="form-label fw-bold"> Fecha de Nacimiento </label>
                <input type="date"
                       class="form-control"
                       v-model="id.fechaNac"
                       :class="id.fechaNac != String(Date) ? 'form-control border border-success formSombra' : 'form-control'">
            </div>

            <div class="col-md-2">
                <label for="" class="form-label fw-bold"> Edad </label>
                <input type="text"
                       class="form-control"
                       v-model="id.edadPaciente"
                       :class="id.edadPaciente != '0' ? 'form-control border border-success formSombra' : 'form-control'">
            </div>

            <div class="col-md-3">
                <label for="" class="form-label col-12 fw-bold"> Género </label>
                <input type="radio"
                       class="btn-check"
                       name="genero"
                       id="masculino"
                       autocomplete="off"
                       value="Masculino"
                       v-model="id.genero">
                <label class="btn btn-radio margenRadio" for="masculino"> Masculino </label>
                                
                <input type="radio"
                       class="btn-check"
                       name="genero"
                       id="femenino"
                       autocomplete="off"
                       value="Femenino"
                       v-model="id.genero">
                <label class="btn btn-radio" for="femenino"> Femenino </label>
            </div>
            
            <div class="col-md-2">
                <label for="" class="form-label fw-bold"> Fecha de Ingreso </label>
                <input type="date"
                       class="form-control"
                       v-model="id.fechaIn"
                       :class="id.fechaIn != String(Date) ? 'form-control border border-success formSombra' : 'form-control'">
            </div>

            <div class="col-md-2">
                <label for="" class="form-label fw-bold"> Núm de episodio </label>
                <input type="text"
                       class="form-control"
                       v-model="id.numEpisodio"     
                       :class="id.numEpisodio != '' ? 'form-control border border-success formSombra' : 'form-control'">
            </div>
          
            <hr />

            <div class="col-md-8">
                <label for="" class="form-label fw-bold"> Diagnóstico </label>
                <textarea class="form-control"
                          rows="3"
                          v-model="id.diagnostico"
                          :class="id.diagnostico != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
            </div>

            <div class="col-md-4">
                <label for="" class="form-label col-12 fw-bold"> Tipo de Cirugía </label>

                <input type="radio"
                       class="btn-check"
                       name="tipoCirugia"
                       id="mayor"
                       autocomplete="off"
                       value="Mayor"
                       v-model="id.tipoCx">
                <label class="btn btn-radio margenRadio" for="mayor"> Mayor </label>
                
                <input type="radio"
                       class="btn-check"
                       name="tipoCirugia"
                       id="menor"
                       autocomplete="off"
                       value="Menor"
                       v-model="id.tipoCx">
                <label class="btn btn-radio margenRadio" for="menor"> Menor </label>

                <input type="radio"
                       class="btn-check"
                       name="tipoCirugia"
                       id="ambulatoria"
                       autocomplete="off"
                       value="Ambulatoria"
                       v-model="id.tipoCx">
                <label class="btn btn-radio" for="ambulatoria"> Ambulatoria </label>
            </div>  
            
            <div class="col-md-8">
                <label for="" class="form-label fw-bold"> CIE-10 </label>
                
                <input type="text"
                       class="form-control"
                       @keyup.capture="enviarDatos"
                       v-model="id.cie10"
                       :class="id.cie10 != '' ? 'form-control border border-success formSombra' : 'form-control'">
            </div>

            <div class="col-md-6">
                <label for="" class="form-label fw-bold"> Cirugía </label>
                <input type="text"
                       class="form-control"
                       @keyup.capture="enviarDatos"
                       v-model="id.cirugia"
                       :class="id.cirugia != '' ? 'form-control border border-success formSombra' : 'form-control'">
            </div>

            <div class="col-md-3">
                <label for="" class="form-label fw-bold"> Fecha de Cirugía </label>
                <input type="date"
                       class="form-control"
                       v-model="id.fechaCx"
                       :class="id.fechaCx != String(Date) ? 'form-control border border-success formSombra' : 'form-control'">
            </div>

            <div class="col-md-3">
                <label for="" class="form-label fw-bold"> Hora de Cirugía </label>
                
                <input type="time"
                       class="form-control"
                       v-model="id.hrCx"
                       :class="id.hrCx != '' ? 'form-control border border-success formSombra' : 'form-control'">
            </div>

            <div class="col-md-6">
                <label for="" class="form-label fw-bold"> Cirujano </label>
                <input type="text"
                       class="form-control"
                       @keyup.capture="enviarDatos"
                       v-model="id.cirujano"
                       :class="id.cirujano != '' ? 'form-control border border-success formSombra' : 'form-control'">
            </div>
            
            <div class="col-md-6">
                <label for="" class="form-label fw-bold"> Anestesiólogo </label>
                <input type="text" 
                       class="form-control"
                       v-model="id.anestesiologo"
                       :class="id.anestesiologo != '' ? 'form-control border border-success formSombra' : 'form-control'">
            </div>

            <div class="col-md-6">
                <label for="" class="form-label fw-bold"> Anestesiólogo VPA </label>
                <input type="text"
                       class="form-control"
                       v-model="id.anestesiologoVPA"
                       :class="id.anestesiologoVPA != '' ? 'form-control border border-success formSombra' : 'form-control'">
            </div>
            
            <div class="col-md-4"></div>
            <div class="col-md-1 margenBoton">
                <button href="#pre-valoracion" 
                        data-bs-toggle="tab" 
                        type="submit"
                        class="btn btn-guardar fw-bold"> GUARDAR </button>
                        <!-- :disabled="id.numExpediente != '' && id.nombrePaciente != '' ? false : true" -->
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import type { regIdPaciente } from "@/interfaces/regPreAnest"
import { defineComponent } from "vue"


export default defineComponent({
    props: {
        propNumExp: {
            type: Boolean
        },
        propNomPac:{
            type: Boolean
        },
        propRojoNum:{
            type: Boolean
        },
        propVerdeNum:{
            type: Boolean
        },
        propRojoNom:{
            type: Boolean
        },
        propVerdeNom:{
            type: Boolean
        },
    },

    data () {
        return{
            id: {} as regIdPaciente,
        }
    },

    methods: {
        obtenerDatos() {
            this.$emit("validar", this.id.numExped, this.id.nomPaciente)
        },
        enviarDatos() {
            this.$emit('recibe-datos', this.id.numExped, this.id.nomPaciente, this.id.cirujano, this.id.cirugia)
        }   
    }
})
</script>

<style scoped>
.borderPrincipal {
  border-radius: 5px;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 10px;
  backdrop-filter: blur(40px) brightness(97%);  
}
.formSombra:focus {
    border-color:green;
    outline:0;
    -webkit-box-shadow:0 0 8px green;
    box-shadow:0 0 8px green
}
.btn-guardar{
    --bs-btn-bg: #ffffff;
    --bs-btn-color: #002d60;    
    --bs-btn-border-color: #ced4da;
    --bs-btn-hover-bg: #ffffff;
    --bs-btn-hover-color: #002d60;
    --bs-btn-hover-border-color: #ced4da;          
    --bs-btn-active-bg: #002d60;
    --bs-btn-active-color: #ced4da;
    --bs-btn-active-border-color: #002d60;
    width: 150px;
    height: 50px;
}
.validaCampo {
    color: red;
}
.btn-radio {
    --bs-btn-color: #000;
    --bs-btn-border-color: #ced4da;
    --bs-btn-hover-color: #000;
    --bs-btn-focus-shadow-rgb: 13,202,240;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #002d60;
    --bs-btn-active-border-color: #ced4da;
    --bs-btn-bg: #ffffff;
}
.margenRadio {
    margin-right: 10px;
}
.margenBoton{
    margin-top: 48px;
    margin-left: 5px;
}
</style>