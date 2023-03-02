<template>
    <div class="col-5 divBorderR posicionEstaticaR">  
        <div class="margenR">
            <div class="div-img">
                <img src="images/logoA.png" class="imgLogo"/>
            </div>

            <h2 class="fw-bold h2Margen">Nuevo Usuario</h2>
        
            <form class="row g-3" method="post" autocomplete="off" @submit.prevent="">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <label for="" class="form-label fw-bold margenLabelR">Nombre(s)</label>
                    <input type="text"
                        :class="userNombre == true ? 'form-control border border-danger margenInputR' : 'form-control margenInputR'"
                        v-model="usr.nomUsr"
                        id="nombre"
                        placeholder="Nombre completo">
                    <div :class="userNombre == true ? 'visible validaCampo' : 'invisible'" id="userNombre">
                        Escriba sus nombres
                    </div>
                </div>

                <div class="col-md-2"></div>
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <label for="" class="form-label fw-bold margenLabelR"> Apellidos </label>
                    <input type="text"
                        :class="userApellido == true ? 'form-control border border-danger margenInputR' : 'form-control margenInputR'"
                        v-model="usr.apUsr"
                        id="apellidos"
                        placeholder="Apellidos (paterno y materno)">
                    
                    <div :class="userApellido == true ? 'visible validaCampo' : 'invisible'" id="userApellidos">
                        Escriba sus apellidos
                    </div> 
                </div>

                <div class="col-md-2"></div>
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <label for="" class="form-label fw-bold margenLabelR"> Correo electrónico </label>
                    <input type="email"
                        :class="userCorreo == true ? 'form-control border border-danger margenInputR' : 'form-control margenInputR'"
                        v-model="usr.email"
                        id="correo"
                        placeholder="correo@mail.com">
                    
                    <div :class="userCorreo == true ? 'visible validaCampo' : 'invisible'" id="userEmail">
                        Escriba su correo electrónico
                    </div> 
                </div>

                <div class="col-md-2"></div>
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <label for="" class="form-label fw-bold margenLabelR"> Fecha de nacimiento </label>
                    <input type="date"
                        :class="userFecha == true ? 'form-control border border-danger' : 'form-control'"
                        v-model="usr.fechaNac"
                        id="fechaN"> 
                    <div :class="userFecha == true ? 'visible validaCampo' : 'invisible'" id="userFechaN">
                        Escriba su fecha de nacimiento
                    </div> 
                </div>
                <div class="col-md-2"></div>

                <div class="col-md-12 div-img">
                        <button @click="validaCamposRegistro()"
                                class="btn btn-reg fw-bold"
                                > Crear Cuenta </button>
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
// import { apiAxios } from '@/boot/axios';
import type { regUsr } from '@/interfaces/regUsr';
import { useUserStore } from '@/stores/user-store';
import swal from 'sweetalert2'
import { ref,
         defineComponent } from "vue";

// const NombreDr = ref('');
// const ApPatDr = ref('');
// const FechaNac = ref('');
// var arr = [];
// const genPswd = ref('');
const userStore = useUserStore();

//import {nodemailer} from 'nodemailer';
//import Mail from 'nodemailer/lib/mailer';
// const {nodemailer} = require('nodemailer')
// const {Mail} = require('nodemailer/lib/mailer')
//import { MessageClient } from "cloudmailin"

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
      this.ocultarHeader();
    },

    created(){
        this.cargarFondo()
    },

    methods: {
        // handleSubmit() {
            // NombreDr.value = this.usr.nomUsr.trim();
            // arr = Array.from(NombreDr.value);
            // genPswd.value = arr[0] + arr[1] + arr[2];

            // ApPatDr.value = this.usr.apUsr.trim();
            // arr = Array.from(ApPatDr.value);
            // genPswd.value = genPswd.value + arr[0] + arr[1] + '#';
            
            // FechaNac.value = this.usr.fechaNac;
            // arr = Array.from(FechaNac.value);
            // genPswd.value = genPswd.value + arr[5] + arr[6] + arr[2] + arr[3];

            // console.log("Contraseña: " + genPswd.value);
            
            // apiAxios.post("http://localhost:5000/register", {
            //     email: this.usr.email,
            //     password: String(genPswd.value),
            //     repassword: String(genPswd.value),
            //     nomMed: this.usr.nomUsr,
            //     apMed: this.usr.apUsr,
            // }).then((res:any) => {
            //     console.log(res.data);
            // }).catch((e:any) =>
            //     console.log(e));
        // },
        
        async validaCamposRegistro() {
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
                this.mostrarMensaje();
                
                this.userNombre = false
                this.userApellido = false
                this.userCorreo = false
                this.userFecha = false
                
                userStore.registerUsr(this.usr.email, this.usr.nomUsr, this.usr.apUsr, this.usr.fechaNac);
                
                this.usr.nomUsr = ""
                this.usr.apUsr = ""
                this.usr.email = ""
                this.usr.fechaNac = ""
                
                this.$router.push('/')
            }
        },

        async mostrarMensaje(){
            swal.fire({
                    html: 'Usuario <b>Nombre</b> registrado correctamente, consulte su correo electrónico',
                    icon: 'info', showConfirmButton: true, showCloseButton: true,
                    toast: true, position: 'top-start'
            });

            document.body.style.backgroundImage = "url('../../public/images/login.webp')";
        },

        async cargarFondo(){
            document.body.style.backgroundImage = "url('../../public/images/registro.webp')";
        },

        async cargarFondoLogin(){
            document.body.style.backgroundImage = "url('../../public/images/login.webp')";
        },

        async ocultarHeader(){
            document.getElementById("headerP").className='mt invisible'
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
.h2Margen{
    margin-bottom: 40px
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
h2{
  text-align: center;
  color: #002D60;
  margin-top: 15px;
  margin-bottom: 20px;
}
label{
  color: #002D60;  
}
</style>