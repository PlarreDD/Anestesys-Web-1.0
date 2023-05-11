/* Modelado para la base de datos de la vista de
 * información del paciente en transanestésico
 */
import { Schema, model } from "mongoose";

/* Menu Trans */
const menuTransSchema = new Schema({
    /* Id del paciente para enlazar la tabla */
    pid: {
        type: Schema.Types.ObjectId,
        ref: 'PreIdPacientes',
        required: true,
    },

    // Datos del Ventilador
    datosVentilador: [{
        modosVentilacion: { type: String},
        peep: { type: String},
        vt: { type: String},
        frecResp: { type: String},
        IE: { type: String},
        PLimite: { type: String},
        Hr: { type: String},
    }],
});

export const MenuTrans = model('MenuTrans', menuTransSchema);