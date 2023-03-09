/* Modelado para la base de datos de la vista del 
 * preanestésico
 */
import { Schema, model } from "mongoose";

const IdPacienteSchema = new Schema({
    /* Información obligatoria a llenar en el cuestionario */
    numExpediente: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },

    nomPaciente: {
        type: String,
        required: true,
        trim: true,
    },

    // numEpisodio: {
    //     type: String,
    //     required: true,
    //     trim: true,
    // },

    // uid: {
    //     type: Schema.Types.ObjectId,
    //     ref: "user",
    //     required: true,
    // },
    
    /* Información adicional */
    fechaNPaciente: {
        type: String,

    },

    edadPaciente: {
        type: String,

    },

    habitacionPaciente: {
        type: String,

    },

    generoPaciente: {
        type: String,

    },

    fechaInPaciente: {
        type: String,

    },

    diagnostico: {
        type: String,

    },

    tipoCx: {
        type: String,

    },

    cirugia: {
        type: String,

    },

    fechaCx: {
        type: String,

    },

    hrCx: {
        type: String,

    },

    cirujano: {
        type: String,

    },

    anestesiologo: {
        type: String,

    },

    anestesiologoVPA: {
        type: String,

    },
});

export const IdPacientes = model ('IdPacientes', IdPacienteSchema);