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
    
    // uid: {
    //     type: Schema.Types.ObjectId,
    //     ref: "user",
    //     required: true,
    // },
    
    /* Información adicional  del paciente */
    numEpisodio: {
        type: String,
    },

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

    /* Datos CIE */
    cie10: {
        type: String
    },

    cie9: {
        type: String
    },

    /* Informacion Médicos */
    cirugia: {
        type: String,
    },        

    fechaCx: {
        type: String,
    },

    hrCx: {
        type: String,
    },

    /* Informacion Médicos */
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
    },

    /* Datos Demográficos */
    nacionalidad: {
        type: String,
    },

    CURP: {
        type: String,
    },

    folioID: {
        type: String,
    },

    estNacimiento: {
        type: String,
    },

    estResidencia: {
        type: String,
    },

    alcaldia: {
        type: String,
    },

    colonia: {
        type: String,
    },

    codigoPostal: {
        type: String,
    },
});

export const IdPacientes = model ('IdPacientes', IdPacienteSchema);