<template>
  <header>
    <barra-navegacion/>
  </header>
  <div class="margen-div-barra">

    <div class="input-group mb-3">
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

          <div class="col-md-4"></div>

          <div class="col-md-2">
            <button type="button"
                    class="btn btn-menu fw-bold"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"> RELEVO </button>
            <!--Botón para abrir el dropdown-->
            <form class="dropdown-menu p-5">
              <div class="mb-3 input-group mb-3"></div>
            </form>
          </div>

          <div class="col-md-2">
            <button type="button"
                    class="btn btn-menu fw-bold"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"> EVENTO CRITICO </button>
            <!--Botón para abrir el dropdown-->
            <form class="dropdown-menu p-5">
              <div class="mb-3 input-group mb-3"></div>
            </form>
          </div>

          <div class="col-md-1">
            <button type="button"
                    class="btn btn-menu fw-bold">Imprimir</button>
          </div>
        </div>
      </div>

      <!-- Tiempos quirurgicos -->
      <div class="col-md-12 row g-3">
        <div class="col-md-9">
          <div class="row g-3 mb-3">
                
            <div class="col-md-2">
              <button class="btn btn-menu fw-bold" type="button" @click.right="obtenerHora">
                  <label>QX IN <small class="fw-normal">{{hora}}</small></label>
              </button>              
            </div>
            
            <div class="col-md-2 dropdown-center">
              <button type="button"
                      class="btn btn-menu fw-bold"
                      @click.right="obtenerHora" aria-expanded="false" data-bs-toggle="dropdown" data-bs-auto-close="outside"> 
                      <label>ANES IN <small class="fw-normal">{{hora}}</small></label> 
              </button>    
              <ul class="" id="dropdownHora">
                <form class="dropdown-menu p-1 color-dropdown text-center">
                  <label class="text-white fw-bold">Modificar Tiempo</label>
                  <input class="form-control" id="appt-time" type="time" v-model="hora" step="300">
                </form>
              </ul>                
            </div>

            <div class="col-md-2 dropdown-center"> 
              <button type="button"
                      class="btn btn-menu fw-bold"
                      @click.right="obtenerHora" aria-expanded="false" data-bs-toggle="dropdown" data-bs-auto-close="outside"> 
                      <label>CX IN <small class="fw-normal">{{hora}}</small></label> 
              </button>
              <ul class="" id="dropdownHora">
                <form class="dropdown-menu p-1 color-dropdown text-center">
                  <label class="text-white fw-bold">Modificar Tiempo</label>
                  <input class="form-control" id="appt-time" type="time" v-model="hora" step="300">
                </form>
              </ul>           
            </div>

            <div class="col-md-2 dropdown-center"> 
              <button type="button"
                      class="btn btn-menu fw-bold" 
                      @click.right="obtenerHora" aria-expanded="false" data-bs-toggle="dropdown" data-bs-auto-close="outside"> 
                      <label>CX OUT <small class="fw-normal">{{hora}}</small></label>
              </button>           
              <ul class="" id="dropdownHora">
                <form class="dropdown-menu p-1 color-dropdown text-center">
                  <label class="text-white fw-bold">Modificar Tiempo</label>
                  <input class="form-control" id="appt-time" type="time" v-model="hora" step="300">
                </form>
              </ul> 
            </div>

            <div class="col-md-2 dropdown-center">    
              <button type="button"
                      class="btn btn-menu fw-bold" 
                      @click.right="obtenerHora" aria-expanded="false" data-bs-toggle="dropdown" data-bs-auto-close="outside"> 
                      <label>ANES OUT <small class="fw-normal">{{hora}}</small></label>
              </button>    
              <ul class="" id="dropdownHora">
                <form class="dropdown-menu p-1 color-dropdown text-center">
                  <label class="text-white fw-bold">Modificar Tiempo</label>
                  <input class="form-control" id="appt-time" type="time" v-model="hora" step="300">
                </form>
              </ul>     
            </div>

            <div class="col-md-2">    
              <button type="button"
                      class="btn btn-menu fw-bold" 
                      @click.right="obtenerHora"> 
                      <label>QX OUT <small class="fw-normal">{{hora}}</small></label>
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

      <div class="col-9 divform navbar-nav">
        <!--Lista para el menú principal-->
        <ul class="nav text-center" id="">
          <li class="col-md-3">
            <button type="button"
                    class="btn btn-nav-bar fw-bold"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"> GRID ANESTÉSICO </button>
            <!--Botón para abrir el dropdown-->
            <form class="dropdown-menu p-5">
              <div class="mb-3 estiloDropDown input-group mb-3"></div>
            </form>
          </li>

          <!-- Técnica Anestésica Final -->
          <li class="col-md-3">
            <button type="button"
                    class="btn btn-nav-bar fw-bold"
                    @click="clickTAbtn"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close = "outside"> TÉCNICA ANESTÉSICA </button>

            <form @submit.prevent="" class="dropdown-menu p-4 color-dropdown">
              <div class="mb-3 estiloDropDownTecnica row g-3">
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

                <div class="col-md-8"></div>

                <div class="col-md-4 alinear-btn">                    
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
            </form>
          </li>

          <!-- Balance Hídrico -->
          <li class="col-md-3">
            <button type="button" class="btn btn-nav-bar fw-bold" 
                    data-bs-toggle="dropdown" aria-expanded="false" 
                    data-bs-auto-close="outside">BALANCE HIDRICO</button>

            <div class="col-md-12" id="">
              <form @submit.prevent="" class="dropdown-menu p-4 color-dropdown">
                <div class="estiloDropDownBalance row g-3 deslizar-balance">
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
                  <div class="col-md-9"></div>

                  <!-- Botón guardar/actualizar -->
                  <div class="col-md-3 alinear-btn">
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
              </form>
            </div>
          </li>

          <!-- Datos del ventilador -->
          <li class="col-md-3">
            <button type="button"
                    class="btn btn-nav-bar fw-bold"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside">DATOS DEL VENTILADOR</button>
            <form @submit.prevent="" class="dropdown-menu p-4 color-dropdown">
              <div class="mb-3 estiloDropDownVentilador row g-3">
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
                <div class="table-responsive">
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
            </form>
          </li>
        </ul>
      </div>      

      <div class="col-2 fw-bold">
        <div class="centrarLabel">
          <h4><span id="clock"></span></h4>
        </div>
      </div>
    </div>

    <div class="input-group mb-3 bordePrincipal">
      <div class="tab-content col-md-9" id="">
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
document.oncontextmenu = (event) => {
  event.preventDefault();
}

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

      hora: "--:--"
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
  },

  methods: {
      async mueveReloj() {
        const clock: HTMLSpanElement = document.getElementById('clock');

        setInterval(()=> {
          const date: Date = new Date();
          clock.innerText = date.toLocaleTimeString('es-MX', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          });
        }, 1000);
      },

      async guardarDatosV() {
        this.btnAddVentilador=false
        this.btnUpdateVentilador=true
        this.btnActualizaVentilador=false

        this.menuTrans.Hr = document.getElementById('clock').textContent;
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
        this.menuTrans.Hr = document.getElementById('clock').textContent;
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
                this.menuTrans.Hr = document.getElementById('clock').textContent;
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

      obtenerHora() {
        var hoy = new Date();
        this.hora=  ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes()
        console.log(this.hora)
      },

      abirDropDown(){      
        document.getElementById('dropdownHora').className='dropdown-menu show';             
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
  margin-top: 120px;
}
.menuLateralPrincipal {
    margin-top: 65px;
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
  margin-left: 28px;
  text-align: center;
}
.menu-pre-post {  
  width: 200px;
  height: auto;
  background-color: #d6d6d6;
  padding: 0rem;
  border-radius: 10px;
  margin-left: 28px;
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
.estiloDropDown{
  width: 450px; height: 250px;
}
.estiloDropDownTecnica{
  width: 450px; height: auto;
}
.estiloDropDownBalance{
  width: 650px; height: 400px;
}
.estiloDropDownVentilador{
  width: 650px; height: auto;
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
  margin-top: 0px;
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
    width: -webkit-fill-available; 
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
  width: 130px;
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
.btn-abajo{
    text-align: end;  
}
hr {
    margin: 1rem 0;
    color: white;
    border: 0;
    border-top: 1px solid;
    opacity: 1;
}
.dropdown-menu{
  --bs-dropdown-padding-x: 0;
  --bs-dropdown-padding-y: 0;
  border:none
}
</style>