<template>
    <div class="col-6 divBorder">              

        <h4>Iniciar sesión</h4>

        <form class="row g-3" action="pre" method="post">
            <div class="col-md-12">
                <input type="text" class="form-control" id="user" placeholder="Usuario" required>  
            </div>
            <div class="col-md-12">
                <input type="password" class="form-control" id="password" placeholder="******" required>  
            </div>

            <div class="col-md-12">
                <button @click="access" class="btn btn-primary btn-signin" type="submit">Entrar</button>

                <button onclick="location.href='trans'" class="btn btn-primary btn-signin" type="submit">Acceso Rápido</button>
            </div>

            <div class="col-md-6">                    
                <div class="opcioncontra">¿No tienes cuenta? <a href="404">Registrate</a></div> 
            </div>
            
        </form>        
    </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue"

export default defineComponent({
    methods:{
        access:async () => {
            try {
                const res = await axios.post(
                    "http://localhost:5000/login",
                    {
                        "email": "cnisuwe@test.com",
                        "password": "123123"
                    }
                );

                console.log(res.data);

            } catch (error) {
                console.log(error);                
            }
        }
    }
});
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