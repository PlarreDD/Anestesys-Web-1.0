/* Modelado para la base de datos de la vista de
 * información de la cirugía del paciente en preanestésico
 */
import { Schema, model } from "mongoose";

const IdPacienteCxSchema = new Schema({
    /* Id del paciente para enlazar la tabla */
    pid: {
        type: Schema.Types.ObjectId,
        ref: 'IdPacientes',
        required: true,
    },

    /* Información de la cirugía del paciente */
    numEpisodio: {
        type: String,
    },    

    habitacionPaciente: {
        type: String,
    },

    fechaInPaciente: {
        type: String,
    },

    /* Datos de cirugía */
    diagnostico: {
        type: String,
    },

    tipoCx: {
        type: String,
    },

    /* Datos CIE */
    cie10: {
        type: String
    },

    cie9: {
        type: String
    },

    /* Informacion procedimiento */
    cirugia: {
        type: String,
    },        

    fechaCx: {
        type: String,
    },

    hrCx: {
        type: String,
    },

    /* Informacion de los médicos */
    cirujano: {
        type: String,
    },

    anestesiologo: {
        type: String,
    },

    anestesiologoVPA: {
        type: String,
    },

    residenteAnestesia: {
        type: String,
    }
});

export const IdPacientesCx = model ('IdPacientesCx', IdPacienteCxSchema);