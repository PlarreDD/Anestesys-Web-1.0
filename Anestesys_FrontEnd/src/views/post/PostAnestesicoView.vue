<template>
  <div>
    <div class="input-group mb-3">
      <div class="col-10 divform navbar-nav">              
        <ul class="nav nav-pills mb-3 text-center" id=""> <!--Lista para el menú principal-->
          <li class="nav-item col-md-6" >
            <button class="nav-link bold under active"
                    id="post"
                    data-bs-toggle="pill"
                    data-bs-target="#nota"
                    type="button"
                    aria-selected="true"> NOTA POST </button>
            <!--Se asigna el contenedor al que apuntara el elemento por medio de data-bs-target-->
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
        <div class="col-md-2 menu-pre-trans">
          <RouterLink to="pre">
            <img src="images/pre.svg" class="ajusteImg"/>
          </RouterLink>
        </div>

        <div class="col-md-2 menu-pre-trans">
          <RouterLink to="trans">
            <img src="images/trans.svg" class="ajusteImg"/>
          </RouterLink>
        </div>

        <div class="col-md-2 menu-post">
          <img src="images/post.svg" width="180" class="ajusteImg"/>
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
.menuLateralPrincipal {
  margin-top: 47px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
.menu-post {  
  width: 185px;
  height: 185px;
  background-color: #E88300;
  padding: 1rem;
  border-radius: 10px;
  margin-left: 47px;
}
.menu-pre-trans {  
  width: 185px;
  height: 185px;
  background-color: #d6d6d6;
  padding: 1rem;
  border-radius: 10px;
  margin-left: 47px;
}
.menu-pre-trans:hover{
  background-color: #E88300;
  transition: background-color 0.2s ease-in-out;
}
.ajusteImg{
  width: 100%;
  height: 100%;
}
.bordePrincipal {
  width: 108%;
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