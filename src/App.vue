<template>
  <header>
    <div class="container mt-3">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <div class="container mt-3">
    <RouterView />
  </div>
  
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
