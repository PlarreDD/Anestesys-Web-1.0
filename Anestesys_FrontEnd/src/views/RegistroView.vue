<template>
    <div class="col-5 divBorder posicionEstaticaR">  
        <div class="margenR">
            <div class="div-img">
                <img src="images/logoA.png" class="imgLogo"/>
            </div>

            <h3 class="fw-bold">Nuevo Usuario</h3>

            <form class="row g-3" action="pre" method="post" @submit.prevent="handleSubmit">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <label for="" class="form-label fw-bold">Nombre(s)</label>
                    <input type="text"
                        class="form-control"
                        v-model="nomUsr"
                        id="nombre"
                        placeholder="Nombre(s)"
                    required>  
                </div>
                <div class="col-md-2"></div>
                
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <label for="" class="form-label fw-bold">Apellidos</label>
                    <input type="text"
                        class="form-control"
                        v-model="apUsr"
                        id="apellidos"
                        placeholder="Apellido(s)"
                    required>  
                </div>
                <div class="col-md-2"></div>
                
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <label for="" class="form-label fw-bold">Correo electrónico</label>
                    <input type="email"
                        class="form-control"
                        v-model="email"
                        id="correo"
                        placeholder="correo@mail.com"
                    required>
                </div>
                <div class="col-md-2"></div>

                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <label for="" class="form-label fw-bold">Fecha de nacimiento</label>
                    <input type="date"
                        class="form-control"
                        v-model="fechaN"
                        id="fechaN"
                    required>  
                </div>
                <div class="col-md-2"></div>
                
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <label for="" class="form-label fw-bold">Contraseña</label>
                    <input type="password"
                        class="form-control"
                        v-model="pswd"
                        id="pass"
                        placeholder="******"
                    required readonly>
                    <span class="fa fa-fw fa-eye password-icon show-password" id="mostrar" @click=" mostrarPass()"></span>  
                </div>
                <div class="col-md-2"></div>

                <div class="col-md-12 div-img">
                    <button class="btn btn-reg fw-bold" type="submit">Crear Cuenta</button>
                </div>
                
                <div class="col-md-12">                    
                    <RouterLink class="nav-link colorLinkR fw-bold" to="/">Iniciar Sesión</RouterLink>
                </div>
            </form> 
        </div>
    </div>
</template>

<script lang="ts">

export default {
    data() {
        return{
            nomUsr: "",
            apUsr: "",
            email: "",
            fechaN: "",
            pswd: "",
        };
    },
    mounted: function() { // Llama el método despues de cargar la página
      this.cargarFondo();                 
    },
    methods: {
        handleSubmit: async () => {
            try {
                console.log("Nombre: " + name);                
            } catch (error) {
                console.log(error);
            }
        },
        async cargarFondo(){
            document.body.style.backgroundImage = "url('../../public/images/registro.webp')";
        },
        async mostrarPass(){
            if ( (document.getElementById("pass") as HTMLInputElement).type == "text" ) {
                (document.getElementById("pass") as HTMLInputElement).type = "password";
                document.getElementById("mostrar").className='fa fa-fw fa-eye-slash password-icon show-password'
            } else {
                (document.getElementById("pass") as HTMLInputElement).type = "text";
                document.getElementById("mostrar").className='fa fa-fw fa-eye password-icon show-password'
            }
        }
    }
}

</script>

<style>
.btn-reg {
    --bs-btn-bg: #E88300;
    --bs-btn-color: #ffffff;    
    --bs-btn-border-color: #E88300;
    --bs-btn-hover-bg: #E88300;
    --bs-btn-hover-color: #ffffff;
    --bs-btn-hover-border-color: #E88300;          
    --bs-btn-active-bg: #ffffff;
    --bs-btn-active-color: #E88300;
    --bs-btn-active-border-color: #E88300;   
}
.posicionEstaticaR {
  position: fixed;
  left: 0;
  top:0;
  z-index: 1020;
  height: 909px;
}
.colorLinkR{
  color: #E88300;
  text-align: center;
}
.colorLinkR:hover{
  color: #E88300
}
.margenR{
  margin-top: 50px;
}
.password-icon {
  float: right;
  position: relative;
  margin: -25px 10px 0 0;
  cursor: pointer;
}
</style>