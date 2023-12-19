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
          <form @submit.prevent="" class="row g-3">
            <h5 class="fw-bold">NOTA DE EVALUACIÓN UCPA</h5>

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
              <tr class="espacio">
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
                :class="infoRec.altaRec_0min != undefined && infoRec.altaRec_0min != '' ?
                        'form-control border border-success formSombra' : 'form-control'" readonly
                        >
            </div>

            <div class="col-md-1 text-center">
              <label  class="form-label fw-bold">15 min</label>
              <input type="text"
                class="form-control" @keyup.capture="enviarDatosRecuperacion"
                v-model="infoRec.altaRec_15min"
                :class="infoRec.altaRec_15min != undefined && infoRec.altaRec_15min != '' ?
                        'form-control border border-success formSombra' : 'form-control'" readonly>
            </div>

            <div class="col-md-1 text-center">
              <label  class="form-label fw-bold">30 min</label>
              <input type="text"
                class="form-control" @keyup.capture="enviarDatosRecuperacion"
                v-model="infoRec.altaRec_30min"
                :class="infoRec.altaRec_30min != undefined && infoRec.altaRec_30min != '' ?
                        'form-control border border-success formSombra' : 'form-control'" readonly>
            </div>

            <div class="col-md-1 text-center">
              <label  class="form-label fw-bold">45 min</label>
              <input type="text"
                class="form-control" @keyup.capture="enviarDatosRecuperacion"
                v-model="infoRec.altaRec_45min"
                :class="infoRec.altaRec_45min != undefined && infoRec.altaRec_45min != '' ?
                        'form-control border border-success formSombra' : 'form-control'" readonly>
            </div>

            <div class="col-md-1 text-center">
              <label  class="form-label fw-bold">60 min</label>
              <input type="text"
                class="form-control" @keyup.capture="enviarDatosRecuperacion"
                v-model="infoRec.altaRec_60min"
                :class="infoRec.altaRec_60min != undefined && infoRec.altaRec_60min != '' ?
                        'form-control border border-success formSombra' : 'form-control'" readonly>
            </div>

            <div class="col-md-1 text-center">
              <label  class="form-label fw-bold">90 min</label>
              <input type="text"
                class="form-control" @keyup.capture="enviarDatosRecuperacion"
                v-model="infoRec.altaRec_90min"
                :class="infoRec.altaRec_90min != undefined && infoRec.altaRec_90min != '' ?
                        'form-control border border-success formSombra' : 'form-control'" readonly>
            </div>

            <div class="col-md-1 text-center">
              <label  class="form-label fw-bold">120 min</label>
              <input type="text"
                class="form-control" @keyup.capture="enviarDatosRecuperacion"
                v-model="infoRec.altaRec_120min"
                :class="infoRec.altaRec_120min != undefined && infoRec.altaRec_120min != '' ?
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
                                :class="infoRec.altaRec_CalifAldrete != undefined && infoRec.altaRec_CalifAldrete != '' ?
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
                                        'form-control border border-success formSombra' : 'form-control'"
                            />
                        </div>

                        <!-- Fecha de Alta -->
                        <div class="col-md-6">
                            <label  class="form-label fw-bold">Fecha de alta de recuperación</label>
                            <input
                                type="date"
                                class="form-control"
                                @keyup.capture="enviarDatosRecuperacion"
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

    <div
      class="modal"
      id="bromage-modal"
      tabindex="-1"
      aria-labelledby=""
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="input-group mb-3">
            <div class="modal-body">
              <div class="col-md-12">
                <div class="row g-3">
                  <img src="../../../public/images/bromage-info.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal"
      id="escala-EVA-modal"
      tabindex="-1"
      aria-labelledby=""
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="input-group mb-3">
            <div class="modal-body">
              <div class="col-md-12">
                <div class="row g-3">
                  <img src="../../../public/images/escala-EVA-info.svg" alt="" />
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
    };
  },

  methods: {
    async vaciarInputsRecuperacion(){
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

        this.infoRec.aldreteRec_AldreteIn=postAnestStore.AldreteIngreso
        this.infoRec.aldreteRec_Aldrete15=postAnestStore.Aldrete15Min
        this.infoRec.aldreteRec_Aldrete30=postAnestStore.Aldrete30Min
        this.infoRec.aldreteRec_Aldrete45=postAnestStore.Aldrete45Min
        this.infoRec.aldreteRec_Aldrete60=postAnestStore.Aldrete60Min
        this.infoRec.aldreteRec_Aldrete90=postAnestStore.Aldrete90Min
        this.infoRec.aldreteRec_Aldrete120=postAnestStore.Aldrete120Min

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
        // preIdStore.NombreAnestesiologo=postAnestStore.NombreAnestesiologo
        this.infoRec.altaRec_FechaAltaRec=postAnestStore.FechaAlta
        this.infoRec.altaRec_HrAltaRec=postAnestStore.HoraAlta

        preIdStore.vaciadoPostRecup = false
      } 
    },

    async volverPestana(){
      if(preIdStore.volverPostRecuperacion === true){
          const tabPostRecup = document.getElementById('nota-evaluacion');
          const tabObj = new Tab(tabPostRecup);
          tabObj.show();
          
          preIdStore.volverPostRecuperacion = false;
      } 
    },

    async guardarDatosRecuperacion(){
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
    },

    obtenerAldrete(){
      this.infoRec.altaRec_0min = this.infoRec.aldreteRec_AldreteIn;
      this.infoRec.altaRec_15min = this.infoRec.aldreteRec_Aldrete15;
      this.infoRec.altaRec_30min = this.infoRec.aldreteRec_Aldrete30;
      this.infoRec.altaRec_45min = this.infoRec.aldreteRec_Aldrete45;
      this.infoRec.altaRec_60min = this.infoRec.aldreteRec_Aldrete60;
      this.infoRec.altaRec_90min = this.infoRec.aldreteRec_Aldrete90;
      this.infoRec.altaRec_120min = this.infoRec.aldreteRec_Aldrete120;

      const arrayFinalAldrete= [this.infoRec.aldreteRec_AldreteIn, 
                              this.infoRec.aldreteRec_Aldrete15, 
                              this.infoRec.aldreteRec_Aldrete30,
                              this.infoRec.aldreteRec_Aldrete45,
                              this.infoRec.aldreteRec_Aldrete60,
                              this.infoRec.aldreteRec_Aldrete90,
                              this.infoRec.aldreteRec_Aldrete120]
                              
      let valorFinalAldrete = "";

      for (let i = arrayFinalAldrete.length - 1; i >= 0; i--) {
        if (arrayFinalAldrete[i] !== undefined && arrayFinalAldrete[i] !== "") {
          valorFinalAldrete = arrayFinalAldrete[i];
          break;
        }
      }

      this.infoRec.altaRec_CalifAldrete = valorFinalAldrete;

      this.enviarDatosRecuperacion();
    },

    enviarDatosRecuperacion(){
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

                                              postAnestStore.AldreteIngreso=this.infoRec.aldreteRec_AldreteIn,
                                              postAnestStore.Aldrete15Min=this.infoRec.aldreteRec_Aldrete15,
                                              postAnestStore.Aldrete30Min=this.infoRec.aldreteRec_Aldrete30,
                                              postAnestStore.Aldrete45Min=this.infoRec.aldreteRec_Aldrete45,
                                              postAnestStore.Aldrete60Min=this.infoRec.aldreteRec_Aldrete60,
                                              postAnestStore.Aldrete90Min=this.infoRec.aldreteRec_Aldrete90,
                                              postAnestStore.Aldrete120Min=this.infoRec.aldreteRec_Aldrete120,

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
</style>
