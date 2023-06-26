<template>
  <header>
    <barra-navegacion/>
  </header>

  <div class="margen-div-barra">

    <div class="input-group mb-3">
      <div class="row g-3 col-md-12">
        <div class="col-md-10">
          <div class="row g-3 mb-3">
            <!-- Botón monitoreo -->
            <div class="col-md-4">

              <template v-if="transAnestStore.envDat === true && medStore.status === 'Activo'">
                <button class="borde-btn-msv" @click="finMSV"><img src="images/imgIcon/MonitorActivoDatos.png" class="btn-msv" /></button>
                <span class="fw-bold msv-color-txt">&nbsp;&nbsp;Estado: Recibiendo Datos</span>
              </template>

              <template v-if="transAnestStore.envDat === false && medStore.status === 'Activo'">                
                <button class="borde-btn-msv" style="border: none;" @click="iniMSV" :disabled="btnMSV"><img src="images/imgIcon/MonitorActivo.png" class="btn-msv" /></button>
                <span class="fw-bold msv-color-txt" >&nbsp;&nbsp;Estado: Sin Datos</span>
              </template>  

              <template v-if="medStore.status === 'Inactivo'">
                <button class="borde-btn-msv" style="border: none;"><img src="images/imgIcon/MonitorInactivo.png" class="btn-msv" /></button>
                <span class="fw-bold msv-color-txt">&nbsp;&nbsp;Estado: Desconectado</span>
              </template>              
            </div>

            <div class="col-md-1"></div>

            <!-- Botón medicamento -->
            <div class="col-md-2">
              <button type="button"
                      class="btn btn-menu fw-bold"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-medicamento" @click="vaciarModalMed">+ MEDICAMENTO </button>
            </div>
            <!--Abrir el modal de Medicamentos-->
            <div class="modal" ref="medicamentoModal" id="modal-medicamento" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content color-dropdown">
                  <div class="input-group mb-3">
                    <div class="modal-body">
                      <div class="col-md-12">
                        <div class="row g-3">
                            
                          <h5 class="text-white fw-bold col-md-11">DATOS DEL MEDICAMENTO</h5>
                          <div class="col-md-1">
                            <button type="button" id="medica"
                                    class="btn fw-bold"
                                    data-bs-dismiss="modal"
                                    aria-label="Close">
                              <i class="text-white invisible">
                                <font-awesome-icon icon="fa-solid fa-xmark" size="2xl"/>
                              </i>
                            </button>
                          </div>
                          
                          <div class="col-md-4">

                            <input type="hidden" v-model="menuTrans.idMed">

                            <label for="inputState" class="form-label text-white fw-bold">Tipo</label>
                            <select id="inputState"
                                    class="form-select" v-model="menuTrans.tipoMed" @change="vaciarHoraFinalMedicamento">
                                <option></option>
                                <option>Bolo</option>
                                <option>Infusión</option>
                            </select>
                          </div>
                          <div class="col-md-8">
                            <label for="" class="form-label text-white fw-bold"> Medicamento </label>
                            <el-select v-model="menuTrans.medicamento" filterable class="form-control-select" 
                              @click="listarMedicamentos">
                                <el-option
                                    v-for="medicamento in listaMed"
                                    :value="medicamento">
                                </el-option>
                            </el-select>
                        </div>

                          <div class="col-md-2">
                            <label for="" class="form-label text-white fw-bold"> Dosis </label>
                            <input type="text" class="form-control" v-model="menuTrans.dosisMed">
                          </div>
                          <div class="col-md-2">
                            <label for="inputState" class="form-label text-white fw-bold">Unidad</label>
                            <select id="inputState" class="form-select" v-model="menuTrans.unidadMed">
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
                              <select id="inputState" class="form-select" v-model="menuTrans.viaMed">
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
                            <input type="time" class="form-control" v-model="menuTrans.horaInicioMed" @dblclick="actualizarTQX('INCX')">
                          </div>

                          <div class="col-md-2" :class="menuTrans.tipoMed == 'Bolo' ? 'invisible' : 'visible'">
                            <label for="" class="form-label text-white fw-bold"> Hora Final </label>
                            <input type="time" class="form-control" v-model="menuTrans.horaFinalMed">
                          </div>

                          <div class="col-md-8">
                              <label for="" class="form-label text-white fw-bold"> Observaciones </label>
                              <textarea class="form-control" rows="2" v-model="menuTrans.observacionesMed">
                              </textarea>
                          </div>

                          <div class="col-md-8"></div>

                          <div class="col-md-2">
                            <button data-bs-toggle="tab" 
                                          type="submit"
                                          class="btn btn-guardar-balance fw-bold"
                                          @click="validaEliminarMedicamento(menuTrans.idMed)"> ELIMINAR </button>
                          </div>

                          <!-- Botón Guardar/Agregar -->
                          <div class="col-md-2">                                    
                            <template v-if="btnAddMedicamentos === true">
                              <button data-bs-toggle="tab" 
                                          type="submit"
                                          class="btn btn-guardar-balance fw-bold" 
                                          @click="guardarMedicamentos"> GUARDAR </button>
                            </template>

                            <template v-if="btnUpdateMedicamentos === true">
                              <button data-bs-toggle="tab" 
                                          type="submit"
                                          class="btn btn-guardar-balance fw-bold"
                                          @click="actualizarMedicamentos(menuTrans.tipoMed, menuTrans.medicamento, menuTrans.dosisMed, menuTrans.unidadMed,
                                          menuTrans.viaMed, menuTrans.horaInicioMed, menuTrans.horaFinalMed, menuTrans.observacionesMed)"> GUARDAR </button>
                            </template>  

                            <template v-if="btnActualizaMedicamento === true">
                                <button class="btn btn-guardar-balance fw-bold" 
                                        @click="actualizarMedicamento()"> ACTUALIZAR                                
                                </button>
                            </template>  
                          </div>
                            
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Botón relevo -->
            <div class="col-md-2">
              <button type="button"
                      class="btn btn-menu fw-bold"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-relevo" @click="vaciarModalRel"> RELEVO </button>
            </div>
            <!--Abrir el modal de Relevo-->
            <div class="modal" id="modal-relevo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" >
                <div class="modal-content color-dropdown">
                  <div class="input-group mb-3">
                    <div class="modal-body">
                      <div class="col-md-12">
                        <div class="row g-3">
                            <h5 class="text-white fw-bold col-md-11">DATOS DEL RELEVO</h5>
                            <div class="col-md-1">
                              <button type="button" id="relev"
                                      class="btn fw-bold"
                                      data-bs-dismiss="modal"
                                      aria-label="Close">
                                <i class="text-white invisible">
                                  <font-awesome-icon icon="fa-solid fa-xmark" size="2xl"/>
                                </i>
                              </button>
                            </div>

                            <div class="col-md-2">
                              <input type="hidden" v-model="menuTrans.idRelevo">

                              <label class="form-label text-white fw-bold"> Hora </label>
                              <input type="time" class="form-control" v-model="menuTrans.horaRelevo" @dblclick="actualizarTQX('INREL')">
                            </div>

                            <div class="col-md-7">
                              <input type="hidden" v-model="menuTrans.tipoRel">
                            </div>

                            <div class="col-md-3">
                              <label class="form-label text-white fw-bold"> Matrícula </label>                                
                              <input type="text" class="form-control" v-model="menuTrans.matriculaRel">
                            </div>

                            <div class="col-md-12">
                              <label class="form-label text-white fw-bold"> Anestesiológo </label>                                
                              <input type="text" class="form-control" v-model="menuTrans.anestesiologoRel">
                            </div>

                            <div class="col-md-12">
                              <label for="" class="form-label text-white fw-bold"> Observaciones </label>
                              <textarea class="form-control" rows="2" v-model="menuTrans.observacionesRel">
                              </textarea>
                            </div>

                            <div class="col-md-8"></div>

                            <div class="col-md-2">
                              <button data-bs-toggle="tab" 
                                            type="submit"
                                            class="btn btn-guardar-balance fw-bold"
                                            @click="validaEliminarRelevos(menuTrans.idRelevo)"> ELIMINAR </button>
                            </div>

                            <!-- Botón Guardar/Agregar -->
                            <div class="col-md-2">                                    
                              <template v-if="btnAddRelevos === true">
                                <button data-bs-toggle="tab" 
                                            type="submit"
                                            class="btn btn-guardar-balance fw-bold" 
                                            @click="guardarRelevos"> GUARDAR </button>
                              </template>

                              <template v-if="btnUpdateRelevos === true">
                                <button data-bs-toggle="tab" 
                                            type="submit"
                                            class="btn btn-guardar-balance fw-bold"
                                            @click="actualizarRelevos(menuTrans.horaRelevo, menuTrans.tipoRel, menuTrans.matriculaRel, 
                                                                        menuTrans.anestesiologoRel,menuTrans.observacionesRel)"> GUARDAR </button>
                              </template>  

                              <template v-if="btnActualizaRelevo === true">
                                  <button class="btn btn-guardar-balance fw-bold" 
                                          @click="actualizarRelevo()"> ACTUALIZAR                                
                                  </button>
                              </template>  
                            </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Botón evento crítico -->
            <div class="col-md-2">
              <button type="button"
                      class="btn btn-menu fw-bold"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-evento" @click="vaciarModalEve"> EVENTO CRÍTICO </button>
            </div>
            <!--Abrir el modal de evento critico-->
            <div class="modal" id="modal-evento" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" >
                <div class="modal-content color-dropdown">
                  <div class="input-group mb-3">
                    <div class="modal-body">
                      <div class="col-md-12">
                        <div class="row g-3">
                            <h5 class="text-white fw-bold col-md-11">DATOS DEL EVENTO CRÍTICO</h5>
                            <div class="col-md-1">
                              <button type="button" id="event"
                                      class="btn fw-bold"
                                      data-bs-dismiss="modal"
                                      aria-label="Close">
                                <i class="text-white invisible">
                                  <font-awesome-icon icon="fa-solid fa-xmark" size="2xl"/>
                                </i>
                              </button>
                            </div>

                            <div class="col-md-2">
                              <input type="hidden" v-model="menuTrans.idEvento">

                              <label class="form-label text-white fw-bold"> Hora </label>
                              <input type="time" class="form-control" v-model="menuTrans.horaEvento" @dblclick="actualizarTQX('INEVE')">
                            </div>

                            <div class="col-md-10">
                              <input type="hidden" v-model="menuTrans.tipoEve">
                            </div>

                            <div class="col-md-12">
                              <label for="" class="form-label text-white fw-bold"> Detalles del Evento </label>
                              <textarea class="form-control" rows="6" v-model="menuTrans.detalleEvento">
                              </textarea>
                            </div>

                            <div class="col-md-8"></div>

                            <div class="col-md-2">
                              <button data-bs-toggle="tab" 
                                            type="submit"
                                            class="btn btn-guardar-balance fw-bold"
                                            @click="validaEliminarEventos(menuTrans.idEvento)"> ELIMINAR </button>
                            </div>

                            <!-- Botón Guardar/Agregar -->
                            <div class="col-md-2">                                    
                              <template v-if="btnAddEventos === true">
                                <button data-bs-toggle="tab" 
                                            type="submit"
                                            class="btn btn-guardar-balance fw-bold" 
                                            @click="guardarEventos"> GUARDAR</button>
                              </template>

                              <template v-if="btnUpdateEventos === true">
                                <button data-bs-toggle="tab" 
                                            type="submit"
                                            class="btn btn-guardar-balance fw-bold"
                                            @click="actualizarEventos(menuTrans.horaEvento, menuTrans.tipoEve, menuTrans.detalleEvento)"> GUARDAR</button>
                              </template>  

                              <template v-if="btnActualizaEvento === true">
                                  <button class="btn btn-guardar-balance fw-bold" 
                                          @click="actualizarEvento()"> ACTUALIZAR                                
                                  </button>
                              </template>  
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
                        data-bs-target="#modal-balance">BALANCE HIDRICO</button> <!-- Modificar guardado -->
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
                      :disabled="btnTQX == true ? true : false"
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
                      :disabled="btnTQX == true ? true : false"
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
                      :disabled="btnTQX == true ? true : false"
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
                      :disabled="btnTQX == true ? true : false"
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
     
      <!-- Vista previa medicamentos/eventos-relevos -->
      <div class="" :class="vistaPreviaOff == false ? 'col-md-3 menu-vista-previa mostrar' : 'menu-vista-previa ocultar'">       

        <!-- Vista medicamentos -->
        <div class="" :class="vistaPreviaOff == false ? 'col-md-11 vista-medicamentos' : 'col-md-11 vista-medicamentos'">
          <div class="col-md-12">
            <Multiselect mode="tags"
                @click="listarMedicamentosTrans"
                placeholder="Buscar..."
                v-model="medicSeleccionados"                
                :options="listaMedTrans"
                :searchable="true"
                :createTag="true"
                :max="3"
                :multiple="false"
            />    
          </div>
          <!-- Lista de medicamentos -->
          <div class="deslizar-medicamentos m-1"> 
            <table class="table" id="tabla-med">
              <tbody v-for="( medicamento ) in transAnestStore.medicamentos">
                <tr class="" v-for="datosMed in medicamento.medicamentosCx"
                          @click="cambiarBtnActualizarMedic(datosMed._id)" data-bs-toggle="modal" data-bs-target="#modal-medicamento">
                      <td class="borde-tabla-izq p-1" :class="datosMed.tipoMed == 'Bolo' ? 'estilo-bolo' : 'estilo-infusion'" v-if="tablaMedicamentos.includes(datosMed.medicamento)">
                        <FONT size="2">{{ datosMed.medicamento}}</FONT>
                      </td>
                      <td class="" :class="datosMed.tipoMed == 'Bolo' ? 'estilo-bolo' : 'estilo-infusion'" v-if="tablaMedicamentos.includes(datosMed.medicamento)">
                        <FONT size="2">{{ datosMed.dosisMed}} {{ datosMed.unidadMed }}</FONT>
                      </td>
                      <td class="borde-tabla-der fw-bold" :class="datosMed.tipoMed == 'Bolo' ? 'estilo-bolo' : 'estilo-infusion'" v-if="tablaMedicamentos.includes(datosMed.medicamento)">
                        <FONT size="2">{{ datosMed.horaInicioMed }}</FONT>
                      </td>                                                                               
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Vista eventos/relevos -->
        <div class="" :class="vistaPreviaOff == false ? 'col-md-11 vista-eventos-relevos' : 'col-md-11 vista-eventos-relevos'">  
          <div class="col-md-12">
            <button class="btn btn-evento-relevo btn-sm fw-bold"
                    @click="">RELEVOS Y EVENTOS CRÍTICOS</button>
          </div>   
          <!-- Lista de relevos/eventos -->
          <div class="deslizar-relevos m-1"> 
            <table class="table" id="tabla-med" v-for="(relevo) in transAnestStore.relevos" >
              <tbody v-for="(evento) in transAnestStore.eventos">

                <tr v-for="datosRel in relevo.relevoCx" @click="cambiarBtnActualizarRelevo(datosRel._id)" data-bs-toggle="modal" data-bs-target="#modal-relevo">
                  <td class="borde-tabla-izq p-1 text-center" :class="datosRel.tipoRel === 'RELEVO' ? 'estilo-relevo' : 'estilo-evento'">
                    <FONT size="2">{{ datosRel.tipoRel }}</FONT>
                  </td>
                  <td class="borde-tabla-der fw-bold text-center" :class="datosRel.tipoRel === 'RELEVO' ? 'estilo-relevo' : 'estilo-evento'">
                    <FONT size="2">{{ datosRel.horaRelevo }}</FONT>
                  </td>
                </tr>

                <tr v-for="datosEve in evento.evCriticoCx" @click="cambiarBtnActualizarEvento(datosEve._id)" data-bs-toggle="modal" data-bs-target="#modal-evento">
                  <td class="borde-tabla-izq p-1 text-center" :class="datosEve.tipoEve === 'RELEVO' ? 'estilo-relevo' : 'estilo-evento'">
                    <FONT size="2">{{ datosEve.tipoEve }}</FONT>
                  </td>
                  <td class="borde-tabla-der fw-bold text-center" :class="datosEve.horaEvento === 'RELEVO' ? 'estilo-relevo' : 'estilo-evento'">
                    <FONT size="2">{{ datosEve.horaEvento }}</FONT>
                  </td>
                </tr>

              </tbody>
            </table>

          </div>
        </div>

        <!-- Botón deslizar -->
        <div class="btn-ocultar">
          <template v-if="vistaPreviaOff === false">
              <span class="ocultar-izquierdo" @click="mostrarVistaPrevia">
                <font-awesome-icon :icon="['fas', 'angle-left']" size="xl" />
              </span>
            </template>

            <template v-else>
              <span class="ocultar-derecho" @click="ocultarVistaPrevia">
                <font-awesome-icon :icon="['fas', 'angle-right']" size="xl" />
              </span>
            </template>  
        </div>

      </div>

      <!-- Grid signos vitales -->
      <div class="" :class="vistaPreviaOff == false ? 'col-md-6' : 'col-md-9'">
        <div class="" :class="vistaPreviaOff == false ? 'fade-in vista-grid-monitoreo' : 'vista-grid-monitoreo'">
          <div class="col-md-12 deslizar-grid">          

              <!-- <div class="d-flex flex-nowrap row g-4">
                <template v-for="column in hl7mess">
                  <div class="col">
                    <template v-for="item in column">
                      <div class="m-1" style="background-color: white; border: solid; border-color: #DBDEE2; border-radius: 5px; text-align: center; color:#002D60; width: 140%; height: 3.5%;">
                        {{ item }}
                      </div>
                    </template>
                  </div>
                </template>
              </div> -->

              <div class="d-flex flex-nowrap row g-4">
                <template v-for="column in hl7mess">
                  <div class="col">
                    <div class="m-1 fw-bold" style="background-color: white; border: solid; border-color: #DBDEE2; border-radius: 5px; text-align: center; color:#002D60; width: 140%; height: 1.5%;">
                      {{ traerFechaActual() }}
                    </div>
                    <template v-for="item in column">
                      <div class="m-1" style="background-color: white; border: solid; border-color: #DBDEE2; border-radius: 5px; text-align: center; color:#002D60; width: 140%; height: 1.5%;">
                        {{ item }}
                      </div>
                    </template>
                  </div>
                </template>
              </div>

          </div>
        </div>
      </div>

      <div class="col-2 menuLateralPrincipal"> <!--Menú lateral-->

        <div class="" :class="vistaPreviaOff == false ? 'col-md-2 menu-pre-post' : 'col-md-2 menu-pre-post-off'">
          <RouterLink to="pre">
            <img src="images/pre.svg" class="ajusteImg"/>
          </RouterLink>
        </div>

        <div class="" :class="vistaPreviaOff == false ? 'col-md-2 menu-trans' : 'col-md-2 menu-trans-off'">
          <img src="images/trans.svg" class="ajusteImg"/>
        </div>

        <div class="" :class="vistaPreviaOff == false ? 'col-md-2 menu-pre-post' : 'col-md-2 menu-pre-post-off'">
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
import { defineComponent } from "vue"
import type { regMenuTrans } from "@/interfaces/regTransAnest";
import BarraNavegacion from "../../components/barraNavegacion.vue";
import { useTransAnestStore } from "../../stores/transAnest-store";
import { usePreIdStore } from "@/stores/preId-store";
import swal from "sweetalert2";
import Multiselect from '@vueform/multiselect';
import type { regNotaPost } from "@/interfaces/regPostAnest";
import { usePostAnestStore } from "@/stores/postAnest-store";
import { useMedicamentoStore } from "../../stores/medicamento-store";
import { ElSelect, ElOption } from 'element-plus';

const preIdStore = usePreIdStore();
const transAnestStore = useTransAnestStore();
const postAnestStore = usePostAnestStore();
const medStore = useMedicamentoStore();
var taSeparada: Object;

export default defineComponent({
  
  data() {
    return {
      //Datos interfaces
      menuTrans: {} as regMenuTrans,
      infoNotaPost: {} as regNotaPost,
      
      //Store
      preIdStore,
      transAnestStore,
      postAnestStore,
      medStore,
      
      // Botones ventilador
      btnAddVentilador:true,
      btnUpdateVentilador:false,
      btnActualizaVentilador:false,
      
      //Botones balance/técnica
      btnActualizarBalance:false,
      btnActualizarTecnica:false,   
      
      //Botones medicamento
      btnAddMedicamentos:true,
      btnUpdateMedicamentos:false,
      btnActualizaMedicamento:false,
      
      //Botones relevo
      btnAddRelevos:true,
      btnUpdateRelevos:false,
      btnActualizaRelevo:false, 

      //Botones evento
      btnAddEventos:true,
      btnUpdateEventos:false,
      btnActualizaEvento:false, 

      //Botones tiempos quirurgicos
      btnTQX: false,

      activoAnesIN: false,
      noActivoAnesIN: true,

      activoCxIN: false,
      noActivoCxIN: true,

      activoCxOUT: false,
      noActivoCxOUT: true,

      activoAnesOUT: false,
      noActivoAnesOUT: true,
      
      // Arreglo opciones técnicas
      opcionTecnicas: ['Local','Sedación', 'General balanceada', 'TIVA (Anestesia total intravenosa)', 'Multimodal',
                       'Bloqueo mixto', 'Bloqueo peridural lumbar', 'Bloqueo peridural caudal', 'Bloqueo espinal',
                       'Bloqueo de plexo', 'Bloqueo troncular', 'Bloqueo peridural torácico', 'Bloqueo peridural cervical',
                       'Libre de opioides'],
      // Arreglo de medicamentos menú configuración
      listaMed: [],
      // Arreglo de medicamentos trans
      listaMedTrans: [],    
      // Arreglo multiselect
      medicSeleccionados: [],

      vistaPreviaOff:false,

      //btn Iniciar-Detener Monitor
      btnCambioMonitor:false,

      hl7mess:[],

      intervalId: null,
      saveGrid: null,
      btnMSV: true,
      temporizador: null,
      tempMSV: null,
      grid: [],
      statEnvDat: false,
    }
  },

  components:{
    BarraNavegacion,
    Multiselect,
    ElSelect, ElOption
  },

  mounted: function() { // Llama el método despues de cargar la página
    transAnestStore.getDetieneMonitoreo();
    this.pingMSV(medStore.monitor[0].dirIPMVS);
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
    
    transAnestStore.getMedicamentosList(preIdStore.pacienteID._id);

    this.menuTrans.tipoRel= "RELEVO";
    this.menuTrans.tipoEve= "EVENTO";
    
    this.tempMSV = setInterval(() => {
      this.pingMSV(medStore.monitor[0].dirIPMVS);
    }, 10000);
  },

  methods: {
      // Gestión datos ventilador 
      async guardarDatosV() {
        this.btnAddVentilador=false
        this.btnUpdateVentilador=true
        this.btnActualizaVentilador=false

        this.btnAddMedicamentos=false
        this.btnUpdateMedicamentos=true
        this.btnActualizaMedicamento=false

        this.btnAddRelevos=false
        this.btnUpdateRelevos=true
        this.btnActualizaRelevo=false

        this.btnAddEventos=false
        this.btnUpdateEventos=true
        this.btnActualizaEvento=false

        this.btnActualizarBalance=true

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

                //Volver al botón agregar
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

      //Gestión datos balance
      async cambiarUpdateBalance() {
          this.btnActualizarBalance=true

          this.btnAddVentilador=false
          this.btnUpdateVentilador=true
          this.btnActualizaVentilador=false

          this.btnAddMedicamentos=false
          this.btnUpdateMedicamentos=true
          this.btnActualizaMedicamento=false

          this.btnAddRelevos=false
          this.btnUpdateRelevos=true
          this.btnActualizaRelevo=false

          this.btnAddEventos=false
          this.btnUpdateEventos=true
          this.btnActualizaEvento=false

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

      //Gestión datos técnica anestesica 
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

      // Gestión tiempos quirurgicos
      async actualizarTQX(tiemposQX: string){
        switch (tiemposQX) {
          case "INEVE":
            var hoy = new Date();
            this.menuTrans.horaEvento = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();
          break;

          case "INREL":
            var hoy = new Date();
            this.menuTrans.horaRelevo = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();
          break;

          case "INCX":
            var hoy = new Date();
            this.menuTrans.horaInicioMed = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();
          break;

          case "QXIN":
            this.btnActualizarBalance=true

            this.btnAddVentilador=false
            this.btnUpdateVentilador=true
            this.btnActualizaVentilador=false

            this.btnAddMedicamentos=false
            this.btnUpdateMedicamentos=true
            this.btnActualizaMedicamento=false

            this.btnAddRelevos=false
            this.btnUpdateRelevos=true
            this.btnActualizaRelevo=false

            this.btnAddEventos=false
            this.btnUpdateEventos=true
            this.btnActualizaEvento=false

            this.btnMSV=false

            var hoy = new Date();
            this.menuTrans.ingresoQX = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();
            await transAnestStore.saveTiemposQX(this.menuTrans.ingresoQX, preIdStore.pacienteID._id, tiemposQX);
            this.siguesAhi();
          break;

          case "ANESIN":
            this.btnActualizarBalance=true

            this.btnAddVentilador=false
            this.btnUpdateVentilador=true
            this.btnActualizaVentilador=false

            this.btnAddMedicamentos=false
            this.btnUpdateMedicamentos=true
            this.btnActualizaMedicamento=false

            this.btnAddRelevos=false
            this.btnUpdateRelevos=true
            this.btnActualizaRelevo=false

            this.btnAddEventos=false
            this.btnUpdateEventos=true
            this.btnActualizaEvento=false            

            var hoy = new Date();
            this.menuTrans.inicioAn = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();
            await transAnestStore.saveTiemposQX(this.menuTrans.inicioAn, preIdStore.pacienteID._id, tiemposQX);
          break;

          case "CXIN":
            this.btnActualizarBalance=true

            this.btnAddVentilador=false
            this.btnUpdateVentilador=true
            this.btnActualizaVentilador=false

            this.btnAddMedicamentos=false
            this.btnUpdateMedicamentos=true
            this.btnActualizaMedicamento=false

            this.btnAddRelevos=false
            this.btnUpdateRelevos=true
            this.btnActualizaRelevo=false

            this.btnAddEventos=false
            this.btnUpdateEventos=true
            this.btnActualizaEvento=false
          
            var hoy = new Date();
            this.menuTrans.inicioCx = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();
            await transAnestStore.saveTiemposQX(this.menuTrans.inicioCx, preIdStore.pacienteID._id, tiemposQX);
          break;

          case "CXOUT":
            this.btnActualizarBalance=true

            this.btnAddVentilador=false
            this.btnUpdateVentilador=true
            this.btnActualizaVentilador=false

            this.btnAddMedicamentos=false
            this.btnUpdateMedicamentos=true
            this.btnActualizaMedicamento=false

            this.btnAddRelevos=false
            this.btnUpdateRelevos=true
            this.btnActualizaRelevo=false

            this.btnAddEventos=false
            this.btnUpdateEventos=true
            this.btnActualizaEvento=false

            var hoy = new Date();
            this.menuTrans.finCx = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();
            await transAnestStore.saveTiemposQX(this.menuTrans.finCx, preIdStore.pacienteID._id, tiemposQX);
          break;

          case "ANESOUT":
            this.btnActualizarBalance=true

            this.btnAddVentilador=false
            this.btnUpdateVentilador=true
            this.btnActualizaVentilador=false

            this.btnAddMedicamentos=false
            this.btnUpdateMedicamentos=true
            this.btnActualizaMedicamento=false

            this.btnAddRelevos=false
            this.btnUpdateRelevos=true
            this.btnActualizaRelevo=false

            this.btnAddEventos=false
            this.btnUpdateEventos=true
            this.btnActualizaEvento=false

            var hoy = new Date();
            this.menuTrans.finAn = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();
            await transAnestStore.saveTiemposQX(this.menuTrans.finAn, preIdStore.pacienteID._id, tiemposQX);
          break;

          case "QXOUT":
            this.btnActualizarBalance=true

            this.btnAddVentilador=false
            this.btnUpdateVentilador=true
            this.btnActualizaVentilador=false

            this.btnAddMedicamentos=false
            this.btnUpdateMedicamentos=true
            this.btnActualizaMedicamento=false

            this.btnAddRelevos=false
            this.btnUpdateRelevos=true
            this.btnActualizaRelevo=false

            this.btnAddEventos=false
            this.btnUpdateEventos=true
            this.btnActualizaEvento=false

            this.btnMSV=true
            this.btnTQX=true
            this.finMSV()

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
      },

      //Ocultar vista previa
      mostrarVistaPrevia() {
          this.vistaPreviaOff = true;
      },

      ocultarVistaPrevia() {
          this.vistaPreviaOff = false;
      },

      // Métodos gestión medicamentos
      async vaciarModalMed(){
        if(this.menuTrans.tipoMed != "" && this.menuTrans.tipoMed != undefined){

          this.menuTrans.idMed = "";
          this.menuTrans.tipoMed = "";
          this.menuTrans.medicamento = "";
          this.menuTrans.dosisMed = "";
          this.menuTrans.unidadMed = "";
          this.menuTrans.viaMed = "";
          this.menuTrans.horaInicioMed = "";
          this.menuTrans.horaFinalMed = "";
          this.menuTrans.observacionesMed = "";
          
          this.btnAddMedicamentos=false
          this.btnUpdateMedicamentos=true
          this.btnActualizaMedicamento=false
        }
      },

      cerrarModalMed() {
        var closeButton = document.getElementById('medica');
  
        // Crea un nuevo evento de clic
        var event = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });

        // Despacha el evento de clic en el botón
        closeButton.dispatchEvent(event);
      },

      async listarMedicamentos(){
        var medicamento= medStore.medicamentos;
        this.listaMed = medicamento.map(document => document.nombreMedicamento);
        this.listaMed.sort()
      },

      async listarMedicamentosTrans(){
        var listaMedicamentos = transAnestStore.medicamentos.map(item =>
          item.medicamentosCx.map(med => med.medicamento)).flat();

         this.listaMedTrans = listaMedicamentos.filter((value, index, self) => {
            return self.indexOf(value) === index;
        });

        this.listaMedTrans.sort()
      },

      async vaciarHoraFinalMedicamento(){
        this.menuTrans.horaFinalMed="";
      },

      async guardarMedicamentos() {
        if (this.menuTrans.tipoMed == "" || this.menuTrans.tipoMed == undefined || this.menuTrans.medicamento == "" || this.menuTrans.medicamento == undefined) {
              swal.fire({
              title: "Indique el tipo de administración y medicamento",
              icon: "warning",
              showConfirmButton: false,
              showCloseButton: true,
              toast: true,
              timer: 2500,
              timerProgressBar: true,
              position: "top-end",
              });
        } else {        
          this.btnAddMedicamentos=false
          this.btnUpdateMedicamentos=true
          this.btnActualizaMedicamento=false

          this.btnAddVentilador=false
          this.btnUpdateVentilador=true
          this.btnActualizaVentilador=false

          this.btnAddRelevos=false
          this.btnUpdateRelevos=true
          this.btnActualizaRelevo=false

          this.btnAddEventos=false
          this.btnUpdateEventos=true
          this.btnActualizaEvento=false

          this.btnActualizarBalance=true
          
          await this.transAnestStore.saveDatosMedicamentos(this.menuTrans, preIdStore.pacienteID._id)

          this.menuTrans.tipoMed = "";
          this.menuTrans.medicamento = "";
          this.menuTrans.dosisMed = "";
          this.menuTrans.unidadMed = "";
          this.menuTrans.viaMed = "";
          this.menuTrans.horaInicioMed = "";
          this.menuTrans.horaFinalMed = "";
          this.menuTrans.observacionesMed = "";      
          
          this.cerrarModalMed();

          await transAnestStore.getMedicamentosList(preIdStore.pacienteID._id);
          await this.listarMedicamentosTrans();
        }  
            
      },

      async actualizarMedicamentos(m_tipoMed: string, m_medicamento: string, m_dosisMed: string, m_unidadMed: string,
                                    m_viaMed: string, m_horaInicioMed: string, m_horaFinalMed: string, m_observacionesMed: string) {
          if (this.menuTrans.tipoMed == "" || this.menuTrans.tipoMed == undefined || this.menuTrans.medicamento == "" || this.menuTrans.medicamento == undefined) {
                swal.fire({
                title: "Indique el tipo de administración y medicamento",
                icon: "warning",
                showConfirmButton: false,
                showCloseButton: true,
                toast: true,
                timer: 2500,
                timerProgressBar: true,
                position: "top-end",
                });
          } else {
            await transAnestStore.updateMedicamentos(m_tipoMed, m_medicamento, m_dosisMed, m_unidadMed, m_viaMed, m_horaInicioMed, m_horaFinalMed, m_observacionesMed, preIdStore.pacienteID._id);
            
            this.menuTrans.tipoMed = "";
            this.menuTrans.medicamento = "";
            this.menuTrans.dosisMed = "";
            this.menuTrans.unidadMed = "";
            this.menuTrans.viaMed = "";
            this.menuTrans.horaInicioMed = "";
            this.menuTrans.horaFinalMed = "";
            this.menuTrans.observacionesMed = "";    
            
            this.cerrarModalMed();

            await transAnestStore.getMedicamentosList(preIdStore.pacienteID._id);
            await this.listarMedicamentosTrans()
          }
      },

      async cambiarBtnActualizarMedic(id) {
            this.btnAddMedicamentos=false
            this.btnUpdateMedicamentos=false
            this.btnActualizaMedicamento=true

            await transAnestStore.getMedicamento(id);

            this.menuTrans.idMed = transAnestStore.medicamentos.medicamentosCx[0]._id;
            this.menuTrans.tipoMed = transAnestStore.medicamentos.medicamentosCx[0].tipoMed;
            this.menuTrans.medicamento = transAnestStore.medicamentos.medicamentosCx[0].medicamento;
            this.menuTrans.dosisMed = transAnestStore.medicamentos.medicamentosCx[0].dosisMed;
            this.menuTrans.unidadMed = transAnestStore.medicamentos.medicamentosCx[0].unidadMed;
            this.menuTrans.viaMed = transAnestStore.medicamentos.medicamentosCx[0].viaMed;
            this.menuTrans.horaInicioMed = transAnestStore.medicamentos.medicamentosCx[0].horaInicioMed;
            this.menuTrans.horaFinalMed = transAnestStore.medicamentos.medicamentosCx[0].horaFinalMed;
            this.menuTrans.observacionesMed = transAnestStore.medicamentos.medicamentosCx[0].observacionesMed;

            await transAnestStore.getMedicamentosList(preIdStore.pacienteID._id);
            await this.listarMedicamentosTrans()
      },

      async actualizarMedicamento() {
            if (this.menuTrans.tipoMed == "" || this.menuTrans.medicamento == "") {
                swal.fire({
                title: "Indique el tipo de administración y medicamento",
                icon: "warning",
                showConfirmButton: false,
                showCloseButton: true,
                toast: true,
                timer: 2500,
                timerProgressBar: true,
                position: "top-end",
                });
            } else {
                await transAnestStore.updateMedicamento(this.menuTrans.idMed, this.menuTrans.tipoMed, this.menuTrans.medicamento, this.menuTrans.dosisMed,
                this.menuTrans.unidadMed, this.menuTrans.viaMed, this.menuTrans.horaInicioMed, this.menuTrans.horaFinalMed, this.menuTrans.observacionesMed);

                this.btnAddMedicamentos=false
                this.btnUpdateMedicamentos=true
                this.btnActualizaMedicamento=false

                this.menuTrans.idMed = "";
                this.menuTrans.tipoMed = "";
                this.menuTrans.medicamento = "";
                this.menuTrans.dosisMed = "";
                this.menuTrans.unidadMed = "";
                this.menuTrans.viaMed = "";
                this.menuTrans.horaInicioMed = "";
                this.menuTrans.horaFinalMed = "";
                this.menuTrans.observacionesMed = "";

                this.cerrarModalMed();

                await transAnestStore.getMedicamentosList(preIdStore.pacienteID._id);
                await this.listarMedicamentosTrans()
            }
      },

      async validaEliminarMedicamento(idMedicamento: string) {
            swal
                .fire({
                html: "¿Esta seguro de eliminar los datos del medicamento?",
                icon: "warning",
                showConfirmButton: true,
                showCancelButton: true,
                toast: true,
                })
                .then((result) => {
                if (result.isConfirmed) {
                    this.eliminarMedicamento(idMedicamento);
                }
                });
      },

      async eliminarMedicamento(idMedicamento: string) {
          await transAnestStore.deleteMedicamento(idMedicamento);          

          this.menuTrans.idMed = "";
          this.menuTrans.tipoMed = "";
          this.menuTrans.medicamento = "";
          this.menuTrans.dosisMed = "";
          this.menuTrans.unidadMed = "";
          this.menuTrans.viaMed = "";
          this.menuTrans.horaInicioMed = "";
          this.menuTrans.horaFinalMed = "";
          this.menuTrans.observacionesMed = "";

          this.btnAddMedicamentos=false
          this.btnUpdateMedicamentos=true
          this.btnActualizaMedicamento=false

          this.cerrarModalMed();

          await transAnestStore.getMedicamentosList(preIdStore.pacienteID._id);
          await this.listarMedicamentosTrans()
      },

      //Métodos gestión de relevo
      async vaciarModalRel(){
        if(this.menuTrans.horaRelevo != "" && this.menuTrans.horaRelevo != undefined){

          this.menuTrans.idRelevo = "";
          this.menuTrans.horaRelevo = "";
          this.menuTrans.tipoRel= "RELEVO";
          this.menuTrans.matriculaRel = "";
          this.menuTrans.anestesiologoRel = "";
          this.menuTrans.observacionesRel = "";

          this.btnAddRelevos=false
          this.btnUpdateRelevos=true
          this.btnActualizaRelevo=false
        }
      },

      cerrarModalRel() {
        var closeButton = document.getElementById('relev');
        var event = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        closeButton.dispatchEvent(event);
      },

      async guardarRelevos() {
        if (this.menuTrans.horaRelevo == "" || this.menuTrans.horaRelevo == undefined) {
                swal.fire({
                title: "Ingrese la hora del relevo",
                icon: "warning",
                showConfirmButton: false,
                showCloseButton: true,
                toast: true,
                timer: 2500,
                timerProgressBar: true,
                position: "top-end",
                });
          } else {
            this.btnAddMedicamentos=false
            this.btnUpdateMedicamentos=true
            this.btnActualizaMedicamento=false

            this.btnAddVentilador=false
            this.btnUpdateVentilador=true
            this.btnActualizaVentilador=false

            this.btnAddRelevos=false
            this.btnUpdateRelevos=true
            this.btnActualizaRelevo=false

            this.btnAddEventos=false
            this.btnUpdateEventos=true
            this.btnActualizaEvento=false

            this.btnActualizarBalance=true
            
            await this.transAnestStore.saveDatosRelevos(this.menuTrans, preIdStore.pacienteID._id)

            this.menuTrans.horaRelevo = "";
            this.menuTrans.tipoRel= "RELEVO";
            this.menuTrans.matriculaRel = "";
            this.menuTrans.anestesiologoRel = "";
            this.menuTrans.observacionesRel = "";   
            
            this.cerrarModalRel();
            
            await transAnestStore.getRelevosList(preIdStore.pacienteID._id);
            await transAnestStore.getEventosList(preIdStore.pacienteID._id);
          }
      },

      async actualizarRelevos(r_horaRelevo: string, r_tipoRel: string, r_matriculaRel: string, 
                            r_anestesiologoRel: string, r_observacionesRel: string) {
          if (this.menuTrans.horaRelevo == "" || this.menuTrans.horaRelevo == undefined) {
                swal.fire({
                title: "Ingrese la hora del relevo",
                icon: "warning",
                showConfirmButton: false,
                showCloseButton: true,
                toast: true,
                timer: 2500,
                timerProgressBar: true,
                position: "top-end",
                });
          } else {
            await transAnestStore.updateRelevos(r_tipoRel, r_horaRelevo, r_matriculaRel, r_anestesiologoRel, r_observacionesRel, preIdStore.pacienteID._id);
            
            this.menuTrans.horaRelevo = "";
            this.menuTrans.tipoRel= "RELEVO";
            this.menuTrans.matriculaRel = "";
            this.menuTrans.anestesiologoRel = "";
            this.menuTrans.observacionesRel = ""; 

            this.cerrarModalRel();

            await transAnestStore.getRelevosList(preIdStore.pacienteID._id);
            await transAnestStore.getEventosList(preIdStore.pacienteID._id);

          }
      },

      async cambiarBtnActualizarRelevo(id) {
            this.btnAddRelevos=false
            this.btnUpdateRelevos=false
            this.btnActualizaRelevo=true

            await transAnestStore.getRelevo(id);

            this.menuTrans.idRelevo = transAnestStore.relevos.relevoCx[0]._id;
            this.menuTrans.horaRelevo = transAnestStore.relevos.relevoCx[0].horaRelevo;
            this.menuTrans.tipoRel = transAnestStore.relevos.relevoCx[0].tipoRel;
            this.menuTrans.matriculaRel = transAnestStore.relevos.relevoCx[0].matriculaRel;
            this.menuTrans.anestesiologoRel = transAnestStore.relevos.relevoCx[0].anestesiologoRel;
            this.menuTrans.observacionesRel = transAnestStore.relevos.relevoCx[0].observacionesRel;

            await transAnestStore.getEventosList(preIdStore.pacienteID._id);
            await transAnestStore.getRelevosList(preIdStore.pacienteID._id);
      },

      async actualizarRelevo() {
            if (this.menuTrans.horaRelevo == "") {
                swal.fire({
                title: "Ingrese la hora del relevo",
                icon: "warning",
                showConfirmButton: false,
                showCloseButton: true,
                toast: true,
                timer: 2500,
                timerProgressBar: true,
                position: "top-end",
                });
            } else {
                await transAnestStore.updateRelevo(this.menuTrans.idRelevo, this.menuTrans.horaRelevo, this.menuTrans.tipoRel, this.menuTrans.matriculaRel,
                                                    this.menuTrans.anestesiologoRel, this.menuTrans.observacionesRel);

                this.btnAddRelevos=false
                this.btnUpdateRelevos=true
                this.btnActualizaRelevo=false

                this.menuTrans.idRelevo = "";
                this.menuTrans.horaRelevo = "";
                this.menuTrans.tipoRel= "RELEVO";
                this.menuTrans.matriculaRel = "";
                this.menuTrans.anestesiologoRel = "";
                this.menuTrans.observacionesRel = ""; 

                this.cerrarModalRel();

                await transAnestStore.getEventosList(preIdStore.pacienteID._id);
                await transAnestStore.getRelevosList(preIdStore.pacienteID._id);
            }
      },

      async validaEliminarRelevos(idRelevo: string) {
            swal
                .fire({
                html: "¿Esta seguro de eliminar los datos del relevo?",
                icon: "warning",
                showConfirmButton: true,
                showCancelButton: true,
                toast: true,
                })
                .then((result) => {
                if (result.isConfirmed) {
                    this.eliminarRelevo(idRelevo);
                }
                });
      },

      async eliminarRelevo(idRelevo: string) {

          await transAnestStore.deleteRelevo(idRelevo);

          this.menuTrans.idRelevo = "";
          this.menuTrans.horaRelevo = "";
          this.menuTrans.tipoRel= "RELEVO";
          this.menuTrans.matriculaRel = "";
          this.menuTrans.anestesiologoRel = "";
          this.menuTrans.observacionesRel = "";

          this.btnAddRelevos=false
          this.btnUpdateRelevos=true
          this.btnActualizaRelevo=false

          this.cerrarModalRel();

          await transAnestStore.getEventosList(preIdStore.pacienteID._id);
          await transAnestStore.getRelevosList(preIdStore.pacienteID._id);
      },

      //Métodos gestión de evento crítico
      async vaciarModalEve(){
        if(this.menuTrans.horaEvento != "" && this.menuTrans.horaEvento != undefined){

          this.menuTrans.idEvento = "";
          this.menuTrans.horaEvento = "";
          this.menuTrans.tipoEve= "EVENTO";
          this.menuTrans.detalleEvento = "";

          this.btnAddEventos=false
          this.btnUpdateEventos=true
          this.btnActualizaEvento=false
        }
      },

      cerrarModalEve() {
        var closeButton = document.getElementById('event');
        var event = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        closeButton.dispatchEvent(event);
      },

      async guardarEventos() {
        if (this.menuTrans.horaEvento == "" || this.menuTrans.horaEvento == undefined) {
                swal.fire({
                title: "Ingrese la hora del evento crítico",
                icon: "warning",
                showConfirmButton: false,
                showCloseButton: true,
                toast: true,
                timer: 2500,
                timerProgressBar: true,
                position: "top-end",
                });
          } else {
            this.btnAddMedicamentos=false
            this.btnUpdateMedicamentos=true
            this.btnActualizaMedicamento=false

            this.btnAddVentilador=false
            this.btnUpdateVentilador=true
            this.btnActualizaVentilador=false

            this.btnAddRelevos=false
            this.btnUpdateRelevos=true
            this.btnActualizaRelevo=false

            this.btnAddEventos=false
            this.btnUpdateEventos=true
            this.btnActualizaEvento=false

            this.btnActualizarBalance=true
            
            await this.transAnestStore.saveDatosEventos(this.menuTrans, preIdStore.pacienteID._id)

            this.menuTrans.horaEvento = "";
            this.menuTrans.tipoEve= "EVENTO";
            this.menuTrans.detalleEvento = "";   
            
            this.cerrarModalEve();
            
            await transAnestStore.getEventosList(preIdStore.pacienteID._id);
            await transAnestStore.getRelevosList(preIdStore.pacienteID._id);
          }
      },

      async actualizarEventos(r_horaEvento: string, e_tipoEve: string, e_detalleEvento: string) {
          if (this.menuTrans.horaEvento == "" || this.menuTrans.horaEvento == undefined) {
                swal.fire({
                title: "Ingrese la hora del evento crítico",
                icon: "warning",
                showConfirmButton: false,
                showCloseButton: true,
                toast: true,
                timer: 2500,
                timerProgressBar: true,
                position: "top-end",
                });
          } else {
            await transAnestStore.updateEventos(r_horaEvento, e_tipoEve, e_detalleEvento, preIdStore.pacienteID._id);
            
            this.menuTrans.horaEvento = "";
            this.menuTrans.tipoEve= "EVENTO";
            this.menuTrans.detalleEvento = "";
            
            this.cerrarModalEve();

            await transAnestStore.getEventosList(preIdStore.pacienteID._id);
            await transAnestStore.getRelevosList(preIdStore.pacienteID._id);
          }
      },

      async cambiarBtnActualizarEvento(id) {
            this.btnAddEventos=false
            this.btnUpdateEventos=false
            this.btnActualizaEvento=true

            await transAnestStore.getEvento(id);

            this.menuTrans.idEvento = transAnestStore.eventos.evCriticoCx[0]._id;
            this.menuTrans.horaEvento = transAnestStore.eventos.evCriticoCx[0].horaEvento;
            this.menuTrans.tipoEve = transAnestStore.eventos.evCriticoCx[0].tipoEve;
            this.menuTrans.detalleEvento = transAnestStore.eventos.evCriticoCx[0].detalleEvento;

            await transAnestStore.getEventosList(preIdStore.pacienteID._id);
            await transAnestStore.getRelevosList(preIdStore.pacienteID._id);
      },

      async actualizarEvento() {
            if (this.menuTrans.horaEvento == "") {
                swal.fire({
                title: "Ingrese la hora del evento crítico",
                icon: "warning",
                showConfirmButton: false,
                showCloseButton: true,
                toast: true,
                timer: 2500,
                timerProgressBar: true,
                position: "top-end",
                });
            } else {
                await transAnestStore.updateEvento(this.menuTrans.idEvento, this.menuTrans.horaEvento, this.menuTrans.tipoEve, this.menuTrans.detalleEvento);

                this.btnAddEventos=false
                this.btnUpdateEventos=true
                this.btnActualizaEvento=false

                this.menuTrans.idEvento = "";
                this.menuTrans.horaEvento = "";
                this.menuTrans.tipoEve= "EVENTO";
                this.menuTrans.detalleEvento = ""; 

                this.cerrarModalEve();

                await transAnestStore.getEventosList(preIdStore.pacienteID._id);
                await transAnestStore.getRelevosList(preIdStore.pacienteID._id);
            }
      },

      async validaEliminarEventos(idEvento: string) {
            swal
                .fire({
                  html: "¿Esta seguro de eliminar los datos del evento crítico?",
                  icon: "warning",
                  showConfirmButton: true,
                  showCancelButton: true,
                  toast: true,
                  })
                  .then((result) => {
                  if (result.isConfirmed) {
                      this.eliminarEvento(idEvento);
                  }
                });
      },

      async eliminarEvento(idEvento: string) {

          await transAnestStore.deleteEvento(idEvento);

          this.menuTrans.idEvento = "";
          this.menuTrans.horaEvento = "";
          this.menuTrans.tipoEve= "EVENTO";
          this.menuTrans.detalleEvento = "";

          this.btnAddEventos=false
          this.btnUpdateEventos=true
          this.btnActualizaEvento=false

          this.cerrarModalEve();

          await transAnestStore.getEventosList(preIdStore.pacienteID._id);
          await transAnestStore.getRelevosList(preIdStore.pacienteID._id);
      },

      // Eventos de Monitoreo
      async iniMSV(){
        transAnestStore.envDat = true;
        this.btnCambioMonitor = true;
        this.siAquisigo();
        transAnestStore.getIniciaMonitoreo();
        this.iniRecepDatos();
        this.capturaGrid();
      },

      async finMSV(){
        transAnestStore.envDat = false;
        this.btnCambioMonitor = false;
        transAnestStore.getDetieneMonitoreo();
        this.termRecepDatos();
      },

      comMSV(){
        transAnestStore.getDatosMonitor();
        this.vaciarMensajeHL7();
      },

      async vaciarMensajeHL7(){
        var hl7Message = transAnestStore.datosMSV
    
        var lineas = hl7Message.split('\r');
    
        var lineasOBX = lineas.filter(function(linea) {
          return /^OBX/.test(linea);
        });
        
        var valorSegmentos = lineasOBX.map(function(fila) {
          var segmentos = fila.split('|');
          return segmentos[5];
        });
    
        //this.hl7mess = valorSegmentos
        this.hl7mess.push(valorSegmentos);

        console.log("HL7: "+this.hl7mess);        
      },

      iniRecepDatos(){
        this.intervalId = setInterval(() => {
          this.comMSV();
        }, 15000);
      },

      termRecepDatos(){
        transAnestStore.envDat = false;
        console.log(transAnestStore.envDat);
        transAnestStore.datosMSV = null;
        clearInterval(this.intervalId);
      },
      
      siAquisigo(){
        clearTimeout(this.temporizador);
      },

      siguesAhi(){
        this.temporizador = setTimeout(() => {
          console.log("Sigues Ahi?");
          this.siAquisigo();
        }, 1000 * 60 * 30);        
      },
      
      capturaGrid(){
        this.saveGrid = setInterval(() => {
          this.grid.push(this.hl7mess);
          console.log("GRID:" + this.grid);
        }, 1000 * 60);
      },

      pingMSV(dirip: string){
        medStore.statusMSV(dirip);
      },

      traerFechaActual() {
        var hoy = new Date();
        const hour = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();
        return `${hour}`;
      }
  },
  
  computed: {
    tablaMedicamentos() {      
        if (this.medicSeleccionados.length === 0) {
          return this.listaMedTrans;
        } else {
          return this.listaMedTrans.filter(item => this.medicSeleccionados.includes(item));
        }
    },
  },
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
.form-control-select {
    display: block;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.3rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.el-select {
    --el-select-border-color-hover: var(--el-border-color-hover);
    --el-select-disabled-border: var(--el-disabled-border-color);
    --el-select-font-size: var(--el-font-size-base);
    --el-select-close-hover-color: var(--el-text-color-secondary);
    --el-select-input-color: var(--el-text-color-placeholder);
    --el-select-multiple-input-color: var(--el-text-color-regular);
    --el-select-input-focus-border-color: var(--el-disabled-border-color); 
    --el-select-input-font-size: 14px;
}
.el-select-dropdown__item.selected {
    color: #000;
    font-weight: 700;
}
.el-input__inner {
    --el-input-inner-height: calc(var(--el-input-height, 32px) - 2px);
    width: 100%;
    flex-grow: 1;
    color: #000;
    font-size: inherit;
    height: var(--el-input-inner-height);
    line-height: var(--el-input-inner-height);
    padding: 0;
    outline: 0;
    border: none;
    background: 0 0;
    box-sizing: border-box;
}
.menu-vista-previa {
    display: flex;
    flex-direction: column;
    row-gap: 10px;    
}
.vista-medicamentos{
  height: 370px;
  background-color: white;
  padding: 0.5rem;
  border-radius: 10px;
}
.vista-eventos-relevos{
  height: 255px;
  background-color: white;
  padding: 0.5rem;
  border-radius: 10px;
}
.vista-grid-monitoreo{
  height: 635px;
  background-color: #E8EBEF;
  padding: 0.5rem;
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
.menu-trans-off {  
  width: 200px;
  height: auto;
  background-color: #E88300;
  padding: 0rem;
  border-radius: 10px;
  margin-left: 29px;
  text-align: center;
}
.menu-pre-post-off {  
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
.deslizar-grid{
  overflow: scroll;
  overflow-x: scroll;
  height: 620px;
  margin-top: 0px;
}
.deslizar-balance {
  overflow: scroll;
  overflow-x: hidden;
  margin-top: 10px;
}
.deslizar-medicamentos {
  overflow: scroll;
  overflow-x: hidden;
  margin-top: 0px;
  height: 295px;
}
.deslizar-relevos {
  overflow: scroll;
  overflow-x: hidden;
  margin-top: 0px;
  height: 205px;
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
.btn-evento-relevo{
    --bs-btn-bg: #002D60;
    --bs-btn-color: #ffffff;    
    --bs-btn-border-color: #002D60;
    --bs-btn-hover-bg: #002D60;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-border-color: #002D60;          
    --bs-btn-active-bg: #002D60;
    --bs-btn-active-color: #fff;
    --bs-btn-active-border-color: #002D60;
    inline-size: -webkit-fill-available;
}

.btn-monitor{
    --bs-btn-bg: #fff;
    --bs-btn-color: #002D60;    
    --bs-btn-border-color: #fff;
    --bs-btn-hover-bg: #E88300;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-border-color: #E88300;          
    --bs-btn-active-bg: #E88300;
    --bs-btn-active-color: #fff;
    --bs-btn-active-border-color: #E88300;
    inline-size: -webkit-fill-available;
}

.btn-monitor-off{
    --bs-btn-bg: #E88300;
    --bs-btn-color: #fff;    
    --bs-btn-border-color: #E88300;
    --bs-btn-hover-bg: #E88300;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-border-color: #E88300;          
    --bs-btn-active-bg: #fff;
    --bs-btn-active-color: #002D60;
    --bs-btn-active-border-color: #fff;
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
  border-color: #002D60;
  --bs-dropdown-border-width: 0.5px;
}
.btn.disabled, .btn:disabled, fieldset:disabled .btn {
    color: #E8EBEF;
    pointer-events: none;
    background-color: #E8EBEF;
    opacity: 1;
}
.estilo-bolo{
  color: #002D60;
  background-color: #97C7FE;  
  padding: 3px;  
}
.estilo-infusion{
  color: #002D60;
  background-color: #DAEEFC;
  padding: 3px;
}
.estilo-relevo{
  color: white;
  background-color: #B1C8E1;  
  padding: 3px;  
}
.estilo-evento{
  color: white;
  background-color: #1F5092;  
  padding: 3px;  
}
.borde-tabla-izq{
  border-bottom-left-radius: 12px; 
  border-top-left-radius:12px;
}
.borde-tabla-der{
  border-bottom-right-radius: 12px; 
  border-top-right-radius:12px   
}
#tabla-med tbody tr > td {
  border-color: white;
  border-top-width:1px;
  border-bottom-width:1px;
  border-bottom-width:thick
}
.espacio {
  height: 55px;
}
.ocultar-izquierdo{
  align-self: center; 
  position: relative; 
  cursor: pointer;
}
.ocultar-derecho{
  align-self:center; 
  position: relative; 
  cursor: pointer;
}
.btn-ocultar{
  position: absolute; 
  align-self: flex-end;
  z-index: 1; 
  top:50%; 
  color: white; 
  background-color: #002D60; 
  border-radius: 50%; 
  width: 25px; 
  height: auto; 
  text-align: center; 
  /* opacity: 0.5; */
}
.ocultar{
  width: 0;
  overflow: hidden;
  transition: all 0.8s ease-in-out;
}
.mostrar{ 
  transition: all 0.8s ease-in-out;
}
.borde-btn-msv{
  border: none;
}
.btn-msv{
  width: 70px; 
  height: auto; 
  cursor: pointer;
}
.msv-color-txt{
  color:#002D60
}
</style>