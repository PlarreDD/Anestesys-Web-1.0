<template>
  <div class="mt" id="headerP">
    <nav class="navbar navbar-color fw-bold">
      <div class="input-group">
        <div class="col-md-1"></div>

        <div class="col-md-2 alinearElementoI">
          <RouterLink class="" to="pre">
            <img src="images/logoA.png" class="imgLogoBarra"/>
          </RouterLink>
        </div>

        <div class="col-md-5"></div>
        
        <div class="col-md-2 text-white alinearElementoD">
          <img src="images/perfil.jpg" class="imgPerfil"/> {{ "Dr. García" }}
        </div>

        <!-- Menú de configuración -->
        <div class="col-md-1 alinearElementoD">
          <button class="btn btn-menu"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#barraConfiguracion"
                  aria-controls="offcanvasNavbar">
            <i class="fa-solid fa-2x fa-ellipsis"></i>
          </button>
        </div>

        <div class="offcanvas nav-config"
              tabindex="-1"
              id="barraConfiguracion"
              aria-labelledby="offcanvasNavbarLabel">

          <div class="offcanvas-header"></div>

          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li>
                <button type="button"
                        class="btn btn-configuracion fw-bold"
                        data-bs-toggle="modal"
                        data-bs-target="#medicamentosModal" >
                  <i class="fa-solid fa fa-pills"></i> Medicamentos
                </button>
              </li>
              
              <li>
                <button type="button"
                        class="btn btn-configuracion fw-bold"
                        data-bs-toggle="modal"
                        data-bs-target="#monitorModal">
                  <i class="fa-solid fa fa-tv"></i> Configuración de monitor
                </button>
              </li>
              
              <li>
                <button type="button"
                        class="btn btn-configuracion fw-bold"
                        data-bs-toggle="modal"
                        data-bs-target="#tendenciasModal">
                  <i class="fa-solid fa fa-file-waveform"></i> Tendencias
                </button>
              </li>

              <li>
                <button type="button"
                        class="btn btn-configuracion fw-bold"
                        data-bs-toggle="modal"
                        data-bs-target="#tecladoModal">
                  <i class="fa-solid fa fa-keyboard"></i> Teclado virtual
                </button>
              </li>

              <li class="nav-item">
                <button class="btn btn-configuracion fw-bold"
                        @click="userStore.logout()">
                  <i class="fa-solid fa-right-from-bracket fa-rotate-180"></i> Salir 
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <!-- Modal medicamentos -->
    <div class="modal"
          id="medicamentosModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">

      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content colorModalMedicamentos">
          <div class="modal-header">
            <div class="col-12">
              <div class="row g-3">
                <div class="col-md-11">
                    <h5 class="text-white fw-bold">MEDICAMENTOS</h5>
                    <h6 class="text-white fw-bold">Gestión de medicamentos</h6>
                </div>
                
                <div class="col-md-1 div-img">
                    <button type="button" 
                            class="btn fw-bold" 
                            data-bs-dismiss="modal" 
                            aria-label="Close">
                      <i class="fa-solid fa-2x fa-xmark text-white"></i>
                    </button>
                </div>
              </div>
            </div>
          </div>

          <div class="input-group mb-3">
            <div class="modal-body">
              <div class="col-md-12">
                <div class="row g-3">
                  <form class="row g-3" @submit.prevent="">
                    <div class="col-md-4">
                      <input type="text"
                            class="form-control"                           
                            v-model="infoMedicamento.nombreMedicamento"                                  
                            placeholder="Nombre del medicamento">
                            <!-- :class="medicamentoNuevo == true ? 'border border-danger' : 'border border-success'" -->
                    </div>
                    <div class="col-md-8"></div>

                    <div class="col-md-4">
                      <input type="text"
                            class="form-control"
                            v-model="infoMedicamento.codigoMedicamento"                                
                            placeholder="Código de barras">
                    </div>

                    <div class="col-md-1"></div>
                    <div class="col-md-1">
                      <template v-if="editar === false">
                        <button  type="button"
                              class="btn btn-modal-medicamentos fw-bold"
                              @click="agregaMedicamento()"> Agregar </button>
                      </template>
                      <template v-else>
                        <button type="button"
                              class="btn btn-modal-medicamentos fw-bold"
                              @click=""> Actualizar </button>
                      </template>
                    </div>
                  </form>

                  <div class="col-md-12"> 
                    <div class="deslizar">
                      <table class="table table-responsive">
                        <tbody>
                          <tr v-for="medicamento in medStore.medicamentos">
                            <td class="text-white">{{ medicamento._id }}</td>
                            <td class="text-white">{{ medicamento.nombreMedicamento }}</td>
                            <td class="text-white">{{ medicamento.codigoMedicamento }}</td>                            
                            <td><button class="btn" @click="cambiarBtnActualizar()"><i class="fa-solid fa-pen-to-square text-white"></i></button></td>
                            <td><button class="btn" @click="eliminarMedicamento()"><i class="fa-solid fa-trash text-white"></i></button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useUserStore } from "@/stores/user-store";
import { defineComponent } from "vue";
import swal from 'sweetalert2';
import { useMedicamentoStore } from '../stores/medicamento-store';
import type { regMedicamento } from '@/interfaces/regMedicamento';

const userStore = useUserStore();
const medStore= useMedicamentoStore();

export default defineComponent({
  data() {
    return{
        userStore,
        medStore,
        infoMedicamento: {} as regMedicamento,
        medicamentoNuevo: false,
        editar: false
    };
  },

  mounted() {
    medStore.getMedicamentosList();
  },

  methods: {
    async mostrarMensaje(){
      swal.fire({
        title: 'Usuario registrado correctamente, consulte su correo electrónico',
        icon: 'info',
        showConfirmButton: true,
        showCloseButton: true,
        toast: true,
        position: 'top-start'
      });
    },
    async agregaMedicamento(){
      if(this.infoMedicamento.nombreMedicamento == undefined || this.infoMedicamento.nombreMedicamento == ''){
        
        this.medicamentoNuevo=true

        swal.fire({
            title: 'Ingrese el nombre del medicamento',
            icon: 'warning',
            showConfirmButton: false,
            showCloseButton: true,
            toast: true,
            timer: 2500,
            timerProgressBar: true,
            position: 'top-end'
        });       
      }
      else{
        this.medicamentoNuevo=false
        medStore.createMedicamento(this.infoMedicamento)
      }
    },
    async cambiarBtnActualizar(){
      this.editar=true
    },
    async eliminarMedicamento(){   
      medStore.deleteMedicamento(this.infoMedicamento)   
    }
  }
})
</script>

<style>
/* Barra navegación */
.nav-config {
    top: 0;
    right: 0;
    width: 300px;
    background-color: #002D60;
    border-bottom-left-radius: 50px!important;
    transform: translateX(100%);
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
.mt {
    margin-bottom: 2rem!important;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
.div-img {
  text-align: center;
}
.imgLogoBarra {
  width: 280px;
  height: auto;    
}
.imgPerfil {
  width: 75px;
  height: auto;   
  border-radius: 50px;   
}
.navbar-color{
  background-color: #002D60;
}
.alinearElementoI{
    align-self: center;
    text-align: left;
}
.alinearElementoD{
    align-self: center;
    text-align: right;
}
/* Botones */
.btn-menu {    
  --bs-btn-bg: #002d60;
  --bs-btn-color: #ffffff;    
  --bs-btn-border-color: #002d60;
  --bs-btn-hover-bg: #002d60;
  --bs-btn-hover-color: #ffffff;
  --bs-btn-hover-border-color: #002d60;          
  --bs-btn-active-bg: #002d60;
  --bs-btn-active-color: #ffffff;
  --bs-btn-active-border-color: #002d60;  
}
.btn-configuracion {
  --bs-btn-bg: #002d60;
  --bs-btn-color: #fff;    
  --bs-btn-border-color: #002d60;
  --bs-btn-hover-bg: #002d60;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-border-color: #002d60;          
    --bs-btn-active-bg: #002d60;
    --bs-btn-active-color: #fff;
    --bs-btn-active-border-color: #002d60;   
    width: 280px; 
    margin-bottom: 8px;
    text-align: left;
    padding: 20px;
  }
  .btn-modal-medicamentos {
    --bs-btn-bg: #ffffff; 
    --bs-btn-color: #002D60;    
    --bs-btn-border-color: #ffffff;
    --bs-btn-hover-bg: #ffffff;
    --bs-btn-hover-color: #002D60;
    --bs-btn-hover-border-color: #ffffff;          
    --bs-btn-active-bg: #002D60;
    --bs-btn-active-color: #ffffff;
    --bs-btn-active-border-color: #ffffff;  
    width: 130px;     
}
/* Modal medicamentos */
.colorModalMedicamentos{
  background-color: #002D60;
}
.deslizar {
  overflow:scroll;
  overflow-x: hidden;
  height:200px;
}
</style>