<template>
  <div class="col-5 divBorder posicionEstaticaL">
    <div class="margenL">
      <div class="div-img">
          <img src="images/logoA.png" class="imgLogo"/>
      </div>

      <h3 class="fw-bold">Inicia Sesión</h3>
      {{ userStore.token }} - {{ userStore.expiresIn }}

      <form class="row g-3" method="post" autocomplete="new-password" @submit.prevent="handleSubmit">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <label for="" class="form-label fw-bold">Correo electrónico</label>
          <input type="text"
                  class="form-control"
                  v-model="usr.email"
                  id="user"
                  placeholder="email@mail.com"
                  required>
        </div>

        <div class="col-md-2"></div>
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <label for="" class="form-label fw-bold">Contraseña</label>
          <input type="password"
                  class="form-control"
                  v-model="usr.pswd"
                  id="contrasena"
                  placeholder="********"
                  required>
          <span class="fa fa-fw fa-eye password-icon show-password" id="mostrar" @click=" mostrarPass()"></span>  
        </div>
        
        <div class="col-md-2"></div>
        <div class="col-md-12 div-img">
            <button @click="validaCamposLogin()"
                    class="btn btn-login fw-bold"> Entrar </button>
        </div>
        
        <div class="col-md-12">
          <RouterLink class="nav-link colorLinkL"
                      to="registro"
                      @click="cargarFondoRegistro()"> Crear una cuenta </RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { useUserStore } from "../stores/user-store";
import type { regUsr } from '@/interfaces/regUsr';
import { ref, 
         defineComponent } from "vue";
import swal from 'sweetalert2'

const userStore = useUserStore();

export default defineComponent({
  mounted: function() { // Llama el método despues de cargar la página
    this.cargarFondo();
    this.ocultarHeader();           
  },
  
  created(){
    this.cargarFondo()
  },

  data() {
      return{
          usr: { } as regUsr,
          userStore
      };
  },
  
  methods: {
    async validaCamposLogin() {
      if(this.usr.email == undefined || this.usr.email == "" ||
         this.usr.pswd == undefined || this.usr.pswd =="") {   
          if(this.usr.email ==undefined || this.usr.email == ""){
      //       document.getElementById("userLogin").className = "visible validaCampo";
      //       document.getElementById("user").className = "form-control border border-danger";
          }
          else{
      //       document.getElementById("userLogin").className = "invisible";
      //       document.getElementById("user").className = "form-control";
          }

          if(this.usr.pswd ==undefined || this.usr.pswd ==""){
      //       document.getElementById("contraLogin").className = "visible validaCampo";
      //       document.getElementById("contrasena").className = "form-control border border-danger";
          }
          else{
      //       document.getElementById("contraLogin").className = "invisible";
      //       document.getElementById("contrasena").className = "form-control"; 
          }
      }
      else{
      //   document.getElementById("userLogin").className = "invisible";
      //   document.getElementById("contraLogin").className = "invisible"; 
      //   document.getElementById("user").className = "form-control";  
      //   document.getElementById("contrasena").className = "form-control";
        
      /*Codigo funcional*/
        userStore.loginAccess(this.usr.email, this.usr.pswd);
        this.mostrarMensaje();
        this.$router.push('pre')
      }
    },

    async mostrarMensaje(){
      swal.fire({
        html: 'Bienvenido <b>Dr. García</b>',
        icon: 'info',
        showConfirmButton: false,
        showCloseButton: true,  
        timer: 5000,
        timerProgressBar: true,
        toast: true,
        position: 'top-end'
      })  
    },

    async cargarFondo(){
          document.body.style.backgroundImage = "url('../../public/images/login.webp')";
    },

    async cargarFondoRegistro(){
          document.body.style.backgroundImage = "url('../../public/images/registro.webp')";
    },

    async ocultarHeader(){
      document.getElementById("headerP").className='mt invisible'
    },

    async mostrarPass(){
          if ( (document.getElementById("contrasena") as HTMLInputElement).type == "text" ) {
              (document.getElementById("contrasena") as HTMLInputElement).type = "password";
              document.getElementById("mostrar").className='fa fa-fw fa-eye password-icon show-password'
          } else {
              (document.getElementById("contrasena") as HTMLInputElement).type = "text";
              document.getElementById("mostrar").className='fa fa-fw fa-eye-slash password-icon show-password'
          }
    },
  }
});

userStore.refreshToken();
</script>

<style>
.divBorder {
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  padding: 1rem;
  backdrop-filter: blur(40px) brightness(90%);
}
.colorLinkL{
  color: #6AC2BC;
  text-align: center;
}
.colorLinkL:hover{
  color: #6AC2BC;
  text-decoration: underline;
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
    margin-top: 15px;   
}
h3{
  text-align: center;
  color: #002D60;
  margin-top: 15px;
  margin-bottom: 20px;
}
label{
  color: #002D60;
}
.posicionEstaticaL {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1020;
}
.div-img {
  text-align: center;
}
.imgLogo{
  width: 400px;
  height: auto; 
}
.margenL{
  margin-top: 80px;
}
.password-icon {
  float: right;
  position: relative;
  margin: -25px 10px 0 0;
  cursor: pointer;
}
</style>
