/* Modelado para la base de datos de la vista de
 * información personal del paciente en preanestésico
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
    
    uid: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },

    fechaNPaciente: {
        type: String,
    },

    edadPaciente: {
        type: String,
    },
    
    generoPaciente: {
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
    }
});

const IdNotaSchema = new Schema({
    /* Id del paciente para enlazar la tabla */
    pid: {
        type: Schema.Types.ObjectId,
        ref: 'IdPacientes',
        required: true,
    },

    obsNota: {
        type: String,
    },
});

export const IdPacientes = model ('IdPacientes', IdPacienteSchema);
export const IdNota = model('IdNota', IdNotaSchema);