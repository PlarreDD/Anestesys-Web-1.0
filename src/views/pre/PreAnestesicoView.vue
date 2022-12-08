<template>

  <div class="input-group mb-3">
    <div class="col-md-7">
      <input class="form-control me-2" type="search" placeholder="Buscar expediente del paciente..." aria-label="Buscar">
    </div>    
  </div>

  <div class="input-group mb-3">
    <div class="col-10 divform navbar-nav"> 
      <div class="row g-3 text-center">   
        <div class="col-md-3">
          <RouterLink active-class="text-dark fw-bold bgactive" class="nav-link" to="/pre">ID PACIENTE</RouterLink>
        </div>
        <div class="col-md-3">
          <RouterLink active-class="text-dark fw-bold bgactive" class="nav-link" to="/pre">VALORACIÓN</RouterLink>
        </div>
        <div class="col-md-3">
          <RouterLink active-class="text-dark fw-bold bgactive" class="nav-link" to="/plan">PLAN</RouterLink>
        </div>
        <div class="col-md-3">
          <RouterLink active-class="text-dark fw-bold bgactive" class="nav-link" to="/nota">NOTA</RouterLink>
        </div>
      </div>
    </div>
  </div>

  <div class="input-group mb-3"> 
    <Id />

    <div class="col-1"></div>

    <div class="col-2">
      <div class="col-md-2">
        <img src="images/pre.png" width="180" height="180"/>
      </div>
      <div class="col-md-2">
        <img src="images/trans.png" width="180" height="180"/>
      </div>
      <div class="col-md-2">
        <img src="images/post.png" width="180" height="180"/>
      </div>    
    </div>
  </div>

  
  
</template>

<script lang="ts">
import Id from "../../components/pre/Id.vue";
import Valoracion from "../../components/pre/Valoracion.vue";
import Plan from "../../components/pre/Plan.vue";
import Nota from '../../components/pre/Nota.vue';
export default ({
  components:{
    Id, Nota, Plan, Valoracion
  }
})
</script>

<style scoped>
.bgactive{
  background-color: #f58220
}
</style>