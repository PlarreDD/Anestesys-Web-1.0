<template>
    <div class="col-5 divBorderR posicionEstaticaR">  
        <div class="margenR">
            <div class="div-img">
                <img src="images/logoB.png" class="imgLogo"/>
            </div>

            <h2 class="fw-bold h2Estilo m-4">Nuevo Usuario</h2>
        
            <form class="row g-3" method="post" autocomplete="off" @submit.prevent="">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <label for="" class="form-label fw-bold margenLabelR">Nombre(s)</label>
                    <input type="text"
                           :class="userNombre == true ?
                                  'form-control border border-danger margenInputR' : 'form-control margenInputR'"
                           v-model="usr.nomUsr"
                           id="nombre"
                           placeholder="Nombre completo">
                    
                    <div :class="userNombre == true ?
                                'visible validaCampo' : 'invisible'"
                         id="userNombre"> Escriba sus nombres
                    </div>
                </div>

                <div class="col-md-2"></div>
                <div class="col-md-2"></div>

                <div class="col-md-8">
                    <label for="" class="form-label fw-bold margenLabelR"> Apellidos </label>
                    <input type="text"
                           :class="userApellido == true ?
                                  'form-control border border-danger margenInputR' : 'form-control margenInputR'"
                           v-model="usr.apUsr"
                           id="apellidos"
                           placeholder="Apellidos (paterno y materno)">
                    
                    <div :class="userApellido == true ?
                                'visible validaCampo' : 'invisible'"
                         id="userApellidos"> Escriba sus apellidos
                    </div> 
                </div>

                <div class="col-md-2"></div>
                <div class="col-md-2"></div>

                <div class="col-md-8">
                    <label for="" class="form-label fw-bold margenLabelR"> Correo electrónico </label>
                    <input type="email"
                           :class="userCorreo == true ?
                                  'form-control border border-danger margenInputR' : 'form-control margenInputR'"
                           v-model="usr.email"
                           id="correo"
                           placeholder="correo@mail.com">
                    
                    <div :class="userCorreo == true ?
                                'visible validaCampo' : 'invisible'"
                         id="userEmail"> Escriba su correo electrónico
                    </div> 
                </div>

                <div class="col-md-2"></div>
                <div class="col-md-2"></div>

                <div class="col-md-8">
                    <label for="" class="form-label fw-bold margenLabelR"> Fecha de nacimiento </label>
                    <input type="date"
                           :class="userFecha == true ?
                                  'form-control border border-danger' : 'form-control'"
                           v-model="usr.fechaNac"
                           id="fechaN">
                    <div :class="userFecha == true ?
                                'visible validaCampo' : 'invisible'" id="userFechaN">
                        Escriba su fecha de nacimiento
                    </div>
                </div>

                <div class="col-md-2"></div>

                <div class="col-md-12 div-img">
                    <button @click="validaCamposRegistro()"
                            class="btn btn-reg fw-bold"> Crear Cuenta </button>
                </div>
                
                <div class="col-md-12">
                    <RouterLink class="nav-link colorLinkA"
                                @click="cargarFondoLogin()"
                                to="/"> Iniciar Sesión </RouterLink>
                </div>
            </form> 
        </div>
    </div>
</template>

<script lang="ts">
import type { regUsr } from '@/interfaces/regUsr';
import { useUserStore } from '@/stores/user-store';
import { defineComponent } from "vue";

const userStore = useUserStore();

export default defineComponent({
    data() {
        return{
            usr: { } as regUsr,
            //NombreDr,
            userNombre:false,
            userApellido:false,
            userCorreo:false,
            userFecha:false,
            userStore,
        };
    },
    
    mounted: function() { // Llama el método despues de cargar la página
      this.cargarFondo();
    },

    created(){
        this.cargarFondo()
    },

    methods: {
        async validaCamposRegistro() {
            try {
                if(this.usr.nomUsr == undefined || this.usr.nomUsr == "" ||
                   this.usr.apUsr == undefined || this.usr.apUsr =="" ||
                   this.usr.email == undefined || this.usr.email == "" ||
                   this.usr.fechaNac == undefined) {
                    if(this.usr.nomUsr == undefined || this.usr.nomUsr == "")
                        this.userNombre = true;
                    else
                        this.userNombre = false
    
                    if(this.usr.apUsr == undefined || this.usr.apUsr == "")
                        this.userApellido = true;
                    else
                        this.userApellido = false;
    
                    if(this.usr.email == undefined || this.usr.email == "")
                        this.userCorreo = true;
                    else
                        this.userCorreo = false;
    
                    if(this.usr.fechaNac == undefined)
                        this.userFecha = true;
                    else
                        this.userFecha = false;
                }
                else{
                    this.userNombre = false
                    this.userApellido = false
                    this.userCorreo = false
                    this.userFecha = false
                    
                    userStore.registerUsr(this.usr.email, this.usr.nomUsr, this.usr.apUsr, this.usr.fechaNac);

                    this.usr.nomUsr = ""
                    this.usr.apUsr = ""
                    this.usr.email = ""
                    this.usr.fechaNac = ""
                }                
            } catch (error) {
                // console.log("Error registro: " + error.error.response.data);
            }
        },

        async cargarFondo(){
            document.body.style.backgroundImage = "url('../../public/images/registro.webp')";
        },

        async cargarFondoLogin(){
            document.body.style.backgroundImage = "url('../../public/images/login.webp')";
        },
    }
});
</script>

<style>
.divBorderR {
  border-top-right-radius: 55px;
  border-bottom-right-radius: 55px;
  padding: 1rem;
  backdrop-filter: blur(40px) brightness(90%);
}
.btn-reg {
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
}
.validaCampo {
    color: red;
}
.posicionEstaticaR {
  position: fixed;
  left: 0;
  top:0;
  bottom:0;
  z-index: 1020;
}
.margenInputR{
  margin-bottom: 2px
}
.margenLabelR{
  margin-bottom: 5px
}
.h2Estilo{
  margin-bottom: 40px;
  text-align: center;
  color: #002D60;
  margin-top: 15px;
}
.colorLinkA{
  color: #E88300;
  text-align: center;
}
.div-img {
  text-align: center;
}
.colorLinkA:hover{
  color: #E88300;
  text-decoration: underline;
}
.margenR{
  margin-top: 80px;
}
label{
  color: #002D60;  
}
</style>