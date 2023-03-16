import { defineStore } from "pinia";
import { apiAxios } from '@/boot/axios';

export const usePreIdStore = defineStore('preid', {
    actions: {
        savePreId(numExped: String, nomPaciente: String, numEpisodio: String, fechaNac: String,
                  edadPaciente: String, genero: String, fechaIn: String, habitacion: String,
                  diagnostico: String, tipoCx: String, cie10: String, cie9: String,
                  cirugia: String, fechaCx: String, hrCx: String, cirujano: String,
                  anestesiologo: String, anestesiologoVPA: String){
            apiAxios.post("http://localhost:5000/preId",{
                numExpediente: numExped,
                nomPaciente: nomPaciente,
                numEpisodio: numEpisodio,
                fechaNPaciente: fechaNac,
                edadPaciente: edadPaciente,
                habitacionPaciente: habitacion,
                generoPaciente: genero,
                fechaInPaciente: fechaIn,
                diagnostico: diagnostico,
                tipoCx: tipoCx,
                cie10: cie10,
                cie9: cie9,
                cirugia: cirugia,
                fechaCx: fechaCx,
                hrCx: hrCx,
                cirujano: cirujano,
                anestesiologo: anestesiologo,
                anestesiologoVPA: anestesiologoVPA})
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
