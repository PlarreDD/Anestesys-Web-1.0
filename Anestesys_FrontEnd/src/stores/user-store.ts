import { defineStore } from "pinia";
import { apiAxios } from '@/boot/axios';
import { ref } from "vue";
import router from "@/router";
import swal from 'sweetalert2';

export const useUserStore = defineStore('user', {
    state: () => ({
        token: ref(null),
        expiresIn: ref(null),
        Nombre: ref(null),
        Apellido: ref(null),
    }),

    actions: {
        loginAccess(email: string, pswd:string){
            apiAxios.post("http://localhost:5000/login", {
                email: email,
                password: pswd,
            }).then((res:any) => {
                this.token = res.data.tkn;
                this.expiresIn = res.data.xprIn;
                this.Nombre = res.data.Nombre;
                this.Apellido = res.data.Apellido;
                
                swal.fire({
                    html: 'Bienvenido <b>Dr. ' + this.Nombre + ' ' + this.Apellido + '</b>',
                    icon: 'info',
                    showConfirmButton: false,
                    showCloseButton: true,  
                    timer: 5000,
                    timerProgressBar: true,
                    toast: true,
                    position: 'top-end'
                  })

                router.push("/pre");
            }).catch((res:any) => {
                console.log("Usuario o contraseña inválidos");                    
            });
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
                swal.fire({
                    html: 'Usuario <b>' + nomUsr + ' ' + apUsr +
                          '</b> registrado con éxito.'+
                          '</b></br>Usuario: <b>' + email +
                          '</b></br>Contraseña: <b>' + genPswd.value +
                          '</b></br>Consulte su correo electrónico',
                    icon: 'info',
                    showConfirmButton: true,
                    showCloseButton: true,
                    toast: true, position: 'top-start'
                });
    
                document.body.style.backgroundImage = "url('../../public/images/login.webp')";
                router.push('/');

                console.log("Response " + res.data);
            }).catch((e:any) =>{
                if(e.response){
                    swal.fire({
                        html: 'El correo <b>' + email + '</b> ya está registrado',
                        icon: 'info',
                        showConfirmButton: false,
                        showCloseButton: true,  
                        timer: 5000,
                        timerProgressBar: true,
                        toast: true,
                        position: 'top-end'
                    })   
                }
                else if(e.request){
                    console.log(e.request);                    
                }
                else{
                    console.log("ErrorAx: ", e);
                }
            });
        },

        logout(){
            apiAxios.post("http://localhost:5000/logout")
            .then(
                this.token = null,
                this.expiresIn = null,
                // console.log("salir"),
            );
        },
    }
});
