import { defineStore } from "pinia";
import { apiAxios } from '@/boot/axios';
import { useUserStore } from "./user-store";
import { ref } from "vue";

const userStore = useUserStore();

export const usePreIdStore = defineStore('preid', {
    state: () => ({
        pacienteID: ref(null),
    }),

    actions: {
        savePreId(id: any){
            apiAxios({
                url: "http://localhost:5000/preId",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    /* Información obligatoria a llenar en el cuestionario */
                    numExpediente: id.numExped,
                    nomPaciente: id.nomPaciente,
                    /* Información adicional  del paciente */
                    numEpisodio: id.numEpisodio,
                    fechaNPaciente: id.fechaNac,
                    edadPaciente: id.edadPaciente,
                    habitacionPaciente: id.habitacion,
                    generoPaciente: id.genero,
                    fechaInPaciente: id.fechaIn,
                    /* Datos de cirugía */
                    diagnostico: id.diagnostico,
                    tipoCx: id.tipoCx,
                    cirugia: id.cirugia,
                    fechaCx: id.fechaCx,
                    hrCx: id.hrCx,
                    /* Datos CIE */
                    cie9: id.cie9,
                    cie10: id.cie10,
                    /* Informacion Médicos */
                    cirujano: id.cirujano,
                    anestesiologo: id.anestesiologo,
                    anestesiologoVPA: id.anestesiologoVPA,
                    residenteAnestesia: id.residenteAnestesia,
                    nacionalidad: id.nacionalidad, 
                    CURP: id.CURP,
                    folioID: id.folioID,
                    estNacimiento: id.estNacimiento,
                    estResidencia: id.estResidencia,
                    alcaldia: id.alcaldia,
                    colonia: id.colonia,
                    codigoPostal: id.codigoPostal
                }
            })                
            .then((res:any) => {
                console.log(res.data);
                this.pacienteID = String(res.data.id);
                console.log(this.pacienteID);                
            })
            .catch((e:any) => {
                console.log("error: " + e);
            });
        },
    }
});
