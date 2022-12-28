<template>
  <main>
    <div class="col-md-12">
      <div class="row g-3">
        <div class="col-md-4 alinearContenedor">
          <RouterLink to="pre"><img src="images/pre.png" width="300" height="300"/></RouterLink>
        </div>
        <div class="col-md-4 alinearContenedor">
          <RouterLink to="trans"><img src="images/trans.png" width="300" height="300"/></RouterLink>
        </div>
        <div class="col-md-4 alinearContenedor">
          <RouterLink to="post"><img src="images/post.png" width="300" height="300"/></RouterLink>
        </div>    
      </div>
    </div>
  </main>
</template>

<style>
.alinearContenedor{
  text-align: center;
}
</style>