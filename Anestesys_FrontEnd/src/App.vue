<template>
  <header>
    <div class="mt">
      <nav class="navbar navbar-color bold">                
        <div class="input-group">

          <div class="col-md-1"></div>

          <div class="col-md-2 alinearElementoI">
            <RouterLink class="" to="pre"><img src="images/logoA.png" class="imgLogo"/></RouterLink>
          </div>

          <div class="col-md-5"></div>
         
          <div class="col-md-2 text-white alinearElementoD">
            <img src="images/perfil.jpg" class="imgPerfil"/>Dr. Usuario 
          </div>

          <div class="col-md-1 alinearElementoD">
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#barraConfiguracion" aria-controls="offcanvasNavbar">
              <span class="navbar-toggler-icon"></span>
            </button> 
          </div>                    

          <div class="offcanvas nav-config" tabindex="-1" id="barraConfiguracion" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title bold text-dark" id="offcanvasNavbarLabel">Configuración</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">                
                <li class="nav-item">
                  <RouterLink class="nav-link bold" to="medicos">Médicos</RouterLink>
                </li>  
                <li class="nav-item">
                  <RouterLink class="nav-link bold" to="medicamentos">Medicamentos</RouterLink>
                </li>    
                <li class="nav-item">
                  <RouterLink class="nav-link bold" to="">Tendencias</RouterLink>
                </li>                  
                <li class="nav-item">
                  <RouterLink class="nav-link bold" to="">Teclado</RouterLink>
                </li>   
                <li class="nav-item">
                  <RouterLink class="nav-link bold" to="/">Salir</RouterLink>
                </li>           
              </ul>              
            </div>
          </div>

        </div>
      </nav>
    </div>

    <div class="container mt-3">
      <RouterView v-slot="{Component}"> <!--Mantener los datos en las páginas al cambiar de vista-->
        <transition>
          <keep-alive> 
            <component :is="Component" />
          </keep-alive>
        </transition>
      </RouterView>
    </div>
  </header>  
  
</template>

<style scoped>
.imgLogo{
  width: 280px;
  height: auto;    
}
.imgPerfil{
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
.nav-content{
  /* display: flex; */
  align-items: center;
  justify-content: space-between;
}
.navbar-toggler {
    padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
    font-size: var(--bs-navbar-toggler-font-size);
    line-height: 1;
    color: #ced4da;
    background-color: #F5F8FC;
    border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
    border-radius: var(--bs-navbar-toggler-border-radius);
    transition: var(--bs-navbar-toggler-transition);
}
.nav-config{
    top: 0;
    right: 0;
    width: 300px;
    background-color: #edeff3;
    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(100%);    
}
.bold {
    font-weight: bold;
}
.alinearElementoD{
    align-self: center;
    text-align: right;
}
.alinearElementoI{
    align-self: center;
    text-align: left;
}
</style>