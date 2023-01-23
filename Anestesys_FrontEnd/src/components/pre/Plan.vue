<template>
    <div>
        <ul class="nav nav-pills mb-3 text-center" id="">
            <li class="nav-item col-md-3" >
                <button class="nav-link active" id="plan" data-bs-toggle="pill" data-bs-target="#posicion" type="button" aria-selected="true">POSICIÓN Y CUIDADOS</button>
            </li>
            <li class="nav-item col-md-2" >
                <button class="nav-link" id="plan" data-bs-toggle="pill" data-bs-target="#sedacion" type="button" aria-selected="false">SEDACIÓN</button>
            </li>
            <li class="nav-item col-md-2" >
                <button class="nav-link" id="plan" data-bs-toggle="pill" data-bs-target="#regional" type="button" aria-selected="false">REGIONAL</button>
            </li>
            <li class="nav-item col-md-2" >
                <button class="nav-link" id="plan" data-bs-toggle="pill" data-bs-target="#local" type="button" aria-selected="false">LOCAL</button>
            </li>
            <li class="nav-item col-md-2" >
                <button class="nav-link" id="plan" data-bs-toggle="pill" data-bs-target="#general" type="button" aria-selected="false">GENERAL</button>
            </li>
        </ul>

        <div class="tab-content col-md-12" id="">
            <div class="tab-pane fade show active" id="posicion">
                <div class="col-12 divBorder">  
                    <form class="row g-3">    
                        <h5 class="fw-bold">POSICIÓN Y CUIDADOS</h5>    

                        <div class="col-md-2">
                            <label for="" class="form-label">Horas de ayuno</label>
                            <input type="text" class="form-control" id=""> 
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Acceso Venoso</label>
                            <select id="inputState" class="form-select">
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
                            <label for="inputState" class="form-label">Posición del paciente</label>
                            <select id="inputState" class="form-select">
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
                            <label for="inputState" class="form-label">Posición de los brazos</label>
                            <select id="inputState" class="form-select">
                                <option selected>Seleccione...</option>
                                <option>Abducción</option>
                                <option>Aducción</option>
                            </select>
                        </div>

                        <div class="col-md-2">
                            <label for="" class="form-label col-12">Aplicación de torniquete</label>

                            <input type="radio" class="btn-check" name="torniquete" id="torniSi" autocomplete="off">
                            <label class="btn btn-outline-success radioMargin" for="torniSi">Sí</label>

                            <input type="radio" class="btn-check" name="torniquete" id="torniNo" autocomplete="off">
                            <label class="btn btn-outline-danger" for="torniNo">No</label>
                        </div>
                        <div class="col-md-5">
                            <label for="" class="form-label">Sitio</label>
                            <input type="text" class="form-control" id=""> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label">Probable tiempo de isquemia</label>
                            <input type="text" class="form-control" id=""> 
                        </div>
                        <div class="col-md-2">
                            <label for="" class="form-label col-12">Protección de ojos</label>

                            <input type="radio" class="btn-check" name="ojos" id="ojosSi" autocomplete="off">
                            <label class="btn btn-outline-success radioMargin" for="ojosSi">Sí</label>

                            <input type="radio" class="btn-check" name="ojos" id="ojosNo" autocomplete="off">
                            <label class="btn btn-outline-danger" for="ojosNo">No</label>
                        </div>

                        <div class="col-md-2">
                            <label for="" class="form-label col-12">Protección de prominencias oseas</label>

                            <input type="radio" class="btn-check" name="oseas" id="oseasSi" autocomplete="off">
                            <label class="btn btn-outline-success radioMargin" for="oseasSi">Sí</label>

                            <input type="radio" class="btn-check" name="oseas" id="oseasNo" autocomplete="off">
                            <label class="btn btn-outline-danger" for="oseasNo">No</label>
                        </div>
                        <div class="col-md-10">
                            <label for="" class="form-label">Técnica anéstesica</label>
                            <input type="text" class="form-control" id=""> 
                        </div>

                        <div class="col-md-2">
                            <label for="" class="form-label col-12">Premedicación</label>

                            <input type="radio" class="btn-check" name="premedicacion" id="premediSi" autocomplete="off">
                            <label class="btn btn-outline-success radioMargin" for="premediSi">Sí</label>

                            <input type="radio" class="btn-check" name="premedicacion" id="premediNo" autocomplete="off">
                            <label class="btn btn-outline-danger" for="premediNo">No</label>
                        </div>
                        <div class="col-md-10">
                            <label for="" class="form-label">Específicar</label>
                            <input type="text" class="form-control" id=""> 
                        </div>

                        <div class="col-md-">
                            <label for="" class="form-label">Monitoreo</label>
                            <input type="text" class="form-control" id=""> 
                        </div>
                    </form>
                </div>
            </div>
            <div class="tab-pane fade" id="sedacion">
                <div class="col-12 divBorder">  
                    <form class="row g-3">    
                        <h5 class="fw-bold">TIPOS DE ANÉSTESIA</h5>    
                        <h5 class="fw-bold col-md-12">Sedación</h5>   

                        <div class="col-md-3">
                            <label for="inputState" class="form-label">Vía</label>
                            <select id="inputState" class="form-select">
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
                            <label for="inputState" class="form-label">Opción</label>
                            <select id="inputState" class="form-select">
                                <option selected>Seleccione...</option>
                                <option>Superficial</option>
                                <option>Profunda</option>
                            </select>
                        </div>
                        <div class="col-md-7">
                            <label for="" class="form-label">Observaciones</label>
                            <textarea class="form-control" id="" rows="3"></textarea>
                        </div>

                        <div class="col-md-12">
                            <label for="" class="form-label">Medicamentos utilizados</label>
                            <input type="text" class="form-control" id=""> 
                        </div>
                    </form>
                </div>
            </div>
            <div class="tab-pane fade" id="regional">
                <div class="col-12 divBorder">  
                    <form class="row g-3">    
                        <h5 class="fw-bold">TIPOS DE ANÉSTESIA</h5>    
                        <h5 class="fw-bold col-md-12">Regional</h5>  
                        <h5 class="">BLOQUEO NEURO-AXIAL</h5>  

                        <div class="col-md-2">
                            <label for="inputState" class="form-label">Tipo</label>
                            <select id="inputState" class="form-select">
                                <option selected>Seleccione...</option>
                                <option>Espidural</option>
                                <option>Espinal</option>
                                <option>Mixta</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label">Tipo de aguja</label>
                            <input type="text" class="form-control" id=""> 
                        </div>
                        <div class="col-md-2">
                            <label for="" class="form-label">Nivel</label>
                            <input type="text" class="form-control" id=""> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label">Calibre de aguja</label>
                            <input type="text" class="form-control" id=""> 
                        </div>
                        <div class="col-md-2">
                            <label for="inputState" class="form-label">Catéter</label>
                            <select id="inputState" class="form-select">
                                <option selected>Seleccione...</option>
                                <option>Sí</option>
                                <option>No</option>
                            </select>
                        </div>

                        <div class="col-md-3">
                            <label for="inputState" class="form-label">Orientación de catéter</label>
                            <select id="inputState" class="form-select">
                                <option selected>Seleccione...</option>
                                <option>Cefálica</option>
                                <option>Caudal</option>
                            </select>
                        </div>

                        <div class="col-md-3">
                            <label for="" class="form-label col-12">Probables dificultades técnicas</label>

                            <input type="radio" class="btn-check" name="difTec" id="difTecSi" autocomplete="off">
                            <label class="btn btn-outline-success radioMargin" for="difTecSi">Sí</label>

                            <input type="radio" class="btn-check" name="difTec" id="difTecNo" autocomplete="off">
                            <label class="btn btn-outline-danger" for="difTecNo">No</label>
                        </div>

                        <div class="col-md-6">
                            <label for="" class="form-label">Específicar</label>
                            <textarea class="form-control" id="" rows="3"></textarea>
                        </div>
                        <hr />

                        <h5 class="">BLOQUEO PLEXO</h5>
                        
                        <div class="col-md-2">
                            <label for="inputState" class="form-label">Sitio</label>
                            <select id="inputState" class="form-select">
                                <option selected>Seleccione...</option>
                                <option>Cabeza</option>
                                <option>Cervicales</option>
                                <option>Torácicos</option>
                                <option>Lumbares y sacros</option>
                                <option>Otros</option>                    
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="inputState" class="form-label">Opción</label>
                            <select id="inputState" class="form-select">
                                <option selected>Seleccione...</option>                  
                            </select>
                        </div>
                        <div class="col-md-7">
                            <label for="" class="form-label">Específicar</label>
                            <textarea class="form-control" id="" rows="3"></textarea>
                        </div>

                        <div class="col-md-3">
                            <label for="inputState" class="form-label">Anestésico utilizado</label>
                            <select id="inputState" class="form-select">
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
                            <label for="" class="form-label">Específicar</label>
                            <textarea class="form-control" id="" rows="3"></textarea>
                        </div>

                        <div class="col-md-3">
                            <label for="" class="form-label col-12">Probables dificultades técnicas</label>

                            <input type="radio" class="btn-check" name="dif" id="difSi" autocomplete="off">
                            <label class="btn btn-outline-success radioMargin" for="difSi">Sí</label>

                            <input type="radio" class="btn-check" name="dif" id="difNo" autocomplete="off">
                            <label class="btn btn-outline-danger" for="difNo">No</label>
                        </div>
                        <div class="col-md-9">
                            <label for="" class="form-label">Específicar</label>
                            <textarea class="form-control" id="" rows="3"></textarea>
                        </div>
                        <hr />

                        <h5 class="">EQUIPO DE APOYO</h5>

                        <div class="col-md-2">
                            <label for="" class="form-label col-12">Ultrasonido</label>

                            <input type="radio" class="btn-check" name="ultrasonido" id="ultraSi" autocomplete="off">
                            <label class="btn btn-outline-success radioMargin" for="ultraSi">Sí</label>

                            <input type="radio" class="btn-check" name="ultrasonido" id="ultraNo" autocomplete="off">
                            <label class="btn btn-outline-danger" for="ultraNo">No</label>
                        </div>
                        <div class="col-md-4">
                            <label for="" class="form-label">Específicar</label>
                            <textarea class="form-control" id="" rows="3"></textarea>
                        </div>
                        
                        <div class="col-md-2">
                            <label for="" class="form-label col-12">Neuroestimulador</label>

                            <input type="radio" class="btn-check" name="neuro" id="neuroSi" autocomplete="off">
                            <label class="btn btn-outline-success radioMargin" for="neuroSi">Sí</label>

                            <input type="radio" class="btn-check" name="neuro" id="neuroNo" autocomplete="off">
                            <label class="btn btn-outline-danger" for="neuroNo">No</label>
                        </div>
                        <div class="col-md-4">
                            <label for="" class="form-label">Específicar</label>
                            <textarea class="form-control" id="" rows="3"></textarea>
                        </div>

                        <div class="col-md-2">
                            <label for="" class="form-label col-12">Probables complicaciones</label>

                            <input type="radio" class="btn-check" name="complicaciones" id="compliSi" autocomplete="off">
                            <label class="btn btn-outline-success radioMargin" for="compliSi">Sí</label>

                            <input type="radio" class="btn-check" name="complicaciones" id="compliNo" autocomplete="off">
                            <label class="btn btn-outline-danger" for="compliNo">No</label>
                        </div>
                        <div class="col-md-4">
                            <label for="" class="form-label">Específicar</label>
                            <textarea class="form-control" id="" rows="3"></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <div class="tab-pane fade" id="local">
                <div class="col-12 divBorder">  
                    <form class="row g-3">    
                        <h5 class="fw-bold">TIPOS DE ANÉSTESIA</h5>    
                        <h5 class="fw-bold col-md-12">Regional</h5>  

                        <div class="col-md-8">
                            <label for="" class="form-label">Sitio de la anéstesia</label>
                            <input type="text" class="form-control" id=""> 
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Anéstesico utilizado</label>
                            <select id="inputState" class="form-select">
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
                            <label for="" class="form-label">Específicar</label>
                            <textarea class="form-control" id="" rows="3"></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <div class="tab-pane fade" id="general">
                <div class="col-12 divBorder">  
                    <form class="row g-3">    
                        <h5 class="fw-bold">TIPOS DE ANÉSTESIA</h5>    
                        <h5 class="fw-bold col-md-12">Local</h5>
                        <h5 class="col-md-12">INTUBACIÓN</h5>

                        <div class="col-md-3">
                            <label for="inputState" class="form-label">Inducción</label>
                            <select id="inputState" class="form-select">
                                <option selected>Seleccione...</option>
                                <option>Endovenosa</option>
                                <option>Inhalatoria</option>
                                <option>Intramuscular</option>   
                            </select>
                        </div>

                        <div class="col-md-3">
                            <label for="inputState" class="form-label">Tubo</label>
                            <select id="inputState" class="form-select">
                                <option selected>Seleccione...</option>
                                <option>Orotraqueal</option>
                                <option>Nasotraqueal</option>
                            </select>
                        </div>

                        <div class="col-md-3">
                            <label for="" class="form-label">Número de tubo</label>
                            <input type="text" class="form-control" id=""> 
                        </div>

                        <div class="col-md-3">
                            <label for="inputState" class="form-label">Tipo de canula</label>
                            <select id="inputState" class="form-select">
                                <option selected>Seleccione...</option>
                                <option>Oral</option>
                                <option>Nasal</option>
                            </select>
                        </div>

                        <div class="col-md-2">
                            <label for="" class="form-label col-12">Globo</label>

                            <input type="radio" class="btn-check" name="globo" id="globoSi" autocomplete="off">
                            <label class="btn btn-outline-success radioMargin" for="globoSi">Sí</label>

                            <input type="radio" class="btn-check" name="globo" id="globoNo" autocomplete="off">
                            <label class="btn btn-outline-danger" for="globoNo">No</label>
                        </div>
                        <div class="col-md-2">
                            <label for="inputState" class="form-label">Presión</label>
                            <select id="inputState" class="form-select">
                                <option selected>Seleccione...</option>
                                <option>Presión baja</option>
                                <option>Presión normal</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label col-12">Probables dificultades técnicas</label>

                            <input type="radio" class="btn-check" name="difTecIntu" id="difTecIntuSi" autocomplete="off">
                            <label class="btn btn-outline-success radioMargin" for="difTecIntuSi">Sí</label>

                            <input type="radio" class="btn-check" name="difTecIntu" id="difTecIntuNo" autocomplete="off">
                            <label class="btn btn-outline-danger" for="difTecIntuNo">No</label>
                        </div>
                        <div class="col-md-5">
                            <label for="" class="form-label">Específicar</label>
                            <textarea class="form-control" id="" rows="3"></textarea>
                        </div>

                        <hr />
                        <h5 class="col-md-12">DISPOSITIVOS SUPRAGLÓTICOS</h5>

                        <div class="col-md-3">
                            <label for="" class="form-label col-12">Dispositivos suproglóticos</label>

                            <input type="radio" class="btn-check" name="supragloticos" id="supragloticosSi" autocomplete="off">
                            <label class="btn btn-outline-success radioMargin" for="supragloticosSi">Sí</label>

                            <input type="radio" class="btn-check" name="supragloticos" id="supragloticosNo" autocomplete="off">
                            <label class="btn btn-outline-danger" for="supragloticosNo">No</label>
                        </div>

                        <div class="col-md-3">
                            <label for="" class="form-label">Calibre</label>
                            <input type="text" class="form-control" id=""> 
                        </div>
                        <div class="col-md-6"></div>

                        <div class="col-md-3">
                            <label for="" class="form-label col-12">Complicaciones</label>

                            <input type="radio" class="btn-check" name="complicaciones" id="complicacionesSi" autocomplete="off">
                            <label class="btn btn-outline-success radioMargin" for="complicacionesSi">Sí</label>

                            <input type="radio" class="btn-check" name="complicaciones" id="complicacionesNo" autocomplete="off">
                            <label class="btn btn-outline-danger" for="complicacionesNo">No</label>
                        </div>
                        <div class="col-md-8">
                            <label for="" class="form-label">Específicar</label>
                            <textarea class="form-control" id="" rows="3"></textarea>
                        </div>        
                        
                        <hr />
                        <h5 class="col-md-12">OTROS</h5>

                        <div class="col-md-3">
                            <label for="" class="form-label col-12">Uso de otros dispositivos</label>

                            <input type="radio" class="btn-check" name="otros" id="otrosSi" autocomplete="off">
                            <label class="btn btn-outline-success radioMargin" for="otrosSi">Sí</label>

                            <input type="radio" class="btn-check" name="otros" id="otrosNo" autocomplete="off">
                            <label class="btn btn-outline-danger" for="otrosNo">No</label>
                        </div>
                        <div class="col-md-8">
                            <label for="" class="form-label">Específicar</label>
                            <textarea class="form-control" id="" rows="3"></textarea>
                        </div>             
                    </form>
                </div>
            </div>
        </div> 
    </div>                  
	
</template>

<style scoped>
.divBorder {
  border-radius: 13px;
  box-shadow: 3px 3px 7px #ccc;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 10px;
}
.radioMargin{
    margin-right: 10px;
}
</style>