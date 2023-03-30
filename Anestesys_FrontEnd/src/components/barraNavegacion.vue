<template>
  <div class="mt" id="headerP">
    <nav class="navbar navbar-color fw-bold">
      <div class="input-group">
        <div class="col-md-1"></div>

        <div class="col-md-2 alinearElementoI">
          <RouterLink class="" to="pre">
            <img src="images/logoA.png" class="imgLogoBarra" />
          </RouterLink>
        </div>

        <div class="col-md-5"></div>

        <!-- Nombre DR -->
        <div class="col-md-2 text-white alinearElementoD">
          <img src="images/perfil.jpg" class="imgPerfil" />
          {{ "Dr. " + userStore.Nombre + " " + userStore.Apellido }}
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
          </button>
        </div>

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
                  <img src="images/imgIcon/medicamento.svg" />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Medicamentos
                </button>
              </li>

              <!-- Link Config Monitor -->
              <li>
                <button
                  type="button"
                  class="btn btn-configuracion fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#monitorModal"
                >
                  <img src="images/imgIcon/monitor.svg" />
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
                  <img src="images/imgIcon/tendencia.svg" />
                  &nbsp;&nbsp;&nbsp;Tendencias
                </button>
              </li>

              <!-- Link Teclado Virtual -->
              <li>
                <button type="button" class="btn btn-configuracion fw-bold">
                  <img src="images/imgIcon/teclado.svg" />
                  &nbsp;&nbsp;&nbsp;Teclado virtual
                </button>
              </li>

              <!-- Link Salir -->
              <li class="nav-item">
                <button
                  class="btn btn-configuracion fw-bold"
                  @click="userStore.logout()"
                >
                  <img src="images/imgIcon/salir.svg" />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Salir
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <!-- Modal medicamentos -->
    <div class="modal"
         id="medicamentosModal"
         tabindex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" >
        <div class="modal-content colorModalMedicamentos modal-med-largo">
          <div class="input-group mb-3">
            <div class="modal-body">
              <div class="col-md-12">
                <div class="row g-3">
                  <div class="col-md-11">
                    <h5 class="text-white fw-bold">MEDICAMENTOS</h5>
                    <h6 class="text-white fw-bold">Gestión de medicamentos</h6>
                  </div>

                  <div class="col-md-1 div-img">
                    <button
                      type="button"
                      class="btn fw-bold"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <i class="fa-solid fa-2x fa-xmark text-white"></i>
                    </button>
                  </div>

                  <form class="row g-3" @submit.prevent="">
                    <div class="col-md-4">
                      <input
                        type="text"
                        class="form-control"
                        v-model="infoMedicamento.nombreMedicamento"
                        placeholder="Nombre del medicamento"
                      />
                    </div>
                    <div class="col-md-8"></div>

                    <div class="col-md-4">
                      <input
                        type="text"
                        class="form-control"
                        v-model="infoMedicamento.codigoMedicamento"
                        placeholder="Código de barras"
                      />
                      <input
                        type="hidden"
                        v-model="infoMedicamento.idMedicamento"
                      />
                    </div>

                    <div class="col-md-1"></div>
                    <div class="col-md-1">
                      <template v-if="editar === false">
                        <button
                          type="button"
                          class="btn btn-modal-medicamentos fw-bold"
                          @click="agregaMedicamento()"
                        >
                          Agregar
                        </button>
                      </template>
                      <template v-else>
                        <button
                          type="button"
                          class="btn btn-modal-medicamentos fw-bold"
                          @click="actualizarMedicamento(infoMedicamento)"
                        >
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
                          <tr
                            v-for="(
                              medicamento, index
                            ) in medStore.medicamentos"
                          >
                            <td class="text-white">{{ index + 1 }}</td>
                            <td class="text-white">
                              {{ medicamento.nombreMedicamento }}
                            </td>
                            <td class="text-white">
                              {{ medicamento.codigoMedicamento }}
                            </td>
                            <td>
                              <button
                                class="btn"
                                @click="cambiarBtnActualizar(medicamento._id)"
                              >
                                <i
                                  class="fa-solid fa-pen-to-square text-white"
                                ></i>
                              </button>
                            </td>
                            <td>
                              <button
                                class="btn"
                                @click="
                                  validaEliminarMedicamento(medicamento._id)
                                "
                              >
                                <i class="fa-solid fa-trash text-white"></i>
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
  </div>
</template>

<script lang="ts">
import { useUserStore } from "@/stores/user-store";
import { defineComponent } from "vue";
import swal from "sweetalert2";
import { useMedicamentoStore } from "../stores/medicamento-store";
import type { regMedicamento } from "@/interfaces/regMedicamento";

const userStore = useUserStore();
const medStore = useMedicamentoStore();

export default defineComponent({
  data() {
    return {
      userStore,
      medStore,
      infoMedicamento: {} as regMedicamento,
      editar: false,
    };
  },

  mounted() {
    medStore.getMedicamentosList();
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

      //await medStore.deleteMedicamento(idMedicamento)
    },

    async eliminarMedicamento(idMedicamento) {
      await medStore.deleteMedicamento(idMedicamento);
      await this.listarMedicamentos();
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
  width: 280px;
  height: auto;
}
.imgPerfil {
  width: 75px;
  height: auto;
  border-radius: 50px;
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
  --bs-btn-hover-bg: #ffffff;
  --bs-btn-hover-color: #002d60;
  --bs-btn-hover-border-color: #ffffff;
  --bs-btn-active-bg: #002d60;
  --bs-btn-active-color: #ffffff;
  --bs-btn-active-border-color: #ffffff;
  width: 130px;
}
/* Modal medicamentos */
.colorModalMedicamentos {
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
</style>
