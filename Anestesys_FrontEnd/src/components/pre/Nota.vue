<template>
    <div class="col-12 borderPrincipal">  
        <form @submit.prevent="" class="row g-3">                
            <div class="col-md-12">
                <label for=""
                       class="form-label fw-bold"> Observaciones </label>

                <div>
                    <button data-bs-toggle="tab" 
                            type="submit"
                            class="btn btn-guardar-info fw-bold"
                            @click="preIdStore.updatePreNota(textoNota.nota, preIdStore.pacienteID._id)"
                            > ACTUALIZAR </button>
                </div>
                
                <textarea class="form-control"
                          id=""
                          rows="20"
                          v-model="textoNota.nota"
                          :class="textoNota.nota != '' ?
                                 'form-control border border-success formSombra' : 'form-control'">
                </textarea>

                <!-- Botón Guardar/Actualizar -->
                <div>
                    <button data-bs-toggle="tab" 
                            type="submit"
                            class="btn btn-guardar-info fw-bold"
                            @click="preIdStore.savePreNota(textoNota.nota, preIdStore.pacienteID._id)"
                            > GUARDAR </button>
                    
                </div>
                        
                
            </div>
        </form>
    </div>    
</template>

<script lang="ts">
import type { notaPre } from "@/interfaces/regPreAnest";
import { usePreIdStore } from "@/stores/preId-store";
import { defineComponent } from "vue";

const preIdStore = usePreIdStore();

export default defineComponent({
    // props:{
    //     propBtnGuardar:{
    //         type: Boolean
    //     },

    //     propBtnActualizar:{
    //         type: Boolean
    //     },
    // },
    
    data () {
        return{
            textoNota: {} as notaPre,
            preIdStore,
        }
    },

    methods: {
    }
})
</script>

<style scoped>
.borderPrincipal {
  border-radius: 5px;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 10px;
  background-color: rgba(232, 234, 236, 0.6);
}
.formSombra:focus{
    border-color:green;
    outline:0;
    -webkit-box-shadow:0 0 8px green;
    box-shadow:0 0 8px green
}

.btn-guardar-info{
    --bs-btn-bg: none;
    --bs-btn-color: #E88300;    
    --bs-btn-border-color: #E88300;
    --bs-btn-hover-bg: #E88300;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-border-color: #E88300;          
    --bs-btn-active-bg: #E88300;
    --bs-btn-active-color: #ffffff;
    --bs-btn-active-border-color: #E88300;
    width: 150px; 
    position: absolute;       
}
.btn-guardar-datos{
    --bs-btn-bg: none;
    --bs-btn-color: #E88300;    
    --bs-btn-border-color: #E88300;
    --bs-btn-hover-bg: #E88300;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-border-color: #E88300;          
    --bs-btn-active-bg: #E88300;
    --bs-btn-active-color: #ffffff;
    --bs-btn-active-border-color: #E88300;
    width: 150px; 
    position: absolute;       
}
</style>