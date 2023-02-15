<template>
    <div class="col-6 divBorder">              

        <h4>Registro</h4>

        <form class="row g-3" action="pre" method="post" @submit.prevent="handleSubmit">
            <div class="col-md-12">
                <input type="text"
                    class="form-control"
                    v-model="usr.nomUsr"
                    id="nombre"
                    placeholder="Nombre(s)"
                    required>  
            </div>
            
            <div class="col-md-12">
                <input type="text"
                    class="form-control"
                    v-model="usr.apUsr"
                    id="apellidos"
                    placeholder="Apellido(s)"
                    required>  
            </div>
            
            <div class="col-md-12">
                <input type="email"
                    class="form-control"
                    v-model="usr.email"
                    id="correo"
                    placeholder="correo@mail.com"
                    required>
            </div>

            <div class="col-md-12">
                <input type="password"
                    class="form-control"
                    v-model="usr.pswd"
                    id="pass"
                    placeholder="******"
                    required>  
            </div>
            
            <div class="col-md-12">
                <input type="password"
                    class="form-control"
                    v-model="usr.rpswd"
                    id="confPass"
                    placeholder="******"
                    required>
            </div>

            <div class="col-md-12">
                <button 
                    onclick="location.href='/'"
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
import { apiAxios } from '@/boot/axios';
import type { regUsr } from '@/interfaces/regUsr';

export default {
    data() {
        return{
            usr: { } as regUsr
        };
    },

    methods: {
        handleSubmit() {
            apiAxios.post("http://localhost:5000/register", {
                email: this.usr.email,
                password: this.usr.pswd,
                repassword: this.usr.rpswd,
                nomMed: this.usr.nomUsr,
                apMed: this.usr.apUsr,
            }).then((res:any) => {
                console.log(res.data);
            }).catch((e:any) =>
                console.log(e));
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