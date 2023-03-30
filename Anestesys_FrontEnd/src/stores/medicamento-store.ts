import { defineStore } from "pinia";
import { apiAxios } from '@/boot/axios';
import { useUserStore } from "./user-store";
import { ref } from "vue";
import swal from 'sweetalert2';
import { deleteMedicamento, updateMedicamento, getMedicamento } from '../../../Anestesys_BackEnd/controllers/medicamento.controller';

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
            })
            .catch((e:any) => {
                console.log(e);                
            });

        },

        getMedicamento(idMedicamento){
            apiAxios({
                url: `http://localhost:5000/medicamentos/${String(idMedicamento)}`,
                method: "GET",
                headers: {
                    Authorization: "Bearer " + userStore.token,
                }
            })
            .then((res: any) => {
                this.medicamentos = res.data.medicamento;                
            })
            .catch((e:any) => {
                console.log(e);                
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

        updateMedicamento(idMedicamento, infoMedicamento: any){
            
            apiAxios({
                url: `http://localhost:5000/medicamentos/${String(idMedicamento)}`,
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
                console.log(e);
            });       
        },

        deleteMedicamento(infoMedicamento: any){
            
            apiAxios({
                url: `http://localhost:5000/medicamentos/${String(infoMedicamento)}`,
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
            })
            .catch((e:any) => {
                console.log(e);                
            });
        }
    }
})