<template>
  <div class="fondo-vista">
    <div class="">
      <div class="modal"
           id="emergenciaModal"
           tabindex="-1"
           aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content colorModal">
            <div class="modal-header">
              <div class="col-12">
                <div class="row g-3">
                  <div class="col-md-11 div-img">
                    <img src="../../public/images/advertencia.svg" class="imgModal"/>
                  </div>
                  
                  <div class="col-md-1 div-img">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-body">
              <h2 class="fw-bold textoModal">MODO EMERGENCIA</h2>
              <h3 class="textoModal">Al finalizar el caso deberá ingresar sus datos</h3>
              <h3 class="textoModal">para guardar la información del paciente.</h3>

            </div>

            <div class="modal-footer">
              <div class="col-12">
                <div class="row g-3">
                  <div class="col-md-4 div-img">
                    <button type="button"
                            class="btn btn-modal fw-bold"
                            data-bs-dismiss="modal"> CANCELAR </button>
                  </div>
                  
                  <div class="col-md-4"></div>
                  
                  <div class="col-md-4 div-img">
                    <button type="button"
                            class="btn btn-modal fw-bold"
                            data-bs-dismiss="modal"
                            @click="iniciarEmergencia()"> ACEPTAR </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-5 divBorder posicionEstaticaL">
      <div class="margenL">
        <div class="div-img">
            <img src="../../public/images/logoB.png" class="imgLogo"/>
        </div>

        <h2 class="fw-bold h2Estilo m-4"> Inicia Sesión </h2>

        <form class="row g-3" method="post" autocomplete="new-password" @submit.prevent="">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <label  class="form-label fw-bold m-3">Correo electrónico</label>
            <input type="text"
                  :class="userCorreo == true ? 'form-control border border-danger margenInput' : 'form-control margenInput'"
                  v-model="usr.email"
                  id="user"
                  placeholder="correo@mail.com"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">

            <div :class="userCorreo == true ? 'visible validaCampo' : 'invisible'" id="userLogin">
                Escriba el correo electrónico
            </div>
          </div>

          <div class="col-md-2"></div>
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <label  class="form-label fw-bold">Contraseña</label>
            <input type="password"
                  :class="userContrasena == true ? 'form-control border border-danger' : 'form-control'"
                  v-model="usr.pswd"
                  id="contrasena"
                  placeholder="********">
            <span class="password-icon show-password"                  
                  id="mostrar"
                  @click=" mostrarPass()">

                  <template v-if="contrasena === false">
                    <font-awesome-icon icon="fa-solid fa-eye" />
                  </template>
                  <template v-else>
                    <font-awesome-icon icon="fa-solid fa-eye-slash" />
                  </template>      
                  
            </span>

            <div id="contraLogin"
                :class="userContrasena == true ? 'visible validaCampo' : 'invisible'"> Escriba la contraseña </div>
          </div>

          <div class="col-md-2"></div>
          <div class="col-md-12 div-img">
              <button @click="validaCamposLogin()"
                      class="btn btn-login fw-bold"> Entrar </button>
          </div>

          <div class="col-md-12">
            <RouterLink class="nav-link colorLinkL"
                        to="registro"
                        @click=""> Crear una cuenta </RouterLink>
          </div>
        </form>
      </div>

      <div class="div-img col-md-10">
        <button type="button"
                class="btn btn-emergencia fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#emergenciaModal"> ¡EMERGENCIA! </button>
      </div>
    </div>
  </div>  
</template>

<script lang="ts">
import { useUserStore } from "../stores/user-store";
import type { regUsr } from '@/interfaces/regUsr';
import { defineComponent } from "vue";

const userStore = useUserStore();

export default defineComponent({

  data() {
    return{
        usr: { } as regUsr,
        userStore,
        userCorreo:false,
        userContrasena:false,
        contrasena:false
    };
  },
  
  methods: {
    async validaCamposLogin() {
      try {
        if(this.usr.email == undefined || this.usr.email == "" ||
           this.usr.pswd == undefined || this.usr.pswd =="") {
          if(this.usr.email == undefined || this.usr.email == ""){
            this.userCorreo = true;
          }
          else{
            this.userCorreo = false;
          }
  
          if(this.usr.pswd == undefined || this.usr.pswd == ""){
            this.userContrasena = true;
          }
          else{
            this.userContrasena = false;
          }
        }
        else{
          this.userCorreo = false;
          this.userContrasena = false;
          
          userStore.loginAccess(this.usr.email, this.usr.pswd);
  
          this.usr.email = ""
          this.usr.pswd = ""
        }        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async iniciarEmergencia(){
      try {
        userStore.token = "tokenEmergencia"
        userStore.expiresIn = 900
        this.$router.push('pre')        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async mostrarPass(){
      try {
        if ( (document.getElementById("contrasena") as HTMLInputElement).type == "text" ) {
          (document.getElementById("contrasena") as HTMLInputElement).type = "password";
          this.contrasena=false
        } else {
          (document.getElementById("contrasena") as HTMLInputElement).type = "text";
          this.contrasena=true
        }        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },
  }
});
</script>

<style>
.fondo-vista {
  background-image: url('../../public/images/login.webp'); /* Ruta de la imagen en tus assets */
  height: 100vh;
  margin-top: -1rem;
  margin-left: -19rem;
  margin-right: -18rem;
}

.modal-dialog,
.modal-content {
    height: 50%;
}

.modal-header{
  border-bottom: #D11515;
}

.modal-footer{
  border-top: #D11515;
}
.btn-modal{
  margin-bottom: 20px;
}

.divBorder {
  border-top-left-radius: 55px;
  border-bottom-left-radius: 55px;
  padding: 1rem;
  backdrop-filter: blur(40px) brightness(90%);
}
.validaCampo {
    color: red;
}
.colorLinkL{
  color: #E88300;
  text-align: center;;
}
.colorLinkL:hover{
  color: #E88300;
  text-decoration: underline;
}
.nav-link {
  display: block;
  padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
  font-size: var(--bs-nav-link-font-size);
  font-weight: var(--bs-nav-link-font-weight);
  color: #E88300;
  text-decoration: none;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
}
.btn-login {
    --bs-btn-bg: #E88300;
    --bs-btn-color: #ffffff;    
    --bs-btn-border-color: #E88300;
    --bs-btn-hover-bg: #E88300;
    --bs-btn-hover-color: #ffffff;
    --bs-btn-hover-border-color: #E88300;          
    --bs-btn-active-bg: #ffffff;
    --bs-btn-active-color: #E88300;
    --bs-btn-active-border-color: #E88300; 
    margin-top: 15px;  
    width: 130px;     
}
.btn-emergencia {
    --bs-btn-bg: #D11515;
    --bs-btn-color: #ffffff;    
    --bs-btn-border-color: #D11515;
    --bs-btn-hover-bg: #D11515;
    --bs-btn-hover-color: #ffffff;
    --bs-btn-hover-border-color: #D11515;          
    --bs-btn-active-bg: #ffffff;
    --bs-btn-active-color: #D11515;
    --bs-btn-active-border-color: #D11515; 
    width: 130px; 
    font-size: small;
    position: absolute;
    bottom: 35px;
}
.btn-modal {
    --bs-btn-bg: #ffffff; 
    --bs-btn-color: #002D60;    
    --bs-btn-border-color: #ffffff;
    --bs-btn-hover-bg: #ffffff;
    --bs-btn-hover-color: #002D60;
    --bs-btn-hover-border-color: #ffffff;          
    --bs-btn-active-bg: #002D60;
    --bs-btn-active-color: #ffffff;
    --bs-btn-active-border-color: #ffffff; 
    margin-top: 15px;  
    width: 130px;     
}
.h2Estilo{
  text-align: center;
  color: #002D60;
  margin-top: 15px;
  margin-bottom: 20px;
}
label{
  color: #002D60;  
}
.margenInput{
  margin-bottom: 2px
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
  margin: -30px 10px 0 0;
  cursor: pointer;
  color: gray;
}
.colorModal{
  background-color: #D11515;
}
.tamanoModal{
  width: 800px;
  height: auto;
}
.imgModal {
  width: 180px;
  height: auto;   
}
.textoModal {
  text-align: center;
  color: #ffffff;
}
</style>
