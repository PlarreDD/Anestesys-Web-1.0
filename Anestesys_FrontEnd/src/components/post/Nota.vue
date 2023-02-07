<template>
    <div>
        <ul class="nav nav-pills mb-3 text-center" id="">
            <li class="nav-item col-md-6" >
                <button class="nav-link active" id="nota" data-bs-toggle="pill" data-bs-target="#notaPost" type="button" aria-selected="true">NOTA POST-ANESTÉSICA</button>
            </li>
            <li class="nav-item col-md-6" >
                <button class="nav-link" id="nota" data-bs-toggle="pill" data-bs-target="#caso" type="button" aria-selected="false">CASO OBSTÉTRICO RECIÉN NACIDO</button>
            </li>
        </ul>


        <div class="tab-content col-md-12" id="">
            <div class="tab-pane fade show active" id="notaPost">
                <div class="col-12 bordePrincipal">
                    <form class="row g-3">    
                        <div class="col-md-9">
                            <label for="" class="form-label">Técnica de anestesia final</label>
                            <input type="text" class="form-control" id=""> 
                        </div>
                        <div class="col-md-3">
                            <label for="" class="form-label col-12">Intubación</label>

                            <input type="radio" class="btn-check" name="intubacion" id="intubacionSi" autocomplete="off">
                            <label class="btn btn-outline-success margenRadio" for="intubacionSi">Sí</label>

                            <input type="radio" class="btn-check" name="intubacion" id="intubacionNo" autocomplete="off">
                            <label class="btn btn-outline-danger" for="intubacionNo">No</label>
                        </div>

                        <div class="col-md-12">
                            <label for="" class="form-label">Nota Post-Anestésica</label>
                            <textarea class="form-control" id="" rows="8"></textarea>
                        </div>

                        <h5 class="">SIGNOS VITALES AL EGRESO DEL QUIROFANO</h5>

                        <div class="col-md-2">
                            <label for="" class="form-label">TA</label>
                            <input type="text" class="form-control" id=""> 
                        </div>
                        <div class="col-md-2">
                            <label for="" class="form-label">FC</label>
                            <input type="text" class="form-control" id=""> 
                        </div>
                        <div class="col-md-2">
                            <label for="" class="form-label">FR</label>
                            <input type="text" class="form-control" id=""> 
                        </div>
                        <div class="col-md-2">
                            <label for="" class="form-label">Temperatura</label>
                            <input type="text" class="form-control" id=""> 
                        </div>
                        <div class="col-md-2">
                            <label for="" class="form-label">Pulso</label>
                            <input type="text" class="form-control" id=""> 
                        </div>
                        <div class="col-md-2">
                            <label for="" class="form-label">SpO2</label>
                            <input type="text" class="form-control" id=""> 
                        </div>

                        <div class="col-md-6">
                            <label for="inputState" class="form-label">El paciente pasa a</label>
                            <select id="inputState" class="form-select">
                                <option selected>Seleccione...</option>
                                <option>Recuperación - Quirofano</option>
                                <option>Recuperación - Casa</option>
                                <option>Recuperación - Piso</option>
                                <option>Unidad de cuidados intermedia</option>
                                <option>Unidad de cuidados intensivos</option>
                                <option>Unidad de cuidados intensivos pediátricos</option>
                                <option>Unidad de cuidados intensivos neonatales</option>
                                <option>Traslado a otra unidad hospitalaria</option>                    
                            </select>
                        </div>   
                    </form>
                </div>
            </div>
            <div class="tab-pane fade" id="caso">
                <div class="col-12 bordePrincipal largoContenedor">
                    <form class="row g-3">    
                        <div class="col-md-4">
                            <label for="" class="form-label">Número de productos</label>
                            <input type="text" class="form-control" id=""> 
                        </div>

                        <div class="col-md-12">
                            <fieldset class="bordeScheduler">
                                <legend class="bordeScheduler">Datos bebé #</legend>
                                <div class="row g-3">
                                    <div class="col-md-4">
                                        <label for="" class="form-label col-12">Género</label>

                                        <input type="radio" class="btn-check" name="genero" id="masculino" autocomplete="off">
                                        <label class="btn btn-outline-info margenRadio" for="masculino">Masculino</label>

                                        <input type="radio" class="btn-check" name="genero" id="femenino" autocomplete="off">
                                        <label class="btn btn-outline-info" for="femenino">Femenino</label>                            
                                    </div>                                 
                                    <div class="col-md-4">
                                        <label for="" class="form-label">Hora de Nacimiento</label>
                                        <input type="time" class="form-control" id="horaNacimiento">
                                    </div>
                                    <div class="col-md-4">
                                        <label for="" class="form-label">Alumbramiento</label>
                                        <input type="text" class="form-control" id="">
                                    </div>

                                    <div class="col-md-4">
                                        <label for="" class="form-label">Apgar 1 min</label>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                    <div class="col-md-4">
                                        <label for="" class="form-label">Apgar 5 min</label>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                    <div class="col-md-4">
                                        <label for="" class="form-label">Capurro</label>
                                        <input type="text" class="form-control" id="">
                                    </div>

                                    <div class="col-md-4">
                                        <label for="" class="form-label">Peso (gm)</label>
                                        <input type="text" class="form-control" id="">
                                    </div>

                                    <div class="col-md-4">
                                        <label for="" class="form-label">Talla (cm)</label>
                                        <input type="text" class="form-control" id="">
                                    </div>

                                </div>
                            </fieldset>
                        </div>

                    </form>            
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.bordePrincipal {
  border-radius: 13px;
  box-shadow: 3px 3px 7px #ccc;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 10px;
}
.margenRadio {
    margin-right: 10px;
}
fieldset.bordeScheduler {
    border: 1px groove #ddd !important;
    padding: 0 1.4em 1.4em 1.4em !important;
    margin: 0 0 1.5em 0 !important;
    -webkit-box-shadow:  0px 0px 0px 0px #000;
            box-shadow:  0px 0px 0px 0px #000;
}
legend.bordeScheduler {
    font-size: 1.2em !important;
    font-weight: bold !important;
    text-align: left !important;
    width:auto;
    padding:0 10px;
    border-bottom:none;
}
.largoContenedor{
    height: 576px
}
</style>