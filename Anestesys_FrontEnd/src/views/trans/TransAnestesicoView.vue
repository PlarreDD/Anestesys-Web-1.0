<template>
  <header @click.stop="replegarMenuVistaRapida">
    <barra-navegacion/>
  </header>

  <div class="margen-div-barra" @click.stop="replegarMenuVistaRapida">

    <!-- Barra superior -->
    <div class="input-group mb-3" @mouseover="vaciarInputsTrans" @touchstart="vaciarInputsTrans">
      <div class="row g-3 col-md-12">
        <div class="col-md-10">
          <div class="row g-3 mb-3">
            <!-- Botón monitoreo -->
            <div class="col-md-4">
              <!-- Monitor Verde -->
              <template v-if="apiMSV === true">
                <button class="borde-btn-msv"
                        @click="finMSV">
                  <img src="../../../public/images/imgIcon/MonitorActivoDatos.png" class="btn-msv"/>
                </button>
                <span class="fw-bold msv-color-txt">&nbsp;&nbsp;Estado: Conectado</span>
              </template>

              <!-- Monitor Rojo -->
              <template v-if="apiMSV === false">
                <!-- :disabled="btnMSV" -->
                <button class="borde-btn-msv"
                        @click="iniMSV"                        
                        style="border: none;">
                  <img src="../../../public/images/imgIcon/MonitorInactivo.png" class="btn-msv"/>
                </button>
                <span class="fw-bold msv-color-txt">&nbsp;&nbsp;Estado: Desconectado</span>
              </template>
            </div>            

            <!-- Botón medicamento -->
            <div class="col-md-2">              
              <button type="button"
                      class="btn btn-menu fw-bold"
                      @click="vaciarModalMed">+ MEDICAMENTO </button>
            </div>
            <!--Abrir el modal de Medicamentos-->
            <div class="modal" ref="medicamentoModal" id="modal-medicamento" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content color-dropdown">
                  <div class="input-group mb-3">
                    <div class="modal-body">
                      <div class="col-md-12">
                        <div class="row g-3">
                            
                          <h5 class="text-white fw-bold col-md-5">Datos del Medicamento</h5>
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
                          <div class="col-md-6">
                            <button type="button" class="btn btn-guardar-balance-parcial fw-bold float-end" 
                              data-bs-toggle="modal" data-bs-target="#modal-sumatoria-medicamentos">
                              Sumatoria de medicamentos
                            </button>
                          </div>
                          
                          <div class="col-md-4">

                            <input type="hidden" v-model="menuTrans.idMed">

                            <label  class="form-label text-white fw-bold">Tipo</label>
                            <select @click="enviarDatosTrans"
                                    class="form-select" v-model="menuTrans.tipoMed" @change="vaciarHoraFinalMedicamento">
                                <option></option>
                                <option>Bolo</option>
                                <option>Infusión</option>
                            </select>
                          </div>
                          <div class="col-md-8">
                            <label  class="form-label text-white fw-bold"> Medicamento </label>
                            <el-select v-model="menuTrans.medicamento" filterable class="form-control-select" 
                              @click="listarMedicamentos">
                                <el-option @click="enviarDatosTrans"
                                    v-for="medicamento in listaMed"
                                    :value="medicamento">
                                </el-option>
                            </el-select>
                        </div>

                          <div class="col-md-2">
                            <label  class="form-label text-white fw-bold"> Dosis </label>
                            <input type="text" class="form-control" v-model="menuTrans.dosisMed" @keyup.capture="enviarDatosTrans">
                          </div>
                          <div class="col-md-2">
                            <label  class="form-label text-white fw-bold">Unidad</label>
                            <select  class="form-select" v-model="menuTrans.unidadMed" @click="enviarDatosTrans">
                                <option></option>
                                <option>UI.</option>
                                <option>L. X min.</option>
                                <option>%</option>
                                <option>g.</option>
                                <option>mg.</option>
                                <option>ml.</option>
                                <option>MUI</option>
                                <option>MUI/min.</option>
                                <option>ng.</option>
                                <option>ng/kg/min.</option>
                                <option>μg.</option>
                                <option>μg/kg.</option>
                                <option>μg/Kg min.</option>
                                <option>mEq.</option>
                                <option>mcg.</option>
                                <option>mcg/kg/hr.</option>
                                <option>mcg/kg/min.</option>
                                <option>mg/kg.</option>
                                <option>mg/kg/hr.</option>
                                <option>mg/kg/min.</option>
                            </select>
                          </div>

                          <div class="col-md-8">
                              <label  class="form-label text-white fw-bold">Vía</label>
                              <select  class="form-select" v-model="menuTrans.viaMed" @click="enviarDatosTrans">
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
                            <label  class="form-label text-white fw-bold"> Hora de Inicio </label>
                            <input type="time" class="form-control" v-model="menuTrans.horaInicioMed" @click="actualizarTQX('INCX')">
                          </div>

                          <div class="col-md-2" :class="menuTrans.tipoMed == 'Bolo' ? 'invisible' : 'visible'">
                            <label  class="form-label text-white fw-bold"> Hora Final </label>
                            <input type="time" class="form-control" v-model="menuTrans.horaFinalMed" @click="calcularHoraFinalMed">
                          </div>

                          <div class="col-md-8">
                              <label  class="form-label text-white fw-bold"> Observaciones </label>
                              <textarea class="form-control" rows="2" v-model="menuTrans.observacionesMed" @keyup.capture="enviarDatosTrans">
                              </textarea>
                          </div>

                          <div class="col-md-8">
                            <button id="abrir-medicamento" type="button" class="invisible" data-bs-toggle="modal" data-bs-target="#modal-medicamento"></button>
                          </div>

                          <div class="col-md-2">
                            <button data-bs-toggle="tab" 
                                          type="submit"
                                          class="btn btn-guardar-balance fw-bold"
                                          @click="validaEliminarMedicamento(menuTrans.idMed)"> ELIMINAR </button>
                          </div>

                          <!-- Botón Guardar/Agregar -->
                          <div class="col-md-2">                                    
                            <template v-if="transAnestStore.btnAddMedicamentos === true">
                              <button data-bs-toggle="tab" 
                                          type="submit"
                                          class="btn btn-guardar-balance fw-bold" 
                                          @click="guardarMedicamentos"> GUARDAR </button>
                            </template>

                            <template v-if="transAnestStore.btnUpdateMedicamentos === true">
                              <button data-bs-toggle="tab" 
                                          type="submit"
                                          class="btn btn-guardar-balance fw-bold"
                                          @click="actualizarMedicamentos(menuTrans.tipoMed, menuTrans.medicamento, menuTrans.dosisMed, menuTrans.unidadMed,
                                          menuTrans.viaMed, menuTrans.horaInicioMed, menuTrans.horaFinalMed, menuTrans.observacionesMed, menuTrans.valorGrafica)"> GUARDAR </button>
                            </template>  

                            <template v-if="transAnestStore.btnActualizaMedicamento === true">
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
                      @click="vaciarModalRel"> RELEVO </button>
            </div>
            <!--Abrir el modal de Relevo-->
            <div class="modal" ref="relevoModal" id="modal-relevo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" >
                <div class="modal-content color-dropdown">
                  <div class="input-group mb-3">
                    <div class="modal-body">
                      <div class="col-md-12">
                        <div class="row g-3">
                            <h5 class="text-white fw-bold col-md-11">Datos del Relevo</h5>
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
                              <input type="time" class="form-control" v-model="menuTrans.horaRelevo" @click="actualizarTQX('INREL')">
                            </div>

                            <div class="col-md-7">
                              <input type="hidden" v-model="menuTrans.tipoRel">
                            </div>

                            <div class="col-md-3">
                              <label class="form-label text-white fw-bold"> Matrícula </label>                                
                              <input type="text" class="form-control" v-model="menuTrans.matriculaRel" @keyup.capture="enviarDatosTrans">
                            </div>

                            <div class="col-md-12">
                              <label class="form-label text-white fw-bold"> Anestesiológo </label>                                
                              <input type="text" class="form-control" v-model="menuTrans.anestesiologoRel" @keyup.capture="enviarDatosTrans">
                            </div>

                            <div class="col-md-12">
                              <label  class="form-label text-white fw-bold"> Observaciones </label>
                              <textarea class="form-control" rows="2" v-model="menuTrans.observacionesRel" @keyup.capture="enviarDatosTrans">
                              </textarea>
                            </div>

                            <div class="col-md-8">
                              <button id="abrir-relevo" type="button" class="invisible" data-bs-toggle="modal" data-bs-target="#modal-relevo"></button>
                            </div>

                            <div class="col-md-2">
                              <button data-bs-toggle="tab" 
                                            type="submit"
                                            class="btn btn-guardar-balance fw-bold"
                                            @click="validaEliminarRelevos(menuTrans.idRelevo)"> ELIMINAR </button>
                            </div>

                            <!-- Botón Guardar/Agregar -->
                            <div class="col-md-2">                                    
                              <template v-if="transAnestStore.btnAddRelevos === true">
                                <button data-bs-toggle="tab" 
                                            type="submit"
                                            class="btn btn-guardar-balance fw-bold" 
                                            @click="guardarRelevos"> GUARDAR </button>
                              </template>

                              <template v-if="transAnestStore.btnUpdateRelevos === true">
                                <button data-bs-toggle="tab" 
                                            type="submit"
                                            class="btn btn-guardar-balance fw-bold"
                                            @click="actualizarRelevos(menuTrans.horaRelevo, menuTrans.tipoRel, menuTrans.matriculaRel, 
                                                                        menuTrans.anestesiologoRel, menuTrans.observacionesRel, menuTrans.valorGraficaRel)"> GUARDAR </button>
                              </template>  

                              <template v-if="transAnestStore.btnActualizaRelevo === true">
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
                      @click="vaciarModalEve"> EVENTO CRÍTICO </button>
            </div>
            <!--Abrir el modal de evento critico-->
            <div class="modal" ref="eventoModal" id="modal-evento" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" >
                <div class="modal-content color-dropdown">
                  <div class="input-group mb-3">
                    <div class="modal-body">
                      <div class="col-md-12">
                        <div class="row g-3">
                            <h5 class="text-white fw-bold col-md-11">Datos del Evento Crítico</h5>
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
                              <input type="time" class="form-control" v-model="menuTrans.horaEvento" @click="actualizarTQX('INEVE')">
                            </div>

                            <div class="col-md-10">
                              <input type="hidden" v-model="menuTrans.tipoEve">
                            </div>

                            <div class="col-md-12">
                              <label  class="form-label text-white fw-bold"> Detalles del Evento </label>
                              <textarea class="form-control" rows="6" v-model="menuTrans.detalleEvento" @keyup.capture="enviarDatosTrans">
                              </textarea>
                            </div>

                            <div class="col-md-8">
                              <button id="abrir-evento" type="button" class="invisible" data-bs-toggle="modal" data-bs-target="#modal-evento"></button>
                            </div>

                            <div class="col-md-2">
                              <button data-bs-toggle="tab" 
                                            type="submit"
                                            class="btn btn-guardar-balance fw-bold"
                                            @click="validaEliminarEventos(menuTrans.idEvento)"> ELIMINAR </button>
                            </div>

                            <!-- Botón Guardar/Agregar -->
                            <div class="col-md-2">                                    
                              <template v-if="transAnestStore.btnAddEventos === true">
                                <button data-bs-toggle="tab" 
                                            type="submit"
                                            class="btn btn-guardar-balance fw-bold" 
                                            @click="guardarEventos"> GUARDAR</button>
                              </template>

                              <template v-if="transAnestStore.btnUpdateEventos === true">
                                <button data-bs-toggle="tab" 
                                            type="submit"
                                            class="btn btn-guardar-balance fw-bold"
                                            @click="actualizarEventos(menuTrans.horaEvento, menuTrans.tipoEve, menuTrans.detalleEvento, menuTrans.valorGraficaEv)"> GUARDAR</button>
                              </template>  

                              <template v-if="transAnestStore.btnActualizaEvento === true">
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

            <!-- Botón imprimir PDF -->
            <div class="col-md-2">
              <button type="button" class="btn btn-menu fw-bold" data-bs-toggle="modal" data-bs-target="#modal-grid" @click="crearPdf">
                <font-awesome-icon icon="fa-solid fa-file-pdf" size="lg"/> PDF
              </button>
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
                        data-bs-target="#modal-grid" @click="obtenerValoresGrafica"> GRID ANESTÉSICO </button>                
              </li>
              <!-- Técnica Anestésica Final -->
              <li class="col-md-3">
                <button type="button"
                        class="btn btn-nav-bar fw-bold"
                        @click="validarTecnica"> TÉCNICA ANESTÉSICA </button>                
              </li>
              <!-- Balance Hídrico -->
              <li class="col-md-3">
                <button type="button" 
                        class="btn btn-nav-bar fw-bold" 
                        @click="validarBalance">BALANCE HÍDRICO </button> <!-- Modificar guardado -->
              </li>
              <!-- Datos del ventilador -->
              <li class="col-md-3">
                <button type="button"
                        class="btn btn-nav-bar fw-bold"
                        @click="validarVentilador">DATOS DEL VENTILADOR </button>
              </li>
            </ul>
        </div>
      </div>

      <!--Abrir el modal Grid Anestésico-->
      <div class="modal" id="modal-grid" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">        
        <div class="" :class="tamanoModalGrid == false ? 'modal-dialog modal-lg modal-dialog-centered' : 'modal-fullscreen modal-dialog-centered'">
          <div class="modal-content">

            <!-- Ventana de carga PDF -->
            <div class="" :class="mostrarSpinner == false ? 'div-spinner' : 'div-spinner-on'"> 
              <div class="row txt-spinner">
                <div id="pdf-spinner" class="spinner-border text-white fw-bold col-md-1" role="status"> 
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="col-md-4 text-white">
                  <h2>Generando PDF...</h2>
                </div>
              </div>
            </div>

            <!-- Graficas divididas -->
            <div class="div-graficas" :class="zoomGrafica == false ? 'div-none' : 'div-block'">
              <div ref="chartContainer" class="grafica-div"></div> 
            </div>

            <div class="input-group">
              <div class="modal-body">
                <div class="col-md-12 chart-container">                                                      
                  <div class="col-md-12">                      
                      <div class="row">                        
                        <h5 class="text-black fw-bold col-md-11">Grid Anestésico</h5>
                        <div class="col-md-1">
                          <button type="button" id="grid-anes"
                                  class="btn fw-bold"
                                  data-bs-dismiss="modal"
                                  aria-label="Close">
                            <i class="text-black invisible">
                              <font-awesome-icon icon="fa-solid fa-xmark" size="sm"/>
                            </i>
                          </button>
                        </div>
                        <div class="" :class="mostrarGraficas == false ? 'div-block' : 'div-none'" ref="chartRef" >                          
                          <Line class="" id="my-chart-id" :options="chartOptions" :data="chartData" :key="chartKey"/>
                        </div>
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
                        <h5 class="col-md-12 fw-bold text-white">Técnica Anestésica</h5>
                        <!-- Técnica de anestesia final -->
                        <div class="col-md-12">
                          <label  class="form-label fw-bold text-white">Técnica de anestesia final</label>
                          <Multiselect mode="tags"
                                        v-model="postAnestStore.TecnicaAnestesica"
                                        @click="enviarTecnica"
                                        :class="infoNotaPost.npa_TecAnestFinal != undefined && infoNotaPost.npa_TecAnestFinal != '' ?
                                                                                  'form-control border border-success formSombra' : 'form-control'"
                                        placeholder="Seleccione las técnicas de anestesia"
                                        :options="opcionTecnicas"
                                        :searchable="true"
                                        :createTag="true" :limit="2"/>
                        </div>

                        <div class="col-md-10">
                          <button id="abrir-tecnica" type="button" class="invisible" data-bs-toggle="modal" data-bs-target="#modal-tecnica"></button>
                        </div>

                        <div class="col-md-2 alinear-btn">                    
                          <template v-if="transAnestStore.tipoTecnica === false">
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
                                    @click="updateNotaPA()"
                                    > GUARDAR </button> 
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
                    <div class="col-md-3">
                      <button type="button" class="btn btn-guardar-balance-parcial fw-bold float" data-bs-toggle="modal" data-bs-target="#modal-balance-parcial">
                        Balance Parcial
                      </button>
                    </div>
                    <div class="estiloDropDownBalance row g-2 deslizar-balance-parcial-principal">

                      <h5 class="col-md-12 fw-bold text-white">Ingresos</h5>

                      <input type="hidden" v-model="menuTrans.balanceTotal">
                      <!-- Solución Hartman -->
                      <div class="col-md-4">
                        <label  class="form-label fw-bold text-white">Solución Hartman(ml):</label>
                        <input class="form-control"
                              v-model="menuTrans.solHartman"
                              type="text"
                              @keyup="calcularBalance">
                      </div>
                      <!-- Solución fisiológica -->
                      <div class="col-md-4">
                        <label  class="form-label fw-bold text-white">Solución fisiológica(ml):</label>
                        <input class="form-control"
                              v-model="menuTrans.solFisio"
                              type="text"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Glucosados -->
                      <div class="col-md-4">
                        <label  class="form-label fw-bold text-white">Glucosados(ml):</label>
                        <input class="form-control"
                              v-model="menuTrans.glucosados"
                              type="text"
                              @keyup.capture="calcularBalance">
                      </div>                  
                      <!-- Gelatinas -->
                      <div class="col-md-4">
                        <label  class="form-label fw-bold text-white">Gelatinas(ml):</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.gelatinas"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Almidones -->
                      <div class="col-md-4">
                        <label  class="form-label fw-bold text-white">Almidones(ml):</label>
                        <input class="form-control"
                              v-model="menuTrans.almidones"
                              type="text"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Albúminas -->
                      <div class="col-md-4">
                        <label  class="form-label fw-bold text-white">Albúminas(ml):</label>
                        <input class="form-control"
                              v-model="menuTrans.albuminas"
                              type="text"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Paquete globular -->
                      <div class="col-md-4">
                        <label  class="form-label fw-bold text-white">Paquete globular(ml):</label>
                        <input class="form-control"
                              v-model="menuTrans.paqGlobular"
                              type="text"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Plasmas -->
                      <div class="col-md-4">
                        <label  class="form-label fw-bold text-white">Plasmas(ml):</label>
                        <input class="form-control"
                              v-model="menuTrans.plasmas"
                              type="text"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Plaquetas -->
                      <div class="col-md-4">
                        <label  class="form-label fw-bold text-white">Plaquetas(ml):</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.plaquetas"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Crioprecipitados -->
                      <div class="col-md-4">
                        <label  class="form-label fw-bold text-white">Crioprecipitados(ml):</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.crioprecipitados"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Factor VII -->
                      <div class="col-md-4">
                        <label  class="form-label fw-bold text-white">Factor VII(ml):</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.factor_VII"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Factor VIII -->
                      <div class="col-md-4">
                        <label  class="form-label fw-bold text-white">Factor VIII(ml):</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.factor_VIII"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Otros Ingresos -->
                      <div class="col-md-4">
                        <label  class="form-label fw-bold text-white">Otros:</label>
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
                        <label  class="form-label fw-bold text-white">Liquídos de ascitis(ml):</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.liqAscitis"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Sangrado aproximado -->
                      <div class="col-md-4">
                        <label  class="form-label fw-bold text-white">Sangrado aproximado(ml):</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.sangradoAprox"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Uresis -->
                      <div class="col-md-4">
                        <label  class="form-label fw-bold text-white">Uresis(ml):</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.uresis"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Exposición quirúrgica -->
                      <div class="col-md-4">
                        <label  class="form-label fw-bold text-white">Exposición quirúrgica:</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.expoQX"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Requerimientos basales -->
                      <div class="col-md-4">
                        <label  class="form-label fw-bold text-white">Requerimientos basales:</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.reqBasales"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Ayuno -->
                      <div class="col-md-4">
                        <label  class="form-label fw-bold text-white">Ayuno:</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.ayuno"
                              @keyup.capture="calcularBalance">
                      </div>
                      <!-- Otros Egresos -->
                      <div class="col-md-3">
                        <label  class="form-label fw-bold text-white">Otros:</label>
                        <input class="form-control"
                              type="text"
                              v-model="menuTrans.otrosEgresos"
                              @keyup.capture="calcularBalance">
                      </div>

                      <div class="col-md-9">
                        <button id="abrir-balance" type="button" class="invisible" data-bs-toggle="modal" data-bs-target="#modal-balance"></button>
                      </div>
                      <div class="col-md-10"></div>

                      <!-- Botón guardar/actualizar -->
                      <div class="col-md-2 alinear-btn">
                        <template v-if="transAnestStore.btnActualizarBalance === false">
                          <button data-bs-toggle="tab"
                                  type="submit"
                                  class="btn btn-guardar-balance fw-bold"
                                  :class="transAnestStore.balanceParcial != null ? 'btn btn-guardar-balance fw-bold invisible' : 'btn btn-guardar-balance fw-bold'"
                                  @click="cambiarUpdateBalance()"> GUARDAR </button>
                        </template>

                        <template v-else>
                          <button data-bs-toggle="tab" 
                                  type="submit"
                                  class="btn btn-guardar-balance fw-bold"
                                  :class="transAnestStore.balanceParcial != null ? 'btn btn-guardar-balance fw-bold invisible' : 'btn btn-guardar-balance fw-bold'"
                                  @click="actualizarDatosBalance()"> GUARDAR </button> 
                        </template>   
                      </div>
                    </div>
                    <h5 class="col-md-8 fw-bold text-white">Balance Total: {{menuTrans.balanceTotal}} ml</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      

      <!--Abrir el modal Balance Hídrico Parcial-->
      <div class="modal" id="modal-balance-parcial" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content color-dropdown">
            <div class="input-group mb-3">
              <div class="modal-body">
                <div class="col-md-12">
                  <div class="row g-3">
                    <h5 class="col-md-11 fw-bold text-white">BALANCE HÍDRICO POR HORA</h5>
                    <div class="col-md-1 div-img">
                      <button id="volver-balance" type="button" class="btn fw-bold" aria-label="Close" data-bs-toggle="modal" data-bs-target="#modal-balance">
                        <i class="text-white">
                          <font-awesome-icon icon="fa-solid fa-arrow-left" size="2xl"/>
                        </i>
                      </button>
                    </div>
                    
                    <div class="col-md-12">
                      <div class="deslizar-balance-parcial">
                        <table class="table table-responsive" v-for="( balance, index ) in transAnestStore.balanceParcial">
                          <thead>
                            <tr>
                              <th class="text-white">Hora</th>
                              <th class="text-white">Ingresos</th>
                              <th class="text-white">Egresos</th>
                              <th class="text-white">Balance total</th>
                            </tr>
                          </thead>

                          <tbody v-for="(datosBalance, index) in balance.balancesParciales">
                            <tr>
                              <td class="text-white">{{ datosBalance.horaBalance }}</td>
                              <td class="text-white">{{ datosBalance.ingresos }} ml</td>
                              <td class="text-white">{{ datosBalance.egresos }} ml</td>
                              <td class="text-white">{{ datosBalance.balanceP }} ml</td>
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

      <!--Abrir el modal Sumatoria de Medicamentos-->
      <div class="modal" id="modal-sumatoria-medicamentos" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content color-dropdown">
            <div class="input-group mb-3">
              <div class="modal-body">
                <div class="col-md-12">
                  <div class="row g-3">
                    <h5 class="col-md-11 fw-bold text-white">SUMATORIA DE MEDICAMENTOS</h5>
                    <div class="col-md-1 div-img">
                      <button id="volver-balance" type="button" class="btn fw-bold" aria-label="Close" data-bs-toggle="modal" data-bs-target="#modal-medicamento">
                        <i class="text-white">
                          <font-awesome-icon icon="fa-solid fa-arrow-left" size="2xl"/>
                        </i>
                      </button>
                    </div>
                    
                    <div class="col-md-12">
                      <div class="deslizar-balance-parcial">
                        <table class="table table-responsive">
                          <thead>
                            <tr>
                              <th class="text-white">Medicamento</th>
                              <th class="text-white">Bolo</th>
                              <th class="text-white">Infusión</th>
                              <th class="text-white">Total</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr v-for="(item, index) in medicamentosAgrupados" :key="index">
                              <td class="text-white">{{ item.medicamentoN }}</td>
                              <td class="text-white">{{ item.bolo ? `${item.bolo} ${item.unidadBolo}` : '' }}</td>
                              <td class="text-white">{{ item.infusion ? `${item.infusion} ${item.unidadInfusion}` : '' }}</td>
                              <td class="text-white">{{ item.total ? `${item.total} ${item.unidadTotal}` : '' }}</td>
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

      <!--Abrir el modal Datos del Ventilador-->
      <div class="modal" id="modal-ventilador" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content color-dropdown modal-med-largo">
            <div class="input-group mb-3">
              <div class="modal-body">
                <div class="col-md-12">
                  <div class="row g-3">
                    <h5 class="text-white fw-bold">Ventilador</h5>
                    <!-- Modos de Ventilación -->
                    <div class="col-md-9">
                      <label  class="form-label fw-bold text-white">Modos de ventilación</label>
                      <select 
                              v-model="menuTrans.modosVentilacion"
                              class="form-select" @click="enviarDatosTrans">
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
                            v-model="menuTrans.peep" @keyup.capture="enviarDatosTrans">
                    </div>
                    <!-- VIT -->
                    <div class="col-md-3">
                      <label class="form-label fw-bold text-white">VT</label>
                      <input type="text"
                            class="form-control"
                            v-model="menuTrans.vt" @keyup.capture="enviarDatosTrans">
                    </div>
                    <!-- Frecuencia Respiratoria -->
                    <div class="col-md-3">
                      <label class="form-label fw-bold text-white">Frec. Resp</label>
                      <input type="text"
                            class="form-control"
                            v-model="menuTrans.frecResp" @keyup.capture="enviarDatosTrans"> 
                    </div>
                    <!-- I:E -->
                    <div class="col-md-3">
                      <label class="form-label fw-bold text-white">I:E</label>
                      <input type="text"
                            class="form-control"
                            v-model="menuTrans.IE" @keyup.capture="enviarDatosTrans"> 
                    </div>
                    <!-- Presión Límite -->
                    <div class="col-md-3">
                      <label class="form-label fw-bold text-white">P. Límite</label>
                      <input type="text"
                            class="form-control"
                            v-model="menuTrans.PLimite" @keyup.capture="enviarDatosTrans"> 
                    </div>

                    <div class="col-md-9">
                      <button id="abrir-ventilador" type="button" class="invisible" data-bs-toggle="modal" data-bs-target="#modal-ventilador"></button>
                    </div>
                    <!-- Botón Guardar/Agregar -->
                    <div class="col-md-3 btn-abajo">                                    
                      <template v-if="transAnestStore.btnAddVentilador === true">
                        <button class="btn btn-guardar-balance fw-bold"
                                @click="guardarDatosV">
                          GUARDAR
                        </button>
                      </template>

                      <template v-if="transAnestStore.btnUpdateVentilador === true">
                        <button class="btn btn-guardar-balance fw-bold"
                                @click="actualizarDatosVentilador">
                          GUARDAR
                        </button>
                      </template>  

                      <template v-if="transAnestStore.btnActualizaVentilador === true">
                        <button class="btn btn-guardar-balance fw-bold"
                                @click="actualizarVentilador">
                          ACTUALIZAR
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
              <button id="inicio-cx" class="btn btn-menu fw-bold"
                      type="button"
                      @dblclick="actualizarTQX('QXIN')"
                      :disabled="menuTrans.ingresoQX != undefined && menuTrans.ingresoQX != ''  ? true : false">
                  <label class="cursor-puntero">QX IN <label class="fw-normal">{{menuTrans.ingresoQX}}</label></label>                  
              </button>
            </div>
            
            <div class="col-md-2">
              <button type="button" id="anes-in"
                      class="btn btn-menu fw-bold"
                      :class="{ 'show': transAnestStore.activoAnesIN, ' ': transAnestStore.noActivoAnesIN }"
                      :disabled="transAnestStore.btnTQX == true ? true : false"
                      @dblclick="actualizarTQX('ANESIN')"
                      @click="mostrarDropDown('ANESIN')"> 
                      <label class="cursor-puntero">ANES IN <label class="fw-normal">{{menuTrans.inicioAn}}</label></label> 
              </button>

              <form class="dropdown-menu p-2 color-dropdown" :class="{ 'show': transAnestStore.activoAnesIN, ' ': transAnestStore.noActivoAnesIN }">                                
                <label class="text-white fw-bold">Modificar</label>
                <i class="text-white float-end cursor-puntero"><font-awesome-icon icon="fa-solid fa-xmark" size="lg" @click="ocultarDropDown('ANESIN')"/></i>
                <input class="form-control"
                        id="appt-time"
                        type="time" :disabled="transAnestStore.ingresoQuirofano == false || transAnestStore.salidaQuirofano == true ? true : false"
                        v-model="menuTrans.inicioAn"
                        step="300" @change="actualizaHora('ANESIN')">
              </form>
              
            </div>

            <div class="col-md-2">
              <button type="button" id="cx-in"
                      class="btn btn-menu fw-bold" :class="{ 'show': transAnestStore.activoCxIN, ' ': transAnestStore.noActivoCxIN }"
                      :disabled="transAnestStore.btnTQX == true ? true : false"
                      @dblclick="actualizarTQX('CXIN')"
                      @click="mostrarDropDown('CXIN')"> 
                <label class="cursor-puntero">CX IN <label class="fw-normal">{{menuTrans.inicioCx}}</label></label>
              </button>

              <form class="dropdown-menu p-2 color-dropdown" :class="{ 'show': transAnestStore.activoCxIN, ' ': transAnestStore.noActivoCxIN }">
                <label class="text-white fw-bold">Modificar</label>                
                <i class="text-white float-end cursor-puntero"><font-awesome-icon icon="fa-solid fa-xmark" size="lg" @click="ocultarDropDown('CXIN')"/></i>
                <input class="form-control"
                        type="time" :disabled="transAnestStore.ingresoQuirofano == false || transAnestStore.salidaQuirofano == true ? true : false"
                        v-model="menuTrans.inicioCx" 
                        step="300" @change="actualizaHora('CXIN')">
              </form>
            </div>

            <div class="col-md-2"> 
              <button type="button" id="cx-out"
                      class="btn btn-menu fw-bold" :class="{ 'show': transAnestStore.activoCxOUT, ' ': transAnestStore.noActivoCxOUT }"
                      :disabled="transAnestStore.btnTQX == true ? true : false"
                      @dblclick="actualizarTQX('CXOUT')"
                      @click="mostrarDropDown('CXOUT')"> 
                <label class="cursor-puntero">CX OUT <label class="fw-normal">{{menuTrans.finCx}}</label></label>
              </button>

              <form class="dropdown-menu p-2 color-dropdown" :class="{ 'show': transAnestStore.activoCxOUT, ' ': transAnestStore.noActivoCxOUT }">
                <label class="text-white fw-bold">Modificar</label>                
                <i class="text-white float-end cursor-puntero"><font-awesome-icon icon="fa-solid fa-xmark" size="lg" @click="ocultarDropDown('CXOUT')"/></i>
                <input class="form-control"
                        id="appt-time"
                        type="time" :disabled="transAnestStore.ingresoQuirofano == false || transAnestStore.salidaQuirofano == true ? true : false"
                        v-model="menuTrans.finCx"
                        step="300" @change="actualizaHora('CXOUT')">
              </form>
            </div>

            <div class="col-md-2">    
              <button type="button" id="anes-out"
                      class="btn btn-menu fw-bold" :class="{ 'show': transAnestStore.activoAnesOUT, ' ': transAnestStore.noActivoAnesOUT }"
                      :disabled="transAnestStore.btnTQX == true ? true : false"
                      @dblclick="actualizarTQX('ANESOUT')"
                      @click="mostrarDropDown('ANESOUT')"> 
                <label class="cursor-puntero">ANES OUT <label class="fw-normal">{{menuTrans.finAn}}</label></label>
              </button>
              
              <form class="dropdown-menu p-2 color-dropdown" :class="{ 'show': transAnestStore.activoAnesOUT, ' ': transAnestStore.noActivoAnesOUT }">
                <label class="text-white fw-bold">Modificar</label>                
                <i class="text-white float-end cursor-puntero"><font-awesome-icon icon="fa-solid fa-xmark" size="lg " @click="ocultarDropDown('ANESOUT')"/></i>
                <input class="form-control"
                        id="appt-time"
                        type="time" :disabled="transAnestStore.ingresoQuirofano == false || transAnestStore.salidaQuirofano == true ? true : false"
                        v-model="menuTrans.finAn"
                        step="300" @change="actualizaHora('ANESOUT')">
              </form>   
            </div>

            <div class="col-md-2">    
              <button type="button" id="qx-out"
                      class="btn btn-menu fw-bold" 
                      @dblclick="actualizarTQX('QXOUT')"
                      :disabled="menuTrans.egresoQx != undefined && menuTrans.egresoQx != '' ? true : false"> 
                      <label class="cursor-puntero">QX OUT <label class="fw-normal">{{menuTrans.egresoQx}}</label></label>
              </button>        
            </div>
          </div>
        </div>

        <div class="col-1 fw-bold">
          <select 
                  class="form-select"
                  v-model="stepSize">
            <option>1</option>
            <option>2</option>
            <option>5</option>
            <option>10</option>
            <option>15</option>
          </select>
        </div>

        <div class="col-md-1">
          <button type="button" id="tutorial-trans" style="padding: 0;" class="btn btn-secondary invisible" data-bs-toggle="modal" data-bs-target="#tutorialTransModal">
            Modal Tutorial
          </button>
        </div>

        <div class="col-md-1">
          <label class="form-label fw-bold alinear-icono-nota">
            <template v-if="transAnestStore.microfonoEscucha === false">
              <span id="microfono" :class="transAnestStore.microfono == false ? 'microfono-off' : 'microfono-on'" @click="empezarReconocimiento">
                <font-awesome-icon class="" icon="fa-solid fa-microphone" size="2xl"/>
              </span>              
            </template>

            <template v-else>
              <span class="microfono-on" @click="detenerReconocimiento">
                <font-awesome-icon class="" icon="fa-solid fa-microphone" size="2xl"/>
              </span>
            </template>            
          </label>     
        </div>

        <!-- Modal tutorial Trans -->
        <div class="modal" id="tutorialTransModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
          <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content color-modal modal-tut-largo">
              <div class="input-group">
                <div class="modal-body">
                  
                  <div class="col-md-12" style="text-align: end;">
                    <button type="button" class="btn fw-bold" data-bs-dismiss="modal" aria-label="Close" @click="cambiarValorTutorial">
                      <i class="text-white">
                        <font-awesome-icon icon="fa-solid fa-xmark" size="xl"/>
                      </i>
                    </button>
                  </div>

                  <div class="row">
                    <div class="col-md-3">                   
                      <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                          <h1 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" disabled>
                              <b>PRE-ANÉSTESICO</b>
                            </button>
                          </h1>
                          <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">                              
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                              <b>TRANS-ANÉSTESICO</b>
                            </button>
                          </h2>
                          <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <label type="button"
                                :class="tutoUno == true ? 'color-activo-acordeon active' : 'color-desactivo-acordeon'"  
                                data-bs-target="#carousel-trans1" data-bs-slide-to="0" aria-label="Slide 1" @click="validarCambioCarrusel">
                                Acciones quirúrgicas
                              </label><br><br>
                              <label type="button" 
                                :class="tutoDos == true ? 'color-activo-acordeon active' : 'color-desactivo-acordeon'"
                                data-bs-target="#carousel-trans1" data-bs-slide-to="1" aria-label="Slide 2" @click="validarCambioCarrusel">
                                Tiempos quirúrgicos
                              </label><br><br>
                              <label type="button"
                                :class="tutoTres == true ? 'color-activo-acordeon active' : 'color-desactivo-acordeon'"
                                data-bs-target="#carousel-trans1" data-bs-slide-to="2" aria-label="Slide 3" @click="validarCambioCarrusel">
                                Barra de información
                              </label><br><br>
                              <label type="button"
                                :class="tutoCuatro == true ? 'color-activo-acordeon active' : 'color-desactivo-acordeon'"
                                data-bs-target="#carousel-trans1" data-bs-slide-to="3" aria-label="Slide 4" @click="validarCambioCarrusel">
                                Signos vitales
                              </label><br><br>
                              <label type="button"
                                :class="tutoCinco == true ? 'color-activo-acordeon active' : 'color-desactivo-acordeon'"
                                data-bs-target="#carousel-trans1" data-bs-slide-to="4" aria-label="Slide 5" @click="validarCambioCarrusel">
                                Grid anestésico
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" disabled>
                              <b>POST-ANÉSTESICO</b>
                            </button>
                          </h2>
                          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Carrusel para tutorial -->
                    <div class="col-md-9">                
                      <div id="carousel-trans1" class="carousel slide">
                        <div class="carousel-indicators">
                          <button type="button" id="tutoUno" data-bs-target="#carousel-trans1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" @click="validarCambioCarrusel"></button>
                          <button type="button" id="tutoDos" data-bs-target="#carousel-trans1" data-bs-slide-to="1" aria-label="Slide 2" @click="validarCambioCarrusel"></button>
                          <button type="button" id="tutoTres" data-bs-target="#carousel-trans1" data-bs-slide-to="2" aria-label="Slide 3" @click="validarCambioCarrusel"></button>
                          <button type="button" id="tutoCuatro" data-bs-target="#carousel-trans1" data-bs-slide-to="3" aria-label="Slide 4" @click="validarCambioCarrusel"></button>
                          <button type="button" id="tutoCinco" data-bs-target="#carousel-trans1" data-bs-slide-to="4" aria-label="Slide 5" @click="validarCambioCarrusel"></button>
                        </div>
                        <div class="carousel-inner">
                          <div class="carousel-item active div-carrusel">
                            <img src="../../../public/images/tutorial/trans-monitoreo.png" class="d-block img-carrusel">
                          </div>
                          <div class="carousel-item div-carrusel">
                            <img src="../../../public/images/tutorial/trans-tiempos.png" class="d-block img-carrusel">
                          </div>
                          <div class="carousel-item div-carrusel">
                            <img src="../../../public/images/tutorial/trans-acciones.png" class="d-block img-carrusel">
                          </div>
                          <div class="carousel-item div-carrusel">
                            <img src="../../../public/images/tutorial/trans-signos.png" class="d-block img-carrusel">
                          </div>
                          <div class="carousel-item div-carrusel">
                            <img src="../../../public/images/tutorial/trans-grafica.png" class="d-block img-carrusel">
                          </div>
                        </div>
                      </div>       
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contenedor Grid -->
    <div class="input-group mb-3 bordePrincipal" @mouseover="vaciarInputsTrans" @touchstart="vaciarInputsTrans">
     
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
                <tr class="cursor-puntero" v-for="datosMed in medicamento.medicamentosCx"
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
            <button class="btn btn-evento-relevo btn-sm fw-bold cursor-default"
                    @click="">RELEVOS Y EVENTOS CRÍTICOS</button>
          </div>   
          <!-- Lista de relevos/eventos -->
          <div class="deslizar-relevos m-1"> 
            <table class="table" id="tabla-med" v-for="(relevo) in transAnestStore.relevos" >
              <tbody v-for="(evento) in transAnestStore.eventos">

                <tr v-for="datosRel in relevo.relevoCx" @click="cambiarBtnActualizarRelevo(datosRel._id)" data-bs-toggle="modal" data-bs-target="#modal-relevo">
                  <td class="borde-tabla-izq p-1 text-center cursor-puntero" :class="datosRel.tipoRel === 'RELEVO' ? 'estilo-relevo' : 'estilo-evento'">
                    <FONT size="2">{{ datosRel.tipoRel }}</FONT>
                  </td>
                  <td class="borde-tabla-der fw-bold text-center cursor-puntero" :class="datosRel.tipoRel === 'RELEVO' ? 'estilo-relevo' : 'estilo-evento'">
                    <FONT size="2">{{ datosRel.horaRelevo }}</FONT>
                  </td>
                </tr>

                <tr v-for="datosEve in evento.evCriticoCx" @click="cambiarBtnActualizarEvento(datosEve._id)" data-bs-toggle="modal" data-bs-target="#modal-evento">
                  <td class="borde-tabla-izq p-1 text-center cursor-puntero" :class="datosEve.tipoEve === 'RELEVO' ? 'estilo-relevo' : 'estilo-evento'">
                    <FONT size="2">{{ datosEve.tipoEve }}</FONT>
                  </td>
                  <td class="borde-tabla-der fw-bold text-center cursor-puntero" :class="datosEve.horaEvento === 'RELEVO' ? 'estilo-relevo' : 'estilo-evento'">
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
          <div class="col-md-12">

              <div class="d-flex flex-nowrap g-4 ms-1">
                <!-- Barra lateral -->
                <div class="d-flex col-md-1 deslizar-grid-lateral" id="grid-lateral">
                  <div class="flex-nowrap fw-bold">
                    <div class="m-1 celda-msv invisible">0</div>
                    <div class="m-1 celda-msv">FC</div>
                    <hr class="mt-2 mb-2 invisible"/>
                    <div class="m-1 celda-msv">Pulso</div>
                    <hr class="mt-2 mb-2 invisible"/>
                    <div class="m-1 celda-msv">PAS</div>
                    <hr class="mt-2 mb-2 invisible"/>
                    <div class="m-1 celda-msv">PAD</div>
                    <hr class="mt-2 mb-2 invisible"/>
                    <div class="m-1 celda-msv">PAM</div>
                    <hr class="mt-2 mb-2 invisible"/>
                    <div class="m-1 celda-msv">SpO2</div>
                    <hr class="mt-2 mb-2 invisible"/>
                    <div class="m-1 celda-msv">EtCO2</div>
                    <hr class="mt-2 mb-2 invisible"/>
                    <div class="m-1 celda-msv">Temp1</div>
                    <hr class="mt-2 mb-2 invisible"/>
                    <div class="m-1 celda-msv">Temp2</div>
                    <hr class="mt-2 mb-2 invisible"/>                    
                    <div class="m-1 celda-msv">PVC</div>
                    <hr class="mt-2 mb-2 invisible"/>
                    <div class="m-1 celda-msv">PAS_IN</div>
                    <hr class="mt-2 mb-2 invisible"/>
                    <div class="m-1 celda-msv">PAD_IN</div>
                    <hr class="mt-2 mb-2 invisible"/>
                    <div class="m-1 celda-msv">PAM_IN</div>
                    <hr class="mt-2 mb-2 invisible"/>
                    <div class="m-1 celda-msv">FiCO2</div>
                    <hr class="mt-2 mb-2 invisible"/>
                    <div class="m-1 celda-msv">FR</div>
                    <hr class="mt-2 mb-2 invisible"/>
                  </div>
                </div>

                <!-- Muestra los valores del arreglo en el Grid de Signos Vitales -->
                <div class="d-flex flex-nowrap col-md-11 deslizar-grid ms-1" id="grid">
                  <template v-for="( itemMSV ) in saltoArreglo">
                    <div class="">
                      <div class="m-1 fw-bold celda-msv">
                        {{ itemMSV.horaGeneracion }}
                      </div>

                      <template v-for="(item, index) in itemMSV.datos">
                        <div class="m-1 celda-msv fw-bold" :class="'color-msv-' + item.segmento4" >
                          {{ item === '-' ? item : item.valor }}
                        </div>
                        <hr class="mt-2 mb-2 hr-grid"/>
                      </template>
                    </div>
                  </template>
                </div>
              </div>

          </div>
        </div>
      </div>

      <div class="col-2 menuLateralPrincipal"> <!--Menú lateral-->

        <div class="" :class="vistaPreviaOff == false ? 'col-md-2 menu-pre-post' : 'col-md-2 menu-pre-post-off'">
          <RouterLink to="pre">
            <img src="../../../public/images/pre.svg" class="ajusteImg" @click="validarModalTendencias"/>
          </RouterLink>
        </div>

        <div class="" :class="vistaPreviaOff == false ? 'col-md-2 menu-trans' : 'col-md-2 menu-trans-off'">
          <img src="../../../public/images/trans.svg" class="ajusteImg"/>
        </div>

        <div class="" :class="vistaPreviaOff == false ? 'col-md-2 menu-pre-post' : 'col-md-2 menu-pre-post-off'">
          <RouterLink to="post">
            <img src="../../../public/images/post.svg" class="ajusteImg" @click="validarModalTendencias"/>
          </RouterLink>
        </div>
      </div>

      <!-- Menú vista rápida desplegada -->
      <div class=" text-center posicion-estatica-arriba fw-bold container col-md-9" :class="preIdStore.VistaRapida == true ? 'c-sticky' : 'invisible c-fixed'" @click.stop="replegarMenuVistaRapida()">
          <label class="form-label text-white fw-bold" :class="preIdStore.numeroExpediente == '' || preIdStore.numeroExpediente == undefined ? 'invisible':''"> 
            #Expediente: {{ preIdStore.numeroExpediente == '' || preIdStore.numeroExpediente == undefined ? '-': preIdStore.numeroExpediente}}
          </label>
        <div class="row columna-size-1 mb-4 mt-2">
          <div class="col borde-row">           
            <img class="img-vista-rapida-arriba" src="../../../public/images/imgIcon/paciente_cuadro.png">                              
            <label class="form-label text-white" :class="preIdStore.NombrePaciente == '' || preIdStore.NombrePaciente == undefined ? 'invisible':''"> 
              {{ preIdStore.NombrePaciente == '' || preIdStore.NombrePaciente == undefined ? '-': preIdStore.NombrePaciente }}
            </label>
            <br>
            <label class="form-label text-white" :class="preIdStore.edadPaciente == '' || preIdStore.edadPaciente == undefined ? 'invisible':''"> 
              {{ preIdStore.edadPaciente == '' || preIdStore.edadPaciente == undefined ? '-': preIdStore.edadPaciente }} años
            </label>
            &nbsp&nbsp&nbsp&nbsp&nbsp
            <label class="form-label text-white" :class="preIdStore.generoPaciente == '' || preIdStore.generoPaciente == undefined ? 'invisible':''"> 
              {{ preIdStore.generoPaciente == '' || preIdStore.generoPaciente == undefined ? '-': preIdStore.generoPaciente }}
            </label>
            &nbsp&nbsp&nbsp&nbsp&nbsp
            <label class="form-label text-white" :class="preIdStore.fechaNacimientoPaciente == '' || preIdStore.fechaNacimientoPaciente == undefined ? 'invisible':''"> 
              {{ preIdStore.fechaNacimientoPaciente == '' || preIdStore.fechaNacimientoPaciente == undefined ? '-': preIdStore.fechaNacimientoPaciente }}
            </label>
          </div>
          
          <div class="col">
            <img class="img-vista-rapida-arriba" src="../../../public/images/imgIcon/anestesiologo_cuadro.png">
            <label class="form-label text-white" :class="preIdStore.NombreAnestesiologo == '' || preIdStore.NombreAnestesiologo == undefined ? 'invisible':''">
              {{ preIdStore.NombreAnestesiologo == '' || preIdStore.NombreAnestesiologo == undefined ? '-': preIdStore.NombreAnestesiologo }}            
            </label>
          </div>
        </div>

        <div class="row columna-size-2">
          <div class="col borde-row"> 
            <img class="img-vista-rapida-arriba" src="../../../public/images/imgIcon/cirujano_cuadro.png">
            <label class="form-label text-white" :class="preIdStore.NombreCirujano == '' || preIdStore.NombreCirujano == undefined ? 'invisible':''">            
              {{ preIdStore.NombreCirujano == '' || preIdStore.NombreCirujano == undefined ? '-': preIdStore.NombreCirujano }}
            </label>
          </div>

          <div class="col"> 
            <img class="img-vista-rapida-arriba" src="../../../public/images/imgIcon/cirugia_cuadro.png">
            <label class="form-label text-white" :class="preIdStore.NombreCirugia == '' || preIdStore.NombreCirugia == undefined ? 'invisible':''">            
              {{ preIdStore.NombreCirugia == '' || preIdStore.NombreCirugia == undefined ? '-': preIdStore.NombreCirugia }}
            </label>
          </div>
        </div>                  
      </div>

    </div>    

    <!-- Menú vista rápida -->
    <div class="text-center posicion-estatica fw-bold container" :class="preIdStore.VistaRapida == false ? 'c-fixed' : 'c-fixed invisible'" @click.stop="desplegarMenuVistaRapida()">
      <div class="row">
        <div class="col bordeColumna">           
          <img class="img-vista-rapida" src="../../../public/images/imgIcon/paciente.png">          
          <label class="form-label text-white" :class="preIdStore.NombrePaciente == '' || preIdStore.NombrePaciente == undefined ? 'invisible':''"> 
            {{ preIdStore.NombrePaciente == '' || preIdStore.NombrePaciente == undefined ? '-': 
               preIdStore.NombrePaciente.length > 30 ? preIdStore.NombrePaciente.substring(0,30) + '...' : preIdStore.NombrePaciente }}
          </label>
        </div>
        
        <div class="col">
          <img class="img-vista-rapida" src="../../../public/images/imgIcon/anestesiologo.png">
          <label class="form-label text-white" :class="preIdStore.NombreAnestesiologo == '' || preIdStore.NombreAnestesiologo == undefined ? 'invisible':''">
            {{ preIdStore.NombreAnestesiologo == '' || preIdStore.NombreAnestesiologo == undefined ? '-': 
               preIdStore.NombreAnestesiologo.length > 30 ? preIdStore.NombreAnestesiologo.substring(0,30) + '...' : preIdStore.NombreAnestesiologo }}            
          </label>
        </div>
        
        <div class="col bordeColumna"> 
          <img class="img-vista-rapida" src="../../../public/images/imgIcon/cirugia.png">
          <label class="form-label text-white" :class="preIdStore.NombreCirugia == '' || preIdStore.NombreCirugia == undefined ? 'invisible':''">            
            {{ preIdStore.NombreCirugia == '' || preIdStore.NombreCirugia == undefined ? '-' : 
               preIdStore.NombreCirugia.length > 30 ? preIdStore.NombreCirugia.substring(0, 30) + '...': preIdStore.NombreCirugia }}
          </label>
        </div>
      </div>
    </div>  

    <!-- Modal tendencias -->
    <div class="modal"
         id="tendenciasModal"
         tabindex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" >
        <div class="modal-content colorModal">
          <div class="input-group mb-3">
            <div class="modal-body">
              <div class="col-md-12">
                <div class="row g-3">
                  <div class="col-md-11">
                    <h5 class="text-white fw-bold">Tendencias</h5>
                    <h6 class="text-white fw-bold">Configuración de Tendencias</h6>
                  </div>

                  <div class="col-md-1 div-img">
                    <button
                      type="button"
                      class="btn fw-bold"
                      data-bs-dismiss="modal"
                      aria-label="Close">
                      <i class="text-white">
                        <font-awesome-icon icon="fa-solid fa-xmark" size="2xl" />
                      </i>
                    </button>
                  </div>

                  <form class="row g-3" @submit.prevent="">
                    <div class="col-md-12">
                      <div class="checkbox-container">
                        <div v-for="(dataset, index) in chartData.datasets" :key="index" class="checkbox-item">
                          <input
                            type="checkbox"
                            :id="'dataset-' + index"
                            :checked="!dataset.hidden"
                            @change="toggleDataset(index)"
                          />
                          <label class="text-white" :for="'dataset-' + index">&nbsp;{{ dataset.label }}</label>
                        </div>
                      </div>
                    </div>

                    <button id="abrir-tendencias" type="button" class="invisible" data-bs-toggle="modal" data-bs-target="#tendenciasModal"></button>
                  </form>
                </div>
              </div>
            </div>
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
import { useUserStore } from "@/stores/user-store";
import { usePostAnestStore } from "@/stores/postAnest-store";
import { useMedicamentoStore } from "../../stores/medicamento-store";
import { ElSelect, ElOption } from 'element-plus';
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
import html2canvas from 'html2canvas';
import zoomPlugin from 'chartjs-plugin-zoom';
// import pdfFonts from "pdfmake/build/vfs_fonts.js";
import pdfMake from "pdfmake/build/pdfmake";
// window.pdfMake.fonts = pdfFonts.pdfMake;

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, zoomPlugin);

const userStore = useUserStore()
const preIdStore = usePreIdStore();
const transAnestStore = useTransAnestStore();
const postAnestStore = usePostAnestStore();
const medStore = useMedicamentoStore();
let FC: any;
let Pulso: any;
let PAS: any;
let PAD: any;
let PAM: any;
let SpO2: any;
let EtCO2: any;
let Temp1: any;
let Temp2: any;
let PVC: any;
let PAS_In: any;
let PAD_In: any;
let PAM_In: any;
let FiCO2: any;
let FR: any;

let taSeparada: Object;

interface GrupoMedicamento {
  medicamentoN: string;
  bolo?: number;
  unidadBolo?: string;
  infusion?: number;
  unidadInfusion?: string;
  total?: number;
  unidadTotal?: string;
}

export default defineComponent({
  name: 'App',

  created() {
    // Visibilidad de los datasets
    this.datasetVisibility = new Array(this.chartData.datasets.length).fill(true);
  },

  data() {
    return {
      // ingresoQuirofano: false,
      ocultarHorario: false,

      // intervalo: null,
      // recognition: null,
      // microfono: false,
      // microfonoEscucha: false,

      informacion: '',
      clienteIp: '',

      tutoUno: true,
      tutoDos: false,
      tutoTres: false,
      tutoCuatro: false,
      tutoCinco:false,

      apiMSV: false,

      //Datos interfaces
      menuTrans: {} as regMenuTrans,
      infoNotaPost: {} as regNotaPost,
      
      //Store
      userStore,
      preIdStore,
      transAnestStore,
      postAnestStore,
      medStore,
      
      // Arreglo opciones técnicas
      opcionTecnicas: ['Local','Sedación', 'General balanceada', 'Combinada (General + Regional)', 'TIVA (Anestesia total intravenosa)', 'Multimodal',
                       'Bloqueo mixto', 'Bloqueo peridural lumbar', 'Bloqueo peridural caudal', 'Bloqueo espinal',
                       'Bloqueo de plexo', 'Bloqueo troncular', 'Bloqueo peridural torácico', 'Bloqueo peridural cervical',
                       'Libre de opioides'],
      // Arreglo de medicamentos menú configuración
      listaMed: [],
      // Arreglo de medicamentos trans
      listaMedTrans: [],    
      // Arreglo multiselect medicamentos
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
      grid: [], // Contiene todos los datos del grid
      statEnvDat: false,

      stepSize: 1,

      mostrarVistaRapida : false,

      chartData: {
          labels: [],
          datasets: [
              {
                  label: 'FC',            
                  borderColor: 'rgba(0, 165, 151)',
                  data: [],
                  fill: false,
                  pointStyle: 'circle', //Estilo del punto en los datos
                  radius: 4, //Tamaño punto              
                  showLine: true,
                  hidden: false, // Propiedad personalizada               
              },
              {
                  label: 'Pulso',
                  borderColor: 'rgba(117, 137, 190)',
                  data: [],
                  fill: false,
                  pointStyle: 'cross',
                  radius: 4,
                  showLine: true,
                  hidden: false, // Propiedad personalizada
              },
              {
                  label: 'PAS',
                  borderColor: 'rgba(236, 90, 85)',
                  data: [],
                  fill: false,
                  pointStyle: 'crossRot',
                  radius: 4,
                  showLine: true,
                  hidden: false, // Propiedad personalizada
              },
              {
                  label: 'PAD',
                  borderColor: 'rgba(161, 197, 227)',
                  data: [],
                  fill: false,
                  pointStyle: 'cross',
                  radius: 4,
                  showLine: true,
                  hidden: false, // Propiedad personalizada
              },
              {
                  label: 'PAM',
                  borderColor: 'rgba(236, 102, 24)',
                  data: [],
                  fill: false,
                  pointStyle: 'rectRounded',
                  radius: 4,
                  showLine: true,
                  hidden: false, // Propiedad personalizada
              },
              {
                  label: 'SpO2',
                  borderColor: 'rgba(68, 163, 211)',
                  data: [],
                  fill: false,
                  pointStyle: 'rectRot',
                  radius: 4,
                  showLine: true,
                  hidden: false, // Propiedad personalizada
              },
              {
                  label: 'EtCO2',
                  borderColor: 'rgba(112, 229, 225)',
                  data: [],
                  fill: false,
                  pointStyle: 'star',
                  radius: 4,
                  showLine: true,
                  hidden: false, // Propiedad personalizada
              },
              {
                  label: 'Temp1',
                  borderColor: 'rgba(157, 157, 157)',
                  data: [],
                  fill: false,
                  pointStyle: 'triangle',
                  radius: 4,
                  showLine: true,
                  hidden: false, // Propiedad personalizada
              },
              {
                  label: 'Temp2',
                  borderColor: 'rgba(174, 35, 30)',
                  data: [],
                  fill: false,
                  pointStyle: 'circle',
                  radius: 4,
                  showLine: true,
                  hidden: false, // Propiedad personalizada
              },
              {
                  label: 'PVC',
                  borderColor: 'rgba(77, 157, 183)',
                  data: [],
                  fill: false,
                  pointStyle: 'rectRot',
                  radius: 4,
                  showLine: true,
                  hidden: false, // Propiedad personalizada
              },
              {
                  label: 'PAS_IN',
                  borderColor: 'rgba(198, 27, 27)',
                  data: [],
                  fill: false,
                  pointStyle: 'crossRot',
                  radius: 4,
                  showLine: true,
                  hidden: false, // Propiedad personalizada
              },
              {
                  label: 'PAD_IN',
                  borderColor: 'rgba(198, 27, 27)',
                  data: [],
                  fill: false,
                  pointStyle: 'cross',
                  radius: 4,
                  showLine: true,
                  hidden: false, // Propiedad personalizada
              },
              {
                  label: 'PAM_IN',
                  borderColor: 'rgba(198, 27, 27)',
                  data: [],
                  fill: false,
                  pointStyle: 'rectRounded',
                  radius: 4,
                  showLine: true,
                  hidden: false, // Propiedad personalizada
              },
              {
                  label: 'FiCO2',
                  borderColor: 'rgba(2, 43, 155)',
                  data: [],
                  fill: false,
                  pointStyle: 'star',
                  radius: 4,
                  showLine: true,
                  hidden: false, // Propiedad personalizada
              },
              {
                  label: 'FR',
                  borderColor: 'rgba(255, 196, 0)',
                  data: [],
                  fill: false,
                  pointStyle: 'triangle',
                  radius: 4,
                  showLine: true,
                  hidden: false, // Propiedad personalizada
              },
              {
                  label: 'Medicamento',
                  borderColor: 'rgba(151, 199, 254)',
                  backgroundColor: 'rgba(151, 199, 254)',
                  data: [],
                  fill: true,
                  pointStyle: 'rect', //Estilo del punto en los datos
                  radius: 6, //Tamaño punto
                  showLine: false, //Oculta la línea       
                  hidden: false, // Propiedad personalizada
              },
              {
                  label: 'Evento',
                  borderColor: 'rgba(31, 80, 146)',
                  backgroundColor: 'rgba(31, 80, 146)', // Color de relleno
                  data: [],
                  fill: true,
                  pointStyle: 'rect', //Estilo del punto en los datos
                  radius: 6, //Tamaño punto      
                  showLine: false,
                  hidden: false, // Propiedad personalizada    
              },
              {
                  label: 'Relevo',
                  borderColor: 'rgba(128, 0, 128)',
                  backgroundColor: 'rgba(128, 0, 128)', // Color de relleno
                  data: [],
                  fill: true,
                  pointStyle: 'rect', //Estilo del punto en los datos
                  radius: 6, //Tamaño punto      
                  showLine: false,
                  hidden: false, // Propiedad personalizada    
              },
          ]
      },
      chartOptions: {
          responsive: true,
          plugins: {
            legend: {
              labels: {
                font: {
                    size: 12,
                    weight: 'bold', // Establece la fuente en negrita
                }
              }
            },
            zoom: {
              pan: {
                enabled: true,
                mode: 'xy',
              },
              zoom: {
                wheel: {
                  enabled: true,
                },
                pinch: {
                  enabled: true,
                },
                mode: 'xy', //
              },              
            },
          },
          scales: {
            x: {
              ticks: {
                font: {
                  size: 12, // Tamaño del texto del eje X
                  weight: 'bold', // Establece la fuente en negrita
                },
              },
            },
            y: {
              ticks: {
                font: {
                  size: 12, // Tamaño del texto del eje Y
                  weight: 'bold', // Establece la fuente en negrita
                },
              },
            },
          },
      }as any,
      chartKey: 0,

      tamanoModalGrid: false,
      zoomGrafica: false,
      mostrarGraficas: false,
      mostrarSpinner: false,

      chartElements: [],
      datasetVisibility: [], // Nuevo arreglo para controlar la visibilidad

      guardaDatosMSV: 0,
      gridBD: [], // Contiene todos los datos del grid

      balanceTemp: null,

      medicamentosFiltrados: [],
      eventosFiltrados: [],
      relevosFiltrados: [],
    }
  },

  components:{
    BarraNavegacion,
    Multiselect,
    ElSelect, ElOption,
    Line
  },

  mounted: function() { // Llama el método despues de cargar la página    
    //Mostrar modal de tutorial al logear por primera vez
    if(userStore.TutorialTrans === 0){
      let abrir = document.getElementById('tutorial-trans');

      // Crea un nuevo evento de clic
      let event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });

      // Despacha el evento de clic en el botón
      abrir.dispatchEvent(event);
    }

    //this.pingMSV(medStore.monitor[0].dirIPMVS);
    
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
    this.menuTrans.factor_VIII = null;
    this.menuTrans.liqAscitis = null;
    this.menuTrans.sangradoAprox = null;
    this.menuTrans.uresis = null;
    this.menuTrans.expoQX = null;
    this.menuTrans.reqBasales = null;
    this.menuTrans.ayuno = null;
    this.menuTrans.ayuno = null;
    this.menuTrans.otrosEgresos = null;

    let anesin = document.getElementById("anes-in");
    anesin.addEventListener("contextmenu", this.bloquearClicDerecho);
    let cxin = document.getElementById("cx-in");
    cxin.addEventListener("contextmenu", this.bloquearClicDerecho);
    let cxout = document.getElementById("cx-out");
    cxout.addEventListener("contextmenu", this.bloquearClicDerecho);
    let anesout = document.getElementById("anes-out");
    anesout.addEventListener("contextmenu", this.bloquearClicDerecho);    

    this.menuTrans.tipoRel= "RELEVO";
    this.menuTrans.tipoEve= "EVENTO";
    
    /*Retirado*/
    // this.tempMSV = setInterval(() => {
    //   this.pingMSV(medStore.monitor[0].dirIPMVS);
    // }, 10000);

    const gridLateral = document.getElementById('grid-lateral');
    const grid = document.getElementById('grid');

    // Escuchar el evento de desplazamiento en el elemento 'grid'
    grid.addEventListener('scroll', () => {
      // Sincronizar la posición de desplazamiento en el elemento 'grid-lateral'
      gridLateral.scrollTop = grid.scrollTop;
    });

    fetch(`${import.meta.env.VITE_ORIGIN1}/api/getClienteIp`) // Reemplaza '/api/getClientIp' con la ruta correcta en tu servidor
      .then(response => response.json())
      .then(data => {
        this.clienteIp = data.clienteIp;
      })
      .catch(error => {
        window.log.error('Error al obtener la dirección IP:', error);
      });
  },

  methods: {
    // mostrarFiltrados(){
    //   console.log('Med. Filtrados: '+ JSON.stringify(this.medicamentosAgrupados))
    // },

    toggleDataset(index) {   
      if(this.chartData.datasets[index].hidden === true) {
        this.chartData.datasets[index].hidden = false;
      } else if(this.chartData.datasets[index].hidden === false) {
        this.chartData.datasets[index].hidden = true;
      }
      this.chartKey += 1; // Forzar el renderizado de la gráfica
    },

    calcularHoraFinalMed(){
        try {
            let hoy = new Date();
            this.menuTrans.horaFinalMed = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();            

            this.enviarDatosTrans();        
        } catch (error) {
            window.log.error('Ocurrió un error:', error);
        }     
    },     
    
    async empezarReconocimiento() {
      try {
                
        transAnestStore.recognition = new (window as any).webkitSpeechRecognition(); // Crear instancia del reconocimiento de voz
        transAnestStore.recognition.lang = 'es-ES'; // Establecer idioma a español (puedes cambiarlo según tus necesidades)
        transAnestStore.recognition.continuous = true; // Permitir reconocimiento continuo
        transAnestStore.recognition.start(); // Iniciar reconocimiento de voz
  
        transAnestStore.microfono=true
        transAnestStore.microfonoEscucha=true
  
        const tiempoEspera = 1500;
  
        // Manejar evento de resultado del reconocimiento
        transAnestStore.recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript.toLowerCase(); // Obtener texto reconocido
          console.log('Texto reconocido:', transcript);
  
          // Verificar si la palabra específica ha sido detectada
  
          // QX IN
          if (transcript === 'quirófano.') {                
            // Realizar la acción deseada cuando se detecta la palabra clave                
            let closeButton = document.getElementById('inicio-cx');
              
            if(transAnestStore.ingresoQuirofano === false){
              // Crea un nuevo evento de clic
              let event = new MouseEvent('dblclick', {
                  bubbles: true,
                  cancelable: true,
                  view: window
              });                    
              // Despacha el evento de clic en el botón
              closeButton.dispatchEvent(event);
            }else{
              swal.fire({
                title: 'La cirugía ya ha iniciado',
                icon: 'error',
                showConfirmButton: false,
                toast: true,
                position: 'top',
                timer: 3000,
                timerProgressBar: true
              })
            }
          }
  
          // ANES IN
          else if (transcript === 'anestesia.') {                             
            let closeButton = document.getElementById('anes-in');
  
            if(transAnestStore.ingresoQuirofano === true){
              if(transAnestStore.salidaQuirofano === false){
                // Crea un nuevo evento de clic
                let event = new MouseEvent('dblclick', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });                    
                // Despacha el evento de clic en el botón
                closeButton.dispatchEvent(event);
              }else{
                swal.fire({
                  title: 'La cirugía ya ha finalizado',
                  icon: 'error',
                  showConfirmButton: false,
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  timerProgressBar: true
                })
              }
            }else{
              swal.fire({
                title: 'Registre la hora de ingreso al quirófano',
                icon: 'error',
                showConfirmButton: false,
                toast: true,
                position: 'top',
                timer: 3000,
                timerProgressBar: true
              })
            }
          }
  
          // CX IN
          else if (transcript === 'cirugía.') {                             
            let closeButton = document.getElementById('cx-in');
  
            if(transAnestStore.ingresoQuirofano === true){
              if(transAnestStore.salidaQuirofano === false){
                // Crea un nuevo evento de clic
                let event = new MouseEvent('dblclick', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });                    
                // Despacha el evento de clic en el botón
                closeButton.dispatchEvent(event);
              }else{
                swal.fire({
                  title: 'La cirugía ya ha finalizado',
                  icon: 'error',
                  showConfirmButton: false,
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  timerProgressBar: true
                })
              }
            }else{
              swal.fire({
                title: 'Registre la hora de ingreso al quirófano',
                icon: 'error',
                showConfirmButton: false,
                toast: true,
                position: 'top',
                timer: 3000,
                timerProgressBar: true
              })
            }
          }
  
          // CX OUT
          else if (transcript === 'termina cirugía.') {                             
            let closeButton = document.getElementById('cx-out');
  
            if(transAnestStore.ingresoQuirofano === true){
              if(transAnestStore.salidaQuirofano === false){
                // Crea un nuevo evento de clic
                let event = new MouseEvent('dblclick', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });                    
                // Despacha el evento de clic en el botón
                closeButton.dispatchEvent(event);
              }else{
                swal.fire({
                  title: 'La cirugía ya ha finalizado',
                  icon: 'error',
                  showConfirmButton: false,
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  timerProgressBar: true
                })
              }
            }else{
              swal.fire({
                title: 'Registre la hora de ingreso al quirófano',
                icon: 'error',
                showConfirmButton: false,
                toast: true,
                position: 'top',
                timer: 3000,
                timerProgressBar: true
              })
            }
          }
  
          // ANES OUT
          else if (transcript === 'termina anestesia.') {                             
            let closeButton = document.getElementById('anes-out');
  
            if(transAnestStore.ingresoQuirofano === true){
              if(transAnestStore.salidaQuirofano === false){
                // Crea un nuevo evento de clic
                let event = new MouseEvent('dblclick', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });                    
                // Despacha el evento de clic en el botón
                closeButton.dispatchEvent(event);
              }else{
                swal.fire({
                  title: 'La cirugía ya ha finalizado',
                  icon: 'error',
                  showConfirmButton: false,
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  timerProgressBar: true
                })
              }
            }else{
              swal.fire({
                title: 'Registre la hora de ingreso al quirófano',
                icon: 'error',
                showConfirmButton: false,
                toast: true,
                position: 'top',
                timer: 3000,
                timerProgressBar: true
              })
            }
          }
  
          // QX OUT
          else if (transcript === 'termina quirófano.') {
            let closeButton = document.getElementById('qx-out');
  
            if(transAnestStore.ingresoQuirofano === true){
              if(transAnestStore.salidaQuirofano === false){
                // Crea un nuevo evento de clic
                let event = new MouseEvent('dblclick', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });                    
                // Despacha el evento de clic en el botón
                closeButton.dispatchEvent(event);
              }else{
                swal.fire({
                  title: 'La cirugía ya ha finalizado',
                  icon: 'error',
                  showConfirmButton: false,
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  timerProgressBar: true
                })
              }
            }else{
              swal.fire({
                title: 'Registre la hora de ingreso al quirófano',
                icon: 'error',
                showConfirmButton: false,
                toast: true,
                position: 'top',
                timer: 3000,
                timerProgressBar: true
              })
            }
          }
          
          if (transAnestStore.intervalo !== null) {
              clearTimeout(transAnestStore.intervalo);
              console.log('Temporizador reiniciado.');
          }
  
          transAnestStore.intervalo = setTimeout(() => {
            transAnestStore.recognition.stop();
            transAnestStore.microfono = false;
          }, tiempoEspera);
        };
  
        // Manejar evento de error del reconocimiento
        transAnestStore.recognition.onerror = (event) => {
          window.log.error('Error en reconocimiento de voz:', event.error);
        };
  
        // Manejar evento de fin del reconocimiento
        transAnestStore.recognition.onend = () => {
          if (transAnestStore.intervalo !== null) {
              clearTimeout(transAnestStore.intervalo);
          }
          transAnestStore.microfono = false;
  
          // Iniciar reconocimiento de voz nuevamente
          setTimeout(() => {
            transAnestStore.recognition.start();
            transAnestStore.microfono = true;
          }, 100);
        };
      } catch (error) {
          window.log.error('Ocurrió un error:', error)
      }
    },

    async detenerReconocimiento() {
      try {
        if(transAnestStore.recognition !== null){
          transAnestStore.recognition.onend = () => {
            clearTimeout(transAnestStore.intervalo);
          };
    
          if (transAnestStore.recognition) {
            transAnestStore.recognition.stop();
            clearTimeout(transAnestStore.intervalo);
            transAnestStore.microfono = false;
            transAnestStore.microfonoEscucha=false
            console.log('Reconocimiento de voz detenido Trans.');
          }
        }                
      } catch (error) {
          window.log.error('Ocurrió un error:', error)
      }
    },

    async enviarDatosTrans() {        
      try {
        // Ingresos
        transAnestStore.solHartman=this.menuTrans.solHartman
        transAnestStore.solFisio=this.menuTrans.solFisio
        transAnestStore.glucosados=this.menuTrans.glucosados
        transAnestStore.gelatinas=this.menuTrans.gelatinas
        transAnestStore.almidones=this.menuTrans.almidones
        transAnestStore.albuminas=this.menuTrans.albuminas
        transAnestStore.paqGlobular=this.menuTrans.paqGlobular
        transAnestStore.plasmas=this.menuTrans.plasmas
        transAnestStore.plaquetas=this.menuTrans.plaquetas
        transAnestStore.crioprecipitados=this.menuTrans.crioprecipitados
        transAnestStore.factor_VII=this.menuTrans.factor_VII
        transAnestStore.factor_VIII=this.menuTrans.factor_VIII
        transAnestStore.otrosIngresos=this.menuTrans.otrosIngresos
        // Egresos
        transAnestStore.liqAscitis=this.menuTrans.liqAscitis
        transAnestStore.sangradoAprox=this.menuTrans.sangradoAprox
        transAnestStore.uresis=this.menuTrans.uresis
        transAnestStore.expoQX=this.menuTrans.expoQX
        transAnestStore.reqBasales=this.menuTrans.reqBasales
        transAnestStore.ayuno=this.menuTrans.ayuno
        transAnestStore.otrosEgresos=this.menuTrans.otrosEgresos
        // Técnica Anestésica
  
        // Tiempos QX
        transAnestStore.ingresoQX=this.menuTrans.ingresoQX
        transAnestStore.inicioAn=this.menuTrans.inicioAn
        transAnestStore.inicioCx=this.menuTrans.inicioCx
        transAnestStore.finCx=this.menuTrans.finCx
        transAnestStore.finAn=this.menuTrans.finAn
        transAnestStore.egresoQx=this.menuTrans.egresoQx
        // Datos Medicamentos
        
        preIdStore.vaciadroTrans=false        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async vaciarInputsTrans(){
      try {
        if(preIdStore.vaciadroTrans == true){
          /* DatosVentilador */
  
          // Ingresos
          this.menuTrans.solHartman= transAnestStore.solHartman
          this.menuTrans.solFisio= transAnestStore.solFisio
          this.menuTrans.glucosados= transAnestStore.glucosados
          this.menuTrans.gelatinas= transAnestStore.gelatinas
          this.menuTrans.almidones= transAnestStore.almidones
          this.menuTrans.albuminas= transAnestStore.albuminas
          this.menuTrans.paqGlobular= transAnestStore.paqGlobular
          this.menuTrans.plasmas= transAnestStore.plasmas
          this.menuTrans.plaquetas= transAnestStore.plaquetas
          this.menuTrans.crioprecipitados= transAnestStore.crioprecipitados
          this.menuTrans.factor_VII= transAnestStore.factor_VII
          this.menuTrans.factor_VIII= transAnestStore.factor_VIII
          this.menuTrans.otrosIngresos= transAnestStore.otrosIngresos
          // Egresos
          this.menuTrans.liqAscitis= transAnestStore.liqAscitis
          this.menuTrans.sangradoAprox= transAnestStore.sangradoAprox
          this.menuTrans.uresis= transAnestStore.uresis
          this.menuTrans.expoQX= transAnestStore.expoQX
          this.menuTrans.reqBasales= transAnestStore.reqBasales
          this.menuTrans.ayuno= transAnestStore.ayuno
          this.menuTrans.otrosEgresos= transAnestStore.otrosEgresos
          /* Técnica Anestésica */
  
          /* Tiempos QX */
          this.menuTrans.ingresoQX= transAnestStore.ingresoQX
          this.menuTrans.inicioAn= transAnestStore.inicioAn
          this.menuTrans.inicioCx= transAnestStore.inicioCx
          this.menuTrans.finCx= transAnestStore.finCx
          this.menuTrans.finAn= transAnestStore.finAn
          this.menuTrans.egresoQx= transAnestStore.egresoQx
          /* Datos Medicamentos */
  
          /* Relevos */
  
          /* Eventos Criticos */          
          this.grid = []

          transAnestStore.ingresoQuirofano = false
          transAnestStore.salidaQuirofano = false
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    // Generar Grafica a Imagen
    async convertirGrafica() {
      try {
        let grafica = (this.$refs.chartRef as HTMLElement);
        let canvas = await html2canvas(grafica);
        return canvas.toDataURL('image/png'); // Devuelve la imagen como base64
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    // Asignar valores del MSV a las graficas
    async obtenerValoresGrafica() {
      try {
        this.chartElements.forEach(chart => {
          chart.destroy();
        });
  
        this.chartElements = [];
  
        let FC = this.saltoArreglo.flatMap(item =>
          item.datos
            .filter(dato => dato.segmento4 === "174147842")
            .map(dato => dato.valor ?? ' ')
        );
  
        let Pulso = this.saltoArreglo.flatMap(item =>
          item.datos
            .filter(dato => dato.segmento4 === "131149530")
            .map(dato => dato.valor ?? ' ')
        );
  
        let PAS = this.saltoArreglo.flatMap(item =>
          item.datos
            .filter(dato => dato.segmento4 === "119150301")
            .map(dato => dato.valor ?? ' ')
        );
  
        let PAD = this.saltoArreglo.flatMap(item =>
          item.datos
            .filter(dato => dato.segmento4 === "119150302")
            .map(dato => dato.valor ?? ' ')
        );
  
        let PAM = this.saltoArreglo.flatMap(item =>
          item.datos
            .filter(dato => dato.segmento4 === "119150303")
            .map(dato => dato.valor ?? ' ')
        );
  
        let SpO2 = this.saltoArreglo.flatMap(item =>
          item.datos
            .filter(dato => dato.segmento4 === "131150456")
            .map(dato => dato.valor ?? ' ')
        );
  
        let EtCO2 = this.saltoArreglo.flatMap(item =>
          item.datos
            .filter(dato => dato.segmento4 === "181151708")
            .map(dato => dato.valor ?? ' ')
        );
  
        let Temp1 = this.saltoArreglo.flatMap(item =>
          item.datos
            .filter(dato => dato.segmento4 === "121150344")
            .map(dato => dato.valor ?? ' ')
        );
  
        let Temp2 = this.saltoArreglo.flatMap(item =>
          item.datos
            .filter(dato => dato.segmento4 === "122150344")
            .map(dato => dato.valor ?? ' ')
        );
  
        let PVC = this.saltoArreglo.flatMap(item =>
          item.datos
            .filter(dato => dato.segmento4 === "1112150087")
            .map(dato => dato.valor ?? ' ')
        );
  
        let PAS_IN = this.saltoArreglo.flatMap(item =>
          item.datos
            .filter(dato => dato.segmento4 === "111150037")
            .map(dato => dato.valor ?? ' ')
        );
  
        let PAD_IN = this.saltoArreglo.flatMap(item =>
          item.datos
            .filter(dato => dato.segmento4 === "111150038")
            .map(dato => dato.valor ?? ' ')
        );
  
        let PAM_IN = this.saltoArreglo.flatMap(item =>
          item.datos
            .filter(dato => dato.segmento4 === "111150039")
            .map(dato => dato.valor ?? ' ')
        );
  
        let FiCO2 = this.saltoArreglo.flatMap(item =>
          item.datos
            .filter(dato => dato.segmento4 === "181151716")
            .map(dato => dato.valor ?? ' ')
        );
  
        let FR = this.saltoArreglo.flatMap(item =>
          item.datos
            .filter(dato => dato.segmento4 === "181151594")
            .map(dato => dato.valor ?? ' ')
        );
  
        let horaGeneracion = this.saltoArreglo.map(item => item.horaGeneracion);

        // Valores de medicamentos a colocar en la gráfica
        let medicamentosDataset = new Array(horaGeneracion.length).fill(null).map(() => []);
        // Valores de eventos a colocar en la gráfica
        let eventosDataset = new Array(horaGeneracion.length).fill(null).map(() => []);    
        // Valores de relevos a colocar en la gráfica
        let relevosDataset = new Array(horaGeneracion.length).fill(null).map(() => []);

        if(transAnestStore.medicamentos != null){
          this.medicamentosFiltrados = transAnestStore.medicamentos.flatMap((med) => {
            return med.medicamentosCx.map((medicamento: any) => {
              return {
                medicamento: medicamento.medicamento,
                horaInicioMed: medicamento.horaInicioMed,
                valorGrafica: medicamento.valorGrafica,
                dosisMed: medicamento.dosisMed,
                unidadMed: medicamento.unidadMed
              };
            });
          });

          this.medicamentosFiltrados.forEach(med => {
            let index = horaGeneracion.indexOf(med.horaInicioMed);
            if (index !== -1) {
              medicamentosDataset[index].push({valor: med.valorGrafica, nombre: med.medicamento, dosis: med.dosisMed, unidad: med.unidadMed});
            }
          });
        }                

        if (transAnestStore.eventos != null) {
            this.eventosFiltrados = transAnestStore.eventos.flatMap((eve) => {
            return eve.evCriticoCx.map((evento: any) => {
              return {
                horaEvento: evento.horaEvento,
                detalleEvento: evento.detalleEvento,
                valorGraficaEv: evento.valorGraficaEv,
              };
            });
          });    

          this.eventosFiltrados.forEach(eve => {
            let index = horaGeneracion.indexOf(eve.horaEvento);
            if (index !== -1) {
              eventosDataset[index].push({valor: eve.valorGraficaEv, detalle: eve.detalleEvento});
            }
          });
        }

        if (transAnestStore.relevos != null) {
          this.relevosFiltrados = transAnestStore.relevos.flatMap((rel) => {
            return rel.relevoCx.map((relevo: any) => {
              return {
                horaRelevo: relevo.horaRelevo,
                anestesiologoRel: relevo.anestesiologoRel,
                observacionesRel: relevo.observacionesRel,
                valorGraficaRel: relevo.valorGraficaRel,
              };
            });
          });

          this.relevosFiltrados.forEach(rel => {
            let index = horaGeneracion.indexOf(rel.horaRelevo);
            if (index !== -1) {
              relevosDataset[index].push({valor: rel.valorGraficaRel, doctor: rel.anestesiologoRel, detalle: rel.observacionesRel});
            }
          });
        }
        
        let gruposFC = [];
        for (let i = 0; i < FC.length; i += 26) {
          gruposFC.push(FC.slice(i, i + 26));
        };
  
        let gruposPulso = [];
        for (let i = 0; i < Pulso.length; i += 26) {
          gruposPulso.push(Pulso.slice(i, i + 26));
        };
  
        let gruposPAS = [];
        for (let i = 0; i < PAS.length; i += 26) {
          gruposPAS.push(PAS.slice(i, i + 26));
        };
  
        let gruposPAD = [];
        for (let i = 0; i < PAD.length; i += 26) {
          gruposPAD.push(PAD.slice(i, i + 26));
        };
  
        let gruposPAM = [];
        for (let i = 0; i < PAM.length; i += 26) {
          gruposPAM.push(PAM.slice(i, i + 26));
        };
  
        let gruposSpO2 = [];
        for (let i = 0; i < SpO2.length; i += 26) {
          gruposSpO2.push(SpO2.slice(i, i + 26));
        };
  
        let gruposEtCO2 = [];
        for (let i = 0; i < EtCO2.length; i += 26) {
          gruposEtCO2.push(EtCO2.slice(i, i + 26));
        };
  
        let gruposTemp1 = [];
        for (let i = 0; i < Temp1.length; i += 26) {
          gruposTemp1.push(Temp1.slice(i, i + 26));
        };
  
        let gruposTemp2 = [];
        for (let i = 0; i < Temp2.length; i += 26) {
          gruposTemp2.push(Temp2.slice(i, i + 26));
        };
  
        let gruposPVC = [];
        for (let i = 0; i < PVC.length; i += 26) {
          gruposPVC.push(PVC.slice(i, i + 26));
        };
  
        let gruposPASIN = [];
        for (let i = 0; i < PAS_IN.length; i += 26) {
          gruposPASIN.push(PAS_IN.slice(i, i + 26));
        };
  
        let gruposPADIN = [];
        for (let i = 0; i < PAD_IN.length; i += 26) {
          gruposPADIN.push(PAD_IN.slice(i, i + 26));
        };
  
        let gruposPAMIN = [];
        for (let i = 0; i < PAM_IN.length; i += 26) {
          gruposPAMIN.push(PAM_IN.slice(i, i + 26));
        };
  
        let gruposFiCO2 = [];
        for (let i = 0; i < FiCO2.length; i += 26) {
          gruposFiCO2.push(FiCO2.slice(i, i + 26));
        };
  
        let gruposFR = [];
        for (let i = 0; i < FR.length; i += 26) {
          gruposFR.push(FR.slice(i, i + 26));
        };

        let agruparValoresMedicamentos = medicamentosDataset.map(item => item.length ? item[item.length - 1].valor : null)
        let gruposMedicamentos = [];
        for (let i = 0; i < agruparValoresMedicamentos.length; i += 26) {
          gruposMedicamentos.push(agruparValoresMedicamentos.slice(i, i + 26));
        };

        let agruparValoresEventos = eventosDataset.map(item => item.length ? item[item.length - 1].valor : null)
        let gruposEventos = [];
        for (let i = 0; i < agruparValoresEventos.length; i += 26) {
          gruposEventos.push(agruparValoresEventos.slice(i, i + 26));
        };        

        let agruparValoresRelevos = relevosDataset.map(item => item.length ? item[item.length - 1].valor : null)
        let gruposRelevos = [];
        for (let i = 0; i < agruparValoresRelevos.length; i += 26) {
          gruposRelevos.push(agruparValoresRelevos.slice(i, i + 26));
        };
        
        let gruposHora = [];
        for (let i = 0; i < horaGeneracion.length; i += 26) {
          gruposHora.push(horaGeneracion.slice(i, i + 26));
        };
  
        // Asignar valores a gráfica principal
        this.chartData.datasets[0].data = FC;
        this.chartData.datasets[1].data = Pulso;
        this.chartData.datasets[2].data = PAS;
        this.chartData.datasets[3].data = PAD;
        this.chartData.datasets[4].data = PAM;
        this.chartData.datasets[5].data = SpO2;
        this.chartData.datasets[6].data = EtCO2;
        this.chartData.datasets[7].data = Temp1;
        this.chartData.datasets[8].data = Temp2;
        this.chartData.datasets[9].data = PVC;
        this.chartData.datasets[10].data = PAS_IN;
        this.chartData.datasets[11].data = PAD_IN;
        this.chartData.datasets[12].data = PAM_IN;
        this.chartData.datasets[13].data = FiCO2;
        this.chartData.datasets[14].data = FR;
        this.chartData.datasets[15].data = medicamentosDataset.map(item => item.length ? item[item.length - 1].valor : null);
        this.chartData.datasets[16].data = eventosDataset.map(item => item.length ? item[item.length - 1].valor : null);
        this.chartData.datasets[17].data = relevosDataset.map(item => item.length ? item[item.length - 1].valor : null);                

        // Asignar hora a valores de la gráfica principal
        this.chartData.labels = horaGeneracion;
  
        // Crear gráficas dependiendo el número de grupos en el arreglo
        let topPosition = 0;
  
        for (let i = 0; i < gruposFC.length; i++) {
          const canvasElement = document.createElement('canvas');
  
          // Sobreponer todas las graficas en el mismo div
          canvasElement.style.position = 'absolute'; 
          canvasElement.style.top = `${topPosition}px`;
          canvasElement.style.left = '0';
  
          (this.$refs.chartContainer as HTMLElement).appendChild(canvasElement);
  
          const chart = this.crearGraficasPDF(gruposFC[i], gruposPulso[i], gruposPAS[i], gruposPAD[i], gruposPAM[i], gruposSpO2[i], gruposEtCO2[i], gruposTemp1[i], 
                      gruposTemp2[i], gruposPVC[i], gruposPASIN[i], gruposPADIN[i], gruposPAMIN[i], gruposFiCO2[i], gruposFR[i], 
                      gruposMedicamentos[i], gruposEventos[i], gruposRelevos[i], gruposHora[i], canvasElement);
          this.chartElements.push(chart);
        }

        this.chartOptions.plugins.tooltip = {
          callbacks: {
            label: function(tooltipItem) {
              const datasetIndex = tooltipItem.datasetIndex;
              const dataIndex = tooltipItem.dataIndex;
              const datasetLabel = tooltipItem.dataset.label;

              // Verifica si es el dataset de medicamentos
              if (datasetIndex === 15) {
                const data = medicamentosDataset[dataIndex];
                if (data && data.length) {
                  return data.map(med => `${med.nombre}: ${med.dosis} ${med.unidad}`).join(', ');
                } else {
                  return 'No medicamento';
                }
              } else if(datasetIndex === 16) {
                const data = eventosDataset[dataIndex];
                if (data && data.length) {
                  return data.map(ev => `${ev.detalle}`).join(', ');
                } else {
                  return 'No evento';
                }
              } else if(datasetIndex === 17) {
                const data = relevosDataset[dataIndex];
                if (data && data.length) {
                  return data.map(rel => `${rel.doctor}: ${rel.detalle}`).join(', ');
                } else {
                  return 'No relevo';
                }
              }else {
                // Muestra el valor original para los demás datasets
                return `${datasetLabel}: ${tooltipItem.raw}`;
              }
            }
          }
        };
  
        this.chartKey += 1;                  
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    // Dividir y crear graficas para cargar en documento PDF
    crearGraficasPDF(fc, pulso, pas, pad, pam, spo2, etco2, temp1, temp2, pvc, pasin, padin, pamin, fico2, fr, medic, even, relev, horas, element) {
      try {
        return new ChartJS(element, {
          type: 'line',
          data: {
            labels: horas,
            datasets: [              
              {
                  label: 'FC',            
                  borderColor: 'rgba(0, 165, 151)',
                  data: fc,
                  fill: false,
                  pointStyle: 'circle', //Estilo del punto en los datos
                  pointRadius: 8, //Tamaño punto              
                  showLine: true,
                  hidden: this.chartData.datasets[0].hidden, // Propiedad personalizada               
              },
              {
                  label: 'Pulso',
                  borderColor: 'rgba(117, 137, 190)',
                  data: pulso,
                  fill: false,
                  pointStyle: 'cross',
                  pointRadius: 8,
                  showLine: true,
                  hidden: this.chartData.datasets[1].hidden, // Propiedad personalizada
              },
              {
                  label: 'PAS',
                  borderColor: 'rgba(236, 90, 85)',
                  data: pas,
                  fill: false,
                  pointStyle: 'crossRot',
                  pointRadius: 8,
                  showLine: true,
                  hidden: this.chartData.datasets[2].hidden, // Propiedad personalizada
              },
              {
                  label: 'PAD',
                  borderColor: 'rgba(161, 197, 227)',
                  data: pad,
                  fill: false,
                  pointStyle: 'cross',
                  pointRadius: 8,
                  showLine: true,
                  hidden: this.chartData.datasets[3].hidden, // Propiedad personalizada
              },
              {
                  label: 'PAM',
                  borderColor: 'rgba(236, 102, 24)',
                  data: pam,
                  fill: false,
                  pointStyle: 'rectRounded',
                  pointRadius: 8,
                  showLine: true,
                  hidden: this.chartData.datasets[4].hidden, // Propiedad personalizada
              },              
              {
                  label: 'SpO2',
                  borderColor: 'rgba(68, 163, 211)',
                  data: spo2,
                  fill: false,
                  pointStyle: 'rectRot',
                  pointRadius: 8,
                  showLine: true,
                  hidden: this.chartData.datasets[5].hidden, // Propiedad personalizada
              },
              {
                  label: 'EtCO2',
                  borderColor: 'rgba(112, 229, 225)',
                  data: etco2,
                  fill: false,
                  pointStyle: 'star',
                  pointRadius: 8,
                  showLine: true,
                  hidden: this.chartData.datasets[6].hidden, // Propiedad personalizada
              },
              {
                  label: 'Temp1',
                  borderColor: 'rgba(157, 157, 157)',
                  data: temp1,
                  fill: false,
                  pointStyle: 'triangle',
                  pointRadius: 8,
                  showLine: true,
                  hidden: this.chartData.datasets[7].hidden, // Propiedad personalizada
              },
              {
                  label: 'Temp2',
                  borderColor: 'rgba(174, 35, 30)',
                  data: temp2,
                  fill: false,
                  pointStyle: 'circle',
                  pointRadius: 8,
                  showLine: true,
                  hidden: this.chartData.datasets[8].hidden, // Propiedad personalizada
              },
              {
                  label: 'PVC',
                  borderColor: 'rgba(77, 157, 183)',
                  data: pvc,
                  fill: false,
                  pointStyle: 'rectRot',
                  pointRadius: 8,
                  showLine: true,
                  hidden: this.chartData.datasets[9].hidden, // Propiedad personalizada
              },
              {
                  label: 'PAS_IN',
                  borderColor: 'rgba(198, 27, 27)',
                  data: pasin,
                  fill: false,
                  pointStyle: 'crossRot',
                  pointRadius: 8,
                  showLine: true,
                  hidden: this.chartData.datasets[10].hidden, // Propiedad personalizada
              },
              {
                  label: 'PAD_IN',
                  borderColor: 'rgba(198, 27, 27)',
                  data: padin,
                  fill: false,
                  pointStyle: 'cross',
                  pointRadius: 8,
                  showLine: true,
                  hidden: this.chartData.datasets[11].hidden, // Propiedad personalizada
              },
              {
                  label: 'PAM_IN',
                  borderColor: 'rgba(198, 27, 27)',
                  data: pamin,
                  fill: false,
                  pointStyle: 'rectRounded',
                  pointRadius: 8,
                  showLine: true,
                  hidden: this.chartData.datasets[12].hidden, // Propiedad personalizada
              },
              {
                  label: 'FiCO2',
                  borderColor: 'rgba(2, 43, 155)',
                  data: fico2,
                  fill: false,
                  pointStyle: 'star',
                  pointRadius: 8,
                  showLine: true,
                  hidden: this.chartData.datasets[13].hidden, // Propiedad personalizada
              },
              {
                  label: 'FR',
                  borderColor: 'rgba(255, 196, 0)',
                  data: fr,
                  fill: false,
                  pointStyle: 'triangle',
                  pointRadius: 8,
                  showLine: true,
                  hidden: this.chartData.datasets[14].hidden, // Propiedad personalizada
              },
              {
                  label: 'Medicamento',
                  borderColor: 'rgba(151, 199, 254)',
                  backgroundColor: 'rgba(151, 199, 254)',
                  data: medic,
                  fill: true,
                  pointStyle: 'rect', //Estilo del punto en los datos
                  pointRadius: 12, //Tamaño punto
                  showLine: false, //Oculta la línea       
                  hidden: this.chartData.datasets[15].hidden, // Propiedad personalizada
              },
              {
                  label: 'Evento',
                  borderColor: 'rgba(31, 80, 146)',
                  backgroundColor: 'rgba(31, 80, 146)', // Color de relleno
                  data: even,
                  fill: true,
                  pointStyle: 'rect', //Estilo del punto en los datos
                  pointRadius: 12, //Tamaño punto      
                  showLine: false,
                  hidden: this.chartData.datasets[16].hidden, // Propiedad personalizada    
              },
              {
                  label: 'Relevo',
                  borderColor: 'rgba(128, 0, 128)',
                  backgroundColor: 'rgba(128, 0, 128)', // Color de relleno
                  data: relev,
                  fill: true,
                  pointStyle: 'rect', //Estilo del punto en los datos
                  pointRadius: 12, //Tamaño punto      
                  showLine: false,
                  hidden: this.chartData.datasets[17].hidden, // Propiedad personalizada    
              },
            ],            
          },
          options: {            
            responsive: true,
            plugins: {
              legend: {
                labels: {
                  font: {
                      size: 20,
                      weight: 'bold', // Establece la fuente en negrita
                  }
                }
              },              
            },
            scales: {
              x: {
                ticks: {
                  font: {
                    size: 20, // Tamaño del texto del eje X
                    weight: 'bold', // Establece la fuente en negrita
                  },
                },
              },
              y: {
                ticks: {
                  font: {
                    size: 20, // Tamaño del texto del eje Y
                    weight: 'bold', // Establece la fuente en negrita
                  },
                },
              },
            },
          },          

        });
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },
      
    async cerrarModalGrid() {
      let closeButton = document.getElementById('grid-anes');

      // Crea un nuevo evento de clic
      let event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });

      // Despacha el evento de clic en el botón
      closeButton.dispatchEvent(event);
    },

    // Imprimir PDF      
    async crearPdf() {
      try {      
        this.obtenerValoresGrafica();

        this.tamanoModalGrid = true;

        if(this.chartElements.length != 0){
          this.mostrarGraficas = true;
        };

        this.mostrarSpinner=true
        
        this.zoomGrafica = true;

        await new Promise(resolve => setTimeout(resolve, 3000));        

        // Fuentes Personalizadas
        window.pdfMake.fonts = {
          SF: {
            normal: 'SF-UI-Display-Regular.otf',
            bold: 'SF-UI-Display-Bold.otf',
            italics: 'SF-UI-Display-Regular.otf',
            bolditalics: 'SF-UI-Display-Bold.otf',
          }
        };
        /***********************PRE***********************/        

        /*ID PACIENTE*/
        // Nombre
        let nomPaciente = preIdStore.NombrePaciente === undefined || preIdStore.NombrePaciente === null ? ' ' : preIdStore.NombrePaciente;
        const txtNomPaciente = nomPaciente.length > 45 ? nomPaciente.substring(0, 45) + '...' : nomPaciente;
        // Fecha Nacimiento
        let fechaNac = preIdStore.fechaNacimientoPaciente === undefined ? ' ' : preIdStore.fechaNacimientoPaciente
        // Edad
        let edad = preIdStore.edadPaciente === undefined || preIdStore.edadPaciente === null ? ' ' : preIdStore.edadPaciente + ' años';       
        // Sexo
        let sexo = preIdStore.generoPaciente === undefined ? ' ' : preIdStore.generoPaciente;
        // CURP
        let curp = preIdStore.CURP === undefined ? '' : preIdStore.CURP;
        // Número Habitación
        let numHabitacion = preIdStore.Habitacion === undefined ? ' ' : preIdStore.Habitacion;
        // Número Episodio
        let numEpisodio = preIdStore.NumeroEpisodio === undefined ? ' ' : preIdStore.NumeroEpisodio;
        // Número Expediente
        let numExp = preIdStore.numeroExpediente === undefined ? ' ' : preIdStore.numeroExpediente;
        // Fecha Ingreso
        let fechaIngreso = preIdStore.FechaIngreso === undefined ? ' ' : preIdStore.FechaIngreso;
        // Nacionalidad
        let nacionalidad = preIdStore.Nacionalidad === undefined ? ' ' : preIdStore.Nacionalidad;
        // Folio ID
        let folioId = preIdStore.FolioID === undefined ? ' ' : preIdStore.FolioID;
        // Estado Nacimiento
        let estNacimiento = preIdStore.EstadoNacimiento === undefined ? ' ' : preIdStore.EstadoNacimiento;
        // Residencia
        let estResidencia = preIdStore.EstadoResidencia === undefined ? ' ' : preIdStore.EstadoResidencia;
        // Alcaldía
        let alcaldia = preIdStore.Alcaldia === undefined ? ' ' : preIdStore.Alcaldia;
        // Colonia
        let colonia = preIdStore.Colonia === undefined ? ' ' : preIdStore.Colonia;
        // Código Postal
        let codigoPostal = preIdStore.CP === undefined ? ' ' : preIdStore.CP;
        // Diagnóstico
        let diagnostico = preIdStore.Diagnostico === undefined || preIdStore.Diagnostico === null ? ' ' : preIdStore.Diagnostico;
        let txtDiagnostico = diagnostico.length > 50 ? diagnostico.substring(0, 50) + '...' : diagnostico;
        // Tipo Cirugía
        let tipoCirugia = preIdStore.TipoCirugia === undefined ? ' ' : preIdStore.TipoCirugia;
        // Cirujano
        let cirujano = preIdStore.NombreCirujano === undefined || preIdStore.NombreCirujano === null ? ' ' : preIdStore.NombreCirujano;
        let txtNomCirujano = cirujano.length > 45 ? cirujano.substring(0, 45) + '...' : cirujano;
        // Anestesiólogo
        let anestesiologo = preIdStore.NombreAnestesiologo === undefined || preIdStore.NombreAnestesiologo === null ? ' ' : preIdStore.NombreAnestesiologo;
        let txtAnestesiologo = anestesiologo.length > 45 ? anestesiologo.substring(0, 45) + '...' : anestesiologo;
        // Residente de Anestesia
        let resiAnestesia = preIdStore.residenteAnestesia === undefined || preIdStore.residenteAnestesia === null ? ' ' : preIdStore.residenteAnestesia;
        let txtResidente = resiAnestesia.length > 45 ? resiAnestesia.substring(0, 45) + '...' : resiAnestesia;
        // Anestesiólogo VPA
        let anestesiologoVPA = preIdStore.AnestesiologoVPA === undefined || preIdStore.AnestesiologoVPA === null ? ' ' : preIdStore.AnestesiologoVPA;
        let txtAnestesiologoVPA = anestesiologoVPA.length > 45 ? anestesiologoVPA.substring(0, 45) + '...' : anestesiologoVPA;
        // Fecha de Cirugía
        let fechaCx = preIdStore.FechaCirugia === undefined ? ' ' : preIdStore.FechaCirugia;
        // Hora de Cirugía
        let horaCx = preIdStore.HoraCirugia === undefined ? ' ' : preIdStore.HoraCirugia;
        // Cirugía
        let cirugia = preIdStore.NombreCirugia === undefined || preIdStore.NombreCirugia === null ? ' ' : preIdStore.NombreCirugia;
        let txtCirugia= cirugia.length > 80 ? cirugia.substring(0, 80) + '...' : cirugia;
        // CIE-10
        let CIE10 = preIdStore.CIE10 === undefined ? ' ' : preIdStore.CIE10;
        // CIE-9
        let CIE9 = preIdStore.CIE9 === undefined ? ' ' : preIdStore.CIE9;       
        
        /*VALORACIÓN*/        
        /*Exploración Física*/
        // Antecedentes de Importancia
        let antecImportancia = preIdStore.AntecedentesImportancia === null || preIdStore.AntecedentesImportancia === undefined ? ' ' : preIdStore.AntecedentesImportancia;
        let txtAntecImportancia= antecImportancia.length > 300 ? antecImportancia.substring(0, 300) + '...' : antecImportancia;
        // Frecuencia Cardiáca
        let FC= preIdStore.FrecuenciaCardiaca === undefined ? ' ' : preIdStore.FrecuenciaCardiaca;
        // Frecuencia Respiratoria
        let FR= preIdStore.FrecuenciaRespiratoria === undefined ? ' ' : preIdStore.FrecuenciaRespiratoria;
        // Tensión Anterial
        let tensionArterial= preIdStore.TensionArterial === undefined ? ' ' : preIdStore.TensionArterial;
        // Saturación de O2
        let SpO2= preIdStore.SaturacionOxigeno === undefined ? ' ' : preIdStore.SaturacionOxigeno;
        // Temperatura
        let temperatura= preIdStore.Temperatura === undefined ? ' ' : preIdStore.Temperatura;
        // Peso
        let peso= preIdStore.Peso === undefined || preIdStore.Peso === null ? ' ' : preIdStore.Peso +' kg';
        // Talla
        let talla= preIdStore.Talla === undefined || preIdStore.Talla === null ? ' ' : preIdStore.Talla +' mts';
        // IMC
        let IMC= preIdStore.IMC === undefined ? ' ' : preIdStore.IMC;
        // Cabeza
        let cabeza= preIdStore.Cabeza === undefined || preIdStore.Cabeza === null ? ' ' : preIdStore.Cabeza
        let txtCabeza= cabeza.length > 120 ? cabeza.substring(0, 120) + '...' : cabeza;
        // Cuello
        let cuello= preIdStore.Cuello === undefined || preIdStore.Cuello === null ? ' ' : preIdStore.Cuello
        let txtCuello= cuello.length > 120 ? cuello.substring(0, 120) + '...' : cuello;
        // Respiratorio
        let respiratorio= preIdStore.Respiratorio === undefined || preIdStore.Respiratorio === null ? ' ' : preIdStore.Respiratorio
        let txtRespiratorio= respiratorio.length > 120 ? respiratorio.substring(0, 120) + '...' : respiratorio;
        // Cardiovascular
        let cardiovascular= preIdStore.Cadiovascular === undefined || preIdStore.Cadiovascular === null ? ' ' : preIdStore.Cadiovascular
        let txtCardiovascular= cardiovascular.length > 120 ? cardiovascular.substring(0, 120) + '...' : cardiovascular;
        // Hipertensión Arterial
        let hipArterial= preIdStore.Hipertension === undefined || preIdStore.Hipertension === null ? ' ' : preIdStore.Hipertension
        let txtHipArterial= hipArterial.length > 120 ? hipArterial.substring(0, 120) + '...' : hipArterial;
        // Abdomen
        let abdomen= preIdStore.Abdomen === undefined || preIdStore.Abdomen === null ? ' ' : preIdStore.Abdomen
        let txtAbdomen= abdomen.length > 120 ? abdomen.substring(0, 120) + '...' : abdomen;
        // Genitourinario
        let genitourinario= preIdStore.Genitourinario === undefined || preIdStore.Genitourinario === null ? ' ' : preIdStore.Genitourinario
        let txtGenitourinario= genitourinario.length > 120 ? genitourinario.substring(0, 120) + '...' : genitourinario;
        // Músculo Esquelético
        let musEsq= preIdStore.MusculoEsqueletico === undefined || preIdStore.MusculoEsqueletico === null ? ' ' : preIdStore.MusculoEsqueletico
        let txtMusEsq= musEsq.length > 120 ? musEsq.substring(0, 120) + '...' : musEsq;
        // Neurológico
        let neurologico= preIdStore.Neurologico === undefined || preIdStore.Neurologico === null ? ' ' : preIdStore.Neurologico
        let txtNeurologico= neurologico.length > 120 ? neurologico.substring(0, 120) + '...' : neurologico;
        // Piel y Fanareas
        let piel= preIdStore.PielFaneras === undefined || preIdStore.PielFaneras === null ? ' ' : preIdStore.PielFaneras
        let txtPiel= piel.length > 120 ? piel.substring(0, 120) + '...' : piel;
        
        /*Antecedentes*/
        // Ayuno
        let ayuno = preIdStore.APNPHorasAyuno === undefined ? ' ' : preIdStore.APNPHorasAyuno;
        // Tabaquismo
        let tabaquismo = preIdStore.APNPTabaquismo === undefined || preIdStore.APNPTabaquismo === null ? ' ' : preIdStore.APNPTabaquismo;
        let txtTabaqismo= tabaquismo.length > 50 ? tabaquismo.substring(0, 50) + '...' : tabaquismo;
        // Etilismo
        let etilismo = preIdStore.APNPEtilismo === undefined || preIdStore.APNPEtilismo === null ? ' ' : preIdStore.APNPEtilismo;
        let txtEtilismo= etilismo.length > 50 ? etilismo.substring(0, 50) + '...' : etilismo;
        // Adicciones
        let adicciones = preIdStore.APNPAdicciones === undefined || preIdStore.APNPAdicciones === null ? ' ' : preIdStore.APNPAdicciones;
        let txtAdicciones= adicciones.length > 50 ? adicciones.substring(0, 50) + '...' : adicciones;
        // Inmunizaciones
        let inmunizaciones = preIdStore.APNPInmunizaciones === undefined || preIdStore.APNPInmunizaciones === null ? ' ' : preIdStore.APNPInmunizaciones;
        let txtInmunizaciones= inmunizaciones.length > 50 ? inmunizaciones.substring(0, 50) + '...' : inmunizaciones;
        // Alergias
        let alergias = preIdStore.APPAlergias === undefined || preIdStore.APPAlergias === null ? ' ' : preIdStore.APPAlergias;
        let txtAlergias= alergias.length > 50 ? alergias.substring(0, 50) + '...' : alergias;
        // Quirúrgicos
        let quirurgicos = preIdStore.APPQuirurgicos === undefined || preIdStore.APPQuirurgicos === null ? ' ' : preIdStore.APPQuirurgicos;
        let txtQuirurgicos= quirurgicos.length > 50 ? quirurgicos.substring(0, 50) + '...' : quirurgicos;
        // Endocronológicos
        let endocronologicos = preIdStore.APPEndocrinologicos === undefined || preIdStore.APPEndocrinologicos === null ? ' ' : preIdStore.APPEndocrinologicos;
        let txtEndocronologicos= endocronologicos.length > 50 ? endocronologicos.substring(0, 50) + '...' : endocronologicos;
        // Urológicos
        let urologicos = preIdStore.APPUrologicos === undefined || preIdStore.APPUrologicos === null ? ' ' : preIdStore.APPUrologicos;
        let txtUrologicos= urologicos.length > 50 ? urologicos.substring(0, 50) + '...' : urologicos;
        // Traumáticos
        let traumaticos = preIdStore.APPTraumaticos === undefined || preIdStore.APPTraumaticos === null ? ' ' : preIdStore.APPTraumaticos;
        let txtTraumaticos= traumaticos.length > 50 ? traumaticos.substring(0, 50) + '...' : traumaticos;
        // Ortopédicos
        let ortopedicos = preIdStore.APPOrtopedicos === undefined || preIdStore.APPOrtopedicos === null ? ' ' : preIdStore.APPOrtopedicos;
        let txtOrtopedicos= ortopedicos.length > 50 ? ortopedicos.substring(0, 50) + '...' : ortopedicos;        
        // Transfusiones Previas
        let transPrevias = preIdStore.APPTransfuciones === undefined || preIdStore.APPTransfuciones === null ? ' ' : preIdStore.APPTransfuciones;
        let txtTransPrevias= transPrevias.length > 50 ? transPrevias.substring(0, 50) + '...' : transPrevias;
        // Estado Psiquico
        let estadoPsiquico = preIdStore.APPEstadoPsiquico === undefined || preIdStore.APPEstadoPsiquico === null ? ' ' : preIdStore.APPEstadoPsiquico;
        let txtEstadoPsiquico= estadoPsiquico.length > 50 ? estadoPsiquico.substring(0, 50) + '...' : estadoPsiquico;
        // Complicaciones Anestésicas Previas
        let compliPrevias = preIdStore.APPComplicaciones === undefined || preIdStore.APPComplicaciones === null ? ' ' : preIdStore.APPComplicaciones;
        let txtCompliPrevias= compliPrevias.length > 80 ? compliPrevias.substring(0, 80) + '...' : compliPrevias;
        // Medicación Actual
        let medicaActual = preIdStore.APPMedicacion === undefined || preIdStore.APPMedicacion === null ? ' ' : preIdStore.APPMedicacion;
        let txtMedicaActual= medicaActual.length > 80 ? medicaActual.substring(0, 80) + '...' : medicaActual;
        
        /*Laboratorio*/
        // Fecha Realización 
        let fechaEstudios = preIdStore.FechaRealizacion === undefined || preIdStore.FechaRealizacion === null ? ' ' : preIdStore.FechaRealizacion;
        // Grupo Sanguineo 
        let grupoSanguineo = preIdStore.GrupoSanguineo === undefined || preIdStore.GrupoSanguineo === null ? ' ' : preIdStore.GrupoSanguineo;
        // Hemoglobina 
        let hemoglobina = preIdStore.Hemoglobina === undefined || preIdStore.Hemoglobina === null ? ' ' : preIdStore.Hemoglobina;
        // Hematocrito 
        let hematocrito = preIdStore.Hematocrito === undefined || preIdStore.Hematocrito === null ? ' ' : preIdStore.Hematocrito;
        // Plaquetas 
        let plaquetas = preIdStore.Plaquetas === undefined || preIdStore.Plaquetas === null ? ' ' : preIdStore.Plaquetas;
        // Leutocitos 
        let leutocitos = preIdStore.Leutocitos === undefined || preIdStore.Leutocitos === null ? ' ' : preIdStore.Leutocitos;
        // TP 
        let TP = preIdStore.TP === undefined || preIdStore.TP === null ? ' ' : preIdStore.TP;
        // TT 
        let TT = preIdStore.TT === undefined || preIdStore.TT === null ? ' ' : preIdStore.TT;
        // TPT 
        let TPT = preIdStore.TPT === undefined || preIdStore.TPT === null ? ' ' : preIdStore.TPT;
        // INR 
        let INR = preIdStore.INR === undefined || preIdStore.INR === null ? ' ' : preIdStore.INR;
        // Glucosa 
        let glucosa = preIdStore.Glucosa === undefined || preIdStore.Glucosa === null ? ' ' : preIdStore.Glucosa;
        // Creatinina 
        let creatinina = preIdStore.Creatinina === undefined || preIdStore.Creatinina === null ? ' ' : preIdStore.Creatinina;
        // Urea 
        let urea = preIdStore.Urea === undefined || preIdStore.Urea === null ? ' ' : preIdStore.Urea;
        // Sodio 
        let sodio = preIdStore.Sodio === undefined || preIdStore.Sodio === null ? ' ' : preIdStore.Sodio;
        // Potasio 
        let potasio = preIdStore.Potasio === undefined || preIdStore.Potasio === null ? ' ' : preIdStore.Potasio;
        // Cloro 
        let cloro = preIdStore.Cloro === undefined || preIdStore.Cloro === null ? ' ' : preIdStore.Cloro;
        // Calcio 
        let calcio = preIdStore.Calcio === undefined || preIdStore.Calcio === null ? ' ' : preIdStore.Calcio;
        // Magnesio 
        let magnesio = preIdStore.Megnesio === undefined || preIdStore.Megnesio === null ? ' ' : preIdStore.Megnesio;
        // Bilirrubina directa 
        let biliDirecta = preIdStore.BilirrubinaDirecta === undefined || preIdStore.BilirrubinaDirecta === null ? ' ' : preIdStore.BilirrubinaDirecta;
        // Bilirrubina indirecta 
        let biliIndirecta = preIdStore.BilirrubinaIndirecta === undefined || preIdStore.BilirrubinaIndirecta === null ? ' ' : preIdStore.BilirrubinaIndirecta;
        // Bilirrubina total 
        let biliTotal = preIdStore.BilirrubimaTotal === undefined || preIdStore.BilirrubimaTotal === null ? ' ' : preIdStore.BilirrubimaTotal;
        // Lipasa 
        let lipasa = preIdStore.Lipasa === undefined || preIdStore.Lipasa === null ? ' ' : preIdStore.Lipasa;
        // Amilasa 
        let amilasa = preIdStore.Amilasa === undefined || preIdStore.Amilasa === null ? ' ' : preIdStore.Amilasa;
        // Otros 
        let otros = preIdStore.PerfilOtros === undefined || preIdStore.PerfilOtros === null ? ' ' : preIdStore.PerfilOtros;

        /*Vía Aérea*/
        // Mallampati 
        let mallampati = preIdStore.Mallampati === undefined || preIdStore.Mallampati === null ? ' ' : preIdStore.Mallampati;
        // Patil-Aldreti 
        let patilAldreti = preIdStore.PatilAldreti === undefined || preIdStore.PatilAldreti === null ? ' ' : preIdStore.PatilAldreti;
        // Apertura Bucal 
        let aperBucal = preIdStore.AperturaBucal === undefined || preIdStore.AperturaBucal === null ? ' ' : preIdStore.AperturaBucal;
        // Distancia Esternomentoniana 
        let distanciaEster = preIdStore.Distancia === undefined || preIdStore.Distancia === null ? ' ' : preIdStore.Distancia;
        // Protusión Mandibular 
        let protuMandibular = preIdStore.Protusion === undefined || preIdStore.Protusion === null ? ' ' : preIdStore.Protusion;
        // IPID 
        let IPID = preIdStore.IPID === undefined || preIdStore.IPID === null ? ' ' : preIdStore.IPID;
        // Escala Glasgow
        let glasgow = preIdStore.Glasgow === undefined || preIdStore.Glasgow === null ? ' ' : preIdStore.Glasgow;
        // Escala NYHA 
        let NYHA = preIdStore.NYHA === undefined || preIdStore.NYHA === null ? ' ' : preIdStore.NYHA;
        // Escala de Goldman 
        let goldman = preIdStore.Goldman === undefined || preIdStore.Goldman === null ? ' ' : preIdStore.Goldman;
        // Riesgo de Trombosis 
        let trombosis = preIdStore.RiesgosTrombosis === undefined || preIdStore.RiesgosTrombosis === null ? ' ' : preIdStore.RiesgosTrombosis;
        // Clasificación ASA 
        let ASA = preIdStore.ClasificacionASA === undefined || preIdStore.ClasificacionASA === null ? ' ' : preIdStore.ClasificacionASA;
        // Tipo de Cirugía 
        let tipoCir = preIdStore.VTipoCirugia === undefined || preIdStore.VTipoCirugia === null ? ' ' : preIdStore.VTipoCirugia;
        // Riesgo Anéstesico Quirúrgico 
        let riesgo = preIdStore.RiesgoAnestesico === undefined || preIdStore.RiesgoAnestesico === null ? ' ' : preIdStore.RiesgoAnestesico;

        /*Estudios*/
        let listaEstudios = preIdStore.estudios === null ? [' '] : preIdStore.estudios.map(item => item.val_Estudios.map(estudio => estudio.estudio+': ' + estudio.especifEstudio)).flat();        
        let estudios = listaEstudios.slice(0,5);

        /*PLAN*/        
        /*Posición y Cuidados*/
        // Horas Ayuno
        let hrsAyuno = preIdStore.HorasAyuno === undefined || preIdStore.HorasAyuno === null ? ' ' : preIdStore.HorasAyuno;
        // Acceso Venoso
        let accesoVenoso = preIdStore.AccesoVenoso === undefined || preIdStore.AccesoVenoso === null ? ' ' : preIdStore.AccesoVenoso;
        // Posición Paciente
        let posicionPaciente = preIdStore.PosicionPaciente === undefined || preIdStore.PosicionPaciente === null ? ' ' : preIdStore.PosicionPaciente;
        // Posición Brazos
        let posicionBrazos = preIdStore.PosicionBrazos === undefined || preIdStore.PosicionBrazos === null ? ' ' : preIdStore.PosicionBrazos;
        // Torniquete
        let aplicacionTorniquete = preIdStore.Sitio === undefined || preIdStore.Sitio === null ? ' ' : preIdStore.Sitio;        
        // Tiempo Isquemia
        let tiempoIsquemia = preIdStore.TiempoIsquemia === undefined || preIdStore.TiempoIsquemia === null ? ' ' : preIdStore.TiempoIsquemia;
        // Protección Ojos
        let proteccionOjos = preIdStore.ProteccionOjos === undefined || preIdStore.ProteccionOjos === null ? ' ' : preIdStore.ProteccionOjos;
        // Protección Prominencias Oseas
        let proteccionProminencias = preIdStore.ProteccionProminencias === undefined || preIdStore.ProteccionProminencias === null ? ' ' : preIdStore.ProteccionProminencias;
        // Técnica Anestesica 
        let tecnicaAnestesica = preIdStore.TecnicaAnestesica === undefined || preIdStore.TecnicaAnestesica === null ? ' ' : preIdStore.TecnicaAnestesica;
        // Premedicación
        let premedicacion = preIdStore.EspecPremedicacion === undefined || preIdStore.EspecPremedicacion === null ? ' ' : preIdStore.EspecPremedicacion;
        let txtPremedicacion= premedicacion.length > 80 ? premedicacion.substring(0, 80) + '...' : premedicacion;
        // Monitoreo
        let monitoreo = preIdStore.Monitoreo === undefined || preIdStore.Monitoreo === null ? ' ' : preIdStore.Monitoreo;
        let txtMonitoreo= monitoreo.length > 80 ? monitoreo.substring(0, 80) + '...' : monitoreo;

        /*Anestesia General*/
        // Inducción
        let induccion = preIdStore.Induccion === undefined || preIdStore.Induccion === null ? ' ' : preIdStore.Induccion;
        // Tubo
        let tubo = preIdStore.Tubo === undefined || preIdStore.Tubo === null ? ' ' : preIdStore.Tubo;
        // Número Tubo
        let numeroTubo = preIdStore.NumeroTubo === undefined || preIdStore.NumeroTubo === null ? ' ' : preIdStore.NumeroTubo;
        // Tipo Canula
        let tipoCanula = preIdStore.TipoCanula === undefined || preIdStore.TipoCanula === null ? ' ' : preIdStore.TipoCanula;
        // Globo
        let globo = preIdStore.Globo === undefined || preIdStore.Globo === null ? ' ' : preIdStore.Globo;
        // Presión 
        let presion = preIdStore.Presion === undefined || preIdStore.Presion === null ? ' ' : preIdStore.Presion;
        // Intubación 
        let intubacion = preIdStore.EspecificarGeneral === undefined || preIdStore.EspecificarGeneral === null ? ' ' : preIdStore.EspecificarGeneral;
        let txtIntubacion= intubacion.length > 100 ? intubacion.substring(0, 100) + '...' : intubacion;
        // Calibre 
        let calibre = preIdStore.Calibre === undefined || preIdStore.Calibre === null ? ' ' : preIdStore.Calibre;
        // Complicaciones 
        let complicacionesCalibre = preIdStore.EspecificarGeneral === undefined || preIdStore.EspecificarGeneral === null ? ' ' : preIdStore.EspecificarGeneral;
        let txtComplicacionesCal = complicacionesCalibre.length > 100 ? complicacionesCalibre.substring(0, 100) + '...' : complicacionesCalibre;
        // Uso de otros dispositivos 
        let otrosDispositivos = preIdStore.EspecificarGeneral === undefined || preIdStore.EspecificarGeneral === null ? ' ' : preIdStore.EspecificarGeneral;
        let txtOtrosDispositivos= otrosDispositivos.length > 100 ? otrosDispositivos.substring(0, 100) + '...' : otrosDispositivos;

        /*Anestesia Regional*/
        // BNA Tipo 
        let tipoBloqueo = preIdStore.TipoRegional === undefined || preIdStore.TipoRegional === null ? ' ' : preIdStore.TipoRegional;
        // BNA Tipo Aguja 
        let tipoAguja = preIdStore.TipoAguja === undefined || preIdStore.TipoAguja === null ? ' ' : preIdStore.TipoAguja;
        // BNA Nivel 
        let nivel = preIdStore.Nivel === undefined || preIdStore.Nivel === null ? ' ' : preIdStore.Nivel;
        // BNA Calibre Aguja 
        let calibreAguja = preIdStore.CalibreAguja === undefined || preIdStore.CalibreAguja === null ? ' ' : preIdStore.CalibreAguja;      
        // BNA Orientacion Cateter 
        let orientacionCateter = preIdStore.OrientacionCateter === undefined || preIdStore.OrientacionCateter === null ? ' ' : preIdStore.OrientacionCateter;
        // BNA Especificar Dificultades 
        let dificultadesBloqueo = preIdStore.EspecificarRegional === undefined || preIdStore.EspecificarRegional === null ? ' ' : preIdStore.EspecificarRegional;
        let txtComplicacionesBNA = dificultadesBloqueo.length > 100 ? dificultadesBloqueo.substring(0, 100) + '...' : dificultadesBloqueo;
        // BP Sitio 
        let sitioPlexo = preIdStore.SitioRegional === undefined || preIdStore.SitioRegional === null ? ' ' : preIdStore.SitioRegional;
        // BP Opcion Sitio
        let opcionPlexo = preIdStore.OpcionRegional === undefined || preIdStore.OpcionRegional === null ? ' ' : preIdStore.OpcionRegional;
        // BNA Especificar Sitio 
        let especificarSitio = preIdStore.EspecificarSitionRegional === undefined || preIdStore.EspecificarSitionRegional === null ? ' ' : preIdStore.EspecificarSitionRegional;
        let txtEspecificarSitio = especificarSitio.length > 100 ? especificarSitio.substring(0, 100) + '...' : especificarSitio;
        // BP Anestesico Utilizado 
        let anestesico = preIdStore.AnestesicoUtilizado === undefined || preIdStore.AnestesicoUtilizado === null ? ' ' : preIdStore.AnestesicoUtilizado;
        // BNA Especificar Anestesico 
        let especificarAnest = preIdStore.EspecificarAnestesico === undefined || preIdStore.EspecificarAnestesico === null ? ' ' : preIdStore.EspecificarAnestesico;
        let txtEspecificarAnestesico = especificarAnest.length > 100 ? especificarAnest.substring(0, 100) + '...' : especificarAnest;
        // BP Dificultades 
        let dificultadesPlexo = preIdStore.EspecificarDificPlexo === undefined || preIdStore.EspecificarDificPlexo === null ? ' ' : preIdStore.EspecificarDificPlexo;
        let txtDificultadesPlexo = dificultadesPlexo.length > 100 ? dificultadesPlexo.substring(0, 100) + '...' : dificultadesPlexo;
        // Ultrasonido 
        let ultrasonido = preIdStore.EspecUltrasonido === undefined || preIdStore.EspecUltrasonido === null ? ' ' : preIdStore.EspecUltrasonido;
        let txtUltrasonido = ultrasonido.length > 100 ? ultrasonido.substring(0, 100) + '...' : ultrasonido;
        // Neuroestimulador 
        let neuroestimulador = preIdStore.EspecificarNeuroestimulador === undefined || preIdStore.EspecificarNeuroestimulador === null ? ' ' : preIdStore.EspecificarNeuroestimulador;
        let txtNeuroestimulador = neuroestimulador.length > 100 ? neuroestimulador.substring(0, 100) + '...' : neuroestimulador;
        // Complicaciones Equipo Apoyo 
        let complicacionesEquipo = preIdStore.EspecificarComplicacNeuroes === undefined || preIdStore.EspecificarComplicacNeuroes === null ? ' ' : preIdStore.EspecificarComplicacNeuroes;
        let txtComplicacionesEquipo= complicacionesEquipo.length > 100 ? complicacionesEquipo.substring(0, 100) + '...' : complicacionesEquipo;

        /*Anestesia Sedación*/
        // Vía Sedación
        let viaSedacion = preIdStore.ViaSedacion === undefined || preIdStore.ViaSedacion === null ? ' ' : preIdStore.ViaSedacion;
        // Opción Sedación
        let opcionSedacion = preIdStore.OpcionSedacion === undefined || preIdStore.OpcionSedacion === null ? ' ' : preIdStore.OpcionSedacion;
        // Vía Sedación
        let obserSedacion = preIdStore.ObservacionesSedacion === undefined || preIdStore.ObservacionesSedacion === null ? ' ' : preIdStore.ObservacionesSedacion;
        let txtObserSedacion= obserSedacion.length > 100 ? obserSedacion.substring(0, 100) + '...' : obserSedacion;
        // Vía Sedación
        let medicamentosSedacion = preIdStore.MedicamentosSedacion === undefined || preIdStore.MedicamentosSedacion === null ? ' ' : preIdStore.MedicamentosSedacion;
        let txtMedicaSedacion= medicamentosSedacion.length > 100 ? medicamentosSedacion.substring(0, 100) + '...' : medicamentosSedacion;

        /*Anestesia Local*/
        // Sitio Anestesia
        let sitioLocal = preIdStore.SitioLocal === undefined || preIdStore.SitioLocal === null ? ' ' : preIdStore.SitioLocal;
        // Anestesico Utilizado
        let anestesicoLocal = preIdStore.AnestesicoLocal === undefined || preIdStore.AnestesicoLocal === null ? ' ' : preIdStore.AnestesicoLocal;
        // Especificar
        let especificarLocal = preIdStore.EspecificarLocal === undefined || preIdStore.EspecificarLocal === null ? ' ' : preIdStore.EspecificarLocal;
        let txtEspecifLocal= especificarLocal.length > 100 ? especificarLocal.substring(0, 100) + '...' : especificarLocal;

        /*NOTA PREANÉSTESICA*/
        let notaPre = preIdStore.NotaPre === undefined || preIdStore.NotaPre === null ? ' ' : preIdStore.NotaPre;
        let txtNotaPre = notaPre.length > 6500 ? notaPre.substring(0, 6500) + '...' : notaPre;

        /***********************POST***********************/
        /*NOTA POST*/
        /*Caso Obstetrico Recién Nacido*/
        // Número de Productos        
        let numProductos = postAnestStore.NumeroProductos === undefined || postAnestStore.NumeroProductos === null ? ' ' : postAnestStore.NumeroProductos;
        // Tipo Alumbramiento        
        let alumbramiento = postAnestStore.AlumbramientoUno === undefined || postAnestStore.AlumbramientoUno === null ? ' ' : postAnestStore.AlumbramientoUno;
        // Hora Nacimiento       
        let horaNacimiento = postAnestStore.HoraNacimientoUno === undefined || postAnestStore.HoraNacimientoUno === null ? ' ' : postAnestStore.HoraNacimientoUno;
        // Genero        
        let genero = postAnestStore.GeneroUno === undefined || postAnestStore.GeneroUno === null ? ' ' : postAnestStore.GeneroUno;
        // Apgar 1 min       
        let apgar1 = postAnestStore.Apgar1Uno === undefined || postAnestStore.Apgar1Uno === null ? ' ' : postAnestStore.Apgar1Uno;
        // Apgar 5 min        
        let apgar5 = postAnestStore.Apgar5Uno === undefined || postAnestStore.Apgar5Uno === null ? ' ' : postAnestStore.Apgar5Uno;
        // Capurro       
        let capurro = postAnestStore.CapurroUno === undefined || postAnestStore.CapurroUno === null ? ' ' : postAnestStore.CapurroUno;
        // Peso       
        let pesoNacido = postAnestStore.PesoUno === undefined || postAnestStore.PesoUno === null ? ' ' : postAnestStore.PesoUno;
        // Talla        
        let tallaNacido = postAnestStore.TallaUno === undefined || postAnestStore.TallaUno === null ? ' ' : postAnestStore.TallaUno;
        // Tipo Alumbramiento   
        let alumbramientoDos = postAnestStore.AlumbramientoDos === undefined || postAnestStore.AlumbramientoDos === null ? ' ' : postAnestStore.AlumbramientoDos;
        // Hora Nacimiento       
        let horaNacimientoDos = postAnestStore.HoraNacimientoDos === undefined || postAnestStore.HoraNacimientoDos === null ? ' ' : postAnestStore.HoraNacimientoDos;
        // Genero        
        let generoDos = postAnestStore.GeneroDos === undefined || postAnestStore.GeneroDos === null ? ' ' : postAnestStore.GeneroDos;
        // Apgar 1 min       
        let apgar1Dos = postAnestStore.Apgar1Dos === undefined || postAnestStore.Apgar1Dos === null ? ' ' : postAnestStore.Apgar1Dos;
        // Apgar 5 min        
        let apgar5Dos = postAnestStore.Apgar5Dos === undefined || postAnestStore.Apgar5Dos === null ? ' ' : postAnestStore.Apgar5Dos;
        // Capurro       
        let capurroDos = postAnestStore.CapurroDos === undefined || postAnestStore.CapurroDos === null ? ' ' : postAnestStore.CapurroDos;
        // Peso       
        let pesoNacidoDos = postAnestStore.PesoDos === undefined || postAnestStore.PesoDos === null ? ' ' : postAnestStore.PesoDos;
        // Talla        
        let tallaNacidoDos = postAnestStore.TallaDos === undefined || postAnestStore.TallaDos === null ? ' ' : postAnestStore.TallaDos;
        // Tipo Alumbramiento   
        let alumbramientoTres = postAnestStore.AlumbramientoTres === undefined || postAnestStore.AlumbramientoTres === null ? ' ' : postAnestStore.AlumbramientoTres;
        // Hora Nacimiento       
        let horaNacimientoTres = postAnestStore.HoraNacimientoTres === undefined || postAnestStore.HoraNacimientoTres === null ? ' ' : postAnestStore.HoraNacimientoTres;
        // Genero        
        let generoTres = postAnestStore.GeneroTres === undefined || postAnestStore.GeneroTres === null ? ' ' : postAnestStore.GeneroTres;
        // Apgar 1 min       
        let apgar1Tres = postAnestStore.Apgar1Tres === undefined || postAnestStore.Apgar1Tres === null ? ' ' : postAnestStore.Apgar1Tres;
        // Apgar 5 min        
        let apgar5Tres = postAnestStore.Apgar5Tres === undefined || postAnestStore.Apgar5Tres === null ? ' ' : postAnestStore.Apgar5Tres;
        // Capurro       
        let capurroTres = postAnestStore.CapurroTres === undefined || postAnestStore.CapurroTres === null ? ' ' : postAnestStore.CapurroTres;
        // Peso       
        let pesoNacidoTres = postAnestStore.PesoTres === undefined || postAnestStore.PesoTres === null ? ' ' : postAnestStore.PesoTres;
        // Talla        
        let tallaNacidoTres = postAnestStore.TallaTres === undefined || postAnestStore.TallaTres === null ? ' ' : postAnestStore.TallaTres;
        // Tipo Alumbramiento   
        let alumbramientoCuatro = postAnestStore.AlumbramientoCuatro === undefined || postAnestStore.AlumbramientoCuatro === null ? ' ' : postAnestStore.AlumbramientoCuatro;
        // Hora Nacimiento       
        let horaNacimientoCuatro = postAnestStore.HoraNacimientoCuatro === undefined || postAnestStore.HoraNacimientoCuatro === null ? ' ' : postAnestStore.HoraNacimientoCuatro;
        // Genero        
        let generoCuatro = postAnestStore.GeneroCuatro === undefined || postAnestStore.GeneroCuatro === null ? ' ' : postAnestStore.GeneroCuatro;
        // Apgar 1 min       
        let apgar1Cuatro = postAnestStore.Apgar1Cuatro === undefined || postAnestStore.Apgar1Cuatro === null ? ' ' : postAnestStore.Apgar1Cuatro;
        // Apgar 5 min        
        let apgar5Cuatro = postAnestStore.Apgar5Cuatro === undefined || postAnestStore.Apgar5Cuatro === null ? ' ' : postAnestStore.Apgar5Cuatro;
        // Capurro       
        let capurroCuatro = postAnestStore.CapurroCuatro === undefined || postAnestStore.CapurroCuatro === null ? ' ' : postAnestStore.CapurroCuatro;
        // Peso       
        let pesoNacidoCuatro = postAnestStore.PesoCuatro === undefined || postAnestStore.PesoCuatro === null ? ' ' : postAnestStore.PesoCuatro;
        // Talla        
        let tallaNacidoCuatro = postAnestStore.TallaCuatro === undefined || postAnestStore.TallaCuatro === null ? ' ' : postAnestStore.TallaCuatro;
        // Tipo Alumbramiento   
        let alumbramientoCinco = postAnestStore.AlumbramientoCinco === undefined || postAnestStore.AlumbramientoCinco === null ? ' ' : postAnestStore.AlumbramientoCinco;
        // Hora Nacimiento       
        let horaNacimientoCinco = postAnestStore.HoraNacimientoCinco === undefined || postAnestStore.HoraNacimientoCinco === null ? ' ' : postAnestStore.HoraNacimientoCinco;
        // Genero        
        let generoCinco = postAnestStore.GeneroCinco === undefined || postAnestStore.GeneroCinco === null ? ' ' : postAnestStore.GeneroCinco;
        // Apgar 1 min       
        let apgar1Cinco = postAnestStore.Apgar1Cinco === undefined || postAnestStore.Apgar1Cinco === null ? ' ' : postAnestStore.Apgar1Cinco;
        // Apgar 5 min        
        let apgar5Cinco = postAnestStore.Apgar5Cinco === undefined || postAnestStore.Apgar5Cinco === null ? ' ' : postAnestStore.Apgar5Cinco;
        // Capurro       
        let capurroCinco = postAnestStore.CapurroCinco === undefined || postAnestStore.CapurroCinco === null ? ' ' : postAnestStore.CapurroCinco;
        // Peso       
        let pesoNacidoCinco = postAnestStore.PesoCinco === undefined || postAnestStore.PesoCinco === null ? ' ' : postAnestStore.PesoCinco;
        // Talla        
        let tallaNacidoCinco = postAnestStore.TallaCinco === undefined || postAnestStore.TallaCinco === null ? ' ' : postAnestStore.TallaCinco;
        // Tipo Alumbramiento   
        let alumbramientoSeis = postAnestStore.AlumbramientoSeis === undefined || postAnestStore.AlumbramientoSeis === null ? ' ' : postAnestStore.AlumbramientoSeis;
        // Hora Nacimiento       
        let horaNacimientoSeis = postAnestStore.HoraNacimientoSeis === undefined || postAnestStore.HoraNacimientoSeis === null ? ' ' : postAnestStore.HoraNacimientoSeis;
        // Genero        
        let generoSeis = postAnestStore.GeneroSeis === undefined || postAnestStore.GeneroSeis === null ? ' ' : postAnestStore.GeneroSeis;
        // Apgar 1 min       
        let apgar1Seis = postAnestStore.Apgar1Seis === undefined || postAnestStore.Apgar1Seis === null ? ' ' : postAnestStore.Apgar1Seis;
        // Apgar 5 min        
        let apgar5Seis = postAnestStore.Apgar5Seis === undefined || postAnestStore.Apgar5Seis === null ? ' ' : postAnestStore.Apgar5Seis;
        // Capurro       
        let capurroSeis = postAnestStore.CapurroSeis === undefined || postAnestStore.CapurroSeis === null ? ' ' : postAnestStore.CapurroSeis;
        // Peso       
        let pesoNacidoSeis = postAnestStore.PesoSeis === undefined || postAnestStore.PesoSeis === null ? ' ' : postAnestStore.PesoSeis;
        // Talla        
        let tallaNacidoSeis = postAnestStore.TallaSeis === undefined || postAnestStore.TallaSeis === null ? ' ' : postAnestStore.TallaSeis;

        /*Nota Post-Anestésica*/
        // Técnica de Anestesia Final
        let tecnicaAnestFinal = postAnestStore.TecnicaAnestesica === undefined || postAnestStore.TecnicaAnestesica === null ? ' ' : String(postAnestStore.TecnicaAnestesica);
        // Intubación
        let intubacionPost = postAnestStore.Intubacion === undefined || postAnestStore.Intubacion === null ? ' ' : postAnestStore.Intubacion;
        // Nota Post Anestésica
        let notaPost = postAnestStore.NotaPost === undefined || postAnestStore.NotaPost === null ? ' ' : postAnestStore.NotaPost;
        let txtNotaPost = notaPost.length > 1000 ? notaPost.substring(0, 1000) + '...' : notaPost;
        // TA
        let TAPost = postAnestStore.EgresoTA === undefined || postAnestStore.EgresoTA === null ? ' ' : postAnestStore.EgresoTA;
        // FC
        let FCPost = postAnestStore.EgresoFC === undefined || postAnestStore.EgresoFC === null ? ' ' : postAnestStore.EgresoFC;
        // FR
        let FRPost = postAnestStore.EgresoFR === undefined || postAnestStore.EgresoFC === null ? ' ' : postAnestStore.EgresoFC;
        // Temperatura
        let TemperaturaPost = postAnestStore.EgresoTemp === undefined || postAnestStore.EgresoTemp === null ? ' ' : postAnestStore.EgresoTemp;
        // Pulso
        let PulsoPost = postAnestStore.EgresoPulso === undefined || postAnestStore.EgresoPulso === null ? ' ' : postAnestStore.EgresoPulso;
        // SpO2
        let SpO2Post = postAnestStore.EgresoSpO2 === undefined || postAnestStore.EgresoSpO2 === null ? ' ' : postAnestStore.EgresoSpO2;
        // Paciente Pasa a
        let pacientePasa = postAnestStore.DestinoEgreso === undefined || postAnestStore.DestinoEgreso === null ? ' ' : postAnestStore.DestinoEgreso;
        
        /*RECUPERACIÓN*/
        /*Nota de Evaluación UCPA*/
        let notaUCPA = postAnestStore.NotaUCPA === undefined || postAnestStore.NotaUCPA === null ? ' ' : postAnestStore.NotaUCPA;
        let txtNotaUCPA = notaUCPA.length > 1000 ? notaUCPA.substring(0, 1000) + '...' : notaUCPA;

        /*Aldrete de Recuperación*/
        // FC Ingreso
        let FCIngreso = postAnestStore.FCIngreso === undefined || postAnestStore.FCIngreso === null ? ' ' : postAnestStore.FCIngreso;
        // FC 15 min
        let FC15 = postAnestStore.FC15Min === undefined || postAnestStore.FC15Min === null ? ' ' : postAnestStore.FC15Min;
        // FC 30 min
        let FC30 = postAnestStore.FC30Min === undefined || postAnestStore.FC30Min === null ? ' ' : postAnestStore.FC30Min;
        // FC 45 min
        let FC45 = postAnestStore.FC45Min === undefined || postAnestStore.FC45Min === null ? ' ' : postAnestStore.FC45Min;
        // FC 60 min
        let FC60 = postAnestStore.FC60Min === undefined || postAnestStore.FC60Min === null ? ' ' : postAnestStore.FC60Min;
        // FC 90 min
        let FC90 = postAnestStore.FC90Min === undefined || postAnestStore.FC90Min === null ? ' ' : postAnestStore.FC90Min;
        // FC 120 min
        let FC120 = postAnestStore.FC120Min === undefined || postAnestStore.FC120Min === null ? ' ' : postAnestStore.FC120Min;
        // FR Ingreso
        let FRIngreso = postAnestStore.FRIngreso === undefined || postAnestStore.FRIngreso === null ? ' ' : postAnestStore.FRIngreso;
        // FR 15 min
        let FR15 = postAnestStore.FR15Min === undefined || postAnestStore.FR15Min === null ? ' ' : postAnestStore.FR15Min;
        // FR 30 min
        let FR30 = postAnestStore.FR30Min === undefined || postAnestStore.FR30Min === null ? ' ' : postAnestStore.FR30Min;
        // FR 45 min
        let FR45 = postAnestStore.FR45Min === undefined || postAnestStore.FR45Min === null ? ' ' : postAnestStore.FR45Min;
        // FR 60 min
        let FR60 = postAnestStore.FR60Min === undefined || postAnestStore.FR60Min === null ? ' ' : postAnestStore.FR60Min;
        // FR 90 min
        let FR90 = postAnestStore.FR90Min === undefined || postAnestStore.FR90Min === null ? ' ' : postAnestStore.FR90Min;
        // FR 120 min
        let FR120 = postAnestStore.FR120Min === undefined || postAnestStore.FR120Min === null ? ' ' : postAnestStore.FR120Min;
        // Tensión Arterial Ingreso
        let tensionIngreso = postAnestStore.TensionIngreso === undefined || postAnestStore.TensionIngreso === null ? ' ' : postAnestStore.TensionIngreso;
        // Tensión Arterial 15 min
        let tension15 = postAnestStore.Tension15Min === undefined || postAnestStore.Tension15Min === null ? ' ' : postAnestStore.Tension15Min;
        // Tensión Arterial 30 min
        let tension30 = postAnestStore.Tension30Min === undefined || postAnestStore.Tension30Min === null ? ' ' : postAnestStore.Tension30Min;
        // Tensión Arterial 45 min
        let tension45 = postAnestStore.Tension45Min === undefined || postAnestStore.Tension45Min === null ? ' ' : postAnestStore.Tension45Min;
        // Tensión Arterial 60 min
        let tension60 = postAnestStore.Tension60Min === undefined || postAnestStore.Tension60Min === null ? ' ' : postAnestStore.Tension60Min;
        // Tensión Arterial 90 min
        let tension90 = postAnestStore.Tension90Min === undefined || postAnestStore.Tension90Min === null ? ' ' : postAnestStore.Tension90Min;
        // Tensión Arterial 120 min
        let tension120 = postAnestStore.Tension120Min === undefined || postAnestStore.Tension120Min === null ? ' ' : postAnestStore.Tension120Min;
        // SpO2 Ingreso
        let saturacionIngreso = postAnestStore.SaturacionIngreso === undefined || postAnestStore.SaturacionIngreso === null ? ' ' : postAnestStore.SaturacionIngreso;
        // SpO2 15 min
        let saturacion15 = postAnestStore.Saturacion15Min === undefined || postAnestStore.Saturacion15Min === null ? ' ' : postAnestStore.Saturacion15Min;
        // SpO2 30 min
        let saturacion30 = postAnestStore.Saturacion30Min === undefined || postAnestStore.Saturacion30Min === null ? ' ' : postAnestStore.Saturacion30Min;
        // SpO2 45 min
        let saturacion45 = postAnestStore.Saturacion45Min === undefined || postAnestStore.Saturacion45Min === null ? ' ' : postAnestStore.Saturacion45Min;
        // SpO2 60 min
        let saturacion60 = postAnestStore.Saturacion60Min === undefined || postAnestStore.Saturacion60Min === null ? ' ' : postAnestStore.Saturacion60Min;
        // SpO2 90 min
        let saturacion90 = postAnestStore.Saturacion90Min === undefined || postAnestStore.Saturacion90Min === null ? ' ' : postAnestStore.Saturacion90Min;
        // SpO2 120 min
        let saturacion120 = postAnestStore.Saturacion120Min === undefined || postAnestStore.Saturacion120Min === null ? ' ' : postAnestStore.Saturacion120Min;
        // Actividad Muscular Ingreso
        let actividadIngreso = postAnestStore.MuscularIngreso === undefined || postAnestStore.MuscularIngreso === null ? ' ' : postAnestStore.MuscularIngreso;
        // Actividad Muscular 15 min
        let actividad15 = postAnestStore.Muscular15Min === undefined || postAnestStore.Muscular15Min === null ? ' ' : postAnestStore.Muscular15Min;
        // Actividad Muscular 30 min
        let actividad30 = postAnestStore.Muscular30Min === undefined || postAnestStore.Muscular30Min === null ? ' ' : postAnestStore.Muscular30Min;
        // Actividad Muscular 45 min
        let actividad45 = postAnestStore.Muscular45Min === undefined || postAnestStore.Muscular45Min === null ? ' ' : postAnestStore.Muscular45Min;
        // Actividad Muscular 60 min
        let actividad60 = postAnestStore.Muscular60Min === undefined || postAnestStore.Muscular60Min === null ? ' ' : postAnestStore.Muscular60Min;
        // Actividad Muscular 90 min
        let actividad90 = postAnestStore.Muscular90Min === undefined || postAnestStore.Muscular90Min === null ? ' ' : postAnestStore.Muscular90Min;
        // Actividad Muscular 120 min
        let actividad120 = postAnestStore.Muscular120Min === undefined || postAnestStore.Muscular120Min === null ? ' ' : postAnestStore.Muscular120Min;
        // Respiración Ingreso
        let respiracionIngreso = postAnestStore.RespiracionIngreso === undefined || postAnestStore.RespiracionIngreso === null ? ' ' : postAnestStore.RespiracionIngreso;
        // Respiración 15 min
        let respiracion15 = postAnestStore.Respiracion15Min === undefined || postAnestStore.Respiracion15Min === null ? ' ' : postAnestStore.Respiracion15Min;
        // Respiración 30 min
        let respiracion30 = postAnestStore.Respiracion30Min === undefined || postAnestStore.Respiracion30Min === null ? ' ' : postAnestStore.Respiracion30Min;
        // Respiración 45 min
        let respiracion45 = postAnestStore.Respiracion45Min === undefined || postAnestStore.Respiracion45Min === null ? ' ' : postAnestStore.Respiracion45Min;
        // Respiración 60 min
        let respiracion60 = postAnestStore.Respiracion60Min === undefined || postAnestStore.Respiracion60Min === null ? ' ' : postAnestStore.Respiracion60Min;
        // Respiración 90 min
        let respiracion90 = postAnestStore.Respiracion90Min === undefined || postAnestStore.Respiracion90Min === null ? ' ' : postAnestStore.Respiracion90Min;
        // Respiración 120 min
        let respiracion120 = postAnestStore.Respiracion120Min === undefined || postAnestStore.Respiracion120Min === null ? ' ' : postAnestStore.Respiracion120Min;
        // Circulación Ingreso
        let circulacionIngreso = postAnestStore.CirculacionIngreso === undefined || postAnestStore.CirculacionIngreso === null ? ' ' : postAnestStore.CirculacionIngreso;
        // Circulación 15 min
        let circulacion15 = postAnestStore.Circulacion15Min === undefined || postAnestStore.Circulacion15Min === null ? ' ' : postAnestStore.Circulacion15Min;
        // Circulación 30 min
        let circulacion30 = postAnestStore.Circulacion30Min === undefined || postAnestStore.Circulacion30Min === null ? ' ' : postAnestStore.Circulacion30Min;
        // Circulación 45 min
        let circulacion45 = postAnestStore.Circulacion45Min === undefined || postAnestStore.Circulacion45Min === null ? ' ' : postAnestStore.Circulacion45Min;
        // Circulación 60 min
        let circulacion60 = postAnestStore.Circulacion60Min === undefined || postAnestStore.Circulacion60Min === null ? ' ' : postAnestStore.Circulacion60Min;
        // Circulación 90 min
        let circulacion90 = postAnestStore.Circulacion90Min === undefined || postAnestStore.Circulacion90Min === null ? ' ' : postAnestStore.Circulacion90Min;
        // Circulación 120 min
        let circulacion120 = postAnestStore.Circulacion120Min === undefined || postAnestStore.Circulacion120Min === null ? ' ' : postAnestStore.Circulacion120Min;
        // Conciencia Ingreso
        let concienciaIngreso = postAnestStore.ConcienciaIngreso === undefined || postAnestStore.ConcienciaIngreso === null ? ' ' : postAnestStore.ConcienciaIngreso;
        // Conciencia 15 min
        let conciencia15 = postAnestStore.Conciencia15Min === undefined || postAnestStore.Conciencia15Min === null ? ' ' : postAnestStore.Conciencia15Min;
        // Conciencia 30 min
        let conciencia30 = postAnestStore.Conciencia30Min === undefined || postAnestStore.Conciencia30Min === null ? ' ' : postAnestStore.Conciencia30Min;
        // Conciencia 45 min
        let conciencia45 = postAnestStore.Conciencia45Min === undefined || postAnestStore.Conciencia45Min === null ? ' ' : postAnestStore.Conciencia45Min;
        // Conciencia 60 min
        let conciencia60 = postAnestStore.Conciencia60Min === undefined || postAnestStore.Conciencia60Min === null ? ' ' : postAnestStore.Conciencia60Min;
        // Conciencia 90 min
        let conciencia90 = postAnestStore.Conciencia90Min === undefined || postAnestStore.Conciencia90Min === null ? ' ' : postAnestStore.Conciencia90Min;
        // Conciencia 120 min
        let conciencia120 = postAnestStore.Conciencia120Min === undefined || postAnestStore.Conciencia120Min === null ? ' ' : postAnestStore.Conciencia120Min;
        // Coloracion Ingreso
        let coloracionIngreso = postAnestStore.ColoracionIngreso === undefined || postAnestStore.ColoracionIngreso === null ? ' ' : postAnestStore.ColoracionIngreso;
        // Coloracion 15 min
        let coloracion15 = postAnestStore.Coloracion15Min === undefined || postAnestStore.Coloracion15Min === null ? ' ' : postAnestStore.Coloracion15Min;
        // Coloracion 30 min
        let coloracion30 = postAnestStore.Coloracion30Min === undefined || postAnestStore.Coloracion30Min === null ? ' ' : postAnestStore.Coloracion30Min;
        // Coloracion 45 min
        let coloracion45 = postAnestStore.Coloracion45Min === undefined || postAnestStore.Coloracion45Min === null ? ' ' : postAnestStore.Coloracion45Min;
        // Coloracion 60 min
        let coloracion60 = postAnestStore.Coloracion60Min === undefined || postAnestStore.Coloracion60Min === null ? ' ' : postAnestStore.Coloracion60Min;
        // Coloracion 90 min
        let coloracion90 = postAnestStore.Coloracion90Min === undefined || postAnestStore.Coloracion90Min === null ? ' ' : postAnestStore.Coloracion90Min;
        // Coloracion 120 min
        let coloracion120 = postAnestStore.Coloracion120Min === undefined || postAnestStore.Coloracion120Min === null ? ' ' : postAnestStore.Coloracion120Min;
        // Aldrete Final
        let aldreteIngreso = postAnestStore.AldreteFinal0Min === undefined || postAnestStore.AldreteFinal0Min === null ? ' ' : postAnestStore.AldreteFinal0Min;
        // Aldrete 15 min
        let aldrete15 = postAnestStore.AldreteFinal15Min === undefined || postAnestStore.AldreteFinal15Min === null ? ' ' : postAnestStore.AldreteFinal15Min;
        // Aldrete 30 min
        let aldrete30 = postAnestStore.AldreteFinal30Min === undefined || postAnestStore.AldreteFinal30Min === null ? ' ' : postAnestStore.AldreteFinal30Min;
        // Aldrete 45 min
        let aldrete45 = postAnestStore.AldreteFinal45Min === undefined || postAnestStore.AldreteFinal45Min === null ? ' ' : postAnestStore.AldreteFinal45Min;
        // Aldrete 60 min
        let aldrete60 = postAnestStore.AldreteFinal60Min === undefined || postAnestStore.AldreteFinal60Min === null ? ' ' : postAnestStore.AldreteFinal60Min;
        // Aldrete 90 min
        let aldrete90 = postAnestStore.AldreteFinal90Min === undefined || postAnestStore.AldreteFinal90Min === null ? ' ' : postAnestStore.AldreteFinal90Min;
        // Aldrete 120 min
        let aldrete120 = postAnestStore.AldreteFinal120Min === undefined || postAnestStore.AldreteFinal120Min === null ? ' ' : postAnestStore.AldreteFinal120Min;
        // Bromage Ingreso
        let bromageIngreso = postAnestStore.BromageIngreso === undefined || postAnestStore.BromageIngreso === null ? ' ' : postAnestStore.BromageIngreso;
        // Bromage 15 min
        let bromage15 = postAnestStore.Bromage15Min === undefined || postAnestStore.Bromage15Min === null ? ' ' : postAnestStore.Bromage15Min;
        // Bromage 30 min
        let bromage30 = postAnestStore.Bromage30Min === undefined || postAnestStore.Bromage30Min === null ? ' ' : postAnestStore.Bromage30Min;
        // Bromage 45 min
        let bromage45 = postAnestStore.Bromage45Min === undefined || postAnestStore.Bromage45Min === null ? ' ' : postAnestStore.Bromage45Min;
        // Bromage 60 min
        let bromage60 = postAnestStore.Bromage60Min === undefined || postAnestStore.Bromage60Min === null ? ' ' : postAnestStore.Bromage60Min;
        // Bromage 90 min
        let bromage90 = postAnestStore.Bromage90Min === undefined || postAnestStore.Bromage90Min === null ? ' ' : postAnestStore.Bromage90Min;
        // Bromage 120 min
        let bromage120 = postAnestStore.Bromage120Min === undefined || postAnestStore.Bromage120Min === null ? ' ' : postAnestStore.Bromage120Min;
        // Nauseas/Vomito Ingreso
        let nauseasIngreso = postAnestStore.NauseaIngreso === undefined || postAnestStore.NauseaIngreso === null ? ' ' : postAnestStore.NauseaIngreso;
        // Nauseas/Vomito 15 min
        let nauseas15 = postAnestStore.Nausea15Min === undefined || postAnestStore.Nausea15Min === null ? ' ' : postAnestStore.Nausea15Min;
        // Nauseas/Vomito 30 min
        let nauseas30 = postAnestStore.Nausea30Min === undefined || postAnestStore.Nausea30Min === null ? ' ' : postAnestStore.Nausea30Min;
        // Nauseas/Vomito 45 min
        let nauseas45 = postAnestStore.Nausea45Min === undefined || postAnestStore.Nausea45Min === null ? ' ' : postAnestStore.Nausea45Min;
        // Nauseas/Vomito 60 min
        let nauseas60 = postAnestStore.Nausea60Min === undefined || postAnestStore.Nausea60Min === null ? ' ' : postAnestStore.Nausea60Min;
        // Nauseas/Vomito 90 min
        let nauseas90 = postAnestStore.Nausea90Min === undefined || postAnestStore.Nausea90Min === null ? ' ' : postAnestStore.Nausea90Min;
        // Nauseas/Vomito 120 min
        let nauseas120 = postAnestStore.Nausea120Min === undefined || postAnestStore.Nausea120Min === null ? ' ' : postAnestStore.Nausea120Min;
        // Escala de EVA Dolor Ingreso
        let EVAIngreso = postAnestStore.EscalaEVAIngreso === undefined || postAnestStore.EscalaEVAIngreso === null ? ' ' : postAnestStore.EscalaEVAIngreso;
        // Escala de EVA Dolor 15 min
        let EVA15 = postAnestStore.EscalaEVA15Min === undefined || postAnestStore.EscalaEVA15Min === null ? ' ' : postAnestStore.EscalaEVA15Min;
        // Escala de EVA Dolor 30 min
        let EVA30 = postAnestStore.EscabaEVA30Min === undefined || postAnestStore.EscabaEVA30Min === null ? ' ' : postAnestStore.EscabaEVA30Min;
        // Escala de EVA Dolor 45 min
        let EVA45 = postAnestStore.EscalaEVA45Min === undefined || postAnestStore.EscalaEVA45Min === null ? ' ' : postAnestStore.EscalaEVA45Min;
        // Escala de EVA Dolor 60 min
        let EVA60 = postAnestStore.EscalaEVA60Min === undefined || postAnestStore.EscalaEVA60Min === null ? ' ' : postAnestStore.EscalaEVA60Min;
        // Escala de EVA Dolor 90 min
        let EVA90 = postAnestStore.EscalaEVA90Min === undefined || postAnestStore.EscalaEVA90Min === null ? ' ' : postAnestStore.EscalaEVA90Min;
        // Escala de EVA Dolor 120 min
        let EVA120 = postAnestStore.EscalaEVA120Min === undefined || postAnestStore.EscalaEVA120Min === null ? ' ' : postAnestStore.EscalaEVA120Min;

        /*Alta de Recuperación*/        
        // Calificación Aldrete
        let calificacionAldrete = postAnestStore.CalificacionAldrete === undefined || postAnestStore.CalificacionAldrete === null ? ' ' : postAnestStore.CalificacionAldrete;
        // Observaciones Alta
        let observAlta = postAnestStore.ObservacionesAlta === undefined || postAnestStore.ObservacionesAlta === null ? ' ' : postAnestStore.ObservacionesAlta;
        let txtObservAlta = observAlta.length > 1000 ? observAlta.substring(0, 1000) + '...' : observAlta;      
        // Fecha Alta Recuperación
        let fechaAlta = postAnestStore.FechaAlta === undefined || postAnestStore.FechaAlta === null ? ' ' : postAnestStore.FechaAlta;
        // Hora Alta Recuperación
        let horaAlta = postAnestStore.HoraAlta === undefined || postAnestStore.HoraAlta === null ? ' ' : postAnestStore.HoraAlta;

        /***********************TRANS***********************/
        /*Balance Parcial*/
        // let balanceParcial = transAnestStore.balanceParcial === null ? [' '] : transAnestStore.balanceParcial.map(item => 
        //     item.balanceCx.map(balance => balance.horaBalance +'   '+ balance.ingresos +'   '+ balance.egresos)).flat();

        /*Datos de Medicamentos Agrupados*/
        let medicamentoAg = this.medicamentosAgrupados === null ? [' '] : this.medicamentosAgrupados.map(medicamento => medicamento.medicamentoN).flat();
        let bolo = this.medicamentosAgrupados === null ? [' '] : this.medicamentosAgrupados.map(medicamento => medicamento.bolo).flat();
        let unidadBolo = this.medicamentosAgrupados === null ? [' '] : this.medicamentosAgrupados.map(medicamento => medicamento.unidadBolo).flat();
        let infusion = this.medicamentosAgrupados === null ? [' '] : this.medicamentosAgrupados.map(medicamento => medicamento.infusion).flat();
        let unidadInfusion = this.medicamentosAgrupados === null ? [' '] : this.medicamentosAgrupados.map(medicamento => medicamento.unidadInfusion).flat();
        let total = this.medicamentosAgrupados === null ? [' '] : this.medicamentosAgrupados.map(medicamento => medicamento.total).flat();
        let unidadTotal = this.medicamentosAgrupados === null ? [' '] : this.medicamentosAgrupados.map(medicamento => medicamento.unidadTotal).flat();

        let tablaMedicamentosAgrupados = [];
        for (let i = 0; i < Math.max(medicamentoAg.length, bolo.length, unidadBolo.length, infusion.length, unidadInfusion.length, total.length, unidadTotal.length); i++) {
          tablaMedicamentosAgrupados.push([
            { text: i < medicamentoAg.length ? medicamentoAg[i] : '', style: 'SF', fontSize: 8, bold: true },            
            {text:[
              { text: i < bolo.length ? bolo[i] : '', style: 'SF', fontSize: 8, bold: true },
              { text: ' ', style: 'SF', fontSize: 8},
              { text: i < unidadBolo.length ? unidadBolo[i] : '', style: 'SF', fontSize: 8, bold: true },
            ]},
            {text:[
              { text: i < infusion.length ? infusion[i] : '', style: 'SF', fontSize: 8, bold: true },
              { text: ' ', style: 'SF', fontSize: 8},
              { text: i < unidadInfusion.length ? unidadInfusion[i] : '', style: 'SF', fontSize: 8, bold: true },
            ]},
            {text:[
              { text: i < total.length ? total[i] : '', style: 'SF', fontSize: 8, bold: true },
              { text: ' ', style: 'SF', fontSize: 8},
              { text: i < unidadTotal.length ? unidadTotal[i] : '', style: 'SF', fontSize: 8, bold: true },
            ]},
          ]);
        };

        /*Datos del Medicamento*/
        let listaMedicamentosTipo = transAnestStore.medicamentos === null ? [' '] : transAnestStore.medicamentos.map(item => 
            item.medicamentosCx.map(medicamento => medicamento.tipoMed)).flat();
        let tipoMed = listaMedicamentosTipo.slice(0,30);
        let listaMedicamentosMedi = transAnestStore.medicamentos === null ? [' '] : transAnestStore.medicamentos.map(item => 
            item.medicamentosCx.map(medicamento => medicamento.medicamento)).flat();
        let medicamento = listaMedicamentosMedi.slice(0,30);
        let listaMedicamentosDosis = transAnestStore.medicamentos === null ? [' '] : transAnestStore.medicamentos.map(item => 
            item.medicamentosCx.map(medicamento => (medicamento.dosisMed ?? ' '))).flat();
        let dosisMed = listaMedicamentosDosis.slice(0,30);
        let listaMedicamentosUnidad = transAnestStore.medicamentos === null ? [' '] : transAnestStore.medicamentos.map(item => 
            item.medicamentosCx.map(medicamento => (medicamento.unidadMed ?? ' '))).flat();
        let unidadMed = listaMedicamentosUnidad.slice(0,30);
        let listaMedicamentosVia = transAnestStore.medicamentos === null ? [' '] : transAnestStore.medicamentos.map(item => 
            item.medicamentosCx.map(medicamento => (medicamento.viaMed ?? ' '))).flat();
        let viaMed = listaMedicamentosVia.slice(0,30);
        let listaMedicamentosHoraIn = transAnestStore.medicamentos === null ? [' '] : transAnestStore.medicamentos.map(item => 
            item.medicamentosCx.map(medicamento => (medicamento.horaInicioMed ?? ' '))).flat();
        let horaInicio = listaMedicamentosHoraIn.slice(0,30);
        let listaMedicamentosHoraFi = transAnestStore.medicamentos === null ? [' '] : transAnestStore.medicamentos.map(item => 
            item.medicamentosCx.map(medicamento => (medicamento.horaFinalMed ?? ' '))).flat();
        let horaFinal = listaMedicamentosHoraFi.slice(0,30);

        let tablaMedicamentos = [];
        for (let i = 0; i < Math.max(tipoMed.length, medicamento.length, dosisMed.length, unidadMed.length, viaMed.length, horaInicio.length,horaFinal.length); i++) {
          tablaMedicamentos.push([
            { text: i < tipoMed.length ? tipoMed[i] : '', style: 'SF', fontSize: 8, bold: true },
            { text: i < medicamento.length ? medicamento[i] : '', style: 'SF', fontSize: 8, bold: true },
            {text:[
              { text: i < dosisMed.length ? dosisMed[i] : '', style: 'SF', fontSize: 8, bold: true },
              { text: ' ', style: 'SF', fontSize: 8},
              { text: i < unidadMed.length ? unidadMed[i] : '', style: 'SF', fontSize: 8, bold: true },
            ]},
            { text: i < viaMed.length ? viaMed[i] : '', style: 'SF', fontSize: 8, bold: true },
            { text: i < horaInicio.length ? horaInicio[i] : '', style: 'SF', fontSize: 8, bold: true },
            { text: i < horaFinal.length ? horaFinal[i] : '', style: 'SF', fontSize: 8, bold: true },
          ]);
        };

        /*Datos del Relevo*/        
        let listaRelevosHr = transAnestStore.relevos === null ? [' '] : transAnestStore.relevos.map(item=>
            item.relevoCx.map(relevo => relevo.horaRelevo)).flat();
        let hrRelevo = listaRelevosHr.slice(0,2);
        let listaRelevosObs = transAnestStore.relevos === null ? [' '] : transAnestStore.relevos.map(item=>
            item.relevoCx.map(relevo => (relevo.observacionesRel ?? ' '))).flat();            
        let obsRelevo = listaRelevosObs.slice(0,2);

        let tablaRelevos = [];
        for (let i = 0; i < Math.max(hrRelevo.length, obsRelevo.length); i++) {
            tablaRelevos.push([
                { text: i < hrRelevo.length ? hrRelevo[i] : '', style: 'SF', fontSize: 8, bold: true },
                { text: i < obsRelevo.length ? obsRelevo[i] : '', style: 'SF', fontSize: 8, bold: true }
            ]);
        };

        /*Datos del Evento Crítico*/
        let listaEventosHr = transAnestStore.eventos === null ? [' '] : transAnestStore.eventos.map(item=>
            item.evCriticoCx.map(evento => evento.horaEvento)).flat();
        let hrEvento = listaEventosHr.slice(0,5);
        let listaEventosDet = transAnestStore.eventos === null ? [' '] : transAnestStore.eventos.map(item=>
            item.evCriticoCx.map(evento => (evento.detalleEvento ?? ' '))).flat();
        let detalleEvento = listaEventosDet.slice(0,5);

        let tablaEventos = [];
        for (let i = 0; i < Math.max(hrEvento.length, detalleEvento.length); i++) {
            tablaEventos.push([
                { text: i < hrEvento.length ? hrEvento[i] : '', style: 'SF', fontSize: 8, bold: true },
                { text: i < detalleEvento.length ? detalleEvento[i] : '', style: 'SF', fontSize: 8, bold: true }
            ]);
        };

        /*Balance Hidrico*/
        // Solución Hartman
        let txtHartman = this.menuTrans.solHartman === '' || this.menuTrans.solHartman === null || this.menuTrans.solHartman === undefined ? '' : 'Sol. Hartman: '
        let hartman = this.menuTrans.solHartman === '' || this.menuTrans.solHartman === null || this.menuTrans.solHartman === undefined ? '' : this.menuTrans.solHartman+' ml, ';
        // Solución Fisiológica
        let txtSolFisiolo = this.menuTrans.solFisio === '' || this.menuTrans.solFisio === null || this.menuTrans.solFisio === undefined ? '' : 'Sol. Fisiológica: ';
        let solFisiolo = this.menuTrans.solFisio === '' || this.menuTrans.solFisio === null || this.menuTrans.solFisio === undefined ? '' : this.menuTrans.solFisio+' ml, ';
        // Glucosados
        let txtGlucosados = this.menuTrans.glucosados === '' || this.menuTrans.glucosados === null || this.menuTrans.glucosados === undefined ? '' : 'Glucosados: ';
        let glucosados = this.menuTrans.glucosados === '' || this.menuTrans.glucosados === null || this.menuTrans.glucosados === undefined ? '' : this.menuTrans.glucosados+' ml, ';
        // Gelatinas
        let txtGelatinas = this.menuTrans.gelatinas === '' || this.menuTrans.gelatinas === null || this.menuTrans.gelatinas === undefined ? '' : 'Gelatinas: ';
        let gelatinas = this.menuTrans.gelatinas === '' || this.menuTrans.gelatinas === null || this.menuTrans.gelatinas === undefined ? '' : this.menuTrans.gelatinas+' ml, ';
        // Almidones
        let txtAlmidones = this.menuTrans.almidones === '' || this.menuTrans.almidones === null || this.menuTrans.almidones === undefined ? '' : 'Almidones: ';
        let almidones = this.menuTrans.almidones === '' || this.menuTrans.almidones === null || this.menuTrans.almidones === undefined ? '' : this.menuTrans.almidones+' ml, ';
        // Albúminas
        let txtAlbuminas = this.menuTrans.albuminas === '' || this.menuTrans.albuminas === null || this.menuTrans.albuminas === undefined ? '' : 'Albúminas: ';
        let albuminas = this.menuTrans.albuminas === '' || this.menuTrans.albuminas === null || this.menuTrans.albuminas === undefined ? '' : this.menuTrans.albuminas+' ml, ';
        // Paquete Globular
        let txtPaqGlobular = this.menuTrans.paqGlobular === '' || this.menuTrans.paqGlobular === null || this.menuTrans.paqGlobular === undefined ? '' : 'Paquete Globular: ';
        let paqGlobular = this.menuTrans.paqGlobular === '' || this.menuTrans.paqGlobular === null || this.menuTrans.paqGlobular === undefined ? '' : this.menuTrans.paqGlobular+' ml, ';
        // Plasmas
        let txtPlasmas = this.menuTrans.plasmas === '' || this.menuTrans.plasmas === null || this.menuTrans.plasmas === undefined ? '' : 'Plasmas: ';
        let plasmas = this.menuTrans.plasmas === '' || this.menuTrans.plasmas === null || this.menuTrans.plasmas === undefined ? '' : this.menuTrans.plasmas+' ml, ';
        // Plaquetas
        let txtPlaquetas = this.menuTrans.plaquetas === '' || this.menuTrans.plaquetas === null || this.menuTrans.plaquetas === undefined ? '' : 'Plaquetas: ';
        let plaquetasIngreso = this.menuTrans.plaquetas === '' || this.menuTrans.plaquetas === null || this.menuTrans.plaquetas === undefined ? '' : this.menuTrans.plaquetas+' ml, ';
        // Crioprecipitados
        let txtCrioprecipitados = this.menuTrans.crioprecipitados === '' || this.menuTrans.crioprecipitados === null || this.menuTrans.crioprecipitados === undefined ? '' : 'Crioprecipitados: ';
        let crioprecipitados = this.menuTrans.crioprecipitados === '' || this.menuTrans.crioprecipitados === null || this.menuTrans.crioprecipitados === undefined ? '' : this.menuTrans.crioprecipitados+' ml, ';
        // Factor VII
        let txtFactorVII = this.menuTrans.factor_VII === '' || this.menuTrans.factor_VII === null || this.menuTrans.factor_VII === undefined ? '' : 'Factor VII: ';
        let factorVII = this.menuTrans.factor_VII === '' || this.menuTrans.factor_VII === null || this.menuTrans.factor_VII === undefined ? '' : this.menuTrans.factor_VII+' ml, ';
        // Factor VIII
        let txtFactorVIII = this.menuTrans.factor_VIII === '' || this.menuTrans.factor_VIII === null || this.menuTrans.factor_VIII === undefined ? '' : 'Factor VIII: ';
        let factorVIII = this.menuTrans.factor_VIII === '' || this.menuTrans.factor_VIII === null || this.menuTrans.factor_VIII === undefined ? '' : this.menuTrans.factor_VIII+' ml, ';
        // Otros Ingresos
        let txtOtrosIngresos = this.menuTrans.otrosIngresos === '' || this.menuTrans.otrosIngresos === null || this.menuTrans.otrosIngresos === undefined ? '' : 'Otros: ';
        let otrosIngreso = this.menuTrans.otrosIngresos === '' || this.menuTrans.otrosIngresos === null || this.menuTrans.otrosIngresos === undefined ? '' : this.menuTrans.otrosIngresos+' ml';

        // Liquidos de Ascitis
        let txtLiqAscitis = this.menuTrans.liqAscitis === '' || this.menuTrans.liqAscitis === null || this.menuTrans.liqAscitis === undefined ? '' : 'Liquídos de Ascitis: ';
        let liqAscitis = this.menuTrans.liqAscitis === '' || this.menuTrans.liqAscitis === null || this.menuTrans.liqAscitis === undefined ? '' : this.menuTrans.liqAscitis+' ml, ';
        // Sangrado Aproximado
        let txtSangradoAprox = this.menuTrans.sangradoAprox === '' || this.menuTrans.sangradoAprox === null || this.menuTrans.sangradoAprox === undefined ? '' : 'Sangrado Aprox.: ';
        let sangradoAprox = this.menuTrans.sangradoAprox === '' || this.menuTrans.sangradoAprox === null || this.menuTrans.sangradoAprox === undefined ? '' : this.menuTrans.sangradoAprox+' ml, ';
        // Uresis
        let txtUresis = this.menuTrans.uresis === '' || this.menuTrans.uresis === null || this.menuTrans.uresis === undefined ? '' : 'Uresis: ';
        let uresis = this.menuTrans.uresis === '' || this.menuTrans.uresis === null || this.menuTrans.uresis === undefined ? '' : this.menuTrans.uresis+' ml, ';
        // Exposición Quirúrgica
        let txtExpQuirurgica = this.menuTrans.expoQX === '' || this.menuTrans.expoQX === null || this.menuTrans.expoQX === undefined ? '' : 'Exposición Quirúrgica: ';
        let expQuirurgica = this.menuTrans.expoQX === '' || this.menuTrans.expoQX === null || this.menuTrans.expoQX === undefined ? '' : this.menuTrans.expoQX+' ml, ';
        // Requerimientos Basales
        let txtReqBasales = this.menuTrans.reqBasales === '' || this.menuTrans.reqBasales === null || this.menuTrans.reqBasales === undefined ? '' : 'Requerimientos Basales: ';
        let reqBasales = this.menuTrans.reqBasales === '' || this.menuTrans.reqBasales === null || this.menuTrans.reqBasales === undefined ? '' : this.menuTrans.reqBasales+' ml, ';
        // Ayuno
        let txtAyuno = this.menuTrans.ayuno === '' || this.menuTrans.ayuno === null || this.menuTrans.ayuno === undefined ? '' : 'Ayuno: ';
        let ayunoEgreso = this.menuTrans.ayuno === '' || this.menuTrans.ayuno === null || this.menuTrans.ayuno === undefined ? '' : this.menuTrans.ayuno+' ml, ';
        // Otros Egresos
        let txtOtrosEgresos = this.menuTrans.otrosEgresos === '' || this.menuTrans.otrosEgresos === null || this.menuTrans.otrosEgresos === undefined ? '' : 'Otros: ';
        let otrosEgresos = this.menuTrans.otrosEgresos === '' || this.menuTrans.otrosEgresos === null || this.menuTrans.otrosEgresos === undefined ? '' : this.menuTrans.otrosEgresos+' ml';
        // Balance Total
        let balanceTotal = this.menuTrans.balanceTotal === undefined || this.menuTrans.balanceTotal === null ? '' : this.menuTrans.balanceTotal+' ml';    

        /*Datos del Ventilador*/
        // Modo Ventilación
        let listaVentilacionModo = transAnestStore.datosVentilacion === null ? [' '] : transAnestStore.datosVentilacion.map(item=>
            item.datosVentilador.map(ventilador => ventilador.modosVentilacion)).flat();
        let modoVentilacion = listaVentilacionModo.slice(-1);
        // PEEP
        let listaVentilacionPEEP = transAnestStore.datosVentilacion === null ? [' '] : transAnestStore.datosVentilacion.map(item=>
            item.datosVentilador.map(ventilador => (ventilador.peep ?? ' '))).flat();
        let peep = listaVentilacionPEEP.slice(-1);
        // VT
        let listaVentilacionVT = transAnestStore.datosVentilacion === null ? [' '] : transAnestStore.datosVentilacion.map(item=>
            item.datosVentilador.map(ventilador => (ventilador.vt ?? ' '))).flat();
        let vt = listaVentilacionVT.slice(-1);
        // Frecuencia Respiratoria
        let listaVentilacionFR = transAnestStore.datosVentilacion === null ? [' '] : transAnestStore.datosVentilacion.map(item=>
            item.datosVentilador.map(ventilador => (ventilador.frecResp ?? ' '))).flat();
        let freResp = listaVentilacionFR.slice(-1);
        // I:E
        let listaVentilacionIE = transAnestStore.datosVentilacion === null ? [' '] : transAnestStore.datosVentilacion.map(item=>
            item.datosVentilador.map(ventilador => (ventilador.IE ?? ' '))).flat();
        let ie = listaVentilacionIE.slice(-1);
        // P. Límite
        let listaVentilacionPLimite = transAnestStore.datosVentilacion === null ? [' '] : transAnestStore.datosVentilacion.map(item=>
            item.datosVentilador.map(ventilador => (ventilador.PLimite ?? ' '))).flat();
        let pLimite = listaVentilacionPLimite.slice(-1);

        /*Tiempos Quirurgicos*/
        // QX IN
        let QXIN = this.menuTrans.ingresoQX === undefined || this.menuTrans.ingresoQX === null ? ' ' : this.menuTrans.ingresoQX;
        // ANES IN
        let ANESIN = this.menuTrans.inicioAn === undefined || this.menuTrans.inicioAn === null ? ' ' : this.menuTrans.inicioAn;
        // CX IN
        let CXIN = this.menuTrans.inicioCx === undefined || this.menuTrans.inicioCx === null ? ' ' : this.menuTrans.inicioCx;
        // CX OUT
        let CXOUT = this.menuTrans.finCx === undefined || this.menuTrans.finCx === null ? ' ' : this.menuTrans.finCx;
        // ANES OUT
        let ANESOUT = this.menuTrans.finAn === undefined || this.menuTrans.finAn === null ? ' ' : this.menuTrans.finAn;
        // QX OUT
        let QXOUT = this.menuTrans.egresoQx === undefined || this.menuTrans.egresoQx === null ? ' ' : this.menuTrans.egresoQx;

        let cirugiaTrans = preIdStore.NombreCirugia === undefined || preIdStore.NombreCirugia === null ? ' ' : preIdStore.NombreCirugia;
        let txtCirugiaTrans= cirugiaTrans.length > 60 ? cirugiaTrans.substring(0, 60) + '...' : cirugiaTrans;

        /*Grid Anestésico*/
        let datosGrid = this.saltoArreglo;
        let tablaDatosGrid = [];

        datosGrid.forEach(entry => {
          const columnData = [];
          // Agregar la Hora 
          columnData.push({ text: entry.horaGeneracion, style: 'SF', fontSize: 6, alignment:'center', margin: [0, 0, 0, 4] });
          // Agregar Signos Vítales
          entry.datos.forEach(item => {
            columnData.push({ text: item.valor ? item.valor : '-', style: 'SF', fontSize: 6, bold: true, alignment:'center', margin: [0, 0, 0, 4] });
          });
          tablaDatosGrid.push(columnData);
        });

        // Dividir el arreglo en partes más pequeñas
        let numColumnas = 26; // Número de columnas que se mostraran por página
        let columnasDatos = tablaDatosGrid.length > 0 ? [] : [[]];
        
        for (let i = 0; i < tablaDatosGrid.length; i += numColumnas) {
          columnasDatos.push(tablaDatosGrid.slice(i, i + numColumnas));
        }        
        
        // Construcción del PDF
        let docDefinition = {
          //Header
          header: {
            margin: [33, 10],
            image: 'data:image/png;base64,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',
            width: 120,
            alignment: 'left',                
          },
          content: [
            /*PRE*/
            //Primera Hoja
            {
              columns: [                
                {
                  width:'30%',
                  margin: [0, 20, 0, 0],
                    stack: [
                      // Nombre paciente
                      {
                        text:{text: 'Nombre del paciente:', font:'SF', fontSize: 10,}
                      },
                      {                        
                        text:{text: txtNomPaciente, font:'SF', fontSize: 10, bold:true,}
                      },
                      // Fecha de nacimiento
                      {
                        text: [
                          { text: '\nFecha de Nac: ', font: 'SF', fontSize: 8 },
                          { text: fechaNac, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Edad
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Edad: ', font: 'SF', fontSize: 8 },
                          { text: edad, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Sexo 
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Sexo: ', font: 'SF', fontSize: 8 },
                          { text: sexo, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // CURP 
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'CURP: ', font: 'SF', fontSize: 8 },
                          { text: curp, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // No. Habitación  
                      {
                        text: [
                          { text: '\nNo. Habitación: ', font: 'SF', fontSize: 8 },
                          { text: numHabitacion, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // No. Episodio  
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'No. de Episodio: ', font: 'SF', fontSize: 8 },
                          { text: numEpisodio, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // No. Expediente  
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'No. Expediente: ', font: 'SF', fontSize: 8 },
                          { text: numExp, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Fecha Ingreso  
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Fecha Ingreso: ', font: 'SF', fontSize: 8 },
                          { text: fechaIngreso, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                    ],
                },
                {
                  width:'30%',
                  margin: [0, 20, 0, 0],
                    stack: [
                      {
                        text:{text: 'DEMOGRAFÍA', font:'SF', fontSize: 8, bold:true,}
                      },
                      // Nacionalidad  
                      {
                        text: [
                          { text: '\nNacionalidad: ', font: 'SF', fontSize: 8 },
                          { text: nacionalidad, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Folio ID  
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Folio ID: ', font: 'SF', fontSize: 8 },
                          { text: folioId, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Estado de Nacimiento
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Estado de Nac: ', font: 'SF', fontSize: 8 },
                          { text: estNacimiento, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Residencia  
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Residencia: ', font: 'SF', fontSize: 8 },
                          { text: estResidencia, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Alcaldía  
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Alcaldía: ', font: 'SF', fontSize: 8 },
                          { text: alcaldia, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Colonia  
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Colonia: ', font: 'SF', fontSize: 8 },
                          { text: colonia, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Código Postal  
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Código Postal: ', font: 'SF', fontSize: 8 },
                          { text: codigoPostal, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      {
                        text:{text: '\nINFORMACIÓN CIRUGÍA', font:'SF', fontSize: 8, bold:true,}
                      },
                      // Diagnóstico  
                      {
                        text: [
                          { text: '\nDiagnóstico: ', font: 'SF', fontSize: 8 },
                          { text: txtDiagnostico, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Tipo de Cirugía  
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Tipo de Cirugía: ', font: 'SF', fontSize: 8 },
                          { text: tipoCirugia, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                    ]
                },
                {
                  width:'30%',
                  margin: [0, 20, 0, 0],
                    stack: [
                      // Cirujano
                      {
                        text:{ text: 'Cirujano: ', font: 'SF', fontSize: 8 },
                      },
                      {
                        text:{ text: txtNomCirujano, font: 'SF', fontSize: 8, bold:true },
                      },
                      // Anestesiólogo
                      {
                        text:{ text: 'Anestesiólogo: ', font: 'SF', fontSize: 8 },
                      },
                      {
                        text:{ text: txtAnestesiologo, font: 'SF', fontSize: 8, bold:true },
                      },
                      // Residente de Anestesia
                      {
                        text:{ text: 'Residente de Anestesia: ', font: 'SF', fontSize: 8 },
                      },
                      {
                        text:{ text: txtResidente, font: 'SF', fontSize: 8, bold:true },
                      },
                      // Anestesiólogo VPA
                      {
                        text:{ text: 'Anestesiólogo VPA: ', font: 'SF', fontSize: 8 },
                      },
                      {
                        text:{ text: txtAnestesiologoVPA, font: 'SF', fontSize: 8, bold:true },
                      },
                      // Fecha de Cirugía  
                      {
                        text: [
                          { text: '\nFecha de Cirugía: ', font: 'SF', fontSize: 8 },
                          { text: fechaCx, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Hora de Cirugía  
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Hora de Cirugía: ', font: 'SF', fontSize: 8 },
                          { text: horaCx, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },                      
                    ]                            
                },
              ],              
            },
            {
              columns: [
                {                  
                  width:'30%',
                  margin: [0, 10, 0, 0],
                    stack: [                    
                      {
                        text:{text: 'SIGNOS VITALES:', font:'SF', fontSize: 8, bold:true}
                      },                     
                      // Frecuencia Cardiáca  
                      {
                        text: [
                          { text: '\nFrecuencia Cardiáca: ', font: 'SF', fontSize: 8 },
                          { text: FC, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Frecuencia Respiratoria  
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [                          
                          { text: 'Frecuencia Respiratoria: ', font: 'SF', fontSize: 8 },
                          { text: FR, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },      
                      // Tensión Arterial  
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Tensión Arterial: ', font: 'SF', fontSize: 8 },
                          { text: tensionArterial, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Saturación de O2  
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Saturación de O2: ', font: 'SF', fontSize: 8 },
                          { text: SpO2, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Temperatura  
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Temperatura: ', font: 'SF', fontSize: 8 },
                          { text: temperatura, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      
                    ],
                },
                {                  
                  width:'70%',
                  margin: [0, 10, 0, 0],
                    stack: [      
                      // Cirugía Planeada
                      {
                        text:{ text: 'Cirugía Planeada: ', font: 'SF', fontSize: 8 },
                      },
                      {
                        text:{ text: txtCirugia, font: 'SF', fontSize: 8, bold:true },
                      },
                      // CIE-10  
                      {
                        text: [
                          { text: '\nCIE-10: ', font: 'SF', fontSize: 8 },
                          { text: CIE10, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // CIE-9
                      {
                        text: [
                          { text: '\nCIE-9: ', font: 'SF', fontSize: 8 },
                          { text: CIE9, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Antecedentes de Importancia para el procedimiento quirúrgico 
                      {
                        text:{ text: '\nAntecedentes de Importancia para el Procedimiento Quirúrgico: ', font: 'SF', fontSize: 8 },
                      },
                      {
                        text:{ text: txtAntecImportancia, font: 'SF', fontSize: 8, bold:true },
                      },
                    ],
                },
              ]
            },
            {
              columns: [
                {                                        
                  width:'50%',
                  margin: [0, 20, 0, 0],
                    stack: [
                      //  
                      {
                        text: [
                          { text: 'ANTECEDENTES', font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Ayuno  
                      {
                        text: [
                          { text: '\nHoras de Ayuno: ', font: 'SF', fontSize: 8 },
                          { text: ayuno, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Tabaquismo
                      {
                        text: [
                          { text: '\nTabaquismo: ', font: 'SF', fontSize: 8 },
                          { text: txtTabaqismo, font: 'SF', fontSize: 8, bold:true},
                        ],
                      },
                      // Etilismo
                      {
                        text: [
                          { text: '\nEtilismo: ', font: 'SF', fontSize: 8 },
                          { text: txtEtilismo, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Adicciones
                      {
                        text: [
                          { text: '\nAdicciones: ', font: 'SF', fontSize: 8 },
                          { text: txtAdicciones, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Inmunizaciones
                      {
                        text: [
                          { text: '\nInmunizaciones: ', font: 'SF', fontSize: 8 },
                          { text: txtInmunizaciones, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Alergias
                      {
                        text: [
                          { text: '\nAlergias: ', font: 'SF', fontSize: 8 },
                          { text: txtAlergias, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Quirúrgicos
                      {
                        text: [
                          { text: '\nQuirúrgicos: ', font: 'SF', fontSize: 8 },
                          { text: txtQuirurgicos, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Endocronológicos
                      {
                        text: [
                          { text: '\nEndocronológicos: ', font: 'SF', fontSize: 8 },
                          { text: txtEndocronologicos, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Urológicos
                      {
                        text: [
                          { text: '\nUrológicos: ', font: 'SF', fontSize: 8 },
                          { text: txtUrologicos, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Traumáticos
                      {
                        text: [
                          { text: '\nTraumáticos: ', font: 'SF', fontSize: 8 },
                          { text: txtTraumaticos, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Ortopédicos
                      {
                        text: [
                          { text: '\nOrtopédicos: ', font: 'SF', fontSize: 8 },
                          { text: txtOrtopedicos, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Transfusiones Previas
                      {
                        text: [
                          { text: '\nTransfusiones Previas: ', font: 'SF', fontSize: 8 },
                          { text: txtTransPrevias, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Estado Psiquico
                      {
                        text: [
                          { text: '\nEstado Psiquico: ', font: 'SF', fontSize: 8 },
                          { text: txtEstadoPsiquico, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Complicaciones Anestésicas Previas
                      {
                        text: [
                          { text: '\nComplicaciones Anestésicas Previas: ', font: 'SF', fontSize: 8 },
                          { text: txtCompliPrevias, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Medicación Actual
                      {
                        text: [
                          { text: '\nMedicación Actual: ', font: 'SF', fontSize: 8 },
                          { text: txtMedicaActual, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      
                    ]                    
                },
                {                                        
                  width:'50%',
                  margin: [0, 10, 0, 0],
                    stack: [
                      {
                        text: [
                          { text: '\nEXPLORACIÓN FÍSICA: ', font: 'SF', fontSize: 8, bold:true }
                        ],
                      },
                      // Peso  
                      {
                        text: [
                          { text: '\nPeso: ', font: 'SF', fontSize: 8 },
                          { text: peso, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Talla  
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Talla: ', font: 'SF', fontSize: 8 },
                          { text: talla, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // IMC  
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'IMC: ', font: 'SF', fontSize: 8 },
                          { text: IMC, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Cabeza  
                      {
                        text: [
                          { text: 'Cabeza: ', font: 'SF', fontSize: 8 },
                          { text: txtCabeza, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Cuello  
                      {
                        text: [
                          { text: ' \nCuello: ', font: 'SF', fontSize: 8 },
                          { text: txtCuello, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Respiratorio  
                      {
                        text: [
                          { text: ' \nRespiratorio: ', font: 'SF', fontSize: 8 },
                          { text: txtRespiratorio, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Cardiovascular  
                      {
                        text: [
                          { text: ' \nCardiovascular: ', font: 'SF', fontSize: 8 },
                          { text: txtCardiovascular, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Hipertensión Arterial  
                      {
                        text: [
                          { text: ' \nHipertensión Arterial: ', font: 'SF', fontSize: 8 },
                          { text: txtHipArterial, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Abdomen  
                      {
                        text: [
                          { text: ' \nAbdomen: ', font: 'SF', fontSize: 8 },
                          { text: txtAbdomen, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Genitourinario  
                      {
                        text: [
                          { text: ' \nGenitourinario: ', font: 'SF', fontSize: 8 },
                          { text: txtGenitourinario, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Músculo Esquelético  
                      {
                        text: [
                          { text: ' \nMúsculo Esquelético : ', font: 'SF', fontSize: 8 },
                          { text: txtMusEsq, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Neurológico  
                      {
                        text: [
                          { text: ' \nNeurológico: ', font: 'SF', fontSize: 8 },
                          { text: txtNeurologico, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Piel y Fanareas  
                      {
                        text: [
                          { text: ' \nPiel y Fanareas: ', font: 'SF', fontSize: 8 },
                          { text: txtPiel, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                    ]
                }
              ]
            },
            //Segunda Hoja
            {
              columns:[
                {
                  width: '30%',
                  margin: [0, 20, 0, 0],
                  pageBreak: 'before',
                    stack: [
                      // EXAMENES  
                      {
                        text: [
                          { text: 'RESULTADO DE EXÁMANES DE LABORATORIO', font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Fecha de Realización
                      {
                        text: [
                          { text: '\nFecha de Realización: ', font: 'SF', fontSize: 8 },
                          { text: fechaEstudios, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Grupo Sanguíneo
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Grupo Sanguíneo: ', font: 'SF', fontSize: 8 },
                          { text: grupoSanguineo, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Hemoglobina
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Hemoglobina: ', font: 'SF', fontSize: 8 },
                          { text: hemoglobina, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Hematocrito
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Hematocrito: ', font: 'SF', fontSize: 8 },
                          { text: hematocrito, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Plaquetas
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Plaquetas: ', font: 'SF', fontSize: 8 },
                          { text: plaquetas, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Leutocitos
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Leucocitos: ', font: 'SF', fontSize: 8 },
                          { text: leutocitos, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // TP
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'TP: ', font: 'SF', fontSize: 8 },
                          { text: TP, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // TT
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'TT: ', font: 'SF', fontSize: 8 },
                          { text: TT, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // TPT
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'TPT: ', font: 'SF', fontSize: 8 },
                          { text: TPT, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // INR
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'INR: ', font: 'SF', fontSize: 8 },
                          { text: INR, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Glucosa
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Glucosa: ', font: 'SF', fontSize: 8 },
                          { text: glucosa, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Creatinina
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Creatinina: ', font: 'SF', fontSize: 8 },
                          { text: creatinina, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Urea
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Urea: ', font: 'SF', fontSize: 8 },
                          { text: urea, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Sodio
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Sodio: ', font: 'SF', fontSize: 8 },
                          { text: sodio, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Potasio
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Potasio: ', font: 'SF', fontSize: 8 },
                          { text: potasio, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Cloro
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Cloro: ', font: 'SF', fontSize: 8 },
                          { text: cloro, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Calcio
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Calcio: ', font: 'SF', fontSize: 8 },
                          { text: calcio, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Magnesio
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Magnesio: ', font: 'SF', fontSize: 8 },
                          { text: magnesio, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Bilirrubina Directa
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Bilirrubina Directa: ', font: 'SF', fontSize: 8 },
                          { text: biliDirecta, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Bilirrubina Indirecta
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Bilirrubina Indirecta: ', font: 'SF', fontSize: 8 },
                          { text: biliIndirecta, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Bilirrubina Total
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Bilirrubina Total: ', font: 'SF', fontSize: 8 },
                          { text: biliTotal, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Lipasa
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Lipasa: ', font: 'SF', fontSize: 8 },
                          { text: lipasa, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Amilasa
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Amilasa: ', font: 'SF', fontSize: 8 },
                          { text: amilasa, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Otros
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Otros: ', font: 'SF', fontSize: 8 },
                          { text: otros, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },                      
                    ]
                },
                {
                  width: '30%',
                  margin: [0, 20, 0, 0],
                  pageBreak: 'before',
                    stack: [
                      // VÍA AÉREA
                      {
                        text: [
                          { text: 'VÍA AÉREA', font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Mallampati
                      {
                        text: [
                          { text: '\nMallampati: ', font: 'SF', fontSize: 8 },
                          { text: mallampati, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Patil-Aldreti
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Patil-Aldreti: ', font: 'SF', fontSize: 8 },
                          { text: patilAldreti, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Apertura Bucal
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Apertura Bucal: ', font: 'SF', fontSize: 8 },
                          { text: aperBucal, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Distancia Esternomentoniana
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Distancia Esternomentoniana: ', font: 'SF', fontSize: 8 },
                          { text: distanciaEster, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Protusión Mandibular
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Protusión Mandibular: ', font: 'SF', fontSize: 8 },
                          { text: protuMandibular, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // IPID
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'IPID: ', font: 'SF', fontSize: 8 },
                          { text: IPID, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Escala Glasgow
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Escala Glasgow: ', font: 'SF', fontSize: 8 },
                          { text: glasgow, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Escala NYHA
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Escala NYHA: ', font: 'SF', fontSize: 8 },
                          { text: NYHA, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Escala de Goldman
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Escala de Goldman: ', font: 'SF', fontSize: 8 },
                          { text: goldman, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Riesgo de Trombosis
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Riesgo de Trombosis: ', font: 'SF', fontSize: 8 },
                          { text: trombosis, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Clasificación ASA
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Clasificación ASA: ', font: 'SF', fontSize: 8 },
                          { text: ASA, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Tipo de Cirugía
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Tipo de Cirugía: ', font: 'SF', fontSize: 8 },
                          { text: tipoCir, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Riesgo Anéstesico Quirúrgico
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Riesgo Anéstesico Quirúrgico: ', font: 'SF', fontSize: 8 },
                          { text: riesgo, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },                      
                    ]
                },
                {
                  width: '40%',
                  margin: [0, 20, 0, 0],
                  pageBreak: 'before',
                    stack: [
                      // POSICIÓN Y CUIDADOS
                      {
                        text: [
                          { text: 'POSICIÓN Y CUIDADOS', font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Horas de Ayuno
                      {
                        text: [
                          { text: '\nHoras de Ayuno: ', font: 'SF', fontSize: 8 },
                          { text: hrsAyuno, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Acceso Venoso
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Acceso Venoso: ', font: 'SF', fontSize: 8 },
                          { text: accesoVenoso, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Posición del Paciente
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Posición del Paciente: ', font: 'SF', fontSize: 8 },
                          { text: posicionPaciente, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Posición de los Brazos
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Posición de los Brazos: ', font: 'SF', fontSize: 8 },
                          { text: posicionBrazos, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Aplicación de Torniquete
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Aplicación de Torniquete: ', font: 'SF', fontSize: 8 },
                          { text: aplicacionTorniquete, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Probable tiempo de Isquemia
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Probable Tiempo de Isquemia: ', font: 'SF', fontSize: 8 },
                          { text: tiempoIsquemia, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Protección de Ojos
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Protección de Ojos: ', font: 'SF', fontSize: 8 },
                          { text: proteccionOjos, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Protección de prominencias oseas
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Protección de Prominencias Oseas: ', font: 'SF', fontSize: 8 },
                          { text: proteccionProminencias, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Técnica Anéstesica
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Técnica Anéstesica: ', font: 'SF', fontSize: 8 },
                          { text: tecnicaAnestesica, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Premedicación
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Premedicación: ', font: 'SF', fontSize: 8 },
                          { text: txtPremedicacion, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Monitoreo
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Monitoreo: ', font: 'SF', fontSize: 8 },
                          { text: txtMonitoreo, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },                      

                      // ESTUDIOS  
                      {
                        margin: [0, 20, 0, 0],
                        text: [
                          { text: 'ESTUDIOS', font: 'SF', fontSize: 8, bold:true},
                        ],
                      },
                      // Estudio
                      {
                        text: [
                          { text: '\nEstudio:', font: 'SF', fontSize: 8 },
                        ],                        
                      },
                      {
                        ul: estudios.map(estudio => ({ text: estudio })),font: 'SF', fontSize: 8, bold:true
                      },                      
                    ]
                }
              ]
            },
            {
              columns:[
                {
                  width: '33%',
                  margin: [0, 25, 0, 0],
                    stack: [
                      // ANESTESIA GENERAL
                      {
                        text: [
                          { text: 'ANESTESIA GENERAL', font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Inducción
                      {                        
                        text: [
                          { text: '\nInducción: ', font: 'SF', fontSize: 8 },
                          { text: induccion, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Tubo
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Tubo: ', font: 'SF', fontSize: 8 },
                          { text: tubo, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Número de Tubo
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Número de Tubo: ', font: 'SF', fontSize: 8 },
                          { text: numeroTubo, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Tipo de Canula
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Tipo de Canula: ', font: 'SF', fontSize: 8 },
                          { text: tipoCanula, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Globo
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Globo: ', font: 'SF', fontSize: 8 },
                          { text: globo, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Presión
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Presión: ', font: 'SF', fontSize: 8 },
                          { text: presion, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Probable Intubación Dificil
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Probable Intubación Difícil: ', font: 'SF', fontSize: 8 },
                          { text: txtIntubacion, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Dispositivos supraglóticos
                      {
                        text: [
                          { text: '\nDispositivos supraglóticos', font: 'SF', fontSize: 8},
                        ],
                      },
                      // Calibre
                      {
                        text: [
                          { text: '\nCalibre: ', font: 'SF', fontSize: 8 },
                          { text: calibre, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Probable Intubación Dificil
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Complicaciones: ', font: 'SF', fontSize: 8 },
                          { text: txtComplicacionesCal, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Otros Dispositivos
                      {
                        text: [
                          { text: '\nUso de Otros Dispositivos: ', font: 'SF', fontSize: 8 },
                          { text: txtOtrosDispositivos, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },                      
                    ]
                },
                {
                  width: '33%',
                  margin: [0, 25, 0, 0],
                    stack: [
                      // ANESTESIA REGIONAL  
                      {
                        text: [
                          { text: 'ANESTESIA REGIONAL', font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      {
                        text: [
                          { text: '\nBloqueo Neuro-Axial', font: 'SF', fontSize: 8},
                        ],
                      },
                      // Tipo
                      {
                        text: [
                          { text: '\nTipo: ', font: 'SF', fontSize: 8 },
                          { text: tipoBloqueo, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Tipo Aguja
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Tipo Aguja: ', font: 'SF', fontSize: 8 },
                          { text: tipoAguja, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Nivel
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Nivel: ', font: 'SF', fontSize: 8 },
                          { text: nivel, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Calibre Aguja
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Nivel: ', font: 'SF', fontSize: 8 },
                          { text: calibreAguja, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Orientación Cateter
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Cateter: ', font: 'SF', fontSize: 8 },
                          { text: orientacionCateter, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Probables Dificultades Técnicas
                      {
                        margin: [0, 4, 0, 0],
                        text: [
                          { text: 'Probables Dificultades Técnicas: ', font: 'SF', fontSize: 8 },
                          { text: txtComplicacionesBNA, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Bloqueo Plexo', font: 'SF', fontSize: 8},
                        ],
                      },
                      // Sitio
                      {
                        text: [
                          { text: '\nSitio: ', font: 'SF', fontSize: 8 },
                          { text: sitioPlexo, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Opción
                      {
                        margin:[0, 2.5, 0, 0],
                        text: [
                          { text: 'Opcion: ', font: 'SF', fontSize: 8 },
                          { text: opcionPlexo, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Especificar Sitio Plexo
                      {
                        margin:[0, 2.5, 0, 0],
                        text: [
                          { text: 'Especificar: ', font: 'SF', fontSize: 8 },
                          { text: txtEspecificarSitio, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Anestesico Utilizado
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Anestésico utilizado: ', font: 'SF', fontSize: 8 },
                          { text: anestesico, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Especificar
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Especificar: ', font: 'SF', fontSize: 8 },
                          { text: txtEspecificarAnestesico, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Dificultades Técnicas
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Probables Dificultades Técnicas: ', font: 'SF', fontSize: 8 },
                          { text: txtDificultadesPlexo, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      {
                        margin:[0, 4, 0, 0],
                        text: [
                          { text: 'Equipo de Apoyo', font: 'SF', fontSize: 8},
                        ],
                      },
                      // Ultrasonido
                      {
                        text: [
                          { text: '\nUltrasonido: ', font: 'SF', fontSize: 8 },
                          { text: txtUltrasonido, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Neuroestimulador
                      {
                        margin:[0, 2.5, 0, 0],
                        text: [
                          { text: 'Neuroestimulador: ', font: 'SF', fontSize: 8 },
                          { text: txtNeuroestimulador, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Complicaciones Equipo Apoyo
                      {
                        margin:[0, 2.5, 0, 0],
                        text: [
                          { text: 'Complicaciones: ', font: 'SF', fontSize: 8 },
                          { text: txtComplicacionesEquipo, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                    ]
                },
                {
                  width: '34%',
                  margin: [0, 25, 0, 0],
                    stack: [
                      // SEDACIÓN  
                      {
                        text: [
                          { text: 'SEDACIÓN', font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Vía
                      {
                        text: [
                          { text: '\nVía: ', font: 'SF', fontSize: 8 },
                          { text: viaSedacion, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Opción
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Opción: ', font: 'SF', fontSize: 8 },
                          { text: opcionSedacion, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Medicamentos Utilizados
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Medicamentos Utilizados: ', font: 'SF', fontSize: 8 },
                          { text: txtMedicaSedacion, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Observaciones
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Observaciones: ', font: 'SF', fontSize: 8 },
                          { text: txtObserSedacion, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                       // ANESTESIA LOCAL  
                      {
                        margin: [0, 20, 0, 0],
                        text: [
                          { text: 'ANESTESIA LOCAL', font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Vía
                      {
                        text: [
                          { text: '\nSitio de la Anestesia: ', font: 'SF', fontSize: 8 },
                          { text: sitioLocal, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Anéstesico Utilizado
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Anéstesico Utilizado: ', font: 'SF', fontSize: 8 },
                          { text: anestesicoLocal, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Especificar
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          { text: 'Especificar: ', font: 'SF', fontSize: 8 },
                          { text: txtEspecifLocal, font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                    ]
                }
              ]
            },
            //Tercera Hoja
            {
              margin: [0, 20 ,0 ,0],
              pageBreak: 'before',
                stack: [
                  {
                    text: [
                      { text: 'NOTA PREANÉSTESICA', font: 'SF', fontSize: 8, bold:true },
                    ],
                  },
                  // Nota Pre Anéstesica
                  {
                    text: [
                      { text: txtNotaPre, font: 'SF', fontSize: 8, bold:true },
                    ],
                  },
                ]
            },            
            /*TRANS*/            
            {              
              pageOrientation: 'landscape', // Orientación Horizontal
              pageBreak: 'before',
              columns:[
                {
                  width: '20%',
                  margin: [0, 10, 0, 0],
                    stack:[
                      /*NOTA TRANS-ANESTÉSICA*/
                      {
                        text: [
                          {text: 'Nombre del Paciente: ', font: 'SF', fontSize: 8},
                          {text: nomPaciente, font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      {
                        text: [
                          {text: '\nNo. Expediente: ', font: 'SF', fontSize: 8},
                          {text: numExp, font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          {text: 'Peso: ', font: 'SF', fontSize: 8},
                          {text: peso, font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          {text: 'Talla: ', font: 'SF', fontSize: 8},
                          {text: talla, font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          {text: 'Edad: ', font: 'SF', fontSize: 8},
                          {text: edad, font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          {text: 'Cirugía: ', font: 'SF', fontSize: 8},
                          {text: txtCirugiaTrans, font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      // Tiempos Quirúrgicos 
                      {
                        text: [
                          {text: '\nQX IN: ', font: 'SF', fontSize: 8},
                          {text: QXIN, font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          {text: 'ANES IN: ', font: 'SF', fontSize: 8},
                          {text: ANESIN, font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          {text: 'CX IN: ', font: 'SF', fontSize: 8},
                          {text: CXIN, font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          {text: 'ANES OUT: ', font: 'SF', fontSize: 8},
                          {text: ANESOUT, font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          {text: 'CX OUT: ', font: 'SF', fontSize: 8},
                          {text: CXOUT, font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          {text: 'QX OUT: ', font: 'SF', fontSize: 8},
                          {text: QXOUT, font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      // Datos Ventilador
                      {
                        text: [
                          {text: '\nDATOS DEL VENTILADOR', font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          {text: 'Modo: ', font: 'SF', fontSize: 8},
                          {text: modoVentilacion[0], font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          {text: 'PEEP: ', font: 'SF', fontSize: 8},
                          {text: peep[0], font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          {text: 'VT: ', font: 'SF', fontSize: 8},
                          {text: vt[0], font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          {text: 'Frec. Resp.: ', font: 'SF', fontSize: 8},
                          {text: freResp[0], font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          {text: 'I:E: ', font: 'SF', fontSize: 8},
                          {text: ie[0], font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          {text: 'P. Límite: ', font: 'SF', fontSize: 8},
                          {text: pLimite[0], font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                    ]
                },
                // Tabla Grid Anéstesico.
                {
                  width: 'auto',
                  margin: [0, 20, 0, 0],
                    stack:[
                      {
                        table:{
                          headerRows: 1,
                          body: [
                            [{text:"Hora"}],
                            [{text:"FC"}],
                            [{text:"Pulso"}],
                            [{text:"PAS"}],
                            [{text:"PAD"}],
                            [{text:"PAM"}],
                            [{text:"SpO2"}],
                            [{text:"EtCO2"}],
                            [{text:"Temp1"}],
                            [{text:"Temp2"}],
                            [{text:"PVC"}],
                            [{text:"PAS_IN"}],
                            [{text:"PAD_IN"}],
                            [{text:"PAM_IN"}],
                            [{text:"FiCO2"}],
                            [{text:"FR"}],
                          ]
                        }, 
                        layout: 'noBorders', 
                        font: 'SF', 
                        fontSize:6
                      },
                    ]
                },
                {
                  width: 'auto',
                  margin: [0, 20, 0, 0],
                    stack:[                      
                      {
                        table:{
                          headerRows: 1,                      
                          body:[
                            columnasDatos[0] 
                          ]
                        },
                        layout: 'noBorders',
                        font: 'SF',
                        fontSize: 6,
                      }
                    ],
                }
              ],              
            },            
            {
              columns:[
                {
                  width: '20%',
                  margin: [0, 0, 0, 0],
                    stack:[

                    ]
                },
                {
                  width: '80%',
                  margin: [0, 0, 0, 0],
                    stack:[
                      {
                        text:[
                          {text: 'El Paciente de la Sala Quirúrgica Pasa a: ', font: 'SF', fontSize: 8},
                          {text: pacientePasa, font: 'SF', fontSize: 8, bold: true}
                        ]
                      }
                    ]
                }
              ]
            },
            // Agregar cada parte de tablaDatosGrid en una página nueva
            ...columnasDatos.slice(1).map((columna) => ({
              pageBreak: 'before',
              columns:[
                {
                  width: '20%',
                  margin: [0, 5, 0, 0],
                    stack:[
                      /*NOTA TRANS-ANESTÉSICA*/
                      {
                        text: [
                          {text: 'Nombre del Paciente: ', font: 'SF', fontSize: 8},
                          {text: nomPaciente, font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      {
                        text: [
                          {text: '\nNo. Expediente: ', font: 'SF', fontSize: 8},
                          {text: numExp, font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          {text: 'Peso: ', font: 'SF', fontSize: 8},
                          {text: peso, font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          {text: 'Talla: ', font: 'SF', fontSize: 8},
                          {text: talla, font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          {text: 'Edad: ', font: 'SF', fontSize: 8},
                          {text: edad, font: 'SF', fontSize: 8, bold:true},
                        ]
                      },
                      {
                        margin: [0, 2.5, 0, 0],
                        text: [
                          {text: 'Cirugía: ', font: 'SF', fontSize: 8},
                          {text: cirugia, font: 'SF', fontSize: 8, bold:true},
                        ]
                      },                    
                    ],
                },
                // Tabla Grid Anéstesico.
                {
                  width: 'auto',
                  margin: [0, 20, 0, 0],
                    stack:[
                      {
                        table:{
                          headerRows: 1,
                          body: [
                            [{text:"Hora"}],
                            [{text:"FC"}],
                            [{text:"Pulso"}],
                            [{text:"PAS"}],
                            [{text:"PAD"}],
                            [{text:"PAM"}],
                            [{text:"SpO2"}],
                            [{text:"EtCO2"}],
                            [{text:"Temp1"}],
                            [{text:"Temp2"}],
                            [{text:"PVC"}],
                            [{text:"PAS_IN"}],
                            [{text:"PAD_IN"}],
                            [{text:"PAM_IN"}],
                            [{text:"FiCO2"}],
                            [{text:"FR"}],
                          ]
                        }, 
                        layout: 'noBorders', 
                        font: 'SF', 
                        fontSize:6
                      },
                    ]
                },
                {
                  width: 'auto',
                  margin: [0, 20, 0, 0],
                  table: {
                    headerRows: 1,
                    body: [columna]
                  },
                  layout: 'noBorders',
                  font: 'SF', 
                  fontSize: 6,                    
                },
              ],                
            })),                                                         
            // Grafica            
          ],        
          styles:{
            normal:{
              font:'SF',
              fontSize: 8
            },
            bold:{
              font:'SF',
              fontSize: 8,
              bold: true
            }
          }
        };

        let chartContainer = this.$refs.chartContainer;

        let crearPDF = [];

        // Agregar gráfica si no tiene datos
        let chartImage = await this.convertirGrafica();
        if(this.chartElements.length === 0){
          crearPDF.push(
            {
              pageOrientation: 'landscape',
              pageBreak: 'before',
              columns:[
                { 
                  margin: [0, 20, 0, 0],
                  stack:[
                    {                       
                      //Carga de las gráficas
                      text: [{text: 'Nombre del Paciente: ', font: 'SF', fontSize: 8},{text: nomPaciente, font: 'SF', fontSize: 8, bold:true},
                                    {text: '     No. Expediente: ', font: 'SF', fontSize: 8},{text: numExp, font: 'SF', fontSize: 8, bold:true}],
                      
                    },
                    {
                      text: [{text: 'Peso: ', font: 'SF', fontSize: 8},{text: peso, font: 'SF', fontSize: 8, bold:true},
                            {text: '     Talla: ', font: 'SF', fontSize: 8},{text: talla, font: 'SF', fontSize: 8, bold:true},
                            {text: '     Edad: ', font: 'SF', fontSize: 8},{text: edad, font: 'SF', fontSize: 8, bold:true},
                            {text: '     Cirugía: ', font: 'SF', fontSize: 8},{text: txtCirugiaTrans, font: 'SF', fontSize: 8, bold:true}],
                    },
                    {
                      text: [{text: '\n', font: 'SF', fontSize: 8}]
                    },
                    {
                      image: chartImage, width:750
                    }
                  ]
                }
              ]
            },
          )
        };

        // Iterar a través de las gráficas y convertirlas a imágenes
        for (let i = 0; i < this.chartElements.length; i++) {
          let chart = this.chartElements[i];
          let canvas = chart.canvas;
          
          // Utilizar html2canvas para convertir el canvas de la gráfica en una imagen base64
          let imageDataUrl = await html2canvas(canvas).then(canvas => canvas.toDataURL('image/png'));
                                  
          // Agregar la imagen base64 al array
          crearPDF.push(
            {
              pageOrientation: 'landscape',
              pageBreak: 'before',
              columns:[
                { 
                  margin: [0, 20, 0, 0],
                  stack:[
                    {                       
                      //Carga de las gráficas
                      text: [{text: 'Nombre del Paciente: ', font: 'SF', fontSize: 8},{text: nomPaciente, font: 'SF', fontSize: 8, bold:true},
                                    {text: '     No. Expediente: ', font: 'SF', fontSize: 8},{text: numExp, font: 'SF', fontSize: 8, bold:true}],
                      
                    },
                    {
                      text: [{text: 'Peso: ', font: 'SF', fontSize: 8},{text: peso, font: 'SF', fontSize: 8, bold:true},
                            {text: '     Talla: ', font: 'SF', fontSize: 8},{text: talla, font: 'SF', fontSize: 8, bold:true},
                            {text: '     Edad: ', font: 'SF', fontSize: 8},{text: edad, font: 'SF', fontSize: 8, bold:true},
                            {text: '     Cirugía: ', font: 'SF', fontSize: 8},{text: txtCirugiaTrans, font: 'SF', fontSize: 8, bold:true}],
                    },
                    {
                      text: [{text: '\n', font: 'SF', fontSize: 8}]
                    },
                    {
                      image: imageDataUrl, width:750
                    }
                  ]
                }
              ]
            },
          )
        };

        // Lista Medicamentos/Balance Hídrico
        crearPDF.push(
          {
            pageOrientation: 'landscape', // Orientación Horizontal
            pageBreak: 'before',
            columns:[
              {
                margin: [0, 10, 0, 0],
                stack: [
                  {
                      text: [
                        { text: 'BALANCE HÍDRICO', font: 'SF', fontSize: 8, bold:true },
                      ],
                    },
                ]
              }
            ]
          },
          //Balance Hídrico Parcial
          {
            columns:[
              {
                margin: [0, 5, 0, 0],
                  width: '8%',
                  table: {
                    widths: ['*'],
                    body: [                  
                      [{ text: 'Hora', font: 'SF', fontSize: 8 }],
                      [{ text: 'Ingresos', font: 'SF', fontSize: 8 }],
                      [{ text: 'Egresos', font: 'SF', fontSize: 8 }],
                      [{ text: 'Balance total', font: 'SF', fontSize: 8}],
                    ]
                  }, font: 'SF', fontSize: 8
              },
              {
                margin: [0, 5, 0, 0],
                table: {
                  body: [
                    // Hora                      
                    transAnestStore.balanceParcial === null ? [' '] : transAnestStore.balanceParcial[0].balancesParciales.map(balance => balance.horaBalance),
                    // Ingresos
                    transAnestStore.balanceParcial === null ? [' '] : transAnestStore.balanceParcial[0].balancesParciales.map(balance => balance.ingresos),
                    // Egresos
                    transAnestStore.balanceParcial === null ? [' '] : transAnestStore.balanceParcial[0].balancesParciales.map(balance => balance.egresos),
                    // Balance Total
                    transAnestStore.balanceParcial === null ? [' '] : transAnestStore.balanceParcial[0].balancesParciales.map(balance => balance.balanceP)
                  ]
                }, font: 'SF', fontSize: 8, bold: true
              }
            ]
          },  
          {            
            columns:[
              {
                margin: [0, 10, 0, 0],
                height:'75%',
                stack:[
                  // Medicamentos
                  {
                    table: {
                      widths: ['60%', '40%'],
                      body: [
                        [
                          {text: 'REGISTRO DE MEDICAMENTOS', font: 'SF', fontSize: 8, bold:true, colSpan:2}, 
                          {}
                        ],
                        [
                          [
                            {
                              table: {
                                widths: [30, '*', 65, 95, 40, 40],
                                body: [
                                  [
                                    {text: 'Tipo', style: 'SF', fontSize: 8}, 
                                    {text: 'Medicamento', style: 'SF', fontSize:8},
                                    {text: 'Dosis', style: 'SF', fontSize:8},
                                    {text: 'Vía', style: 'SF', fontSize:8},
                                    {text: 'Hora Inicio', style: 'SF', fontSize:8},
                                    {text: 'Hora Final', style: 'SF', fontSize:8},
                                  ],
                                  ...tablaMedicamentos
                                ]
                              },
                              layout: 'noBorders',
                              dontBreakRows: true
                            },                                
                          ],                              
                          [
                            [
                              {
                                table: {
                                  headerRows: 1,
                                  widths: [25, '*'],
                                  body: [
                                    [
                                      '',
                                      {text: 'EVENTOS CRÍTICOS', style: 'SF', fontSize: 8, bold:true},
                                    ],
                                    [
                                      {text: 'Hora', style: 'SF', fontSize: 8}, 
                                      {text: 'Observaciones', style: 'SF', fontSize:8,}
                                    ],
                                    ...tablaEventos                             
                                  ]
                                },                                    
                                layout: 'headerLineOnly',
                              },
                              [
                                {
                                  margin:[0, 10, 0, 0],
                                  table: {
                                    headerRows: 1,
                                    widths: [25, '*'],
                                    body: [
                                      [
                                        '',
                                        {text: 'RELEVOS', style: 'SF', fontSize: 8, bold:true}
                                      ],
                                      [
                                        {text: 'Hora', style: 'SF', fontSize: 8}, 
                                        {text: 'Observaciones', style: 'SF', fontSize:8,}
                                      ],
                                      ...tablaRelevos
                                    ]
                                  },
                                  layout: 'headerLineOnly'
                                },
                              ]
                            ],                                
                          ],
                        ],
                      ]
                    }, font: 'SF', fontSize: 8
                  },
                ]
              }
            ]
          },      
          {
            columns:[
              {
                margin: [0, 10, 0, 0],
                stack: [
                  {
                      text: [
                        { text: 'SUMATORIA DE MEDICAMENTOS', font: 'SF', fontSize: 8, bold:true },
                      ],
                    },
                ]
              }
            ]
          },  
          // Crear la tabla de transAnestStore.medicamentosAgrupados
          {
            columns:[
              {
                margin: [0, 5, 0, 0],
                stack: [
                  {                    
                    table: {
                      widths: ['*', '*', '*', '*'],
                      body: [
                        [
                          {text: 'Medicamento', style: 'SF', fontSize: 8}, 
                          {text: 'Bolo', style: 'SF', fontSize:8},
                          {text: 'Infusión', style: 'SF', fontSize:8},
                          {text: 'Total', style: 'SF', fontSize:8},
                        ],
                        ...tablaMedicamentosAgrupados
                      ]
                    }, font: 'SF', fontSize: 8,
                    dontBreakRows: true                               
                  },
                ]
              }
            ]
          },
        )

        /*POST*/
        crearPDF.push(
          {
            pageOrientation: 'portrait',
            pageBreak: 'before',
            columns:[
              { 
                width: '100%',
                margin: [0, 20, 0, 0],
                  stack: [
                    /*NOTA POST-ANESTÉSICA*/
                    /*NOTA DE EVALUACIÓN UCPA*/
                    {
                      text: [
                        { text: 'NOTA DE EVALUACIÓN UCP', font: 'SF', fontSize: 8},
                      ],
                    },
                    {
                      text: [
                        { text: txtNotaUCPA, font: 'SF', fontSize: 8, bold:true },
                      ],
                    },
                    /*ALDRETE DE RECUPERACIÓN*/
                    {
                      margin: [0, 10, 0, 0],
                      text: [
                        { text: 'ALDRETE DE RECUPERACIÓN', font: 'SF', fontSize: 8, bold:true},
                      ]
                    },
                    {
                      margin: [0, 10, 0, 0],
                      table: {
                        widths: ['20%', '*', '*', '*', '*', '*', '*', '*'],
                        body: [
                          ['Criterio: ', 'Ingreso', '15 min', '30 min', '45 min', '60 min', '90 min', '120 min'],
                          ['Frecuencia Cardiáca', {text: FCIngreso, style: 'bold'}, {text: FC15, style: 'bold'}, {text: FC30, style: 'bold'}, {text: FC45, style: 'bold'}, {text: FC60, style: 'bold'}, {text: FC90, style: 'bold'}, {text: FC120, style: 'bold'}],
                          ['Frecuencia Respiratoria', {text: FRIngreso, style: 'bold'}, {text: FR15, style: 'bold'}, {text: FR30, style: 'bold'}, {text: FR45, style: 'bold'}, {text: FR60, style: 'bold'}, {text: FR90, style: 'bold'}, {text: FR120, style: 'bold'}],
                          ['Tensión Arterial', {text: tensionIngreso, style: 'bold'}, {text: tension15, style: 'bold'}, {text: tension30, style: 'bold'}, {text: tension45, style: 'bold'}, {text: tension60, style: 'bold'}, {text: tension90, style: 'bold'}, {text: tension120, style: 'bold'}],
                          ['Coloración', {text: coloracionIngreso, style: 'bold'}, {text: coloracion15, style: 'bold'}, {text: coloracion30, style: 'bold'}, {text: coloracion45, style: 'bold'}, {text: coloracion60, style: 'bold'}, {text: coloracion90, style: 'bold'}, {text: coloracion120, style: 'bold'}],                          
                          ['Actividad Muscular' , {text: actividadIngreso, style: 'bold'}, {text: actividad15, style: 'bold'}, {text: actividad30, style: 'bold'}, {text: actividad45, style: 'bold'}, {text: actividad60, style: 'bold'}, {text: actividad90, style: 'bold'}, {text: actividad120, style: 'bold'}],
                          ['Respiración', {text: respiracionIngreso, style: 'bold'}, {text: respiracion15, style: 'bold'}, {text: respiracion30, style: 'bold'}, {text: respiracion45, style: 'bold'}, {text: respiracion60, style: 'bold'}, {text: respiracion90, style: 'bold'}, {text: respiracion120, style: 'bold'}],
                          ['Circulación' , {text: circulacionIngreso, style: 'bold'}, {text: circulacion15, style: 'bold'}, {text: circulacion30, style: 'bold'}, {text: circulacion45, style: 'bold'}, {text: circulacion60, style: 'bold'}, {text: circulacion90, style: 'bold'}, {text: circulacion120, style: 'bold'}],                          
                          ['Estado de Conciencia', {text: concienciaIngreso, style: 'bold'}, {text: conciencia15, style: 'bold'}, {text: conciencia30, style: 'bold'}, {text: conciencia45, style: 'bold'}, {text: conciencia60, style: 'bold'}, {text: conciencia90, style: 'bold'}, {text: conciencia120, style: 'bold'}],
                          ['Saturación de O2', {text: saturacionIngreso, style: 'bold'}, {text: saturacion15, style: 'bold'}, {text: saturacion30, style: 'bold'}, {text: saturacion45, style: 'bold'}, {text: saturacion60, style: 'bold'}, {text: saturacion90, style: 'bold'}, {text: saturacion120, style: 'bold'}],
                          ['Bromage', {text: bromageIngreso, style: 'bold'}, {text: bromage15, style: 'bold'}, {text: bromage30, style: 'bold'}, {text: bromage45, style: 'bold'}, {text: bromage60, style: 'bold'}, {text: bromage90, style: 'bold'}, {text: bromage120, style: 'bold'}],
                          ['Nauseas/Vómito', {text: nauseasIngreso, style: 'bold'}, {text: nauseas15, style: 'bold'}, {text: nauseas30, style: 'bold'}, {text: nauseas45, style: 'bold'}, {text: nauseas60, style: 'bold'}, {text: nauseas90, style: 'bold'}, {text: nauseas120, style: 'bold'}],
                          ['Escala de EVA Dolor', {text: EVAIngreso, style: 'bold'}, {text: EVA15, style: 'bold'}, {text: EVA30, style: 'bold'}, {text: EVA45, style: 'bold'}, {text: EVA60, style: 'bold'}, {text: EVA90, style: 'bold'}, {text: EVA120, style: 'bold'}],
                        ]
                      }, font: 'SF', fontSize: 8
                    },
                    {
                      margin: [0, 10, 0, 0],
                      table: {
                        widths: ['20%', '*', '*', '*', '*', '*', '*', '*'],
                        body: [
                          ['Criterio de Aldrete: ', '0 min', '15 min', '30 min', '45 min', '60 min', '90 min', '120 min'],
                          [' ', {text: aldreteIngreso, style: 'bold'}, {text: aldrete15, style: 'bold'}, {text: aldrete30, style: 'bold'}, {text: aldrete45, style: 'bold'}, {text: aldrete60, style: 'bold'}, {text: aldrete90, style: 'bold'}, {text: aldrete120, style: 'bold'}],                          
                        ]
                      }, font: 'SF', fontSize: 8
                    },               
                  ]
              }
            ]
          },
          {
            columns:[
              {
                width: '70%',
                margin: [0, 10, 0, 0],
                  stack: [
                    /*ALTA DE RECUPERACIÓN*/
                    {
                      text:[
                        {text: 'ALTA DE RECUPERACIÓN', font:'SF', fontSize:8, bold:true}
                      ],
                    },
                    // Calificación de Aldrete
                    {
                      text: [
                        { text: '\nCalificación de Aldrete: ', font: 'SF', fontSize: 8 },
                        { text: calificacionAldrete, font: 'SF', fontSize: 8, bold:true },
                      ],
                    },
                    // Nombre del Médico Anestesiólogo
                    {
                      margin: [0, 2.5, 0, 0],
                      text: [
                        { text: 'Nombre del Médico Anestesiólogo: ', font: 'SF', fontSize: 8 },
                        { text: txtAnestesiologo, font: 'SF', fontSize: 8, bold:true },
                      ],
                    },                                                
                  ]
              },
              {
                width: '30%',
                margin: [0, 10, 0, 0],
                  stack: [                      
                    {
                      text:[
                        {text: ' ', font:'SF', fontSize:8, bold:true}
                      ],
                    },
                    // Fecha de Alta de Recuperación
                    {
                      text: [
                        { text: '\nFecha: ', font: 'SF', fontSize: 8 },
                        { text: fechaAlta, font: 'SF', fontSize: 8, bold:true },
                      ],
                    },
                    // Hora de Alta de Recuperación
                    {
                      margin: [0, 2.5, 0, 0],
                      text: [
                        { text: 'Hora: ', font: 'SF', fontSize: 8 },
                        { text: horaAlta, font: 'SF', fontSize: 8, bold:true },
                      ],
                    },                      
                  ]
              },                
            ]
          },
          {
            columns: [
            {
              width: '100%',
                stack: [
                  // Observaciones
                  {
                    margin: [0, 2.5, 0, 0],
                    text: [
                      { text: 'Observaciones: ', font: 'SF', fontSize: 8 },
                      { text: txtObservAlta, font: 'SF', fontSize: 8, bold:true },
                    ],
                  },                      
                ]                    
              }
            ]
          },
          {
            columns:[
              {
                width: '50%',
                margin: [0, 10, 0, 0],
                  stack: [
                    /*NOTA POST-ANÉSTESICA*/
                    {
                      text:[
                        {text: 'NOTA POST-ANÉSTESICA', font:'SF', fontSize:8, bold:true}
                      ],
                    },
                    // Técnica de Anestesia Final
                    {
                      text: [
                        { text: '\nTécnica de Anestesia Final: ', font: 'SF', fontSize: 8 },
                        { text: tecnicaAnestFinal, font: 'SF', fontSize: 8, bold:true },
                      ],
                    },                                                               
                  ]
              },
              {
                width: '50%',
                margin: [0, 10, 0, 0],
                  stack: [                      
                    {
                      text:[
                        {text: ' ', font:'SF', fontSize:8, bold:true}
                      ],
                    },
                    // Intubación
                    {
                      text: [
                        { text: '\nIntubación: ', font: 'SF', fontSize: 8 },
                        { text: intubacionPost, font: 'SF', fontSize: 8, bold:true },
                      ],
                    },                                                     
                  ]
              },                
            ]
          },
          {
            columns: [
            {
              width: '100%',
                stack: [
                  // Nota Post-Anestésica
                  {
                    margin: [0, 2.5, 0, 0],
                    text: [
                      { text: 'Nota: ', font: 'SF', fontSize: 8 },
                      { text: txtNotaPost, font: 'SF', fontSize: 8, bold:true },
                    ],
                  },
                ]                    
              }
            ]
          },
          {
            // Signos Vitales al Egreso
            columns: [
              {
                width: '60%',
                margin: [0, 10, 0, 0],
                  stack: [
                    {
                      text:[
                        { text: 'SIGNOS VITALES AL EGRESO DEL QUIRÓFANO', font: 'SF', fontSize: 8, bold:true},
                      ]
                    },
                    {
                      margin: [0, 10, 0, 0],
                      table: {
                        widths: ['*', '*', '*', '*', '*', '*'],
                        body: [
                          ['TA', 'FC', 'FR', 'Temp', 'Pulso', 'SpO2'],
                          [TAPost, FCPost, FRPost, TemperaturaPost, PulsoPost, SpO2Post],
                        ]
                      }, font: 'SF', fontSize: 8
                    },                                                             
                    
                    // El paciente pasa a
                    {
                      text: [
                        { text: '\nEl Paciente Pasa a: ', font: 'SF', fontSize: 8 },
                        { text: pacientePasa, font: 'SF', fontSize: 8, bold:true },
                      ],
                    },            
                  ]
              },                
            ],
          },          
        )

        if(preIdStore.generoPaciente === 'Femenino'){
          crearPDF.push(
            {
              columns: [
                {
                  width: '100%',
                  margin: [0, 10 ,0 ,0],
                    stack: [
                      // SEDACIÓN  
                      {
                        text: [
                          { text: 'CASO OBSTETRICO', font: 'SF', fontSize: 8, bold:true },
                        ],
                      },
                      // Número de Productos
                      {
                        text: [
                          { text: '\nNúmero de Productos: ', font: 'SF', fontSize: 8 },
                          { text: numProductos, font: 'SF', fontSize: 8, bold:true },
                          ],
                      },
                      // Tabla de caso obstetrico
                      {
                        margin: [0, 5 ,0 ,0],
                        table: {
                          headerRows: 1,
                          widths: [ '*', '*', '*', '*', '*', '*', '*', '*', '*'],
                          body: [
                            ['', 'Tipo de alumbramiento', 'Hora de nacimiento', 'Genero', 'Apgar 1min', 'Apgar 5min', 'Capurro', 'Peso(gm)', 'Talla(cm)'],
                            ['Bebé 1', { text: alumbramiento, bold:true }, { text: horaNacimiento, bold:true }, 
                            { text: genero, bold:true }, { text: apgar1, bold:true }, { text: apgar5, bold:true }, 
                            { text: capurro, bold:true }, { text: pesoNacido, bold:true }, { text: tallaNacido, bold:true }],
                            ['Bebé 2', { text: alumbramientoDos, bold:true }, { text: horaNacimientoDos, bold:true }, 
                            { text: generoDos, bold:true }, { text: apgar1Dos, bold:true }, { text: apgar5Dos, bold:true }, 
                            { text: capurroDos, bold:true }, { text: pesoNacidoDos, bold:true }, { text: tallaNacidoDos, bold:true }],
                            ['Bebé 3', { text: alumbramientoTres, bold:true }, { text: horaNacimientoTres, bold:true }, 
                            { text: generoTres, bold:true }, { text: apgar1Tres, bold:true }, { text: apgar5Tres, bold:true }, 
                            { text: capurroTres, bold:true }, { text: pesoNacidoTres, bold:true }, { text: tallaNacidoTres, bold:true }],
                            ['Bebé 4', { text: alumbramientoCuatro, bold:true }, { text: horaNacimientoCuatro, bold:true }, 
                            { text: generoCuatro, bold:true }, { text: apgar1Cuatro, bold:true }, { text: apgar5Cuatro, bold:true }, 
                            { text: capurroCuatro, bold:true }, { text: pesoNacidoCuatro, bold:true }, { text: tallaNacidoCuatro, bold:true }],
                            ['Bebé 5', { text: alumbramientoCinco, bold:true }, { text: horaNacimientoCinco, bold:true }, 
                            { text: generoCinco, bold:true }, { text: apgar1Cinco, bold:true }, { text: apgar5Cinco, bold:true }, 
                            { text: capurroCinco, bold:true }, { text: pesoNacidoCinco, bold:true }, { text: tallaNacidoCinco, bold:true }],
                            ['Bebé 6', { text: alumbramientoSeis, bold:true }, { text: horaNacimientoSeis, bold:true }, 
                            { text: generoSeis, bold:true }, { text: apgar1Seis, bold:true }, { text: apgar5Seis, bold:true }, 
                            { text: capurroSeis, bold:true }, { text: pesoNacidoSeis, bold:true }, { text: tallaNacidoSeis, bold:true }],
                          ]
                        },
                        layout: 'noBorders', 
                        font: 'SF', 
                        fontSize:8,
                      },
                    ]
                },
              ]
            },
          )
        }

        // Agregar las imágenes al PDF
        crearPDF.forEach(imageObj => {          
          docDefinition.content.push(imageObj);
        });

        // Generar el documento PDF
        pdfMake.createPdf(docDefinition as any).open();     

        this.cerrarModalGrid();

        this.tamanoModalGrid = false;

        this.zoomGrafica = false;

        this.mostrarGraficas=false;

        this.mostrarSpinner=false;
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    // Menú vista rapida
    async desplegarMenuVistaRapida(){     
      preIdStore.VistaRapida=true
      this.mostrarVistaRapida=true
    },

    async replegarMenuVistaRapida(){ 
      if(this.mostrarVistaRapida=true)     
        preIdStore.VistaRapida=false
        this.mostrarVistaRapida=false
    },

    // Gestión datos ventilador 
    async guardarDatosV() {
      try {
        if(this.menuTrans.modosVentilacion == "" || this.menuTrans.modosVentilacion == undefined) {
          swal.fire({
          title: "Indique el modo de ventilación",
          icon: "warning",
          showConfirmButton: false,
          showCloseButton: true,
          toast: true,
          timer: 2500,
          timerProgressBar: true,
          position: "top-end",
          });
        }else{
          transAnestStore.btnAddVentilador=false
          transAnestStore.btnUpdateVentilador=true
          transAnestStore.btnActualizaVentilador=false
    
          transAnestStore.btnAddMedicamentos =false
          transAnestStore.btnUpdateMedicamentos=true
          transAnestStore.btnActualizaMedicamento=false
    
          transAnestStore.btnAddRelevos=false
          transAnestStore.btnUpdateRelevos=true
          transAnestStore.btnActualizaRelevo=false
    
          transAnestStore.btnAddEventos=false
          transAnestStore.btnUpdateEventos=true
          transAnestStore.btnActualizaEvento=false
    
          transAnestStore.btnActualizarBalance=true
    
          let hoy = new Date();
          this.menuTrans.Hr = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();
          
          if(preIdStore.nuevoRegistroPaciente == false){
            await transAnestStore.saveDatosV(this.menuTrans, preIdStore.pacienteID._id);
          }else if(preIdStore.nuevoRegistroPaciente == true){        
            await transAnestStore.saveNuevoDatosV(this.menuTrans, preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
          }        
    
          this.menuTrans.modosVentilacion = "";
          this.menuTrans.Hr = "";
          this.menuTrans.IE = "";
          this.menuTrans.PLimite = "";
          this.menuTrans.frecResp = "";
          this.menuTrans.peep = "";
          this.menuTrans.vt = "";
    
          if(preIdStore.nuevoRegistroPaciente == false){
            await transAnestStore.listDatosV(preIdStore.pacienteID._id);
          }else if(preIdStore.nuevoRegistroPaciente == true){        
            await transAnestStore.listNuevoDatosV(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
          }
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async actualizarDatosVentilador() {
      try {
        if(this.menuTrans.modosVentilacion == "" || this.menuTrans.modosVentilacion == undefined) {
          swal.fire({
          title: "Indique el modo de ventilación",
          icon: "warning",
          showConfirmButton: false,
          showCloseButton: true,
          toast: true,
          timer: 2500,
          timerProgressBar: true,
          position: "top-end",
          });
        }else{
          let hoy = new Date();
          this.menuTrans.Hr = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();
    
          if(preIdStore.nuevoRegistroPaciente == false){      
            await transAnestStore.updateDatosV(this.menuTrans, preIdStore.pacienteID._id);          
          }else if(preIdStore.nuevoRegistroPaciente == true){         
            await transAnestStore.updateNuevoDatosV(this.menuTrans, preIdStore.pacienteID.pid, preIdStore.cirugiaID)
          }
    
          this.menuTrans.modosVentilacion = "";
          this.menuTrans.Hr = "";
          this.menuTrans.IE = "";
          this.menuTrans.PLimite = "";
          this.menuTrans.frecResp = "";
          this.menuTrans.peep = "";
          this.menuTrans.vt = "";
    
          if(preIdStore.nuevoRegistroPaciente == false){
            await transAnestStore.listDatosV(preIdStore.pacienteID._id);
          }else if(preIdStore.nuevoRegistroPaciente == true){          
            await transAnestStore.listNuevoDatosV(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
          }     
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async cambiarBtnActualizar(id: string) {
      try {
        transAnestStore.btnAddVentilador = false;
        transAnestStore.btnUpdateVentilador = false;
        transAnestStore.btnActualizaVentilador = true;
  
        await transAnestStore.getModoVent(id);
  
        this.menuTrans.idVentilador = transAnestStore.datosVentilacion.datosVentilador[0]._id;
        this.menuTrans.modosVentilacion = transAnestStore.datosVentilacion.datosVentilador[0].modosVentilacion;
        this.menuTrans.Hr = transAnestStore.datosVentilacion.datosVentilador[0].Hr;
        this.menuTrans.IE = transAnestStore.datosVentilacion.datosVentilador[0].IE;
        this.menuTrans.PLimite = transAnestStore.datosVentilacion.datosVentilador[0].PLimite;
        this.menuTrans.frecResp = transAnestStore.datosVentilacion.datosVentilador[0].frecResp;
        this.menuTrans.peep = transAnestStore.datosVentilacion.datosVentilador[0].peep;
        this.menuTrans.vt = transAnestStore.datosVentilacion.datosVentilador[0].vt;
  
        if(preIdStore.nuevoRegistroPaciente == false){
          await transAnestStore.listDatosV(preIdStore.pacienteID._id);
        }else if(preIdStore.nuevoRegistroPaciente == true){         
          await transAnestStore.listNuevoDatosV(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
        }     
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async actualizarVentilador() {
      try {
        if (this.menuTrans.modosVentilacion == "" || this.menuTrans.modosVentilacion == undefined) {
            swal.fire({
            title: "Indique el modo de ventilación",
            icon: "warning",
            showConfirmButton: false,
            showCloseButton: true,
            toast: true,
            timer: 2500,
            timerProgressBar: true,
            position: "top-end",
            });
        } else {
            let hoy = new Date();
            this.menuTrans.Hr = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();
            await transAnestStore.updateVentilador(this.menuTrans.idVentilador, this.menuTrans.modosVentilacion, this.menuTrans.peep,
                                  this.menuTrans.vt, this.menuTrans.frecResp, this.menuTrans.IE, this.menuTrans.PLimite, this.menuTrans.Hr);
  
            //Volver al botón agregar
            transAnestStore.btnAddVentilador=false
            transAnestStore.btnUpdateVentilador=true
            transAnestStore.btnActualizaVentilador=false
  
            this.menuTrans.idVentilador = "";
            this.menuTrans.modosVentilacion = "";
            this.menuTrans.Hr = "";
            this.menuTrans.IE = "";
            this.menuTrans.PLimite = "";
            this.menuTrans.frecResp = "";
            this.menuTrans.peep = "";
            this.menuTrans.vt = "";
  
            if(preIdStore.nuevoRegistroPaciente == false){
              await transAnestStore.listDatosV(preIdStore.pacienteID._id);
            }else if(preIdStore.nuevoRegistroPaciente == true){          
              await transAnestStore.listNuevoDatosV(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
            }     
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async eliminarDatosV(id: string) {
      try {
        await transAnestStore.deleteModoVent(id);
        if(preIdStore.nuevoRegistroPaciente == false){
          await transAnestStore.listDatosV(preIdStore.pacienteID._id);
        }else if(preIdStore.nuevoRegistroPaciente == true){          
          await transAnestStore.listNuevoDatosV(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
        }     
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    //Gestión datos balance
    async cambiarUpdateBalance() {
      try {
        transAnestStore.btnActualizarBalance=true
  
        transAnestStore.btnAddVentilador=false
        transAnestStore.btnUpdateVentilador=true
        transAnestStore.btnActualizaVentilador=false
  
        transAnestStore.btnAddMedicamentos=false
        transAnestStore.btnUpdateMedicamentos=true
        transAnestStore.btnActualizaMedicamento=false
  
        transAnestStore.btnAddRelevos=false
        transAnestStore.btnUpdateRelevos=true
        transAnestStore.btnActualizaRelevo=false
  
        transAnestStore.btnAddEventos=false
        transAnestStore.btnUpdateEventos=true
        transAnestStore.btnActualizaEvento=false
  
        //Metódo para guardar
        if(preIdStore.nuevoRegistroPaciente == false){
          await transAnestStore.saveDatosV(this.menuTrans, preIdStore.pacienteID._id);          
        }else if(preIdStore.nuevoRegistroPaciente == true){     
          await transAnestStore.saveNuevoDatosV(this.menuTrans, preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async actualizarDatosBalance() {
      try {
        if(preIdStore.nuevoRegistroPaciente == false){
          this.menuTrans.balanceP = this.menuTrans.ingresos - this.menuTrans.egresos;
          this.menuTrans.horaBalance = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          
          await transAnestStore.updateBalanceH(this.menuTrans, preIdStore.pacienteID._id)          
          
          await transAnestStore.updateBalanceHP(this.menuTrans, preIdStore.pacienteID._id)
          await transAnestStore.getBalanceHPList(preIdStore.pacienteID._id)          

          await this.iniciarIntervaloBP();
        }else if(preIdStore.nuevoRegistroPaciente == true){
          this.menuTrans.balanceP = await this.menuTrans.ingresos - this.menuTrans.egresos;        
          this.menuTrans.horaBalance = await new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          
          await transAnestStore.updateNuevoBalanceH(this.menuTrans, preIdStore.pacienteID.pid, preIdStore.cirugiaID)
          
          await transAnestStore.updateNuevoBalanceHP(this.menuTrans, preIdStore.pacienteID.pid, preIdStore.cirugiaID)
          await transAnestStore.getNuevoBalanceHPList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)          

          await this.iniciarIntervaloBP();
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    iniciarIntervaloBP() {
      this.detenerIntervaloBP(); // Asegurarse de que no haya intervalos duplicados
      this.balanceTemp = setInterval(async () => {
        await this.guardarBalanceParcial();
      }, 60000 * 60); // 60000 ms = 1 minuto
    },

    detenerIntervaloBP() {
      if (this.balanceTemp) {
        clearInterval(this.balanceTemp);
        this.balanceTemp = null;
      }
    },

    async guardarBalanceParcial(){
      try {
        if(preIdStore.nuevoRegistroPaciente == false){
          this.menuTrans.balanceP = this.menuTrans.ingresos - this.menuTrans.egresos;
          this.menuTrans.horaBalance = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

          await transAnestStore.updateBalanceHP(this.menuTrans, preIdStore.pacienteID._id)
          await transAnestStore.getBalanceHPList(preIdStore.pacienteID._id)

          swal.fire({
            title: "Balance parcial guardado",
            icon: "success",
            showConfirmButton: false,
            showCloseButton: true,
            toast: true,
            timer: 2500,
            timerProgressBar: true,
            position: "top-end",
          });
        }
        else if(preIdStore.nuevoRegistroPaciente == true){
          this.menuTrans.balanceP = this.menuTrans.ingresos - this.menuTrans.egresos;
          this.menuTrans.horaBalance = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

          await transAnestStore.updateNuevoBalanceHP(this.menuTrans, preIdStore.pacienteID.pid, preIdStore.cirugiaID)
          await transAnestStore.getNuevoBalanceHPList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)

          swal.fire({
            title: "Balance parcial guardado",
            icon: "success",
            showConfirmButton: false,
            showCloseButton: true,
            toast: true,
            timer: 2500,
            timerProgressBar: true,
            position: "top-end",
          });
        }        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }      
    },

    async calcularBalance(){
      try {
        await this.enviarDatosTrans()

        this.menuTrans.balanceTotal = ( Number(this.menuTrans.factor_VIII) + Number(this.menuTrans.solHartman) + Number(this.menuTrans.glucosados) +
                                        Number(this.menuTrans.almidones) + Number(this.menuTrans.paqGlobular) + Number(this.menuTrans.plaquetas) +
                                        Number(this.menuTrans.factor_VII) + Number(this.menuTrans.otrosIngresos) + Number(this.menuTrans.solFisio) +
                                        Number(this.menuTrans.gelatinas) + Number(this.menuTrans.albuminas) + Number(this.menuTrans.plasmas) +
                                        Number(this.menuTrans.crioprecipitados) ) - 
                                      ( Number(this.menuTrans.liqAscitis) + Number(this.menuTrans.sangradoAprox) + Number(this.menuTrans.uresis) + 
                                        Number(this.menuTrans.expoQX) + Number(this.menuTrans.reqBasales) + Number(this.menuTrans.ayuno) + 
                                        Number(this.menuTrans.otrosEgresos) );
        this.menuTrans.egresos = ( Number(this.menuTrans.liqAscitis) + Number(this.menuTrans.sangradoAprox) + Number(this.menuTrans.uresis) + 
                                  Number(this.menuTrans.expoQX) + Number(this.menuTrans.reqBasales) + Number(this.menuTrans.ayuno) + 
                                  Number(this.menuTrans.otrosEgresos) );
        this.menuTrans.ingresos = ( Number(this.menuTrans.factor_VIII) + Number(this.menuTrans.solHartman) + Number(this.menuTrans.glucosados) +
                                  Number(this.menuTrans.almidones) + Number(this.menuTrans.paqGlobular) + Number(this.menuTrans.plaquetas) +
                                  Number(this.menuTrans.factor_VII) + Number(this.menuTrans.otrosIngresos) + Number(this.menuTrans.solFisio) +
                                  Number(this.menuTrans.gelatinas) + Number(this.menuTrans.albuminas) + Number(this.menuTrans.plasmas) +
                                  Number(this.menuTrans.crioprecipitados) );        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    //Gestión datos técnica anestesica 
    cambiarUpdateTecnica(){    
      try {
        this.infoNotaPost.npa_TecAnestFinal = String(postAnestStore.TecnicaAnestesica)
  
        if(preIdStore.nuevoRegistroPaciente == false){
          if(this.transAnestStore.tipoTecnica == false){
            postAnestStore.saveNotaPA(this.infoNotaPost, preIdStore.pacienteID._id, preIdStore.pacienteCxID._id)
            this.transAnestStore.tipoTecnica=true
          }
        }else if(preIdStore.nuevoRegistroPaciente == true){
          if(this.transAnestStore.tipoTecnica == false){
            postAnestStore.saveNuevoNotaPA(this.infoNotaPost, preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
            this.transAnestStore.tipoTecnica=true
          }
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }    
    },

    updateNotaPA(){
      try {
        if(preIdStore.nuevoRegistroPaciente == false){
          postAnestStore.updateNotaPA(this.infoNotaPost, preIdStore.pacienteID._id, postAnestStore.TecnicaAnestesica)
        }else if(preIdStore.nuevoRegistroPaciente == true){        
          postAnestStore.updateNuevoNotaPA(this.infoNotaPost, preIdStore.pacienteID.pid, preIdStore.cirugiaID, postAnestStore.TecnicaAnestesica)
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    clickTAbtn(){
      try {
        if (taSeparada != undefined) {
          postAnestStore.TecnicaAnestesica = taSeparada;          
        }
                
        this.enviarTecnica()
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    enviarTecnica() {
      try {
        this.infoNotaPost.npa_TecAnestFinal = postAnestStore.TecnicaAnestesica;
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    // Gestión tiempos quirurgicos
    async actualizarTQX(tiemposQX: string){
      try {
        switch (tiemposQX) {
          case "INEVE":
            let hoy = new Date();
            this.menuTrans.horaEvento = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();
            this.enviarDatosTrans()
          break;
  
          case "INREL":
            let hoy_1 = new Date();
            this.menuTrans.horaRelevo = ((hoy_1.getHours() <10) ? '0':'') + hoy_1.getHours() + ':' + ((hoy_1.getMinutes() <10) ? '0':'')+hoy_1.getMinutes();
  
            this.enviarDatosTrans()
          break;
  
          case "INCX":
            let hoy_2 = new Date();
            this.menuTrans.horaInicioMed = ((hoy_2.getHours() <10) ? '0':'') + hoy_2.getHours() + ':' + ((hoy_2.getMinutes() <10) ? '0':'')+hoy_2.getMinutes();
  
            this.enviarDatosTrans()
          break;
  
          case "QXIN":
            transAnestStore.ingresoQuirofano =true

            transAnestStore.btnActualizarBalance=true
  
            transAnestStore.btnAddVentilador=false
            transAnestStore.btnUpdateVentilador=true
            transAnestStore.btnActualizaVentilador=false
  
            transAnestStore.btnAddMedicamentos=false
            transAnestStore.btnUpdateMedicamentos=true
            transAnestStore.btnActualizaMedicamento=false
  
            transAnestStore.btnAddRelevos=false
            transAnestStore.btnUpdateRelevos=true
            transAnestStore.btnActualizaRelevo=false
  
            transAnestStore.btnAddEventos=false
            transAnestStore.btnUpdateEventos=true
            transAnestStore.btnActualizaEvento=false
  
            this.btnMSV=false
  
            let hoy_3 = new Date();
            this.menuTrans.ingresoQX = ((hoy_3.getHours() <10) ? '0':'') + hoy_3.getHours() + ':' + ((hoy_3.getMinutes() <10) ? '0':'')+hoy_3.getMinutes();   
            
            this.enviarDatosTrans()
  
            if(preIdStore.nuevoRegistroPaciente == false){
              await transAnestStore.saveTiemposQX(this.menuTrans.ingresoQX, preIdStore.pacienteID._id, tiemposQX, preIdStore.pacienteCxID._id);
            }else if(preIdStore.nuevoRegistroPaciente == true){            
              await transAnestStore.saveNuevoTiemposQX(this.menuTrans.ingresoQX, preIdStore.pacienteID.pid, preIdStore.pacienteID._id, tiemposQX)
            }
          break;
  
          case "ANESIN":
            if(transAnestStore.ingresoQuirofano === true){
              if(transAnestStore.salidaQuirofano === false){
                transAnestStore.btnActualizarBalance=true
      
                transAnestStore.btnAddVentilador=false
                transAnestStore.btnUpdateVentilador=true
                transAnestStore.btnActualizaVentilador=false
      
                transAnestStore.btnAddMedicamentos=false
                transAnestStore.btnUpdateMedicamentos=true
                transAnestStore.btnActualizaMedicamento=false
      
                transAnestStore.btnAddRelevos=false
                transAnestStore.btnUpdateRelevos=true
                transAnestStore.btnActualizaRelevo=false
      
                transAnestStore.btnAddEventos=false
                transAnestStore.btnUpdateEventos=true
                transAnestStore.btnActualizaEvento=false            
      
                let hoy_4 = new Date();
                this.menuTrans.inicioAn = ((hoy_4.getHours() <10) ? '0':'') + hoy_4.getHours() + ':' + ((hoy_4.getMinutes() <10) ? '0':'')+hoy_4.getMinutes();
      
                this.enviarDatosTrans()
      
                if(preIdStore.nuevoRegistroPaciente == false){
                  await transAnestStore.saveTiemposQX(this.menuTrans.inicioAn, preIdStore.pacienteID._id, tiemposQX, preIdStore.pacienteCxID._id);
                }else if(preIdStore.nuevoRegistroPaciente == true){            
                  await transAnestStore.saveNuevoTiemposQX(this.menuTrans.inicioAn, preIdStore.pacienteID.pid, preIdStore.pacienteID._id, tiemposQX)
                }                                      
              }else{
                swal.fire({
                  title: 'La cirugía ya ha finalizado',
                  icon: 'error',
                  showConfirmButton: false,
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  timerProgressBar: true
                })
              }
            }else{
              swal.fire({
                title: 'Registre la hora de ingreso al quirófano',
                icon: 'error',
                showConfirmButton: false,
                toast: true,
                position: 'top',
                timer: 3000,
                timerProgressBar: true
              })
            }            
          break;
  
          case "CXIN":
            if(transAnestStore.ingresoQuirofano === true){
              if(transAnestStore.salidaQuirofano === false){
                transAnestStore.btnActualizarBalance=true
      
                transAnestStore.btnAddVentilador=false
                transAnestStore.btnUpdateVentilador=true
                transAnestStore.btnActualizaVentilador=false
      
                transAnestStore.btnAddMedicamentos=false
                transAnestStore.btnUpdateMedicamentos=true
                transAnestStore.btnActualizaMedicamento=false
      
                transAnestStore.btnAddRelevos=false
                transAnestStore.btnUpdateRelevos=true
                transAnestStore.btnActualizaRelevo=false
      
                transAnestStore.btnAddEventos=false
                transAnestStore.btnUpdateEventos=true
                transAnestStore.btnActualizaEvento=false
              
                let hoy_5 = new Date();
                this.menuTrans.inicioCx = ((hoy_5.getHours() <10) ? '0':'') + hoy_5.getHours() + ':' + ((hoy_5.getMinutes() <10) ? '0':'')+hoy_5.getMinutes();
      
                this.enviarDatosTrans()
                if(preIdStore.nuevoRegistroPaciente == false){
                  await transAnestStore.saveTiemposQX(this.menuTrans.inicioCx, preIdStore.pacienteID._id, tiemposQX, preIdStore.pacienteCxID._id);
                }else if(preIdStore.nuevoRegistroPaciente == true){            
                  await transAnestStore.saveNuevoTiemposQX(this.menuTrans.inicioCx, preIdStore.pacienteID.pid, preIdStore.pacienteID._id, tiemposQX)
                }
              }else{
                swal.fire({
                  title: 'La cirugía ya ha finalizado',
                  icon: 'error',
                  showConfirmButton: false,
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  timerProgressBar: true
                })
              }
            }else{
              swal.fire({
                title: 'Registre la hora de ingreso al quirófano',
                icon: 'error',
                showConfirmButton: false,
                toast: true,
                position: 'top',
                timer: 3000,
                timerProgressBar: true
              })
            }
          break;
  
          case "CXOUT":
            if(transAnestStore.ingresoQuirofano == true){
              if(transAnestStore.salidaQuirofano === false){
                transAnestStore.btnActualizarBalance=true
    
                transAnestStore.btnAddVentilador=false
                transAnestStore.btnUpdateVentilador=true
                transAnestStore.btnActualizaVentilador=false
      
                transAnestStore.btnAddMedicamentos=false
                transAnestStore.btnUpdateMedicamentos=true
                transAnestStore.btnActualizaMedicamento=false
      
                transAnestStore.btnAddRelevos=false
                transAnestStore.btnUpdateRelevos=true
                transAnestStore.btnActualizaRelevo=false
      
                transAnestStore.btnAddEventos=false
                transAnestStore.btnUpdateEventos=true
                transAnestStore.btnActualizaEvento=false
      
                let hoy_6 = new Date();
                this.menuTrans.finCx = ((hoy_6.getHours() <10) ? '0':'') + hoy_6.getHours() + ':' + ((hoy_6.getMinutes() <10) ? '0':'')+hoy_6.getMinutes();
      
                this.enviarDatosTrans()
      
                if(preIdStore.nuevoRegistroPaciente == false){
                  await transAnestStore.saveTiemposQX(this.menuTrans.finCx, preIdStore.pacienteID._id, tiemposQX, preIdStore.pacienteCxID._id);
                }else if(preIdStore.nuevoRegistroPaciente == true){            
                  await transAnestStore.saveNuevoTiemposQX(this.menuTrans.finCx, preIdStore.pacienteID.pid, preIdStore.pacienteID._id, tiemposQX)
                }
              }else{
                swal.fire({
                  title: 'La cirugía ya ha finalizado',
                  icon: 'error',
                  showConfirmButton: false,
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  timerProgressBar: true
                })
              }
            }else{
              swal.fire({
                title: 'Registre la hora de ingreso al quirófano',
                icon: 'error',
                showConfirmButton: false,
                toast: true,
                position: 'top',
                timer: 3000,
                timerProgressBar: true
              })
            }            
          break;
  
          case "ANESOUT":
            if(transAnestStore.ingresoQuirofano === true){
              if(transAnestStore.salidaQuirofano === false){
                transAnestStore.btnActualizarBalance=true
    
                transAnestStore.btnAddVentilador=false
                transAnestStore.btnUpdateVentilador=true
                transAnestStore.btnActualizaVentilador=false
      
                transAnestStore.btnAddMedicamentos=false
                transAnestStore.btnUpdateMedicamentos=true
                transAnestStore.btnActualizaMedicamento=false
      
                transAnestStore.btnAddRelevos=false
                transAnestStore.btnUpdateRelevos=true
                transAnestStore.btnActualizaRelevo=false
      
                transAnestStore.btnAddEventos=false
                transAnestStore.btnUpdateEventos=true
                transAnestStore.btnActualizaEvento=false
      
                let hoy_7 = new Date();
                this.menuTrans.finAn = ((hoy_7.getHours() <10) ? '0':'') + hoy_7.getHours() + ':' + ((hoy_7.getMinutes() <10) ? '0':'')+hoy_7.getMinutes();
      
                this.enviarDatosTrans()
      
                if(preIdStore.nuevoRegistroPaciente == false){
                  await transAnestStore.saveTiemposQX(this.menuTrans.finAn, preIdStore.pacienteID._id, tiemposQX, preIdStore.pacienteCxID._id);
                }else if(preIdStore.nuevoRegistroPaciente == true){            
                  await transAnestStore.saveNuevoTiemposQX(this.menuTrans.finAn, preIdStore.pacienteID.pid, preIdStore.pacienteID._id, tiemposQX)
                }

                this.infoNotaPost.signVitEgQx_TA = postAnestStore.EgresoTA; 
                this.infoNotaPost.signVitEgQx_FC = postAnestStore.EgresoFC;
                this.infoNotaPost.signVitEgQx_FR = postAnestStore.EgresoFR;
                this.infoNotaPost.signVitEgQx_Temperatura = postAnestStore.EgresoTemp;
                this.infoNotaPost.signVitEgQx_Pulso = postAnestStore.EgresoPulso;
                this.infoNotaPost.signVitEgQx_SpO2 = postAnestStore.EgresoSpO2;
              }else{
                swal.fire({
                  title: 'La cirugía ya ha finalizado',
                  icon: 'error',
                  showConfirmButton: false,
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  timerProgressBar: true
                })
              }
            }else{
              swal.fire({
                title: 'Registre la hora de ingreso al quirófano',
                icon: 'error',
                showConfirmButton: false,
                toast: true,
                position: 'top',
                timer: 3000,
                timerProgressBar: true
              })
            }            
          break;
  
          case "QXOUT":
            if(transAnestStore.ingresoQuirofano == true){
              transAnestStore.salidaQuirofano =true

              transAnestStore.btnActualizarBalance=true
  
              transAnestStore.btnAddVentilador=false
              transAnestStore.btnUpdateVentilador=true
              transAnestStore.btnActualizaVentilador=false
    
              transAnestStore.btnAddMedicamentos=false
              transAnestStore.btnUpdateMedicamentos=true
              transAnestStore.btnActualizaMedicamento=false
    
              transAnestStore.btnAddRelevos=false
              transAnestStore.btnUpdateRelevos=true
              transAnestStore.btnActualizaRelevo=false
    
              transAnestStore.btnAddEventos=false
              transAnestStore.btnUpdateEventos=true
              transAnestStore.btnActualizaEvento=false
    
              this.btnMSV=true
              transAnestStore.btnTQX
              this.finMSV()
              this.detenerIntervaloBP()
    
              let hoy_8 = new Date();
              this.menuTrans.egresoQx = ((hoy_8.getHours() <10) ? '0':'') + hoy_8.getHours() + ':' + ((hoy_8.getMinutes() <10) ? '0':'')+hoy_8.getMinutes();
    
              this.enviarDatosTrans()
    
              if(preIdStore.nuevoRegistroPaciente == false){
                this.menuTrans.balanceP = this.menuTrans.ingresos - this.menuTrans.egresos;
                this.menuTrans.horaBalance = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                await transAnestStore.updateBalanceHP(this.menuTrans, preIdStore.pacienteID._id)
                await transAnestStore.getBalanceHPList(preIdStore.pacienteID._id)

                await transAnestStore.saveTiemposQX(this.menuTrans.egresoQx, preIdStore.pacienteID._id, tiemposQX, preIdStore.pacienteCxID._id);

                transAnestStore.medicamentosAgrupados = this.medicamentosAgrupados
                if(transAnestStore.medicamentosAgrupados.length > 0){
                  await transAnestStore.updateSumaMedicamentos(transAnestStore.medicamentosAgrupados, preIdStore.pacienteID._id)
                }         
              }else if(preIdStore.nuevoRegistroPaciente == true){    
                this.menuTrans.balanceP = this.menuTrans.ingresos - this.menuTrans.egresos;
                this.menuTrans.horaBalance = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                await transAnestStore.updateNuevoBalanceHP(this.menuTrans, preIdStore.pacienteID.pid, preIdStore.cirugiaID)
                await transAnestStore.getNuevoBalanceHPList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)

                await transAnestStore.saveNuevoTiemposQX(this.menuTrans.egresoQx, preIdStore.pacienteID.pid, preIdStore.pacienteID._id, tiemposQX)  
                
                transAnestStore.medicamentosAgrupados = this.medicamentosAgrupados
                if(transAnestStore.medicamentosAgrupados.length > 0){
                  await transAnestStore.updateNuevoSumaMedicamentos(transAnestStore.medicamentosAgrupados, preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
                }
              }
            }else{
              swal.fire({
                title: 'Registre la hora de ingreso al quirófano',
                icon: 'error',
                showConfirmButton: false,
                toast: true,
                position: 'top',
                timer: 3000,
                timerProgressBar: true
              })
            }            
          break;
        
          default:
          break;
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async actualizaHora(tiemposQX : string){
      try {
        switch (tiemposQX) {
          case "QXIN":
            if(preIdStore.nuevoRegistroPaciente == false){
              await transAnestStore.saveTiemposQX(this.menuTrans.ingresoQX, preIdStore.pacienteID._id, tiemposQX, preIdStore.pacienteCxID._id);
              this.enviarDatosTrans()
            }else if(preIdStore.nuevoRegistroPaciente == true){            
              await transAnestStore.saveNuevoTiemposQX(this.menuTrans.ingresoQX, preIdStore.pacienteID.pid, preIdStore.pacienteID._id, tiemposQX)
              this.enviarDatosTrans()
            }            
          break;
  
          case "ANESIN":
            if(preIdStore.nuevoRegistroPaciente == false){
              this.enviarDatosTrans()
              await transAnestStore.saveTiemposQX(this.menuTrans.inicioAn, preIdStore.pacienteID._id, tiemposQX, preIdStore.pacienteCxID._id);
            }else if(preIdStore.nuevoRegistroPaciente == true){            
              this.enviarDatosTrans()
              await transAnestStore.saveNuevoTiemposQX(this.menuTrans.inicioAn, preIdStore.pacienteID.pid, preIdStore.pacienteID._id, tiemposQX)
            }            
          break;
  
          case "CXIN":
            if(preIdStore.nuevoRegistroPaciente == false){
              this.enviarDatosTrans()
              await transAnestStore.saveTiemposQX(this.menuTrans.inicioCx, preIdStore.pacienteID._id, tiemposQX, preIdStore.pacienteCxID._id);
            }else if(preIdStore.nuevoRegistroPaciente == true){            
              this.enviarDatosTrans()
              await transAnestStore.saveNuevoTiemposQX(this.menuTrans.inicioCx, preIdStore.pacienteID.pid, preIdStore.pacienteID._id, tiemposQX)
            }
          break;
  
          case "CXOUT":
            if(preIdStore.nuevoRegistroPaciente == false){
              this.enviarDatosTrans()
              await transAnestStore.saveTiemposQX(this.menuTrans.finCx, preIdStore.pacienteID._id, tiemposQX, preIdStore.pacienteCxID._id);
            }else if(preIdStore.nuevoRegistroPaciente == true){       
              this.enviarDatosTrans()     
              await transAnestStore.saveNuevoTiemposQX(this.menuTrans.finCx, preIdStore.pacienteID.pid, preIdStore.pacienteID._id, tiemposQX)
            }            
          break;
  
          case "ANESOUT":
            if(preIdStore.nuevoRegistroPaciente == false){
              this.enviarDatosTrans()
              await transAnestStore.saveTiemposQX(this.menuTrans.finAn, preIdStore.pacienteID._id, tiemposQX, preIdStore.pacienteCxID._id);
            }else if(preIdStore.nuevoRegistroPaciente == true){      
              this.enviarDatosTrans()      
              await transAnestStore.saveNuevoTiemposQX(this.menuTrans.finAn, preIdStore.pacienteID.pid, preIdStore.pacienteID._id, tiemposQX)
            }            
          break;
  
          case "QXOUT":
            if(preIdStore.nuevoRegistroPaciente == false){
              await transAnestStore.saveTiemposQX(this.menuTrans.egresoQx, preIdStore.pacienteID._id, tiemposQX, preIdStore.pacienteCxID._id);
            }else if(preIdStore.nuevoRegistroPaciente == true){            
              await transAnestStore.saveNuevoTiemposQX(this.menuTrans.egresoQx, preIdStore.pacienteID.pid, preIdStore.pacienteID._id, tiemposQX)
            }
          break;
        
          default:
          break;
        }        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async mostrarDropDown(tiemposQX : string){
      try {
        switch (tiemposQX) {
          case "ANESIN":
            if(transAnestStore.salidaQuirofano == false)
              if(this.menuTrans.inicioAn != undefined && this.menuTrans.inicioAn != ''){
                transAnestStore.activoAnesIN=true;
                transAnestStore.noActivoAnesIN=false;
                transAnestStore.activoCxIN=false;
                transAnestStore.activoCxOUT=false;
                transAnestStore.activoAnesOUT=false;
              }
          break;
  
          case "CXIN":
            if(transAnestStore.salidaQuirofano == false)
              if(this.menuTrans.inicioCx != undefined && this.menuTrans.inicioCx != ''){            
                transAnestStore.activoCxIN=true;
                transAnestStore.noActivoCxIN=false;
                transAnestStore.activoAnesIN=false;
                transAnestStore.activoCxOUT=false;
                transAnestStore.activoAnesOUT=false;
              }
          break;
  
          case "CXOUT":
            if(transAnestStore.salidaQuirofano == false)
              if(this.menuTrans.finCx != undefined && this.menuTrans.finCx != ''){            
                transAnestStore.activoCxOUT=true;
                transAnestStore.noActivoCxOUT=false;
                transAnestStore.activoAnesIN=false;
                transAnestStore.activoCxIN=false;
                transAnestStore.activoAnesOUT=false;
              }
          break;
  
          case "ANESOUT":
            if(transAnestStore.salidaQuirofano == false)
              if(this.menuTrans.finAn != undefined && this.menuTrans.finAn != ''){            
                transAnestStore.activoAnesOUT=true;
                transAnestStore.noActivoAnesOUT=false;
                transAnestStore.activoAnesIN=false;
                transAnestStore.activoCxIN=false;
                transAnestStore.activoCxOUT=false;
              }
          break;
        
          default:
          break;
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async ocultarDropDown(tiemposQX : string){
      try {
        switch (tiemposQX) {
          case "ANESIN":
          transAnestStore.activoAnesIN= false
          transAnestStore.noActivoAnesIN= true
          break;
  
          case "CXIN":
            transAnestStore.activoCxIN= false
            transAnestStore.noActivoCxIN= true
          break;
  
          case "CXOUT":
            transAnestStore.activoCxOUT= false
            transAnestStore.noActivoCxOUT= true
          break;
  
          case "ANESOUT":
            transAnestStore.activoAnesOUT= false
            transAnestStore.noActivoAnesOUT= true
          break;
        
          default:
          break;
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
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
      try {
        if(transAnestStore.ingresoQuirofano === true){ 
          let presionarBotonMe = document.getElementById('abrir-medicamento');
  
          // Crea un nuevo evento de clic
          let event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
          });
    
          // Despacha el evento de clic en el botón
          presionarBotonMe.dispatchEvent(event);

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
            
            transAnestStore.btnAddMedicamentos=false
            transAnestStore.btnUpdateMedicamentos=true
            transAnestStore.btnActualizaMedicamento=false
          }
        }else if(transAnestStore.ingresoQuirofano === false){
          swal.fire({
          title: "Es necesario iniciar el monitoreo primero",
          icon: "warning",
          showConfirmButton: false,
          showCloseButton: true,
          toast: true,
          timer: 3000,
          timerProgressBar: true,
          position: "top-end",
          });
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    cerrarModalMed() {
      try {
        let closeButton = document.getElementById('medica');
  
        // Crea un nuevo evento de clic
        let event = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
  
        // Despacha el evento de clic en el botón
        closeButton.dispatchEvent(event);
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async listarMedicamentos(){        
      try {
        let medicamento= medStore.medicamentos;
        this.listaMed = medicamento.map(document => document.nombreMedicamento);
        this.listaMed.sort();        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async listarMedicamentosTrans(){
      try {
        let listaMedicamentos = transAnestStore.medicamentos.map(item =>
          item.medicamentosCx.map(med => med.medicamento)).flat();
  
          this.listaMedTrans = listaMedicamentos.filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
  
        this.listaMedTrans.sort()
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async vaciarHoraFinalMedicamento(){
      try {
        this.menuTrans.horaFinalMed="";
        this.enviarDatosTrans()
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async guardarMedicamentos() {
      try {
        if(this.menuTrans.tipoMed == "" || this.menuTrans.tipoMed == undefined || this.menuTrans.medicamento == "" || this.menuTrans.medicamento == undefined) {
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
        }else {        
          transAnestStore.btnAddMedicamentos=false
          transAnestStore.btnUpdateMedicamentos=true
          transAnestStore.btnActualizaMedicamento=false
  
          transAnestStore.btnAddVentilador=false
          transAnestStore.btnUpdateVentilador=true
          transAnestStore.btnActualizaVentilador=false
  
          transAnestStore.btnAddRelevos=false
          transAnestStore.btnUpdateRelevos=true
          transAnestStore.btnActualizaRelevo=false
  
          transAnestStore.btnAddEventos=false
          transAnestStore.btnUpdateEventos=true
          transAnestStore.btnActualizaEvento=false
  
          transAnestStore.btnActualizarBalance=true
          
          if(preIdStore.nuevoRegistroPaciente == false){
            this.menuTrans.valorGrafica = 0;
            await this.transAnestStore.saveDatosMedicamentos(this.menuTrans, preIdStore.pacienteID._id, preIdStore.pacienteCxID._id)
          }else if(preIdStore.nuevoRegistroPaciente == true){    
            this.menuTrans.valorGrafica = 0;     
            await this.transAnestStore.saveNuevoDatosMedicamentos(this.menuTrans, preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
          }          
  
          this.menuTrans.tipoMed = "";
          this.menuTrans.medicamento = "";
          this.menuTrans.dosisMed = "";
          this.menuTrans.unidadMed = "";
          this.menuTrans.viaMed = "";
          this.menuTrans.horaInicioMed = "";
          this.menuTrans.horaFinalMed = "";
          this.menuTrans.observacionesMed = "";      
          
          this.cerrarModalMed();
  
          if(preIdStore.nuevoRegistroPaciente == false){
            await transAnestStore.getMedicamentosList(preIdStore.pacienteID._id);
          }else if(preIdStore.nuevoRegistroPaciente == true){        
            await transAnestStore.getNuevoMedicamentosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
          }
          
          await this.listarMedicamentosTrans();
        }            
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async actualizarMedicamentos(m_tipoMed: string, m_medicamento: string, m_dosisMed: string, m_unidadMed: string,
                                  m_viaMed: string, m_horaInicioMed: string, m_horaFinalMed: string, m_observacionesMed: string, m_valorGrafica: number) {
      try {
        if (this.menuTrans.tipoMed == "" || this.menuTrans.tipoMed == undefined || this.menuTrans.medicamento == "" || this.menuTrans.medicamento == undefined ||
            this.menuTrans.dosisMed == "" || this.menuTrans.dosisMed == undefined || this.menuTrans.unidadMed == "" || this.menuTrans.unidadMed == undefined ||
            this.menuTrans.horaInicioMed == "" || this.menuTrans.horaInicioMed == undefined) {
              swal.fire({
              title: "Indique el tipo de administración, medicamento, hora inicial, dosis y unidad de medicamento",
              icon: "warning",
              showConfirmButton: false,
              showCloseButton: true,
              toast: true,
              timer: 4000,
              timerProgressBar: true,
              position: "top-end",
              });
        } else {
  
          if(preIdStore.nuevoRegistroPaciente == false){
            m_valorGrafica = 0;
            await transAnestStore.updateMedicamentos(m_tipoMed, m_medicamento, m_dosisMed, m_unidadMed, m_viaMed, m_horaInicioMed, m_horaFinalMed, m_observacionesMed, m_valorGrafica, preIdStore.pacienteID._id);
          }else if(preIdStore.nuevoRegistroPaciente == true){       
            m_valorGrafica = 0; 
            await transAnestStore.updateNuevoMedicamentos(m_tipoMed, m_medicamento, m_dosisMed, m_unidadMed, m_viaMed, m_horaInicioMed, m_horaFinalMed, m_observacionesMed, m_valorGrafica, preIdStore.pacienteID.pid,  preIdStore.cirugiaID);
          }            
          
          this.menuTrans.tipoMed = "";
          this.menuTrans.medicamento = "";
          this.menuTrans.dosisMed = "";
          this.menuTrans.unidadMed = "";
          this.menuTrans.viaMed = "";
          this.menuTrans.horaInicioMed = "";
          this.menuTrans.horaFinalMed = "";
          this.menuTrans.observacionesMed = "";    
          
          this.cerrarModalMed();
  
          if(preIdStore.nuevoRegistroPaciente == false){
            await transAnestStore.getMedicamentosList(preIdStore.pacienteID._id);
          }else if(preIdStore.nuevoRegistroPaciente == true){        
            await transAnestStore.getNuevoMedicamentosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
          }
          await this.listarMedicamentosTrans()
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async cambiarBtnActualizarMedic(id) {
      try {
        transAnestStore.btnAddMedicamentos=false
        transAnestStore.btnUpdateMedicamentos=false
        transAnestStore.btnActualizaMedicamento=true
  
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
  
        if(preIdStore.nuevoRegistroPaciente == false){
          await transAnestStore.getMedicamentosList(preIdStore.pacienteID._id);
        }else if(preIdStore.nuevoRegistroPaciente == true){        
          await transAnestStore.getNuevoMedicamentosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
        }
        await this.listarMedicamentosTrans()
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async actualizarMedicamento() {
      try {
        if (this.menuTrans.tipoMed == "" || this.menuTrans.tipoMed == undefined || this.menuTrans.medicamento == "" || this.menuTrans.medicamento == undefined ||
            this.menuTrans.dosisMed == "" || this.menuTrans.dosisMed == undefined || this.menuTrans.unidadMed == "" || this.menuTrans.unidadMed == undefined ||
            this.menuTrans.horaInicioMed == "" || this.menuTrans.horaInicioMed == undefined) {
            swal.fire({
            title: "Indique el tipo de administración, medicamento, hora inicial, dosis y unidad de medicamento",
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
  
            transAnestStore.btnAddMedicamentos=false
            transAnestStore.btnUpdateMedicamentos=true
            transAnestStore.btnActualizaMedicamento=false
  
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
  
            if(preIdStore.nuevoRegistroPaciente == false){
              await transAnestStore.getMedicamentosList(preIdStore.pacienteID._id);
            }else if(preIdStore.nuevoRegistroPaciente == true){        
              await transAnestStore.getNuevoMedicamentosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
            }
            await this.listarMedicamentosTrans()
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async validaEliminarMedicamento(idMedicamento: string) {
      try {
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
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async eliminarMedicamento(idMedicamento: string) {
      try {
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
  
        transAnestStore.btnAddMedicamentos=false
        transAnestStore.btnUpdateMedicamentos=true
        transAnestStore.btnActualizaMedicamento=false
  
        this.cerrarModalMed();
  
        if(preIdStore.nuevoRegistroPaciente == false){
          await transAnestStore.getMedicamentosList(preIdStore.pacienteID._id);
        }else if(preIdStore.nuevoRegistroPaciente == true){        
          await transAnestStore.getNuevoMedicamentosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
        }
        await this.listarMedicamentosTrans()
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    //Métodos gestión de relevo
    async vaciarModalRel(){
      try {
        if(transAnestStore.ingresoQuirofano === true){ 
          let presionarBotonRe = document.getElementById('abrir-relevo');
  
          // Crea un nuevo evento de clic
          let event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
          });
    
          // Despacha el evento de clic en el botón
          presionarBotonRe.dispatchEvent(event);

          if(this.menuTrans.horaRelevo != "" && this.menuTrans.horaRelevo != undefined){
  
            this.menuTrans.idRelevo = "";
            this.menuTrans.horaRelevo = "";
            this.menuTrans.tipoRel= "RELEVO";
            this.menuTrans.matriculaRel = "";
            this.menuTrans.anestesiologoRel = "";
            this.menuTrans.observacionesRel = "";

            transAnestStore.btnAddRelevos=false
            transAnestStore.btnUpdateRelevos=true
            transAnestStore.btnActualizaRelevo=false
          }
        }else if(transAnestStore.ingresoQuirofano === false){
          swal.fire({
          title: "Es necesario iniciar el monitoreo primero",
          icon: "warning",
          showConfirmButton: false,
          showCloseButton: true,
          toast: true,
          timer: 3000,
          timerProgressBar: true,
          position: "top-end",
          });
        }        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    cerrarModalRel() {
      try {
        let closeButton = document.getElementById('relev');
        let event = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        closeButton.dispatchEvent(event);
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async guardarRelevos() {
      try {
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
          transAnestStore.btnAddMedicamentos=false
          transAnestStore.btnUpdateMedicamentos=true
          transAnestStore.btnActualizaMedicamento=false
  
          transAnestStore.btnAddVentilador=false
          transAnestStore.btnUpdateVentilador=true
          transAnestStore.btnActualizaVentilador=false
  
          transAnestStore.btnAddRelevos=false
          transAnestStore.btnUpdateRelevos=true
          transAnestStore.btnActualizaRelevo=false
  
          transAnestStore.btnAddEventos=false
          transAnestStore.btnUpdateEventos=true
          transAnestStore.btnActualizaEvento=false
  
          transAnestStore.btnActualizarBalance=true
          
          if(preIdStore.nuevoRegistroPaciente == false){
            await this.transAnestStore.saveDatosRelevos(this.menuTrans, preIdStore.pacienteID._id, preIdStore.pacienteCxID._id)
          }else if(preIdStore.nuevoRegistroPaciente == true){        
            await this.transAnestStore.saveNuevoDatosRelevos(this.menuTrans, preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
          }            
  
          this.menuTrans.horaRelevo = "";
          this.menuTrans.tipoRel= "RELEVO";
          this.menuTrans.matriculaRel = "";
          this.menuTrans.anestesiologoRel = "";
          this.menuTrans.observacionesRel = "";   
          
          this.cerrarModalRel();
          
          if(preIdStore.nuevoRegistroPaciente == false){
            await transAnestStore.getRelevosList(preIdStore.pacienteID._id);
          }else if(preIdStore.nuevoRegistroPaciente == true){        
            await transAnestStore.getNuevoRelevosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
          }
  
          if(preIdStore.nuevoRegistroPaciente == false){
            await transAnestStore.getEventosList(preIdStore.pacienteID._id);
          }else if(preIdStore.nuevoRegistroPaciente == true){        
            await transAnestStore.getNuevoEventosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
          }
                      
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async actualizarRelevos(r_horaRelevo: string, r_tipoRel: string, r_matriculaRel: string, 
                          r_anestesiologoRel: string, r_observacionesRel: string, r_valorGraficaRel: number) {
      try {
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
          if(preIdStore.nuevoRegistroPaciente == false){
            r_valorGraficaRel = 0;
            await transAnestStore.updateRelevos(r_tipoRel, r_horaRelevo, r_matriculaRel, r_anestesiologoRel, r_observacionesRel, r_valorGraficaRel, preIdStore.pacienteID._id);
          }else if(preIdStore.nuevoRegistroPaciente == true){     
            r_valorGraficaRel = 0;   
            await transAnestStore.updateNuevoRelevos(r_tipoRel, r_horaRelevo, r_matriculaRel, r_anestesiologoRel, r_observacionesRel, r_valorGraficaRel, preIdStore.pacienteID.pid, preIdStore.cirugiaID);
          }            
          
          this.menuTrans.horaRelevo = "";
          this.menuTrans.tipoRel= "RELEVO";
          this.menuTrans.matriculaRel = "";
          this.menuTrans.anestesiologoRel = "";
          this.menuTrans.observacionesRel = ""; 
  
          this.cerrarModalRel();
  
          if(preIdStore.nuevoRegistroPaciente == false){
            await transAnestStore.getRelevosList(preIdStore.pacienteID._id);
          }else if(preIdStore.nuevoRegistroPaciente == true){        
            await transAnestStore.getNuevoRelevosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
          }
  
          if(preIdStore.nuevoRegistroPaciente == false){
            await transAnestStore.getEventosList(preIdStore.pacienteID._id);
          }else if(preIdStore.nuevoRegistroPaciente == true){        
            await transAnestStore.getNuevoEventosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
          }
  
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async cambiarBtnActualizarRelevo(id) {
      try {
        transAnestStore.btnAddRelevos=false
        transAnestStore.btnUpdateRelevos=false
        transAnestStore.btnActualizaRelevo=true
  
        await transAnestStore.getRelevo(id);
  
        this.menuTrans.idRelevo = transAnestStore.relevos.relevoCx[0]._id;
        this.menuTrans.horaRelevo = transAnestStore.relevos.relevoCx[0].horaRelevo;
        this.menuTrans.tipoRel = transAnestStore.relevos.relevoCx[0].tipoRel;
        this.menuTrans.matriculaRel = transAnestStore.relevos.relevoCx[0].matriculaRel;
        this.menuTrans.anestesiologoRel = transAnestStore.relevos.relevoCx[0].anestesiologoRel;
        this.menuTrans.observacionesRel = transAnestStore.relevos.relevoCx[0].observacionesRel;
  
        if(preIdStore.nuevoRegistroPaciente == false){
          await transAnestStore.getRelevosList(preIdStore.pacienteID._id);
        }else if(preIdStore.nuevoRegistroPaciente == true){        
          await transAnestStore.getNuevoRelevosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
        }
  
        if(preIdStore.nuevoRegistroPaciente == false){
          await transAnestStore.getEventosList(preIdStore.pacienteID._id);
        }else if(preIdStore.nuevoRegistroPaciente == true){        
          await transAnestStore.getNuevoEventosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async actualizarRelevo() {
      try {
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
  
            transAnestStore.btnAddRelevos=false
            transAnestStore.btnUpdateRelevos=true
            transAnestStore.btnActualizaRelevo=false
  
            this.menuTrans.idRelevo = "";
            this.menuTrans.horaRelevo = "";
            this.menuTrans.tipoRel= "RELEVO";
            this.menuTrans.matriculaRel = "";
            this.menuTrans.anestesiologoRel = "";
            this.menuTrans.observacionesRel = ""; 
  
            this.cerrarModalRel();
  
            if(preIdStore.nuevoRegistroPaciente == false){
              await transAnestStore.getRelevosList(preIdStore.pacienteID._id);
            }else if(preIdStore.nuevoRegistroPaciente == true){        
              await transAnestStore.getNuevoRelevosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
            }
  
            if(preIdStore.nuevoRegistroPaciente == false){
              await transAnestStore.getEventosList(preIdStore.pacienteID._id);
            }else if(preIdStore.nuevoRegistroPaciente == true){        
              await transAnestStore.getNuevoEventosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
            }
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async validaEliminarRelevos(idRelevo: string) {
      try {
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
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async eliminarRelevo(idRelevo: string) {
      try {
        await transAnestStore.deleteRelevo(idRelevo);
  
        this.menuTrans.idRelevo = "";
        this.menuTrans.horaRelevo = "";
        this.menuTrans.tipoRel= "RELEVO";
        this.menuTrans.matriculaRel = "";
        this.menuTrans.anestesiologoRel = "";
        this.menuTrans.observacionesRel = "";
  
        transAnestStore.btnAddRelevos=false
        transAnestStore.btnUpdateRelevos=true
        transAnestStore.btnActualizaRelevo=false
  
        this.cerrarModalRel();
  
        if(preIdStore.nuevoRegistroPaciente == false){
          await transAnestStore.getRelevosList(preIdStore.pacienteID._id);
        }else if(preIdStore.nuevoRegistroPaciente == true){        
          await transAnestStore.getNuevoRelevosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
        }
  
        if(preIdStore.nuevoRegistroPaciente == false){
          await transAnestStore.getEventosList(preIdStore.pacienteID._id);
        }else if(preIdStore.nuevoRegistroPaciente == true){        
          await transAnestStore.getNuevoEventosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    //Métodos gestión de evento crítico
    async vaciarModalEve(){
      try {
        if(transAnestStore.ingresoQuirofano === true){ 
          let presionarBotonEv = document.getElementById('abrir-evento');
  
          // Crea un nuevo evento de clic
          let event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
          });
    
          // Despacha el evento de clic en el botón
          presionarBotonEv.dispatchEvent(event);

          if(this.menuTrans.horaEvento != "" && this.menuTrans.horaEvento != undefined){
            this.menuTrans.idEvento = "";
            this.menuTrans.horaEvento = "";
            this.menuTrans.tipoEve= "EVENTO";
            this.menuTrans.detalleEvento = "";
    
            transAnestStore.btnAddEventos=false
            transAnestStore.btnUpdateEventos=true
            transAnestStore.btnActualizaEvento=false
          }
        }else if(transAnestStore.ingresoQuirofano === false){
          swal.fire({
          title: "Es necesario iniciar el monitoreo primero",
          icon: "warning",
          showConfirmButton: false,
          showCloseButton: true,
          toast: true,
          timer: 3000,
          timerProgressBar: true,
          position: "top-end",
          });
        }        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    cerrarModalEve() {
      try {
        let closeButton = document.getElementById('event');
        let event = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        closeButton.dispatchEvent(event);
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async guardarEventos() {
      try {
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
          transAnestStore.btnAddMedicamentos=false
          transAnestStore.btnUpdateMedicamentos=true
          transAnestStore.btnActualizaMedicamento=false
  
          transAnestStore.btnAddVentilador=false
          transAnestStore.btnUpdateVentilador=true
          transAnestStore.btnActualizaVentilador=false
  
          transAnestStore.btnAddRelevos=false
          transAnestStore.btnUpdateRelevos=true
          transAnestStore.btnActualizaRelevo=false
  
          transAnestStore.btnAddEventos=false
          transAnestStore.btnUpdateEventos=true
          transAnestStore.btnActualizaEvento=false
  
          transAnestStore.btnActualizarBalance=true
          
          if(preIdStore.nuevoRegistroPaciente == false){
            await this.transAnestStore.saveDatosEventos(this.menuTrans, preIdStore.pacienteID._id, preIdStore.pacienteCxID._id)
          }else if(preIdStore.nuevoRegistroPaciente == true){        
            await this.transAnestStore.saveNuevoDatosEventos(this.menuTrans, preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
          }  
  
          this.menuTrans.horaEvento = "";
          this.menuTrans.tipoEve= "EVENTO";
          this.menuTrans.detalleEvento = "";   
          
          this.cerrarModalEve();
          
          if(preIdStore.nuevoRegistroPaciente == false){
            await transAnestStore.getRelevosList(preIdStore.pacienteID._id);
          }else if(preIdStore.nuevoRegistroPaciente == true){        
            await transAnestStore.getNuevoRelevosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
          }
  
          if(preIdStore.nuevoRegistroPaciente == false){
            await transAnestStore.getEventosList(preIdStore.pacienteID._id);
          }else if(preIdStore.nuevoRegistroPaciente == true){        
            await transAnestStore.getNuevoEventosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
          }
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async actualizarEventos(r_horaEvento: string, e_tipoEve: string, e_detalleEvento: string, e_valorGraficaEv: number) {
      try {
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
          if(preIdStore.nuevoRegistroPaciente == false){
            e_valorGraficaEv = 5;
            await transAnestStore.updateEventos(r_horaEvento, e_tipoEve, e_detalleEvento, e_valorGraficaEv, preIdStore.pacienteID._id);
          }else if(preIdStore.nuevoRegistroPaciente == true){   
            e_valorGraficaEv = 5;     
            await transAnestStore.updateNuevoEventos(r_horaEvento, e_tipoEve, e_detalleEvento, e_valorGraficaEv, preIdStore.pacienteID.pid, preIdStore.cirugiaID);
          }              
          
          this.menuTrans.horaEvento = "";
          this.menuTrans.tipoEve= "EVENTO";
          this.menuTrans.detalleEvento = "";
          
          this.cerrarModalEve();
  
          if(preIdStore.nuevoRegistroPaciente == false){
            await transAnestStore.getRelevosList(preIdStore.pacienteID._id);
          }else if(preIdStore.nuevoRegistroPaciente == true){        
            await transAnestStore.getNuevoRelevosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
          }
  
          if(preIdStore.nuevoRegistroPaciente == false){
            await transAnestStore.getEventosList(preIdStore.pacienteID._id);
          }else if(preIdStore.nuevoRegistroPaciente == true){        
            await transAnestStore.getNuevoEventosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
          }
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async cambiarBtnActualizarEvento(id) {
      try {
        transAnestStore.btnAddEventos=false
        transAnestStore.btnUpdateEventos=false
        transAnestStore.btnActualizaEvento=true
  
        await transAnestStore.getEvento(id);
  
        this.menuTrans.idEvento = transAnestStore.eventos.evCriticoCx[0]._id;
        this.menuTrans.horaEvento = transAnestStore.eventos.evCriticoCx[0].horaEvento;
        this.menuTrans.tipoEve = transAnestStore.eventos.evCriticoCx[0].tipoEve;
        this.menuTrans.detalleEvento = transAnestStore.eventos.evCriticoCx[0].detalleEvento;
  
        if(preIdStore.nuevoRegistroPaciente == false){
          await transAnestStore.getRelevosList(preIdStore.pacienteID._id);
        }else if(preIdStore.nuevoRegistroPaciente == true){        
          await transAnestStore.getNuevoRelevosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
        }
  
        if(preIdStore.nuevoRegistroPaciente == false){
          await transAnestStore.getEventosList(preIdStore.pacienteID._id);
        }else if(preIdStore.nuevoRegistroPaciente == true){        
          await transAnestStore.getNuevoEventosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async actualizarEvento() {
      try {
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
  
            transAnestStore.btnAddEventos=false
            transAnestStore.btnUpdateEventos=true
            transAnestStore.btnActualizaEvento=false
  
            this.menuTrans.idEvento = "";
            this.menuTrans.horaEvento = "";
            this.menuTrans.tipoEve= "EVENTO";
            this.menuTrans.detalleEvento = ""; 
  
            this.cerrarModalEve();
  
            if(preIdStore.nuevoRegistroPaciente == false){
              await transAnestStore.getRelevosList(preIdStore.pacienteID._id);
            }else if(preIdStore.nuevoRegistroPaciente == true){        
              await transAnestStore.getNuevoRelevosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
            }
  
            if(preIdStore.nuevoRegistroPaciente == false){
              await transAnestStore.getEventosList(preIdStore.pacienteID._id);
            }else if(preIdStore.nuevoRegistroPaciente == true){        
              await transAnestStore.getNuevoEventosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
            }
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async validaEliminarEventos(idEvento: string) {
      try {
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
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async eliminarEvento(idEvento: string) {
      try {
        await transAnestStore.deleteEvento(idEvento);
  
        this.menuTrans.idEvento = "";
        this.menuTrans.horaEvento = "";
        this.menuTrans.tipoEve= "EVENTO";
        this.menuTrans.detalleEvento = "";
  
        transAnestStore.btnAddEventos=false
        transAnestStore.btnUpdateEventos=true
        transAnestStore.btnActualizaEvento=false
  
        this.cerrarModalEve();
  
        if(preIdStore.nuevoRegistroPaciente == false){
          await transAnestStore.getRelevosList(preIdStore.pacienteID._id);
        }else if(preIdStore.nuevoRegistroPaciente == true){        
          await transAnestStore.getNuevoRelevosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
        }
  
        if(preIdStore.nuevoRegistroPaciente == false){
          await transAnestStore.getEventosList(preIdStore.pacienteID._id);
        }else if(preIdStore.nuevoRegistroPaciente == true){        
          await transAnestStore.getNuevoEventosList(preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    //PRUEBA DE FUNCIONAMIENTO DE OBTENCION DE HL7
    // async pruebaCom() {
    //   try {
    //     const response = await fetch(`http://${this.clienteIp}:5000/apiMVS`);
    //     const data = await response.text();
    //     this.informacion = data;
    //     this.vaciarMensajeHL7();
    //   } catch (error) {
    //     window.log.error('Ocurrió un error:', error);
    //   }
    // },

    // Eventos de Monitoreo
    async iniMSV(){
      try {        
        if(transAnestStore.ingresoQuirofano === true){ 
          if(this.btnMSV === false){
            this.apiMSV = true;
        
            this.intervalId = setInterval(() => {
              this.comMSV()
            }, 1000);

            this.capturaGrid();
          }
        }else if(transAnestStore.ingresoQuirofano === false){
          swal.fire({
          title: "Agregue el ingreso al quifófano",
          icon: "warning",
          showConfirmButton: false,
          showCloseButton: true,
          toast: true,
          timer: 3000,
          timerProgressBar: true,
          position: "top-end",
          });
        }        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }      
    },

    async finMSV(){
      // try {
      //   transAnestStore.envDat = false;
      //   this.btnCambioMonitor = false;
      //   transAnestStore.getDetieneMonitoreo();
      //   this.termRecepDatos();
      // } catch (error) {
      //   window.log.error('Ocurrió un error:', error);
      // }
      this.apiMSV = false;
      clearInterval(this.intervalId);
      clearInterval(this.saveGrid);

      if(preIdStore.nuevoRegistroPaciente == false){
        this.transAnestStore.saveDatosMSV(this.gridBD, preIdStore.pacienteID._id);
      }else if(preIdStore.nuevoRegistroPaciente == true){
        this.transAnestStore.saveNuevoDatosMSV(this.gridBD, preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
      }
      
      this.guardaDatosMSV = 0;
      this.gridBD = [];
    },

    async comMSV(){
      try {
        // console.log("Cliente IP "+this.clienteIp);
        
        const response = await fetch(`http://${this.clienteIp}:5000/apiMVS`);
        const data = await response.text();
        this.informacion = data;
        this.vaciarMensajeHL7();
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },
    
    async vaciarMensajeHL7(){
      try {
        let valoresOrdenados = Array.from({ length: 15 }, () => ({ segmento4: "", valor: "" }));
  
        //Obtiene el arreglo con el mensaje HL7
        let hl7Message = this.informacion
        
        //Separa las líneas del mensaje HL7
        if(hl7Message != null){          
          let lineas = hl7Message.split(',');

          //Obtiene las líneas OBX
          let lineasOBX = lineas.filter(function(linea) {
            return /^OBX/.test(linea);
          });

          //Obtiene los valores requeridos de las líneas OBX, en este caso los segmentos 4 y 5
          let valorSegmentos = lineasOBX.map(function(fila) {
            let segmentos = fila.split('|');
            let segmento4 = segmentos[4].replace(/\./g, "");
  
            return {
              segmento4: segmento4,
              valor: segmentos[5]
            };
          });
  
          //Ordena los valores obtenidos de los segmentos 4 y 5
          for (let index = 0; index < valorSegmentos.length; index++) {
            // Obtiene los valores de los datos del MSV para guardarlos en el grid
            switch (valorSegmentos[index].segmento4) {
              case '174147842': // FC
                FC = valorSegmentos[index];
              break;
            
              case '131149530': // Pulso
                Pulso = valorSegmentos[index];
              break;
  
              case '119150301': // PAS
                PAS = valorSegmentos[index];
              break;
            
              case '119150302': // PAD
                PAD = valorSegmentos[index];
              break;
  
              case '119150303': // PAM
                PAM = valorSegmentos[index];
              break;
            
              case '131150456': // SpO2
                SpO2 = valorSegmentos[index];
              break;
  
              case '181151708': // EtCO2
                EtCO2 = valorSegmentos[index];
              break;
            
              case '121150344': // Temp1
                Temp1 = valorSegmentos[index];
              break;
  
              case '122150344': // Temp2
                Temp2 = valorSegmentos[index];
              break;
            
              case '1112150087':// PVC
                PVC = valorSegmentos[index];
              break;
  
              case '111150037': // PAS In
                PAS_In = valorSegmentos[index];
              break;
  
              case '111150038': // PAD In
                PAD_In = valorSegmentos[index];
              break;
  
              case '111150039': // PAM In
                PAM_In = valorSegmentos[index];
              break;
  
              case '181151716': // FiCO2
                FiCO2 = valorSegmentos[index];
              break;
            
              case '181151594': // FR
                FR = valorSegmentos[index];
              break;
  
              default:
              break;
            }
          }
  
          if(FC != undefined){
            valoresOrdenados[0] = FC;
          }else if(FC == undefined){
            valoresOrdenados[0] = {segmento4:"174147842", valor:"-"}
          }
  
          if(Pulso != undefined){
            valoresOrdenados[1] = Pulso;
          }else if(Pulso == undefined){
            valoresOrdenados[1] = {segmento4:"131149530", valor:"-"}
          }
  
          if(PAS != undefined)
          {
            valoresOrdenados[2] = PAS;
          }else if(PAS == undefined){
            valoresOrdenados[2] = {segmento4:"119150301", valor:"-"}
          }
  
          if(PAD != undefined){
            valoresOrdenados[3] = PAD;
          }else if(PAD == undefined){
            valoresOrdenados[3] = {segmento4:"119150302", valor:"-"}
          }
  
          if(PAM != undefined){
            valoresOrdenados[4] = PAM;
          }else if(PAM == undefined){
            valoresOrdenados[4] = {segmento4:"119150303", valor:"-"}
          }
  
          if(SpO2 != undefined){
            valoresOrdenados[5] = SpO2;
          }else if(SpO2 == undefined){
            valoresOrdenados[5] = {segmento4:"131150456", valor:"-"}
          }
  
          if(EtCO2 != undefined){
            valoresOrdenados[6] = EtCO2;
          }else if(EtCO2 == undefined){
            valoresOrdenados[6] = {segmento4:"181151708", valor:"-"}
          }
  
          if(Temp1 != undefined){
            valoresOrdenados[7] = Temp1;
          }else if(Temp1 == undefined){
            valoresOrdenados[7] = {segmento4:"121150344", valor:"-"}
          }
  
          if(Temp2 != undefined){
            valoresOrdenados[8] = Temp2;
          }else if(Temp2 == undefined){
            valoresOrdenados[8] = {segmento4:"122150344", valor:"-"}
          }
  
          if(PVC != undefined){
            valoresOrdenados[9] = PVC;
          }else if(PVC == undefined){
            valoresOrdenados[9] = {segmento4:"1112150087", valor:"-"}
          }
  
          if(PAS_In != undefined){
            valoresOrdenados[10] = PAS_In;
          }else if(PAS_In == undefined){
            valoresOrdenados[10] = {segmento4:"111150037", valor:"-"}
          }
  
          if(PAD_In != undefined){
            valoresOrdenados[11] = PAD_In;
          }else if(PAD_In == undefined){
            valoresOrdenados[11] = {segmento4:"111150038", valor:"-"}
          }
  
          if(PAM_In != undefined){
            valoresOrdenados[12] = PAM_In;
          }else if(PAM_In == undefined){
            valoresOrdenados[12] = {segmento4:"111150039", valor:"-"}
          }
  
          if(FiCO2 != undefined){
            valoresOrdenados[13] = FiCO2;
          }else if(FiCO2 == undefined){
            valoresOrdenados[13] = {segmento4:"181151716", valor:"-"}
          }
  
          if(FR != undefined){
            valoresOrdenados[14] = FR;
          }else if(FR == undefined){
            valoresOrdenados[14] = {segmento4:"181151594", valor:"-"}
          }
  
          //Asignar los valores ordenads
          this.hl7mess.push({ datos: valoresOrdenados, horaGeneracion: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    // Recibe datos del MSV cada segundo
    // iniRecepDatos(){
      // console.log("iniRecepDatos");
      // try {
      //   this.intervalId = setInterval(() => {
      //     this.comMSV();
      //   }, 1000);
      // } catch (error) {
      //   window.log.error('Ocurrió un error:', error);
      // }
    // },

    termRecepDatos(){
      try {
        // transAnestStore.envDat = false;
        // transAnestStore.datosMSV = null;
        // clearInterval(this.intervalId);
        // clearInterval(this.saveGrid);
        
        if(preIdStore.nuevoRegistroPaciente == false){
          this.transAnestStore.saveDatosMSV(this.gridBD, preIdStore.pacienteID._id);
        }else if(preIdStore.nuevoRegistroPaciente == true){
          this.transAnestStore.saveNuevoDatosMSV(this.gridBD, preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
        }
      
        this.guardaDatosMSV = 0;
        this.gridBD = [];
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },
    
    // Agrega los datos del MSV al arreglo 'grid' cada minuto
    async capturaGrid(){
      try {
        this.saveGrid = await setInterval(() => {
          this.grid.push(this.hl7mess[this.hl7mess.length - 1]);
          this.gridBD.push(this.hl7mess[this.hl7mess.length - 1]);
          this.hl7mess = [];
                  
          // PRUEBAS DE PAS Y PAD INTRUSIVAS
          if(this.grid[this.grid.length - 1].datos[2].valor.toString() != "-" && this.grid[this.grid.length - 1].datos[3].valor.toString() != "-")
            postAnestStore.EgresoTA = this.grid[this.grid.length - 1].datos[2].valor.toString() + "/" + this.grid[this.grid.length - 1].datos[3].valor.toString();
          else
            postAnestStore.EgresoTA = this.grid[this.grid.length - 1].datos[10].valor.toString() + "/" + this.grid[this.grid.length - 1].datos[11].valor.toString();
          // HASTA AQUI SE REALIZARON LOS CAMBIOS
          postAnestStore.EgresoFC = this.grid[this.grid.length - 1].datos[0].valor;
          postAnestStore.EgresoFR = this.grid[this.grid.length - 1].datos[14].valor;
          postAnestStore.EgresoTemp = this.grid[this.grid.length - 1].datos[7].valor;
          postAnestStore.EgresoPulso = this.grid[this.grid.length - 1].datos[1].valor;
          postAnestStore.EgresoSpO2 = this.grid[this.grid.length - 1].datos[5].valor;

          this.infoNotaPost.signVitEgQx_TA = postAnestStore.EgresoTA; 
          this.infoNotaPost.signVitEgQx_FC = postAnestStore.EgresoFC;
          this.infoNotaPost.signVitEgQx_FR = postAnestStore.EgresoFR;
          this.infoNotaPost.signVitEgQx_Temperatura = postAnestStore.EgresoTemp;
          this.infoNotaPost.signVitEgQx_Pulso = postAnestStore.EgresoPulso;
          this.infoNotaPost.signVitEgQx_SpO2 = postAnestStore.EgresoSpO2;
  
          this.guardaDatosMSV = this.guardaDatosMSV +1;
          
          //Guardar datos del MSV en la BD
          if(this.guardaDatosMSV == 5){
            if(preIdStore.nuevoRegistroPaciente == false){
              this.transAnestStore.saveDatosMSV(this.gridBD, preIdStore.pacienteID._id);
            }else if(preIdStore.nuevoRegistroPaciente == true){
              this.transAnestStore.saveNuevoDatosMSV(this.gridBD, preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
            }
          
            this.guardaDatosMSV = 0;
            this.gridBD = [];
          }

          FC = null
          Pulso = null          
          SpO2 = null
          EtCO2 = null
          Temp1 = null
          Temp2 = null
          PVC = null
          PAS_In = null
          PAD_In = null
          PAM_In= null
          FiCO2 = null
          FR = null
        }, 1000 * 60);
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    // pingMSV(dirip: string){
    //   try {
    //     // medStore.statusMSV(dirip);
    //   } catch (error) {
    //     window.log.error('Ocurrió un error:', error);
    //   }
    // },

    async cambiarValorTutorial(){
      try {
        swal
          .fire({
            html: "Podrá volver a consultar el tutorial desde el menú lateral en la sección de <b>Ayuda</b>",
            icon: "info",
            showConfirmButton: true,
            showCancelButton: false,
            toast: true,
          })
          
          this.userStore.TutorialTrans = 1
          await this.userStore.updateTutorialTrans(userStore.IdMed)                        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async validarCambioCarrusel(){
      try {
        if(document.getElementById("tutoUno").ariaCurrent=="true"){
          this.tutoUno=true
          this.tutoDos=false
          this.tutoTres=false
          this.tutoCuatro=false
          this.tutoCinco=false
        }
        else if(document.getElementById("tutoDos").ariaCurrent=="true"){
          this.tutoUno=false
          this.tutoDos=true
          this.tutoTres=false
          this.tutoCuatro=false
          this.tutoCinco=false
        }
        else if(document.getElementById("tutoTres").ariaCurrent=="true"){
          this.tutoUno=false
          this.tutoDos=false
          this.tutoTres=true
          this.tutoCuatro=false
          this.tutoCinco=false
        }
        else if(document.getElementById("tutoCuatro").ariaCurrent=="true"){
          this.tutoUno=false
          this.tutoDos=false
          this.tutoTres=false
          this.tutoCuatro=true
          this.tutoCinco=false
        }
        else if(document.getElementById("tutoCinco").ariaCurrent=="true"){
          this.tutoUno=false
          this.tutoDos=false
          this.tutoTres=false
          this.tutoCuatro=false
          this.tutoCinco=true
        }
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async validarTecnica(){
      try {
        if(transAnestStore.ingresoQuirofano === true){ 
          let presionarBotonTec = document.getElementById('abrir-tecnica');
  
          // Crea un nuevo evento de clic
          let event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
          });
    
          // Despacha el evento de clic en el botón
          presionarBotonTec.dispatchEvent(event);          
        }else if(transAnestStore.ingresoQuirofano === false){
          swal.fire({
          title: "Es necesario iniciar el monitoreo primero",
          icon: "warning",
          showConfirmButton: false,
          showCloseButton: true,
          toast: true,
          timer: 3000,
          timerProgressBar: true,
          position: "top-end",
          });
        }                
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async validarVentilador(){
      try {
        if(transAnestStore.ingresoQuirofano === true){ 
          let presionarBotonVen = document.getElementById('abrir-ventilador');
  
          // Crea un nuevo evento de clic
          let event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
          });
    
          // Despacha el evento de clic en el botón
          presionarBotonVen.dispatchEvent(event);          
        }else if(transAnestStore.ingresoQuirofano === false){
          swal.fire({
          title: "Es necesario iniciar el monitoreo primero",
          icon: "warning",
          showConfirmButton: false,
          showCloseButton: true,
          toast: true,
          timer: 3000,
          timerProgressBar: true,
          position: "top-end",
          });
        }        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async validarBalance(){
      try {
        if(transAnestStore.ingresoQuirofano === true){ 
          let presionarBotonBal = document.getElementById('abrir-balance');
  
          // Crea un nuevo evento de clic
          let event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
          });
    
          // Despacha el evento de clic en el botón
          presionarBotonBal.dispatchEvent(event);          
        }else if(transAnestStore.ingresoQuirofano === false){
          swal.fire({
          title: "Es necesario iniciar el monitoreo primero",
          icon: "warning",
          showConfirmButton: false,
          showCloseButton: true,
          toast: true,
          timer: 3000,
          timerProgressBar: true,
          position: "top-end",
          });
        }        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async validarModalTendencias(){
      preIdStore.modalTendencias = false  

      this.detenerReconocimiento();
    },
  },

  
  computed: {
    tablaMedicamentos() : String[] {      
      if (this.medicSeleccionados.length === 0) {
        return this.listaMedTrans;
      } else {
        return this.listaMedTrans.filter(item => this.medicSeleccionados.includes(item));
      }
    },

    saltoArreglo() : any[]{
      const step = this.stepSize;
      const filas = this.grid.filter((itemMSV, index) => index % step === 0);    

      this.$nextTick(() => {
      // Desplazar automáticamente el scroll hacia la derecha y hacia arriba
        let filaContenedor = document.getElementById('grid');
        filaContenedor.scrollBy({
          left: filaContenedor.scrollWidth,
          top: -filaContenedor.scrollTop,
          behavior: 'smooth'
        });
      });     
      
      return filas;
    },

    medicamentosAgrupados(): GrupoMedicamento[] {
      // Verifica que `medicamentos` tenga al menos un elemento
      if (!this.transAnestStore.medicamentos || this.transAnestStore.medicamentos.length === 0) {
        return [];
      }

      const medicamentos = this.transAnestStore.medicamentos[0].medicamentosCx;
      const grouped: { [key: string]: { bolo?: number; unidadBolo?: string; infusion?: number; unidadInfusion?: string; total?: number; unidadTotal?: string } } = {};

      medicamentos.forEach((med) => {
        if (!grouped[med.medicamento]) {
          grouped[med.medicamento] = {};
        }
        if (med.tipoMed === 'Bolo') {
          if (grouped[med.medicamento].bolo) {
            grouped[med.medicamento].bolo += Number(med.dosisMed);
          } else {
            grouped[med.medicamento].bolo = Number(med.dosisMed);
            grouped[med.medicamento].unidadBolo = med.unidadMed;
          }
        } else if (med.tipoMed === 'Infusión') {
          if (grouped[med.medicamento].infusion) {
            grouped[med.medicamento].infusion += Number(med.dosisMed);
          } else {
            grouped[med.medicamento].infusion = Number(med.dosisMed);
            grouped[med.medicamento].unidadInfusion = med.unidadMed;
          }
        }
      });

      Object.keys(grouped).forEach(key => {
        const bolo = grouped[key].bolo || 0;
        const infusion = grouped[key].infusion || 0;
        grouped[key].total = bolo + infusion;
        grouped[key].unidadTotal = grouped[key].unidadBolo || grouped[key].unidadInfusion;
      });

      return Object.keys(grouped).map((key) => ({
        medicamentoN: key,
        ...grouped[key],
      }));
    },
  },
})
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>
.checkbox-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.checkbox-item {
  display: flex;
  align-items: center;
}

.alinear-icono-nota{
    margin-top: 6px;
}

.microfono-off{
    text-align: right;
    cursor: pointer;
}

.microfono-on{
    text-align: right;
    cursor: pointer;
    color: #E88300;
}

.grafica-div {
  position: relative;
}
#app {
  font-family: SF UI Display;
  src: url("@/assets/fonts/SF-UI-Display-Regular.otf") format("opentype");
}
.div-spinner{
  display: none;
  position: absolute; 
  background-color: #002d60; 
  width: 100%; 
  height: 100%; 
  left: 0; 
  right: 0;
  bottom:0;
  top:0;
  z-index: 9999;
  border-radius: 5px;
}
.div-spinner-on{
  display: block;
  position: absolute; 
  background-color: #002d60; 
  width: 100%; 
  height: 100%; 
  left: 0; 
  right: 0;
  bottom:0;
  top:0;
  z-index: 9999;
  border-radius: 5px;
}
.div-none{
  display:none;
}
.div-block{
  display:block;
}
.txt-spinner{
  position: relative; 
  left: 40%; 
  top: 45%;
}
.bordePrincipal {
    width: 110%;
}
.margen-div-barra{
  margin-top: 110px;
}
/* Menú lateral */
.alinear-btn{
    align-self: self-end;
}
.ajusteImg{
  width: 100%;
  height: 100%;
}
.menuLateralPrincipal {
    margin-top: 0px;
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
/* Scroll´s */
.deslizar {
  overflow: scroll;
  overflow-x: hidden;
  height: 150px;
  margin-top: 0px;
}
.deslizar-grid{
  overflow: scroll;
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
  height: 620px;
  margin-top: 0px;
}
.deslizar-grid-lateral{
  overflow-y: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  scroll-behavior: smooth;
  height: 620px;
  margin-top: 0px;  
}
#grid-lateral::-webkit-scrollbar {
  width: auto;
  height: auto;  
}
#grid-lateral::-webkit-scrollbar-track {
  background-color: transparent;
}
#grid-lateral::-webkit-scrollbar-thumb {
  background-color: blur(40px) brightness(97%);
}
.deslizar-balance {
  overflow: scroll;
  overflow-x: hidden;
  margin-top: 10px;
}
.deslizar-balance-parcial-principal {
  overflow: scroll;
  overflow-x: hidden;
  margin-top: 5px;
  height: 340px !important;
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
.deslizar-balance-parcial {
  overflow: scroll;
  overflow-x: hidden;
  height: 320px;
  margin-top: 15px;
}
/* Botones */
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
.btn-guardar-balance-parcial {
  --bs-btn-bg: #A0A6B2;
  --bs-btn-color: #ffffff;
  --bs-btn-border-color: #A0A6B2;
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
.btn-abajo{
    text-align: end;  
}
/* Estilos de modales */
.modal-med-largo {
  height: auto;
}
hr {
    margin: 1rem 0;
    color: #A0A6B2;
    border: 0;
    border-top: 1px solid;
    opacity: 1;
}
.hr-grid{
  color: #002D60 !important;
}
.dropdown-menu{
  --bs-dropdown-min-width: 9.2rem;
  --bs-dropdown-padding-x: 0;
  --bs-dropdown-padding-y: 0;
  border-color: #002D60;
  --bs-dropdown-border-width: 0.5px;
}
.estiloDropDownBalance{
  width: auto; height: 400px;
}
.color-dropdown {
  background-color: #002d60;
}
.btn.disabled, .btn:disabled, fieldset:disabled .btn {
    color: #E8EBEF;
    pointer-events: none;
    background-color: #E8EBEF;
    opacity: 1;
}
/* Menu Medicamentos */
.vista-medicamentos{
  height: 365px;
  background-color: white;
  padding: 0.5rem;
  border-radius: 10px;
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
/* Menu Eventos/Relevos */
.vista-eventos-relevos{
  height: 255px;
  background-color: white;
  padding: 0.5rem;
  border-radius: 10px;
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
/* Botón mostrar/ocultar vista previa */
.menu-vista-previa {
    display: flex;
    flex-direction: column;
    row-gap: 10px;    
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
/* Celdas Grid MSV */
.vista-grid-monitoreo{
  height: 630px;
  backdrop-filter: blur(40px) brightness(97%);
  padding: 0.5rem;
  border-radius: 10px;
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
.celda-msv{
  background-color: white; 
  border: solid; 
  border-color: #DBDEE2; 
  border-radius: 5px; 
  text-align: center; 
  color:#002D60; 
  height: auto; 
  width: 55px;
}
/* Buscador en input tipo select */
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
/* Colores valores MSV */
.color-msv-174147842{
  color:#00A597
}
.color-msv-131149530{
  color:#7589BE
}
.color-msv-119150301{
  color:#EC5A55
}
.color-msv-119150301{
  color:#A1C5E3
}
.color-msv-119150303{
  color:#EC6618
}
.color-msv-131150456{
  color:#44A3D3
}
.color-msv-181151708{
  color:#70E5E1
}
.color-msv-121150344{
  color:#9D9D9D
}
.color-msv-122150344{
  color:#AE231E
}
.color-msv-1112150087{
  color:#4D9DB7
}
.color-msv-181151716{
  color:#022B9B
}
.color-msv-181151594{
  color:#FFC400
}
.color-msv-111150037{
  color:rgb(198, 27, 27)
}
.color-msv-111150038{
  color:rgb(198, 27, 27)
}
.color-msv-111150039{
  color:rgb(198, 27, 27)
}

/* Menú estatico */
.c-fixed{
  position: fixed;
}
.c-sticky{
  position: sticky;
}
.posicion-estatica {
  bottom: 0;
  margin-top: 10px;  
  z-index: 1020;
  background-color: #002D60;
  padding: 1rem;
  border-radius: 5px !important;
  color: #ffffff;
  width: 57.5%;
  cursor: pointer;  
}
.img-vista-rapida{
  width: 35px;
  height: auto;
  float: left;
}
.posicion-estatica-arriba {
  bottom: 0;
  z-index: 1020;
  margin-top: 5px; 
  background-color: #002D60;
  padding: 1rem;
  border-radius: 5px !important;
  color: #ffffff;
  height: 30%;
  cursor: pointer
}
.img-vista-rapida-arriba{
  width: 60px;
  float: left;
}
.bordeColumna{
  margin-left: auto;
  margin-right: auto;
  border-right: 1px solid #ffffff;
  border-left: 1px solid #ffffff;  
}
.borde-row{
  margin-right: auto;
  border-right: 1px solid #ffffff;
}
.columna-size-1{
  height: 50%;
}
.columna-size-2{
  height: 40%;
}
/* Puntero mano */
.cursor-puntero{
  cursor: pointer;
}
.cursor-default{
  cursor:default;
}
/* Modal tutorial */
.modal-tut-largo {
  height: 510px;
}
.div-carrusel{
  text-align: -webkit-center;
}
.img-carrusel{
  width: inherit;
}
.carousel-indicators [data-bs-target] {
  background-color: #E88000 !important;
}
.carousel-indicators{
  margin-bottom: 0;
}
.accordion{
  --bs-accordion-bg: #EEF1F4 !important;
}
.accordion-button{
  color: #1F315A !important
}
.color-desactivo-acordeon{
  color: #00123B
}
.color-activo-acordeon{
  color: #E88000
}
</style>