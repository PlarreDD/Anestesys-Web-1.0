import { defineStore } from "pinia";
import { apiAxios } from '@/boot/axios';
import { ref } from "vue";
import { useUserStore } from "./user-store";
import swal from 'sweetalert2';

const userStore = useUserStore();

export const usePostAnestStore = defineStore('postAn', {
    state:() => ({
        NotaPA: ref(null),
        TecnicaAnestesica: ref(null)
    }),

    actions: {
        /*------------------- Nota Post Anestésica -------------------*/
        async saveNotaPA(infoNotaPost: any, pid: string){
            await apiAxios({
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

                    // Caso Obstetrico Recien Nacido
                    casoObsRecNac_NumProd:infoNotaPost.casoObsRecNac_NumProd, casoObsRecNac1_Genero:infoNotaPost.casoObsRecNac1_Genero, 
                    casoObsRecNac1_HrNacimiento:infoNotaPost.casoObsRecNac1_HrNacimiento, casoObsRecNac1_Alumbramiento:infoNotaPost.casoObsRecNac1_Alumbramiento, 
                    casoObsRecNac1_Apgar1: infoNotaPost.casoObsRecNac1_Apgar1, casoObsRecNac1_Apgar5:infoNotaPost.casoObsRecNac1_Apgar5,
                    casoObsRecNac1_Capurro: infoNotaPost.casoObsRecNac1_Capurro, casoObsRecNac1_Peso:infoNotaPost.casoObsRecNac1_Peso, 
                    casoObsRecNac1_Talla:infoNotaPost.casoObsRecNac1_Talla, casoObsRecNac2_Genero:infoNotaPost.casoObsRecNac2_Genero, 
                    casoObsRecNac2_HrNacimiento:infoNotaPost.casoObsRecNac2_HrNacimiento, casoObsRecNac2_Alumbramiento:infoNotaPost.casoObsRecNac2_Alumbramiento,
                    casoObsRecNac2_Apgar1:infoNotaPost.casoObsRecNac2_Apgar1, casoObsRecNac2_Apgar5:infoNotaPost.casoObsRecNac2_Apgar5, 
                    casoObsRecNac2_Capurro:infoNotaPost.casoObsRecNac2_Capurro, casoObsRecNac2_Peso:infoNotaPost.casoObsRecNac2_Peso, 
                    casoObsRecNac2_Talla:infoNotaPost.casoObsRecNac2_Talla, casoObsRecNac3_Genero:infoNotaPost.casoObsRecNac3_Genero,
                    casoObsRecNac3_HrNacimiento:infoNotaPost.casoObsRecNac3_HrNacimiento, casoObsRecNac3_Alumbramiento:infoNotaPost.casoObsRecNac3_Alumbramiento, 
                    casoObsRecNac3_Apgar1:infoNotaPost.casoObsRecNac3_Apgar1, casoObsRecNac3_Apgar5:infoNotaPost.casoObsRecNac3_Apgar5, 
                    casoObsRecNac3_Capurro:infoNotaPost.casoObsRecNac3_Capurro, casoObsRecNac3_Peso:infoNotaPost.casoObsRecNac3_Peso,
                    casoObsRecNac3_Talla:infoNotaPost.casoObsRecNac3_Talla, casoObsRecNac4_Genero:infoNotaPost.casoObsRecNac4_Genero, 
                    casoObsRecNac4_HrNacimiento:infoNotaPost.casoObsRecNac4_HrNacimiento, casoObsRecNac4_Alumbramiento:infoNotaPost.casoObsRecNac4_Alumbramiento, 
                    casoObsRecNac4_Apgar1:infoNotaPost.casoObsRecNac4_Apgar1, casoObsRecNac4_Apgar5:infoNotaPost.casoObsRecNac4_Apgar5,
                    casoObsRecNac4_Capurro:infoNotaPost.casoObsRecNac4_Capurro, casoObsRecNac4_Peso:infoNotaPost.casoObsRecNac4_Peso, 
                    casoObsRecNac4_Talla:infoNotaPost.casoObsRecNac4_Talla, casoObsRecNac5_Genero:infoNotaPost.casoObsRecNac5_Genero, 
                    casoObsRecNac5_HrNacimiento:infoNotaPost.casoObsRecNac5_HrNacimiento, casoObsRecNac5_Alumbramiento:infoNotaPost.casoObsRecNac5_Alumbramiento,
                    casoObsRecNac5_Apgar1:infoNotaPost.casoObsRecNac5_Apgar1, casoObsRecNac5_Apgar5:infoNotaPost.casoObsRecNac5_Apgar5, 
                    casoObsRecNac5_Capurro:infoNotaPost.casoObsRecNac5_Capurro, casoObsRecNac5_Peso:infoNotaPost.casoObsRecNac5_Peso, 
                    casoObsRecNac5_Talla:infoNotaPost.casoObsRecNac5_Talla, casoObsRecNac6_Genero:infoNotaPost.casoObsRecNac6_Genero,
                    casoObsRecNac6_HrNacimiento:infoNotaPost.casoObsRecNac6_HrNacimiento, casoObsRecNac6_Alumbramiento:infoNotaPost.casoObsRecNac6_Alumbramiento, 
                    casoObsRecNac6_Apgar1:infoNotaPost.casoObsRecNac6_Apgar1, casoObsRecNac6_Apgar5:infoNotaPost.casoObsRecNac6_Apgar5, 
                    casoObsRecNac6_Capurro:infoNotaPost.casoObsRecNac6_Capurro, casoObsRecNac6_Peso:infoNotaPost.casoObsRecNac6_Peso,
                    casoObsRecNac6_Talla:infoNotaPost.casoObsRecNac6_Talla
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

        async updateNotaPA(infoNotaPost: any, pid: string, tecnicaAnest: Object){
            infoNotaPost.npa_TecAnestFinal = String(tecnicaAnest);
            console.log(tecnicaAnest + " " + infoNotaPost.npa_TecAnestFinal);
            
            await apiAxios({
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

                    // Caso Obstetrico Recien Nacido
                    casoObsRecNac_NumProd:infoNotaPost.casoObsRecNac_NumProd, casoObsRecNac1_Genero:infoNotaPost.casoObsRecNac1_Genero, 
                    casoObsRecNac1_HrNacimiento:infoNotaPost.casoObsRecNac1_HrNacimiento, casoObsRecNac1_Alumbramiento:infoNotaPost.casoObsRecNac1_Alumbramiento, 
                    casoObsRecNac1_Apgar1: infoNotaPost.casoObsRecNac1_Apgar1, casoObsRecNac1_Apgar5:infoNotaPost.casoObsRecNac1_Apgar5,
                    casoObsRecNac1_Capurro: infoNotaPost.casoObsRecNac1_Capurro, casoObsRecNac1_Peso:infoNotaPost.casoObsRecNac1_Peso, 
                    casoObsRecNac1_Talla:infoNotaPost.casoObsRecNac1_Talla, casoObsRecNac2_Genero:infoNotaPost.casoObsRecNac2_Genero, 
                    casoObsRecNac2_HrNacimiento:infoNotaPost.casoObsRecNac2_HrNacimiento, casoObsRecNac2_Alumbramiento:infoNotaPost.casoObsRecNac2_Alumbramiento,
                    casoObsRecNac2_Apgar1:infoNotaPost.casoObsRecNac2_Apgar1, casoObsRecNac2_Apgar5:infoNotaPost.casoObsRecNac2_Apgar5, 
                    casoObsRecNac2_Capurro:infoNotaPost.casoObsRecNac2_Capurro, casoObsRecNac2_Peso:infoNotaPost.casoObsRecNac2_Peso, 
                    casoObsRecNac2_Talla:infoNotaPost.casoObsRecNac2_Talla, casoObsRecNac3_Genero:infoNotaPost.casoObsRecNac3_Genero,
                    casoObsRecNac3_HrNacimiento:infoNotaPost.casoObsRecNac3_HrNacimiento, casoObsRecNac3_Alumbramiento:infoNotaPost.casoObsRecNac3_Alumbramiento, 
                    casoObsRecNac3_Apgar1:infoNotaPost.casoObsRecNac3_Apgar1, casoObsRecNac3_Apgar5:infoNotaPost.casoObsRecNac3_Apgar5, 
                    casoObsRecNac3_Capurro:infoNotaPost.casoObsRecNac3_Capurro, casoObsRecNac3_Peso:infoNotaPost.casoObsRecNac3_Peso,
                    casoObsRecNac3_Talla:infoNotaPost.casoObsRecNac3_Talla, casoObsRecNac4_Genero:infoNotaPost.casoObsRecNac4_Genero, 
                    casoObsRecNac4_HrNacimiento:infoNotaPost.casoObsRecNac4_HrNacimiento, casoObsRecNac4_Alumbramiento:infoNotaPost.casoObsRecNac4_Alumbramiento, 
                    casoObsRecNac4_Apgar1:infoNotaPost.casoObsRecNac4_Apgar1, casoObsRecNac4_Apgar5:infoNotaPost.casoObsRecNac4_Apgar5,
                    casoObsRecNac4_Capurro:infoNotaPost.casoObsRecNac4_Capurro, casoObsRecNac4_Peso:infoNotaPost.casoObsRecNac4_Peso, 
                    casoObsRecNac4_Talla:infoNotaPost.casoObsRecNac4_Talla, casoObsRecNac5_Genero:infoNotaPost.casoObsRecNac5_Genero, 
                    casoObsRecNac5_HrNacimiento:infoNotaPost.casoObsRecNac5_HrNacimiento, casoObsRecNac5_Alumbramiento:infoNotaPost.casoObsRecNac5_Alumbramiento,
                    casoObsRecNac5_Apgar1:infoNotaPost.casoObsRecNac5_Apgar1, casoObsRecNac5_Apgar5:infoNotaPost.casoObsRecNac5_Apgar5, 
                    casoObsRecNac5_Capurro:infoNotaPost.casoObsRecNac5_Capurro, casoObsRecNac5_Peso:infoNotaPost.casoObsRecNac5_Peso, 
                    casoObsRecNac5_Talla:infoNotaPost.casoObsRecNac5_Talla, casoObsRecNac6_Genero:infoNotaPost.casoObsRecNac6_Genero,
                    casoObsRecNac6_HrNacimiento:infoNotaPost.casoObsRecNac6_HrNacimiento, casoObsRecNac6_Alumbramiento:infoNotaPost.casoObsRecNac6_Alumbramiento, 
                    casoObsRecNac6_Apgar1:infoNotaPost.casoObsRecNac6_Apgar1, casoObsRecNac6_Apgar5:infoNotaPost.casoObsRecNac6_Apgar5, 
                    casoObsRecNac6_Capurro:infoNotaPost.casoObsRecNac6_Capurro, casoObsRecNac6_Peso:infoNotaPost.casoObsRecNac6_Peso,
                    casoObsRecNac6_Talla:infoNotaPost.casoObsRecNac6_Talla
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

        async listNotaPA(pid: string){
            await apiAxios({
                url: `http://localhost:5000/notapa/${String(pid)}`,
                method: "GET",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
            })
            .then((res: any) => {
                this.NotaPA = res.data.notaPA;
            })
            .catch((e: any) => {
                // console.log("error: " + e);
            });
        },
        /*----------------------- Recuperación -----------------------*/
        async saveRecupera(infoRec: any, pid: string){
            await apiAxios({
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

                    // Alta Recuperación
                    altaRec_0min: infoRec.altaRec_0min,
                    altaRec_15min: infoRec.altaRec_15min,
                    altaRec_30min: infoRec.altaRec_30min,
                    altaRec_45min: infoRec.altaRec_45min,
                    altaRec_60min: infoRec.altaRec_60min,
                    altaRec_90min: infoRec.altaRec_90min,
                    altaRec_120min: infoRec.aldreteRec_Aldrete120,
                    altaRec_CalifAldrete: infoRec.altaRec_CalifAldrete,
                    altaRec_Obs: infoRec.altaRec_Obs,
                    altaRec_FechaAltaRec: infoRec.altaRec_FechaAltaRec,
                    altaRec_HrAltaRec: infoRec.altaRec_HrAltaRec,
                    altaRec_NomMedAnest: infoRec.altaRec_NomMedAnest,
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

        async updateRecupera(infoRec: any, pid: string){
            await apiAxios({
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
                    
                    // Alta Recuperación
                    altaRec_0min: infoRec.altaRec_0min,
                    altaRec_15min: infoRec.altaRec_15min,
                    altaRec_30min: infoRec.altaRec_30min,
                    altaRec_45min: infoRec.altaRec_45min,
                    altaRec_60min: infoRec.altaRec_60min,
                    altaRec_90min: infoRec.altaRec_90min,
                    altaRec_120min: infoRec.aldreteRec_Aldrete120,
                    altaRec_CalifAldrete: infoRec.altaRec_CalifAldrete,
                    altaRec_Obs: infoRec.altaRec_Obs,
                    altaRec_FechaAltaRec: infoRec.altaRec_FechaAltaRec,
                    altaRec_HrAltaRec: infoRec.altaRec_HrAltaRec,
                    altaRec_NomMedAnest: infoRec.altaRec_NomMedAnest,
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