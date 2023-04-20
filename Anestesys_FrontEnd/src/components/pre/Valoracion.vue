<template>
    <div>
        <!-- Barra Navegación Valoración -->
        <ul class="nav nav-pills mb-3 text-center centrar-li" id="">
            <!-- Botón Antecedentes -->
            <li class="nav-item col-md-2" >
                <button class="btn btn-nav-bar fw-bold active"
                        id="valoracion"
                        data-bs-toggle="pill"
                        data-bs-target="#antecedentes"
                        type="button"
                        aria-selected="true"
                        data-title="Antecedentes patológicos y no patológicos"> ANTECEDENTES </button>
            </li>

            <!-- Botón Exploración Física -->
            <li class="nav-item col-md-3" >
                <button class="btn btn-nav-bar fw-bold"
                        id="valoracion"
                        data-bs-toggle="pill"
                        data-bs-target="#exploracion"
                        type="button"
                        aria-selected="false"
                        data-title="Registro de signos vitales"> EXPLORACIÓN FÍSICA </button>
            </li>

            <!-- Botón Vía Aérea -->
            <li class="nav-item col-md-2" >
                <button class="btn btn-nav-bar fw-bold"
                        id="valoracion"
                        data-bs-toggle="pill"
                        data-bs-target="#via"
                        type="button"
                        aria-selected="false"
                        data-title="Valoración de vía aérea y otras escalas"> VÍA AÉREA </button>
            </li>

            <!-- Botón Estudios -->
            <li class="nav-item col-md-2" >
                <button class="btn btn-nav-bar fw-bold"
                        id="valoracion"
                        data-bs-toggle="pill"
                        data-bs-target="#estudios"
                        type="button"
                        aria-selected="false"
                        data-title="Estudios realizados previamente"> ESTUDIOS </button>
            </li>
            
            <!-- Botón Exámenes -->
            <li class="nav-item col-md-2" >
                <button class="btn btn-nav-bar fw-bold"
                id="valoracion"
                data-bs-toggle="pill"
                data-bs-target="#examenes"
                type="button"
                aria-selected="false"
                data-title="Perfil bioquímico"> LABORATORIO </button>
            </li>
        </ul>
                
        <div class="tab-content col-md-12" id="">
            <!-- Div Formulario Antecedentes -->
            <div class="tab-pane fade show active" id="antecedentes">
                <div class="col-12 bordePrincipal">
                    <form @submit.prevent="" class="row g-3">    
                        <h5 class="col-md-12 fw-bold">ANTECEDENTES</h5>                        
                        <!-- Personales patológicos -->
                        <div class="col row">
                            <div class="g-3">
                                <h5 class="col-md-12 fw-bold"> Personales patológicos </h5>
                                <!-- Alergias -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Alergias </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_Alergias"                                              
                                              :class="infoValoracion.antPersPat_Alergias != undefined && infoValoracion.antPersPat_Alergias != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Quirúrgicos -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Quirúrgicos </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_Quirurgicos"
                                              :class="infoValoracion.antPersPat_Quirurgicos != undefined && infoValoracion.antPersPat_Quirurgicos != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>
                                
                                <!-- Endocrinológicos -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Endocrinológicos </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_Endocrinologicos"
                                              :class="infoValoracion.antPersPat_Endocrinologicos != undefined && infoValoracion.antPersPat_Endocrinologicos != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Urológicos -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Urológicos </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_Urologicos"
                                              :class="infoValoracion.antPersPat_Urologicos != undefined && infoValoracion.antPersPat_Urologicos != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Traumáticos -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Traumáticos </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_Traumaticos"
                                              :class="infoValoracion.antPersPat_Traumaticos != undefined && infoValoracion.antPersPat_Traumaticos != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Ortopédicos -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Ortopédicos </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_Ortopedicos"
                                              :class="infoValoracion.antPersPat_Ortopedicos != undefined && infoValoracion.antPersPat_Ortopedicos != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Transfusiones previas -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Transfusiones previas </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_Transfusiones"
                                              :class="infoValoracion.antPersPat_Transfusiones != undefined && infoValoracion.antPersPat_Transfusiones != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Complicaciones anestésicas previas -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Complicaciones anestésicas previas </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_CompAnestPrev"
                                              :class="infoValoracion.antPersPat_CompAnestPrev != undefined && infoValoracion.antPersPat_CompAnestPrev != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>
                                
                                <!-- Estado psiquico -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Estado psíquico </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_EstadoPsiq"
                                              :class="infoValoracion.antPersPat_EstadoPsiq != undefined && infoValoracion.antPersPat_EstadoPsiq != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>
                                
                                <!-- Medicación actual -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Medicación actual </label>
                                    <textarea type="text"
                                              class="form-control"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_MedActual"
                                              :class="infoValoracion.antPersPat_MedActual != undefined && infoValoracion.antPersPat_MedActual != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>
                            </div> 
                        </div>

                        <hr />
                        
                        <!-- No patológicos -->
                        <div class="col row">
                            <div class="g-3">
                                
                                <div class="col-md-12">
                                    <div class="col row">
                                        <div class="col-md-8">
                                            <h5 class="fw-bold"> No patológicos </h5>
                                        </div>
                                        <!-- Botón Guardar/Actualizar -->
                                        <div class="col-md-4">
                                            <template v-if="btnActualizarValoracion === false">
                                                <button data-bs-toggle="tab" 
                                                    type="submit"
                                                    class="btn btn-guardar-datos fw-bold"                                            
                                                    @click="cambiarUpdateValoracion"> GUARDAR </button> 
                                            </template>
                                            <template v-else>
                                                <button data-bs-toggle="tab" 
                                                    type="submit"
                                                    class="btn btn-guardar-datos fw-bold"
                                                    @click="preIdStore.updatePreAntecedentes(infoValoracion, preIdStore.pacienteID._id)"> ACTUALIZAR </button>
                                            </template>                                                         
                                        </div>
                                    </div>
                                </div>
                                

                                

                                <!-- Horas de ayuno (hrs) -->
                                <div class="col-md-6">
                                    <label for="" class="form-label fw-bold"> Horas de ayuno (hrs) </label>
                                    <input type="text"
                                           class="form-control margen-input"
                                           id=""
                                           v-model="infoValoracion.antPersNoPat_HrsAyuno"
                                           :class="infoValoracion.antPersNoPat_HrsAyuno != undefined && infoValoracion.antPersNoPat_HrsAyuno != '' ?
                                                  'form-control border border-success formSombra' : 'form-control'">
                                </div>

                                <!-- Tabaquismo -->                                
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold margen-tabaquismo"> Tabaquismo </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersNoPat_Tabaquismo"
                                              :class="infoValoracion.antPersNoPat_Tabaquismo != undefined && infoValoracion.antPersNoPat_Tabaquismo != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Etilismo -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Etilismo </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersNoPat_Etilismo"
                                              :class="infoValoracion.antPersNoPat_Etilismo != undefined && infoValoracion.antPersNoPat_Etilismo != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Adicciones -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Adicciones </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersNoPat_Adicciones"
                                              :class="infoValoracion.antPersNoPat_Adicciones != undefined && infoValoracion.antPersNoPat_Adicciones != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>
                                
                                <!-- Inmunizaciones -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Inmunizaciones </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersNoPat_Inmunizaciones"
                                              :class="infoValoracion.antPersNoPat_Inmunizaciones != undefined && infoValoracion.antPersNoPat_Inmunizaciones != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Antecedentes de importancia para el procedimiento quirúrgico -->
                                <div class="col-md-12">                                    
                                    <h5 class="col-12 fw-bold margen-ante-impor"> Antecedentes de importancia </h5>
                                    <textarea class="form-control deslizar"
                                              id=""
                                              rows="12"
                                              v-model="infoValoracion.antPersNoPat_AntImportQx"
                                              :class="infoValoracion.antPersNoPat_AntImportQx != undefined && infoValoracion.antPersNoPat_AntImportQx != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>                                
                                        
                            </div>                            
                        </div>
                    </form>
                </div>
            </div>

            <!-- Div Formulario Exploración Física -->
            <div class="tab-pane fade" id="exploracion">
                <div class="col-12 bordePrincipal">
                    <form @submit.prevent="" class="row g-3">
                        <h5 class="fw-bold">EXPLORACIÓN FÍSICA</h5>
                        
                        <div class="col-md-10">
                            <h5 class="fw-bold">Signos Vitales</h5>
                        </div>
                        
                        <!-- Botón Guardar/Actualizar -->
                        <div class="col-md-2 alinear-boton">
                            <template v-if="btnActualizarValoracion === false">
                                <button data-bs-toggle="tab" 
                                    type="submit"
                                    class="btn btn-guardar-datos fw-bold"                                            
                                    @click="cambiarUpdateValoracion"> GUARDAR </button> 
                            </template>

                            <template v-else>
                                <button data-bs-toggle="tab" 
                                    type="submit"
                                    class="btn btn-guardar-datos fw-bold"
                                    @click="preIdStore.updatePreAntecedentes(infoValoracion, preIdStore.pacienteID._id)"> ACTUALIZAR </button>
                            </template>                                                                                    
                        </div>

                        <!-- Edad -->
                        <div class="col-md-2">
                            <label for="" class="form-label fw-bold">Edad</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.sigVit_Edad"
                                   :class="infoValoracion.sigVit_Edad != undefined && infoValoracion.sigVit_Edad != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Temperatura -->
                        <div class="col-md-2">
                            <label for="" class="form-label fw-bold">Temperatura</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.sigVit_Temperatura"
                                   :class="infoValoracion.sigVit_Temperatura != undefined && infoValoracion.sigVit_Temperatura != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        
                        <div class="col-md-2"></div>
                        
                        <!-- Frecuencia Cardíaca (x min) -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Frecuencia Cardíaca (x min)</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   placeholder="x min"
                                   v-model="infoValoracion.sigVit_FrecuCardiaca"
                                   :class="infoValoracion.sigVit_FrecuCardiaca != undefined && infoValoracion.sigVit_FrecuCardiaca != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Frecuencia Respiratoria (x min) -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Frecuencia Respiratoria (x min)</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   placeholder="x min"
                                   v-model="infoValoracion.sigVit_FrecuRespiratoria"
                                   :class="infoValoracion.sigVit_FrecuRespiratoria != undefined && infoValoracion.sigVit_FrecuRespiratoria != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Peso (kg) -->
                        <div class="col-md-2">
                            <label for="" class="form-label fw-bold">Peso (kg)</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.sigVit_Peso"
                                   @keyup.capture="calcularIMC"
                                   :class="infoValoracion.sigVit_Peso != undefined && infoValoracion.sigVit_Peso != 0 ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <!-- Talla (m) -->
                        <div class="col-md-2">
                            <label for="" class="form-label fw-bold">Talla (m)</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.sigVit_Talla"
                                   @keyup.capture="calcularIMC"
                                   :class="infoValoracion.sigVit_Talla != undefined && infoValoracion.sigVit_Talla != 0 ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                       
                        <!-- IMC -->
                        <div class="col-md-2">
                            <label for="" class="form-label fw-bold">IMC
                                <span data-title="IMC=Peso(Kg)/Estatura&sup2(mts)">
                                    <font-awesome-icon icon="fa-solid fa-circle-info" />
                                </span>
                            </label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.sigVit_IMC" readonly
                                   :class="infoValoracion.sigVit_IMC != undefined && infoValoracion.sigVit_IMC != 0 ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Tensión Arterial (mmHg) -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Tensión Arterial (mmHg)</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   placeholder="mmHg"
                                   v-model="infoValoracion.sigVit_TensionArterial"
                                   :class="infoValoracion.sigVit_TensionArterial != undefined && infoValoracion.sigVit_TensionArterial != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Saturación de Oxígeno (%) -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Saturación de Oxígeno (%)</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   placeholder="%"
                                   v-model="infoValoracion.sigVit_SaturacionOxigeno"
                                   :class="infoValoracion.sigVit_SaturacionOxigeno != undefined && infoValoracion.sigVit_SaturacionOxigeno != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <hr class="hrN"/>

                        <!-- ***Valoración de Aparatos y Sistemas*** -->
                        <h5 class="fw-bold">Valoración de Aparatos y Sistemas</h5>

                        <!-- Cabeza -->
                        <div class="col-md-6">
                            <label for="" class="form-label fw-bold">Cabeza</label>                            
                            <textarea class="form-control"
                                      rows="2"
                                      v-model="infoValoracion.expFis_VASCabeza"
                                      :class="infoValoracion.expFis_VASCabeza != undefined && infoValoracion.expFis_VASCabeza != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea> 
                        </div>

                        <!-- Cuello -->
                        <div class="col-md-6">
                            <label for="" class="form-label fw-bold">Cuello</label>                            
                            <textarea class="form-control"
                                        rows="2"
                                        v-model="infoValoracion.expFis_VASCuello"
                                        :class="infoValoracion.expFis_VASCuello != undefined && infoValoracion.expFis_VASCuello != '' ?
                                               'form-control border border-success formSombra' : 'form-control'">
                            </textarea> 
                        </div>

                        <!-- Respiratorio -->
                        <div class="col-md-6">
                            <label for="" class="form-label fw-bold">Respiratorio</label>                            
                            <textarea class="form-control"
                                      rows="2"
                                      v-model="infoValoracion.expFis_VASRespiratorio"
                                      :class="infoValoracion.expFis_VASRespiratorio != undefined && infoValoracion.expFis_VASRespiratorio != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>

                        <!-- Cardiovascular -->
                        <div class="col-md-6">
                            <label for="" class="form-label fw-bold">Cardiovascular</label>                            
                            <textarea class="form-control"
                                      rows="2"
                                      v-model="infoValoracion.expFis_VASCardioVasc"
                                      :class="infoValoracion.expFis_VASCardioVasc != undefined && infoValoracion.expFis_VASCardioVasc != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea> 
                        </div>

                        <!-- Hipertensión arterial -->
                        <div class="col-md-6">
                            <label for="" class="form-label fw-bold">Hipertensión arterial</label>                            
                            <textarea class="form-control"
                                      rows="2"
                                      v-model="infoValoracion.expFis_VASHipertension"
                                      :class="infoValoracion.expFis_VASHipertension != undefined && infoValoracion.expFis_VASHipertension != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea> 
                        </div>

                        <!-- Abdomen -->
                        <div class="col-md-6">
                            <label for="" class="form-label fw-bold">Abdomen</label>                            
                            <textarea class="form-control"
                                      rows="2"
                                      v-model="infoValoracion.expFis_VASAbdomen"
                                      :class="infoValoracion.expFis_VASAbdomen != undefined && infoValoracion.expFis_VASAbdomen != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>

                        <!-- Genitourinario -->
                        <div class="col-md-6">
                            <label for="" class="form-label fw-bold">Genitourinario</label>                            
                            <textarea class="form-control"
                                      rows="2"
                                      v-model="infoValoracion.expFis_VASGenUr"
                                      :class="infoValoracion.expFis_VASGenUr != undefined && infoValoracion.expFis_VASGenUr != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>

                        <!-- Músculo esquelético -->
                        <div class="col-md-6">
                            <label for="" class="form-label fw-bold">Músculo esquelético</label>                            
                            <textarea class="form-control"
                                      rows="2"
                                      v-model="infoValoracion.expFis_VASMuscEsq"
                                      :class="infoValoracion.expFis_VASMuscEsq != undefined && infoValoracion.expFis_VASMuscEsq != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea> 
                        </div>

                        <!-- Neurológico -->
                        <div class="col-md-6">
                            <label for="" class="form-label fw-bold">Neurológico</label>                            
                            <textarea class="form-control"
                                      rows="2"
                                      v-model="infoValoracion.expFis_VASNeuro"
                                      :class="infoValoracion.expFis_VASNeuro != undefined && infoValoracion.expFis_VASNeuro != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>

                        <!-- Piel y faneras -->
                        <div class="col-md-6">
                            <label for="" class="form-label fw-bold">Piel y faneras</label>                            
                            <textarea class="form-control"
                                      rows="2"
                                      v-model="infoValoracion.expFis_VASPielFaneras"
                                      :class="infoValoracion.expFis_VASPielFaneras != undefined && infoValoracion.expFis_VASPielFaneras != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea> 
                        </div>
                    </form>
                </div> 
            </div>

            <!-- Div Formulario Vía Aérea -->
            <div class="tab-pane fade" id="via">
                <div class="col-12 bordePrincipal largoContenedor">
                    <form @submit.prevent="" class="row g-3">
                        <h5 class="fw-bold"> VALORACIÓN DE VÍA AÉREA Y OTRAS ESCALAS </h5>
                        
                        <!-- Mallampati -->
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold"> Mallampati </label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoValoracion.viaAerea_Mallampati"
                                    :class="infoValoracion.viaAerea_Mallampati != undefined && infoValoracion.viaAerea_Mallampati != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Clase I</option>
                                <option>Clase II</option>
                                <option>Clase III</option>
                                <option>Clase IV</option>
                            </select>
                        </div>

                        <!-- Patil-Aldreti -->
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold"> Patil-Aldreti </label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoValoracion.viaAerea_PatilAldreti"
                                    :class="infoValoracion.viaAerea_PatilAldreti != undefined && infoValoracion.viaAerea_PatilAldreti != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Más de 6.5 cm</option>
                                <option>De 6 a 6.5 cm</option>
                                <option>Menos de 6 cm</option>
                            </select>
                        </div>

                        <!-- Apertura bucal -->
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold"> Apertura bucal </label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoValoracion.viaAerea_AperturaBucal"
                                    :class="infoValoracion.viaAerea_AperturaBucal != undefined && infoValoracion.viaAerea_AperturaBucal != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>3 cm</option>
                                <option>2.6 a 3 cm</option>
                                <option>2 a 2.5 cm</option>
                                <option>&lt; 2.5 cm</option>
                            </select>
                        </div>

                        <!-- Distancia esternomentoniana -->
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold">Distancia esternomentoniana</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoValoracion.viaAerea_Distancia"
                                    :class="infoValoracion.viaAerea_Distancia != undefined && infoValoracion.viaAerea_Distancia != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Más de 13 cm</option>
                                <option>De 12 a 13 cm</option>
                                <option>De 11 a 12 cm</option>
                                <option>Menos de 11 cm</option>
                            </select>
                        </div>
                        
                        <!-- Protusión Mandibular -->
                        <div class="col-md-6">
                            <label for="inputState" class="form-label fw-bold"> Protusión Mandibular </label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoValoracion.viaAerea_Protusion"
                                    :class="infoValoracion.viaAerea_Protusion != undefined && infoValoracion.viaAerea_Protusion != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Los incisivos inferiores pueden ser llevados más adelante de la arcada dental superior</option>
                                <option>Los incisivos inferiores se desplazan hasta el nivel de la dentadura superior</option>
                                <option>Los incisivos inferiores no se proyectan hacia adelante y no pueden tocar la arcada dentaria</option>
                            </select>
                        </div>

                        <!-- IPID -->
                        <div class="col-md-6">
                            <label for="inputState" class="form-label fw-bold"> IPID </label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoValoracion.viaAerea_Ipid"
                                    :class="infoValoracion.viaAerea_Ipid != undefined && infoValoracion.viaAerea_Ipid != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Intubación fácil</option>
                                <option>Discreta dificultad, no requiere maniobras adicionales</option>
                                <option>Franca dificultad, requiere hasta dos intentos con ayuda de una o dos maniobras adicionales </option>
                                <option>Gran dificultad, requiere más de dos intentos y ayuda de tres o más maniobras adicionales</option>
                                <option>Intubación imposible</option>                    
                            </select>
                        </div>

                        <!-- Escala Glasgow -->
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold">Escala Glasgow</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoValoracion.viaAerea_Glasgow"
                                    :class="infoValoracion.viaAerea_Glasgow != undefined && infoValoracion.viaAerea_Glasgow != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>                    
                            </select>
                        </div>

                        <!-- Escala NYHA -->
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold"> Escala NYHA </label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoValoracion.viaAerea_NYHA"
                                    :class="infoValoracion.viaAerea_NYHA != undefined && infoValoracion.viaAerea_NYHA != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Clase I</option>
                                <option>Clase II</option>
                                <option>Clase III</option>
                                <option>Clase IV</option>
                            </select>
                        </div>

                        <!-- Escala de Goldman -->
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold"> Escala de Goldman </label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoValoracion.viaAerea_Goldman"
                                    :class="infoValoracion.viaAerea_Goldman != undefined && infoValoracion.viaAerea_Goldman != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Clase I</option>
                                <option>Clase II</option>
                                <option>Clase III</option>
                                <option>Clase IV</option>
                            </select>
                        </div>

                        <!-- Riesgo de Trombosis -->
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold"> Riesgo de Trombosis </label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoValoracion.viaAerea_RiesgoTrombosis"
                                    :class="infoValoracion.viaAerea_RiesgoTrombosis != undefined && infoValoracion.viaAerea_RiesgoTrombosis != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Riesgo Trombótico Bajo</option>
                                <option>Riesgo Trombótico Medio</option>
                                <option>Riesgo Trombótico Alto</option>
                                <option>Riesgo Trombótico Muy Alto</option>
                            </select>
                        </div>

                        <!-- Clasificación ASA -->
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold"> Clasificación ASA </label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoValoracion.viaAerea_ClasificacionASA"
                                    :class="infoValoracion.viaAerea_ClasificacionASA != undefined && infoValoracion.viaAerea_ClasificacionASA != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Clase I</option>
                                <option>Clase II</option>
                                <option>Clase III</option>
                                <option>Clase IV</option>
                                <option>Clase V</option>
                                <option>Clase VI</option>
                            </select>
                        </div>

                        <!-- Tipo de Cirugía -->
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold">Tipo de Cirugía</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoValoracion.viaAerea_TipoCirugia"
                                    :class="infoValoracion.viaAerea_TipoCirugia != undefined && infoValoracion.viaAerea_TipoCirugia != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Electiva</option>
                                <option>Urgencia</option>
                            </select>
                        </div>

                        <!-- Riesgo Anéstesico Quirúrgico -->
                        <div class="col-md-4">
                            <label for="inputState" class="form-label fw-bold">Riesgo Anéstesico Quirúrgico</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoValoracion.viaAerea_RiesgoAnestesico"
                                    :class="infoValoracion.viaAerea_RiesgoAnestesico != undefined && infoValoracion.viaAerea_RiesgoAnestesico != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Riesgo Alto</option>
                                <option>Riesgo Medio</option>
                                <option>Riesgo Bajo</option>
                            </select>
                        </div>

                        <!-- Botón Guardar/Actualizar -->
                        <div class="col-md-12 margenBoton">
                            <template v-if="btnActualizarValoracion === false">
                                <button data-bs-toggle="tab" 
                                    type="submit"
                                    class="btn btn-guardar-datos fw-bold"                                            
                                    @click="cambiarUpdateValoracion"> GUARDAR </button> 
                            </template>

                            <template v-else>
                                <button data-bs-toggle="tab" 
                                    type="submit"
                                    class="btn btn-guardar-datos fw-bold"
                                    @click="preIdStore.updatePreAntecedentes(infoValoracion, preIdStore.pacienteID._id)"> ACTUALIZAR </button>
                            </template>                                                                                    
                        </div>
                    </form>
                </div>
            </div>

            <!-- Div Formulario Estudios -->
            <div class="tab-pane fade" id="estudios">
                <div class="col-12 bordePrincipal largoContenedor">
                    <form @submit.prevent="" class="row g-3">
                        <h5 class="fw-bold fw-bold">ESTUDIOS</h5>           
                        
                        <!-- Estudio -->
                        <div class="col-md-8">
                            <label for="inputState" class="form-label fw-bold">Estudio</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoValoracion.estudios_Estudio"
                                    :class="infoValoracion.estudios_Estudio != undefined && infoValoracion.estudios_Estudio ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Electrocardiograma</option>
                                <option>Electroencefalograma</option>
                                <option>Electromiograma</option>
                                <option>Espirometría</option>
                                <option>Hemodinamia</option>
                                <option>Pruebas de Función Pulmonar</option>
                                <option>Rayos X</option>
                                <option>Resonancia Magnetica</option>
                                <option>Tomografia Axial Computalizada</option>
                                <option>Tromboelastograma</option>
                                <option>Ultrasonido</option>
                                <option>Otros Estudios</option>
                            </select>
                        </div>       
                        
                        <!-- Botón Guardar/Actualizar -->
                        <div class="col-md-2">
                            <button class="btn btn-outline-secondary fw-bold margenBoton">Guardar</button>
                        </div>
                        
                        <!-- Especificaciones -->
                        <div class="col-md-12">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control"
                                      id=""
                                      rows="3"
                                      v-model="infoValoracion.estudio_Especificaciones"
                                      :class="infoValoracion.estudio_Especificaciones != '' && infoValoracion.estudio_Especificaciones != undefined ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>
                    </form>
                </div>            
            </div>

            <!-- Div Formulario Exámenes -->
            <div class="tab-pane fade" id="examenes">
                <div class="col-12 bordePrincipal">
                    <form @submit.prevent="" class="row g-3">
                        <!-- Exámenes / Perfil Bioquímico -->                        
                        <div class="col-md-10">
                            <h5 class="fw-bold">PERFIL BIOQUÍMICO</h5>
                        </div>

                        <!-- Botón Guardar/Actualizar -->
                        <div class="col-md-2 margenBoton">
                            <template v-if="btnActualizarValoracion === false">
                                <button data-bs-toggle="tab" 
                                    type="submit"
                                    class="btn btn-guardar-datos fw-bold"                                            
                                    @click="cambiarUpdateValoracion"> GUARDAR </button> 
                            </template>

                            <template v-else>
                                <button data-bs-toggle="tab" 
                                    type="submit"
                                    class="btn btn-guardar-datos fw-bold"
                                    @click="preIdStore.updatePreAntecedentes(infoValoracion, preIdStore.pacienteID._id)"> ACTUALIZAR </button>
                            </template>                                                         
                        </div>


                        <!-- Fecha de realización -->
                        <!-- Revisar que funcione el class -->
                        <div class="col-md-6">
                            <label for="" class="form-label fw-bold">Fecha de realización</label>
                            <input type="date"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_FechaRealizacion"
                                   :class="infoValoracion.perfilBioQ_FechaRealizacion != undefined && infoValoracion.perfilBioQ_FechaRealizacion !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"
                                          >
                        </div>

                        <!-- Grupo sanguíneo -->
                        <div class="col-md-6">
                            <label for="inputState" class="form-label fw-bold">Grupo sanguíneo</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoValoracion.perfilBioQ_GrupoSanguineo"
                                    :class="infoValoracion.perfilBioQ_GrupoSanguineo != undefined && infoValoracion.perfilBioQ_GrupoSanguineo !='' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                                <option>O+</option>
                                <option>O-</option>
                            </select>
                        </div>

                        <!-- Hemoglobina -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Hemoglobina</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Hemoglobina"
                                   :class="infoValoracion.perfilBioQ_Hemoglobina != undefined && infoValoracion.perfilBioQ_Hemoglobina !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Hematocrito -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Hematocrito</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Hematocrito"
                                   :class="infoValoracion.perfilBioQ_Hematocrito != undefined && infoValoracion.perfilBioQ_Hematocrito !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Plaquetas -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Plaquetas</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Plaquetas"
                                   :class="infoValoracion.perfilBioQ_Plaquetas != undefined && infoValoracion.perfilBioQ_Plaquetas !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Leutocitos -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Leutocitos</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Leutocitos"
                                   :class="infoValoracion.perfilBioQ_Leutocitos != undefined && infoValoracion.perfilBioQ_Leutocitos !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- TP -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">TP</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_TP"
                                   :class="infoValoracion.perfilBioQ_TP != undefined && infoValoracion.perfilBioQ_TP !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- TT -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">TT</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_TT"
                                   :class="infoValoracion.perfilBioQ_TT != undefined && infoValoracion.perfilBioQ_TT !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- TPT -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">TPT</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_TPT"
                                   :class="infoValoracion.perfilBioQ_TPT != undefined && infoValoracion.perfilBioQ_TPT !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- INR -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">INR</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_INR"
                                   :class="infoValoracion.perfilBioQ_INR != undefined && infoValoracion.perfilBioQ_INR !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Glucosa -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Glucosa</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Glucosa"
                                   :class="infoValoracion.perfilBioQ_Glucosa != undefined && infoValoracion.perfilBioQ_Glucosa !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Creatinina -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Creatinina</label>
                            <input type="text"
                                   class="form-control"
                                   id="" v-model="infoValoracion.perfilBioQ_Creatinina"
                                   :class="infoValoracion.perfilBioQ_Creatinina != undefined && infoValoracion.perfilBioQ_Creatinina !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Urea -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Urea</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Urea"
                                   :class="infoValoracion.perfilBioQ_Urea != undefined && infoValoracion.perfilBioQ_Urea !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Sodio -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Sodio</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Sodio"
                                   :class="infoValoracion.perfilBioQ_Sodio != undefined && infoValoracion.perfilBioQ_Sodio !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Potasio -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Potasio</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Potasio"
                                   :class="infoValoracion.perfilBioQ_Potasio != undefined && infoValoracion.perfilBioQ_Potasio !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Cloro -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Cloro</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Cloro"
                                   :class="infoValoracion.perfilBioQ_Cloro != undefined && infoValoracion.perfilBioQ_Cloro !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Calcio -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Calcio</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Calcio"
                                   :class="infoValoracion.perfilBioQ_Calcio != undefined && infoValoracion.perfilBioQ_Calcio !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Magnesio -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Magnesio</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Magnesio"
                                   :class="infoValoracion.perfilBioQ_Magnesio != undefined && infoValoracion.perfilBioQ_Magnesio !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Bilirrubina directa -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Bilirrubina directa</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_BilirrubinaDirecta"
                                   :class="infoValoracion.perfilBioQ_BilirrubinaDirecta != undefined && infoValoracion.perfilBioQ_BilirrubinaDirecta !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Bilirrubina indirecta -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Bilirrubina indirecta</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_BilirrubinaIndirecta"
                                   :class="infoValoracion.perfilBioQ_BilirrubinaIndirecta != undefined && infoValoracion.perfilBioQ_BilirrubinaIndirecta !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Bilirrubina Total -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Bilirrubina Total</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_BilirrubinaTotal"
                                   :class="infoValoracion.perfilBioQ_BilirrubinaTotal != undefined && infoValoracion.perfilBioQ_BilirrubinaTotal !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Lipasa -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Lipasa</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Lipasa"
                                   :class="infoValoracion.perfilBioQ_Lipasa != undefined && infoValoracion.perfilBioQ_Lipasa !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>    
                        
                        <!-- Amilasa -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Amilasa</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Amilasa"
                                   :class="infoValoracion.perfilBioQ_Amilasa != undefined && infoValoracion.perfilBioQ_Amilasa !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Otros -->
                        <div class="col-md-9">
                            <label for="" class="form-label fw-bold">Otros</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Otros"
                                   :class="infoValoracion.perfilBioQ_Otros != undefined && infoValoracion.perfilBioQ_Otros !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                    </form>
                </div>
            </div>
        </div>   
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePreIdStore } from "@/stores/preId-store";
import type { regValoracion } from "@/interfaces/regPreAnest";

const preIdStore = usePreIdStore();

export default defineComponent({

    data () {
        return{
            IMC:"",
            infoValoracion: {} as regValoracion,
            preIdStore,
            btnActualizarValoracion:false,
        }  
    },

    methods: {
        calcularIMC() {
            this.infoValoracion.sigVit_IMC = (this.infoValoracion.sigVit_Peso / (this.infoValoracion.sigVit_Talla * this.infoValoracion.sigVit_Talla))
            this.infoValoracion.sigVit_IMC = Number(this.infoValoracion.sigVit_IMC.toFixed(2));
        },

        cambiarUpdateValoracion() {
            this.btnActualizarValoracion=true

            preIdStore.savePreAntecedentes(this.infoValoracion, preIdStore.pacienteID._id)
        },
    }
})
</script>

<style scoped>
hr{
    border: none;
    border-left: 2px solid #A2A2A2;
    height: auto;
    width: 1px;       
}
.hrN{
    margin: 1rem 0;
    color: inherit;
    border: 0;
    border-top: 1px solid;
    opacity: .25;
    width: 100%;
}
h5{
    color: #002D60;
    margin-bottom: 20px;    
}
.margen-ante-impor{
    margin-top: 60px
}
.bordePrincipal {
  border-radius: 5px;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 55px;
  background-color: rgba(232, 234, 236, 0.6);
}
.largoContenedor{
    height: 535px
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
.centrar-li{
  justify-content: center; 
}
/* Botones */
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
.btn-guardar-datos{
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
/* Margenes */
.margen-input{
    margin-bottom: 25px;
}
.margenRadio{
    margin-right: 10px;
}
.margenBoton{
    margin-top: 32px;
    text-align: end;
}
.alinear-boton{
    text-align: end;
}
.margen-tabaquismo{
    margin-top: 25px;
}
.deslizar {
  overflow: scroll;
  overflow-x: hidden;
  height: 270px;
  margin-top: 15px;
}
/* Title */
[data-title]:hover:after {
    opacity: 1;
    transition: all 0.1s ease 0.5s;
    visibility: visible;
}
[data-title]:after {
    content: attr(data-title);
    background-color: #000000;
    color: #ffffff;
    font-size: 13px;
    font-family: SF UI Display;
    position: absolute;
    padding: 2px 5px;
    bottom: -2.0em;
    left: 80%;
    white-space: nowrap;
    opacity: 0;
    border: 1px solid #fff;
    z-index: 99999;
    visibility: hidden;
    border-radius: 5px;    
}
[data-title] {
    position: relative;
    cursor: pointer
}
</style>