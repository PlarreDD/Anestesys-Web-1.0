<template>
    <div>
        <ul class="nav nav-pills mb-3 text-center centrar-li" id="">
            <!-- Información -->
            <li class="nav-item col-md-3">
                <button class="btn btn-nav-bar fw-bold active"
                        id="plan"
                        data-bs-toggle="pill"
                        data-bs-target="#informacion"
                        type="button"
                        aria-selected="true"
                        data-title="Información del paciente, cirugía y médicos"> INFORMACIÓN </button>
            </li>

            <!-- Datos Demográficos -->
            <li class="nav-item col-md-2" >
                <button class="btn btn-nav-bar fw-bold"
                        id="plan"
                        data-bs-toggle="pill"
                        data-bs-target="#demograficos"
                        type="button"
                        aria-selected="false"
                        data-title="Datos demográficos del paciente"> DATOS DEMOGRÁFICOS </button>
            </li>
        </ul>

        <div class="tab-content col-md-12" id="">
            <!-- Información del paciente -->
            <div class="tab-pane fade show active" id="informacion">
                <div class="col-12 borderPrincipal" :class="preIdStore.VistaRapida == true ? '' : 'mb-5'">  
                    <form @submit.prevent="obtenerDatos" class="row g-3 mt-1">
                        <!-- Número de Expediente -->
                        <div class="col-md-4">
                            <label class="form-label fw-bold"> Número de Expediente 
                                <span class="text-danger">* </span>
                                <span data-title="Llene el campo para navegar por la aplicación">
                                    <font-awesome-icon icon="fa-solid fa-circle-question"/>
                                </span>
                            </label>

                            <input type="text"
                                   @keyup.capture="enviarDatos"
                                   v-model="infoPreIdPaciente.numExped"
                                   id="numExpediente"
                                   class="form-control"
                                   :class="{ 'form-control border border-danger': propRojoNum,
                                             'form-control border border-success formSombra': propVerdeNum }"
                                   placeholder="Campo obligatorio"
                                   :disabled="propBtnGuardarId != true">
                            <div :class="propNumExp == true ? 'visible validaCampo' : 'invisible'"
                                 id="validaNumExp"> Escriba el número de expediente </div>
                        </div>

                        <!-- Nombre del Paciente -->
                        <div class="col-md-6">
                            <label class="form-label fw-bold"> Nombre del Paciente 
                                <span class="text-danger">* </span> 
                                <span data-title="Llene el campo para navegar por la aplicación">
                                    <font-awesome-icon icon="fa-solid fa-circle-question"/>
                                </span>

                            </label>
                            
                            <input class="form-control" 
                                   type="text" 
                                   @keyup.capture="enviarDatos"
                                   v-model="infoPreIdPaciente.nomPaciente"
                                   id="nombrePaciente" 
                                   :class="{ 'form-control border border-danger': propRojoNom,
                                             'form-control border border-success formSombra': propVerdeNom }"
                                   placeholder="Campo obligatorio">
                            <div :class="propNomPac == true ? 'visible validaCampo' : 'invisible'"
                                 id="validaNomPac"> Escriba el nombre del paciente </div>
                        </div>

                        <!-- Botón Guardar/Actualizar -->
                        <div class="col-md-1 margen-btn-info">
                            <button data-bs-toggle="tab" 
                                    type="submit"
                                    class="btn btn-guardar-info fw-bold"
                                    :class="propBtnGuardarId == true ? 'visible' : 'invisible'"
                                    @click="preIdStore.createAddPreId( infoPreIdPaciente )"> GUARDAR </button>                                
                            
                            <button data-bs-toggle="tab" 
                                    type="submit"
                                    class="btn btn-guardar-info fw-bold"
                                    :class="propBtnActualizarId == true ? 'visible' : 'invisible'"
                                    @click="preIdStore.updateAddPreId( infoPreIdPaciente )"> ACTUALIZAR </button>
                        </div>

                        <!-- Fecha de Nacimiento -->
                        <div class="col-md-3">
                            <label class="form-label fw-bold"> Fecha de Nacimiento </label>
                            <input type="date"
                                   class="form-control"
                                   @change="calcularEdad"
                                   v-model="infoPreIdPaciente.fechaNac"
                                   :class="infoPreIdPaciente.fechaNac != undefined && infoPreIdPaciente.fechaNac != '' ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <!-- Edad -->
                        <div class="col-md-1"></div>
                        <div class="col-md-2">
                            <label class="form-label fw-bold"> Edad </label>
                            <input type="text" readonly
                                   class="form-control"
                                   @change="enviarDatos"
                                   v-model="infoPreIdPaciente.edadPaciente"
                                   :class="infoPreIdPaciente.edadPaciente != undefined && infoPreIdPaciente.edadPaciente != 0 ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <!-- Género -->
                        <div class="col-md-1"></div>
                        <div class="col-md-3">
                            <label class="form-label col-12 fw-bold"> Género</label>
                            <input type="radio"
                                   class="btn-check"
                                   name="genero"
                                   id="masculino"
                                   autocomplete="off"
                                   value="Masculino"
                                   @change="enviarDatos"
                                   v-model="infoPreIdPaciente.genero">
                            <label class="btn btn-radio margenRadio"
                                   for="masculino"> Masculino </label>

                            <input type="radio"
                                   class="btn-check"
                                   name="genero"
                                   id="femenino"
                                   autocomplete="off"
                                   value="Femenino"
                                   @change="enviarDatos"
                                   v-model="infoPreIdPaciente.genero">
                            <label class="btn btn-radio"
                                   for="femenino"> Femenino </label>
                        </div>

                        <hr /> <!-- Separación datos de Cirugía -->
        
                        <div class="row g-3 mt-1">
                            <!-- Número de Episodio -->
                            <div class="col-md-3">
                                <label class="form-label fw-bold"> Núm de episodio
                                </label>

                                <input type="text" @keyup.capture="enviarDatos"
                                       class="form-control"
                                       v-model="infoPreIdPaciente.numEpisodio"
                                       :class="infoPreIdPaciente.numEpisodio != undefined && infoPreIdPaciente.numEpisodio != '' ?
                                          'form-control border border-success formSombra' : 'form-control'">
                            </div>

                            <div class="col-md-1"></div>
                            <!-- Habitación -->
                            <div class="col-md-2">
                                <label class="form-label fw-bold"> Habitación </label>
                                <input type="number" @keyup.capture="enviarDatos"
                                       class="form-control"
                                       v-model="infoPreIdPaciente.habitacion"
                                       :class="infoPreIdPaciente.habitacion != undefined && infoPreIdPaciente.habitacion != '' ?
                                              'form-control border border-success formSombra' : 'form-control'">
                            </div>
                            <div class="col-md-1"></div>

                            <!-- Fecha de Ingreso -->
                            <div class="col-md-3">
                                <label class="form-label fw-bold"> Fecha de Ingreso </label>
                                <input type="date" @click="calcularFechaIngreso"
                                       class="form-control"
                                       v-model="infoPreIdPaciente.fechaIn"
                                       :class="infoPreIdPaciente.fechaIn != undefined && infoPreIdPaciente.fechaIn != '' ?
                                              'form-control border border-success formSombra' : 'form-control'">
                            </div>
                        </div>

                        <!-- Diagnóstico -->
                        <div class="col-md-8">
                            <label class="form-label fw-bold"> Diagnóstico </label>
                            <textarea class="form-control" @keyup.capture="enviarDatos"
                                      rows="3"
                                      v-model="infoPreIdPaciente.diagnostico"
                                      :class="infoPreIdPaciente.diagnostico != undefined && infoPreIdPaciente.diagnostico != '' ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>

                        <!-- Tipo de Cirugía -->
                        <div class="col-md-4">
                            <label class="form-label col-12 fw-bold"> Tipo de Cirugía </label>

                            <input type="radio" @change="enviarDatos"
                                   class="btn-check"
                                   name="tipoCirugia"
                                   id="mayor"
                                   autocomplete="off"
                                   value="Mayor"
                                   v-model="infoPreIdPaciente.tipoCx">
                            <label class="btn btn-radio margenRadio" for="mayor"> Mayor </label>

                            <input type="radio" @change="enviarDatos"
                                   class="btn-check"
                                   name="tipoCirugia"
                                   id="menor"
                                   autocomplete="off"
                                   value="Menor"
                                   v-model="infoPreIdPaciente.tipoCx">
                            <label class="btn btn-radio margenRadio" for="menor"> Menor </label>

                            <input type="radio" @change="enviarDatos"
                                   class="btn-check"
                                   name="tipoCirugia"
                                   id="ambulatoria"
                                   autocomplete="off"
                                   value="Ambulatoria"
                                   v-model="infoPreIdPaciente.tipoCx">
                            <label class="btn btn-radio" for="ambulatoria"> Ambulatoria </label>
                        </div>

                        <!-- CIE-10 -->
                        <div class="col-md-8">
                            <label class="form-label fw-bold mt-2"> CIE-10 </label>
                            <el-select v-model="infoPreIdPaciente.cie10" @change="enviarDatos"
                                       filterable
                                       :class="infoPreIdPaciente.cie10 != undefined && infoPreIdPaciente.cie10 != '' ?
                                              'form-control-select border border-success formSombra' : 'form-control-select'">
                                <el-option 
                                    v-for="estadoNacimiento in opcionCIE10"
                                    :value="estadoNacimiento.lblCie10">
                                </el-option>
                            </el-select>
                        </div>

                        <div class="row g-3 mt-2">
                            <!-- Cirugía -->
                            <div class="col-md-6">
                                <label class="form-label fw-bold">Cirugía</label>
                                <textarea type="text"
                                          class="form-control"
                                          rows="3"
                                          @keyup.capture="enviarDatos"
                                          v-model="infoPreIdPaciente.cirugia"
                                          :class="infoPreIdPaciente.cirugia != undefined && infoPreIdPaciente.cirugia != '' ?
                                                 'form-control border border-success formSombra' : 'form-control'">
                                </textarea>
                            </div>

                            <!-- CIE-9 -->
                            <div class="col-md-6">
                                <label class="form-label fw-bold"> CIE-9 </label>
                                <el-select v-model="infoPreIdPaciente.cie9" @change="enviarDatos"
                                           filterable
                                           :class="infoPreIdPaciente.cie9 != undefined && infoPreIdPaciente.cie9 != '' ?
                                                  'form-control-select border border-success formSombra' : 'form-control-select'">
                                    <el-option
                                        v-for="estadoNacimiento in opcionCIE9"
                                        :value="estadoNacimiento.lblCie9">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>

                        <div class="col-md-6"></div>
                        <!-- Fecha de Cirugía -->
                        <div class="col-md-3">
                            <label class="form-label fw-bold"> Fecha de Cirugía </label>
                            <input type="date" @click="calcularFechaCirugia"
                                   class="form-control"
                                   v-model="infoPreIdPaciente.fechaCx"
                                   :class="infoPreIdPaciente.fechaCx != undefined && infoPreIdPaciente.fechaCx != '' ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <!-- Hora de Cirugía -->
                        <div class="col-md-3">
                            <label class="form-label fw-bold"> Hora de Cirugía </label>
                            <input type="time"
                                   class="form-control" @click="calcularHoraCirugia"
                                   v-model="infoPreIdPaciente.hrCx"
                                   :class="infoPreIdPaciente.hrCx != undefined && infoPreIdPaciente.hrCx != '' ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <hr /> <!-- Datos de los Médicos -->

                        <!-- Cirujano -->
                        <div class="col-md-6">
                            <label class="form-label fw-bold"> Cirujano </label>
                            <input type="text"
                                   class="form-control"
                                   @keyup.capture="enviarDatos"
                                   v-model="infoPreIdPaciente.cirujano"
                                   :class="infoPreIdPaciente.cirujano != undefined && infoPreIdPaciente.cirujano != '' ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <!-- Anestesiólogo -->
                        <div class="col-md-6">
                            <label class="form-label fw-bold"> Anestesiólogo </label>
                            <input type="text" 
                                   class="form-control"
                                   @keyup.capture="enviarDatos"
                                   v-model="infoPreIdPaciente.anestesiologo"
                                   :class="infoPreIdPaciente.anestesiologo != undefined && infoPreIdPaciente.anestesiologo != '' ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <!-- Anestesiólogo VPA -->
                        <div class="col-md-6 mt-4">
                            <label class="form-label fw-bold"> Anestesiólogo VPA </label>
                            <input type="text" @keyup.capture="enviarDatos"
                                   class="form-control"
                                   v-model="infoPreIdPaciente.anestesiologoVPA"
                                   :class="infoPreIdPaciente.anestesiologoVPA != undefined && infoPreIdPaciente.anestesiologoVPA != '' ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <!-- Residente de Anestesia -->
                        <div class="col-md-6 mt-4">
                            <label class="form-label fw-bold"> Residente de Anestesia </label>
                            <input type="text" @keyup.capture="enviarDatos"
                                   class="form-control"
                                   v-model="infoPreIdPaciente.residenteAnestesia"
                                   :class="infoPreIdPaciente.residenteAnestesia != undefined && infoPreIdPaciente.residenteAnestesia != '' ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>
                    </form>
                </div>
            </div>

            <!-- Datos Demográficos -->
            <div class="tab-pane fade" id="demograficos">
                <div class="col-12 borderPrincipal" :class="preIdStore.VistaRapida == true ? '' : 'mb-5'">
                    <form @submit.prevent="obtenerDatos" class="row g-3 mt-1">
                        <!-- Nacionalidad -->
                        <div class="col-md-3">
                            <label class="form-label fw-bold"> Nacionalidad </label>
                            <el-select v-model="infoPreIdPaciente.nacionalidad" @change="enviarDatos"
                                       filterable
                                       :class="infoPreIdPaciente.nacionalidad != undefined && infoPreIdPaciente.nacionalidad != '' ?
                                              'form-control-select border border-success formSombra' : 'form-control-select'">
                                <el-option
                                    v-for="nacionalidad in opcionNacionalidad"
                                    :value="nacionalidad.lblNac">
                                </el-option>
                            </el-select>
                        </div>

                        <!-- CURP -->
                        <div class="col-md-3">
                            <label class="form-label fw-bold"> CURP </label>
                            <input type="text" @keyup.capture="enviarDatos"
                                   class="form-control"
                                   v-model="infoPreIdPaciente.CURP"
                                   :class="infoPreIdPaciente.CURP != undefined && infoPreIdPaciente.CURP != '' ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <!-- Folio ID -->
                        <div class="col-md-3">
                            <label class="form-label fw-bold"> FOLIO ID </label>
                            <input type="text" @keyup.capture="enviarDatos"
                                   class="form-control"
                                   v-model="infoPreIdPaciente.folioID"
                                   :class="infoPreIdPaciente.folioID != undefined && infoPreIdPaciente.folioID != '' ?
                                          'form-control border border-success formSombra' : 'form-control'">                
                        </div>

                        <!-- Estado de Nacimiento -->
                        <div class="col-md-3">
                            <label class="form-label fw-bold"> Estado de Nacimiento </label>
                            <el-select v-model="infoPreIdPaciente.estNacimiento" @change="enviarDatos"
                                       filterable
                                       :class="infoPreIdPaciente.estNacimiento != undefined && infoPreIdPaciente.estNacimiento != '' ?
                                              'form-control-select border border-success formSombra' : 'form-control-select'">
                                <el-option
                                    v-for="estadoNacimiento in opcionEstadoNacimiento"
                                    :value="estadoNacimiento.lblEst">
                                </el-option>
                            </el-select>
                        </div>

                        <h5 class="fw-bold"> DATOS DEL DOMICILIO </h5>

                        <!-- Estado de Residencia -->
                        <div class="col-md-4">
                            <label class="form-label fw-bold">Estado de residencia</label>
                            <el-select v-model="infoPreIdPaciente.estResidencia" @change="enviarDatos"
                                       filterable 
                                       :class="infoPreIdPaciente.estResidencia != undefined && infoPreIdPaciente.estResidencia != '' ?
                                       'form-control-select border border-success formSombra' : 'form-control-select'">
                                <el-option v-for="estadoNacimiento in opcionEstadoResidencia"
                                           :value="estadoNacimiento.lblEstRes">
                                </el-option>
                            </el-select>
                        </div>

                        <!-- Alcaldía/Municipio -->
                        <div class="col-md-4">
                            <label class="form-label fw-bold"> Alcaldía/Municipio </label>
                            <input type="text" @keyup.capture="enviarDatos"
                                   class="form-control"
                                   v-model="infoPreIdPaciente.alcaldia"
                                   :class="infoPreIdPaciente.alcaldia != undefined && infoPreIdPaciente.alcaldia != '' ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <!-- Colonia/Localidad -->
                        <div class="col-md-4">
                            <label  class="form-label fw-bold"> Colonia/Localidad </label>
                            <input type="text" @keyup.capture="enviarDatos"
                                   class="form-control"
                                   v-model="infoPreIdPaciente.colonia"
                                   :class="infoPreIdPaciente.colonia != undefined && infoPreIdPaciente.colonia != '' ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <!-- Código Postal -->
                        <div class="col-md-4">
                            <label  class="form-label fw-bold margen-cp"> Código Postal </label>
                            <input type="text" @keyup.capture="enviarDatos"
                                   class="form-control"
                                   v-model="infoPreIdPaciente.codigoPostal"
                                   :class="infoPreIdPaciente.codigoPostal != undefined && infoPreIdPaciente.codigoPostal != '' ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <div class="col-md-10"></div>
                        <!-- Botón Guardar/Actuazlizar -->
                        <div class="col-md-1 margenBoton">
                            <button href="#pre-valoracion" 
                                    data-bs-toggle="tab" 
                                    type="submit"
                                    class="btn btn-guardar-datos fw-bold"
                                    :class="propBtnGuardarId == true ? 'visible' : 'invisible'"
                                    @click="preIdStore.savePreId( infoPreIdPaciente )"> GUARDAR </button> 

                            <button data-bs-toggle="tab" 
                                    type="submit"
                                    class="btn btn-guardar-datos fw-bold"
                                    :class="propBtnActualizarId == true ? 'visible' : 'invisible'"
                                    @click="preIdStore.updatePreId( infoPreIdPaciente )"> ACTUALIZAR </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import type { regIdPaciente } from "@/interfaces/regPreAnest"
import { defineComponent } from "vue"
import { ElSelect, ElOption } from 'element-plus';
import { usePreIdStore } from "../../stores/preId-store";

const preIdStore = usePreIdStore();

export default defineComponent({
    components: { ElSelect, ElOption },

    props: {
        propNumExp: {type: Boolean},
        propNomPac:{type: Boolean},
        propRojoNum:{type: Boolean},
        propVerdeNum:{type: Boolean},
        propRojoNom:{type: Boolean},
        propVerdeNom:{type: Boolean},
        propBtnGuardarId:{type: Boolean},
        propBtnActualizarId:{type: Boolean},

        propId:{type: String},
        propNumeroExp:{type: String},
        propNombrePac:{type: String},
        propFechaNacimiento:{type: String},
        propEdad:{type: Number},
        propGenero:{type: String},
        propNacionalidad:{type: String},
        propCURP:{type: String},
        propFolioID:{type: String},
        propEstadoNacimiento:{type: String},
    },

    data () {
        return{
            infoPreIdPaciente: {} as regIdPaciente,
            preIdStore,            

            valorNac: String,
            lblNac: String,  
            valorCie10: String,
            lblCie10: String,
            valorCie9: String,
            lblCie9: String,
            valorEst: String,
            lblEst: String,
            valorEstRes: String,
            lblEstRes: String,

            opcionCIE10: [
                { valorCie10: '', lblCie10: '' },
                { valorCie10: 'opcion1', lblCie10: 'Opción 1' },
                { valorCie10: 'opcion2', lblCie10: 'Opción 2' }
            ],
            
            opcionCIE9: [
                { valorCie9: '', lblCie9: '' },
                { valorCie9: 'opcion1', lblCie9: 'Opción 1' },
                { valorCie9: 'opcion2', lblCie9: 'Opción 2' }
            ],
            
            opcionNacionalidad: [
                { valorNac: '', lblNac: '' },
                { valorNac: 'mexicana', lblNac: 'Mexicana' },
                { valorNac: 'noMexicana', lblNac: 'Extranjera' }
            ],
            
            opcionEstadoNacimiento: [
                { valorEst: '', lblEst: '' },
                { valorEst: 'aguascalientes', lblEst: 'Aguascalientes' },
                { valorEst: 'bajaCalifornia', lblEst: 'Baja California' },
                { valorEst: 'bajaCaliforniaSur', lblEst: 'Baja California Sur' },
                { valorEst: 'campeche', lblEst: 'Campeche' },
                { valorEst: 'coahuila', lblEst: 'Coahuila de Zaragoza' },
                { valorEst: 'colima', lblEst: 'Colima' },
                { valorEst: 'chiapas', lblEst: 'Chiapas' },
                { valorEst: 'chihuahua', lblEst: 'Chihuahua' },
                { valorEst: 'cdmx', lblEst: 'Ciudad de México' },
                { valorEst: 'durango', lblEst: 'Durango' },
                { valorEst: 'guanajuato', lblEst: 'Guanajuato' },
                { valorEst: 'guerrero', lblEst: 'Guerrero' },
                { valorEst: 'hidalgo', lblEst: 'Hidalgo' },
                { valorEst: 'jalisco', lblEst: 'Jalisco' },
                { valorEst: 'mexico', lblEst: 'México' },
                { valorEst: 'michoacan', lblEst: 'Michoacán de Ocampo' },
                { valorEst: 'morelos', lblEst: 'Morelos' },
                { valorEst: 'nayarit', lblEst: 'Nayarit' },
                { valorEst: 'nuevoLeon', lblEst: 'Nuevo León' },
                { valorEst: 'oaxaca', lblEst: 'Oaxaca' },
                { valorEst: 'puebla', lblEst: 'Puebla' },
                { valorEst: 'queretaro', lblEst: 'Querétaro' },
                { valorEst: 'quintanaRoo', lblEst: 'Quintana Roo' },
                { valorEst: 'sanLuis', lblEst: 'San Luis Potosí' },
                { valorEst: 'sinaloa', lblEst: 'Sinaloa' },
                { valorEst: 'sonora', lblEst: 'Sonora' },
                { valorEst: 'tabasco', lblEst: 'Tabasco' },
                { valorEst: 'tamaulipas', lblEst: 'Tamaulipas' },
                { valorEst: 'tlaxcala', lblEst: 'Tlaxcala' },
                { valorEst: 'veracruz', lblEst: 'Veracruz de Ignacio de la LLave' },
                { valorEst: 'yucatan', lblEst: 'Yucatán' },
                { valorEst: 'zacatecas', lblEst: 'Zacatecas' },
                { valorEst: 'noAplica', lblEst: 'No Aplica' },
                { valorEst: 'seIgnora', lblEst: 'Se Ignora' }
            ],

            opcionEstadoResidencia: [
                { valorEstRes: '', lblEstRes: '' },
                { valorEstRes: 'aguascalientes', lblEstRes: 'Aguascalientes' },
                { valorEstRes: 'bajaCalifornia', lblEstRes: 'Baja California' },
                { valorEstRes: 'bajaCaliforniaSur', lblEstRes: 'Baja California Sur' },
                { valorEstRes: 'campeche', lblEstRes: 'Campeche' },
                { valorEstRes: 'coahuila', lblEstRes: 'Coahuila de Zaragoza' },
                { valorEstRes: 'colima', lblEstRes: 'Colima' },
                { valorEstRes: 'chiapas', lblEstRes: 'Chiapas' },
                { valorEstRes: 'chihuahua', lblEstRes: 'Chihuahua' },
                { valorEstRes: 'cdmx', lblEstRes: 'Ciudad de México' },
                { valorEstRes: 'durango', lblEstRes: 'Durango' },
                { valorEstRes: 'guanajuato', lblEstRes: 'Guanajuato' },
                { valorEstRes: 'guerrero', lblEstRes: 'Guerrero' },
                { valorEstRes: 'hidalgo', lblEstRes: 'Hidalgo' },
                { valorEstRes: 'jalisco', lblEstRes: 'Jalisco' },
                { valorEstRes: 'mexico', lblEstRes: 'México' },
                { valorEstRes: 'michoacan', lblEstRes: 'Michoacán de Ocampo' },
                { valorEstRes: 'morelos', lblEstRes: 'Morelos' },
                { valorEstRes: 'nayarit', lblEstRes: 'Nayarit' },
                { valorEstRes: 'nuevoLeon', lblEstRes: 'Nuevo León' },
                { valorEstRes: 'oaxaca', lblEstRes: 'Oaxaca' },
                { valorEstRes: 'puebla', lblEstRes: 'Puebla' },
                { valorEstRes: 'queretaro', lblEstRes: 'Querétaro' },
                { valorEstRes: 'quintanaRoo', lblEstRes: 'Quintana Roo' },
                { valorEstRes: 'sanLuis', lblEstRes: 'San Luis Potosí' },
                { valorEstRes: 'sinaloa', lblEstRes: 'Sinaloa' },
                { valorEstRes: 'sonora', lblEstRes: 'Sonora' },
                { valorEstRes: 'tabasco', lblEstRes: 'Tabasco' },
                { valorEstRes: 'tamaulipas', lblEstRes: 'Tamaulipas' },
                { valorEstRes: 'tlaxcala', lblEstRes: 'Tlaxcala' },
                { valorEstRes: 'veracruz', lblEstRes: 'Veracruz de Ignacio de la LLave' },
                { valorEstRes: 'yucatan', lblEstRes: 'Yucatán' },
                { valorEstRes: 'zacatecas', lblEstRes: 'Zacatecas' },
                { valorEstRes: 'noAplica', lblEstRes: 'No Aplica' },
                { valorEstRes: 'seIgnora', lblEstRes: 'Se Ignora' }
            ],
        }
    },
    
    methods: {
        obtenerDatos() {
            this.$emit("validar", this.infoPreIdPaciente.numExped,
                                  this.infoPreIdPaciente.nomPaciente);
        },

        enviarDatos() {
            this.$emit('recibe-datos', this.infoPreIdPaciente.numExped,
                                       this.infoPreIdPaciente.nomPaciente,
                                       this.infoPreIdPaciente.cirujano,
                                       this.infoPreIdPaciente.cirugia,

                                       preIdStore.numeroExpediente=this.infoPreIdPaciente.numExped,
                                       preIdStore.NombrePaciente=this.infoPreIdPaciente.nomPaciente,
                                       preIdStore.fechaNacimientoPaciente= this.infoPreIdPaciente.fechaNac,
                                       preIdStore.edadPaciente=this.infoPreIdPaciente.edadPaciente,
                                       preIdStore.generoPaciente=this.infoPreIdPaciente.genero,

                                       preIdStore.Nacionalidad=this.infoPreIdPaciente.nacionalidad,
                                       preIdStore.CURP=this.infoPreIdPaciente.CURP,
                                       preIdStore.FolioID=this.infoPreIdPaciente.folioID,
                                       preIdStore.EstadoNacimiento=this.infoPreIdPaciente.estNacimiento,
                                       preIdStore.EstadoResidencia=this.infoPreIdPaciente.estResidencia,
                                       preIdStore.Alcaldia=this.infoPreIdPaciente.alcaldia,
                                       preIdStore.Colonia=this.infoPreIdPaciente.colonia,
                                       preIdStore.CP=this.infoPreIdPaciente.codigoPostal,

                                       preIdStore.NumeroEpisodio=this.infoPreIdPaciente.numEpisodio,
                                       preIdStore.Habitacion=this.infoPreIdPaciente.habitacion,
                                       preIdStore.FechaIngreso=this.infoPreIdPaciente.fechaIn,
                                       preIdStore.Diagnostico=this.infoPreIdPaciente.diagnostico,
                                       preIdStore.TipoCirugia=this.infoPreIdPaciente.tipoCx,

                                       preIdStore.CIE10=this.infoPreIdPaciente.cie10,
                                       preIdStore.CIE9=this.infoPreIdPaciente.cie9,
                                       preIdStore.NombreCirugia=this.infoPreIdPaciente.cirugia,
                                       preIdStore.FechaCirugia=this.infoPreIdPaciente.fechaCx,
                                       preIdStore.HoraCirugia=this.infoPreIdPaciente.hrCx,

                                       preIdStore.NombreCirujano=this.infoPreIdPaciente.cirujano,
                                       preIdStore.NombreAnestesiologo=this.infoPreIdPaciente.anestesiologo,
                                       preIdStore.AnestesiologoVPA=this.infoPreIdPaciente.anestesiologoVPA,
                                       preIdStore.residenteAnestesia=this.infoPreIdPaciente.residenteAnestesia
                                       );
        },

        calcularEdad() {
            let fechaNacimiento = new Date(this.infoPreIdPaciente.fechaNac);
            let fechaActual = new Date();

            let diferencia = fechaActual.getTime() - fechaNacimiento.getTime();
            let edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
            this.infoPreIdPaciente.edadPaciente = edad;

            this.enviarDatos();
        },

        calcularFechaIngreso(){
            let fecha = new Date();
            let año = fecha.getFullYear();
            let mes = String(fecha.getMonth() + 1).padStart(2, '0');
            let dia = String(fecha.getDate()).padStart(2, '0');
            this.infoPreIdPaciente.fechaIn = `${año}-${mes}-${dia}`;

            this.enviarDatos();
        },

        calcularFechaCirugia(){
            let fecha = new Date();
            let año = fecha.getFullYear();
            let mes = String(fecha.getMonth() + 1).padStart(2, '0');
            let dia = String(fecha.getDate()).padStart(2, '0');
            this.infoPreIdPaciente.fechaCx = `${año}-${mes}-${dia}`;

            this.enviarDatos();
        },

        calcularHoraCirugia(){
            let hoy = new Date();
            this.infoPreIdPaciente.hrCx = ((hoy.getHours() <10) ? '0':'') + hoy.getHours() + ':' + ((hoy.getMinutes() <10) ? '0':'')+hoy.getMinutes();

            this.enviarDatos();
        },

        async asignarValoresPaciente(){
            this.infoPreIdPaciente.numExped = await this.propNumeroExp;
            this.infoPreIdPaciente.nomPaciente = await this.propNombrePac;
            this.infoPreIdPaciente.fechaNac = await this.propFechaNacimiento;
            this.infoPreIdPaciente.edadPaciente = await this.propEdad;
            this.infoPreIdPaciente.genero = await this.propGenero;
            this.infoPreIdPaciente.nacionalidad = await this.propNacionalidad;
            this.infoPreIdPaciente.CURP = await this.propCURP;
            this.infoPreIdPaciente.folioID = await this.propFolioID;
            this.infoPreIdPaciente.estNacimiento = await this.propEstadoNacimiento;
        }
    },
})
</script>

<style scoped>
.borderPrincipal {
  border-radius: 5px;
  padding: 1rem;
  margin-top :10px;  
  backdrop-filter: blur(40px) brightness(97%);  
}
.formSombra:focus {
    border-color:#6BD99B;
    outline:0;
    -webkit-box-shadow:0 0 8px #6BD99B;
    box-shadow:0 0 8px #6BD99B
}
.border-success {
    --bs-border-opacity: 1;
    border-color: #6BD99B !important;
}
.validaCampo {
    color: red;
}
.centrar-li{
  justify-content: center; 
}
/* Botones */
.btn-guardar-info{
    --bs-btn-bg: none;
    --bs-btn-color: #E88300;    
    --bs-btn-border-color: #E88300;
    --bs-btn-hover-bg: #E88300;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-border-color: #E88300;          
    --bs-btn-active-bg: #E88300;
    --bs-btn-active-color: #ffffff;
    --bs-btn-active-border-color: #E88300;
    width: 150px; 
    position: absolute;       
}
.btn-guardar-datos{
    --bs-btn-bg: none;
    --bs-btn-color: #E88300;    
    --bs-btn-border-color: #E88300;
    --bs-btn-hover-bg: #E88300;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-border-color: #E88300;          
    --bs-btn-active-bg: #E88300;
    --bs-btn-active-color: #ffffff;
    --bs-btn-active-border-color: #E88300;
    width: 150px; 
    position: absolute;       
}
.btn-nav-bar{
    --bs-btn-bg: #fff;
    --bs-btn-color: #002D60;    
    --bs-btn-border-color: #fff;
    --bs-btn-hover-bg: #A0A6B2;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-border-color: #A0A6B2;          
    --bs-btn-active-bg: #A0A6B2;
    --bs-btn-active-color: #fff;
    --bs-btn-active-border-color: #A0A6B2;
    width: 214px;
    height: auto;
}
.btn-radio {
    --bs-btn-color: #000;
    --bs-btn-border-color: #ced4da;
    --bs-btn-hover-color: #000;
    --bs-btn-focus-shadow-rgb: 13,202,240;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #002d60;
    --bs-btn-active-border-color: #ced4da;
    --bs-btn-bg: #ffffff;
}
/* Margenes */
.margenRadio {
    margin-right: 10px;
}
.margenBoton{
    margin-bottom: 48px;
    margin-left: 5px;
}
.margen-btn-info{
    margin-top: 48px;
    margin-bottom: 48px;
    margin-left: 5px;
}
h5{
    color: #002D60;
    margin-top: 60px;
    margin-bottom: 0px;
}
hr{
    margin-top: 38px;
}
/* Buscador en input tipo select */
.form-control-select {
    display: block;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.3rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.el-select {
    --el-select-border-color-hover: var(--el-border-color-hover);
    --el-select-disabled-border: var(--el-disabled-border-color);
    --el-select-font-size: var(--el-font-size-base);
    --el-select-close-hover-color: var(--el-text-color-secondary);
    --el-select-input-color: var(--el-text-color-placeholder);
    --el-select-multiple-input-color: var(--el-text-color-regular);
    --el-select-input-focus-border-color: var(--el-disabled-border-color); 
    --el-select-input-font-size: 14px;
}
.el-select-dropdown__item.selected {
    color: #000;
    font-weight: 700;
}
.el-input__inner {
    --el-input-inner-height: calc(var(--el-input-height, 32px) - 2px);
    width: 100%;
    flex-grow: 1;
    color: #000;
    font-size: inherit;
    height: var(--el-input-inner-height);
    line-height: var(--el-input-inner-height);
    padding: 0;
    outline: 0;
    border: none;
    background: 0 0;
    box-sizing: border-box;
}
/* propiedad title */
[data-title]:hover:after {
    opacity: 1;
    transition: all 0.1s ease 0.5s;
    visibility: visible;
}
[data-title]:after {
    content: attr(data-title);
    background-color: #000000;
    color: #ffffff;
    font-size: 13px;
    font-family: SF UI Display;
    position: absolute;
    padding: 2px 5px;
    bottom: -2.0em;
    left: 80%;
    white-space: nowrap;
    opacity: 0;
    border: 1px solid #fff;
    z-index: 99999;
    visibility: hidden;
    border-radius: 5px;
}
[data-title] {
    position: relative;
    cursor: pointer
}
</style>
