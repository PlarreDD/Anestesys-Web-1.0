import { defineStore } from "pinia";
import { apiAxios } from '@/boot/axios';

export const useUserStore = defineStore('user', {
    state: () => ({
        token: "tknGlobal",
        expiresIn: "xprsGlobal",
    }),

    actions: {
        loginAccess(email: string, pswd:string){
            apiAxios.post("http://localhost:5000/login", {
                email: email,
                password: pswd,
            }).then((res:any) => {
                this.token = res.data.tkn;
                this.expiresIn = res.data.xprIn;
            }).catch((e:any) =>
                console.log(e));
        },

        refreshToken(){
            console.log("refresh");
            
            apiAxios.get("http://localhost:5000/refresh")
            .then((res:any) => {
                this.token = res.data.tkn;
                this.expiresIn = res.data.xprIn;
            }).catch((e:any) =>
                console.log(e));
        },
    }    
});