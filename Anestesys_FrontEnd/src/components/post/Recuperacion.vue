<template>
    <div>
        <ul class="nav nav-pills mb-3 text-center centrar-li" id="">
            <li class="nav-item col-md-4" >
                <button class="btn btn-nav-bar fw-bold active"
                        id="recuperacion"
                        data-bs-toggle="pill"
                        data-bs-target="#notaEvaluacion"
                        type="button"
                        aria-selected="true">NOTA DE EVALUACIÓN DE UCPA</button>
            </li>

            <li class="nav-item col-md-4" >
                <button class="btn btn-nav-bar fw-bold"
                        id="recuperacion"
                        data-bs-toggle="pill"
                        data-bs-target="#aldrete"
                        type="button"
                        aria-selected="false">ALDRETE DE RECUPERACIÓN</button>
            </li>

            <li class="nav-item col-md-4" >
                <button class="btn btn-nav-bar fw-bold"
                        id="recuperacion"
                        data-bs-toggle="pill"
                        data-bs-target="#alta"
                        type="button"
                        aria-selected="false">ALTA DE RECUPERACIÓN</button>
            </li>
        </ul>

        <div class="tab-content col-md-12" id="">
            <!-- Nota de Evaluación de UCPA -->
            <div class="tab-pane fade show active">

                <div class="col-12 bordePrincipal">
                    <form @submit.prevent="" class="row g-3">

                        <h5 class="fw-bold">NOTA DE EVALUACIÓN UCPA</h5>

                        <!-- Observaciones -->
                        <div class="col-md-12">                            
                            <textarea class="form-control"
                                      id=""
                                      v-model="infoRec.notaEval_Obs"
                                      rows="20"></textarea>
                        </div>                        

                        <div class="col-md-10"></div>

                        <!-- Botón Guardar/Actualizar -->
                        <div class="col-md-2">                            
                            <template v-if="btnActualizarRecuperacion === false">
                                <button data-bs-toggle="tab" 
                                        type="submit"
                                        class="btn btn-guardar-info fw-bold"
                                        @click="cambiarUpdateRecup"
                                        > GUARDAR </button>
                            </template>
                            <template v-else>
                                <button data-bs-toggle="tab" 
                                        type="submit"
                                        class="btn btn-guardar-info fw-bold"
                                        @click=""
                                        > ACTUALIZAR </button> 
                            </template>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Aldrete de Recuperación -->
            <div class="tab-pane fade" id="aldrete">
                <div class="col-12 bordePrincipal largoContenedor">
                    <form class="row g-3">
                        <table class="table">
                            <!-- Fila 1 -->
                            <tr>
                                <td>Criterio</td>
                                <td>Ingreso</td>
                                <td>15 min</td>
                                <td>30 min</td>
                                <td>45 min</td>
                                <td>60 min</td>
                                <td>90 min</td>
                                <td>120 min</td>
                            </tr>

                            <!-- Frecuencia Cardiaca -->
                            <tr>
                                <td class="col-2">Frecuencia Cardiaca</td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_FrecCardIn"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_FrecCard15"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_FrecCard30"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_FrecCard45"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_FrecCard60"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_FrecCard90"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_FrecCard120"></td>
                            </tr>

                            <!-- Frecuencia Respiratoria -->
                            <tr>
                                <td class="col-2">Frecuencia Respiratoria</td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_FrecRespIn"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_FrecResp15"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_FrecResp30"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_FrecResp45"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_FrecResp60"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_FrecResp90"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_FrecResp120"></td>
                            </tr>

                            <!-- Tensión Arterial -->
                            <tr>
                                <td class="col-2">Tensión Arterial</td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_TensArteIn"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_TensArte15"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_TensArte30"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_TensArte45"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_TensArte60"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_TensArte90"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_TensArte120"></td>
                            </tr>

                            <!-- Saturación de O2 -->
                            <tr>
                                <td class="col-2">Saturación de O2</td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_SatO2In"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_SatO215"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_SatO230"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_SatO245"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_SatO260"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_SatO290"></td>
                                <td><input type="text"
                                           class="form-control"
                                           id=""
                                           v-model="infoRec.aldreteRec_SatO2120"></td>
                            </tr>

                            <!-- Aldrete -->
                            <tr>
                                <td class="col-2">Aldrete</td>
                                <th>                               
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_AldreteIn"
                                            class="form-select">
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
                                    </select>                                
                                </th>

                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_Aldrete15"
                                            class="form-select">
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
                                    </select>         
                                </th>

                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_Aldrete30"
                                            class="form-select">
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
                                    </select>         
                                </th>

                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_Aldrete45"
                                            class="form-select">
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
                                    </select>         
                                </th>

                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_Aldrete60"
                                            class="form-select">
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
                                    </select>         
                                </th>

                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_Aldrete90"
                                            class="form-select">
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
                                    </select>         
                                </th>
                                
                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_Aldrete120"
                                            class="form-select">
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
                                    </select>         
                                </th>
                            </tr>

                            <!-- Bromage -->
                            <tr>
                                <td class="col-2">Bromage</td>
                                <th>                               
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_BromageIn"
                                            class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>I</option>
                                        <option>II</option>
                                        <option>III</option>
                                        <option>IV</option>
                                    </select>                                
                                </th>

                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_Bromage15"
                                            class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>I</option>
                                        <option>II</option>
                                        <option>III</option>
                                        <option>IV</option>
                                    </select>         
                                </th>

                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_Bromage30"
                                            class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>I</option>
                                        <option>II</option>
                                        <option>III</option>
                                        <option>IV</option>
                                    </select>         
                                </th>

                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_Bromage45"
                                            class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>I</option>
                                        <option>II</option>
                                        <option>III</option>
                                        <option>IV</option>
                                    </select>         
                                </th>

                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_Bromage60"
                                            class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>I</option>
                                        <option>II</option>
                                        <option>III</option>
                                        <option>IV</option>
                                    </select>         
                                </th>

                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_Bromage90"
                                            class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>I</option>
                                        <option>II</option>
                                        <option>III</option>
                                        <option>IV</option>
                                    </select>         
                                </th>
                                
                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_Bromage120"
                                            class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>I</option>
                                        <option>II</option>
                                        <option>III</option>
                                        <option>IV</option>
                                    </select>         
                                </th>
                            </tr>

                            <!-- Nauseas/Vomito -->
                            <tr>
                                <td class="col-2">Nauseas/Vomito</td>
                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_NauseasIn"
                                            class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>Sí</option>
                                        <option>No</option>
                                    </select>
                                </th>

                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_Nauseas15"
                                            class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>Sí</option>
                                        <option>No</option>
                                    </select>         
                                </th>

                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_Nauseas30"
                                            class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>Sí</option>
                                        <option>No</option>
                                    </select>         
                                </th>
                                
                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_Nauseas45"
                                            class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>Sí</option>
                                        <option>No</option>
                                    </select>         
                                </th>
                                
                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_Nauseas60"
                                            class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>Sí</option>
                                        <option>No</option>
                                    </select>         
                                </th>
                                
                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_Nauseas90"
                                            class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>Sí</option>
                                        <option>No</option>
                                    </select>         
                                </th>
                                
                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_Nauseas120"
                                            class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>Sí</option>
                                        <option>No</option>
                                    </select>         
                                </th>
                            </tr>

                            <!-- Escala de EVA Dolor -->
                            <tr>
                                <td class="col-2">Escala de EVA Dolor</td>
                                <th>                               
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_escEVADolIn"
                                            class="form-select">
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
                                    </select>                                
                                </th>

                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_escEVADol15"
                                            class="form-select">
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
                                    </select>         
                                </th>

                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_escEVADol30"
                                            class="form-select">
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
                                    </select>         
                                </th>

                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_escEVADol45"
                                            class="form-select">
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
                                    </select>         
                                </th>

                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_escEVADol60"
                                            class="form-select">
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
                                    </select>         
                                </th>

                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_escEVADol90"
                                            class="form-select">
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
                                    </select>         
                                </th>

                                <th>
                                    <select id="inputState"
                                            v-model="infoRec.aldreteRec_escEVADol120"
                                            class="form-select">
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
                                    </select>         
                                </th>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>

            <!-- Alta de Recuperación -->
            <div class="tab-pane fade" id="alta">                
                <div class="col-12 bordePrincipal largoContenedor">
                    <form class="row g-3">
                        <!-- Criterio de Aldrete -->
                        <div class="col-md-3">
                            <label for="" class="form-label">Criterio de Aldrete</label>
                        </div>

                        <div class="col-md-1"></div>

                        <div class="col-md-1">
                            <label for="" class="form-label">0 min</label>                        
                        </div>

                        <div class="col-md-1">
                            <label for="" class="form-label">15 min</label>                        
                        </div>

                        <div class="col-md-1">
                            <label for="" class="form-label">30 min</label>                        
                        </div>

                        <div class="col-md-1">
                            <label for="" class="form-label">45 min</label>                        
                        </div>

                        <div class="col-md-1">
                            <label for="" class="form-label">60 min</label>                        
                        </div>

                        <div class="col-md-1">
                            <label for="" class="form-label">90 min</label>                        
                        </div>

                        <div class="col-md-4"></div>
                        
                        <div class="col-md-1">
                            <label for="" class="form-label">-</label>                        
                        </div>
                        
                        <div class="col-md-1">
                            <label for="" class="form-label">-</label>                        
                        </div>
                        
                        <div class="col-md-1">
                            <label for="" class="form-label">-</label>                        
                        </div>
                        
                        <div class="col-md-1">
                            <label for="" class="form-label">-</label>                        
                        </div>
                        
                        <div class="col-md-1">
                            <label for="" class="form-label">-</label>                        
                        </div>
                        
                        <div class="col-md-1">
                            <label for="" class="form-label">-</label>                        
                        </div>

                        <!-- Calificación de Aldrete -->
                        <div class="col-md-10">
                            <label for="" class="form-label">Calificación de Aldrete</label>
                            <input type="text"
                                   class="form-control"
                                   id="numExpediente"
                                   v-model="infoRec.altaRec_CalifAldrete"> 
                        </div>

                        <!-- Observaciones -->
                        <div class="col-md-10">
                            <label for="" class="form-label">Observaciones</label>
                            <textarea class="form-control"
                                      id=""
                                      v-model="infoRec.altaRec_Obs"
                                      rows="3"></textarea>
                        </div>

                        <!-- Observaciones -->
                        <div class="col-md-3">
                            <label for="" class="form-label">Fecha de la Alta de Recuperación</label>
                            <input type="date"
                                   class="form-control"
                                   id=""
                                   v-model="infoRec.altaRec_FechaAltaRec">
                        </div>

                        <!-- Hora de la Alta de Recuperación -->
                        <div class="col-md-3">
                            <label for="" class="form-label">Hora de la Alta de Recuperación</label>
                            <input type="time"
                                   class="form-control"
                                   id="horaCirugia"
                                   v-model="infoRec.altaRec_HrAltaRec">
                        </div>

                        <!-- Nombre del Médico Anestesiólogo -->
                        <div class="col-md-10">
                            <label for="" class="form-label">Nombre del Médico Anestesiólogo</label>
                            <input type="text"
                                   class="form-control"
                                   id="anestesiologo"
                                   v-model="infoRec.altaRec_NomMedAnest">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import type { regRecuperacion } from "@/interfaces/regPostAnest";
import { defineComponent } from "vue";
import { usePostAnestStore } from "../../stores/postAnest-store";
import { usePreIdStore } from "@/stores/preId-store";

const postAnestStore = usePostAnestStore();
const preIdStore = usePreIdStore();

export default defineComponent({
    data() {
        return{
            infoRec: {} as regRecuperacion,
            postAnestStore,
            preIdStore,

            btnActualizarRecuperacion:false
        }
    },

    methods: {
        cambiarUpdateRecup() {
            this.btnActualizarRecuperacion=true

            // Método Guardar
        }
    }
 })
</script>

<style scoped>
h5{
    color: #002D60;
    margin-bottom: 10px;    
}
.bordePrincipal {
  border-radius: 5px;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 10px;
  background-color: rgba(232, 234, 236, 0.6);
}
.largoContenedor{
    height: 558px
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
</style>