<template>
  <header>
      <barra-navegacion/>
  </header>
  <div class="margen-div-barra">
    <div class="input-group mb-3">
      <div class="col-md-6">
        <!--Buscador-->
        <input class="form-control me-2"
               type="search"
               placeholder="Buscar número de expediente..."
               aria-label="Buscar">
      </div>

      <div class="col-md-2">
        <div class="alinearBotonDerecha">
          <button class="btn btn-icono fw-bold">
            <img class="btn-paciente"
                 src="images/imgIcon/nuevo-pac.svg"/> Nuevo Paciente </button>
        </div>
      </div>

      <div class="col-md-2">
        <div class="centrarBoton">
          <button class="btn btn-icono fw-bold">
            <img class="btn-registro"
                 src="images/imgIcon/nuevo.svg"/> Nuevo Registro </button>
        </div>
      </div>
      
      <div class="col-md-2">
        <div class="alinearBotonDerecha">
          <button class="btn btn-icono fw-bold">
            <img class="btn-historial"
                 src="images/imgIcon/historial-pac.svg"/> Historial Paciente </button>
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
                    :disabled="numExpediente != '' && nomPaciente != '' ? false : true"> VALORACIÓN </button>
          </li>

          <li class="nav-item col-md-3">
            <button :class="esPlan == true ? 'btn-barra-act fw-bold active' : 'btn-barra-des fw-bold'"
                    id="plan-tab"
                    href="#pre-plan"
                    data-bs-toggle="tab"
                    aria-selected="false"
                    @click="validaSeleccionPlan()"
                    :disabled="numExpediente != '' && nomPaciente != '' ? false : true"> PLAN </button>
          </li>

          <li class="nav-item col-md-3" >
            <button :class="esNota == true ? 'btn-barra-act fw-bold active' : 'btn-barra-des fw-bold'"
                    id="nota-tab"
                    href="#pre-nota"
                    data-bs-toggle="tab"
                    aria-selected="false"
                    @click="validaSeleccionNota()"
                    :disabled="numExpediente != '' && nomPaciente != '' ? false : true"> NOTA </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="input-group mb-3 bordePrincipal"> 
      <!--Redirecciona al contenedor seleccionado, cargando la información del componente-->
      <div class="tab-content col-md-9" id="">
        <div class="tab-pane fade show active" id="pre-id">
          <id @recibe-datos="actualizaDatos"
              @validar="validaExpediente" 
              :propNumExp="numExpB"
              :propNomPac="nomPacB"
              :propRojoNum="bordeRojoNum"
              :propVerdeNum="bordeVerdeNum"
              :propRojoNom="bordeRojoNom"
              :propVerdeNom="bordeVerdeNom"
              :propBtnGuardar="btnGuardar"
              :propBtnActualizar="btnActualizar"/>
        </div>

        <div class="tab-pane fade" id="pre-valoracion">
          <valoracion/>
        </div>
        
        <div class="tab-pane fade" id="pre-plan">
          <plan/>
        </div>
        
        <div class="tab-pane fade" id="pre-nota">
          <nota/>
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
                      :class="numExpediente != '' && nomPaciente != '' ? 'visible' : 'invisible'">
            <img src="images/trans.svg" class="img-menu-lateral"/>
          </RouterLink>
        </div>
        
        <div :class="numExpediente != '' && nomPaciente != '' ?
                    'col-md-2 menu-trans-post' : 'col-md-2 menu-desactivado'">
          <RouterLink to="post"
                      :class="numExpediente != '' && nomPaciente != '' ? 'visible' : 'invisible'">
            <img src="images/post.svg" class="img-menu-lateral"/>
          </RouterLink>
        </div>
      </div>
      
      <div class="container text-center col-md-9 posicionEstatica fw-bold"
           style="border-radius: 5px;">
        <div class="row">
          <div class="col bordeColumna">
            <label class="form-label text-white">
              {{ nomPaciente }}
            </label>
          </div>
          
          <div class="col bordeColumna">
            {{ nomCirujano }}
          </div>
          
          <div class="col bordeColumna">
            {{ nomCirugia }}
          </div>
        </div>
      </div>

      <div class="container col-md-1">
        <button @click="topFunction()"
                class="btn btn-arriba fw-bold"
                id="btnArriba"
                title="Go to top">
          <i class="fa-solid fa-3x fa-angle-up"></i>
        </button>
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
import { useUserStore } from "@/stores/user-store";
import BarraNavegacion from "../../components/barraNavegacion.vue";
import { usePreIdStore } from '../../stores/preId-store';

const userStore = useUserStore();
const idStore = usePreIdStore();

export default defineComponent({
  data() {
    return {
      claseVisible:'visible',
      claseInvisible:'invisible',

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
      esPaciente: false,
      esValoracion: false,
      esPlan: false,
      esNota: false,
      // btnGuardar:idStore.pacienteID,
      btnGuardar: true,
      btnActualizar: false
      // btnActualizar:!(idStore.pacienteID)
    }
  },

  components:{
    Id,
    Nota,
    Plan,
    Valoracion,
    BarraNavegacion
  },
  
  created(){
  },
  
  mounted: function() { // Llama el método despues de cargar la página
    this.validaSeleccionId()
    this.ocultarFondo();    
    this.mostrarHeader();    
    document.addEventListener('scroll', this.scrollFunction);
  },
  
  destroyed: function(){
    document.addEventListener('scroll', this.scrollFunction)
  },
  
  methods: {
    async validaExpediente(numExpediente, nombrePaciente,) {
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

        swal.fire({
          title: 'Escribir el número de expediente o nombre del paciente',
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
        this.numExpB=false
        this.nomPacB=false  
        this.bordeRojoNum=false
        this.bordeVerdeNum=true
        this.bordeRojoNom=false
        this.bordeVerdeNom=true

        this.btnGuardar=false
        this.btnActualizar=true

        // this.btnGuardar= !(idStore.pacienteID)
        // this.btnActualizar= idStore.pacienteID     
        
      }
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
    },

    async actualizaDatos(numeroExpediente, nombrePaciente, nombreCirujano, cirugia) {
      this.numExpediente = numeroExpediente,
      this.nomPaciente = nombrePaciente,
      this.nomCirujano = nombreCirujano,
      this.nomCirugia = cirugia

      this.$emit('recibe-datos', this.nomPaciente, this.nomCirujano, this.nomCirugia);
    },

    async validarCambio() {
      if (this.numExpediente.trim() != '' && this.nomPaciente.trim() != '') {
        alert('Entro, no debe cambiar')
      }
      alert('Error!')
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

    async mostrarHeader(){
      document.getElementById("headerP").className='mt visible'
    },
  }  
})
</script>

<style scoped>
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
  padding: 1rem;
  border-radius: 10px;
  margin-left: 28px;
  text-align: center;
}
.menu-trans-post {  
  width: 200px;
  height: auto;
  background-color: #d6d6d6;
  padding: 1rem;
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
  padding: 1rem;
  border-radius: 10px;
  margin-left: 28px;
  text-align: center;
}
.img-menu-lateral{
  width: 90%;
  height: 95%;
}

/* Menú estatico */
.posicionEstatica {
  position: sticky;
  bottom: 0;
  z-index: 1020;
  background-color: #002D60;
  padding: 1.2rem;
  border-radius: 5px;
  color: #ffffff;
}
.bordeColumna{
  margin-left: auto;
  margin-right: auto;
  border-right: 1px solid #ffffff;
  border-left: 1px solid #ffffff;
}

/* Botón arriba */
.btn-arriba {
    display: none;  /*Oculto por defecto */
    position: fixed; /* Posición fija */
    bottom: 60px; /* Coloque el botón en la parte inferior de la página. */
    z-index: 99; /* Asegúrese de que no se superponga */  
    border-radius: 6px; /* Esquinas redondeadas */ 
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