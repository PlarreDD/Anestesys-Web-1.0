import { defineStore } from "pinia";
import { apiAxios } from '@/boot/axios';
import { ref } from "vue";

export const useUserStore = defineStore('user', {
    state: () => ({
        token: ref(null),
        expiresIn: ref(null),
    }),

    actions: {
        loginAccess(email: string, pswd:string){
            apiAxios.post("http://localhost:5000/login", {
                email: email,
                password: pswd,
            }).then((res:any) => {
                return this.token = res.data.tkn,
                       this.expiresIn = res.data.xprIn;
                // return this.token = "NuevoToken",
                //        this.expiresIn = "TimeOut";
            }).catch((e:any) =>
                console.log(e));
        },

        refreshToken(){
            apiAxios.get("http://localhost:5000/refresh")
            .then((res:any) => {
                this.token = res.data.tkn;
                this.expiresIn = res.data.xprIn;
                this.setTime();
            }).catch((e:any) =>
                console.log(e));
        },

        setTime(){
            setTimeout(() => {
                console.log("TimeOut");
                this.refreshToken();
            }, Number(this.expiresIn) * 1000 - 5000)
        },

        registerUsr(email: string, nomUsr: string, apUsr: string, fechaNac: string){
            const NombreDr = ref('');
            const ApPatDr = ref('');
            const FechaNac = ref('');
            var arr = [];
            const genPswd = ref('');

            NombreDr.value = nomUsr.trim();
            arr = Array.from(NombreDr.value);
            genPswd.value = arr[0] + arr[1] + arr[2];

            ApPatDr.value = apUsr.trim();
            arr = Array.from(ApPatDr.value);
            genPswd.value = genPswd.value + arr[0] + arr[1] + '#';
            
            FechaNac.value = fechaNac;
            arr = Array.from(FechaNac.value);
            genPswd.value = genPswd.value + arr[5] + arr[6] + arr[2] + arr[3];

            console.log("Contraseña: " + genPswd.value);
            
            apiAxios.post("http://localhost:5000/register", {
                email: email,
                password: String(genPswd.value),
                repassword: String(genPswd.value),
                nomMed: nomUsr,
                apMed: apUsr,
            }).then((res:any) => {
                console.log(res.data);
            }).catch((e:any) =>
                console.log(e));
        },

        logout(){
            apiAxios.post("http://localhost:5000/logout")
            .then(
                this.token = null,
                this.expiresIn = null,
            );
        },
    }
});
