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

    notaEval_Obs: { type: String, }
});

export const PostRecupera = model('PostRecupera', PostRecuperacionSchema);
export const PostNotaPA = model('PostNotaPA', PostNotaPASchema);