/* Modelado para la base de datos de la vista de
 * información personal del paciente en preanestésico
 */
import { Schema, model } from "mongoose";

/* Pre Anestésico Id Paciente */
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

/* Pre Anestésico Id Paciente Información Cirugía */
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

/* Pre Anestésico Nota */
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
export const IdPacientesCx = model ('IdPacientesCx', IdPacienteCxSchema);
export const IdNota = model('IdNota', IdNotaSchema);