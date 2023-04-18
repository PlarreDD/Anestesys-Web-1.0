/* Modelado para la base de datos de la vista de
 * información del paciente en preanestésico
 */
import { Schema, model } from "mongoose";

/* Id Paciente */
const PreIdPacienteSchema = new Schema({
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

/* Id Paciente Información Cirugía */
const PreIdPacienteCxSchema = new Schema({
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

/* Valoración */
const PreValoracionSchema = new Schema({
    /* Id del paciente para enlazar la tabla */
    pid: {
        type: Schema.Types.ObjectId,
        ref: 'IdPacientes',
        required: true,
    },
    /* Antecedentes */
    // Personales Patológicos
    antPersPat_Alergias: {
        type: String,
    },

    antPersPat_Quirurgicos: {
        type: String,
    },

    antPersPat_Endocrinologicos: {
        type: String,
    },

    antPersPat_Urologicos: {
        type: String,
    },

    antPersPat_Traumaticos: {
        type: String,
    },

    antPersPat_Ortopedicos: {
        type: String,
    },

    antPersPat_Transfusiones: {
        type: String,
    },

    antPersPat_CompAnestPrev: {
        type: String,
    },

    antPersPat_EstadoPsiq: {
        type: String,
    },

    antPersPat_MedActual: {
        type: String,
    },

    // Personales No Patológicos
    antPersNoPat_HrsAyuno: {
        type: String,
    },

    antPersNoPat_Tabaquismo: {
        type: String,
    },

    antPersNoPat_Etilismo: {
        type: String,
    },

    antPersNoPat_Adicciones: {
        type: String,
    },

    antPersNoPat_Inmunizaciones: {
        type: String,
    },

    antPersNoPat_AntImportQx: {
        type: String,
    },

    // Signos Vitales
    sigVit_Edad: {
        type: String,
    },

    sigVit_Temperatura: {
        type: String,
    },

    sigVit_FrecuCardiaca: {
        type: String,
    },

    sigVit_FrecuRespiratoria: {
        type: String,
    },

    sigVit_Peso: {
        type: String,
    },

    sigVit_Talla: {
        type: String,
    },

    sigVit_IMC: {
        type: String,
    },

    sigVit_TensionArterial: {
        type: String,
    },

    sigVit_SaturacionOxigeno: {
        type: String,
    },
});

/* Nota */
const PreNotaSchema = new Schema({
    /* Id del paciente para enlazar la tabla */
    pid: {
        type: Schema.Types.ObjectId,
        ref: 'IdPacientes',
        required: true,
    },

    /* Información de la nota pre anestésica */
    obsNota: {
        type: String,
    },
});

export const PreIdPacientes = model('PreIdPacientes', PreIdPacienteSchema);
export const PreIdPacientesCx = model('PreIdPacientesCx', PreIdPacienteCxSchema);
export const PreVal = model('PreVal', PreValoracionSchema);
export const PreNota = model('PreNota', PreNotaSchema);