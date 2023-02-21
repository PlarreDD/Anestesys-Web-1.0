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
import { ref } from "vue";

const NombreDr = ref('');
const ApPatDr = ref('');
const FechaNac = ref('');
var arr = [];
const genPswd = ref('');

export default {
    data() {
        return{
            usr: { } as regUsr,
            //NombreDr,
        };
    },

    methods: {
        handleSubmit() {
            NombreDr.value = this.usr.nomUsr;
            arr = Array.from(NombreDr.value);
            genPswd.value = arr[0] + arr[1] + arr[2];

            ApPatDr.value = this.usr.apUsr;
            arr = Array.from(ApPatDr.value);
            genPswd.value = genPswd.value + arr[0] + arr[1] + '#';
            
            console.log("Nombre: " + genPswd.value);
            
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
};

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