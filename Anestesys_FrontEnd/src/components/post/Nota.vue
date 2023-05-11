<template>
    <div>
        <ul class="nav nav-pills mb-3 text-center" id="">
            <li class="nav-item col-md-6" >
                <button class="btn btn-nav-bar fw-bold active"
                        id="nota"
                        data-bs-toggle="pill"
                        data-bs-target="#notaPost"
                        type="button"
                        aria-selected="true">NOTA POST-ANESTÉSICA</button>
            </li>

            <li class="nav-item col-md-6" >
                <button class="btn btn-nav-bar fw-bold"
                        id="nota"
                        data-bs-toggle="pill"
                        data-bs-target="#caso"
                        type="button"
                        aria-selected="false">CASO OBSTÉTRICO RECIÉN NACIDO</button>
            </li>
        </ul>


        <div class="tab-content col-md-12" id="">
            <!-- Nota Post-Anestésica -->
            <div class="tab-pane fade show active" id="notaPost">
                <div class="col-12 bordePrincipal">
                    <form @submit.prevent="" class="row g-3"> 
                        <h5 class="fw-bold">NOTA POST-ANESTÉSICA</h5>
                        
                        <!-- Técnica de anestesia final -->
                        <div class="col-md-10">                            
                            <label for="" class="form-label fw-bold">Técnica de anestesia final</label>
                            <Multiselect
                                v-model="infoNotaPost.npa_TecAnestFinal"
                                mode="tags"
                                placeholder="Seleccione las técnicas de anestesia"
                                :options="opcionTecnica"
                                :searchable="true"
                                :createTag="true"
                                :class="infoNotaPost.npa_TecAnestFinal != undefined && infoNotaPost.npa_TecAnestFinal != '' ?
                                'form-control border border-success formSombra' : 'form-control'"
                            />
                        </div>

                        <!-- Intubación -->
                        <div class="col-md-2">
                            <label for="" class="form-label col-12 fw-bold">Intubación</label>
                            <input type="radio"
                                   class="btn-check"
                                   name="intubacion"
                                   id="intubacionSi"
                                   autocomplete="off"
                                   value="Sí"
                                   v-model="infoNotaPost.npa_Intubacion"> 
                            <label class="btn btn-radio margenRadio" for="intubacionSi">Sí</label>

                            <input type="radio"
                                   class="btn-check"
                                   name="intubacion"
                                   id="intubacionNo"
                                   autocomplete="off"
                                   value="No"
                                   v-model="infoNotaPost.npa_Intubacion">
                            <label class="btn btn-radio" for="intubacionNo">No</label>
                        </div>

                        <!-- Nota Post-Anestésica -->
                        <div class="col-md-12">
                            <label for="" class="form-label fw-bold">Nota Post-anestésica</label>
                            <textarea class="form-control"
                                      id=""
                                      rows="8"
                                      maxlength="700"
                                      v-model="infoNotaPost.npa_NotaPostAnest"
                                      :class="infoNotaPost.npa_NotaPostAnest != undefined && infoNotaPost.npa_NotaPostAnest != '' ?
                                        'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>

                        <hr/>

                        <h5 class="fw-bold">SIGNOS VITALES AL EGRESO DEL QUIRÓFANO</h5>

                        <!-- TA -->
                        <div class="col-md-2 fw-bold">
                            <label for="" class="form-label">TA</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoNotaPost.signVitEgQx_TA"
                                   :class="infoNotaPost.signVitEgQx_TA != undefined && infoNotaPost.signVitEgQx_TA != '' ?
                                        'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- FC -->
                        <div class="col-md-2 fw-bold">
                            <label for="" class="form-label">FC</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoNotaPost.signVitEgQx_FC"
                                   :class="infoNotaPost.signVitEgQx_FC != undefined && infoNotaPost.signVitEgQx_FC != '' ?
                                        'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- FR -->
                        <div class="col-md-2 fw-bold">
                            <label for="" class="form-label">FR</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoNotaPost.signVitEgQx_FR"
                                   :class="infoNotaPost.signVitEgQx_FR != undefined && infoNotaPost.signVitEgQx_FR != '' ?
                                        'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Temperatura -->
                        <div class="col-md-2 fw-bold">
                            <label for="" class="form-label">Temperatura</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoNotaPost.signVitEgQx_Temperatura"
                                   :class="infoNotaPost.signVitEgQx_Temperatura != undefined && infoNotaPost.signVitEgQx_Temperatura != '' ?
                                        'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Pulso -->
                        <div class="col-md-2 fw-bold">
                            <label for="" class="form-label">Pulso</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoNotaPost.signVitEgQx_Pulso"
                                   :class="infoNotaPost.signVitEgQx_Pulso != undefined && infoNotaPost.signVitEgQx_Pulso != '' ?
                                        'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- SpO2 -->
                        <div class="col-md-2 fw-bold">
                            <label for="" class="form-label">SpO2</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoNotaPost.signVitEgQx_SpO2"
                                   :class="infoNotaPost.signVitEgQx_SpO2 != undefined && infoNotaPost.signVitEgQx_SpO2 != '' ?
                                        'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- El paciente pasa a -->
                        <div class="col-md-8 fw-bold">
                            <label for="inputState" class="form-label">El paciente pasa a</label>
                            <select id="inputState"                            
                                    class="form-select"
                                    v-model="infoNotaPost.signVitEgQx_EgresoPac"
                                    :class="infoNotaPost.signVitEgQx_EgresoPac != undefined && infoNotaPost.signVitEgQx_EgresoPac != '' ?
                                        'form-control border border-success formSombra' : 'form-control'">
                                <option></option>
                                <option>Recuperación - Quirofano</option>
                                <option>Recuperación - Casa</option>
                                <option>Recuperación - Piso</option>
                                <option>Unidad de cuidados intermedia</option>
                                <option>Unidad de cuidados intensivos</option>
                                <option>Unidad de cuidados intensivos pediátricos</option>
                                <option>Unidad de cuidados intensivos neonatales</option>
                                <option>Traslado a otra unidad hospitalaria</option>                    
                            </select>
                        </div>  
                        
                        <div class="col-md-2"></div>
                        <!-- Botón Guardar/Actualizar -->
                        <div class="col-md-2 alinea-boton">                            
                            <template v-if="btnActualizarNotaP === false">
                                <button data-bs-toggle="tab" 
                                        type="submit"
                                        class="btn btn-guardar-info fw-bold"
                                        @click="cambiarUpdateNota"
                                        > GUARDAR </button>
                            </template>
                            <template v-else>
                                <button data-bs-toggle="tab" 
                                        type="submit"
                                        class="btn btn-guardar-info fw-bold"
                                        @click="postAnestStore.updateNotaPA(infoNotaPost, preIdStore.pacienteID._id)"
                                        > ACTUALIZAR </button> 
                            </template>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Caso Obstétrico Recién Nacido -->
            <div class="tab-pane fade" id="caso">
                <div class="col-12 bordePrincipal largoContenedor">
                    <form @submit.prevent="" class="row g-3">
                        <!-- Número de productos -->
                        <div class="col-md-4">
                            <label for="" class="form-label">Número de productos</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoNotaPost.casoObsRecNac_NumProd">
                        </div>

                        <!-- Datos bebé # -->
                        <div class="col-md-12">
                            <fieldset class="bordeScheduler">
                                <legend class="bordeScheduler">Datos bebé #</legend>
                                <div class="row g-3">
                                    <!-- Género -->
                                    <div class="col-md-4">
                                        <label for="" class="form-label col-12">Género</label>
                                        <input type="radio"
                                               class="btn-check"
                                               name="genero"
                                               id="masculino"
                                               autocomplete="off"
                                               v-model="infoNotaPost.casoObsRecNac_Genero">
                                        <label class="btn btn-radio margenRadio" for="masculino">Masculino</label>

                                        <input type="radio"
                                               class="btn-check"
                                               name="genero"
                                               id="femenino"
                                               autocomplete="off"
                                               v-model="infoNotaPost.casoObsRecNac_Genero">
                                        <label class="btn btn-radio" for="femenino">Femenino</label>                            
                                    </div>

                                    <!-- Hora de Nacimiento -->
                                    <div class="col-md-4">
                                        <label for="" class="form-label">Hora de Nacimiento</label>
                                        <input type="time"
                                               class="form-control"
                                               id="horaNacimiento"
                                               v-model="infoNotaPost.casoObsRecNac_HrNacimiento">
                                    </div>

                                    <!-- Alumbramiento -->
                                    <div class="col-md-4">
                                        <label for="" class="form-label">Alumbramiento</label>
                                        <input type="text"
                                               class="form-control"
                                               id=""
                                               v-model="infoNotaPost.casoObsRecNac_Alumbramiento">
                                    </div>

                                    <!-- Apgar 1 min -->
                                    <div class="col-md-4">
                                        <label for="" class="form-label">Apgar 1 min</label>
                                        <input type="text"
                                               class="form-control"
                                               id=""
                                               v-model="infoNotaPost.casoObsRecNac_Apgar1">
                                    </div>

                                    <!-- Apgar 5 min -->
                                    <div class="col-md-4">
                                        <label for="" class="form-label">Apgar 5 min</label>
                                        <input type="text"
                                               class="form-control"
                                               id=""
                                               v-model="infoNotaPost.casoObsRecNac_Apgar5">
                                    </div>

                                    <!-- Capurro -->
                                    <div class="col-md-4">
                                        <label for="" class="form-label">Capurro</label>
                                        <input type="text"
                                               class="form-control"
                                               id=""
                                               v-model="infoNotaPost.casoObsRecNac_Capurro">
                                    </div>

                                    <!-- Peso (gm) -->
                                    <div class="col-md-4">
                                        <label for="" class="form-label">Peso (gm)</label>
                                        <input type="text"
                                               class="form-control"
                                               id=""
                                               v-model="infoNotaPost.casoObsRecNac_Peso">
                                    </div>

                                    <!-- Talla (cm) -->
                                    <div class="col-md-4">
                                        <label for="" class="form-label">Talla (cm)</label>
                                        <input type="text"
                                               class="form-control"
                                               id=""
                                               v-model="infoNotaPost.casoObsRecNac_Talla">
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import type { regNotaPost } from "@/interfaces/regPostAnest";
import { defineComponent } from "vue";
import { usePostAnestStore } from "../../stores/postAnest-store";
import { usePreIdStore } from "@/stores/preId-store";
import Multiselect from '@vueform/multiselect';

const postAnestStore = usePostAnestStore();
const preIdStore = usePreIdStore();

export default defineComponent({
    components: {
        Multiselect
    },

    data() {
        return{
            infoNotaPost: {} as regNotaPost,
            postAnestStore,
            preIdStore,

            btnActualizarNotaP:false,

            opcionTecnica: ['Local','Sedación', 'General balanceada', 'TIVA (Anestesia total intravenosa)', 'Multimodal', 'Bloqueo mixto', 'Bloqueo peridural lumbar',
                        'Bloqueo peridural caudal', 'Bloqueo espinal', 'Bloqueo de plexo', 'Bloqueo troncular', 'Bloqueo peridural torácico',
                        'Bloqueo peridural cervical', 'Libre de opioides']
        }
    },

    mounted: function() {
        this.infoNotaPost.npa_Intubacion = "No";
    },

    methods: {
        cambiarUpdateNota() {
            this.btnActualizarNotaP=true

            // Método Guardar
            postAnestStore.saveNotaPA(this.infoNotaPost, preIdStore.pacienteID._id);
        }
    }
 })
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>
.bordePrincipal {
  border-radius: 5px;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 55px;
  background-color: rgba(232, 234, 236, 0.6);
}
.margenRadio {
    margin-right: 10px;
}
fieldset.bordeScheduler {
    border: 1px groove #ddd !important;
    padding: 0 1.4em 1.4em 1.4em !important;
    margin: 0 0 1.5em 0 !important;
    -webkit-box-shadow:  0px 0px 0px 0px #000;
            box-shadow:  0px 0px 0px 0px #000;
}
legend.bordeScheduler {
    font-size: 1.2em !important;
    font-weight: bold !important;
    text-align: left !important;
    width:auto;
    padding:0 10px;
    border-bottom:none;
}
.largoContenedor{
    height: 576px
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
    height: auto;
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
.formSombra:focus{
    border-color:#6BD99B;
    outline:0;
    -webkit-box-shadow:0 0 8px #6BD99B;
    box-shadow:0 0 8px #6BD99B
}
.alinea-boton{
    text-align: end;
    align-self: flex-end;
}
.border-success {
    --bs-border-opacity: 1;
    border-color: #6BD99B !important;
}

h5{
    color: #002D60;
    margin-bottom: 10px;    
}
</style>