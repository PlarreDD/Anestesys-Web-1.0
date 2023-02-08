<template>
    <div class="col-12 borderPrincipal">  
        <form class="row g-3">                
            <div class="col-md-12">
                <label for="" class="form-label">Observaciones</label>
                <textarea class="form-control" id="" rows="20" v-model="nota.observaciones"
                :class="nota.observaciones.length != 0 ? 'form-control border border-success formSombra' : 'form-control'"></textarea>
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
  box-shadow: 3px 3px 7px;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 10px;
  background-color: rgba(225, 225, 225, 0.6);
}
.formSombra:focus{
    border-color:green;
    outline:0;
    -webkit-box-shadow:inset 0 1px 1px #000,0 0 8px green;
    box-shadow:inset 0 1px 1px #000,0 0 8px green
}
</style>