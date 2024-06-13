<template>
  <header @click.stop="replegarMenuVistaRapida">
    <barra-navegacion/>
  </header>
  <div class="margen-div-barra" @click.stop="replegarMenuVistaRapida" @mouseover="volverPestana" @touchstart="volverPestana">
    <div class="input-group mb-3">

      <div class="col-10 divform navbar-nav">     

        <ul class="nav nav-pills nav-fill mb-3 text-center centrar-li fw-bold" id=""> <!--Lista para el menú principal-->
          <li class="nav-item col-md-6" >
            <button :class="esNotaP == true ? 'btn-barra-act fw-bold active' : 'btn-barra-des fw-bold'"
                    id="notaP-tab"
                    href="#nota"
                    data-bs-toggle="tab"
                    type="submit"
                    aria-selected="true"
                    @click="validaSeleccionNota()"> NOTA POST </button>
            <!--Se asigna el contenedor al que apuntara el elemento por medio de data-bs-target-->
          </li>
          
          <li class="nav-item col-md-6" >
              <button :class="esRecuperacion == true ? 'btn-barra-act fw-bold active' : 'btn-barra-des fw-bold'" 
                      id="recuperacion-tab" 
                      href="#recuperacion"
                      data-bs-toggle="tab" 
                      type="submit" 
                      aria-selected="false"
                      @click="validaSeleccionRecuperacion()">RECUPERACIÓN</button>
          </li>
        </ul>
      </div>

      <!-- Botón Tutorial -->
      <div class="col-md-2">
        <button type="button" id="tutorial-post" class="btn btn-secondary fw-bold invisible" data-bs-toggle="modal" data-bs-target="#tutorialPostModal">
          Modal Tutorial
        </button>
      </div>

      <!-- Modal tutorial Post -->
    <div class="modal" id="tutorialPostModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
      <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content color-modal modal-med-largo">
          <div class="input-group">
            <div class="modal-body">
              
              <div class="col-md-12" style="text-align: end;">
                <button type="button" class="btn fw-bold" data-bs-dismiss="modal" aria-label="Close" @click="cambiarValorTutorial">
                  <i class="text-white">
                    <font-awesome-icon icon="fa-solid fa-xmark" size="xl"/>
                  </i>
                </button>
              </div>

              <div class="row">
                <div class="col-md-3">                   
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h1 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" disabled>
                          <b>PRE-ANÉSTESICO</b>
                        </button>
                      </h1>
                      <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">

                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" disabled>
                          <b>TRANS-ANÉSTESICO</b>
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                          <b>POST-ANÉSTESICO</b>
                        </button>
                      </h2>
                      <div id="collapseThree" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <label type="button"
                            :class="tutoUno == true ? 'color-activo-acordeon active' : 'color-desactivo-acordeon'"  
                            data-bs-target="#carousel-post1" data-bs-slide-to="0" aria-label="Slide 1" @click="validarCambioCarrusel">
                            Inf. adicional
                          </label><br><br>
                          <label type="button" 
                            :class="tutoDos == true ? 'color-activo-acordeon active' : 'color-desactivo-acordeon'"
                            data-bs-target="#carousel-post1" data-bs-slide-to="1" aria-label="Slide 2" @click="validarCambioCarrusel">
                            Caso obstétrico
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Carrusel para tutorial -->
                <div class="col-md-9">                
                  <div id="carousel-post1" class="carousel slide">
                    <div class="carousel-indicators">
                      <button type="button" id="tutoUno" data-bs-target="#carousel-post1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" @click="validarCambioCarrusel"></button>
                      <button type="button" id="tutoDos" data-bs-target="#carousel-post1" data-bs-slide-to="1" aria-label="Slide 2" @click="validarCambioCarrusel"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active div-carrusel">
                        <img src="../../../public/images/tutorial/post-modulos.png" class="d-block img-carrusel">
                      </div>
                      <div class="carousel-item div-carrusel">
                        <img src="../../../public/images/tutorial/post-caso.png" class="d-block img-carrusel">
                      </div>
                    </div>
                  </div>       
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    </div>

    <!-- Cargar componentes -->
    <div class="input-group mb-3 bordePrincipal"> 
      <div class="tab-content col-md-9" id=""> <!--Redirecciona al contenedor seleccionado, cargando la información del componente-->
        <div class="tab-pane fade show active" id="nota">
            <nota ref="refNotaPA"/>
        </div>
        <div class="tab-pane fade" id="recuperacion">
          <recuperacion ref="refRecuperacion"/>
        </div>
      </div>

      <!--Menú lateral-->
      <div class="col-2 menuLateralPrincipal"> 
        <div class="col-md-2 menu-pre-trans" @click="guardarDatosPre()">
          <RouterLink to="pre">
            <img src="../../../public/images/pre.svg" class="ajusteImg"/>
          </RouterLink>
        </div>

        <div class="col-md-2 menu-pre-trans" @click="guardarDatosTrans()">
          <RouterLink to="trans">
            <img src="../../../public/images/trans.svg" class="ajusteImg"/>
          </RouterLink>
        </div>

        <div class="col-md-2 menu-post">
          <img src="../../../public/images/post.svg" width="180" class="ajusteImg"/>
        </div>    

        <!-- Botón para subir -->
        <div class="container col-md-1">
          <button @click="topFunction()"
                  class="btn btn-arriba fw-bold"
                  id="btnArriba"
                  title="Go to top">
            <font-awesome-icon icon="fa-solid fa-angle-up" size="2xl" />
          </button>
        </div>
      </div>

      <!-- Menú vista rápida desplegada -->
      <div class=" text-center posicion-estatica-arriba fw-bold container col-md-9" :class="preIdStore.VistaRapida == true ? 'c-sticky' : 'invisible c-fixed'" @click.stop="replegarMenuVistaRapida()">
          <label class="form-label text-white fw-bold" :class="preIdStore.numeroExpediente == '' || preIdStore.numeroExpediente == undefined ? 'invisible':''"> 
            #Expediente: {{ preIdStore.numeroExpediente == '' || preIdStore.numeroExpediente == undefined ? '-': preIdStore.numeroExpediente}}
          </label>
        <div class="row columna-size-1 mb-4 mt-2">
          <div class="col borde-row">           
            <img class="img-vista-rapida-arriba" src="../../../public/images/imgIcon/paciente_cuadro.png">                              
            <label class="form-label text-white" :class="preIdStore.NombrePaciente == '' || preIdStore.NombrePaciente == undefined ? 'invisible':''"> 
              {{ preIdStore.NombrePaciente == '' || preIdStore.NombrePaciente == undefined ? '-': preIdStore.NombrePaciente }}
            </label>
            <br>
            <label class="form-label text-white" :class="preIdStore.edadPaciente == '' || preIdStore.edadPaciente == undefined ? 'invisible':''"> 
              {{ preIdStore.edadPaciente == '' || preIdStore.edadPaciente == undefined ? '-': preIdStore.edadPaciente }} años
            </label>
            &nbsp&nbsp&nbsp&nbsp&nbsp
            <label class="form-label text-white" :class="preIdStore.generoPaciente == '' || preIdStore.generoPaciente == undefined ? 'invisible':''"> 
              {{ preIdStore.generoPaciente == '' || preIdStore.generoPaciente == undefined ? '-': preIdStore.generoPaciente }}
            </label>
            &nbsp&nbsp&nbsp&nbsp&nbsp
            <label class="form-label text-white" :class="preIdStore.fechaNacimientoPaciente == '' || preIdStore.fechaNacimientoPaciente == undefined ? 'invisible':''"> 
              {{ preIdStore.fechaNacimientoPaciente == '' || preIdStore.fechaNacimientoPaciente == undefined ? '-': preIdStore.fechaNacimientoPaciente }}
            </label>
          </div>
          
          <div class="col">
            <img class="img-vista-rapida-arriba" src="../../../public/images/imgIcon/anestesiologo_cuadro.png">
            <label class="form-label text-white" :class="preIdStore.NombreAnestesiologo == '' || preIdStore.NombreAnestesiologo == undefined ? 'invisible':''">
              {{ preIdStore.NombreAnestesiologo == '' || preIdStore.NombreAnestesiologo == undefined ? '-': preIdStore.NombreAnestesiologo }}            
            </label>
          </div>
        </div>

        <div class="row columna-size-2">
          <div class="col borde-row"> 
            <img class="img-vista-rapida-arriba" src="../../../public/images/imgIcon/cirujano_cuadro.png">
            <label class="form-label text-white" :class="preIdStore.NombreCirujano == '' || preIdStore.NombreCirujano == undefined ? 'invisible':''">            
              {{ preIdStore.NombreCirujano == '' || preIdStore.NombreCirujano == undefined ? '-': preIdStore.NombreCirujano }}
            </label>
          </div>

          <div class="col"> 
            <img class="img-vista-rapida-arriba" src="../../../public/images/imgIcon/cirugia_cuadro.png">
            <label class="form-label text-white" :class="preIdStore.NombreCirugia == '' || preIdStore.NombreCirugia == undefined ? 'invisible':''">            
              {{ preIdStore.NombreCirugia == '' || preIdStore.NombreCirugia == undefined ? '-': preIdStore.NombreCirugia }}
            </label>
          </div>
        </div>                
      </div>
      
    </div>
    
    <!-- Menú vista rápida -->
    <div class="text-center posicion-estatica fw-bold container" :class="preIdStore.VistaRapida == false ? 'c-fixed' : 'c-fixed invisible'" @click.stop="desplegarMenuVistaRapida()">
      <div class="row">
        <div class="col bordeColumna">           
          <img class="img-vista-rapida" src="../../../public/images/imgIcon/paciente.png">          
          <label class="form-label text-white" :class="preIdStore.NombrePaciente == '' || preIdStore.NombrePaciente == undefined ? 'invisible': ''"> 
            {{ preIdStore.NombrePaciente == '' || preIdStore.NombrePaciente == undefined ? '-': 
               preIdStore.NombrePaciente.length > 30 ? preIdStore.NombrePaciente.substring(0,30) + '...' : preIdStore.NombrePaciente }}
          </label>
        </div>
        
        <div class="col">
          <img class="img-vista-rapida" src="../../../public/images/imgIcon/anestesiologo.png">
          <label class="form-label text-white" :class="preIdStore.NombreAnestesiologo == '' || preIdStore.NombreAnestesiologo == undefined ? 'invisible':''">
            {{ preIdStore.NombreAnestesiologo == '' || preIdStore.NombreAnestesiologo == undefined ? '-': 
               preIdStore.NombreAnestesiologo.length > 30 ? preIdStore.NombreAnestesiologo.substring(0,30) + '...' : preIdStore.NombreAnestesiologo }}    
          </label>
        </div>
        
        <div class="col bordeColumna"> 
          <img class="img-vista-rapida" src="../../../public/images/imgIcon/cirugia.png">
          <label class="form-label text-white" :class="preIdStore.NombreCirugia == '' || preIdStore.NombreCirugia == undefined ? 'invisible':''">            
            {{ preIdStore.NombreCirugia == '' || preIdStore.NombreCirugia == undefined ? '-' : 
               preIdStore.NombreCirugia.length > 30 ? preIdStore.NombreCirugia.substring(0, 30) + '...': preIdStore.NombreCirugia }}
          </label>
        </div>
      </div>
    </div>   
  </div>
</template>

<script lang="ts">
import Nota from '../../components/post/Nota.vue';
import Recuperacion from "../../components/post/Recuperacion.vue";
import BarraNavegacion from "../../components/barraNavegacion.vue";
import { useUserStore } from "@/stores/user-store";
import { usePreIdStore } from "../../stores/preId-store";
import { usePostAnestStore } from '@/stores/postAnest-store';
import { useTransAnestStore } from '@/stores/transAnest-store';
import swal from 'sweetalert2';
import { Tab } from 'bootstrap';

const userStore = useUserStore()
const preIdStore = usePreIdStore();
const postAnestStore = usePostAnestStore();
const transStore = useTransAnestStore();

export default ({
  data(){
    return{
      tutoUno: true,
      tutoDos: false,

      esNotaP: false,
      esRecuperacion: false,

      userStore,
      preIdStore,
      postAnestStore,
      transStore,

      mostrarVistaRapida:false
    }
  },

  components:{
    Recuperacion, 
    Nota,
    BarraNavegacion
  },

  mounted: function() { // Llama el método despues de cargar la página
    if(userStore.TutorialPost === 0){
      let abrir = document.getElementById('tutorial-post');

      // Crea un nuevo evento de clic
      let event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });

      // Despacha el evento de clic en el botón
      abrir.dispatchEvent(event);
    }

    this.validaSeleccionNota();
  },

  methods:{
    // async empezarReconocimientoTiempos() {
    //   try {                
    //     transStore.recognition = new (window as any).webkitSpeechRecognition(); // Crear instancia del reconocimiento de voz
    //     transStore.recognition.lang = 'es-ES'; // Establecer idioma a español (puedes cambiarlo según tus necesidades)
    //     transStore.recognition.continuous = true; // Permitir reconocimiento continuo
    //     transStore.recognition.start(); // Iniciar reconocimiento de voz
  
    //     transStore.microfono=true
    //     transStore.microfonoEscucha=true
  
    //     const tiempoEspera = 1500;
  
    //     // Manejar evento de resultado del reconocimiento
    //     transStore.recognition.onresult = (event) => {   
          
    //       const transcript = event.results[0][0].transcript.toLowerCase(); // Obtener texto reconocido
    //       console.log('Texto reconocido:', transcript);
  
    //       // QX IN
    //       if (transcript === 'quirófano.') {                
    //         // Realizar la acción deseada cuando se detecta la palabra clave                
    //         let closeButton = document.getElementById('inicio-cx');
              
    //         if(transStore.ingresoQuirofano === false){
    //           // Crea un nuevo evento de clic
    //           let event = new MouseEvent('click', {
    //               bubbles: true,
    //               cancelable: true,
    //               view: window
    //           });                    
    //           // Despacha el evento de clic en el botón
    //           closeButton.dispatchEvent(event);
    //         }else{
    //           swal.fire({
    //             title: 'La cirugía ya ha iniciado',
    //             icon: 'error',
    //             showConfirmButton: false,
    //             toast: true,
    //             position: 'top',
    //             timer: 3000,
    //             timerProgressBar: true
    //           })
    //         }
    //       }
  
    //       // ANES IN
    //       else if (transcript === 'anestesia.') {                             
    //         let closeButton = document.getElementById('anes-in');
  
    //         if(transStore.ingresoQuirofano === true){
    //           if(transStore.salidaQuirofano === false){
    //             // Crea un nuevo evento de clic
    //             let event = new MouseEvent('click', {
    //                 bubbles: true,
    //                 cancelable: true,
    //                 view: window
    //             });                    
    //             // Despacha el evento de clic en el botón
    //             closeButton.dispatchEvent(event);
    //           }else{
    //             swal.fire({
    //               title: 'La cirugía ya ha finalizado',
    //               icon: 'error',
    //               showConfirmButton: false,
    //               toast: true,
    //               position: 'top',
    //               timer: 3000,
    //               timerProgressBar: true
    //             })
    //           }
    //         }else{
    //           swal.fire({
    //             title: 'Registre la hora de ingreso al quirófano',
    //             icon: 'error',
    //             showConfirmButton: false,
    //             toast: true,
    //             position: 'top',
    //             timer: 3000,
    //             timerProgressBar: true
    //           })
    //         }
    //       }
  
    //       // CX IN
    //       else if (transcript === 'cirugía.') {                             
    //         let closeButton = document.getElementById('cx-in');
  
    //         if(transStore.ingresoQuirofano === true){
    //           if(transStore.salidaQuirofano === false){
    //             // Crea un nuevo evento de clic
    //             let event = new MouseEvent('click', {
    //                 bubbles: true,
    //                 cancelable: true,
    //                 view: window
    //             });                    
    //             // Despacha el evento de clic en el botón
    //             closeButton.dispatchEvent(event);
    //           }else{
    //             swal.fire({
    //               title: 'La cirugía ya ha finalizado',
    //               icon: 'error',
    //               showConfirmButton: false,
    //               toast: true,
    //               position: 'top',
    //               timer: 3000,
    //               timerProgressBar: true
    //             })
    //           }
    //         }else{
    //           swal.fire({
    //             title: 'Registre la hora de ingreso al quirófano',
    //             icon: 'error',
    //             showConfirmButton: false,
    //             toast: true,
    //             position: 'top',
    //             timer: 3000,
    //             timerProgressBar: true
    //           })
    //         }
    //       }
  
    //       // CX OUT
    //       else if (transcript === 'termina cirugía.') {                             
    //         let closeButton = document.getElementById('cx-out');
  
    //         if(transStore.ingresoQuirofano === true){
    //           if(transStore.salidaQuirofano === false){
    //             // Crea un nuevo evento de clic
    //             let event = new MouseEvent('click', {
    //                 bubbles: true,
    //                 cancelable: true,
    //                 view: window
    //             });                    
    //             // Despacha el evento de clic en el botón
    //             closeButton.dispatchEvent(event);
    //           }else{
    //             swal.fire({
    //               title: 'La cirugía ya ha finalizado',
    //               icon: 'error',
    //               showConfirmButton: false,
    //               toast: true,
    //               position: 'top',
    //               timer: 3000,
    //               timerProgressBar: true
    //             })
    //           }
    //         }else{
    //           swal.fire({
    //             title: 'Registre la hora de ingreso al quirófano',
    //             icon: 'error',
    //             showConfirmButton: false,
    //             toast: true,
    //             position: 'top',
    //             timer: 3000,
    //             timerProgressBar: true
    //           })
    //         }
    //       }
  
    //       // ANES OUT
    //       else if (transcript === 'termina anestesia.') {                             
    //         let closeButton = document.getElementById('anes-out');
  
    //         if(transStore.ingresoQuirofano === true){
    //           if(transStore.salidaQuirofano === false){
    //             // Crea un nuevo evento de clic
    //             let event = new MouseEvent('click', {
    //                 bubbles: true,
    //                 cancelable: true,
    //                 view: window
    //             });                    
    //             // Despacha el evento de clic en el botón
    //             closeButton.dispatchEvent(event);
    //           }else{
    //             swal.fire({
    //               title: 'La cirugía ya ha finalizado',
    //               icon: 'error',
    //               showConfirmButton: false,
    //               toast: true,
    //               position: 'top',
    //               timer: 3000,
    //               timerProgressBar: true
    //             })
    //           }
    //         }else{
    //           swal.fire({
    //             title: 'Registre la hora de ingreso al quirófano',
    //             icon: 'error',
    //             showConfirmButton: false,
    //             toast: true,
    //             position: 'top',
    //             timer: 3000,
    //             timerProgressBar: true
    //           })
    //         }
    //       }
  
    //       // QX OUT
    //       else if (transcript === 'termina quirófano.') {
    //         let closeButton = document.getElementById('qx-out');
  
    //         if(transStore.ingresoQuirofano === true){
    //           if(transStore.salidaQuirofano === false){
    //             // Crea un nuevo evento de clic
    //             let event = new MouseEvent('click', {
    //                 bubbles: true,
    //                 cancelable: true,
    //                 view: window
    //             });                    
    //             // Despacha el evento de clic en el botón
    //             closeButton.dispatchEvent(event);
    //           }else{
    //             swal.fire({
    //               title: 'La cirugía ya ha finalizado',
    //               icon: 'error',
    //               showConfirmButton: false,
    //               toast: true,
    //               position: 'top',
    //               timer: 3000,
    //               timerProgressBar: true
    //             })
    //           }
    //         }else{
    //           swal.fire({
    //             title: 'Registre la hora de ingreso al quirófano',
    //             icon: 'error',
    //             showConfirmButton: false,
    //             toast: true,
    //             position: 'top',
    //             timer: 3000,
    //             timerProgressBar: true
    //           })
    //         }
    //       }
          
    //       if (transStore.intervalo !== null) {
    //           clearTimeout(transStore.intervalo);
    //           console.log('Temporizador reiniciado.');
    //       }
  
    //       transStore.intervalo = setTimeout(() => {
    //         transStore.recognition.stop();
    //         transStore.microfono = false;
    //       }, tiempoEspera);
    //     };
  
    //     // Manejar evento de error del reconocimiento
    //     transStore.recognition.onerror = (event) => {
    //       window.log.error('Error en reconocimiento de voz:', event.error);
    //     };
  
    //     // Manejar evento de fin del reconocimiento
    //     transStore.recognition.onend = () => {
    //       if (transStore.intervalo !== null) {
    //           clearTimeout(transStore.intervalo);
    //       }
    //       transStore.microfono = false;
  
    //       // Iniciar reconocimiento de voz nuevamente
    //       setTimeout(() => {
    //         transStore.recognition.start();
    //         transStore.microfono = true;
    //       }, 100);
    //     };
    //   } catch (error) {
    //       window.log.error('Ocurrió un error:', error)
    //   }      
    // },

    async volverPestana(){
      try {
        if(preIdStore.volverPost == true){
          const tabPost = document.getElementById('notaP-tab');
          const tabObj = new Tab(tabPost);
          tabObj.show();
  
          this.esNotaP=true;
          this.esRecuperacion=false;
          
          preIdStore.volverPost = false;
  
          const componenteNotaPA = await this.$refs.refNotaPA as InstanceType<typeof Nota>;
          await componenteNotaPA.volverPestana();
          await componenteNotaPA.vaciarInputsNotaPA();
  
          const componenteRecuperacion = await this.$refs.refRecuperacion as InstanceType<typeof Recuperacion>;
          await componenteRecuperacion.volverPestana();
          await componenteRecuperacion.vaciarInputsRecuperacion();
        }        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },
    
    async guardarDatosPre(){
      try {
        const componenteNotaPA = await this.$refs.refNotaPA as InstanceType<typeof Nota>;
        await componenteNotaPA.guardarDatosNotaPA();
        // await componenteNotaPA.detenerReconocimiento();
  
        const componenteRecuperacion = await this.$refs.refRecuperacion as InstanceType<typeof Recuperacion>;
        await componenteRecuperacion.guardarDatosRecuperacion();
        // await componenteRecuperacion.detenerReconocimiento();
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async guardarDatosTrans(){
      try {
        // await this.empezarReconocimientoTiempos();

        const componenteNotaPA = await this.$refs.refNotaPA as InstanceType<typeof Nota>;
        await componenteNotaPA.guardarDatosNotaPA();
        // await componenteNotaPA.detenerReconocimiento();
  
        const componenteRecuperacion = await this.$refs.refRecuperacion as InstanceType<typeof Recuperacion>;
        await componenteRecuperacion.guardarDatosRecuperacion();
        // await componenteRecuperacion.detenerReconocimiento();
        preIdStore.modalTendencias = true
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async validaSeleccionNota(){
      try {
        if(document.getElementById("notaP-tab").ariaSelected=="false"){
          this.esNotaP=false   
        }
        else
          this.esNotaP=true;
          this.esRecuperacion=false;
  
        const componenteNotaPA = await this.$refs.refNotaPA as InstanceType<typeof Nota>;
        await componenteNotaPA.guardarDatosNotaPA();
  
        const componenteRecuperacion = await this.$refs.refRecuperacion as InstanceType<typeof Recuperacion>;
        await componenteRecuperacion.guardarDatosRecuperacion();
        // await componenteRecuperacion.detenerReconocimiento();
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async validaSeleccionRecuperacion(){
      try {
        if(document.getElementById("recuperacion-tab").ariaSelected=="false"){
          this.esRecuperacion=false  
        }
        else
          this.esNotaP=false;
          this.esRecuperacion=true;
  
        const componenteNotaPA = await this.$refs.refNotaPA as InstanceType<typeof Nota>;
        await componenteNotaPA.guardarDatosNotaPA();
        // await componenteNotaPA.detenerReconocimiento();
  
        const componenteRecuperacion = await this.$refs.refRecuperacion as InstanceType<typeof Recuperacion>;
        await componenteRecuperacion.guardarDatosRecuperacion();        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async desplegarMenuVistaRapida(){     
      try {
        preIdStore.VistaRapida=true
        this.mostrarVistaRapida=true        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async replegarMenuVistaRapida(){ 
      try {
        if(this.mostrarVistaRapida=true)     
          preIdStore.VistaRapida=false
          this.mostrarVistaRapida=false        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async topFunction() {
      try {
        document.body.scrollTop = 0; // Para safari
        document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async cambiarValorTutorial(){
      try {
        swal
          .fire({
            html: "Podrá volver a consultar el tutorial desde el menú lateral en la sección de <b>Ayuda</b>",
            icon: "info",
            showConfirmButton: true,
            showCancelButton: false,
            toast: true,
          })
          
          userStore.TutorialPost = 1
          await this.userStore.updateTutorialPost(userStore.IdMed)                                
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async validarCambioCarrusel(){
      try {
        if(document.getElementById("tutoUno").ariaCurrent=="true"){
          this.tutoUno=true
          this.tutoDos=false
        }
        else if(document.getElementById("tutoDos").ariaCurrent=="true"){
          this.tutoUno=false
          this.tutoDos=true
        }        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    }
  }
})
</script>

<style scoped>
.margen-div-barra{
  margin-top: 120px;
}
.menuLateralPrincipal {
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
.menu-post {  
  width: 200px;
  height: auto;
  background-color: #E88300;
  padding: 0rem;
  border-radius: 10px;
  margin-left: 28px;
  text-align: center;
}
.menu-pre-trans {  
  width: 200px;
  height: auto;
  background-color: #d6d6d6;
  padding: 0rem;
  border-radius: 10px;
  margin-left: 28px;
  text-align: center;
}
.menu-pre-trans:hover{
  background-color: #E88300;
  transition: background-color 0.2s ease-in-out;
}
.ajusteImg{
  width: 100%;
  height: 100%;
}
.bordePrincipal {
  width: 110%;
}
.centrar-li{
  justify-content: center; 
}
/* Barra navegación */
.btn-barra-act{
    background-color: #F5F8FC;
    color: #E88300;
    border-bottom: thick solid;
    border-bottom-width: 5px;
    border-bottom-left-radius: 0%;
    border-bottom-right-radius: 0%;
    border-left: none;
    border-right: none;
    border-top: none;
}
.btn-barra-des{
    background-color: #F5F8FC;
    color: #002d60;
    border: none;
}
.margen-busca{
  margin-bottom: 15px;
}

/* Menú estatico */
.c-fixed{
  position: fixed;
}
.c-sticky{
  position: sticky;
}
.posicion-estatica {
  bottom: 0;
  margin-top: 10px;  
  z-index: 1020;
  background-color: #002D60;
  padding: 1rem;
  border-radius: 5px !important;
  color: #ffffff;
  width: 57.5%;
  cursor: pointer;  
}
.img-vista-rapida{
  width: 35px;
  height: auto;
  float: left;
}
.posicion-estatica-arriba {
  bottom: 0;
  z-index: 1020;
  margin-top: 5px; 
  background-color: #002D60;
  padding: 1rem;
  border-radius: 5px !important;
  color: #ffffff;
  height: 30%;
  cursor: pointer
}
.img-vista-rapida-arriba{
  width: 60px;
  float: left;
}
.bordeColumna{
  margin-left: auto;
  margin-right: auto;
  border-right: 1px solid #ffffff;
  border-left: 1px solid #ffffff;  
}
.borde-row{
  margin-right: auto;
  border-right: 1px solid #ffffff;
}
.columna-size-1{
  height: 50%;
}
.columna-size-2{
  height: 40%;
}

/* Botón arriba */
.btn-arriba {
    display: none;  /*Oculto por defecto */
    position: fixed; /* Posición fija */
    bottom: 60px; /* Coloque el botón en la parte inferior de la página. */
    z-index: 99; /* Asegúrese de que no se superponga */  
    border-radius: 6px; /* Esquinas redondeadas */ 
    /* right: 340px; */
    --bs-btn-bg: #ffffff;
    --bs-btn-color: #002d60;    
    --bs-btn-border-color: #ced4da;
    --bs-btn-hover-bg: #002d60;
    --bs-btn-hover-color: #ffffff;
    --bs-btn-hover-border-color: #002d60;          
    --bs-btn-active-bg: #002d60;
    --bs-btn-active-color: #ffffff;
    --bs-btn-active-border-color: #002d60;     
}
/* Modal tutorial */
.modal-med-largo {
  height: 510px;
}
.div-carrusel{
  text-align: -webkit-center;
}
.img-carrusel{
  width: inherit;
}
.carousel-indicators [data-bs-target] {
  background-color: #E88000 !important;
}
.carousel-indicators{
  margin-bottom: 0;
}
.accordion{
  --bs-accordion-bg: #EEF1F4 !important;
}
.accordion-button{
  color: #1F315A !important
}
.color-desactivo-acordeon{
  color: #00123B
}
.color-activo-acordeon{
  color: #E88000
}
</style>