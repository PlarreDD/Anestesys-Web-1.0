<template>
    <div class="input-group mb-3"> 
    
    <div class="tab-content col-md-9 divJustify" id="">
       
    </div>

    <div class="col-2 divLateralPrincipal">
      <div class="col-md-2 divLateral">
        <RouterLink to="pre"><img src="images/pre.png" width="180" height="180"/></RouterLink>
      </div>
      <div class="col-md-2 divLateral">
        <img src="images/trans.png" width="180" height="180" />
      </div>
      <div class="col-md-2 divLateral">
        <RouterLink to="post"><img src="images/post.png" width="180" height="180"/></RouterLink>
      </div>    
    </div>
  </div>
</template>

<style scoped>
.divLateral {
    margin-bottom: 6px; 
    margin-top: 6px;
    margin-left: 20px;
}
.divLateralPrincipal {
    margin-top: 126px;
}
.divJustify {
    width: 80%;
}
</style>