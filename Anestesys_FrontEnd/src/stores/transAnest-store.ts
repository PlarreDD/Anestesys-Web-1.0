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
        saveDatosV(regTransAnest: any, pid: string){
            apiAxios({
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

        updateDatosV(regTransAnest: any, pid: string){
            apiAxios({
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
                console.log(res.data);
                
                this.datosVentilacion = res.data.listaModosVent;
            })
            .catch((e: any) => {
                //   console.log(e);
            });
        }
    }
})