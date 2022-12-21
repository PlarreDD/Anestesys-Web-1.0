<template>
    
    <div class="col-12 divBorder">  
        <form class="row g-3">                
            <div class="col-md-4">
                <label for="" class="form-label">Número de Expediente</label>
                <input type="text" class="form-control" id="numExpediente"> 
            </div>
            <div class="col-md-6">
                <label for="" class="form-label">Nombre del Paciente</label>
                <input type="text" class="form-control" id="nombrePaciente"> 
            </div>
            <div class="col-md-2">
                <label for="" class="form-label">Edad</label>
                <input type="number" class="form-control" id="edadPaciente">  
            </div>

            <div class="col-md-3">
                <label for="" class="form-label">Fecha de Nacimiento</label>
                <input type="date" class="form-control" id="fechaNacimiento">
            </div>
            <div class="col-md-3">
                <label for="" class="form-label">Habitación</label>
                <input type="text" class="form-control" id="habitacion"> 
            </div>            
            <div class="col-md-3">
                <label for="" class="form-label col-12">Género</label>

                <input type="radio" class="btn-check" name="genero" id="masculino" autocomplete="off">
                <label class="btn btn-outline-info radioMargin" for="masculino">Masculino</label>

                <input type="radio" class="btn-check" name="genero" id="femenino" autocomplete="off">
                <label class="btn btn-outline-info" for="femenino">Femenino</label>
            </div>             

            <div class="col-md-3">
                <label for="" class="form-label">Fecha de Ingreso</label>
                <input type="date" class="form-control" id="fechaIngreso">
            </div>
          
            <div class="col-md-8">
                <label for="" class="form-label">Diagnóstico</label>
                <textarea class="form-control" id="" rows="3"></textarea>
            </div>
            <div class="col-md-4">
                <label for="" class="form-label col-12">Tipo de Cirugía</label>

                <input type="radio" class="btn-check" name="tipoCirugia" id="mayor" autocomplete="off">
                <label class="btn btn-outline-info radioMargin" for="mayor">Mayor</label>

                <input type="radio" class="btn-check" name="tipoCirugia" id="menor" autocomplete="off">
                <label class="btn btn-outline-info radioMargin" for="menor">Menor</label>

                <input type="radio" class="btn-check" name="tipoCirugia" id="ambulatoria" autocomplete="off">
                <label class="btn btn-outline-info" for="ambulatoria">Ambulatoria</label>
            </div>           

            <div class="col-md-6">
                <label for="" class="form-label">Cirugía</label>
                <input type="text" class="form-control" id="diagnostico">
            </div>
            <div class="col-md-3">
                <label for="" class="form-label">Fecha de Cirugía</label>
                <input type="date" class="form-control" id="fechaCirugia">
            </div>    
            <div class="col-md-3">
                <label for="" class="form-label">Hora de Cirugía</label>
                <input type="time" class="form-control" id="horaCirugia">
            </div>

            <div class="col-md-6">
                <label for="" class="form-label">Cirujano</label>
                <input type="text" class="form-control" id="cirujano">
            </div>
            <div class="col-md-6">
                <label for="" class="form-label">Anestesiólogo</label>
                <input type="text" class="form-control" id="anestesiologo">
            </div>
            <div class="col-md-6">
                <label for="" class="form-label">Anestesiólogo VPA</label>
                <input type="text" class="form-control" id="anestesiologoVPA">
            </div>            
        </form>
    </div>

</template>

<style scoped>
.divBorder {
  border-radius: 13px;
  box-shadow: 3px 3px 7px #ccc;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 10px;
}
.radioMargin{
    margin-right: 10px;
}
</style>