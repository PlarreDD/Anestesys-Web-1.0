<template>
    <div class="col-12 borderPrincipal">  
        <form @submit.prevent="" class="row g-3">                
            <div class="col-md-11">
                    <h5 class="col-12 fw-bold"> NOTA PREANESTÉSICA </h5>                                                                                                                    
            </div>
            <div class="col-md-1 justificar-icono-nota">
                <label for=""
                        class="form-label fw-bold alinear-icono-nota">
                            <span style="text-align: right;">
                                <font-awesome-icon icon="fa-solid fa-microphone" size="2xl"/>
                            </span>
                </label>     
            </div>
            <div class="col-md-12">
                <textarea class="form-control"
                          id=""
                          rows="20"
                          v-model="textoNota.nota"
                          :class="textoNota.nota != undefined ?
                                 'form-control border border-success formSombra' : 'form-control'">
                </textarea>
            </div>

            <!-- Botón Guardar/Actualizar --> 
            <div class="col-md-12 alinear-btn">
                <template v-if="btnActualizarNota === false">
                    <button data-bs-toggle="tab" 
                            type="submit"
                            class="btn btn-guardar-info fw-bold"
                            @click="cambiarUpdateNota"
                            > GUARDAR </button>
                </template>
                <template v-else>
                    <button data-bs-toggle="tab" 
                            type="submit"
                            class="btn btn-guardar-info fw-bold"
                            @click="preIdStore.updatePreNota(textoNota.nota, preIdStore.pacienteID._id)"
                            > ACTUALIZAR </button> 
                </template>                                                         
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
    
    data () {
        return{
            textoNota: {} as notaPre,
            preIdStore,

            btnActualizarNota:false
        }
    },

    methods: {
        cambiarUpdateNota() {
            this.btnActualizarNota=true

            preIdStore.savePreNota(this.textoNota.nota, preIdStore.pacienteID._id)
        }
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
    border-color:#6BD99B;
    outline:0;
    -webkit-box-shadow:0 0 8px #6BD99B;
    box-shadow:0 0 8px #6BD99B
}
.border-success {
    --bs-border-opacity: 1;
    border-color: #6BD99B !important;
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
}
.alinear-btn{
    text-align: end;
}
h5{
    color: #002D60;
    margin-top: 11px;    
}
.alinear-icono-nota{
    margin-top: 6px;
}
.justificar-icono-nota{
    text-align: center;
}
</style>