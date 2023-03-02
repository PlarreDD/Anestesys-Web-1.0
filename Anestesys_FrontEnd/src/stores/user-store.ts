import { defineStore } from "pinia";
import { apiAxios } from '@/boot/axios';
import { ref } from "vue";
import router from "@/router";

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
                this.token = res.data.tkn;
                this.expiresIn = res.data.xprIn;
                router.push("/pre");
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

        logout(){
            apiAxios.post("http://localhost:5000/logout")
            .then(
                this.token = null,
                this.expiresIn = null,
            );
        },
    }    
});
