<template>
    <div>
        <ul class="nav nav-pills mb-3 text-center" id="">
            <li class="nav-item col-md-2" >
                <button class="btn btn-outline-secondary fw-bold active" id="valoracion" data-bs-toggle="pill" data-bs-target="#antecedentes" 
                type="button" aria-selected="true" data-title="Antecedentes patológicos y no patológicos">ANTECEDENTES</button>
            </li>
            <li class="nav-item col-md-3" >
                <button class="btn btn-outline-secondary fw-bold" id="valoracion" data-bs-toggle="pill" data-bs-target="#exploracion" 
                type="button" aria-selected="false" title="Registro de signos vitales">EXPLORACIÓN FÍSICA</button>
            </li>
            <li class="nav-item col-md-2" >
                <button class="btn btn-outline-secondary fw-bold" id="valoracion" data-bs-toggle="pill" data-bs-target="#via" 
                type="button" aria-selected="false" title="Valoración de vía aérea y otras escalas">VÍA AÉREA</button>
            </li>
            <li class="nav-item col-md-2" >
                <button class="btn btn-outline-secondary fw-bold" id="valoracion" data-bs-toggle="pill" data-bs-target="#estudios" 
                type="button" aria-selected="false" title="Estudios realizados previamente">ESTUDIOS</button>
            </li>
            <li class="nav-item col-md-2" >
                <button class="btn btn-outline-secondary fw-bold" id="valoracion" data-bs-toggle="pill" data-bs-target="#examenes" 
                type="button" aria-selected="false" title="Perfil bioquímico">EXÁMENES</button>
            </li>
        </ul>

        <div class="tab-content col-md-12" id="">
            <div class="tab-pane fade show active" id="antecedentes">
                <div class="col-12 bordePrincipal">
                    <form class="row g-3">    
                        <h5 class="fw-bold">ANTECEDENTES</h5>
                        
                        <div class="col row">                 
                            <h5 class="col-md-12 fw-bold">Personales patológicos</h5>

                            <div class="col-md-10">
                                <label for="" class="form-label fw-bold">Alergias</label>
                                <textarea type="text" class="form-control margenTexto" v-model="antecedentes.alergias" id=""
                                :class="antecedentes.alergias != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea> 
                            </div>

                            <div class="col-md-10">
                                <label for="" class="form-label fw-bold">Quirúrgicos</label>
                                <textarea type="text" class="form-control margenTexto" id="" v-model="antecedentes.quirurgicos"
                                :class="antecedentes.quirurgicos != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea> 
                            </div>

                            <div class="col-md-10">
                                <label for="" class="form-label fw-bold">Endocrinológicos</label>
                                <textarea type="text" class="form-control margenTexto" id="" v-model="antecedentes.endocrinologicos"
                                :class="antecedentes.endocrinologicos != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea> 
                            </div>

                            <div class="col-md-10">
                                <label for="" class="form-label fw-bold">Urológicos</label>
                                <textarea type="text" class="form-control margenTexto" id="" v-model="antecedentes.urologicos"
                                :class="antecedentes.urologicos != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea> 
                            </div>

                            <div class="col-md-10">
                                <label for="" class="form-label fw-bold">Traumáticos</label>
                                <textarea type="text" class="form-control margenTexto" id="" v-model="antecedentes.traumaticos"
                                :class="antecedentes.traumaticos != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
                            </div>

                            <div class="col-md-10">
                                <label for="" class="form-label fw-bold">Ortopédicos</label>
                                <textarea type="text" class="form-control margenTexto" id="" v-model="antecedentes.ortopedicos"
                                :class="antecedentes.ortopedicos != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea> 
                            </div>

                            <div class="col-md-10">
                                <label for="" class="form-label fw-bold">Transfusiones previas</label>
                                <textarea type="text" class="form-control margenTexto" id="" v-model="antecedentes.transfusiones"
                                :class="antecedentes.transfusiones != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea> 
                            </div>

                            <div class="col-md-10">
                                <label for="" class="form-label fw-bold">Complicaciones anestésicas previas</label>
                                <textarea type="text" class="form-control margenTexto" id="" v-model="antecedentes.complAnestesicas"
                                :class="antecedentes.complAnestesicas != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea> 
                            </div>
                            
                            <div class="col-md-10">
                                <label for="" class="form-label fw-bold">Medicación actual</label>
                                <textarea type="text" class="form-control" id="" v-model="antecedentes.medicacion"
                                :class="antecedentes.medicacion != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea> 
                            </div>
                        </div>

                        <div class="col row"> 
                            <h5 class="col-12 fw-bold">No patológicos</h5>

                            <div class="col-md-6">
                                <label for="" class="form-label fw-bold">Horas de ayuno</label>
                                <input type="text" class="form-control" id="" v-model="antecedentes.horasAyuno"
                                :class="antecedentes.horasAyuno != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                            </div>
                            <div class="col-md-6"></div>

                            <div class="col-md-10">
                                <label for="" class="form-label fw-bold">Tabaquismo</label>
                                <textarea type="text" class="form-control" id="" v-model="antecedentes.tabaquismo"
                                :class="antecedentes.tabaquismo != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea> 
                            </div>

                            <div class="col-md-10">
                                <label for="" class="form-label fw-bold">Etilismo</label>
                                <textarea type="text" class="form-control" id="" v-model="antecedentes.etilismo"
                                :class="antecedentes.etilismo != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
                            </div>

                            <div class="col-md-10">
                                <label for="" class="form-label fw-bold">Adicciones</label>
                                <textarea type="text" class="form-control" id="" v-model="antecedentes.adicciones"
                                :class="antecedentes.adicciones != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
                            </div>

                            <div class="col-md-10">
                                <label for="" class="form-label fw-bold">Inmunizaciones</label>
                                <textarea type="text" class="form-control" id="" v-model="antecedentes.inmunizaciones"
                                :class="antecedentes.inmunizaciones != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea> 
                            </div>

                            <div class="col-md-12">
                                <label for="" class="form-label fw-bold">Antecedentes de importancia para el procedimiento quirúrgico</label>
                                <textarea class="form-control" id="" rows="3" v-model="antecedentes.antecedentes"
                                :class="antecedentes.antecedentes != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
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
                            <label for="" class="form-label fw-bold">Edad</label>
                            <input type="text" class="form-control" id="" v-model="exploracion.edad"
                            :class="exploracion.edad != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-2">
                            <label for="" class="form-label fw-bold">Temperatura</label>
                            <input type="text" class="form-control" id="" v-model="exploracion.temperatura"
                            :class="exploracion.temperatura.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-2"></div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Frecuencia Cardíaca</label>
                            <input type="text" class="form-control" id="" placeholder="x min" v-model="exploracion.frecuenciaCardiaca"
                            :class="exploracion.frecuenciaCardiaca.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Frecuencia Respiratoria</label>
                            <input type="text" class="form-control" id="" placeholder="x min" v-model="exploracion.frecueciaRespiratoria"
                            :class="exploracion.frecueciaRespiratoria.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <div class="col-md-2">
                            <label for="" class="form-label fw-bold">Peso (k)</label>
                            <input type="text" class="form-control" id="" v-model="exploracion.peso" @keyup.capture="calcularIMC"
                            :class="exploracion.peso != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-2">
                            <label for="" class="form-label fw-bold">Talla (m)</label>
                            <input type="text" class="form-control" id="" v-model="exploracion.talla" @keyup.capture="calcularIMC"
                            :class="exploracion.talla != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-2">
                            <label for="" class="form-label fw-bold">IMC</label>
                            <input type="text" class="form-control" id="" v-model="exploracion.imc" readonly
                            :class="exploracion.imc != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Tensión Arterial</label>
                            <input type="text" class="form-control" id="" placeholder="mmHg" v-model="exploracion.tensionArterial"
                            :class="exploracion.tensionArterial.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Saturación de Oxígeno</label>
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
                            <label for="inputState" class="form-label fw-bold">Mallampati</label>
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
                            <label for="inputState" class="form-label fw-bold">Patil-Aldreti</label>
                            <select id="inputState" class="form-select" v-model="via.patilAldreti"
                            :class="via.patilAldreti != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Más de 6.5 cm</option>
                                <option>De 6 a 6.5 cm</option>
                                <option>Menos de 6 cm</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="inputState" class="form-label fw-bold">Apertura bucal</label>
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
                            <label for="inputState" class="form-label fw-bold">Distancia esternomentoniana</label>
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
                            <label for="inputState" class="form-label fw-bold">Protusión Mandibular</label>
                            <select id="inputState" class="form-select" v-model="via.protusion"
                            :class="via.protusion != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Los incisivos inferiores pueden ser llevados más adelante de la arcada dental superior</option>
                                <option>Los incisivos inferiores se desplazan hasta el nivel de la dentadura superior</option>
                                <option>Los incisivos inferiores no se proyectan hacia adelante y no pueden tocar la arcada dentaria</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="inputState" class="form-label fw-bold">IPID</label>
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
                            <label for="inputState" class="form-label fw-bold">Escala Glasgow</label>
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
                            <label for="inputState" class="form-label fw-bold">Escala NYHA</label>
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
                            <label for="inputState" class="form-label fw-bold">Escala de Goldman</label>
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
                            <label for="inputState" class="form-label fw-bold">Riesgo de Trombosis</label>
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
                            <label for="inputState" class="form-label fw-bold">Clasificación ASA</label>
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
                            <label for="inputState" class="form-label fw-bold">Tipo de Cirugía</label>
                            <select id="inputState" class="form-select" v-model="via.tipoCirugia"
                            :class="via.tipoCirugia != 'Seleccione...' ? 'form-control border border-success formSombra' : 'form-control'">
                                <option selected>Seleccione...</option>
                                <option>Electiva</option>
                                <option>Urgencia</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label fw-bold">Riesgo Anéstesico Quirúrgico</label>
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
                            <label for="inputState" class="form-label fw-bold">Estudio</label>
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
                        
                        <div class="col-md-2">
                            <button class="btn btn-outline-secondary fw-bold margenBoton">Guardar</button>
                        </div>
                        
                        <div class="col-md-12">
                            <label for="" class="form-label fw-bold">Específicar</label>
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
                            <label for="" class="form-label fw-bold">Fecha de realización</label>
                            <input type="date" class="form-control" id="" v-model="examenes.fechaRealizacion"
                            :class="examenes.fechaRealizacion != Date ? 'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <div class="col-md-6">
                            <label for="inputState" class="form-label fw-bold">Grupo sanguíneo</label>
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
                            <label for="" class="form-label fw-bold">Hemoglobina</label>
                            <input type="text" class="form-control" id="" v-model="examenes.hemoglobina"
                            :class="examenes.hemoglobina != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Hematocrito</label>
                            <input type="text" class="form-control" id="" v-model="examenes.hematocrito"
                            :class="examenes.hemoglobina != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Plaquetas</label>
                            <input type="text" class="form-control" id="" v-model="examenes.plaquetas"
                            :class="examenes.plaquetas != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Leutocitos</label>
                            <input type="text" class="form-control" id="" v-model="examenes.leutocitos"
                            :class="examenes.leutocitos != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">TP</label>
                            <input type="text" class="form-control" id="" v-model="examenes.TP"
                            :class="examenes.TP != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">TT</label>
                            <input type="text" class="form-control" id="" v-model="examenes.TT"
                            :class="examenes.TT != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">TPT</label>
                            <input type="text" class="form-control" id="" v-model="examenes.TPT"
                            :class="examenes.TPT != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">INR</label>
                            <input type="text" class="form-control" id="" v-model="examenes.INR"
                            :class="examenes.INR != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Glucosa</label>
                            <input type="text" class="form-control" id="" v-model="examenes.glucosa"
                            :class="examenes.glucosa != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Creatinina</label>
                            <input type="text" class="form-control" id="" v-model="examenes.creatinina"
                            :class="examenes.creatinina != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Urea</label>
                            <input type="text" class="form-control" id="" v-model="examenes.urea"
                            :class="examenes.urea != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Sodio</label>
                            <input type="text" class="form-control" id="" v-model="examenes.sodio"
                            :class="examenes.sodio != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Potasio</label>
                            <input type="text" class="form-control" id="" v-model="examenes.potasio"
                            :class="examenes.potasio != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Cloro</label>
                            <input type="text" class="form-control" id="" v-model="examenes.cloro"
                            :class="examenes.cloro != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Calcio</label>
                            <input type="text" class="form-control" id="" v-model="examenes.calcio"
                            :class="examenes.calcio != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Magnesio</label>
                            <input type="text" class="form-control" id="" v-model="examenes.magnesio"
                            :class="examenes.magnesio != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>

                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Bilirrubina directa</label>
                            <input type="text" class="form-control" id="" v-model="examenes.bilirrubinaDirecta"
                            :class="examenes.bilirrubinaDirecta != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Bilirrubina indirecta</label>
                            <input type="text" class="form-control" id="" v-model="examenes.bilirrubinaIndirecta"
                            :class="examenes.bilirrubinaIndirecta != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Bilirrubina Total</label>
                            <input type="text" class="form-control" id="" v-model="examenes.bilirrubinaTotal"
                            :class="examenes.bilirrubinaTotal != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Lipasa</label>
                            <input type="text" class="form-control" id="" v-model="examenes.lipasa"
                            :class="examenes.lipasa != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div>    
                        
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold">Amilasa</label>
                            <input type="text" class="form-control" id="" v-model="examenes.amilasa"
                            :class="examenes.amilasa != '' ? 'form-control border border-success formSombra' : 'form-control'"> 
                        </div> 
                        <div class="col-md-9">
                            <label for="" class="form-label fw-bold">Otros</label>
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
                quirurgicos: "",
                endocrinologicos: "",
                urologicos: "",
                traumaticos: "",
                ortopedicos: "",
                transfusiones: "",
                complAnestesicas: "",
                medicacion: "",
                horasAyuno: "",
                tabaquismo: "",
                etilismo: "",
                adicciones: "",
                inmunizaciones: "",
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
  border-radius: 5px;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 10px;
  background-color: rgba(232, 234, 236, 0.6);
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
    -webkit-box-shadow:0 0 8px green;
    box-shadow:0 0 8px green
}
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
    bottom: -1.8em;
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
}
</style>