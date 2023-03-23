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
                    /* Información adicional  del paciente */
                    numEpisodio: infoPreIdPaciente.numEpisodio,
                    fechaNPaciente: infoPreIdPaciente.fechaNac,
                    edadPaciente: infoPreIdPaciente.edadPaciente,
                    habitacionPaciente: infoPreIdPaciente.habitacion,
                    generoPaciente: infoPreIdPaciente.genero,
                    fechaInPaciente: infoPreIdPaciente.fechaIn,
                    /* Datos de cirugía */
                    diagnostico: infoPreIdPaciente.diagnostico,
                    tipoCx: infoPreIdPaciente.tipoCx,
                    cirugia: infoPreIdPaciente.cirugia,
                    fechaCx: infoPreIdPaciente.fechaCx,
                    hrCx: infoPreIdPaciente.hrCx,
                    /* Datos CIE */
                    cie9: infoPreIdPaciente.cie9,
                    cie10: infoPreIdPaciente.cie10,
                    /* Informacion Médicos */
                    cirujano: infoPreIdPaciente.cirujano,
                    anestesiologo: infoPreIdPaciente.anestesiologo,
                    anestesiologoVPA: infoPreIdPaciente.anestesiologoVPA,
                    residenteAnestesia: infoPreIdPaciente.residenteAnestesia,
                    nacionalidad: infoPreIdPaciente.nacionalidad, 
                    CURP: infoPreIdPaciente.CURP,
                    folioID: infoPreIdPaciente.folioID,
                    estNacimiento: infoPreIdPaciente.estNacimiento,
                    estResidencia: infoPreIdPaciente.estResidencia,
                    alcaldia: infoPreIdPaciente.alcaldia,
                    colonia: infoPreIdPaciente.colonia,
                    codigoPostal: infoPreIdPaciente.codigoPostal
                }
            })
            .then((res: any) => {
                this.pacienteID = res.data.paciente;
                
                swal.fire({
                    title: 'Paciente registrado correctamente',
                    icon: 'info',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top',
                    timer: 3000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
                console.log("error: " + e);
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
                    /* Información adicional  del paciente */
                    numEpisodio: infoPreIdPaciente.numEpisodio,
                    fechaNPaciente: infoPreIdPaciente.fechaNac,
                    edadPaciente: infoPreIdPaciente.edadPaciente,
                    habitacionPaciente: infoPreIdPaciente.habitacion,
                    generoPaciente: infoPreIdPaciente.genero,
                    fechaInPaciente: infoPreIdPaciente.fechaIn,
                    /* Datos de cirugía */
                    diagnostico: infoPreIdPaciente.diagnostico,
                    tipoCx: infoPreIdPaciente.tipoCx,
                    cirugia: infoPreIdPaciente.cirugia,
                    fechaCx: infoPreIdPaciente.fechaCx,
                    hrCx: infoPreIdPaciente.hrCx,
                    /* Datos CIE */
                    cie9: infoPreIdPaciente.cie9,
                    cie10: infoPreIdPaciente.cie10,
                    /* Informacion Médicos */
                    cirujano: infoPreIdPaciente.cirujano,
                    anestesiologo: infoPreIdPaciente.anestesiologo,
                    anestesiologoVPA: infoPreIdPaciente.anestesiologoVPA,
                    residenteAnestesia: infoPreIdPaciente.residenteAnestesia,
                    nacionalidad: infoPreIdPaciente.nacionalidad, 
                    CURP: infoPreIdPaciente.CURP,
                    folioID: infoPreIdPaciente.folioID,
                    estNacimiento: infoPreIdPaciente.estNacimiento,
                    estResidencia: infoPreIdPaciente.estResidencia,
                    alcaldia: infoPreIdPaciente.alcaldia,
                    colonia: infoPreIdPaciente.colonia,
                    codigoPostal: infoPreIdPaciente.codigoPostal
                }
            })
            .then((res: any) => {
                this.pacienteID = res.data.paciente;
                
                swal.fire({
                    title: 'Datos actualizados correctamente',
                    icon: 'info',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top',
                    timer: 3000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
                console.log("error: " + e);
            });            
        }
    }
});
