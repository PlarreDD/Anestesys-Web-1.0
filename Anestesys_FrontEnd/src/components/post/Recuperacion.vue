<template>
    <div>
        <ul class="nav nav-pills mb-3 text-center" id="">
            <li class="nav-item col-md-4" >
                <button class="nav-link active" id="recuperacion" data-bs-toggle="pill" data-bs-target="#notaEvaluacion" type="button" aria-selected="true">NOTA DE EVALUACIÓN DE UCPA</button>
            </li>
            <li class="nav-item col-md-4" >
                <button class="nav-link" id="recuperacion" data-bs-toggle="pill" data-bs-target="#aldrete" type="button" aria-selected="false">ALDRETE DE RECUPERACIÓN</button>
            </li>
            <li class="nav-item col-md-4" >
                <button class="nav-link" id="recuperacion" data-bs-toggle="pill" data-bs-target="#alta" type="button" aria-selected="false">ALTA DE RECUPERACIÓN</button>
            </li>
        </ul>

        <div class="tab-content col-md-12" id="">
            <div class="tab-pane fade show active" id="notaEvaluacion">
                <div class="col-12 divBorder">
                    <form class="row g-3">
                        <div class="col-md-12">
                            <label for="" class="form-label">Observaciones</label>
                            <textarea class="form-control" id="" rows="20"></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <div class="tab-pane fade" id="aldrete">
                <div class="col-12 divBorder">
                    <form class="row g-3">
                        <table class="table">
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
                            <tr>
                                <td class="col-2">Frecuencia Cardiaca</td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                            </tr>
                            <tr>
                                <td class="col-2">Frecuencia Respiratoria</td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                            </tr>
                            <tr>
                                <td class="col-2">Tensión Arterial</td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                            </tr>
                            <tr>
                                <td class="col-2">Saturación de O2</td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                                <td><input type="text" class="form-control" id=""></td>
                            </tr>
                            <tr>
                                <td class="col-2">Aldrete</td>
                                <th>                               
                                    <select id="inputState" class="form-select">
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
                                    <select id="inputState" class="form-select">
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
                                    <select id="inputState" class="form-select">
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
                                    <select id="inputState" class="form-select">
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
                                    <select id="inputState" class="form-select">
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
                                    <select id="inputState" class="form-select">
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
                                    <select id="inputState" class="form-select">
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
                            <tr>
                                <td class="col-2">Bromage</td>
                                <th>                               
                                    <select id="inputState" class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>I</option>
                                        <option>II</option>
                                        <option>III</option>
                                        <option>IV</option>
                                    </select>                                
                                </th>
                                <th>
                                    <select id="inputState" class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>I</option>
                                        <option>II</option>
                                        <option>III</option>
                                        <option>IV</option>
                                    </select>         
                                </th>
                                <th>
                                    <select id="inputState" class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>I</option>
                                        <option>II</option>
                                        <option>III</option>
                                        <option>IV</option>
                                    </select>         
                                </th>
                                <th>
                                    <select id="inputState" class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>I</option>
                                        <option>II</option>
                                        <option>III</option>
                                        <option>IV</option>
                                    </select>         
                                </th>
                                <th>
                                    <select id="inputState" class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>I</option>
                                        <option>II</option>
                                        <option>III</option>
                                        <option>IV</option>
                                    </select>         
                                </th>
                                <th>
                                    <select id="inputState" class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>I</option>
                                        <option>II</option>
                                        <option>III</option>
                                        <option>IV</option>
                                    </select>         
                                </th>
                                <th>
                                    <select id="inputState" class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>I</option>
                                        <option>II</option>
                                        <option>III</option>
                                        <option>IV</option>
                                    </select>         
                                </th>
                            </tr>
                            <tr>
                                <td class="col-2">Nauseas/Vomito</td>
                                <th>                               
                                    <select id="inputState" class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>Sí</option>
                                        <option>No</option>
                                    </select>                                
                                </th>
                                <th>
                                    <select id="inputState" class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>Sí</option>
                                        <option>No</option>
                                    </select>         
                                </th>
                                <th>
                                    <select id="inputState" class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>Sí</option>
                                        <option>No</option>
                                    </select>         
                                </th>
                                <th>
                                    <select id="inputState" class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>Sí</option>
                                        <option>No</option>
                                    </select>         
                                </th>
                                <th>
                                    <select id="inputState" class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>Sí</option>
                                        <option>No</option>
                                    </select>         
                                </th>
                                <th>
                                    <select id="inputState" class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>Sí</option>
                                        <option>No</option>
                                    </select>         
                                </th>
                                <th>
                                    <select id="inputState" class="form-select">
                                        <option selected>Seleccione...</option>
                                        <option>Sí</option>
                                        <option>No</option>
                                    </select>         
                                </th>
                            </tr>
                            <tr>
                                <td class="col-2">Escala de EVA Dolor</td>
                                <th>                               
                                    <select id="inputState" class="form-select">
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
                                    <select id="inputState" class="form-select">
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
                                    <select id="inputState" class="form-select">
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
                                    <select id="inputState" class="form-select">
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
                                    <select id="inputState" class="form-select">
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
                                    <select id="inputState" class="form-select">
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
                                    <select id="inputState" class="form-select">
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
            <div class="tab-pane fade" id="alta">
                
                <div class="col-12 divBorder">
                    <form class="row g-3">
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

                        <div class="col-md-10">
                            <label for="" class="form-label">Calificación de Aldrete</label>
                            <input type="text" class="form-control" id="numExpediente"> 
                        </div>

                        <div class="col-md-10">
                            <label for="" class="form-label">Observaciones</label>
                            <textarea class="form-control" id="" rows="3"></textarea>
                        </div>

                        <div class="col-md-3">
                            <label for="" class="form-label">Fecha de la Alta de Recuperación</label>
                            <input type="date" class="form-control" id="">
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label">Hora de la Alta de Recuperación</label>
                            <input type="time" class="form-control" id="horaCirugia">
                        </div>

                        <div class="col-md-10">
                            <label for="" class="form-label">Nombre del Médico Anestesiólogo</label>
                            <input type="text" class="form-control" id="anestesiologo">
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
</style>