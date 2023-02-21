<template>
    <div class="col-6 divBorder">              

        <h4>Iniciar sesión</h4>
        {{ token }} - {{ expiresIn }}

        <form class="row g-3" action="pre" method="post" autocomplete="new-password" @submit.prevent="handleSubmit">
            <div class="col-md-12">
                <input type="text"
                       class="form-control"
                       v-model="usr.email"
                       id="user"
                       placeholder="Usuario"
                       required>
            </div>

            <div class="col-md-12">
                <input type="password"
                       class="form-control"
                       v-model="usr.pswd"
                       id="contrasena"
                       placeholder="******"
                       required>  
            </div>

            <div class="col-md-12">
                <button 
                        class="btn btn-primary btn-signin"
                        type="submit">
                    Entrar
                </button>
            </div>

            <div class="col-md-6">                    
                <div class="opcioncontra">
                    ¿No tienes cuenta?
                    <a href="registro">
                        Registrate
                    </a>
                </div> 
            </div>
            
        </form>        
    </div>
</template>

<script lang="ts">
import { apiAxios } from '@/boot/axios';
import type { regUsr } from '@/interfaces/regUsr';
import { ref } from "vue";

const token = ref('');
const expiresIn = ref('');

export default {
    data() {
        return{
            usr: { } as regUsr,
            token,
            expiresIn,
        };
    },

    methods: {
        handleSubmit() {
            apiAxios.post("http://localhost:5000/login", {
                email: this.usr.email,
                password: this.usr.pswd,
            }).then((res:any) => {
                token.value = res.data.tkn;
                expiresIn.value = res.data.xprIn;
            }).catch((e:any) =>
                console.log(e));
        }
    }
};

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
  border-radius: 13px;
  box-shadow: 3px 3px 7px #ccc;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 10px;
  margin: 0 auto;
}
</style>