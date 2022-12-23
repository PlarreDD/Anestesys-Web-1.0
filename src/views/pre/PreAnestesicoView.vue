<template>

  <div class="input-group mb-3">
    <div class="col-md-7">
      <input class="form-control me-2" type="search" placeholder="Buscar expediente del paciente..." aria-label="Buscar">
    </div>    
  </div>

  <div class="input-group mb-3">
    <div class="col-10 divform navbar-nav">              

        <ul class="nav nav-pills nav-fill text-center" id="">
          <li class="nav-item col-md-3" >
              <button class="nav-link active" id="pre-menu" data-bs-toggle="pill" data-bs-target="#pre-id" type="button" aria-selected="true">ID PACIENTE</button>
          </li>
          <li class="nav-item col-md-3" >
              <button class="nav-link" id="pre-menu" data-bs-toggle="pill" data-bs-target="#pre-valoracion" type="button" aria-selected="false">VALORACIÓN</button>
          </li>
          <li class="nav-item col-md-3" >
              <button class="nav-link" id="pre-menu" data-bs-toggle="pill" data-bs-target="#pre-plan" type="button" aria-selected="false">PLAN</button>
          </li>
          <li class="nav-item col-md-3" >
              <button class="nav-link" id="pre-menu" data-bs-toggle="pill" data-bs-target="#pre-nota" type="button" aria-selected="false">NOTA</button>
          </li>
        </ul>
    </div>
  </div>

  <div class="input-group mb-3"> 
    
    <div class="tab-content col-md-9 divJustify" id="" >
        <div class="tab-pane fade show active" id="pre-id"><Id/></div>
        <div class="tab-pane fade" id="pre-valoracion"><Valoracion/></div>
        <div class="tab-pane fade" id="pre-plan"><Plan/></div>
        <div class="tab-pane fade" id="pre-nota"><Nota/></div>
    </div>

    <div class="col-2">
      <div class="col-md-2 divLateral">
        <img src="images/pre.png" width="180" height="180"/>
      </div>
      <div class="col-md-2 divLateral">
        <RouterLink to="trans"><img src="images/trans.png" width="180" height="180"/></RouterLink>
      </div>
      <div class="col-md-2 divLateral">
        <RouterLink to="post"><img src="images/post.png" width="180" height="180"/></RouterLink>
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
.divLateral {
  margin-bottom: 6px; 
  margin-top: 6px;
  margin-left: 20px;
}
.divJustify {
  width: 80%;
}
</style>