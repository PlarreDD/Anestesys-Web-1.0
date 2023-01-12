<template>
    <div class="col-6 divBorder">              

        <h4>Registro</h4>

        <form class="row g-3" action="pre" method="post">
            <div class="col-md-12">
                <input type="text" class="form-control" id="user" placeholder="Usuario" required>  
            </div>
            <div class="col-md-12">
                <input type="password" class="form-control" id="password" placeholder="******" required>
                <input type="password" class="form-control" id="password" placeholder="******" required>
            </div>

            <div class="col-md-12">
                <button onclick="location.href='login'" class="btn btn-primary btn-signin" type="submit">Registrar</button>
            </div>
        </form>        
    </div>
</template>
