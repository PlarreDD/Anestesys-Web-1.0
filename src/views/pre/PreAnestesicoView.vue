<template>

  <div class="input-group mb-3">
    <div class="col-md-7">
      <input class="form-control me-2" type="search" placeholder="Buscar expediente del paciente..." aria-label="Buscar">
    </div>    
  </div>

  <div class="input-group mb-3">
    <div class="col-10 divform navbar-nav"> 
      <!--<div class="row g-3 text-center">-->
        <!--<div class="col-md-3">
          <RouterLink active-class="text-dark fw-bold bgactive" class="nav-link" to="/pre">ID PACIENTE</RouterLink>
        </div>
        <div class="col-md-3">
          <RouterLink active-class="text-dark fw-bold bgactive" class="nav-link" to="/valoracion">VALORACIÓN</RouterLink>
        </div>
        <div class="col-md-3">
          <RouterLink active-class="text-dark fw-bold bgactive" class="nav-link" to="/plan">PLAN</RouterLink>
        </div>
        <div class="col-md-3">
          <RouterLink active-class="text-dark fw-bold bgactive" class="nav-link" to="/nota">NOTA</RouterLink>
        </div>-->   
        
        <ul class="nav nav-pills mb-3 text-center" id="" role="">
          <li class="nav-item col-md-3" role="presentation">
              <button class="nav-link active" id="pre-menu" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">ID PACIENTE</button>
          </li>
          <li class="nav-item col-md-3" role="presentation">
              <button class="nav-link" id="pre-menu" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">VALORACIÓN</button>
          </li>
          <li class="nav-item col-md-3" role="presentation">
              <button class="nav-link" id="pre-menu" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">PLAN</button>
          </li>
          <li class="nav-item col-md-3" role="presentation">
              <button class="nav-link" id="pre-menu" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">NOTA</button>
          </li>
        </ul>
      <!--</div>-->
    </div>
  </div>

  <div class="input-group mb-3"> 
    
    <div class="tab-content col-9" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0"><Id/></div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0"><Valoracion/></div>
        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0"><Plan/></div>
        <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0"><Nota/></div>
    </div>

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