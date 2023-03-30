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
                    icon: 'success',
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
                    html: '<b>Usuario o contraseña inválidos</b>',
                    icon: 'error',
                    showConfirmButton: false,
                    showCloseButton: false,
                    timer: 4000,
                    timerProgressBar: true,
                });
            });
        },

        refreshToken(){
            apiAxios.get("http://localhost:5000/refresh")
            .then((res:any) => {
                this.token = res.data.tkn;
                this.expiresIn = res.data.xprIn;
                this.setTime();
            }).catch((e:any) => {
                // console.log(e)
            });
        },

        setTime(){
            setTimeout(() => {
                // console.log("TimeOut");
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

            let timerInterval;
            
            /* Comunicación a con la base de datos */
            apiAxios.post("http://localhost:5000/register", {
                email: email,
                password: String(genPswd.value),
                repassword: String(genPswd.value),
                nomMed: nomUsr,
                apMed: apUsr,})
                    .then((res:any) => {
                        /* Mensaje de registro exitoso */
                        swal.fire({
                            html: 'Usuario <b>' + nomUsr + ' ' + apUsr +
                                '</b> registrado con éxito.',
                            icon: 'success',
                            showConfirmButton: false,
                            showCloseButton: false,
                            timer: 1500,
                            timerProgressBar: true,
                            // toast: true,
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
                                    html: '<center></br>Usuario: <b>' + email +
                                          '</b></br>Contraseña: <b>' + genPswd.value +
                                          '</b></center></br></br>Guarde esta contraseña en</br>un lugar seguro o consulte su correo',                                    
                                    icon: 'info',
                                    showConfirmButton: true,
                                    showCloseButton: false,                                    
                                    width:680,
                                });
                            }
                        });
                    // console.log(res.data);
                    })
                    .catch((e:any) => {
                        if(e.response){
                            /* Mensaje de registro fallido */
                            swal.fire({
                                html: 'El correo <b>' + email + '</b> ya está registrado',
                                icon: 'error',
                                showConfirmButton: false,
                                showCloseButton: false,  
                                timer: 5000,
                                timerProgressBar: true,
                                // position: 'top-end'
                            });
                        }
                        else if(e.request){
                            // console.log(e.request);
                        }
                        else{
                            // console.log("ErrorAx: ", e);
                        }});
        },

        logout(){
            apiAxios.post("http://localhost:5000/logout")
                    .then(() => {
                        /* Mensaje de cierre de sesión */
                        // Falta uso de botones de cancelar y finaluizar
                        swal.fire({
                            html: 'Esta a punto de cerrar sesión',
                            icon: 'warning',
                            showConfirmButton: true,
                            showCancelButton: true,
                        }).then((result) => {
                            if (result.isConfirmed) {
                                this.token = null;
                                this.expiresIn = null;
                                window.location.href="/"                               
                            }
                        })
                    })                    
        },
    }
});
