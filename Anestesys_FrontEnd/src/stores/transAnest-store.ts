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
        medicamentos: ref(null),
        medicamentoID: ref(null),
        relevos: ref(null),
        relevoID: ref(null),
        eventos: ref(null),
        eventoID: ref(null),
        datosMSV: ref(null),
        envDat: ref(false),
        balanceParcial: ref(null),

        recognition: ref(null),
        intervalo: ref(null),
        microfono: ref(false),
        microfonoEscucha: ref(false),
        ingresoQuirofano: ref(false),
        salidaQuirofano: ref(false),
        
        // Botones técnica
        tipoTecnica: false,

        cirugiaID: ref(null),

        // Botones medicamento
        btnAddMedicamentos: true,
        btnUpdateMedicamentos: false,
        btnActualizaMedicamento: false,

        // Botones relevo
        btnAddRelevos:true,
        btnUpdateRelevos:false,
        btnActualizaRelevo:false,

        // Botones evento
        btnAddEventos:true,
        btnUpdateEventos:false,
        btnActualizaEvento:false,

        // Botones ventilador
        btnAddVentilador:true,
        btnUpdateVentilador:false,
        btnActualizaVentilador:false,

        //Botones balance
        btnActualizarBalance:false,

        //Botones tiempos quirurgicos
        btnTQX: false,

        activoAnesIN: false,
        noActivoAnesIN: true,

        activoCxIN: false,
        noActivoCxIN: true,

        activoCxOUT: false,
        noActivoCxOUT: true,

        activoAnesOUT: false,
        noActivoAnesOUT: true,

        // TRANS

        // DatosVentilador
        modosVentilacion: ref(null),
        PEEP: ref(null),
        VT: ref(null),
        FC: ref(null),
        IE: ref(null),
        PLimite: ref(null),
        Hr: ref(null),
        // Balance Total
        balanceTotal:ref(null),
        // Ingresos
        solHartman: ref(null),
        solFisio: ref(null),
        glucosados: ref(null),
        gelatinas: ref(null),
        almidones: ref(null),
        albuminas: ref(null),
        paqGlobular: ref(null),
        plasmas: ref(null),
        plaquetas: ref(null),
        crioprecipitados: ref(null),
        factor_VII: ref(null),
        factor_VIII: ref(null),
        otrosIngresos: ref(null),
        // Egresos
        liqAscitis: ref(null),
        sangradoAprox: ref(null),
        uresis: ref(null),
        expoQX: ref(null),
        reqBasales: ref(null),
        ayuno: ref(null),
        otrosEgresos: ref(null),
        // Tiempos QX
        ingresoQX: ref(null),
        inicioAn: ref(null),
        inicioCx: ref(null),
        finCx: ref(null),
        finAn: ref(null),
        egresoQx: ref(null),
        // Datos Medicamentos
        tipoMed: ref(null),
        medicamento: ref(null),
        dosisMed: ref(null),
        unidadMed: ref(null),
        viaMed: ref(null),
        horaInicioMed: ref(null),
        horaFinalMed: ref(null),
        observacionesMed: ref(null),
        // Relevos
        horaRelevo: ref(null),
        tipoRel: ref(null),
        matriculaRel: ref(null),
        anestesiologoRel: ref(null),
        observacionesRel: ref(null),
        // Eventos Criticos
        horaEvento:ref(null),
        tipoEve:ref(null),
        detalleEvento:ref(null),
    }),

    actions: {
        /* Datos del Ventilador */
        async saveDatosV(regTransAnest: any, pid: string){       
            await apiAxios({
                url: "/trans",
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
                    otrosEgresos: regTransAnest.otrosEgresos
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
                window.log.error('Ocurrió un error:', e)
            });
        },

        async saveNuevoDatosV(regTransAnest: any, pid: string, cxid: string){        
            await apiAxios({
                url: "/trans/add",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid, cxid: cxid,
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
                    otrosEgresos: regTransAnest.otrosEgresos
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
                window.log.error('Ocurrió un error:', e)
            });
        },

        async updateDatosV(regTransAnest: any, pid: string){
            await apiAxios({
                url: `/trans/${String(pid)}`,
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
                    otrosEgresos: regTransAnest.otrosEgresos
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
                window.log.error('Ocurrió un error:', e)
            });
        },

        async updateNuevoDatosV(regTransAnest: any, pid: string, cxid: string){
            await apiAxios({
                url: `/trans/add/${String(pid)}/${String(cxid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid,
                    cxid: this.cirugiaID,
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
                    otrosEgresos: regTransAnest.otrosEgresos
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
                window.log.error('Ocurrió un error:', e)
            });
        },

        async listDatosV(pid: string) {
            await apiAxios({
                url: `/trans/${String(pid)}`,
                method: "GET",
                headers: {
                Authorization: "Bearer " + userStore.token,
                },
            })
            .then((res: any) => {
                this.datosVentilacion = res.data.listaModosVent;
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async listNuevoDatosV(pid: string, cxid: string) {
            await apiAxios({
                url: `/trans/add/${String(pid)}/${String(cxid)}`,
                method: "GET",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
            })
            .then((res: any) => {
                this.datosVentilacion = res.data.listaModosVent;
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async getModoVent(dVId: string) {
            await apiAxios({
                url: `/trans/uno/${String(dVId)}`,
                method: "GET",
                headers: {
                  Authorization: "Bearer " + userStore.token,
                },
              })
              .then((res: any) => {
                this.datosVentilacion = res.data.modoVent;
              })
              .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
              });
        },

        async updateVentilador(idVentilador : string, modosVentilacion: string, peep: string, 
                                vt: string, frecResp: string, IE: string, PLimite: string, Hr:string){
            
            await apiAxios({
                url: `/trans/uno/${String(idVentilador)}`,
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
                window.log.error('Ocurrió un error:', e)
            });
        },
        
        async deleteModoVent(dVId: string) {
            await apiAxios({
                url: `/trans/${String(dVId)}`,
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
                window.log.error('Ocurrió un error:', e)
              });
        },

        async getBalanceHPList(pid: string) {
            await apiAxios({
                url: `/trans/bhp/${String(pid)}`,
                method: "GET",
                headers: {
                Authorization: "Bearer " + userStore.token,
                },                
            })
            .then((res: any) => {
                this.balanceParcial = res.data.balance;
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async getNuevoBalanceHPList(pid: string, cxid: string) {
            await apiAxios({
                url: `/trans/bhp/add/${String(pid)}/${String(cxid)}`,
                method: "GET",
                headers: {
                Authorization: "Bearer " + userStore.token,
                },                
            })
            .then((res: any) => {
                this.balanceParcial = res.data.balance;
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async updateBalanceHP (regTransAnest: any, pid: string){
            await apiAxios({
                url: `/trans/bhp/${String(pid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {                    
                    horaBalance: regTransAnest.horaBalance, ingresos: regTransAnest.ingresos, egresos: regTransAnest.egresos, balanceP: regTransAnest.balanceP                   
                }
            })
            .then((res: any) => {
                this.balanceParcial = res.data.balancesParciales;
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async updateNuevoBalanceHP (regTransAnest: any, pid: string, cxid: string){
            await apiAxios({
                url: `/trans/bhp/add/${String(pid)}/${String(cxid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid,
                    cxid: this.cirugiaID,                    
                    horaBalance: regTransAnest.horaBalance, ingresos: regTransAnest.ingresos, egresos: regTransAnest.egresos, balanceP: regTransAnest.balanceP        
                }
            })
            .then((res: any) => {
                this.balanceParcial = res.data.balancesParciales;
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async updateBalanceH (regTransAnest: any, pid: string){
            await apiAxios({
                url: `/trans/bh/${String(pid)}`,
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
                window.log.error('Ocurrió un error:', e)
            });
        },

        async updateNuevoBalanceH (regTransAnest: any, pid: string, cxid: string){
            await apiAxios({
                url: `/trans/bh/add/${String(pid)}/${String(cxid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid,
                    cxid: this.cirugiaID,
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
                    horaBalance: regTransAnest.horaBalance, ingresos: regTransAnest.ingresos, egresos : regTransAnest.egresos,
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
                window.log.error('Ocurrió un error:', e)
            });
        },

        async saveTiemposQX(regTransAnest: any, pid: string, tqx: string, cxid: string) {
            switch (tqx) {
                case "QXIN":
                    await apiAxios({
                        url: "/trans/tqx",
                        method: "POST",
                        headers: {
                            Authorization: "Bearer " + userStore.token,
                        },
                        data: {
                            pid: pid, cxid: cxid,
                            ingresoQX: regTransAnest
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
                    });
                break;
      
                case "ANESIN":
                    await apiAxios({
                        url: '/trans/tqx',
                        method: "POST",
                        headers: {
                            Authorization: "Bearer " + userStore.token,
                        },
                        data: {
                            pid: pid,
                            inicioAn: regTransAnest
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
                    });
                break;
      
                case "CXIN":
                    await apiAxios({
                        url: '/trans/tqx',
                        method: "POST",
                        headers: {
                            Authorization: "Bearer " + userStore.token,
                        },
                        data: {
                            pid: pid,
                            inicioCx: regTransAnest
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
                    });
                break;
      
                case "CXOUT":
                    await apiAxios({
                        url: '/trans/tqx',
                        method: "POST",
                        headers: {
                            Authorization: "Bearer " + userStore.token,
                        },
                        data: {
                            pid: pid,
                            finCx: regTransAnest
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
                    });
                break;
      
                case "ANESOUT":
                    await apiAxios({
                        url: '/trans/tqx',
                        method: "POST",
                        headers: {
                            Authorization: "Bearer " + userStore.token,
                        },
                        data: {
                            pid: pid,
                            finAn: regTransAnest
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
                    });
                break;
      
                case "QXOUT":
                    await apiAxios({
                        url: '/trans/tqx',
                        method: "POST",
                        headers: {
                            Authorization: "Bearer " + userStore.token,
                        },
                        data: {
                            pid: pid,
                            egresoQx: regTransAnest
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
                    });
                break;
              
                default:                
                break;
              }
        },

        async saveNuevoTiemposQX(regTransAnest: any, pid: string, cxid: string, tqx: string) {
            switch (tqx) {
                case "QXIN":
                    await apiAxios({
                        url: "/trans/tqx/add",
                        method: "POST",
                        headers: {
                            Authorization: "Bearer " + userStore.token,
                        },
                        data: {
                            pid: pid, cxid: cxid,
                            ingresoQX: regTransAnest
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
                    });
                break;
      
                case "ANESIN":
                    await apiAxios({
                        url: '/trans/tqx/add',
                        method: "POST",
                        headers: {
                            Authorization: "Bearer " + userStore.token,
                        },
                        data: {
                            pid: pid, cxid: cxid,
                            inicioAn: regTransAnest
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
                    });
                break;
      
                case "CXIN":
                    await apiAxios({
                        url: '/trans/tqx/add',
                        method: "POST",
                        headers: {
                            Authorization: "Bearer " + userStore.token,
                        },
                        data: {
                            pid: pid, cxid: cxid,
                            inicioCx: regTransAnest
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
                    });
                break;
      
                case "CXOUT":
                    await apiAxios({
                        url: '/trans/tqx/add',
                        method: "POST",
                        headers: {
                            Authorization: "Bearer " + userStore.token,
                        },
                        data: {
                            pid: pid, cxid: cxid,
                            finCx: regTransAnest
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
                    });
                break;
      
                case "ANESOUT":
                    await apiAxios({
                        url: '/trans/tqx/add',
                        method: "POST",
                        headers: {
                            Authorization: "Bearer " + userStore.token,
                        },
                        data: {
                            pid: pid, cxid: cxid,
                            finAn: regTransAnest
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
                    });
                break;
      
                case "QXOUT":
                    await apiAxios({
                        url: '/trans/tqx/add',
                        method: "POST",
                        headers: {
                            Authorization: "Bearer " + userStore.token,
                        },
                        data: {
                            pid: pid, cxid: cxid,
                            egresoQx: regTransAnest
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
                    });
                break;
              
                default:                
                break;
              }
        },

        async saveDatosMSV(grid:any, pid:string){
            const objectsToUpload = Math.min(5, grid.length);
            const dataToUpload = [];

            for (let i = objectsToUpload; i > 0; i--) {
                dataToUpload.push({
                    FC: grid[grid.length - i].datos[0].valor,
                    Pulso: grid[grid.length - i].datos[1].valor,
                    PAS: grid[grid.length - i].datos[2].valor,
                    PAD: grid[grid.length - i].datos[3].valor,
                    PAM: grid[grid.length - i].datos[4].valor,
                    SpO2: grid[grid.length - i].datos[5].valor,
                    EtCO2: grid[grid.length - i].datos[6].valor,
                    Temp1: grid[grid.length - i].datos[7].valor,
                    Temp2: grid[grid.length - i].datos[8].valor,
                    PVC: grid[grid.length - i].datos[9].valor,
                    PAS_IN: grid[grid.length - i].datos[10].valor,
                    PAD_IN: grid[grid.length - i].datos[11].valor,
                    PAM_IN: grid[grid.length - i].datos[12].valor,
                    FiCO2: grid[grid.length - i].datos[13].valor,
                    FR: grid[grid.length - i].datos[14].valor,
                    HoraGeneracion: grid[grid.length - i].horaGeneracion,
                });
            }

            try {
                await apiAxios({
                    url: `/trans/msvData/${String(pid)}`,
                    method: "PUT",
                    headers: {
                        Authorization: "Bearer " + userStore.token,
                    },
                    data: {
                        datosMSV: dataToUpload,
                    },
                });
            } catch (error) {
                window.log.error('Ocurrió un error:', error)
            }
        },

        async saveNuevoDatosMSV(grid:any, pid:string, cxid:string){
            const objectsToUpload = Math.min(5, grid.length);
            const dataToUpload = [];

            for (let i = objectsToUpload; i > 0; i--) {
                dataToUpload.push({
                    FC: grid[grid.length - i].datos[0].valor,
                    Pulso: grid[grid.length - i].datos[1].valor,
                    PAS: grid[grid.length - i].datos[2].valor,
                    PAD: grid[grid.length - i].datos[3].valor,
                    PAM: grid[grid.length - i].datos[4].valor,
                    SpO2: grid[grid.length - i].datos[5].valor,
                    EtCO2: grid[grid.length - i].datos[6].valor,
                    Temp1: grid[grid.length - i].datos[7].valor,
                    Temp2: grid[grid.length - i].datos[8].valor,
                    PVC: grid[grid.length - i].datos[9].valor,
                    PAS_IN: grid[grid.length - i].datos[10].valor,
                    PAD_IN: grid[grid.length - i].datos[11].valor,
                    PAM_IN: grid[grid.length - i].datos[12].valor,
                    FiCO2: grid[grid.length - i].datos[13].valor,
                    FR: grid[grid.length - i].datos[14].valor,
                    HoraGeneracion: grid[grid.length - i].horaGeneracion,
                });
            }

            try {
                await apiAxios({
                    url: `/trans/msvData/add/${String(pid)}/${String(cxid)}`,
                    method: "PUT",
                    headers: {
                        Authorization: "Bearer " + userStore.token,
                    },                        
                    data: {
                        datosMSV: dataToUpload,
                    },
                })
            } catch (error) {
                window.log.error('Ocurrió un error:', error)
            }
        },

        // Gestión de medicamentos
        async getMedicamentosList(pid: string) {
            await apiAxios({
                url: `/trans/medic/${String(pid)}`,
                method: "GET",
                headers: {
                Authorization: "Bearer " + userStore.token,
                },                
            })
            .then((res: any) => {
                this.medicamentos = res.data.medicamento;                             
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async getNuevoMedicamentosList(pid: string, cxid: string) {
            await apiAxios({
                url: `/trans/medic/add/${String(pid)}/${String(cxid)}`,
                method: "GET",
                headers: {
                Authorization: "Bearer " + userStore.token,
                },                
            })
            .then((res: any) => {
                this.medicamentos = res.data.medicamento;                             
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async saveDatosMedicamentos(regTransAnest: any, pid: string, cxid: string){
            await apiAxios({
                url: "/trans/medic",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid, cxid: cxid,
                    // Datos del Medicamento
                    tipoMed: regTransAnest.tipoMed,
                    medicamento: regTransAnest.medicamento,
                    dosisMed: regTransAnest.dosisMed,
                    unidadMed: regTransAnest.unidadMed,
                    viaMed: regTransAnest.viaMed,
                    horaInicioMed: regTransAnest.horaInicioMed,
                    horaFinalMed: regTransAnest.horaFinalMed,
                    observacionesMed: regTransAnest.observacionesMed,
                    valorGrafica: regTransAnest.valorGrafica
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
                window.log.error('Ocurrió un error:', e)
            });
        },

        async saveNuevoDatosMedicamentos(regTransAnest: any, pid: string, cxid: string){
            await apiAxios({
                url: "/trans/medic/add",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid, cxid: cxid,
                    // Datos del Medicamento
                    tipoMed: regTransAnest.tipoMed,
                    medicamento: regTransAnest.medicamento,
                    dosisMed: regTransAnest.dosisMed,
                    unidadMed: regTransAnest.unidadMed,
                    viaMed: regTransAnest.viaMed,
                    horaInicioMed: regTransAnest.horaInicioMed,
                    horaFinalMed: regTransAnest.horaFinalMed,
                    observacionesMed: regTransAnest.observacionesMed,
                    valorGrafica: regTransAnest.valorGrafica
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
                window.log.error('Ocurrió un error:', e)
            });
        },

        async updateSumaMedicamentos(medicamentos: any, pid:string){      
            await apiAxios({
            url: `/trans/medicSuma/suma/${String(pid)}`,
            method: "PUT",
            headers: {
                Authorization: "Bearer " + userStore.token,
            },
            data: {
                medicamentosSuma: medicamentos
            },
        })
        .then((res: any) => {
            swal.fire({
                title: 'Datos agregados correctamente',
                icon: 'success',
                showConfirmButton: false,
                toast: true,
                position: 'top-end',
                timer: 2000,
                timerProgressBar: true
            })
        })
        .catch((e: any) => {
            window.log.error('Ocurrió un error:', e)
        });
        },

        async updateNuevoSumaMedicamentos(medicamentos:any, pid:string, cxid:string){
            await apiAxios({
                url: `/trans/medicSuma/suma/add/${String(pid)}/${String(cxid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    medicamentosSuma: medicamentos
                },
            })
            .then((res: any) => {
                swal.fire({
                    title: 'Datos agregados correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async updateMedicamentos(m_tipoMed: string, m_medicamento: string, m_dosisMed: string, m_unidadMed: string,
                            m_viaMed: string, m_horaInicioMed: string, m_horaFinalMed: string, m_observacionesMed: string, m_valorGrafica: number, pid:string){
            await apiAxios({
                url: `/trans/medic/${String(pid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    medicamentosCx: [ m_tipoMed, m_medicamento, m_dosisMed, m_unidadMed, m_viaMed, m_horaInicioMed, m_horaFinalMed, m_observacionesMed, m_valorGrafica]
                },
            })
            .then((res: any) => {
                swal.fire({
                    title: 'Datos agregados correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async updateNuevoMedicamentos(m_tipoMed: string, m_medicamento: string, m_dosisMed: string, m_unidadMed: string,
                            m_viaMed: string, m_horaInicioMed: string, m_horaFinalMed: string, m_observacionesMed: string, m_valorGrafica: number, pid:string, cxid:string){
            await apiAxios({
                url: `/trans/medic/add/${String(pid)}/${String(cxid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    medicamentosCx: [ m_tipoMed, m_medicamento, m_dosisMed, m_unidadMed, m_viaMed, m_horaInicioMed, m_horaFinalMed, m_observacionesMed, m_valorGrafica]
                },
            })
            .then((res: any) => {
                swal.fire({
                    title: 'Datos agregados correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async getMedicamento(medicamentoID) {
            await apiAxios({
              url: `/trans/medic/uno/${String(medicamentoID)}`,
              method: "GET",
              headers: {
                Authorization: "Bearer " + userStore.token,
              },
            })
            .then((res: any) => {
                this.medicamentos = res.data.medicamento;
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async updateMedicamento(medicamentoID : string, m_tipoMed: string, m_medicamento: string, m_dosisMed: string, m_unidadMed: string,
                            m_viaMed: string, m_horaInicioMed: string, m_horaFinalMed: string, m_observacionesMed: string){
            
            await apiAxios({
                url: `/trans/medic/uno/${String(medicamentoID)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    medicamentosCx: [ {"tipoMed":m_tipoMed, "medicamento":m_medicamento, "dosisMed":m_dosisMed, "unidadMed":m_unidadMed,
                                        "viaMed":m_viaMed, "horaInicioMed":m_horaInicioMed,"horaFinalMed":m_horaFinalMed, "observacionesMed":m_observacionesMed,}]
                },
            })
            .then((res: any) => {                            
                swal.fire({
                    title: 'Datos del medicamento actualizado correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })                
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async deleteMedicamento(medicamentoID : string) {
            await apiAxios({
              url: `/trans/medic/${String(medicamentoID)}`,
              method: "DELETE",
              headers: {
                Authorization: "Bearer " + userStore.token,
              },
            })
            .then((res: any) => {      
                swal.fire({
                  title: "Datos del medicamento eliminados correctamente",
                  icon: "success",
                  showConfirmButton: false,
                  toast: true,
                  position: "top-end",
                  timer: 2500,
                  timerProgressBar: true,
                });
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        // Gestión de relevos
        async getRelevosList(pid: string) {
            await apiAxios({
                url: `/trans/relevo/${String(pid)}`,
                method: "GET",
                headers: {
                Authorization: "Bearer " + userStore.token,
                },                
            })
            .then((res: any) => {
                this.relevos = res.data.relevo;                             
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async getNuevoRelevosList(pid: string, cxid: string) {
            await apiAxios({
                url: `/trans/relevo/add/${String(pid)}/${String(cxid)}`,
                method: "GET",
                headers: {
                Authorization: "Bearer " + userStore.token,
                },                
            })
            .then((res: any) => {
                this.relevos = res.data.relevo;                             
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async saveDatosRelevos(regTransAnest: any, pid: string, cxid: string){
            await apiAxios({
                url: "/trans/relevo",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid, cxid: cxid,
                    // Datos del Relevo
                    tipoRel: regTransAnest.tipoRel,
                    horaRelevo: regTransAnest.horaRelevo,
                    matriculaRel: regTransAnest.matriculaRel,
                    anestesiologoRel: regTransAnest.anestesiologoRel,
                    observacionesRel: regTransAnest.observacionesRel,
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
                window.log.error('Ocurrió un error:', e)
            });
        },

        async saveNuevoDatosRelevos(regTransAnest: any, pid: string, cxid: string){
            await apiAxios({
                url: "/trans/relevo/add",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid, cxid: cxid,
                    // Datos del Relevo
                    tipoRel: regTransAnest.tipoRel,
                    horaRelevo: regTransAnest.horaRelevo,
                    matriculaRel: regTransAnest.matriculaRel,
                    anestesiologoRel: regTransAnest.anestesiologoRel,
                    observacionesRel: regTransAnest.observacionesRel,
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
                window.log.error('Ocurrió un error:', e)
            });
        },

        async updateRelevos(r_horaRelevo: string, r_tipoRel: string, r_matriculaRel: string, 
                            r_anestesiologoRel: string, r_observacionesRel: string, r_valorGraficaRel: number, pid:string){
            await apiAxios({
                url: `/trans/relevo/${String(pid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    relevoCx: [ r_tipoRel, r_horaRelevo, r_matriculaRel, r_anestesiologoRel, r_observacionesRel, r_valorGraficaRel ]
                },
            })
            .then((res: any) => {
                swal.fire({
                    title: 'Datos agregados correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async updateNuevoRelevos(r_horaRelevo: string, r_tipoRel: string, r_matriculaRel: string, 
                            r_anestesiologoRel: string, r_observacionesRel: string, r_valorGraficaRel: number, pid:string, cxid: string){
            await apiAxios({
                url: `/trans/relevo/add/${String(pid)}/${String(cxid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    relevoCx: [ r_tipoRel, r_horaRelevo, r_matriculaRel, r_anestesiologoRel, r_observacionesRel, r_valorGraficaRel ]
                },
            })
            .then((res: any) => {
                swal.fire({
                    title: 'Datos agregados correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async getRelevo(relevoID) {
            await apiAxios({
              url: `/trans/relevo/uno/${String(relevoID)}`,
              method: "GET",
              headers: {
                Authorization: "Bearer " + userStore.token,
              },
            })
            .then((res: any) => {
                this.relevos = res.data.relevo;
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async updateRelevo(relevoID : string, r_horaRelevo: string, r_tipoRel: string, r_matriculaRel: string, 
                                    r_anestesiologoRel: string, r_observacionesRel: string){
            
            await apiAxios({
                url: `/trans/relevo/uno/${String(relevoID)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    relevoCx: [ {"tipoRel":r_tipoRel, "horaRelevo":r_horaRelevo, "matriculaRel":r_matriculaRel, 
                                        "anestesiologoRel":r_anestesiologoRel, "observacionesRel":r_observacionesRel}]
                },
            })
            .then((res: any) => {                            
                swal.fire({
                    title: 'Datos del relevo actualizado correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })                
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async deleteRelevo(relevoID : string) {
            await apiAxios({
              url: `/trans/relevo/${String(relevoID)}`,
              method: "DELETE",
              headers: {
                Authorization: "Bearer " + userStore.token,
              },
            })
            .then((res: any) => {      
                swal.fire({
                  title: "Datos del relevo eliminados correctamente",
                  icon: "success",
                  showConfirmButton: false,
                  toast: true,
                  position: "top-end",
                  timer: 2500,
                  timerProgressBar: true,
                });
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        // Gestión de eventos
        async getEventosList(pid: string) {
            await apiAxios({
                url: `/trans/evento/${String(pid)}`,
                method: "GET",
                headers: {
                Authorization: "Bearer " + userStore.token,
                },                
            })
            .then((res: any) => {
                this.eventos = res.data.evento;                             
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async getNuevoEventosList(pid: string, cxid: string) {
            await apiAxios({
                url: `/trans/evento/add/${String(pid)}/${String(cxid)}`,
                method: "GET",
                headers: {
                Authorization: "Bearer " + userStore.token,
                },                
            })
            .then((res: any) => {
                this.eventos = res.data.evento;                             
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async saveDatosEventos(regTransAnest: any, pid: string, cxid: string){
            await apiAxios({
                url: "/trans/evento",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid, cxid: cxid,
                    // Datos del evento
                    horaEvento: regTransAnest.horaEvento,
                    tipoEve: regTransAnest.tipoEve,
                    detalleEvento: regTransAnest.detalleEvento,
                    valorGraficaEv: regTransAnest.valorGraficaEv
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
                window.log.error('Ocurrió un error:', e)
            });
        },

        async saveNuevoDatosEventos(regTransAnest: any, pid: string, cxid: string){
            await apiAxios({
                url: "/trans/evento/add",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid, cxid: cxid,
                    // Datos del evento
                    horaEvento: regTransAnest.horaEvento,
                    tipoEve: regTransAnest.tipoEve,
                    detalleEvento: regTransAnest.detalleEvento,
                    valorGraficaEv: regTransAnest.valorGraficaEv
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
                window.log.error('Ocurrió un error:', e)
            });
        },

        async updateEventos(e_horaEvento: string, e_tipoEve: string, e_detalleEvento: string, e_valorGraficaEv: number, pid:string){
            await apiAxios({
                url: `/trans/evento/${String(pid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    evCriticoCx: [ e_horaEvento, e_tipoEve, e_detalleEvento, e_valorGraficaEv ]
                },
            })
            .then((res: any) => {
                swal.fire({
                    title: 'Datos agregados correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async updateNuevoEventos(e_horaEvento: string, e_tipoEve: string, e_detalleEvento: string, e_valorGraficaEv: number, pid:string, cxid: string){
            await apiAxios({
                url: `/trans/evento/add/${String(pid)}/${String(cxid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    evCriticoCx: [ e_horaEvento, e_tipoEve, e_detalleEvento, e_valorGraficaEv ]
                },
            })
            .then((res: any) => {
                swal.fire({
                    title: 'Datos agregados correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async getEvento(eventoID) {
            await apiAxios({
              url: `/trans/evento/uno/${String(eventoID)}`,
              method: "GET",
              headers: {
                Authorization: "Bearer " + userStore.token,
              },
            })
            .then((res: any) => {
                this.eventos = res.data.evento;
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async updateEvento(eventoID : string, e_horaEvento: string, e_tipoEve: string, e_detalleEvento: string){
            
            await apiAxios({
                url: `/trans/evento/uno/${String(eventoID)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    evCriticoCx: [ {"horaEvento":e_horaEvento, "tipoEve":e_tipoEve, "detalleEvento":e_detalleEvento }]
                },
            })
            .then((res: any) => {                            
                swal.fire({
                    title: 'Datos del evento actualizado correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })                
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async deleteEvento(eventoID : string) {
            await apiAxios({
              url: `/trans/evento/${String(eventoID)}`,
              method: "DELETE",
              headers: {
                Authorization: "Bearer " + userStore.token,
              },
            })
            .then((res: any) => {      
                swal.fire({
                  title: "Datos del evento eliminados correctamente",
                  icon: "success",
                  showConfirmButton: false,
                  toast: true,
                  position: "top-end",
                  timer: 2500,
                  timerProgressBar: true,
                });
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async getIniciaMonitoreo() {
            await apiAxios({
              url: '/mvs/monitor',
              method: 'GET',
              headers: {
                Authorization: "Bearer " + userStore.token,
              }
            })
            .then(() => {
                console.log("Vital sign monitor listening");
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async getDetieneMonitoreo() {
            await apiAxios({
              url: '/mvs/stop',
              method: 'GET',
              headers: {
                Authorization: "Bearer " + userStore.token,
              }
            })
            .then(() => {
                console.log("Vital sign monitor stopped");
            })
            .catch((e: any) => {
                window.log.error('Ocurrió un error:', e)
            });
        },

        async getDatosMonitor() {
            await apiAxios({
              url: '/mvs/com',
              method: 'GET',
              headers: {
                Authorization: "Bearer " + userStore.token,
              }
            })
            .then((res: any) => {
              this.datosMSV = res.data.datosMSV; // Acceder a los datos usando res.data.datosMSV
              this.envDat = true;
            })
            .catch((e: any) => {
              this.envDat = false;
              window.log.error('Ocurrió un error:', e)
            });
        },
    }
})