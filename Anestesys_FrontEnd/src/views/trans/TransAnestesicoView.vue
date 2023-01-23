<template>
  <div>

    <div class="input-group mb-3">      
        <div class="col-md-6">
          <input class="form-control me-2" type="search" placeholder="Buscar número de expediente..." aria-label="Buscar"> <!--Buscador-->
        </div>              
    </div>

    <div class="input-group mb-3">
        <div class="col-9 divform navbar-nav">                     
            <ul class="nav nav-pills nav-fill text-center" id=""> <!--Lista para el menú principal-->
                <li class="nav-item col-md-3">
                    <button class="nav-link active" id="id-tab" data-bs-toggle="tab" type="submit" aria-selected="true">GRID ANESTÉSICO</button> <!--Se asigna el contenedor al que apuntara el elemento por medio de data-bs-target-->
                </li>
                <li class="nav-item col-md-3">
                    <button class="nav-link" id="valoracion-tab" data-bs-toggle="tab" type="submit" aria-selected="false">TÉCNICA ANESTÉSICA</button>
                </li>
                <li class="nav-item col-md-3">
                    <button class="nav-link" id="plan-tab" data-bs-toggle="tab" type="submit" aria-selected="false">BALANCE HIDRICO</button>
                </li>
                <li class="nav-item col-md-3">
                    <button class="nav-link" id="nota-tab" data-bs-toggle="tab" type="submit" aria-selected="false">DATOS DEL VENTILADOR</button>
                </li>
            </ul>
        </div>       
        <div class="col-1">
          <select id="inputState" class="form-select">
            <option>1</option>
            <option>2</option>
            <option>5</option>
            <option>10</option>
            <option>15</option>                   
          </select>
        </div>   

        <div class="col-2">
          <div class="centrar-label">
            <h4><span id="clock"></span></h4>
          </div>          
        </div>   
    </div>

    <div class="input-group mb-3 divPrincipal"> 
      
        <div class="tab-content col-md-9" id="">
          <div class="row g-3">
            <table class="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>00:00</th>
                  <th>00:00</th>
                  <th>00:00</th>
                  <th>00:00</th>
                  <th>00:00</th>
                  <th>00:00</th>
                  <th>00:00</th>
                  <th>00:00</th>
                  <th>00:00</th>
                  <th>00:00</th>
                </tr>
              </thead>             
            </table>
          </div>
        </div>

        <div class="col-2 divMenuLateralPrincipal"> <!--Menú lateral-->
          <div class="col-md-2 divMenuLateral">
            <RouterLink to="pre"><img src="images/pre.png" class="imgAjuste"/></RouterLink>
          </div>
          <div class="col-md-2 divMenuLateral">
            <img src="images/trans.png" class="imgAjuste"/>
          </div>
          <div class="col-md-2 divMenuLateral">
            <RouterLink to="post"><img src="images/post.png" class="imgAjuste"/></RouterLink>
          </div>    
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
    margin-top: 16px;
}
.divPrincipal {
    width: 110%;
}
.imgAjuste{
  width: 455%;
  height: auto;
}
.centrar-label{
  text-align: center;
}
</style>

<script lang="ts">

export default({

  mounted: function() { // Llama el método despues de cargar la página
      this.mueveReloj();
  },
  methods: {
      async mueveReloj() {            
        const clock: HTMLSpanElement = document.getElementById('clock');

        setInterval(()=> {
          const date: Date = new Date();
          clock.innerText = date.toLocaleTimeString('es-MX', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          });

        }, 1000);
      }
  }
})
</script>