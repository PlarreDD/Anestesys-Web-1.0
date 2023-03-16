import { defineStore } from "pinia";
import { apiAxios } from '@/boot/axios';
import { useUserStore } from "./user-store";

const userStore = useUserStore();

export const usePreIdStore = defineStore('preid', {
    actions: {
        savePreId(numExped: String, nomPaciente: String, numEpisodio: String,
                  fechaNac: String, edadPaciente: String, genero: String,
                  fechaIn: String, habitacion: String, diagnostico: String,
                  tipoCx: String, cie10: String, cie9: String, cirugia: String,
                  fechaCx: String, hrCx: String, cirujano: String,
                  anestesiologo: String, anestesiologoVPA: String,
                  residenteAnestesia: String, nacionalidad: String, CURP: String,
                  folioID: String, estNacimiento: String, estResidencia: String,
                  alcaldia: String, colonia: String,codigoPostal: String){
            apiAxios({
                url: "http://localhost:5000/preId",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    /* Información obligatoria a llenar en el cuestionario */
                    numExpediente: numExped,
                    nomPaciente: nomPaciente,
                    /* Información adicional  del paciente */
                    numEpisodio: numEpisodio,
                    fechaNPaciente: fechaNac,
                    edadPaciente: edadPaciente,
                    habitacionPaciente: habitacion,
                    generoPaciente: genero,
                    fechaInPaciente: fechaIn,
                    /* Datos de cirugía */
                    diagnostico: diagnostico,
                    tipoCx: tipoCx,
                    cirugia: cirugia,
                    fechaCx: fechaCx,
                    hrCx: hrCx,
                    /* Datos CIE */
                    cie9: cie9,
                    cie10: cie10,
                    /* Informacion Médicos */
                    cirujano: cirujano,
                    anestesiologo: anestesiologo,
                    anestesiologoVPA: anestesiologoVPA,
                    residenteAnestesia: residenteAnestesia,
                    nacionalidad: nacionalidad, 
                    CURP: CURP,
                    folioID: folioID,
                    estNacimiento: estNacimiento,
                    estResidencia: estResidencia,
                    alcaldia: alcaldia,
                    colonia: colonia,
                    codigoPostal: codigoPostal
                }
            })
                
                .then((res:any)=>{
                    console.log(res.data)
                })
                    .catch((e:any) => {
                        console.log("error: " + e);
                    })
                ;
        },
    }
});
