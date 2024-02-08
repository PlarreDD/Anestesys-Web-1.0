<template>
  <div class="mt" id="headerP">
    <nav class="navbar navbar-color fw-bold">
      <div class="input-group">
        <div class="col-md-1"></div>

        <div class="col-md-2 alinearElementoI">
          <RouterLink class="" to="pre">
            <img src="../../public/images/logoA.png" class="imgLogoBarra" />
          </RouterLink>
        </div>

        <div class="col-md-5"></div>

        <!-- Nombre DR -->
        <div class="col-md-2 text-white alinearElementoD puntero" data-bs-toggle="modal" data-bs-target="#perfilModal">
          <img :src="'data:image/png;base64,'+userStore.Foto" class="imgPerfil" />
          &nbsp;&nbsp;{{ userStore.Nombre == undefined || userStore.Apellido == undefined ? '-': "Dr. " + userStore.Nombre.split(' ')[0] + " " + userStore.Apellido.split(' ')[0] }}
        </div>

        <!-- Menú de configuración -->
        <div class="col-md-1 alinearElementoD">
          <button
            class="btn btn-menu"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#barraConfiguracion"
            aria-controls="offcanvasNavbar"
          >
            <i class="fa-solid fa-2x fa-ellipsis"></i>
            <font-awesome-icon icon="fa-solid fa-ellipsis" size="2xl" />
          </button>
        </div>

        <!-- Menú lateral -->
        <div
          class="offcanvas nav-config"
          tabindex="-1"
          id="barraConfiguracion"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header"></div>

          <div class="">
            <ul class="navbar-nav justify-content-left">
              <!-- Link Medicamentos -->
              <li>
                <button
                  type="button"
                  class="btn btn-configuracion fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#medicamentosModal"
                >
                  <img src="../../public/images/imgIcon/medicamento.svg" />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Medicamentos
                </button>
              </li>

              <!-- Link Config Monitor -->
              <li>
                <button
                  type="button"
                  class="btn btn-configuracion fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#mvsModal">
                  <img src="../../public/images/imgIcon/monitor.svg" />
                  &nbsp;&nbsp;&nbsp;Configuración de monitor
                </button>
              </li>

              <!-- Link Tendencias -->
              <li>
                <button
                  type="button"
                  class="btn btn-configuracion fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#tendenciasModal"
                >
                  <img src="../../public/images/imgIcon/tendencia.svg" />
                  &nbsp;&nbsp;&nbsp;Tendencias
                </button>
              </li>

              <!-- Link Teclado Virtual -->
              <li>
                <button type="button" class="btn btn-configuracion fw-bold">
                  <img src="../../public/images/imgIcon/teclado.svg" />
                  &nbsp;&nbsp;&nbsp;Teclado virtual
                </button>
              </li>

              <!-- Link Ayuda -->
              <li class="nav-item">
                <button class="btn btn-configuracion fw-bold" data-bs-toggle="modal" data-bs-target="#tutorial-modal">
                  <img src="../../public/images/imgIcon/ayuda.svg" />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ayuda
                </button>
              </li>

              <!-- Link Salir -->
              <li class="nav-item">
                <button
                  class="btn btn-configuracion fw-bold"
                  @click="userStore.logout()">
                  <img src="../../public/images/imgIcon/salir.svg" />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Salir
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <!-- Modal perfil -->
    <div class="modal" id="perfilModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" >
        <div class="modal-content colorModal">
          <div class="input-group mb-3">
            <div class="modal-body">
              <div class="col-md-12">
                <div class="row g-3">
                  <div class="col-md-11">
                    <h5 class="text-white fw-bold">PERFIL</h5>
                    <h6 class="text-white fw-bold">Gestión de perfil</h6>
                  </div>

                  <div class="col-md-1 div-img">
                    <button type="button" class="btn fw-bold" data-bs-dismiss="modal" aria-label="Close">
                      <i class="text-white">
                        <font-awesome-icon icon="fa-solid fa-xmark" size="2xl"/>
                      </i>
                    </button>
                  </div>

                  <form class="row g-3 mt-1" @submit.prevent="">
                    
                    <div class="col-md-4">
                      <img class="img-perfil-modal" :src="'data:image/png;base64,'+userStore.Foto" alt="">                      
                    </div>
                    <div class="col-md-4">
                      <label class="form-label fw-bold text-white">Nombre(s): </label>    
                      <input type="text" :class="perfilData == false ? 'form-control input-perfil' : 'form-control input-read-perfil'" 
                          v-model="user.nomUsr" placeholder="Nombre(s)" readonly/>
                    </div>              
                    <div class="col-md-1"></div>      
                    <div class="col-md-3">
                      <label class="form-label fw-bold text-white">Fecha de Nacimiento: </label>
                      <input type="text" :class="perfilData == false ? 'form-control input-perfil' : 'form-control form-control input-read-perfil'" 
                          v-model="user.fechaNac" placeholder="Fecha de nacimiento" readonly/>                      
                    </div>

                    <div class="col-md-4">                      
                    </div>
                    <div class="col-md-4">
                      <label class="form-label fw-bold text-white">Apellidos: </label>                         
                      <input type="text" :class="perfilData == false ? 'form-control input-perfil' : 'form-control form-control input-read-perfil'" 
                          v-model="user.apUsr" placeholder="Apellidos" readonly/> 
                    </div>
                    <div class="col-md-1"></div>  
                    <div class="col-md-3">
                      <label class="form-label fw-bold text-white">Cédula:</label>
                      <input type="text" :class="perfilData == false ? 'form-control input-perfil' : 'form-control'" 
                          v-model="user.cedula" placeholder="Cédula" :readonly="perfilData == false"/> 
                    </div>

                    <div class="col-md-3">
                      <input type="file" accept="image/*" :class="perfilData == false ? 'form-control invisible' : 'form-control'" style="position: relative;" @change="handleFileChange">
                    </div>
                    <div class="col-md-1"></div> 
                    <div class="col-md-4">
                      <label class="form-label fw-bold text-white">Correo Electrónico:</label>
                      <input type="text" :class="perfilData == false ? 'form-control input-perfil' : 'form-control form-control input-read-perfil'" 
                          v-model="user.email" placeholder="Correo electrónico" readonly/> 
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-3">
                      <label class="form-label fw-bold text-white">Especialidad:</label>                         
                      <input type="text" :class="perfilData == false ? 'form-control input-perfil' : 'form-control'" 
                          v-model="user.especialidad" placeholder="Especialidad" :readonly="perfilData == false"/>
                    </div>

                    <div class="col-md-4">
                      <button type="button" :class="perfilData == true ? 'invisible' : 'btn btn-modal-pass fw-bold'" data-bs-toggle="modal" data-bs-target="#contrasenaModal">
                        Modificar Contraseña <font-awesome-icon icon="fa-solid fa-angle-right" size="md" />
                      </button>
                    </div>
                    <div class="col-md-5">
                      <button type="button" :class="perfilData == false ? 'invisible' : 'btn btn-modal-medicamentos fw-bold'" @click="ocultarInputsPerfil">
                        Cancelar
                      </button>
                    </div>
                    <div class="col-md-2">

                      <template v-if="perfilData === false">
                        <button type="button" class="btn btn-modal-medicamentos fw-bold" @click="mostrarInputsPerfil">
                          <font-awesome-icon icon="fa-solid fa-pen-to-square" size="md" class=""/> Modificar
                        </button>
                      </template>

                      <template v-else>
                        <button type="button" class="btn btn-modal-medicamentos fw-bold" @click="actualizarDatosMedico">
                          Actualizar
                        </button>
                      </template>                      
                    </div>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal contraseña -->
    <div class="modal" id="contrasenaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" >
        <div class="modal-content colorModal">
          <div class="input-group mb-3">
            <div class="modal-body">
              <div class="col-md-12">
                <div class="row g-3">
                  <div class="col-md-11">
                    <h5 class="text-white fw-bold">CONTRASEÑA</h5>
                    <h6 class="text-white fw-bold">Modificar contraseña</h6>
                  </div>

                  <div class="col-md-1 div-img">
                    <button id="volver-perfil" type="button" class="btn fw-bold" aria-label="Close" data-bs-toggle="modal" data-bs-target="#perfilModal" @click="vaciarInputsContrasena()">
                      <i class="text-white">
                        <font-awesome-icon icon="fa-solid fa-arrow-left" size="2xl"/>
                      </i>
                    </button>
                  </div>

                  <form class="row g-3 mt-1" @submit.prevent="">
                    
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                      <label class="form-label fw-bold text-white">Contraseña actual: </label>

                      <input type="text" id="contrasenaAnt" class="form-control" v-model="contrasenaAnterior" placeholder="Escribir contraseña actual" 
                      @keyup.capture="validarContrasena()" @change="validarContrasena()"/>

                      <span class="password-icon show-password" id="mostrar" @click="mostrarPassAnt()">
                        <template v-if="contrasenaAnt === false">
                          <font-awesome-icon icon="fa-solid fa-eye" />
                        </template>
                        <template v-else>
                          <font-awesome-icon icon="fa-solid fa-eye-slash" />
                        </template>                              
                      </span>
                    </div>                  
                    <div class="col-md-1">
                      <label class="form-label fw-bold text-white invisible">Contraseña actual: </label>
                      <span :class="passCorrecta == false ? 'password-des' : 'password-check'">                        
                        <font-awesome-icon icon="fa-solid fa-circle-check" />                                                  
                      </span>
                    </div>
                    <div class="col-md-3"></div>
                    
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                      <label class="form-label fw-bold text-white">Contraseña nueva: </label>

                      <input type="text" id="contrasena" :class="passCorrecta == false ? 'form-control input-read-perfil' : 'form-control'" 
                        placeholder="Escribir contraseña nueva" :readonly="passCorrecta == false" v-model="user.pswd"/>

                      <span class="password-icon show-password" id="mostrar" @click="mostrarPass()">
                        <template v-if="contrasena === false">
                          <font-awesome-icon icon="fa-solid fa-eye" />
                        </template>
                        <template v-else>
                          <font-awesome-icon icon="fa-solid fa-eye-slash" />
                        </template>                              
                      </span>

                    </div>                  
                    <div class="col-md-4"></div>

                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                      <label class="form-label fw-bold text-white">Repetir contraseña nueva: </label>

                      <input type="text" id="contrasenaRep" :class="passCorrecta == false ? 'form-control input-read-perfil' : 'form-control'" 
                        placeholder="Repetir contraseña nueva" :readonly="passCorrecta == false" v-model="contrasenaRepetida"/>

                      <span class="password-icon show-password" id="mostrar" @click="mostrarPassRep()">
                        <template v-if="contrasenaRep === false">
                          <font-awesome-icon icon="fa-solid fa-eye" />
                        </template>
                        <template v-else>
                          <font-awesome-icon icon="fa-solid fa-eye-slash" />
                        </template>                              
                      </span>

                    </div>                  
                    <div class="col-md-4"></div>

                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                      <button type="button" class="btn btn-modal-pass fw-bold" :disabled="passCorrecta == false" @click="validarContrasenas">
                        Actualizar 
                      </button>
                    </div>
                    <div class="col-md-4"></div>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal medicamentos -->
    <div class="modal"
         id="medicamentosModal"
         tabindex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" >
        <div class="modal-content colorModal modal-med-largo">
          <div class="input-group mb-3">
            <div class="modal-body">
              <div class="col-md-12">
                <div class="row g-3">
                  <div class="col-md-11">
                    <h5 class="text-white fw-bold">MEDICAMENTOS</h5>
                    <h6 class="text-white fw-bold">Gestión de medicamentos</h6>
                  </div>

                  <div class="col-md-1 div-img">
                    <button type="button"
                            class="btn fw-bold"
                            data-bs-dismiss="modal"
                            aria-label="Close">
                      <i class="text-white">
                        <font-awesome-icon icon="fa-solid fa-xmark" size="2xl"/>
                      </i>
                    </button>
                  </div>

                  <form class="row g-3" @submit.prevent="">
                    <div class="col-md-4">
                      <input type="text"
                             class="form-control"
                             v-model="infoMedicamento.nombreMedicamento"
                             placeholder="Nombre del medicamento"/>
                    </div>

                    <div class="col-md-8"></div>

                    <div class="col-md-4">
                      <input type="text"
                             class="form-control"
                             v-model="infoMedicamento.codigoMedicamento"
                             placeholder="Código de barras"/>
                      <input type="hidden"
                             v-model="infoMedicamento.idMedicamento"/>
                    </div>

                    <div class="col-md-1"></div>
                    <div class="col-md-1">
                      <template v-if="editar === false">
                        <button type="button"
                                class="btn btn-modal-medicamentos fw-bold"
                                @click="agregaMedicamento()">
                          Agregar
                        </button>
                      </template>

                      <template v-else>
                        <button type="button"
                                class="btn btn-modal-medicamentos fw-bold"
                                @click="actualizarMedicamento(infoMedicamento)">
                          Actualizar
                        </button>
                      </template>
                    </div>
                  </form>

                  <div class="col-md-12">
                    <div class="deslizar">
                      <table class="table table-responsive">
                        <thead>
                          <tr>
                            <th class="text-white">#</th>
                            <th class="text-white">Nombre</th>
                            <th class="text-white">Código</th>
                            <th class="text-white"></th>
                            <th class="text-white"></th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr v-for="( medicamento, index ) in medStore.medicamentos">
                            <td class="text-white">
                              {{ index + 1 }}
                            </td>

                            <td class="text-white">
                              {{ medicamento.nombreMedicamento }}
                            </td>
                            
                            <td class="text-white">
                              {{ medicamento.codigoMedicamento }}
                            </td>
                            
                            <td>
                              <button class="btn"
                                      @click="cambiarBtnActualizar(medicamento._id)">
                                <font-awesome-icon 
                                  icon="fa-solid fa-pen-to-square" 
                                  size="lg" 
                                  class="text-white"/>
                              </button>
                            </td>

                            <td>
                              <button class="btn"
                                      @click="validaEliminarMedicamento(medicamento._id)">
                                <font-awesome-icon 
                                    icon="fa-solid fa-trash" 
                                    size="lg" class="text-white"/>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal MVS -->
    <div class="modal"
         id="mvsModal"
         tabindex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" >
        <div class="modal-content colorModal modal-med-largo">
          <div class="input-group mb-3">
            <div class="modal-body">
              <div class="col-md-12">
                <div class="row g-3">
                  <div class="col-md-11">
                    <h5 class="text-white fw-bold">MONITOR DE SIGNOS VITALES</h5>
                    <h6 class="text-white fw-bold">Configuración de Monitor</h6>
                  </div>

                  <div class="col-md-1 div-img">
                    <button
                      type="button"
                      class="btn fw-bold"
                      data-bs-dismiss="modal"
                      aria-label="Close">
                      <i class="text-white">
                        <font-awesome-icon icon="fa-solid fa-xmark" size="2xl" />
                      </i>
                    </button>
                  </div>

                  <form class="row g-3" @submit.prevent="">
                    <!-- Nombre del MSV -->
                    <div class="col-md-4">
                      <input
                        type="text"
                        class="form-control"
                        v-model="configMonitor.nomMonitor"
                        placeholder="Nombre del monitor"
                      />
                    </div>

                    <div class="col-md-8"></div>

                    <!-- Caja de Texto Dirección IP -->
                    <div class="col-md-4">
                      <input
                        type="text"
                        class="form-control"
                        v-model="configMonitor.dirIPMonitor"
                        placeholder="Dirección IP"/>

                      <input
                        type="hidden"
                        v-model="infoMedicamento.idMedicamento"/>
                    </div>

                    <div class="col-md-1"></div>

                    <div class="col-md-1">
                      <template v-if="editar === false">
                        <button
                          type="button"
                          class="btn btn-modal-medicamentos fw-bold"
                          @click="agregarMVS"> Agregar
                        </button>
                      </template>
                    </div>
                  </form>

                  <div class="col-md-12">
                    <div class="deslizar">
                      <table class="table table-responsive">
                        <thead>
                          <tr>
                            <th class="text-white">#</th>
                            <th class="text-white">Modelo</th>
                            <th class="text-white">Direción IP</th>
                            <th class="text-white">Estatus</th>
                            <th class="text-white"></th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr v-for="( monitor, index) in medStore.monitor">
                            <td class="text-white">
                              {{ index + 1 }}
                            </td>

                            <td class="text-white">
                              {{ monitor.nombreMVS }}
                            </td>

                            <td class="text-white">
                              {{ monitor.dirIPMVS }}
                            </td>

                            <td class="text-white">
                              {{ medStore.status }}
                            </td>

                            <!-- Eliminar MVS -->
                            <td>
                              <button class="btn"
                                      @click="validaEliminarMonitor(monitor._id)">
                                <font-awesome-icon 
                                    icon="fa-solid fa-trash" 
                                    size="lg" class="text-white"/>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal tutorial -->
    <div class="modal" id="tutorial-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content color-modal modal-med-largo">
          <div class="input-group">
            <div class="modal-body">
              
              <div class="col-md-12" style="text-align: end;">
                <button type="button" class="btn fw-bold" data-bs-dismiss="modal" aria-label="Close">
                  <i class="text-white">
                    <font-awesome-icon icon="fa-solid fa-xmark" size="xl"/>
                  </i>
                </button>
              </div>

              <div class="row">
                <!-- Acordeón -->
                <div class="col-md-3">                   
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h1 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" @click="cambiarTutorialPre">
                          <b>PRE-ANÉSTESICO</b>
                        </button>
                      </h1>
                      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <label type="button"
                            :class="tutoUnoPre == true ? 'color-activo-acordeon active' : 'color-desactivo-acordeon'"  
                            data-bs-target="#carousel-pre" data-bs-slide-to="0" aria-label="Slide 1" @click="validarCambioCarruselPre">
                            Inf. del paciente
                          </label><br><br>
                          <label type="button" 
                            :class="tutoDosPre == true ? 'color-activo-acordeon active' : 'color-desactivo-acordeon'"
                            data-bs-target="#carousel-pre" data-bs-slide-to="1" aria-label="Slide 2" @click="validarCambioCarruselPre">
                            Barra de búsqueda
                          </label><br><br>
                          <label type="button"
                            :class="tutoTresPre == true ? 'color-activo-acordeon active' : 'color-desactivo-acordeon'"
                            data-bs-target="#carousel-pre" data-bs-slide-to="2" aria-label="Slide 3" @click="validarCambioCarruselPre">
                            Modulos
                          </label><br><br>
                          <label type="button"
                            :class="tutoCuatroPre == true ? 'color-activo-acordeon active' : 'color-desactivo-acordeon'"
                            data-bs-target="#carousel-pre" data-bs-slide-to="3" aria-label="Slide 4" @click="validarCambioCarruselPre">
                            Barra de estado
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" :disabled="userStore.TutorialTrans == 0 ? true : false" @click="cambiarTutorialTrans">
                          <b>TRANS-ANÉSTESICO</b>
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <label type="button"
                            :class="tutoUnoTrans == true ? 'color-activo-acordeon active' : 'color-desactivo-acordeon'"  
                            data-bs-target="#carousel-trans" data-bs-slide-to="0" aria-label="Slide 1" @click="validarCambioCarruselTrans">
                            Monitoreo
                          </label><br><br>
                          <label type="button" 
                            :class="tutoDosTrans == true ? 'color-activo-acordeon active' : 'color-desactivo-acordeon'"
                            data-bs-target="#carousel-trans" data-bs-slide-to="1" aria-label="Slide 2" @click="validarCambioCarruselTrans">
                            Tiempos quirúrgicos
                          </label><br><br>
                          <label type="button"
                            :class="tutoTresTrans == true ? 'color-activo-acordeon active' : 'color-desactivo-acordeon'"
                            data-bs-target="#carousel-trans" data-bs-slide-to="2" aria-label="Slide 3" @click="validarCambioCarruselTrans">
                            Menús y acciones
                          </label><br><br>
                          <label type="button"
                            :class="tutoCuatroTrans == true ? 'color-activo-acordeon active' : 'color-desactivo-acordeon'"
                            data-bs-target="#carousel-trans" data-bs-slide-to="3" aria-label="Slide 4" @click="validarCambioCarruselTrans">
                            Signos vitales
                          </label><br><br>
                          <label type="button"
                            :class="tutoCincoTrans == true ? 'color-activo-acordeon active' : 'color-desactivo-acordeon'"
                            data-bs-target="#carousel-trans" data-bs-slide-to="4" aria-label="Slide 5" @click="validarCambioCarruselTrans">
                            Grid anestésico
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" :disabled="userStore.TutorialPost == 0 ? true : false" @click="cambiarTutorialPost">
                          <b>POST-ANÉSTESICO</b>
                        </button>
                      </h2>
                      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <label type="button"
                            :class="tutoUnoPost == true ? 'color-activo-acordeon active' : 'color-desactivo-acordeon'"  
                            data-bs-target="#carousel-post" data-bs-slide-to="0" aria-label="Slide 1" @click="validarCambioCarruselPost">
                            Inf. adicional
                          </label><br><br>
                          <label type="button" 
                            :class="tutoDosPost == true ? 'color-activo-acordeon active' : 'color-desactivo-acordeon'"
                            data-bs-target="#carousel-post" data-bs-slide-to="1" aria-label="Slide 2" @click="validarCambioCarruselPost">
                            Caso obstétrico
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Carrusel para tutorial -->
                <div class="col-md-9">
                  <template v-if="tutoPre === true">
                    <div id="carousel-pre" class="carousel slide">
                      <div class="carousel-indicators">
                        <button type="button" id="tutoUnoPre" data-bs-target="#carousel-pre" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" @click="validarCambioCarruselPre"></button>
                        <button type="button" id="tutoDosPre" data-bs-target="#carousel-pre" data-bs-slide-to="1" aria-label="Slide 2" @click="validarCambioCarruselPre"></button>
                        <button type="button" id="tutoTresPre" data-bs-target="#carousel-pre" data-bs-slide-to="2" aria-label="Slide 3" @click="validarCambioCarruselPre"></button>
                        <button type="button" id="tutoCuatroPre" data-bs-target="#carousel-pre" data-bs-slide-to="3" aria-label="Slide 4" @click="validarCambioCarruselPre"></button>
                      </div>
                      <div class="carousel-inner">
                        <div :class="tutoUnoPre == true ? 'carousel-item active div-carrusel' : 'carousel-item div-carrusel'">
                          <img src="../../public/images/tutorial/pre-info.png" class="d-block img-carrusel">
                        </div>
                        <div :class="tutoDosPre == true ? 'carousel-item active div-carrusel' : 'carousel-item div-carrusel'"> 
                          <img src="../../public/images/tutorial/pre-barra-busqueda.png" class="d-block img-carrusel">
                        </div>
                        <div :class="tutoTresPre == true ? 'carousel-item active div-carrusel' : 'carousel-item div-carrusel'">
                          <img src="../../public/images/tutorial/pre-modulos.png" class="d-block img-carrusel">
                        </div>
                        <div :class="tutoCuatroPre == true ? 'carousel-item active div-carrusel' : 'carousel-item div-carrusel'">
                          <img src="../../public/images/tutorial/pre-barra-estado.png" class="d-block img-carrusel">
                        </div>
                      </div>
                    </div>       
                  </template>

                  <template v-if="tutoTrans === true">
                    <div id="carousel-trans" class="carousel slide">
                      <div class="carousel-indicators">
                        <button type="button" id="tutoUnoTrans" data-bs-target="#carousel-trans" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" @click="validarCambioCarruselTrans"></button>
                        <button type="button" id="tutoDosTrans" data-bs-target="#carousel-trans" data-bs-slide-to="1" aria-label="Slide 2" @click="validarCambioCarruselTrans"></button>
                        <button type="button" id="tutoTresTrans" data-bs-target="#carousel-trans" data-bs-slide-to="2" aria-label="Slide 3" @click="validarCambioCarruselTrans"></button>
                        <button type="button" id="tutoCuatroTrans" data-bs-target="#carousel-trans" data-bs-slide-to="3" aria-label="Slide 4" @click="validarCambioCarruselTrans"></button>
                        <button type="button" id="tutoCincoTrans" data-bs-target="#carousel-trans" data-bs-slide-to="4" aria-label="Slide 5" @click="validarCambioCarruselTrans"></button>
                      </div>
                      <div class="carousel-inner">
                        <div :class="tutoUnoTrans == true ? 'carousel-item active div-carrusel' : 'carousel-item div-carrusel'">
                          <img src="../../public/images/tutorial/trans-monitoreo.png" class="d-block img-carrusel">
                        </div>
                        <div :class="tutoDosTrans == true ? 'carousel-item active div-carrusel' : 'carousel-item div-carrusel'">
                          <img src="../../public/images/tutorial/trans-tiempos.png" class="d-block img-carrusel">
                        </div>
                        <div :class="tutoTresTrans == true ? 'carousel-item active div-carrusel' : 'carousel-item div-carrusel'">
                          <img src="../../public/images/tutorial/trans-acciones.png" class="d-block img-carrusel">
                        </div>
                        <div :class="tutoCuatroTrans == true ? 'carousel-item active div-carrusel' : 'carousel-item div-carrusel'">
                          <img src="../../public/images/tutorial/trans-signos.png" class="d-block img-carrusel">
                        </div>
                        <div :class="tutoCincoTrans == true ? 'carousel-item active div-carrusel' : 'carousel-item div-carrusel'">
                          <img src="../../public/images/tutorial/trans-grafica.png" class="d-block img-carrusel">
                        </div>
                      </div>
                    </div>
                  </template>

                  <template v-if="tutoPost === true">
                    <div id="carousel-post" class="carousel slide">
                      <div class="carousel-indicators">
                        <button type="button" id="tutoUnoPost" data-bs-target="#carousel-post" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" @click="validarCambioCarruselPost"></button>
                        <button type="button" id="tutoDosPost" data-bs-target="#carousel-post" data-bs-slide-to="1" aria-label="Slide 2" @click="validarCambioCarruselPost"></button>
                      </div>
                      <div class="carousel-inner">
                        <div :class="tutoUnoPost == true ? 'carousel-item active div-carrusel' : 'carousel-item div-carrusel'">
                          <img src="../../public/images/tutorial/post-modulos.png" class="d-block img-carrusel">
                        </div>
                        <div :class="tutoDosTrans == true ? 'carousel-item active div-carrusel' : 'carousel-item div-carrusel'">
                          <img src="../../public/images/tutorial/post-caso.png" class="d-block img-carrusel">
                        </div>
                      </div>
                    </div>  
                  </template>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { useUserStore } from "@/stores/user-store";
import { defineComponent } from "vue";
import swal from "sweetalert2";
import { useMedicamentoStore } from "../stores/medicamento-store";
import type { regMedicamento,
              ConfigMonitor } from "@/interfaces/regMedicamento";
import type { regUsr } from '@/interfaces/regUsr';
import bcryptjs from "bcryptjs";

const userStore = useUserStore();
const medStore = useMedicamentoStore();

export default defineComponent({
  data() {
    return {
      tutoPre: true,
      tutoTrans: false,
      tutoPost: false,

      tutoUnoPre: true,
      tutoDosPre: false,
      tutoTresPre: false,
      tutoCuatroPre: false,

      tutoUnoTrans: true,
      tutoDosTrans: false,
      tutoTresTrans: false,
      tutoCuatroTrans: false,
      tutoCincoTrans: false,

      tutoUnoPost: true,
      tutoDosPost: false,

      userStore,
      medStore,
      infoMedicamento: {} as regMedicamento,
      configMonitor: {} as ConfigMonitor,
      user: { } as regUsr,
      editar: false,

      perfilData: false,
      imagenSeleccionada: '',

      contrasenaAnterior: '',
      contrasenaRepetida: '',
      contrasenaAnt: false,
      contrasena: false,
      contrasenaRep: false,
      passCorrecta: false,
    };
  },

  mounted() {
    this.mostrarPassAnt();
    this.mostrarPass();
    this.mostrarPassRep();

    medStore.getMedicamentosList();
    this.listadoMonitor();
    this.user.nomUsr = this.userStore.Nombre
    this.user.apUsr = this.userStore.Apellido
    this.user.fechaNac = this.userStore.FechaNac
    this.user.email = this.userStore.Correo
    this.user.especialidad = this.userStore.Especialidad
    this.user.cedula = this.userStore.Cedula  
  },

  methods: {
    async mostrarMensaje() {
      swal.fire({
        title:
          "Usuario registrado correctamente, consulte su correo electrónico",
        icon: "info",
        showConfirmButton: true,
        showCloseButton: true,
        toast: true,
        position: "top-start",
      });
    },

    async listarMedicamentos() {
      await medStore.getMedicamentosList();
    },

    async agregaMedicamento() {
      if (
        this.infoMedicamento.nombreMedicamento == undefined ||
        this.infoMedicamento.nombreMedicamento == ""
      ) {
        swal.fire({
          title: "Ingrese el nombre del medicamento",
          icon: "warning",
          showConfirmButton: false,
          showCloseButton: true,
          toast: true,
          timer: 2500,
          timerProgressBar: true,
          position: "top-end",
        });
      } else {
        await medStore.createMedicamento(this.infoMedicamento);

        this.infoMedicamento.nombreMedicamento = "";
        this.infoMedicamento.codigoMedicamento = "";

        await this.listarMedicamentos();
      }
    },

    async cambiarBtnActualizar(idMedicamento) {
      this.editar = true;

      await medStore.getMedicamento(idMedicamento);

      this.infoMedicamento.idMedicamento = medStore.medicamentos._id;
      this.infoMedicamento.nombreMedicamento =
        medStore.medicamentos.nombreMedicamento;
      this.infoMedicamento.codigoMedicamento =
        medStore.medicamentos.codigoMedicamento;

      await this.listarMedicamentos();
    },

    async actualizarMedicamento(infoMedicamento) {
      if (this.infoMedicamento.nombreMedicamento == "") {
        swal.fire({
          title: "Ingrese el nombre del medicamento",
          icon: "warning",
          showConfirmButton: false,
          showCloseButton: true,
          toast: true,
          timer: 2500,
          timerProgressBar: true,
          position: "top-end",
        });
      } else {
        await medStore.updateMedicamento(infoMedicamento);
        this.editar = false;

        this.infoMedicamento.nombreMedicamento = "";
        this.infoMedicamento.codigoMedicamento = "";
        this.infoMedicamento.idMedicamento = "";

        await this.listarMedicamentos();
      }
    },

    async validaEliminarMedicamento(idMedicamento) {
      swal
        .fire({
          html: "¿Esta seguro de eliminar el medicamento?",
          icon: "warning",
          showConfirmButton: true,
          showCancelButton: true,
          toast: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.eliminarMedicamento(idMedicamento);
          }
        });
    },

    async eliminarMedicamento(idMedicamento) {
      await medStore.deleteMedicamento(idMedicamento);
      await this.listarMedicamentos();
    },

    async agregarMVS(){
      // medStore.monitor != "1.1.1.1" Comprobación para permitir agregar un monitor cuando solo esta el 1.1.1.1
      // que hace que exista la animación de monitor desconectado
      if(medStore.monitor.length != 0 && medStore.monitor != "1.1.1.1"){
        swal.fire({
            title: "Elimine el monitor antes de agregar uno nuevo",
            icon: "warning",
            showConfirmButton: false,
            showCloseButton: true,
            toast: true,
            timer: 2500,
            timerProgressBar: true,
            position: "top-end",
          });
      }
      else{
        if (
          this.configMonitor.nomMonitor == undefined ||
          this.configMonitor.nomMonitor == ""
        ) {
          swal.fire({
            title: "Ingrese el modelo del monitor",
            icon: "warning",
            showConfirmButton: false,
            showCloseButton: true,
            toast: true,
            timer: 2500,
            timerProgressBar: true,
            position: "top-end",
          });
        } else {
          await medStore.pingMonitor(String(this.configMonitor.nomMonitor),
                                     String(this.configMonitor.dirIPMonitor));
  
          this.configMonitor.nomMonitor = "";
          this.configMonitor.dirIPMonitor = "";  
        }
      }

      await medStore.listMonitor();
    },

    async validaEliminarMonitor(idMonitor) {
      swal
        .fire({
          html: "¿Esta seguro de eliminar el monitor?",
          icon: "warning",
          showConfirmButton: true,
          showCancelButton: true,
          toast: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.eliminarMonitor(idMonitor);
          }
        });
    },

    async eliminarMonitor(idMonitor) {
      await medStore.deleteMonitor(idMonitor);
      await medStore.listMonitor();
    },

    async listadoMonitor() {
      await medStore.listMonitor();
    },

    async mostrarInputsPerfil(){
      this.perfilData = true
    },

    async ocultarInputsPerfil(){
      this.perfilData = false
    },

    async actualizarDatosMedico(){
      const formData = new FormData();
      formData.append('cedula', this.user.cedula);
      formData.append('especialidad', this.user.especialidad);
      formData.append('foto', this.imagenSeleccionada);

      await this.userStore.updateMed(userStore.IdMed, formData)   

      this.user.foto = userStore.Foto
      this.perfilData = false
    },

    async handleFileChange(event) {
      const file = event.target.files[0];
      this.imagenSeleccionada = file;
    },

    async validarCambioCarruselPre(){
      if(document.getElementById("tutoUnoPre").ariaCurrent=="true"){
        this.tutoUnoPre=true
        this.tutoDosPre=false
        this.tutoTresPre=false
        this.tutoCuatroPre=false
      }
      else if(document.getElementById("tutoDosPre").ariaCurrent=="true"){
        this.tutoUnoPre=false
        this.tutoDosPre=true
        this.tutoTresPre=false
        this.tutoCuatroPre=false
      }
      else if(document.getElementById("tutoTresPre").ariaCurrent=="true"){
        this.tutoUnoPre=false
        this.tutoDosPre=false
        this.tutoTresPre=true
        this.tutoCuatroPre=false
      }
      else if(document.getElementById("tutoCuatroPre").ariaCurrent=="true"){
        this.tutoUnoPre=false
        this.tutoDosPre=false
        this.tutoTresPre=false
        this.tutoCuatroPre=true
      }
    },

    async validarCambioCarruselTrans(){
      if(document.getElementById("tutoUnoTrans").ariaCurrent=="true"){
        this.tutoUnoTrans=true
        this.tutoDosTrans=false
        this.tutoTresTrans=false
        this.tutoCuatroTrans=false
        this.tutoCincoTrans=false
      }
      else if(document.getElementById("tutoDosTrans").ariaCurrent=="true"){
        this.tutoUnoTrans=false
        this.tutoDosTrans=true
        this.tutoTresTrans=false
        this.tutoCuatroTrans=false
        this.tutoCincoTrans=false
      }
      else if(document.getElementById("tutoTresTrans").ariaCurrent=="true"){
        this.tutoUnoTrans=false
        this.tutoDosTrans=false
        this.tutoTresTrans=true
        this.tutoCuatroTrans=false
        this.tutoCincoTrans=false
      }
      else if(document.getElementById("tutoCuatroTrans").ariaCurrent=="true"){
        this.tutoUnoTrans=false
        this.tutoDosTrans=false
        this.tutoTresTrans=false
        this.tutoCuatroTrans=true
        this.tutoCincoTrans=false
      }
      else if(document.getElementById("tutoCincoTrans").ariaCurrent=="true"){
        this.tutoUnoTrans=false
        this.tutoDosTrans=false
        this.tutoTresTrans=false
        this.tutoCuatroTrans=false
        this.tutoCincoTrans=true
      }
    },

    async validarCambioCarruselPost(){
      if(document.getElementById("tutoUnoPost").ariaCurrent=="true"){
        this.tutoUnoPost=true
        this.tutoDosPost=false
      }
      else if(document.getElementById("tutoDosPost").ariaCurrent=="true"){
        this.tutoUnoPost=false
        this.tutoDosPost=true
      }
    },

    async cambiarTutorialPre(){
      this.tutoPre=true;
      this.tutoTrans=false;
      this.tutoPost=false;

      this.tutoUnoPre= true
      this.tutoDosPre= false
      this.tutoTresPre= false
      this.tutoCuatroPre= false

      document.getElementById("tutoUnoPre").ariaCurrent=="true"
      document.getElementById("tutoUnoPre").className=="active"      
    },
    async cambiarTutorialTrans(){
      this.tutoPre=false;
      this.tutoTrans=true;
      this.tutoPost=false;

      this.tutoUnoTrans=true
      this.tutoDosTrans=false
      this.tutoTresTrans=false
      this.tutoCuatroTrans=false
      this.tutoCincoTrans=false

    },
    async cambiarTutorialPost(){
      this.tutoPre=false;
      this.tutoTrans=false;
      this.tutoPost=true;

      this.tutoUnoPost=true
      this.tutoDosPost=false
    },

    async validarContrasena(){
      const respuestaPasword = await bcryptjs.compare(this.contrasenaAnterior, userStore.Password);

      if(respuestaPasword){
        this.passCorrecta=true        
      }else{
        this.passCorrecta=false    
      }
    },

    async mostrarPassAnt(){
      if ( (document.getElementById("contrasenaAnt") as HTMLInputElement).type == "text" ) {
        (document.getElementById("contrasenaAnt") as HTMLInputElement).type = "password";
        this.contrasenaAnt=false
      } else {
        (document.getElementById("contrasenaAnt") as HTMLInputElement).type = "text";
        this.contrasenaAnt=true
      }
    },

    async mostrarPass(){
      if ( (document.getElementById("contrasena") as HTMLInputElement).type == "text" ) {
        (document.getElementById("contrasena") as HTMLInputElement).type = "password";
        this.contrasena=false
      } else {
        (document.getElementById("contrasena") as HTMLInputElement).type = "text";
        this.contrasena=true
      }
    },

    async mostrarPassRep(){
      if ( (document.getElementById("contrasenaRep") as HTMLInputElement).type == "text" ) {
        (document.getElementById("contrasenaRep") as HTMLInputElement).type = "password";
        this.contrasenaRep=false
      } else {
        (document.getElementById("contrasenaRep") as HTMLInputElement).type = "text";
        this.contrasenaRep=true
      }
    },

    async vaciarInputsContrasena(){
      this.contrasenaAnterior="";
      this.user.pswd="";
      this.contrasenaRepetida="";

      this.passCorrecta = false
    },

    async validarContrasenas(){
      if(this.user.pswd != "" && this.user.pswd != null && this.user.pswd != undefined && this.contrasenaRepetida != "" && this.contrasenaRepetida != null && this.contrasenaRepetida != undefined){
        if(this.user.pswd.length >= 6){
          if(this.user.pswd == this.contrasenaRepetida){
            userStore.PasswordNuevo = this.user.pswd

            userStore.updateContrasena(userStore.IdMed, this.user.pswd);
            const hashedPassword = await bcryptjs.hash(this.user.pswd, 10);

            userStore.Password= hashedPassword
            //this.contrasenaAnterior="";
            //this.user.pswd="";
            //this.contrasenaRepetida="";

            this.passCorrecta = false

            let closeButton = document.getElementById('volver-perfil');

            // Crea un nuevo evento de clic
            let event = new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
              view: window
            });

            // Despacha el evento de clic en el botón
            closeButton.dispatchEvent(event);

          }else{
            swal.fire({
              title: "Las contraseñas no coinciden, verifique",
              icon: "error",
              showConfirmButton: true,
              toast: true,
            })
          }
        }else{
          swal.fire({
            title: "La contraseña debe tener por lo menos 6 caracteres",
            icon: "warning",
            showConfirmButton: true,
            toast: true,
          })
        }
      }else{
        swal.fire({
          html: "Llene ambos campos",
          icon: "warning",
          showConfirmButton: true,
          toast: true,
        })
      }
    }
  }
});
</script>

<style>
/* Barra navegación */
.nav-config {
  top: 0;
  right: 0;
  width: 300px;
  background-color: #002d60;
  border-bottom-left-radius: 50px !important;
  transform: translateX(100%);
}
.nav-link {
  display: block;
  padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
  font-size: var(--bs-nav-link-font-size);
  font-weight: var(--bs-nav-link-font-weight);
  color: #002d60;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}
.mt {
  margin-bottom: 2rem !important;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.div-img {
  text-align: center;
}
.imgLogoBarra {
  width: 200px;
  height: auto;
}
.imgPerfil {
  width: 45px;
  height: auto;
  border-radius: 50px;
}
.img-perfil-modal{
  width: 140px; height: auto; border-radius: 70px; position: fixed;
}
.navbar-color {
  background-color: #002d60;
}
.alinearElementoI {
  align-self: center;
  text-align: left;
}
.alinearElementoD {
  align-self: center;
  text-align: right;
}
/* Botones */
.btn-menu {
  --bs-btn-bg: #002d60;
  --bs-btn-color: #ffffff;
  --bs-btn-border-color: #002d60;
  --bs-btn-hover-bg: #002d60;
  --bs-btn-hover-color: #ffffff;
  --bs-btn-hover-border-color: #002d60;
  --bs-btn-active-bg: #002d60;
  --bs-btn-active-color: #ffffff;
  --bs-btn-active-border-color: #002d60;
}
.btn-configuracion {
  --bs-btn-bg: #002d60;
  --bs-btn-color: #fff;
  --bs-btn-border-color: #002d60;
  --bs-btn-hover-bg: #4b688b;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-border-color: #4b688b;
  --bs-btn-active-bg: #4b688b;
  --bs-btn-active-color: #fff;
  --bs-btn-active-border-color: #4b688b;
  width: 300px;
  margin-bottom: 8px;
  text-align: left;
  padding: 20px;
}
.btn-modal-medicamentos {
  --bs-btn-bg: #ffffff;
  --bs-btn-color: #002d60;
  --bs-btn-border-color: #ffffff;
  --bs-btn-hover-bg: #E88300;
  --bs-btn-hover-color: #ffffff;
  --bs-btn-hover-border-color: #E88300;
  --bs-btn-active-bg: #E88300;
  --bs-btn-active-color: #ffffff;
  --bs-btn-active-border-color: #E88300;
  width: 130px;
}
.btn-modal-pass {
  --bs-btn-bg: #ffffff;
  --bs-btn-color: #002d60;
  --bs-btn-border-color: #ffffff;
  --bs-btn-hover-bg: #E88300;
  --bs-btn-hover-color: #ffffff;
  --bs-btn-hover-border-color: #E88300;
  --bs-btn-active-bg: #E88300;
  --bs-btn-active-color: #ffffff;
  --bs-btn-active-border-color: #E88300;
}
/* Modal medicamentos */
.colorModal {
  background-color: #002d60;
}
.deslizar {
  overflow: scroll;
  overflow-x: hidden;
  height: 270px;
  margin-top: 15px;
}
.modal-med-largo {
  height: 515px;
}
.puntero {
  cursor: pointer;
}
.input-perfil{
  background-color: #002d60 !important;
  color: #fff !important;
  border: 1px solid #002d60 !important;
  padding: 0% !important;
}
.input-read-perfil{
  background-color: #002d60 !important;
  color: #fff !important;
}
.color-modal {
  background-color: #002d60;
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
.carousel-indicators{
  margin-bottom: 0;
}
.carousel-indicators [data-bs-target] {
  background-color: #E88000 !important;  
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
.password-icon {
  float: right;
  position: relative;
  margin: -30px 10px 0 0;
  cursor: pointer;
  color: gray;
}
.password-des {
  float: left;
  margin: -15px 10px 0 0;
  color: gray;
}
.password-check{
  float: left;
  margin: -15px 10px 0 0;
  color: green;
}
</style>
