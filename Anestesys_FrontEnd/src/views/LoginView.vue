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
import { apiAxios } from "@/boot/axios";
import { defineComponent, ref } from "vue"

const tkn = ref('');
const xprsIn = ref('');

export default defineComponent({
    methods:{
        access: async () => {
            try {
                const res = await apiAxios.post(
                    "/login",
                    {
                        "email": "cnisuwe@test.com",
                        "password": "123123"
                    }
                );

                tkn.value = res.data.token;
                xprsIn.value = res.data.expiresIn;
                console.log(tkn.value + " - " + xprsIn.value);                
            } catch (error) {
                console.log(error);                
            }
        }
    }
});

function setTime(): void {
    setTimeout(() => {
        refreshToken();
        console.log("TimeOut");        
    }, Number(xprsIn) * 1000 - 6000);
};

// Funciona pero hace falta createLink para tener un link valido en la BD
const refreshToken = async(): Promise <void> => {
    try {
        const res = await apiAxios.get("/refresh");
        tkn.value = res.data.token;
        xprsIn.value = res.data.expiresIn;
        console.log(tkn.value + " - " + xprsIn.value);
        
        setTime();
    } catch (error) {
        console.log(error);
    }
}

refreshToken();
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