<template>

  <div class="input-group mb-3">
    <div class="col-md-8">
      <input class="form-control me-2" type="search" placeholder="Buscar expediente del paciente..." aria-label="Buscar">
    </div>    
  </div>

  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">Home</RouterLink> 
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink active-class="bg-info text-dark fw-bold" class="nav-link" to="/">Home</RouterLink> 
          <RouterLink active-class="bg-info text-dark fw-bold" class="nav-link" to="/gifs">Gifs</RouterLink>
          <RouterLink active-class="bg-info text-dark fw-bold" class="nav-link" to="/stickers">Stickers</RouterLink>
        </div>
      </div>
    </div>
  </nav>

  <div class="input-group mb-3">
    
    <div class="col-md-3">
      <RouterLink active-class="text-dark fw-bold bgactive" class="nav-link" to="/pre">ID PACIENTE</RouterLink>
    </div>
    <div class="col-md-3">
      <RouterLink active-class="text-dark fw-bold bgactive" class="nav-link bg-info" to="/valoracion">VALORACIÓN</RouterLink>
    </div>
    <div class="col-md-3">
      <RouterLink active-class="text-dark fw-bold bgactive" class="nav-link bg-success" to="/plan">PLAN</RouterLink>
    </div>
    <div class="col-md-3">
      <RouterLink active-class="text-dark fw-bold bgactive" class="nav-link bg-info" to="/nota">NOTA</RouterLink>
    </div>

  </div>

  <Id/>

  <div class="col-2">
    <div class="col-md-2">
      <img src="images/pre.png" width="180" height="180"/>
    </div>
    <div class="col-md-2">
      <img src="images/trans.png" width="180" height="180"/>
    </div>
    <div class="col-md-2">
      <img src="images/post.png" width="180" height="180"/>
    </div>    
  </div>
  
</template>

<script>
import Id from "../../components/pre/Id.vue";
export default{
  components:{
    Id
  }
}
</script>

<style scoped>
.bgactive{
  background-color: #f58220
}
</style>