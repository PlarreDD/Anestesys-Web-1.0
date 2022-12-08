<template>
    
    <div class="col-9 divform">  
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
            <div class="col-md-4">
                <label for="" class="form-label">Habitación</label>
                <input type="text" class="form-control" id="habitacion"> 
            </div>
            <div class="col-md-2">
                <label for="inputState" class="form-label">Género</label>
                <select id="inputState" class="form-select">
                    <option selected>Seleccione...</option>
                    <option>Masculino</option>
                    <option>Femenino</option>
                </select>
            </div>
            <div class="col-md-3">
                <label for="" class="form-label">Fecha de Ingreso</label>
                <input type="date" class="form-control" id="fechaIngreso">
            </div>

            <div class="col-md-9">
                <label for="" class="form-label">Diagnóstico</label>
                <input type="text" class="form-control" id="diagnostico">
            </div>
            <div class="col-md-3">
                <label for="inputState" class="form-label">Tipo de Cirugía</label>
                <select id="inputState" class="form-select">
                    <option selected>Seleccione...</option>
                    <option>Mayor</option>
                    <option>Menor</option>
                    <option>Ambulatoria</option>
                </select>
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
.divform {
  border-radius: 13px;
  box-shadow: 3px 3px 7px #ccc;
  padding: 1rem;
}
</style>