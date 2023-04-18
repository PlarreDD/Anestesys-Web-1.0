import { defineStore } from "pinia";
import { apiAxios } from '@/boot/axios';
import { useUserStore } from "./user-store";
import { ref } from "vue";
import swal from 'sweetalert2';

const userStore = useUserStore();

export const usePreIdStore = defineStore('preid', {
    state: () => ({
        pacienteID: ref(null),
    }),

    actions: {
        /************************** Id Paciente **************************/
        savePreId(infoPreIdPaciente: any){
            apiAxios({
                url: "http://localhost:5000/preId",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    /* Información obligatoria a llenar en el cuestionario */
                    numExpediente: infoPreIdPaciente.numExped,
                    nomPaciente: infoPreIdPaciente.nomPaciente,
                    fechaNPaciente: infoPreIdPaciente.fechaNac,
                    edadPaciente: infoPreIdPaciente.edadPaciente,
                    generoPaciente: infoPreIdPaciente.genero,
                    /* Datos demográficos */
                    nacionalidad: infoPreIdPaciente.nacionalidad, 
                    CURP: infoPreIdPaciente.CURP,
                    folioID: infoPreIdPaciente.folioID,
                    estNacimiento: infoPreIdPaciente.estNacimiento,
                    estResidencia: infoPreIdPaciente.estResidencia,
                    alcaldia: infoPreIdPaciente.alcaldia,
                    colonia: infoPreIdPaciente.colonia,
                    codigoPostal: infoPreIdPaciente.codigoPostal,
                    /* Información de la cirugía del paciente */
                    numEpisodio: infoPreIdPaciente.numEpisodio,
                    habitacionPaciente: infoPreIdPaciente.habitacion,
                    fechaInPaciente: infoPreIdPaciente.fechaIn,
                    /* Datos de cirugía */
                    diagnostico: infoPreIdPaciente.diagnostico,
                    tipoCx: infoPreIdPaciente.tipoCx,
                    /* Datos CIE */
                    cie9: infoPreIdPaciente.cie9,
                    cie10: infoPreIdPaciente.cie10,
                    /* Informacion procedimiento */
                    cirugia: infoPreIdPaciente.cirugia,
                    fechaCx: infoPreIdPaciente.fechaCx,
                    hrCx: infoPreIdPaciente.hrCx,
                    /* Informacion Médicos */
                    cirujano: infoPreIdPaciente.cirujano,
                    anestesiologo: infoPreIdPaciente.anestesiologo,
                    anestesiologoVPA: infoPreIdPaciente.anestesiologoVPA,
                    residenteAnestesia: infoPreIdPaciente.residenteAnestesia,
                }
            })
            .then((res: any) => {
                this.pacienteID = res.data.paciente;
                
                swal.fire({
                    title: 'Paciente registrado correctamente',
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

        updatePreId( infoPreIdPaciente: any ){
            apiAxios({
                url: `http://localhost:5000/preId/${String(this.pacienteID._id)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    nomPaciente: infoPreIdPaciente.nomPaciente,
                    fechaNPaciente: infoPreIdPaciente.fechaNac,
                    edadPaciente: infoPreIdPaciente.edadPaciente,
                    generoPaciente: infoPreIdPaciente.genero,
                    /* Datos Demográficos */
                    nacionalidad: infoPreIdPaciente.nacionalidad, 
                    CURP: infoPreIdPaciente.CURP,
                    folioID: infoPreIdPaciente.folioID,
                    estNacimiento: infoPreIdPaciente.estNacimiento,
                    estResidencia: infoPreIdPaciente.estResidencia,
                    alcaldia: infoPreIdPaciente.alcaldia,
                    colonia: infoPreIdPaciente.colonia,
                    codigoPostal: infoPreIdPaciente.codigoPostal,
                    /* Información de la cirugía del paciente */
                    numEpisodio: infoPreIdPaciente.numEpisodio,
                    habitacionPaciente: infoPreIdPaciente.habitacion,
                    fechaInPaciente: infoPreIdPaciente.fechaIn,
                    /* Datos de cirugía */
                    diagnostico: infoPreIdPaciente.diagnostico,
                    tipoCx: infoPreIdPaciente.tipoCx,
                    /* Datos CIE */
                    cie9: infoPreIdPaciente.cie9,
                    cie10: infoPreIdPaciente.cie10,
                    /* Informacion procedimiento */
                    cirugia: infoPreIdPaciente.cirugia,
                    fechaCx: infoPreIdPaciente.fechaCx,
                    hrCx: infoPreIdPaciente.hrCx,
                    /* Informacion Médicos */
                    cirujano: infoPreIdPaciente.cirujano,
                    anestesiologo: infoPreIdPaciente.anestesiologo,
                    anestesiologoVPA: infoPreIdPaciente.anestesiologoVPA,
                    residenteAnestesia: infoPreIdPaciente.residenteAnestesia,
                }
            })
            .then((res: any) => {
                this.pacienteID = res.data.paciente;
                
                swal.fire({
                    title: 'Datos actualizados correctamente',
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
        /*************************** Valoración **************************/
        savePreAntecedentes(infoValoracion: any, pid: string){
            apiAxios({
                url: "http://localhost:5000/valora",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    // Antecedentes
                    pid: pid,
                    // Personales Patológicos
                    antPersPat_Alergias: infoValoracion.antPersPat_Alergias,
                    antPersPat_Quirurgicos: infoValoracion.antPersPat_Quirurgicos,
                    antPersPat_Endocrinologicos: infoValoracion.antPersPat_Endocrinologicos,
                    antPersPat_Urologicos: infoValoracion.antPersPat_Urologicos,
                    antPersPat_Traumaticos: infoValoracion.antPersPat_Traumaticos,
                    antPersPat_Ortopedicos: infoValoracion.antPersPat_Ortopedicos,               
                    antPersPat_Transfusiones: infoValoracion.antPersPat_Transfusiones,
                    antPersPat_CompAnestPrev: infoValoracion.antPersPat_CompAnestPrev,
                    antPersPat_EstadoPsiq: infoValoracion.antPersPat_EstadoPsiq,
                    antPersPat_MedActual: infoValoracion.antPersPat_MedActual,
                    // Personales No Patológicos
                    antPersNoPat_HrsAyuno: infoValoracion.antPersNoPat_HrsAyuno,
                    antPersNoPat_Tabaquismo: infoValoracion.antPersNoPat_Tabaquismo,
                    antPersNoPat_Etilismo: infoValoracion.antPersNoPat_Etilismo,
                    antPersNoPat_Adicciones: infoValoracion.antPersNoPat_Adicciones,
                    antPersNoPat_Inmunizaciones: infoValoracion.antPersNoPat_Inmunizaciones,
                    antPersNoPat_AntImportQx: infoValoracion.antPersNoPat_AntImportQx,
                    // Signos Vitales
                    sigVit_Edad: infoValoracion.sigVit_Edad,
                    sigVit_Temperatura: infoValoracion.sigVit_Temperatura,
                    sigVit_FrecuCardiaca: infoValoracion.sigVit_FrecuCardiaca,
                    sigVit_FrecuRespiratoria: infoValoracion.sigVit_FrecuRespiratoria,
                    sigVit_Peso: infoValoracion.sigVit_Peso,
                    sigVit_Talla: infoValoracion.sigVit_Talla,
                    sigVit_IMC: infoValoracion.sigVit_IMC,
                    sigVit_TensionArterial: infoValoracion.sigVit_TensionArterial,
                    sigVit_SaturacionOxigeno: infoValoracion.sigVit_SaturacionOxigeno,
                    // Vía Aérea
                    viaAerea_Mallampati: infoValoracion.viaAerea_Mallampati,
                    viaAerea_PatilAldreti: infoValoracion.viaAerea_PatilAldreti,
                    viaAerea_AperturaBucal: infoValoracion.viaAerea_AperturaBucal,
                    viaAerea_Distancia: infoValoracion.viaAerea_Distancia,
                    viaAerea_Protusion: infoValoracion.viaAerea_Protusion,
                    viaAerea_Ipid: infoValoracion.viaAerea_Ipid,
                    viaAerea_Glasgow: infoValoracion.viaAerea_Glasgow,
                    viaAerea_NYHA: infoValoracion.viaAerea_NYHA,
                    viaAerea_Goldman: infoValoracion.viaAerea_Goldman,
                    viaAerea_RiesgoTrombosis: infoValoracion.viaAerea_RiesgoTrombosis,
                    viaAerea_ClasificacionASA: infoValoracion.viaAerea_ClasificacionASA,
                    viaAerea_TipoCirugia: infoValoracion.viaAerea_TipoCirugia,
                    viaAerea_RiesgoAnestesico: infoValoracion.viaAerea_RiesgoAnestesico,
                    //Laboratorio
                    perfilBioQ_FechaRealizacion: infoValoracion.perfilBioQ_FechaRealizacion,
                    perfilBioQ_GrupoSanguineo: infoValoracion.perfilBioQ_GrupoSanguineo,
                    perfilBioQ_Hemoglobina: infoValoracion.perfilBioQ_Hemoglobina,
                    perfilBioQ_Hematocrito: infoValoracion.perfilBioQ_Hematocrito,
                    perfilBioQ_Plaquetas: infoValoracion.perfilBioQ_Plaquetas,
                    perfilBioQ_Leutocitos: infoValoracion.perfilBioQ_Leutocitos,
                    perfilBioQ_TP: infoValoracion.perfilBioQ_TP,
                    perfilBioQ_TT: infoValoracion.perfilBioQ_TT,
                    perfilBioQ_TPT: infoValoracion.perfilBioQ_TPT,
                    perfilBioQ_INR: infoValoracion.perfilBioQ_INR,
                    perfilBioQ_Glucosa: infoValoracion.perfilBioQ_Glucosa,
                    perfilBioQ_Creatinina: infoValoracion.perfilBioQ_Creatinina,
                    perfilBioQ_Urea: infoValoracion.perfilBioQ_Urea,
                    perfilBioQ_Sodio: infoValoracion.perfilBioQ_Sodio,
                    perfilBioQ_Potasio: infoValoracion.perfilBioQ_Potasio,
                    perfilBioQ_Cloro: infoValoracion.perfilBioQ_Cloro,
                    perfilBioQ_Calcio: infoValoracion.perfilBioQ_Calcio,
                    perfilBioQ_Magnesio: infoValoracion.perfilBioQ_Magnesio,
                    perfilBioQ_BilirrubinaDirecta: infoValoracion.perfilBioQ_BilirrubinaDirecta,
                    perfilBioQ_BilirrubinaIndirecta: infoValoracion.perfilBioQ_BilirrubinaIndirecta,
                    perfilBioQ_BilirrubinaTotal: infoValoracion.perfilBioQ_BilirrubinaTotal,
                    perfilBioQ_Lipasa: infoValoracion.perfilBioQ_Lipasa,
                    perfilBioQ_Amilasa: infoValoracion.perfilBioQ_Amilasa,
                    perfilBioQ_Otros: infoValoracion.perfilBioQ_Otros,
                },
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

        updatePreAntecedentes(infoValoracion: any, pid: string){
            apiAxios({
                url: `http://localhost:5000/valora/${String(pid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    // Antecedentes
                    pid: pid,
                    // Personales Patológicos
                    antPersPat_Alergias: infoValoracion.antPersPat_Alergias,
                    antPersPat_Quirurgicos: infoValoracion.antPersPat_Quirurgicos,
                    antPersPat_Endocrinologicos: infoValoracion.antPersPat_Endocrinologicos,
                    antPersPat_Urologicos: infoValoracion.antPersPat_Urologicos,
                    antPersPat_Traumaticos: infoValoracion.antPersPat_Traumaticos,
                    antPersPat_Ortopedicos: infoValoracion.antPersPat_Ortopedicos,               
                    antPersPat_Transfusiones: infoValoracion.antPersPat_Transfusiones,
                    antPersPat_CompAnestPrev: infoValoracion.antPersPat_CompAnestPrev,
                    antPersPat_EstadoPsiq: infoValoracion.antPersPat_EstadoPsiq,
                    antPersPat_MedActual: infoValoracion.antPersPat_MedActual,
                    // Personales No Patológicos
                    antPersNoPat_HrsAyuno: infoValoracion.antPersNoPat_HrsAyuno,
                    antPersNoPat_Tabaquismo: infoValoracion.antPersNoPat_Tabaquismo,
                    antPersNoPat_Etilismo: infoValoracion.antPersNoPat_Etilismo,
                    antPersNoPat_Adicciones: infoValoracion.antPersNoPat_Adicciones,
                    antPersNoPat_Inmunizaciones: infoValoracion.antPersNoPat_Inmunizaciones,
                    antPersNoPat_AntImportQx: infoValoracion.antPersNoPat_AntImportQx,
                    // Signos Vitales
                    sigVit_Edad: infoValoracion.sigVit_Edad,
                    sigVit_Temperatura: infoValoracion.sigVit_Temperatura,
                    sigVit_FrecuCardiaca: infoValoracion.sigVit_FrecuCardiaca,
                    sigVit_FrecuRespiratoria: infoValoracion.sigVit_FrecuRespiratoria,
                    sigVit_Peso: infoValoracion.sigVit_Peso,
                    sigVit_Talla: infoValoracion.sigVit_Talla,
                    sigVit_IMC: infoValoracion.sigVit_IMC,
                    sigVit_TensionArterial: infoValoracion.sigVit_TensionArterial,
                    sigVit_SaturacionOxigeno: infoValoracion.sigVit_SaturacionOxigeno,
                    // Vía Aérea
                    viaAerea_Mallampati: infoValoracion.viaAerea_Mallampati,
                    viaAerea_PatilAldreti: infoValoracion.viaAerea_PatilAldreti,
                    viaAerea_AperturaBucal: infoValoracion.viaAerea_AperturaBucal,
                    viaAerea_Distancia: infoValoracion.viaAerea_Distancia,
                    viaAerea_Protusion: infoValoracion.viaAerea_Protusion,
                    viaAerea_Ipid: infoValoracion.viaAerea_Ipid,
                    viaAerea_Glasgow: infoValoracion.viaAerea_Glasgow,
                    viaAerea_NYHA: infoValoracion.viaAerea_NYHA,
                    viaAerea_Goldman: infoValoracion.viaAerea_Goldman,
                    viaAerea_RiesgoTrombosis: infoValoracion.viaAerea_RiesgoTrombosis,
                    viaAerea_ClasificacionASA: infoValoracion.viaAerea_ClasificacionASA,
                    viaAerea_TipoCirugia: infoValoracion.viaAerea_TipoCirugia,
                    viaAerea_RiesgoAnestesico: infoValoracion.viaAerea_RiesgoAnestesico,
                    //Laboratorio
                    perfilBioQ_FechaRealizacion: infoValoracion.perfilBioQ_FechaRealizacion,
                    perfilBioQ_GrupoSanguineo: infoValoracion.perfilBioQ_GrupoSanguineo,
                    perfilBioQ_Hemoglobina: infoValoracion.perfilBioQ_Hemoglobina,
                    perfilBioQ_Hematocrito: infoValoracion.perfilBioQ_Hematocrito,
                    perfilBioQ_Plaquetas: infoValoracion.perfilBioQ_Plaquetas,
                    perfilBioQ_Leutocitos: infoValoracion.perfilBioQ_Leutocitos,
                    perfilBioQ_TP: infoValoracion.perfilBioQ_TP,
                    perfilBioQ_TT: infoValoracion.perfilBioQ_TT,
                    perfilBioQ_TPT: infoValoracion.perfilBioQ_TPT,
                    perfilBioQ_INR: infoValoracion.perfilBioQ_INR,
                    perfilBioQ_Glucosa: infoValoracion.perfilBioQ_Glucosa,
                    perfilBioQ_Creatinina: infoValoracion.perfilBioQ_Creatinina,
                    perfilBioQ_Urea: infoValoracion.perfilBioQ_Urea,
                    perfilBioQ_Sodio: infoValoracion.perfilBioQ_Sodio,
                    perfilBioQ_Potasio: infoValoracion.perfilBioQ_Potasio,
                    perfilBioQ_Cloro: infoValoracion.perfilBioQ_Cloro,
                    perfilBioQ_Calcio: infoValoracion.perfilBioQ_Calcio,
                    perfilBioQ_Magnesio: infoValoracion.perfilBioQ_Magnesio,
                    perfilBioQ_BilirrubinaDirecta: infoValoracion.perfilBioQ_BilirrubinaDirecta,
                    perfilBioQ_BilirrubinaIndirecta: infoValoracion.perfilBioQ_BilirrubinaIndirecta,
                    perfilBioQ_BilirrubinaTotal: infoValoracion.perfilBioQ_BilirrubinaTotal,
                    perfilBioQ_Lipasa: infoValoracion.perfilBioQ_Lipasa,
                    perfilBioQ_Amilasa: infoValoracion.perfilBioQ_Amilasa,
                    perfilBioQ_Otros: infoValoracion.perfilBioQ_Otros,
                }
            })
            .then((res: any) => {
                swal.fire({
                    title: 'Datos actualizados correctamente',
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
        /***************************** Nota ******************************/
        savePreNota(obsNotaPre: string, pid: string){
            console.log(obsNotaPre + " - " + pid);
            
            apiAxios({
                url: "http://localhost:5000/nota",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    pid: pid,
                    obsNotaPre: obsNotaPre,
                },
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

        updatePreNota(obsNotaPre: string, pid: string){
            apiAxios({
                url: `http://localhost:5000/nota/${String(pid)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    obsNotaPre: obsNotaPre,
                }
            })
            .then((res: any) => {
                swal.fire({
                    title: 'Datos actualizados correctamente',
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
