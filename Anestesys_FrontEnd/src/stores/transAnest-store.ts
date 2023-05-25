import { defineStore } from "pinia";
import { apiAxios } from '@/boot/axios';
import { useUserStore } from "./user-store";
import swal from 'sweetalert2';
import { ref } from "vue";

const userStore = useUserStore();

export const useTransAnestStore = defineStore('transAn', {
    state: ()=> ({
        datosVentilacion: ref(null),
        pacienteID: ref(null),
    }),

    actions: {
        /* Datos del Ventilador */
        async saveDatosV(regTransAnest: any, pid: string){
            await apiAxios({
                url: "http://localhost:5000/trans",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid,
                    // Datos del Ventilador
                    modosVentilacion: regTransAnest.modosVentilacion,
                    peep: regTransAnest.peep,
                    vt: regTransAnest.vt,
                    frecResp: regTransAnest.frecResp,
                    IE: regTransAnest.IE,
                    PLimite: regTransAnest.PLimite,
                    Hr: regTransAnest.Hr,
                    /* Balance Total */
                    balanceTotal:regTransAnest.balanceTotal,
                    // Ingresos
                    solHartman: regTransAnest.solHartman,
                    solFisio: regTransAnest.solFisio,
                    glucosados: regTransAnest.glucosados,
                    gelatinas: regTransAnest.gelatinas,
                    almidones: regTransAnest.almidones,
                    albuminas: regTransAnest.albuminas,
                    paqGlobular: regTransAnest.paqGlobular,
                    plasmas: regTransAnest.plasmas,
                    plaquetas: regTransAnest.plaquetas,
                    crioprecipitados: regTransAnest.crioprecipitados,
                    factor_VII: regTransAnest.factor_VII,
                    factor_VIII: regTransAnest.factor_VIII,
                    otrosIngresos: regTransAnest.otrosIngresos,
                    // Egresos
                    liqAscitis: regTransAnest.liqAscitis,
                    sangradoAprox: regTransAnest.sangradoAprox,
                    uresis: regTransAnest.uresis,
                    expoQX: regTransAnest.expoQX,
                    reqBasales: regTransAnest.reqBasales,
                    ayuno: regTransAnest.ayuno,
                    otrosEgresos: regTransAnest.otrosEgresos,
                    /* Técnica Anestésica */
                    local: regTransAnest.local,
                    sedación: regTransAnest.sedación,
                    gralBalanceada: regTransAnest.gralBalanceada,
                    TIVA: regTransAnest.TIVA,
                    multimodal: regTransAnest.multimodal,
                    bloqMixto: regTransAnest.bloqMixto,
                    bloqPeriLum: regTransAnest.bloqPeriLum,
                    bloqPeriCaudal: regTransAnest.bloqPeriCaudal,
                    BloqEspinal: regTransAnest.BloqEspinal,
                    BloqPlexo: regTransAnest.BloqPlexo,
                    BloqTroncular: regTransAnest.BloqTroncular,
                    bloqPeriToracico: regTransAnest.bloqPeriToracico,
                    bloqPeriCervical: regTransAnest.bloqPeriCervical,
                    libreOpioides: regTransAnest.libreOpioides,
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

        async updateDatosV(regTransAnest: any, pid: string){
            await apiAxios({
                url: `http://localhost:5000/trans/${String(pid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    // Datos del Ventilador
                    modosVentilacion: regTransAnest.modosVentilacion,
                    peep: regTransAnest.peep,
                    vt: regTransAnest.vt,
                    frecResp: regTransAnest.frecResp,
                    IE: regTransAnest.IE,
                    PLimite: regTransAnest.PLimite,
                    Hr: regTransAnest.Hr,
                    /* Balance Total */
                    balanceTotal: regTransAnest.balanceTotal,
                    // Ingresos
                    solHartman: regTransAnest.solHartman,
                    solFisio: regTransAnest.solFisio,
                    glucosados: regTransAnest.glucosados,
                    gelatinas: regTransAnest.gelatinas,
                    almidones: regTransAnest.almidones,
                    albuminas: regTransAnest.albuminas,
                    paqGlobular: regTransAnest.paqGlobular,
                    plasmas: regTransAnest.plasmas,
                    plaquetas: regTransAnest.plaquetas,
                    crioprecipitados: regTransAnest.crioprecipitados,
                    factor_VII: regTransAnest.factor_VII,
                    factor_VIII: regTransAnest.factor_VIII,
                    otrosIngresos: regTransAnest.otrosIngresos,
                    // Egresos
                    liqAscitis: regTransAnest.liqAscitis,
                    sangradoAprox: regTransAnest.sangradoAprox,
                    uresis: regTransAnest.uresis,
                    expoQX: regTransAnest.expoQX,
                    reqBasales: regTransAnest.reqBasales,
                    ayuno: regTransAnest.ayuno,
                    otrosEgresos: regTransAnest.otrosEgresos,
                    /* Técnica Anestésica */
                    local: regTransAnest.local,
                    sedación: regTransAnest.sedación,
                    gralBalanceada: regTransAnest.gralBalanceada,
                    TIVA: regTransAnest.TIVA,
                    multimodal: regTransAnest.multimodal,
                    bloqMixto: regTransAnest.bloqMixto,
                    bloqPeriLum: regTransAnest.bloqPeriLum,
                    bloqPeriCaudal: regTransAnest.bloqPeriCaudal,
                    BloqEspinal: regTransAnest.BloqEspinal,
                    BloqPlexo: regTransAnest.BloqPlexo,
                    BloqTroncular: regTransAnest.BloqTroncular,
                    bloqPeriToracico: regTransAnest.bloqPeriToracico,
                    bloqPeriCervical: regTransAnest.bloqPeriCervical,
                    libreOpioides: regTransAnest.libreOpioides,
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

        async listDatosV(pid: string) {
            await apiAxios({
                url: `http://localhost:5000/trans/${String(pid)}`,
                method: "GET",
                headers: {
                Authorization: "Bearer " + userStore.token,
                },
            })
            .then((res: any) => {
                this.datosVentilacion = res.data.listaModosVent;
            })
            .catch((e: any) => {
                //   console.log(e);
            });
        },

        async getModoVent(dVId: string) {
            await apiAxios({
                url: `http://localhost:5000/trans/uno/${String(dVId)}`,
                method: "GET",
                headers: {
                  Authorization: "Bearer " + userStore.token,
                },
              })
              .then((res: any) => {
                this.datosVentilacion = res.data.modoVent;
              })
              .catch((e: any) => {
              //   console.log(e);
              });
        },

        async updateVentilador(idVentilador : string, modosVentilacion: string, peep: string, 
                                vt: string, frecResp: string, IE: string, PLimite: string, Hr:string){
            
            await apiAxios({
                url: `http://localhost:5000/trans/uno/${String(idVentilador)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    datosVentilador: [{ "modosVentilacion":modosVentilacion, 
                                        "peep":peep,
                                        "vt":vt, 
                                        "frecResp":frecResp,
                                        "IE":IE, 
                                        "PLimite":PLimite,
                                        "Hr":Hr
                                    }]
                },
            })
            .then((res: any) => {
                swal.fire({
                    title: 'Modo de ventilación actualizado correctamente',
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
        
        async deleteModoVent(dVId: string) {
            await apiAxios({
                url: `http://localhost:5000/trans/${String(dVId)}`,
                method: "DELETE",
                headers: {
                  Authorization: "Bearer " + userStore.token,
                },
              })
              .then((res: any) => {
                  swal.fire({
                    title: "Modo de ventilación eliminado correctamente",
                    icon: "success",
                    showConfirmButton: false,
                    toast: true,
                    position: "top-end",
                    timer: 2500,
                    timerProgressBar: true,
                  });
              })
              .catch((e: any) => {
                //   console.log(e);
              });
        },

        async updateBalanceH (regTransAnest: any, pid: string){
            await apiAxios({
                url: `http://localhost:5000/trans/bh/${String(pid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    /* Balance Total */
                    balanceTotal: regTransAnest.balanceTotal,
                    // Ingresos
                    solHartman: regTransAnest.solHartman,
                    solFisio: regTransAnest.solFisio,
                    glucosados: regTransAnest.glucosados,
                    gelatinas: regTransAnest.gelatinas,
                    almidones: regTransAnest.almidones,
                    albuminas: regTransAnest.albuminas,
                    paqGlobular: regTransAnest.paqGlobular,
                    plasmas: regTransAnest.plasmas,
                    plaquetas: regTransAnest.plaquetas,
                    crioprecipitados: regTransAnest.crioprecipitados,
                    factor_VII: regTransAnest.factor_VII,
                    factor_VIII: regTransAnest.factor_VIII,
                    otrosIngresos: regTransAnest.otrosIngresos,
                    // Egresos
                    liqAscitis: regTransAnest.liqAscitis,
                    sangradoAprox: regTransAnest.sangradoAprox,
                    uresis: regTransAnest.uresis,
                    expoQX: regTransAnest.expoQX,
                    reqBasales: regTransAnest.reqBasales,
                    ayuno: regTransAnest.ayuno,
                    otrosEgresos: regTransAnest.otrosEgresos,
                    /* Técnica Anestésica */
                    local: regTransAnest.local,
                    sedación: regTransAnest.sedación,
                    gralBalanceada: regTransAnest.gralBalanceada,
                    TIVA: regTransAnest.TIVA,
                    multimodal: regTransAnest.multimodal,
                    bloqMixto: regTransAnest.bloqMixto,
                    bloqPeriLum: regTransAnest.bloqPeriLum,
                    bloqPeriCaudal: regTransAnest.bloqPeriCaudal,
                    BloqEspinal: regTransAnest.BloqEspinal,
                    BloqPlexo: regTransAnest.BloqPlexo,
                    BloqTroncular: regTransAnest.BloqTroncular,
                    bloqPeriToracico: regTransAnest.bloqPeriToracico,
                    bloqPeriCervical: regTransAnest.bloqPeriCervical,
                    libreOpioides: regTransAnest.libreOpioides,
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
})