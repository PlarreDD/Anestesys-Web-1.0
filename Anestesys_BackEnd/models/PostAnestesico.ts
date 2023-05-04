/* Modelado para la base de datos de la vista de
 * información del paciente en postanestésico
 */
import { Schema, model } from "mongoose";

/* Nota Post Anestésica */
const PostNotaPASchema = new Schema({
    /* Id del paciente para enlazar la tabla */
    pid: {
        type: Schema.Types.ObjectId,
        ref: 'PreIdPacientes',
        required: true,
    },
    
    // Nota Post Anestésica
    npa_TecAnestFinal: { type: String },
    npa_Intubacion: { type: String },
    npa_NotaPostAnest: { type: String },

    // Signos Vitales al Egreso del Quirófano
    signVitEgQx_TA: { type:String },
    signVitEgQx_FC: { type:String },
    signVitEgQx_FR: { type:String },
    signVitEgQx_Temperatura: { type:String },
    signVitEgQx_Pulso: { type:String },
    signVitEgQx_SpO2: { type:String },
    signVitEgQx_EgresoPac: { type:String },
});

/* Recuperación */
const PostRecuperacionSchema = new Schema({
    /* Id del paciente para enlazar la tabla */
    pid: {
        type: Schema.Types.ObjectId,
        ref: 'PreIdPacientes',
        required: true,
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
    aldreteRec_AldreteIn: { type: String },
    aldreteRec_Aldrete15: { type: String },
    aldreteRec_Aldrete30: { type: String },
    aldreteRec_Aldrete45: { type: String },
    aldreteRec_Aldrete60: { type: String },
    aldreteRec_Aldrete90: { type: String },
    aldreteRec_Aldrete120: { type: String },
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
    altaRec_CalifAldrete: { type: String },
    altaRec_Obs: { type: String },
    altaRec_FechaAltaRec: { type: String },
    altaRec_HrAltaRec: { type: String },
    altaRec_NomMedAnest: { type: String },
});

export const PostRecupera = model('PostRecupera', PostRecuperacionSchema);
export const PostNotaPA = model('PostNotaPA', PostNotaPASchema);