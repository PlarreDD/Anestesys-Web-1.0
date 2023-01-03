<template>
  <div class="input-group mb-3">
    <div class="col-10 divform navbar-nav">              

        <ul class="nav nav-pills mb-3 text-center" id=""> <!--Lista para el menú principal-->
          <li class="nav-item col-md-6" >
              <button class="nav-link active" id="post" data-bs-toggle="pill" data-bs-target="#nota" type="button" aria-selected="true">NOTA POST</button> <!--Se asigna el contenedor al que apuntara el elemento por medio de data-bs-target-->
          </li>
          <li class="nav-item col-md-6" >
              <button class="nav-link" id="post" data-bs-toggle="pill" data-bs-target="#recuperacion" type="button" aria-selected="false">RECUPERACIÓN</button>
          </li>          
        </ul>
    </div>
  </div>

  <div class="input-group mb-3 divPrincipal"> 
    
    <div class="tab-content col-md-9" id=""> <!--Redirecciona al contenedor seleccionado, cargando la información del componente-->
        <div class="tab-pane fade show active" id="nota"><Nota /></div>
        <div class="tab-pane fade" id="recuperacion"><Recuperacion /></div>
    </div>

    <div class="col-2 divMenuLateralPrincipal"> <!--Menú lateral-->
      <div class="col-md-2 divMenuLateral">
        <RouterLink to="pre"><img src="images/pre.png" class="imgAjuste"/></RouterLink>
      </div>
      <div class="col-md-2 divMenuLateral">
        <RouterLink to="trans"><img src="images/trans.png" class="imgAjuste"/></RouterLink>
      </div>
      <div class="col-md-2 divMenuLateral">
       <img src="images/post.png" width="180" class="imgAjuste"/>
      </div>    
    </div>
  </div>
</template>

<script lang="ts">
import Nota from '../../components/post/Nota.vue';
import Recuperacion from "../../components/post/Recuperacion.vue";
export default ({
  components:{
    Recuperacion, Nota
  }
})
</script>

<style scoped>.divMenuLateral {
  margin-bottom: 6px; 
  margin-top: 6px;
  margin-left: 20px;
}
.divMenuLateralPrincipal {
  margin-top: 54px;
}
.divPrincipal {
  width: 110%;
}
.imgAjuste{
  width: 455%;
  height: auto;
}
</style>