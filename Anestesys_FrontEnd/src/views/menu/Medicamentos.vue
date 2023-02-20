<template>    
    <div class="row bordePrincipal">

      <div class="col-12 col-md-5">
        <form>
          <h3 class="fw-bold">Gestión de medicamentos</h3>
          <div class="mb-3">
            <label class="form-label fw-bold">Medicamento</label>
            <input type="text" class="form-control" required />
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Código de barras</label>
            <input type="text" class="form-control" required />
          </div>
          <button type="submit" class="btn btn-outline-secondary fw-bold">Guardar</button>
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
                        <td><button class="btn btn-outline-secondary fw-bold">Editar</button></td>
                        <td><button class="btn btn-outline-secondary fw-bold">Eliminar</button></td>
                    </tr>
                </tbody>
            </table>        
        </div>
      </div>
    </div>
</template>

<style scoped>
.bordePrincipal {
  border-radius: 5px;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 10px;
  background-color: rgba(232, 234, 236, 0.6);
}
</style>