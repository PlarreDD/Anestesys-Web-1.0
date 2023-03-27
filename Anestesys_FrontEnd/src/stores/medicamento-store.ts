import { defineStore } from "pinia";
import { apiAxios } from '@/boot/axios';
import { useUserStore } from "./user-store";
import { ref } from "vue";
import swal from 'sweetalert2';

const userStore = useUserStore();

export const useMedicamentoStore = defineStore('medicamento', {
    state: () => ({
        med: ref(null),
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
                this.med = res.data;
                console.log(JSON.stringify  (this.med));
            });

        }
    }
})