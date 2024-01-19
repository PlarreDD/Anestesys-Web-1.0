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
    <div class="modal"
         id="perfilModal"
         tabindex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true">
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

                    <div class="col-md-4"></div>.
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
    <div class="modal"
        id="tutorial-modal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable" >
        <div class="modal-content color-modal">
          <div class="input-group mb-3">
            <div class="modal-body">
              <div class="col-md-12">
                <div class="row g-3">
                  <div class="col-md-11">
                    <h5 class="text-white fw-bold">TUTORIAL</h5>                    
                  </div>

                  <div class="col-md-1 div-img">
                    <button type="button" class="btn fw-bold" data-bs-dismiss="modal" aria-label="Close">
                      <i class="text-white">
                        <font-awesome-icon icon="fa-solid fa-xmark" size="2xl"/>
                      </i>
                    </button>
                  </div>

                  <form class="row g-3 mt-1" @submit.prevent="">
                    
                  </form>

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

const userStore = useUserStore();
const medStore = useMedicamentoStore();

export default defineComponent({
  data() {
    return {
      userStore,
      medStore,
      infoMedicamento: {} as regMedicamento,
      configMonitor: {} as ConfigMonitor,
      user: { } as regUsr,
      editar: false,

      perfilData: false,
      imagenSeleccionada : ''
    };
  },

  mounted() {
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
  },
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
</style>
