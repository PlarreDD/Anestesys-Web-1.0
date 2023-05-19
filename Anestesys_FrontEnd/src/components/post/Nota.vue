<template>
    <div>
        <ul class="nav nav-pills mb-3 text-center" id="">
            <li class="nav-item col-md-6" >
                <button class="btn btn-nav-bar fw-bold active"
                        id="nota-post-anes"
                        data-bs-toggle="pill"
                        data-bs-target="#notaPost"
                        type="button"
                        aria-selected="true">NOTA POST-ANESTÉSICA</button>
            </li>

            <li class="nav-item col-md-6" >
                <button class="btn btn-nav-bar fw-bold"
                        :disabled="preIdStore.generoPaciente == 'Femenino' ? false : true"
                        id="caso-obst"
                        data-bs-toggle="pill"
                        data-bs-target="#caso"
                        type="button"
                        aria-selected="false"
                        >CASO OBSTÉTRICO RECIÉN NACIDO</button>
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
                                v-model="postAnestStore.TecnicaAnestesica"
                                :disabled="true"
                                mode="tags"
                                aria-readonly="true"
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
                                        @click="postAnestStore.updateNotaPA(infoNotaPost, preIdStore.pacienteID._id, postAnestStore.TecnicaAnestesica)"
                                        > ACTUALIZAR </button> 
                            </template>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Caso Obstétrico Recién Nacido -->
            <div class="tab-pane fade" id="caso">
                <div class="col-12 bordePrincipal">
                    <form @submit.prevent="" class="row g-3">
                        <h5 class="fw-bold">CASO OBSTETRICO</h5>
                        <!-- Número de productos -->
                        <div class="col-md-2">
                            <label for="" class="form-label fw-bold">Número de productos</label>                            
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoNotaPost.casoObsRecNac_NumProd"
                                    :class="infoNotaPost.casoObsRecNac_NumProd != '' && infoNotaPost.casoObsRecNac_NumProd != undefined ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </div>

                        <!-- Datos bebé # -->
                        <div class="col-md-12">                            

                            <ul class="nav nav-pills justify-content-start">

                                <li class="nav-item" 
                                    :class="infoNotaPost.casoObsRecNac_NumProd == undefined || infoNotaPost.casoObsRecNac_NumProd == '' ? 'visible' : 'invisible'">
                                    <button class="btn btn-nav-caso fw-bold active"
                                            id="casoCero" data-bs-toggle="pill" data-bs-target="#caso-cero"
                                            type="button" aria-selected="true">-</button>
                                </li>
                                <li class="nav-item"
                                    :class="Number(infoNotaPost.casoObsRecNac_NumProd) >=1 ? 'visible' : 'invisible'">
                                    <button class="btn btn-nav-caso fw-bold"
                                            id="casoUno" data-bs-toggle="pill" data-bs-target="#caso-uno"
                                            type="button" aria-selected="false">1</button>
                                </li>
                                <li class="nav-item"
                                    :class="Number(infoNotaPost.casoObsRecNac_NumProd) >=2 ? 'visible' : 'invisible'">
                                    <button class="btn btn-nav-caso fw-bold"                                            
                                            id="casoDos" data-bs-toggle="pill" data-bs-target="#caso-dos" 
                                            type="button" aria-selected="false">2</button>
                                </li>
                                <li class="nav-item"
                                    :class="Number(infoNotaPost.casoObsRecNac_NumProd) >=3 ? 'visible' : 'invisible'">
                                    <button class="btn btn-nav-caso fw-bold"
                                            id="casoTres" data-bs-toggle="pill" data-bs-target="#caso-tres"
                                            type="button" aria-selected="false">3</button>
                                </li>
                                <li class="nav-item" 
                                    :class="Number(infoNotaPost.casoObsRecNac_NumProd) >=4 ? 'visible' : 'invisible'">
                                    <button class="btn btn-nav-caso fw-bold"                                            
                                            id="casoCuatro" data-bs-toggle="pill" data-bs-target="#caso-cuatro" 
                                            type="button" aria-selected="false">4</button>
                                </li>
                                <li class="nav-item"
                                    :class="Number(infoNotaPost.casoObsRecNac_NumProd) >=5 ? 'visible' : 'invisible'">
                                    <button class="btn btn-nav-caso fw-bold"
                                            id="casoCinco" data-bs-toggle="pill" data-bs-target="#caso-cinco"
                                            type="button" aria-selected="false">5</button>
                                </li>
                                <li class="nav-item"
                                    :class="Number(infoNotaPost.casoObsRecNac_NumProd) ==6 ? 'visible' : 'invisible'">
                                    <button class="btn btn-nav-caso fw-bold"                                            
                                            id="casoSeis" data-bs-toggle="pill" data-bs-target="#caso-seis" 
                                            type="button" aria-selected="false">6</button>
                                </li>
                            </ul>

                            <div class="tab-content col-md-12" id="">

                                <div class="tab-pane fade show active" id="caso-cero">
                                    <fieldset class="bordeScheduler">
                                        <h5 class="fw-bold">Datos del bebé -</h5>
                                        <div class="row g-3">
                                            <!-- Género -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label col-12 fw-bold">Género</label>
                                                <input type="radio"
                                                    class="btn-check"
                                                    name="generoCaso"
                                                    id="masculinoCaso"
                                                    autocomplete="off"
                                                    value="Masculino"
                                                    v-model="infoNotaPost.casoObsRecNac_Genero">
                                                <label class="btn btn-radio margenRadio" for="masculinoCaso">Masculino</label>

                                                <input type="radio"
                                                    class="btn-check"
                                                    name="generoCaso"
                                                    id="femeninoCaso"
                                                    autocomplete="off"
                                                    value="Femenino"
                                                    v-model="infoNotaPost.casoObsRecNac_Genero">
                                                <label class="btn btn-radio" for="femeninoCaso">Femenino</label>                            
                                            </div>

                                            <!-- Hora de Nacimiento -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Hora de Nacimiento</label>
                                                <input type="time"
                                                    class="form-control"
                                                    id="horaNacimiento"
                                                    v-model="infoNotaPost.casoObsRecNac_HrNacimiento"
                                                    :class="infoNotaPost.casoObsRecNac_HrNacimiento != '' && infoNotaPost.casoObsRecNac_HrNacimiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Alumbramiento -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Alumbramiento</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Alumbramiento"
                                                    :class="infoNotaPost.casoObsRecNac_Alumbramiento != '' && infoNotaPost.casoObsRecNac_Alumbramiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 1 min -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Apgar 1 min</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Apgar1"
                                                    :class="infoNotaPost.casoObsRecNac_Apgar1 != '' && infoNotaPost.casoObsRecNac_Apgar1 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 5 min -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Apgar 5 min</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Apgar5"
                                                    :class="infoNotaPost.casoObsRecNac_Apgar5 != '' && infoNotaPost.casoObsRecNac_Apgar5 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Capurro -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Capurro</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Capurro"
                                                    :class="infoNotaPost.casoObsRecNac_Capurro != '' && infoNotaPost.casoObsRecNac_Capurro != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Peso (gm) -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Peso (gm)</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Peso"
                                                    :class="infoNotaPost.casoObsRecNac_Peso != '' && infoNotaPost.casoObsRecNac_Peso != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Talla (cm) -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Talla (cm)</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Talla"
                                                    :class="infoNotaPost.casoObsRecNac_Talla != '' && infoNotaPost.casoObsRecNac_Talla != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <div class="tab-pane fade" id="caso-uno">
                                    <fieldset class="bordeScheduler">
                                        <h5 class="fw-bold">Datos del bebé 1</h5>
                                        <div class="row g-3">
                                            <!-- Género -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label col-12 fw-bold">Género</label>
                                                <input type="radio"
                                                    class="btn-check"
                                                    name="generoCaso"
                                                    id="masculinoCaso"
                                                    autocomplete="off"
                                                    value="Masculino"
                                                    v-model="infoNotaPost.casoObsRecNac_Genero">
                                                <label class="btn btn-radio margenRadio" for="masculinoCaso">Masculino</label>

                                                <input type="radio"
                                                    class="btn-check"
                                                    name="generoCaso"
                                                    id="femeninoCaso"
                                                    autocomplete="off"
                                                    value="Femenino"
                                                    v-model="infoNotaPost.casoObsRecNac_Genero">
                                                <label class="btn btn-radio" for="femeninoCaso">Femenino</label>                            
                                            </div>

                                            <!-- Hora de Nacimiento -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Hora de Nacimiento</label>
                                                <input type="time"
                                                    class="form-control"
                                                    id="horaNacimiento"
                                                    v-model="infoNotaPost.casoObsRecNac_HrNacimiento"
                                                    :class="infoNotaPost.casoObsRecNac_HrNacimiento != '' && infoNotaPost.casoObsRecNac_HrNacimiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Alumbramiento -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Alumbramiento</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Alumbramiento"
                                                    :class="infoNotaPost.casoObsRecNac_Alumbramiento != '' && infoNotaPost.casoObsRecNac_Alumbramiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 1 min -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Apgar 1 min</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Apgar1"
                                                    :class="infoNotaPost.casoObsRecNac_Apgar1 != '' && infoNotaPost.casoObsRecNac_Apgar1 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 5 min -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Apgar 5 min</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Apgar5"
                                                    :class="infoNotaPost.casoObsRecNac_Apgar5 != '' && infoNotaPost.casoObsRecNac_Apgar5 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Capurro -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Capurro</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Capurro"
                                                    :class="infoNotaPost.casoObsRecNac_Capurro != '' && infoNotaPost.casoObsRecNac_Capurro != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Peso (gm) -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Peso (gm)</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Peso"
                                                    :class="infoNotaPost.casoObsRecNac_Peso != '' && infoNotaPost.casoObsRecNac_Peso != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Talla (cm) -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Talla (cm)</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Talla"
                                                    :class="infoNotaPost.casoObsRecNac_Talla != '' && infoNotaPost.casoObsRecNac_Talla != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                
                                <div class="tab-pane fade" id="caso-dos">
                                    <fieldset class="bordeScheduler">
                                        <h5 class="fw-bold">Datos del bebé 2</h5>
                                        <div class="row g-3">
                                            <!-- Género -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label col-12 fw-bold">Género</label>
                                                <input type="radio"
                                                    class="btn-check"
                                                    name="generoCaso"
                                                    id="masculinoCaso"
                                                    autocomplete="off"
                                                    value="Masculino"
                                                    v-model="infoNotaPost.casoObsRecNac_Genero">
                                                <label class="btn btn-radio margenRadio" for="masculinoCaso">Masculino</label>

                                                <input type="radio"
                                                    class="btn-check"
                                                    name="generoCaso"
                                                    id="femeninoCaso"
                                                    autocomplete="off"
                                                    value="Femenino"
                                                    v-model="infoNotaPost.casoObsRecNac_Genero">
                                                <label class="btn btn-radio" for="femeninoCaso">Femenino</label>                            
                                            </div>

                                            <!-- Hora de Nacimiento -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Hora de Nacimiento</label>
                                                <input type="time"
                                                    class="form-control"
                                                    id="horaNacimiento"
                                                    v-model="infoNotaPost.casoObsRecNac_HrNacimiento"
                                                    :class="infoNotaPost.casoObsRecNac_HrNacimiento != '' && infoNotaPost.casoObsRecNac_HrNacimiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Alumbramiento -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Alumbramiento</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Alumbramiento"
                                                    :class="infoNotaPost.casoObsRecNac_Alumbramiento != '' && infoNotaPost.casoObsRecNac_Alumbramiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 1 min -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Apgar 1 min</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Apgar1"
                                                    :class="infoNotaPost.casoObsRecNac_Apgar1 != '' && infoNotaPost.casoObsRecNac_Apgar1 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 5 min -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Apgar 5 min</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Apgar5"
                                                    :class="infoNotaPost.casoObsRecNac_Apgar5 != '' && infoNotaPost.casoObsRecNac_Apgar5 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Capurro -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Capurro</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Capurro"
                                                    :class="infoNotaPost.casoObsRecNac_Capurro != '' && infoNotaPost.casoObsRecNac_Capurro != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Peso (gm) -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Peso (gm)</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Peso"
                                                    :class="infoNotaPost.casoObsRecNac_Peso != '' && infoNotaPost.casoObsRecNac_Peso != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Talla (cm) -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Talla (cm)</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Talla"
                                                    :class="infoNotaPost.casoObsRecNac_Talla != '' && infoNotaPost.casoObsRecNac_Talla != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <div class="tab-pane fade" id="caso-tres">
                                    <fieldset class="bordeScheduler">
                                        <h5 class="fw-bold">Datos del bebé 3</h5>
                                        <div class="row g-3">
                                            <!-- Género -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label col-12 fw-bold">Género</label>
                                                <input type="radio"
                                                    class="btn-check"
                                                    name="generoCaso"
                                                    id="masculinoCaso"
                                                    autocomplete="off"
                                                    value="Masculino"
                                                    v-model="infoNotaPost.casoObsRecNac_Genero">
                                                <label class="btn btn-radio margenRadio" for="masculinoCaso">Masculino</label>

                                                <input type="radio"
                                                    class="btn-check"
                                                    name="generoCaso"
                                                    id="femeninoCaso"
                                                    autocomplete="off"
                                                    value="Femenino"
                                                    v-model="infoNotaPost.casoObsRecNac_Genero">
                                                <label class="btn btn-radio" for="femeninoCaso">Femenino</label>                            
                                            </div>

                                            <!-- Hora de Nacimiento -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Hora de Nacimiento</label>
                                                <input type="time"
                                                    class="form-control"
                                                    id="horaNacimiento"
                                                    v-model="infoNotaPost.casoObsRecNac_HrNacimiento"
                                                    :class="infoNotaPost.casoObsRecNac_HrNacimiento != '' && infoNotaPost.casoObsRecNac_HrNacimiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Alumbramiento -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Alumbramiento</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Alumbramiento"
                                                    :class="infoNotaPost.casoObsRecNac_Alumbramiento != '' && infoNotaPost.casoObsRecNac_Alumbramiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 1 min -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Apgar 1 min</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Apgar1"
                                                    :class="infoNotaPost.casoObsRecNac_Apgar1 != '' && infoNotaPost.casoObsRecNac_Apgar1 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 5 min -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Apgar 5 min</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Apgar5"
                                                    :class="infoNotaPost.casoObsRecNac_Apgar5 != '' && infoNotaPost.casoObsRecNac_Apgar5 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Capurro -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Capurro</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Capurro"
                                                    :class="infoNotaPost.casoObsRecNac_Capurro != '' && infoNotaPost.casoObsRecNac_Capurro != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Peso (gm) -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Peso (gm)</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Peso"
                                                    :class="infoNotaPost.casoObsRecNac_Peso != '' && infoNotaPost.casoObsRecNac_Peso != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Talla (cm) -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Talla (cm)</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Talla"
                                                    :class="infoNotaPost.casoObsRecNac_Talla != '' && infoNotaPost.casoObsRecNac_Talla != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <div class="tab-pane fade" id="caso-cuatro">
                                    <fieldset class="bordeScheduler">
                                        <h5 class="fw-bold">Datos del bebé 4</h5>
                                        <div class="row g-3">
                                            <!-- Género -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label col-12 fw-bold">Género</label>
                                                <input type="radio"
                                                    class="btn-check"
                                                    name="generoCaso"
                                                    id="masculinoCaso"
                                                    autocomplete="off"
                                                    value="Masculino"
                                                    v-model="infoNotaPost.casoObsRecNac_Genero">
                                                <label class="btn btn-radio margenRadio" for="masculinoCaso">Masculino</label>

                                                <input type="radio"
                                                    class="btn-check"
                                                    name="generoCaso"
                                                    id="femeninoCaso"
                                                    autocomplete="off"
                                                    value="Femenino"
                                                    v-model="infoNotaPost.casoObsRecNac_Genero">
                                                <label class="btn btn-radio" for="femeninoCaso">Femenino</label>                            
                                            </div>

                                            <!-- Hora de Nacimiento -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Hora de Nacimiento</label>
                                                <input type="time"
                                                    class="form-control"
                                                    id="horaNacimiento"
                                                    v-model="infoNotaPost.casoObsRecNac_HrNacimiento"
                                                    :class="infoNotaPost.casoObsRecNac_HrNacimiento != '' && infoNotaPost.casoObsRecNac_HrNacimiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Alumbramiento -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Alumbramiento</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Alumbramiento"
                                                    :class="infoNotaPost.casoObsRecNac_Alumbramiento != '' && infoNotaPost.casoObsRecNac_Alumbramiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 1 min -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Apgar 1 min</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Apgar1"
                                                    :class="infoNotaPost.casoObsRecNac_Apgar1 != '' && infoNotaPost.casoObsRecNac_Apgar1 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 5 min -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Apgar 5 min</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Apgar5"
                                                    :class="infoNotaPost.casoObsRecNac_Apgar5 != '' && infoNotaPost.casoObsRecNac_Apgar5 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Capurro -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Capurro</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Capurro"
                                                    :class="infoNotaPost.casoObsRecNac_Capurro != '' && infoNotaPost.casoObsRecNac_Capurro != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Peso (gm) -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Peso (gm)</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Peso"
                                                    :class="infoNotaPost.casoObsRecNac_Peso != '' && infoNotaPost.casoObsRecNac_Peso != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Talla (cm) -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Talla (cm)</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Talla"
                                                    :class="infoNotaPost.casoObsRecNac_Talla != '' && infoNotaPost.casoObsRecNac_Talla != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <div class="tab-pane fade" id="caso-cinco">
                                    <fieldset class="bordeScheduler">
                                        <h5 class="fw-bold">Datos del bebé 5</h5>
                                        <div class="row g-3">
                                            <!-- Género -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label col-12 fw-bold">Género</label>
                                                <input type="radio"
                                                    class="btn-check"
                                                    name="generoCaso"
                                                    id="masculinoCaso"
                                                    autocomplete="off"
                                                    value="Masculino"
                                                    v-model="infoNotaPost.casoObsRecNac_Genero">
                                                <label class="btn btn-radio margenRadio" for="masculinoCaso">Masculino</label>

                                                <input type="radio"
                                                    class="btn-check"
                                                    name="generoCaso"
                                                    id="femeninoCaso"
                                                    autocomplete="off"
                                                    value="Femenino"
                                                    v-model="infoNotaPost.casoObsRecNac_Genero">
                                                <label class="btn btn-radio" for="femeninoCaso">Femenino</label>                            
                                            </div>

                                            <!-- Hora de Nacimiento -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Hora de Nacimiento</label>
                                                <input type="time"
                                                    class="form-control"
                                                    id="horaNacimiento"
                                                    v-model="infoNotaPost.casoObsRecNac_HrNacimiento"
                                                    :class="infoNotaPost.casoObsRecNac_HrNacimiento != '' && infoNotaPost.casoObsRecNac_HrNacimiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Alumbramiento -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Alumbramiento</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Alumbramiento"
                                                    :class="infoNotaPost.casoObsRecNac_Alumbramiento != '' && infoNotaPost.casoObsRecNac_Alumbramiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 1 min -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Apgar 1 min</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Apgar1"
                                                    :class="infoNotaPost.casoObsRecNac_Apgar1 != '' && infoNotaPost.casoObsRecNac_Apgar1 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 5 min -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Apgar 5 min</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Apgar5"
                                                    :class="infoNotaPost.casoObsRecNac_Apgar5 != '' && infoNotaPost.casoObsRecNac_Apgar5 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Capurro -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Capurro</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Capurro"
                                                    :class="infoNotaPost.casoObsRecNac_Capurro != '' && infoNotaPost.casoObsRecNac_Capurro != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Peso (gm) -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Peso (gm)</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Peso"
                                                    :class="infoNotaPost.casoObsRecNac_Peso != '' && infoNotaPost.casoObsRecNac_Peso != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Talla (cm) -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Talla (cm)</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Talla"
                                                    :class="infoNotaPost.casoObsRecNac_Talla != '' && infoNotaPost.casoObsRecNac_Talla != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <div class="tab-pane fade" id="caso-seis">
                                    <fieldset class="bordeScheduler">
                                        <h5 class="fw-bold">Datos del bebé 6</h5>
                                        <div class="row g-3">
                                            <!-- Género -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label col-12 fw-bold">Género</label>
                                                <input type="radio"
                                                    class="btn-check"
                                                    name="generoCaso"
                                                    id="masculinoCaso"
                                                    autocomplete="off"
                                                    value="Masculino"
                                                    v-model="infoNotaPost.casoObsRecNac_Genero">
                                                <label class="btn btn-radio margenRadio" for="masculinoCaso">Masculino</label>

                                                <input type="radio"
                                                    class="btn-check"
                                                    name="generoCaso"
                                                    id="femeninoCaso"
                                                    autocomplete="off"
                                                    value="Femenino"
                                                    v-model="infoNotaPost.casoObsRecNac_Genero">
                                                <label class="btn btn-radio" for="femeninoCaso">Femenino</label>                            
                                            </div>

                                            <!-- Hora de Nacimiento -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Hora de Nacimiento</label>
                                                <input type="time"
                                                    class="form-control"
                                                    id="horaNacimiento"
                                                    v-model="infoNotaPost.casoObsRecNac_HrNacimiento"
                                                    :class="infoNotaPost.casoObsRecNac_HrNacimiento != '' && infoNotaPost.casoObsRecNac_HrNacimiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Alumbramiento -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Alumbramiento</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Alumbramiento"
                                                    :class="infoNotaPost.casoObsRecNac_Alumbramiento != '' && infoNotaPost.casoObsRecNac_Alumbramiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 1 min -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Apgar 1 min</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Apgar1"
                                                    :class="infoNotaPost.casoObsRecNac_Apgar1 != '' && infoNotaPost.casoObsRecNac_Apgar1 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 5 min -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Apgar 5 min</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Apgar5"
                                                    :class="infoNotaPost.casoObsRecNac_Apgar5 != '' && infoNotaPost.casoObsRecNac_Apgar5 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Capurro -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Capurro</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Capurro"
                                                    :class="infoNotaPost.casoObsRecNac_Capurro != '' && infoNotaPost.casoObsRecNac_Capurro != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Peso (gm) -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Peso (gm)</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Peso"
                                                    :class="infoNotaPost.casoObsRecNac_Peso != '' && infoNotaPost.casoObsRecNac_Peso != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Talla (cm) -->
                                            <div class="col-md-4">
                                                <label for="" class="form-label fw-bold">Talla (cm)</label>
                                                <input type="text"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac_Talla"
                                                    :class="infoNotaPost.casoObsRecNac_Talla != '' && infoNotaPost.casoObsRecNac_Talla != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                                                                                    
                        </div>

                        <div class="col-md-10"></div>
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
                                        @click="postAnestStore.updateNotaPA(infoNotaPost, preIdStore.pacienteID._id, postAnestStore.TecnicaAnestesica)"
                                        > ACTUALIZAR </button> 
                            </template>
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
                        'Bloqueo peridural cervical', 'Libre de opioides'],
        }
    },

    mounted: function() {
        this.infoNotaPost.npa_Intubacion = "No";
    },

    methods: {
        cambiarUpdateNota() {
            this.btnActualizarNotaP=true
            this.infoNotaPost.npa_TecAnestFinal = String(postAnestStore.TecnicaAnestesica)
            // Método Guardar
            postAnestStore.saveNotaPA(this.infoNotaPost, preIdStore.pacienteID._id);
        },

        validarCasoObstetrico(){

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
    padding: 1em 1em 1em 1em !important;
    margin: 1em 0 0 0 !important;
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
.btn-nav-caso{
    --bs-btn-bg: #fff;
    --bs-btn-color: #002D60;    
    --bs-btn-border-color: #A0A6B2;
    --bs-btn-hover-bg: #6BD99B;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-border-color: #A0A6B2;          
    --bs-btn-active-bg: #6BD99B;
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