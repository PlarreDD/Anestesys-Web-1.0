<template>
  <div class="input-group mb-3 divPrincipal"> 
    
    <div class="tab-content col-md-9" id="">
       
    </div>

    <div class="col-2 divMenuLateralPrincipal">
      <div class="col-md-2 divMenuLateral">
        <RouterLink to="pre"><img src="images/pre.png" width="180" height="180"/></RouterLink>
      </div>
      <div class="col-md-2 divMenuLateral">
        <img src="images/trans.png" width="180" height="180" />
      </div>
      <div class="col-md-2 divMenuLateral">
        <RouterLink to="post"><img src="images/post.png" width="180" height="180"/></RouterLink>
      </div>    
    </div>
  </div>
</template>

<style scoped>
.divMenuLateral {
    margin-bottom: 6px; 
    margin-top: 6px;
    margin-left: 20px;
}
.divMenuLateralPrincipal {
    margin-top: 126px;
}
.divPrincipal {
    width: 110%;
}
</style>