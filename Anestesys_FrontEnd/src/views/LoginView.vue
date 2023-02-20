<template>
    <div class="col-5 divBorder posicionEstatica">        
      
        <div class="div-img">
              <img src="images/logoA.png" class="imgLogo"/>
        </div>

        <h3 class="fw-bold">Inicia Sesión</h3>

        <form class="row g-3" method="post">
            <div class="col-md-12">
                <label for="" class="form-label fw-bold">Correo electrónico</label>
                <input type="text" class="form-control" id="user" placeholder="email@mail.com" required>  
            </div>
            <div class="col-md-12">
                <label for="" class="form-label fw-bold">Contraseña</label>
                <input type="password" class="form-control" id="contrasena" placeholder="******" required>  
            </div>

            <div class="col-md-12">                    
                <RouterLink class="nav-link aColor fw-bold" to="registro">Crear una cuenta</RouterLink>
            </div>
            <div class="col-md-12">
                <RouterLink to="pre"><button @click="mandarMensaje()" class="btn btn-login fw-bold" type="submit">Entrar</button></RouterLink>
            </div>            
            
        </form>        
    </div>
</template>

<script lang="ts">

import { defineComponent } from "vue"
import swal from 'sweetalert2'

export default defineComponent({
  methods: {      
      async mandarMensaje(){
        swal.fire({
          title: 'Bienvenido',
          html: '<b>Daniel</b>',
          icon: 'info',
          showConfirmButton: false,
          showCloseButton: true,  
          timer: 5000,
          timerProgressBar: true,
          toast: true,
          position: 'top-end'            
        })  
      }
  }
})
</script>

<style>
.divBorder {
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 10px;
  background-color: rgba(232, 234, 236, 0.6);
}
.aColor{
  color: #6AC2BC;
  text-align: center;
}
.btn-login {
    --bs-btn-bg: #6AC2BC;
    --bs-btn-color: #ffffff;    
    --bs-btn-border-color: #6AC2BC;
    --bs-btn-hover-bg: #6AC2BC;
    --bs-btn-hover-color: #ffffff;
    --bs-btn-hover-border-color: #6AC2BC;          
    --bs-btn-active-bg: #ffffff;
    --bs-btn-active-color: #6AC2BC;
    --bs-btn-active-border-color: #6AC2BC;   
}
h3{
  text-align: center;
  color: #002D60;
}
label{
  color: #002D60;
}
.posicionEstatica {
  position: fixed;
  right: 0;
  z-index: 1020;
}
.div-img {
  text-align: center;
}
.imgLogo{
  width: 400px;
  height: auto; 
}
</style>