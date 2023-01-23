<template>

    <div :class="id.numExpediente.length != 0 || id.nombrePaciente.length != 0 ? 'divColor col-12 divBorder' : 'col-12 divBorder'">  
        <form @submit.prevent="getData" class="row g-3">  

            <div class="col-md-4">
                <label for="" class="form-label">Número de Expediente</label>
                <input type="text" class="form-control" v-model="id.numExpediente" id="numExpediente">                
            </div>
            <div class="col-md-6">
                <label for="" class="form-label">Nombre del Paciente</label>
                <input type="text" class="form-control" v-model="id.nombrePaciente" id="nombrePaciente"> 
            </div>
            <div class="col-md-2">
                <label for="" class="form-label">Edad</label>
                <input type="number" class="form-control" v-model="id.edadPaciente">  
            </div>

            <div class="col-md-3">
                <label for="" class="form-label">Fecha de Nacimiento</label>
                <input type="date" class="form-control" v-model="id.fechaNacimiento">
            </div>
            <div class="col-md-3">
                <label for="" class="form-label">Habitación</label>
                <input type="text" class="form-control" v-model="id.habitacion"> 
            </div>            
            <div class="col-md-3">
                <label for="" class="form-label col-12">Género</label>

                <input type="radio" class="btn-check" name="genero" id="masculino" autocomplete="off">
                <label class="btn btn-outline-info radioMargin" for="masculino">Masculino</label>

                <input type="radio" class="btn-check" name="genero" id="femenino" autocomplete="off">
                <label class="btn btn-outline-info" for="femenino">Femenino</label>
            </div>             

            <div class="col-md-3">
                <label for="" class="form-label">Fecha de Ingreso</label>
                <input type="date" class="form-control" v-model="id.fechaIngreso">
            </div>
          
            <div class="col-md-8">
                <label for="" class="form-label">Diagnóstico</label>
                <textarea class="form-control" v-model="id.diagnostico" rows="3"></textarea>
            </div>
            <div class="col-md-4">
                <label for="" class="form-label col-12">Tipo de Cirugía</label>

                <input type="radio" class="btn-check" name="tipoCirugia" id="mayor" autocomplete="off">
                <label class="btn btn-outline-info radioMargin" for="mayor">Mayor</label>

                <input type="radio" class="btn-check" name="tipoCirugia" id="menor" autocomplete="off">
                <label class="btn btn-outline-info radioMargin" for="menor">Menor</label>

                <input type="radio" class="btn-check" name="tipoCirugia" id="ambulatoria" autocomplete="off">
                <label class="btn btn-outline-info" for="ambulatoria">Ambulatoria</label>
            </div>           

            <div class="col-md-6">
                <label for="" class="form-label">Cirugía</label>
                <input type="text" class="form-control" v-model="id.cirugia">
            </div>
            <div class="col-md-3">
                <label for="" class="form-label">Fecha de Cirugía</label>
                <input type="date" class="form-control" v-model="id.fechaCirugia">
            </div>    
            <div class="col-md-3">
                <label for="" class="form-label">Hora de Cirugía</label>
                <input type="time" class="form-control" v-model="id.horaCirugia">
            </div>

            <div class="col-md-6">
                <label for="" class="form-label">Cirujano</label>
                <input type="text" class="form-control" v-model="id.cirujano">
            </div>
            <div class="col-md-6">
                <label for="" class="form-label">Anestesiólogo</label>
                <input type="text" class="form-control" v-model="id.anestesiologo">
            </div>
            <div class="col-md-6">
                <label for="" class="form-label">Anestesiólogo VPA</label>
                <input type="text" class="form-control" v-model="id.anestesiologoVPA">
            </div>    
            <div class="col-auto">
                <button class="btn btn-warning fw-bold" href="#pre-valoracion" data-bs-toggle="tab" type="submit">Siguiente</button>
            </div>                            
        </form>        
    </div>

</template>

<style scoped>
.divBorder {
  border-radius: 13px;
  box-shadow: 3px 3px 7px #ccc;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 10px;
}
.radioMargin{
    margin-right: 10px;
}
.divColor {
    background: rgb(224, 224, 224);
}
</style>

<script lang="ts">

import { defineComponent } from "vue"

import Pre from "../../views/pre/PreAnestesicoView.vue";

export default defineComponent({
    components:{
        Pre
    },
    data: () => ({
        id: {
            numExpediente: "", 
            nombrePaciente: "", 
            edadPaciente: 0, 
            fechaNacimiento: Date, 
            habitacion: 0, 
            genero: CharacterData,
            fechaIngreso: Date, 
            diagnostico: "", 
            tipoCirugia: "", 
            cirugia: "", 
            fechaCirugia: Date, 
            horaCirugia: TimeRanges,
            cirujano: "", 
            anestesiologo: "", 
            anestesiologoVPA:""
        }        
    }),
    methods: {
        getData() {
            this.$emit("validar", this.id.numExpediente, this.id.nombrePaciente)
        }
    }
})
</script>