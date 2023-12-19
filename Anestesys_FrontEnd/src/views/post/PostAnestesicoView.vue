<template>
  <header @click.stop="replegarMenuVistaRapida">
    <barra-navegacion/>
  </header>
  <div class="margen-div-barra" @click.stop="replegarMenuVistaRapida" @mouseover="volverPestana">
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

    <!-- Cargar componentes -->
    <div class="input-group mb-3 bordePrincipal"> 
      <div class="tab-content col-md-9" id=""> <!--Redirecciona al contenedor seleccionado, cargando la información del componente-->
        <div class="tab-pane fade show active" id="nota">
            <nota ref="refNotaPA"/>
        </div>
        <div class="tab-pane fade" id="recuperacion">
          <recuperacion ref="refRecuperacion"/>
        </div>
      </div>

      <!--Menú lateral-->
      <div class="col-2 menuLateralPrincipal"> 
        <div class="col-md-2 menu-pre-trans" @click="guardarDatos()">
          <RouterLink to="pre">
            <img src="../../../public/images/pre.svg" class="ajusteImg"/>
          </RouterLink>
        </div>

        <div class="col-md-2 menu-pre-trans" @click="guardarDatos()">
          <RouterLink to="trans">
            <img src="../../../public/images/trans.svg" class="ajusteImg"/>
          </RouterLink>
        </div>

        <div class="col-md-2 menu-post">
          <img src="../../../public/images/post.svg" width="180" class="ajusteImg"/>
        </div>    

        <!-- Botón para subir -->
        <div class="container col-md-1">
          <button @click="topFunction()"
                  class="btn btn-arriba fw-bold"
                  id="btnArriba"
                  title="Go to top">
            <font-awesome-icon icon="fa-solid fa-angle-up" size="2xl" />
          </button>
        </div>
      </div>

      <!-- Menú vista rápida desplegada -->
      <div class=" text-center posicion-estatica-arriba fw-bold container col-md-9" :class="preIdStore.VistaRapida == true ? 'c-sticky' : 'invisible c-fixed'" @click.stop="replegarMenuVistaRapida()">
          <label class="form-label text-white fw-bold" :class="preIdStore.numeroExpediente == '' || preIdStore.numeroExpediente == undefined ? 'invisible':''"> 
            #Expediente: {{ preIdStore.numeroExpediente == '' || preIdStore.numeroExpediente == undefined ? '-': preIdStore.numeroExpediente}}
          </label>
        <div class="row columna-size-1 mb-4 mt-2">
          <div class="col borde-row">           
            <img class="img-vista-rapida-arriba" src="../../../public/images/imgIcon/paciente_cuadro.png">                              
            <label class="form-label text-white" :class="preIdStore.NombrePaciente == '' || preIdStore.NombrePaciente == undefined ? 'invisible':''"> 
              {{ preIdStore.NombrePaciente == '' || preIdStore.NombrePaciente == undefined ? '-': preIdStore.NombrePaciente }}
            </label>
            <br>
            <label class="form-label text-white" :class="preIdStore.edadPaciente == '' || preIdStore.edadPaciente == undefined ? 'invisible':''"> 
              {{ preIdStore.edadPaciente == '' || preIdStore.edadPaciente == undefined ? '-': preIdStore.edadPaciente }} años
            </label>
            &nbsp&nbsp&nbsp&nbsp&nbsp
            <label class="form-label text-white" :class="preIdStore.generoPaciente == '' || preIdStore.generoPaciente == undefined ? 'invisible':''"> 
              {{ preIdStore.generoPaciente == '' || preIdStore.generoPaciente == undefined ? '-': preIdStore.generoPaciente }}
            </label>
            &nbsp&nbsp&nbsp&nbsp&nbsp
            <label class="form-label text-white" :class="preIdStore.fechaNacimientoPaciente == '' || preIdStore.fechaNacimientoPaciente == undefined ? 'invisible':''"> 
              {{ preIdStore.fechaNacimientoPaciente == '' || preIdStore.fechaNacimientoPaciente == undefined ? '-': preIdStore.fechaNacimientoPaciente }}
            </label>
          </div>
          
          <div class="col">
            <img class="img-vista-rapida-arriba" src="../../../public/images/imgIcon/anestesiologo_cuadro.png">
            <label class="form-label text-white" :class="preIdStore.NombreAnestesiologo == '' || preIdStore.NombreAnestesiologo == undefined ? 'invisible':''">
              {{ preIdStore.NombreAnestesiologo == '' || preIdStore.NombreAnestesiologo == undefined ? '-': preIdStore.NombreAnestesiologo }}            
            </label>
          </div>
        </div>

        <div class="row columna-size-2">
          <div class="col borde-row"> 
            <img class="img-vista-rapida-arriba" src="../../../public/images/imgIcon/cirujano_cuadro.png">
            <label class="form-label text-white" :class="preIdStore.NombreCirujano == '' || preIdStore.NombreCirujano == undefined ? 'invisible':''">            
              {{ preIdStore.NombreCirujano == '' || preIdStore.NombreCirujano == undefined ? '-': preIdStore.NombreCirujano }}
            </label>
          </div>

          <div class="col"> 
            <img class="img-vista-rapida-arriba" src="../../../public/images/imgIcon/cirugia_cuadro.png">
            <label class="form-label text-white" :class="preIdStore.NombreCirugia == '' || preIdStore.NombreCirugia == undefined ? 'invisible':''">            
              {{ preIdStore.NombreCirugia == '' || preIdStore.NombreCirugia == undefined ? '-': preIdStore.NombreCirugia }}
            </label>
          </div>
        </div>                
      </div>
      
    </div>
    
    <!-- Menú vista rápida -->
    <div class="text-center posicion-estatica fw-bold container" :class="preIdStore.VistaRapida == false ? 'c-fixed' : 'c-fixed invisible'" @click.stop="desplegarMenuVistaRapida()">
      <div class="row">
        <div class="col bordeColumna">           
          <img class="img-vista-rapida" src="../../../public/images/imgIcon/paciente.png">          
          <label class="form-label text-white" :class="preIdStore.NombrePaciente == '' || preIdStore.NombrePaciente == undefined ? 'invisible': ''"> 
            {{ preIdStore.NombrePaciente == '' || preIdStore.NombrePaciente == undefined ? '-': 
               preIdStore.NombrePaciente.length > 30 ? preIdStore.NombrePaciente.substring(0,30) + '...' : preIdStore.NombrePaciente }}
          </label>
        </div>
        
        <div class="col">
          <img class="img-vista-rapida" src="../../../public/images/imgIcon/anestesiologo.png">
          <label class="form-label text-white" :class="preIdStore.NombreAnestesiologo == '' || preIdStore.NombreAnestesiologo == undefined ? 'invisible':''">
            {{ preIdStore.NombreAnestesiologo == '' || preIdStore.NombreAnestesiologo == undefined ? '-': 
               preIdStore.NombreAnestesiologo.length > 30 ? preIdStore.NombreAnestesiologo.substring(0,30) + '...' : preIdStore.NombreAnestesiologo }}    
          </label>
        </div>
        
        <div class="col bordeColumna"> 
          <img class="img-vista-rapida" src="../../../public/images/imgIcon/cirugia.png">
          <label class="form-label text-white" :class="preIdStore.NombreCirugia == '' || preIdStore.NombreCirugia == undefined ? 'invisible':''">            
            {{ preIdStore.NombreCirugia == '' || preIdStore.NombreCirugia == undefined ? '-' : 
               preIdStore.NombreCirugia.length > 30 ? preIdStore.NombreCirugia.substring(0, 30) + '...': preIdStore.NombreCirugia }}
          </label>
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
import { usePostAnestStore } from '@/stores/postAnest-store';
import { Tab } from 'bootstrap';

const preIdStore = usePreIdStore();
const postAnestStore = usePostAnestStore();

export default ({
  data(){
    return{
      esNotaP: false,
      esRecuperacion: false,

      preIdStore,
      postAnestStore,

      mostrarVistaRapida:false
    }
  },

  components:{
    Recuperacion, 
    Nota,
    BarraNavegacion
  },

  mounted: function() { // Llama el método despues de cargar la página
    this.validaSeleccionNota();
  },

  methods:{
    async volverPestana(){
      
      if(preIdStore.volverPost == true){
        const tabPost = document.getElementById('notaP-tab');
        const tabObj = new Tab(tabPost);
        tabObj.show();

        this.esNotaP=true;
        this.esRecuperacion=false;
        
        preIdStore.volverPost = false;

        const componenteNotaPA = await this.$refs.refNotaPA as InstanceType<typeof Nota>;
        await componenteNotaPA.volverPestana();

        const componenteRecuperacion = await this.$refs.refRecuperacion as InstanceType<typeof Recuperacion>;
        await componenteRecuperacion.volverPestana();
      }
    },
    
    async guardarDatos(){
      const componenteNotaPA = await this.$refs.refNotaPA as InstanceType<typeof Nota>;
      await componenteNotaPA.guardarDatosNotaPA();

      const componenteRecuperacion = await this.$refs.refRecuperacion as InstanceType<typeof Recuperacion>;
      await componenteRecuperacion.guardarDatosRecuperacion();
    },

    async validaSeleccionNota(){
      if(document.getElementById("notaP-tab").ariaSelected=="false"){
        this.esNotaP=false   
      }
      else
        this.esNotaP=true;
        this.esRecuperacion=false;

      const componenteNotaPA = await this.$refs.refNotaPA as InstanceType<typeof Nota>;
      await componenteNotaPA.guardarDatosNotaPA();

      const componenteRecuperacion = await this.$refs.refRecuperacion as InstanceType<typeof Recuperacion>;
      await componenteRecuperacion.guardarDatosRecuperacion();
    },

    async validaSeleccionRecuperacion(){
      if(document.getElementById("recuperacion-tab").ariaSelected=="false"){
        this.esRecuperacion=false  
      }
      else
        this.esNotaP=false;
        this.esRecuperacion=true;

      const componenteNotaPA = await this.$refs.refNotaPA as InstanceType<typeof Nota>;
      await componenteNotaPA.guardarDatosNotaPA();

      const componenteRecuperacion = await this.$refs.refRecuperacion as InstanceType<typeof Recuperacion>;
      await componenteRecuperacion.guardarDatosRecuperacion();
    },

    async desplegarMenuVistaRapida(){     
      preIdStore.VistaRapida=true
      this.mostrarVistaRapida=true
    },

    async replegarMenuVistaRapida(){ 
      if(this.mostrarVistaRapida=true)     
        preIdStore.VistaRapida=false
        this.mostrarVistaRapida=false
    },

    async topFunction() {
      document.body.scrollTop = 0; // Para safari
      document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
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
.c-fixed{
  position: fixed;
}
.c-sticky{
  position: sticky;
}
.posicion-estatica {
  bottom: 0;
  margin-top: 10px;  
  z-index: 1020;
  background-color: #002D60;
  padding: 1rem;
  border-radius: 5px !important;
  color: #ffffff;
  width: 57.5%;
  cursor: pointer;  
}
.img-vista-rapida{
  width: 35px;
  height: auto;
  float: left;
}
.posicion-estatica-arriba {
  bottom: 0;
  z-index: 1020;
  margin-top: 5px; 
  background-color: #002D60;
  padding: 1rem;
  border-radius: 5px !important;
  color: #ffffff;
  height: 30%;
  cursor: pointer
}
.img-vista-rapida-arriba{
  width: 60px;
  float: left;
}
.bordeColumna{
  margin-left: auto;
  margin-right: auto;
  border-right: 1px solid #ffffff;
  border-left: 1px solid #ffffff;  
}
.borde-row{
  margin-right: auto;
  border-right: 1px solid #ffffff;
}
.columna-size-1{
  height: 50%;
}
.columna-size-2{
  height: 40%;
}

/* Botón arriba */
.btn-arriba {
    display: none;  /*Oculto por defecto */
    position: fixed; /* Posición fija */
    bottom: 60px; /* Coloque el botón en la parte inferior de la página. */
    z-index: 99; /* Asegúrese de que no se superponga */  
    border-radius: 6px; /* Esquinas redondeadas */ 
    /* right: 340px; */
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