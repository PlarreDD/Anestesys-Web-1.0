/* Modelado para la base de datos de la vista de
 * información del paciente en postanestésico
 */
import { Schema, model } from "mongoose";

/* Recuperación */
const PostRecuperacionSchema = new Schema({
    /* Id del paciente para enlazar la tabla */
    pid: {
        type: Schema.Types.ObjectId,
        ref: 'PreIdPacientes',
        required: true,
    },

    notaEval_Obs: {
        type: String,
    }
});

export const PostRecupera = model('PostRecupera', PostRecuperacionSchema);