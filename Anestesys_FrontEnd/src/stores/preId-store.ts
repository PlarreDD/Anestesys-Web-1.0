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
                    pid: pid,
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
                    antPersNoPat_AntImportQx: infoValoracion.antPersNoPat_AntImportQx
                },
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
                    pid: pid,
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
                    antPersNoPat_AntImportQx: infoValoracion.antPersNoPat_AntImportQx
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
                    title: 'Nota guardada correctamente',
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
