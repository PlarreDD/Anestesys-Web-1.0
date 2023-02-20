<template>
    <div class="col-5 divBorder posicionEstatica">  
        
        <div class="div-img">
              <img src="images/logoA.png" class="imgLogo"/>
        </div>

        <h3 class="fw-bold">Nuevo Usuario</h3>

        <form class="row g-3" action="pre" method="post" @submit.prevent="handleSubmit">
            <div class="col-md-12">
                <label for="" class="form-label fw-bold">Nombre(s)</label>
                <input type="text"
                    class="form-control"
                    v-model="nomUsr"
                    id="nombre"
                    placeholder="Nombre(s)"
                required>  
            </div>
            
            <div class="col-md-12">
                <label for="" class="form-label fw-bold">Apellidos</label>
                <input type="text"
                    class="form-control"
                    v-model="apUsr"
                    id="apellidos"
                    placeholder="Apellido(s)"
                required>  
            </div>
            
            <div class="col-md-12">
                <label for="" class="form-label fw-bold">Correo electrónico</label>
                <input type="email"
                    class="form-control"
                    v-model="email"
                    id="correo"
                    placeholder="correo@mail.com"
                required>
            </div>

            <div class="col-md-12">
                <label for="" class="form-label fw-bold">Fecha de nacimiento</label>
                <input type="date"
                    class="form-control"
                    v-model="fechaN"
                    id="fechaN"
                required>  
            </div>
            
            <div class="col-md-12">
                <label for="" class="form-label fw-bold">Contraseña</label>
                <input type="password"
                    class="form-control"
                    v-model="pswd"
                    id="confPass"
                    placeholder="******"
                required readonly>  
            </div>

            <div class="col-md-12">
                <button 
                    class="btn btn-reg"
                    type="submit">
                        Registrar
                </button>
            </div>
            
            <div class="col-md-6">                    
                <div class="">
                    <a href="/">Iniciar sesión</a>
                </div> 
            </div>
        </form>        
    </div>
</template>

<script lang="ts">
//import { defineComponent } from "vue"
//import { ref } from "vue";

export default {
    data() {
        return{
            nomUsr: "",
            apUsr: "",
            email: "",
            fechaN: "",
            pswd: "",
        };
    },

    methods: {
        handleSubmit: async () => {
            try {
                console.log("Nombre: " + name);                
            } catch (error) {
                console.log(error);
            }
        }
    }
}

</script>

<style>
.divBorder {
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 10px;
  background-color: rgba(232, 234, 236, 0.6);
}
.aColor{
  color: #6AC2BC;
  text-align: center;
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
  left: 0;
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