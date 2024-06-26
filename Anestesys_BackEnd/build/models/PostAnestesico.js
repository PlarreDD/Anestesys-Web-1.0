"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostNotaPA = exports.PostRecupera = void 0;
/* Modelado para la base de datos de la vista de
 * información del paciente en postanestésico
 */
const mongoose_1 = require("mongoose");
/* Nota Post Anestésica */
const PostNotaPASchema = new mongoose_1.Schema({
    /* Id del paciente para enlazar la tabla */
    pid: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'PreIdPacientes',
        required: true,
    },
    cxid: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'PreIdPacientesCx',
        required: false
    },
    // Nota Post Anestésica
    npa_TecAnestFinal: { type: String },
    npa_Intubacion: { type: String },
    npa_NotaPostAnest: { type: String },
    // Signos Vitales al Egreso del Quirófano
    signVitEgQx_TA: { type: String },
    signVitEgQx_FC: { type: String },
    signVitEgQx_FR: { type: String },
    signVitEgQx_Temperatura: { type: String },
    signVitEgQx_Pulso: { type: String },
    signVitEgQx_SpO2: { type: String },
    signVitEgQx_EgresoPac: { type: String },
    /* Caso obstétrico reción nacido */
    casoObsRecNac_NumProd: { type: String },
    casoObsRecNac1_Genero: { type: String },
    casoObsRecNac1_HrNacimiento: { type: String },
    casoObsRecNac1_Alumbramiento: { type: String },
    casoObsRecNac1_Apgar1: { type: String },
    casoObsRecNac1_Apgar5: { type: String },
    casoObsRecNac1_Capurro: { type: String },
    casoObsRecNac1_Peso: { type: String },
    casoObsRecNac1_Talla: { type: String },
    casoObsRecNac2_Genero: { type: String },
    casoObsRecNac2_HrNacimiento: { type: String },
    casoObsRecNac2_Alumbramiento: { type: String },
    casoObsRecNac2_Apgar1: { type: String },
    casoObsRecNac2_Apgar5: { type: String },
    casoObsRecNac2_Capurro: { type: String },
    casoObsRecNac2_Peso: { type: String },
    casoObsRecNac2_Talla: { type: String },
    casoObsRecNac3_Genero: { type: String },
    casoObsRecNac3_HrNacimiento: { type: String },
    casoObsRecNac3_Alumbramiento: { type: String },
    casoObsRecNac3_Apgar1: { type: String },
    casoObsRecNac3_Apgar5: { type: String },
    casoObsRecNac3_Capurro: { type: String },
    casoObsRecNac3_Peso: { type: String },
    casoObsRecNac3_Talla: { type: String },
    casoObsRecNac4_Genero: { type: String },
    casoObsRecNac4_HrNacimiento: { type: String },
    casoObsRecNac4_Alumbramiento: { type: String },
    casoObsRecNac4_Apgar1: { type: String },
    casoObsRecNac4_Apgar5: { type: String },
    casoObsRecNac4_Capurro: { type: String },
    casoObsRecNac4_Peso: { type: String },
    casoObsRecNac4_Talla: { type: String },
    casoObsRecNac5_Genero: { type: String },
    casoObsRecNac5_HrNacimiento: { type: String },
    casoObsRecNac5_Alumbramiento: { type: String },
    casoObsRecNac5_Apgar1: { type: String },
    casoObsRecNac5_Apgar5: { type: String },
    casoObsRecNac5_Capurro: { type: String },
    casoObsRecNac5_Peso: { type: String },
    casoObsRecNac5_Talla: { type: String },
    casoObsRecNac6_Genero: { type: String },
    casoObsRecNac6_HrNacimiento: { type: String },
    casoObsRecNac6_Alumbramiento: { type: String },
    casoObsRecNac6_Apgar1: { type: String },
    casoObsRecNac6_Apgar5: { type: String },
    casoObsRecNac6_Capurro: { type: String },
    casoObsRecNac6_Peso: { type: String },
    casoObsRecNac6_Talla: { type: String },
});
/* Recuperación */
const PostRecuperacionSchema = new mongoose_1.Schema({
    /* Id del paciente para enlazar la tabla */
    pid: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'PreIdPacientes',
        required: true,
    },
    cxid: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'PreIdPacientesCx',
        required: false
    },
    // Nota de Evaluación UCPA
    notaEval_Obs: { type: String },
    // Aldrete de Recuperación
    // Frecuencia Cardiaca
    aldreteRec_FrecCardIn: { type: String },
    aldreteRec_FrecCard15: { type: String },
    aldreteRec_FrecCard30: { type: String },
    aldreteRec_FrecCard45: { type: String },
    aldreteRec_FrecCard60: { type: String },
    aldreteRec_FrecCard90: { type: String },
    aldreteRec_FrecCard120: { type: String },
    // Frecuencia Respiratoria
    aldreteRec_FrecRespIn: { type: String },
    aldreteRec_FrecResp15: { type: String },
    aldreteRec_FrecResp30: { type: String },
    aldreteRec_FrecResp45: { type: String },
    aldreteRec_FrecResp60: { type: String },
    aldreteRec_FrecResp90: { type: String },
    aldreteRec_FrecResp120: { type: String },
    // Tension Arterial
    aldreteRec_TensArteIn: { type: String },
    aldreteRec_TensArte15: { type: String },
    aldreteRec_TensArte30: { type: String },
    aldreteRec_TensArte45: { type: String },
    aldreteRec_TensArte60: { type: String },
    aldreteRec_TensArte90: { type: String },
    aldreteRec_TensArte120: { type: String },
    // Saturación de O2
    aldreteRec_SatO2In: { type: String },
    aldreteRec_SatO215: { type: String },
    aldreteRec_SatO230: { type: String },
    aldreteRec_SatO245: { type: String },
    aldreteRec_SatO260: { type: String },
    aldreteRec_SatO290: { type: String },
    aldreteRec_SatO2120: { type: String },
    // Aldrete
    // aldreteRec_AldreteIn: { type: String },
    // aldreteRec_Aldrete15: { type: String },
    // aldreteRec_Aldrete30: { type: String },
    // aldreteRec_Aldrete45: { type: String },
    // aldreteRec_Aldrete60: { type: String },
    // aldreteRec_Aldrete90: { type: String },
    // aldreteRec_Aldrete120: { type: String },
    // Actividad Muscular
    aldreteRec_MuscularIn: { type: String },
    aldreteRec_Muscular15: { type: String },
    aldreteRec_Muscular30: { type: String },
    aldreteRec_Muscular45: { type: String },
    aldreteRec_Muscular60: { type: String },
    aldreteRec_Muscular90: { type: String },
    aldreteRec_Muscular120: { type: String },
    // Respiración
    aldreteRec_RespiracionIn: { type: String },
    aldreteRec_Respiracion15: { type: String },
    aldreteRec_Respiracion30: { type: String },
    aldreteRec_Respiracion45: { type: String },
    aldreteRec_Respiracion60: { type: String },
    aldreteRec_Respiracion90: { type: String },
    aldreteRec_Respiracion120: { type: String },
    // Circulación
    aldreteRec_CirculacionIn: { type: String },
    aldreteRec_Circulacion15: { type: String },
    aldreteRec_Circulacion30: { type: String },
    aldreteRec_Circulacion45: { type: String },
    aldreteRec_Circulacion60: { type: String },
    aldreteRec_Circulacion90: { type: String },
    aldreteRec_Circulacion120: { type: String },
    // Estado de Conciencia
    aldreteRec_ConcienciaIn: { type: String },
    aldreteRec_Conciencia15: { type: String },
    aldreteRec_Conciencia30: { type: String },
    aldreteRec_Conciencia45: { type: String },
    aldreteRec_Conciencia60: { type: String },
    aldreteRec_Conciencia90: { type: String },
    aldreteRec_Conciencia120: { type: String },
    // Coloración
    aldreteRec_ColoracionIn: { type: String },
    aldreteRec_Coloracion15: { type: String },
    aldreteRec_Coloracion30: { type: String },
    aldreteRec_Coloracion45: { type: String },
    aldreteRec_Coloracion60: { type: String },
    aldreteRec_Coloracion90: { type: String },
    aldreteRec_Coloracion120: { type: String },
    // Bromage
    aldreteRec_BromageIn: { type: String },
    aldreteRec_Bromage15: { type: String },
    aldreteRec_Bromage30: { type: String },
    aldreteRec_Bromage45: { type: String },
    aldreteRec_Bromage60: { type: String },
    aldreteRec_Bromage90: { type: String },
    aldreteRec_Bromage120: { type: String },
    // Nauseas/Vomito
    aldreteRec_NauseasIn: { type: String },
    aldreteRec_Nauseas15: { type: String },
    aldreteRec_Nauseas30: { type: String },
    aldreteRec_Nauseas45: { type: String },
    aldreteRec_Nauseas60: { type: String },
    aldreteRec_Nauseas90: { type: String },
    aldreteRec_Nauseas120: { type: String },
    // Escala de EVA de Dolor
    aldreteRec_escEVADolIn: { type: String },
    aldreteRec_escEVADol15: { type: String },
    aldreteRec_escEVADol30: { type: String },
    aldreteRec_escEVADol45: { type: String },
    aldreteRec_escEVADol60: { type: String },
    aldreteRec_escEVADol90: { type: String },
    aldreteRec_escEVADol120: { type: String },
    // Alta Recuperación
    altaRec_0min: { type: String },
    altaRec_15min: { type: String },
    altaRec_30min: { type: String },
    altaRec_45min: { type: String },
    altaRec_60min: { type: String },
    altaRec_90min: { type: String },
    altaRec_120min: { type: String },
    altaRec_CalifAldrete: { type: String },
    altaRec_Obs: { type: String },
    altaRec_FechaAltaRec: { type: String },
    altaRec_HrAltaRec: { type: String },
    altaRec_NomMedAnest: { type: String },
});
exports.PostRecupera = (0, mongoose_1.model)('PostRecupera', PostRecuperacionSchema);
exports.PostNotaPA = (0, mongoose_1.model)('PostNotaPA', PostNotaPASchema);
