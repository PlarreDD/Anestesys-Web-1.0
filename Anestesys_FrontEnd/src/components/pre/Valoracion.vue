<template>
    <div>
        <ul class="nav nav-pills mb-3 text-center" id="">
            <li class="nav-item col-md-2" >
                <button class="btn btn-outline-success active" id="valoracion" data-bs-toggle="pill" data-bs-target="#antecedentes" type="button" aria-selected="true">ANTECEDENTES</button>
            </li>
            <li class="nav-item col-md-3" >
                <button class="btn btn-outline-success" id="valoracion" data-bs-toggle="pill" data-bs-target="#exploracion" type="button" aria-selected="false">EXPLORACIÓN FÍSICA</button>
            </li>
            <li class="nav-item col-md-2" >
                <button class="btn btn-outline-success" id="valoracion" data-bs-toggle="pill" data-bs-target="#via" type="button" aria-selected="false">VÍA AÉREA</button>
            </li>
            <li class="nav-item col-md-2" >
                <button class="btn btn-outline-success" id="valoracion" data-bs-toggle="pill" data-bs-target="#estudios" type="button" aria-selected="false">ESTUDIOS</button>
            </li>
            <li class="nav-item col-md-2" >
                <button class="btn btn-outline-success" id="valoracion" data-bs-toggle="pill" data-bs-target="#examenes" type="button" aria-selected="false">EXÁMENES</button>
            </li>
        </ul>

        <div class="tab-content col-md-12" id="">
            <div class="tab-pane fade show active" id="antecedentes">
                <div class="col-12 bordePrincipal">
                    <form class="row g-3">    
                        <h5 class="fw-bold">ANTECEDENTES</h5>
                        
                        <div class="col row">                 
                            <h5 class="col-md-12 fw-bold">Personales patológicos</h5>

                            <div class="col-md-4">                                
                                <label for="inputState" class="col-md-12 form-label">Alergias</label>
                                
                                <input type="radio" class="btn-check" name="alergias" id="alergiasSi" autocomplete="off" value="Sí" v-model="antecedentes.alergias">
                                <label class="btn btn-outline-success margenRadio" for="alergiasSi">Sí</label>

                                <input type="radio" class="btn-check" name="alergias" id="alergiasNo" autocomplete="off" value="No" v-model="antecedentes.alergias">
                                <label class="btn btn-outline-danger" for="alergiasNo">No</label>                                
                            </div>
                            <div class="col-md-8">
                                <label for="" class="form-label">Específicar</label>
                                <input type="text" class="form-control margenTexto" v-model="antecedentes.espAlergias" id=""
                                :class="antecedentes.espAlergias.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                            </div>

                            <div class="col-md-4">
                                <label for="inputState" class="col-md-12 form-label">Quirúrgicos</label>
                                
                                <input type="radio" class="btn-check" name="quirurgicos" id="quirurgicosSi" autocomplete="off" value="Sí" v-model="antecedentes.quirurgicos">
                                <label class="btn btn-outline-success margenRadio" for="quirurgicosSi">Sí</label>

                                <input type="radio" class="btn-check" name="quirurgicos" id="quirurgicosNo" autocomplete="off" value="No" v-model="antecedentes.quirurgicos">
                                <label class="btn btn-outline-danger" for="quirurgicosNo">No</label>         
                            </div>
                            <div class="col-md-8">
                                <label for="" class="form-label">Específicar</label>
                                <input type="text" class="form-control margenTexto" id="" v-model="antecedentes.espQuirurgicos"
                                :class="antecedentes.espQuirurgicos.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                            </div>

                            <div class="col-md-4">
                                <label for="inputState" class="col-md-12 form-label">Endocrinológicos</label>

                                <input type="radio" class="btn-check" name="endocrinologicos" id="endocrinologicosSi" autocomplete="off" value="Sí" v-model="antecedentes.endocrinologicos">
                                <label class="btn btn-outline-success margenRadio" for="endocrinologicosSi">Sí</label>

                                <input type="radio" class="btn-check" name="endocrinologicos" id="endocrinologicosNo" autocomplete="off" value="No" v-model="antecedentes.endocrinologicos">
                                <label class="btn btn-outline-danger" for="endocrinologicosNo">No</label>
                            </div>
                            <div class="col-md-8">
                                <label for="" class="form-label">Específicar</label>
                                <input type="text" class="form-control margenTexto" id="" v-model="antecedentes.espEndocrinologicos"
                                :class="antecedentes.espEndocrinologicos.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                            </div>

                            <div class="col-md-4">
                                <label for="inputState" class="col-md-12 form-label">Urológicos</label>

                                <input type="radio" class="btn-check" name="urologicos" id="urologicosSi" autocomplete="off" value="Sí" v-model="antecedentes.urologicos">
                                <label class="btn btn-outline-success margenRadio" for="urologicosSi">Sí</label>

                                <input type="radio" class="btn-check" name="urologicos" id="urologicosNo" autocomplete="off" value="No" v-model="antecedentes.urologicos">
                                <label class="btn btn-outline-danger" for="urologicosNo">No</label>
                            </div>
                            <div class="col-md-8">
                                <label for="" class="form-label">Específicar</label>
                                <input type="text" class="form-control margenTexto" id="" v-model="antecedentes.espUrologicos"
                                :class="antecedentes.espUrologicos.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                            </div>

                            <div class="col-md-4">
                                <label for="inputState" class="col-md-12 form-label">Traumáticos</label>

                                <input type="radio" class="btn-check" name="traumaticos" id="traumaticosSi" autocomplete="off" value="Sí" v-model="antecedentes.traumaticos">
                                <label class="btn btn-outline-success margenRadio" for="traumaticosSi">Sí</label>

                                <input type="radio" class="btn-check" name="traumaticos" id="traumaticosNo" autocomplete="off" value="No" v-model="antecedentes.traumaticos">
                                <label class="btn btn-outline-danger" for="traumaticosNo">No</label>
                            </div>
                            <div class="col-md-8">
                                <label for="" class="form-label">Específicar</label>
                                <input type="text" class="form-control margenTexto" id="" v-model="antecedentes.espTraumaticos"
                                :class="antecedentes.espTraumaticos.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                            </div>

                            <div class="col-md-4">
                                <label for="inputState" class="col-md-12 form-label">Ortopédicos</label>

                                <input type="radio" class="btn-check" name="ortopedicos" id="ortopedicosSi" autocomplete="off" value="Sí" v-model="antecedentes.ortopedicos">
                                <label class="btn btn-outline-success margenRadio" for="ortopedicosSi">Sí</label>

                                <input type="radio" class="btn-check" name="ortopedicos" id="ortopedicosNo" autocomplete="off" value="No" v-model="antecedentes.ortopedicos">
                                <label class="btn btn-outline-danger" for="ortopedicosNo">No</label>
                            </div>
                            <div class="col-md-8">
                                <label for="" class="form-label">Específicar</label>
                                <input type="text" class="form-control margenTexto" id="" v-model="antecedentes.espOrtopedicos"
                                :class="antecedentes.espOrtopedicos.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                            </div>

                            <div class="col-md-4">
                                <label for="inputState" class="col-md-12 form-label">Transfusiones previas</label>

                                <input type="radio" class="btn-check" name="transfusiones" id="transfusionesSi" autocomplete="off" value="Sí" v-model="antecedentes.transfusiones">
                                <label class="btn btn-outline-success margenRadio" for="transfusionesSi">Sí</label>

                                <input type="radio" class="btn-check" name="transfusiones" id="transfusionesNo" autocomplete="off" value="No" v-model="antecedentes.transfusiones">
                                <label class="btn btn-outline-danger" for="transfusionesNo">No</label>
                            </div>
                            <div class="col-md-8">
                                <label for="" class="form-label">Específicar</label>
                                <input type="text" class="form-control margenTexto" id="" v-model="antecedentes.espTransfusiones"
                                :class="antecedentes.espTransfusiones.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                            </div>

                            <div class="col-md-4">
                                <label for="inputState" class="col-md-12 form-label">Complicaciones anestésicas previas</label>
                                
                                <input type="radio" class="btn-check" name="complAnestesicas" id="complAnestesicasSi" autocomplete="off" value="Sí" v-model="antecedentes.complAnestesicas">
                                <label class="btn btn-outline-success margenRadio" for="complAnestesicasSi">Sí</label>

                                <input type="radio" class="btn-check" name="complAnestesicas" id="complAnestesicasNo" autocomplete="off" value="No" v-model="antecedentes.complAnestesicas">
                                <label class="btn btn-outline-danger" for="complAnestesicasNo">No</label>
                            </div>
                            <div class="col-md-8">
                                <label for="" class="form-label">Específicar</label>
                                <input type="text" class="form-control margenTexto" id="" v-model="antecedentes.espComplAnestesicas"
                                :class="antecedentes.espComplAnestesicas.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                            </div>
                            
                            <div class="col-md-4">
                                <label for="inputState" class="col-md-12 form-label">Medicación actual</label>
                                
                                <input type="radio" class="btn-check" name="medicacion" id="medicacionSi" autocomplete="off" value="Sí" v-model="antecedentes.medicacion">
                                <label class="btn btn-outline-success margenRadio" for="medicacionSi">Sí</label>

                                <input type="radio" class="btn-check" name="medicacion" id="medicacionNo" autocomplete="off" value="No" v-model="antecedentes.medicacion">
                                <label class="btn btn-outline-danger" for="medicacionNo">No</label>
                            </div>
                            <div class="col-md-8">
                                <label for="" class="form-label">Específicar</label>
                                <input type="text" class="form-control" id="" v-model="antecedentes.espMedicacion"
                                :class="antecedentes.espMedicacion.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                            </div>
                        </div>

                        <div class="col row"> 
                            <h5 class="col-12 fw-bold">No patológicos</h5>

                            <div class="col-md-6">
                                <label for="" class="form-label">Horas de ayuno</label>
                                <input type="text" class="form-control" id="" v-model="antecedentes.horasAyuno"
                                :class="antecedentes.horasAyuno.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                            </div>
                            <div class="col-md-6"></div>

                            <div class="col-md-4">
                                <label for="inputState" class="form-label col-md-12">Tabaquismo</label>

                                <input type="radio" class="btn-check" name="tabaquismo" id="tabaquismoSi" autocomplete="off" value="Sí" v-model="antecedentes.tabaquismo">
                                <label class="btn btn-outline-success margenRadio" for="tabaquismoSi">Sí</label>

                                <input type="radio" class="btn-check" name="tabaquismo" id="tabaquismoNo" autocomplete="off" value="No" v-model="antecedentes.tabaquismo">
                                <label class="btn btn-outline-danger" for="tabaquismoNo">No</label>
                            </div>
                            <div class="col-md-8">
                                <label for="" class="form-label">Específicar</label>
                                <input type="text" class="form-control" id="" v-model="antecedentes.espTabaquismo"
                                :class="antecedentes.espTabaquismo.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                            </div>

                            <div class="col-md-4">
                                <label for="inputState" class="form-label col-md-12">Etilismo</label>
                                
                                <input type="radio" class="btn-check" name="etilismo" id="etilismoSi" autocomplete="off" value="Sí" v-model="antecedentes.etilismo">
                                <label class="btn btn-outline-success margenRadio" for="etilismoSi">Sí</label>

                                <input type="radio" class="btn-check" name="etilismo" id="etilismoNo" autocomplete="off" value="No" v-model="antecedentes.etilismo">
                                <label class="btn btn-outline-danger" for="etilismoNo">No</label>
                            </div>
                            <div class="col-md-8">
                                <label for="" class="form-label">Específicar</label>
                                <input type="text" class="form-control" id="" v-model="antecedentes.espEtilismo"
                                :class="antecedentes.espEtilismo.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                            </div>

                            <div class="col-md-4">
                                <label for="inputState" class="form-label col-md-12">Adicciones</label>
                                
                                <input type="radio" class="btn-check" name="adicciones" id="adiccionesSi" autocomplete="off" value="Sí" v-model="antecedentes.adicciones">
                                <label class="btn btn-outline-success margenRadio" for="adiccionesSi">Sí</label>

                                <input type="radio" class="btn-check" name="adicciones" id="adiccionesNo" autocomplete="off" value="No" v-model="antecedentes.adicciones">
                                <label class="btn btn-outline-danger" for="adiccionesNo">No</label>
                            </div>
                            <div class="col-md-8">
                                <label for="" class="form-label">Específicar</label>
                                <input type="text" class="form-control" id="" v-model="antecedentes.espAdicciones"
                                :class="antecedentes.espAdicciones.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                            </div>

                            <div class="col-md-4">
                                <label for="inputState" class="form-label col-md-12">Inmunizaciones</label>
                                
                                <input type="radio" class="btn-check" name="inmunizaciones" id="inmunizacionesSi" autocomplete="off" value="Sí" v-model="antecedentes.inmunizaciones">
                                <label class="btn btn-outline-success margenRadio" for="inmunizacionesSi">Sí</label>

                                <input type="radio" class="btn-check" name="inmunizaciones" id="inmunizacionesNo" autocomplete="off" value="No" v-model="antecedentes.inmunizaciones">
                                <label class="btn btn-outline-danger" for="inmunizacionesNo">No</label>
                            </div>
                            <div class="col-md-8">
                                <label for="" class="form-label">Específicar</label>
                                <input type="text" class="form-control" id="" v-model="antecedentes.espInmunizaciones"
                                :class="antecedentes.espInmunizaciones.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                            </div>

                            <div class="col-md-12">
                                <label for="" class="form-label">Antecedentes de importancia para el procedimiento quirúrgico</label>
                                <textarea class="form-control" id="" rows="3" v-model="antecedentes.antecedentes"
                                :class="antecedentes.antecedentes.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
                            </div>
                            
                        </div>

                    </form>
                </div>
            </div>
            <div class="tab-pane fade" id="exploracion">
                <div class="col-12 bordePrincipal largoContenedor">
                    <form class="row g-3">
                        <h5 class="fw-bold">EXPLORACIÓN FÍSICA</h5>
                        <h5 class="fw-bold">Signos Vitales</h5>

                        <div class="col-md-2">
                            <label for="" class="form-label">Edad</label>
                            <input type="text" class="form-control" id="" v-model="exploracion.edad"
                            :class="exploracion.edad != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-2">
                            <label for="" class="form-label">Temperatura</label>
                            <input type="text" class="form-control" id="" v-model="exploracion.temperatura"
                            :class="exploracion.temperatura.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-2"></div>
                        <div class="col-md-3">
                            <label for="" class="form-label">Frecuencia Cardíaca</label>
                            <input type="text" class="form-control" id="" placeholder="x min" v-model="exploracion.frecuenciaCardiaca"
                            :class="exploracion.frecuenciaCardiaca.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label">Frecuencia Respiratoria</label>
                            <input type="text" class="form-control" id="" placeholder="x min" v-model="exploracion.frecueciaRespiratoria"
                            :class="exploracion.frecueciaRespiratoria.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <div class="col-md-2">
                            <label for="" class="form-label">Peso (k)</label>
                            <input type="text" class="form-control" id="" v-model="exploracion.peso" @keyup.capture="calcularIMC"
                            :class="exploracion.peso != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-2">
                            <label for="" class="form-label">Talla (m)</label>
                            <input type="text" class="form-control" id="" v-model="exploracion.talla" @keyup.capture="calcularIMC"
                            :class="exploracion.talla != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-2">
                            <label for="" class="form-label">IMC</label>
                            <input type="text" class="form-control" id="" v-model="exploracion.imc" readonly
                            :class="exploracion.imc != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label">Tensión Arterial</label>
                            <input type="text" class="form-control" id="" placeholder="mmHg" v-model="exploracion.tensionArterial"
                            :class="exploracion.tensionArterial.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label">Saturación de Oxígeno</label>
                            <input type="text" class="form-control" id="" placeholder="%" v-model="exploracion.saturacionOxigeno"
                            :class="exploracion.saturacionOxigeno.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                    </form>
                </div> 
            </div>
            <div class="tab-pane fade" id="via">
                <div class="col-12 bordePrincipal largoContenedor">
                    <form class="row g-3">
                        <h5 class="fw-bold">Valoración de Vía Aérea y Otras Escalas</h5>

                        <div class="col-md-3">
                            <label for="inputState" class="form-label">Mallampati</label>
                            <select id="inputState" class="form-select" v-model="via.mallampati"
                            :class="via.mallampati != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Clase I</option>
                                <option>Clase II</option>
                                <option>Clase III</option>
                                <option>Clase IV</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="inputState" class="form-label">Patil-Aldreti</label>
                            <select id="inputState" class="form-select" v-model="via.patilAldreti"
                            :class="via.patilAldreti != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Más de 6.5 cm</option>
                                <option>De 6 a 6.5 cm</option>
                                <option>Menos de 6 cm</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="inputState" class="form-label">Apertura bucal</label>
                            <select id="inputState" class="form-select" v-model="via.aperturaBucal"
                            :class="via.aperturaBucal != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>3 cm</option>
                                <option>2.6 a 3 cm</option>
                                <option>2 a 2.5 cm</option>
                                <option>&lt; 2.5 cm</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="inputState" class="form-label">Distancia esternomentoniana</label>
                            <select id="inputState" class="form-select" v-model="via.distancia"
                            :class="via.distancia != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Más de 13 cm</option>
                                <option>De 12 a 13 cm</option>
                                <option>De 11 a 12 cm</option>
                                <option>Menos de 11 cm</option>
                            </select>
                        </div>
                        
                        <div class="col-md-6">
                            <label for="inputState" class="form-label">Protusión Mandibular</label>
                            <select id="inputState" class="form-select" v-model="via.protusion"
                            :class="via.protusion != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Los incisivos inferiores pueden ser llevados más adelante de la arcada dental superior</option>
                                <option>Los incisivos inferiores se desplazan hasta el nivel de la dentadura superior</option>
                                <option>Los incisivos inferiores no se proyectan hacia adelante y no pueden tocar la arcada dentaria</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="inputState" class="form-label">IPID</label>
                            <select id="inputState" class="form-select" v-model="via.ipid"
                            :class="via.ipid != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                            <option>Intubación fácil</option>
                                <option>Discreta dificultad, no requiere maniobras adicionales</option>
                                <option>Franca dificultad, requiere hasta dos intentos con ayuda de una o dos maniobras adicionales </option>
                                <option>Gran dificultad, requiere más de dos intentos y ayuda de tres o más maniobras adicionales</option>
                                <option>Intubación imposible</option>                    
                            </select>
                        </div>

                        <div class="col-md-3">
                            <label for="inputState" class="form-label">Escala Glasgow</label>
                            <select id="inputState" class="form-select" v-model="via.glasgow"
                            :class="via.glasgow != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
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
                        <div class="col-md-3">
                            <label for="inputState" class="form-label">Escala NYHA</label>
                            <select id="inputState" class="form-select" v-model="via.nyha"
                            :class="via.nyha != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Clase I</option>
                                <option>Clase II</option>
                                <option>Clase III</option>
                                <option>Clase IV</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="inputState" class="form-label">Escala de Goldman</label>
                            <select id="inputState" class="form-select" v-model="via.goldman"
                            :class="via.goldman != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Clase I</option>
                                <option>Clase II</option>
                                <option>Clase III</option>
                                <option>Clase IV</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="inputState" class="form-label">Riesgo de Trombosis</label>
                            <select id="inputState" class="form-select" v-model="via.riesgoTrombosis"
                            :class="via.riesgoTrombosis != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Riesgo Trombótico Bajo</option>
                                <option>Riesgo Trombótico Medio</option>
                                <option>Riesgo Trombótico Alto</option>
                                <option>Riesgo Trombótico Muy Alto</option>
                            </select>
                        </div>

                        <div class="col-md-3">
                            <label for="inputState" class="form-label">Clasificación ASA</label>
                            <select id="inputState" class="form-select" v-model="via.clasificacionASA"
                            :class="via.clasificacionASA != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Clase I</option>
                                <option>Clase II</option>
                                <option>Clase III</option>
                                <option>Clase IV</option>
                                <option>Clase V</option>
                                <option>Clase VI</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="inputState" class="form-label">Tipo de Cirugía</label>
                            <select id="inputState" class="form-select" v-model="via.tipoCirugia"
                            :class="via.tipoCirugia != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Electiva</option>
                                <option>Urgencia</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Riesgo Anéstesico Quirúrgico</label>
                            <select id="inputState" class="form-select" v-model="via.riesgoAnestesico"
                            :class="via.riesgoAnestesico != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Riesgo Alto</option>
                                <option>Riesgo Medio</option>
                                <option>Riesgo Bajo</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
            <div class="tab-pane fade" id="estudios">
                <div class="col-12 bordePrincipal largoContenedor">
                    <form class="row g-3">
                        <h5 class="fw-bold fw-bold">ESTUDIOS</h5>           

                        <div class="col-md-8">
                            <label for="inputState" class="form-label">Estudio</label>
                            <select id="inputState" class="form-select" v-model="estudios.estudio"
                            :class="estudios.estudio != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
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
                        
                        <div class="col-md-1">
                            <button class="form-control margenBoton">+</button>
                        </div>
                        
                        <div class="col-md-12">
                            <label for="" class="form-label">Específicar</label>
                            <textarea class="form-control" id="" rows="3" v-model="estudios.espEstudio"
                            :class="estudios.espEstudio != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
                        </div>
                    </form>
                </div>            
            </div>
            <div class="tab-pane fade" id="examenes">
                <div class="col-12 bordePrincipal">
                    <form class="row g-3">
                        <h5 class="fw-bold">EXÁMENES</h5>
                        <h5 class="fw-bold">Perfil Bioquímico</h5>

                        <div class="col-md-6">
                            <label for="" class="form-label">Fecha de realización</label>
                            <input type="date" class="form-control" id="" v-model="examenes.fechaRealizacion"
                            :class="examenes.fechaRealizacion != Date ? 'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <div class="col-md-6">
                            <label for="inputState" class="form-label">Grupo sanguíneo</label>
                            <select id="inputState" class="form-select" v-model="examenes.grupoSanguineo"
                            :class="examenes.grupoSanguineo != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
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

                        <div class="col-md-3">
                            <label for="" class="form-label">Hemoglobina</label>
                            <input type="text" class="form-control" id="" v-model="examenes.hemoglobina"
                            :class="examenes.hemoglobina != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label">Hematocrito</label>
                            <input type="text" class="form-control" id="" v-model="examenes.hematocrito"
                            :class="examenes.hemoglobina != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label">Plaquetas</label>
                            <input type="text" class="form-control" id="" v-model="examenes.plaquetas"
                            :class="examenes.plaquetas != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label">Leutocitos</label>
                            <input type="text" class="form-control" id="" v-model="examenes.leutocitos"
                            :class="examenes.leutocitos != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <div class="col-md-3">
                            <label for="" class="form-label">TP</label>
                            <input type="text" class="form-control" id="" v-model="examenes.TP"
                            :class="examenes.TP != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label">TT</label>
                            <input type="text" class="form-control" id="" v-model="examenes.TT"
                            :class="examenes.TT != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label">TPT</label>
                            <input type="text" class="form-control" id="" v-model="examenes.TPT"
                            :class="examenes.TPT != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label">INR</label>
                            <input type="text" class="form-control" id="" v-model="examenes.INR"
                            :class="examenes.INR != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <div class="col-md-3">
                            <label for="" class="form-label">Glucosa</label>
                            <input type="text" class="form-control" id="" v-model="examenes.glucosa"
                            :class="examenes.glucosa != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label">Creatinina</label>
                            <input type="text" class="form-control" id="" v-model="examenes.creatinina"
                            :class="examenes.creatinina != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label">Urea</label>
                            <input type="text" class="form-control" id="" v-model="examenes.urea"
                            :class="examenes.urea != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label">Sodio</label>
                            <input type="text" class="form-control" id="" v-model="examenes.sodio"
                            :class="examenes.sodio != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <div class="col-md-3">
                            <label for="" class="form-label">Potasio</label>
                            <input type="text" class="form-control" id="" v-model="examenes.potasio"
                            :class="examenes.potasio != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label">Cloro</label>
                            <input type="text" class="form-control" id="" v-model="examenes.cloro"
                            :class="examenes.cloro != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label">Calcio</label>
                            <input type="text" class="form-control" id="" v-model="examenes.calcio"
                            :class="examenes.calcio != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label">Magnesio</label>
                            <input type="text" class="form-control" id="" v-model="examenes.magnesio"
                            :class="examenes.magnesio != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <div class="col-md-3">
                            <label for="" class="form-label">Bilirrubina directa</label>
                            <input type="text" class="form-control" id="" v-model="examenes.bilirrubinaDirecta"
                            :class="examenes.bilirrubinaDirecta != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label">Bilirrubina indirecta</label>
                            <input type="text" class="form-control" id="" v-model="examenes.bilirrubinaIndirecta"
                            :class="examenes.bilirrubinaIndirecta != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label">Bilirrubina Total</label>
                            <input type="text" class="form-control" id="" v-model="examenes.bilirrubinaTotal"
                            :class="examenes.bilirrubinaTotal != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label">Lipasa</label>
                            <input type="text" class="form-control" id="" v-model="examenes.lipasa"
                            :class="examenes.lipasa != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>    
                        
                        <div class="col-md-3">
                            <label for="" class="form-label">Amilasa</label>
                            <input type="text" class="form-control" id="" v-model="examenes.amilasa"
                            :class="examenes.amilasa != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div> 
                        <div class="col-md-9">
                            <label for="" class="form-label">Otros</label>
                            <input type="text" class="form-control" id="" v-model="examenes.otros"
                            :class="examenes.otros != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
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
            antecedentes: {
                alergias: "",
                espAlergias: "",
                quirurgicos: "",
                espQuirurgicos: "",
                endocrinologicos: "",
                espEndocrinologicos: "",
                urologicos: "",
                espUrologicos: "",
                traumaticos: "",
                espTraumaticos: "",
                ortopedicos: "",
                espOrtopedicos: "",
                transfusiones: "",
                espTransfusiones: "",
                complAnestesicas: "",
                espComplAnestesicas: "",
                medicacion: "",
                espMedicacion: "",
                horasAyuno: "",
                tabaquismo: "",
                espTabaquismo: "",
                etilismo: "",
                espEtilismo: "",
                adicciones: "",
                espAdicciones: "",
                inmunizaciones: "",
                espInmunizaciones: "",
                antecedentes: ""
            },
            exploracion: {
                edad: 0,
                temperatura: "",
                frecuenciaCardiaca: "",
                frecueciaRespiratoria: "",
                peso: 0,
                talla: 0,
                imc: 0,
                tensionArterial: "",
                saturacionOxigeno: ""
            },
            via: {
                mallampati: "Seleccione...",
                patilAldreti: "Seleccione...",
                aperturaBucal: "Seleccione...",
                distancia: "Seleccione...",
                protusion: "Seleccione...",
                ipid: "Seleccione...",
                glasgow: "Seleccione...",
                nyha: "Seleccione...",
                goldman: "Seleccione...",
                riesgoTrombosis: "Seleccione...",
                clasificacionASA: "Seleccione...",
                tipoCirugia: "Seleccione...",
                riesgoAnestesico: "Seleccione..."
            },
            estudios: {
                estudio: "Seleccione...",
                espEstudio: ""
            },
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
            }
        }  
    },
    methods: {
        calcularIMC() {
            this.exploracion.imc = (this.exploracion.peso / (this.exploracion.talla * this.exploracion.talla))
            this.exploracion.imc = Number(this.exploracion.imc.toFixed(2));
        }                
    }
})
</script>

<style scoped>
.bordePrincipal {
  border-radius: 13px;
  box-shadow: 3px 3px 7px #ccc;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 10px;
}
.margenTexto{
    margin-bottom: 30px;
}
.margenRadio{
    margin-right: 10px;
}
.margenBoton{
    margin-top: 32px;
}
.largoContenedor{
    height: 535px
}
.formSombra:focus{
    border-color:green;
    outline:0;
    -webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(0,128,0);
    box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(0,128,0)
}
</style>