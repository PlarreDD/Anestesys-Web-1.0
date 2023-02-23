<template>
    <div class="col-5 divBorder posicionEstaticaL">        
      <div class="margenL">
        <div class="div-img">
            <img src="images/logoA.png" class="imgLogo"/>
        </div>

        <h2 class="fw-bold">Inicia Sesión</h2>
        {{ token }} - {{ expiresIn }}

        <form class="row g-3" action="pre" method="post" autocomplete="new-password" @submit.prevent="handleSubmit">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <label for="" class="form-label fw-bold">Correo electrónico</label>
                <input type="text"
                       class="form-control margenInput"
                       v-model="usr.email"
                       id="user"
                       placeholder="correo@mail.com"
                       pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
                       <span id="emailOK"></span>                       
                       
                <div class="invisible" id="userLogin">
                    Escriba el correo electrónico
                </div>
            </div>          
            <div class="col-md-2"></div>

            <div class="col-md-2"></div>
            <div class="col-md-8">
                <label for="" class="form-label fw-bold">Contraseña</label>
                <input type="password"
                       class="form-control"
                       v-model="usr.pswd"
                       id="contrasena"
                       placeholder="********">
                       <span class="fa fa-fw fa-eye password-icon show-password" id="mostrar" @click=" mostrarPass()"></span>  
                       <div class="invisible" id="contraLogin">
                          Escriba la contraseña
                      </div>
                      </div>
                      <div class="col-md-2"></div>
                      
                      <div class="col-md-12 div-img">
                        <!-- <RouterLink to="pre"> -->
                        <a href="pre">
                          <button @click="validaCamposLogin()" class="btn btn-login fw-bold" type="submit">Entrar</button>
                        </a>
                        <!-- </RouterLink> -->
                      </div>   
                      <div class="col-md-12">                    
                        <RouterLink class="nav-link colorLinkL" to="registro" @click="cargarFondoRegistro()" type="submit">Crear una cuenta</RouterLink>
                      </div>                   
                      
                    </form>   
                  </div>     
                </div>
              </template>

<script lang="ts">

import { apiAxios } from '@/boot/axios';
import type { regUsr } from '@/interfaces/regUsr';
import { ref } from "vue";

import { defineComponent } from "vue"
import swal from 'sweetalert2'

const token = ref('');
const expiresIn = ref('');

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
          token,
          expiresIn,
      };
  },
  
  methods: {      

      async validaCamposLogin() {                                
          if(this.usr.email == undefined || this.usr.email == "" || this.usr.pswd == undefined || this.usr.pswd =="") {

              if(this.usr.email ==undefined || this.usr.email == ""){
                
                document.getElementById("userLogin").className = "visible validaCampo";
                document.getElementById("user").className = "form-control border border-danger";
              }else{
                document.getElementById("userLogin").className = "invisible";
                document.getElementById("user").className = "form-control";
              }              
              
              if(this.usr.pswd ==undefined || this.usr.pswd ==""){
                document.getElementById("contraLogin").className = "visible validaCampo";              
                document.getElementById("contrasena").className = "form-control border border-danger";
              }else{
                document.getElementById("contraLogin").className = "invisible";
                document.getElementById("contrasena").className = "form-control"; 
              }                                    
          }
          else{
            document.getElementById("userLogin").className = "invisible";
            document.getElementById("contraLogin").className = "invisible"; 
            document.getElementById("user").className = "form-control";  
            document.getElementById("contrasena").className = "form-control";           

            swal.fire({
              html: 'Bienvenido <b>Nombre</b>',
              icon: 'info',
              showConfirmButton: false,
              showCloseButton: true,  
              timer: 5000,
              timerProgressBar: true,
              toast: true,
              position: 'top-end'            
            })
            
            window.location.href = "pre";
          }
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
      
      handleSubmit() {
          apiAxios.post("http://localhost:5000/login", {
              email: this.usr.email,
              password: this.usr.pswd,
          }).then((res:any) => {
              token.value = res.data.tkn;
              expiresIn.value = res.data.xprIn;
          }).catch((e:any) =>
              console.log(e));
      },
  }
});

const refreshToken = async () => {
    try {
        const res = await apiAxios.get("http://localhost:5000/refresh");
        
        token.value = res.data.tkn;
        expiresIn.value = res.data.xprIn;
        setTime();
    } catch (error) {
        console.log(error);        
    }   
};

const setTime = async () => {
    setTimeout(() => {
        refreshToken();
    }, Number(expiresIn.value) * 1000 - 6000)
};

refreshToken();
</script>

<style>
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
h2{
  text-align: center;
  color: #002D60;
  margin-top: 15px;
  margin-bottom: 20px;
}
label{
  color: #002D60;  
}
.margenInput{
  margin-bottom: 15px
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
  color: gray;
}
</style>