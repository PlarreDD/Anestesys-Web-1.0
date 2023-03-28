import { defineStore } from "pinia";
import { apiAxios } from '@/boot/axios';
import { useUserStore } from "./user-store";
import { ref } from "vue";
import swal from 'sweetalert2';
import { deleteMedicamento, updateMedicamento } from '../../../Anestesys_BackEnd/controllers/medicamento.controller';

const userStore = useUserStore();

export const useMedicamentoStore = defineStore('medicamento', {
    state: () => ({
        medicamentos: ref(null),
    }),

    actions:{
        getMedicamentosList(){
            apiAxios({
                url: "http://localhost:5000/medicamentos",
                method: "GET",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                }
            })
            .then((res: any) => {
                this.medicamentos = res.data.medicamentos;
            });

        },

        createMedicamento(infoMedicamento: any){
            apiAxios({
                url: "http://localhost:5000/medicamentos",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {                    
                    nombreMedicamento: infoMedicamento.nombreMedicamento,
                    codigoMedicamento: infoMedicamento.codigoMedicamento,                    
                }
            })
            .then((res: any) => {
                this.medicamentos = res.data.medicamentos;
                
                swal.fire({
                    title: 'Medicamento registrado correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2500,
                    timerProgressBar: true
                })
            })
            .catch((e:any) => {
                if(e.response){
                    /* Mensaje de registro fallido */
                    swal.fire({
                        title: 'El medicamento ya está registrado',
                        icon: 'error',
                        showConfirmButton: false,
                        toast: true,
                        timer: 2500,
                        timerProgressBar: true,
                        position: 'top-end'
                    });
                }
                else if(e.request){
                    console.log(e.request);
                }
                else{
                    console.log("ErrorAx: ", e);
                }});
        },

        updateMedicamento(infoMedicamento: any){
            apiAxios({
                url: `http://localhost:5000/medicamentos/${String(this.medicamentos._id)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                },
                data: {
                    nombreMedicamento: infoMedicamento.nombreMedicamento,
                    codigoMedicamento: infoMedicamento.codigoMedicamento,
                }
            })
            .then((res: any) => {
                this.medicamentos = res.data.medicamentos;
                
                swal.fire({
                    title: 'Medicamento actualizado correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
                console.log("error: " + e);
            });       
        },

        deleteMedicamento(infoMedicamento: any){
            apiAxios({
                url: `http://localhost:5000/medicamentos/${String(this.medicamentos._id)}`,
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                }
            })
            .then((res: any) => {
                this.medicamentos = res.data.medicamentos;
                
                swal.fire({
                    title: 'Medicamento eliminado correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2500,
                    timerProgressBar: true
                })
            });
        }
    }
})