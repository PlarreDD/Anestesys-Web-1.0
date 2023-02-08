<template>
  <div>
      <div class="input-group mb-3">      
          <div class="col-md-6">
            <input class="form-control me-2" type="search" placeholder="Buscar número de expediente..." aria-label="Buscar"> <!--Buscador-->
          </div>   
          <div class="col-md-2">
            <div class="centrarBoton">
              <button class="btn btn btn-outline-secundario"><b>Nuevo Paciente</b></button>
            </div>
          </div> 
          <div class="col-md-2">
            <div class="centrarBoton">
              <button class="btn btn btn-outline-secundario"><b>Nuevo Registro</b></button>
            </div>
          </div> 
          <div class="col-md-2">
            <div class="centrarBoton">
              <button class="btn btn btn-outline-secundario"><b>Historial Paciente</b></button>
            </div>
          </div>            
      </div>

      <div class="input-group mb-3">
          <div class="col-10 divform navbar-nav">                     
              <ul class="nav nav-pills nav-fill text-center" id=""> <!--Lista para el menú principal-->
                  <li class="nav-item col-md-3" >
                      <button class="nav-link active" id="id-tab" href="#pre-id" data-bs-toggle="tab" type="submit" aria-selected="true"><u><b>ID PACIENTE</b></u></button> <!--Se asigna el contenedor al que apuntara el elemento por medio de data-bs-target-->
                  </li>
                  <li class="nav-item col-md-3" >
                      <button class="nav-link" id="valoracion-tab" href="#pre-valoracion" data-bs-toggle="tab" type="submit" aria-selected="false" @click="validaExpediente(numExpediente, nomPaciente)"><u><b>VALORACIÓN</b></u></button>
                  </li>
                  <li class="nav-item col-md-3" >
                      <button class="nav-link" id="plan-tab" href="#pre-plan" data-bs-toggle="tab" type="submit" aria-selected="false"><u><b>PLAN</b></u></button>
                  </li>
                  <li class="nav-item col-md-3" >
                      <button class="nav-link" id="nota-tab" href="#pre-nota" data-bs-toggle="tab" type="submit" aria-selected="false"><u><b>NOTA</b></u></button>
                  </li>
              </ul>
          </div>
      </div>

      <div class="input-group mb-3 bordePrincipal"> 
        
          <div class="tab-content col-md-9" id=""> <!--Redirecciona al contenedor seleccionado, cargando la información del componente-->
              <div class="tab-pane fade show active" id="pre-id">
                <id @recibe-datos="actualizaDatos" @validar="validaExpediente"/>
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
                  <img src="images/pre.png" class="ajusteImg"/>
              </div>
              <div class="col-md-2 menuLateral">
                  <RouterLink to="trans"><img src="images/trans.png" class="ajusteImg"/></RouterLink>
              </div>
              <div class="col-md-2 menuLateral">
                  <RouterLink to="post"><img src="images/post.png" class="ajusteImg"/></RouterLink>
              </div>                                                                                         
          </div>
          
          <div class="container text-center col-md-9 posicionEstatica bordeContenedor">
            <div class="row">
              <div class="col bordeColumna">
                <label class="form-label">Paciente: {{nomPaciente}}</label>                                  
              </div>
              <div class="col bordeColumna">
                Cirujano: {{nomCirujano}}
              </div>
              <div class="col bordeColumna">
                Cirugía: {{nomCirugia}}
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
import BarraProgreso from '../../components/BarraProgreso.vue';
import swal from 'sweetalert2'

export default defineComponent({
  data() {
    return {
      numExpediente:'',
      nomPaciente:'',
      nomCirujano:'',
      nomCirugia:''
    }
  },
  components:{
    Id,
    Nota,
    Plan,
    Valoracion,
    BarraProgreso
  },
  created(){
    this.validaExpediente(this.numExpediente, this.nomPaciente)
  },
  mounted: function() { // Llama el método despues de cargar la página
      this.mandarMensaje();
  },
  methods: {
      async validaExpediente(numExpediente, nombrePaciente) {                                  
          if(numExpediente.trim() == "" || nombrePaciente.trim() == "") {

              if(numExpediente.trim() ==""){
                document.getElementById("validaNumExp").className = "visible validaCampo";
                document.getElementById("numExpediente").className = "form-control border border-danger";
              }else{
                document.getElementById("validaNumExp").className = "invisible";
              }
              
              if(nombrePaciente.trim() ==""){
                document.getElementById("validaNomPac").className = "visible validaCampo";              
                document.getElementById("nombrePaciente").className = "form-control border border-danger";
              }else{
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
      async mandarMensaje(){
        swal.fire({
          title: 'Bienvenido',
          html: '<b>Daniel</b>',
          icon: 'info',
          showConfirmButton: false,
          showCloseButton: true,  
          timer: 5000,
          timerProgressBar: true,
          toast: true,
          position: 'top-end'            
        })  
      },
      actualizaDatos(nombrePaciente, nombreCirujano, cirugia) {
        this.nomPaciente = nombrePaciente,
        this.nomCirujano = nombreCirujano,
        this.nomCirugia = cirugia

        this.$emit('recibe-datos', this.nomPaciente, this.nomCirujano, this.nomCirugia);         
      },
  }
})
</script>

<style scoped>
.menuLateral {
  margin-bottom: 6px; 
  margin-top: 6px;
  margin-left: 20px;
}
.menuLateralPrincipal {
  margin-top: 16px;
}
.bordePrincipal {
  width: 110%
}
.ajusteImg{
  width: 455%;
  height: auto;
}
.centrarBoton{
  text-align: center;
}
.posicionEstatica {
  position: sticky;
  bottom: 0;
  z-index: 1020;
  background-color: #fff;
}
.bordeContenedor{
  box-shadow: 3px 3px 7px #ccc;
  padding: 1.2rem;
  border-radius: 5px;
  border: #ccc 1px solid;
}
.bordeColumna{
  margin-left: auto;
  margin-right: auto;
  border-right: 1px solid #000000;
  border-left: 1px solid #000000;
}
.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: var(--bs-nav-pills-link-active-color);
    background-color: #F5F8FC;
    color: #E88300;
}
.nav-link {
    display: block;
    padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
    font-size: var(--bs-nav-link-font-size);
    font-weight: var(--bs-nav-link-font-weight);
    color: #002D60;
    text-decoration: none;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
}
.btn-outline-secundario {
    --bs-btn-color: #002D60;
    --bs-btn-border-color: #CED4DA;
    --bs-btn-hover-border-color: #CED4DA;
    --bs-btn-hover-color: #002D60;  
    --bs-btn-bg: #ffffff;
    --bs-btn-hover-bg: #ffffff;
}
</style>