<template>
    <div>
        <ul class="nav nav-pills mb-3 text-center" id="">        
            <li class="nav-item col-md-3">
                <button class="btn btn-nav-bar fw-bold active" id="plan" data-bs-toggle="pill" data-bs-target="#informacion" type="button" aria-selected="true">INFORMACIÓN</button>
            </li>
            <li class="nav-item col-md-2" >
                <button class="btn btn-nav-bar fw-bold" id="plan" data-bs-toggle="pill" data-bs-target="#demograficos" type="button" aria-selected="false">DATOS DEMOGRÁFICOS</button>
            </li>
        </ul>

        <div class="tab-content col-md-12" id="">
            <div class="tab-pane fade show active" id="informacion">
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
                            <label for="" class="form-label fw-bold">Núm de episodio</label>
                            <input type="text" class="form-control" v-model="id.numEpisodio"
                            :class="id.numEpisodio != undefined ? 'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold"> Fecha de Nacimiento </label>
                            <input type="date"
                                class="form-control"
                                v-model="id.fechaNac"
                                :class="id.fechaNac != undefined ? 'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <div class="col-md-2">
                            <label for="" class="form-label fw-bold"> Edad </label>
                            <input type="text"
                                class="form-control"
                                v-model="id.edadPaciente"
                                :class="id.edadPaciente != undefined ? 'form-control border border-success formSombra' : 'form-control'">
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
                                :class="id.fechaIn != undefined ? 'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <div class="col-md-2">
                            <label for="" class="form-label fw-bold">Habitación</label>
                            <input type="text" class="form-control" v-model="id.habitacion"
                            :class="id.habitacion != undefined ? 'form-control border border-success formSombra' : 'form-control'">                
                        </div>
                    
                        <hr />

                        <div class="col-md-8">
                            <label for="" class="form-label fw-bold"> Diagnóstico </label>
                            <textarea class="form-control"
                                    rows="3"
                                    v-model="id.diagnostico"
                                    :class="id.diagnostico != undefined ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
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
                            <label for="" class="form-label fw-bold">CIE-10</label>
                            <el-select v-model="id.cie10" filterable :class="id.cie10 != undefined ? 'form-control-select border border-success formSombra' : 'form-control-select'">
                                <el-option
                                    v-for="option in id.options"
                                    :key="option.value"
                                    :label="option.label"
                                    :value="option.value">
                                </el-option>
                            </el-select>                   
                        </div>

                        <div class="col-md-6">
                            <label for="" class="form-label fw-bold">Cirugía</label>
                            <textarea type="text" class="form-control" rows="3" @keyup.capture="enviarDatos" v-model="id.cirugia"
                            :class="id.cirugia != undefined ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
                        </div>
                        <div class="col-md-6">
                            <label for="" class="form-label fw-bold">CIE-9</label>
                            <el-select v-model="id.cie9" filterable :class="id.cie9 != undefined ? 'form-control-select border border-success formSombra' : 'form-control-select'">
                                <el-option
                                    v-for="option in id.options"
                                    :key="option.value"
                                    :label="option.label"
                                    :value="option.value">
                                </el-option>
                            </el-select>
                        </div>

                        <div class="col-md-6"></div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold"> Fecha de Cirugía </label>
                            <input type="date"
                                class="form-control"
                                v-model="id.fechaCx"
                                :class="id.fechaCx != undefined ? 'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold"> Hora de Cirugía </label>
                            
                            <input type="time"
                                class="form-control"
                                v-model="id.hrCx"
                                :class="id.hrCx != undefined ? 'form-control border border-success formSombra' : 'form-control'">
                        </div>
                        
                        <hr />

                        <div class="col-md-6">
                            <label for="" class="form-label fw-bold"> Cirujano </label>
                            <input type="text"
                                class="form-control"
                                @keyup.capture="enviarDatos"
                                v-model="id.cirujano"
                                :class="id.cirujano != undefined ? 'form-control border border-success formSombra' : 'form-control'">
                        </div>
                        
                        <div class="col-md-6">
                            <label for="" class="form-label fw-bold"> Anestesiólogo </label>
                            <input type="text" 
                                class="form-control"
                                v-model="id.anestesiologo"
                                :class="id.anestesiologo != undefined ? 'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <div class="col-md-6">
                            <label for="" class="form-label fw-bold"> Anestesiólogo VPA </label>
                            <input type="text"
                                class="form-control"
                                v-model="id.anestesiologoVPA"
                                :class="id.anestesiologoVPA != undefined ? 'form-control border border-success formSombra' : 'form-control'">
                        </div>
                        
                        <div class="col-md-4"></div>
                        <div class="col-md-1 margenBoton">
                            <button href="#pre-valoracion" 
                                    data-bs-toggle="tab" 
                                    type="submit"
                                    class="btn btn-guardar fw-bold"
                                    @click="preIdStore.savePreId(id.numExped,
                                                                        id.nomPaciente,
                                                                        id.numEpisodio,
                                                                        id.fechaNac,
                                                                        id.edadPaciente,
                                                                        id.genero,
                                                                        id.fechaIn,
                                                                        id.habitacion,
                                                                        id.diagnostico,
                                                                        id.tipoCx,
                                                                        id.cie10,
                                                                        id.cie9,
                                                                        id.cirugia,
                                                                        id.fechaCx,
                                                                        id.hrCx,
                                                                        id.cirujano,
                                                                        id.anestesiologo,
                                                                        id.anestesiologoVPA)"> GUARDAR </button>
                                    <!-- :disabled="id.numExpediente != '' && id.nombrePaciente != '' ? false : true" -->
                        </div>
                    </form>
                </div>
            </div>

            <div class="tab-pane fade" id="demograficos">
                <div class="col-12 borderPrincipal">  
                    <form @submit.prevent="obtenerDatos" class="row g-3">                                

                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Nacionalidad</label>
                            <el-select v-model="id.nacionalidad" filterable 
                                :class="id.nacionalidad != undefined ? 'form-control-select border border-success formSombra' : 'form-control-select'">
                                <el-option
                                    v-for="nacionalidad in id.opcionNacionalidad"
                                    :value="nacionalidad.value">
                                </el-option>
                            </el-select>                   
                        </div>                        
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">CURP</label>
                            <input type="text" class="form-control" v-model="id.CURP"
                            :class="id.CURP != undefined ? 'form-control border border-success formSombra' : 'form-control'">
                        </div>                        
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">FOLIO ID</label>
                            <input type="text" class="form-control" v-model="id.folioID"
                            :class="id.folioID != undefined ? 'form-control border border-success formSombra' : 'form-control'">                
                        </div>  
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Estado de Nacimiento</label>
                            <el-select v-model="id.estNacimiento" filterable 
                                :class="id.estNacimiento != undefined ? 'form-control-select border border-success formSombra' : 'form-control-select'">
                                <el-option
                                    v-for="estadoNacimiento in id.opcionEstadoNacimiento"
                                    :value="estadoNacimiento.value">
                                </el-option>
                            </el-select>                   
                        </div>                               

                        <h5 class="fw-bold">DATOS DEL DOMICILIO</h5>

                        <div class="col-md-4">
                            <label for="" class="form-label fw-bold">Estado de residencia</label>
                            <el-select v-model="id.estResidencia" filterable 
                                :class="id.estResidencia != undefined ? 'form-control-select border border-success formSombra' : 'form-control-select'">
                                <el-option
                                    v-for="option in id.options"
                                    :key="option.value"
                                    :label="option.label"
                                    :value="option.value">
                                </el-option>
                            </el-select>                   
                        </div>      

                        <div class="col-md-4">
                            <label for="" class="form-label fw-bold">Alcaldía/Municipio</label>
                            <el-select v-model="id.alcaldia" filterable :class="id.alcaldia != undefined ? 'form-control-select border border-success formSombra' : 'form-control-select'">
                                <el-option
                                    v-for="option in id.options"
                                    :key="option.value"
                                    :label="option.label"
                                    :value="option.value">
                                </el-option>
                            </el-select>                   
                        </div>   

                        <div class="col-md-4">
                            <label for="" class="form-label fw-bold">Colonia/Localidad</label>
                            <el-select v-model="id.colonia" filterable :class="id.colonia != undefined ? 'form-control-select border border-success formSombra' : 'form-control-select'">
                                <el-option
                                    v-for="option in id.options"
                                    :key="option.value"
                                    :label="option.label"
                                    :value="option.value">
                                </el-option>
                            </el-select>                   
                        </div>   
                        
                        <div class="col-md-10"></div>
                        <div class="col-md-1 margenBoton">
                            <button href="#pre-valoracion" 
                                    data-bs-toggle="tab" 
                                    type="submit"
                                    class="btn btn-guardar fw-bold"> GUARDAR </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    </div>    
</template>

<script lang="ts">
import type { regIdPaciente } from "@/interfaces/regPreAnest"
import { defineComponent } from "vue"
import { ElSelect, ElOption } from 'element-plus';
import { usePreIdStore } from "../../stores/preId-store";

const preIdStore = usePreIdStore();

export default defineComponent({
    components: { ElSelect, ElOption },

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
            preIdStore,
        }
    },

    methods: {
        obtenerDatos() {
            this.$emit("validar", this.id.numExped, this.id.nomPaciente)
            // console.log(this.id.numEpisodio)
        },
        enviarDatos() {
            this.$emit('recibe-datos', this.id.numExped, this.id.nomPaciente, this.id.cirujano, this.id.cirugia)
        },

        // save(){
        //     // preIdStore.savePreId();
        // },

        
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
    --bs-btn-active-color: #ffffff;
    --bs-btn-active-border-color: #002d60;
    width: 150px;
    height: 50px;
    margin-top: 145px;
}
.btn-nav-bar{
    --bs-btn-bg: #fff;
    --bs-btn-color: #002D60;    
    --bs-btn-border-color: #fff;
    --bs-btn-hover-bg: #A0A6B2;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-border-color: #A0A6B2;          
    --bs-btn-active-bg: #A0A6B2;
    --bs-btn-active-color: #fff;
    --bs-btn-active-border-color: #A0A6B2;
    width: 214px;
    height: auto;
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
h5{
    color: #002D60;
    margin-top: 60px;
    margin-bottom: 0px;
}
.margenRadio {
    margin-right: 10px;
}
.margenBoton{
    margin-top: 48px;
    margin-left: 5px;
}
hr{
    margin-top: 38px;
}
.form-control-select {
    display: block;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.3rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.el-select {
    --el-select-border-color-hover: var(--el-border-color-hover);
    --el-select-disabled-border: var(--el-disabled-border-color);
    --el-select-font-size: var(--el-font-size-base);
    --el-select-close-hover-color: var(--el-text-color-secondary);
    --el-select-input-color: var(--el-text-color-placeholder);
    --el-select-multiple-input-color: var(--el-text-color-regular);
    --el-select-input-focus-border-color: var(--el-disabled-border-color); 
    --el-select-input-font-size: 14px;
}
.el-select-dropdown__item.selected {
    color: #000;
    font-weight: 700;
}
.el-input__inner {
    --el-input-inner-height: calc(var(--el-input-height, 32px) - 2px);
    width: 100%;
    flex-grow: 1;
    color: #000;
    font-size: inherit;
    height: var(--el-input-inner-height);
    line-height: var(--el-input-inner-height);
    padding: 0;
    outline: 0;
    border: none;
    background: 0 0;
    box-sizing: border-box;
}
</style>