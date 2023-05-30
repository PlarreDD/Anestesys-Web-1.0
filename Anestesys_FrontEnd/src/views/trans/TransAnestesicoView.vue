<template>
  <header>
    <barra-navegacion/>
  </header>
  <div class="margen-div-barra">

    <div class="input-group mb-3">
      <div class="row g-3 col-md-12">
        <div class="col-md-10">
          <div class="row g-3 mb-3">
            <div class="col-md-3">
              <button
                type="button"
                class="btn btn-menu fw-bold">
                <img src="images/monitoreo.svg" />
                &nbsp;&nbsp;&nbsp;INICIAR MONITOREO
              </button>
            </div>

            <div class="col-md-2"></div>

            <div class="col-md-2">
              <button type="button"
                      class="btn btn-menu fw-bold"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-medicamento"> MEDICAMENTO </button>
            </div>
            <!--Abrir el modal de Medicamentos-->
            <div class="modal" id="modal-medicamento" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content color-dropdown">
                  <div class="input-group mb-3">
                    <div class="modal-body">
                      <div class="col-md-12">
                        <div class="row g-3">
                            
                          <h5 class="text-white fw-bold">DATOS DEL MEDICAMENTO</h5>

                          <div class="col-md-8">
                            <label for="" class="form-label text-white fw-bold"> Medicamento </label>
                            <input type="text"
                            class="form-control">
                          </div>
                          <div class="col-md-4">
                            <label for="inputState" class="form-label fw-bold">Tipo</label>
                            <select id="inputState"
                                    class="form-select">
                                <option></option>
                                <option>Bolo</option>
                                <option>Infusión</option>
                            </select>
                          </div>

                          <div class="col-md-2">
                            <label for="" class="form-label text-white fw-bold"> Dosis </label>
                            <input type="text"
                            class="form-control">
                          </div>
                          <div class="col-md-2">
                            <label for="inputState" class="form-label text-white fw-bold">Unidad</label>
                            <select id="inputState" class="form-select">
                                <option></option>
                                <option>UI.</option>
                                <option>L. X min.</option>
                                <option>%</option>
                                <option>g.</option>
                                <option>mg.</option>
                                <option>ml.</option>
                                <option>MUI</option>
                                <option>MUI/min.</option>
                                <option>ug/Kg min.</option>
                                <option>mEq.</option>
                                <option>mcg.</option>
                                <option>mcg/kg/hr.</option>
                                <option>mcg/kg/min.</option>
                                <option>mg/kg/hr.</option>
                                <option>mg/kg/min.</option>
                            </select>
                          </div>

                          <div class="col-md-8">
                              <label for="inputState" class="form-label text-white fw-bold">Vía</label>
                              <select id="inputState" class="form-select">
                                  <option></option>
                                  <option>Intravenoso - IV</option>
                                  <option>Intramuscular - IM</option>
                                  <option>Inhalatorio - INH</option>
                                  <option>Subaracnoideo - SA</option>
                                  <option>Peridural - PD</option>
                                  <option>Subcutáneo - SC</option>
                                  <option>Subdérmico - SD</option>
                                  <option>Intraarticular - IA</option>
                                  <option>Sublingual - SL</option>
                                  <option>Intranasal - NASAL</option>
                                  <option>Intraóseo - IO</option>
                                  <option>Bloque de plexo - PLEXO</option>
                                  <option>Transdermico - TD</option>
                              </select>
                          </div>

                          <div class="col-md-2">
                            <label for="" class="form-label text-white fw-bold"> Hora de Inicio </label>
                            <input type="time" class="form-control">
                          </div>
                          <!-- <div class="col-md-8"></div> -->
                          <div class="col-md-2">
                            <label for="" class="form-label text-white fw-bold"> Hora Final </label>
                            <input type="time" class="form-control">
                          </div>

                          <div class="col-md-8">
                              <label for="" class="form-label text-white fw-bold"> Observaciones </label>
                              <textarea class="form-control" rows="2">
                              </textarea>
                          </div>

                          <div class="col-md-8"></div>

                          <div class="col-md-2">
                            <button data-bs-toggle="tab" 
                                          type="submit"
                                          class="btn btn-guardar-balance fw-bold"> ELIMINAR </button>
                          </div>

                          <!-- Botón Guardar/Actualizar --> 
                          <div class="col-md-2">
                              <template v-if="btnActualizarMedicamento === false">
                                  <button data-bs-toggle="tab" 
                                          type="submit"
                                          class="btn btn-guardar-balance fw-bold"> GUARDAR </button>
                              </template>
                              <template v-else>
                                  <button data-bs-toggle="tab" 
                                          type="submit"
                                          class="btn btn-guardar-balance fw-bold"> ACTUALIZAR </button> 
                              </template>                                                         
                          </div>
                            
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-2">
              <button type="button"
                      class="btn btn-menu fw-bold"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-relevo"> RELEVO </button>
            </div>
            <!--Abrir el modal de Relevo-->
            <div class="modal" id="modal-relevo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" >
                <div class="modal-content color-dropdown">
                  <div class="input-group mb-3">
                    <div class="modal-body">
                      <div class="col-md-12">
                        <div class="row g-3">
                            <div class="col-md-12">
                              <h5 class="text-white fw-bold">DATOS DEL RELEVO</h5>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-2">
              <button type="button"
                      class="btn btn-menu fw-bold"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-evento"> EVENTO CRÍTICO </button>
            </div>
            <!--Abrir el modal de evento critico-->
            <div class="modal" id="modal-evento" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" >
                <div class="modal-content color-dropdown">
                  <div class="input-group mb-3">
                    <div class="modal-body">
                      <div class="col-md-12">
                        <div class="row g-3">
                            <div class="col-md-12">
                              <h5 class="text-white fw-bold">DATOS DEL EVENTO CRÍTICO</h5>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-1">
              <button type="button"
                      class="btn btn-menu fw-bold">Imprimir</button>
            </div>
          </div>
        </div>

        <!-- Menú de acciones -->
        <div class="dropdown col-md-2 text-end">
            <a class="btn btn-menu dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              MENÚ DE ACCIONES
            </a>

            <ul class="dropdown-menu">
              <!-- Grid Anestésico -->
              <li class="col-md-3">
                <button type="button"
                        class="btn btn-nav-bar fw-bold"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-grid"> GRID ANESTÉSICO </button>
                
              </li>
              <!-- Técnica Anestésica Final -->
              <li class="col-md-3">
                <button type="button"
                        class="btn btn-nav-bar fw-bold"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-tecnica"> TÉCNICA ANESTÉSICA </button>                
              </li>
              <!-- Balance Hídrico -->
              <li class="col-md-3">
                <button type="button" class="btn btn-nav-bar fw-bold" 
                        data-bs-toggle="modal"
                        data-bs-target="#modal-balance">BALANCE HIDRICO</button>
              </li>
              <!-- Datos del ventilador -->
              <li class="col-md-3">
                <button type="button"
                        class="btn btn-nav-bar fw-bold"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-ventilador">DATOS DEL VENTILADOR</button>
              </li>
            </ul>
        </div>
      </div>

      <!--Abrir el modal Grid Anestésico-->
      <div class="modal" id="modal-grid" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" >
          <div class="modal-content color-dropdown">
            <div class="input-group mb-3">
              <div class="modal-body">
                <div class="col-md-12">
                  <div class="row g-3">
                      <div class="col-md-12">
                        <h5 class="text-white fw-bold">GRID ANESTÉSICO</h5>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Abrir el modal Técnica Anestésica-->
      <div class="modal" id="modal-tecnica" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content color-dropdown">
            <div class="input-group mb-3">
              <div class="modal-body">
                <div class="col-md-12">
                  <div class="row g-3">
                        <h5 class="col-md-12 fw-bold text-white">TÉCNICA ANÉSTESICA</h5>
                        <!-- Técnica de anestesia final -->
                        <div class="col-md-12">
                          <label for="" class="form-label fw-bold text-white">Técnica de anestesia final</label>
                          <Multiselect mode="tags"
                                        v-model="postAnestStore.TecnicaAnestesica"
                                        @click="enviarTecnica"
                                        :class="infoNotaPost.npa_TecAnestFinal != undefined && infoNotaPost.npa_TecAnestFinal != '' ?
                                                                                  'form-control border border-success formSombra' : 'form-control'"
                                        placeholder="Seleccione las técnicas de anestesia"
                                        :options="opcionTecnicas"
                                        :searchable="true"
                                        :createTag="true"/>
                        </div>

                        <div class="col-md-10"></div>

                        <div class="col-md-2 alinear-btn">                    
                          <template v-if="btnActualizarTecnica === false">
                            <button data-bs-toggle="tab" 
                                    type="submit"
                                    class="btn btn-guardar-balance fw-bold"
                                    @click="cambiarUpdateTecnica"
                                    > GUARDAR </button>
                          </template>

                          <template v-else>
                            <button data-bs-toggle="tab" 
                                    type="submit"
                                    class="btn btn-guardar-balance fw-bold"
                                    @click="postAnestStore.updateNotaPA(infoNotaPost, preIdStore.pacienteID._id, postAnestStore.TecnicaAnestesica)"
                                    > ACTUALIZAR </button> 
                          </template>   
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Abrir el modal Balance Hídrico-->
      <div class="modal" id="modal-balance" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content color-dropdown">
            <div class="input-group mb-3">
              <div class="modal-body">
                <div class="col-md-12">
                  <div class="row g-3">
                    <div class="estiloDropDownBalance row g-2 deslizar-balance">
                      <h5 class="col-md-12 fw-bold text-white">BALANCE TOTAL: {{menuTrans.balanceTotal}} ml</h5>
                      <h5 class="col-md-12 fw-bold text-white">Ingresos</h5>

                      <input type="hidden" v-model="menuTrans.balanceTotal">
                      <!-- Solución Hartman -->
                      <div class="col-md-4">
                        <label for="" class="form-label fw-bold text-white">Solución Hartman(ml):</label>
                        <input class="form-control"
                              v-model="menuTrans.solHartman"
                              type="text"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Solución fisiológica -->
                      <div class="col-md-4">
                        <label for="" class="form-label fw-bold text-white">Solución fisiológica(ml):</label>
                        <input class="form-control"
                              v-model="menuTrans.solFisio"
                              type="text"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Glucosados -->
                      <div class="col-md-4">
                        <label for="" class="form-label fw-bold text-white">Glucosados(ml):</label>
                        <input class="form-control"
                              v-model="menuTrans.glucosados"
                              type="text"
                              @keyup.capture="calcularBalance">
                      </div>                  
                      <!-- Gelatinas -->
                      <div class="col-md-4">
                        <label for="" class="form-label fw-bold text-white">Gelatinas(ml):</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.gelatinas"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Almidones -->
                      <div class="col-md-4">
                        <label for="" class="form-label fw-bold text-white">Almidones(ml):</label>
                        <input class="form-control"
                              v-model="menuTrans.almidones"
                              type="text"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Albúminas -->
                      <div class="col-md-4">
                        <label for="" class="form-label fw-bold text-white">Albúminas(ml):</label>
                        <input class="form-control"
                              v-model="menuTrans.albuminas"
                              type="text"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Paquete globular -->
                      <div class="col-md-4">
                        <label for="" class="form-label fw-bold text-white">Paquete globular(ml):</label>
                        <input class="form-control"
                              v-model="menuTrans.paqGlobular"
                              type="text"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Plasmas -->
                      <div class="col-md-4">
                        <label for="" class="form-label fw-bold text-white">Plasmas(ml):</label>
                        <input class="form-control"
                              v-model="menuTrans.plasmas"
                              type="text"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Plaquetas -->
                      <div class="col-md-4">
                        <label for="" class="form-label fw-bold text-white">Plaquetas(ml):</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.plaquetas"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Crioprecipitados -->
                      <div class="col-md-4">
                        <label for="" class="form-label fw-bold text-white">Crioprecipitados(ml):</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.crioprecipitados"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Factor VII -->
                      <div class="col-md-4">
                        <label for="" class="form-label fw-bold text-white">Factor VII(ml):</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.factor_VII"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Factor VIII -->
                      <div class="col-md-4">
                        <label for="" class="form-label fw-bold text-white">Factor VIII(ml):</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.factor_VIII"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Otros Ingresos -->
                      <div class="col-md-4">
                        <label for="" class="form-label fw-bold text-white">Otros:</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.otrosIngresos"
                              @keyup.capture="calcularBalance">
                      </div>

                      <div class="col-md-8"></div>                  

                      <hr />

                      <h5 class="col-md-12 fw-bold text-white text-white">Egresos</h5>

                      <!-- Liquídos de ascitis -->
                      <div class="col-md-4">
                        <label for="" class="form-label fw-bold text-white">Liquídos de ascitis(ml):</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.liqAscitis"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Sangrado aproximado -->
                      <div class="col-md-4">
                        <label for="" class="form-label fw-bold text-white">Sangrado aproximado(ml):</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.sangradoAprox"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Uresis -->
                      <div class="col-md-4">
                        <label for="" class="form-label fw-bold text-white">Uresis(ml):</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.uresis"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Exposición quirúrgica -->
                      <div class="col-md-4">
                        <label for="" class="form-label fw-bold text-white">Exposición quirúrgica:</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.expoQX"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Requerimientos basales -->
                      <div class="col-md-4">
                        <label for="" class="form-label fw-bold text-white">Requerimientos basales:</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.reqBasales"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Ayuno -->
                      <div class="col-md-4">
                        <label for="" class="form-label fw-bold text-white">Ayuno:</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.ayuno"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Otros Egresos -->
                      <div class="col-md-3">
                        <label for="" class="form-label fw-bold text-white">Otros:</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.otrosEgresos"
                              @keyup.capture="calcularBalance">
                      </div>

                      <div class="col-md-9"></div>
                      <div class="col-md-10"></div>

                      <!-- Botón guardar/actualizar -->
                      <div class="col-md-2 alinear-btn">
                        <template v-if="btnActualizarBalance === false">
                          <button data-bs-toggle="tab"
                                  type="submit"
                                  class="btn btn-guardar-balance fw-bold"
                                  @click="cambiarUpdateBalance()"> GUARDAR </button>
                        </template>

                        <template v-else>
                          <button data-bs-toggle="tab" 
                                  type="submit"
                                  class="btn btn-guardar-balance fw-bold"
                                  @click="transAnestStore.updateBalanceH(menuTrans, preIdStore.pacienteID._id)"> ACTUALIZAR </button> 
                        </template>   
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Abrir el modal Datos del Ventilador-->
      <div class="modal" id="modal-ventilador" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content color-dropdown modal-med-largo">
            <div class="input-group mb-3">
              <div class="modal-body">
                <div class="col-md-12">
                  <div class="row g-3">
                    <h5 class="text-white fw-bold">VENTILADOR</h5>
                    <!-- Modos de Ventilación -->
                    <div class="col-md-9">
                      <label for="inputState" class="form-label fw-bold text-white">Modos de ventilación</label>
                      <select id="inputState"
                              v-model="menuTrans.modosVentilacion"
                              class="form-select">
                        <option selected></option>
                        <option>Control volumen</option>
                        <option>Control presión</option>
                        <option>Presión soporte</option>
                        <option>SIMV-VC+PSV</option>
                        <option>SIMV-PC+PSV</option>
                        <option>Ventilación control presión con volumen garantizado</option>
                      </select>

                      <input type="hidden"
                            class="form-control"
                            v-model="menuTrans.idVentilador">
                    </div>
                    <!-- PEEP -->
                    <div class="col-md-3">
                      <label class="form-label fw-bold text-white">PEEP</label>
                      <input type="text"
                            class="form-control" 
                            v-model="menuTrans.peep">
                    </div>
                    <!-- VIT -->
                    <div class="col-md-3">
                      <label class="form-label fw-bold text-white">VT</label>
                      <input type="text"
                            class="form-control"
                            v-model="menuTrans.vt">
                    </div>
                    <!-- Frecuencia Respiratoria -->
                    <div class="col-md-3">
                      <label class="form-label fw-bold text-white">Frec. Resp</label>
                      <input type="text"
                            class="form-control"
                            v-model="menuTrans.frecResp"> 
                    </div>
                    <!-- I:E -->
                    <div class="col-md-3">
                      <label class="form-label fw-bold text-white">I:E</label>
                      <input type="text"
                            class="form-control"
                            v-model="menuTrans.IE"> 
                    </div>
                    <!-- Presión Límite -->
                    <div class="col-md-3">
                      <label class="form-label fw-bold text-white">P. Límite</label>
                      <input type="text"
                            class="form-control"
                            v-model="menuTrans.PLimite"> 
                    </div>

                    <div class="col-md-9"></div>
                    <!-- Botón Guardar/Agregar -->
                    <div class="col-md-3 btn-abajo">                                    
                      <template v-if="btnAddVentilador === true">
                        <button class="btn btn-guardar fw-bold"
                                @click="guardarDatosV">
                          <font-awesome-icon icon="fa-solid fa-square-plus" size="2xl"/>
                        </button>
                      </template>

                      <template v-if="btnUpdateVentilador === true">
                        <button class="btn btn-guardar fw-bold"
                                @click="actualizarDatosVentilador">
                          <font-awesome-icon icon="fa-solid fa-square-plus" size="2xl"/>
                        </button>
                      </template>  

                      <template v-if="btnActualizaVentilador === true">
                        <button class="btn btn-guardar fw-bold"
                                @click="actualizarVentilador">
                          <font-awesome-icon icon="fa-solid fa-square-plus" size="2xl"/>
                        </button>
                      </template>  
                    </div>
                    <!-- Lista Modo de Ventilación -->
                    <div class="">
                      <div class="deslizar">
                        <table class="table table-responsive text-white">
                          <thead>
                            <tr>
                              <th></th>
                              <th>Hora</th>
                              <th>Modo de ventilación</th>
                              <th></th>
                              <th></th>
                            </tr>
                          </thead>

                          <tbody v-for="( ventilador ) in transAnestStore.datosVentilacion">
                            <tr v-for="(datoVentilacion, index) in ventilador.datosVentilador">
                              <td>{{ index + 1 }}</td>
                              <td>{{ datoVentilacion.Hr }}</td>
                              <td>{{ datoVentilacion.modosVentilacion }}</td>
                              <!-- Botón Editar -->
                              <td>
                                <button class="btn" @click="cambiarBtnActualizar(datoVentilacion._id)">
                                  <font-awesome-icon 
                                    icon="fa-solid fa-pen-to-square" 
                                    size="lg"
                                    class="text-white"/>
                                </button>
                              </td>
                              <!-- Botón Eliminar -->
                              <td>
                                <button class="btn" @click="eliminarDatosV(datoVentilacion._id)">
                                  <font-awesome-icon 
                                    icon="fa-solid fa-trash" 
                                    size="lg" class="text-white"/>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tiempos quirurgicos -->
      <div class="col-md-12 row g-3">
        <div class="col-md-9">
          <div class="row g-3">
                
            <div class="col-md-2">
              <button class="btn btn-menu fw-bold"
                      type="button"
                      @dblclick="actualizarTQX('QXIN')" 
                      :disabled="menuTrans.ingresoQX != undefined ? true : false">
                  <label>QX IN <label class="fw-normal">{{menuTrans.ingresoQX}}</label></label>                  
              </button>
            </div>
            
            <div class="col-md-2">
              <button type="button" id="anes-in"
                      class="btn btn-menu fw-bold"
                      :class="{ 'show': activoAnesIN, ' ': noActivoAnesIN }"
                      @dblclick="actualizarTQX('ANESIN')"
                      @click.right="mostrarDropDown('ANESIN')"> 
                      <label>ANES IN <label class="fw-normal">{{menuTrans.inicioAn}}</label></label> 
              </button>

              <form class="dropdown-menu p-2 color-dropdown" :class="{ 'show': activoAnesIN, ' ': noActivoAnesIN }">                                
                <label class="text-white fw-bold">Modificar</label>
                <i class="text-white float-end"><font-awesome-icon icon="fa-solid fa-xmark" size="lg" @click="ocultarDropDown('ANESIN')"/></i>
                <input class="form-control"
                        id="appt-time"
                        type="time"
                        v-model="menuTrans.inicioAn"
                        step="300" @change="actualizaHora('ANESIN')">
              </form>
              
            </div>

            <div class="col-md-2">
              <button type="button" id="cx-in"
                      class="btn btn-menu fw-bold" :class="{ 'show': activoCxIN, ' ': noActivoCxIN }"
                      @dblclick="actualizarTQX('CXIN')"
                      @click.right="mostrarDropDown('CXIN')"> 
                <label>CX IN <label class="fw-normal">{{menuTrans.inicioCx}}</label></label>
              </button>

              <form class="dropdown-menu p-2 color-dropdown" :class="{ 'show': activoCxIN, ' ': noActivoCxIN }">
                <label class="text-white fw-bold">Modificar</label>                
                <i class="text-white float-end"><font-awesome-icon icon="fa-solid fa-xmark" size="lg" @click="ocultarDropDown('CXIN')"/></i>
                <input class="form-control"
                        type="time"
                        v-model="menuTrans.inicioCx" 
                        step="300" @change="actualizaHora('CXIN')">
              </form>
            </div>

            <div class="col-md-2"> 
              <button type="button" id="cx-out"
                      class="btn btn-menu fw-bold" :class="{ 'show': activoCxOUT, ' ': noActivoCxOUT }"
                      @dblclick="actualizarTQX('CXOUT')"
                      @click.right="mostrarDropDown('CXOUT')"> 
                <label>CX OUT <label class="fw-normal">{{menuTrans.finCx}}</label></label>
              </button>

              <form class="dropdown-menu p-2 color-dropdown" :class="{ 'show': activoCxOUT, ' ': noActivoCxOUT }">
                <label class="text-white fw-bold">Modificar</label>                
                <i class="text-white float-end"><font-awesome-icon icon="fa-solid fa-xmark" size="lg" @click="ocultarDropDown('CXOUT')"/></i>
                <input class="form-control"
                        id="appt-time"
                        type="time"
                        v-model="menuTrans.finCx"
                        step="300" @change="actualizaHora('CXOUT')">
              </form>
            </div>

            <div class="col-md-2">    
              <button type="button" id="anes-out"
                      class="btn btn-menu fw-bold" :class="{ 'show': activoAnesOUT, ' ': noActivoAnesOUT }" 
                      @dblclick="actualizarTQX('ANESOUT')"
                      @click.right="mostrarDropDown('ANESOUT')"> 
                <label>ANES OUT <label class="fw-normal">{{menuTrans.finAn}}</label></label>
              </button>
              
              <form class="dropdown-menu p-2 color-dropdown" :class="{ 'show': activoAnesOUT, ' ': noActivoAnesOUT }">
                <label class="text-white fw-bold">Modificar</label>                
                <i class="text-white float-end"><font-awesome-icon icon="fa-solid fa-xmark" size="lg " @click="ocultarDropDown('ANESOUT')"/></i>
                <input class="form-control"
                        id="appt-time"
                        type="time"
                        v-model="menuTrans.finAn"
                        step="300" @change="actualizaHora('ANESOUT')">
              </form>   
            </div>

            <div class="col-md-2">    
              <button type="button"
                      class="btn btn-menu fw-bold" 
                      @dblclick="actualizarTQX('QXOUT')"
                      :disabled="menuTrans.egresoQx != undefined ? true : false"> 
                      <label>QX OUT <label class="fw-normal">{{menuTrans.egresoQx}}</label></label>
              </button>        
            </div>
          </div>
        </div>

        <div class="col-1 fw-bold">
          <select id="inputState" class="form-select">
            <option>1</option>
            <option>2</option>
            <option>5</option>
            <option>10</option>
            <option>15</option>
          </select>
        </div>
      </div>     
    </div>

    <!-- Contenedor Grid -->
    <div class="input-group mb-3 bordePrincipal">
     
      <div class="col-md-3 menu-vista-previa">       

        <!-- Vista medicamentos -->
        <div class= "col-md-11 vista-medicamentos deslizar-balance">
          <div class="col-md-12">
            <input type="text" class="form-control" placeholder="Buscar medicamento">          
          </div>
          <hr/>
          <!-- Lista de medicamentos -->
        </div>
        
        <!-- Vista eventos/relevos -->
        <div class="col-md-11 vista-eventos-relevos"> 
          <input type="text" class="form-control">             
        </div>
      </div>

      <div class="col-md-6 tab-content" id="">
        <div class="row g-3">
          <table class="table table-hover table-bordered">
            <thead>
              <tr>
                <th>00:00</th>
                <th>00:00</th>
                <th>00:00</th>
                <th>00:00</th>
                <th>00:00</th>
                <th>00:00</th>
                <th>00:00</th>
                <th>00:00</th>
                <th>00:00</th>
                <th>00:00</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <div class="col-2 menuLateralPrincipal"> <!--Menú lateral-->

        <div class="col-md-2 menu-pre-post">
          <RouterLink to="pre">
            <img src="images/pre.svg" class="ajusteImg"/>
          </RouterLink>
        </div>

        <div class="col-md-2 menu-trans">
          <img src="images/trans.svg" class="ajusteImg"/>
        </div>

        <div class="col-md-2 menu-pre-post">
          <RouterLink to="post">
            <img src="images/post.svg" class="ajusteImg"/>
          </RouterLink>
        </div>
      </div>
      
      <div class=" text-center posicionEstatica fw-bold">
        <div class="row">
          <div class="col bordeColumna">
            <label class="form-label text-white">              
              {{ preIdStore.NombrePaciente }}
            </label>
          </div>
        
          <div class="col bordeColumna">
            <label class="form-label text-white">              
              {{ preIdStore.NombreCirujano }}
            </label>
          </div>
        
          <div class="col bordeColumna">
            <label class="form-label text-white">              
              {{ preIdStore.NombreCirugia }}
            </label>
          </div>
        </div>
      </div>        
    </div>
  </div>
</template>

<script lang="ts">
import type { regMenuTrans } from "@/interfaces/regTransAnest";
import BarraNavegacion from "../../components/barraNavegacion.vue";
import { useTransAnestStore } from "../../stores/transAnest-store";
import { usePreIdStore } from "@/stores/preId-store";
import swal from "sweetalert2";
import Multiselect from '@vueform/multiselect';
import type { regNotaPost } from "@/interfaces/regPostAnest";
import { usePostAnestStore } from "@/stores/postAnest-store";

const preIdStore = usePreIdStore();
const transAnestStore = useTransAnestStore();
const postAnestStore = usePostAnestStore();
var taSeparada: Object;

export default({
  data() {
    return {
      menuTrans: {} as regMenuTrans,
      
      preIdStore,
      transAnestStore,
      postAnestStore,
      
      btnAddVentilador:true,
      btnUpdateVentilador:false,
      btnActualizaVentilador:false,
      
      btnActualizarBalance:false,
      btnActualizarTecnica:false,      
      
      opcionTecnicas: ['Local','Sedación', 'General balanceada', 'TIVA (Anestesia total intravenosa)', 'Multimodal',
                       'Bloqueo mixto', 'Bloqueo peridural lumbar', 'Bloqueo peridural caudal', 'Bloqueo espinal',
                       'Bloqueo de plexo', 'Bloqueo troncular', 'Bloqueo peridural torácico', 'Bloqueo peridural cervical',
                       'Libre de opioides'],
      
      infoNotaPost: {} as regNotaPost,      
      
      activoAnesIN: false,
      noActivoAnesIN: true,

      activoCxIN: false,
      noActivoCxIN: true,

      activoCxOUT: false,
      noActivoCxOUT: true,

      activoAnesOUT: false,
      noActivoAnesOUT: true,

      btnActualizarMedicamento:false
    }
  },

  components:{
    BarraNavegacion,
    Multiselect
  },

  mounted: function() { // Llama el método despues de cargar la página
      this.mueveReloj();
      transAnestStore.listDatosV(preIdStore.pacienteID._id);
      this.listaTecAnest();
      
      this.menuTrans.balanceTotal = null;
      this.menuTrans.solHartman = null;
      this.menuTrans.glucosados = null;
      this.menuTrans.almidones = null;
      this.menuTrans.paqGlobular = null;
      this.menuTrans.plaquetas = null;
      this.menuTrans.factor_VII = null;
      this.menuTrans.otrosIngresos = null;
      this.menuTrans.solFisio = null;
      this.menuTrans.gelatinas = null;
      this.menuTrans.albuminas = null;
      this.menuTrans.plasmas = null;
      this.menuTrans.crioprecipitados = null;
      this.menuTrans.factor_VII = null;
      this.menuTrans.liqAscitis = null;
      this.menuTrans.sangradoAprox = null;
      this.menuTrans.uresis = null;
      this.menuTrans.expoQX = null;
      this.menuTrans.reqBasales = null;
      this.menuTrans.ayuno = null;
      this.menuTrans.ayuno = null;
      this.menuTrans.otrosEgresos = null;

      var anesin = document.getElementById("anes-in");
      anesin.addEventListener("contextmenu", this.bloquearClicDerecho);
      var cxin = document.getElementById("cx-in");
      cxin.addEventListener("contextmenu", this.bloquearClicDerecho);
      var cxout = document.getElementById("cx-out");
      cxout.addEventListener("contextmenu", this.bloquearClicDerecho);
      var anesout = document.getElementById("anes-out");
      anesout.addEventListener("contextmenu", this.bloquearClicDerecho);
  },

  methods: {
      async mueveReloj() {
        const clock: HTMLSpanElement = document.getElementById('clock');

        setInterval(()=> {
          const date: Date = new Date();
          clock.innerText = date.toLocaleTimeString('es-MX', {
            hour: '2-digit',
            minute: '2-digit',
            // second: '2-digit'
          });
        }, 1000);
      },

      async guardarDatosV() {
        this.btnAddVentilador=false
        this.btnUpdateVentilador=true
        this.btnActualizaVentilador=false

        var hoy = new Date();
        this.menuTrans.Hr = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();
        await transAnestStore.saveDatosV(this.menuTrans, preIdStore.pacienteID._id);

        this.menuTrans.modosVentilacion = "";
        this.menuTrans.Hr = "";
        this.menuTrans.IE = "";
        this.menuTrans.PLimite = "";
        this.menuTrans.frecResp = "";
        this.menuTrans.peep = "";
        this.menuTrans.vt = "";

        await transAnestStore.listDatosV(preIdStore.pacienteID._id);
      },

      async actualizarDatosVentilador() {
        var hoy = new Date();
        this.menuTrans.Hr = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();
        await transAnestStore.updateDatosV(this.menuTrans, preIdStore.pacienteID._id);

        this.menuTrans.modosVentilacion = "";
        this.menuTrans.Hr = "";
        this.menuTrans.IE = "";
        this.menuTrans.PLimite = "";
        this.menuTrans.frecResp = "";
        this.menuTrans.peep = "";
        this.menuTrans.vt = "";

        await transAnestStore.listDatosV(preIdStore.pacienteID._id);
      },

      async cambiarBtnActualizar(id: string) {
          this.btnAddVentilador = false;
          this.btnUpdateVentilador = false;
          this.btnActualizaVentilador = true;

          await transAnestStore.getModoVent(id);

          this.menuTrans.idVentilador = transAnestStore.datosVentilacion.datosVentilador[0]._id;
          this.menuTrans.modosVentilacion = transAnestStore.datosVentilacion.datosVentilador[0].modosVentilacion;
          this.menuTrans.Hr = transAnestStore.datosVentilacion.datosVentilador[0].Hr;
          this.menuTrans.IE = transAnestStore.datosVentilacion.datosVentilador[0].IE;
          this.menuTrans.PLimite = transAnestStore.datosVentilacion.datosVentilador[0].PLimite;
          this.menuTrans.frecResp = transAnestStore.datosVentilacion.datosVentilador[0].frecResp;
          this.menuTrans.peep = transAnestStore.datosVentilacion.datosVentilador[0].peep;
          this.menuTrans.vt = transAnestStore.datosVentilacion.datosVentilador[0].vt;

          await transAnestStore.listDatosV(preIdStore.pacienteID._id);
      },

      async actualizarVentilador() {
            if (this.menuTrans.modosVentilacion == "") {
                swal.fire({
                title: "Seleccione el modo de ventilación",
                icon: "warning",
                showConfirmButton: false,
                showCloseButton: true,
                toast: true,
                timer: 2500,
                timerProgressBar: true,
                position: "top-end",
                });
            } else {
                var hoy = new Date();
                this.menuTrans.Hr = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();
                await transAnestStore.updateVentilador(this.menuTrans.idVentilador, this.menuTrans.modosVentilacion, this.menuTrans.peep,
                                      this.menuTrans.vt, this.menuTrans.frecResp, this.menuTrans.IE, this.menuTrans.PLimite, this.menuTrans.Hr);

                this.btnAddVentilador=false
                this.btnUpdateVentilador=true
                this.btnActualizaVentilador=false

                this.menuTrans.idVentilador = "";
                this.menuTrans.modosVentilacion = "";
                this.menuTrans.Hr = "";
                this.menuTrans.IE = "";
                this.menuTrans.PLimite = "";
                this.menuTrans.frecResp = "";
                this.menuTrans.peep = "";
                this.menuTrans.vt = "";

                await transAnestStore.listDatosV(preIdStore.pacienteID._id);
            }
      },

      async eliminarDatosV(id: string) {
        await transAnestStore.deleteModoVent(id);
        await transAnestStore.listDatosV(preIdStore.pacienteID._id);
      },

      async cambiarUpdateBalance() {
          this.btnActualizarBalance=true

          this.btnAddVentilador=false
          this.btnUpdateVentilador=true
          this.btnActualizaVentilador=false

          //Metódo para guardar
          await transAnestStore.saveDatosV(this.menuTrans, preIdStore.pacienteID._id);
      },

      async calcularBalance(){
        this.menuTrans.balanceTotal = ( Number(this.menuTrans.solHartman) + Number(this.menuTrans.glucosados) + Number(this.menuTrans.almidones) +
                                        Number(this.menuTrans.paqGlobular) + Number(this.menuTrans.plaquetas) + Number(this.menuTrans.factor_VII) +
                                        Number(this.menuTrans.otrosIngresos) + Number(this.menuTrans.solFisio) + Number(this.menuTrans.gelatinas) +
                                        Number(this.menuTrans.albuminas) + Number(this.menuTrans.plasmas) + Number(this.menuTrans.crioprecipitados) +
                                        Number(this.menuTrans.factor_VII) ) - ( Number(this.menuTrans.liqAscitis) + Number(this.menuTrans.sangradoAprox) +
                                        Number(this.menuTrans.uresis)+ Number(this.menuTrans.expoQX) + Number(this.menuTrans.reqBasales) +
                                        Number(this.menuTrans.ayuno) + Number(this.menuTrans.otrosEgresos) );
      },

      async listaTecAnest() {
        await postAnestStore.listNotaPA(preIdStore.pacienteID._id);
        taSeparada = postAnestStore.NotaPA[0].npa_TecAnestFinal.split(",");
      },

      cambiarUpdateTecnica(){
        this.btnActualizarTecnica=true
        this.infoNotaPost.npa_TecAnestFinal = String(postAnestStore.TecnicaAnestesica)

        postAnestStore.saveNotaPA(this.infoNotaPost, preIdStore.pacienteID._id)
      },

      clickTAbtn(){
        if (taSeparada != undefined) {
          postAnestStore.TecnicaAnestesica = taSeparada;          
        }
                
        this.enviarTecnica()
      },

      enviarTecnica() {
        this.infoNotaPost.npa_TecAnestFinal = postAnestStore.TecnicaAnestesica;
      },
      
      async actualizarTQX(tiemposQX: string){
        switch (tiemposQX) {
          case "QXIN":
            var hoy = new Date();
            this.menuTrans.ingresoQX = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();
            await transAnestStore.saveTiemposQX(this.menuTrans.ingresoQX, preIdStore.pacienteID._id, tiemposQX);
          break;

          case "ANESIN":
            var hoy = new Date();
            this.menuTrans.inicioAn = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();
            await transAnestStore.saveTiemposQX(this.menuTrans.inicioAn, preIdStore.pacienteID._id, tiemposQX);
          break;

          case "CXIN":
            var hoy = new Date();
            this.menuTrans.inicioCx = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();
            await transAnestStore.saveTiemposQX(this.menuTrans.inicioCx, preIdStore.pacienteID._id, tiemposQX);
          break;

          case "CXOUT":
            var hoy = new Date();
            this.menuTrans.finCx = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();
            await transAnestStore.saveTiemposQX(this.menuTrans.finCx, preIdStore.pacienteID._id, tiemposQX);
          break;

          case "ANESOUT":
            var hoy = new Date();
            this.menuTrans.finAn = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();
            await transAnestStore.saveTiemposQX(this.menuTrans.finAn, preIdStore.pacienteID._id, tiemposQX);
          break;

          case "QXOUT":
            var hoy = new Date();
            this.menuTrans.egresoQx = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();
            await transAnestStore.saveTiemposQX(this.menuTrans.egresoQx, preIdStore.pacienteID._id, tiemposQX);
          break;
        
          default:
          break;
        }
      },

      async actualizaHora(tiemposQX : string){
        switch (tiemposQX) {
          case "QXIN":
            await transAnestStore.saveTiemposQX(this.menuTrans.ingresoQX, preIdStore.pacienteID._id, tiemposQX);
          break;

          case "ANESIN":
            await transAnestStore.saveTiemposQX(this.menuTrans.inicioAn, preIdStore.pacienteID._id, tiemposQX);
          break;

          case "CXIN":
            await transAnestStore.saveTiemposQX(this.menuTrans.inicioCx, preIdStore.pacienteID._id, tiemposQX);
          break;

          case "CXOUT":
            await transAnestStore.saveTiemposQX(this.menuTrans.finCx, preIdStore.pacienteID._id, tiemposQX);
          break;

          case "ANESOUT":
            await transAnestStore.saveTiemposQX(this.menuTrans.finAn, preIdStore.pacienteID._id, tiemposQX);
          break;

          case "QXOUT":
            await transAnestStore.saveTiemposQX(this.menuTrans.egresoQx, preIdStore.pacienteID._id, tiemposQX);
          break;
        
          default:
          break;
        }        
      },

      async mostrarDropDown(tiemposQX : string){        
        switch (tiemposQX) {
          case "ANESIN":
            this.activoAnesIN=true;
            this.noActivoAnesIN=false;
            this.activoCxIN=false;
            this.activoCxOUT=false;
            this.activoAnesOUT=false;
          break;

          case "CXIN":
            this.activoCxIN=true;
            this.noActivoCxIN=false;
            this.activoAnesIN=false;
            this.activoCxOUT=false;
            this.activoAnesOUT=false;
          break;

          case "CXOUT":
            this.activoCxOUT=true;
            this.noActivoCxOUT=false;
            this.activoAnesIN=false;
            this.activoCxIN=false;
            this.activoAnesOUT=false;
          break;

          case "ANESOUT":
            this.activoAnesOUT=true;
            this.noActivoAnesOUT=false;
            this.activoAnesIN=false;
            this.activoCxIN=false;
            this.activoCxOUT=false;
          break;
        
          default:
          break;
        }
      },

      async ocultarDropDown(tiemposQX : string){                                        
        switch (tiemposQX) {
          case "ANESIN":
            this.activoAnesIN= false
            this.noActivoAnesIN= true
          break;

          case "CXIN":
            this.activoCxIN= false
            this.noActivoCxIN= true
          break;

          case "CXOUT":
            this.activoCxOUT= false
            this.noActivoCxOUT= true
          break;

          case "ANESOUT":
            this.activoAnesOUT= false
            this.noActivoAnesOUT= true
          break;
        
          default:
          break;
        }
      },

      bloquearClicDerecho(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del evento
      }
  }
})
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>
.alinear-btn{
    align-self: self-end;
}
.margen-div-barra{
  margin-top: 110px;
}
.menu-vista-previa {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}
.vista-medicamentos{
  height: 420px;
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
}
.vista-eventos-relevos{
  height: 200px;
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
}
.menuLateralPrincipal {
    margin-top: 21px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}
.menu-trans {  
  width: 200px;
  height: auto;
  background-color: #E88300;
  padding: 0rem;
  border-radius: 10px;
  margin-left: 29px;
  text-align: center;
}
.menu-pre-post {  
  width: 200px;
  height: auto;
  background-color: #d6d6d6;
  padding: 0rem;
  border-radius: 10px;
  margin-left: 29px;
  text-align: center;
}
.menu-pre-post:hover{
  background-color: #E88300;
  transition: background-color 0.2s ease-in-out;
}
.ajusteImg{
  width: 100%;
  height: 100%;
}
.bordePrincipal {
    width: 110%;
}
.posicionEstatica {
  position: -webkit-sticky;
  position: fixed;
  bottom: 0;
  z-index: 1020;
  background-color: #002D60;
  padding: 1rem;
  border-radius: 5px !important;
  color: #ffffff;
  width: 57.5%;
}
.bordeColumna{
  margin-left: auto;
  margin-right: auto;
  border-right: 1px solid #ffffff;
  border-left: 1px solid #ffffff;
}
.estiloDropDownBalance{
  width: auto; height: 400px;
}
.color-dropdown {
  background-color: #002d60;
}
.deslizar {
  overflow: scroll;
  overflow-x: hidden;
  height: 150px;
  margin-top: 0px;
}
.deslizar-balance {
  overflow: scroll;
  overflow-x: hidden;
  margin-top: 10px;
}
.btn-guardar{
    --bs-btn-bg: none;
    --bs-btn-color: #fff;    
    --bs-btn-border-color: #E88300;
    --bs-btn-hover-bg: none;
    --bs-btn-hover-color: #E88300;
    --bs-btn-hover-border-color: #E88300;          
    --bs-btn-active-bg: none;
    --bs-btn-active-color: #E88300;
    --bs-btn-active-border-color: #E88300;
    justify-self: end;
    border: none;   
}
.btn-guardar-balance {
  --bs-btn-bg: #ffffff;
  --bs-btn-color: #002d60;
  --bs-btn-border-color: #ffffff;
  --bs-btn-hover-bg: #E88300;
  --bs-btn-hover-color: #ffffff;
  --bs-btn-hover-border-color: #E88300;
  --bs-btn-active-bg: #E88300;
  --bs-btn-active-color: #ffffff;
  --bs-btn-active-border-color: #E88300;
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
    width: 214px;
    height: auto;
}
.btn-menu{
    --bs-btn-bg: #fff;
    --bs-btn-color: #002D60;    
    --bs-btn-border-color: #fff;
    --bs-btn-hover-bg: #A0A6B2;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-border-color: #A0A6B2;          
    --bs-btn-active-bg: #A0A6B2;
    --bs-btn-active-color: #fff;
    --bs-btn-active-border-color: #A0A6B2;
    inline-size: -webkit-fill-available;
}
.modal-med-largo {
  height: auto;
}
.btn-abajo{
    text-align: end;  
}
hr {
    margin: 1rem 0;
    color: #A0A6B2;
    border: 0;
    border-top: 1px solid;
    opacity: 1;
}
.dropdown-menu{
  --bs-dropdown-min-width: 9.2rem;
  --bs-dropdown-padding-x: 0;
  --bs-dropdown-padding-y: 0;
  border:none
}
.btn.disabled, .btn:disabled, fieldset:disabled .btn {
    color: white;
    pointer-events: none;
    background-color: white;
    opacity: 1;
}
</style>