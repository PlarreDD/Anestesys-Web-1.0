import { defineStore } from "pinia";
import { apiAxios } from '@/boot/axios';
import { useUserStore } from "./user-store";
import { ref } from "vue";
import swal from 'sweetalert2';

const userStore = useUserStore();

export const usePostAnestStore = defineStore('postAn', {
    // state() {
        
    // },
    actions: {
        /*------------------- Nota Post Anestésica -------------------*/
        saveNotaPA(infoNotaPost: any, pid: string){
            apiAxios({
                url: "http://localhost:5000/notapa",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid,
                    // Nota Post Anestésica
                    npa_TecAnestFinal: String(infoNotaPost.npa_TecAnestFinal),
                    npa_Intubacion: infoNotaPost.npa_Intubacion,
                    npa_NotaPostAnest: infoNotaPost.npa_NotaPostAnest,

                    // Signos Vitales al Egreso del Quirófano
                    signVitEgQx_TA: infoNotaPost.signVitEgQx_TA,
                    signVitEgQx_FC: infoNotaPost.signVitEgQx_FC,
                    signVitEgQx_FR: infoNotaPost.signVitEgQx_FR,
                    signVitEgQx_Temperatura: infoNotaPost.signVitEgQx_Temperatura,
                    signVitEgQx_Pulso: infoNotaPost.signVitEgQx_Pulso,
                    signVitEgQx_SpO2: infoNotaPost.signVitEgQx_SpO2,
                    signVitEgQx_EgresoPac: infoNotaPost.signVitEgQx_EgresoPac,
                }
            })
            .then((res: any) => {
                swal.fire({
                    title: 'Datos guardados correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
                // console.log("error: " + e);
            });
        },

        updateNotaPA(infoNotaPost: any, pid: string){
            apiAxios({
                url: `http://localhost:5000/notapa/${String(pid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    // Nota Post Anestésica
                    npa_TecAnestFinal: String(infoNotaPost.npa_TecAnestFinal),
                    npa_Intubacion: infoNotaPost.npa_Intubacion,
                    npa_NotaPostAnest: infoNotaPost.npa_NotaPostAnest,

                    // Signos Vitales al Egreso del Quirófano
                    signVitEgQx_TA: infoNotaPost.signVitEgQx_TA,
                    signVitEgQx_FC: infoNotaPost.signVitEgQx_FC,
                    signVitEgQx_FR: infoNotaPost.signVitEgQx_FR,
                    signVitEgQx_Temperatura: infoNotaPost.signVitEgQx_Temperatura,
                    signVitEgQx_Pulso: infoNotaPost.signVitEgQx_Pulso,
                    signVitEgQx_SpO2: infoNotaPost.signVitEgQx_SpO2,
                    signVitEgQx_EgresoPac: infoNotaPost.signVitEgQx_EgresoPac,
                }
            })
            .then((res: any) => {
                swal.fire({
                    title: 'Datos guardados correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
                // console.log("error: " + e);
            });
        },
        /*----------------------- Recuperación -----------------------*/
        saveRecupera(infoRec: any, pid: string){
            apiAxios({
                url: "http://localhost:5000/recupera",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid,
                    notaEval_Obs: infoRec.notaEval_Obs
                }
            })
            .then((res: any) => {
                swal.fire({
                    title: 'Datos guardados correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
                // console.log("error: " + e);
            });
        },

        updateRecupera(infoRec: any, pid: string){
            apiAxios({
                url: `http://localhost:5000/recupera/${String(pid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    notaEval_Obs: infoRec.notaEval_Obs
                }
            })
            .then((res: any) => {
                swal.fire({
                    title: 'Datos guardados correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
                // console.log("error: " + e);
            });
        },
    }
});