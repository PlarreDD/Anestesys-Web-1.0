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
                <div class="col-12 bordePrincipal" :class="preIdStore.VistaRapida == true ? '' : 'mb-5'">
                    <form @submit.prevent="" class="row g-3">    
                        <h5 class="col-md-12 fw-bold">ANTECEDENTES</h5>                        
                        <!-- Personales patológicos -->
                        <div class="col row">
                            <div class="g-3">
                                <h5 class="col-md-12 fw-bold"> Personales patológicos </h5>
                                <!-- Alergias -->
                                <div class="col-md-12">
                                    <label  class="form-label fw-bold"> Alergias </label>
                                    <textarea type="text" @keyup.capture="enviarDatosValoracion"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_Alergias"                                              
                                              :class="infoValoracion.antPersPat_Alergias != undefined && infoValoracion.antPersPat_Alergias != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Quirúrgicos -->
                                <div class="col-md-12">
                                    <label  class="form-label fw-bold"> Quirúrgicos </label>
                                    <textarea type="text" @keyup.capture="enviarDatosValoracion"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_Quirurgicos"
                                              :class="infoValoracion.antPersPat_Quirurgicos != undefined && infoValoracion.antPersPat_Quirurgicos != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>
                                
                                <!-- Endocrinológicos -->
                                <div class="col-md-12">
                                    <label  class="form-label fw-bold"> Endocrinológicos </label>
                                    <textarea type="text" @keyup.capture="enviarDatosValoracion"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_Endocrinologicos"
                                              :class="infoValoracion.antPersPat_Endocrinologicos != undefined && infoValoracion.antPersPat_Endocrinologicos != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Urológicos -->
                                <div class="col-md-12">
                                    <label  class="form-label fw-bold"> Urológicos </label>
                                    <textarea type="text" @keyup.capture="enviarDatosValoracion"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_Urologicos"
                                              :class="infoValoracion.antPersPat_Urologicos != undefined && infoValoracion.antPersPat_Urologicos != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Traumáticos -->
                                <div class="col-md-12">
                                    <label  class="form-label fw-bold"> Traumáticos </label>
                                    <textarea type="text" @keyup.capture="enviarDatosValoracion"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_Traumaticos"
                                              :class="infoValoracion.antPersPat_Traumaticos != undefined && infoValoracion.antPersPat_Traumaticos != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Ortopédicos -->
                                <div class="col-md-12">
                                    <label  class="form-label fw-bold"> Ortopédicos </label>
                                    <textarea type="text" @keyup.capture="enviarDatosValoracion"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_Ortopedicos"
                                              :class="infoValoracion.antPersPat_Ortopedicos != undefined && infoValoracion.antPersPat_Ortopedicos != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Transfusiones previas -->
                                <div class="col-md-12">
                                    <label  class="form-label fw-bold"> Transfusiones previas </label>
                                    <textarea type="text" @keyup.capture="enviarDatosValoracion"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_Transfusiones"
                                              :class="infoValoracion.antPersPat_Transfusiones != undefined && infoValoracion.antPersPat_Transfusiones != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Complicaciones anestésicas previas -->
                                <div class="col-md-12">
                                    <label  class="form-label fw-bold"> Complicaciones anestésicas previas </label>
                                    <textarea type="text" @keyup.capture="enviarDatosValoracion"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_CompAnestPrev"
                                              :class="infoValoracion.antPersPat_CompAnestPrev != undefined && infoValoracion.antPersPat_CompAnestPrev != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>
                                
                                <!-- Estado psiquico -->
                                <div class="col-md-12">
                                    <label  class="form-label fw-bold"> Estado psíquico </label>
                                    <textarea type="text" @keyup.capture="enviarDatosValoracion"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_EstadoPsiq"
                                              :class="infoValoracion.antPersPat_EstadoPsiq != undefined && infoValoracion.antPersPat_EstadoPsiq != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>
                                
                                <!-- Medicación actual -->
                                <div class="col-md-12">
                                    <label  class="form-label fw-bold"> Medicación actual </label>
                                    <textarea type="text" @keyup.capture="enviarDatosValoracion"
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
                                    <label  class="form-label fw-bold"> Horas de ayuno (hrs) </label>
                                    <input type="text" @keyup.capture="enviarDatosValoracion"
                                           class="form-control margen-input"
                                           id=""
                                           v-model="infoValoracion.antPersNoPat_HrsAyuno"
                                           :class="infoValoracion.antPersNoPat_HrsAyuno != undefined && infoValoracion.antPersNoPat_HrsAyuno != '' ?
                                                  'form-control border border-success formSombra' : 'form-control'">
                                </div>

                                <!-- Tabaquismo -->                                
                                <div class="col-md-12">
                                    <label  class="form-label fw-bold margen-tabaquismo"> Tabaquismo </label>
                                    <textarea type="text" @keyup.capture="enviarDatosValoracion"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersNoPat_Tabaquismo"
                                              :class="infoValoracion.antPersNoPat_Tabaquismo != undefined && infoValoracion.antPersNoPat_Tabaquismo != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Etilismo -->
                                <div class="col-md-12">
                                    <label  class="form-label fw-bold"> Etilismo </label>
                                    <textarea type="text" @keyup.capture="enviarDatosValoracion"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersNoPat_Etilismo"
                                              :class="infoValoracion.antPersNoPat_Etilismo != undefined && infoValoracion.antPersNoPat_Etilismo != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Adicciones -->
                                <div class="col-md-12">
                                    <label  class="form-label fw-bold"> Adicciones </label>
                                    <textarea type="text" @keyup.capture="enviarDatosValoracion"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersNoPat_Adicciones"
                                              :class="infoValoracion.antPersNoPat_Adicciones != undefined && infoValoracion.antPersNoPat_Adicciones != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>
                                
                                <!-- Inmunizaciones -->
                                <div class="col-md-12">
                                    <label  class="form-label fw-bold"> Inmunizaciones </label>
                                    <textarea type="text" @keyup.capture="enviarDatosValoracion"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersNoPat_Inmunizaciones"
                                              :class="infoValoracion.antPersNoPat_Inmunizaciones != undefined && infoValoracion.antPersNoPat_Inmunizaciones != '' ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Antecedentes de importancia para el procedimiento quirúrgico -->
                                <div class="col-md-12">                                    
                                    <h5 class="col-12 fw-bold margen-ante-impor"> Antecedentes de importancia </h5>
                                    <textarea class="form-control deslizar" @keyup.capture="enviarDatosValoracion"
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
                <div class="col-12 bordePrincipal" :class="preIdStore.VistaRapida == true ? '' : 'mb-5'">
                    <form @submit.prevent="" class="row g-3">
                        <h5 class="fw-bold">EXPLORACIÓN FÍSICA</h5>
                        
                        <div class="col-md-10">
                            <h5 class="fw-bold">Signos Vitales</h5>
                        </div>
                        
                        <!-- Botón Guardar/Actualizar -->
                        <div class="col-md-2">
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
                            <label  class="form-label fw-bold">Edad</label>
                            <input type="text" readonly
                                   class="form-control"
                                   v-model="preIdStore.edadPaciente"
                                   :class="preIdStore.edadPaciente != undefined && preIdStore.edadPaciente != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Temperatura -->
                        <div class="col-md-2">
                            <label  class="form-label fw-bold">Temperatura</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.sigVit_Temperatura"
                                   :class="infoValoracion.sigVit_Temperatura != undefined && infoValoracion.sigVit_Temperatura != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        
                        <div class="col-md-2"></div>
                        
                        <!-- Frecuencia Cardíaca (x min) -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">Frecuencia Cardíaca (x min)</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   placeholder="x min"
                                   v-model="infoValoracion.sigVit_FrecuCardiaca"
                                   :class="infoValoracion.sigVit_FrecuCardiaca != undefined && infoValoracion.sigVit_FrecuCardiaca != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Frecuencia Respiratoria (x min) -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">Frecuencia Respiratoria (x min)</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   placeholder="x min"
                                   v-model="infoValoracion.sigVit_FrecuRespiratoria"
                                   :class="infoValoracion.sigVit_FrecuRespiratoria != undefined && infoValoracion.sigVit_FrecuRespiratoria != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Peso (kg) -->
                        <div class="col-md-2">
                            <label  class="form-label fw-bold">Peso (kg)</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.sigVit_Peso"
                                   @change="calcularIMC"
                                   :class="infoValoracion.sigVit_Peso != undefined && infoValoracion.sigVit_Peso != 0 ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <!-- Talla (m) -->
                        <div class="col-md-2">
                            <label  class="form-label fw-bold">Talla (m)</label>
                            <input type="text"
                                   class="form-control"                                   
                                   v-model="infoValoracion.sigVit_Talla"
                                   @change="calcularIMC"
                                   :class="infoValoracion.sigVit_Talla != undefined && infoValoracion.sigVit_Talla != 0 ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                       
                        <!-- IMC -->
                        <div class="col-md-2">
                            <label  class="form-label fw-bold">IMC
                                <span data-title="IMC=Peso(Kg)/Estatura&sup2(mts)">
                                    <font-awesome-icon icon="fa-solid fa-circle-info" />
                                </span>
                            </label>
                            <input type="text" @change="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.sigVit_IMC" readonly
                                   :class="infoValoracion.sigVit_IMC != undefined && infoValoracion.sigVit_IMC != 0 ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Tensión Arterial (mmHg) -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">Tensión Arterial (mmHg)</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   placeholder="mmHg"
                                   v-model="infoValoracion.sigVit_TensionArterial"
                                   :class="infoValoracion.sigVit_TensionArterial != undefined && infoValoracion.sigVit_TensionArterial != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Saturación de Oxígeno (%) -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">Saturación de Oxígeno (%)</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
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
                            <label  class="form-label fw-bold">Cabeza</label>                            
                            <textarea class="form-control" @keyup.capture="enviarDatosValoracion"
                                      rows="2"
                                      v-model="infoValoracion.expFis_VASCabeza"
                                      :class="infoValoracion.expFis_VASCabeza != undefined && infoValoracion.expFis_VASCabeza != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea> 
                        </div>

                        <!-- Cuello -->
                        <div class="col-md-6">
                            <label  class="form-label fw-bold">Cuello</label>                            
                            <textarea class="form-control" @keyup.capture="enviarDatosValoracion"
                                        rows="2"
                                        v-model="infoValoracion.expFis_VASCuello"
                                        :class="infoValoracion.expFis_VASCuello != undefined && infoValoracion.expFis_VASCuello != '' ?
                                               'form-control border border-success formSombra' : 'form-control'">
                            </textarea> 
                        </div>

                        <!-- Respiratorio -->
                        <div class="col-md-6">
                            <label  class="form-label fw-bold">Respiratorio</label>                            
                            <textarea class="form-control" @keyup.capture="enviarDatosValoracion"
                                      rows="2"
                                      v-model="infoValoracion.expFis_VASRespiratorio"
                                      :class="infoValoracion.expFis_VASRespiratorio != undefined && infoValoracion.expFis_VASRespiratorio != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>

                        <!-- Cardiovascular -->
                        <div class="col-md-6">
                            <label  class="form-label fw-bold">Cardiovascular</label>                            
                            <textarea class="form-control" @keyup.capture="enviarDatosValoracion"
                                      rows="2"
                                      v-model="infoValoracion.expFis_VASCardioVasc"
                                      :class="infoValoracion.expFis_VASCardioVasc != undefined && infoValoracion.expFis_VASCardioVasc != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea> 
                        </div>

                        <!-- Hipertensión arterial -->
                        <div class="col-md-6">
                            <label  class="form-label fw-bold">Hipertensión arterial</label>                            
                            <textarea class="form-control" @keyup.capture="enviarDatosValoracion"
                                      rows="2"
                                      v-model="infoValoracion.expFis_VASHipertension"
                                      :class="infoValoracion.expFis_VASHipertension != undefined && infoValoracion.expFis_VASHipertension != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea> 
                        </div>

                        <!-- Abdomen -->
                        <div class="col-md-6">
                            <label  class="form-label fw-bold">Abdomen</label>                            
                            <textarea class="form-control" @keyup.capture="enviarDatosValoracion"
                                      rows="2"
                                      v-model="infoValoracion.expFis_VASAbdomen"
                                      :class="infoValoracion.expFis_VASAbdomen != undefined && infoValoracion.expFis_VASAbdomen != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>

                        <!-- Genitourinario -->
                        <div class="col-md-6">
                            <label  class="form-label fw-bold">Genitourinario</label>                            
                            <textarea class="form-control" @keyup.capture="enviarDatosValoracion"
                                      rows="2"
                                      v-model="infoValoracion.expFis_VASGenUr"
                                      :class="infoValoracion.expFis_VASGenUr != undefined && infoValoracion.expFis_VASGenUr != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>

                        <!-- Músculo esquelético -->
                        <div class="col-md-6">
                            <label  class="form-label fw-bold">Músculo esquelético</label>                            
                            <textarea class="form-control" @keyup.capture="enviarDatosValoracion"
                                      rows="2"
                                      v-model="infoValoracion.expFis_VASMuscEsq"
                                      :class="infoValoracion.expFis_VASMuscEsq != undefined && infoValoracion.expFis_VASMuscEsq != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea> 
                        </div>

                        <!-- Neurológico -->
                        <div class="col-md-6">
                            <label  class="form-label fw-bold">Neurológico</label>                            
                            <textarea class="form-control" @keyup.capture="enviarDatosValoracion"
                                      rows="2"
                                      v-model="infoValoracion.expFis_VASNeuro"
                                      :class="infoValoracion.expFis_VASNeuro != undefined && infoValoracion.expFis_VASNeuro != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>

                        <!-- Piel y faneras -->
                        <div class="col-md-6">
                            <label  class="form-label fw-bold">Piel y faneras</label>                            
                            <textarea class="form-control" @keyup.capture="enviarDatosValoracion"
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
                <div class="col-12 bordePrincipal" :class="preIdStore.VistaRapida == true ? '' : 'mb-5'">
                    <form @submit.prevent="" class="row g-3">
                        <h5 class="fw-bold"> VALORACIÓN DE VÍA AÉREA Y OTRAS ESCALAS </h5>
                        
                        <!-- Mallampati -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold"> Mallampati </label>
                            <select  @change="enviarDatosValoracion"
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
                            <label  class="form-label fw-bold"> Patil-Aldreti </label>
                            <select  @change="enviarDatosValoracion"
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
                            <label  class="form-label fw-bold"> Apertura bucal </label>
                            <select  @change="enviarDatosValoracion"
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
                            <label  class="form-label fw-bold">Distancia esternomentoniana</label>
                            <select  @change="enviarDatosValoracion"
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
                        <div class="col-md-10">
                            <label  class="form-label fw-bold"> Protusión Mandibular </label>
                            <select  @change="enviarDatosValoracion"
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
                        <div class="col-md-10">
                            <label  class="form-label fw-bold"> IPID </label>
                            <select  @change="enviarDatosValoracion"
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
                            <label  class="form-label fw-bold">Escala Glasgow</label>
                            <select  @change="enviarDatosValoracion"
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
                            <label  class="form-label fw-bold"> Escala NYHA </label>
                            <select  @change="enviarDatosValoracion"
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
                            <label  class="form-label fw-bold"> Escala de Goldman </label>
                            <select  @change="enviarDatosValoracion"
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
                            <label  class="form-label fw-bold"> Riesgo de Trombosis </label>
                            <select  @change="enviarDatosValoracion"
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
                            <label  class="form-label fw-bold"> Clasificación ASA </label>
                            <select  @change="enviarDatosValoracion"
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
                            <label  class="form-label fw-bold">Tipo de Cirugía</label>
                            <select  @change="enviarDatosValoracion"
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
                            <label  class="form-label fw-bold">Riesgo Anéstesico Quirúrgico</label>
                            <select  @change="enviarDatosValoracion"
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

                        <div class="col-md-10"></div>
                        <!-- Botón Guardar/Actualizar -->
                        <div class="col-md-2 btn-abajo">
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
                <div class="col-12 bordePrincipal" :class="preIdStore.VistaRapida == true ? '' : 'mb-5'">
                    <form @submit.prevent="" class="row g-3">
                        <h5 class="fw-bold fw-bold">ESTUDIOS</h5>           
                        
                        <div class="col-md-12">
                            <div class="row g-3">
                                <!-- Estudio -->
                                <div class="col-md-5">
                                    <label  class="form-label fw-bold">Estudio</label>
                                    <select  @change="enviarDatosValoracion"
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
                                
                                <!-- Botón Guardar/Agregar -->
                                <div class="col-md-1 btn-abajo">
                                    <template v-if="btnAddEstudios === true">
                                        <button class="btn btn-guardar fw-bold"
                                            @click="guardarEstudios(infoValoracion.estudios_Estudio, infoValoracion.estudio_Especificaciones)">
                                            <font-awesome-icon icon="fa-solid fa-square-plus" size="2xl"/>
                                        </button>
                                    </template>

                                    <template v-if="btnUpdateEstudios === true">
                                        <button class="btn btn-guardar fw-bold"
                                            @click="actualizarEstudios(infoValoracion.estudios_Estudio, infoValoracion.estudio_Especificaciones)">
                                            <font-awesome-icon icon="fa-solid fa-square-plus" size="2xl"/>
                                        </button>
                                    </template>  

                                    <template v-if="btnActualizaEstudio === true">
                                        <button class="btn btn-guardar fw-bold"
                                            @click="actualizarEstudio()">
                                            <font-awesome-icon icon="fa-solid fa-square-plus" size="2xl"/>
                                        </button>
                                    </template>  
                                </div>
                                
                                <!-- Especificaciones -->
                                <div class="col-md-10">
                                    <label  class="form-label fw-bold">Específicar</label>
                                    <textarea class="form-control" @keyup.capture="enviarDatosValoracion"
                                            id=""
                                            rows="3"
                                            v-model="infoValoracion.estudio_Especificaciones"
                                            :class="infoValoracion.estudio_Especificaciones != '' && infoValoracion.estudio_Especificaciones != undefined ?
                                                    'form-control border border-success formSombra' : 'form-control'"
                                                    maxlength="300">
                                    </textarea>
                                </div>

                                <input
                                    type="hidden"
                                    v-model="infoValoracion.estudio_Id"
                                />
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="row g-3">
                                
                                <div class="deslizar">
                                    <table class="table table-responsive">
                                        <thead>
                                            <tr>
                                                <!-- <th class="color-texto-tabla">#</th> -->
                                                <th class="color-texto-tabla">Estudio</th>
                                                <th class="color-texto-tabla">Especificación</th>
                                                <th class=""></th>
                                                <th class=""></th>
                                            </tr>
                                        </thead>
                                        <tbody v-for="( estudio ) in preIdStore.estudios">
                                            <tr
                                                v-for="( estudioTipo, index ) in estudio.val_Estudios">
                                                <td class="text-black">
                                                    {{ estudioTipo.estudio}}
                                                </td>

                                                <td class="text-black td-ajuste">
                                                    {{ estudioTipo.especifEstudio}}
                                                </td>                                            
                                                
                                                <td>
                                                    <button class="btn" @click="cambiarBtnActualizar(estudioTipo._id)">
                                                        <font-awesome-icon 
                                                        icon="fa-solid fa-pen-to-square" 
                                                        size="lg" 
                                                        class="text-black"
                                                        />
                                                    </button>
                                                </td>
                                                
                                                <td>
                                                    <button class="btn" @click="validaEliminarEstudio(estudioTipo._id)">
                                                        <font-awesome-icon 
                                                            icon="fa-solid fa-trash" 
                                                            size="lg" class="text-black"
                                                            />
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                        
                    </form>
                </div>            
            </div>

            <!-- Div Formulario Exámenes -->
            <div class="tab-pane fade" id="examenes">
                <div class="col-12 bordePrincipal" :class="preIdStore.VistaRapida == true ? '' : 'mb-5'">
                    <form @submit.prevent="" class="row g-3">
                        <!-- Exámenes / Perfil Bioquímico -->                        
                        <div class="col-md-10">
                            <h5 class="fw-bold">PERFIL BIOQUÍMICO</h5>
                        </div>

                        <!-- Botón Guardar/Actualizar -->
                        <div class="col-md-2 btn-abajo">
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
                            <label  class="form-label fw-bold">Fecha de realización</label>
                            <input type="date" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_FechaRealizacion"
                                   :class="infoValoracion.perfilBioQ_FechaRealizacion != undefined && infoValoracion.perfilBioQ_FechaRealizacion !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"
                                          >
                        </div>

                        <!-- Grupo sanguíneo -->
                        <div class="col-md-6">
                            <label  class="form-label fw-bold">Grupo sanguíneo</label>
                            <select  @change="enviarDatosValoracion"
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
                            <label  class="form-label fw-bold">Hemoglobina</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Hemoglobina"
                                   :class="infoValoracion.perfilBioQ_Hemoglobina != undefined && infoValoracion.perfilBioQ_Hemoglobina !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Hematocrito -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">Hematocrito</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Hematocrito"
                                   :class="infoValoracion.perfilBioQ_Hematocrito != undefined && infoValoracion.perfilBioQ_Hematocrito !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Plaquetas -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">Plaquetas</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Plaquetas"
                                   :class="infoValoracion.perfilBioQ_Plaquetas != undefined && infoValoracion.perfilBioQ_Plaquetas !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Leutocitos -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">Leutocitos</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Leutocitos"
                                   :class="infoValoracion.perfilBioQ_Leutocitos != undefined && infoValoracion.perfilBioQ_Leutocitos !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- TP -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">TP</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_TP"
                                   :class="infoValoracion.perfilBioQ_TP != undefined && infoValoracion.perfilBioQ_TP !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- TT -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">TT</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_TT"
                                   :class="infoValoracion.perfilBioQ_TT != undefined && infoValoracion.perfilBioQ_TT !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- TPT -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">TPT</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_TPT"
                                   :class="infoValoracion.perfilBioQ_TPT != undefined && infoValoracion.perfilBioQ_TPT !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- INR -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">INR</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_INR"
                                   :class="infoValoracion.perfilBioQ_INR != undefined && infoValoracion.perfilBioQ_INR !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Glucosa -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">Glucosa</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Glucosa"
                                   :class="infoValoracion.perfilBioQ_Glucosa != undefined && infoValoracion.perfilBioQ_Glucosa !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Creatinina -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">Creatinina</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id="" v-model="infoValoracion.perfilBioQ_Creatinina"
                                   :class="infoValoracion.perfilBioQ_Creatinina != undefined && infoValoracion.perfilBioQ_Creatinina !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Urea -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">Urea</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Urea"
                                   :class="infoValoracion.perfilBioQ_Urea != undefined && infoValoracion.perfilBioQ_Urea !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Sodio -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">Sodio</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Sodio"
                                   :class="infoValoracion.perfilBioQ_Sodio != undefined && infoValoracion.perfilBioQ_Sodio !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Potasio -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">Potasio</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Potasio"
                                   :class="infoValoracion.perfilBioQ_Potasio != undefined && infoValoracion.perfilBioQ_Potasio !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Cloro -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">Cloro</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Cloro"
                                   :class="infoValoracion.perfilBioQ_Cloro != undefined && infoValoracion.perfilBioQ_Cloro !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Calcio -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">Calcio</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Calcio"
                                   :class="infoValoracion.perfilBioQ_Calcio != undefined && infoValoracion.perfilBioQ_Calcio !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Magnesio -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">Magnesio</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Magnesio"
                                   :class="infoValoracion.perfilBioQ_Magnesio != undefined && infoValoracion.perfilBioQ_Magnesio !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Bilirrubina directa -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">Bilirrubina directa</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_BilirrubinaDirecta"
                                   :class="infoValoracion.perfilBioQ_BilirrubinaDirecta != undefined && infoValoracion.perfilBioQ_BilirrubinaDirecta !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Bilirrubina indirecta -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">Bilirrubina indirecta</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_BilirrubinaIndirecta"
                                   :class="infoValoracion.perfilBioQ_BilirrubinaIndirecta != undefined && infoValoracion.perfilBioQ_BilirrubinaIndirecta !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Bilirrubina Total -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">Bilirrubina Total</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_BilirrubinaTotal"
                                   :class="infoValoracion.perfilBioQ_BilirrubinaTotal != undefined && infoValoracion.perfilBioQ_BilirrubinaTotal !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Lipasa -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">Lipasa</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Lipasa"
                                   :class="infoValoracion.perfilBioQ_Lipasa != undefined && infoValoracion.perfilBioQ_Lipasa !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>    
                        
                        <!-- Amilasa -->
                        <div class="col-md-3">
                            <label  class="form-label fw-bold">Amilasa</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
                                   class="form-control"
                                   id=""
                                   v-model="infoValoracion.perfilBioQ_Amilasa"
                                   :class="infoValoracion.perfilBioQ_Amilasa != undefined && infoValoracion.perfilBioQ_Amilasa !='' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Otros -->
                        <div class="col-md-9">
                            <label  class="form-label fw-bold">Otros</label>
                            <input type="text" @keyup.capture="enviarDatosValoracion"
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
import swal from "sweetalert2";

const preIdStore = usePreIdStore();

export default defineComponent({

    data () {
        return{
            IMC:"",
            infoValoracion: {} as regValoracion,
            preIdStore,
            btnActualizarValoracion:false,
            
            btnAddEstudios:true,
            btnUpdateEstudios:false,
            btnActualizaEstudio:false,
        }  
    },

    methods: {
        calcularIMC() {

            if(this.infoValoracion.sigVit_Peso && this.infoValoracion.sigVit_Talla){
                this.infoValoracion.sigVit_IMC = (this.infoValoracion.sigVit_Peso / (this.infoValoracion.sigVit_Talla * this.infoValoracion.sigVit_Talla))
                this.infoValoracion.sigVit_IMC = Number(this.infoValoracion.sigVit_IMC.toFixed(2));

                this.enviarDatosValoracion();
            }
            else{
                this.infoValoracion.sigVit_IMC = 0;
                
                this.enviarDatosValoracion();
            }
        },

        cambiarUpdateValoracion() {
            this.btnActualizarValoracion=true

            preIdStore.savePreAntecedentes(this.infoValoracion, preIdStore.pacienteID._id)
        },

        async listarEstudios() {
            await preIdStore.getEstudiosList();
        },

        async guardarEstudios(estudios_Estudio: string, estudio_Especificaciones: string) {
            if(this.btnActualizarValoracion){
                await preIdStore.updatePreAntecedentes(this.infoValoracion, preIdStore.pacienteID._id)
            }
            else{
                this.btnActualizarValoracion=true
                await preIdStore.savePreAntecedentes(this.infoValoracion, preIdStore.pacienteID._id)
            }            

            this.btnAddEstudios=false
            this.btnUpdateEstudios=true
            this.btnActualizaEstudio=false
            
            await preIdStore.saveEstudios(estudios_Estudio, estudio_Especificaciones);
            this.infoValoracion.estudios_Estudio = "";
            this.infoValoracion.estudio_Especificaciones = "";

            await this.listarEstudios();
        },

        async actualizarEstudios(estudios_Estudio: string, estudio_Especificaciones: string) {
            await preIdStore.updateEstudios(estudios_Estudio, estudio_Especificaciones);
            this.infoValoracion.estudios_Estudio = "";
            this.infoValoracion.estudio_Especificaciones = "";

            await this.listarEstudios();
        },

        async cambiarBtnActualizar(id) {
            this.btnAddEstudios=false
            this.btnUpdateEstudios=false
            this.btnActualizaEstudio=true

            await preIdStore.getEstudio(id);

            this.infoValoracion.estudio_Id = preIdStore.estudios.val_Estudios[0]._id;
            this.infoValoracion.estudios_Estudio = preIdStore.estudios.val_Estudios[0].estudio;
            this.infoValoracion.estudio_Especificaciones = preIdStore.estudios.val_Estudios[0].especifEstudio;

            await this.listarEstudios();
        },

        async actualizarEstudio() {
            if (this.infoValoracion.estudios_Estudio == "") {
                swal.fire({
                title: "Seleccione el estudio",
                icon: "warning",
                showConfirmButton: false,
                showCloseButton: true,
                toast: true,
                timer: 2500,
                timerProgressBar: true,
                position: "top-end",
                });
            } else {
                await preIdStore.updateEstudio(this.infoValoracion.estudio_Id, this.infoValoracion.estudios_Estudio, this.infoValoracion.estudio_Especificaciones);

                this.btnAddEstudios=false
                this.btnUpdateEstudios=true
                this.btnActualizaEstudio=false

                this.infoValoracion.estudio_Id = "";
                this.infoValoracion.estudios_Estudio = "";
                this.infoValoracion.estudio_Especificaciones = "";

                await this.listarEstudios();
            }
        },

        async validaEliminarEstudio(idEstudio: string) {
            swal
                .fire({
                html: "¿Esta seguro de eliminar el estudio?",
                icon: "warning",
                showConfirmButton: true,
                showCancelButton: true,
                toast: true,
                })
                .then((result) => {
                if (result.isConfirmed) {
                    this.eliminarEstudio(idEstudio);
                }
                });
        },

        async eliminarEstudio(idEstudio: string) {
            await preIdStore.deleteEstudio(idEstudio);
            await this.listarEstudios();
        },

        enviarDatosValoracion() {
            this.$emit('recibe-datos-valoracion', preIdStore.APPAlergias = this.infoValoracion.antPersPat_Alergias,
                                                    preIdStore.APPQuirurgicos= this.infoValoracion.antPersPat_Quirurgicos,
                                                    preIdStore.APPEndocrinologicos= this.infoValoracion.antPersPat_Endocrinologicos,
                                                    preIdStore.APPUrologicos= this.infoValoracion.antPersPat_Urologicos,
                                                    preIdStore.APPTraumaticos= this.infoValoracion.antPersPat_Traumaticos,
                                                    preIdStore.APPOrtopedicos= this.infoValoracion.antPersPat_Ortopedicos,
                                                    preIdStore.APPTransfuciones= this.infoValoracion.antPersPat_Transfusiones,
                                                    preIdStore.APPComplicaciones= this.infoValoracion.antPersPat_CompAnestPrev,
                                                    preIdStore.APPEstadoPsiquico= this.infoValoracion.antPersPat_EstadoPsiq,
                                                    preIdStore.APPMedicacion= this.infoValoracion.antPersPat_MedActual,
                                                    
                                                    preIdStore.APNPHorasAyuno= this.infoValoracion.antPersNoPat_HrsAyuno,
                                                    preIdStore.APNPTabaquismo= this.infoValoracion.antPersNoPat_Tabaquismo,
                                                    preIdStore.APNPEtilismo= this.infoValoracion.antPersNoPat_Etilismo,
                                                    preIdStore.APNPAdicciones= this.infoValoracion.antPersNoPat_Adicciones,
                                                    preIdStore.APNPInmunizaciones= this.infoValoracion.antPersNoPat_Inmunizaciones,
                                                    
                                                    preIdStore.AntecedentesImportancia= this.infoValoracion.antPersNoPat_AntImportQx,
                                                    
                                                    preIdStore.SEdad= this.infoValoracion.sigVit_Edad,
                                                    preIdStore.Temperatura= this.infoValoracion.sigVit_Temperatura,
                                                    preIdStore.FrecuenciaCardiaca= this.infoValoracion.sigVit_FrecuCardiaca,
                                                    preIdStore.FrecuenciaRespiratoria= this.infoValoracion.sigVit_FrecuRespiratoria,
                                                    preIdStore.Peso= this.infoValoracion.sigVit_Peso,
                                                    preIdStore.Talla= this.infoValoracion.sigVit_Talla,
                                                    preIdStore.IMC= this.infoValoracion.sigVit_IMC,
                                                    preIdStore.TensionArterial= this.infoValoracion.sigVit_TensionArterial,
                                                    preIdStore.SaturacionOxigeno= this.infoValoracion.sigVit_SaturacionOxigeno,
                                                    preIdStore.Mallampati= this.infoValoracion.viaAerea_Mallampati,
                                                    preIdStore.PatilAldreti= this.infoValoracion.viaAerea_PatilAldreti,
                                                    preIdStore.AperturaBucal= this.infoValoracion.viaAerea_AperturaBucal,
                                                    preIdStore.Distancia= this.infoValoracion.viaAerea_Distancia,
                                                    preIdStore.Protusion= this.infoValoracion.viaAerea_Protusion,
                                                    preIdStore.IPID= this.infoValoracion.viaAerea_Ipid,
                                                    preIdStore.Glasgow= this.infoValoracion.viaAerea_Glasgow,
                                                    preIdStore.NYHA= this.infoValoracion.viaAerea_NYHA,
                                                    preIdStore.Goldman= this.infoValoracion.viaAerea_Goldman,
                                                    preIdStore.RiesgosTrombosis= this.infoValoracion.viaAerea_RiesgoTrombosis,
                                                    preIdStore.ClasificacionASA= this.infoValoracion.viaAerea_ClasificacionASA,
                                                    preIdStore.VTipoCirugia= this.infoValoracion.viaAerea_TipoCirugia,
                                                    preIdStore.RiesgoAnestesico= this.infoValoracion.viaAerea_RiesgoAnestesico,

                                                    preIdStore.Estudio= this.infoValoracion.estudios_Estudio,
                                                    preIdStore.EspecificarEstudio= this.infoValoracion.estudio_Especificaciones,

                                                    preIdStore.FechaRealizacion= this.infoValoracion.perfilBioQ_FechaRealizacion,
                                                    preIdStore.GrupoSanguineo= this.infoValoracion.perfilBioQ_GrupoSanguineo,
                                                    preIdStore.Hemoglobina= this.infoValoracion.perfilBioQ_Hemoglobina,
                                                    preIdStore.Hematocrito= this.infoValoracion.perfilBioQ_Hematocrito,
                                                    preIdStore.Plaquetas= this.infoValoracion.perfilBioQ_Plaquetas,
                                                    preIdStore.Leutocitos= this.infoValoracion.perfilBioQ_Leutocitos,
                                                    preIdStore.TP= this.infoValoracion.perfilBioQ_TP,
                                                    preIdStore.TT= this.infoValoracion.perfilBioQ_TT,
                                                    preIdStore.TPT= this.infoValoracion.perfilBioQ_TPT,
                                                    preIdStore.INR= this.infoValoracion.perfilBioQ_INR,
                                                    preIdStore.Glucosa= this.infoValoracion.perfilBioQ_Glucosa,
                                                    preIdStore.Creatinina= this.infoValoracion.perfilBioQ_Creatinina,
                                                    preIdStore.Urea= this.infoValoracion.perfilBioQ_Urea,
                                                    preIdStore.Sodio= this.infoValoracion.perfilBioQ_Sodio,
                                                    preIdStore.Potasio= this.infoValoracion.perfilBioQ_Potasio,
                                                    preIdStore.Cloro= this.infoValoracion.perfilBioQ_Cloro,
                                                    preIdStore.Calcio= this.infoValoracion.perfilBioQ_Calcio,
                                                    preIdStore.Megnesio= this.infoValoracion.perfilBioQ_Magnesio,
                                                    preIdStore.BilirrubinaDirecta= this.infoValoracion.perfilBioQ_BilirrubinaDirecta,
                                                    preIdStore.BilirrubinaIndirecta= this.infoValoracion.perfilBioQ_BilirrubinaIndirecta,
                                                    preIdStore.BilirrubimaTotal= this.infoValoracion.perfilBioQ_BilirrubinaTotal,
                                                    preIdStore.Lipasa= this.infoValoracion.perfilBioQ_Lipasa,
                                                    preIdStore.Amilasa= this.infoValoracion.perfilBioQ_Amilasa,
                                                    preIdStore.PerfilOtros= this.infoValoracion.perfilBioQ_Otros,

                                                    preIdStore.Cabeza= this.infoValoracion.expFis_VASCabeza,
                                                    preIdStore.Cuello= this.infoValoracion.expFis_VASCuello,
                                                    preIdStore.Respiratorio= this.infoValoracion.expFis_VASRespiratorio,
                                                    preIdStore.Cadiovascular= this.infoValoracion.expFis_VASCardioVasc,
                                                    preIdStore.Hipertension= this.infoValoracion.expFis_VASHipertension,
                                                    preIdStore.Abdomen= this.infoValoracion.expFis_VASAbdomen,
                                                    preIdStore.Genitourinario= this.infoValoracion.expFis_VASGenUr,
                                                    preIdStore.MusculoEsqueletico= this.infoValoracion.expFis_VASMuscEsq,
                                                    preIdStore.Neurologico= this.infoValoracion.expFis_VASNeuro,
                                                    preIdStore.PielFaneras= this.infoValoracion.expFis_VASPielFaneras,
                                                    )

        }
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
  backdrop-filter: blur(40px) brightness(97%);
}
.largoContenedor{
    height: 535px
}
.btn-abajo{
    align-self: flex-end;   
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
.color-texto-tabla{
    color: #002D60;
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
    width: 100%;        
}
.btn-guardar{
    --bs-btn-bg: none;
    --bs-btn-color: #A0A6B2;    
    --bs-btn-border-color: #E88300;
    --bs-btn-hover-bg: #edeff3;
    --bs-btn-hover-color: #E88300;
    --bs-btn-hover-border-color: #E88300;          
    --bs-btn-active-bg: none;
    --bs-btn-active-color: #E88300;
    --bs-btn-active-border-color: #E88300;
    width: 100%;    
    border: none;        
}
/* Margenes */
.margen-input{
    margin-bottom: 25px;
}
.margenRadio{
    margin-right: 10px;
}
.margen-tabaquismo{
    margin-top: 25px;
}
.deslizar {
  overflow: scroll;
  overflow-x: hidden;
  height: 400px;
  margin-top: 15px;
}
.deslizar-celda{
  overflow: scroll;
  overflow-x: hidden;
  height: auto;
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

/* table{
    table-layout: fixed;
    width: 100%;
} */

.td-ajuste{
    width:500px; 
    height:80px; 
    word-wrap: break-word; 
    overflow-y: scroll; 
    overflow-x: hidden; 
    display: block;
}

</style>