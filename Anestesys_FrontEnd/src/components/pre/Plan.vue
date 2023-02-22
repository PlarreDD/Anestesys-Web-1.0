<template>
    <div>
        <ul class="nav nav-pills mb-3 text-center" id="">
            <li class="nav-item col-md-3" >
                <button class="btn btn-outline-secondary fw-bold active" id="plan" data-bs-toggle="pill" data-bs-target="#posicion" type="button" aria-selected="true">POSICIÓN Y CUIDADOS</button>
            </li>
            <li class="nav-item col-md-2" >
                <button class="btn btn-outline-secondary fw-bold" id="plan" data-bs-toggle="pill" data-bs-target="#sedacion" type="button" aria-selected="false">SEDACIÓN</button>
            </li>
            <li class="nav-item col-md-2" >
                <button class="btn btn-outline-secondary fw-bold" id="plan" data-bs-toggle="pill" data-bs-target="#regional" type="button" aria-selected="false">REGIONAL</button>
            </li>
            <li class="nav-item col-md-2" >
                <button class="btn btn-outline-secondary fw-bold" id="plan" data-bs-toggle="pill" data-bs-target="#local" type="button" aria-selected="false">LOCAL</button>
            </li>
            <li class="nav-item col-md-2" >
                <button class="btn btn-outline-secondary fw-bold" id="plan" data-bs-toggle="pill" data-bs-target="#general" type="button" aria-selected="false">GENERAL</button>
            </li>
        </ul>

        <div class="tab-content col-md-12" id="">
            <div class="tab-pane fade show active" id="posicion">
                <div class="col-12 bordePrincipal">  
                    <form class="row g-3">    
                        <h5 class="fw-bold">POSICIÓN Y CUIDADOS</h5>    

                        <div class="col-md-2">
                            <label for="" class="form-label fw-bold">Horas de ayuno</label>
                            <input type="text" class="form-control" id="" v-model="posicion.horasAyuno"
                            :class="posicion.horasAyuno != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label fw-bold">Acceso Venoso</label>
                            <select id="inputState" class="form-select" v-model="posicion.accesoVenoso"
                            :class="posicion.accesoVenoso != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
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
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold">Posición del paciente</label>
                            <select id="inputState" class="form-select" v-model="posicion.posicionPaciente"
                            :class="posicion.posicionPaciente != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
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
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold">Posición de los brazos</label>
                            <select id="inputState" class="form-select" v-model="posicion.posicionBrazos"
                            :class="posicion.posicionBrazos != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Abducción</option>
                                <option>Aducción</option>
                            </select>
                        </div>

                        <div class="col-md-2">
                            <label for="" class="form-label col-12 fw-bold">Aplicación de torniquete</label>

                            <input type="radio" class="btn-check" name="torniquete" id="torniSi" autocomplete="off" value="Sí" v-model="posicion.torniquete">
                            <label class="btn btn-radio margenRadio" for="torniSi">Sí</label>

                            <input type="radio" class="btn-check" name="torniquete" id="torniNo" autocomplete="off" value="No" v-model="posicion.torniquete">
                            <label class="btn btn-radio" for="torniNo">No</label>
                        </div>
                        <div class="col-md-5">
                            <label for="" class="form-label fw-bold">Sitio</label>
                            <input type="text" class="form-control" id="" v-model="posicion.sitio"
                            :class="posicion.sitio != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Probable tiempo de isquemia</label>
                            <input type="text" class="form-control" id="" v-model="posicion.tiempoIsquemia"
                            :class="posicion.tiempoIsquemia != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-2">
                            <label for="" class="form-label col-12 fw-bold">Protección de ojos</label>

                            <input type="radio" class="btn-check" name="ojos" id="ojosSi" autocomplete="off" value="Sí"  v-model="posicion.proteccionOjos">
                            <label class="btn btn-radio margenRadio" for="ojosSi">Sí</label>

                            <input type="radio" class="btn-check" name="ojos" id="ojosNo" autocomplete="off" value="No" v-model="posicion.proteccionOjos">
                            <label class="btn btn-radio" for="ojosNo">No</label>
                        </div>

                        <div class="col-md-2">
                            <label for="" class="form-label col-12 fw-bold">Protección de prominencias oseas</label>

                            <input type="radio" class="btn-check" name="oseas" id="oseasSi" autocomplete="off" value="Sí" v-model="posicion.protecProminencias">
                            <label class="btn btn-radio margenRadio" for="oseasSi">Sí</label>

                            <input type="radio" class="btn-check" name="oseas" id="oseasNo" autocomplete="off" value="No" v-model="posicion.protecProminencias">
                            <label class="btn btn-radio" for="oseasNo">No</label>                            
                        </div>
                        <div class="col-md-10">
                            <label for="" class="form-label fw-bold">Técnica anéstesica</label>
                            <input type="text" class="form-control" id="" v-model="posicion.tecnicaAnestesica"
                            :class="posicion.tecnicaAnestesica != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <div class="col-md-2">
                            <label for="" class="form-label col-12 fw-bold">Premedicación</label>

                            <input type="radio" class="btn-check" name="premedicacion" id="premediSi" autocomplete="off" value="Sí" v-model="posicion.premedicacion">
                            <label class="btn btn-radio margenRadio" for="premediSi">Sí</label>

                            <input type="radio" class="btn-check" name="premedicacion" id="premediNo" autocomplete="off" value="No" v-model="posicion.premedicacion">
                            <label class="btn btn-radio" for="premediNo">No</label>
                        </div>
                        <div class="col-md-10">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <input type="text" class="form-control" id="" v-model="posicion.espPremedicacion"
                            :class="posicion.espPremedicacion != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <div class="col-md-12">
                            <label for="" class="form-label fw-bold">Monitoreo</label>
                            <input type="text" class="form-control" id="" v-model="posicion.monitoreo"
                            :class="posicion.monitoreo != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                    </form>
                </div>
            </div>
            <div class="tab-pane fade" id="sedacion">
                <div class="col-12 bordePrincipal largoContenedor">  
                    <form class="row g-3">    
                        <h5 class="fw-bold">TIPOS DE ANÉSTESIA</h5>    
                        <h5 class="fw-bold col-md-12 fw-bold">Sedación</h5>   

                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold">Vía</label>
                            <select id="inputState" class="form-select" v-model="sedacion.via"
                            :class="sedacion.via != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Oral</option>
                                <option>Nasal</option>
                                <option>Inhalartoria</option>
                                <option>Intravenosa</option>
                                <option>Intramuscular</option>
                                <option>Rectal</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label for="inputState" class="form-label fw-bold">Opción</label>
                            <select id="inputState" class="form-select" v-model="sedacion.opcion"
                            :class="sedacion.opcion != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Superficial</option>
                                <option>Profunda</option>
                            </select>
                        </div>
                        <div class="col-md-7">
                            <label for="" class="form-label fw-bold">Observaciones</label>
                            <textarea class="form-control" id="" rows="3" v-model="sedacion.observaciones"
                            :class="sedacion.observaciones != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
                        </div>

                        <div class="col-md-12">
                            <label for="" class="form-label fw-bold">Medicamentos utilizados</label>
                            <input type="text" class="form-control" id="" v-model="sedacion.medicamentos"
                            :class="sedacion.medicamentos != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                    </form>
                </div>
            </div>
            <div class="tab-pane fade" id="regional">
                <div class="col-12 bordePrincipal">  
                    <form class="row g-3">    
                        <h5 class="fw-bold">TIPOS DE ANÉSTESIA</h5>    
                        <h5 class="fw-bold col-md-12">Regional</h5>  
                        <h5 class="fw-bold">BLOQUEO NEURO-AXIAL</h5>  

                        <div class="col-md-2">
                            <label for="inputState" class="form-label fw-bold">Tipo</label>
                            <select id="inputState" class="form-select" v-model="regional.tipo"
                            :class="regional.tipo != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Espidural</option>
                                <option>Espinal</option>
                                <option>Mixta</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Tipo de aguja</label>
                            <input type="text" class="form-control" id="" v-model="regional.tipoAguja"
                            :class="regional.tipoAguja != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-2">
                            <label for="" class="form-label fw-bold">Nivel</label>
                            <input type="text" class="form-control" id="" v-model="regional.nivel"
                            :class="regional.nivel != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Calibre de aguja</label>
                            <input type="text" class="form-control" id="" v-model="regional.calibreAguja"
                            :class="regional.calibreAguja != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-2">
                            <label for="inputState" class="form-label fw-bold">Catéter</label>
                            <select id="inputState" class="form-select" v-model="regional.cateter"
                            :class="regional.cateter != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Sí</option>
                                <option>No</option>
                            </select>
                        </div>

                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold">Orientación de catéter</label>
                            <select id="inputState" class="form-select" v-model="regional.orientacionCateter"
                            :class="regional.orientacionCateter != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Cefálica</option>
                                <option>Caudal</option>
                            </select>
                        </div>

                        <div class="col-md-3">
                            <label for="" class="form-label col-12 fw-bold">Probables dificultades técnicas</label>

                            <input type="radio" class="btn-check" name="difTec" id="difTecSi" autocomplete="off" value="Sí" v-model="regional.probDificulNeuro">
                            <label class="btn btn-radio margenRadio" for="difTecSi">Sí</label>

                            <input type="radio" class="btn-check" name="difTec" id="difTecNo" autocomplete="off" value="No" v-model="regional.probDificulNeuro">
                            <label class="btn btn-radio" for="difTecNo">No</label>
                        </div>

                        <div class="col-md-6">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control" id="" rows="3" v-model="regional.espDificultadesNeuro"
                            :class="regional.espDificultadesNeuro != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
                        </div>
                        <hr />

                        <h5 class="fw-bold">BLOQUEO PLEXO</h5>
                        
                        <div class="col-md-2">
                            <label for="inputState" class="form-label fw-bold">Sitio</label>
                            <select id="inputState" class="form-select" v-model="regional.sitio"
                            :class="regional.sitio != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Cabeza</option>
                                <option>Cervicales</option>
                                <option>Torácicos</option>
                                <option>Lumbares y sacros</option>
                                <option>Otros</option>                    
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold">Opción</label>
                            <select id="inputState" class="form-select" v-model="regional.opcion"
                            :class="regional.opcion != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>                  
                            </select>
                        </div>
                        <div class="col-md-7">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control" id="" rows="3" v-model="regional.espSitio"
                            :class="regional.espSitio != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
                        </div>

                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold">Anestésico utilizado</label>
                            <select id="inputState" class="form-select" v-model="regional.anestesicoUtilizado"
                            :class="regional.anestesicoUtilizado != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Lidocaína 1%</option>
                                <option>Lidocaína 2%</option>
                                <option>Lidocaína 2% con Epinefrina</option>
                                <option>Bupivacaína 5%</option>
                                <option>Bupivacaína pesada</option>      
                                <option>Ropivacaína 2%</option>
                                <option>Ropivacaína 7.5%</option>                 
                            </select>
                        </div>
                        <div class="col-md-9">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control" id="" rows="3" v-model="regional.espAnestesico"
                            :class="regional.espAnestesico != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
                        </div>

                        <div class="col-md-3">
                            <label for="" class="form-label col-12 fw-bold">Probables dificultades técnicas</label>

                            <input type="radio" class="btn-check" name="dif" id="difSi" autocomplete="off" value="Sí" v-model="regional.probDificulPlexo">
                            <label class="btn btn-radio margenRadio" for="difSi">Sí</label>

                            <input type="radio" class="btn-check" name="dif" id="difNo" autocomplete="off" value="No" v-model="regional.probDificulPlexo">
                            <label class="btn btn-radio" for="difNo">No</label>
                        </div>
                        <div class="col-md-9">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control" id="" rows="3" v-model="regional.espDificulPlexo"
                            :class="regional.espDificulPlexo != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
                        </div>
                        <hr />

                        <h5 class="fw-bold">EQUIPO DE APOYO</h5>

                        <div class="col-md-2">
                            <label for="" class="form-label col-12 fw-bold">Ultrasonido</label>

                            <input type="radio" class="btn-check" name="ultrasonido" id="ultraSi" autocomplete="off" value="Sí" v-model="regional.ultrasonido">
                            <label class="btn btn-radio margenRadio" for="ultraSi">Sí</label>

                            <input type="radio" class="btn-check" name="ultrasonido" id="ultraNo" autocomplete="off" value="No" v-model="regional.ultrasonido">
                            <label class="btn btn-radio" for="ultraNo">No</label>
                        </div>
                        <div class="col-md-4">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control" id="" rows="3" v-model="regional.espUltrasonido"
                            :class="regional.espUltrasonido != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
                        </div>
                        
                        <div class="col-md-2">
                            <label for="" class="form-label col-12 fw-bold">Neuroestimulador</label>

                            <input type="radio" class="btn-check" name="neuro" id="neuroSi" autocomplete="off" value="Sí" v-model="regional.neuroestimulador">
                            <label class="btn btn-radio margenRadio" for="neuroSi">Sí</label>

                            <input type="radio" class="btn-check" name="neuro" id="neuroNo" autocomplete="off" value="No" v-model="regional.neuroestimulador">
                            <label class="btn btn-radio" for="neuroNo">No</label>
                        </div>
                        <div class="col-md-4">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control" id="" rows="3" v-model="regional.espNeuroestimulador"
                            :class="regional.espNeuroestimulador != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
                        </div>

                        <div class="col-md-2">
                            <label for="" class="form-label col-12 fw-bold">Probables complicaciones</label>

                            <input type="radio" class="btn-check" name="complicaciones" id="compliSi" autocomplete="off" value="Sí" v-model="regional.probComplicaciones">
                            <label class="btn btn-radio margenRadio" for="compliSi">Sí</label>

                            <input type="radio" class="btn-check" name="complicaciones" id="compliNo" autocomplete="off" value="No" v-model="regional.probComplicaciones">
                            <label class="btn btn-radio" for="compliNo">No</label>
                        </div>
                        <div class="col-md-4">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control" id="" rows="3" v-model="regional.espDificEquipo"
                            :class="regional.espDificEquipo != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <div class="tab-pane fade" id="local">
                <div class="col-12 bordePrincipal largoContenedor">  
                    <form class="row g-3">    
                        <h5 class="fw-bold">TIPOS DE ANÉSTESIA</h5>    
                        <h5 class="fw-bold col-md-12">Local</h5>  

                        <div class="col-md-8">
                            <label for="" class="form-label fw-bold">Sitio de la anéstesia</label>
                            <input type="text" class="form-control" id="" v-model="local.sitioAnestesiaL"
                            :class="local.sitioAnestesiaL != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label fw-bold">Anéstesico utilizado</label>
                            <select id="inputState" class="form-select" v-model="local.anestesicoUtilizado"
                            :class="local.anestesicoUtilizado != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Lidocaína 1%</option>
                                <option>Lidocaína 2%</option>
                                <option>Lidocaína 2% con Epinefrina</option>
                                <option>Bupivacaína 5%</option>
                                <option>Bupivacaína pesada</option>      
                                <option>Ropivacaína 2%</option>
                                <option>Ropivacaína 7.5%</option>                                        
                            </select>
                        </div>

                        <div class="col-md-12">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control" id="" rows="3" v-model="local.especificar"
                            :class="local.especificar != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <div class="tab-pane fade" id="general">
                <div class="col-12 bordePrincipal">  
                    <form class="row g-3">    
                        <h5 class="fw-bold">TIPOS DE ANÉSTESIA</h5>    
                        <h5 class="fw-bold col-md-12">General</h5>
                        <h5 class="col-md-12 fw-bold">INTUBACIÓN</h5>

                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold">Inducción</label>
                            <select id="inputState" class="form-select" v-model="general.induccion"
                            :class="general.induccion != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Endovenosa</option>
                                <option>Inhalatoria</option>
                                <option>Intramuscular</option>   
                            </select>
                        </div>

                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold">Tubo</label>
                            <select id="inputState" class="form-select" v-model="general.tubo"
                            :class="general.tubo != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Orotraqueal</option>
                                <option>Nasotraqueal</option>
                            </select>
                        </div>

                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Número de tubo</label>
                            <input type="text" class="form-control" id="" v-model="general.numeroTubo"
                            :class="general.numeroTubo != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold">Tipo de canula</label>
                            <select id="inputState" class="form-select" v-model="general.tipoCanula"
                            :class="general.tipoCanula != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Oral</option>
                                <option>Nasal</option>
                            </select>
                        </div>

                        <div class="col-md-2">
                            <label for="" class="form-label col-12 fw-bold">Globo</label>

                            <input type="radio" class="btn-check" name="globo" id="globoSi" autocomplete="off" value="Sí" v-model="general.globo">
                            <label class="btn btn-radio margenRadio" for="globoSi">Sí</label>

                            <input type="radio" class="btn-check" name="globo" id="globoNo" autocomplete="off" value="No" v-model="general.globo">
                            <label class="btn btn-radio" for="globoNo">No</label>
                        </div>
                        <div class="col-md-2">
                            <label for="inputState" class="form-label fw-bold">Presión</label>
                            <select id="inputState" class="form-select" v-model="general.presion"
                            :class="general.presion != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Presión baja</option>
                                <option>Presión normal</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label col-12 fw-bold">Probables dificultades técnicas</label>

                            <input type="radio" class="btn-check" name="difTecIntu" id="difTecIntuSi" autocomplete="off" value="Sí" v-model="general.difTecnicasIntubacion">
                            <label class="btn btn-radio margenRadio" for="difTecIntuSi">Sí</label>

                            <input type="radio" class="btn-check" name="difTecIntu" id="difTecIntuNo" autocomplete="off" value="No" v-model="general.difTecnicasIntubacion">
                            <label class="btn btn-radio" for="difTecIntuNo">No</label>
                        </div>
                        <div class="col-md-5">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control" id="" rows="3" v-model="general.espDifTecIntubacion"
                            :class="general.espDifTecIntubacion != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
                        </div>

                        <hr />
                        <h5 class="col-md-12 Raumanmeri">DISPOSITIVOS SUPRAGLÓTICOS</h5>

                        <div class="col-md-3">
                            <label for="" class="form-label col-12 fw-bold">Dispositivos suproglóticos</label>

                            <input type="radio" class="btn-check" name="supragloticos" id="supragloticosSi" autocomplete="off" value="Sí" v-model="general.dispositivosSupro">
                            <label class="btn btn-radio margenRadio" for="supragloticosSi">Sí</label>

                            <input type="radio" class="btn-check" name="supragloticos" id="supragloticosNo" autocomplete="off" value="No" v-model="general.dispositivosSupro">
                            <label class="btn btn-radio" for="supragloticosNo">No</label>
                        </div>

                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Calibre</label>
                            <input type="text" class="form-control" id="" v-model="general.calibre"
                            :class="general.calibre != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-6"></div>

                        <div class="col-md-3">
                            <label for="" class="form-label col-12 fw-bold">Complicaciones</label>

                            <input type="radio" class="btn-check" name="complicaciones" id="complicacionesSi" autocomplete="off" value="Sí" v-model="general.complicaciones">
                            <label class="btn btn-radio margenRadio" for="complicacionesSi">Sí</label>

                            <input type="radio" class="btn-check" name="complicaciones" id="complicacionesNo" autocomplete="off" value="No" v-model="general.complicaciones">
                            <label class="btn btn-radio" for="complicacionesNo">No</label>
                        </div>
                        <div class="col-md-8">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control" id="" rows="3" v-model="general.espComplicaciones"
                            :class="general.espComplicaciones != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
                        </div>        
                        
                        <hr />
                        <h5 class="col-md-12 fw-bold">OTROS</h5>

                        <div class="col-md-3">
                            <label for="" class="form-label col-12 fw-bold">Uso de otros dispositivos</label>

                            <input type="radio" class="btn-check" name="otros" id="otrosSi" autocomplete="off" value="Sí" v-model="general.otrosDispositivos">
                            <label class="btn btn-radio margenRadio" for="otrosSi">Sí</label>

                            <input type="radio" class="btn-check" name="otros" id="otrosNo" autocomplete="off" value="No" v-model="general.otrosDispositivos">
                            <label class="btn btn-radio" for="otrosNo">No</label>
                        </div>
                        <div class="col-md-8">
                            <label for="" class="form-label fw-bold">Específicar</label>
                            <textarea class="form-control" id="" rows="3" v-model="general.espOtrosDispositivos"
                            :class="general.espOtrosDispositivos != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
                        </div>             
                    </form>
                </div>
            </div>
        </div> 
    </div>                  
	
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    data () {
        return{
            posicion:{
                horasAyuno: '',
                accesoVenoso: 'Seleccione...',
                posicionPaciente: 'Seleccione...',
                posicionBrazos: 'Seleccione...',
                torniquete: '',
                aplicacionTorniquete: [{opc:'Sí'},{opc:'No'}],
                sitio: '',
                tiempoIsquemia: '',
                proteccionOjos: [],
                protecProminencias: '',
                tecnicaAnestesica: '',
                premedicacion: '',
                espPremedicacion: '',
                monitoreo: ''
            },
            sedacion:{
                via: 'Seleccione...',
                opcion: 'Seleccione...',
                observaciones: '',
                medicamentos: ''
            },
            regional:{
                tipo: 'Seleccione...',
                tipoAguja: '',
                nivel: '',
                calibreAguja: '',
                cateter: 'Seleccione...',
                orientacionCateter: 'Seleccione...',
                probDificulNeuro: '',
                espDificultadesNeuro: '',
                sitio: 'Seleccione...',
                opcion: 'Seleccione...',
                espSitio: '',
                anestesicoUtilizado: 'Seleccione...',
                espAnestesico: '',
                probDificulPlexo: '',
                espDificulPlexo: '',
                ultrasonido: '',
                espUltrasonido: '',
                neuroestimulador: '',
                espNeuroestimulador: '',
                probComplicaciones: '',
                espDificEquipo: ''
            },
            local:{
                sitioAnestesiaL: '',
                anestesicoUtilizado: 'Seleccione...',
                especificar: ''
            },
            general:{
                induccion: 'Seleccione...',
                tubo: 'Seleccione...',
                numeroTubo: '',
                tipoCanula: 'Seleccione...',
                globo: '',
                presion: 'Seleccione...',
                difTecnicasIntubacion: '',
                espDifTecIntubacion: '',
                dispositivosSupro: '',
                calibre: '',
                complicaciones: '',
                espComplicaciones: '',
                otrosDispositivos: '',
                espOtrosDispositivos: '',
            }
        }
    }
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
.margenRadio{
    margin-right: 10px;
}
.largoContenedor{
    height: 535px
}
.formSombra:focus{
    border-color:green;
    outline:0;
    -webkit-box-shadow:0 0 8px green;
    box-shadow:0 0 8px green
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