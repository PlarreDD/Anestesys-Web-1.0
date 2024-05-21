<template>
  <div>
    <ul class="nav nav-pills mb-3 text-center centrar-li" id="">
      <li class="nav-item col-md-4">
        <button
          class="btn btn-nav-bar fw-bold active"
          id="nota-evaluacion"
          data-bs-toggle="pill"
          data-bs-target="#notaEvaluacion"
          type="button"
          aria-selected="true"
        >
          NOTA DE EVALUACIÓN DE UCPA
        </button>
      </li>

      <li class="nav-item col-md-4">
        <!-- <button @click="detenerReconocimiento"
          class="btn btn-nav-bar fw-bold"
          id=""
          data-bs-toggle="pill"
          data-bs-target="#aldrete"
          type="button"
          aria-selected="false"
        > -->
        <button
          class="btn btn-nav-bar fw-bold"
          id=""
          data-bs-toggle="pill"
          data-bs-target="#aldrete"
          type="button"
          aria-selected="false"
        >
          ALDRETE DE RECUPERACIÓN
        </button>
      </li>

      <li class="nav-item col-md-4">
        <!-- <button @click="detenerReconocimiento"
          class="btn btn-nav-bar fw-bold"
          id=""
          data-bs-toggle="pill"
          data-bs-target="#alta"
          type="button"
          aria-selected="false"
        > -->
        <button
          class="btn btn-nav-bar fw-bold"
          id=""
          data-bs-toggle="pill"
          data-bs-target="#alta"
          type="button"
          aria-selected="false"
        >
          ALTA DE RECUPERACIÓN
        </button>
      </li>
    </ul>

    <div class="tab-content col-md-12" id="" @mouseover="vaciarInputsRecuperacion">
      <!-- Nota de Evaluación de UCPA -->
      <div class="tab-pane fade show active" id="notaEvaluacion">
        <div class="col-12 bordePrincipal" :class="preIdStore.VistaRapida == true ? '' : 'mb-5'">
          <form @submit.prevent="" class="row g-1">
            <div class="col-md-11">
              <h5 class="fw-bold">NOTA DE EVALUACIÓN UCPA</h5>
            </div>

            <div class="col-md-1 justificar-icono-nota">
                <label class="form-label fw-bold alinear-icono-nota">
                    <template v-if="microfonoEscucha === false">
                        <!-- <span id="microfono-post" :class="microfono == false ? 'microfono-off-rec' : 'microfono-on-rec'" @click="empezarReconocimiento">
                            <font-awesome-icon class="" icon="fa-solid fa-microphone" size="2xl"/>
                        </span> -->
                        <span id="microfono-post" :class="microfono == false ? 'microfono-off-rec' : 'microfono-on-rec'">
                            <font-awesome-icon class="" icon="fa-solid fa-microphone" size="2xl"/>
                        </span>
                    </template>

                    <template v-else>
                        <!-- <span class="microfono-on-rec" @click="detenerReconocimiento">
                            <font-awesome-icon class="" icon="fa-solid fa-microphone" size="2xl"/>
                        </span> -->
                        <span class="microfono-on-rec">
                            <font-awesome-icon class="" icon="fa-solid fa-microphone" size="2xl"/>
                        </span>
                    </template>                                
                </label>     
            </div>

            <!-- Observaciones -->
            <div class="col-md-12">
              <textarea @keyup.capture="enviarDatosRecuperacion"
                class="form-control"
                v-model="infoRec.notaEval_Obs"
                rows="15"
                maxlength="1000"
                :class="
                  infoRec.notaEval_Obs != undefined &&
                  infoRec.notaEval_Obs != ''
                    ? 'form-control border border-success formSombra'
                    : 'form-control'
                "
              ></textarea>
            </div>

          </form>
        </div>
      </div>

      <!-- Aldrete de Recuperación -->
      <div class="tab-pane fade" id="aldrete">
        <div class="col-12 bordePrincipal" :class="preIdStore.VistaRapida == true ? '' : 'mb-5'">
          <form @submit.prevent="" class="row g-3">
            <h5 class="fw-bold">ALDRETE DE RECUPERACIÓN</h5>
            <table class="table table-responsive" id="aldrete-tabla">
              <!-- Fila 1 -->
              <tr>
                <td class="color-texto fw-bold">Criterio:</td>
                <td class="color-texto fw-bold">Ingreso</td>
                <td class="color-texto fw-bold">15 min</td>
                <td class="color-texto fw-bold">30 min</td>
                <td class="color-texto fw-bold">45 min</td>
                <td class="color-texto fw-bold">60 min</td>
                <td class="color-texto fw-bold">90 min</td>
                <td class="color-texto fw-bold">120 min</td>
              </tr>

              <!-- Frecuencia Cardiaca -->
              <tr class="espacio">
                <td class="col-2 color-texto">Frecuencia Cardiaca:</td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_FrecCardIn"
                    :class="
                      infoRec.aldreteRec_FrecCardIn != undefined &&
                      infoRec.aldreteRec_FrecCardIn != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_FrecCard15"
                    :class="
                      infoRec.aldreteRec_FrecCard15 != undefined &&
                      infoRec.aldreteRec_FrecCard15 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_FrecCard30"
                    :class="
                      infoRec.aldreteRec_FrecCard30 != undefined &&
                      infoRec.aldreteRec_FrecCard30 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_FrecCard45"
                    :class="
                      infoRec.aldreteRec_FrecCard45 != undefined &&
                      infoRec.aldreteRec_FrecCard45 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_FrecCard60"
                    :class="
                      infoRec.aldreteRec_FrecCard60 != undefined &&
                      infoRec.aldreteRec_FrecCard60 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_FrecCard90"
                    :class="
                      infoRec.aldreteRec_FrecCard90 != undefined &&
                      infoRec.aldreteRec_FrecCard90 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_FrecCard120"
                    :class="
                      infoRec.aldreteRec_FrecCard120 != undefined &&
                      infoRec.aldreteRec_FrecCard120 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
              </tr>

              <!-- Frecuencia Respiratoria -->
              <tr class="espacio">
                <td class="col-2 color-texto">Frecuencia Respiratoria:</td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_FrecRespIn"
                    :class="
                      infoRec.aldreteRec_FrecRespIn != undefined &&
                      infoRec.aldreteRec_FrecRespIn != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_FrecResp15"
                    :class="
                      infoRec.aldreteRec_FrecResp15 != undefined &&
                      infoRec.aldreteRec_FrecResp15 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_FrecResp30"
                    :class="
                      infoRec.aldreteRec_FrecResp30 != undefined &&
                      infoRec.aldreteRec_FrecResp30 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_FrecResp45"
                    :class="
                      infoRec.aldreteRec_FrecResp45 != undefined &&
                      infoRec.aldreteRec_FrecResp45 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_FrecResp60"
                    :class="
                      infoRec.aldreteRec_FrecResp60 != undefined &&
                      infoRec.aldreteRec_FrecResp60 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_FrecResp90"
                    :class="
                      infoRec.aldreteRec_FrecResp90 != undefined &&
                      infoRec.aldreteRec_FrecResp90 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_FrecResp120"
                    :class="
                      infoRec.aldreteRec_FrecResp120 != undefined &&
                      infoRec.aldreteRec_FrecResp120 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
              </tr>

              <!-- Tensión Arterial -->
              <tr class="espacio">
                <td class="col-2 color-texto">Tensión Arterial:</td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_TensArteIn"
                    :class="
                      infoRec.aldreteRec_TensArteIn != undefined &&
                      infoRec.aldreteRec_TensArteIn != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_TensArte15"
                    :class="
                      infoRec.aldreteRec_TensArte15 != undefined &&
                      infoRec.aldreteRec_TensArte15 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_TensArte30"
                    :class="
                      infoRec.aldreteRec_TensArte30 != undefined &&
                      infoRec.aldreteRec_TensArte30 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_TensArte45"
                    :class="
                      infoRec.aldreteRec_TensArte45 != undefined &&
                      infoRec.aldreteRec_TensArte45 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_TensArte60"
                    :class="
                      infoRec.aldreteRec_TensArte60 != undefined &&
                      infoRec.aldreteRec_TensArte60 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_TensArte90"
                    :class="
                      infoRec.aldreteRec_TensArte90 != undefined &&
                      infoRec.aldreteRec_TensArte90 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_TensArte120"
                    :class="
                      infoRec.aldreteRec_TensArte120 != undefined &&
                      infoRec.aldreteRec_TensArte120 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
              </tr>

              <!-- Saturación de O2 -->
              <tr class="espacio">
                <td class="col-2 color-texto">Saturación de O2:</td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_SatO2In"
                    :class="
                      infoRec.aldreteRec_SatO2In != undefined &&
                      infoRec.aldreteRec_SatO2In != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_SatO215"
                    :class="
                      infoRec.aldreteRec_SatO215 != undefined &&
                      infoRec.aldreteRec_SatO215 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_SatO230"
                    :class="
                      infoRec.aldreteRec_SatO230 != undefined &&
                      infoRec.aldreteRec_SatO230 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_SatO245"
                    :class="
                      infoRec.aldreteRec_SatO245 != undefined &&
                      infoRec.aldreteRec_SatO245 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_SatO260"
                    :class="
                      infoRec.aldreteRec_SatO260 != undefined &&
                      infoRec.aldreteRec_SatO260 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_SatO290"
                    :class="
                      infoRec.aldreteRec_SatO290 != undefined &&
                      infoRec.aldreteRec_SatO290 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    @keyup.capture="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_SatO2120"
                    :class="
                      infoRec.aldreteRec_SatO2120 != undefined &&
                      infoRec.aldreteRec_SatO2120 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  />
                </td>
              </tr>

              <!-- Aldrete -->
              <!-- <tr class="espacio">
                <td class="col-2 color-texto">Aldrete:</td>
                <th>
                  <select
                    
                    v-model="infoRec.aldreteRec_AldreteIn"
                    @click.capture="obtenerAldrete"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_AldreteIn != undefined &&
                      infoRec.aldreteRec_AldreteIn != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </th>

                <th>
                  <select
                    
                    v-model="infoRec.aldreteRec_Aldrete15"
                    @click.capture="obtenerAldrete"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_Aldrete15 != undefined &&
                      infoRec.aldreteRec_Aldrete15 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </th>

                <th>
                  <select
                    
                    v-model="infoRec.aldreteRec_Aldrete30"
                    @click.capture="obtenerAldrete"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_Aldrete30 != undefined &&
                      infoRec.aldreteRec_Aldrete30 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </th>

                <th>
                  <select
                    
                    v-model="infoRec.aldreteRec_Aldrete45"
                    @click.capture="obtenerAldrete"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_Aldrete45 != undefined &&
                      infoRec.aldreteRec_Aldrete45 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </th>

                <th>
                  <select
                    
                    v-model="infoRec.aldreteRec_Aldrete60"
                    @click.capture="obtenerAldrete"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_Aldrete60 != undefined &&
                      infoRec.aldreteRec_Aldrete60 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </th>

                <th>
                  <select
                    
                    v-model="infoRec.aldreteRec_Aldrete90"
                    @click.capture="obtenerAldrete"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_Aldrete90 != undefined &&
                      infoRec.aldreteRec_Aldrete90 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </th>

                <th>
                  <select
                    
                    v-model="infoRec.aldreteRec_Aldrete120"
                    @click.capture="obtenerAldrete"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_Aldrete120 != undefined &&
                      infoRec.aldreteRec_Aldrete120 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </th>
              </tr> -->

              <!-- Actividad muscular -->
              <tr class="espacio">
                <td class="col-2 color-texto">
                  <label  class="form-label color-td">
                    <span data-bs-toggle="modal" data-bs-target="#muscular-modal">
                      <font-awesome-icon icon="fa-solid fa-circle-info" />
                    </span>
                    Actividad muscular:
                  </label>
                </td>
                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_MuscularIn" click.capture="obtenerAldrete" class="form-select"
                    :class="infoRec.aldreteRec_MuscularIn != undefined && infoRec.aldreteRec_MuscularIn != ''? 'form-control border border-success formSombra': 'form-control'">
                    <option selected></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Muscular15" class="form-select"
                      :class="infoRec.aldreteRec_Muscular15 != undefined && infoRec.aldreteRec_Muscular15 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Muscular30" class="form-select"
                    :class="infoRec.aldreteRec_Muscular30 != undefined && infoRec.aldreteRec_Muscular30 != '' ? 'form-control border border-success formSombra' : 'form-control' ">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Muscular45" class="form-select"
                    :class="infoRec.aldreteRec_Muscular45 != undefined && infoRec.aldreteRec_Muscular45 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Muscular60" class="form-select"
                      :class="infoRec.aldreteRec_Muscular60 != undefined && infoRec.aldreteRec_Muscular60 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Muscular90" class="form-select"
                    :class=" infoRec.aldreteRec_Muscular90 != undefined && infoRec.aldreteRec_Muscular90 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Muscular120" class="form-select"
                    :class=" infoRec.aldreteRec_Muscular120 != undefined && infoRec.aldreteRec_Muscular120 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>
              </tr>

              <!-- Respiración -->
              <tr class="espacio">
                <td class="col-2 color-texto">
                  <label  class="form-label color-td">
                    <span data-bs-toggle="modal" data-bs-target="#respiracion-modal">
                      <font-awesome-icon icon="fa-solid fa-circle-info" />
                    </span>
                    Respiración:
                  </label>
                </td>
                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_RespiracionIn" class="form-select"
                    :class="infoRec.aldreteRec_RespiracionIn != undefined && infoRec.aldreteRec_RespiracionIn != ''? 'form-control border border-success formSombra': 'form-control'">
                    <option selected></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Respiracion15" class="form-select"
                      :class="infoRec.aldreteRec_Respiracion15 != undefined && infoRec.aldreteRec_Respiracion15 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Respiracion30" class="form-select"
                    :class="infoRec.aldreteRec_Respiracion30 != undefined && infoRec.aldreteRec_Respiracion30 != '' ? 'form-control border border-success formSombra' : 'form-control' ">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Respiracion45" class="form-select"
                    :class="infoRec.aldreteRec_Respiracion45 != undefined && infoRec.aldreteRec_Respiracion45 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Respiracion60" class="form-select"
                      :class="infoRec.aldreteRec_Respiracion60 != undefined && infoRec.aldreteRec_Respiracion60 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Respiracion90" class="form-select"
                    :class=" infoRec.aldreteRec_Respiracion90 != undefined && infoRec.aldreteRec_Respiracion90 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Respiracion120" class="form-select"
                    :class=" infoRec.aldreteRec_Respiracion120 != undefined && infoRec.aldreteRec_Respiracion120 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>
              </tr>

              <!-- Circulación -->
              <tr class="espacio">
                <td class="col-2 color-texto">
                  <label  class="form-label color-td">
                    <span data-bs-toggle="modal" data-bs-target="#circulacion-modal">
                      <font-awesome-icon icon="fa-solid fa-circle-info" />
                    </span>
                    Circulación:
                  </label>
                </td>
                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_CirculacionIn" class="form-select"
                    :class="infoRec.aldreteRec_CirculacionIn != undefined && infoRec.aldreteRec_CirculacionIn != ''? 'form-control border border-success formSombra': 'form-control'">
                    <option selected></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Circulacion15" class="form-select"
                      :class="infoRec.aldreteRec_Circulacion15 != undefined && infoRec.aldreteRec_Circulacion15 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Circulacion30" class="form-select"
                    :class="infoRec.aldreteRec_Circulacion30 != undefined && infoRec.aldreteRec_Circulacion30 != '' ? 'form-control border border-success formSombra' : 'form-control' ">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Circulacion45" class="form-select"
                    :class="infoRec.aldreteRec_Circulacion45 != undefined && infoRec.aldreteRec_Circulacion45 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Circulacion60" class="form-select"
                      :class="infoRec.aldreteRec_Circulacion60 != undefined && infoRec.aldreteRec_Circulacion60 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Circulacion90" class="form-select"
                    :class=" infoRec.aldreteRec_Circulacion90 != undefined && infoRec.aldreteRec_Circulacion90 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Circulacion120" class="form-select"
                    :class=" infoRec.aldreteRec_Circulacion120 != undefined && infoRec.aldreteRec_Circulacion120 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>
              </tr>

               <!-- Estado de conciencia -->
               <tr class="espacio">
                <td class="col-2 color-texto">
                  <label class="form-label color-td">
                    <span data-bs-toggle="modal" data-bs-target="#conciencia-modal">
                      <font-awesome-icon icon="fa-solid fa-circle-info" />
                    </span>
                    Estado de conciencia:
                  </label>
                </td>
                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_ConcienciaIn" class="form-select"
                    :class="infoRec.aldreteRec_ConcienciaIn != undefined && infoRec.aldreteRec_ConcienciaIn != ''? 'form-control border border-success formSombra': 'form-control'">
                    <option selected></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Conciencia15" class="form-select"
                      :class="infoRec.aldreteRec_Conciencia15 != undefined && infoRec.aldreteRec_Conciencia15 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Conciencia30" class="form-select"
                    :class="infoRec.aldreteRec_Conciencia30 != undefined && infoRec.aldreteRec_Conciencia30 != '' ? 'form-control border border-success formSombra' : 'form-control' ">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Conciencia45" class="form-select"
                    :class="infoRec.aldreteRec_Conciencia45 != undefined && infoRec.aldreteRec_Conciencia45 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Conciencia60" class="form-select"
                      :class="infoRec.aldreteRec_Conciencia60 != undefined && infoRec.aldreteRec_Conciencia60 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Conciencia90" class="form-select"
                    :class=" infoRec.aldreteRec_Conciencia90 != undefined && infoRec.aldreteRec_Conciencia90 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Conciencia120" class="form-select"
                    :class=" infoRec.aldreteRec_Conciencia120 != undefined && infoRec.aldreteRec_Conciencia120 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>
              </tr>

              <!-- Coloración -->
              <tr class="espacio">
                <td class="col-2 color-texto">
                  <label  class="form-label color-td">
                    <span data-bs-toggle="modal" data-bs-target="#coloracion-modal">
                      <font-awesome-icon icon="fa-solid fa-circle-info" />
                    </span>
                    Coloración:
                  </label>
                </td>
                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_ColoracionIn" class="form-select"
                    :class="infoRec.aldreteRec_ColoracionIn != undefined && infoRec.aldreteRec_ColoracionIn != ''? 'form-control border border-success formSombra': 'form-control'">
                    <option selected></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Coloracion15" class="form-select"
                      :class="infoRec.aldreteRec_Coloracion15 != undefined && infoRec.aldreteRec_Coloracion15 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Coloracion30" class="form-select"
                    :class="infoRec.aldreteRec_Coloracion30 != undefined && infoRec.aldreteRec_Coloracion30 != '' ? 'form-control border border-success formSombra' : 'form-control' ">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Coloracion45" class="form-select"
                    :class="infoRec.aldreteRec_Coloracion45 != undefined && infoRec.aldreteRec_Coloracion45 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Coloracion60" class="form-select"
                      :class="infoRec.aldreteRec_Coloracion60 != undefined && infoRec.aldreteRec_Coloracion60 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Coloracion90" class="form-select"
                    :class=" infoRec.aldreteRec_Coloracion90 != undefined && infoRec.aldreteRec_Coloracion90 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>

                <th>
                  <select @change="obtenerAldrete" v-model="infoRec.aldreteRec_Coloracion120" class="form-select"
                    :class=" infoRec.aldreteRec_Coloracion120 != undefined && infoRec.aldreteRec_Coloracion120 != '' ? 'form-control border border-success formSombra' : 'form-control'">
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </th>
              </tr>

              <!-- Bromage -->
              <tr class="espacio">
                <td class="col-2 color-texto">
                  <label  class="form-label color-td">
                    <span
                      data-bs-toggle="modal"
                      data-bs-target="#bromage-modal"
                    >
                      <font-awesome-icon icon="fa-solid fa-circle-info" />
                    </span>
                    Bromage:
                  </label>
                </td>
                <th>
                  <select
                     @change="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_BromageIn"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_BromageIn != undefined &&
                      infoRec.aldreteRec_BromageIn != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option selected></option>
                    <option>I</option>
                    <option>II</option>
                    <option>III</option>
                    <option>IV</option>
                  </select>
                </th>

                <th>
                  <select
                     @change="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_Bromage15"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_Bromage15 != undefined &&
                      infoRec.aldreteRec_Bromage15 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>I</option>
                    <option>II</option>
                    <option>III</option>
                    <option>IV</option>
                  </select>
                </th>

                <th>
                  <select
                     @change="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_Bromage30"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_Bromage30 != undefined &&
                      infoRec.aldreteRec_Bromage30 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>I</option>
                    <option>II</option>
                    <option>III</option>
                    <option>IV</option>
                  </select>
                </th>

                <th>
                  <select
                     @change="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_Bromage45"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_Bromage45 != undefined &&
                      infoRec.aldreteRec_Bromage45 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>I</option>
                    <option>II</option>
                    <option>III</option>
                    <option>IV</option>
                  </select>
                </th>

                <th>
                  <select
                     @change="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_Bromage60"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_Bromage60 != undefined &&
                      infoRec.aldreteRec_Bromage60 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>I</option>
                    <option>II</option>
                    <option>III</option>
                    <option>IV</option>
                  </select>
                </th>

                <th>
                  <select
                     @change="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_Bromage90"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_Bromage90 != undefined &&
                      infoRec.aldreteRec_Bromage90 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>I</option>
                    <option>II</option>
                    <option>III</option>
                    <option>IV</option>
                  </select>
                </th>

                <th>
                  <select
                     @change="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_Bromage120"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_Bromage120 != undefined &&
                      infoRec.aldreteRec_Bromage120 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>I</option>
                    <option>II</option>
                    <option>III</option>
                    <option>IV</option>
                  </select>
                </th>
              </tr>

              <!-- Nauseas/Vomito -->
              <tr class="espacio">
                <td class="col-2 color-texto">Nauseas/Vomito:</td>
                <th>
                  <select
                     @change="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_NauseasIn"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_NauseasIn != undefined &&
                      infoRec.aldreteRec_NauseasIn != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>Sí</option>
                    <option>No</option>
                  </select>
                </th>

                <th>
                  <select
                     @change="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_Nauseas15"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_Nauseas15 != undefined &&
                      infoRec.aldreteRec_Nauseas15 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>Sí</option>
                    <option>No</option>
                  </select>
                </th>

                <th>
                  <select
                     @change="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_Nauseas30"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_Nauseas30 != undefined &&
                      infoRec.aldreteRec_Nauseas30 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>Sí</option>
                    <option>No</option>
                  </select>
                </th>

                <th>
                  <select
                     @change="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_Nauseas45"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_Nauseas45 != undefined &&
                      infoRec.aldreteRec_Nauseas45 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>Sí</option>
                    <option>No</option>
                  </select>
                </th>

                <th>
                  <select
                     @change="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_Nauseas60"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_Nauseas60 != undefined &&
                      infoRec.aldreteRec_Nauseas60 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>Sí</option>
                    <option>No</option>
                  </select>
                </th>

                <th>
                  <select
                     @change="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_Nauseas90"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_Nauseas90 != undefined &&
                      infoRec.aldreteRec_Nauseas90 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>Sí</option>
                    <option>No</option>
                  </select>
                </th>

                <th>
                  <select
                     @change="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_Nauseas120"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_Nauseas120 != undefined &&
                      infoRec.aldreteRec_Nauseas120 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>Sí</option>
                    <option>No</option>
                  </select>
                </th>
              </tr>

              <!-- Escala de EVA Dolor -->
              <tr class="espacio">
                <td class="col-2 color-texto">
                  <label  class="form-label color-td">
                    <span
                      data-bs-toggle="modal"
                      data-bs-target="#escala-EVA-modal"
                    >
                      <font-awesome-icon icon="fa-solid fa-circle-info" />
                    </span>
                    Escala de EVA Dolor:
                  </label>
                </td>
                <th>
                  <select
                     @change="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_escEVADolIn"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_escEVADolIn != undefined &&
                      infoRec.aldreteRec_escEVADolIn != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </th>

                <th>
                  <select
                     @change="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_escEVADol15"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_escEVADol15 != undefined &&
                      infoRec.aldreteRec_escEVADol15 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </th>

                <th>
                  <select
                     @change="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_escEVADol30"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_escEVADol30 != undefined &&
                      infoRec.aldreteRec_escEVADol30 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </th>

                <th>
                  <select
                     @change="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_escEVADol45"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_escEVADol45 != undefined &&
                      infoRec.aldreteRec_escEVADol45 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </th>

                <th>
                  <select
                     @change="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_escEVADol60"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_escEVADol60 != undefined &&
                      infoRec.aldreteRec_escEVADol60 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </th>

                <th>
                  <select
                     @change="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_escEVADol90"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_escEVADol90 != undefined &&
                      infoRec.aldreteRec_escEVADol90 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </th>

                <th>
                  <select
                     @change="enviarDatosRecuperacion"
                    v-model="infoRec.aldreteRec_escEVADol120"
                    class="form-select"
                    :class="
                      infoRec.aldreteRec_escEVADol120 != undefined &&
                      infoRec.aldreteRec_escEVADol120 != ''
                        ? 'form-control border border-success formSombra'
                        : 'form-control'
                    "
                  >
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </th>
              </tr>
            </table>
          </form>
        </div>
      </div>

      <!-- Alta de Recuperación -->
      <div class="tab-pane fade" id="alta">
        <div class="col-12 bordePrincipal" :class="preIdStore.VistaRapida == true ? '' : 'mb-5'">
          <form @submit.prevent="" class="row g-3">

            <h5 class="fw-bold">ALTA DE RECUPERACIÓN</h5>
            <!-- Criterio de Aldrete -->
            <div class="col-md-3">
              <label  class="form-label fw-bold">Criterio de Aldrete</label>
            </div>

            <div class="col-md-1 text-center">
              <label  class="form-label fw-bold">0 min</label>
              <input type="text"
                class="form-control" @keyup.capture="enviarDatosRecuperacion"
                v-model="infoRec.altaRec_0min"
                :class="infoRec.altaRec_0min != undefined && infoRec.altaRec_0min != 0 ?
                        'form-control border border-success formSombra' : 'form-control'" readonly
                        >
            </div>

            <div class="col-md-1 text-center">
              <label  class="form-label fw-bold">15 min</label>
              <input type="text"
                class="form-control" @keyup.capture="enviarDatosRecuperacion"
                v-model="infoRec.altaRec_15min"
                :class="infoRec.altaRec_15min != undefined && infoRec.altaRec_15min != 0 ?
                        'form-control border border-success formSombra' : 'form-control'" readonly>
            </div>

            <div class="col-md-1 text-center">
              <label  class="form-label fw-bold">30 min</label>
              <input type="text"
                class="form-control" @keyup.capture="enviarDatosRecuperacion"
                v-model="infoRec.altaRec_30min"
                :class="infoRec.altaRec_30min != undefined && infoRec.altaRec_30min != 0 ?
                        'form-control border border-success formSombra' : 'form-control'" readonly>
            </div>

            <div class="col-md-1 text-center">
              <label  class="form-label fw-bold">45 min</label>
              <input type="text"
                class="form-control" @keyup.capture="enviarDatosRecuperacion"
                v-model="infoRec.altaRec_45min"
                :class="infoRec.altaRec_45min != undefined && infoRec.altaRec_45min != 0 ?
                        'form-control border border-success formSombra' : 'form-control'" readonly>
            </div>

            <div class="col-md-1 text-center">
              <label  class="form-label fw-bold">60 min</label>
              <input type="text"
                class="form-control" @keyup.capture="enviarDatosRecuperacion"
                v-model="infoRec.altaRec_60min"
                :class="infoRec.altaRec_60min != undefined && infoRec.altaRec_60min != 0 ?
                        'form-control border border-success formSombra' : 'form-control'" readonly>
            </div>

            <div class="col-md-1 text-center">
              <label  class="form-label fw-bold">90 min</label>
              <input type="text"
                class="form-control" @keyup.capture="enviarDatosRecuperacion"
                v-model="infoRec.altaRec_90min"
                :class="infoRec.altaRec_90min != undefined && infoRec.altaRec_90min != 0 ?
                        'form-control border border-success formSombra' : 'form-control'" readonly>
            </div>

            <div class="col-md-1 text-center">
              <label  class="form-label fw-bold">120 min</label>
              <input type="text"
                class="form-control" @keyup.capture="enviarDatosRecuperacion"
                v-model="infoRec.altaRec_120min"
                :class="infoRec.altaRec_120min != undefined && infoRec.altaRec_120min != 0 ?
                        'form-control border border-success formSombra' : 'form-control'" readonly>
            </div>
            <div class="col-md-2"></div>    
            
            <div class="col row margen-input">
                <div class="g-3">
                    <div class="row g-3">
                      
                        <!-- Calificación de Aldrete -->
                        <div class="col-md-12">
                            <label  class="form-label fw-bold">Calificación de Aldrete</label>
                            <input
                                type="text" @keyup.capture="enviarDatosRecuperacion"
                                class="form-control"                                
                                v-model="infoRec.altaRec_CalifAldrete"
                                :class="infoRec.altaRec_CalifAldrete != undefined && infoRec.altaRec_CalifAldrete != 0 ?
                                        'form-control border border-success formSombra' : 'form-control'" readonly
                            />
                        </div>
                        
                        <!-- Nombre del Médico Anestesiólogo -->
                        <div class="col-md-12">
                            <label  class="form-label fw-bold"
                                >Nombre del Médico Anestesiólogo</label
                            >
                            <input
                                type="text" @change.passive="enviarDatosRecuperacion"
                                class="form-control"                                
                                v-model="preIdStore.NombreAnestesiologo"
                                :class="preIdStore.NombreAnestesiologo != undefined && preIdStore.NombreAnestesiologo != '' ?
                                        'form-control border border-success formSombra' : 'form-control'" readonly
                            />
                        </div>

                        <!-- Fecha de Alta -->
                        <div class="col-md-6">
                            <label  class="form-label fw-bold">Fecha de alta de recuperación</label>
                            <input
                                type="date"
                                class="form-control"
                                @click="calcularFechaAlta"
                                v-model="infoRec.altaRec_FechaAltaRec"
                                :class="infoRec.altaRec_FechaAltaRec != undefined && infoRec.altaRec_FechaAltaRec != '' ?
                                        'form-control border border-success formSombra' : 'form-control'"
                            />
                        </div>

                        <!-- Hora de la Alta de Recuperación -->
                        <div class="col-md-6">
                            <label  class="form-label fw-bold">Hora de alta de recuperación</label>
                            <input
                                type="time"
                                class="form-control"
                                @keyup.capture="enviarDatosRecuperacion"
                                v-model="infoRec.altaRec_HrAltaRec"
                                :class="infoRec.altaRec_HrAltaRec != undefined && infoRec.altaRec_HrAltaRec != '' ?
                                        'form-control border border-success formSombra' : 'form-control'"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div class="col row margen-input">
                <div class="g-3">
                    <div class="row g-3">
                        <!-- Observaciones -->
                        <div class="col-md-12">
                            <label  class="form-label fw-bold">Observaciones</label>
                            <textarea
                                class="form-control"
                                @keyup.capture="enviarDatosRecuperacion"
                                v-model="infoRec.altaRec_Obs"
                                rows="5"
                                :class="infoRec.altaRec_Obs != undefined && infoRec.altaRec_Obs != '' ?
                                        'form-control border border-success formSombra' : 'form-control'"
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>                       
            
          </form>
        </div>
      </div>
    </div>

    <!-- Modal Actividad Muscular -->
    <div
      class="modal" id="muscular-modal" tabindex="-1" aria-labelledby="" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="input-group mb-3">
            <div class="modal-body">
              <div class="col-md-12">
                <div class="row g-3">
                  <img src="../../../public/images/infografias/muscular-info.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Respiración -->
    <div
      class="modal" id="respiracion-modal" tabindex="-1" aria-labelledby="" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="input-group mb-3">
            <div class="modal-body">
              <div class="col-md-12">
                <div class="row g-3">
                  <img src="../../../public/images/infografias/respiracion-info.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Circulación -->
    <div
      class="modal" id="circulacion-modal" tabindex="-1" aria-labelledby="" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="input-group mb-3">
            <div class="modal-body">
              <div class="col-md-12">
                <div class="row g-3">
                  <img src="../../../public/images/infografias/circulacion-info.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Estado de Conciencia -->
    <div
      class="modal" id="conciencia-modal" tabindex="-1" aria-labelledby="" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="input-group mb-3">
            <div class="modal-body">
              <div class="col-md-12">
                <div class="row g-3">
                  <img src="../../../public/images/infografias/conciencia-info.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Coloración -->
    <div
      class="modal" id="coloracion-modal" tabindex="-1" aria-labelledby="" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="input-group mb-3">
            <div class="modal-body">
              <div class="col-md-12">
                <div class="row g-3">
                  <img src="../../../public/images/infografias/coloracion-info.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Bromage -->
    <div
      class="modal" id="bromage-modal" tabindex="-1" aria-labelledby="" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="input-group mb-3">
            <div class="modal-body">
              <div class="col-md-12">
                <div class="row g-3">
                  <img src="../../../public/images/infografias/bromage-info.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Model EVA -->
    <div class="modal" id="escala-EVA-modal" tabindex="-1" aria-labelledby="" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="input-group mb-3">
            <div class="modal-body">
              <div class="col-md-12">
                <div class="row g-3">
                  <img src="../../../public/images/infografias/escala-EVA-info.svg" alt="" />
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
import type { regRecuperacion } from "@/interfaces/regPostAnest";
import { defineComponent } from "vue";
import { usePostAnestStore } from "../../stores/postAnest-store";
import { usePreIdStore } from "@/stores/preId-store";
import { Tab } from 'bootstrap';

const postAnestStore = usePostAnestStore();
const preIdStore = usePreIdStore();

export default defineComponent({
  data() {
    return {
      infoRec: {} as regRecuperacion,
      postAnestStore,
      preIdStore,    
      
      btnActualizarRecuperacion: false,

      microfono: false,
      intervalId: null,
      microfonoEscucha: false,
      recognition: null,
    };
  },

  mounted: function() {
    this.infoRec.aldreteRec_MuscularIn=null
    this.infoRec.aldreteRec_Muscular15=null
    this.infoRec.aldreteRec_Muscular30=null
    this.infoRec.aldreteRec_Muscular45=null
    this.infoRec.aldreteRec_Muscular60=null
    this.infoRec.aldreteRec_Muscular90=null
    this.infoRec.aldreteRec_Muscular120=null

    this.infoRec.aldreteRec_RespiracionIn=null
    this.infoRec.aldreteRec_Respiracion15=null
    this.infoRec.aldreteRec_Respiracion30=null
    this.infoRec.aldreteRec_Respiracion45=null
    this.infoRec.aldreteRec_Respiracion60=null
    this.infoRec.aldreteRec_Respiracion90=null
    this.infoRec.aldreteRec_Respiracion120=null

    this.infoRec.aldreteRec_CirculacionIn=null
    this.infoRec.aldreteRec_Circulacion15=null
    this.infoRec.aldreteRec_Circulacion30=null
    this.infoRec.aldreteRec_Circulacion45=null
    this.infoRec.aldreteRec_Circulacion60=null
    this.infoRec.aldreteRec_Circulacion90=null
    this.infoRec.aldreteRec_Circulacion120=null

    this.infoRec.aldreteRec_ConcienciaIn=null
    this.infoRec.aldreteRec_Conciencia15=null
    this.infoRec.aldreteRec_Conciencia30=null
    this.infoRec.aldreteRec_Conciencia45=null
    this.infoRec.aldreteRec_Conciencia60=null
    this.infoRec.aldreteRec_Conciencia90=null
    this.infoRec.aldreteRec_Conciencia120=null

    this.infoRec.aldreteRec_ColoracionIn=null
    this.infoRec.aldreteRec_Coloracion15=null
    this.infoRec.aldreteRec_Coloracion30=null
    this.infoRec.aldreteRec_Coloracion45=null
    this.infoRec.aldreteRec_Coloracion60=null
    this.infoRec.aldreteRec_Coloracion90=null
    this.infoRec.aldreteRec_Coloracion120=null
  },

  methods: {
    // async empezarReconocimiento() {
    //   try {                
    //     this.recognition = new (window as any).webkitSpeechRecognition(); // Crear instancia del reconocimiento de voz
    //     this.recognition.lang = 'es-ES'; // Establecer idioma a español, puede cambiar
    //     this.recognition.continuous = true; // Permitir reconocimiento continuo
    //     this.recognition.start(); // Iniciar reconocimiento de voz
        
    //     this.microfono=true
    //     this.microfonoEscucha=true
  
    //     const tiempoEspera = 200;
  
    //     if(this.infoRec.notaEval_Obs === undefined || this.infoRec.notaEval_Obs === ''){             
    //         this.infoRec.notaEval_Obs = '';
    //     }
        
    //     // Manejar evento de resultado del reconocimiento
    //     this.recognition.onresult = (event) => {
    //         let escuchado = event.results[0][0].transcript; // Obtener texto reconocido
    //         this.infoRec.notaEval_Obs += ' ' + escuchado;
    //         console.log('Texto reconocido:', escuchado);
  
    //         // Reiniciar el temporizador si se detecta otra transcripción mientras el temporizador está en marcha
    //         if (this.intervalId !== null) {
    //             clearTimeout(this.intervalId);
    //         }
  
    //         this.intervalId = setTimeout(() => {
    //             this.recognition.stop(); // Detener reconocimiento después del tiempo especificado sin transcripciones adicionales
    //             this.microfono = false; // Cerrar micrófono después del tiempo especificado sin transcripciones adicionales
    //         }, tiempoEspera);
    //     };            
  
    //     // Manejar evento de error del reconocimiento
    //     this.recognition.onerror = (event) => {
    //         this.microfono=false
    //         window.log.error('Error en reconocimiento de voz:', event.error);
    //     };            
  
    //     // Manejar evento de fin del reconocimiento
    //     this.recognition.onend = () => {
    //         if (this.intervalId !== null) {
    //             clearTimeout(this.intervalId);
    //         }
    //         this.microfono = false;
  
    //         // Iniciar reconocimiento de voz nuevamente después de un pequeño retraso
    //         setTimeout(() => {
    //             this.recognition.start();
    //             this.microfono = true;
    //         }, 50); // Ajustar el valor del retraso según sea necesario
    //     };
    //   } catch (error) {
    //       window.log.error('Ocurrió un error:', error)
    //   }
    // },

    // async detenerReconocimiento() {
    //   try {
    //     if(this.recognition !== null){
    //       this.recognition.onend = () => {
    //           clearTimeout(this.intervalId);
    //       };
    
    //       if (this.recognition) {
    //           this.recognition.stop();
    //           clearTimeout(this.intervalId);
    //           this.microfono = false;
    //           this.microfonoEscucha=false
    //           console.log('Reconocimiento de voz detenido Recuperación.');
    //       }
    //     }                
    //   } catch (error) {
    //       window.log.error('Ocurrió un error:', error)
    //   }
    // },

    async vaciarInputsRecuperacion(){
      try {
        if(preIdStore.vaciadoPostRecup == true){
          this.infoRec.notaEval_Obs=postAnestStore.NotaUCPA
  
          this.infoRec.aldreteRec_FrecCardIn=postAnestStore.FCIngreso
          this.infoRec.aldreteRec_FrecCard15=postAnestStore.FC15Min
          this.infoRec.aldreteRec_FrecCard30=postAnestStore.FC30Min
          this.infoRec.aldreteRec_FrecCard45=postAnestStore.FC45Min
          this.infoRec.aldreteRec_FrecCard60=postAnestStore.FC60Min
          this.infoRec.aldreteRec_FrecCard90=postAnestStore.FC90Min
          this.infoRec.aldreteRec_FrecCard120=postAnestStore.FC120Min
  
          this.infoRec.aldreteRec_FrecRespIn=postAnestStore.FRIngreso
          this.infoRec.aldreteRec_FrecResp15=postAnestStore.FR15Min
          this.infoRec.aldreteRec_FrecResp30=postAnestStore.FR30Min
          this.infoRec.aldreteRec_FrecResp45=postAnestStore.FR45Min
          this.infoRec.aldreteRec_FrecResp60=postAnestStore.FR60Min
          this.infoRec.aldreteRec_FrecResp90=postAnestStore.FR90Min
          this.infoRec.aldreteRec_FrecResp120=postAnestStore.FR120Min
  
          this.infoRec.aldreteRec_TensArteIn=postAnestStore.TensionIngreso
          this.infoRec.aldreteRec_TensArte15=postAnestStore.Tension15Min
          this.infoRec.aldreteRec_TensArte30=postAnestStore.Tension30Min
          this.infoRec.aldreteRec_TensArte45=postAnestStore.Tension45Min
          this.infoRec.aldreteRec_TensArte60=postAnestStore.Tension60Min
          this.infoRec.aldreteRec_TensArte90=postAnestStore.Tension90Min
          this.infoRec.aldreteRec_TensArte120=postAnestStore.Tension120Min
  
          this.infoRec.aldreteRec_SatO2In=postAnestStore.SaturacionIngreso
          this.infoRec.aldreteRec_SatO215=postAnestStore.Saturacion15Min
          this.infoRec.aldreteRec_SatO230=postAnestStore.Saturacion30Min
          this.infoRec.aldreteRec_SatO245=postAnestStore.Saturacion45Min
          this.infoRec.aldreteRec_SatO260=postAnestStore.Saturacion60Min
          this.infoRec.aldreteRec_SatO290=postAnestStore.Saturacion90Min
          this.infoRec.aldreteRec_SatO2120=postAnestStore.Saturacion120Min

          this.infoRec.aldreteRec_MuscularIn=postAnestStore.MuscularIngreso
          this.infoRec.aldreteRec_Muscular15=postAnestStore.Muscular15Min
          this.infoRec.aldreteRec_Muscular30=postAnestStore.Muscular30Min
          this.infoRec.aldreteRec_Muscular45=postAnestStore.Muscular45Min
          this.infoRec.aldreteRec_Muscular60=postAnestStore.Muscular60Min
          this.infoRec.aldreteRec_Muscular90=postAnestStore.Muscular90Min
          this.infoRec.aldreteRec_Muscular120=postAnestStore.Muscular120Min

          this.infoRec.aldreteRec_RespiracionIn=postAnestStore.RespiracionIngreso
          this.infoRec.aldreteRec_Respiracion15=postAnestStore.Respiracion15Min
          this.infoRec.aldreteRec_Respiracion30=postAnestStore.Respiracion30Min
          this.infoRec.aldreteRec_Respiracion45=postAnestStore.Respiracion45Min
          this.infoRec.aldreteRec_Respiracion60=postAnestStore.Respiracion60Min
          this.infoRec.aldreteRec_Respiracion90=postAnestStore.Respiracion90Min
          this.infoRec.aldreteRec_Respiracion120=postAnestStore.Respiracion120Min

          this.infoRec.aldreteRec_CirculacionIn=postAnestStore.CirculacionIngreso
          this.infoRec.aldreteRec_Circulacion15=postAnestStore.Circulacion15Min
          this.infoRec.aldreteRec_Circulacion30=postAnestStore.Circulacion30Min
          this.infoRec.aldreteRec_Circulacion45=postAnestStore.Circulacion45Min
          this.infoRec.aldreteRec_Circulacion60=postAnestStore.Circulacion60Min
          this.infoRec.aldreteRec_Circulacion90=postAnestStore.Circulacion90Min
          this.infoRec.aldreteRec_Circulacion120=postAnestStore.Circulacion120Min

          this.infoRec.aldreteRec_ConcienciaIn=postAnestStore.ConcienciaIngreso
          this.infoRec.aldreteRec_Conciencia15=postAnestStore.Conciencia15Min
          this.infoRec.aldreteRec_Conciencia30=postAnestStore.Conciencia30Min
          this.infoRec.aldreteRec_Conciencia45=postAnestStore.Conciencia45Min
          this.infoRec.aldreteRec_Conciencia60=postAnestStore.Conciencia60Min
          this.infoRec.aldreteRec_Conciencia90=postAnestStore.Conciencia90Min
          this.infoRec.aldreteRec_Conciencia120=postAnestStore.Conciencia120Min

          this.infoRec.aldreteRec_ColoracionIn=postAnestStore.ColoracionIngreso
          this.infoRec.aldreteRec_Coloracion15=postAnestStore.Coloracion15Min
          this.infoRec.aldreteRec_Coloracion30=postAnestStore.Coloracion30Min
          this.infoRec.aldreteRec_Coloracion45=postAnestStore.Coloracion45Min
          this.infoRec.aldreteRec_Coloracion60=postAnestStore.Coloracion60Min
          this.infoRec.aldreteRec_Coloracion90=postAnestStore.Coloracion90Min
          this.infoRec.aldreteRec_Coloracion120=postAnestStore.Coloracion120Min
  
          // this.infoRec.aldreteRec_AldreteIn=postAnestStore.AldreteIngreso
          // this.infoRec.aldreteRec_Aldrete15=postAnestStore.Aldrete15Min
          // this.infoRec.aldreteRec_Aldrete30=postAnestStore.Aldrete30Min
          // this.infoRec.aldreteRec_Aldrete45=postAnestStore.Aldrete45Min
          // this.infoRec.aldreteRec_Aldrete60=postAnestStore.Aldrete60Min
          // this.infoRec.aldreteRec_Aldrete90=postAnestStore.Aldrete90Min
          // this.infoRec.aldreteRec_Aldrete120=postAnestStore.Aldrete120Min
  
          this.infoRec.aldreteRec_BromageIn=postAnestStore.BromageIngreso
          this.infoRec.aldreteRec_Bromage15=postAnestStore.Bromage15Min
          this.infoRec.aldreteRec_Bromage30=postAnestStore.Bromage30Min
          this.infoRec.aldreteRec_Bromage45=postAnestStore.Bromage45Min
          this.infoRec.aldreteRec_Bromage60=postAnestStore.Bromage60Min
          this.infoRec.aldreteRec_Bromage90=postAnestStore.Bromage90Min
          this.infoRec.aldreteRec_Bromage120=postAnestStore.Bromage120Min
  
          this.infoRec.aldreteRec_NauseasIn=postAnestStore.NauseaIngreso
          this.infoRec.aldreteRec_Nauseas15=postAnestStore.Nausea15Min
          this.infoRec.aldreteRec_Nauseas30=postAnestStore.Nausea30Min
          this.infoRec.aldreteRec_Nauseas45=postAnestStore.Nausea45Min
          this.infoRec.aldreteRec_Nauseas60=postAnestStore.Nausea60Min
          this.infoRec.aldreteRec_Nauseas90=postAnestStore.Nausea90Min
          this.infoRec.aldreteRec_Nauseas120=postAnestStore.Nausea120Min
  
          this.infoRec.aldreteRec_escEVADolIn=postAnestStore.EscalaEVAIngreso
          this.infoRec.aldreteRec_escEVADol15=postAnestStore.EscalaEVA15Min
          this.infoRec.aldreteRec_escEVADol30=postAnestStore.EscabaEVA30Min
          this.infoRec.aldreteRec_escEVADol45=postAnestStore.EscalaEVA45Min
          this.infoRec.aldreteRec_escEVADol60=postAnestStore.EscalaEVA60Min
          this.infoRec.aldreteRec_escEVADol90=postAnestStore.EscalaEVA90Min
          this.infoRec.aldreteRec_escEVADol120=postAnestStore.EscalaEVA120Min
  
          this.infoRec.altaRec_0min=postAnestStore.AldreteFinal0Min
          this.infoRec.altaRec_15min=postAnestStore.AldreteFinal15Min
          this.infoRec.altaRec_30min=postAnestStore.AldreteFinal30Min
          this.infoRec.altaRec_45min=postAnestStore.AldreteFinal45Min
          this.infoRec.altaRec_60min=postAnestStore.AldreteFinal60Min
          this.infoRec.altaRec_90min=postAnestStore.AldreteFinal90Min
          this.infoRec.altaRec_120min=postAnestStore.AldreteFinal120Min
  
          this.infoRec.altaRec_CalifAldrete=postAnestStore.CalificacionAldrete
          this.infoRec.altaRec_Obs=postAnestStore.ObservacionesAlta
          this.infoRec.altaRec_FechaAltaRec=postAnestStore.FechaAlta
          this.infoRec.altaRec_HrAltaRec=postAnestStore.HoraAlta
  
          preIdStore.vaciadoPostRecup = false
        }         
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async volverPestana(){
      try {
        if(preIdStore.volverPostRecuperacion === true){
            const tabPostRecup = document.getElementById('nota-evaluacion');
            const tabObj = new Tab(tabPostRecup);
            tabObj.show();
            
            preIdStore.volverPostRecuperacion = false;
        }         
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async guardarDatosRecuperacion(){
      try {
        if(preIdStore.nuevoRegistroPaciente == false){
            if(preIdStore.actualizarRegRecuperacion == false ){
                // Guardar datos                    
                postAnestStore.saveRecupera(this.infoRec, preIdStore.pacienteID._id, preIdStore.pacienteCxID._id);
                preIdStore.actualizarRegRecuperacion = true
            }else if(preIdStore.actualizarRegRecuperacion == true){
                // Actualizar datos
                postAnestStore.updateRecupera(this.infoRec, preIdStore.pacienteID._id)
            }

        }else if(preIdStore.nuevoRegistroPaciente == true){
            if(preIdStore.actualizarRegRecuperacion == false ){
                // Guardar nuevos datos                                        
                postAnestStore.saveNuevoRecupera(this.infoRec, preIdStore.pacienteID.pid, preIdStore.pacienteID._id)
                preIdStore.actualizarRegRecuperacion = true
            }else if(preIdStore.actualizarRegRecuperacion == true){
                // Actualizar nuevos datos
                postAnestStore.updateNuevoRecupera(this.infoRec, preIdStore.pacienteID.pid, preIdStore.cirugiaID)
            }

        }        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async obtenerAldrete(){
      try {
        this.infoRec.altaRec_0min = Number(this.infoRec.aldreteRec_MuscularIn)+Number(this.infoRec.aldreteRec_RespiracionIn)+Number(this.infoRec.aldreteRec_CirculacionIn)+
                                    Number(this.infoRec.aldreteRec_ConcienciaIn)+Number(this.infoRec.aldreteRec_ColoracionIn);
        this.infoRec.altaRec_15min = Number(this.infoRec.aldreteRec_Muscular15)+Number(this.infoRec.aldreteRec_Respiracion15)+Number(this.infoRec.aldreteRec_Circulacion15)+
                                    Number(this.infoRec.aldreteRec_Conciencia15)+Number(this.infoRec.aldreteRec_Coloracion15);
        this.infoRec.altaRec_30min = Number(this.infoRec.aldreteRec_Muscular30)+Number(this.infoRec.aldreteRec_Respiracion30)+Number(this.infoRec.aldreteRec_Circulacion30)+
                                    Number(this.infoRec.aldreteRec_Conciencia30)+Number(this.infoRec.aldreteRec_Coloracion30);
        this.infoRec.altaRec_45min = Number(this.infoRec.aldreteRec_Muscular45)+Number(this.infoRec.aldreteRec_Respiracion45)+Number(this.infoRec.aldreteRec_Circulacion45)+
                                    Number(this.infoRec.aldreteRec_Conciencia45)+Number(this.infoRec.aldreteRec_Coloracion45);
        this.infoRec.altaRec_60min = Number(this.infoRec.aldreteRec_Muscular60)+Number(this.infoRec.aldreteRec_Respiracion60)+Number(this.infoRec.aldreteRec_Circulacion60)+
                                    Number(this.infoRec.aldreteRec_Conciencia60)+Number(this.infoRec.aldreteRec_Coloracion60);
        this.infoRec.altaRec_90min = Number(this.infoRec.aldreteRec_Muscular90)+Number(this.infoRec.aldreteRec_Respiracion90)+Number(this.infoRec.aldreteRec_Circulacion90)+
                                    Number(this.infoRec.aldreteRec_Conciencia90)+Number(this.infoRec.aldreteRec_Coloracion90);
        this.infoRec.altaRec_120min = Number(this.infoRec.aldreteRec_Muscular120)+Number(this.infoRec.aldreteRec_Respiracion120)+Number(this.infoRec.aldreteRec_Circulacion120)+
                                    Number(this.infoRec.aldreteRec_Conciencia120)+Number(this.infoRec.aldreteRec_Coloracion120);
  
        const arrayFinalAldrete= [this.infoRec.altaRec_0min, this.infoRec.altaRec_15min, this.infoRec.altaRec_30min, this.infoRec.altaRec_45min,
                                this.infoRec.altaRec_60min, this.infoRec.altaRec_90min, this.infoRec.altaRec_120min]
                                
        let valorFinalAldrete = null;
  
        for (let i = arrayFinalAldrete.length - 1; i >= 0; i--) {
          if (arrayFinalAldrete[i] !== undefined && arrayFinalAldrete[i] !== 0) {
            valorFinalAldrete = arrayFinalAldrete[i];
            break;
          }
        }
  
        this.infoRec.altaRec_CalifAldrete = valorFinalAldrete;
  
        this.enviarDatosRecuperacion();        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    async enviarDatosRecuperacion(){
      try {
        this.$emit('recibe-datos-recuperacion', postAnestStore.NotaUCPA=this.infoRec.notaEval_Obs,
        
                                                postAnestStore.FCIngreso=this.infoRec.aldreteRec_FrecCardIn,
                                                postAnestStore.FC15Min=this.infoRec.aldreteRec_FrecCard15,
                                                postAnestStore.FC30Min=this.infoRec.aldreteRec_FrecCard30,
                                                postAnestStore.FC45Min=this.infoRec.aldreteRec_FrecCard45,
                                                postAnestStore.FC60Min=this.infoRec.aldreteRec_FrecCard60,
                                                postAnestStore.FC90Min=this.infoRec.aldreteRec_FrecCard90,
                                                postAnestStore.FC120Min=this.infoRec.aldreteRec_FrecCard120,
  
                                                postAnestStore.FRIngreso=this.infoRec.aldreteRec_FrecRespIn,
                                                postAnestStore.FR15Min=this.infoRec.aldreteRec_FrecResp15,
                                                postAnestStore.FR30Min=this.infoRec.aldreteRec_FrecResp30,
                                                postAnestStore.FR45Min=this.infoRec.aldreteRec_FrecResp45,
                                                postAnestStore.FR60Min=this.infoRec.aldreteRec_FrecResp60,
                                                postAnestStore.FR90Min=this.infoRec.aldreteRec_FrecResp90,
                                                postAnestStore.FR120Min=this.infoRec.aldreteRec_FrecResp120,
  
                                                postAnestStore.TensionIngreso=this.infoRec.aldreteRec_TensArteIn,
                                                postAnestStore.Tension15Min=this.infoRec.aldreteRec_TensArte15,
                                                postAnestStore.Tension30Min=this.infoRec.aldreteRec_TensArte30,
                                                postAnestStore.Tension45Min=this.infoRec.aldreteRec_TensArte45,
                                                postAnestStore.Tension60Min=this.infoRec.aldreteRec_TensArte60,
                                                postAnestStore.Tension90Min=this.infoRec.aldreteRec_TensArte90,
                                                postAnestStore.Tension120Min=this.infoRec.aldreteRec_TensArte120,
  
                                                postAnestStore.SaturacionIngreso=this.infoRec.aldreteRec_SatO2In,
                                                postAnestStore.Saturacion15Min=this.infoRec.aldreteRec_SatO215,
                                                postAnestStore.Saturacion30Min=this.infoRec.aldreteRec_SatO230,
                                                postAnestStore.Saturacion45Min=this.infoRec.aldreteRec_SatO245,
                                                postAnestStore.Saturacion60Min=this.infoRec.aldreteRec_SatO260,
                                                postAnestStore.Saturacion90Min=this.infoRec.aldreteRec_SatO290,
                                                postAnestStore.Saturacion120Min=this.infoRec.aldreteRec_SatO2120,

                                                postAnestStore.MuscularIngreso=this.infoRec.aldreteRec_MuscularIn,
                                                postAnestStore.Muscular15Min=this.infoRec.aldreteRec_Muscular15,
                                                postAnestStore.Muscular30Min=this.infoRec.aldreteRec_Muscular30,
                                                postAnestStore.Muscular45Min=this.infoRec.aldreteRec_Muscular45,
                                                postAnestStore.Muscular60Min=this.infoRec.aldreteRec_Muscular60,
                                                postAnestStore.Muscular90Min=this.infoRec.aldreteRec_Muscular90,
                                                postAnestStore.Muscular120Min=this.infoRec.aldreteRec_Muscular120,

                                                postAnestStore.RespiracionIngreso=this.infoRec.aldreteRec_RespiracionIn,
                                                postAnestStore.Respiracion15Min=this.infoRec.aldreteRec_Respiracion15,
                                                postAnestStore.Respiracion30Min=this.infoRec.aldreteRec_Respiracion30,
                                                postAnestStore.Respiracion45Min=this.infoRec.aldreteRec_Respiracion45,
                                                postAnestStore.Respiracion60Min=this.infoRec.aldreteRec_Respiracion60,
                                                postAnestStore.Respiracion90Min=this.infoRec.aldreteRec_Respiracion90,
                                                postAnestStore.Respiracion120Min=this.infoRec.aldreteRec_Respiracion120,

                                                postAnestStore.CirculacionIngreso=this.infoRec.aldreteRec_CirculacionIn,
                                                postAnestStore.Circulacion15Min=this.infoRec.aldreteRec_Circulacion15,
                                                postAnestStore.Circulacion30Min=this.infoRec.aldreteRec_Circulacion30,
                                                postAnestStore.Circulacion45Min=this.infoRec.aldreteRec_Circulacion45,
                                                postAnestStore.Circulacion60Min=this.infoRec.aldreteRec_Circulacion60,
                                                postAnestStore.Circulacion90Min=this.infoRec.aldreteRec_Circulacion90,
                                                postAnestStore.Circulacion120Min=this.infoRec.aldreteRec_Circulacion120,

                                                postAnestStore.ConcienciaIngreso=this.infoRec.aldreteRec_ConcienciaIn,
                                                postAnestStore.Conciencia15Min=this.infoRec.aldreteRec_Conciencia15,
                                                postAnestStore.Conciencia30Min=this.infoRec.aldreteRec_Conciencia30,
                                                postAnestStore.Conciencia45Min=this.infoRec.aldreteRec_Conciencia45,
                                                postAnestStore.Conciencia60Min=this.infoRec.aldreteRec_Conciencia60,
                                                postAnestStore.Conciencia90Min=this.infoRec.aldreteRec_Conciencia90,
                                                postAnestStore.Conciencia120Min=this.infoRec.aldreteRec_Conciencia120,

                                                postAnestStore.ColoracionIngreso=this.infoRec.aldreteRec_ColoracionIn,
                                                postAnestStore.Coloracion15Min=this.infoRec.aldreteRec_Coloracion15,
                                                postAnestStore.Coloracion30Min=this.infoRec.aldreteRec_Coloracion30,
                                                postAnestStore.Coloracion45Min=this.infoRec.aldreteRec_Coloracion45,
                                                postAnestStore.Coloracion60Min=this.infoRec.aldreteRec_Coloracion60,
                                                postAnestStore.Coloracion90Min=this.infoRec.aldreteRec_Coloracion90,
                                                postAnestStore.Coloracion120Min=this.infoRec.aldreteRec_Coloracion120,

                                                // postAnestStore.AldreteIngreso=this.infoRec.aldreteRec_AldreteIn,
                                                // postAnestStore.Aldrete15Min=this.infoRec.aldreteRec_Aldrete15,
                                                // postAnestStore.Aldrete30Min=this.infoRec.aldreteRec_Aldrete30,
                                                // postAnestStore.Aldrete45Min=this.infoRec.aldreteRec_Aldrete45,
                                                // postAnestStore.Aldrete60Min=this.infoRec.aldreteRec_Aldrete60,
                                                // postAnestStore.Aldrete90Min=this.infoRec.aldreteRec_Aldrete90,
                                                // postAnestStore.Aldrete120Min=this.infoRec.aldreteRec_Aldrete120,
  
                                                postAnestStore.BromageIngreso=this.infoRec.aldreteRec_BromageIn,
                                                postAnestStore.Bromage15Min=this.infoRec.aldreteRec_Bromage15,
                                                postAnestStore.Bromage30Min=this.infoRec.aldreteRec_Bromage30,
                                                postAnestStore.Bromage45Min=this.infoRec.aldreteRec_Bromage45,
                                                postAnestStore.Bromage60Min=this.infoRec.aldreteRec_Bromage60,
                                                postAnestStore.Bromage90Min=this.infoRec.aldreteRec_Bromage90,
                                                postAnestStore.Bromage120Min=this.infoRec.aldreteRec_Bromage120,
  
                                                postAnestStore.NauseaIngreso=this.infoRec.aldreteRec_NauseasIn,
                                                postAnestStore.Nausea15Min=this.infoRec.aldreteRec_Nauseas15,
                                                postAnestStore.Nausea30Min=this.infoRec.aldreteRec_Nauseas30,
                                                postAnestStore.Nausea45Min=this.infoRec.aldreteRec_Nauseas45,
                                                postAnestStore.Nausea60Min=this.infoRec.aldreteRec_Nauseas60,
                                                postAnestStore.Nausea90Min=this.infoRec.aldreteRec_Nauseas90,
                                                postAnestStore.Nausea120Min=this.infoRec.aldreteRec_Nauseas120,
  
                                                postAnestStore.EscalaEVAIngreso=this.infoRec.aldreteRec_escEVADolIn,
                                                postAnestStore.EscalaEVA15Min=this.infoRec.aldreteRec_escEVADol15,
                                                postAnestStore.EscabaEVA30Min=this.infoRec.aldreteRec_escEVADol30,
                                                postAnestStore.EscalaEVA45Min=this.infoRec.aldreteRec_escEVADol45,
                                                postAnestStore.EscalaEVA60Min=this.infoRec.aldreteRec_escEVADol60,
                                                postAnestStore.EscalaEVA90Min=this.infoRec.aldreteRec_escEVADol90,
                                                postAnestStore.EscalaEVA120Min=this.infoRec.aldreteRec_escEVADol120,
  
                                                postAnestStore.AldreteFinal0Min=this.infoRec.altaRec_0min,
                                                postAnestStore.AldreteFinal15Min=this.infoRec.altaRec_15min,
                                                postAnestStore.AldreteFinal30Min=this.infoRec.altaRec_30min,
                                                postAnestStore.AldreteFinal45Min=this.infoRec.altaRec_45min,
                                                postAnestStore.AldreteFinal60Min=this.infoRec.altaRec_60min,
                                                postAnestStore.AldreteFinal90Min=this.infoRec.altaRec_90min,
                                                postAnestStore.AldreteFinal120Min=this.infoRec.altaRec_120min,
  
                                                postAnestStore.CalificacionAldrete=this.infoRec.altaRec_CalifAldrete,
                                                postAnestStore.ObservacionesAlta=this.infoRec.altaRec_Obs,
                                                postAnestStore.NombreAnestesiologo=preIdStore.NombreAnestesiologo,
                                                postAnestStore.FechaAlta=this.infoRec.altaRec_FechaAltaRec,
                                                postAnestStore.HoraAlta=this.infoRec.altaRec_HrAltaRec,)        
      } catch (error) {
        window.log.error('Ocurrió un error:', error);
      }
    },

    calcularFechaAlta(){
        try {
            let fecha = new Date();
            let año = fecha.getFullYear();
            let mes = String(fecha.getMonth() + 1).padStart(2, '0');
            let dia = String(fecha.getDate()).padStart(2, '0');
            this.infoRec.altaRec_FechaAltaRec = `${año}-${mes}-${dia}`;

            this.enviarDatosRecuperacion();        
        } catch (error) {
            window.log.error('Ocurrió un error:', error);
        }     
    }
  },
});
</script>

<style scoped>
h5 {
  color: #002d60;
  margin-bottom: 10px;
}
.color-texto {
  color: #002d60;
}
.bordePrincipal {
  border-radius: 5px;
  padding: 1rem;
  margin-top: 10px;
  backdrop-filter: blur(40px) brightness(97%);
}
.formSombra:focus {
  border-color: #6bd99b;
  outline: 0;
  -webkit-box-shadow: 0 0 8px #6bd99b;
  box-shadow: 0 0 8px #6bd99b;
}
.border-success {
  --bs-border-opacity: 1;
  border-color: #6bd99b !important;
}
.btn-guardar-info {
  --bs-btn-bg: none;
  --bs-btn-color: #e88300;
  --bs-btn-border-color: #e88300;
  --bs-btn-hover-bg: #e88300;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-border-color: #e88300;
  --bs-btn-active-bg: #e88300;
  --bs-btn-active-color: #ffffff;
  --bs-btn-active-border-color: #e88300;
  width: 150px;
}
.btn-nav-bar {
  --bs-btn-bg: #fff;
  --bs-btn-color: #002d60;
  --bs-btn-border-color: #fff;
  --bs-btn-hover-bg: #a0a6b2;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-border-color: #a0a6b2;
  --bs-btn-active-bg: #a0a6b2;
  --bs-btn-active-color: #fff;
  --bs-btn-active-border-color: #a0a6b2;
  height: auto;
}
.centrar-li {
  justify-content: center;
}

.formSombra:focus {
  border-color: #6bd99b;
  outline: 0;
  -webkit-box-shadow: 0 0 8px #6bd99b;
  box-shadow: 0 0 8px #6bd99b;
}
.border-success {
  --bs-border-opacity: 1;
  border-color: #6bd99b !important;
}
.alinear-btn {
  text-align: end;
}

#aldrete-tabla tbody tr > td {
  border: 1px;
  height: 10px;
  padding-left: 1px;
}
#aldrete-tabla {
  padding-left: 10px;
  margin-top: 20px;
}
.espacio {
  height: 55px;
}

.table > :not(caption) > * > * {
  padding: 0.5rem 0.5rem;
  background-color: white;
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}
.color-td {
  background-color: #eef1f4 !important;
}
span {
  cursor: pointer;
}
.modal-dialog,
.modal-content {
  height: 25%;
}
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--bs-modal-color);
  pointer-events: auto;
  background-color: transparent;
  background-clip: padding-box;
  border: none;
  border-radius: var(--bs-modal-border-radius);
  outline: 0;
}

.margen-input{
    margin-top: 25px;
}
.microfono-off-rec{
    text-align: right;
    cursor: pointer;
}

.microfono-on-rec{
    text-align: right;
    cursor: pointer;
    color: #E88300;
}
</style>
