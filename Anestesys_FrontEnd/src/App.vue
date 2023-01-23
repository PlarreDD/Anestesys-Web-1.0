<template>
  <header>
    <div class="container mt-3">
      <nav class="navbar">        
        
        <div class="container-fluid">
          <RouterLink to="/"><img src="images/logoAnestesys.png" class="imgAjuste"/></RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#barraConfiguracion" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="offcanvas offcanvas-end" tabindex="-1" id="barraConfiguracion" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Configuración</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Monitores</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="medicos">Médicos</a>
                </li>  
                <li class="nav-item">
                  <a class="nav-link" href="medicamentos">Medicamentos</a>
                </li>    
                <li class="nav-item">
                  <a class="nav-link" href="#">Tendencias</a>
                </li>                  
                <li class="nav-item">
                  <a class="nav-link" href="#">Teclado</a>
                </li>              
              </ul>              
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="container mt-3">
      <RouterView v-slot="{Component}">
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
.imgAjuste{
  width: 15%;
  height: auto;    
}
</style>