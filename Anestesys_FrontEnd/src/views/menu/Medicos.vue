<template>    
    <div class="row divBorder">

      <div class="col-12 col-md-5">
        <form>

          <h3>Gestión de cirujanos y anestesiólogos</h3>
          <div class="mb-3">
            <label class="form-label">Nombre(s)</label>
            <input type="text" class="form-control" required />
          </div>

          <div class="mb-3">
            <label class="form-label">Apellido(s)</label>
            <input type="text" class="form-control" required />
          </div>

          <div class="mb-3">
            <label class="form-label">Matricula</label>
            <input type="text" class="form-control" required />
          </div>

          <button type="submit" class="btn btn-primary">Guardar</button>
        </form> 
      </div>

      <div class="col-12 col-md-7"> 

        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre completo</th>
                        <th>Matricula</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Nombre del médico</td>
                        <td>18151111</td>
                        <td><button class="btn btn-outline-info">Editar</button></td>
                        <td><button class="btn btn-outline-danger">Eliminar</button></td>
                    </tr>
                </tbody>
            </table>        
        </div>
      </div>

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
</style>