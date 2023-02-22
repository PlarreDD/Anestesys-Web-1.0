<template>
  <div>
    <div class="input-group mb-3">
      <div class="col-10 divform navbar-nav">              

          <ul class="nav nav-pills mb-3 text-center" id=""> <!--Lista para el menú principal-->
            <li class="nav-item col-md-6" >
                <button class="nav-link bold under active" id="post" data-bs-toggle="pill" data-bs-target="#nota" type="button" aria-selected="true">NOTA POST</button> <!--Se asigna el contenedor al que apuntara el elemento por medio de data-bs-target-->
            </li>
            <li class="nav-item col-md-6" >
                <button class="nav-link bold under" id="post" data-bs-toggle="pill" data-bs-target="#recuperacion" type="button" aria-selected="false">RECUPERACIÓN</button>
            </li>          
          </ul>
      </div>
    </div>

    <div class="input-group mb-3 bordePrincipal"> 
      
      <div class="tab-content col-md-9" id=""> <!--Redirecciona al contenedor seleccionado, cargando la información del componente-->
          <div class="tab-pane fade show active" id="nota"><nota /></div>
          <div class="tab-pane fade" id="recuperacion"><recuperacion /></div>
      </div>

      <div class="col-2 menuLateralPrincipal"> <!--Menú lateral-->
        <div class="col-md-2 menuLateral">
          <RouterLink to="pre"><img src="images/pre.png" class="ajusteImg"/></RouterLink>
        </div>
        <div class="col-md-2 menuLateral">
          <RouterLink to="trans"><img src="images/trans.png" class="ajusteImg"/></RouterLink>
        </div>
        <div class="col-md-2 menuLateral">
          <img src="images/post.png" width="180" class="ajusteImg"/>
        </div>    
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

<style scoped>
.menuLateral {
  margin-bottom: 6px; 
  margin-top: 4px;
  margin-left: 45px;
}
.menuLateralPrincipal {
  margin-top: 54px;
}
.bordePrincipal {
  width: 110%;
}
.ajusteImg{
  width: 455%;
  height: auto;
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
.bold {
    font-weight: bold;
}
.under {
    text-decoration: underline;
}
</style>