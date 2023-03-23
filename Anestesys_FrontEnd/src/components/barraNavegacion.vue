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

          <div class="col-md-5 alinearElementoD">

          </div>
         
          <div class="col-md-2 text-white alinearElementoD">
            <img src="images/perfil.jpg" class="imgPerfil"/> {{ "Dr. García" }}
          </div>

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
            <div class="offcanvas-header">
              
              <button type="button"
                      class="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close">
              </button>
            </div>

            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a href="#">
                    <button class="btn btn-configuracion fw-bold"> Ver Perfil </button>
                  </a>
                </li> 
                
                <li class="nav-item">
                  <RouterLink to="medicamentos">
                    <button class="btn btn-configuracion fw-bold"> Medicamentos </button>
                  </RouterLink>
                </li>

                <li>
                  <button type="button"
                    class="btn btn-configuracion fw-bold"
                    data-bs-toggle="modal"
                    data-bs-target="#medicamentosModal"> Medicamentos! 
                  </button>
                </li>
                
                <li class="nav-item">
                  <a to="#">
                    <button class="btn btn-configuracion fw-bold"> Tendencias </button>
                  </a>
                </li>
                
                <li class="nav-item">
                  <a to="#">
                    <button class="btn btn-configuracion fw-bold"> Teclado </button>
                  </a>
                </li>

                <li class="nav-item">
                    <button class="btn btn-configuracion fw-bold"
                    @click="userStore.logout()"
                            > Salir </button>
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

          <div class="modal-dialog modal-lg modal-dialog-centered">
              <div class="modal-content colorModalMedicamentos">
                  
                <div class="modal-header">
                      <div class="col-12">
                          <div class="row g-3">
                            <div class="col-md-11">
                                <h5 class="text-white">MEDICAMENTOS</h5>
                                <h6 class="text-white">Gestión de medicamentos</h6>
                            </div>
                            
                            <div class="col-md-1 div-img">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                          </div>
                      </div>
                  </div>

                  <div class="input-group mb-3">
                    <div class="modal-body">
                      <div class="col-12">
                        <div class="row g-3">
                          <div class="col-md-4">
                                  <input type="text"
                                        class="form-control"
                                        v-model="nombreMedicamento"                                  
                                        placeholder="Nombre del medicamento">
                          </div>
                          <div class="col-md-8"></div>

                          <div class="col-md-4">
                                  <input type="text"
                                        class="form-control"
                                        v-model="codigoMedicamento"                                
                                        placeholder="Código de barras">
                          </div>
                          <div class="col-md-1">
                              <button type="button"
                                      class="btn btn-modal fw-bold"
                                      data-bs-dismiss="modal"> Agregar </button>
                          </div> 
                          <div class="col-md-7"></div>

                          <div class="col-md-12"> 
                            <div class="table-responsive">
                                <table class="table table-hover">
                                    
                                    <tbody>
                                        <tr>
                                            <td class="text-white">Paracetamol</td>
                                            <td class="text-white">7875468798</td>
                                            <td><i class="fa-solid fa fa-pen-to-square text-white"></i></td>
                                            <td><i class="fa-solid fa fa-xmark text-white"></i></td>
                                        </tr>
                                    </tbody>
                                </table>        
                            </div>
                          </div>

                        </div>
                      </div>   
                    </div>
                  </div>                  

                  <div class="modal-footer">
                    <div class="col-12">
                      <div class="row g-3">
                        <div class="col-md-4 div-img">
                          <button type="button"
                                  class="btn btn-modal fw-bold btn-modal"
                                  data-bs-dismiss="modal"> CANCELAR </button>
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

const userStore = useUserStore();

export default defineComponent({
  data() {
    return{
        userStore,
        nombreMedicamento:'',
        codigoMedicamento:''
    };
  },
  methods: {
    async mostrarMensaje(){
      swal.fire({
        html: 'Usuario registrado correctamente, consulte su correo electrónico',
        icon: 'info',
        showConfirmButton: true,
        showCloseButton: true,
        toast: true,
        position: 'top-start'
      });
    },
  }
})
</script>

<style>
.imgLogoBarra {
  width: 280px;
  height: auto;    
}
.imgPerfil {
  width: 75px;
  height: auto;   
  border-radius: 50px;   
}
.mt {
    margin-bottom: 2rem!important;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
.navbar-color{
  background-color: #002D60;
}
.btn-close {
    box-sizing: content-box;
    width: 1em;
    height: 1em;
    padding: 0.25em 0.25em;
    color: #fff;
    border: 0;
    border-radius: 0.375rem;
    opacity: .5;
}
.div-img {
  text-align: center;
}
.nav-config {
    top: 0;
    right: 0;
    width: 250px;
    background-color: #002D60;
    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
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
.alinearElementoD{
    align-self: center;
    text-align: right;
}
.alinearElementoI{
    align-self: center;
    text-align: left;
}
.estiloDropDown{
  width: 450px; height: 250px;
}
.colorModalMedicamentos{
  background-color: #002D60;
}
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
    width: 150px; 
    margin-bottom: 8px;
}
</style>