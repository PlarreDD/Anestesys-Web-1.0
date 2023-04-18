<template>
    <div>
        <ul class="nav nav-pills mb-3 text-center" id="">
            <li class="nav-item col-md-6" >
                <button class="btn btn-outline-secondary fw-bold active"
                        id="nota"
                        data-bs-toggle="pill"
                        data-bs-target="#notaPost"
                        type="button"
                        aria-selected="true">NOTA POST-ANESTÉSICA</button>
            </li>

            <li class="nav-item col-md-6" >
                <button class="btn btn-outline-secondary fw-bold"
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
                    <form class="row g-3">    
                        <!-- Técnica de anestesia final -->
                        <div class="col-md-9">
                            <label for="" class="form-label">Técnica de anestesia final</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoNotaPost.npa_TecAnestFinal"> 
                        </div>

                        <!-- Intubación -->
                        <div class="col-md-3">
                            <label for="" class="form-label col-12">Intubación</label>
                            <input type="radio"
                                   class="btn-check"
                                   name="intubacion"
                                   id="intubacionSi"
                                   autocomplete="off"
                                   v-model="infoNotaPost.npa_Intubacion"> 
                            <label class="btn btn-radio margenRadio" for="intubacionSi">Sí</label>

                            <input type="radio"
                                   class="btn-check"
                                   name="intubacion"
                                   id="intubacionNo"
                                   autocomplete="off"
                                   v-model="infoNotaPost.npa_Intubacion">
                            <label class="btn btn-radio" for="intubacionNo">No</label>
                        </div>

                        <!-- Nota Post-Anestésica -->
                        <div class="col-md-12">
                            <label for="" class="form-label">Nota Post-Anestésica</label>
                            <textarea class="form-control"
                                      id=""
                                      rows="8"
                                      v-model="infoNotaPost.npa_NotaPostAnest">
                            </textarea>
                        </div>

                        <h5 class="">SIGNOS VITALES AL EGRESO DEL QUIRÓFANO</h5>

                        <!-- TA -->
                        <div class="col-md-2">
                            <label for="" class="form-label">TA</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoNotaPost.signVitEgQx_TA"> 
                        </div>

                        <!-- FC -->
                        <div class="col-md-2">
                            <label for="" class="form-label">FC</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoNotaPost.signVitEgQx_FC"> 
                        </div>

                        <!-- FR -->
                        <div class="col-md-2">
                            <label for="" class="form-label">FR</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoNotaPost.signVitEgQx_FR"> 
                        </div>

                        <!-- Temperatura -->
                        <div class="col-md-2">
                            <label for="" class="form-label">Temperatura</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoNotaPost.signVitEgQx_Temperatura"> 
                        </div>

                        <!-- Pulso -->
                        <div class="col-md-2">
                            <label for="" class="form-label">Pulso</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoNotaPost.signVitEgQx_Pulso"> 
                        </div>

                        <!-- SpO2 -->
                        <div class="col-md-2">
                            <label for="" class="form-label">SpO2</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoNotaPost.signVitEgQx_SpO2"> 
                        </div>

                        <!-- El paciente pasa a -->
                        <div class="col-md-6">
                            <label for="inputState" class="form-label">El paciente pasa a</label>
                            <select id="inputState"                            
                                    class="form-select"
                                    v-model="infoNotaPost.signVitEgQx_EgresoPac">
                                <option selected>Seleccione...</option>
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
                    </form>
                </div>
            </div>

            <!-- Caso Obstétrico Recién Nacido -->
            <div class="tab-pane fade" id="caso">
                <div class="col-12 bordePrincipal largoContenedor">
                    <form class="row g-3">
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

export default defineComponent({
    data() {
        return{
            infoNotaPost: {} as regNotaPost,
        }
    },
 })
</script>

<style scoped>
.bordePrincipal {
  border-radius: 5px;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 10px;
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
</style>