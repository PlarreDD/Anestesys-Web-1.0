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

        async saveTiemposQX(regTransAnest: any, pid: string, tqx: string) {
            switch (tqx) {
                case "QXIN":
                    await apiAxios({
                        url: "http://localhost:5000/trans/tqx",
                        method: "POST",
                        headers: {
                            Authorization: "Bearer " + userStore.token,
                        },
                        data: {
                            pid: pid,
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
                        // console.log("error: " + e);
                    });
                break;
      
                case "ANESIN":
                    await apiAxios({
                        url: 'http://localhost:5000/trans/tqx',
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
                        // console.log("error: " + e);
                    });
                break;
      
                case "CXIN":
                    console.log(regTransAnest, pid, tqx);
                    await apiAxios({
                        url: 'http://localhost:5000/trans/tqx',
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
                        // console.log("error: " + e);
                    });
                break;
      
                case "CXOUT":
                    console.log(regTransAnest, pid, tqx);
                    await apiAxios({
                        url: 'http://localhost:5000/trans/tqx',
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
                        // console.log("error: " + e);
                    });
                break;
      
                case "ANESOUT":
                    console.log(regTransAnest, pid, tqx);
                    await apiAxios({
                        url: 'http://localhost:5000/trans/tqx',
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
                        // console.log("error: " + e);
                    });
                break;
      
                case "QXOUT":
                    console.log(regTransAnest, pid, tqx);
                    await apiAxios({
                        url: 'http://localhost:5000/trans/tqx',
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
                        // console.log("error: " + e);
                    });
                break;
              
                default:
                    console.log('Hola');                    
                break;
              }
        },

        // Gestión de medicamentos
        async getMedicamentosList(pid: string) {
            await apiAxios({
                url: `http://localhost:5000/trans/medic/${String(pid)}`,
                method: "GET",
                headers: {
                Authorization: "Bearer " + userStore.token,
                },                
            })
            .then((res: any) => {
                this.medicamentos = res.data.medicamento;                             
            })
            .catch((e: any) => {
                //   console.log(e);
            });
        },

        async saveDatosMedicamentos(regTransAnest: any, pid: string){
            await apiAxios({
                url: "http://localhost:5000/trans/medic",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid,
                    // Datos del Medicamento
                    tipoMed: regTransAnest.tipoMed,
                    medicamento: regTransAnest.medicamento,
                    dosisMed: regTransAnest.dosisMed,
                    unidadMed: regTransAnest.unidadMed,
                    viaMed: regTransAnest.viaMed,
                    horaInicioMed: regTransAnest.horaInicioMed,
                    horaFinalMed: regTransAnest.horaFinalMed,
                    observacionesMed: regTransAnest.observacionesMed
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

        async updateMedicamentos(m_tipoMed: string, m_medicamento: string, m_dosisMed: string, m_unidadMed: string,
                            m_viaMed: string, m_horaInicioMed: string, m_horaFinalMed: string, m_observacionesMed: string, pid:string){
            await apiAxios({
                url: `http://localhost:5000/trans/medic/${String(pid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    medicamentosCx: [ m_tipoMed, m_medicamento, m_dosisMed, m_unidadMed, m_viaMed, m_horaInicioMed, m_horaFinalMed, m_observacionesMed]
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
                // console.log("error: " + e);
            });
        },

        async getMedicamento(medicamentoID) {
            await apiAxios({
              url: `http://localhost:5000/trans/medic/uno/${String(medicamentoID)}`,
              method: "GET",
              headers: {
                Authorization: "Bearer " + userStore.token,
              },
            })
            .then((res: any) => {
                this.medicamentos = res.data.medicamento;
            })
            .catch((e: any) => {
            //   console.log(e);
            });
        },

        async updateMedicamento(medicamentoID : string, m_tipoMed: string, m_medicamento: string, m_dosisMed: string, m_unidadMed: string,
                            m_viaMed: string, m_horaInicioMed: string, m_horaFinalMed: string, m_observacionesMed: string){
            
            await apiAxios({
                url: `http://localhost:5000/trans/medic/uno/${String(medicamentoID)}`,
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
                // console.log("error: " + e);
            });
        },

        async deleteMedicamento(medicamentoID : string) {
            await apiAxios({
              url: `http://localhost:5000/trans/medic/${String(medicamentoID)}`,
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
              //   console.log(e);
            });
        },

        // Gestión de relevos
        async getRelevosList(pid: string) {
            await apiAxios({
                url: `http://localhost:5000/trans/relevo/${String(pid)}`,
                method: "GET",
                headers: {
                Authorization: "Bearer " + userStore.token,
                },                
            })
            .then((res: any) => {
                this.relevos = res.data.relevo;                             
            })
            .catch((e: any) => {
                //   console.log(e);
            });
        },

        async saveDatosRelevos(regTransAnest: any, pid: string){
            await apiAxios({
                url: "http://localhost:5000/trans/relevo",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid,
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
                // console.log("error: " + e);
            });
        },

        async updateRelevos(r_horaRelevo: string, r_tipoRel: string, r_matriculaRel: string, 
                            r_anestesiologoRel: string, r_observacionesRel: string, pid:string){
            await apiAxios({
                url: `http://localhost:5000/trans/relevo/${String(pid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    relevoCx: [ r_tipoRel, r_horaRelevo, r_matriculaRel, r_anestesiologoRel, r_observacionesRel ]
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
                // console.log("error: " + e);
            });
        },

        async getRelevo(relevoID) {
            await apiAxios({
              url: `http://localhost:5000/trans/relevo/uno/${String(relevoID)}`,
              method: "GET",
              headers: {
                Authorization: "Bearer " + userStore.token,
              },
            })
            .then((res: any) => {
                this.relevos = res.data.relevo;
            })
            .catch((e: any) => {
            //   console.log(e);
            });
        },

        async updateRelevo(relevoID : string, r_horaRelevo: string, r_tipoRel: string, r_matriculaRel: string, 
                                    r_anestesiologoRel: string, r_observacionesRel: string){
            
            await apiAxios({
                url: `http://localhost:5000/trans/relevo/uno/${String(relevoID)}`,
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
                // console.log("error: " + e);
            });
        },

        async deleteRelevo(relevoID : string) {
            await apiAxios({
              url: `http://localhost:5000/trans/relevo/${String(relevoID)}`,
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
              //   console.log(e);
            });
        },

        // Gestión de eventos
        async getEventosList(pid: string) {
            await apiAxios({
                url: `http://localhost:5000/trans/evento/${String(pid)}`,
                method: "GET",
                headers: {
                Authorization: "Bearer " + userStore.token,
                },                
            })
            .then((res: any) => {
                this.eventos = res.data.evento;                             
            })
            .catch((e: any) => {
                //   console.log(e);
            });
        },

        async saveDatosEventos(regTransAnest: any, pid: string){
            await apiAxios({
                url: "http://localhost:5000/trans/evento",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid,
                    // Datos del evento
                    horaEvento: regTransAnest.horaEvento,
                    tipoEve: regTransAnest.tipoEve,
                    detalleEvento: regTransAnest.detalleEvento,
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

        async updateEventos(e_horaEvento: string, e_tipoEve: string, e_detalleEvento: string, pid:string){
            await apiAxios({
                url: `http://localhost:5000/trans/evento/${String(pid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    evCriticoCx: [ e_horaEvento, e_tipoEve, e_detalleEvento ]
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
                // console.log("error: " + e);
            });
        },

        async getEvento(eventoID) {
            await apiAxios({
              url: `http://localhost:5000/trans/evento/uno/${String(eventoID)}`,
              method: "GET",
              headers: {
                Authorization: "Bearer " + userStore.token,
              },
            })
            .then((res: any) => {
                this.eventos = res.data.evento;
            })
            .catch((e: any) => {
            //   console.log(e);
            });
        },

        async updateEvento(eventoID : string, e_horaEvento: string, e_tipoEve: string, e_detalleEvento: string){
            
            await apiAxios({
                url: `http://localhost:5000/trans/evento/uno/${String(eventoID)}`,
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
                // console.log("error: " + e);
            });
        },

        async deleteEvento(eventoID : string) {
            await apiAxios({
              url: `http://localhost:5000/trans/evento/${String(eventoID)}`,
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
              //   console.log(e);
            });
        },
    }
})