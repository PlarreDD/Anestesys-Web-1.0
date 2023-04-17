<template>
  <header>
    
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
  @font-face {
      font-family: SF UI Display;
      src: url("@/fonts/SF-UI-Display-Regular.otf") format("opentype");
  }
</style>

<script lang="ts">
window.onbeforeunload = function(e) {
  return 'Texto de aviso';
};
import { defineComponent } from "vue"

export default defineComponent({
  components:{
  }

})
</script>