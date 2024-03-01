<template>
  <header @click.stop="replegarMenuVistaRapida">
      <barra-navegacion/>
  </header>
  <div class="margen-div-barra" @click.stop="replegarMenuVistaRapida">
    <div class="input-group mb-3">
      <div class="col-md-4">
        <!--Buscador-->          
        <el-input v-model="idStore.numExpediente" @keyup.capture="obtenerPaciente" class="form-control-input" placeholder="Buscar número de expediente..." />
          <span class="password-icon show-password" id="mostrar">
            <font-awesome-icon icon="fa-solid fa-circle-xmark" @click="vaciarInputs"/>
          </span>
          <el-card v-show="mostrarDatosFiltradosExp" class="filtered-container" v-if="opcionExp.length">
              <div v-for="(item, index) in opcionExp" :key="index" @click="selecDatoExp(item)">                                        
                  <p>{{ item }}</p> <!-- Mostrar los datos filtrados -->
              </div>
          </el-card>
      </div>

      <div class="col-md-2">
        <button type="button" id="tutorial-pre" class="btn btn-secondary fw-bold" @click="obtenerInformacion">
          Prueba {{ clienteIp }}
        </button>
      </div>

      <!-- Botón tutorial -->
      <div class="col-md-2">
        <button type="button" id="tutorial-pre" class="btn btn-secondary fw-bold invisible" data-bs-toggle="modal" data-bs-target="#tutorialPreModal">
          Modal Tutorial
        </button>
      </div>

      <!--Botón Nuevo registro-->
      <div class="col-md-2">
        <div class="centrarBoton">
          <button class="btn btn-icono fw-bold" :disabled="nuevoRegistro == false ? true : false" @click="crearNuevoRegistroExpediente">
            <img class="btn-registro"
                 src="../../../public/images/imgIcon/nuevo.svg"/> Nuevo Registro </button>
        </div>
      </div>
      
      <!--Botón Historial-->
      <div class="col-md-2">
        <div class="alinearBotonDerecha">
          <button class="btn btn-icono fw-bold" :disabled="historialPaciente == false ? true : false" 
                  data-bs-toggle="modal" data-bs-target="#modal-historial" @click="">
            <img class="btn-historial"
                 src="../../../public/images/imgIcon/historial-pac.svg"/> Historial Paciente </button>
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
                        <h5 class="text-black fw-bold col-md-11">GRID ANESTÉSICO</h5>
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
                          <Line class="" id="my-chart-pre" :options="chartOptions" :data="chartData" :key="chartKey"/>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Abrir el modal de Historial-->
      <div class="modal" ref="historialModal" id="modal-historial" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content color-dropdown">
            <div class="input-group mb-3">
              <div class="modal-body deslizar">
                <div class="col-md-12">
                  <div class="row g-3">     
                    <h5 class="text-white text-center fw-bold">{{ idStore.NombrePaciente + " " + idStore.numeroExpediente }}</h5>

                    <table class="table table-responsive text-white">
                      <thead>
                        <tr>
                          <th>Anestesiólogo</th>
                          <th>Cirujano</th>
                          <th>Cirugía</th>
                          <th>Fecha Cx</th>
                          <td></td>
                        </tr>
                      </thead>

                      <tbody class="">
                        <tr v-for="(cirugia) in listaCirugias">
                          <td class="text-white">
                            {{ cirugia.anestesiologo }}
                          </td>

                          <td class="text-white">
                            {{ cirugia.cirujano }}
                          </td>

                          <td class="text-white">
                            {{ cirugia.cirugia }}
                          </td>

                          <td class="text-white">
                            {{ cirugia.fechaCx }}
                          </td>

                          <!-- Seleccionar -->
                          <td>
                            <button class="btn fw-bold btn-historial" data-bs-toggle="modal" data-bs-target="#modal-grid" @click="obtenerCirugia(cirugia._id)">
                              <span>
                                  <font-awesome-icon icon="fa-solid fa-file-pdf" size="lg"/>
                              </span>
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

    <div class="input-group mb-3">
      <div class="col-10 divform navbar-nav">
        <!--Lista para el menú principal-->
        <ul class="nav nav-pills nav-fill text-center" id="">
          <li class="nav-item col-md-3">
            <!--Se asigna el contenedor al que apuntara el elemento por medio de data-bs-target-->
            <button :class="esPaciente == true ? 'btn-barra-act fw-bold active' : 'btn-barra-des fw-bold'"
                    id="id-tab"
                    href="#pre-id"
                    data-bs-toggle="tab"
                    type="submit"
                    aria-selected="true"
                    @click="validaSeleccionId()" v-bind:disabled="deshabilitado"> ID PACIENTE </button>
          </li>

          <li class="nav-item col-md-3">
            <button :class="esValoracion == true ? 'btn-barra-act fw-bold active' : 'btn-barra-des fw-bold'"
                    id = "valoracion-tab"
                    href="#pre-valoracion"
                    data-bs-toggle="tab"
                    aria-selected="false"
                    @click="validaSeleccionValoracion()"
                    v-bind:disabled="deshabilitado"> VALORACIÓN </button>
          </li>

          <li class="nav-item col-md-3">
            <button :class="esPlan == true ? 'btn-barra-act fw-bold active' : 'btn-barra-des fw-bold'"
                    id="plan-tab"
                    href="#pre-plan"
                    data-bs-toggle="tab"
                    aria-selected="false"
                    @click="validaSeleccionPlan()"
                    v-bind:disabled="deshabilitado"> PLAN </button>
          </li>

          <li class="nav-item col-md-3" >
            <button :class="esNota == true ? 'btn-barra-act fw-bold active' : 'btn-barra-des fw-bold'"
                    id="nota-tab"
                    href="#pre-nota"
                    data-bs-toggle="tab"
                    aria-selected="false"
                    @click="validaSeleccionNota()"
                    v-bind:disabled="deshabilitado"> NOTA </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="input-group mb-3 bordePrincipal"> 
      <!--Redirecciona al contenedor seleccionado, cargando la información del componente-->
      <div class="tab-content col-md-9" id="">
        <div class="tab-pane fade show active" id="pre-id">
          <id @recibe-datos="actualizaDatos"
              @validar="validaExpedienteId"
              :propNumExp="numExpB"
              :propNomPac="nomPacB"
              :propRojoNum="bordeRojoNum"
              :propVerdeNum="bordeVerdeNum"
              :propRojoNom="bordeRojoNom"
              :propVerdeNom="bordeVerdeNom"
              :propBtnGuardarId="btnGuardarId"
              :propBtnActualizarId="btnActualizarId"
              :propBtnNuevoGuardarId="btnNuevoGuardarId"
              :propBtnNuevoActualizarId="btnNuevoActualizarId"
              
              :propId="idPaciente"
              :propNumeroExp="numeroExpediente"
              :propNombrePac="nombrePaciente"
              :propFechaNacimiento="fechaNacimiento"
              :propEdad="edad"
              :propGenero="genero"
              :propBloquearInputsPrincipales="bloquearInputsPrincipales"
              :propBloquearInputs="bloquearInputs"
              
              ref="refId"/>
            </div>
            <!-- :propNacionalidad="nacionalidad"
            :propCURP="CURP"
            :propEstadoNacimiento="estadoNacimiento" -->

        <div class="tab-pane fade" id="pre-valoracion">
          <valoracion ref="refValoracion"/>
        </div>
        
        <div class="tab-pane fade" id="pre-plan">
          <plan ref="refPlan"/>
        </div>
        
        <div class="tab-pane fade" id="pre-nota">
          <nota ref="refNota"/>
        </div>
      </div>

      <!--Menú lateral-->
      <div class="col-2 menuLateralPrincipal">        
        <div class="col-md-2 menu-pre">
          <img src="../../../public/images/pre.svg" class="img-menu-lateral"/>
        </div>
        
        <div :class="numExpediente != '' && nomPaciente != '' ?
                    'col-md-2 menu-trans-post' : 'col-md-2 menu-desactivado'">
          <RouterLink to="trans"
                      class="" id="menu-trans">
            <img src="../../../public/images/trans.svg" class="img-menu-lateral" @click="guardarDatos()"/>
          </RouterLink>
        </div>
        
        <div :class="numExpediente != '' && nomPaciente != '' ?
                    'col-md-2 menu-trans-post' : 'col-md-2 menu-desactivado'">
          <RouterLink to="post"
                      class="" id="menu-post">
            <img src="../../../public/images/post.svg" class="img-menu-lateral" @click="guardarDatos()"/>
          </RouterLink>
        </div>

        <!-- Botón para subir -->
        <div class="container col-md-1">
          <button @click="topFunction()"
                  class="btn btn-arriba fw-bold"
                  id="btnArriba"
                  title="Go to top">
            <font-awesome-icon icon="fa-solid fa-angle-up" size="2xl" />
          </button>
        </div>
      </div>   
      
      <!-- Menú vista rápida desplegada -->
      <div class=" text-center posicion-estatica-arriba fw-bold container col-md-9" :class="idStore.VistaRapida == true ? 'c-sticky' : 'invisible c-fixed'" @click.stop="replegarMenuVistaRapida()">
          <label class="form-label text-white fw-bold" :class="idStore.numeroExpediente == '' || idStore.numeroExpediente == undefined ? 'invisible':''"> 
            #Expediente: {{ idStore.numeroExpediente == '' || idStore.numeroExpediente == undefined ? '-': idStore.numeroExpediente}}
          </label>
        <div class="row columna-size-1 mb-4 mt-2">
          <div class="col borde-row">           
            <img class="img-vista-rapida-arriba" src="../../../public/images/imgIcon/paciente_cuadro.png">                              
            <label class="form-label text-white" :class="idStore.NombrePaciente == '' || idStore.NombrePaciente == undefined ? 'invisible':''"> 
              {{ idStore.NombrePaciente == '' || idStore.NombrePaciente == undefined ? '-': idStore.NombrePaciente }}
            </label>
            <br>
            <label class="form-label text-white" :class="idStore.edadPaciente == '' || idStore.edadPaciente == undefined ? 'invisible':''"> 
              {{ idStore.edadPaciente == '' || idStore.edadPaciente == undefined ? '-': idStore.edadPaciente }} años
            </label>
            &nbsp&nbsp&nbsp&nbsp&nbsp
            <label class="form-label text-white" :class="idStore.generoPaciente == '' || idStore.generoPaciente == undefined ? 'invisible':''"> 
              {{ idStore.generoPaciente == '' || idStore.generoPaciente == undefined ? '-': idStore.generoPaciente }}
            </label>
            &nbsp&nbsp&nbsp&nbsp&nbsp
            <label class="form-label text-white" :class="idStore.fechaNacimientoPaciente == '' || idStore.fechaNacimientoPaciente == undefined ? 'invisible':''"> 
              {{ idStore.fechaNacimientoPaciente == '' || idStore.fechaNacimientoPaciente == undefined ? '-': idStore.fechaNacimientoPaciente }}
            </label>
          </div>
          
          <div class="col">
            <img class="img-vista-rapida-arriba" src="../../../public/images/imgIcon/anestesiologo_cuadro.png">
            <label class="form-label text-white" :class="idStore.NombreAnestesiologo == '' || idStore.NombreAnestesiologo == undefined ? 'invisible':''">
              {{ idStore.NombreAnestesiologo == '' || idStore.NombreAnestesiologo == undefined ? '-': idStore.NombreAnestesiologo }}            
            </label>
          </div>
        </div>

        <div class="row columna-size-2">
          <div class="col borde-row"> 
            <img class="img-vista-rapida-arriba" src="../../../public/images/imgIcon/cirujano_cuadro.png">
            <label class="form-label text-white" :class="idStore.NombreCirujano == '' || idStore.NombreCirujano == undefined ? 'invisible':''">            
              {{ idStore.NombreCirujano == '' || idStore.NombreCirujano == undefined ? '-': idStore.NombreCirujano }}
            </label>
          </div>

          <div class="col"> 
            <img class="img-vista-rapida-arriba" src="../../../public/images/imgIcon/cirugia_cuadro.png">
            <label class="form-label text-white" :class="idStore.NombreCirugia == '' || idStore.NombreCirugia == undefined ? 'invisible':''">            
              {{ idStore.NombreCirugia == '' || idStore.NombreCirugia == undefined ? '-': idStore.NombreCirugia }}
            </label>
          </div>
        </div>                  
      </div>
      
    </div>

    <!-- Menú vista rápida -->
    <div class="text-center posicion-estatica fw-bold container" :class="idStore.VistaRapida == false ? 'c-fixed' : 'c-fixed invisible'" @click.stop="desplegarMenuVistaRapida()">
      <div class="row">
        <div class="col bordeColumna">           
          <img class="img-vista-rapida" src="../../../public/images/imgIcon/paciente.png">          
          <label class="form-label text-white" :class="idStore.NombrePaciente == '' || idStore.NombrePaciente == undefined ? 'invisible':''"> 
            {{ idStore.NombrePaciente == '' || idStore.NombrePaciente == undefined ? '-': 
               idStore.NombrePaciente.length > 30 ? idStore.NombrePaciente.substring(0,30) + '...' : idStore.NombrePaciente }}
          </label>
        </div>
        
        <div class="col">
          <img class="img-vista-rapida" src="../../../public/images/imgIcon/anestesiologo.png">
          <label class="form-label text-white" :class="idStore.NombreAnestesiologo == '' || idStore.NombreAnestesiologo == undefined ? 'invisible':''">
            {{ idStore.NombreAnestesiologo == '' || idStore.NombreAnestesiologo == undefined ? '-': 
               idStore.NombreAnestesiologo.length > 30 ? idStore.NombreAnestesiologo.substring(0,30) + '...' : idStore.NombreAnestesiologo }}            
          </label>
        </div>
        
        <div class="col bordeColumna"> 
          <img class="img-vista-rapida" src="../../../public/images/imgIcon/cirugia.png">
          <label class="form-label text-white" :class="idStore.NombreCirugia == '' || idStore.NombreCirugia == undefined ? 'invisible':''">            
            {{ idStore.NombreCirugia == '' || idStore.NombreCirugia == undefined ? '-' : 
               idStore.NombreCirugia.length > 30 ? idStore.NombreCirugia.substring(0, 30) + '...': idStore.NombreCirugia }}
          </label>
        </div>
      </div>
    </div>

    <!-- Modal tutorial Pre -->
    <div class="modal" id="tutorialPreModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
      <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content color-modal modal-med-largo">
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
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <b>PRE-ANÉSTESICO</b>
                        </button>
                      </h1>
                      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <label type="button"
                            :class="tutoUno == true ? 'color-activo-acordeon active' : 'color-desactivo-acordeon'"  
                            data-bs-target="#carousel-pre1" data-bs-slide-to="0" aria-label="Slide 1" @click="validarCambioCarrusel">
                            Inf. del paciente
                          </label><br><br>
                          <label type="button" 
                            :class="tutoDos == true ? 'color-activo-acordeon active' : 'color-desactivo-acordeon'"
                            data-bs-target="#carousel-pre1" data-bs-slide-to="1" aria-label="Slide 2" @click="validarCambioCarrusel">
                            Barra de búsqueda
                          </label><br><br>
                          <label type="button"
                            :class="tutoTres == true ? 'color-activo-acordeon active' : 'color-desactivo-acordeon'"
                            data-bs-target="#carousel-pre1" data-bs-slide-to="2" aria-label="Slide 3" @click="validarCambioCarrusel">
                            Modulos
                          </label><br><br>
                          <label type="button"
                            :class="tutoCuatro == true ? 'color-activo-acordeon active' : 'color-desactivo-acordeon'"
                            data-bs-target="#carousel-pre1" data-bs-slide-to="3" aria-label="Slide 4" @click="validarCambioCarrusel">
                            Barra de estado
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" disabled>
                          <b>TRANS-ANÉSTESICO</b>
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          
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
                  <div id="carousel-pre1" class="carousel slide">
                    <div class="carousel-indicators">
                      <button type="button" id="tutoUno" data-bs-target="#carousel-pre1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" @click="validarCambioCarrusel"></button>
                      <button type="button" id="tutoDos" data-bs-target="#carousel-pre1" data-bs-slide-to="1" aria-label="Slide 2" @click="validarCambioCarrusel"></button>
                      <button type="button" id="tutoTres" data-bs-target="#carousel-pre1" data-bs-slide-to="2" aria-label="Slide 3" @click="validarCambioCarrusel"></button>
                      <button type="button" id="tutoCuatro" data-bs-target="#carousel-pre1" data-bs-slide-to="3" aria-label="Slide 4" @click="validarCambioCarrusel"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active div-carrusel">
                        <img src="../../../public/images/tutorial/pre-info.png" class="d-block img-carrusel">
                      </div>
                      <div class="carousel-item div-carrusel">
                        <img src="../../../public/images/tutorial/pre-barra-busqueda.png" class="d-block img-carrusel">
                      </div>
                      <div class="carousel-item div-carrusel">
                        <img src="../../../public/images/tutorial/pre-modulos.png" class="d-block img-carrusel">
                      </div>
                      <div class="carousel-item div-carrusel">
                        <img src="../../../public/images/tutorial/pre-barra-estado.png" class="d-block img-carrusel">
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
</template>

<script lang="ts">
window.onbeforeunload = function(e) {
  return 'Texto de aviso';
};

import { defineComponent } from "vue"
import Id from "../../components/pre/Id.vue";
import Valoracion from "../../components/pre/Valoracion.vue";
import Plan from "../../components/pre/Plan.vue";
import Nota from '../../components/pre/Nota.vue';
import swal from 'sweetalert2';
import BarraNavegacion from "../../components/barraNavegacion.vue";
import { Tab } from 'bootstrap';
import { usePreIdStore } from '../../stores/preId-store';
import { useTransAnestStore } from "@/stores/transAnest-store";
import { usePostAnestStore } from "@/stores/postAnest-store";
import { useUserStore } from "@/stores/user-store";
import Multiselect from '@vueform/multiselect';
import { Line } from 'vue-chartjs';
import { ElInput, ElCard } from 'element-plus';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
import html2canvas from 'html2canvas';
import zoomPlugin from 'chartjs-plugin-zoom';
import axios from 'axios';
import pdfFonts from "pdfmake/build/vfs_fonts.js";
import pdfMake from "pdfmake/build/pdfmake";
// window.pdfMake.fonts = pdfFonts.pdfMake;

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, zoomPlugin);

const idStore = usePreIdStore();
const transStore = useTransAnestStore();
const postAnestStore = usePostAnestStore();
const userStore = useUserStore()

export default defineComponent({
  name: 'App',

  data() {
    return {
      informacion: '',
      clienteIp: '',

      tutoUno: true,
      tutoDos: false,
      tutoTres: false,
      tutoCuatro: false,

      opcionExp: [],
      mostrarDatosFiltradosExp: false,

      deshabilitado: true,

      numExpediente:'',
      nomPaciente:'',
      nomCirujano:'',
      nomCirugia:'',
      
      numExpB:false,
      nomPacB:false,

      bordeRojoNum:false,
      bordeVerdeNum:false,
      
      bordeRojoNom:false,
      bordeVerdeNom:false,
      
      esPaciente: false, //
      esValoracion: false,
      esPlan: false,
      esNota: false,
      
      btnGuardarId: true,
      btnActualizarId: false,
      
      btnNuevoGuardarId: false,
      btnNuevoActualizarId: false,

      idStore,
      transStore,
      postAnestStore,
      userStore,
      
      mostrarVistaRapida: false,

      expSeleccionado: [],
      listaCirugias: [],
      cx: [],

      idPaciente: '',
      numeroExpediente: '',
      nombrePaciente: '',
      fechaNacimiento: Date,
      edad: Number,
      genero: '',
      // nacionalidad: '',
      // CURP: '',
      // estadoNacimiento: '',

      nuevoRegistroExped: false,
      bloquearInputsPrincipales: false,
      bloquearInputs: false,

      nuevoRegistro:false,
      historialPaciente:false,

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
              },
              {
                  label: 'Pulso',
                  borderColor: 'rgba(117, 137, 190)',
                  data: [],
                  fill: false,
                  pointStyle: 'cross',
                  radius: 4
              },
              {
                  label: 'PAS',
                  borderColor: 'rgba(236, 90, 85)',
                  data: [],
                  fill: false,
                  pointStyle: 'crossRot',
                  radius: 4
              },
              {
                  label: 'PAD',
                  borderColor: 'rgba(161, 197, 227)',
                  data: [],
                  fill: false,
                  pointStyle: 'cross',
                  radius: 4
              },
              {
                  label: 'PAM',
                  borderColor: 'rgba(236, 102, 24)',
                  data: [],
                  fill: false,
                  pointStyle: 'rectRounded',
                  radius: 4
              },
              {
                  label: 'SpO2',
                  borderColor: 'rgba(68, 163, 211)',
                  data: [],
                  fill: false,
                  pointStyle: 'rectRot',
                  radius: 4
              },
              {
                  label: 'EtCO2',
                  borderColor: 'rgba(112, 229, 225)',
                  data: [],
                  fill: false,
                  pointStyle: 'star',
                  radius: 4
              },
              {
                  label: 'Temp1',
                  borderColor: 'rgba(157, 157, 157)',
                  data: [],
                  fill: false,
                  pointStyle: 'triangle',
                  radius: 4
              },
              {
                  label: 'Temp2',
                  borderColor: 'rgba(174, 35, 30)',
                  data: [],
                  fill: false,
                  pointStyle: 'circle',
                  radius: 4
              },
              {
                  label: 'PVC',
                  borderColor: 'rgba(77, 157, 183)',
                  data: [],
                  fill: false,
                  pointStyle: 'rectRot',
                  radius: 4
              },
              {
                  label: 'PAS_IN',
                  borderColor: 'rgba(198, 27, 27)',
                  data: [],
                  fill: false,
                  pointStyle: 'crossRot',
                  radius: 4
              },
              {
                  label: 'PAD_IN',
                  borderColor: 'rgba(198, 27, 27)',
                  data: [],
                  fill: false,
                  pointStyle: 'cross',
                  radius: 4
              },
              {
                  label: 'PAM_IN',
                  borderColor: 'rgba(198, 27, 27)',
                  data: [],
                  fill: false,
                  pointStyle: 'rectRounded',
                  radius: 4
              },
              {
                  label: 'FiCO2',
                  borderColor: 'rgba(2, 43, 155)',
                  data: [],
                  fill: false,
                  pointStyle: 'star',
                  radius: 4
              },
              {
                  label: 'FR',
                  borderColor: 'rgba(255, 196, 0)',
                  data: [],
                  fill: false,
                  pointStyle: 'triangle',
                  radius: 4
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
      }as unknown,
      chartKey: 0,

      tamanoModalGrid: false,
      zoomGrafica: false,
      mostrarGraficas: false,
      mostrarSpinner: false,

      chartElements: [],
    }
  },

  components:{
    Id,
    Nota,
    Plan,
    Valoracion,
    BarraNavegacion,
    Multiselect, Line,
    ElInput, ElCard
  },
  
  mounted: function() { // Llama el método despues de cargar la página 
    //Mostrar modal de tutorial al logear por primera vez
    if(userStore.TutorialPre === 0){
      let abrir = document.getElementById('tutorial-pre');

      // Crea un nuevo evento de clic
      let event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });

      // Despacha el evento de clic en el botón
      abrir.dispatchEvent(event);
    }

    transStore.getDetieneMonitoreo();
    this.validaSeleccionId();
    this.ocultarFondo();
    this.mostrarHeader();
    this.ocultarMenuLateral();
    document.addEventListener('scroll', this.scrollFunction);
    transStore.getIniciaMonitoreo();

    //console.log("Esta: " + import.meta.env.VITE_ORIGIN2);

    fetch(`${import.meta.env.VITE_ORIGIN1}/api/getClienteIp`) // Reemplaza '/api/getClientIp' con la ruta correcta en tu servidor
      .then(response => response.json())
      .then(data => {
        this.clienteIp = data.clienteIp;
      })
      .catch(error => {
        console.error('Error al obtener la dirección IP:', error);
      });
  },
  
  destroyed: function(){
    document.addEventListener('scroll', this.scrollFunction)
  },  

  methods: {
/*======================= Obtener paciente para nuevo registro =======================*/
    async obtenerInformacion(){
      try {
        const response = await fetch(`http://${this.clienteIp}:5000/apiMVS`);
        const data = await response.text();
        this.informacion = data;

        console.log("info: "+this.informacion);
      } catch (error) {
        // console.error('Error al obtener información:', error);
        window.log.info('Ocurrió un error', error);
      }
    },

    // Obtener expedientes en Multiselect
    async listarExpedientes(){    
      this.mostrarDatosFiltradosExp=true

      await idStore.getExpedientesList()      

      if(this.idStore.numExpediente == ''){
          this.mostrarDatosFiltradosExp=false
      }
      
      if(this.idStore.numExpediente != '' && this.idStore.numExpediente != null){
        this.opcionExp = idStore.expedientes.map(document => document.numExpediente+" " +document.nomPaciente);
      }
    },

    async listarCirugias(){
      await idStore.getCirugias(idStore.numeroExpediente)

      this.listaCirugias = idStore.cirugias.pacientesCx
      this.cx = idStore.cirugias
    },

    async obtenerCirugia(id){
      if(idStore.cirugia != null){
        await idStore.getDatosPDF(id)
      }

      await this.asignarDatosPacientesCx()
      await this.asignarDatosPacientesVal()
      await this.asignarDatosPacientesPlan()
      await this.asignarDatosPacientesNota()
      await this.asignarDatosPacientesTrans()
      await this.asignarDatosPacientesNotaPA()
      await this.asignarDatosPacientesRecuperacion()
      
      await this.crearPdf()      
    },

    async asignarDatosPacientesCx(){
      // pacientesCx
      if (idStore.cirugia && idStore.cirugia.pacientesCx) {
        const paciente = idStore.cirugia.pacientesCx[0];

        idStore.NumeroEpisodio = paciente?.numEpisodio ?? ''
        idStore.Habitacion = paciente?.habitacionPaciente ?? ''
        idStore.FechaIngreso = paciente?.fechaInPaciente ?? ''
        idStore.Diagnostico = paciente?.diagnostico ?? ''
        idStore.TipoCirugia = paciente?.tipoCx ?? ''
        idStore.CIE10 = paciente?.cie10 ?? ''
        idStore.CIE9 = paciente?.cie9 ?? ''
        idStore.NombreCirugia = paciente?.cirugia ?? ''
        idStore.FechaCirugia = paciente?.fechaCx ?? ''
        idStore.HoraCirugia = paciente?.hrCx ?? ''
        idStore.NombreCirujano = paciente?.cirujano ?? ''
        idStore.NombreAnestesiologo = paciente?.anestesiologo ?? ''
        idStore.AnestesiologoVPA = paciente?.anestesiologoVPA ?? ''
        idStore.residenteAnestesia = paciente?.residenteAnestesia ?? ''
      } else {
        // Manejo para el caso en que cirugia o pacientesCx sean nulos
        idStore.NumeroEpisodio = ''
        idStore.Habitacion = ''
        idStore.FechaIngreso = ''
        idStore.Diagnostico = ''
        idStore.TipoCirugia = ''
        idStore.CIE10 = ''
        idStore.CIE9 = ''
        idStore.NombreCirugia = ''
        idStore.FechaCirugia = ''
        idStore.HoraCirugia = ''
        idStore.NombreCirujano = ''
        idStore.NombreAnestesiologo = ''
        idStore.AnestesiologoVPA = ''
        idStore.residenteAnestesia = ''
      }
    },

    async asignarDatosPacientesVal(){
      // pacientesVal
      if (idStore.cirugia && idStore.cirugia.pacientesVal) {
        const paciente = idStore.cirugia.pacientesVal[0];

        idStore.APPAlergias = paciente?.antPersPat_Alergias ?? '' 
        idStore.APPQuirurgicos = paciente?.antPersPat_Quirurgicos ?? '' 
        idStore.APPEndocrinologicos = paciente?.antPersPat_Endocrinologicos ?? '' 
        idStore.APPUrologicos = paciente?.antPersPat_Urologicos ?? '' 
        idStore.APPTraumaticos = paciente?.antPersPat_Traumaticos ?? '' 
        idStore.APPOrtopedicos = paciente?.antPersPat_Ortopedicos ?? '' 
        idStore.APPTransfuciones = paciente?.antPersPat_Transfusiones ?? '' 
        idStore.APPComplicaciones = paciente?.antPersPat_CompAnestPrev ?? '' 
        idStore.APPEstadoPsiquico = paciente?.antPersPat_EstadoPsiq ?? '' 
        idStore.APPMedicacion = paciente?.antPersPat_MedActual ?? '' 
        idStore.APNPHorasAyuno = paciente?.antPersNoPat_HrsAyuno ?? '' 
        idStore.APNPTabaquismo = paciente?.antPersNoPat_Tabaquismo ?? '' 
        idStore.APNPEtilismo = paciente?.antPersNoPat_Etilismo ?? '' 
        idStore.APNPAdicciones = paciente?.antPersNoPat_Adicciones ?? '' 
        idStore.APNPInmunizaciones = paciente?.antPersNoPat_Inmunizaciones ?? '' 
        idStore.AntecedentesImportancia = paciente?.antPersNoPat_AntImportQx ?? '' 
        idStore.SEdad = paciente?.sigVit_Edad ?? '' 
        idStore.Temperatura = paciente?.sigVit_Temperatura ?? '' 
        idStore.FrecuenciaCardiaca = paciente?.sigVit_FrecuCardiaca ?? '' 
        idStore.FrecuenciaRespiratoria = paciente?.sigVit_FrecuRespiratoria ?? '' 
        idStore.Peso = paciente?.sigVit_Peso ?? '' 
        idStore.Talla = paciente?.sigVit_Talla ?? '' 
        idStore.IMC = paciente?.sigVit_IMC ?? '' 
        idStore.TensionArterial = paciente?.sigVit_TensionArterial ?? '' 
        idStore.SaturacionOxigeno = paciente?.sigVit_SaturacionOxigeno ?? '' 
        idStore.Mallampati = paciente?.viaAerea_Mallampati ?? '' 
        idStore.PatilAldreti = paciente?.viaAerea_PatilAldreti ?? '' 
        idStore.AperturaBucal = paciente?.viaAerea_AperturaBucal ?? '' 
        idStore.Distancia = paciente?.viaAerea_Distancia ?? '' 
        idStore.Protusion = paciente?.viaAerea_Protusion ?? '' 
        idStore.IPID = paciente?.viaAerea_Ipid ?? '' 
        idStore.Glasgow = paciente?.viaAerea_Glasgow ?? '' 
        idStore.NYHA = paciente?.viaAerea_NYHA ?? '' 
        idStore.Goldman = paciente?.viaAerea_Goldman ?? '' 
        idStore.RiesgosTrombosis = paciente?.viaAerea_RiesgoTrombosis ?? '' 
        idStore.ClasificacionASA = paciente?.viaAerea_ClasificacionASA ?? '' 
        idStore.VTipoCirugia = paciente?.viaAerea_TipoCirugia ?? '' 
        idStore.RiesgoAnestesico = paciente?.viaAerea_RiesgoAnestesico ?? '' 
        
        idStore.estudios = paciente?.pacientesEstu ?? null
        
        idStore.FechaRealizacion = paciente?.perfilBioQ_FechaRealizacion ?? ''
        idStore.GrupoSanguineo = paciente?.perfilBioQ_GrupoSanguineo ?? ''
        idStore.Hemoglobina = paciente?.perfilBioQ_Hemoglobina ?? ''
        idStore.Hematocrito = paciente?.perfilBioQ_Hematocrito ?? ''
        idStore.Plaquetas = paciente?.perfilBioQ_Plaquetas ?? ''
        idStore.Leutocitos = paciente?.perfilBioQ_Leutocitos ?? ''
        idStore.TP = paciente?.perfilBioQ_TP ?? ''
        idStore.TT = paciente?.perfilBioQ_TT ?? ''
        idStore.TPT = paciente?.perfilBioQ_TPT ?? ''
        idStore.INR = paciente?.perfilBioQ_INR ?? ''
        idStore.Glucosa = paciente?.perfilBioQ_Glucosa ?? ''
        idStore.Creatinina = paciente?.perfilBioQ_Creatinina ?? ''
        idStore.Urea = paciente?.perfilBioQ_Urea ?? ''
        idStore.Sodio = paciente?.perfilBioQ_Sodio ?? ''
        idStore.Potasio = paciente?.perfilBioQ_Potasio ?? ''
        idStore.Cloro = paciente?.perfilBioQ_Cloro ?? ''
        idStore.Calcio = paciente?.perfilBioQ_Calcio ?? ''
        idStore.Megnesio = paciente?.perfilBioQ_Magnesio ?? ''
        idStore.BilirrubinaDirecta = paciente?.perfilBioQ_BilirrubinaDirecta ?? ''
        idStore.BilirrubinaIndirecta = paciente?.perfilBioQ_BilirrubinaIndirecta ?? ''
        idStore.BilirrubimaTotal = paciente?.perfilBioQ_BilirrubinaTotal ?? ''
        idStore.Lipasa = paciente?.perfilBioQ_Lipasa ?? ''
        idStore.Amilasa = paciente?.perfilBioQ_Amilasa ?? ''
        idStore.PerfilOtros = paciente?.perfilBioQ_Otros ?? ''
        idStore.Cabeza = paciente?.expFis_VASCabeza ?? ''
        idStore.Cuello = paciente?.expFis_VASCuello ?? ''
        idStore.Respiratorio = paciente?.expFis_VASRespiratorio ?? ''
        idStore.Cadiovascular = paciente?.expFis_VASCardioVasc ?? ''
        idStore.Hipertension = paciente?.expFis_VASHipertension ?? ''
        idStore.Abdomen = paciente?.expFis_VASAbdomen ?? ''
        idStore.Genitourinario = paciente?.expFis_VASGenUr ?? ''
        idStore.MusculoEsqueletico = paciente?.expFis_VASMuscEsq ?? ''
        idStore.Neurologico = paciente?.expFis_VASNeuro ?? ''
        idStore.PielFaneras = paciente?.expFis_VASPielFaneras ?? ''
      } else {
        // Manejo para el caso en que cirugia o pacientesCx sean nulos
        idStore.APPAlergias = '' 
        idStore.APPQuirurgicos = '' 
        idStore.APPEndocrinologicos = '' 
        idStore.APPUrologicos = '' 
        idStore.APPTraumaticos = '' 
        idStore.APPOrtopedicos = '' 
        idStore.APPTransfuciones = '' 
        idStore.APPComplicaciones = '' 
        idStore.APPEstadoPsiquico = '' 
        idStore.APPMedicacion = '' 
        idStore.APNPHorasAyuno = '' 
        idStore.APNPTabaquismo = '' 
        idStore.APNPEtilismo = '' 
        idStore.APNPAdicciones = '' 
        idStore.APNPInmunizaciones = '' 
        idStore.AntecedentesImportancia = '' 
        idStore.SEdad = '' 
        idStore.Temperatura = '' 
        idStore.FrecuenciaCardiaca = '' 
        idStore.FrecuenciaRespiratoria = '' 
        idStore.Peso = '' 
        idStore.Talla = '' 
        idStore.IMC = '' 
        idStore.TensionArterial = '' 
        idStore.SaturacionOxigeno = '' 
        idStore.Mallampati = '' 
        idStore.PatilAldreti = '' 
        idStore.AperturaBucal = '' 
        idStore.Distancia = '' 
        idStore.Protusion = '' 
        idStore.IPID = '' 
        idStore.Glasgow = '' 
        idStore.NYHA = '' 
        idStore.Goldman = '' 
        idStore.RiesgosTrombosis = '' 
        idStore.ClasificacionASA = '' 
        idStore.VTipoCirugia = '' 
        idStore.RiesgoAnestesico = '' 
        
        idStore.estudios = null
        
        idStore.FechaRealizacion = ''
        idStore.GrupoSanguineo = ''
        idStore.Hemoglobina = ''
        idStore.Hematocrito = ''
        idStore.Plaquetas = ''
        idStore.Leutocitos = ''
        idStore.TP = ''
        idStore.TT = ''
        idStore.TPT = ''
        idStore.INR = ''
        idStore.Glucosa = ''
        idStore.Creatinina = ''
        idStore.Urea = ''
        idStore.Sodio = ''
        idStore.Potasio = ''
        idStore.Cloro = ''
        idStore.Calcio = ''
        idStore.Megnesio = ''
        idStore.BilirrubinaDirecta = ''
        idStore.BilirrubinaIndirecta = ''
        idStore.BilirrubimaTotal = ''
        idStore.Lipasa = ''
        idStore.Amilasa = ''
        idStore.PerfilOtros = ''
        idStore.Cabeza = ''
        idStore.Cuello = ''
        idStore.Respiratorio = ''
        idStore.Cadiovascular = ''
        idStore.Hipertension = ''
        idStore.Abdomen = ''
        idStore.Genitourinario = ''
        idStore.MusculoEsqueletico = ''
        idStore.Neurologico = ''
        idStore.PielFaneras = ''
      }      
    },

    async asignarDatosPacientesPlan(){
      // pacientesPlan
      if (idStore.cirugia && idStore.cirugia.pacientesPlan) {
        const paciente = idStore.cirugia.pacientesPlan[0];

        idStore.HorasAyuno = paciente?.pos_HorasAyuno ?? ''
        idStore.AccesoVenoso = paciente?.pos_AccesoVenoso ?? ''
        idStore.PosicionPaciente = paciente?.pos_PosicionPaciente ?? ''
        idStore.PosicionBrazos = paciente?.pos_PosicionBrazos ?? ''
        idStore.Torniquete = paciente?.pos_Torniquete ?? ''
        idStore.AplicacionTorniquete = paciente?.pos_AplicacionTorniquete ?? ''
        idStore.Sitio = paciente?.pos_Sitio ?? ''
        idStore.TiempoIsquemia = paciente?.pos_TiempoIsquemia ?? ''
        idStore.ProteccionOjos = paciente?.pos_ProteccionOjos ?? ''
        idStore.ProteccionProminencias = paciente?.pos_ProtecProminencias ?? ''
        idStore.TecnicaAnestesica = paciente?.pos_TecnicaAnestesica ?? ''
        idStore.Premedicacion = paciente?.pos_Premedicacion ?? ''
        idStore.EspecPremedicacion = paciente?.pos_EspPremedicacion ?? ''
        idStore.Monitoreo = paciente?.pos_Monitoreo ?? ''
        idStore.ViaSedacion = paciente?.sedacion_Via ?? ''
        idStore.OpcionSedacion = paciente?.sedacion_Opcion ?? ''
        idStore.ObservacionesSedacion = paciente?.sedacion_Observaciones ?? ''
        idStore.MedicamentosSedacion = paciente?.sedacion_Medicamentos ?? ''
        idStore.TipoRegional = paciente?.regional_Tipo ?? ''
        idStore.TipoAguja = paciente?.regional_TipoAguja ?? ''
        idStore.Nivel = paciente?.regional_Nivel ?? ''
        idStore.CalibreAguja = paciente?.regional_CalibreAguja ?? ''
        idStore.Cateter = paciente?.regional_Cateter ?? ''
        idStore.OrientacionCateter = paciente?.regional_OrientacionCateter ?? ''
        idStore.DificultadesOrientacion = paciente?.regional_ProbDificulNeuro ?? ''
        idStore.EspecificarRegional = paciente?.regional_EspDificultadesNeuro ?? ''
        idStore.SitioRegional = paciente?.regional_Sitio ?? ''
        idStore.OpcionRegional = paciente?.regional_Opcion ?? ''
        idStore.EspecificarSitionRegional = paciente?.regional_EspSitio ?? ''
        idStore.AnestesicoUtilizado = paciente?.regional_AnestesicoUtilizado ?? ''
        idStore.EspecificarAnestesico = paciente?.regional_EspAnestesico ?? ''
        idStore.DificultadesPlexo = paciente?.regional_ProbDificulPlexo ?? ''
        idStore.EspecificarDificPlexo = paciente?.regional_EspDificulPlexo ?? ''
        idStore.Ultrasonido = paciente?.regional_Ultrasonido ?? ''
        idStore.EspecUltrasonido = paciente?.regional_EspUltrasonido ?? ''
        idStore.Neuroestimulador = paciente?.regional_Neuroestimulador ?? ''
        idStore.ComplicacionesNeuroestimulador = paciente?.regional_EspNeuroestimulador ?? ''
        idStore.EspecificarNeuroestimulador = paciente?.regional_ProbComplicaciones ?? ''
        idStore.EspecificarComplicacNeuroes = paciente?.regional_EspDificEquipo ?? ''
        idStore.SitioLocal = paciente?.local_SitioAnestesiaL ?? ''
        idStore.AnestesicoLocal = paciente?.local_AnestesicoUtilizado ?? ''
        idStore.EspecificarLocal = paciente?.local_Especificar ?? ''
        idStore.Induccion = paciente?.general_Induccion ?? ''
        idStore.Tubo = paciente?.general_Tubo ?? ''
        idStore.NumeroTubo = paciente?.general_NumeroTubo ?? ''
        idStore.TipoCanula = paciente?.general_TipoCanula ?? ''
        idStore.Globo = paciente?.general_Globo ?? ''
        idStore.Presion = paciente?.general_Presion ?? ''
        idStore.DificultadesGeneral = paciente?.general_DifTecnicasIntubacion ?? ''
        idStore.EspecificarGeneral = paciente?.general_EspDifTecIntubacion ?? ''
        idStore.DispositivosSupra = paciente?.general_DispositivosSupro ?? ''
        idStore.Calibre = paciente?.general_Calibre ?? ''
        idStore.ComplicacionesDispositivos = paciente?.general_Complicaciones ?? ''
        idStore.EspecificarDispositivos = paciente?.general_EspComplicaciones ?? ''
        idStore.OtrosDispositivos = paciente?.general_OtrosDispositivos ?? ''
        idStore.EspecificarOtrosDispositivos = paciente?.general_EspOtrosDispositivos ?? ''
      } else {
        idStore.HorasAyuno = ''
        idStore.AccesoVenoso = ''
        idStore.PosicionPaciente = ''
        idStore.PosicionBrazos = ''
        idStore.Torniquete = ''
        idStore.AplicacionTorniquete = ''
        idStore.Sitio = ''
        idStore.TiempoIsquemia = ''
        idStore.ProteccionOjos = ''
        idStore.ProteccionProminencias = ''
        idStore.TecnicaAnestesica = ''
        idStore.Premedicacion = ''
        idStore.EspecPremedicacion = ''
        idStore.Monitoreo = ''
        idStore.ViaSedacion = ''
        idStore.OpcionSedacion = ''
        idStore.ObservacionesSedacion = ''
        idStore.MedicamentosSedacion = ''
        idStore.TipoRegional = ''
        idStore.TipoAguja = ''
        idStore.Nivel = ''
        idStore.CalibreAguja = ''
        idStore.Cateter = ''
        idStore.OrientacionCateter = ''
        idStore.DificultadesOrientacion = ''
        idStore.EspecificarRegional = ''
        idStore.SitioRegional = ''
        idStore.OpcionRegional = ''
        idStore.EspecificarSitionRegional = ''
        idStore.AnestesicoUtilizado = ''
        idStore.EspecificarAnestesico = ''
        idStore.DificultadesPlexo = ''
        idStore.EspecificarDificPlexo = ''
        idStore.Ultrasonido = ''
        idStore.EspecUltrasonido = ''
        idStore.Neuroestimulador = ''
        idStore.ComplicacionesNeuroestimulador = ''
        idStore.EspecificarNeuroestimulador = ''
        idStore.EspecificarComplicacNeuroes = ''
        idStore.SitioLocal = ''
        idStore.AnestesicoLocal = ''
        idStore.EspecificarLocal = ''
        idStore.Induccion = ''
        idStore.Tubo = ''
        idStore.NumeroTubo = ''
        idStore.TipoCanula = ''
        idStore.Globo = ''
        idStore.Presion = ''
        idStore.DificultadesGeneral = ''
        idStore.EspecificarGeneral = ''
        idStore.DispositivosSupra = ''
        idStore.Calibre = ''
        idStore.ComplicacionesDispositivos = ''
        idStore.EspecificarDispositivos = ''
        idStore.OtrosDispositivos = ''
        idStore.EspecificarOtrosDispositivos = ''
      }         
    },

    async asignarDatosPacientesNota(){
      if (idStore.cirugia && idStore.cirugia.pacientesNotaPre) {
        const paciente = idStore.cirugia.pacientesNotaPre[0];

        idStore.NotaPre = paciente?.obsNota ?? ''
      } else {
        idStore.NotaPre = ''
      }
    },

    async asignarDatosPacientesTrans(){
      if (idStore.cirugia && idStore.cirugia.pacienteTrans) {
        const paciente = idStore.cirugia.pacienteTrans[0];

        transStore.datosVentilacion = paciente?.datosVentilador ?? null
        transStore.medicamentos = paciente?.medicamentosCx ?? null  
        transStore.relevos = paciente?.relevoCx ?? null
        transStore.eventos = paciente?.evCriticoCx ?? null
        transStore.datosMSV = paciente?.datosMSV ?? ''
        transStore.solHartman = paciente?.solHartman ?? ''
        transStore.solFisio = paciente?.solFisio ?? ''
        transStore.glucosados = paciente?.glucosados ?? ''
        transStore.gelatinas = paciente?.gelatinas ?? ''
        transStore.almidones = paciente?.almidones ?? ''
        transStore.albuminas = paciente?.albuminas ?? ''
        transStore.paqGlobular = paciente?.paqGlobular ?? ''
        transStore.plasmas = paciente?.plasmas ?? ''
        transStore.plaquetas = paciente?.plaquetas ?? ''
        transStore.crioprecipitados = paciente?.crioprecipitados ?? ''
        transStore.factor_VII = paciente?.factor_VII ?? ''
        transStore.factor_VIII = paciente?.factor_VIII ?? ''
        transStore.otrosIngresos = paciente?.otrosIngresos ?? ''
        transStore.liqAscitis = paciente?.liqAscitis ?? ''
        transStore.sangradoAprox = paciente?.sangradoAprox ?? ''
        transStore.uresis = paciente?.uresis ?? ''
        transStore.expoQX = paciente?.expoQX ?? ''
        transStore.reqBasales = paciente?.reqBasales ?? ''
        transStore.ayuno = paciente?.ayuno ?? ''        
        transStore.otrosEgresos = paciente?.otrosEgresos ?? ''                            
        
        transStore.ingresoQX = idStore.cirugia.pacienteTrans[0]?.tiemposQX[0]?.ingresoQX == undefined ? '' : idStore.cirugia.pacienteTrans[0].tiemposQX[0].ingresoQX
        transStore.inicioAn = idStore.cirugia.pacienteTrans[0]?.tiemposQX[0]?.inicioAn == undefined ? '' : idStore.cirugia.pacienteTrans[0].tiemposQX[0].inicioAn
        transStore.inicioCx = idStore.cirugia.pacienteTrans[0]?.tiemposQX[0]?.inicioCx == undefined ? '' : idStore.cirugia.pacienteTrans[0].tiemposQX[0].inicioCx
        transStore.finCx = idStore.cirugia.pacienteTrans[0]?.tiemposQX[0]?.finCx == undefined ? '' : idStore.cirugia.pacienteTrans[0].tiemposQX[0].finCx
        transStore.finAn = idStore.cirugia.pacienteTrans[0]?.tiemposQX[0]?.finAn == undefined ? '' : idStore.cirugia.pacienteTrans[0].tiemposQX[0].finAn
        transStore.egresoQx = idStore.cirugia.pacienteTrans[0]?.tiemposQX[0]?.egresoQx == undefined ? '' : idStore.cirugia.pacienteTrans[0].tiemposQX[0].egresoQx 
      } else {
        idStore.NotaPre = ''
        transStore.datosVentilacion = null
        transStore.medicamentos = null  
        transStore.relevos = null
        transStore.eventos = null
        transStore.datosMSV = ''
        transStore.solHartman = ''
        transStore.solFisio = ''
        transStore.glucosados = ''
        transStore.gelatinas = ''
        transStore.almidones = ''
        transStore.albuminas = ''
        transStore.paqGlobular = ''
        transStore.plasmas = ''
        transStore.plaquetas = ''
        transStore.crioprecipitados = ''
        transStore.factor_VII = ''
        transStore.factor_VIII = ''
        transStore.otrosIngresos = ''
        transStore.liqAscitis = ''
        transStore.sangradoAprox = ''
        transStore.uresis = ''
        transStore.expoQX = ''
        transStore.reqBasales = ''
        transStore.ayuno = ''        
        transStore.otrosEgresos = ''                            
        
        transStore.ingresoQX = ''
        transStore.inicioAn = ''
        transStore.inicioCx = ''
        transStore.finCx = ''
        transStore.finAn = ''
        transStore.egresoQx = '' 
      }      
    },

    async asignarDatosPacientesNotaPA(){
      if (idStore.cirugia && idStore.cirugia.pacientesNotaPost) {
        const paciente = idStore.cirugia.pacientesNotaPost[0];

        postAnestStore.TecnicaAnestesica = paciente?.npa_TecAnestFinal ?? ''
        postAnestStore.Intubacion = paciente?.npa_Intubacion ?? ''
        postAnestStore.NotaPost = paciente?.npa_NotaPostAnest ?? ''
        postAnestStore.EgresoTA = paciente?.signVitEgQx_TA ?? ''
        postAnestStore.EgresoFC = paciente?.signVitEgQx_FC ?? ''
        postAnestStore.EgresoFR = paciente?.signVitEgQx_FR ?? ''
        postAnestStore.EgresoTemp = paciente?.signVitEgQx_Temperatura ?? ''
        postAnestStore.EgresoPulso = paciente?.signVitEgQx_Pulso ?? ''
        postAnestStore.EgresoSpO2 = paciente?.signVitEgQx_SpO2 ?? ''
        postAnestStore.DestinoEgreso = paciente?.signVitEgQx_EgresoPac ?? ''
        postAnestStore.NumeroProductos = paciente?.casoObsRecNac_NumProd ?? ''
        postAnestStore.GeneroUno = paciente?.casoObsRecNac1_Genero ?? ''
        postAnestStore.HoraNacimientoUno = paciente?.casoObsRecNac1_HrNacimiento ?? ''
        postAnestStore.AlumbramientoUno = paciente?.casoObsRecNac1_Alumbramiento ?? ''
        postAnestStore.Apgar1Uno = paciente?.casoObsRecNac1_Apgar1 ?? ''
        postAnestStore.Apgar5Uno = paciente?.casoObsRecNac1_Apgar5 ?? ''
        postAnestStore.CapurroUno = paciente?.casoObsRecNac1_Capurro ?? ''
        postAnestStore.PesoUno = paciente?.casoObsRecNac1_Peso ?? ''
        postAnestStore.TallaUno = paciente?.casoObsRecNac1_Talla ?? ''
        postAnestStore.GeneroDos = paciente?.casoObsRecNac2_Genero ?? ''
        postAnestStore.HoraNacimientoDos = paciente?.casoObsRecNac2_HrNacimiento ?? ''
        postAnestStore.AlumbramientoDos = paciente?.casoObsRecNac2_Alumbramiento ?? ''
        postAnestStore.Apgar1Dos = paciente?.casoObsRecNac2_Apgar1 ?? ''
        postAnestStore.Apgar5Dos = paciente?.casoObsRecNac2_Apgar5 ?? ''
        postAnestStore.CapurroDos = paciente?.casoObsRecNac2_Capurro ?? ''
        postAnestStore.PesoDos = paciente?.casoObsRecNac2_Peso ?? ''
        postAnestStore.TallaDos = paciente?.casoObsRecNac2_Talla ?? ''
        postAnestStore.GeneroTres = paciente?.casoObsRecNac3_Genero ?? ''
        postAnestStore.HoraNacimientoTres = paciente?.casoObsRecNac3_HrNacimiento ?? ''
        postAnestStore.AlumbramientoTres = paciente?.casoObsRecNac3_Alumbramiento ?? ''
        postAnestStore.Apgar1Tres = paciente?.casoObsRecNac3_Apgar1 ?? ''
        postAnestStore.Apgar5Tres = paciente?.casoObsRecNac3_Apgar5 ?? ''
        postAnestStore.CapurroTres = paciente?.casoObsRecNac3_Capurro ?? ''
        postAnestStore.PesoTres = paciente?.casoObsRecNac3_Peso ?? ''
        postAnestStore.TallaTres = paciente?.casoObsRecNac3_Talla ?? ''
        postAnestStore.GeneroCuatro = paciente?.casoObsRecNac4_Genero ?? ''
        postAnestStore.HoraNacimientoCuatro = paciente?.casoObsRecNac4_HrNacimiento ?? ''
        postAnestStore.AlumbramientoCuatro = paciente?.casoObsRecNac4_Alumbramiento ?? ''
        postAnestStore.Apgar1Cuatro = paciente?.casoObsRecNac4_Apgar1 ?? ''
        postAnestStore.Apgar5Cuatro = paciente?.casoObsRecNac4_Apgar5 ?? ''
        postAnestStore.CapurroCuatro = paciente?.casoObsRecNac4_Capurro ?? ''
        postAnestStore.PesoCuatro = paciente?.casoObsRecNac4_Peso ?? ''
        postAnestStore.TallaCuatro = paciente?.casoObsRecNac4_Talla ?? ''
        postAnestStore.GeneroCinco = paciente?.casoObsRecNac5_Genero ?? ''
        postAnestStore.HoraNacimientoCinco = paciente?.casoObsRecNac5_HrNacimiento ?? ''
        postAnestStore.AlumbramientoCinco = paciente?.casoObsRecNac5_Alumbramiento ?? ''
        postAnestStore.Apgar1Cinco = paciente?.casoObsRecNac5_Apgar1 ?? ''
        postAnestStore.Apgar5Cinco = paciente?.casoObsRecNac5_Apgar5 ?? ''
        postAnestStore.CapurroCinco = paciente?.casoObsRecNac5_Capurro ?? ''
        postAnestStore.PesoCinco = paciente?.casoObsRecNac5_Peso ?? ''
        postAnestStore.TallaCinco = paciente?.casoObsRecNac5_Talla ?? ''
        postAnestStore.GeneroSeis = paciente?.casoObsRecNac6_Genero ?? ''
        postAnestStore.HoraNacimientoSeis = paciente?.casoObsRecNac6_HrNacimiento ?? ''
        postAnestStore.AlumbramientoSeis = paciente?.casoObsRecNac6_Alumbramiento ?? ''
        postAnestStore.Apgar1Seis = paciente?.casoObsRecNac6_Apgar1 ?? ''
        postAnestStore.Apgar5Seis = paciente?.casoObsRecNac6_Apgar5 ?? ''
        postAnestStore.CapurroSeis = paciente?.casoObsRecNac6_Capurro ?? ''
        postAnestStore.PesoSeis = paciente?.casoObsRecNac6_Peso ?? ''
        postAnestStore.TallaSeis = paciente?.casoObsRecNac6_Talla ?? ''
      } else {
        postAnestStore.TecnicaAnestesica = ''
        postAnestStore.Intubacion = ''
        postAnestStore.NotaPost = ''
        postAnestStore.EgresoTA = ''
        postAnestStore.EgresoFC = ''
        postAnestStore.EgresoFR = ''
        postAnestStore.EgresoTemp = ''
        postAnestStore.EgresoPulso = ''
        postAnestStore.EgresoSpO2 = ''
        postAnestStore.DestinoEgreso = ''
        postAnestStore.NumeroProductos = ''
        postAnestStore.GeneroUno = ''
        postAnestStore.HoraNacimientoUno = ''
        postAnestStore.AlumbramientoUno = ''
        postAnestStore.Apgar1Uno = ''
        postAnestStore.Apgar5Uno = ''
        postAnestStore.CapurroUno = ''
        postAnestStore.PesoUno = ''
        postAnestStore.TallaUno = ''
        postAnestStore.GeneroDos = ''
        postAnestStore.HoraNacimientoDos = ''
        postAnestStore.AlumbramientoDos = ''
        postAnestStore.Apgar1Dos = ''
        postAnestStore.Apgar5Dos = ''
        postAnestStore.CapurroDos = ''
        postAnestStore.PesoDos = ''
        postAnestStore.TallaDos = ''
        postAnestStore.GeneroTres = ''
        postAnestStore.HoraNacimientoTres = ''
        postAnestStore.AlumbramientoTres = ''
        postAnestStore.Apgar1Tres = ''
        postAnestStore.Apgar5Tres = ''
        postAnestStore.CapurroTres = ''
        postAnestStore.PesoTres = ''
        postAnestStore.TallaTres = ''
        postAnestStore.GeneroCuatro = ''
        postAnestStore.HoraNacimientoCuatro = ''
        postAnestStore.AlumbramientoCuatro = ''
        postAnestStore.Apgar1Cuatro = ''
        postAnestStore.Apgar5Cuatro = ''
        postAnestStore.CapurroCuatro = ''
        postAnestStore.PesoCuatro = ''
        postAnestStore.TallaCuatro = ''
        postAnestStore.GeneroCinco = ''
        postAnestStore.HoraNacimientoCinco = ''
        postAnestStore.AlumbramientoCinco = ''
        postAnestStore.Apgar1Cinco = ''
        postAnestStore.Apgar5Cinco = ''
        postAnestStore.CapurroCinco = ''
        postAnestStore.PesoCinco = ''
        postAnestStore.TallaCinco = ''
        postAnestStore.GeneroSeis = ''
        postAnestStore.HoraNacimientoSeis = ''
        postAnestStore.AlumbramientoSeis = ''
        postAnestStore.Apgar1Seis = ''
        postAnestStore.Apgar5Seis = ''
        postAnestStore.CapurroSeis = ''
        postAnestStore.PesoSeis = ''
        postAnestStore.TallaSeis = ''
      }      
    },
    
    async asignarDatosPacientesRecuperacion(){
      if (idStore.cirugia && idStore.cirugia.pacientesRecu) {
        const paciente = idStore.cirugia.pacientesRecu[0];

        postAnestStore.NotaUCPA = paciente?.notaEval_Obs ?? ''
        postAnestStore.FCIngreso = paciente?.aldreteRec_FrecCardIn ?? ''
        postAnestStore.FC15Min = paciente?.aldreteRec_FrecCard15 ?? ''
        postAnestStore.FC30Min = paciente?.aldreteRec_FrecCard30 ?? ''
        postAnestStore.FC45Min = paciente?.aldreteRec_FrecCard45 ?? ''
        postAnestStore.FC60Min = paciente?.aldreteRec_FrecCard60 ?? ''
        postAnestStore.FC90Min = paciente?.aldreteRec_FrecCard90 ?? ''
        postAnestStore.FC120Min = paciente?.aldreteRec_FrecCard120 ?? ''
        postAnestStore.FRIngreso = paciente?.aldreteRec_FrecRespIn ?? ''
        postAnestStore.FR15Min = paciente?.aldreteRec_FrecResp15 ?? ''
        postAnestStore.FR30Min = paciente?.aldreteRec_FrecResp30 ?? ''
        postAnestStore.FR45Min = paciente?.aldreteRec_FrecResp45 ?? ''
        postAnestStore.FR60Min = paciente?.aldreteRec_FrecResp60 ?? ''
        postAnestStore.FR90Min = paciente?.aldreteRec_FrecResp90 ?? ''
        postAnestStore.FR120Min = paciente?.aldreteRec_FrecResp120 ?? ''
        postAnestStore.TensionIngreso = paciente?.aldreteRec_TensArteIn ?? ''
        postAnestStore.Tension15Min = paciente?.aldreteRec_TensArte15 ?? ''
        postAnestStore.Tension30Min = paciente?.aldreteRec_TensArte30 ?? ''
        postAnestStore.Tension45Min = paciente?.aldreteRec_TensArte45 ?? ''
        postAnestStore.Tension60Min = paciente?.aldreteRec_TensArte60 ?? ''
        postAnestStore.Tension90Min = paciente?.aldreteRec_TensArte90 ?? ''
        postAnestStore.Tension120Min = paciente?.aldreteRec_TensArte120 ?? ''
        postAnestStore.SaturacionIngreso = paciente?.aldreteRec_SatO2In ?? ''
        postAnestStore.Saturacion15Min = paciente?.aldreteRec_SatO215 ?? ''
        postAnestStore.Saturacion30Min = paciente?.aldreteRec_SatO230 ?? ''
        postAnestStore.Saturacion45Min = paciente?.aldreteRec_SatO245 ?? ''
        postAnestStore.Saturacion60Min = paciente?.aldreteRec_SatO260 ?? ''
        postAnestStore.Saturacion90Min = paciente?.aldreteRec_SatO290 ?? ''
        postAnestStore.Saturacion120Min = paciente?.aldreteRec_SatO2120 ?? ''
        postAnestStore.AldreteIngreso = paciente?.aldreteRec_AldreteIn ?? ''
        postAnestStore.Aldrete15Min = paciente?.aldreteRec_Aldrete15 ?? ''
        postAnestStore.Aldrete30Min = paciente?.aldreteRec_Aldrete30 ?? ''
        postAnestStore.Aldrete45Min = paciente?.aldreteRec_Aldrete45 ?? ''
        postAnestStore.Aldrete60Min = paciente?.aldreteRec_Aldrete60 ?? ''
        postAnestStore.Aldrete90Min = paciente?.aldreteRec_Aldrete90 ?? ''
        postAnestStore.Aldrete120Min = paciente?.aldreteRec_Aldrete120 ?? ''
        postAnestStore.BromageIngreso = paciente?.aldreteRec_BromageIn ?? ''
        postAnestStore.Bromage15Min = paciente?.aldreteRec_Bromage15 ?? ''
        postAnestStore.Bromage30Min = paciente?.aldreteRec_Bromage30 ?? ''
        postAnestStore.Bromage45Min = paciente?.aldreteRec_Bromage45 ?? ''
        postAnestStore.Bromage60Min = paciente?.aldreteRec_Bromage60 ?? ''
        postAnestStore.Bromage90Min = paciente?.aldreteRec_Bromage90 ?? ''
        postAnestStore.Bromage120Min = paciente?.aldreteRec_Bromage120 ?? ''
        postAnestStore.NauseaIngreso = paciente?.aldreteRec_NauseasIn ?? ''
        postAnestStore.Nausea15Min = paciente?.aldreteRec_Nauseas15 ?? ''
        postAnestStore.Nausea30Min = paciente?.aldreteRec_Nauseas30 ?? ''
        postAnestStore.Nausea45Min = paciente?.aldreteRec_Nauseas45 ?? ''
        postAnestStore.Nausea60Min = paciente?.aldreteRec_Nauseas60 ?? ''
        postAnestStore.Nausea90Min = paciente?.aldreteRec_Nauseas90 ?? ''
        postAnestStore.Nausea120Min = paciente?.aldreteRec_Nauseas120 ?? ''
        postAnestStore.EscalaEVAIngreso = paciente?.aldreteRec_escEVADolIn ?? ''
        postAnestStore.EscalaEVA15Min = paciente?.aldreteRec_escEVADol15 ?? ''
        postAnestStore.EscabaEVA30Min = paciente?.aldreteRec_escEVADol30 ?? ''
        postAnestStore.EscalaEVA45Min = paciente?.aldreteRec_escEVADol45 ?? ''
        postAnestStore.EscalaEVA60Min = paciente?.aldreteRec_escEVADol60 ?? ''
        postAnestStore.EscalaEVA90Min = paciente?.aldreteRec_escEVADol90 ?? ''
        postAnestStore.EscalaEVA120Min = paciente?.aldreteRec_escEVADol120 ?? ''
        postAnestStore.AldreteFinal0Min = paciente?.altaRec_0min ?? ''
        postAnestStore.AldreteFinal15Min = paciente?.altaRec_15min ?? ''
        postAnestStore.AldreteFinal30Min = paciente?.altaRec_30min ?? ''
        postAnestStore.AldreteFinal45Min = paciente?.altaRec_45min ?? ''
        postAnestStore.AldreteFinal60Min = paciente?.altaRec_60min ?? ''
        postAnestStore.AldreteFinal90Min = paciente?.altaRec_90min ?? ''
        postAnestStore.AldreteFinal120Min = paciente?.altaRec_120min ?? ''
        postAnestStore.CalificacionAldrete = paciente?.altaRec_CalifAldrete ?? ''
        postAnestStore.ObservacionesAlta = paciente?.altaRec_Obs ?? ''
        postAnestStore.FechaAlta = paciente?.altaRec_FechaAltaRec ?? ''
        postAnestStore.HoraAlta = paciente?.altaRec_HrAltaRec ?? ''
        postAnestStore.NombreAnestesiologo = paciente?.altaRec_NomMedAnest ?? ''
      } else {
        postAnestStore.NotaUCPA = ''
        postAnestStore.FCIngreso = ''
        postAnestStore.FC15Min = ''
        postAnestStore.FC30Min = ''
        postAnestStore.FC45Min = ''
        postAnestStore.FC60Min = ''
        postAnestStore.FC90Min = ''
        postAnestStore.FC120Min = ''
        postAnestStore.FRIngreso = ''
        postAnestStore.FR15Min = ''
        postAnestStore.FR30Min = ''
        postAnestStore.FR45Min = ''
        postAnestStore.FR60Min = ''
        postAnestStore.FR90Min = ''
        postAnestStore.FR120Min = ''
        postAnestStore.TensionIngreso = ''
        postAnestStore.Tension15Min = ''
        postAnestStore.Tension30Min = ''
        postAnestStore.Tension45Min = ''
        postAnestStore.Tension60Min = ''
        postAnestStore.Tension90Min = ''
        postAnestStore.Tension120Min = ''
        postAnestStore.SaturacionIngreso = ''
        postAnestStore.Saturacion15Min = ''
        postAnestStore.Saturacion30Min = ''
        postAnestStore.Saturacion45Min = ''
        postAnestStore.Saturacion60Min = ''
        postAnestStore.Saturacion90Min = ''
        postAnestStore.Saturacion120Min = ''
        postAnestStore.AldreteIngreso = ''
        postAnestStore.Aldrete15Min = ''
        postAnestStore.Aldrete30Min = ''
        postAnestStore.Aldrete45Min = ''
        postAnestStore.Aldrete60Min = ''
        postAnestStore.Aldrete90Min = ''
        postAnestStore.Aldrete120Min = ''
        postAnestStore.BromageIngreso = ''
        postAnestStore.Bromage15Min = ''
        postAnestStore.Bromage30Min = ''
        postAnestStore.Bromage45Min = ''
        postAnestStore.Bromage60Min = ''
        postAnestStore.Bromage90Min = ''
        postAnestStore.Bromage120Min = ''
        postAnestStore.NauseaIngreso = ''
        postAnestStore.Nausea15Min = ''
        postAnestStore.Nausea30Min = ''
        postAnestStore.Nausea45Min = ''
        postAnestStore.Nausea60Min = ''
        postAnestStore.Nausea90Min = ''
        postAnestStore.Nausea120Min = ''
        postAnestStore.EscalaEVAIngreso = ''
        postAnestStore.EscalaEVA15Min = ''
        postAnestStore.EscabaEVA30Min = ''
        postAnestStore.EscalaEVA45Min = ''
        postAnestStore.EscalaEVA60Min = ''
        postAnestStore.EscalaEVA90Min = ''
        postAnestStore.EscalaEVA120Min = ''
        postAnestStore.AldreteFinal0Min = ''
        postAnestStore.AldreteFinal15Min = ''
        postAnestStore.AldreteFinal30Min = ''
        postAnestStore.AldreteFinal45Min = ''
        postAnestStore.AldreteFinal60Min = ''
        postAnestStore.AldreteFinal90Min = ''
        postAnestStore.AldreteFinal120Min = ''
        postAnestStore.CalificacionAldrete = ''
        postAnestStore.ObservacionesAlta = ''
        postAnestStore.NombreAnestesiologo = ''
        postAnestStore.FechaAlta = ''
        postAnestStore.HoraAlta = ''
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

    // Dividir y crear graficas para cargar en documento PDF
    crearGraficasPDF(fc, pulso, pas, pad, pam, spo2, etco2, temp1, temp2, pvc, pasin, padin, pamin, fico2, fr, horas, element) {
      return new ChartJS(element, {
        type: 'line',
        data: {
          labels: horas,
          datasets: [
            {
              label: 'FC',
              data: fc,
              borderColor: 'rgba(0, 165, 151)',
              fill: false,
              pointStyle: 'circle', //Estilo del punto en los datos
              pointRadius: 4, //Tamaño punto
            },
            {
              label: 'Pulso',
              borderColor: 'rgba(117, 137, 190)',
              data: pulso,
              fill: false,
              pointStyle: 'cross',
              pointRadius: 4
            },
            {
              label: 'PAS',
              borderColor: 'rgba(236, 90, 85)',
              data: pas,
              fill: false,
              pointStyle: 'crossRot',
              pointRadius: 4
            },
            {
              label: 'PAD',
              borderColor: 'rgba(161, 197, 227)',
              data: pad,
              fill: false,
              pointStyle: 'cross',
              pointRadius: 4
            },
            {
                label: 'PAM',
                borderColor: 'rgba(236, 102, 24)',
                data: pam,
                fill: false,
                pointStyle: 'rectRounded',
                pointRadius: 4
            },
            {
                label: 'SpO2',
                borderColor: 'rgba(68, 163, 211)',
                data: spo2,
                fill: false,
                pointStyle: 'rectRot',
                pointRadius: 4
            },
            {
                label: 'EtCO2',
                borderColor: 'rgba(112, 229, 225)',
                data: etco2,
                fill: false,
                pointStyle: 'star',
                pointRadius: 4
            },
            {
                label: 'Temp1',
                borderColor: 'rgba(157, 157, 157)',
                data: temp1,
                fill: false,
                pointStyle: 'triangle',
                pointRadius: 4
            },
            {
                label: 'Temp2',
                borderColor: 'rgba(174, 35, 30)',
                data: temp2,
                fill: false,
                pointStyle: 'circle',
                pointRadius: 4
            },
            {
                label: 'PVC',
                borderColor: 'rgba(77, 157, 183)',
                data: pvc,
                fill: false,
                pointStyle: 'rectRot',
                pointRadius: 4
            },
            {
                label: 'PAS_IN',
                borderColor: 'rgba(198, 27, 27)',
                data: pasin,
                fill: false,
                pointStyle: 'crossRot',
                pointRadius: 4
            },
            {
                label: 'PAD_IN',
                borderColor: 'rgba(198, 27, 27)',
                data: padin,
                fill: false,
                pointStyle: 'cross',
                pointRadius: 4
            },
            {
                label: 'PAM_IN',
                borderColor: 'rgba(198, 27, 27)',
                data: pamin,
                fill: false,
                pointStyle: 'rectRounded',
                pointRadius: 4
            },
            {
                label: 'FiCO2',
                borderColor: 'rgba(2, 43, 155)',
                data: fico2,
                fill: false,
                pointStyle: 'star',
                pointRadius: 4
            },
            {
                label: 'FR',
                borderColor: 'rgba(255, 196, 0)',
                data: fr,
                fill: false,
                pointStyle: 'triangle',
                pointRadius: 4
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
    },

    // Generar Grafica a Imagen
    async convertirGrafica() {
      let grafica = (this.$refs.chartRef as HTMLElement);
      let canvas = await html2canvas(grafica);    
      return canvas.toDataURL('image/png'); // Devuelve la imagen como base64
    },

    async obtenerValoresGrafica() {

      this.chartElements.forEach(chart => {
        chart.destroy();
      });
      this.chartElements = [];

      let FC = null
      let Pulso = null
      let PAS = null      
      let PAD = null
      let PAM = null
      let SpO2 = null
      let EtCO2 = null
      let Temp1 = null
      let Temp2 = null
      let PVC = null
      let PAS_IN = null
      let PAD_IN = null
      let PAM_IN = null
      let FiCO2 = null
      let FR = null
      let horaGeneracion = null
      
      if (transStore.datosMSV != ''){
        
        FC = transStore.datosMSV.flatMap(dato => dato.FC ?? ' ') //Corregir esto      
        Pulso = transStore.datosMSV.flatMap(dato => dato.Pulso ?? ' ')
        PAS = transStore.datosMSV.flatMap(dato => dato.PAS ?? ' ')      
        PAD = transStore.datosMSV.flatMap(dato => dato.PAD ?? ' ')
        PAM = transStore.datosMSV.flatMap(dato => dato.PAM ?? ' ')      
        SpO2 = transStore.datosMSV.flatMap(dato => dato.SpO2 ?? ' ')      
        EtCO2 = transStore.datosMSV.flatMap(dato => dato.EtCO2 ?? ' ')      
        Temp1 = transStore.datosMSV.flatMap(dato => dato.Temp1 ?? ' ')      
        Temp2 = transStore.datosMSV.flatMap(dato => dato.Temp2 ?? ' ')      
        PVC = transStore.datosMSV.flatMap(dato => dato.PVC ?? ' ')      
        PAS_IN = transStore.datosMSV.flatMap(dato => dato.PAS_IN ?? ' ')      
        PAD_IN = transStore.datosMSV.flatMap(dato => dato.PAD_IN ?? ' ')      
        PAM_IN = transStore.datosMSV.flatMap(dato => dato.PAM_IN ?? ' ')      
        FiCO2 = transStore.datosMSV.flatMap(dato => dato.FiCO2 ?? ' ')      
        FR = transStore.datosMSV.flatMap(dato => dato.FR ?? ' ')      
        horaGeneracion = transStore.datosMSV.map(item => item.HoraGeneracion);
      }else{
        FC = ' '
        Pulso = ' '
        PAS = ' '
        PAD = ' '
        PAM = ' '
        SpO2 = ' '
        EtCO2 = ' '
        Temp1 = ' '
        Temp2 = ' '
        PVC = ' '
        PAS_IN = ' '
        PAD_IN = ' '
        PAM_IN = ' '
        FiCO2 = ' '
        FR = ' '
        horaGeneracion = ' '
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
                    gruposTemp2[i], gruposPVC[i], gruposPASIN[i], gruposPADIN[i], gruposPAMIN[i], gruposFiCO2[i], gruposFR[i], gruposHora[i], canvasElement);
        this.chartElements.push(chart);
      }

      this.chartKey += 1;
    },

    // Imprimir PDF      
    async crearPdf() {
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
      let nomPaciente = idStore.NombrePaciente === undefined || idStore.NombrePaciente === null ? ' ' : idStore.NombrePaciente;
      const txtNomPaciente = nomPaciente.length > 45 ? nomPaciente.substring(0, 45) + '...' : nomPaciente;
      // Fecha Nacimiento
      let fechaNac = idStore.fechaNacimientoPaciente === undefined ? ' ' : idStore.fechaNacimientoPaciente
      // Edad
      let edad = idStore.edadPaciente === undefined || idStore.edadPaciente === null ? ' ' : idStore.edadPaciente + ' años';       
      // Sexo
      let sexo = idStore.generoPaciente === undefined ? ' ' : idStore.generoPaciente;
      // CURP
      let curp = idStore.CURP === undefined ? '' : idStore.CURP;
      // Número Habitación
      let numHabitacion = idStore.Habitacion === undefined ? ' ' : idStore.Habitacion;
      // Número Episodio
      let numEpisodio = idStore.NumeroEpisodio === undefined ? ' ' : idStore.NumeroEpisodio;
      // Número Expediente
      let numExp = idStore.numeroExpediente === undefined ? ' ' : idStore.numeroExpediente;
      // Fecha Ingreso
      let fechaIngreso = idStore.FechaIngreso === undefined ? ' ' : idStore.FechaIngreso;
      // Nacionalidad
      let nacionalidad = idStore.Nacionalidad === undefined ? ' ' : idStore.Nacionalidad;
      // Folio ID
      let folioId = idStore.FolioID === undefined ? ' ' : idStore.FolioID;
      // Estado Nacimiento
      let estNacimiento = idStore.EstadoNacimiento === undefined ? ' ' : idStore.EstadoNacimiento;
      // Residencia
      let estResidencia = idStore.EstadoResidencia === undefined ? ' ' : idStore.EstadoResidencia;
      // Alcaldía
      let alcaldia = idStore.Alcaldia === undefined ? ' ' : idStore.Alcaldia;
      // Colonia
      let colonia = idStore.Colonia === undefined ? ' ' : idStore.Colonia;
      // Diagnóstico
      let diagnostico = idStore.Diagnostico === undefined || idStore.Diagnostico === null ? ' ' : idStore.Diagnostico;
      let txtDiagnostico = diagnostico.length > 50 ? diagnostico.substring(0, 50) + '...' : diagnostico;
      // Tipo Cirugía
      let tipoCirugia = idStore.TipoCirugia === undefined ? ' ' : idStore.TipoCirugia;
      // Cirujano
      let cirujano = idStore.NombreCirujano === undefined || idStore.NombreCirujano === null ? ' ' : idStore.NombreCirujano;
      let txtNomCirujano = cirujano.length > 45 ? cirujano.substring(0, 45) + '...' : cirujano;
      // Anestesiólogo
      let anestesiologo = idStore.NombreAnestesiologo === undefined || idStore.NombreAnestesiologo === null ? ' ' : idStore.NombreAnestesiologo;
      let txtAnestesiologo = anestesiologo.length > 45 ? anestesiologo.substring(0, 45) + '...' : anestesiologo;
      // Residente de Anestesia
      let resiAnestesia = idStore.residenteAnestesia === undefined || idStore.residenteAnestesia === null ? ' ' : idStore.residenteAnestesia;
      let txtResidente = resiAnestesia.length > 45 ? resiAnestesia.substring(0, 45) + '...' : resiAnestesia;
      // Anestesiólogo VPA
      let anestesiologoVPA = idStore.AnestesiologoVPA === undefined || idStore.AnestesiologoVPA === null ? ' ' : idStore.AnestesiologoVPA;
      let txtAnestesiologoVPA = anestesiologoVPA.length > 45 ? anestesiologoVPA.substring(0, 45) + '...' : anestesiologoVPA;
      // Fecha de Cirugía
      let fechaCx = idStore.FechaCirugia === undefined ? ' ' : idStore.FechaCirugia;
      // Hora de Cirugía
      let horaCx = idStore.HoraCirugia === undefined ? ' ' : idStore.HoraCirugia;
      // Cirugía
      let cirugia = idStore.NombreCirugia === undefined || idStore.NombreCirugia === null ? ' ' : idStore.NombreCirugia;
      let txtCirugia= cirugia.length > 80 ? cirugia.substring(0, 80) + '...' : cirugia;
      // CIE-10
      let CIE10 = idStore.CIE10 === undefined ? ' ' : idStore.CIE10;
      // CIE-9
      let CIE9 = idStore.CIE9 === undefined ? ' ' : idStore.CIE9;       
      
      /*VALORACIÓN*/        
      /*Exploración Física*/
      // Antecedentes de Importancia
      let antecImportancia = idStore.AntecedentesImportancia === null || idStore.AntecedentesImportancia === undefined ? ' ' : idStore.AntecedentesImportancia;
      let txtAntecImportancia= antecImportancia.length > 300 ? antecImportancia.substring(0, 300) + '...' : antecImportancia;
      // Frecuencia Cardiáca
      let FC= idStore.FrecuenciaCardiaca === undefined ? ' ' : idStore.FrecuenciaCardiaca;
      // Frecuencia Respiratoria
      let FR= idStore.FrecuenciaRespiratoria === undefined ? ' ' : idStore.FrecuenciaRespiratoria;
      // Tensión Anterial
      let tensionArterial= idStore.TensionArterial === undefined ? ' ' : idStore.TensionArterial;
      // Saturación de O2
      let SpO2= idStore.SaturacionOxigeno === undefined ? ' ' : idStore.SaturacionOxigeno;
      // Temperatura
      let temperatura= idStore.Temperatura === undefined ? ' ' : idStore.Temperatura;
      // Peso
      let peso= idStore.Peso === undefined || idStore.Peso === null ? ' ' : idStore.Peso +' kg';
      // Talla
      let talla= idStore.Talla === undefined || idStore.Talla === null ? ' ' : idStore.Talla +' mts';
      // IMC
      let IMC= idStore.IMC === undefined ? ' ' : idStore.IMC;
      // Cabeza
      let cabeza= idStore.Cabeza === undefined || idStore.Cabeza === null ? ' ' : idStore.Cabeza
      let txtCabeza= cabeza.length > 120 ? cabeza.substring(0, 120) + '...' : cabeza;
      // Cuello
      let cuello= idStore.Cuello === undefined || idStore.Cuello === null ? ' ' : idStore.Cuello
      let txtCuello= cuello.length > 120 ? cuello.substring(0, 120) + '...' : cuello;
      // Respiratorio
      let respiratorio= idStore.Respiratorio === undefined || idStore.Respiratorio === null ? ' ' : idStore.Respiratorio
      let txtRespiratorio= respiratorio.length > 120 ? respiratorio.substring(0, 120) + '...' : respiratorio;
      // Cardiovascular
      let cardiovascular= idStore.Cadiovascular === undefined || idStore.Cadiovascular === null ? ' ' : idStore.Cadiovascular
      let txtCardiovascular= cardiovascular.length > 120 ? cardiovascular.substring(0, 120) + '...' : cardiovascular;
      // Hipertensión Arterial
      let hipArterial= idStore.Hipertension === undefined || idStore.Hipertension === null ? ' ' : idStore.Hipertension
      let txtHipArterial= hipArterial.length > 120 ? hipArterial.substring(0, 120) + '...' : hipArterial;
      // Abdomen
      let abdomen= idStore.Abdomen === undefined || idStore.Abdomen === null ? ' ' : idStore.Abdomen
      let txtAbdomen= abdomen.length > 120 ? abdomen.substring(0, 120) + '...' : abdomen;
      // Genitourinario
      let genitourinario= idStore.Genitourinario === undefined || idStore.Genitourinario === null ? ' ' : idStore.Genitourinario
      let txtGenitourinario= genitourinario.length > 120 ? genitourinario.substring(0, 120) + '...' : genitourinario;
      // Músculo Esquelético
      let musEsq= idStore.MusculoEsqueletico === undefined || idStore.MusculoEsqueletico === null ? ' ' : idStore.MusculoEsqueletico
      let txtMusEsq= musEsq.length > 120 ? musEsq.substring(0, 120) + '...' : musEsq;
      // Neurológico
      let neurologico= idStore.Neurologico === undefined || idStore.Neurologico === null ? ' ' : idStore.Neurologico
      let txtNeurologico= neurologico.length > 120 ? neurologico.substring(0, 120) + '...' : neurologico;
      // Piel y Fanareas
      let piel= idStore.PielFaneras === undefined || idStore.PielFaneras === null ? ' ' : idStore.PielFaneras
      let txtPiel= piel.length > 120 ? piel.substring(0, 120) + '...' : piel;
      
      /*Antecedentes*/
      // Ayuno
      let ayuno = idStore.APNPHorasAyuno === undefined ? ' ' : idStore.APNPHorasAyuno;
      // Tabaquismo
      let tabaquismo = idStore.APNPTabaquismo === undefined || idStore.APNPTabaquismo === null ? ' ' : idStore.APNPTabaquismo;
      let txtTabaqismo= tabaquismo.length > 50 ? tabaquismo.substring(0, 50) + '...' : tabaquismo;
      // Etilismo
      let etilismo = idStore.APNPEtilismo === undefined || idStore.APNPEtilismo === null ? ' ' : idStore.APNPEtilismo;
      let txtEtilismo= etilismo.length > 50 ? etilismo.substring(0, 50) + '...' : etilismo;
      // Adicciones
      let adicciones = idStore.APNPAdicciones === undefined || idStore.APNPAdicciones === null ? ' ' : idStore.APNPAdicciones;
      let txtAdicciones= adicciones.length > 50 ? adicciones.substring(0, 50) + '...' : adicciones;
      // Inmunizaciones
      let inmunizaciones = idStore.APNPInmunizaciones === undefined || idStore.APNPInmunizaciones === null ? ' ' : idStore.APNPInmunizaciones;
      let txtInmunizaciones= inmunizaciones.length > 50 ? inmunizaciones.substring(0, 50) + '...' : inmunizaciones;
      // Alergias
      let alergias = idStore.APPAlergias === undefined || idStore.APPAlergias === null ? ' ' : idStore.APPAlergias;
      let txtAlergias= alergias.length > 50 ? alergias.substring(0, 50) + '...' : alergias;
      // Quirúrgicos
      let quirurgicos = idStore.APPQuirurgicos === undefined || idStore.APPQuirurgicos === null ? ' ' : idStore.APPQuirurgicos;
      let txtQuirurgicos= quirurgicos.length > 50 ? quirurgicos.substring(0, 50) + '...' : quirurgicos;
      // Endocronológicos
      let endocronologicos = idStore.APPEndocrinologicos === undefined || idStore.APPEndocrinologicos === null ? ' ' : idStore.APPEndocrinologicos;
      let txtEndocronologicos= endocronologicos.length > 50 ? endocronologicos.substring(0, 50) + '...' : endocronologicos;
      // Urológicos
      let urologicos = idStore.APPUrologicos === undefined || idStore.APPUrologicos === null ? ' ' : idStore.APPUrologicos;
      let txtUrologicos= urologicos.length > 50 ? urologicos.substring(0, 50) + '...' : urologicos;
      // Traumáticos
      let traumaticos = idStore.APPTraumaticos === undefined || idStore.APPTraumaticos === null ? ' ' : idStore.APPTraumaticos;
      let txtTraumaticos= traumaticos.length > 50 ? traumaticos.substring(0, 50) + '...' : traumaticos;
      // Ortopédicos
      let ortopedicos = idStore.APPOrtopedicos === undefined || idStore.APPOrtopedicos === null ? ' ' : idStore.APPOrtopedicos;
      let txtOrtopedicos= ortopedicos.length > 50 ? ortopedicos.substring(0, 50) + '...' : ortopedicos;        
      // Transfusiones Previas
      let transPrevias = idStore.APPTransfuciones === undefined || idStore.APPTransfuciones === null ? ' ' : idStore.APPTransfuciones;
      let txtTransPrevias= transPrevias.length > 50 ? transPrevias.substring(0, 50) + '...' : transPrevias;
      // Estado Psiquico
      let estadoPsiquico = idStore.APPEstadoPsiquico === undefined || idStore.APPEstadoPsiquico === null ? ' ' : idStore.APPEstadoPsiquico;
      let txtEstadoPsiquico= estadoPsiquico.length > 50 ? estadoPsiquico.substring(0, 50) + '...' : estadoPsiquico;
      // Complicaciones Anestésicas Previas
      let compliPrevias = idStore.APPComplicaciones === undefined || idStore.APPComplicaciones === null ? ' ' : idStore.APPComplicaciones;
      let txtCompliPrevias= compliPrevias.length > 80 ? compliPrevias.substring(0, 80) + '...' : compliPrevias;
      // Medicación Actual
      let medicaActual = idStore.APPMedicacion === undefined || idStore.APPMedicacion === null ? ' ' : idStore.APPMedicacion;
      let txtMedicaActual= medicaActual.length > 80 ? medicaActual.substring(0, 80) + '...' : medicaActual;
      
      /*Laboratorio*/
      // Fecha Realización 
      let fechaEstudios = idStore.FechaRealizacion === undefined || idStore.FechaRealizacion === null ? ' ' : idStore.FechaRealizacion;
      // Grupo Sanguineo 
      let grupoSanguineo = idStore.GrupoSanguineo === undefined || idStore.GrupoSanguineo === null ? ' ' : idStore.GrupoSanguineo;
      // Hemoglobina 
      let hemoglobina = idStore.Hemoglobina === undefined || idStore.Hemoglobina === null ? ' ' : idStore.Hemoglobina;
      // Hematocrito 
      let hematocrito = idStore.Hematocrito === undefined || idStore.Hematocrito === null ? ' ' : idStore.Hematocrito;
      // Plaquetas 
      let plaquetas = idStore.Plaquetas === undefined || idStore.Plaquetas === null ? ' ' : idStore.Plaquetas;
      // Leutocitos 
      let leutocitos = idStore.Leutocitos === undefined || idStore.Leutocitos === null ? ' ' : idStore.Leutocitos;
      // TP 
      let TP = idStore.TP === undefined || idStore.TP === null ? ' ' : idStore.TP;
      // TT 
      let TT = idStore.TT === undefined || idStore.TT === null ? ' ' : idStore.TT;
      // TPT 
      let TPT = idStore.TPT === undefined || idStore.TPT === null ? ' ' : idStore.TPT;
      // INR 
      let INR = idStore.INR === undefined || idStore.INR === null ? ' ' : idStore.INR;
      // Glucosa 
      let glucosa = idStore.Glucosa === undefined || idStore.Glucosa === null ? ' ' : idStore.Glucosa;
      // Creatinina 
      let creatinina = idStore.Creatinina === undefined || idStore.Creatinina === null ? ' ' : idStore.Creatinina;
      // Urea 
      let urea = idStore.Urea === undefined || idStore.Urea === null ? ' ' : idStore.Urea;
      // Sodio 
      let sodio = idStore.Sodio === undefined || idStore.Sodio === null ? ' ' : idStore.Sodio;
      // Potasio 
      let potasio = idStore.Potasio === undefined || idStore.Potasio === null ? ' ' : idStore.Potasio;
      // Cloro 
      let cloro = idStore.Cloro === undefined || idStore.Cloro === null ? ' ' : idStore.Cloro;
      // Calcio 
      let calcio = idStore.Calcio === undefined || idStore.Calcio === null ? ' ' : idStore.Calcio;
      // Magnesio 
      let magnesio = idStore.Megnesio === undefined || idStore.Megnesio === null ? ' ' : idStore.Megnesio;
      // Bilirrubina directa 
      let biliDirecta = idStore.BilirrubinaDirecta === undefined || idStore.BilirrubinaDirecta === null ? ' ' : idStore.BilirrubinaDirecta;
      // Bilirrubina indirecta 
      let biliIndirecta = idStore.BilirrubinaIndirecta === undefined || idStore.BilirrubinaIndirecta === null ? ' ' : idStore.BilirrubinaIndirecta;
      // Bilirrubina total 
      let biliTotal = idStore.BilirrubimaTotal === undefined || idStore.BilirrubimaTotal === null ? ' ' : idStore.BilirrubimaTotal;
      // Lipasa 
      let lipasa = idStore.Lipasa === undefined || idStore.Lipasa === null ? ' ' : idStore.Lipasa;
      // Amilasa 
      let amilasa = idStore.Amilasa === undefined || idStore.Amilasa === null ? ' ' : idStore.Amilasa;
      // Otros 
      let otros = idStore.PerfilOtros === undefined || idStore.PerfilOtros === null ? ' ' : idStore.PerfilOtros;

      /*Vía Aérea*/
      // Mallampati 
      let mallampati = idStore.Mallampati === undefined || idStore.Mallampati === null ? ' ' : idStore.Mallampati;
      // Patil-Aldreti 
      let patilAldreti = idStore.PatilAldreti === undefined || idStore.PatilAldreti === null ? ' ' : idStore.PatilAldreti;
      // Apertura Bucal 
      let aperBucal = idStore.AperturaBucal === undefined || idStore.AperturaBucal === null ? ' ' : idStore.AperturaBucal;
      // Distancia Esternomentoniana 
      let distanciaEster = idStore.Distancia === undefined || idStore.Distancia === null ? ' ' : idStore.Distancia;
      // Protusión Mandibular 
      let protuMandibular = idStore.Protusion === undefined || idStore.Protusion === null ? ' ' : idStore.Protusion;
      // IPID 
      let IPID = idStore.IPID === undefined || idStore.IPID === null ? ' ' : idStore.IPID;
      // Escala Glasgow
      let glasgow = idStore.Glasgow === undefined || idStore.Glasgow === null ? ' ' : idStore.Glasgow;
      // Escala NYHA 
      let NYHA = idStore.NYHA === undefined || idStore.NYHA === null ? ' ' : idStore.NYHA;
      // Escala de Goldman 
      let goldman = idStore.Goldman === undefined || idStore.Goldman === null ? ' ' : idStore.Goldman;
      // Riesgo de Trombosis 
      let trombosis = idStore.RiesgosTrombosis === undefined || idStore.RiesgosTrombosis === null ? ' ' : idStore.RiesgosTrombosis;
      // Clasificación ASA 
      let ASA = idStore.ClasificacionASA === undefined || idStore.ClasificacionASA === null ? ' ' : idStore.ClasificacionASA;
      // Tipo de Cirugía 
      let tipoCir = idStore.VTipoCirugia === undefined || idStore.VTipoCirugia === null ? ' ' : idStore.VTipoCirugia;
      // Riesgo Anéstesico Quirúrgico 
      let riesgo = idStore.RiesgoAnestesico === undefined || idStore.RiesgoAnestesico === null ? ' ' : idStore.RiesgoAnestesico;

      /*Estudios*/
      let listaEstudios = idStore.estudios === null ? [' '] : idStore.estudios.map(item => item.val_Estudios.map(estudio => estudio.estudio)).flat();
      let estudios = listaEstudios.slice(0,5);

      /*PLAN*/        
      /*Posición y Cuidados*/
      // Horas Ayuno
      let hrsAyuno = idStore.HorasAyuno === undefined || idStore.HorasAyuno === null ? ' ' : idStore.HorasAyuno;
      // Acceso Venoso
      let accesoVenoso = idStore.AccesoVenoso === undefined || idStore.AccesoVenoso === null ? ' ' : idStore.AccesoVenoso;
      // Posición Paciente
      let posicionPaciente = idStore.PosicionPaciente === undefined || idStore.PosicionPaciente === null ? ' ' : idStore.PosicionPaciente;
      // Posición Brazos
      let posicionBrazos = idStore.PosicionBrazos === undefined || idStore.PosicionBrazos === null ? ' ' : idStore.PosicionBrazos;
      // Torniquete
      let aplicacionTorniquete = idStore.Sitio === undefined || idStore.Sitio === null ? ' ' : idStore.Sitio;        
      // Tiempo Isquemia
      let tiempoIsquemia = idStore.TiempoIsquemia === undefined || idStore.TiempoIsquemia === null ? ' ' : idStore.TiempoIsquemia;
      // Protección Ojos
      let proteccionOjos = idStore.ProteccionOjos === undefined || idStore.ProteccionOjos === null ? ' ' : idStore.ProteccionOjos;
      // Protección Prominencias Oseas
      let proteccionProminencias = idStore.ProteccionProminencias === undefined || idStore.ProteccionProminencias === null ? ' ' : idStore.ProteccionProminencias;
      // Técnica Anestesica 
      let tecnicaAnestesica = idStore.TecnicaAnestesica === undefined || idStore.TecnicaAnestesica === null ? ' ' : idStore.TecnicaAnestesica;
      // Premedicación
      let premedicacion = idStore.EspecPremedicacion === undefined || idStore.EspecPremedicacion === null ? ' ' : idStore.EspecPremedicacion;
      let txtPremedicacion= premedicacion.length > 80 ? premedicacion.substring(0, 80) + '...' : premedicacion;
      // Monitoreo
      let monitoreo = idStore.Monitoreo === undefined || idStore.Monitoreo === null ? ' ' : idStore.Monitoreo;
      let txtMonitoreo= monitoreo.length > 80 ? monitoreo.substring(0, 80) + '...' : monitoreo;

      /*Anestesia General*/
      // Inducción
      let induccion = idStore.Induccion === undefined || idStore.Induccion === null ? ' ' : idStore.Induccion;
      // Tubo
      let tubo = idStore.Tubo === undefined || idStore.Tubo === null ? ' ' : idStore.Tubo;
      // Número Tubo
      let numeroTubo = idStore.NumeroTubo === undefined || idStore.NumeroTubo === null ? ' ' : idStore.NumeroTubo;
      // Tipo Canula
      let tipoCanula = idStore.TipoCanula === undefined || idStore.TipoCanula === null ? ' ' : idStore.TipoCanula;
      // Globo
      let globo = idStore.Globo === undefined || idStore.Globo === null ? ' ' : idStore.Globo;
      // Presión 
      let presion = idStore.Presion === undefined || idStore.Presion === null ? ' ' : idStore.Presion;
      // Intubación 
      let intubacion = idStore.EspecificarGeneral === undefined || idStore.EspecificarGeneral === null ? ' ' : idStore.EspecificarGeneral;
      let txtIntubacion= intubacion.length > 100 ? intubacion.substring(0, 100) + '...' : intubacion;
      // Calibre 
      let calibre = idStore.Calibre === undefined || idStore.Calibre === null ? ' ' : idStore.Calibre;
      // Complicaciones 
      let complicacionesCalibre = idStore.EspecificarGeneral === undefined || idStore.EspecificarGeneral === null ? ' ' : idStore.EspecificarGeneral;
      let txtComplicacionesCal = complicacionesCalibre.length > 100 ? complicacionesCalibre.substring(0, 100) + '...' : complicacionesCalibre;
      // Uso de otros dispositivos 
      let otrosDispositivos = idStore.EspecificarGeneral === undefined || idStore.EspecificarGeneral === null ? ' ' : idStore.EspecificarGeneral;
      let txtOtrosDispositivos= otrosDispositivos.length > 100 ? otrosDispositivos.substring(0, 100) + '...' : otrosDispositivos;

      /*Anestesia Regional*/
      // BNA Tipo 
      let tipoBloqueo = idStore.TipoRegional === undefined || idStore.TipoRegional === null ? ' ' : idStore.TipoRegional;
      // BNA Tipo Aguja 
      let tipoAguja = idStore.TipoAguja === undefined || idStore.TipoAguja === null ? ' ' : idStore.TipoAguja;
      // BNA Nivel 
      let nivel = idStore.Nivel === undefined || idStore.Nivel === null ? ' ' : idStore.Nivel;
      // BNA Calibre Aguja 
      let calibreAguja = idStore.CalibreAguja === undefined || idStore.CalibreAguja === null ? ' ' : idStore.CalibreAguja;      
      // BNA Orientacion Cateter 
      let orientacionCateter = idStore.OrientacionCateter === undefined || idStore.OrientacionCateter === null ? ' ' : idStore.OrientacionCateter;
      // BNA Especificar Dificultades 
      let dificultadesBloqueo = idStore.EspecificarRegional === undefined || idStore.EspecificarRegional === null ? ' ' : idStore.EspecificarRegional;
      let txtComplicacionesBNA = dificultadesBloqueo.length > 100 ? dificultadesBloqueo.substring(0, 100) + '...' : dificultadesBloqueo;
      // BP Sitio 
      let sitioPlexo = idStore.SitioRegional === undefined || idStore.SitioRegional === null ? ' ' : idStore.SitioRegional;
      // BP Opcion Sitio
      let opcionPlexo = idStore.OpcionRegional === undefined || idStore.OpcionRegional === null ? ' ' : idStore.OpcionRegional;
      // BNA Especificar Sitio 
      let especificarSitio = idStore.EspecificarSitionRegional === undefined || idStore.EspecificarSitionRegional === null ? ' ' : idStore.EspecificarSitionRegional;
      let txtEspecificarSitio = especificarSitio.length > 100 ? especificarSitio.substring(0, 100) + '...' : especificarSitio;
      // BP Anestesico Utilizado 
      let anestesico = idStore.AnestesicoUtilizado === undefined || idStore.AnestesicoUtilizado === null ? ' ' : idStore.AnestesicoUtilizado;
      // BNA Especificar Anestesico 
      let especificarAnest = idStore.EspecificarAnestesico === undefined || idStore.EspecificarAnestesico === null ? ' ' : idStore.EspecificarAnestesico;
      let txtEspecificarAnestesico = especificarAnest.length > 100 ? especificarAnest.substring(0, 100) + '...' : especificarAnest;
      // BP Dificultades 
      let dificultadesPlexo = idStore.EspecificarDificPlexo === undefined || idStore.EspecificarDificPlexo === null ? ' ' : idStore.EspecificarDificPlexo;
      let txtDificultadesPlexo = dificultadesPlexo.length > 100 ? dificultadesPlexo.substring(0, 100) + '...' : dificultadesPlexo;
      // Ultrasonido 
      let ultrasonido = idStore.EspecUltrasonido === undefined || idStore.EspecUltrasonido === null ? ' ' : idStore.EspecUltrasonido;
      let txtUltrasonido = ultrasonido.length > 100 ? ultrasonido.substring(0, 100) + '...' : ultrasonido;
      // Neuroestimulador 
      let neuroestimulador = idStore.EspecificarNeuroestimulador === undefined || idStore.EspecificarNeuroestimulador === null ? ' ' : idStore.EspecificarNeuroestimulador;
      let txtNeuroestimulador = neuroestimulador.length > 100 ? neuroestimulador.substring(0, 100) + '...' : neuroestimulador;
      // Complicaciones Equipo Apoyo 
      let complicacionesEquipo = idStore.EspecificarComplicacNeuroes === undefined || idStore.EspecificarComplicacNeuroes === null ? ' ' : idStore.EspecificarComplicacNeuroes;
      let txtComplicacionesEquipo= complicacionesEquipo.length > 100 ? complicacionesEquipo.substring(0, 100) + '...' : complicacionesEquipo;

      /*Anestesia Sedación*/
      // Vía Sedación
      let viaSedacion = idStore.ViaSedacion === undefined || idStore.ViaSedacion === null ? ' ' : idStore.ViaSedacion;
      // Opción Sedación
      let opcionSedacion = idStore.OpcionSedacion === undefined || idStore.OpcionSedacion === null ? ' ' : idStore.OpcionSedacion;
      // Vía Sedación
      let obserSedacion = idStore.ObservacionesSedacion === undefined || idStore.ObservacionesSedacion === null ? ' ' : idStore.ObservacionesSedacion;
      let txtObserSedacion= obserSedacion.length > 100 ? obserSedacion.substring(0, 100) + '...' : obserSedacion;
      // Vía Sedación
      let medicamentosSedacion = idStore.MedicamentosSedacion === undefined || idStore.MedicamentosSedacion === null ? ' ' : idStore.MedicamentosSedacion;
      let txtMedicaSedacion= medicamentosSedacion.length > 100 ? medicamentosSedacion.substring(0, 100) + '...' : medicamentosSedacion;

      /*Anestesia Local*/
      // Sitio Anestesia
      let sitioLocal = idStore.SitioLocal === undefined || idStore.SitioLocal === null ? ' ' : idStore.SitioLocal;
      // Anestesico Utilizado
      let anestesicoLocal = idStore.AnestesicoLocal === undefined || idStore.AnestesicoLocal === null ? ' ' : idStore.AnestesicoLocal;
      // Especificar
      let especificarLocal = idStore.EspecificarLocal === undefined || idStore.EspecificarLocal === null ? ' ' : idStore.EspecificarLocal;
      let txtEspecifLocal= especificarLocal.length > 100 ? especificarLocal.substring(0, 100) + '...' : especificarLocal;

      /*NOTA PREANÉSTESICA*/
      let notaPre = idStore.NotaPre === undefined || idStore.NotaPre === null ? ' ' : idStore.NotaPre;
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
      // Aldrete Ingreso
      let aldreteIngreso = postAnestStore.AldreteIngreso === undefined || postAnestStore.AldreteIngreso === null ? ' ' : postAnestStore.AldreteIngreso;
      // Aldrete 15 min
      let aldrete15 = postAnestStore.Aldrete15Min === undefined || postAnestStore.Aldrete15Min === null ? ' ' : postAnestStore.Aldrete15Min;
      // Aldrete 30 min
      let aldrete30 = postAnestStore.Aldrete30Min === undefined || postAnestStore.Aldrete30Min === null ? ' ' : postAnestStore.Aldrete30Min;
      // Aldrete 45 min
      let aldrete45 = postAnestStore.Aldrete45Min === undefined || postAnestStore.Aldrete45Min === null ? ' ' : postAnestStore.Aldrete45Min;
      // Aldrete 60 min
      let aldrete60 = postAnestStore.Aldrete60Min === undefined || postAnestStore.Aldrete60Min === null ? ' ' : postAnestStore.Aldrete60Min;
      // Aldrete 90 min
      let aldrete90 = postAnestStore.Aldrete90Min === undefined || postAnestStore.Aldrete90Min === null ? ' ' : postAnestStore.Aldrete90Min;
      // Aldrete 120 min
      let aldrete120 = postAnestStore.Aldrete120Min === undefined || postAnestStore.Aldrete120Min === null ? ' ' : postAnestStore.Aldrete120Min;
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

      /*Datos del Medicamento*/                
      let listaMedicamentosTipo = transStore.medicamentos === null ? [' '] : transStore.medicamentos.map(medicamento => medicamento.tipoMed).flat();
      let tipoMed = listaMedicamentosTipo.slice(0,30);
      let listaMedicamentosMedi = transStore.medicamentos === null ? [' '] : transStore.medicamentos.map(medicamento => medicamento.medicamento).flat();
      let medicamento = listaMedicamentosMedi.slice(0,30);
      let listaMedicamentosDosis = transStore.medicamentos === null ? [' '] : transStore.medicamentos.map(medicamento => (medicamento.dosisMed ?? ' ')).flat();
      let dosisMed = listaMedicamentosDosis.slice(0,30);
      let listaMedicamentosUnidad = transStore.medicamentos === null ? [' '] : transStore.medicamentos.map(medicamento => (medicamento.unidadMed ?? ' ')).flat();
      let unidadMed = listaMedicamentosUnidad.slice(0,30);
      let listaMedicamentosVia = transStore.medicamentos === null ? [' '] : transStore.medicamentos.map(medicamento => (medicamento.viaMed ?? ' ')).flat();
      let viaMed = listaMedicamentosVia.slice(0,30);
      let listaMedicamentosHoraIn = transStore.medicamentos === null ? [' '] : transStore.medicamentos.map(medicamento => (medicamento.horaInicioMed ?? ' ')).flat();
      let horaInicio = listaMedicamentosHoraIn.slice(0,30);
      let listaMedicamentosHoraFi = transStore.medicamentos === null ? [' '] : transStore.medicamentos.map(medicamento => (medicamento.horaFinalMed ?? ' ')).flat();
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
      let listaRelevosHr = transStore.relevos === null ? [' '] : transStore.relevos.map(relevo => relevo.horaRelevo).flat();
      let hrRelevo = listaRelevosHr.slice(0,2);
      let listaRelevosObs = transStore.relevos === null ? [' '] : transStore.relevos.map(relevo => (relevo.observacionesRel ?? ' ')).flat();            
      let obsRelevo = listaRelevosObs.slice(0,2);

      let tablaRelevos = [];
      for (let i = 0; i < Math.max(hrRelevo.length, obsRelevo.length); i++) {
          tablaRelevos.push([
              { text: i < hrRelevo.length ? hrRelevo[i] : '', style: 'SF', fontSize: 8, bold: true },
              { text: i < obsRelevo.length ? obsRelevo[i] : '', style: 'SF', fontSize: 8, bold: true }
          ]);
      };

      /*Datos del Evento Crítico*/
      let listaEventosHr = transStore.eventos === null ? [' '] : transStore.eventos.map(evento => evento.horaEvento).flat();
      let hrEvento = listaEventosHr.slice(0,5);
      let listaEventosDet = transStore.eventos === null ? [' '] : transStore.eventos.map(evento => (evento.detalleEvento ?? ' ')).flat();
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
      let txtHartman = transStore.solHartman === '' || transStore.solHartman === null || transStore.solHartman === undefined ? '' : 'Sol. Hartman: '
      let hartman = transStore.solHartman === '' || transStore.solHartman === null || transStore.solHartman === undefined ? '' : transStore.solHartman+' ml, ';
      // Solución Fisiológica
      let txtSolFisiolo = transStore.solFisio === '' || transStore.solFisio === null || transStore.solFisio === undefined ? '' : 'Sol. Fisiológica: ';
      let solFisiolo = transStore.solFisio === '' || transStore.solFisio === null || transStore.solFisio === undefined ? '' : transStore.solFisio+' ml, ';
      // Glucosados
      let txtGlucosados = transStore.glucosados === '' || transStore.glucosados === null || transStore.glucosados === undefined ? '' : 'Glucosados: ';
      let glucosados = transStore.glucosados === '' || transStore.glucosados === null || transStore.glucosados === undefined ? '' : transStore.glucosados+' ml, ';
      // Gelatinas
      let txtGelatinas = transStore.gelatinas === '' || transStore.gelatinas === null || transStore.gelatinas === undefined ? '' : 'Gelatinas: ';
      let gelatinas = transStore.gelatinas === '' || transStore.gelatinas === null || transStore.gelatinas === undefined ? '' : transStore.gelatinas+' ml, ';
      // Almidones
      let txtAlmidones = transStore.almidones === '' || transStore.almidones === null || transStore.almidones === undefined ? '' : 'Almidones: ';
      let almidones = transStore.almidones === '' || transStore.almidones === null || transStore.almidones === undefined ? '' : transStore.almidones+' ml, ';
      // Albúminas
      let txtAlbuminas = transStore.albuminas === '' || transStore.albuminas === null || transStore.albuminas === undefined ? '' : 'Albúminas: ';
      let albuminas = transStore.albuminas === '' || transStore.albuminas === null || transStore.albuminas === undefined ? '' : transStore.albuminas+' ml, ';
      // Paquete Globular
      let txtPaqGlobular = transStore.paqGlobular === '' || transStore.paqGlobular === null || transStore.paqGlobular === undefined ? '' : 'Paquete Globular: ';
      let paqGlobular = transStore.paqGlobular === '' || transStore.paqGlobular === null || transStore.paqGlobular === undefined ? '' : transStore.paqGlobular+' ml, ';
      // Plasmas
      let txtPlasmas = transStore.plasmas === '' || transStore.plasmas === null || transStore.plasmas === undefined ? '' : 'Plasmas: ';
      let plasmas = transStore.plasmas === '' || transStore.plasmas === null || transStore.plasmas === undefined ? '' : transStore.plasmas+' ml, ';
      // Plaquetas
      let txtPlaquetas = transStore.plaquetas === '' || transStore.plaquetas === null || transStore.plaquetas === undefined ? '' : 'Plaquetas: ';
      let plaquetasIngreso = transStore.plaquetas === '' || transStore.plaquetas === null || transStore.plaquetas === undefined ? '' : transStore.plaquetas+' ml, ';
      // Crioprecipitados
      let txtCrioprecipitados = transStore.crioprecipitados === '' || transStore.crioprecipitados === null || transStore.crioprecipitados === undefined ? '' : 'Crioprecipitados: ';
      let crioprecipitados = transStore.crioprecipitados === '' || transStore.crioprecipitados === null || transStore.crioprecipitados === undefined ? '' : transStore.crioprecipitados+' ml, ';
      // Factor VII
      let txtFactorVII = transStore.factor_VII === '' || transStore.factor_VII === null || transStore.factor_VII === undefined ? '' : 'Factor VII: ';
      let factorVII = transStore.factor_VII === '' || transStore.factor_VII === null || transStore.factor_VII === undefined ? '' : transStore.factor_VII+' ml, ';
      // Factor VIII
      let txtFactorVIII = transStore.factor_VIII === '' || transStore.factor_VIII === null || transStore.factor_VIII === undefined ? '' : 'Factor VIII: ';
      let factorVIII = transStore.factor_VIII === '' || transStore.factor_VIII === null || transStore.factor_VIII === undefined ? '' : transStore.factor_VIII+' ml, ';
      // Otros Ingresos
      let txtOtrosIngresos = transStore.otrosIngresos === '' || transStore.otrosIngresos === null || transStore.otrosIngresos === undefined ? '' : 'Otros: ';
      let otrosIngreso = transStore.otrosIngresos === '' || transStore.otrosIngresos === null || transStore.otrosIngresos === undefined ? '' : transStore.otrosIngresos+' ml';

      // Liquidos de Ascitis
      let txtLiqAscitis = transStore.liqAscitis === '' || transStore.liqAscitis === null || transStore.liqAscitis === undefined ? '' : 'Liquídos de Ascitis: ';
      let liqAscitis = transStore.liqAscitis === '' || transStore.liqAscitis === null || transStore.liqAscitis === undefined ? '' : transStore.liqAscitis+' ml, ';
      // Sangrado Aproximado
      let txtSangradoAprox = transStore.sangradoAprox === '' || transStore.sangradoAprox === null || transStore.sangradoAprox === undefined ? '' : 'Sangrado Aprox.: ';
      let sangradoAprox = transStore.sangradoAprox === '' || transStore.sangradoAprox === null || transStore.sangradoAprox === undefined ? '' : transStore.sangradoAprox+' ml, ';
      // Uresis
      let txtUresis = transStore.uresis === '' || transStore.uresis === null || transStore.uresis === undefined ? '' : 'Uresis: ';
      let uresis = transStore.uresis === '' || transStore.uresis === null || transStore.uresis === undefined ? '' : transStore.uresis+' ml, ';
      // Exposición Quirúrgica
      let txtExpQuirurgica = transStore.expoQX === '' || transStore.expoQX === null || transStore.expoQX === undefined ? '' : 'Exposición Quirúrgica: ';
      let expQuirurgica = transStore.expoQX === '' || transStore.expoQX === null || transStore.expoQX === undefined ? '' : transStore.expoQX+' ml, ';
      // Requerimientos Basales
      let txtReqBasales = transStore.reqBasales === '' || transStore.reqBasales === null || transStore.reqBasales === undefined ? '' : 'Requerimientos Basales: ';
      let reqBasales = transStore.reqBasales === '' || transStore.reqBasales === null || transStore.reqBasales === undefined ? '' : transStore.reqBasales+' ml, ';
      // Ayuno
      let txtAyuno = transStore.ayuno === '' || transStore.ayuno === null || transStore.ayuno === undefined ? '' : 'Ayuno: ';
      let ayunoEgreso = transStore.ayuno === '' || transStore.ayuno === null || transStore.ayuno === undefined ? '' : transStore.ayuno+' ml, ';
      // Otros Egresos
      let txtOtrosEgresos = transStore.otrosEgresos === '' || transStore.otrosEgresos === null || transStore.otrosEgresos === undefined ? '' : 'Otros: ';
      let otrosEgresos = transStore.otrosEgresos === '' || transStore.otrosEgresos === null || transStore.otrosEgresos === undefined ? '' : transStore.otrosEgresos+' ml';
      // Balance Total
      let balanceTotal = transStore.balanceTotal === undefined || transStore.balanceTotal === null ? '' : transStore.balanceTotal+' ml';    

      /*Datos del Ventilador*/
      // Modo Ventilación
      let listaVentilacionModo = transStore.datosVentilacion === null ? [' '] : transStore.datosVentilacion.map(ventilador => ventilador.modosVentilacion).flat();
      let modoVentilacion = listaVentilacionModo.slice(-1);
      // PEEP
      let listaVentilacionPEEP = transStore.datosVentilacion === null ? [' '] : transStore.datosVentilacion.map(ventilador => (ventilador.peep ?? ' ')).flat();
      let peep = listaVentilacionPEEP.slice(-1);
      // VT
      let listaVentilacionVT = transStore.datosVentilacion === null ? [' '] : transStore.datosVentilacion.map(ventilador => (ventilador.vt ?? ' ')).flat();
      let vt = listaVentilacionVT.slice(-1);
      // Frecuencia Respiratoria
      let listaVentilacionFR = transStore.datosVentilacion === null ? [' '] : transStore.datosVentilacion.map(ventilador => (ventilador.frecResp ?? ' ')).flat();
      let freResp = listaVentilacionFR.slice(-1);
      // I:E
      let listaVentilacionIE = transStore.datosVentilacion === null ? [' '] : transStore.datosVentilacion.map(ventilador => (ventilador.IE ?? ' ')).flat();
      let ie = listaVentilacionIE.slice(-1);
      // P. Límite
      let listaVentilacionPLimite = transStore.datosVentilacion === null ? [' '] : transStore.datosVentilacion.map(ventilador => (ventilador.PLimite ?? ' ')).flat();
      let pLimite = listaVentilacionPLimite.slice(-1);

      /*Tiempos Quirurgicos*/
      // QX IN
      let QXIN = transStore.ingresoQX === undefined || transStore.ingresoQX === null ? ' ' : transStore.ingresoQX;
      // ANES IN
      let ANESIN = transStore.inicioAn === undefined || transStore.inicioAn === null ? ' ' : transStore.inicioAn;
      // CX IN
      let CXIN = transStore.inicioCx === undefined || transStore.inicioCx === null ? ' ' : transStore.inicioCx;
      // CX OUT
      let CXOUT = transStore.finCx === undefined || transStore.finCx === null ? ' ' : transStore.finCx;
      // ANES OUT
      let ANESOUT = transStore.finAn === undefined || transStore.finAn === null ? ' ' : transStore.finAn;
      // QX OUT
      let QXOUT = transStore.egresoQx === undefined || transStore.egresoQx === null ? ' ' : transStore.egresoQx;

      let cirugiaTrans = idStore.NombreCirugia === undefined || idStore.NombreCirugia === null ? ' ' : idStore.NombreCirugia;
      let txtCirugiaTrans= cirugiaTrans.length > 60 ? cirugiaTrans.substring(0, 60) + '...' : cirugiaTrans;        

      /*Grid Anestésico*/
      if(transStore.datosMSV == ''){
        transStore.datosMSV = []
      }

      let datosGrid = transStore.datosMSV;
      let tablaDatosGrid = [];

      datosGrid.forEach(entry => {
        
        const columnData = [];
        // Agregar la Hora 
        columnData.push({ text: entry.HoraGeneracion, style: 'SF', fontSize: 6, alignment:'center', margin: [0, 0, 0, 4] });
        // Agregar los valores
        columnData.push({ text: entry.FC, style: 'SF', fontSize: 6, bold: true, alignment:'center', margin: [0, 0, 0, 4] });
        columnData.push({ text: entry.Pulso, style: 'SF', fontSize: 6, bold: true, alignment:'center', margin: [0, 0, 0, 4] });
        columnData.push({ text: entry.PAS, style: 'SF', fontSize: 6, bold: true, alignment:'center', margin: [0, 0, 0, 4] });
        columnData.push({ text: entry.PAD, style: 'SF', fontSize: 6, bold: true, alignment:'center', margin: [0, 0, 0, 4] });
        columnData.push({ text: entry.PAM, style: 'SF', fontSize: 6, bold: true, alignment:'center', margin: [0, 0, 0, 4] });
        columnData.push({ text: entry.SpO2, style: 'SF', fontSize: 6, bold: true, alignment:'center', margin: [0, 0, 0, 4] });
        columnData.push({ text: entry.EtCO2, style: 'SF', fontSize: 6, bold: true, alignment:'center', margin: [0, 0, 0, 4] });
        columnData.push({ text: entry.Temp1, style: 'SF', fontSize: 6, bold: true, alignment:'center', margin: [0, 0, 0, 4] });
        columnData.push({ text: entry.Temp2, style: 'SF', fontSize: 6, bold: true, alignment:'center', margin: [0, 0, 0, 4] });
        columnData.push({ text: entry.PVC, style: 'SF', fontSize: 6, bold: true, alignment:'center', margin: [0, 0, 0, 4] });
        columnData.push({ text: entry.PAS_IN, style: 'SF', fontSize: 6, bold: true, alignment:'center', margin: [0, 0, 0, 4] });
        columnData.push({ text: entry.PAD_IN, style: 'SF', fontSize: 6, bold: true, alignment:'center', margin: [0, 0, 0, 4] });
        columnData.push({ text: entry.PAM_IN, style: 'SF', fontSize: 6, bold: true, alignment:'center', margin: [0, 0, 0, 4] });
        columnData.push({ text: entry.FiCO2, style: 'SF', fontSize: 6, bold: true, alignment:'center', margin: [0, 0, 0, 4] });
        columnData.push({ text: entry.FR, style: 'SF', fontSize: 6, bold: true, alignment:'center', margin: [0, 0, 0, 4] });

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
          image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAAFvCAYAAAAVCWZrAAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVR4nO3d+3ZdSX4f9g2t/p/UExzOExCzsPKPutlErxXraploy7Itw1nExHYiaTQiRsvWfdRoWaOxbmm0RlbixEmDshFbiZMGkug2kt1kX+Y/rAGeYHieYIgnYNYm6zQ3QQA852BX7aran89anOaQ4LnsfarO3t/6VdXKkydPGgAAAACgTt/nvAIAAABAvQSAAAAAAFAxASAAAAAAVEwACAAAAAAVEwACAAAAQMUEgAAAAABQMQEgAAAAAFRMAAgAAAAAFRMAAgAAAEDFBIAAAAAAUDEBIAAAAABUTAAIAAAAABUTAAIAAABAxQSAAAAAAFAxASAAAAAAVEwACAAAAAAVEwACAAAAQMUEgAAAAABQMQEgAAAAAFRMAAgAAAAAFRMAAgAAAEDFBIAAAAAAUDEBIAAAAABUTAAIAAAAABUTAAIAAABAxQSAAAAAAFAxASAAAAAAVEwACAAAAAAVEwACAAAAQMUEgAAAAABQsdecXM6arG1uN03z3kAH5vunR/uPnRQAAACAfqgA5DzbAx6VLWcEAAAAoD8CQF4wWdtcbf8z4FEZMnwEAAAAqI4AkLOGDuAmk7XN9YFfAwAAAEA1BIB8brK2eb1pmo0MjohpwAAAAAA9EQDS1YZ/1zI4IndDGAkAAADAFQkA6cpp/T1VgAAAAAA9EADy1GRt80bTNDczOho2AwEAAADowWsOIkFugVu7GcjG9Gj/IIPXAgBZCbv278Z6TdOjfRtyAQBURADITI5TbtvXJAAEgJe1a+XedlwAAJiHKcC0VQRbmWz+cdadMDUZAAAAgCUJAGky33DDZiAAAAAAVyAAHLlQYZfzFCIBIAAAAMAVCADJPWB7uhlIBq8DAAAAoEgCQEqosFMFCAAAALAkAeCIhcq6SQFHwGYgAAAAAEsSAI5bSZV12xm8BgAAAIDiCABHarK2eb2trIvw7qeRjqhpwAAAAABLEACOV4xA7aRpmoNIR/TaZG1TCAgAAACwIAHgeMWYUrvbNM2DiEdUAAgAAACwIAHgCE3WNtcjbf5xMD3abysATyMd1ds2AwEAAABYjABwnGJU0h1Oj/Yfh9/Hmgbc2AwEAAAAYDECwJEJm39sRHjXe53fxwwATQMGAAAAWIAAcHza8O9az+/6NEz9fSr8PtZuwDYDAQAAAFiAAHB8YkyhPa/izzRgAAAAgAwIAEdksra52jTNzQjvePecP9s758/6cjO8FwAAAABeQQA4LjGmzk6nR/vHL/3hsz+LNQ24UQUIAAAAMB8B4LjECADPq/6b5++uaiNsaAIAAADAJQSAIxE2zuh784/mFWv9xVwH8Fqk3YwBAAAAqiIAHI8Y1X8Pp0f7jy76y/B3DyMeYdOAAQAAAF5BADgCk7XNG03T3I7wTufZ6MNmIAAAAAADEgCOQ6xKuXmm+LY/cxrxKKsCBAAAALiEAHAcYqyVd396tP/4VT8UfibmWoB3bQYCAAAAcDEBYOUma5tt+DeJ8C4XCfViTgNuIq1vCAAAAFAFAWD9YoRjp9Oj/bkDwOnR/oP2PxGPtGnAAAAAABcQAFYsbP5xJ8I7XKaiL2YV4GSytrke8fEBAAAAiiUArFuMtf+aDAPAxjRgAAAAgPMJAOsWY2rsyfRo/3jRfzQ92n/UNM1hxKNtMxAAAACAc7zmoNQpTImNsfnHVSr5DiJNSZ5pqwB3Iz4+CYXP8I0zv5rw/y/7bLfrTT4Kv3/Q+e+jEESTWFiOoP212jTN9c5/5zmfrZOmaWa7jj868+t4nh3JiSu019m5bXWXZZjnHLcedn5/HM757Hw7zxRPX1ivCH3g7Lw+Dv2haxhIRHumZitPnjxxgis0Wdtsg7q7Ed7ZF67SYU3WNtuO71q/L+lz0+nR/o05f5aMhOrNjfAF237Z3oz06k5DGNj+OvDl279wg7vaOZe3Ezztabigenpuw8ZDxDm/1zvndvbfWH36WbPzPPv1YMxtONygfBTr8adH+yuxHnsMOm1l1k5StJVuXzhrI0LBHoXzuto5t/OGAX15qA+EfmjPjJEAsEKhM/tehHd2OD3av9K6gpO1zbZC715/L+klby+yQ3FtOl9kMfRaXRCCoo1QuRkr8HuVaahM3fWlu7wQRMwC3KHO5VkPw7kV9F5Rpud3ZtoJ9LPu+ydrm91qrz60j/dexJf8VsTH7qqmci2c463M2spJpy9ceAkXPj+vG+FXtn2gwBdeLdN+ekZ7JjoBYIUma5ttp/ZBhHf2penR/pU28wid7nf6e0kvuXJIWbLIFSFXPv/Ns9e4EdanTFEZtog2MNrr4z2OQWjL2+GGKFUF2LKmYXkAYeCcCju/M6edoCO7MHCytvkgw34vB2+VXLXbuZncSFw5soxpWMplT194ucLOa9dhOL/ZD4aHa9ZlLPLvjsdcGHCRcOyXPf6LyKKv0Z7hOQFghSZrm8cRRjTaG6sbfYxERHp9XVeaplyyyAHgu9Oj/Z1l/3EIpncKuUHaEQS+rDNVu4TzeJHDUPFpmvA5QjvdznBUfFGzoGM3lxF0AeCFigwAK2grD0P7cGPZUVEfeBoGvrINeyMvCzRzOj3at0ngGZO1zdjrss98/5DfwdozvEwAWJmIFXb3p0f7W308UMQKxZkrBVUlyzEADK9pr8DAqA0QtgRFnwd/2+FXKdVgr3ISbn5HH/RWen677odQf9CLZgHghYoJACttKwa9yhqkXEYWfeBZEdcrP2vUywOdFXGpqLN6u3dclPYMF/s+x6Y625HeUJ9fnAdhJCOWQb5sRmChtQXbC4wwwvhRoV/A7Wv+qH0P4WJpdMI53Ak7l71TWTjUjgZ/0IYyV5iGVLxwkXxc4fntam8wv9t+lsfalrm6ivvCSegLH42xL2yXJWnfexiYrjEsaDp94G5mfeBuoudxX/CiVEslJQ9d22sa7RkupwKwIqETeBThwrT33XUTjPqNdrRvsrYZq1E/nB7tz3VzENb526voJqkNrDfGVA1Y+ejpedqpwdtjGVEN1eK7I6xIOw2VvUPcmKgAPF/WFYDh+2x3RH3hw9BGqu4Lw0ZkeyPtA9vqoVTh26VCWJOibQ06FTUnib6Ler93vIz2nEd7pgwqAOsSa7H2GDdKsaeaGO0bSNjp+cPKKiSuhWrAWBW22WgvosLFYc2jp+dp18I5Hsk53g5LRYwxjGrb8odjruxlPp0q9g9H1hferr0v7FQ+j7UPfC9UvycLaC6RKrgY7QaBXeGcp/jcJxtk056zas8UQABYl1ihV+9fzmG0f9r343bc0RGmFW6W2vN6r+K3+V6oXq3SyC+ims6FVJXhUCfQeC+DlzO0NvAd5ZRHXi1U/T1KtEh+jro3ldX0haEP3AsDXLUueTCvWdA7dDCW6pqq+sG9OaU639GDXe35Bbm0ZwogAKxExBGdk4jTQGJ/Ofiy79eFgWq4QRjL9La7tYWAnWDIRdQzs2rAhda9zFmnjY410DjPrLJXxThPdW4oa6tiX9btWoLyTh+YYtOJUswqogfbOC9Myz1M8FQ3FQY8leL7Lua941Pa87lm7dn9L5cSANYjVmOPGXSYBlyWc6dAdb6ES99ifxHVhIAh5BIMvaz9vH+nhnAonONHI2uji/ig5spe5hPCATeULys+KB/pdcoi3hm4D1QFmEC4FkjRBqIWeGjPr1T1bCWuTgBYj1gXZtE6kDDqdz/W47cXrSo7khjrl/DdsN5hsTrhn4uoi31QyY2vaqbLVVfZy/xCX3isL7zUByV+5wkL5jZYHxg2ZTpN8FRjnx6Z6lom2vp/2vPcXNNwIQFgBcJ8/xg3d4cJdsxSBViw8OUy5i/he6WGQ+F1f0cwNJciK8SEfwtzwTxCYXqrdjKfeyW1EWHBwobsA1M872Tka6SleO/3Y907as8Lc03DuQSAdYgVQETfwSnBZiC3rfkRR1hjwlSpptktba24EP59kMFLKUmJFZ9jD+iXcVfl+HiEc/2R8G8hJd1U7uoDF3Z3oDUB7QYcURjoSLGbecx7R+15cUO1ZzImACxcCLdirN11Oj3aT3WBF/t5LIbasxB42Un0mWsJ16+5MuHflRRT8RkCeus6LucDuwPXL5xjfeFysr+pDH21QcrlvJO6Ui5sGnGS4Knu1rjL/xxSXLtMw3Tu3ik6uJLk7Zm8veb8FK/Y6r+ONjx5J+LjbwkBe6ek/EXt7nI706P93G+IcrzhnYYNKi6ymll1ThsONQkHSBYWBoaGDugfNk3zOKyr1pz5/cz1cH6bsMv4jYzO90F7HBMsg8EAwiBWyuucebyqL7yRqIJnXu1N5aMc+8LQBw5dsX0Szue8feDs97mc5722ncTezfWM3UTXKBsjvI5NEQDFCv/aNjH09bX2TDUEgOWLFQAmu3BqO6PJ2uZhxGqVp5uB5HzDXpIw6q8E/2VPd9HL9cs1gxve07B2y3H476NFjlV4/bOAqA0yb8d9uZdqp30fT4/2z1785WKIvu4wnNcHCx6Xlz6ToTpjPfzaGOjieVbZa9S8Mp3Nj4YMmh/O2ssSfeGsH8yhL/wg075wd4DzexL6jNr6wJTV0AeJAsDtMQWAEdeKPyvWveMQ7flh+Dxqz1Rn5cmTJ85qoUI1z0cRXn1bwp103bzw5fRhxKc4mR7tF7VO27Ima5sxG/UXw8YRsZytGmrCDdLM+pnf51YR0W6ck11gEC4+jgc4VqfhYmgvrPfZm/CeNsKvIaa6ttU6q7lViEX8XjjPNFxQ7sY8DiGw2Q7nOvVNwNt9TWmarG0+GDisydVbffcPFxlwEflZX3jQ9xS5DPrC9r1lUy2buA88DeFE1MG/EPpuh0H/1H3gV6dH+8mKAsL6kimmen5hLNVQk7XNgwR9Q5T7rErb82poy9W3Z/IkACxYxC/Jd4eYythOJYkcUHwx44qd3kQOAKc9nqPZDdHTqrBlz00mI2tdyW5m5zVA8NB+TnZSVd0OeHOUXeDbVuMkCjfejR38nRXa+nb4leo89xb0CgAvlDIATHEj3DUNU9cOUrSV0BduJW4jrYfTo/0sKksStrOx9IFJA96Egc/706P96pcHCp+Z7yV4qi/FuObTnnuX1YANwxAAFipyhz7IqFiYWhpzLcB2a/rqd3eMHAD24TCMrsVaK2Q9fJkOtQFCVqFQgnbVlTT4O6uzTkzKhaJ7qxC7qkQ3Tu00t60hB1PC999ewjY+yKDYq8Q+39Oj/ZVYjz2EsIh8qrUx25us7QH7wuuhL7yX8GkHrywJlTUxZyk04XtuQx8YT4KCgGaI2U5DSLjx2/f3HSppz9FkeU1DOnYBLlesIOtkwJL42BfKGyPd+SsX90O4vBEzMGkrSUIA98UwpTi1OyGIGly4eEoV/r0fKqUGW1en7btCyP9WuKhLYS+jfiV2NUMb/q0PXUnd3mSENv6lRE+57bujbKEvTHXDcz9UWAzZFz4O1U1fTLSzamsng+++FH3gamZ94GmCp0zdB6ZoO5OR7IyaosrxMFJFmfYch2uakRMAlqv4zT/OCsHjYcSnuGZB90E8DNOvt1KGy+0XepiS9NVEX6hduUwrSXERfRqq4LZzmVIQphOuRu5PZq5lsNvkbAQ55ujxNIR/2UwbCQHLFxO0b98d5dtLMMXqNEyD28qoLzwOy2PcT/B0OfSFMdvpaagUyq0PXE/UB6a8rkkVnlfdr4dAPsWSILHOl/YcR+r2TGYEgAUKI9mxOvShp7LF/tLX4aXVlpkPWjEUpiSl+ELtGnyqeaLdmmehUBZTYLs6I6rvJ3i6u2E65pBi38hkE2p0dQKO2O3bdJlCham/sfvC09AXZrezaOgLt8JgWGx3huoLE+x0mnQQc14J+8Bk1zXhOKeYwVH7zKAU5+w0xjWg9lxPeyY/AsAyxQqxYpVwzy18icScunczgxv1MTgNC7tncdMcvlBvJJwKdW3IqSVh1Df21N8spk68SpgGl2Kq6NCf9Zj92mFuG9t0hc9g7IvZSRh8oyCddUFjOs1havyrhMGwFH3hUCFozD7wYY4DXTPhsxf7miP1lNkUn6Paq7tThDyxzpP2HNdYpsBzDgFgYcJIVawGm8vIdezXYdQjrtnNUFaBQQi3txJWAg75xRp7GlZ200EvE6pyYk+Buz3w4ELM5x58ivOrhIv52NWevjvKsxO5iqSI8G8m9IWxKwEnYeOB1MbeBz4IO5nGlOy6JnxWk6yHluA5kgsDVrE3UmkKDQC152cEgCMlACxPrJLoKCXcS4odAN61+Gk0Wd8MJRpVmxnkizWEUDHXgstu3ZR5hClwsdcEHKQKMPRnsS70pzlX/52xE7mC3MVyQcINcOwdwYsJ/2ZCJWDsAZEh+sJY07xzuj6+VJh1EXOmQ+o+MMVxv5nLxm09SxFsnkTs/7TnZ+3ZNQ29EwCWJ1aHns26NYnW/lDJ0b9SpkGlGFVrwjTgIaYMxr7x2irthrdjK/LF1FBVgDE/Z8Wc6xBKx/z8Tyq9UaxV7CqPLxXcF25HDoqSVgFG/q4t7RzHDH5SX9ekqtSqsQowRbgT5d4x8nVUae05Zj861H0KAxMAFiTybk65LVxtM5DybBd0M7QbOQiaSTq6Fi6abkd8ivuljJyepzMNPKYhKl9ihlKlVTftRW7b1pAtQIK+8DDHDT/mlagvTDnQGnNWRykV0E+FQc6Yg+jJ+sBwTVndtVpsCTbQmCmxDyyxPcccrHFNM0ICwLLECq2muQU3Cdb+mNgMpFf3S7oZSlApNJN6ZC3mezqtITgPF1Mxp7/dHqBKTFXai2JWjTjWZYgZPp3WMIsgXPfFrIa/nbC6RBXLi2Jej6U+1imqAGvbECFF/xRz40jt+UUx24BjPUICwLLE6tBzXQzVZiBlKDIYSlAp1KQcWQs3WjErXrZLW/fvEtuRBxhUGA8r5neHgaPMhQA+5tp/OxX1hbuV9IXWde6IPIieehAk1eByFQFgWBM45jrQMzHPi/b8ooOK2jMZEAAWIqylEqucO9cpfbGDSZuB9KPkYCj2Z+xawmqwmDda05Knu50VPq8xz73BhQGF8xtrCpzvjPzF7guz30FyXgn6QovMDyfWVMeYA40vCZ/R2Bt4NRXdE6Roc8VspFGD0AZitWcVgCP02tgPQEFidegPw6Yb2Wlf12Rt82Hsqqahdu6sxMPCg6H2tb8X+TnaADBqGwsXrTEv+mpsI7uh/ccYWGmD341KLpBLHR3eUa03WjEDeH3hYtq+cKvw64RS+5HdAjc8uMheoqq2jULXtetKUXWrPadXU3tmYALAAoQKolhffLl34nuRA8AtAeCVFH3s2lG1BCHzeoJFh2Mu+FxV9d9MOPcHEacKbmRcXb2IIi+Ww1qPRS32zdVFni1Rc1/Yvq97kZ6i9FClyAqZmvrAdjBtsrbZLtkyifxU2yV/ViNvFtmlPSfmmoY+mQJchpij2VnfoCbaDMQUleVMwxdS6WoIaWKO+FYz3e0cpr69mg2TKEnMdldd+NcRsy9M0X/EXIbkmuvELKS4Vrs5wCZefUqx/MhJbhtHLkh7ZvQEgGWI1aHfL2TtNpuB5KmWysnYIWbUm58EI77V3vSGi9hYG8FcS7gDZux+XJU02Uuw+H3NfWG7TMVJpIdPccMdO5DQBw4v1WBkyZt4pbifSdEPxr4u154ZNQFg5sJFU6yS91Iqn2J/6d8pfMRvKFUsAFz4SGYTueLlsKLdLi8S83OcapQ59mf49mRt087G5C5me8t2veQe2T37Ym1lmNBgQJFD6q4iq8NCpX7sKdJNJQMh2jOjJgDMX6wvomkpC9SHL/1YOzrOqAJcTG3BUMzPV+xwOebF6hh2eYv5HlPd9KZoi++F9dUgV/rCq4lZdRO7L0wxkPeOPnBwKaoAS10aKMVnM9W1v/YMEQkAMxams8RaoL60i1nTgPNS281QzIuNaCOyoY+IuYFJ9Te9kdexjHluPpewivUDo+ZkLGbINIa+8Djimss3w/dVFCGUiLWcQ1fbB9a8Lm7uDiKvCz5TYgCY4jUnqf4L7TnFedaeGSUBYN5ihlJFlXDbDCQ7td0MlVrNGPOG92QE039nolWAJtxAI3aV9Ew7an5sYxByEj6PMXf/rX3670zMAZHYa6KmGgi5N1nbfKQPTC9ck6S4/rwbM7DuW+Tdz2dOE88cS7XJ4D3XNIyNADBvsdZcKnUHp9ihpTWu5lNjMFTqOoAqXvoR8/yn2ggk5flqN535aLK2eeCimUzoC/sRsy+M3VekCgyaUNnf9oEP9IHJpSpgKGlmUDXVfx0p2/NN7ZkxEQBmKuweGWvqYKkLuMYu075tM5C5pPxSTkUF4MtK3xxlETHfa6o+ZYh2eadz0bxVUsUE1dEX9qPkwZAhgtrboQ881gemEZbtSDHdu4gAMNy3xNz9fCb1vaP2DJEIAPMVsxqtyNHsRJuBqAJ8tRoDwFLdjPi6x3SeY07vS1IBGKq6U+yQeJ72ovmD9jhO1jb3LKfAAGKut6kv7EfUwZBE14gXuRn6wO+FPlB4EFeKMOpmKMbIXYrv2+QzxzJrzxvaMzURAGYodDKxOvTDwteysRnI8GqshiiuAjDyNIXpiNb/ayqZAtwk2iHxMtfCxlUfTtY2n4Qpwtsqq4kp9k36iNb/i72hUMwBq5kcFvS/2wkP9IFxmAb8XIrChaFmjuUwY+3pNY32TE0EgHnaiLiYa9Fr2STYDOSabeEvV+PNUKFrYsa86R3NDW/zfGHxWGIvzN19H3uJpkbNq52W9F7TNN8Ni+bPKmNcPNOnmH3hUBUoVYrd9sMmBUNVQp9HHxhBuA49TPBUWd8PRF4uqmuQIM41DcTxmuOapVijOaehMy1d+x7uRXwPWwWvkxibm6F8xLzgMM27R221Zli3KIXtMFqd3WEII+l3m2fHZBoqL9vjcpzw+FCfmH3hqAZDgpOI1Xo3EhzTtg/8KPJzLONsH3g66//a/+oDF3aQYO27p0UBGd87paj+Oxx4RsiW9gz9EgBmJozmxLrwqmUnu9gB4NPNQMY07WcBY5oWmrsS1qYpyTTRSHpUbQXMZG3zMNGi4FcxCb+evs7J2mYTgoduKDimzRdYXszlEMZ4HRDzez76OlrtjfdkbfP+7MY8Y9dC/9f+eudMHzgLEfSBF2hDucna5m6CKvuNjIsCatz99wWhPZdwTXNZe3ZNQ1YEgPmJWW5eRVVb24FO1jZjjlA3YVTNhiAv8+WVj5gB4I3J2uZOaQckY6uJqyq3QnCRbPpxT26GX0bUWUTMUGl9hH1hzIrK1USD0dshGC5tUOe8PnAWIOgDX3aQIOi9k2NRQNhsK/Z3/GmYVj+0rdAOtGfogQAwP7ECwGllHc1uWGQ5lnZNh52RbYRAWWJe+OVeOVGapLvHtf1W2CTmQYEhYNd5I+qHnYtnAxI0kQcDb0feYZgIQh+4UUkfOPsMzvrAhyH40gc+uxdIcb2ykckGM10p1ifMonBEe4Z+2QQkI2HzCZt/zOcg9mYgiUrrS+PLKQORdwCmAuFCssYNjWaLcH+nswj3Rtg9n5Fx3rlI6APXI18rDuF2pw98POY+MJzjFJu+ZDUjKJzrFFNis5k5pj1Df1QA5iXmzdpSI1chlMx1d6PHkUeCtm0G8hIVkVCIsB7g26EfK3nU/CJnF+E+DINDB6q3R8NaqGVJer7CkjE1VENf5Jo+8On323uRn2OSeDOvV0kxuHeSW0Wa9gz9EABmImwhHmuayckya1eE0YeY02xzd7PdlEVJNhnKNZQnMyEErPmCuWs2XfiDcOG8l8n6RcAzyataOqHBQQ0bPb3C2T7wIOMdbPuSIgBsQug2pgAwy8+N9lx9eyYBU4DzkePmH6bA2giEPAkAyzJolVIYxLgR1poZi/ai+cMwpWY3DLJRHxWAvFLoA1fDGqJjMQsOqu4DQ2VUivOaxbTMtjAh8rqnM9kGTdqzaxquRgCYjxwDwBrXj1qUdRiAqxq8D2lvkqZH++2o+btDv5bE2qrHe03TfHeytnlg/czq+H5mLqEPbAe2v1rhOmKX6faBDyrtA1OEVbmsDZ7i3uww9ymn2nPV7ZnIBIAZCDsbxSpjXqoTjzwluSQ2AwGqMT3a32ma5gsjqwacaUfQP3LRDOM1PdrfHWH10Mzt0Ac+Cmt8VyEs9TBN8F5ymBU02um/59Ge62vPxCcAzIPpv3kzDZjcmPbG0to1YUM14FuJbppyc1sQCOMV+sCN0AeOcTBkEqYTHlfUB6ZY7/XmkFMvQ8FI7LV8T0tbO/dMe06xK3RuamzPRCQAHFjkrdyv0okbSXjupg6VzJj2VpYsNxJqdzScHu23NzNfGnkQeGA9HRif0Aeuhz5wjMHBzc5gSOl94G6i5xmyKED13yVCe17Vnqtoz0QkABxezM58qfAvdBopFpgtiUAUWFbua+nshSDw7RFPDW5HzlV7l8fgHFcW+sDVEVcE3g594E4Gr2UpbRVYonM3yP1A5IKRruJ3mdWey2/PxCUAHF7MG45lR8NM/33ZXZuBADVrK8ZDNUy7RuD9ES6s/V4YOdfXwwh1KgLbPvD9EfaB7xRePZRkM5AwFTe1FMHjSdhhtwrac/HtmUgEgAMK00pjbf4xvUInrtrtfI4LUL2wns7W9Gj/ephKM6bFtduR83ZBbetsQv8elHBMQx+4HfrAt0fYB5a6lthBopBniPsB03+XpD0X256JRAA4rOw2/wg3Pab/ns/0MGBUwlSattrh+0cUBrYj59+xqx4QKqPH2Ad+VFofOD3af5xoM5A7KauqEt6bVRkAdmnPIAAcTJhiFLOEfNlOXOdwsYkRFGAJWa8BOI/2xuqcMLD2acIfuGDOXjXT1cjbOX3g26EPrHkDpRL7wFQhVsppwCnOwWEIUEdBe2bMXnP2BxNzK/eTsBjuMqz/d7mtUqawULWYF2ntgskWDu5XVSFFuEnYm91oheqE9fD9cXv4V9ir9oL5af5g0yMAACAASURBVCVkRe+pJjH7whOV/71b9to0K51Ks6fVZp0+cD3RRg0pFdUHtuu+TdY2pxGXWJrZTrjzsOm/EWnPjI0AcDjZbf4ROrzYX5ilazcD2R7TKBlZOo55UdJeQDvtzCusN3s8++4JldKzX6sRB7tSaS+Yj2taHJ25PNYXMo9L+sBZkFBDH9i2hxTTa/vQnof3Ij/H01lBsfuIULEV+/NzWtC5jW4k7fmR77fxEgAOIMFaDst24sqC57OtQgrgfOGi8vMLy/Cdt9q5gC5xndmnO+kZ/AFepdI+cK99H1eYYZTSQYIAsEk0KyjFzCzVYJeotD0fFNSe6ZkAcBgxq//uX+EGxfTf+WwJAAHm0xlN//wmo8AR9Wvh9fuezItAluxV1gdmvxZ2G2pM1jYPE0zfjDorKGw0kmIKqgBwAdozpRMADiPmDcRS1X+h4zL9dz5t2f+GcnkGFHPE7roTS2wXjKh3pw7nePF8J8WULxYSc1p2betZkpFC+8Db7ZTUQtYPO0gUnm1EDNBSDDidWN7i6rRnSiIATCzyWg5XWcPB9N/FbF1hqjVcVcwAsMSpDBTugjV3NsKFc06fyfZC+UYGrwOoyDl94GroAzcy6wN3SqgYa0ONydrmboLgZTvi8UixCZHwJwLtmZx9n7OTXMyg7SoN2LSmxdwJpfkwhKhrdkzWNlUBMqh2NH16tN9OrWovmr/QNM1X2z/O4KxMwkAeGUiwAP+q88wQ2gBherS/c6YPPMngZJTUB6YINm7G6CcSbswo/ElAeyYnKgATCoFRzCklS3Xi4UumpvLv64lGV6wFyCDC+jYxn3o1wcLWMJewSHU7ir4bvq/aqoi7Ax69LTdNo2EwhMFd0AduDDitsJSqofY13kvwPNsRCjxSVP8d2tgqPe2ZoQkA04rZmU+XXcMh/LtqFgEN1UuPEnSkAkCGNI04OiwAJEvh+2qrXXg9fKduD3DRfDvsCGz3vDw8jDi4uq4vJCedPvD6gH3gJOwgmnXxQPv6JmubJwmKAjba89FXmBbOrd1/R0B7ZgimAKcVszPfzfENDyF8AadYn+/pZiD5HQFGImb4YHo7WWv7+XY6Tfis3h/gter78xGzLzQFmCyd6QPfH+A1mgb83LWevxNSVINdZd14eqY9k5IAMJEQFMVcy0En/qJUgWiKEn04T8yqlGoqgqlbuGhuL1zfam9oEr5ZAWA+BICMVugD22vRLyZeJ7WUPjBVlVuf9wMpwhjVfxnqtOe3Erdn1/0jIgBMJ2Znfmgq0otCGXOKxVVv2wyEgcQs1b9pIxBKEjaDuJFwUe2Y6/mymJiDIRPf8ZQgXPeuJuwDJyVcJ4RZQSmqxG/20VckWC9+RgCYsXBNk7I9u+4fEQFgAqEzvxPxmVT/nU8VIDWLvVaH0UCKEm701lNdME/WNrWRPOgLYYA+sKAK2VT3SX3cD6So/jux3lv+tGdiEQCmEbNM/lQAeKGDRFPCrJtAcqHqN+b0AFMcKU64YN5I1PerDMtAOOcxb5D0hRSjExqk6AOLCMfDWncpplP2cT9g+i+f056JQQCYRswKsQNbuJ8vHJcki/9O1jaFgAzBOoBwRgjHU+zQLgDMh74QgnD9m2J2SklTBrO/H0iwXvyMALAg2jN9EwBGFqYI2fxjOKmmAQsAGULsta9UvlCk6dH+boKKD9Nl8hGzL7ymL6Q006P9PX3gC1KFXle5H0jRzxwqHCmP9kyfBIDxxQyGprZwv1yoBHmY4KlsBsIQYt70Nqa+UbjY349Gy/MRuy80yEeJUg2CZy/3+4GwAcPdOC/pBar/yqU90wsBYEQJOnPh33xSfdnZDISkwgVtzLWv7toVjIL5jhyJUNES8+b+jkE+ChQ7GC9NzvcDKQZcTxWOFE17phcCwLhijxgbxZlDKJtOshmIsIQBxL4gEGxTpOnRvovlcYl9Y6svpCgJdnq9XdghyXlzwBT9i/vGgiVoz6YAj8RrYz8AkcUMAG3hvpj2S+9e5Oe4FkbwfMGSUuzP9vZkbXPXmjF5mKxtthdo34n0YtrqgNoGMU5D30z92pv79yK+y3aQb0dfOKww0Pq9WC9ierS/UsihmNfDAoO6KNq2O1nbPEg01XZu4Xv9ZoKnyu7+JHJ7rvGa5iTiZ8W10kgIACNJ0JkLmRazmyAAbMIInnNDMu1AwGRtcxpxs6Fr4XOdYlfV5CZrm48iHrt3p0f7vR63cL77fMiudrOD9coq547d/I5DuyTCZG0z9s1RzX3hg4ht5f70aL+XQfEQ4kQL9tsNX0yTrNpuggBw0c9PijVGsywcidyer1XYng1AcWWmAMcTu5RbyLSAhIv/3gzhL6QUe2Hg7Rqnt0/WNrcK3aU95rqPNjugZLH7wndqXAuwDf4jB+V994Uxgwx94Pxi70rauxCCxX7di/ZDKT5zOd83as95iHltSUYEgBGEG+WYi7nawn05NgOhVrFHN69VOugQs5JnGnG0PWaF3oa1TClYijW+auwLYwan0wgVODH7QBu+zO9RKS/0jJif94Uq7cJAZIqplzn3W9pzHmQLIyEAjGMjcmduasISEm4G4gaapEKF6/3Iz9leRKXYpS6Jdi2vyNV/MW8wYl4sX6tsECNmRbaL5cyEwdHY10i3w017FSZrm9sFLlkTe5mCKqd587mYfcSi3/0prqtyLxyJPTW5pmsa95dcmQAwjpgXhqchyGI5sacHNZ3NQCClFP3CXg3hdhgNjnlBeBr5fETf+bmiQYyYg3FVb8RV8HIWKcKb3RqqSkI7j328eu8LE6xTereiqqGYU7uLrAAMg6aHER76dJFwMXzG7kR4HWdlfd+YYI2+exW155iDNTYXHQkBYM9CB1PSOipjk+pL0OgxSYUbotjrXF5LED6lsBe7SjvmaHt47JhrtVxLNFgSVVjXLKZSp7/Nq8gQONGav20bOaggKI/dF94P5yOGGAFOVw19YOwQv+Q+MMb9wKLf/SkqiU8L2QRDe36FBO3ZrIaREAD2z+YfGYs46nfWJMHNJ5yVInhuN7opth8KU39j7wqb4jzEPgd3K+jDYldi1x4Alnz+k/SFJV+Tham/sauPYp6H2KFGDctexG7DxQ4IhlCs72WBbP6xPO351bRneiEA7F/MznyaYNrDGKT6MrTzFEklqgJsQjhU3I1vWLfrnchPE7PipSvFiH7pFU5RL/Yz+D6OPVpf7I72CfvCO4X2hW3beC/y08TuC1P0gXuFTx2MXZRQ+pTBPtvuQht/hQG2mOsQzwgAn9OeL2cK8EgIAHsULqhs/pG5MOo3TfAq79oMhAGkmn5eVAgYLrY/SPBUSY5/omrmp1O+S+zHQtgb8+YqRSX5pSLuMj1zp/DvsFQLv5fWF64mCgWi9oVhqmXsza+KneqdIGA6yXxjiXn0OS00x+q/hXYkHpL2fDntmT4JAPsVuzMvfv2CjKgCpEqh8iVVOPH0xjf3i6kQBn2U4KneTVT9N5OiH7tZ2ndPoo0NxlKNX+yUqXDjG/uGcqbtC7MPy8NN5IPIg9VNwkroVH1gUQMh4bXGPjbFFyWEz2hf6+nOfbzD+bnb0/NeprTqZO35HInasyXGRkQA2JMEOzmdJL6xrF2qjq6mrecpx3aEtW0ucjdcTGU5XTCsc5Wi8m+aOihLXM18XNAF816CqVW53PzGbuelb2iVsi9s1xY9zrgvnA2ExA7/TlNd+ySc6l1aaLCboA+sJTDo43v7/oLVU6kGVooKabXnC6Voz2YZjogAsD+q/wpiMxBqFj7fKfuM2cVUNoF3OyjTVuQkWOdqZnug6ROpApqbOQe9M2EqZuyNDQ4zGpCLPb1rEjbOKVJokylff3uT9p2cjll7kztZ2zxINBDS2kncF6bsA7MNeGdC0Bu7uqymooQ+go9Fw9AU10o5fU8tQnvuCNfVsdvzQ0VG4yIA7E/sAFAy3z/TgKnW9Gh/p8epLfNoq0reC5Vig4be4eb7OMFuvzOHoRovuenR/l6iKsAmx6C3K4R/KaZV5TQgl+Ki/Z0QKhRperS/m6iq5Owxe5RBX7gdPiOxQ/GZh+F4J5OwaqjJMeDtCn1giqC3mqKEHtaeW2iDxhA43bzC882ryPtG7fm50J5TDGKb/jsyAsAeJFiY89DCnP1LPH2u5F2nKNdWwulvM+2F7UdhPaxkN7+hymW7vekOO/3GnuY2c5pByJ/y+bMJemfaG6r29SQK/3LbjT/VAu8fTNY2dwveFGSIvnDS6QuTraUY+sKt0Be+N5K+MPWgRBYB70yoeE/ZB9YWGFzl/Swahqb4rJ4Wfo5SB3K5tefU1zQCwJERAPYj9gWPhhlPqlFMVYAkFxbBH6pa63a4+W0vqnZihODhRncjjJJ+L9zsxl4n5ayNoQdoEm/8MnNziHCjK9z0tuf+O4kqKpoM13VNucPjvTBl6srtOfW0qzC9aajv4bYv/DD0hbux3nunL3wUqsBS94VbQ00jC9917yd+2m7AO8hnq9MHfjdhH1j6uqAvCd+hyxYELHqPluL7suhZY+F8jLk9p7ymqa4982orT548cZiuIIyGfy/iU7SjOKWOuGcvwfmbaUdYklQBTtY2YzbqtzKrfulNzOM2PdpfSf+Onks4NfJVpmEHyvbXo0U/S2F0tm2z7X9XE07xvci7Yar14EJf9ihhtc9Z03DTsRduxqMI73MjhDmpz387vTG7NV0j9/mXmYYAcna+H3WmJK+GtjpzvfNnN4c6lm0AF4LMoV21L2yP5Y1wTNcz6Avfnx7tDxqOh77heIDgc+Y0hEEHMa+TOn3gRsKp3TPt2n9Zr5m2rDAN9J0F/3k7Q2vuQC8ESymmaH8x5vdwCtpzElle0xCfAPCKwvoqMefntztLqR6LKGE48naKdcIEgMupOQBsnr2/44Qjios4naOKaeib2/Nk1zeHSrwPM3gppyHYOO4EHEtVBnWCjvXwa6jPcPueVnNcKDtsdpNjG7nMYDceGR+vUvvCbG4iwyDRRxm8lBh9YA5hb/HB0kVCVfN3F/xnC13XJ+p7khUcxKY9R1dte+Zyrzk+VxZ7xNPuv/GlCgC3bObCgNbDhUtuIeC1AsOLkwyngj5d13Sytvl+BhVO18JI9p1ZRcVkbbMJx202XfrxmbDjRvg1szpgNeN5djLeJe+gwDY0pA19YW9OEk1pnEs7QDlZ2/xqwt3fLzJPH9iEz+FM7n3guzWHBW3/PlnbPFygCmu6YPh3I1H7rmmDFu05nqrbM5cTAF5BSPFjliZPNc74whfMNEGZ+Z32AsBW6wyhXacuTD95kNlFSGnaC771XDdmaqfhhRuN1FNJ5nE2cMnxNZ7nMPXOpgs6yOAGqRihL8x1QKQkWfaFbVsN1+c5LHtx1tnPWymB78NclruI7GCB76VF1/5LNWOgqkID7TmKsbRnLmATkKtR/VcPm4FQvTCgsD7Abpi1yDr869gKr5WrO8m93w6DSqk3gSlaaMND7Axci9Ow6UeuAyHtuX2YwUupQVZVnjGF3VDn7RNyDAAPaywyCO3ZNU0/RtOeuZgAcEmdRTtjMl00nVQ7LQsAGZQQcGmlhH+zcGPdBfOVFXPODRguLvSFq9rJwtrjdaOAGSobzu2VZR30RjLPvddCQVtYnzfFZhY13ze6prm6MbZnziEAXN5G5Gl0D00VTSd0hvcTPOFkqO3lYcaN78IeFhQEPSUEvLKSwr8mbM6k4mlB4TpLO5lfiQMh2sVyTsO5HttSRPMMpuRY/XcaKhirpD1f2VjbM+cQAC4v9vTfajvxjKkCZDQ6N74upi7X7vZbVPg307lgTjG4UZOiwr8O3y1L6LQT06gvd7/EgZCwQ7E+cDEnYw0Lwnu+bEBgmc0/Uqx3W/2sMe15aaNtz5xPALiE0JnHXjja9N/EQgVFiiqA2+EzBEN/5mcXU+87Ey9pR0u/FNaeKVY4x+17eLfk95HQYaHh3yzUd56XENrJhuN3oa+2/UipU8dCH/jVDF5KCR4KCy4tCFj0/izVemujWQZCe16I9sxLBIDLiV39d9/8/MGk+gKN/RmCubU7xzZN87Z1AT83Gy2tphI77Pj2lnN8qXfbEKjk799wnlX1LqnTTqZFvoH+tcfhi5nvgj2X8B6+6Nxe6t1SK957dtl3/6JtIcX1/nRsAU9oz/rqy2nPnEsAuJzYFSGq/4ZzkOgG2VQtshKmtNwwDe7pBdNqjRfTocrZOX7ZSQg5dnJ7YUuy+cEVhHayqjL66fuvqi/srH879nN7VhuivFVRH3gll6wLvtD67JO1zfVEm3+MchMoffWFtGcuJQBcUNjAIebmH6eLrC1Bv8KXforjf81mIOSmMw1ujKOqbdXUF2q/YBr5OT7rtMbA1wYwVxfayfaI+8I2EN+usXLkzLnVRp5Ne18NYQrPnXcvkOPmH82YC0e055doz7ySAHBxsddysPnH8FKNpAkAyVJ74TA92r8RLiRqnzJ6EkZK18e083rnHH9ppEHg/XCRXGXgawOYfpxpJ7X3hW0/8HboC6ufThjO7erI+8Cng16mCL4sFGN0PxcL7bI7Wdu83jTN3QQv9XBM1y4X0Z61Z+YnAFxAop2cBIADm2MHsL7YDISshXCk1iDwYbjZHfVIaXtDM7IgcHaRvFX7TVNnAxjre15RuPGf9YW1tZOTsOHRjTHOQNEHcolue1j0/izV5h9mjXVoz/BqK0+ePHGY5jRZ22xvht+J+BQnYfSCgYXpuR8keBX3+95ldLK2GbNRv1VrWBLzuE2P9ldiPXYqYTS7vaDdSbSmTSztxdKe6RHnm6xtboTq5NiDXSlNQ2X33lhHxkP73Q6/Yi5jMq+HYQfyIoVrhPZY3iz1PegLzxfWbdtKVL2VyjQEWHtCgvmFQfrvhn/whQXX/ztO0D+0VYnXIz9H0bRneJkAcAGTtc1HkW98v1rDTms1CDdLjxLcKLVVGTf6vCkVAC5HADi/ydrmarj53cgkTHiVkxAAHZgaMZ/QB26FXyWGHNNQGbE3tt0RL9M5r9sDB/m9D34NIfSFs3ZSSl+4N+YwfF6dQa+NQgdETjt9oJB3SZO1zafHbpEBi9AvfCfBy6uiH01Be4bnBIALCKMIMR27IMtH+AJPMbLW63mP/Dmt9jMa87jV/GUdKsbWw0VVLpWB7YXSg3CxJPS7os6F83r4lWsF6MPZeRf6vVr4jlvv/IoZYLXn5jj8elBj1UL4Dpm1k1xC825fWOVxT0EfOF6zDfsWXP9vL1HF2Red58Vpz4ydABCAXoTpMu3F1Gr4dTvRkT05Ey64UIronPO8OkD1U/ecHxsRv7pwXmfntgm/X2Sd2u45aM9LG7w/GmPoFI7laqed6Asr0jm/3XM8RB/4qHOu9YEZSDiDaBrWuuOKtGfGRgAIQDSdStpZqNCttJznImsaLoqaECjMbmjbi6PHbnDzEG56Zud6tpZt91zfWGCU/WHn94/Cr9m5d84p0jkBa3eWwTx94Wmn/9MXZihUgeoDRyzhGuKWjYpMe6ZWAkAAAAC4gkSbfzSLbkoCMPN9jgQAAAAsJ1T5pgj/DoV/wLIEgAAAALC87UTH7sA5ApYlAAQAAIDlbSU4dqeL7EgMcJYAEAAAAJYQNv9IsXOs6j/gSgSAAAAAsJwU1X8tO/8CV2IXYAAAAFhQ2PzjuwmO23R6tH/D+QGuQgUgAAAALC7V5h+q/4Are80hBACAdH7hk/9nvWmezcJZefq/Tx7/wa2NY6cAipNq+q/1/4ArMwUYAAAi++on/+/6s2qhJ3dC6Pf0fzu/P22aJwcrTbPz+7fefuR8QN7C5h8fJHiRh9Oj/Q0fB+CqVAACAEAk25/8f9dXmid7TdPcecUztLuI3m1//fNPPny/eRYEPnZeIFupQjnVf0AvVAACAEAEbfjXNM2DlebJzeeP/qS5oAKw83dPnTTNk/Xfv/V3hYCQmYSbf5xOj/avO/9AH2wCAgAAPdv+5M+ehn9N09xc8pFvhn8P5Mfaf0BxBIAAANC/nSuEfzM3/8Un//eOcwPZSRUA2v0X6I0pwAAA0KPtT/5stWma7zyf5tu93p57CnD3Z7/we7d+wsYgkIHJ2ma79t+HCV7JyfRof9U5B/qiAhAAAPrVd9VOqmoj4NVStcc95wLokwAQAAB6cu+TP2vDgds9H89Uu40Clwibf7xqR+++CACBXgkAAQCgB/c++fPrkdbsuvkvPvm/bjhHMLhU1X/3p0f7dgAHeiUABACAfrTh37VIx1IVIAxvO9ErUP0H9E4ACAAAV3Tvkz9fb5rmbsTjaB1AGNBkbXMrYsDfNZ0e7T9wroG+CQABAODqYlfstNOArztPMJhUIXyMZQQABIAAAHAV9z758522QCjBQTQNGAYwWdtcjbC5z0VM/wWiEAACAMCS7n3yF+3mHO8kOn4CQBhGqrX/bP4BRCMABACA5aWs1rnzi5/+J9OAIaHJ2uaNyOt7dqn+A6IRAAIAwBJ+/uO/2Eo4LXBGFSCklWrtP5t/AFEJAAEAYEE///FfXB9osf515wrSmKxtXk84/XfHaQViEgACAMDi2vDv2gDHTQUgpLOdqJ2fNk1z4LwCMQkAAQBgAT//8V+uJ1wT7Kxrv/jpfxICQmSJq/8ObP4BxCYABACAxQy9UL8AEOJLVf3XmP4LpCAABACAOf38x3/Z3qhPBj5eAkCIKHH138Pp0f4j5xOITQAIAABz+MrHf3kjYShwmWu/+On/ueqcQTQp1/hU/QckIQAEAID57A208cd5tpwz6N9kbXM14Rqf0+nR/gOnEUhBAAgAAK/wlY//qp12ezuj42QaMMSxm/C4qv4Dkll58uSJow0AABf4ysd/1a4H9qhpnlxb+fxHnl1Dr6w8//3sz1/6mXP/fvZ33X/f/bcv/+yz53vhZ7/4O2/85LHzBv2YrG22U/zfS3Q42+q/G04dkIoKQAAAuNxORlN/u1QBQk/C1N+UFXmq/4CkBIAAAHCBr3z8V+tN09zL9PgIAKEHYdfflGt8njZNc+DcASkJAAEA4GIp1wNb1M1f+vT/MIUQrq5t5zcTHsfd6dH+Y+cNSEkACAAA5/jKx9/aiRQKnPb4WKoA4Qoma5t7CXf9bUL7z3lgAaiUABAAAM74uY+/1VbWbUc4Lu+HqYZ92XLuYDlh04+U4V+j+g8YigAQAABeFmM9sNOw8H+fAWA7Dfh6j48HoxAq/1Lt+DvT7vxr8w9gEK857AAA8NzPffytdlrt7QiHZOu9W3+nrfw5/oVPDqdtBtHT4270HCpCtTobftwZ4D0K/4DBqAAEAIDg5z7+6+uR1ud6+N6tH+/u+tnnDqDWAYQ5TNY227byaKDw72R6tC+oBwYjAAQAgOd2eqzM6zq7Vt+DHh/7zi99+qemAcMFJmub65O1zbbNfRhhav+8YqwpCjA3U4ABAOBZ9d9q0zT3IhyLd9+79eOPun/wP9y6c/ALnxye9hhGmAYMHZO1zRuhXWxF2s17EYfTo/0+Q3+AhQkAAQDgmRgB2vS9Wz9+0bpfBz3uQLpeSwD429/+ZhvEXl9pnjz9/7P/Ns2TZuXznzrn71bO+/PZv3v+/8973POfJ/z5ygV//tJjvvz/53m93ce86Dmu8lovevzz30v3/89e4+WvJ/z++O//V3/Sy862bbXeOX98fHbn3LCW3+qZn2v/7Y3w3xiVvMs4tVs3kAMBIAAAo/dzH//1dqQqoctu/PsMAIteB/Dr3/6j9ZVnx2pjwCmaLO+tHqe1f3TeH07WNks9PTtnw0uAIVgDEACAUfvyx399I9LunPd3b/3tC0ORdhpwj8917Zc//dPiQsCvf/uPr3/92/96N4Q+d4V/VObh9Gg/xqZCAAsTAAIAMHa7EYKn0zkX/T/s8TmLCgB/69t/fD1UjcVYdxGGZuovkBUBIAAAo/Xlj/+mDc3uRHj/27u3/vY80/76rAIsrQLwIIPNGSCWrenR/iNHF8iFABAAgFH68sd/cz1U//Xt4e6tH5t3Q46+pwGf3RQhS7/17T9uqyNvl/BaYQnvT4/2+2zbAFcmAAQAYKx2Iu0UOve0vz+4dedxz9OAS5lyGGPNRchBu+7fPNP/AZISAAIAMDpf/vhvViOtPffu7q0fW3TaX1+7pzYlTAP+rW//j3b6pVYnpe/IDdRLAAgAwBjNO0V3EdP3b/3YMpVtfU4VnPzyp/8x92nAAhJq1G76sT492p9n7U+A5ASAAACMypcf/s12pM0nlpp++we3Nh6FyqG+rPf6rvonAKQ2wj8gewJAAABG42cf/vX1SOvPHb5/60evMpW3z4rEbNcB/Jef/U+m/1KbNrxfnR7tHzuzQM4EgAAAjMlehADqtIfQrc9pwDd/5dP/eKPHx+uT6j9qchIq/xZd9xMgOQEgAACj8LMP/rqdGnsnwnvdef/Wj15p6l+YBjzt7yVlG7QJAKnF+9Oj/VXTfoFSCAABAKjez370reuRNv54+P6tH93t6bH6rALMLmgz/ZdKtEH9W9Oj/W0nFCiJABAAgDFob9YnEd5nnyFAnwHl7V/59D9c7/Hx+qD6j9K9H9b7u8p6nwCDEAACAFC1n/noW6tN07wT4T2++/6tH+lt4f8/uPX2ceXTgAWAlOp+0zRfaKv+TPkFSvWaMwcAQOX6mqLbNY30uO004Hs9PdZGpGnPCzP9lwKdhja+Z5MPoAYCQAAAqvUz/+Vb281KczvC+9v6wzd/JEYl0IMeA8A77TTgb7zxUzlULKn+owTT0AYPpkf7fa7JCTA4ASAAAFX6mf/8V9eblZWdCO/t8A/f/JEoa4D9/q23D/75Jx+e9lgtt97z5iLLEgCSo4dN0zwKod/x9Gi/tyn9ALkRAAIAUKu9CNNO23BuK/LxagO7uz091sbQAeC//Ozf9D399wu/9ANfNSWzXm+Fd9au3XneRjYX/flZbZh3tvp1FtwfW8sPGBsBIAAAurlCTAAACr1JREFU1fnp//xX6ytNcyfC+9r5wzd/OHZw0HcAOLQ+X8PJL/3AtvCvYp0ddu20C9AjuwADAFCjGJtfnPzhmz8cY+OPF7TTgHt8uGu/8ul/GDoE7PP5s9jUBABKowIQCjBZ21wPa/jEtXLeo69c8v8uMdcPnvNDK5f+7Tl/+YonWjnvJ1Yu/b8v//tLfuClv3r2ByuveMxzj+vKS39y8SG66Ak6x+XSQxT+/XlPed5JWDnz784+58q5P/z837zqeVbO/sDZU3T2AH3+VOec4M7PvvjPVl7+zzmPu/Lib85/H2d+88LrX3n+PJ13+OLTrLz8Xj4/Zyuf/9BLD9l9D+d9DlZWXnyP57/ulYtfW/fz3n1dK2f+ffepV154pBfe/+fv6szPvnDsu6/lpWP3/C9fPGbnH/ezj3vevzv7mXj6190/PO/YrnQfZ+Xlnznn37x4Ll48hi9+blfOPP45P3PmvZ099isXvecXfr7795e9j8//MLyu58fmhcc58xqfP+fLP/vic7z8eTr3Zy98/O55O+e5nh/H1WZlZdL0L/bU367Dpr8KxsGmAf/mZ/9mY6Xf6b82ZgCAJQgAoQxt+PeOcwUAg3n/m2/+cMoNAg56DADjDyKmeW7TfwFgSaYAAwDA5abt2n+Jj1GflW6TX/n0f1/t8fEWYfovAGRAAAgAAJfb/uabP5R0x9Dfv/X24zANuC8ppy8/9Zuf/c9t6NjnVGzTfwFgSQJAAAC42OE33/yhoYKnPndBHWIjkD5Dx5NfNv0XAJYmAAQAgPOdttV/Ax6bXqcB/2r6acCm/wJAJgSAAABwvp1vvvlDg1Wd/f6tv9s+90mPD5lsMxDTfwEgLwJAAAB42ck33/zB3QyOS5+VbynXAex5+u89038B4AoEgAAA8LLkm2ZcoM/Kt5u/+un+jV5f3cVM/wWAjAgAAQDgRe//0Zs/eJzDMfm9Z9OApz0+ZPTNQN41/RcAsiMABACA59qwbSez49FnAJZiN2DTfwEgMwJAAAB4bvuP3vzBx5kdjz6nwN7+1U/3r/f4eOcx/RcAMiMABACAZx7+0Zt/K7vppr936yeOS5kG/O5n/4vpvwCQIQEgAAA0zWlGG3+cp5RpwL1O//2VH/h5038BoAcCQAAAaJrdP3rzb+UcNj3o8bHu/Fq8acCm/wJAhgSAAACMXTv1N7eNP17we7d+4iBUKfZlve/XaPovAORLAAgAwJg9TLQzbh9ynwbc5/Tfqem/ANCf1xxLAABGqK2m2/3Xb/7XWVf+ndEGgHd7eqwYAWCfj6n6DwB6pAIQAICxaHfSPWya5ktN09woLPybTQPuy7Vf+/Tf9xbY7Xz2b/ue/mv9PwDokQpAKMD0aL+9QSnqJgUAiKINMO/09MAbPVba9Tr991d/4CvHPT4eAIyeCkAAAChHn1WAfW4EYvovAGRMAAgAAOXoMxyb/Nqn/371qg+y89m/vWH6LwDkTQAIAACF+N03/t7jMA24L31M3e2z+s/0XwCIQAAIAABledDjq+0jvOtz/T/TfwEgAgEgAACUpddpwL/+6b9behrwzmf/azv992aPr8f0XwCIQAAIAAAF+d03/t6jpmlOenzFV9kMpOfpvz9n+i8ARCAABACA8vRZKXeVKbym/wJAAQSAAABQnj7Dspu//um/u7HoPzL9FwDKIQAEAIDC/O4bP9lOA572+KqXmcpr+i8AFEIACAAAZeqzCnCZMM/0XwAohAAQAADK1OeU2du//umfXJ/3h9/57H8z/RcACiIABACAAv3OGz95POA04F6n//6a6b8AEJUAEAAAyjXUNGDTfwGgIAJAAAAo14MeX/mdeaYBm/4LAOURAAIAQKF+542/31bPnfb46tfn+Jmep/9+2fRfAIhMAAgAAGVLPQ3Y9F8AKIwAEAAAypYsAHznsw/6nv7b5xRmAOACAkAAAChYmAbcl2tf++z+ZSFgn9N/T3/tB35WBSAAJCAABACA8h32+A4uC/lM/wWAAgkAAQCgfH2GaeduBBJh+q8AEAASEQACAED5+gzTJl/77P7qOX8+zw7B8zr9ddN/ASAZASAAABTud974B497ngZ83lTfPtf/E/4BQEICQAAAqEOfO+q+EPb9xmcfXG+a5k6Pjy8ABICEBIAAAFCHmNOAe9391/RfAEhLAAgAABX4V2/8g0dN05z0+E66a/6Z/gsABRMAAgBAPfZ6fCdP1wH8jc/2TP8FgMKtPHnyxDkEAIAK/PKnf3qjaZ58d+XpW+le5z9pun/24u+ffP4zT///yvN/t9I8+cKzSsAnH6x0Huvcf9f5/92fPfNaTr/2+k9f91kDgLRUAAIAQCXCNOBpj+9mw/RfACifABAAAOrSZ8i2ZfovAJRPAAgAAHXpcx3Amz0+Vjv9VwAIAAMQAAIAQEX+1Rv/8LjnacB9Ef4BwEAEgAAAUJ8cwzYBIAAMRAAIAAD1eZDZOzL9FwAGJAAEAIDKfOONf9iGbacZvSvhHwAMSAAIAAB1yil0EwACwIAEgAAAUKecQrfcpiQDwKgIAAEAoELfeOOncgkAD7/2+k8/zuB1AMBoCQABAKBehxm8M9N/AWBgAkAAAKhXDuGbABAABiYABACAeg0dvh1+7fX/3vRfABiYABAAACr1jTd+6vHA04BV/wFABgSAAABQtyF34BUAAkAGBIAAAFC3oUK4w98w/RcAsiAABACAin3jjZ961DTNyQDvUPUfAGRCAAgAAPXbG+AdCgABIBMCQAAAqF/qMO7wN17/70z/BYBMCAABAKBy33jjH7XTgKcJ36XqPwDIiAAQAADGIWUoJwAEgIwIAAEAYBxSrQNo+i8AZEYACAAAI/Dbb/yj40TTgFX/AUBmBIAAADAeKcI5ASAAZEYACAAA4/Eg8js9fMf0XwDIjgAQAABG4rff2Gyr804jvlvVfwCQIQEgAACMS8yQTgAIABkSAAIAwLjECukevvP6PzP9FwAyJAAEAIARCdOAY1D9BwCZEgACAMD4HEZ4xwJAAMiUABAAAMan77Du5J3X/9kjnyMAyJMAEAAAxqfvAHDPZwgA8iUABACAkfn6G5vtZh0Pe3zXpv8CQMYEgAAAME59Ve093Hn9n5r+CwAZEwACAMAIff2Nf9wGgNMe3vmOzw8A5E0ACAAA47VxxXf+/s7r//SBzw8A5E0ACAAAI/X1N/7xcdM0X1ry3d/fef2fbPvsAED+BIAAADBiv/XGf9NOBX5rwenA7+68/k+2fG4AoAwrT548caoAAGDkfv3TP7neNM32ysqTNtibtEdjpZndKzxpVprm9Nluv0923n39v7XpBwAURAAIAAC84Guf3b/RNM2NTgD4+Ddf/9KxowQAZRIAAgAAAEDFrAEIAAAAABUTAAIAAABAxQSAAAAAAFAxASAAAAAAVEwACAAAAAAVEwACAAAAQMUEgAAAAABQMQEgAAAAAFRMAAgAAAAAFRMAAgAAAEDFBIAAAAAAUDEBIAAAAABUTAAIAAAAABUTAAIAAABAxQSAAAAAAFAxASAAAAAAVEwACAAAAAAVEwACAAAAQMUEgAAAAABQMQEgAAAAAFRMAAgAAAAAFRMAAgAAAEDFBIAAAAAAUDEBIAAAAABUTAAIAAAAABUTAAIAAABAxQSAAAAAAFAxASAAAAAA1Kppmv8fMYozOEXHZnkAAAAASUVORK5CYII=',
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
                margin: [0, 10, 0, 0],
                  stack: [
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
              },
              {                                        
                width:'50%',
                margin: [0, 10, 0, 0],
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
                        { text: 'Leutocitos: ', font: 'SF', fontSize: 8 },
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

                    // POSICIÓN Y CUIDADOS
                    {
                      text: [
                        { text: '\n\nPOSICIÓN Y CUIDADOS', font: 'SF', fontSize: 8, bold:true },
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
                  ]
              },
              {
                width: '40%',
                margin: [0, 20, 0, 0],
                pageBreak: 'before',
                  stack: [
                    // ESTUDIOS  
                    {
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
                      ul: estudios.map(estudio => ({ text: estudio})),font: 'SF', fontSize: 8, bold:true
                    },
                    // ANESTESIA GENERAL
                    {
                      margin: [0, 50, 0, 0],
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
              }
            ]
          },
          {
            columns:[
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
                      margin: [0, 2.5, 0, 0],
                      text: [
                        { text: 'Probables Dificultades Técnicas: ', font: 'SF', fontSize: 8 },
                        { text: txtComplicacionesBNA, font: 'SF', fontSize: 8, bold:true },
                      ],
                    },
                  ]
              },
              {
                width: '33%',
                margin: [0, 25, 0, 0],
                  stack: [
                    {
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
                  ]
              },
              {
                width: '34%',
                margin: [0, 25, 0, 0],
                  stack: [
                    {
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
              }
            ]
          },
          //Tercera Hoja
          {
            columns:[
              {
                width: '50%',
                margin: [0, 20 ,0 ,0],
                pageBreak: 'before',
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
                  ]
              },
              {
                width: '50%',
                margin: [0,20,0,0],
                pageBreak: 'before',
                  stack: [
                    // ANESTESIA LOCAL  
                    {
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
          {
            columns: [
              {
                width: '34%',
                margin: [0, 20 ,0 ,0],
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
                    // Tipo Alumbramiento
                    {
                      margin: [0, 2.5, 0, 0],
                      text: [
                        { text: 'Tipo Alumbramiento: ', font: 'SF', fontSize: 8 },
                        { text: alumbramiento, font: 'SF', fontSize: 8, bold:true },
                      ],
                    },
                    // Hora Nacimiento
                    {
                      margin: [0, 2.5, 0, 0],
                      text: [
                        { text: 'Hora Nacimiento: ', font: 'SF', fontSize: 8 },
                        { text: horaNacimiento, font: 'SF', fontSize: 8, bold:true },
                      ],
                    },
                  ]
              },
              {
                width: '33%',
                margin: [0, 20, 0, 0],
                  stack: [
                    {
                      text: [
                        { text: ' ', font: 'SF', fontSize: 8, bold:true },
                      ],
                    },
                    // Genero
                    {
                      text: [
                        { text: '\nGenero: ', font: 'SF', fontSize: 8 },
                        { text: genero, font: 'SF', fontSize: 8, bold:true },
                      ],
                    },
                    // Apgar 1 min
                    {
                      margin: [0, 2.5, 0, 0],
                      text: [
                        { text: 'Apgar 1 min: ', font: 'SF', fontSize: 8 },
                        { text: apgar1, font: 'SF', fontSize: 8, bold:true },
                      ],
                    },
                      // Apgar 5 min
                      {
                      margin: [0, 2.5, 0, 0],
                      text: [
                        { text: 'Apgar 5 min: ', font: 'SF', fontSize: 8 },
                        { text: apgar5, font: 'SF', fontSize: 8, bold:true },
                      ],
                    },
                  ]
              },
              {
                width: '34%',
                margin: [0, 20, 0, 0],
                  stack: [
                    {
                      text: [
                        { text: ' ', font: 'SF', fontSize: 8, bold:true },
                      ],
                    },
                    // Capurro
                    {
                      text: [
                        { text: '\nCapurro: ', font: 'SF', fontSize: 8 },
                        { text: capurro, font: 'SF', fontSize: 8, bold:true },
                      ],
                    },
                    // Peso
                    {
                      margin: [0, 2.5, 0, 0],
                      text: [
                        { text: 'Peso (gm): ', font: 'SF', fontSize: 8 },
                        { text: pesoNacido, font: 'SF', fontSize: 8, bold:true },
                      ],
                    },
                      // Talla
                      {
                      margin: [0, 2.5, 0, 0],
                      text: [
                        { text: 'Talla (cm): ', font: 'SF', fontSize: 8 },
                        { text: tallaNacido, font: 'SF', fontSize: 8, bold:true },
                      ],
                    },
                  ]
              }
            ]
          },
          {
            margin: [0, 20 ,0 ,0],
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
              height:'75%',
              stack:[
                // Medicamentos
                {
                  relativePosition: { x: 0, y: 0 },
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
                relativePosition: { x: 0, y: 420 },
                table: {
                  widths: ['60%', '40%'],
                  body: [
                    [
                      {
                        text:[
                          {text: 'BALANCE HÍDRICO: ', style: 'SF', fontSize: 8, bold: true}, 
                          {text: balanceTotal, bold:true}
                        ], colSpan: 2
                      },
                      {}
                    ],
                    [
                      {                                
                        text:[
                            {text: 'Ingresos', font:'SF', fontSize:8, bold: true},
                            {text: '\n\n', font:'SF', fontSize:8},
                            {text: txtHartman, font:'SF', fontSize:8},{text:hartman, font:'SF', fontSize:8, bold:true},
                            {text: txtSolFisiolo, font:'SF', fontSize:8}, {text:solFisiolo, font:'SF', fontSize:8, bold:true}, 
                            {text: txtGlucosados, font:'SF', fontSize:8},{text:glucosados, font:'SF', fontSize:8, bold:true},
                            {text: txtGelatinas, font:'SF', fontSize:8},{text:gelatinas, font:'SF', fontSize:8, bold:true},
                            {text: txtAlmidones, font:'SF', fontSize:8},{text:almidones, font:'SF', fontSize:8, bold:true},
                            {text: txtAlbuminas, font:'SF', fontSize:8},{text:albuminas, font:'SF', fontSize:8, bold:true},
                            {text: txtPaqGlobular, font:'SF', fontSize:8},{text:paqGlobular, font:'SF', fontSize:8, bold:true},
                            {text: txtPlasmas, font:'SF', fontSize:8},{text:plasmas, font:'SF', fontSize:8, bold:true},
                            {text: txtPlaquetas, font:'SF', fontSize:8},{text:plaquetasIngreso, font:'SF', fontSize:8, bold:true},
                            {text: txtCrioprecipitados, font:'SF', fontSize:8},{text:crioprecipitados, font:'SF', fontSize:8, bold:true},
                            {text: txtFactorVII, font:'SF', fontSize:8},{text:factorVII, font:'SF', fontSize:8, bold:true},
                            {text: txtFactorVIII, font:'SF', fontSize:8},{text:factorVIII, font:'SF', fontSize:8, bold:true},
                            {text: txtOtrosIngresos, font:'SF', fontSize:8},{text:otrosIngreso, font:'SF', fontSize:8, bold:true},
                        ]
                      }, 
                      {
                        text:[
                            {text: 'Egresos', font:'SF', fontSize:8, bold: true},
                            {text: '\n\n', font:'SF', fontSize:8},
                            {text: txtLiqAscitis, font:'SF', fontSize:8},{text:liqAscitis, font:'SF', fontSize:8, bold:true},
                            {text: txtSangradoAprox, font:'SF', fontSize:8},{text:sangradoAprox, font:'SF', fontSize:8, bold:true},
                            {text: txtUresis, font:'SF', fontSize:8},{text:uresis, font:'SF', fontSize:8, bold:true},
                            {text: txtExpQuirurgica, font:'SF', fontSize:8},{text:expQuirurgica, font:'SF', fontSize:8, bold:true},
                            {text: txtReqBasales, font:'SF', fontSize:8},{text:reqBasales, font:'SF', fontSize:8, bold:true},
                            {text: txtAyuno, font:'SF', fontSize:8},{text:ayunoEgreso, font:'SF', fontSize:8, bold:true},
                            {text: txtOtrosEgresos, font:'SF', fontSize:8},{text:otrosEgresos, font:'SF', fontSize:8, bold:true},
                        ]
                      }
                    ]
                  ]
                }, font: 'SF', fontSize: 8
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
                      body: [
                        ['Criterio: ', 'Ingreso', '15 min', '30 min', '45 min', '60 min', '90 min', '120 min'],
                        ['Frecuencia Cardiáca', {text: FCIngreso, style: 'bold'}, {text: FC15, style: 'bold'}, {text: FC30, style: 'bold'}, {text: FC45, style: 'bold'}, {text: FC60, style: 'bold'}, {text: FC90, style: 'bold'}, {text: FC120, style: 'bold'}],
                        ['Frecuencia Respiratorio', {text: FRIngreso, style: 'bold'}, {text: FR15, style: 'bold'}, {text: FR30, style: 'bold'}, {text: FR45, style: 'bold'}, {text: FR60, style: 'bold'}, {text: FR90, style: 'bold'}, {text: FR120, style: 'bold'}],
                        ['Tensión Arterial', {text: tensionIngreso, style: 'bold'}, {text: tension15, style: 'bold'}, {text: tension30, style: 'bold'}, {text: tension45, style: 'bold'}, {text: tension60, style: 'bold'}, {text: tension90, style: 'bold'}, {text: tension120, style: 'bold'}],
                        ['Saturación de O2', {text: saturacionIngreso, style: 'bold'}, {text: saturacion15, style: 'bold'}, {text: saturacion30, style: 'bold'}, {text: saturacion45, style: 'bold'}, {text: saturacion60, style: 'bold'}, {text: saturacion90, style: 'bold'}, {text: saturacion120, style: 'bold'}],
                        ['Aldrete', {text: aldreteIngreso, style: 'bold'}, {text: aldrete15, style: 'bold'}, {text: aldrete30, style: 'bold'}, {text: aldrete45, style: 'bold'}, {text: aldrete60, style: 'bold'}, {text: aldrete90, style: 'bold'}, {text: aldrete120, style: 'bold'}],
                        ['Bromage', {text: bromageIngreso, style: 'bold'}, {text: bromage15, style: 'bold'}, {text: bromage30, style: 'bold'}, {text: bromage45, style: 'bold'}, {text: bromage60, style: 'bold'}, {text: bromage90, style: 'bold'}, {text: bromage120, style: 'bold'}],
                        ['Nauseas/Vómito', {text: nauseasIngreso, style: 'bold'}, {text: nauseas15, style: 'bold'}, {text: nauseas30, style: 'bold'}, {text: nauseas45, style: 'bold'}, {text: nauseas60, style: 'bold'}, {text: nauseas90, style: 'bold'}, {text: nauseas120, style: 'bold'}],
                        ['Escala de EVA Dolor', {text: EVAIngreso, style: 'bold'}, {text: EVA15, style: 'bold'}, {text: EVA30, style: 'bold'}, {text: EVA45, style: 'bold'}, {text: EVA60, style: 'bold'}, {text: EVA90, style: 'bold'}, {text: EVA120, style: 'bold'}],
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
                      {text: 'ALTA DE RECUPERACIÓN', font:'SF', fontSize:8, bold:true}
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
              width: '100%',
              margin: [0, 10, 0, 0],
                stack: [
                  {
                    text:[
                      { text: 'SIGNOS VITALES AL EGRESO', font: 'SF', fontSize: 8, bold:true},
                    ]
                  },
                  {
                    margin: [0, 10, 0, 0],
                    table: {
                      body: [
                        ['TA: ', 'FC', 'FR', 'Temp', 'Pulso', 'SpO2'],
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

      transStore.datosMSV=''
    },

    async vaciarInputs(){
      this.idStore.numExpediente = ''

      await this.obtenerPaciente()
    },

    // Obtener datos de paciente seleccionado
    async obtenerPaciente(){
      await this.listarExpedientes();     

      if(idStore.numExpediente == null || idStore.numExpediente == ''){
        
        this.mostrarDatosFiltradosExp=false
        this.numeroExpediente = ''
        this.nombrePaciente = ''
        this.fechaNacimiento = null
        this.edad = null
        this.genero = ''
        // this.nacionalidad = ''
        // this.CURP = ''
        // this.estadoNacimiento = ''

        // Ejecutar método de componente Id
        const componenteId = await this.$refs.refId as InstanceType<typeof Id>;
        await componenteId.asignarValoresPaciente();

        // Vaciar Inputs
        // Pre
        await this.vaciarInputsPre()
        await this.vaciarStoresPre()
        //Trans
        await this.vaciarStoreTrans()
        transStore.balanceTotal=""
        // Post
        await this.vaciarStoreNotaPost()
        await this.vaciarStoreRecuperacion()
        
        this.nuevoRegistro = false; // Bloquear botón nuevo registro
        this.historialPaciente = false; // Bloquear botón historial paciente

        // Botones de guardar a estado inicial
        this.btnGuardarId=true        
        this.btnActualizarId=false
        this.btnNuevoGuardarId=false
        this.btnNuevoActualizarId=false

        // Bloquear inputs ID a estado inicial
        this.bloquearInputs=false
        this.bloquearInputsPrincipales=false

        this.deshabilitado=true // Deshabilitar botones menú pre

        // Deshabilitar nuevo registro de paciente
        idStore.nuevoRegistroPaciente=false
        
        idStore.actualizarRegId=false
        idStore.actualizarRegValoracion=false
        idStore.actualizarRegPlan=false 
        idStore.actualizarRegNota=false
        idStore.actualizarRegNotaPA=false
        idStore.actualizarRegRecuperacion=false

        document.getElementById("menu-trans").className = "invisible"
        document.getElementById("menu-post").className = "invisible"        

        this.nuevoRegistroExped = false

        this.numExpediente = ''
        this.nombrePaciente = ''

        const componenteValoracion = await this.$refs.refValoracion as InstanceType<typeof Valoracion>;
        await componenteValoracion.regresarBotones();
        
        // Devolver todos los botones de trans a estado inicial
        transStore.btnAddMedicamentos = true
        transStore.btnUpdateMedicamentos = false
        transStore.btnActualizaMedicamento = false
        
        transStore.btnAddRelevos = true
        transStore.btnUpdateRelevos = false
        transStore.btnActualizaRelevo = false
        
        transStore.btnAddEventos = true
        transStore.btnUpdateEventos = false
        transStore.btnActualizaEvento = false
        
        transStore.btnAddVentilador = true
        transStore.btnUpdateVentilador = false
        transStore.btnActualizaVentilador = false
        
        transStore.btnActualizarBalance = false
        
        transStore.tipoTecnica = false
        
        transStore.btnTQX = false
        
        transStore.activoAnesIN = false
        transStore.noActivoAnesIN = true
        
        transStore.activoCxIN = false
        transStore.noActivoCxIN = true
        
        transStore.activoCxOUT = false
        transStore.noActivoCxOUT = true
        
        transStore.activoAnesOUT = false
        transStore.noActivoAnesOUT = true
        
        document.getElementById("id-tab").ariaSelected=="true"
        this.esPaciente=true
        this.esValoracion=false;
        this.esPlan=false;
        this.esNota=false;

        const tabIdPaciente = document.getElementById('id-tab');
        const tabObj = new Tab(tabIdPaciente);
        tabObj.show();

        idStore.volverPost = true
        idStore.volverPostNota = true
        idStore.volverPostRecuperacion = true

        idStore.vaciadroTrans = true
        idStore.vaciadoPostNota = true
        idStore.vaciadoPostRecup = true
      }
      
      // Sino se elige un expediente no manda la petición
      if(idStore.numExpediente != null && idStore.numExpediente != ''){

        let expediente = await idStore.numExpediente.toString()
        let numExp = expediente.split(' ')[0];

        await idStore.getPaciente(numExp)
        
        idStore.numeroExpediente = idStore.pacientes.pacientes[0].numExpediente
        this.numeroExpediente = idStore.numeroExpediente
        
        idStore.pacienteId = idStore.pacientes.pacientes[0]._id                     
        this.nombrePaciente = idStore.pacientes.pacientes[0].nomPaciente
        this.fechaNacimiento = idStore.pacientes.pacientes[0].fechaNPaciente
        this.edad = idStore.pacientes.pacientes[0].edadPaciente
        this.genero = idStore.pacientes.pacientes[0].generoPaciente
        // this.nacionalidad = idStore.pacientes.pacientes[0].nacionalidad
        // this.CURP = idStore.pacientes.pacientes[0].CURP
        // this.estadoNacimiento = idStore.pacientes.pacientes[0].estNacimiento

        // Ejecutar método de componente Id
        const componenteId = await this.$refs.refId as InstanceType<typeof Id>;
        await componenteId.asignarValoresPaciente();

        await componenteId.enviarDatos();

        this.nuevoRegistro = true;
        this.historialPaciente = true;

        this.bloquearInputs=true
        this.bloquearInputsPrincipales=true

        this.listarCirugias()
      }      
    },

    async vaciarInputsPre(){
        const componenteId = await this.$refs.refId as InstanceType<typeof Id>;
        await componenteId.vaciarInputsId();        
        
        const componenteValoracion = await this.$refs.refValoracion as InstanceType<typeof Valoracion>;
        await componenteValoracion.vaciarInputsValoracion();

        const componentePlan = await this.$refs.refPlan as InstanceType<typeof Plan>;
        await componentePlan.vaciarInputsPlan();

        const componenteNota = await this.$refs.refNota as InstanceType<typeof Nota>;
        await componenteNota.vaciarInputsNota();
    },

    async vaciarStoresPre(){
      idStore.expedientes = ""
      idStore.pacientes = ""
      idStore.cirugias = ""
    },

    async vaciarStoreTrans(){
      transStore.datosVentilacion= null
      transStore.pacienteID= ""
      transStore.medicamentos= null
      transStore.medicamentoID= ""
      transStore.relevos= null
      transStore.relevoID= ""
      transStore.eventos= null
      transStore.eventoID= ""
      transStore.datosMSV= ""
      transStore.envDat= false
      // DatosVentilador
      transStore.modosVentilacion=""
      transStore.PEEP=""
      transStore.VT=""
      transStore.FC=""
      transStore.IE=""
      transStore.PLimite=""
      transStore.Hr=""            
      // Ingresos
      transStore.solHartman=""
      transStore.solFisio=""
      transStore.glucosados=""
      transStore.gelatinas=""
      transStore.almidones=""
      transStore.albuminas=""
      transStore.paqGlobular=""
      transStore.plasmas=""
      transStore.plaquetas=""
      transStore.crioprecipitados=""
      transStore.factor_VII=""
      transStore.factor_VIII=""
      transStore.otrosIngresos=""
      // Egresos
      transStore.liqAscitis=""
      transStore.sangradoAprox=""
      transStore.uresis=""
      transStore.expoQX=""
      transStore.reqBasales=""
      transStore.ayuno=""
      transStore.otrosEgresos=""
      // Técnica Anestésica

      // Tiempos QX
      transStore.ingresoQX=""
      transStore.inicioAn=""
      transStore.inicioCx=""
      transStore.finCx=""
      transStore.finAn=""
      transStore.egresoQx=""
      // Datos Medicamentos
      transStore.tipoMed=""
      transStore.medicamento=""
      transStore.dosisMed=""
      transStore.unidadMed=""
      transStore.viaMed=""
      transStore.horaInicioMed=""
      transStore.horaFinalMed=""
      transStore.observacionesMed=""
      // Relevos
      transStore.horaRelevo=""
      transStore.matriculaRel=""
      transStore.anestesiologoRel=""
      transStore.observacionesRel=""
      // Eventos Criticos
      transStore.horaEvento=""
      transStore.detalleEvento=""
    },

    async vaciarStoreNotaPost() {

        postAnestStore.NotaPA=""
        postAnestStore.cirugiaID=""

        postAnestStore.NotaPost=""
        postAnestStore.Intubacion="No"

        postAnestStore.EgresoTA=""
        postAnestStore.EgresoFC=""
        postAnestStore.EgresoFR=""
        postAnestStore.EgresoTemp=""
        postAnestStore.EgresoPulso=""
        postAnestStore.EgresoSpO2=""
        postAnestStore.DestinoEgreso=""

        postAnestStore.NumeroProductos=""
        postAnestStore.GeneroUno=""
        postAnestStore.HoraNacimientoUno=""
        postAnestStore.AlumbramientoUno=""
        postAnestStore.Apgar1Uno=""
        postAnestStore.Apgar5Uno=""
        postAnestStore.CapurroUno=""
        postAnestStore.PesoUno=""
        postAnestStore.TallaUno=""
        postAnestStore.GeneroDos=""
        postAnestStore.HoraNacimientoDos=""
        postAnestStore.AlumbramientoDos=""
        postAnestStore.Apgar1Dos=""
        postAnestStore.Apgar5Dos=""
        postAnestStore.CapurroDos=""
        postAnestStore.PesoDos=""
        postAnestStore.TallaDos=""
        postAnestStore.GeneroTres=""
        postAnestStore.HoraNacimientoTres=""
        postAnestStore.AlumbramientoTres=""
        postAnestStore.Apgar1Tres=""
        postAnestStore.Apgar5Tres=""
        postAnestStore.CapurroTres=""
        postAnestStore.PesoTres=""
        postAnestStore.TallaTres=""
        postAnestStore.GeneroCuatro=""
        postAnestStore.HoraNacimientoCuatro=""
        postAnestStore.AlumbramientoCuatro=""
        postAnestStore.Apgar1Cuatro=""
        postAnestStore.Apgar5Cuatro=""
        postAnestStore.CapurroCuatro=""
        postAnestStore.PesoCuatro=""
        postAnestStore.TallaCuatro=""
        postAnestStore.GeneroCinco=""
        postAnestStore.HoraNacimientoCinco=""
        postAnestStore.AlumbramientoCinco=""
        postAnestStore.Apgar1Cinco=""
        postAnestStore.Apgar5Cinco=""
        postAnestStore.CapurroCinco=""
        postAnestStore.PesoCinco=""
        postAnestStore.TallaCinco=""
        postAnestStore.GeneroSeis=""
        postAnestStore.HoraNacimientoSeis=""
        postAnestStore.AlumbramientoSeis=""
        postAnestStore.Apgar1Seis=""
        postAnestStore.Apgar5Seis=""
        postAnestStore.CapurroSeis=""
        postAnestStore.PesoSeis=""
        postAnestStore.TallaSeis=""

        postAnestStore.TecnicaAnestesica=null
    },

    async vaciarStoreRecuperacion(){
      postAnestStore.NotaUCPA=""

      postAnestStore.FCIngreso=""
      postAnestStore.FC15Min=""
      postAnestStore.FC30Min=""
      postAnestStore.FC45Min=""
      postAnestStore.FC60Min=""
      postAnestStore.FC90Min=""
      postAnestStore.FC120Min=""

      postAnestStore.FRIngreso=""
      postAnestStore.FR15Min=""
      postAnestStore.FR30Min=""
      postAnestStore.FR45Min=""
      postAnestStore.FR60Min=""
      postAnestStore.FR90Min=""
      postAnestStore.FR120Min=""

      postAnestStore.TensionIngreso=""
      postAnestStore.Tension15Min=""
      postAnestStore.Tension30Min=""
      postAnestStore.Tension45Min=""
      postAnestStore.Tension60Min=""
      postAnestStore.Tension90Min=""
      postAnestStore.Tension120Min=""

      postAnestStore.SaturacionIngreso=""
      postAnestStore.Saturacion15Min=""
      postAnestStore.Saturacion30Min=""
      postAnestStore.Saturacion45Min=""
      postAnestStore.Saturacion60Min=""
      postAnestStore.Saturacion90Min=""
      postAnestStore.Saturacion120Min=""

      postAnestStore.AldreteIngreso=""
      postAnestStore.Aldrete15Min=""
      postAnestStore.Aldrete30Min=""
      postAnestStore.Aldrete45Min=""
      postAnestStore.Aldrete60Min=""
      postAnestStore.Aldrete90Min=""
      postAnestStore.Aldrete120Min=""

      postAnestStore.BromageIngreso=""
      postAnestStore.Bromage15Min=""
      postAnestStore.Bromage30Min=""
      postAnestStore.Bromage45Min=""
      postAnestStore.Bromage60Min=""
      postAnestStore.Bromage90Min=""
      postAnestStore.Bromage120Min=""

      postAnestStore.NauseaIngreso=""
      postAnestStore.Nausea15Min=""
      postAnestStore.Nausea30Min=""
      postAnestStore.Nausea45Min=""
      postAnestStore.Nausea60Min=""
      postAnestStore.Nausea90Min=""
      postAnestStore.Nausea120Min=""

      postAnestStore.EscalaEVAIngreso=""
      postAnestStore.EscalaEVA15Min=""
      postAnestStore.EscabaEVA30Min=""
      postAnestStore.EscalaEVA45Min=""
      postAnestStore.EscalaEVA60Min=""
      postAnestStore.EscalaEVA90Min=""
      postAnestStore.EscalaEVA120Min=""

      postAnestStore.AldreteFinal0Min=""
      postAnestStore.AldreteFinal15Min=""
      postAnestStore.AldreteFinal30Min=""
      postAnestStore.AldreteFinal45Min=""
      postAnestStore.AldreteFinal60Min=""
      postAnestStore.AldreteFinal90Min=""
      postAnestStore.AldreteFinal120Min=""

      postAnestStore.CalificacionAldrete=""
      postAnestStore.ObservacionesAlta=""
      postAnestStore.NombreAnestesiologo=""
      postAnestStore.FechaAlta=""
      postAnestStore.HoraAlta=""
    },

    // Crear nuevo registro del expediente
    async crearNuevoRegistroExpediente(){
      swal
        .fire({
          html: "¿Esta seguro de crear un nuevo registro para "+"<b>"+idStore.pacientes.pacientes[0].nomPaciente+"</b>"+"?",
          icon: "question",
          showConfirmButton: true,
          showCancelButton: true,
          toast: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.btnGuardarId=false
            this.btnActualizarId=false
            this.btnNuevoGuardarId=true
            this.btnNuevoActualizarId=false

            this.bloquearInputs=false

            this.nuevoRegistroExped=true

            idStore.nuevoRegistroPaciente=true

            this.nuevoRegistro = false; // Bloquear botón nuevo registro
          }
        });        
    },

    async validaExpedienteId(numExpediente, nombrePaciente) {
      if(numExpediente === undefined || nombrePaciente === undefined ||
         numExpediente === '' || nombrePaciente === '') {
        if(numExpediente === undefined || numExpediente === ''){
          this.numExpB=true
          this.bordeRojoNum=true
          this.bordeVerdeNum=false
        }
        else{
          this.numExpB=false
          this.bordeVerdeNum=true
          this.bordeRojoNum=false
        }
          
        if(nombrePaciente === undefined || nombrePaciente === ''){
          this.nomPacB=true
          this.bordeRojoNom=true
          this.bordeVerdeNom=false
        }
        else{
          this.nomPacB=false
          this.bordeVerdeNom=true
          this.bordeRojoNom=false
        }

        this.deshabilitado=true
        document.getElementById("menu-trans").className='invisible'
        document.getElementById("menu-post").className='invisible'       

        swal.fire({
          title: 'Escribir el número de expediente y nombre del paciente',
          icon: 'error',
          showConfirmButton: false,
          toast: true,
          position: 'top',
          timer: 3000,
          timerProgressBar: true
        })
        
        return;
      }
      else{
        if(this.nuevoRegistroExped == false){
          this.numExpB=false
          this.nomPacB=false
          
          this.bordeRojoNum=false
          this.bordeVerdeNum=true
          
          this.bordeRojoNom=false
          this.bordeVerdeNom=true
          
          this.btnGuardarId=false
          this.btnActualizarId=true

          this.deshabilitado=false
          document.getElementById("menu-trans").className='visible'
          document.getElementById("menu-post").className='visible'
        }else if(this.nuevoRegistroExped == true){
          this.numExpB=false
          this.nomPacB=false
          
          this.bordeRojoNum=false
          this.bordeVerdeNum=true
          
          this.bordeRojoNom=false
          this.bordeVerdeNom=true
          
          this.btnNuevoGuardarId=false
          this.btnNuevoActualizarId=true

          this.deshabilitado=false
          document.getElementById("menu-trans").className='visible'
          document.getElementById("menu-post").className='visible'
        }        
      }
    },    
/*====================================================================================*/
    
/*==================== Funciones para guardar al cambiar de módulo ===================*/
    async guardarDatos(){      
      const componenteId = await this.$refs.refId as InstanceType<typeof Id>;
      await componenteId.guardarDatosId();

      const componenteValoracion = await this.$refs.refValoracion as InstanceType<typeof Valoracion>;
      await componenteValoracion.guardarDatosValoracion();

      const componentePlan = await this.$refs.refPlan as InstanceType<typeof Plan>;
      await componentePlan.guardarDatosPlan();

      const componenteNota = await this.$refs.refNota as InstanceType<typeof Nota>;
      await componenteNota.guardarDatosNota();
    },

    async validaSeleccionId(){
      if(document.getElementById("id-tab").ariaSelected=="false"){
        this.esPaciente=false   
      }
      else
        this.esPaciente=true;
        this.esValoracion=false;
        this.esPlan=false;
        this.esNota=false;

      const componenteId = await this.$refs.refId as InstanceType<typeof Id>;
      await componenteId.guardarDatosId();

      if(idStore.pacienteID != null){
        const componenteValoracion = await this.$refs.refValoracion as InstanceType<typeof Valoracion>;
        await componenteValoracion.guardarDatosValoracion();
      }

      if(idStore.pacienteID != null){
        const componentePlan = await this.$refs.refPlan as InstanceType<typeof Plan>;
        await componentePlan.guardarDatosPlan();
      }

      if(idStore.pacienteID != null){
        const componenteNota = await this.$refs.refNota as InstanceType<typeof Nota>;
        await componenteNota.guardarDatosNota();
      }
    },

    async validaSeleccionValoracion(){
      if(document.getElementById("valoracion-tab").ariaSelected=="false"){
        this.esValoracion=false  
      }
      else
        this.esPaciente=false;
        this.esValoracion=true;
        this.esPlan=false;
        this.esNota=false;
      
      const componenteId = await this.$refs.refId as InstanceType<typeof Id>;
      await componenteId.guardarDatosId();

      const componenteValoracion = await this.$refs.refValoracion as InstanceType<typeof Valoracion>;
      await componenteValoracion.guardarDatosValoracion();

      const componentePlan = await this.$refs.refPlan as InstanceType<typeof Plan>;
      await componentePlan.guardarDatosPlan();

      const componenteNota = await this.$refs.refNota as InstanceType<typeof Nota>;
      await componenteNota.guardarDatosNota();      
    },

    async validaSeleccionPlan(){
      if(document.getElementById("plan-tab").ariaSelected=="false"){
        this.esPlan=false
      }
      else
        this.esPlan=true;
        this.esPaciente=false;
        this.esValoracion=false;
        this.esNota=false;

      const componenteId = await this.$refs.refId as InstanceType<typeof Id>;
      await componenteId.guardarDatosId();

      const componenteValoracion = await this.$refs.refValoracion as InstanceType<typeof Valoracion>;
      await componenteValoracion.guardarDatosValoracion();

      const componentePlan = await this.$refs.refPlan as InstanceType<typeof Plan>;
      await componentePlan.guardarDatosPlan();

      const componenteNota = await this.$refs.refNota as InstanceType<typeof Nota>;
      await componenteNota.guardarDatosNota();      
    },

    async validaSeleccionNota(){
      if(document.getElementById("nota-tab").ariaSelected=="false"){
        this.esNota=false
      }
      else
        this.esPlan=false;
        this.esPaciente=false;
        this.esValoracion=false;
        this.esNota=true;

      const componenteId = await this.$refs.refId as InstanceType<typeof Id>;
      await componenteId.guardarDatosId();

      const componenteValoracion = await this.$refs.refValoracion as InstanceType<typeof Valoracion>;
      await componenteValoracion.guardarDatosValoracion();

      const componentePlan = await this.$refs.refPlan as InstanceType<typeof Plan>;
      await componentePlan.guardarDatosPlan();

      const componenteNota = await this.$refs.refNota as InstanceType<typeof Nota>;
      await componenteNota.guardarDatosNota();      
    },
/*====================================================================================*/

    async actualizaDatos(numeroExpediente, nombrePaciente, nombreCirujano, cirugia, numEpisodio) {
      this.numExpediente = numeroExpediente,
      this.nomPaciente = nombrePaciente,
      this.nomCirujano = nombreCirujano,
      this.nomCirugia = cirugia,

      this.$emit('recibe-datos', this.nomPaciente, this.nomCirujano, this.nomCirugia);
    },
      
    async scrollFunction() {
      if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        document.getElementById("btnArriba").style.display = "block";
      } else {
        document.getElementById("btnArriba").style.display = "none";
      }
    },

    async topFunction() {
      document.body.scrollTop = 0; // Para safari
      document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
    },

    async ocultarFondo(){
      document.body.style.backgroundImage = "url('')";
      document.body.style.backgroundColor = '#F5F8FC'
    },

    async ocultarMenuLateral(){
      document.getElementById("menu-trans").className='invisible'
      document.getElementById("menu-post").className='invisible'    
    },

    async mostrarHeader(){
      document.getElementById("headerP").className='mt visible'
    },
    
    async desplegarMenuVistaRapida(){     
      idStore.VistaRapida=true
      this.mostrarVistaRapida=true
    },
    
    async replegarMenuVistaRapida(){ 
      if(this.mostrarVistaRapida=true)     
        idStore.VistaRapida=false
        this.mostrarVistaRapida=false
    },

    async selecDatoExp(item) {
        // Al hacer clic en un elemento, se almacena en selectedItem y se mostrará en el input
        this.idStore.numExpediente = item;
        this.mostrarDatosFiltradosExp= false

        await this.obtenerPaciente()
    },

    async cambiarValorTutorial(){
      swal
        .fire({
          html: "Podrá volver a consultar el tutorial desde el menú lateral en la sección de <b>Ayuda</b>",
          icon: "info",
          showConfirmButton: true,
          showCancelButton: false,
          toast: true,
        })
        
        userStore.TutorialPre = 1
        await this.userStore.updateTutorialPre(userStore.IdMed)                        
    },

    async validarCambioCarrusel(){
      if(document.getElementById("tutoUno").ariaCurrent=="true"){
        this.tutoUno=true
        this.tutoDos=false
        this.tutoTres=false
        this.tutoCuatro=false
      }
      else if(document.getElementById("tutoDos").ariaCurrent=="true"){
        this.tutoUno=false
        this.tutoDos=true
        this.tutoTres=false
        this.tutoCuatro=false
      }
      else if(document.getElementById("tutoTres").ariaCurrent=="true"){
        this.tutoUno=false
        this.tutoDos=false
        this.tutoTres=true
        this.tutoCuatro=false
      }
      else if(document.getElementById("tutoCuatro").ariaCurrent=="true"){
        this.tutoUno=false
        this.tutoDos=false
        this.tutoTres=false
        this.tutoCuatro=true
      }
    }
  }  
})
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>
.color-modal {
  background-color: #002d60;
}
.filtered-container {
  max-height: 200px; /* Altura máxima del contenedor */
  overflow-y: auto; /* Añadir scroll vertical si el contenido excede la altura */
  border: 1px solid #ccc; /* Opcional: agregar borde para mejor visualización */
  padding: 5px; /* Opcional: agregar espacio interno */
  position: relative;
  cursor: pointer
}
/* Estilos para los elementos dentro del contenedor */
.filtered-container > div {
  padding: 8px;
}
.deslizar {
  overflow: scroll;
  overflow-x: hidden;
  height: 400px;
  margin-top: 15px;
}
.grafica-div {
  position: relative;
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
.color-dropdown {
  background-color: #002d60;
}
/* Botones */
.alinearBotonDerecha{
    text-align: right;
}
.centrarBoton{
  text-align: center;
}
.btn-icono {
    --bs-btn-bg: #ffffff;
    --bs-btn-color: #002d60;
    --bs-btn-border-color: #ced4da;
    --bs-btn-hover-bg: #ced4da;
    --bs-btn-hover-color: #002d60;
    --bs-btn-hover-border-color: #ced4da;
    --bs-btn-active-bg: #ced4da;
    --bs-btn-active-color: #002d60;
    --bs-btn-active-border-color: #ced4da;
}
.btn-historial {
    --bs-btn-bg: #002d60;
    --bs-btn-color: #ffffff;
    --bs-btn-border-color: #002d60;

    --bs-btn-hover-bg: #ffffff;
    --bs-btn-hover-color: #002d60;
    --bs-btn-hover-border-color: #ffffff;

    --bs-btn-active-bg: #002d60;
    --bs-btn-active-color: #ffffff;
    --bs-btn-active-border-color: #002d60;
}
.btn-paciente{
  width: 25px;
  height: auto;
}
.btn-registro{
  width: 24px;
  height: auto;
}
.btn-historial{
  width: 42px;
  height: auto;
}

/* Barra navegación */
.btn-barra-act{
    background-color: #F5F8FC;
    color: #E88300;
    border-bottom: thick solid;
    border-bottom-width: 5px;
    border-bottom-left-radius: 0%;
    border-bottom-right-radius: 0%;
    border-left: none;
    border-right: none;
    border-top: none;
    width: 110px;
}
.btn-barra-des{
    background-color: #F5F8FC;
    color: #002d60;
    border: none;
}
/* Contenido principal */
.bordePrincipal {
  width: 110%
}
.margen-div-barra{
  margin-top: 120px;
}

/* Menú lateral */
.menuLateralPrincipal {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
.menu-pre {  
  width: 200px;
  height: auto;
  background-color: #E88300;
  padding: 0rem;
  border-radius: 10px;
  margin-left: 28px;
  text-align: center;
}
.menu-trans-post {  
  width: 200px;
  height: auto;
  background-color: #d6d6d6;
  padding: 0rem;
  border-radius: 10px;
  margin-left: 28px;
  text-align: center;
}
.menu-trans-post:hover{
  background-color: #E88300;
  transition: background-color 0.2s ease-in-out;
}
.menu-desactivado {  
  width: 200px;
  height: auto;
  background-color: #d6d6d6;
  padding: 0rem;
  border-radius: 10px;
  margin-left: 28px;
  text-align: center;
}
.img-menu-lateral{
  width: 100%;
  height: 100%;
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
  height: 60%;
}
.columna-size-2{
  height: 40%;
}

/* Botón arriba */
.btn-arriba {
    display: none;  /*Oculto por defecto */
    position: fixed; /* Posición fija */
    bottom: 60px; /* Coloque el botón en la parte inferior de la página. */
    z-index: 99; /* Asegúrese de que no se superponga */  
    border-radius: 6px; /* Esquinas redondeadas */ 
    /* right: 340px; */
    --bs-btn-bg: #ffffff;
    --bs-btn-color: #002d60;    
    --bs-btn-border-color: #ced4da;
    --bs-btn-hover-bg: #002d60;
    --bs-btn-hover-color: #ffffff;
    --bs-btn-hover-border-color: #002d60;          
    --bs-btn-active-bg: #002d60;
    --bs-btn-active-color: #ffffff;
    --bs-btn-active-border-color: #002d60;     
}
/* Modal tutorial */
.modal-med-largo {
  height: 510px;
}
.div-carrusel{
  text-align: -webkit-center;
}
.img-carrusel{
  width: inherit;
}
.carousel-indicators{
  margin-bottom: 0;
}
.carousel-indicators [data-bs-target] {
  background-color: #E88000 !important;  
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