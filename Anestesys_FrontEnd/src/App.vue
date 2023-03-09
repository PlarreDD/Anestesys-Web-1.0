<template>
  <header>
    <!-- <barra-navegacion/> -->
    
    <div class="container mt-3">
      <RouterView v-slot="{Component}"> <!--Mantener los datos en las páginas al cambiar de vista-->
        <transition>
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </RouterView>
    </div>
  </header>
  
</template>

<style scoped>
</style>

<script lang="ts">
window.onbeforeunload = function(e) {
  return 'Texto de aviso';
};
import { defineComponent } from "vue"
// import BarraNavegacion from "./components/barraNavegacion.vue";

export default defineComponent({
  components:{
    // BarraNavegacion
  }

})
</script>