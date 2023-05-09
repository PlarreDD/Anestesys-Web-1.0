<template>
  <header>
    <barra-navegacion/>
  </header>
  <div class="margen-div-barra">
    <div class="input-group mb-3">
      <div class="col-md-6">
        <input class="form-control me-2"
               type="search"
               placeholder="Buscar número de expediente..."
               aria-label="Buscar"> <!--Buscador-->
      </div>
    </div>

    <div class="input-group mb-3">
      <div class="col-9 divform navbar-nav">
        <!--Lista para el menú principal-->
        <ul class="nav text-center" id="">
          <li class="col-md-3">
            <button type="button"
                    class="btn btn-outline-secondary fw-bold"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"> GRID ANESTÉSICO </button>
            <!--Botón para abrir el dropdown-->
            <form class="dropdown-menu p-5">
              <div class="mb-3 estiloDropDown input-group mb-3"></div>
            </form>
          </li>

          <li class="col-md-3">
              <button type="button"
                      class="btn btn-outline-secondary fw-bold"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-auto-close = "outside"> TÉCNICA ANESTÉSICA </button>

              <form class="dropdown-menu p-5">
                <div class="mb-3 estiloDropDownTecnica row g-3">
                  <div class="form-check col-md-4">
                    <input class="form-check-input"
                            type="checkbox"
                            value=""
                            id="checkTecnica">
                    <label class="form-check-label fw-bold"
                            for="checkTecnica"> Local </label>
                  </div>

                  <div class="form-check col-md-4">
                    <input class="form-check-input"
                            type="checkbox"
                            value=""
                            id="checkTecnica">
                    <label class="form-check-label fw-bold"
                            for="checkTecnica"> Sedación </label>
                  </div>

                  <div class="form-check col-md-4">
                    <input class="form-check-input"
                            type="checkbox"
                            value=""
                            id="checkTecnica">
                    <label class="form-check-label fw-bold"
                            for="checkTecnica"> General balanceada </label>
                  </div>
                  
                  <div class="form-check col-md-4">
                    <input class="form-check-input"
                            type="checkbox"
                            value=""
                            id="checkTecnica">
                    <label class="form-check-label fw-bold"
                            for="checkTecnica"> TIVA (Anestesia total intravenosa) </label>
                  </div>

                  <div class="form-check col-md-4">
                    <input class="form-check-input"
                            type="checkbox"
                            value=""
                            id="checkTecnica">
                    <label class="form-check-label fw-bold" for="checkTecnica">Multimodal</label>
                  </div>
                  <div class="form-check col-md-4">
                    <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                    <label class="form-check-label fw-bold" for="checkTecnica">Bloqueo mixto</label>
                  </div>
                  <div class="form-check col-md-4">
                    <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                    <label class="form-check-label fw-bold" for="checkTecnica">Bloqueo peridural lumbar</label>
                  </div>
                  <div class="form-check col-md-4">
                    <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                    <label class="form-check-label fw-bold" for="checkTecnica">Bloqueo peridural caudal</label>
                  </div>
                  <div class="form-check col-md-4">
                    <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                    <label class="form-check-label fw-bold" for="checkTecnica">Bloqueo espinal</label>
                  </div>
                  <div class="form-check col-md-4">
                    <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                    <label class="form-check-label fw-bold" for="checkTecnica">Bloqueo de plexo</label>
                  </div>
                  <div class="form-check col-md-4">
                    <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                    <label class="form-check-label fw-bold" for="checkTecnica">Bloqueo troncular</label>
                  </div>
                  <div class="form-check col-md-4">
                    <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                    <label class="form-check-label fw-bold" for="checkTecnica">Bloqueo peridural torácico</label>
                  </div>
                  <div class="form-check col-md-4">
                    <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                    <label class="form-check-label fw-bold" for="checkTecnica">Bloqueo peridural cervical</label>
                  </div>
                  <div class="form-check col-md-4">
                    <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                    <label class="form-check-label fw-bold" for="checkTecnica">Libre de opioides</label>
                  </div>
                </div>
              </form>
          </li>

          <li class="col-md-3">
            <button type="button" class="btn btn-outline-secondary fw-bold" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">BALANCE HIDRICO</button>
            <form class="dropdown-menu p-5">
              <div class="mb-3 estiloDropDownBalance input-group mb-3">
                <h6 class="col-md-12 fw-bold">INGRESOS</h6>

                <div class="col-md-3 centrarLabel">
                  <label for="" class="form-label fw-bold">Solución Hartman(ml):</label>
                </div>
                <div class="col-md-1 ">
                  <input class="form-control" type="text" id="">
                </div>                        
                <div class="col-md-3 centrarLabel">
                  <label for="" class="form-label fw-bold">Solución fisiológica(ml):</label>
                </div>
                <div class="col-md-1">
                  <input class="form-control" type="text" id="">
                </div>
                <div class="col-md-3 centrarLabel">
                  <label for="" class="form-label fw-bold">Glucosados(ml):</label>
                </div>
                <div class="col-md-1">
                  <input class="form-control" type="text" id="">
                </div>
                
                <div class="col-md-3 centrarLabel">
                  <label for="" class="form-label fw-bold">Gelatinas(ml):</label>
                </div>
                <div class="col-md-1">
                  <input class="form-control" type="text" id="">
                </div>
                <div class="col-md-3 centrarLabel">
                  <label for="" class="form-label fw-bold">Almidones(ml):</label>
                </div>
                <div class="col-md-1">
                  <input class="form-control" type="text" id="">
                </div>                      
                <div class="col-md-3 centrarLabel">
                  <label for="" class="form-label fw-bold">Albúminas(ml):</label>
                </div>
                <div class="col-md-1">
                  <input class="form-control" type="text" id="">
                </div>

                <div class="col-md-3 centrarLabel">
                  <label for="" class="form-label fw-bold">Paquete globular(ml):</label>
                </div>
                <div class="col-md-1">
                  <input class="form-control" type="text" id="">
                </div>                     
                <div class="col-md-3 centrarLabel">
                  <label for="" class="form-label fw-bold">Plasmas(ml):</label>
                </div>
                <div class="col-md-1">
                  <input class="form-control" type="text" id="">
                </div>
                <div class="col-md-3 centrarLabel">
                  <label for="" class="form-label fw-bold">Plaquetas(ml):</label>
                </div>
                <div class="col-md-1">
                  <input class="form-control" type="text" id="">
                </div>

                <div class="col-md-3 centrarLabel">
                  <label for="" class="form-label fw-bold">Crioprecipitados(ml):</label>
                </div>
                <div class="col-md-1">
                  <input class="form-control" type="text" id="">
                </div>
                <div class="col-md-3 centrarLabel">
                  <label for="" class="form-label fw-bold">Factor VII(ml):</label>
                </div>
                <div class="col-md-1">
                  <input class="form-control" type="text" id="">
                </div>
                <div class="col-md-3 centrarLabel">
                  <label for="" class="form-label fw-bold">Factor VIII(ml):</label>
                </div>
                <div class="col-md-1">
                  <input class="form-control" type="text" id="">
                </div>

                <div class="col-md-3 centrarLabel">
                  <label for="" class="form-label fw-bold">Otros:</label>
                </div>
                <div class="col-md-1">
                  <input class="form-control" type="text" id="">
                </div>

                <h6 class="col-md-12 fw-bold">EGRESOS</h6>

                <div class="col-md-3 centrarLabel">
                  <label for="" class="form-label fw-bold">Liquídos de ascitis(ml):</label>
                </div>
                <div class="col-md-1">
                  <input class="form-control" type="text" id="">
                </div>
                <div class="col-md-3 centrarLabel">
                  <label for="" class="form-label fw-bold">Sangrado aproximado(ml):</label>
                </div>
                <div class="col-md-1">
                  <input class="form-control" type="text" id="">
                </div>
                <div class="col-md-3 centrarLabel">
                  <label for="" class="form-label fw-bold">Uresis(ml):</label>
                </div>
                <div class="col-md-1">
                  <input class="form-control" type="text" id="">
                </div>

                <div class="col-md-3 centrarLabel">
                  <label for="" class="form-label fw-bold">Otros:</label>
                </div>
                <div class="col-md-1">
                  <input class="form-control" type="text" id="">
                </div>
              </div>
            </form>
          </li>

          <!-- Datos del ventilador -->
          <li class="col-md-3">
            <button type="button" class="btn btn-outline-secondary fw-bold" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">DATOS DEL VENTILADOR</button>
            <form @submit.prevent="" class="dropdown-menu p-4 color-dropdown">
              <div class="mb-3 estiloDropDownVentilador row g-3">
                <h5 class="text-white fw-bold">VENTILADOR</h5>
                <!-- Modos de Ventilación -->
                <div class="col-md-9">
                  <label for="inputState" class="form-label fw-bold text-white">Modos de ventilación</label>
                  <select id="inputState"
                          v-model="menuTrans.modosVentilacion"
                          class="form-select">
                    <option selected>Seleccione...</option>
                    <option>Control volumen</option>
                    <option>Control presión</option>
                    <option>Presión soporte</option>
                    <option>SIMV-VC+PSV</option>
                    <option>SIMV-PC+PSV</option>
                    <option>Ventilación control presión con volumen garantizado</option>
                  </select>
                </div>
                <!-- PEEP -->
                <div class="col-md-3">
                  <label class="form-label fw-bold text-white">PEEP</label>
                  <input type="text"
                          class="form-control" 
                          v-model="menuTrans.peep">
                </div>
                <!-- VIT -->
                <div class="col-md-3">
                  <label class="form-label fw-bold text-white">VT</label>
                  <input type="text"
                          class="form-control"
                          v-model="menuTrans.vt">
                </div>
                <!-- Frecuencia Respiratoria -->
                <div class="col-md-3">
                  <label class="form-label fw-bold text-white">Frec. Resp</label>
                  <input type="text"
                          class="form-control"
                          v-model="menuTrans.frecResp"> 
                </div>
                <!-- I:E -->
                <div class="col-md-3">
                  <label class="form-label fw-bold text-white">I:E</label>
                  <input type="text"
                          class="form-control"
                          v-model="menuTrans.IE"> 
                </div>
                <!-- Presión Límite -->
                <div class="col-md-3">
                  <label class="form-label fw-bold text-white">P. Límite</label>
                  <input type="text"
                          class="form-control"
                          v-model="menuTrans.PLimite"> 
                </div>

                <div class="col-md-9"></div>

                <!-- Botón Guardar/Agregar -->
                <div class="col-md-1 btn-abajo">                                    
                    <template v-if="btnAddVentilador === true">
                        <button class="btn btn-guardar fw-bold text-white"
                            @click="guardarDatosV">
                            <font-awesome-icon icon="fa-solid fa-square-plus" size="2xl"/>
                        </button>
                    </template>

                    <template v-if="btnUpdateVentilador === true">
                        <button class="btn btn-guardar fw-bold text-white"
                            @click="">
                            <font-awesome-icon icon="fa-solid fa-square-plus" size="2xl"/>
                        </button>
                    </template>  

                    <template v-if="btnActualizaVentilador === true">
                        <button class="btn btn-guardar fw-bold text-white"
                            @click="">
                            <font-awesome-icon icon="fa-solid fa-square-plus" size="2xl"/>
                        </button>
                    </template>  
                </div>

                <!-- Lista Modo de Ventilación -->
                <div class="table-responsive">
                  <div class="deslizar">
                    <table class="table table-responsive text-white">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Hora</th>
                          <th>Modo de ventilación</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>

                      <tbody v-for="( ventilador ) in transAnestStore.datosVentilacion">
                        <tr v-for="(datoVentilacion, index) in ventilador.datosVentilador">
                          <td>{{ index + 1 }}</td>
                          <td>{{ datoVentilacion.Hr }}</td>
                          <td>{{ datoVentilacion.modosVentilacion }}</td>
                          <!-- Botón Editar -->
                          <td>
                            <button class="btn">
                              <font-awesome-icon 
                                icon="fa-solid fa-pen-to-square" 
                                size="lg" 
                                class="text-white"/>
                            </button>
                          </td>
                          <!-- Botón Eliminar -->
                          <td>
                            <button class="btn">
                              <font-awesome-icon 
                                icon="fa-solid fa-trash" 
                                size="lg" class="text-white"/>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </form>
          </li>
        </ul>
      </div>

      <div class="col-1 fw-bold">
        <select id="inputState" class="form-select ">
          <option>1</option>
          <option>2</option>
          <option>5</option>
          <option>10</option>
          <option>15</option>
        </select>
      </div>

      <div class="col-2 fw-bold">
        <div class="centrarLabel">
          <h4><span id="clock"></span></h4>
        </div>
      </div>
    </div>

    <div class="input-group mb-3 bordePrincipal">
        <div class="tab-content col-md-9" id="">
          <div class="row g-3">
            <table class="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>00:00</th>
                  <th>00:00</th>
                  <th>00:00</th>
                  <th>00:00</th>
                  <th>00:00</th>
                  <th>00:00</th>
                  <th>00:00</th>
                  <th>00:00</th>
                  <th>00:00</th>
                  <th>00:00</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>

        <div class="col-2 menuLateralPrincipal"> <!--Menú lateral-->

          <div class="col-md-2 menu-pre-post">
            <RouterLink to="pre"><img src="images/pre.svg" class="ajusteImg"/></RouterLink>

          </div>

          <div class="col-md-2 menu-trans">
            <img src="images/trans.svg" class="ajusteImg"/>

          </div>

          <div class="col-md-2 menu-pre-post">
            <RouterLink to="post"><img src="images/post.svg" class="ajusteImg"/></RouterLink>

          </div>
        </div>

        <div class=" text-center posicionEstatica fw-bold">
          <div class="row">
            <div class="col bordeColumna">
              <label class="form-label text-white">
                {{  }}
              </label>
            </div>

            <div class="col bordeColumna">
              {{  }}
            </div>

            <div class="col bordeColumna">
              {{  }}
            </div>
          </div>
        </div>
    </div>

  </div>
</template>

<script lang="ts">
import type { regMenuTrans } from "@/interfaces/regTransAnest";
import BarraNavegacion from "../../components/barraNavegacion.vue";
import { useTransAnestStore } from "../../stores/transAnest-store";
import { usePreIdStore } from "@/stores/preId-store";

const preIdStore = usePreIdStore();
const transAnestStore = useTransAnestStore();

export default({
  data() {
    return {
      menuTrans: {} as regMenuTrans,
      transAnestStore,

      btnAddVentilador:true,
      btnUpdateVentilador:false,
      btnActualizaVentilador:false,
    }
  },

  components:{
    BarraNavegacion
  },

  mounted: function() { // Llama el método despues de cargar la página
      this.mueveReloj();
      transAnestStore.listDatosV(preIdStore.pacienteID._id);
  },

  methods: {
      async mueveReloj() {
        const clock: HTMLSpanElement = document.getElementById('clock');

        setInterval(()=> {
          const date: Date = new Date();
          clock.innerText = date.toLocaleTimeString('es-MX', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          });
        }, 1000);
      },

      async guardarDatosV() {
        this.btnActualizaVentilador=true

        this.btnAddVentilador=false
        this.btnUpdateVentilador=true
        this.btnActualizaVentilador=false

        this.menuTrans.Hr = document.getElementById('clock').textContent;
        await transAnestStore.saveDatosV(this.menuTrans, preIdStore.pacienteID._id);

        this.menuTrans.modosVentilacion = "";
        this.menuTrans.Hr = "";
        this.menuTrans.IE = "";
        this.menuTrans.PLimite = "";
        this.menuTrans.frecResp = "";
        this.menuTrans.peep = "";
        this.menuTrans.vt = "";

        await transAnestStore.listDatosV(preIdStore.pacienteID._id);
      },
  }
})
</script>

<style scoped>
.margen-div-barra{
  margin-top: 120px;
}
.menuLateralPrincipal {
    margin-top: 11px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}
.menu-trans {  
  width: 200px;
  height: auto;
  background-color: #E88300;
  padding: 0rem;
  border-radius: 10px;
  margin-left: 47px;
  text-align: center;
}
.menu-pre-post {  
  width: 200px;
  height: auto;
  background-color: #d6d6d6;
  padding: 0rem;
  border-radius: 10px;
  margin-left: 47px;
  text-align: center;
}
.menu-pre-post:hover{
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
.centrarLabel{
  text-align: center;
}
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
.estiloDropDown{
  width: 450px; height: 250px;
}
.estiloDropDownTecnica{
  width: 450px; height: auto;
}
.estiloDropDownBalance{
  width: 600px; height: 400px;
}
.estiloDropDownVentilador{
  width: 650px; height: auto;
}
.color-dropdown {
  background-color: #002d60;
}
.btn-dropdown {
  --bs-btn-bg: #ffffff;
  --bs-btn-color: #002d60;
  --bs-btn-border-color: #ffffff;
  --bs-btn-hover-bg: #ffffff;
  --bs-btn-hover-color: #002d60;
  --bs-btn-hover-border-color: #ffffff;
  --bs-btn-active-bg: #002d60;
  --bs-btn-active-color: #ffffff;
  --bs-btn-active-border-color: #ffffff;
  width: 150px;
}
.deslizar {
  overflow: scroll;
  overflow-x: hidden;
  height: 150px;
  margin-top: 15px;
}
</style>