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
            <button class="btn btn-menu"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-controls="offcanvasNavbar">
              <i class="fa-solid fa-2x fa-bars"></i>
            </button>

            <form class="dropdown-menu p-5">
              <div class="mb-3 estiloDropDown input-group mb-3"></div>
            </form>            
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
              <h5 class="offcanvas-title fw-bold text-dark"
                  id="offcanvasNavbarLabel"> Configuración </h5>
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
                    <a href="/"><button class="btn btn-configuracion fw-bold"
                            >Salir </button></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
</template>

<script lang="ts">
// import { useUserStore } from "@/stores/user-store";
import { defineComponent } from "vue";

// const userStore = useUserStore();

export default defineComponent({
  data(){
    return{
      // userStore,
    };
  },
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
    margin-bottom: 3rem!important;
}
.navbar-color{
  background-color: #002D60;
}
.nav-config {
    top: 0;
    right: 0;
    width: 250px;
    background-color: #edeff3;
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
    --bs-btn-bg: #ffffff;
    --bs-btn-color: #002d60;    
    --bs-btn-border-color: #ced4da;
    --bs-btn-hover-bg: #ced4da;
    --bs-btn-hover-color: #002d60;
    --bs-btn-hover-border-color: #ced4da;          
    --bs-btn-active-bg: #ced4da;
    --bs-btn-active-color: #002d60;
    --bs-btn-active-border-color: #ced4da;   
    width: 150px; 
    margin-bottom: 8px;
}
</style>