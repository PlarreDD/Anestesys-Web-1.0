<template>    
    <div class="row bordePrincipal">

      <div class="col-12 col-md-5">
        <form>
          <h3>Gestión de medicamentos</h3>
          <div class="mb-3">
            <label class="form-label">Medicamento</label>
            <input type="text" class="form-control" required />
          </div>
          <div class="mb-3">
            <label class="form-label">Código de barras</label>
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
                        <th>Medicamento</th>
                        <th>Código de barras</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Paracetamol</td>
                        <td>7875468798</td>
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
.bordePrincipal {
  border-radius: 13px;
  box-shadow: 3px 3px 7px #ccc;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 10px;
}
</style>