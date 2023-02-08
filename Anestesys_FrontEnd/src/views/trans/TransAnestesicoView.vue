<template>
  <div>

    <div class="input-group mb-3">      
        <div class="col-md-6">
          <input class="form-control me-2" type="search" placeholder="Buscar número de expediente..." aria-label="Buscar"> <!--Buscador-->
        </div>              
    </div>

    <div class="input-group mb-3">
        <div class="col-9 divform navbar-nav">                     
            <ul class="nav text-center" id=""> <!--Lista para el menú principal-->
                <li class="col-md-3">
                    <button type="button" class="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">GRID ANESTÉSICO</button> <!--Botón para abrir el dropdown-->
                    <form class="dropdown-menu p-5">
                      <div class="mb-3 estiloDropDown input-group mb-3">
                        
                      </div>
                    </form>
                </li>
                <li class="col-md-3">
                    <button type="button" class="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">TÉCNICA ANESTÉSICA</button>
                    <form class="dropdown-menu p-5">
                      <div class="mb-3 estiloDropDownTecnica row g-3">
                        <div class="form-check col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                          <label class="form-check-label" for="checkTecnica">Local</label>
                        </div>
                        <div class="form-check col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                          <label class="form-check-label" for="checkTecnica">Sedación</label>
                        </div>
                        <div class="form-check col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                          <label class="form-check-label" for="checkTecnica">General balanceada</label>
                        </div>
                        <div class="form-check col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                          <label class="form-check-label" for="checkTecnica">TIVA (Anestesia total intravenosa)</label>
                        </div>
                        <div class="form-check col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                          <label class="form-check-label" for="checkTecnica">Multimodal</label>
                        </div>
                        <div class="form-check col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                          <label class="form-check-label" for="checkTecnica">Bloqueo mixto</label>
                        </div>
                        <div class="form-check col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                          <label class="form-check-label" for="checkTecnica">Bloqueo peridural lumbar</label>
                        </div>
                        <div class="form-check col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                          <label class="form-check-label" for="checkTecnica">Bloqueo peridural caudal</label>
                        </div>
                        <div class="form-check col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                          <label class="form-check-label" for="checkTecnica">Bloqueo espinal</label>
                        </div>
                        <div class="form-check col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                          <label class="form-check-label" for="checkTecnica">Bloqueo de plexo</label>
                        </div>
                        <div class="form-check col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                          <label class="form-check-label" for="checkTecnica">Bloqueo troncular</label>
                        </div>
                        <div class="form-check col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                          <label class="form-check-label" for="checkTecnica">Bloqueo peridural torácico</label>
                        </div>
                        <div class="form-check col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                          <label class="form-check-label" for="checkTecnica">Bloqueo peridural cervical</label>
                        </div>
                        <div class="form-check col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="checkTecnica">
                          <label class="form-check-label" for="checkTecnica">Libre de opioides</label>
                        </div>
                      </div>
                    </form>
                </li>
                <li class="col-md-3">
                    <button type="button" class="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">BALANCE HIDRICO</button>
                    <form class="dropdown-menu p-5">
                      <div class="mb-3 estiloDropDownBalance input-group mb-3">
                        <h6 class="bold col-md-12">INGRESOS</h6>

                        <div class="col-md-3 centrarLabel">
                          <label for="" class="form-label">Solución Hartman(ml):</label>
                        </div>
                        <div class="col-md-1 ">
                          <input class="form-control" type="text" id="">
                        </div>                        
                        <div class="col-md-3 centrarLabel">
                          <label for="" class="form-label">Solución fisiológica(ml):</label>
                        </div>
                        <div class="col-md-1">
                          <input class="form-control" type="text" id="">
                        </div>
                        <div class="col-md-3 centrarLabel">
                          <label for="" class="form-label">Glucosados(ml):</label>
                        </div>
                        <div class="col-md-1">
                          <input class="form-control" type="text" id="">
                        </div>
                        
                        <div class="col-md-3 centrarLabel">
                          <label for="" class="form-label">Gelatinas(ml):</label>
                        </div>
                        <div class="col-md-1">
                          <input class="form-control" type="text" id="">
                        </div>
                        <div class="col-md-3 centrarLabel">
                          <label for="" class="form-label">Almidones(ml):</label>
                        </div>
                        <div class="col-md-1">
                          <input class="form-control" type="text" id="">
                        </div>                      
                        <div class="col-md-3 centrarLabel">
                          <label for="" class="form-label">Albúminas(ml):</label>
                        </div>
                        <div class="col-md-1">
                          <input class="form-control" type="text" id="">
                        </div>

                        <div class="col-md-3 centrarLabel">
                          <label for="" class="form-label">Paquete globular(ml):</label>
                        </div>
                        <div class="col-md-1">
                          <input class="form-control" type="text" id="">
                        </div>                     
                        <div class="col-md-3 centrarLabel">
                          <label for="" class="form-label">Plasmas(ml):</label>
                        </div>
                        <div class="col-md-1">
                          <input class="form-control" type="text" id="">
                        </div>
                        <div class="col-md-3 centrarLabel">
                          <label for="" class="form-label">Plaquetas(ml):</label>
                        </div>
                        <div class="col-md-1">
                          <input class="form-control" type="text" id="">
                        </div>

                        <div class="col-md-3 centrarLabel">
                          <label for="" class="form-label">Crioprecipitados(ml):</label>
                        </div>
                        <div class="col-md-1">
                          <input class="form-control" type="text" id="">
                        </div>
                        <div class="col-md-3 centrarLabel">
                          <label for="" class="form-label">Factor VII(ml):</label>
                        </div>
                        <div class="col-md-1">
                          <input class="form-control" type="text" id="">
                        </div>
                        <div class="col-md-3 centrarLabel">
                          <label for="" class="form-label">Factor VIII(ml):</label>
                        </div>
                        <div class="col-md-1">
                          <input class="form-control" type="text" id="">
                        </div>

                        <div class="col-md-3 centrarLabel">
                          <label for="" class="form-label">Otros:</label>
                        </div>
                        <div class="col-md-1">
                          <input class="form-control" type="text" id="">
                        </div>

                        <h6 class="bold col-md-12">EGRESOS</h6>

                        <div class="col-md-3 centrarLabel">
                          <label for="" class="form-label">Liquídos de ascitis(ml):</label>
                        </div>
                        <div class="col-md-1">
                          <input class="form-control" type="text" id="">
                        </div>
                        <div class="col-md-3 centrarLabel">
                          <label for="" class="form-label">Sangrado aproximado(ml):</label>
                        </div>
                        <div class="col-md-1">
                          <input class="form-control" type="text" id="">
                        </div>
                        <div class="col-md-3 centrarLabel">
                          <label for="" class="form-label">Uresis(ml):</label>
                        </div>
                        <div class="col-md-1">
                          <input class="form-control" type="text" id="">
                        </div>

                        <div class="col-md-3 centrarLabel">
                          <label for="" class="form-label">Exposición quirúrgica(ml):</label>
                        </div>
                        <div class="col-md-1">
                          <input class="form-control" type="text" id="">
                        </div>
                        <div class="col-md-3 centrarLabel">
                          <label for="" class="form-label">Requerimientos basales(ml):</label>
                        </div>
                        <div class="col-md-1">
                          <input class="form-control" type="text" id="">
                        </div>
                        <div class="col-md-3 centrarLabel">
                          <label for="" class="form-label">Ayuno(ml):</label>
                        </div>
                        <div class="col-md-1">
                          <input class="form-control" type="text" id="">
                        </div>

                        <div class="col-md-3 centrarLabel">
                          <label for="" class="form-label">Otros:</label>
                        </div>
                        <div class="col-md-1">
                          <input class="form-control" type="text" id="">
                        </div>
                      </div>
                    </form>
                </li>
                <li class="col-md-3">
                    <button type="button" class="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">DATOS DEL VENTILADOR</button>
                    <form class="dropdown-menu p-5">
                      <div class="mb-3 estiloDropDownVentilador row g-3">
                        <div class="col-md-9">
                            <label for="inputState" class="form-label">Modos de ventilación</label>
                            <select id="inputState" class="form-select">
                                <option selected>Seleccione...</option>
                                <option>Control volumen</option>
                                <option>Control presión</option>
                                <option>Presión soporte</option>
                                <option>SIMV-VC+PSV</option>
                                <option>SIMV-PC+PSV</option>
                                <option>Ventilación control presión con volumen garantizado</option>                   
                            </select>
                        </div>   
                        <div class="col-md-3">
                            <label class="form-label">PEEP</label>
                            <input type="text" class="form-control" id=""> 
                        </div>    
                        
                        <div class="col-md-3">
                            <label class="form-label">VT</label>
                            <input type="text" class="form-control" id=""> 
                        </div>
                        <div class="col-md-3">
                            <label class="form-label">Frec. Resp</label>
                            <input type="text" class="form-control" id=""> 
                        </div>
                        <div class="col-md-3">
                            <label class="form-label">I:E</label>
                            <input type="text" class="form-control" id=""> 
                        </div>
                        <div class="col-md-3">
                            <label class="form-label">P. Límite</label>
                            <input type="text" class="form-control" id=""> 
                        </div>
                      </div>                      
                    </form>
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
          <div class="centrarLabel">
            <h4><span id="clock"></span></h4>
          </div>          
        </div>   
    </div>

    <div class="input-group mb-3 bordePrincipal"> 
      
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

        <div class="col-2 menuLateralPrincipal"> <!--Menú lateral-->
          <div class="col-md-2 menuLateral">
            <RouterLink to="pre"><img src="images/pre.png" class="ajusteImg"/></RouterLink>
          </div>
          <div class="col-md-2 menuLateral">
            <img src="images/trans.png" class="ajusteImg"/>
          </div>
          <div class="col-md-2 menuLateral">
            <RouterLink to="post"><img src="images/post.png" class="ajusteImg"/></RouterLink>
          </div>    
        </div>

        <div>
          <pre @recibe-datos="actualizaDatos" />
        </div>

        <div class="container text-center col-md-9 posicionEstatica bordeContenedor">
            <div class="row">
              <div class="col bordeColumna">
                Paciente: {{nomPaciente}}
              </div>
              <div class="col bordeColumna">
                Cirujano: {{}}
              </div>
              <div class="col bordeColumna">
                Cirugía: {{}}
              </div>
            </div>
        </div>
    </div>    

  </div>
</template>

<script lang="ts">

import Pre from "../pre/PreAnestesicoView.vue";

export default({

  data() {
    return {
      numExpediente:'',
      nomPaciente:'',
      nomCirujano:'',
      nomCirugia:''
    }
  },
  components:{
    Pre
  },
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
      },
      actualizaDatos(nombrePaciente, nombreCirujano, cirugia) {
        this.nomPaciente = nombrePaciente,
        this.nomCirujano = nombreCirujano,
        this.nomCirugia = cirugia

        console.log(this.nomPaciente) 
      },
  }
})
</script>

<style scoped>
.menuLateral {
    margin-bottom: 6px; 
    margin-top: 6px;
    margin-left: 20px;
}
.menuLateralPrincipal {
    margin-top: 16px;
}
.bordePrincipal {
    width: 110%;
}
.ajusteImg{
  width: 455%;
  height: auto;
}
.centrarLabel{
  text-align: center;
}
.posicionEstatica {
    position: sticky;
    bottom: 0;
    z-index: 1020;
    background-color: #fff;
}
.bordeContenedor{
  box-shadow: 3px 3px 7px #ccc;
  padding: 1.2rem;

  border: #000000 1px solid;
}
.bordeColumna{
  margin-left: auto;
  margin-right: auto;
  border-right: 1px solid #000000;
  border-left: 1px solid #000000;
}
.estiloDropDown{
  width: 450px; height: 250px;
}
.estiloDropDownTecnica{
  width: 450px; height: auto;
}
.estiloDropDownBalance{
  width: 600px; height: 400px;
}
.estiloDropDownVentilador{
  width: 450px; height: auto;
}
</style>