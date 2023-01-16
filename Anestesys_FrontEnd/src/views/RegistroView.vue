<template>
    <div class="col-6 divBorder">              

        <h4>Registro</h4>

        <form class="row g-3" action="pre" method="post" @submit.prevent="handleSubmit">
            <div class="col-md-12">
                <input type="text"
                    class="form-control"
                    v-model="nomUsr"
                    id="nombre"
                    placeholder="Nombre(s)"
                required>  
            </div>
            
            <div class="col-md-12">
                <input type="text"
                    class="form-control"
                    v-model="apUsr"
                    id="apellidos"
                    placeholder="Apellido(s)"
                required>  
            </div>
            
            <div class="col-md-12">
                <input type="email"
                    class="form-control"
                    v-model="email"
                    id="correo"
                    placeholder="correo@mail.com"
                required>
            </div>

            <div class="col-md-12">
                <input type="password"
                    class="form-control"
                    v-model="pswd"
                    id="pass"
                    placeholder="******"
                required>  
            </div>
            
            <div class="col-md-12">
                <input type="password"
                    class="form-control"
                    v-model="rpswd"
                    id="confPass"
                    placeholder="******"
                required>  
            </div>

            <div class="col-md-12">
                <button 
                    class="btn btn-primary btn-signin"
                    type="submit">
                        Registrar
                </button>
            </div>
            
            <div class="col-md-6">                    
                <div class="">
                    <a href="/">Volver</a>
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
            pswd: "",
            rpswd: "",
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
  border-radius: 13px;
  box-shadow: 3px 3px 7px #ccc;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 10px;
  margin: 0 auto;
}
</style>