<template>
  <header @click.stop="replegarMenuVistaRapida">
      <barra-navegacion/>
  </header>
  <div class="margen-div-barra" @click.stop="replegarMenuVistaRapida">
    <div class="input-group mb-3">
      <div class="col-md-6">
        <!--Buscador-->
        <Multiselect mode="tags"          
          placeholder="Buscar número de expediente..."
          v-model="idStore.numExpediente"                
          :options="listaExpedientes"
          :searchable="true"
          :createTag="true"
          :max="1"
          :multiple="false"
          @keyup.capture="obtenerPaciente"
          @change="obtenerPaciente"
          />
          <!-- @click="obtenerPaciente" -->
      </div>

      <div class="col-md-2"></div>

      <div class="col-md-2">
        <div class="centrarBoton">
          <button class="btn btn-icono fw-bold" :disabled="nuevoRegistro == false ? true : false" @click="crearNuevoRegistroExpediente">
            <img class="btn-registro"
                 src="images/imgIcon/nuevo.svg"/> Nuevo Registro </button>
        </div>
      </div>
      
      <div class="col-md-2">
        <div class="alinearBotonDerecha">
          <button class="btn btn-icono fw-bold" :disabled="historialPaciente == false ? true : false" data-bs-toggle="modal" data-bs-target="#modal-historial">
            <img class="btn-historial"
                 src="images/imgIcon/historial-pac.svg"/> Historial Paciente </button>
        </div>
      </div>

      <!--Abrir el modal de Historial-->
      <div class="modal" ref="historialModal" id="modal-historial" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content color-dropdown">
                  <div class="input-group mb-3">
                    <div class="modal-body">
                      <div class="col-md-12">
                        <div class="row g-3">                                                      
                            
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
                    @click="validaSeleccionId()"> ID PACIENTE </button>
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
          <img src="images/pre.svg" class="img-menu-lateral"/>
        </div>
        
        <div :class="numExpediente != '' && nomPaciente != '' ?
                    'col-md-2 menu-trans-post' : 'col-md-2 menu-desactivado'">
          <RouterLink to="trans"
                      class="" id="menu-trans">
            <img src="images/trans.svg" class="img-menu-lateral" @click="guardarDatos()"/>
          </RouterLink>
        </div>
        
        <div :class="numExpediente != '' && nomPaciente != '' ?
                    'col-md-2 menu-trans-post' : 'col-md-2 menu-desactivado'">
          <RouterLink to="post"
                      class="" id="menu-post">
            <img src="images/post.svg" class="img-menu-lateral" @click="guardarDatos()"/>
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
            <img class="img-vista-rapida-arriba" src="images/imgIcon/paciente_cuadro.png">                              
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
            <img class="img-vista-rapida-arriba" src="images/imgIcon/anestesiologo_cuadro.png">
            <label class="form-label text-white" :class="idStore.NombreAnestesiologo == '' || idStore.NombreAnestesiologo == undefined ? 'invisible':''">
              {{ idStore.NombreAnestesiologo == '' || idStore.NombreAnestesiologo == undefined ? '-': idStore.NombreAnestesiologo }}            
            </label>
          </div>
        </div>

        <div class="row columna-size-2">
          <div class="col borde-row"> 
            <img class="img-vista-rapida-arriba" src="images/imgIcon/cirujano_cuadro.png">
            <label class="form-label text-white" :class="idStore.NombreCirujano == '' || idStore.NombreCirujano == undefined ? 'invisible':''">            
              {{ idStore.NombreCirujano == '' || idStore.NombreCirujano == undefined ? '-': idStore.NombreCirujano }}
            </label>
          </div>

          <div class="col"> 
            <img class="img-vista-rapida-arriba" src="images/imgIcon/cirugia_cuadro.png">
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
          <img class="img-vista-rapida" src="images/imgIcon/paciente.png">          
          <label class="form-label text-white" :class="idStore.NombrePaciente == '' || idStore.NombrePaciente == undefined ? 'invisible':''"> 
            {{ idStore.NombrePaciente == '' || idStore.NombrePaciente == undefined ? '-': 
               idStore.NombrePaciente.length > 30 ? idStore.NombrePaciente.substring(0,30) + '...' : idStore.NombrePaciente }}
          </label>
        </div>
        
        <div class="col">
          <img class="img-vista-rapida" src="images/imgIcon/anestesiologo.png">
          <label class="form-label text-white" :class="idStore.NombreAnestesiologo == '' || idStore.NombreAnestesiologo == undefined ? 'invisible':''">
            {{ idStore.NombreAnestesiologo == '' || idStore.NombreAnestesiologo == undefined ? '-': 
               idStore.NombreAnestesiologo.length > 30 ? idStore.NombreAnestesiologo.substring(0,30) + '...' : idStore.NombreAnestesiologo }}            
          </label>
        </div>
        
        <div class="col bordeColumna"> 
          <img class="img-vista-rapida" src="images/imgIcon/cirugia.png">
          <label class="form-label text-white" :class="idStore.NombreCirugia == '' || idStore.NombreCirugia == undefined ? 'invisible':''">            
            {{ idStore.NombreCirugia == '' || idStore.NombreCirugia == undefined ? '-' : 
               idStore.NombreCirugia.length > 30 ? idStore.NombreCirugia.substring(0, 30) + '...': idStore.NombreCirugia }}
          </label>
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
import { usePreIdStore } from '../../stores/preId-store';
import { useTransAnestStore } from "@/stores/transAnest-store";
import { usePostAnestStore } from "@/stores/postAnest-store";
import Multiselect from '@vueform/multiselect';

const idStore = usePreIdStore();
const transStore = useTransAnestStore();
const postAnestStore = usePostAnestStore();

export default defineComponent({
  data() {
    return {
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
      
      mostrarVistaRapida: false,

      expSeleccionado: [],
      listaExpedientes: [],

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
      historialPaciente:false
    }
  },

  components:{
    Id,
    Nota,
    Plan,
    Valoracion,
    BarraNavegacion,
    Multiselect,
  },
  
  created(){
  },
  
  mounted: function() { // Llama el método despues de cargar la página
    this.validaSeleccionId()
    this.ocultarFondo();
    this.mostrarHeader();
    this.ocultarMenuLateral();
    document.addEventListener('scroll', this.scrollFunction);
  },
  
  destroyed: function(){
    document.addEventListener('scroll', this.scrollFunction)
  },  

  methods: {
/*======================= Obtener paciente para nuevo registro =======================*/
    // Obtener expedientes en Multiselect
    async listarExpedientes(){
      await idStore.getExpedientesList()

      let expediente= idStore.expedientes;
      this.listaExpedientes = expediente.map(document => document.numExpediente+" " +document.nomPaciente);
      this.listaExpedientes.sort();      
    },

    // Obtener datos de paciente seleccionado
    async obtenerPaciente(){
      await this.listarExpedientes();

      if(idStore.numExpediente == null || idStore.numExpediente == ''){
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
        // Post
        await this.vaciarStoreNotaPost()
        await this.vaciarStoreRecuperacion()

        idStore.vaciarInputs=true

        console.log("Pasó");
        
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
      }

      // Sino se elige un expediente no manda la petición
      if(idStore.numExpediente != null && idStore.numExpediente != ''){

        let expediente = await idStore.numExpediente.toString()
        let numExp = expediente.split(' ')[0];

        await idStore.getPaciente(numExp)
        
        idStore.numeroExpediente = idStore.pacientes.pacientes[0].numExpediente
        this.numeroExpediente = idStore.numeroExpediente
        
        idStore.pacienteId = idStore.pacientes.pacientes[0]._id        
        // this.idPaciente = idStore.pacientes.pacientes[0]._id                
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

        this.nuevoRegistro = true;
        this.historialPaciente = true;

        this.bloquearInputs=true
        this.bloquearInputsPrincipales=true
      }      
    },

    async vaciarStoreNotaPost() {
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
          title: 'Escribir el número de expediente, nombre del paciente y número de episodio',
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

      const componenteValoracion = await this.$refs.refValoracion as InstanceType<typeof Valoracion>;
      await componenteValoracion.guardarDatosValoracion();

      const componentePlan = await this.$refs.refPlan as InstanceType<typeof Plan>;
      await componentePlan.guardarDatosPlan();

      const componenteNota = await this.$refs.refNota as InstanceType<typeof Nota>;
      await componenteNota.guardarDatosNota();      
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
    }
  }  
})
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>
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
</style>