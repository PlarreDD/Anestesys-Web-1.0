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
                <div class="col-12 bordePrincipal" :class="preIdStore.VistaRapida == true ? '' : 'mb-5'">
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
                            <input type="radio" @change="enviarDatosNotaPost"
                                   class="btn-check"
                                   name="intubacion"
                                   id="intubacionSi"
                                   autocomplete="off"
                                   value="Sí"
                                   v-model="infoNotaPost.npa_Intubacion"> 
                            <label class="btn btn-radio margenRadio" for="intubacionSi">Sí</label>

                            <input type="radio" @change="enviarDatosNotaPost"
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
                            <textarea class="form-control" @keyup.capture="enviarDatosNotaPost"
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
                            <input type="text" @keyup.capture="enviarDatosNotaPost"
                                   class="form-control"
                                   id=""
                                   v-model="infoNotaPost.signVitEgQx_TA"
                                   :class="infoNotaPost.signVitEgQx_TA != undefined && infoNotaPost.signVitEgQx_TA != '' ?
                                        'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- FC -->
                        <div class="col-md-2 fw-bold">
                            <label for="" class="form-label">FC</label>
                            <input type="text" @keyup.capture="enviarDatosNotaPost"
                                   class="form-control"
                                   v-model="infoNotaPost.signVitEgQx_FC"
                                   :class="infoNotaPost.signVitEgQx_FC != undefined && infoNotaPost.signVitEgQx_FC != '' ?
                                        'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- FR -->
                        <div class="col-md-2 fw-bold">
                            <label for="" class="form-label">FR</label>
                            <input type="text" @keyup.capture="enviarDatosNotaPost"
                                   class="form-control"
                                   v-model="infoNotaPost.signVitEgQx_FR"
                                   :class="infoNotaPost.signVitEgQx_FR != undefined && infoNotaPost.signVitEgQx_FR != '' ?
                                        'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Temperatura -->
                        <div class="col-md-2 fw-bold">
                            <label for="" class="form-label">Temperatura</label>
                            <input type="text" @keyup.capture="enviarDatosNotaPost"
                                   class="form-control"
                                   id=""
                                   v-model="infoNotaPost.signVitEgQx_Temperatura"
                                   :class="infoNotaPost.signVitEgQx_Temperatura != undefined && infoNotaPost.signVitEgQx_Temperatura != '' ?
                                        'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Pulso -->
                        <div class="col-md-2 fw-bold">
                            <label for="" class="form-label">Pulso</label>
                            <input type="text" @keyup.capture="enviarDatosNotaPost"
                                   class="form-control"
                                   id=""
                                   v-model="infoNotaPost.signVitEgQx_Pulso"
                                   :class="infoNotaPost.signVitEgQx_Pulso != undefined && infoNotaPost.signVitEgQx_Pulso != '' ?
                                        'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- SpO2 -->
                        <div class="col-md-2 fw-bold">
                            <label for="" class="form-label">SpO2</label>
                            <input type="text" @keyup.capture="enviarDatosNotaPost"
                                   class="form-control"
                                   id=""
                                   v-model="infoNotaPost.signVitEgQx_SpO2"
                                   :class="infoNotaPost.signVitEgQx_SpO2 != undefined && infoNotaPost.signVitEgQx_SpO2 != '' ?
                                        'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- El paciente pasa a -->
                        <div class="col-md-8 fw-bold">
                            <label for="inputState" class="form-label">El paciente pasa a</label>
                            <select id="inputState" @change="enviarDatosNotaPost"                            
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
                <div class="col-12 bordePrincipal" :class="preIdStore.VistaRapida == true ? '' : 'mb-5'">
                    <form @submit.prevent="" class="row g-3">
                        <h5 class="fw-bold">CASO OBSTETRICO</h5>
                        <!-- Número de productos -->
                        <div class="col-md-2">
                            <label for="" class="form-label fw-bold">Número de productos</label>                            
                            <select id="inputState" @change="enviarDatosNotaPost"
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

                            <!-- Lista de selección de productor -->
                            <ul class="nav nav-pills justify-content-start gap-caso">
                                <!-- Caso un producto -->
                                <li class="nav-item"
                                    :class="Number(infoNotaPost.casoObsRecNac_NumProd) >=1 ? 'visible' : 'invisible'">
                                    <button class="btn btn-nav-caso fw-bold active"
                                            id="casoUno" data-bs-toggle="pill" data-bs-target="#caso-uno"
                                            type="button" aria-selected="false">1</button>
                                </li>
                                <!-- Caso dos productos -->
                                <li class="nav-item"
                                    :class="Number(infoNotaPost.casoObsRecNac_NumProd) >=2 ? 'visible' : 'invisible'">
                                    <button class="btn btn-nav-caso fw-bold"                                            
                                            id="casoDos" data-bs-toggle="pill" data-bs-target="#caso-dos" 
                                            type="button" aria-selected="false">2</button>
                                </li>
                                <!-- Caso tres productos -->
                                <li class="nav-item"
                                    :class="Number(infoNotaPost.casoObsRecNac_NumProd) >=3 ? 'visible' : 'invisible'">
                                    <button class="btn btn-nav-caso fw-bold"
                                            id="casoTres" data-bs-toggle="pill" data-bs-target="#caso-tres"
                                            type="button" aria-selected="false">3</button>
                                </li>
                                <!-- Caso cuatro productos -->
                                <li class="nav-item" 
                                    :class="Number(infoNotaPost.casoObsRecNac_NumProd) >=4 ? 'visible' : 'invisible'">
                                    <button class="btn btn-nav-caso fw-bold"                                            
                                            id="casoCuatro" data-bs-toggle="pill" data-bs-target="#caso-cuatro" 
                                            type="button" aria-selected="false">4</button>
                                </li>
                                <!-- Caso cinco productos -->
                                <li class="nav-item"
                                    :class="Number(infoNotaPost.casoObsRecNac_NumProd) >=5 ? 'visible' : 'invisible'">
                                    <button class="btn btn-nav-caso fw-bold"
                                            id="casoCinco" data-bs-toggle="pill" data-bs-target="#caso-cinco"
                                            type="button" aria-selected="false">5</button>
                                </li>
                                <!-- Caso seis productos -->
                                <li class="nav-item"
                                    :class="Number(infoNotaPost.casoObsRecNac_NumProd) ==6 ? 'visible' : 'invisible'">
                                    <button class="btn btn-nav-caso fw-bold"                                            
                                            id="casoSeis" data-bs-toggle="pill" data-bs-target="#caso-seis" 
                                            type="button" aria-selected="false">6</button>
                                </li>
                            </ul>

                            <hr/>

                            <div class="tab-content col-md-12" id="">
                                <!-- Formulario un producto -->
                                <div class="tab-pane fade show active" id="caso-uno">
                                    <fieldset class="bordeScheduler" :disabled="Number(infoNotaPost.casoObsRecNac_NumProd) >=1 ? false : true">
                                        <h5 class="fw-bold">Datos del bebé 1</h5>
                                        <div class="row g-3">
                                            <!-- Género -->
                                            <div class="col-md-3">
                                                <label for="" class="form-label col-12 fw-bold">Género</label>
                                                <input type="radio" @change="enviarDatosNotaPost"
                                                    class="btn-check"
                                                    name="generoCaso1"
                                                    id="masculinoCaso1"
                                                    autocomplete="off"
                                                    value="Masculino"
                                                    v-model="infoNotaPost.casoObsRecNac1_Genero">
                                                <label class="btn btn-radio margenRadio" for="masculinoCaso1">Masculino</label>

                                                <input type="radio" @change="enviarDatosNotaPost"
                                                    class="btn-check"
                                                    name="generoCaso1"
                                                    id="femeninoCaso1"
                                                    autocomplete="off"
                                                    value="Femenino"
                                                    v-model="infoNotaPost.casoObsRecNac1_Genero">
                                                <label class="btn btn-radio" for="femeninoCaso1">Femenino</label>                            
                                            </div>

                                            <!-- Hora de Nacimiento -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Hora de Nacimiento</label>
                                                <input type="time" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    id="horaNacimiento"
                                                    v-model="infoNotaPost.casoObsRecNac1_HrNacimiento"
                                                    :class="infoNotaPost.casoObsRecNac1_HrNacimiento != '' && infoNotaPost.casoObsRecNac1_HrNacimiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Alumbramiento -->
                                            <div class="col-md-7">
                                                <label for="" class="form-label fw-bold">Alumbramiento</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac1_Alumbramiento"
                                                    :class="infoNotaPost.casoObsRecNac1_Alumbramiento != '' && infoNotaPost.casoObsRecNac1_Alumbramiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 1 min -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Apgar 1 min</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac1_Apgar1"
                                                    :class="infoNotaPost.casoObsRecNac1_Apgar1 != '' && infoNotaPost.casoObsRecNac1_Apgar1 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 5 min -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Apgar 5 min</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac1_Apgar5"
                                                    :class="infoNotaPost.casoObsRecNac1_Apgar5 != '' && infoNotaPost.casoObsRecNac1_Apgar5 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Capurro -->
                                            <div class="col-md-8">
                                                <label for="" class="form-label fw-bold">Capurro</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac1_Capurro"
                                                    :class="infoNotaPost.casoObsRecNac1_Capurro != '' && infoNotaPost.casoObsRecNac1_Capurro != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Peso (gm) -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Peso (gm)</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac1_Peso"
                                                    :class="infoNotaPost.casoObsRecNac1_Peso != '' && infoNotaPost.casoObsRecNac1_Peso != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Talla (cm) -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Talla (cm)</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac1_Talla"
                                                    :class="infoNotaPost.casoObsRecNac1_Talla != '' && infoNotaPost.casoObsRecNac1_Talla != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <!-- Formulario dos productos -->
                                <div class="tab-pane fade" id="caso-dos">
                                    <fieldset class="bordeScheduler" :disabled="Number(infoNotaPost.casoObsRecNac_NumProd) >=2 ? false : true">
                                        <h5 class="fw-bold">Datos del bebé 2</h5>
                                        <div class="row g-3">
                                            <!-- Género -->
                                            <div class="col-md-3">
                                                <label for="" class="form-label col-12 fw-bold">Género</label>
                                                <input type="radio" @change="enviarDatosNotaPost"
                                                    class="btn-check"
                                                    name="generoCaso2"
                                                    id="masculinoCaso2"
                                                    autocomplete="off"
                                                    value="Masculino"
                                                    v-model="infoNotaPost.casoObsRecNac2_Genero">
                                                <label class="btn btn-radio margenRadio" for="masculinoCaso2">Masculino</label>

                                                <input type="radio" @change="enviarDatosNotaPost"
                                                    class="btn-check"
                                                    name="generoCaso2"
                                                    id="femeninoCaso2"
                                                    autocomplete="off"
                                                    value="Femenino"
                                                    v-model="infoNotaPost.casoObsRecNac2_Genero">
                                                <label class="btn btn-radio" for="femeninoCaso2">Femenino</label>                            
                                            </div>

                                            <!-- Hora de Nacimiento -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Hora de Nacimiento</label>
                                                <input type="time" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    id="horaNacimiento"
                                                    v-model="infoNotaPost.casoObsRecNac2_HrNacimiento"
                                                    :class="infoNotaPost.casoObsRecNac2_HrNacimiento != '' && infoNotaPost.casoObsRecNac2_HrNacimiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Alumbramiento -->
                                            <div class="col-md-7">
                                                <label for="" class="form-label fw-bold">Alumbramiento</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac2_Alumbramiento"
                                                    :class="infoNotaPost.casoObsRecNac2_Alumbramiento != '' && infoNotaPost.casoObsRecNac2_Alumbramiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 1 min -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Apgar 1 min</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac2_Apgar1"
                                                    :class="infoNotaPost.casoObsRecNac2_Apgar1 != '' && infoNotaPost.casoObsRecNac2_Apgar1 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 5 min -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Apgar 5 min</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac2_Apgar5"
                                                    :class="infoNotaPost.casoObsRecNac2_Apgar5 != '' && infoNotaPost.casoObsRecNac2_Apgar5 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Capurro -->
                                            <div class="col-md-8">
                                                <label for="" class="form-label fw-bold">Capurro</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac2_Capurro"
                                                    :class="infoNotaPost.casoObsRecNac2_Capurro != '' && infoNotaPost.casoObsRecNac2_Capurro != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Peso (gm) -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Peso (gm)</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac2_Peso"
                                                    :class="infoNotaPost.casoObsRecNac2_Peso != '' && infoNotaPost.casoObsRecNac2_Peso != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Talla (cm) -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Talla (cm)</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac2_Talla"
                                                    :class="infoNotaPost.casoObsRecNac2_Talla != '' && infoNotaPost.casoObsRecNac2_Talla != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <!-- Formulario tres productos -->
                                <div class="tab-pane fade" id="caso-tres">
                                    <fieldset class="bordeScheduler" :disabled="Number(infoNotaPost.casoObsRecNac_NumProd) >=3 ? false : true">
                                        <h5 class="fw-bold">Datos del bebé 3</h5>
                                        <div class="row g-3">
                                            <!-- Género -->
                                            <div class="col-md-3">
                                                <label for="" class="form-label col-12 fw-bold">Género</label>
                                                <input type="radio" @change="enviarDatosNotaPost"
                                                    class="btn-check"
                                                    name="generoCaso3"
                                                    id="masculinoCaso3"
                                                    autocomplete="off"
                                                    value="Masculino"
                                                    v-model="infoNotaPost.casoObsRecNac3_Genero">
                                                <label class="btn btn-radio margenRadio" for="masculinoCaso3">Masculino</label>

                                                <input type="radio" @change="enviarDatosNotaPost"
                                                    class="btn-check"
                                                    name="generoCaso3"
                                                    id="femeninoCaso3"
                                                    autocomplete="off"
                                                    value="Femenino"
                                                    v-model="infoNotaPost.casoObsRecNac3_Genero">
                                                <label class="btn btn-radio" for="femeninoCaso3">Femenino</label>                            
                                            </div>

                                            <!-- Hora de Nacimiento -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Hora de Nacimiento</label>
                                                <input type="time" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    id="horaNacimiento"
                                                    v-model="infoNotaPost.casoObsRecNac3_HrNacimiento"
                                                    :class="infoNotaPost.casoObsRecNac3_HrNacimiento != '' && infoNotaPost.casoObsRecNac3_HrNacimiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Alumbramiento -->
                                            <div class="col-md-7">
                                                <label for="" class="form-label fw-bold">Alumbramiento</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac3_Alumbramiento"
                                                    :class="infoNotaPost.casoObsRecNac3_Alumbramiento != '' && infoNotaPost.casoObsRecNac3_Alumbramiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 1 min -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Apgar 1 min</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac3_Apgar1"
                                                    :class="infoNotaPost.casoObsRecNac3_Apgar1 != '' && infoNotaPost.casoObsRecNac3_Apgar1 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 5 min -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Apgar 5 min</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac3_Apgar5"
                                                    :class="infoNotaPost.casoObsRecNac3_Apgar5 != '' && infoNotaPost.casoObsRecNac3_Apgar5 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Capurro -->
                                            <div class="col-md-8">
                                                <label for="" class="form-label fw-bold">Capurro</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac3_Capurro"
                                                    :class="infoNotaPost.casoObsRecNac3_Capurro != '' && infoNotaPost.casoObsRecNac3_Capurro != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Peso (gm) -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Peso (gm)</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac3_Peso"
                                                    :class="infoNotaPost.casoObsRecNac3_Peso != '' && infoNotaPost.casoObsRecNac3_Peso != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Talla (cm) -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Talla (cm)</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac3_Talla"
                                                    :class="infoNotaPost.casoObsRecNac3_Talla != '' && infoNotaPost.casoObsRecNac3_Talla != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <!-- Formulario cuatro productos -->
                                <div class="tab-pane fade" id="caso-cuatro">
                                    <fieldset class="bordeScheduler" :disabled="Number(infoNotaPost.casoObsRecNac_NumProd) >=4 ? false : true">
                                        <h5 class="fw-bold">Datos del bebé 4</h5>
                                        <div class="row g-3">
                                            <!-- Género -->
                                            <div class="col-md-3">
                                                <label for="" class="form-label col-12 fw-bold">Género</label>
                                                <input type="radio" @change="enviarDatosNotaPost"
                                                    class="btn-check"
                                                    name="generoCaso4"
                                                    id="masculinoCaso4"
                                                    autocomplete="off"
                                                    value="Masculino"
                                                    v-model="infoNotaPost.casoObsRecNac4_Genero">
                                                <label class="btn btn-radio margenRadio" for="masculinoCaso4">Masculino</label>

                                                <input type="radio" @change="enviarDatosNotaPost"
                                                    class="btn-check"
                                                    name="generoCaso4"
                                                    id="femeninoCaso4"
                                                    autocomplete="off"
                                                    value="Femenino"
                                                    v-model="infoNotaPost.casoObsRecNac4_Genero">
                                                <label class="btn btn-radio" for="femeninoCaso4">Femenino</label>                            
                                            </div>

                                            <!-- Hora de Nacimiento -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Hora de Nacimiento</label>
                                                <input type="time" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    id="horaNacimiento"
                                                    v-model="infoNotaPost.casoObsRecNac4_HrNacimiento"
                                                    :class="infoNotaPost.casoObsRecNac4_HrNacimiento != '' && infoNotaPost.casoObsRecNac4_HrNacimiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Alumbramiento -->
                                            <div class="col-md-7">
                                                <label for="" class="form-label fw-bold">Alumbramiento</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    id=""
                                                    v-model="infoNotaPost.casoObsRecNac4_Alumbramiento"
                                                    :class="infoNotaPost.casoObsRecNac4_Alumbramiento != '' && infoNotaPost.casoObsRecNac4_Alumbramiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 1 min -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Apgar 1 min</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac4_Apgar1"
                                                    :class="infoNotaPost.casoObsRecNac4_Apgar1 != '' && infoNotaPost.casoObsRecNac4_Apgar1 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 5 min -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Apgar 5 min</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac4_Apgar5"
                                                    :class="infoNotaPost.casoObsRecNac4_Apgar5 != '' && infoNotaPost.casoObsRecNac4_Apgar5 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Capurro -->
                                            <div class="col-md-8">
                                                <label for="" class="form-label fw-bold">Capurro</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac4_Capurro"
                                                    :class="infoNotaPost.casoObsRecNac4_Capurro != '' && infoNotaPost.casoObsRecNac4_Capurro != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Peso (gm) -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Peso (gm)</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac4_Peso"
                                                    :class="infoNotaPost.casoObsRecNac4_Peso != '' && infoNotaPost.casoObsRecNac4_Peso != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Talla (cm) -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Talla (cm)</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac4_Talla"
                                                    :class="infoNotaPost.casoObsRecNac4_Talla != '' && infoNotaPost.casoObsRecNac4_Talla != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <!-- Formulario cinco productos -->
                                <div class="tab-pane fade" id="caso-cinco">
                                    <fieldset class="bordeScheduler" :disabled="Number(infoNotaPost.casoObsRecNac_NumProd) >=5 ? false : true">
                                        <h5 class="fw-bold">Datos del bebé 5</h5>
                                        <div class="row g-3">
                                            <!-- Género -->
                                            <div class="col-md-3">
                                                <label for="" class="form-label col-12 fw-bold">Género</label>
                                                <input type="radio" @change="enviarDatosNotaPost"
                                                    class="btn-check"
                                                    name="generoCaso5"
                                                    id="masculinoCaso5"
                                                    autocomplete="off"
                                                    value="Masculino"
                                                    v-model="infoNotaPost.casoObsRecNac5_Genero">
                                                <label class="btn btn-radio margenRadio" for="masculinoCaso5">Masculino</label>

                                                <input type="radio" @change="enviarDatosNotaPost"
                                                    class="btn-check"
                                                    name="generoCaso5"
                                                    id="femeninoCaso5"
                                                    autocomplete="off"
                                                    value="Femenino"
                                                    v-model="infoNotaPost.casoObsRecNac5_Genero">
                                                <label class="btn btn-radio" for="femeninoCaso5">Femenino</label>                            
                                            </div>

                                            <!-- Hora de Nacimiento -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Hora de Nacimiento</label>
                                                <input type="time" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    id="horaNacimiento"
                                                    v-model="infoNotaPost.casoObsRecNac5_HrNacimiento"
                                                    :class="infoNotaPost.casoObsRecNac5_HrNacimiento != '' && infoNotaPost.casoObsRecNac5_HrNacimiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Alumbramiento -->
                                            <div class="col-md-7">
                                                <label for="" class="form-label fw-bold">Alumbramiento</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac5_Alumbramiento"
                                                    :class="infoNotaPost.casoObsRecNac5_Alumbramiento != '' && infoNotaPost.casoObsRecNac5_Alumbramiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 1 min -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Apgar 1 min</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac5_Apgar1"
                                                    :class="infoNotaPost.casoObsRecNac5_Apgar1 != '' && infoNotaPost.casoObsRecNac5_Apgar1 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 5 min -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Apgar 5 min</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac5_Apgar5"
                                                    :class="infoNotaPost.casoObsRecNac5_Apgar5 != '' && infoNotaPost.casoObsRecNac5_Apgar5 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Capurro -->
                                            <div class="col-md-8">
                                                <label for="" class="form-label fw-bold">Capurro</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac5_Capurro"
                                                    :class="infoNotaPost.casoObsRecNac5_Capurro != '' && infoNotaPost.casoObsRecNac5_Capurro != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Peso (gm) -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Peso (gm)</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac5_Peso"
                                                    :class="infoNotaPost.casoObsRecNac5_Peso != '' && infoNotaPost.casoObsRecNac5_Peso != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Talla (cm) -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Talla (cm)</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac5_Talla"
                                                    :class="infoNotaPost.casoObsRecNac5_Talla != '' && infoNotaPost.casoObsRecNac5_Talla != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <!-- Formulario seis productos -->
                                <div class="tab-pane fade" id="caso-seis">
                                    <fieldset class="bordeScheduler" :disabled="Number(infoNotaPost.casoObsRecNac_NumProd) ==6 ? false : true">
                                        <h5 class="fw-bold">Datos del bebé 6</h5>
                                        <div class="row g-3">
                                            <!-- Género -->
                                            <div class="col-md-3">
                                                <label for="" class="form-label col-12 fw-bold">Género</label>
                                                <input type="radio" @change="enviarDatosNotaPost"
                                                    class="btn-check"
                                                    name="generoCaso6"
                                                    id="masculinoCaso"
                                                    autocomplete="off"
                                                    value="Masculino"
                                                    v-model="infoNotaPost.casoObsRecNac6_Genero">
                                                <label class="btn btn-radio margenRadio" for="masculinoCaso">Masculino</label>

                                                <input type="radio" @change="enviarDatosNotaPost"
                                                    class="btn-check"
                                                    name="generoCaso6"
                                                    id="femeninoCaso"
                                                    autocomplete="off"
                                                    value="Femenino"
                                                    v-model="infoNotaPost.casoObsRecNac6_Genero">
                                                <label class="btn btn-radio" for="femeninoCaso">Femenino</label>                            
                                            </div>

                                            <!-- Hora de Nacimiento -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Hora de Nacimiento</label>
                                                <input type="time" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    id="horaNacimiento"
                                                    v-model="infoNotaPost.casoObsRecNac6_HrNacimiento"
                                                    :class="infoNotaPost.casoObsRecNac6_HrNacimiento != '' && infoNotaPost.casoObsRecNac6_HrNacimiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Alumbramiento -->
                                            <div class="col-md-7">
                                                <label for="" class="form-label fw-bold">Alumbramiento</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac6_Alumbramiento"
                                                    :class="infoNotaPost.casoObsRecNac6_Alumbramiento != '' && infoNotaPost.casoObsRecNac6_Alumbramiento != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 1 min -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Apgar 1 min</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac6_Apgar1"
                                                    :class="infoNotaPost.casoObsRecNac6_Apgar1 != '' && infoNotaPost.casoObsRecNac6_Apgar1 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Apgar 5 min -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Apgar 5 min</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac6_Apgar5"
                                                    :class="infoNotaPost.casoObsRecNac6_Apgar5 != '' && infoNotaPost.casoObsRecNac6_Apgar5 != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Capurro -->
                                            <div class="col-md-8">
                                                <label for="" class="form-label fw-bold">Capurro</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac6_Capurro"
                                                    :class="infoNotaPost.casoObsRecNac6_Capurro != '' && infoNotaPost.casoObsRecNac6_Capurro != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Peso (gm) -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Peso (gm)</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac6_Peso"
                                                    :class="infoNotaPost.casoObsRecNac6_Peso != '' && infoNotaPost.casoObsRecNac6_Peso != undefined ?
                                                        'form-control border border-success formSombra' : 'form-control'">
                                            </div>

                                            <!-- Talla (cm) -->
                                            <div class="col-md-2">
                                                <label for="" class="form-label fw-bold">Talla (cm)</label>
                                                <input type="text" @keyup.capture="enviarDatosNotaPost"
                                                    class="form-control"
                                                    v-model="infoNotaPost.casoObsRecNac6_Talla"
                                                    :class="infoNotaPost.casoObsRecNac6_Talla != '' && infoNotaPost.casoObsRecNac6_Talla != undefined ?
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

        },

        enviarDatosNotaPost() {
            this.$emit('recibe-datos-nota-post', postAnestStore.NotaPost=this.infoNotaPost.npa_NotaPostAnest,
                                                postAnestStore.Intubacion=this.infoNotaPost.npa_Intubacion,

                                                postAnestStore.EgresoTA=this.infoNotaPost.signVitEgQx_TA,
                                                postAnestStore.EgresoFC=this.infoNotaPost.signVitEgQx_FC,
                                                postAnestStore.EgresoFR=this.infoNotaPost.signVitEgQx_FR,
                                                postAnestStore.EgresoTemp=this.infoNotaPost.signVitEgQx_Temperatura,
                                                postAnestStore.EgresoPulso=this.infoNotaPost.signVitEgQx_Pulso,
                                                postAnestStore.EgresoSpO2=this.infoNotaPost.signVitEgQx_SpO2,
                                                postAnestStore.DestinoEgreso=this.infoNotaPost.signVitEgQx_EgresoPac,

                                                postAnestStore.NumeroProductos=this.infoNotaPost.casoObsRecNac_NumProd,
                                                postAnestStore.GeneroUno=this.infoNotaPost.casoObsRecNac1_Genero,
                                                postAnestStore.HoraNacimientoUno=this.infoNotaPost.casoObsRecNac1_HrNacimiento,
                                                postAnestStore.AlumbramientoUno=this.infoNotaPost.casoObsRecNac1_Alumbramiento,
                                                postAnestStore.Apgar1Uno=this.infoNotaPost.casoObsRecNac1_Apgar1,
                                                postAnestStore.Apgar5Uno=this.infoNotaPost.casoObsRecNac1_Apgar5,
                                                postAnestStore.CapurroUno=this.infoNotaPost.casoObsRecNac1_Capurro,
                                                postAnestStore.PesoUno=this.infoNotaPost.casoObsRecNac1_Peso,
                                                postAnestStore.TallaUno=this.infoNotaPost.casoObsRecNac1_Talla,
                                                postAnestStore.GeneroDos=this.infoNotaPost.casoObsRecNac2_Genero,
                                                postAnestStore.HoraNacimientoDos=this.infoNotaPost.casoObsRecNac2_HrNacimiento,
                                                postAnestStore.AlumbramientoDos=this.infoNotaPost.casoObsRecNac2_Alumbramiento,
                                                postAnestStore.Apgar1Dos=this.infoNotaPost.casoObsRecNac2_Apgar1,
                                                postAnestStore.Apgar5Dos=this.infoNotaPost.casoObsRecNac2_Apgar5,
                                                postAnestStore.CapurroDos=this.infoNotaPost.casoObsRecNac2_Capurro,
                                                postAnestStore.PesoDos=this.infoNotaPost.casoObsRecNac2_Peso,
                                                postAnestStore.TallaDos=this.infoNotaPost.casoObsRecNac2_Talla,
                                                postAnestStore.GeneroTres=this.infoNotaPost.casoObsRecNac3_Genero,
                                                postAnestStore.HoraNacimientoTres=this.infoNotaPost.casoObsRecNac3_HrNacimiento,
                                                postAnestStore.AlumbramientoTres=this.infoNotaPost.casoObsRecNac3_Alumbramiento,
                                                postAnestStore.Apgar1Tres=this.infoNotaPost.casoObsRecNac3_Apgar1,
                                                postAnestStore.Apgar5Tres=this.infoNotaPost.casoObsRecNac3_Apgar5,
                                                postAnestStore.CapurroTres=this.infoNotaPost.casoObsRecNac3_Capurro,
                                                postAnestStore.PesoTres=this.infoNotaPost.casoObsRecNac3_Peso,
                                                postAnestStore.TallaTres=this.infoNotaPost.casoObsRecNac3_Talla,
                                                postAnestStore.GeneroCuatro=this.infoNotaPost.casoObsRecNac4_Genero,
                                                postAnestStore.HoraNacimientoCuatro=this.infoNotaPost.casoObsRecNac4_HrNacimiento,
                                                postAnestStore.AlumbramientoCuatro=this.infoNotaPost.casoObsRecNac4_Alumbramiento,
                                                postAnestStore.Apgar1Cuatro=this.infoNotaPost.casoObsRecNac4_Apgar1,
                                                postAnestStore.Apgar5Cuatro=this.infoNotaPost.casoObsRecNac4_Apgar5,
                                                postAnestStore.CapurroCuatro=this.infoNotaPost.casoObsRecNac4_Capurro,
                                                postAnestStore.PesoCuatro=this.infoNotaPost.casoObsRecNac4_Peso,
                                                postAnestStore.TallaCuatro=this.infoNotaPost.casoObsRecNac4_Talla,
                                                postAnestStore.GeneroCinco=this.infoNotaPost.casoObsRecNac5_Genero,
                                                postAnestStore.HoraNacimientoCinco=this.infoNotaPost.casoObsRecNac5_HrNacimiento,
                                                postAnestStore.AlumbramientoCinco=this.infoNotaPost.casoObsRecNac5_Alumbramiento,
                                                postAnestStore.Apgar1Cinco=this.infoNotaPost.casoObsRecNac5_Apgar1,
                                                postAnestStore.Apgar5Cinco=this.infoNotaPost.casoObsRecNac5_Apgar5,
                                                postAnestStore.CapurroCinco=this.infoNotaPost.casoObsRecNac5_Capurro,
                                                postAnestStore.PesoCinco=this.infoNotaPost.casoObsRecNac5_Peso,
                                                postAnestStore.TallaCinco=this.infoNotaPost.casoObsRecNac5_Talla,
                                                postAnestStore.GeneroSeis=this.infoNotaPost.casoObsRecNac6_Genero,
                                                postAnestStore.HoraNacimientoSeis=this.infoNotaPost.casoObsRecNac6_HrNacimiento,
                                                postAnestStore.AlumbramientoSeis=this.infoNotaPost.casoObsRecNac6_Alumbramiento,
                                                postAnestStore.Apgar1Seis=this.infoNotaPost.casoObsRecNac6_Apgar1,
                                                postAnestStore.Apgar5Seis=this.infoNotaPost.casoObsRecNac6_Apgar5,
                                                postAnestStore.CapurroSeis=this.infoNotaPost.casoObsRecNac6_Capurro,
                                                postAnestStore.PesoSeis=this.infoNotaPost.casoObsRecNac6_Peso,
                                                postAnestStore.TallaSeis=this.infoNotaPost.casoObsRecNac6_Talla,                                                
                                                )
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
  backdrop-filter: blur(40px) brightness(97%);
}
.margenRadio {
    margin-right: 10px;
}
fieldset.bordeScheduler {
    padding: 0 0 0 0 !important;
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
    --bs-btn-hover-bg: #10b981;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-border-color: #A0A6B2;          
    --bs-btn-active-bg: #10b981;
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
.gap-caso{
    gap:10px
}
</style>