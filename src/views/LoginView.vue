<template>
    <div class="col-6 divBorder">              

        <h4>Iniciar sesión</h4>

        <form class="row g-3" action="home" method="post">
            <div class="col-md-12">
                <input type="text" class="form-control" id="user" placeholder="Usuario" required>  
            </div>
            <div class="col-md-12">
                <input type="password" class="form-control" id="user" placeholder="******" required>  
            </div>

            <div class="col-md-12">
                <button class="btn btn-primary btn-signin" type="submit">Entrar</button>
            </div>
            <div class="col-md-6">                    
                <div class="opcioncontra">¿No tienes cuenta? <a href="404">Registrate</a></div> 
            </div>
            
        </form>        
    </div>
</template>

<style>
.divBorder {
  border-radius: 13px;
  box-shadow: 3px 3px 7px #ccc;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 10px;
  margin: 0 auto;
}
</style>