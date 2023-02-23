<template>
    <div class="col-5 divBorderR posicionEstaticaR">  
        <div class="margenR">
            <div class="div-img">
                <img src="images/logoA.png" class="imgLogo"/>
            </div>

            <h2 class="fw-bold h2Margen">Nuevo Usuario</h2>
        
            <form class="row g-3" action="pre" method="post" autocomplete="off" @submit.prevent="handleSubmit">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <label for="" class="form-label fw-bold margenLabelR">Nombre(s)</label>
                    <input type="text"
                        class="form-control margenInputR"
                        v-model="usr.nomUsr"
                        id="nombre"
                        placeholder="Nombre completo">
                    <div class="invisible" id="userNombre">
                        Escriba sus nombres
                    </div>  
                </div>
                <div class="col-md-2"></div>
                
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <label for="" class="form-label fw-bold margenLabelR">Apellidos</label>
                    <input type="text"
                        class="form-control margenInputR"
                        v-model="usr.apUsr"
                        id="apellidos"
                        placeholder="Apellidos (paterno y materno)">
                    <div class="invisible" id="userApellidos">
                        Escriba sus apellidos
                    </div> 
                </div>
                <div class="col-md-2"></div>
                
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <label for="" class="form-label fw-bold margenLabelR">Correo electrónico</label>
                    <input type="email"
                        class="form-control margenInputR"
                        v-model="usr.email"
                        id="correo"
                        placeholder="correo@mail.com">
                    <div class="invisible" id="userEmail">
                        Escriba su correo electrónico
                    </div> 
                </div>
                <div class="col-md-2"></div>

                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <label for="" class="form-label fw-bold margenLabelR">Fecha de nacimiento</label>
                    <input type="date"
                        class="form-control"
                        v-model="usr.fechaNac"
                        id="fechaN"> 
                    <div class="invisible" id="userFechaN">
                        Escriba su fecha de nacimiento
                    </div> 
                </div>
                <div class="col-md-2"></div>                            

                <div class="col-md-12 div-img">
                    <!-- <RouterLink to="/"> -->
                    <a href="/">
                        <button @click="validaCamposRegistro()" class="btn btn-reg fw-bold" type="submit">Crear Cuenta</button>
                    </a>
                    <!-- </RouterLink> -->
                </div>
                
                <div class="col-md-12">                    
                    <RouterLink class="nav-link colorLinkA" @click="cargarFondoLogin()" to="/">Iniciar Sesión</RouterLink>
                </div>
            </form> 
        </div>
    </div>
</template>

<script lang="ts">
import { apiAxios } from '@/boot/axios';
import type { regUsr } from '@/interfaces/regUsr';
import { ref } from "vue";

const NombreDr = ref('');
const ApPatDr = ref('');
const FechaNac = ref('');
var arr = [];
const genPswd = ref('');

import { defineComponent } from "vue"
import swal from 'sweetalert2'

export default defineComponent({
    data() {
        return{
            usr: { } as regUsr,
            //NombreDr,
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
        handleSubmit() {
            NombreDr.value = this.usr.nomUsr;
            arr = Array.from(NombreDr.value);
            genPswd.value = arr[0] + arr[1] + arr[2];

            ApPatDr.value = this.usr.apUsr;
            arr = Array.from(ApPatDr.value);
            genPswd.value = genPswd.value + arr[0] + arr[1] + '#';
            
            FechaNac.value = this.usr.fechaNac;
            arr = Array.from(FechaNac.value);
            genPswd.value = genPswd.value + arr[5] + arr[6] + arr[2] + arr[3];

            console.log("Contraseña: " + genPswd.value);
            
            apiAxios.post("http://localhost:5000/register", {
                email: this.usr.email,
                password: genPswd,
                repassword: genPswd,
                nomMed: this.usr.nomUsr,
                apMed: this.usr.apUsr,                
            }).then((res:any) => {
                console.log(res.data);
            }).catch((e:any) =>
                console.log(e));            
        },

        async validaCamposRegistro() {                                
            if(this.usr.nomUsr == undefined || this.usr.nomUsr == "" || this.usr.apUsr == undefined || this.usr.apUsr =="" ||
                this.usr.email == undefined || this.usr.email == "" || this.usr.fechaNac == undefined) {

                if(this.usr.nomUsr ==undefined || this.usr.nomUsr == ""){
                    document.getElementById("userNombre").className = "visible validaCampo";
                    document.getElementById("nombre").className = "form-control border border-danger margenInputR";
                }else{
                    document.getElementById("userNombre").className = "invisible";
                    document.getElementById("nombre").className = "form-control margenInputR";
                }                              
                if(this.usr.apUsr ==undefined || this.usr.apUsr ==""){
                    document.getElementById("userApellidos").className = "visible validaCampo";              
                    document.getElementById("apellidos").className = "form-control border border-danger margenInputR";
                }else{
                    document.getElementById("userApellidos").className = "invisible";
                    document.getElementById("apellidos").className = "form-control margenInputR"; 
                }                           
                if(this.usr.email ==undefined || this.usr.email ==""){
                    document.getElementById("userEmail").className = "visible validaCampo";              
                    document.getElementById("email").className = "form-control border border-danger margenInputR";
                }else{
                    document.getElementById("userEmail").className = "invisible";
                    document.getElementById("email").className = "form-control margenInputR"; 
                }          
                if(this.usr.fechaNac ==undefined){
                    document.getElementById("userFechaN").className = "visible validaCampo";              
                    document.getElementById("fechaN").className = "form-control border border-danger";
                }else{
                    document.getElementById("userFechaN").className = "invisible";
                    document.getElementById("fechaN").className = "form-control"; 
                }          
            }
            else{          
                swal.fire({
                    html: 'Usuario <b>Nombre</b> registrado correctamente, consulte su correo electrónico',
                    icon: 'info', showConfirmButton: true, showCloseButton: true,  
                    toast: true, position: 'top-start'            
                });
                document.body.style.backgroundImage = "url('../../public/images/login.webp')";  
                
                document.getElementById("userNombre").className = "invisible";                
                document.getElementById("userApellidos").className = "invisible"; 
                document.getElementById("userEmail").className = "invisible";
                document.getElementById("userFechaN").className = "invisible"; 
                document.getElementById("nombre").className = "form-control margenInputR";  
                document.getElementById("apellidos").className = "form-control margenInputR";
                //alert('else');
                document.getElementById("email").className = "form-control margenInputR";  
                document.getElementById("fechaN").className = "form-control";           
                
                           
            }
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
.colorLinkA:hover{
  color: #E88300;
  text-decoration: underline;
}
.margenR{
  margin-top: 80px;
}
</style>