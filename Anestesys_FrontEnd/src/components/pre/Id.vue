<template>

    <div class="col-12 borderPrincipal">  
        <form @submit.prevent="obtenerDatos" class="row g-3">  

            <div class="col-md-4">
                <label for="" class="form-label fw-bold">Número de Expediente</label>
                <input type="text" v-model="id.numExpediente" id="numExpediente" pattern="[0-9]{8}" title="Sólo números, ocho dígitos"
                :class="id.numExpediente != '' ? 'form-control border border-success formSombra' : 'form-control'">
                <div class="invisible" id="validaNumExp">
                    Escriba el número de expediente
                </div>                
            </div>
            <div class="col-md-6">
                <label for="" class="form-label fw-bold">Nombre del Paciente</label>
                <input type="text" @keyup.capture="enviarDatos" v-model="id.nombrePaciente" id="nombrePaciente" 
                :class="id.nombrePaciente != '' ? 'form-control border border-success formSombra' : 'form-control'">
                <div class="invisible" id="validaNomPac">
                    Escriba el nombre del paciente
                </div>        
            </div>
            <div class="col-md-2">
                <label for="" class="form-label fw-bold">Edad</label>
                <input type="text" class="form-control" v-model="id.edadPaciente" 
                :class="id.edadPaciente != 0 ? 'form-control border border-success formSombra' : 'form-control'">  
            </div>

            <div class="col-md-3">
                <label for="" class="form-label fw-bold">Fecha de Nacimiento</label>
                <input type="date" class="form-control" v-model="id.fechaNacimiento"
                :class="id.fechaNacimiento != Date ? 'form-control border border-success formSombra' : 'form-control'">
            </div>
            <div class="col-md-3">
                <label for="" class="form-label fw-bold">Habitación</label>
                <input type="text" class="form-control" v-model="id.habitacion"
                :class="id.habitacion != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
            </div>            
            <div class="col-md-3">
                <label for="" class="form-label col-12 fw-bold">Género</label>

                <input type="radio" class="btn-check" name="genero" id="masculino" autocomplete="off" value="Masculino" v-model="id.genero">
                <label class="btn btn-radio margenRadio" for="masculino">Masculino</label>

                <input type="radio" class="btn-check" name="genero" id="femenino" autocomplete="off" value="Femenino" v-model="id.genero">
                <label class="btn btn-radio" for="femenino">Femenino</label>
            </div>             

            <div class="col-md-3">
                <label for="" class="form-label fw-bold">Fecha de Ingreso</label>
                <input type="date" class="form-control" v-model="id.fechaIngreso"
                :class="id.fechaIngreso != Date ? 'form-control border border-success formSombra' : 'form-control'">
            </div>
          
            <div class="col-md-8">
                <label for="" class="form-label fw-bold">Diagnóstico</label>
                <textarea class="form-control" v-model="id.diagnostico" rows="3" 
                :class="id.diagnostico != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
            </div>
            <div class="col-md-4">
                <label for="" class="form-label col-12 fw-bold">Tipo de Cirugía</label>

                <input type="radio" class="btn-check" name="tipoCirugia" id="mayor" autocomplete="off" value="Mayor" v-model="id.tipoCirugia">
                <label class="btn btn-radio margenRadio" for="mayor">Mayor</label>

                <input type="radio" class="btn-check" name="tipoCirugia" id="menor" autocomplete="off" value="Menor" v-model="id.tipoCirugia">
                <label class="btn btn-radio margenRadio" for="menor">Menor</label>

                <input type="radio" class="btn-check" name="tipoCirugia" id="ambulatoria" autocomplete="off" value="Ambulatoria" v-model="id.tipoCirugia">
                <label class="btn btn-radio" for="ambulatoria">Ambulatoria</label>
            </div>           

            <div class="col-md-6">
                <label for="" class="form-label fw-bold">Cirugía</label>
                <input type="text" class="form-control" @keyup.capture="enviarDatos" v-model="id.cirugia"
                :class="id.cirugia != '' ? 'form-control border border-success formSombra' : 'form-control'">
            </div>
            <div class="col-md-3">
                <label for="" class="form-label fw-bold">Fecha de Cirugía</label>
                <input type="date" class="form-control" v-model="id.fechaCirugia"
                :class="id.fechaCirugia != Date ? 'form-control border border-success formSombra' : 'form-control'">
            </div>    
            <div class="col-md-3">
                <label for="" class="form-label fw-bold">Hora de Cirugía</label>
                <input type="time" class="form-control" v-model="id.horaCirugia"
                :class="id.horaCirugia.length != 0 ? 'form-control border border-success formSombra' : 'form-control'">
            </div>

            <div class="col-md-6">
                <label for="" class="form-label fw-bold">Cirujano</label>
                <input type="text" class="form-control" @keyup.capture="enviarDatos" v-model="id.cirujano"
                :class="id.cirujano != '' ? 'form-control border border-success formSombra' : 'form-control'">
            </div>
            <div class="col-md-6">
                <label for="" class="form-label fw-bold">Anestesiólogo</label>
                <input type="text" class="form-control" v-model="id.anestesiologo"
                :class="id.anestesiologo != '' ? 'form-control border border-success formSombra' : 'form-control'">
            </div>
            <div class="col-md-6">
                <label for="" class="form-label fw-bold">Anestesiólogo VPA</label>
                <input type="text" class="form-control" v-model="id.anestesiologoVPA"
                :class="id.anestesiologoVPA != '' ? 'form-control border border-success formSombra' : 'form-control'">
            </div>              
            <div class="col-md-6 margenBoton">
                <button href="#pre-valoracion" data-bs-toggle="tab" type="submit"
                :class="id.numExpediente != '' && id.nombrePaciente != '' ? 'btn btn-outline-success fw-bold' : 'btn btn-outline-secondary fw-bold'"
                :disabled="id.numExpediente != '' && id.nombrePaciente != '' ? false : true">Siguiente</button>
            </div>                            
        </form>        
    </div>

</template>

<script lang="ts">

import { defineComponent } from "vue"

export default defineComponent({
    data () {
        return{
            id: {
                numExpediente: "", 
                nombrePaciente: '', 
                edadPaciente: 0, 
                fechaNacimiento: Date, 
                habitacion: "", 
                genero: "",
                fechaIngreso: Date, 
                diagnostico: "", 
                tipoCirugia: "", 
                cirugia: "", 
                fechaCirugia: Date, 
                horaCirugia: "",
                cirujano: "", 
                anestesiologo: "", 
                anestesiologoVPA:""
            }      
        }  
    },
    methods: {
        obtenerDatos() {
            this.$emit("validar", this.id.numExpediente, this.id.nombrePaciente)
        },
        enviarDatos() {
            this.$emit('recibe-datos',this.id.numExpediente, this.id.nombrePaciente, this.id.cirujano, this.id.cirugia)            
        },
                
})
</script>

<style scoped>
.borderPrincipal {
  border-radius: 5px;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 10px;
  background-color: rgba(232, 234, 236, 0.6);
}
.margenRadio {
    margin-right: 10px;
}
.margenBoton{
    margin-top: 48px;
}
.formSombra:focus {
    border-color:green;
    outline:0;
    -webkit-box-shadow:0 0 8px green;
    box-shadow:0 0 8px green
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
</style>