<template>
  <div>
    <div class="input-group mb-3">
      <div class="col-md-6">
        <input class="form-control me-2"
               type="search"
               placeholder="Buscar número de expediente..." aria-label="Buscar">
        <!--Buscador-->
      </div>

      <div class="col-md-2">
        <div class="alinearBotonDerecha">
          <button class="btn btn-icono fw-bold"><img class="btn-paciente" src="images/imgIcon/nuevo-pac.svg"/> Nuevo Paciente </button>
        </div>
      </div>

      <div class="col-md-2">
        <div class="centrarBoton">
          <button class="btn btn-icono fw-bold"><img class="btn-registro" src="images/imgIcon/nuevo.svg"/> Nuevo Registro </button>
        </div>
      </div>
      
      <div class="col-md-2">
        <div class="alinearBotonDerecha">
          <button class="btn btn-icono fw-bold"><img class="btn-historial" src="images/imgIcon/historial-pac.svg"/> Historial Paciente </button>
        </div>
      </div>
    </div>

    <div class="input-group mb-3">
      <div class="col-10 divform navbar-nav">
        <ul class="nav nav-pills nav-fill text-center" id=""> <!--Lista para el menú principal-->
          <li class="nav-item col-md-3" >
            <button 
                    :class="esPaciente == true ? 'btn-barra-act fw-bold active' : 'btn-barra-des fw-bold active'"
                    id="id-tab"
                    href="#pre-id"
                    data-bs-toggle="tab"
                    type="submit"
                    aria-selected="true" @click="validaSeleccionId()"> ID PACIENTE </button>
            <!--Se asigna el contenedor al que apuntara el elemento por medio de data-bs-target-->
          </li>

          <li class="nav-item col-md-3">
            <button class="nav-link fw-bold"
                    id = "valoracion-tab"
                    href="#pre-valoracion"
                    data-bs-toggle="tab"
                    type="submit"
                    aria-selected="false"
                    :disabled="numExpediente != '' && nomPaciente != '' ? false : true"> VALORACIÓN </button>
          </li>

          <li class="nav-item col-md-3">
            <button 
                    :class="esPlan == true ? 'btn-barra-act fw-bold' : 'btn-barra-des fw-bold'"
                    id="plan-tab"
                    href="#pre-plan"
                    data-bs-toggle="tab"
                    type="submit"
                    aria-selected="false" @click="validaSeleccionPlan()"> PLAN </button>
          </li>

          <li class="nav-item col-md-3" >
            <button class="nav-link fw-bold"
                    id="nota-tab"
                    href="#pre-nota"
                    data-bs-toggle="tab"
                    type="submit"
                    aria-selected="false"
                    :disabled="numExpediente != '' && nomPaciente != '' ? false : true"> NOTA </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="input-group mb-3 bordePrincipal"> 
      <div class="tab-content col-md-9" id=""> <!--Redirecciona al contenedor seleccionado, cargando la información del componente-->
        <div class="tab-pane fade show active" id="pre-id">
          <id @recibe-datos="actualizaDatos"
              @validar="validaExpediente"/>
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

      <div class="col-2 menuLateralPrincipal"> <!--Menú lateral-->
        <div class="col-md-2 menuLateral">
          <img src="images/pre.svg" class="img-menu-lateral"/>
        </div>
        
        <div class="col-md-2 menuLateral">
          <RouterLink to="trans">
            <img src="images/trans_off.svg" class="img-menu-lateral"/>
          </RouterLink>
        </div>
        
        <div class="col-md-2 menuLateral">
          <RouterLink to="post">
            <img src="images/post_off.svg" class="img-menu-lateral"/>
          </RouterLink>
        </div>                                                                                         
      </div>
      
      <div class="container text-center col-md-9 posicionEstatica fw-bold">
        <div class="row">
          <div class="col bordeColumna">
            <label class="form-label text-white">
              {{nomPaciente}}
            </label>                                  
          </div>
          
          <div class="col bordeColumna">
            {{nomCirujano}}
          </div>
          
          <div class="col bordeColumna">
            {{nomCirugia}}
          </div>
        </div>
      </div>

      <div class="container col-md-1">
        <button @click="topFunction()"
                class="btn btn-arriba fw-bold"
                id="btnArriba"
                title="Go to top"> <i class="fa-solid fa-3x fa-angle-up"></i> </button>                      
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
// import { mostrarMensaje } from "../LoginView.vue";
import { useUserStore } from "@/stores/user-store";

const userStore = useUserStore();

export default defineComponent({
  data() {
    return {
      numExpediente:'',
      nomPaciente:'',
      nomCirujano:'',
      nomCirugia:'',
      userStore,
      esPaciente: false,
      esValoracion: false,
      esPlan: false,
      esNota: false
    }
  },

  components:{
    Id,
    Nota,
    Plan,
    Valoracion
  },
  
  created(){
    this.validaExpediente(this.numExpediente, this.nomPaciente);
  },
  
  mounted: function() { // Llama el método despues de cargar la página
    // mostrarMensaje(userStore.Nombre, userStore.Apellido);
    this.validaSeleccionId()
    this.ocultarFondo();    
    this.mostrarHeader();    
    document.addEventListener('scroll', this.scrollFunction);              
  },
  
  destroyed: function(){
    document.addEventListener('scroll', this.scrollFunction)
  },
  
  methods: {
    async validaExpediente(numExpediente, nombrePaciente) {                                  
      if(numExpediente.trim() == "" || nombrePaciente.trim() == "") {
        if(numExpediente.trim() ==""){
          document.getElementById("validaNumExp").className = "visible validaCampo";
          document.getElementById("numExpediente").className = "form-control border border-danger";
        }
        else{
          document.getElementById("validaNumExp").className = "invisible";
        }
          
        if(nombrePaciente.trim() ==""){
          document.getElementById("validaNomPac").className = "visible validaCampo";              
          document.getElementById("nombrePaciente").className = "form-control border border-danger";
        }
        else{
          document.getElementById("validaNomPac").className = "invisible"; 
        }

        swal.fire({
          title: 'Escribir el número de expediente o nombre del paciente',
          icon: 'error',
          showConfirmButton: true,
          showCloseButton: true,
          backdrop: true,
          toast: true,
          position: 'top',
          timer: 3000,
          timerProgressBar: true
        })              
        
        return;                       
      }
      else{
        document.getElementById("validaNumExp").className = "invisible";
        document.getElementById("validaNomPac").className = "invisible";              

        alert('OK')
      }
    },

    async validaSeleccionId(){
      if(document.getElementById("id-tab").ariaSelected=="true"){
        this.esPaciente=true;
        this.esValoracion=false;
        this.esPlan=false;
        this.esNota=false;
      }
      else
        this.esPaciente=false
    },

    async validaSeleccionPlan(){
      if(document.getElementById("plan-tab").ariaSelected=="true"){
        this.esPlan=true;
        this.esPaciente=false;
        this.esValoracion=false;        
        this.esNota=false;
      }
      else
        this.esPlan=false
    },

    async ocultarBorde() {
      if (document.getElementById("id-tab").ariaSelected=="false"){
        document.getElementById("id-tab").className="nav-link active fw-bold"
        alert('Entro')
      }
    },

    async actualizaDatos(numeroExpediente,nombrePaciente, nombreCirujano, cirugia) {
      this.numExpediente=numeroExpediente,
      this.nomPaciente = nombrePaciente,
      this.nomCirujano = nombreCirujano,
      this.nomCirugia = cirugia

      this.$emit('recibe-datos', this.nomPaciente, this.nomCirujano, this.nomCirugia);
      
      console.log('Pac: '+this.nomPaciente, ', Dr.: '+this.nomCirujano, ', Cx: '+this.nomCirugia)
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
      alert(document.getElementById("id-tab").ariaSelected)
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
}
.btn-barra-des{
  background-color: #F5F8FC;
    color: #002d60;
    border: none;
}
/* Contenido principal */
.bordePrincipal {
  width: 108%
}

/* Menú lateral */
.menuLateralPrincipal {
  margin-top: 10px;
}
.menuLateral {  
  margin-bottom: 20px; 
  margin-left: 45px;
}
.img-menu-lateral{
  width: 510%;
  height: auto;
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