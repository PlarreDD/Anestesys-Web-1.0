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
                
                /* Mensaje de Bienvenida */
                swal.fire({
                    html: 'Bienvenido <b>Dr. ' + this.Nombre + ' ' + this.Apellido + '</b>',
                    icon: 'info',
                    showConfirmButton: false,
                    showCloseButton: true,  
                    timer: 5000,
                    timerProgressBar: true,
                    toast: true,
                    position: 'top-end'
                });

                /* Redirección a la pantalla de Preanestésico */
                router.push("/pre");
            }).catch((res:any) => {
                /* Fallo de inicio de sesión */
                swal.fire({
                    html: 'Usuario o contraseña inválidos',
                    icon: 'info',
                    showConfirmButton: false,
                    showCloseButton: true,  
                    timer: 5000,
                    timerProgressBar: true,
                    toast: true,
                    position: 'top-end'
                });
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

            /* Generación de contraseña */
            NombreDr.value = nomUsr.trim().toLowerCase();
            arr = Array.from(NombreDr.value);
            genPswd.value = arr[0] + arr[1] + arr[2];

            ApPatDr.value = apUsr.trim().toLowerCase();
            arr = Array.from(ApPatDr.value);
            genPswd.value = genPswd.value + arr[0] + arr[1] + '#';
            
            FechaNac.value = fechaNac;
            arr = Array.from(FechaNac.value);
            genPswd.value = genPswd.value + arr[5] + arr[6] + arr[2] + arr[3];

            // console.log("Contraseña: " + genPswd.value);
            
            let timerInterval;
            
            /* Comunicación a con la base de datos */
            apiAxios.post("http://localhost:5000/register", {
                email: email,
                password: String(genPswd.value),
                repassword: String(genPswd.value),
                nomMed: nomUsr,
                apMed: apUsr,
            }).then((res:any) => {
                /* Mensaje de registro exitoso */
                swal.fire({
                    html: 'Usuario <b>' + nomUsr + ' ' + apUsr +
                          '</b> registrado con éxito.',
                    icon: 'info',
                    showConfirmButton: false,
                    showCloseButton: false,
                    timer: 5000,
                    timerProgressBar: true,
                    toast: true,
                    position: 'top-start',
                    didOpen: () => {
                        const b = swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {}, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    },
                }).then((result) => {
                    if (result.dismiss === swal.DismissReason.timer) {
                        /* Redirección al Login */
                        router.push('/');

                        /* Mensaje con las credenciales del usuario registrado */
                        swal.fire({
                            html: '</b></br>Usuario: <b>' + email +
                                  '</b></br>Contraseña: <b>' + genPswd.value +
                                  '</b></br>Guarde esta contraseña en un lugar seguro o consulte su correo',
                            icon: 'info',
                            showConfirmButton: true,
                            showCloseButton: true,
                            toast: true,
                            position: 'top',
                        });
                    }
                });
    
                // document.body.style.backgroundImage = "url('../../public/images/login.webp')";
                // console.log("Response " + res.data);
            }).catch((e:any) =>{
                if(e.response){
                    /* Mensaje de registro fallido */
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
            // .then(
            //     this.token = null,
            //     this.expiresIn = null,
            // );
            .then(() => {
                this.token = null;
                this.expiresIn = null;
                console.log("salir");
            })
        },
    }
});
