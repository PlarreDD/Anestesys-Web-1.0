<template>
    <div class="col-5 divBorderR posicionEstaticaR">  
        <div class="margenR">
            <div class="div-img">
                <img src="images/logoA.png" class="imgLogo"/>
            </div>

            <h3 class="fw-bold">Nuevo Usuario</h3>

            <form class="row g-3" action="pre" method="post" @submit.prevent="handleSubmit">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <label for="" class="form-label fw-bold">Nombre(s)</label>
                    <input type="text"
                        class="form-control"
                        v-model="nomUsr"
                        id="nombre"
                        placeholder="Nombre(s)"
                    required>  
                </div>
                <div class="col-md-2"></div>
                
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <label for="" class="form-label fw-bold">Apellidos</label>
                    <input type="text"
                        class="form-control"
                        v-model="apUsr"
                        id="apellidos"
                        placeholder="Apellido(s)"
                    required>  
                </div>
                <div class="col-md-2"></div>
                
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <label for="" class="form-label fw-bold">Correo electrónico</label>
                    <input type="email"
                        class="form-control"
                        v-model="email"
                        id="correo"
                        placeholder="correo@mail.com"
                    required>
                </div>
                <div class="col-md-2"></div>

                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <label for="" class="form-label fw-bold">Fecha de nacimiento</label>
                    <input type="date"
                        class="form-control"
                        v-model="fechaN"
                        id="fechaN"
                    required>  
                </div>
                <div class="col-md-2"></div>                            

                <div class="col-md-12 div-img">
                    <RouterLink to="/"><button class="btn btn-reg fw-bold" type="submit" @click="mandarMensaje()">Crear Cuenta</button></RouterLink>
                </div>
                
                <div class="col-md-12">                    
                    <RouterLink class="nav-link colorLinkR" @click="cargarFondoLogin()" to="/">Iniciar Sesión</RouterLink>
                </div>
            </form> 
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from "vue"
import swal from 'sweetalert2'

export default defineComponent({
    data() {
        return{
            nomUsr: "",
            apUsr: "",
            email: "",
            fechaN: "",
            pswd: "",
        };
    },
    mounted: function() { // Llama el método despues de cargar la página
      this.cargarFondo();                 
    },
    created(){
        this.cargarFondo()
    },
    methods: {
        handleSubmit: async () => {
            try {
                console.log("Nombre: " + name);                
            } catch (error) {
                console.log(error);
            }
        },
        async mandarMensaje(){
            swal.fire({
                html: 'Usuario <b>Nombre</b> registrado correctamente, consulte su correo electrónico',
                icon: 'info',
                showConfirmButton: true,
                showCloseButton: true,  
                toast: true,
                position: 'top-start'            
            });
            document.body.style.backgroundImage = "url('../../public/images/login.webp')";
        },
        async cargarFondo(){
            document.body.style.backgroundImage = "url('../../public/images/registro.webp')";
        },
        async cargarFondoLogin(){
            document.body.style.backgroundImage = "url('../../public/images/login.webp')";
        },
    }
})

</script>

<style>
.divBorderR {
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
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
.posicionEstaticaR {
  position: fixed;
  left: 0;
  top:0;
  bottom:0;
  z-index: 1020;
}
.colorLinkR{
  color: #E88300;
  text-align: center;
}
.colorLinkR:hover{
  color: #E88300;
  text-decoration: underline;
}
.margenR{
  margin-top: 80px;
}
</style>