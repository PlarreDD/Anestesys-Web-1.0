<template>
    <div>        

        <ul class="nav nav-pills mb-3 text-center centrar-li" id="">        
            <li class="nav-item col-md-3">
                <button class="btn btn-nav-bar fw-bold active"
                        id="plan"
                        data-bs-toggle="pill"
                        data-bs-target="#informacion"
                        type="button"
                        aria-selected="true"> INFORMACIÓN </button>
            </li>

            <li class="nav-item col-md-2" >
                <button class="btn btn-nav-bar fw-bold"
                        id="plan"
                        data-bs-toggle="pill"
                        data-bs-target="#demograficos"
                        type="button"
                        aria-selected="false"> DATOS DEMOGRÁFICOS </button>
            </li>
        </ul>

        <div class="tab-content col-md-12" id="">
            <div class="tab-pane fade show active" id="informacion">
                <div class="col-12 borderPrincipal">  
                    <form @submit.prevent="obtenerDatos" class="row g-3 margen-input">
                        <div class="col-md-4">
                            <label for="" class="form-label fw-bold"> Número de Expediente 
                                <span class="text-danger">* </span> 
                                <i class="fa-solid fa fa-circle-question" 
                                    data-title="Llene el campo para navegar por la aplicación">
                                </i>
                            </label>

                            <input type="text"
                                   v-model="id.numExped"
                                   id="numExpediente"
                                   class="form-control"
                                   :class="{ 'form-control border border-danger': propRojoNum,
                                             'form-control border border-success formSombra': propVerdeNum }"
                                   placeholder="Campo obligatorio">
                            <div :class="propNumExp == true ? 'visible validaCampo' : 'invisible'"
                                 id="validaNumExp"> Escriba el número de expediente </div>                
                        </div>

                        <div class="col-md-6">
                            <label for=""
                                   class="form-label fw-bold"> Nombre del Paciente 
                                <span class="text-danger">* </span> 
                                <i class="fa-solid fa fa-circle-question" 
                                   data-title="Llene el campo para navegar por la aplicación">
                                </i>
                            </label>
                            
                            <input class="form-control" 
                                   type="text" 
                                   @keyup.capture="enviarDatos"
                                   v-model="id.nomPaciente"
                                   id="nombrePaciente" 
                                   :class="{ 'form-control border border-danger': propRojoNom,
                                             'form-control border border-success formSombra': propVerdeNom }"
                                   placeholder="Campo obligatorio">
                            <div :class="propNomPac == true ? 'visible validaCampo' : 'invisible'"
                                 id="validaNomPac"> Escriba el nombre del paciente </div>        
                        </div>

                        <div class="col-md-1 margenBoton">
                            <button data-bs-toggle="tab" 
                                    type="submit"
                                    class="btn btn-guardar fw-bold"
                                    :class="propBtnGuardar == true ? 'visible' : 'invisible'"
                                    @click="preIdStore.savePreId( id )"> GUARDAR </button>
                            <button data-bs-toggle="tab" 
                                    type="submit"
                                    class="btn btn-guardar fw-bold"
                                    :class="propBtnActualizar == true ? 'visible' : 'invisible'"
                                    @click="actualizar()"> ACTUALIZAR </button>
                        </div>                                               

                        <div class="col-md-3">
                            <label for=""
                                   class="form-label fw-bold"> Fecha de Nacimiento </label>
                            <input type="date"
                                   class="form-control"
                                   v-model="id.fechaNac"
                                   :class="id.fechaNac != undefined ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <div class="col-md-1"></div>
                        <div class="col-md-2">
                            <label for=""
                                   class="form-label fw-bold"> Edad </label>
                            <input type="text"
                                   class="form-control"
                                   v-model="id.edadPaciente"
                                   :class="id.edadPaciente != undefined ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <div class="col-md-1"></div>
                        <div class="col-md-3">
                            <label for=""
                                   class="form-label col-12 fw-bold"> Género </label>
                            <input type="radio"
                                   class="btn-check"
                                   name="genero"
                                   id="masculino"
                                   autocomplete="off"
                                   value="Masculino"
                                   v-model="id.genero">
                            <label class="btn btn-radio margenRadio"
                                   for="masculino"> Masculino </label>
                                            
                            <input type="radio"
                                   class="btn-check"
                                   name="genero"
                                   id="femenino"
                                   autocomplete="off"
                                   value="Femenino"
                                   v-model="id.genero">
                            <label class="btn btn-radio"
                                   for="femenino"> Femenino </label>
                        </div>

                        <div class="col-md-1"></div>                        
                        <div class="row g-3 margen-quince">
                            <div class="col-md-3">
                                <label for=""
                                       class="form-label fw-bold"> Núm de episodio </label>
                                <input type="text"
                                       class="form-control"
                                       v-model="id.numEpisodio"
                                       :class="id.numEpisodio != undefined ?
                                              'form-control border border-success formSombra' : 'form-control'">
                            </div>

                            <div class="col-md-1"></div>
                            <div class="col-md-2">
                                <label for=""
                                       class="form-label fw-bold"> Habitación </label>
                                <input type="text"
                                       class="form-control"
                                       v-model="id.habitacion"
                                       :class="id.habitacion != undefined ?
                                              'form-control border border-success formSombra' : 'form-control'">
                            </div>
                            <div class="col-md-1"></div>
    
                            <div class="col-md-3">
                                <label for="" class="form-label fw-bold"> Fecha de Ingreso </label>
                                <input type="date"
                                       class="form-control"
                                       v-model="id.fechaIn"
                                       :class="id.fechaIn != undefined ?
                                              'form-control border border-success formSombra' : 'form-control'">
                            </div>
                        </div>

                        <hr />

                        <div class="col-md-8">
                            <label for="" class="form-label fw-bold"> Diagnóstico </label>
                            <textarea class="form-control"
                                      rows="3"
                                      v-model="id.diagnostico"
                                      :class="id.diagnostico != undefined ?
                                             'form-control border border-success formSombra' : 'form-control'">
                            </textarea>
                        </div>

                        <div class="col-md-4">
                            <label for="" class="form-label col-12 fw-bold"> Tipo de Cirugía </label>

                            <input type="radio"
                                   class="btn-check"
                                   name="tipoCirugia"
                                   id="mayor"
                                   autocomplete="off"
                                   value="Mayor"
                                   v-model="id.tipoCx">
                            <label class="btn btn-radio margenRadio" for="mayor"> Mayor </label>

                            <input type="radio"
                                   class="btn-check"
                                   name="tipoCirugia"
                                   id="menor"
                                   autocomplete="off"
                                   value="Menor"
                                   v-model="id.tipoCx">
                            <label class="btn btn-radio margenRadio" for="menor"> Menor </label>
                            
                            <input type="radio"
                                   class="btn-check"
                                   name="tipoCirugia"
                                   id="ambulatoria"
                                   autocomplete="off"
                                   value="Ambulatoria"
                                   v-model="id.tipoCx">
                            <label class="btn btn-radio" for="ambulatoria"> Ambulatoria </label>
                        </div>  
                        
                        <div class="col-md-8">
                            <label for="" class="form-label fw-bold margen-diez"> CIE-10 </label>
                            <el-select v-model="id.cie10"
                                       filterable
                                       :class="id.cie10 != undefined ?
                                              'form-control-select border border-success formSombra' : 'form-control-select'">
                                <el-option 
                                    v-for="estadoNacimiento in opcionCIE10"
                                    :value="estadoNacimiento.lblCie10">
                                </el-option>
                            </el-select>                   
                        </div>

                        <div class="row g-3 margen-quince">
                            <div class="col-md-6">
                                <label for="" class="form-label fw-bold">Cirugía</label>
                                <textarea type="text"
                                          class="form-control"
                                          rows="3"
                                          @keyup.capture="enviarDatos"
                                          v-model="id.cirugia"
                                          :class="id.cirugia != undefined ?
                                                 'form-control border border-success formSombra' : 'form-control'">
                                </textarea>
                            </div>

                            <div class="col-md-6">
                                <label for=""
                                       class="form-label fw-bold"> CIE-9 </label>
                                <el-select v-model="id.cie9"
                                           filterable
                                           :class="id.cie9 != undefined ?
                                                  'form-control-select border border-success formSombra' : 'form-control-select'">
                                    <el-option
                                        v-for="estadoNacimiento in opcionCIE9"
                                        :value="estadoNacimiento.lblCie9">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>

                        <div class="col-md-6"></div>
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold"> Fecha de Cirugía </label>
                            <input type="date"
                                   class="form-control"
                                   v-model="id.fechaCx"
                                   :class="id.fechaCx != undefined ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold"> Hora de Cirugía </label>                            
                            <input type="time"
                                   class="form-control"
                                   v-model="id.hrCx"
                                   :class="id.hrCx != undefined ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>
                        
                        <hr />

                        <div class="col-md-6">
                            <label for="" class="form-label fw-bold"> Cirujano </label>
                            <input type="text"
                                   class="form-control"
                                   @keyup.capture="enviarDatos"
                                   v-model="id.cirujano"
                                   :class="id.cirujano != undefined ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>
                        
                        <div class="col-md-6">
                            <label for="" class="form-label fw-bold"> Anestesiólogo </label>
                            <input type="text" 
                                   class="form-control"
                                   v-model="id.anestesiologo"
                                   :class="id.anestesiologo != undefined ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <div class="col-md-6 margen-25">
                            <label for="" class="form-label fw-bold"> Anestesiólogo VPA </label>
                            <input type="text"
                                   class="form-control"
                                   v-model="id.anestesiologoVPA"
                                   :class="id.anestesiologoVPA != undefined ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <div class="col-md-6 margen-25">
                            <label for="" class="form-label fw-bold"> Residente de Anestesia </label>
                            <input type="text"
                                   class="form-control"
                                   v-model="id.residenteAnestesia"
                                   :class="id.residenteAnestesia != undefined ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>
                    </form>
                </div>
            </div>

            <div class="tab-pane fade" id="demograficos">
                <div class="col-12 borderPrincipal">
                    <form @submit.prevent="obtenerDatos" class="row g-3 margen-input">
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold"> Nacionalidad </label>
                            <el-select v-model="id.nacionalidad"
                                       filterable
                                       :class="id.nacionalidad != undefined ?
                                              'form-control-select border border-success formSombra' : 'form-control-select'">
                                <el-option
                                    v-for="nacionalidad in opcionNacionalidad"
                                    :value="nacionalidad.lblNac">
                                </el-option>
                            </el-select>
                        </div>

                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold"> CURP </label>
                            <input type="text"
                                   class="form-control"
                                   v-model="id.CURP"
                                   :class="id.CURP != undefined ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold"> FOLIO ID </label>
                            <input type="text"
                                   class="form-control"
                                   v-model="id.folioID"
                                   :class="id.folioID != undefined ?
                                          'form-control border border-success formSombra' : 'form-control'">                
                        </div>
                        
                        <div class="col-md-3">
                            <label for="" class="form-label fw-bold"> Estado de Nacimiento </label>
                            <el-select v-model="id.estNacimiento"
                                       filterable
                                       :class="id.estNacimiento != undefined ?
                                              'form-control-select border border-success formSombra' : 'form-control-select'">
                                <el-option
                                    v-for="estadoNacimiento in opcionEstadoNacimiento"
                                    :value="estadoNacimiento.lblEst">
                                </el-option>
                            </el-select>
                        </div>

                        <h5 class="fw-bold"> DATOS DEL DOMICILIO </h5>

                        <div class="col-md-4">
                            <label for="" class="form-label fw-bold">Estado de residencia</label>
                            <el-select v-model="id.estResidencia"
                                       filterable 
                                       :class="id.estResidencia != undefined ?
                                       'form-control-select border border-success formSombra' : 'form-control-select'">
                                <el-option v-for="estadoNacimiento in opcionEstadoResidencia"
                                           :value="estadoNacimiento.lblEstRes">
                                </el-option>
                            </el-select>
                        </div>

                        <div class="col-md-4">
                            <label for="" class="form-label fw-bold"> Alcaldía/Municipio </label>
                            <input type="text"
                                   class="form-control"
                                   v-model="id.alcaldia"
                                   :class="id.alcaldia != undefined ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <div class="col-md-4">
                            <label for="" class="form-label fw-bold"> Colonia/Localidad </label>
                            <input type="text"
                                   class="form-control"
                                   v-model="id.colonia"
                                   :class="id.colonia != undefined ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>

                        <div class="col-md-4">
                            <label for="" class="form-label fw-bold"> Código Postal </label>
                            <input type="text"
                                   class="form-control"
                                   v-model="id.codigoPostal"
                                   :class="id.codigoPostal != undefined ?
                                          'form-control border border-success formSombra' : 'form-control'">
                        </div>
                        
                        <div class="col-md-10"></div>
                        <div class="col-md-1 margenBoton">
                            <button href="#pre-valoracion" 
                                    data-bs-toggle="tab" 
                                    type="submit"
                                    class="btn btn-guardar fw-bold"
                                    :class="propBtnGuardar == true ? 'visible' : 'invisible'"
                                    @click="preIdStore.savePreId( id )"> GUARDAR </button> 
                                                                           
                                    <button data-bs-toggle="tab" 
                                            type="submit"
                                            class="btn btn-guardar fw-bold"
                                            :class="propBtnActualizar == true ? 'visible' : 'invisible'"
                                            @click="actualizar()"> ACTUALIZAR </button>
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
        propNumExp: {
            type: Boolean
        },
        propNomPac:{
            type: Boolean
        },
        propRojoNum:{
            type: Boolean
        },
        propVerdeNum:{
            type: Boolean
        },
        propRojoNom:{
            type: Boolean
        },
        propVerdeNom:{
            type: Boolean
        },
        propBtnGuardar:{
            type: Boolean
        },
        propBtnActualizar:{
            type: Boolean
        }
    },

    data () {
        return{
            id: {} as regIdPaciente,
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
                { valorCie10: 'opcion1', lblCie10: 'Opción 1' },
                { valorCie10: 'opcion2', lblCie10: 'Opción 2' }
            ],
            
            opcionCIE9: [
                { valorCie9: 'opcion1', lblCie9: 'Opción 1' },
                { valorCie9: 'opcion2', lblCie9: 'Opción 2' }
            ],
            
            opcionNacionalidad: [
                { valorNac: 'mexicana', lblNac: 'Mexicana' },
                { valorNac: 'noMexicana', lblNac: 'Extranjera' }
            ],
            
            opcionEstadoNacimiento: [
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
            this.$emit("validar", this.id.numExped, this.id.nomPaciente)           
        },
        enviarDatos() {
            this.$emit('recibe-datos', this.id.numExped, this.id.nomPaciente, this.id.cirujano, this.id.cirugia)
        },
        actualizar(){
            alert('Actualizar')
        }
    }
})
</script>

<style scoped>
.borderPrincipal {
  border-radius: 5px;
  padding: 1rem;
  margin-top :10px;
  margin-bottom: 10px;
  backdrop-filter: blur(40px) brightness(97%);  
}
.margen-input{
    margin-top: -1px;
}
.margen-diez{
    margin-top: 10px;
}
.margen-quince{
    margin-top: 15px;
}
.margen-25{
    margin-top: 25px;
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
.btn-guardar{
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
.validaCampo {
    color: red;
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
h5{
    color: #002D60;
    margin-top: 60px;
    margin-bottom: 0px;
}
.centrar-li{
  justify-content: center; 
}
.margenRadio {
    margin-right: 10px;
}
.margenBoton{
    margin-bottom: 48px;
    margin-left: 5px;
}
hr{
    margin-top: 38px;
}
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
    bottom: -1.8em;
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