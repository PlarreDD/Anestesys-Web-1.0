<template>

  <div class="input-group mb-3">
    <div class="col-md-7">
      <input class="form-control me-2" type="search" placeholder="Buscar expediente del paciente..." aria-label="Buscar"> <!--Buscador-->
    </div>    
  </div>

  <div class="input-group mb-3">
    <div class="col-10 divform navbar-nav">                
        <ul class="nav nav-pills nav-fill text-center" id=""> <!--Lista para el menú principal-->
          <li class="nav-item col-md-3" >
              <button class="nav-link active" id="id-tab" href="#pre-id" data-bs-toggle="tab" type="submit" aria-selected="true">ID PACIENTE</button> <!--Se asigna el contenedor al que apuntara el elemento por medio de data-bs-target-->
          </li>
          <li class="nav-item col-md-3" >
              <button class="nav-link" id="valoracion-tab" href="#pre-valoracion" data-bs-toggle="tab" type="submit" aria-selected="false">VALORACIÓN</button>
          </li>
          <li class="nav-item col-md-3" >
              <button class="nav-link" id="plan-tab" href="#pre-plan" data-bs-toggle="tab" type="submit" aria-selected="false">PLAN</button>
          </li>
          <li class="nav-item col-md-3" >
              <button class="nav-link" id="nota-tab" href="#pre-nota" data-bs-toggle="tab" type="submit" aria-selected="false">NOTA</button>
          </li>
        </ul>
    </div>

    <div class="col-md-10">
      <BarraProgreso />
    </div>
  </div>

  <div class="input-group mb-3 divPrincipal"> 
    
    <div class="tab-content col-md-9" id="" > <!--Redirecciona al contenedor seleccionado, cargando la información del componente-->
        <div class="tab-pane fade show active" id="pre-id"><id @validar="validaExpediente"/></div>
        <div class="tab-pane fade" id="pre-valoracion"><valoracion/></div>
        <div class="tab-pane fade" id="pre-plan"><plan/></div>
        <div class="tab-pane fade" id="pre-nota"><nota/></div>
    </div>

    <div class="col-2 divMenuLateralPrincipal"> <!--Menú lateral-->
      <div class="col-md-2 divMenuLateral">
        <img src="images/pre.png" class="imgAjuste"/>
      </div>
      <div class="col-md-2 divMenuLateral">
        <RouterLink to="trans"><img src="images/trans.png" class="imgAjuste"/></RouterLink>
      </div>
      <div class="col-md-2 divMenuLateral">
        <RouterLink to="post"><img src="images/post.png" class="imgAjuste"/></RouterLink>
      </div>    
    </div>
  </div>

</template>

<script lang="ts">

import { defineComponent } from "vue"

import Id from "../../components/pre/Id.vue";
import Valoracion from "../../components/pre/Valoracion.vue";
import Plan from "../../components/pre/Plan.vue";
import Nota from '../../components/pre/Nota.vue';
import BarraProgreso from '../../components/BarraProgreso.vue';
import swal from 'sweetalert2'

declare var numExpediente: any
declare var nombrePaciente: any

function isValid() {
  if (numExpediente.trim() == "" || nombrePaciente.trim() == "") {
    return false;
  }
  return true;
}

export default defineComponent({
  components:{
    Id,
    Nota,
    Plan,
    Valoracion,
    BarraProgreso
  },
  created(){
    this.validaExpediente()
  },
  methods: {
      async validaExpediente(numExpediente = ".", nombrePaciente = ".") {            
          if(numExpediente.trim() == "" || nombrePaciente.trim() == "") {
              swal.fire({
              title: "El número de expediente y nombre del paciente no pueden ir vacíos",
              icon: "error",
              showConfirmButton: true,
              showCloseButton: true,
              })     
              return;           
          }
      }
  }
})
</script>

<style scoped>
.divMenuLateral {
  margin-bottom: 6px; 
  margin-top: 6px;
  margin-left: 20px;
}
.divMenuLateralPrincipal {
  margin-top: 16px;
}
.divPrincipal {
  width: 110%
}
.imgAjuste{
  width: 455%;
  height: auto;
}
</style>