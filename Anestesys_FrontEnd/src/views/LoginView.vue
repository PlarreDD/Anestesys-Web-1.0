<template>
    <div class="col-6 divBorder">              

        <h4>Iniciar sesión</h4>

        <form class="row g-3" method="post">
            <div class="col-md-12">
                <input type="text" class="form-control" id="user" placeholder="Usuario" required>  
            </div>
            <div class="col-md-12">
                <input type="password" class="form-control" id="contrasena" placeholder="******" required>  
            </div>

            <div class="col-md-12">
                <button @click="mandarMensaje()" onclick="location.href='pre'" class="btn btn-primary btn-signin" type="submit">Entrar</button>
            </div>
            <div class="col-md-6">                    
                <div class="opcioncontra">¿No tienes cuenta? <a href="registro">Registrate</a></div> 
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
  border-radius: 13px;
  box-shadow: 3px 3px 7px #ccc;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 10px;
  margin: 0 auto;
}
</style>