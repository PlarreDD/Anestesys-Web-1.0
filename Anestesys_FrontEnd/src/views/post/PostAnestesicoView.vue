<template>
  <header>
    <barra-navegacion/>
  </header>
  <div class="margen-div-barra">
    <div class="input-group mb-3">

      <div class="col-10 divform navbar-nav">     

        <ul class="nav nav-pills nav-fill mb-3 text-center centrar-li fw-bold" id=""> <!--Lista para el menú principal-->
          <li class="nav-item col-md-6" >
            <button :class="esNotaP == true ? 'btn-barra-act fw-bold active' : 'btn-barra-des fw-bold'"
                    id="notaP-tab"
                    href="#nota"
                    data-bs-toggle="tab"
                    type="submit"
                    aria-selected="true"
                    @click="validaSeleccionNota()"> NOTA POST </button>
            <!--Se asigna el contenedor al que apuntara el elemento por medio de data-bs-target-->
          </li>
          
          <li class="nav-item col-md-6" >
              <button :class="esRecuperacion == true ? 'btn-barra-act fw-bold active' : 'btn-barra-des fw-bold'" 
                      id="recuperacion-tab" 
                      href="#recuperacion"
                      data-bs-toggle="tab" 
                      type="submit" 
                      aria-selected="false"
                      @click="validaSeleccionRecuperacion()">RECUPERACIÓN</button>
          </li>          
        </ul>
      </div>

    </div>

    <div class="input-group mb-3 bordePrincipal"> 
      <div class="tab-content col-md-9" id=""> <!--Redirecciona al contenedor seleccionado, cargando la información del componente-->
        <div class="tab-pane fade show active" id="nota">
            <nota />
          </div>
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

      <div class=" text-center posicionEstatica fw-bold">
        <div class="row">
          <div class="col bordeColumna">
            <label class="form-label text-white">              
              {{ preIdStore.NombrePaciente }}
            </label>
          </div>
          
          <div class="col bordeColumna">
            <label class="form-label text-white">              
              {{ preIdStore.NombreCirujano }}
            </label>
          </div>
          
          <div class="col bordeColumna">
            <label class="form-label text-white">              
              {{ preIdStore.NombreCirugia }}
            </label>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Nota from '../../components/post/Nota.vue';
import Recuperacion from "../../components/post/Recuperacion.vue";
import BarraNavegacion from "../../components/barraNavegacion.vue";
import { usePreIdStore } from "../../stores/preId-store";

const preIdStore = usePreIdStore();

export default ({
  data(){
    return{
      esNotaP: false,
      esRecuperacion: false,

      preIdStore
    }
  },

  components:{
    Recuperacion, 
    Nota,
    BarraNavegacion
  },

  mounted: function() { // Llama el método despues de cargar la página
    this.validaSeleccionNota()
  },

  methods:{
    async validaSeleccionNota(){
      if(document.getElementById("notaP-tab").ariaSelected=="false"){
        this.esNotaP=false   
      }
      else
        this.esNotaP=true;
        this.esRecuperacion=false;
    },

    async validaSeleccionRecuperacion(){
      if(document.getElementById("recuperacion-tab").ariaSelected=="false"){
        this.esRecuperacion=false  
      }
      else
        this.esNotaP=false;
        this.esRecuperacion=true;
    },
  }
})
</script>

<style scoped>
.margen-div-barra{
  margin-top: 120px;
}
.menuLateralPrincipal {
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
.menu-post {  
  width: 200px;
  height: auto;
  background-color: #E88300;
  padding: 0rem;
  border-radius: 10px;
  margin-left: 28px;
  text-align: center;
}
.menu-pre-trans {  
  width: 200px;
  height: auto;
  background-color: #d6d6d6;
  padding: 0rem;
  border-radius: 10px;
  margin-left: 28px;
  text-align: center;
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
  width: 110%;
}
.centrar-li{
  justify-content: center; 
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
.margen-busca{
  margin-bottom: 15px;
}

/* Menú estatico */
.posicionEstatica {
  position: -webkit-sticky;
  position: fixed;
  bottom: 0;
  z-index: 1020;
  background-color: #002D60;
  padding: 1rem;
  border-radius: 5px !important;
  color: #ffffff;
  width: 57.5%;
}
.bordeColumna{
  margin-left: auto;
  margin-right: auto;
  border-right: 1px solid #ffffff;
  border-left: 1px solid #ffffff;
}
</style>