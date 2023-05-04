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
                    // Nota de Evaluación UCPA
                    notaEval_Obs: infoRec.notaEval_Obs,
                    // Aldrete de Recuperación
                    // Frecuencia Cardiaca
                    aldreteRec_FrecCardIn: infoRec.aldreteRec_FrecCardIn,
                    aldreteRec_FrecCard15: infoRec.aldreteRec_FrecCard15,
                    aldreteRec_FrecCard30: infoRec.aldreteRec_FrecCard30,
                    aldreteRec_FrecCard45: infoRec.aldreteRec_FrecCard45,
                    aldreteRec_FrecCard60: infoRec.aldreteRec_FrecCard60,
                    aldreteRec_FrecCard90: infoRec.aldreteRec_FrecCard90,
                    aldreteRec_FrecCard120: infoRec.aldreteRec_FrecCard120,
                    // Frecuencia Respiratoria
                    aldreteRec_FrecRespIn: infoRec.aldreteRec_FrecRespIn,
                    aldreteRec_FrecResp15: infoRec.aldreteRec_FrecResp15,
                    aldreteRec_FrecResp30: infoRec.aldreteRec_FrecResp30,
                    aldreteRec_FrecResp45: infoRec.aldreteRec_FrecResp45,
                    aldreteRec_FrecResp60: infoRec.aldreteRec_FrecResp60,
                    aldreteRec_FrecResp90: infoRec.aldreteRec_FrecResp90,
                    aldreteRec_FrecResp120: infoRec.aldreteRec_FrecResp120,
                    // Tension Arterial
                    aldreteRec_TensArteIn: infoRec.aldreteRec_TensArteIn,
                    aldreteRec_TensArte15: infoRec.aldreteRec_TensArte15,
                    aldreteRec_TensArte30: infoRec.aldreteRec_TensArte30,
                    aldreteRec_TensArte45: infoRec.aldreteRec_TensArte45,
                    aldreteRec_TensArte60: infoRec.aldreteRec_TensArte60,
                    aldreteRec_TensArte90: infoRec.aldreteRec_TensArte90,
                    aldreteRec_TensArte120: infoRec.aldreteRec_TensArte120,
                    // Saturación de O2
                    aldreteRec_SatO2In: infoRec.aldreteRec_SatO2In,
                    aldreteRec_SatO215: infoRec.aldreteRec_SatO215,
                    aldreteRec_SatO230: infoRec.aldreteRec_SatO230,
                    aldreteRec_SatO245: infoRec.aldreteRec_SatO245,
                    aldreteRec_SatO260: infoRec.aldreteRec_SatO260,
                    aldreteRec_SatO290: infoRec.aldreteRec_SatO290,
                    aldreteRec_SatO2120: infoRec.aldreteRec_SatO2120,
                    // Aldrete
                    aldreteRec_AldreteIn: infoRec.aldreteRec_AldreteIn,
                    aldreteRec_Aldrete15: infoRec.aldreteRec_Aldrete15,
                    aldreteRec_Aldrete30: infoRec.aldreteRec_Aldrete30,
                    aldreteRec_Aldrete45: infoRec.aldreteRec_Aldrete45,
                    aldreteRec_Aldrete60: infoRec.aldreteRec_Aldrete60,
                    aldreteRec_Aldrete90: infoRec.aldreteRec_Aldrete90,
                    aldreteRec_Aldrete120: infoRec.aldreteRec_Aldrete120,
                    // Bromage
                    aldreteRec_BromageIn: infoRec.aldreteRec_BromageIn,
                    aldreteRec_Bromage15: infoRec.aldreteRec_Bromage15,
                    aldreteRec_Bromage30: infoRec.aldreteRec_Bromage30,
                    aldreteRec_Bromage45: infoRec.aldreteRec_Bromage45,
                    aldreteRec_Bromage60: infoRec.aldreteRec_Bromage60,
                    aldreteRec_Bromage90: infoRec.aldreteRec_Bromage90,
                    aldreteRec_Bromage120: infoRec.aldreteRec_Bromage120,
                    // Nauseas/Vomito
                    aldreteRec_NauseasIn: infoRec.aldreteRec_NauseasIn,
                    aldreteRec_Nauseas15: infoRec.aldreteRec_Nauseas15,
                    aldreteRec_Nauseas30: infoRec.aldreteRec_Nauseas30,
                    aldreteRec_Nauseas45: infoRec.aldreteRec_Nauseas45,
                    aldreteRec_Nauseas60: infoRec.aldreteRec_Nauseas60,
                    aldreteRec_Nauseas90: infoRec.aldreteRec_Nauseas90,
                    aldreteRec_Nauseas120: infoRec.aldreteRec_Nauseas120,
                    // Escala de EVA de Dolor
                    aldreteRec_escEVADolIn: infoRec.aldreteRec_escEVADolIn,
                    aldreteRec_escEVADol15: infoRec.aldreteRec_escEVADol15,
                    aldreteRec_escEVADol30: infoRec.aldreteRec_escEVADol30,
                    aldreteRec_escEVADol45: infoRec.aldreteRec_escEVADol45,
                    aldreteRec_escEVADol60: infoRec.aldreteRec_escEVADol60,
                    aldreteRec_escEVADol90: infoRec.aldreteRec_escEVADol90,
                    aldreteRec_escEVADol120: infoRec.aldreteRec_escEVADol120,
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
                    // Nota de Evaluación UCPA
                    notaEval_Obs: infoRec.notaEval_Obs,
                    // Aldrete de Recuperación
                    // Frecuencia Cardiaca
                    aldreteRec_FrecCardIn: infoRec.aldreteRec_FrecCardIn,
                    aldreteRec_FrecCard15: infoRec.aldreteRec_FrecCard15,
                    aldreteRec_FrecCard30: infoRec.aldreteRec_FrecCard30,
                    aldreteRec_FrecCard45: infoRec.aldreteRec_FrecCard45,
                    aldreteRec_FrecCard60: infoRec.aldreteRec_FrecCard60,
                    aldreteRec_FrecCard90: infoRec.aldreteRec_FrecCard90,
                    aldreteRec_FrecCard120: infoRec.aldreteRec_FrecCard120,
                    // Frecuencia Respiratoria
                    aldreteRec_FrecRespIn: infoRec.aldreteRec_FrecRespIn,
                    aldreteRec_FrecResp15: infoRec.aldreteRec_FrecResp15,
                    aldreteRec_FrecResp30: infoRec.aldreteRec_FrecResp30,
                    aldreteRec_FrecResp45: infoRec.aldreteRec_FrecResp45,
                    aldreteRec_FrecResp60: infoRec.aldreteRec_FrecResp60,
                    aldreteRec_FrecResp90: infoRec.aldreteRec_FrecResp90,
                    aldreteRec_FrecResp120: infoRec.aldreteRec_FrecResp120,
                    // Tension Arterial
                    aldreteRec_TensArteIn: infoRec.aldreteRec_TensArteIn,
                    aldreteRec_TensArte15: infoRec.aldreteRec_TensArte15,
                    aldreteRec_TensArte30: infoRec.aldreteRec_TensArte30,
                    aldreteRec_TensArte45: infoRec.aldreteRec_TensArte45,
                    aldreteRec_TensArte60: infoRec.aldreteRec_TensArte60,
                    aldreteRec_TensArte90: infoRec.aldreteRec_TensArte90,
                    aldreteRec_TensArte120: infoRec.aldreteRec_TensArte120,
                    // Saturación de O2
                    aldreteRec_SatO2In: infoRec.aldreteRec_SatO2In,
                    aldreteRec_SatO215: infoRec.aldreteRec_SatO215,
                    aldreteRec_SatO230: infoRec.aldreteRec_SatO230,
                    aldreteRec_SatO245: infoRec.aldreteRec_SatO245,
                    aldreteRec_SatO260: infoRec.aldreteRec_SatO260,
                    aldreteRec_SatO290: infoRec.aldreteRec_SatO290,
                    aldreteRec_SatO2120: infoRec.aldreteRec_SatO2120,
                    // Aldrete
                    aldreteRec_AldreteIn: infoRec.aldreteRec_AldreteIn,
                    aldreteRec_Aldrete15: infoRec.aldreteRec_Aldrete15,
                    aldreteRec_Aldrete30: infoRec.aldreteRec_Aldrete30,
                    aldreteRec_Aldrete45: infoRec.aldreteRec_Aldrete45,
                    aldreteRec_Aldrete60: infoRec.aldreteRec_Aldrete60,
                    aldreteRec_Aldrete90: infoRec.aldreteRec_Aldrete90,
                    aldreteRec_Aldrete120: infoRec.aldreteRec_Aldrete120,
                    // Bromage
                    aldreteRec_BromageIn: infoRec.aldreteRec_BromageIn,
                    aldreteRec_Bromage15: infoRec.aldreteRec_Bromage15,
                    aldreteRec_Bromage30: infoRec.aldreteRec_Bromage30,
                    aldreteRec_Bromage45: infoRec.aldreteRec_Bromage45,
                    aldreteRec_Bromage60: infoRec.aldreteRec_Bromage60,
                    aldreteRec_Bromage90: infoRec.aldreteRec_Bromage90,
                    aldreteRec_Bromage120: infoRec.aldreteRec_Bromage120,
                    // Nauseas/Vomito
                    aldreteRec_NauseasIn: infoRec.aldreteRec_NauseasIn,
                    aldreteRec_Nauseas15: infoRec.aldreteRec_Nauseas15,
                    aldreteRec_Nauseas30: infoRec.aldreteRec_Nauseas30,
                    aldreteRec_Nauseas45: infoRec.aldreteRec_Nauseas45,
                    aldreteRec_Nauseas60: infoRec.aldreteRec_Nauseas60,
                    aldreteRec_Nauseas90: infoRec.aldreteRec_Nauseas90,
                    aldreteRec_Nauseas120: infoRec.aldreteRec_Nauseas120,
                    // Escala de EVA de Dolor
                    aldreteRec_escEVADolIn: infoRec.aldreteRec_escEVADolIn,
                    aldreteRec_escEVADol15: infoRec.aldreteRec_escEVADol15,
                    aldreteRec_escEVADol30: infoRec.aldreteRec_escEVADol30,
                    aldreteRec_escEVADol45: infoRec.aldreteRec_escEVADol45,
                    aldreteRec_escEVADol60: infoRec.aldreteRec_escEVADol60,
                    aldreteRec_escEVADol90: infoRec.aldreteRec_escEVADol90,
                    aldreteRec_escEVADol120: infoRec.aldreteRec_escEVADol120,
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