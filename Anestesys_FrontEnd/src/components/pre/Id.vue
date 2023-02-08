<template>

    <div class="col-12 borderPrincipal">  
        <form @submit.prevent="obtenerDatos" class="row g-3">  

            <div class="col-md-4">
                <label for="" class="form-label">Número de Expediente</label>
                <input type="text" v-model="id.numExpediente" id="numExpediente"
                :class="id.numExpediente.length != 0 ? 'form-control border border-success formSombra' : 'form-control'">
                <div class="invisible" id="validaNumExp">
                    Escriba el número de expediente
                </div>                
            </div>
            <div class="col-md-6">
                <label for="" class="form-label">Nombre del Paciente</label>
                <input type="text" @keyup.capture="enviarDatos" v-model="id.nombrePaciente" id="nombrePaciente" 
                :class="id.nombrePaciente.length != 0 ? 'form-control border border-success formSombra' : 'form-control'">
                <div class="invisible" id="validaNomPac">
                    Escriba el nombre del paciente
                </div>        
            </div>
            <div class="col-md-2">
                <label for="" class="form-label">Edad</label>
                <input type="text" class="form-control" v-model="id.edadPaciente" 
                :class="id.edadPaciente != 0 ? 'form-control border border-success formSombra' : 'form-control'">  
            </div>

            <div class="col-md-3">
                <label for="" class="form-label">Fecha de Nacimiento</label>
                <input type="date" class="form-control" v-model="id.fechaNacimiento"
                :class="id.fechaNacimiento != Date ? 'form-control border border-success formSombra' : 'form-control'">
            </div>
            <div class="col-md-3">
                <label for="" class="form-label">Habitación</label>
                <input type="text" class="form-control" v-model="id.habitacion"
                :class="id.habitacion.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
            </div>            
            <div class="col-md-3">
                <label for="" class="form-label col-12">Género</label>

                <input type="radio" class="btn-check" name="genero" id="masculino" autocomplete="off" value="Masculino" v-model="id.genero">
                <label class="btn btn-outline-info margenRadio" for="masculino">Masculino</label>

                <input type="radio" class="btn-check" name="genero" id="femenino" autocomplete="off" value="Femenino" v-model="id.genero">
                <label class="btn btn-outline-info" for="femenino">Femenino</label>
            </div>             

            <div class="col-md-3">
                <label for="" class="form-label">Fecha de Ingreso</label>
                <input type="date" class="form-control" v-model="id.fechaIngreso"
                :class="id.fechaIngreso != Date ? 'form-control border border-success formSombra' : 'form-control'">
            </div>
          
            <div class="col-md-8">
                <label for="" class="form-label">Diagnóstico</label>
                <textarea class="form-control" v-model="id.diagnostico" rows="3" 
                :class="id.diagnostico.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
            </div>
            <div class="col-md-4">
                <label for="" class="form-label col-12">Tipo de Cirugía</label>

                <input type="radio" class="btn-check" name="tipoCirugia" id="mayor" autocomplete="off" value="Mayor" v-model="id.tipoCirugia">
                <label class="btn btn-outline-info margenRadio" for="mayor">Mayor</label>

                <input type="radio" class="btn-check" name="tipoCirugia" id="menor" autocomplete="off" value="Menor" v-model="id.tipoCirugia">
                <label class="btn btn-outline-info margenRadio" for="menor">Menor</label>

                <input type="radio" class="btn-check" name="tipoCirugia" id="ambulatoria" autocomplete="off" value="Ambulatoria" v-model="id.tipoCirugia">
                <label class="btn btn-outline-info" for="ambulatoria">Ambulatoria</label>
            </div>           

            <div class="col-md-6">
                <label for="" class="form-label">Cirugía</label>
                <input type="text" class="form-control" @keyup.capture="enviarDatos" v-model="id.cirugia"
                :class="id.cirugia.length != 0 ? 'form-control border border-success formSombra' : 'form-control'">
            </div>
            <div class="col-md-3">
                <label for="" class="form-label">Fecha de Cirugía</label>
                <input type="date" class="form-control" v-model="id.fechaCirugia"
                :class="id.fechaCirugia != Date ? 'form-control border border-success formSombra' : 'form-control'">
            </div>    
            <div class="col-md-3">
                <label for="" class="form-label">Hora de Cirugía</label>
                <input type="time" class="form-control" v-model="id.horaCirugia"
                :class="id.horaCirugia.length != 0 ? 'form-control border border-success formSombra' : 'form-control'">
            </div>

            <div class="col-md-6">
                <label for="" class="form-label">Cirujano</label>
                <input type="text" class="form-control" @keyup.capture="enviarDatos" v-model="id.cirujano"
                :class="id.cirujano.length != 0 ? 'form-control border border-success formSombra' : 'form-control'">
            </div>
            <div class="col-md-6">
                <label for="" class="form-label">Anestesiólogo</label>
                <input type="text" class="form-control" v-model="id.anestesiologo"
                :class="id.anestesiologo.length != 0 ? 'form-control border border-success formSombra' : 'form-control'">
            </div>
            <div class="col-md-6">
                <label for="" class="form-label">Anestesiólogo VPA</label>
                <input type="text" class="form-control" v-model="id.anestesiologoVPA"
                :class="id.anestesiologoVPA.length != 0 ? 'form-control border border-success formSombra' : 'form-control'">
            </div>    
            <div class="col-auto">
                <button class="btn btn-warning fw-bold" href="#pre-valoracion" data-bs-toggle="tab" type="submit">Siguiente</button>
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
            this.$emit('recibe-datos', this.id.nombrePaciente, this.id.cirujano, this.id.cirugia)            
        },
                
    }
})
</script>

<style scoped>
.borderPrincipal {
  border-radius: 5px;
  box-shadow: 3px 3px 7px;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 10px;
  background-color: rgba(225, 225, 225, 0.6);
}
.margenRadio{
    margin-right: 10px;
}
.formSombra:focus{
    border-color:green;
    outline:0;
    -webkit-box-shadow:inset 0 1px 1px #000,0 0 8px green;
    box-shadow:inset 0 1px 1px #000,0 0 8px green
}
.validaCampo{
    color: red;
}
</style>