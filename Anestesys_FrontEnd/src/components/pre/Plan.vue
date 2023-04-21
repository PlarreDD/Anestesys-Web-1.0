<template>
    <div>
        <!-- Barra de Navegación -->
        <ul class="nav nav-pills mb-3 text-center centrar-li" id="">
            <!-- POSICIÓN Y CUIDADOS -->
            <li class="nav-item col-md-3" >
                <button class="btn btn-nav-bar fw-bold active"
                        id="plan"
                        data-bs-toggle="pill"
                        data-bs-target="#posicion"
                        type="button"
                        aria-selected="true">POSICIÓN Y CUIDADOS</button>
            </li>

            <!-- GENERAL -->
            <li class="nav-item col-md-2" >
                <button class="btn btn-nav-bar fw-bold"
                        id="plan"
                        data-bs-toggle="pill"
                        data-bs-target="#general"
                        type="button"
                        aria-selected="false">GENERAL</button>
            </li>

            <!-- REGIONAL -->
            <li class="nav-item col-md-2" >
                <button class="btn btn-nav-bar fw-bold"
                        id="plan"
                        data-bs-toggle="pill"
                        data-bs-target="#regional"
                        type="button"
                        aria-selected="false">REGIONAL</button>
            </li>

            <!-- SEDACIÓN -->
            <li class="nav-item col-md-2" >
                <button class="btn btn-nav-bar fw-bold"
                        id="plan"
                        data-bs-toggle="pill"
                        data-bs-target="#sedacion"
                        type="button"
                        aria-selected="false">SEDACIÓN</button>
            </li>            
  
            <!-- LOCAL -->
            <li class="nav-item col-md-2" >
                <button class="btn btn-nav-bar fw-bold"
                        id="plan"
                        data-bs-toggle="pill"
                        data-bs-target="#local"
                        type="button"
                        aria-selected="false">LOCAL</button>
            </li>
              
        </ul>

        <div class="tab-content col-md-12" id="">
            <!-- Posición y Cuidados -->
            <div class="tab-pane fade show active" id="posicion">
                <div class="col-12 bordePrincipal">  
                    <form @submit.prevent="" class="row g-3">    
                        <h5 class="fw-bold">POSICIÓN Y CUIDADOS</h5>
                        <!-- Horas de ayuno -->
                        <div class="col-md-2">
                            <label for="" class="form-label fw-bold">Horas de ayuno</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoPlan.pos_HorasAyuno"
                                   :class="infoPlan.pos_HorasAyuno != '' && infoPlan.pos_HorasAyuno != undefined ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Acceso Venoso -->
                        <div class="col-md-4">
                            <label for="inputState" class="form-label fw-bold">Acceso Venoso</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoPlan.pos_AccesoVenoso"
                                    :class="infoPlan.pos_AccesoVenoso != '' && infoPlan.pos_AccesoVenoso != undefined ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Antebrazo derecho</option>
                                <option>Antebrazo izquierdo</option>
                                <option>Catéter venoso central</option>
                                <option>Mano derecha</option>
                                <option>Mano izquierda</option>
                                <option>Miembro pélvico derecho</option>
                                <option>Miembro pélvico izquierdo</option>
                                <option>Ninguna</option>                    
                            </select>
                        </div>

                        <!-- Posición del paciente -->
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold">Posición del paciente</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoPlan.pos_PosicionPaciente"
                                    :class="infoPlan.pos_PosicionPaciente != '' && infoPlan.pos_PosicionPaciente != undefined ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Concorde</option>
                                <option>Fowler</option>
                                <option>Lateral</option>
                                <option>Litotomía</option>
                                <option>Navaja Sevillana</option>
                                <option>Park Bench</option>
                                <option>Pronación</option>
                                <option>Supinación</option>
                                <option>Sentado</option>
                                <option>Trendelemburg</option>
                                <option>Ginecológica</option>                    
                            </select>
                        </div>

                        <!-- Posición de los brazos -->
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold">Posición de los brazos</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoPlan.pos_PosicionBrazos"
                                    :class="infoPlan.pos_PosicionBrazos != '' && infoPlan.pos_PosicionBrazos != undefined ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Abducción</option>
                                <option>Aducción</option>
                            </select>
                        </div>

                        <!-- Aplicación de torniquete -->
                        <div class="col-md-2 ">
                            <label for="" class="form-label col-12 fw-bold">Aplicación de torniquete</label>
                            <input type="radio"
                                   class="btn-check"
                                   name="torniquete"
                                   id="torniSi"
                                   autocomplete="off"
                                   value="Sí"
                                   v-model="infoPlan.pos_Torniquete"
                                   checked>
                            <label class="btn btn-radio margenRadio" for="torniSi">Sí</label>
                            
                            <input type="radio"
                                   class="btn-check"
                                   name="torniquete"
                                   id="torniNo"
                                   autocomplete="off"
                                   value="No"
                                   v-model="infoPlan.pos_Torniquete">
                            <label class="btn btn-radio" for="torniNo">No</label>
                        </div>

                        <!-- Sitio -->
                        <div class="col-md-5">
                            <label for="" class="form-label fw-bold">Sitio</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoPlan.pos_Sitio"
                                   :class="infoPlan.pos_Sitio != '' && infoPlan.pos_Sitio != undefined ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Probable tiempo de isquemia -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Probable tiempo de isquemia</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoPlan.pos_TiempoIsquemia"
                                   :class="infoPlan.pos_TiempoIsquemia != '' && infoPlan.pos_TiempoIsquemia != undefined ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Protección de ojos -->
                        <div class="col-md-2">
                            <label for="" class="form-label col-12 fw-bold">Protección de ojos</label>
                            <input type="radio"
                                   class="btn-check"
                                   name="ojos"
                                   id="ojosSi"
                                   autocomplete="off"
                                   value="Sí"
                                   v-model="infoPlan.pos_ProteccionOjos">
                            <label class="btn btn-radio margenRadio" for="ojosSi">Sí</label>
                            
                            <input type="radio"
                                   class="btn-check"
                                   name="ojos"
                                   id="ojosNo"
                                   autocomplete="off"
                                   value="No"
                                   v-model="infoPlan.pos_ProteccionOjos"
                                   checked>
                            <label class="btn btn-radio" for="ojosNo">No</label>
                        </div>

                        <!-- Protección de prominencias oseas -->
                        <div class="col-md-2">
                            <label for="" class="form-label col-12 fw-bold">Protección de prominencias oseas</label>
                            <input type="radio"
                                   class="btn-check"
                                   name="oseas"
                                   id="oseasSi"
                                   autocomplete="off"
                                   value="Sí"
                                   v-model="infoPlan.pos_ProtecProminencias">
                            <label class="btn btn-radio margenRadio" for="oseasSi">Sí</label>

                            <input type="radio"
                                   class="btn-check"
                                   name="oseas"
                                   id="oseasNo"
                                   autocomplete="off"
                                   value="No"
                                   v-model="infoPlan.pos_ProtecProminencias"
                                   checked>
                            <label class="btn btn-radio" for="oseasNo">No</label>                            
                        </div>

                        <!-- Técnica anéstesica -->
                        <div class="col-md-10">
                            <label for="" class="form-label fw-bold">Técnica anéstesica</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoPlan.pos_TecnicaAnestesica"
                                   :class="infoPlan.pos_TecnicaAnestesica != '' && infoPlan.pos_TecnicaAnestesica != undefined ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Premedicación -->
                        <div class="col-md-2">
                            <label for="" class="form-label col-12 fw-bold">Premedicación</label>
                            <input type="radio"
                                   class="btn-check"
                                   name="premedicacion"
                                   id="premediSi"
                                   autocomplete="off"
                                   value="Sí"
                                   v-model="infoPlan.pos_Premedicacion">
                            <label class="btn btn-radio margenRadio" for="premediSi">Sí</label>

                            <input type="radio"
                                   class="btn-check"
                                   name="premedicacion"
                                   id="premediNo"
                                   autocomplete="off"
                                   value="No"
                                   v-model="infoPlan.pos_Premedicacion"
                                   checked>
                            <label class="btn btn-radio" for="premediNo">No</label>
                        </div>

                        <!-- Específicar -->
                        <div class="col-md-10">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoPlan.pos_EspPremedicacion"
                                   :class="infoPlan.pos_EspPremedicacion != '' && infoPlan.pos_EspPremedicacion != undefined ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Monitoreo -->
                        <div class="col-md-12">
                            <label for="" class="form-label fw-bold">Monitoreo</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoPlan.pos_Monitoreo"
                                   :class="infoPlan.pos_Monitoreo != '' && infoPlan.pos_Monitoreo != undefined ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <div class="col-md-10"></div>
                        <!-- Botón Guardar/Actuazlizar -->
                        <div class="col-md-2 alinea-boton">
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
                                    @click="preIdStore.updatePrePlan(infoPlan, preIdStore.pacienteID._id)"> ACTUALIZAR </button>
                            </template>                                                         
                        </div>
                    </form>
                </div>
            </div>

            <!-- Sedación -->
            <div class="tab-pane fade" id="sedacion">
                <div class="col-12 bordePrincipal largoContenedor">  
                    <form @submit.prevent="" class="row g-3">    
                        <h5 class="fw-bold">TIPOS DE ANÉSTESIA</h5>    
                        <h5 class="fw-bold col-md-12 fw-bold">Sedación</h5>   

                        <!-- Vía -->
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold">Vía</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoPlan.sedacion_Via"
                                    :class="infoPlan.sedacion_Via != undefined && infoPlan.sedacion_Via != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option></option>
                                <option id="viaOral">Oral</option>
                                <option id="viaNasal">Nasal</option>
                                <option id="viaInhalatoria">Inhalatoria</option>
                                <option id="viaIntravenosa">Intravenosa</option>
                                <option id="viaIntramuscular">Intramuscular</option>
                                <option id="viaRectal">Rectal</option>
                            </select>
                        </div>

                        <!-- Opción -->
                        <div class="col-md-2">

                            <label for="inputState" class="form-label fw-bold">Opción</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoPlan.sedacion_Opcion"
                                    :class="infoPlan.sedacion_Opcion != '' && infoPlan.sedacion_Opcion != undefined ?
                                        'form-control border border-success formSombra' : 'form-control'">
                                <option></option>
                                <option>Superficial</option>
                                <option>Profunda</option>
                            </select>
                            
                        </div>

                        <!-- Observaciones -->
                        <div class="col-md-7">
                            <label for="" class="form-label fw-bold">Observaciones</label>
                            <textarea class="form-control"
                                      id=""
                                      rows="3"
                                      v-model="infoPlan.sedacion_Observaciones"
                                      :class="infoPlan.sedacion_Observaciones != undefined && infoPlan.sedacion_Observaciones != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>

                        <!-- Medicamentos utilizados -->
                        <div class="col-md-12">
                            <label for="" class="form-label fw-bold">Medicamentos utilizados</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoPlan.sedacion_Medicamentos"
                                   :class="infoPlan.sedacion_Medicamentos != undefined && infoPlan.sedacion_Medicamentos != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <div class="col-md-10"></div>
                        <!-- Botón Guardar/Actuazlizar -->
                        <div class="col-md-2 alinea-boton">
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
                                    @click="preIdStore.updatePrePlan(infoPlan, preIdStore.pacienteID._id)"> ACTUALIZAR </button>
                            </template>                                                         
                        </div>

                    </form>
                </div>
            </div>

            <!-- Regional -->
            <div class="tab-pane fade" id="regional">
                <div class="col-12 bordePrincipal">  
                    <form @submit.prevent="" class="row g-3">    
                        <h5 class="fw-bold">TIPOS DE ANÉSTESIA</h5>  

                        <div class="col-md-10">
                            <h5 class="fw-bold col-md-12">Regional</h5> 
                        </div> 

                        <!-- Botón Guardar/Actuazlizar -->
                        <div class="col-md-2 alinea-boton">
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
                                    @click="preIdStore.updatePrePlan(infoPlan, preIdStore.pacienteID._id)"> ACTUALIZAR </button>
                            </template>  
                        </div>

                        <h5 class="fw-bold">BLOQUEO NEURO-AXIAL</h5>  

                        <!-- Tipo -->
                        <div class="col-md-2">
                            <label for="inputState" class="form-label fw-bold">Tipo</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoPlan.regional_Tipo"
                                    :class="infoPlan.regional_Tipo != undefined && infoPlan.regional_Tipo != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Espidural</option>
                                <option>Espinal</option>
                                <option>Mixta</option>
                            </select>
                        </div>

                        <!-- Tipo de aguja -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Tipo de aguja</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoPlan.regional_TipoAguja"
                                   :class="infoPlan.regional_TipoAguja != undefined && infoPlan.regional_TipoAguja != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Nivel -->
                        <div class="col-md-2">
                            <label for="" class="form-label fw-bold">Nivel</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoPlan.regional_Nivel"
                                   :class="infoPlan.regional_Nivel != undefined && infoPlan.regional_Nivel != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Calibre de aguja -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Calibre de aguja</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoPlan.regional_CalibreAguja"
                                   :class="infoPlan.regional_CalibreAguja != undefined && infoPlan.regional_CalibreAguja != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Catéter -->
                        <div class="col-md-2">
                            <label for="inputState" class="form-label fw-bold">Catéter</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoPlan.regional_Cateter"
                                    :class="infoPlan.regional_Cateter != undefined && infoPlan.regional_Cateter != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Sí</option>
                                <option>No</option>
                            </select>
                        </div>

                        <!-- Orientación de catéter -->
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold">Orientación de catéter</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoPlan.regional_OrientacionCateter"
                                    :class="infoPlan.regional_OrientacionCateter != undefined && infoPlan.regional_OrientacionCateter != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Cefálica</option>
                                <option>Caudal</option>
                            </select>
                        </div>

                        <!-- Probables dificultades técnicas -->
                        <div class="col-md-3">
                            <label for="" class="form-label col-12 fw-bold">Probables dificultades técnicas</label>
                            <input type="radio"
                                   class="btn-check"
                                   name="difTec"
                                   id="difTecSi"
                                   autocomplete="off"
                                   value="Sí"
                                   v-model="infoPlan.regional_ProbDificulNeuro">
                            <label class="btn btn-radio margenRadio" for="difTecSi">Sí</label>

                            <input type="radio"
                                   class="btn-check"
                                   name="difTec"
                                   id="difTecNo"
                                   autocomplete="off"
                                   value="No"
                                   v-model="infoPlan.regional_ProbDificulNeuro"
                                   checked>
                            <label class="btn btn-radio" for="difTecNo">No</label>
                        </div>

                        <!-- Específicar -->
                        <div class="col-md-6">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control"
                                      id=""
                                      rows="3"
                                      v-model="infoPlan.regional_EspDificultadesNeuro"
                                      :class="infoPlan.regional_EspDificultadesNeuro != undefined && infoPlan.regional_EspDificultadesNeuro != '' ?
                                             'form-control border border-success formSombra' : 'form-control'"></textarea>
                        </div>

                        <hr/>
                        <h5 class="fw-bold">BLOQUEO PLEXO</h5>
                        
                        <!-- Sitio -->
                        <div class="col-md-2">
                            <label for="inputState" class="form-label fw-bold">Sitio</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoPlan.regional_Sitio"
                                    :class="infoPlan.regional_Sitio != undefined && infoPlan.regional_Sitio != '' ?
                                           'form-control border border-success formSombra' : 'form-control'"
                                           @click="cambioSelectRegional()">
                                <option></option>
                                <option id="sitioCabeza">Cabeza</option>
                                <option id="sitioCervical">Cervicales</option>
                                <option id="sitioToracico">Torácicos</option>
                                <option id="sitioLumbar">Lumbares y sacros</option>
                                <option id="sitioOtros">Otros</option>
                            </select>                            
                        </div>

                        <!-- Opción -->
                        <div class="col-md-3">

                            <template v-if="sitioCabeza === true">
                                <label for="inputState" class="form-label fw-bold">Opción</label>
                                <select id="inputState"
                                        class="form-select"
                                        v-model="infoPlan.regional_Opcion"
                                        :class="infoPlan.regional_Opcion != undefined && infoPlan.regional_Opcion != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                    <option></option>
                                    <option>Bloqueo de escalpe</option>
                                    <option>Bloqueo retrobulbar</option>
                                    <option>Bloqueo infraorbitario</option>
                                    <option>Bloqueo nervio maxilar</option>
                                    <option>Bloqueo nervio nasal</option>
                                    <option>Bloqueo lingual</option>
                                </select>
                            </template>

                            <template v-if="sitioCervical === true">
                                <label for="inputState" class="form-label fw-bold">Opción</label>
                                <select id="inputState"
                                        class="form-select"
                                        v-model="infoPlan.regional_Opcion"
                                        :class="infoPlan.regional_Opcion != undefined && infoPlan.regional_Opcion != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                    <option></option>
                                    <option>Occipital</option>
                                    <option>Plexo cervical</option>
                                    <option>Frénico</option>
                                    <option>Plexo braquial</option>
                                    <option>Supraescapular</option>
                                </select>
                            </template>

                            <template v-if="sitioToracico === true">
                                <label for="inputState" class="form-label fw-bold">Opción</label>
                                <select id="inputState"
                                        class="form-select"
                                        v-model="infoPlan.regional_Opcion"
                                        :class="infoPlan.regional_Opcion != undefined && infoPlan.regional_Opcion != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                    <option></option>
                                    <option>Paravertebral</option>
                                    <option>Intercostal</option>
                                </select>
                            </template>

                            <template v-if="sitioLumbar === true">
                                <label for="inputState" class="form-label fw-bold">Opción</label>
                                <select id="inputState"
                                        class="form-select"
                                        v-model="infoPlan.regional_Opcion"
                                        :class="infoPlan.regional_Opcion != undefined && infoPlan.regional_Opcion != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                    <option></option>
                                    <option>Paravertebral</option>
                                    <option>Trans-sacro</option>
                                    <option>Ilioinguinal</option>
                                    <option>Femorocutaneo</option>
                                    <option>Obturador</option>
                                    <option>Femoral y ciático</option>
                                </select>
                            </template>                            

                            </div>

                        <!-- Específicar -->
                        <div class="col-md-7">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control"
                                      id=""
                                      rows="3"
                                      v-model="infoPlan.regional_EspSitio"
                                      :class="infoPlan.regional_EspSitio != undefined && infoPlan.regional_EspSitio != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>

                        <!-- Anestésico utilizado -->
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold">Anestésico utilizado</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoPlan.regional_AnestesicoUtilizado"
                                    :class="infoPlan.regional_AnestesicoUtilizado != undefined && infoPlan.regional_AnestesicoUtilizado != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Lidocaína 1%</option>
                                <option>Lidocaína 2%</option>
                                <option>Lidocaína 2% con Epinefrina</option>
                                <option>Bupivacaína 5%</option>
                                <option>Bupivacaína pesada</option>      
                                <option>Ropivacaína 2%</option>
                                <option>Ropivacaína 7.5%</option>                 
                            </select>
                        </div>

                        <!-- Específicar -->
                        <div class="col-md-9">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control"
                                      id=""
                                      rows="3"
                                      v-model="infoPlan.regional_EspAnestesico"
                                      :class="infoPlan.regional_EspAnestesico != undefined && infoPlan.regional_EspAnestesico != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>

                        <!-- Probables dificultades técnicas -->
                        <div class="col-md-3">
                            <label for="" class="form-label col-12 fw-bold">Probables dificultades técnicas</label>
                            <input type="radio"
                                   class="btn-check"
                                   name="dif"
                                   id="difSi"
                                   autocomplete="off"
                                   value="Sí"
                                   v-model="infoPlan.regional_ProbDificulPlexo">
                            <label class="btn btn-radio margenRadio" for="difSi">Sí</label>

                            <input type="radio"
                                   class="btn-check"
                                   name="dif"
                                   id="difNo"
                                   autocomplete="off"
                                   value="No"
                                   v-model="infoPlan.regional_ProbDificulPlexo"
                                   checked>
                            <label class="btn btn-radio" for="difNo">No</label>
                        </div>

                        <!-- Específicar -->
                        <div class="col-md-9">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control"
                                      id=""
                                      rows="3"
                                      v-model="infoPlan.regional_EspDificulPlexo"
                                      :class="infoPlan.regional_EspDificulPlexo != undefined && infoPlan.regional_EspDificulPlexo != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>

                        <hr/>
                        <h5 class="fw-bold">EQUIPO DE APOYO</h5>

                        <!-- Ultrasonido -->
                        <div class="col-md-2">
                            <label for="" class="form-label col-12 fw-bold">Ultrasonido</label>
                            <input type="radio"
                                   class="btn-check"
                                   name="ultrasonido"
                                   id="ultraSi"
                                   autocomplete="off"
                                   value="Sí"
                                   v-model="infoPlan.regional_Ultrasonido">
                            <label class="btn btn-radio margenRadio" for="ultraSi">Sí</label>

                            <input type="radio"
                                   class="btn-check"
                                   name="ultrasonido"
                                   id="ultraNo"
                                   autocomplete="off"
                                   value="No"
                                   v-model="infoPlan.regional_Ultrasonido"
                                   checked>
                            <label class="btn btn-radio" for="ultraNo">No</label>
                        </div>

                        <!-- Específicar -->
                        <div class="col-md-4">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control"
                                      id=""
                                      rows="3"
                                      v-model="infoPlan.regional_EspUltrasonido"
                                      :class="infoPlan.regional_EspUltrasonido != undefined && infoPlan.regional_EspUltrasonido != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>
                        
                        <!-- Neuroestimulador -->
                        <div class="col-md-2">
                            <label for="" class="form-label col-12 fw-bold">Neuroestimulador</label>
                            <input type="radio"
                                   class="btn-check"
                                   name="neuro"
                                   id="neuroSi"
                                   autocomplete="off"
                                   value="Sí"
                                   v-model="infoPlan.regional_Neuroestimulador">
                            <label class="btn btn-radio margenRadio" for="neuroSi">Sí</label>

                            <input type="radio"
                                   class="btn-check"
                                   name="neuro"
                                   id="neuroNo"
                                   autocomplete="off"
                                   value="No"
                                   v-model="infoPlan.regional_Neuroestimulador"
                                   checked>
                            <label class="btn btn-radio" for="neuroNo">No</label>
                        </div>

                        <!-- Específicar -->
                        <div class="col-md-4">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control"
                                      id=""
                                      rows="3"
                                      v-model="infoPlan.regional_EspNeuroestimulador"
                                      :class="infoPlan.regional_EspNeuroestimulador != undefined && infoPlan.regional_EspNeuroestimulador != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>

                        <!-- Probables complicaciones -->
                        <div class="col-md-2">
                            <label for="" class="form-label col-12 fw-bold">Probables complicaciones</label>
                            <input type="radio"
                                   class="btn-check"
                                   name="complicaciones"
                                   id="compliSi"
                                   autocomplete="off"
                                   value="Sí"
                                   v-model="infoPlan.regional_ProbComplicaciones">
                            <label class="btn btn-radio margenRadio" for="compliSi">Sí</label>

                            <input type="radio"
                                   class="btn-check"
                                   name="complicaciones"
                                   id="compliNo"
                                   autocomplete="off"
                                   value="No"
                                   v-model="infoPlan.regional_ProbComplicaciones"
                                   checked>
                            <label class="btn btn-radio" for="compliNo">No</label>
                        </div>

                        <!-- Específicar -->
                        <div class="col-md-4">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control"
                                      id=""
                                      rows="3"
                                      v-model="infoPlan.regional_EspDificEquipo"
                                      :class="infoPlan.regional_EspDificEquipo != undefined && infoPlan.regional_EspDificEquipo != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Local -->
            <div class="tab-pane fade" id="local">
                <div class="col-12 bordePrincipal largoContenedor">  
                    <form @submit.prevent="" class="row g-3">    
                        <h5 class="fw-bold">TIPOS DE ANÉSTESIA</h5>    
                        <h5 class="fw-bold col-md-12">Local</h5>  

                        <!-- Sitio de la anéstesia -->
                        <div class="col-md-8">
                            <label for="" class="form-label fw-bold">Sitio de la anéstesia</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoPlan.local_SitioAnestesiaL"
                                   :class="infoPlan.local_SitioAnestesiaL != undefined && infoPlan.local_SitioAnestesiaL != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Anéstesico utilizado -->
                        <div class="col-md-4">
                            <label for="inputState" class="form-label fw-bold">Anéstesico utilizado</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoPlan.local_AnestesicoUtilizado"
                                    :class="infoPlan.local_AnestesicoUtilizado != undefined && infoPlan.local_AnestesicoUtilizado != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Lidocaína 1%</option>
                                <option>Lidocaína 2%</option>
                                <option>Lidocaína 2% con Epinefrina</option>
                                <option>Bupivacaína 5%</option>
                                <option>Bupivacaína pesada</option>      
                                <option>Ropivacaína 2%</option>
                                <option>Ropivacaína 7.5%</option>                                        
                            </select>
                        </div>

                        <!-- Específicar -->
                        <div class="col-md-12">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control"
                                      id=""
                                      rows="3"
                                      v-model="infoPlan.local_Especificar"
                                      :class="infoPlan.local_Especificar != undefined && infoPlan.local_Especificar != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>

                        <div class="col-md-10"></div>
                        <!-- Botón Guardar/Actuazlizar -->
                        <div class="col-md-2 alinea-boton">
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
                                    @click="preIdStore.updatePrePlan(infoPlan, preIdStore.pacienteID._id)"> ACTUALIZAR </button>
                            </template>                                                         
                        </div>
                    </form>
                </div>
            </div>

            <!-- General -->
            <div class="tab-pane fade" id="general">
                <div class="col-12 bordePrincipal">  
                    <form @submit.prevent="" class="row g-3"> 
                        <div class="col-md-12">
                            <h5 class="fw-bold">TIPOS DE ANÉSTESIA</h5> 
                        </div>   
                        <div class="col-md-10">
                            <h5 class="col-md-12 fw-bold">General</h5>
                        </div> 

                        <!-- Botón Guardar/Actuazlizar -->
                        <div class="col-md-2 alinea-boton">
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
                                    @click="preIdStore.updatePrePlan(infoPlan, preIdStore.pacienteID._id)"> ACTUALIZAR </button>
                            </template>      
                        </div> 
                                                   
                        <h5 class="col-md-12 fw-bold">INTUBACIÓN</h5>
                        
                        <!-- Inducción -->
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold">Inducción</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoPlan.general_Induccion"
                                    :class="infoPlan.general_Induccion != undefined && infoPlan.general_Induccion != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Endovenosa</option>
                                <option>Inhalatoria</option>
                                <option>Intramuscular</option>   
                            </select>
                        </div>

                        <!-- Tubo -->
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold">Tubo</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoPlan.general_Tubo"
                                    :class="infoPlan.general_Tubo != undefined && infoPlan.general_Tubo != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Orotraqueal</option>
                                <option>Nasotraqueal</option>
                            </select>
                        </div>

                        <!-- Número de tubo -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Número de tubo</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoPlan.general_NumeroTubo"
                                   :class="infoPlan.general_NumeroTubo != undefined && infoPlan.general_NumeroTubo != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <!-- Tipo de canula -->
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold">Tipo de canula</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoPlan.general_TipoCanula"
                                    :class="infoPlan.general_TipoCanula != undefined && infoPlan.general_TipoCanula != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Oral</option>
                                <option>Nasal</option>
                            </select>
                        </div>

                        <!-- Globo -->
                        <div class="col-md-2">
                            <label for="" class="form-label col-12 fw-bold">Globo</label>
                            <input type="radio"
                                   class="btn-check"
                                   name="globo"
                                   id="globoSi"
                                   autocomplete="off"
                                   value="Sí"
                                   v-model="infoPlan.general_Globo">
                            <label class="btn btn-radio margenRadio" for="globoSi">Sí</label>

                            <input type="radio"
                                   class="btn-check"
                                   name="globo"
                                   id="globoNo"
                                   autocomplete="off"
                                   value="No"
                                   v-model="infoPlan.general_Globo"
                                   checked>
                            <label class="btn btn-radio" for="globoNo">No</label>
                        </div>

                        <!-- Presión -->
                        <div class="col-md-2">
                            <label for="inputState" class="form-label fw-bold">Presión</label>
                            <select id="inputState"
                                    class="form-select"
                                    v-model="infoPlan.general_Presion"
                                    :class="infoPlan.general_Presion != undefined && infoPlan.general_Presion != '' ?
                                           'form-control border border-success formSombra' : 'form-control'">
                                <option selected></option>
                                <option>Presión baja</option>
                                <option>Presión normal</option>
                            </select>
                        </div>

                        <!-- Probables dificultades técnicas -->
                        <div class="col-md-3">
                            <label for="" class="form-label col-12 fw-bold">Probables dificultades técnicas</label>
                            <input type="radio"
                                   class="btn-check"
                                   name="difTecIntu"
                                   id="difTecIntuSi"
                                   autocomplete="off"
                                   value="Sí"
                                   v-model="infoPlan.general_DifTecnicasIntubacion">
                            <label class="btn btn-radio margenRadio" for="difTecIntuSi">Sí</label>

                            <input type="radio"
                                   class="btn-check"
                                   name="difTecIntu"
                                   id="difTecIntuNo"
                                   autocomplete="off"
                                   value="No"
                                   v-model="infoPlan.general_DifTecnicasIntubacion"
                                   checked>
                            <label class="btn btn-radio" for="difTecIntuNo">No</label>
                        </div>

                        <!-- Específicar -->
                        <div class="col-md-5">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control"
                                      id=""
                                      rows="3"
                                      v-model="infoPlan.general_EspDifTecIntubacion"
                                      :class="infoPlan.general_EspDifTecIntubacion != undefined && infoPlan.general_EspDifTecIntubacion != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>

                        <hr />
                        <h5 class="col-md-12 fw-bold">DISPOSITIVOS SUPRAGLÓTICOS</h5>

                        <!-- Dispositivos suproglóticos -->
                        <div class="col-md-3">
                            <label for="" class="form-label col-12 fw-bold">Dispositivos supraglóticos</label>
                            <input type="radio"
                                   class="btn-check"
                                   name="supragloticos"
                                   id="supragloticosSi"
                                   autocomplete="off"
                                   value="Sí"
                                   v-model="infoPlan.general_DispositivosSupro">
                            <label class="btn btn-radio margenRadio" for="supragloticosSi">Sí</label>

                            <input type="radio"
                                   class="btn-check"
                                   name="supragloticos"
                                   id="supragloticosNo"
                                   autocomplete="off"
                                   value="No"
                                   v-model="infoPlan.general_DispositivosSupro"
                                   checked>
                            <label class="btn btn-radio" for="supragloticosNo">No</label>
                        </div>

                        <!-- Calibre -->
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Calibre</label>
                            <input type="text"
                                   class="form-control"
                                   id=""
                                   v-model="infoPlan.general_Calibre"
                                   :class="infoPlan.general_Calibre != undefined && infoPlan.general_Calibre != '' ?
                                          'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <div class="col-md-6"></div>

                        <!-- Complicaciones -->
                        <div class="col-md-3">
                            <label for="" class="form-label col-12 fw-bold">Complicaciones</label>
                            <input type="radio"
                                   class="btn-check"
                                   name="complicaciones"
                                   id="complicacionesSi"
                                   autocomplete="off"
                                   value="Sí"
                                   v-model="infoPlan.general_Complicaciones">
                            <label class="btn btn-radio margenRadio" for="complicacionesSi">Sí</label>

                            <input type="radio"
                                   class="btn-check"
                                   name="complicaciones"
                                   id="complicacionesNo"
                                   autocomplete="off"
                                   value="No"
                                   v-model="infoPlan.general_Complicaciones"
                                   checked>
                            <label class="btn btn-radio" for="complicacionesNo">No</label>
                        </div>

                        <!-- Específicar -->
                        <div class="col-md-8">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control"
                                      id=""
                                      rows="3"
                                      v-model="infoPlan.general_EspComplicaciones"
                                      :class="infoPlan.general_EspComplicaciones != undefined && infoPlan.general_EspComplicaciones != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>
                        
                        <hr />
                        <h5 class="col-md-12 fw-bold">OTROS</h5>

                        <!-- Uso de otros dispositivos -->
                        <div class="col-md-3">
                            <label for="" class="form-label col-12 fw-bold">Uso de otros dispositivos</label>
                            <input type="radio"
                                   class="btn-check"
                                   name="otros"
                                   id="otrosSi"
                                   autocomplete="off"
                                   value="Sí"
                                   v-model="infoPlan.general_OtrosDispositivos">
                            <label class="btn btn-radio margenRadio" for="otrosSi">Sí</label>

                            <input type="radio"
                                   class="btn-check"
                                   name="otros"
                                   id="otrosNo"
                                   autocomplete="off"
                                   value="No"
                                   v-model="infoPlan.general_OtrosDispositivos"
                                   checked>
                            <label class="btn btn-radio" for="otrosNo">No</label>
                        </div>

                        <!-- Específicar -->
                        <div class="col-md-8">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control"
                                      id=""
                                      rows="3"
                                      v-model="infoPlan.general_EspOtrosDispositivos"
                                      :class="infoPlan.general_EspOtrosDispositivos != undefined && infoPlan.general_EspOtrosDispositivos != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>             
                    </form>
                </div>
            </div>
        </div> 
    </div>
</template>

<script lang="ts">
import type { regPlan } from "@/interfaces/regPreAnest";
import { usePreIdStore } from "@/stores/preId-store";
import { defineComponent } from "vue"

const preIdStore = usePreIdStore();

export default defineComponent({
    data () {
        return{
            infoPlan: {} as regPlan,
            preIdStore,            
            btnActualizarValoracion:false,

            sitioCabeza:false,
            sitioCervical:false,
            sitioToracico:false,
            sitioLumbar:false,
        }
    },

    mounted: function(){
        this.infoPlan.pos_Torniquete = "No";
        this.infoPlan.pos_ProteccionOjos = "No";
        this.infoPlan.pos_ProtecProminencias = "No";
        this.infoPlan.pos_Premedicacion = "No";

        this.infoPlan.general_Globo = "No";
        this.infoPlan.general_DifTecnicasIntubacion = "No";
        this.infoPlan.general_DispositivosSupro = "No";
        this.infoPlan.general_Complicaciones = "No";
        this.infoPlan.general_OtrosDispositivos = "No";

        this.infoPlan.regional_ProbDificulNeuro = "No";
        this.infoPlan.regional_ProbDificulPlexo = "No";
        this.infoPlan.regional_Ultrasonido = "No";
        this.infoPlan.regional_ProbComplicaciones = "No";
        this.infoPlan.regional_Neuroestimulador = "No";
    },

    methods:{
        cambiarUpdateValoracion() {
            this.btnActualizarValoracion=true

            preIdStore.savePrePlan(this.infoPlan, preIdStore.pacienteID._id)
        },
        cambioSelectRegional(){
            if((document.getElementById("sitioCabeza") as HTMLOptionElement).selected){
                this.sitioCabeza=true
                this.sitioCervical=false
                this.sitioToracico=false
                this.sitioLumbar=false
                this.infoPlan.regional_Opcion = ""
            }
            else if((document.getElementById("sitioCervical") as HTMLOptionElement).selected){
                this.sitioCabeza=false
                this.sitioCervical=true
                this.sitioToracico=false
                this.sitioLumbar=false
                this.infoPlan.regional_Opcion = ""
            }
            else if((document.getElementById("sitioToracico") as HTMLOptionElement).selected){
                this.sitioCabeza=false
                this.sitioCervical=false
                this.sitioToracico=true
                this.sitioLumbar=false
                this.infoPlan.regional_Opcion = ""
            }
            else if((document.getElementById("sitioLumbar") as HTMLOptionElement).selected){
                this.sitioCabeza=false
                this.sitioCervical=false
                this.sitioToracico=false
                this.sitioLumbar=true
                this.infoPlan.regional_Opcion = ""
            }
            else if((document.getElementById("sitioOtros") as HTMLOptionElement).selected){
                this.sitioCabeza=false
                this.sitioCervical=false
                this.sitioToracico=false
                this.sitioLumbar=false
                this.infoPlan.regional_Opcion = ""
            }
        }
    },
})
</script>

<style scoped>
.bordePrincipal {
  border-radius: 5px;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 55px;
  background-color: rgba(232, 234, 236, 0.6);
}
.margenRadio{
    margin-right: 10px;
    margin-left: 15px;
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

h5{
    color: #002D60;
    margin-bottom: 20px;    
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
.centrar-li{
  justify-content: center; 
}
.alinea-boton{
    text-align: end;
}
.alinea-radio{
    align-self: center;
}
</style>