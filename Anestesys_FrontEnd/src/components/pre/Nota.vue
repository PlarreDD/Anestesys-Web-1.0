<template>
    <div class="col-12 borderPrincipal">  
        <form class="row g-3">                
            <div class="col-md-12">
                <label for="" class="form-label fw-bold">Observaciones</label>
                <textarea class="form-control" id="" rows="20" v-model="nota.observaciones"
                :class="nota.observaciones != '' ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
            </div>
        </form>
    </div>    
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    data () {
        return{
            nota: {
                observaciones: "", 
            }      
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
    border-color:green;
    outline:0;
    -webkit-box-shadow:0 0 8px green;
    box-shadow:0 0 8px green
}
</style>