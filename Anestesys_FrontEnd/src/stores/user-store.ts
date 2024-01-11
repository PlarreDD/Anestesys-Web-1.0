import { defineStore } from "pinia";
import { apiAxios } from '@/boot/axios';
import { ref } from "vue";
import router from "@/router";
import swal from 'sweetalert2';

export const useUserStore = defineStore('user', {
    state: () => ({
        token: ref(null),
        expiresIn: ref(null),
        IdMed: ref(null),
        Nombre: ref(null),
        Apellido: ref(null),
        FechaNac: ref(null),
        Cedula: ref(null),
        Especialidad: ref(null),
        Correo: ref(null),
        Foto: ref(null)
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
                this.FechaNac = res.data.FechaNac
                this.Cedula = res.data.Cedula
                this.Especialidad = res.data.Especialidad
                this.Correo = res.data.Correo
                this.Foto = res.data.Foto
                this.IdMed = res.data.Id
                
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
            });
        },

        setTime(){
            setTimeout(() => {
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
            genPswd.value = arr[0];

            ApPatDr.value = apUsr.trim().toLowerCase();
            arr = Array.from(ApPatDr.value);
            genPswd.value = genPswd.value + arr[0] + arr[1] + arr[2] + arr[3] + '#';
            
            FechaNac.value = fechaNac;
            arr = Array.from(FechaNac.value);
            genPswd.value = genPswd.value + arr[0] + arr[1] + arr[2] + arr[3];

            let timerInterval;
            
            /* Comunicación a con la base de datos */
            apiAxios.post("http://localhost:5000/register", {
                email: email,
                password: String(genPswd.value),
                nomMed: nomUsr,
                apMed: apUsr,
                fechaNac: fechaNac,
                cedula: "",
                especialidad: "",
                foto: "../../public/images/perfil.jpg",
                horaSesion: Date()})
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
                        }
                        else{
                        }});
        },

        updateMed( _id:string, formData:FormData){
            apiAxios({
                url: `http://localhost:5000/updateMed/${String(this.IdMed)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + this.token,
                },
                data: formData
            })
            .then((res: any) => {
                swal.fire({
                    title: 'Datos del perfil actualizados correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
            });
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
