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
                data-title="Perfil bioquímico"> EXÁMENES </button>
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
                                              :class="infoValoracion.antPersPat_Alergias != undefined ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Quirúrgicos -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Quirúrgicos </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_Quirurgicos"
                                              :class="infoValoracion.antPersPat_Quirurgicos != undefined ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>
                                
                                <!-- Endocrinológicos -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Endocrinológicos </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_Endocrinologicos"
                                              :class="infoValoracion.antPersPat_Endocrinologicos != undefined ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Urológicos -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Urológicos </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_Urologicos"
                                              :class="infoValoracion.antPersPat_Urologicos != undefined ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Traumáticos -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Traumáticos </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_Traumaticos"
                                              :class="infoValoracion.antPersPat_Traumaticos != undefined ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Ortopédicos -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Ortopédicos </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_Ortopedicos"
                                              :class="infoValoracion.antPersPat_Ortopedicos != undefined ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Transfusiones previas -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Transfusiones previas </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_Transfusiones"
                                              :class="infoValoracion.antPersPat_Transfusiones != undefined ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Complicaciones anestésicas previas -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Complicaciones anestésicas previas </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_CompAnestPrev"
                                              :class="infoValoracion.antPersPat_CompAnestPrev != undefined ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>
                                
                                <!-- Estado psiquico -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Estado psiquico </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_EstadoPsiq"
                                              :class="infoValoracion.antPersPat_EstadoPsiq != undefined ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>
                                
                                <!-- Medicación actual -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Medicación actual </label>
                                    <textarea type="text"
                                              class="form-control"
                                              rows="2"
                                              v-model="infoValoracion.antPersPat_MedActual"
                                              :class="infoValoracion.antPersPat_MedActual != undefined ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>
                            </div> 
                        </div>

                        <hr />
                        
                        <!-- No patológicos -->
                        <div class="col row">
                            <div class="g-3">
                                <h5 class="col-12 fw-bold"> No patológicos </h5>
                                <!-- Horas de ayuno (hrs) -->
                                <div class="col-md-6">
                                    <label for="" class="form-label fw-bold"> Horas de ayuno (hrs) </label>
                                    <input type="text"
                                           class="form-control margen-input"
                                           id=""
                                           v-model="infoValoracion.antPersNoPat_HrsAyuno"
                                           :class="infoValoracion.antPersNoPat_HrsAyuno != undefined ?
                                                  'form-control border border-success formSombra' : 'form-control'">
                                </div>

                                <!-- Tabaquismo -->
                                <div class="col-md-6"></div>
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold margen-tabaquismo"> Tabaquismo </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersNoPat_Tabaquismo"
                                              :class="infoValoracion.antPersNoPat_Tabaquismo != undefined ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Etilismo -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Etilismo </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersNoPat_Etilismo"
                                              :class="infoValoracion.antPersNoPat_Etilismo != undefined ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Adicciones -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Adicciones </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersNoPat_Adicciones"
                                              :class="infoValoracion.antPersNoPat_Adicciones != undefined ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>
                                
                                <!-- Inmunizaciones -->
                                <div class="col-md-12">
                                    <label for="" class="form-label fw-bold"> Inmunizaciones </label>
                                    <textarea type="text"
                                              class="form-control margen-input"
                                              rows="2"
                                              v-model="infoValoracion.antPersNoPat_Inmunizaciones"
                                              :class="infoValoracion.antPersNoPat_Inmunizaciones != undefined ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Antecedentes de importancia para el procedimiento quirúrgico -->
                                <div class="col-md-12">                                    
                                    <h5 class="col-12 fw-bold margen-ante-impor"> Antecedentes de importancia </h5>
                                    <textarea class="form-control deslizar"
                                              id=""
                                              rows="12"
                                              v-model="infoValoracion.antPersNoPat_AntImportQx"
                                              :class="infoValoracion.antPersNoPat_AntImportQx != undefined ?
                                                     'form-control border border-success formSombra' : 'form-control'"></textarea>
                                </div>

                                <!-- Botón Guardar/Actuazlizar -->
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
                                        
                            </div>                            
                        </div>
                    </form>
                </div>
            </div>

            <!-- Div Formulario Exploración Física -->
            <div class="tab-pane fade" id="exploracion">
                <div class="col-12 bordePrincipal largoContenedor">
                    <form @submit.prevent="" class="row g-3">
                        <h5 class="fw-bold">EXPLORACIÓN FÍSICA</h5>
                        <h5 class="fw-bold">Signos Vitales</h5>

                        <div class="col-md-2">
                            <label for="" class="form-label fw-bold">Edad</label>
                            <input type="text" class="form-control" id="" v-model="infoValoracion.sigVit_Edad"
                            :class="infoValoracion.sigVit_Edad != undefined ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-2">
                            <label for="" class="form-label fw-bold">Temperatura</label>
                            <input type="text" class="form-control" id="" v-model="infoValoracion.sigVit_Temperatura"
                            :class="infoValoracion.sigVit_Temperatura != undefined ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-2"></div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Frecuencia Cardíaca (x min)</label>
                            <input type="text" class="form-control" id="" placeholder="x min" v-model="infoValoracion.sigVit_FrecuCardiaca"
                            :class="infoValoracion.sigVit_FrecuCardiaca != undefined ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Frecuencia Respiratoria (x min)</label>
                            <input type="text" class="form-control" id="" placeholder="x min" v-model="infoValoracion.sigVit_FrecuRespiratoria"
                            :class="infoValoracion.sigVit_FrecuRespiratoria != undefined ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <div class="col-md-2">
                            <label for="" class="form-label fw-bold">Peso (kg)</label>
                            <input type="text" class="form-control" id="" v-model="infoValoracion.sigVit_Peso" @keyup.capture="calcularIMC"
                            :class="infoValoracion.sigVit_Peso != undefined ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-2">
                            <label for="" class="form-label fw-bold">Talla (m)</label>
                            <input type="text" class="form-control" id="" v-model="infoValoracion.sigVit_Talla" @keyup.capture="calcularIMC"
                            :class="infoValoracion.sigVit_Talla != undefined ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-2">
                            <label for="" class="form-label fw-bold">IMC                                 
                                <span data-title="IMC=Peso(Kg)/Estatura&sup2(mts)">
                                    <font-awesome-icon icon="fa-solid fa-circle-info" />
                                </span>
                            </label>
                            <input type="text" class="form-control" id="" v-model="infoValoracion.sigVit_IMC" readonly
                            :class="infoValoracion.sigVit_IMC != undefined ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Tensión Arterial (mmHg)</label>
                            <input type="text" class="form-control" id="" placeholder="mmHg" v-model="infoValoracion.sigVit_TensionArterial"
                            :class="infoValoracion.sigVit_TensionArterial != undefined ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Saturación de Oxígeno (%)</label>
                            <input type="text" class="form-control" id="" placeholder="%" v-model="infoValoracion.sigVit_SaturacionOxigeno"
                            :class="infoValoracion.sigVit_SaturacionOxigeno != undefined ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <!-- Botón Guardar/Actuazlizar -->
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

            <!-- Div Formulario Vía Aérea -->
            <div class="tab-pane fade" id="via">
                <div class="col-12 bordePrincipal largoContenedor">
                    <form class="row g-3">
                        <h5 class="fw-bold"> Valoración de Vía Aérea y Otras Escalas </h5>
                        
                        <!-- Mallampati -->
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold"> Mallampati </label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoValoracion.viaAerea_Mallampati"
                                    :class="infoValoracion.viaAerea_Mallampati != 'Seleccione...' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
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
                                    :class="infoValoracion.viaAerea_PatilAldreti != 'Seleccione...' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
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
                                    :class="infoValoracion.viaAerea_AperturaBucal != 'Seleccione...' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
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
                                    :class="infoValoracion.viaAerea_Distancia != 'Seleccione...' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
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
                                    :class="infoValoracion.viaAerea_Protusion != 'Seleccione...' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
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
                                    :class="infoValoracion.viaAerea_Ipid != 'Seleccione...' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
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
                                    :class="infoValoracion.viaAerea_Glasgow != 'Seleccione...' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
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
                                    :class="infoValoracion.viaAerea_NYHA != 'Seleccione...' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
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
                                    :class="infoValoracion.viaAerea_Goldman != 'Seleccione...' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
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
                                    :class="infoValoracion.viaAerea_RiesgoTrombosis != 'Seleccione...' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
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
                                    :class="infoValoracion.viaAerea_ClasificacionASA != 'Seleccione...' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
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
                                    :class="infoValoracion.viaAerea_TipoCirugia != 'Seleccione...' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
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
                                    :class="infoValoracion.viaAerea_RiesgoAnestesico != 'Seleccione...' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Riesgo Alto</option>
                                <option>Riesgo Medio</option>
                                <option>Riesgo Bajo</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Div Formulario Estudios -->
            <div class="tab-pane fade" id="estudios">
                <div class="col-12 bordePrincipal largoContenedor">
                    <form class="row g-3">
                        <h5 class="fw-bold fw-bold">ESTUDIOS</h5>           
                        
                        <!-- Estudio -->
                        <div class="col-md-8">
                            <label for="inputState" class="form-label fw-bold">Estudio</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoValoracion.estudios_Estudio"
                                    :class="infoValoracion.estudios_Estudio != 'Seleccione...' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
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
                                      :class="infoValoracion.estudio_Especificaciones != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>
                    </form>
                </div>            
            </div>

            <!-- Div Formulario Exámenes -->
            <div class="tab-pane fade" id="examenes">
                <div class="col-12 bordePrincipal">
                    <form class="row g-3">
                        <!-- Exámenes / Perfil Bioquímico -->
                        <h5 class="fw-bold">EXÁMENES</h5>
                        <h5 class="fw-bold">Perfil Bioquímico</h5>

                        <!-- Fecha de realización -->
                        <div class="col-md-6">
                            <label for="" class="form-label fw-bold">Fecha de realización</label>
                            <input type="date"
                                   class="form-control"
                                   id=""
                                   v-model="examenes.fechaRealizacion"
                                   :class="examenes.fechaRealizacion != Date ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <!-- Grupo sanguíneo -->
                        <div class="col-md-6">
                            <label for="inputState" class="form-label fw-bold">Grupo sanguíneo</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="examenes.grupoSanguineo"
                                    :class="examenes.grupoSanguineo != 'Seleccione...' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
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
                                   v-model="examenes.hemoglobina"
                                   :class="examenes.hemoglobina != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Hematocrito -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Hematocrito</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="examenes.hematocrito"
                                   :class="examenes.hemoglobina != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Plaquetas -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Plaquetas</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="examenes.plaquetas"
                                   :class="examenes.plaquetas != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Leutocitos -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Leutocitos</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="examenes.leutocitos"
                                   :class="examenes.leutocitos != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- TP -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">TP</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="examenes.TP"
                                   :class="examenes.TP != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- TT -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">TT</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="examenes.TT"
                                   :class="examenes.TT != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- TPT -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">TPT</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="examenes.TPT"
                                   :class="examenes.TPT != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- INR -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">INR</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="examenes.INR"
                                   :class="examenes.INR != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Glucosa -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Glucosa</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="examenes.glucosa"
                                   :class="examenes.glucosa != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Creatinina -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Creatinina</label>
                            <input type="text"
                                   class="form-control"
                                   id="" v-model="examenes.creatinina"
                                   :class="examenes.creatinina != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Urea -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Urea</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="examenes.urea"
                                   :class="examenes.urea != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Sodio -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Sodio</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="examenes.sodio"
                                   :class="examenes.sodio != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Potasio -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Potasio</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="examenes.potasio"
                                   :class="examenes.potasio != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Cloro -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Cloro</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="examenes.cloro"
                                   :class="examenes.cloro != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Calcio -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Calcio</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="examenes.calcio"
                                   :class="examenes.calcio != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Magnesio -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Magnesio</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="examenes.magnesio"
                                   :class="examenes.magnesio != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Bilirrubina directa -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Bilirrubina directa</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="examenes.bilirrubinaDirecta"
                                   :class="examenes.bilirrubinaDirecta != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Bilirrubina indirecta -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Bilirrubina indirecta</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="examenes.bilirrubinaIndirecta"
                                   :class="examenes.bilirrubinaIndirecta != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Bilirrubina Total -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Bilirrubina Total</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="examenes.bilirrubinaTotal"
                                   :class="examenes.bilirrubinaTotal != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Lipasa -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Lipasa</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="examenes.lipasa"
                                   :class="examenes.lipasa != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>    
                        
                        <!-- Amilasa -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Amilasa</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="examenes.amilasa"
                                   :class="examenes.amilasa != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Otros -->
                        <div class="col-md-9">
                            <label for="" class="form-label fw-bold">Otros</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="examenes.otros"
                                   :class="examenes.otros != '' ?
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

            examenes: {
                fechaRealizacion: Date,
                grupoSanguineo: "Seleccione...",
                hemoglobina: "",
                hematocrito: "",
                plaquetas: "",
                leutocitos: "",
                TP: "",
                TT: "",
                TPT: "",
                INR: "",
                glucosa: "",
                creatinina: "",
                urea: "",
                sodio: "",
                potasio: "",
                cloro: "",
                calcio: "",
                magnesio: "",
                bilirrubinaDirecta: "",
                bilirrubinaIndirecta: "",
                bilirrubinaTotal: "",
                lipasa: "",
                amilasa: "",
                otros: ""
            },

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

        prueba(infoValoracion: any){
            console.log(infoValoracion);            
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
  margin-bottom: 10px;
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