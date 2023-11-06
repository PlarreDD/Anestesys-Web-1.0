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

    fechaNPaciente: { type: String, },
    edadPaciente: { type: String, },    
    generoPaciente: { type: String, },

    /* Datos Demográficos */
    nacionalidad: { type: String, },
    CURP: { type: String, },
    folioID: { type: String, },
    estNacimiento: { type: String, },
    estResidencia: { type: String, },
    alcaldia: { type: String, },
    colonia: { type: String, },
    codigoPostal: { type: String, }
});

/* Id Paciente Información Cirugía */
const PreIdPacienteCxSchema = new Schema({
    /* Id del paciente para enlazar la tabla */
    pid: {
        type: Schema.Types.ObjectId,
        ref: 'PreIdPacientes',
        required: true,
    },    

    /* Información de la cirugía del paciente */
    numEpisodio: { type: String, },
    habitacionPaciente: { type: String, },
    fechaInPaciente: { type: String, },

    /* Datos de cirugía */
    diagnostico: { type: String, },
    tipoCx: { type: String, },

    /* Datos CIE */
    cie10: { type: String },
    cie9: { type: String },

    /* Informacion procedimiento */
    cirugia: { type: String, },
    fechaCx: { type: String, },
    hrCx: { type: String, },

    /* Informacion de los médicos */
    cirujano: { type: String, },
    anestesiologo: { type: String, },
    anestesiologoVPA: { type: String, },
    residenteAnestesia: { type: String, }
});

/* Valoración */
const PreValoracionSchema = new Schema({
    /* Id del paciente para enlazar la tabla */
    pid: {
        type: Schema.Types.ObjectId,
        ref: 'PreIdPacientes',
        required: true,
    },

    cxid:{
        type: Schema.Types.ObjectId,
        ref: 'PreIdPacientesCx',
        required: false
    },

    /* Antecedentes */
    // Personales Patológicos
    antPersPat_Alergias: { type: String, },
    antPersPat_Quirurgicos: { type: String, },
    antPersPat_Endocrinologicos: { type: String, },
    antPersPat_Urologicos: { type: String, },
    antPersPat_Traumaticos: { type: String, },
    antPersPat_Ortopedicos: { type: String, },
    antPersPat_Transfusiones: { type: String, },
    antPersPat_CompAnestPrev: { type: String, },
    antPersPat_EstadoPsiq: { type: String, },
    antPersPat_MedActual: { type: String, },
    // Personales No Patológicos
    antPersNoPat_HrsAyuno: { type: String, },
    antPersNoPat_Tabaquismo: { type: String, },
    antPersNoPat_Etilismo: { type: String, },
    antPersNoPat_Adicciones: { type: String, },
    antPersNoPat_Inmunizaciones: { type: String, },
    antPersNoPat_AntImportQx: { type: String, },

    /* Exploración Física */
    sigVit_Edad: { type: String, },
    sigVit_Temperatura: { type: String, },
    sigVit_FrecuCardiaca: { type: String, },
    sigVit_FrecuRespiratoria: { type: String, },
    sigVit_Peso: { type: String, },
    sigVit_Talla: { type: String, },
    sigVit_IMC: { type: String, },
    sigVit_TensionArterial: { type: String, },
    sigVit_SaturacionOxigeno: { type: String, },
    expFis_VASCabeza: { type: String, },
    expFis_VASCuello: { type: String, },
    expFis_VASRespiratorio: { type: String, },
    expFis_VASCardioVasc: { type: String, },
    expFis_VASHipertension: { type: String, },
    expFis_VASAbdomen: { type: String, },
    expFis_VASGenUr: { type: String, },
    expFis_VASMuscEsq: { type: String, },
    expFis_VASNeuro: { type: String, },
    expFis_VASPielFaneras: { type: String, },
    
    /* Vía Aérea */
    viaAerea_Mallampati: { type: String, },
    viaAerea_PatilAldreti: { type: String, },    
    viaAerea_AperturaBucal: { type: String, },    
    viaAerea_Distancia: { type: String, },    
    viaAerea_Protusion: { type: String, },    
    viaAerea_Ipid: { type: String, },    
    viaAerea_Glasgow: { type: String, },    
    viaAerea_NYHA: { type: String, },    
    viaAerea_Goldman: { type: String, },
    viaAerea_RiesgoTrombosis: { type: String, },    
    viaAerea_ClasificacionASA: { type: String, },    
    viaAerea_TipoCirugia: { type: String, },    
    viaAerea_RiesgoAnestesico: { type: String, },

    /* Laboratorio */
    perfilBioQ_FechaRealizacion: { type: String, },
    perfilBioQ_GrupoSanguineo: { type: String, },
    perfilBioQ_Hemoglobina: { type: String, },
    perfilBioQ_Hematocrito: { type: String, },
    perfilBioQ_Plaquetas: { type: String, },
    perfilBioQ_Leutocitos: { type: String, },
    perfilBioQ_TP: { type: String, },
    perfilBioQ_TT: { type: String, },
    perfilBioQ_TPT: { type: String, },
    perfilBioQ_INR: { type: String, },
    perfilBioQ_Glucosa: { type: String, },
    perfilBioQ_Creatinina: { type: String, },
    perfilBioQ_Urea: { type: String, },
    perfilBioQ_Sodio: { type: String, },
    perfilBioQ_Potasio: { type: String, },
    perfilBioQ_Cloro: { type: String, },
    perfilBioQ_Calcio: { type: String, },
    perfilBioQ_Magnesio: { type: String, },
    perfilBioQ_BilirrubinaDirecta: { type: String, },
    perfilBioQ_BilirrubinaIndirecta: { type: String, },
    perfilBioQ_BilirrubinaTotal: { type: String, },
    perfilBioQ_Lipasa: { type: String, },
    perfilBioQ_Amilasa: { type: String, },
    perfilBioQ_Otros: { type: String, },
});

const ValEstudiosSchema = new Schema({
    /* Id de la valoración para enlazar la tabla */
    vid: {
        type: Schema.Types.ObjectId,
        ref: 'PreVal',
        required: true,
    },

    // Estudios
    val_Estudios: [{
        estudio: { type: String },
        especifEstudio: { type: String },
    }],
});

/* Plan */
const PrePlanSchema = new Schema({
    /* Id del paciente para enlazar la tabla */
    pid: {
        type: Schema.Types.ObjectId,
        ref: 'PreIdPacientes',
        required: true,
    },

    cxid:{
        type: Schema.Types.ObjectId,
        ref: 'PreIdPacientesCx',
        required: false
    },
    
    /* Posicion y Cuidados */
    pos_HorasAyuno: { type: String, },
    pos_AccesoVenoso: { type: String, },
    pos_PosicionPaciente: { type: String, },
    pos_PosicionBrazos: { type: String, },
    pos_Torniquete: { type: String, },
    pos_AplicacionTorniquete: { type: String, },
    pos_Sitio: { type: String, },
    pos_TiempoIsquemia: { type: String, },
    pos_ProteccionOjos: { type: String, },
    pos_ProtecProminencias: { type: String, },
    pos_TecnicaAnestesica: { type: String, },
    pos_Premedicacion: { type: String, },
    pos_EspPremedicacion: { type: String, },
    pos_Monitoreo: { type: String, },

    /* Tipos de Anestésia */
    // Sedación
    sedacion_Via: { type: String, },
    sedacion_Opcion: { type: String, },
    sedacion_Observaciones: { type: String, },
    sedacion_Medicamentos: { type: String, },
    
    /* Regional */
    // Bloqueo Neuro-Axial
    regional_Tipo: { type: String, },
    regional_TipoAguja: { type: String, },
    regional_Nivel: { type: String, },
    regional_CalibreAguja: { type: String, },
    regional_Cateter: { type: String, },
    regional_OrientacionCateter: { type: String, },
    regional_ProbDificulNeuro: { type: String, },
    regional_EspDificultadesNeuro: { type: String, },
    // Bloqueo Plexo
    regional_Sitio: { type: String, },
    regional_Opcion: { type: String, },
    regional_EspSitio: { type: String, },
    regional_AnestesicoUtilizado: { type: String, },
    regional_EspAnestesico: { type: String, },
    regional_ProbDificulPlexo: { type: String, },
    regional_EspDificulPlexo: { type: String, },
    // Equipo de Apoyo
    regional_Ultrasonido: { type: String, },
    regional_EspUltrasonido: { type: String, },
    regional_Neuroestimulador: { type: String, },
    regional_EspNeuroestimulador: { type: String, },
    regional_ProbComplicaciones: { type: String, },
    regional_EspDificEquipo: { type: String, },
    
    /* Tipos de Anestésia */
    // Local
    local_SitioAnestesiaL: { type: String, },
    local_AnestesicoUtilizado: { type: String, },
    local_Especificar: { type: String, },
    // General
    // Intubación
    general_Induccion: { type: String, },
    general_Tubo: { type: String, },
    general_NumeroTubo: { type: String, },
    general_TipoCanula: { type: String, },
    general_Globo: { type: String, },
    general_Presion: { type: String, },
    general_DifTecnicasIntubacion: { type: String, },
    general_EspDifTecIntubacion: { type: String, },
    // Dispositivos Supraglóticos
    general_DispositivosSupro: { type: String, },
    general_Calibre: { type: String, },
    general_Complicaciones: { type: String, },
    general_EspComplicaciones: { type: String, },
    // Otros Disposotivos
    general_OtrosDispositivos: { type: String, },    
    general_EspOtrosDispositivos: { type: String, },
});

/* Nota */
const PreNotaSchema = new Schema({
    /* Id del paciente para enlazar la tabla */
    pid: {
        type: Schema.Types.ObjectId,
        ref: 'PreIdPacientes',
        required: true,
    },

    cxid:{
        type: Schema.Types.ObjectId,
        ref: 'PreIdPacientesCx',
        required: false
    },

    /* Información de la nota pre anestésica */
    obsNota: { type: String, },
});

export const PreIdPacientes = model('PreIdPacientes', PreIdPacienteSchema);
export const PreIdPacientesCx = model('PreIdPacientesCx', PreIdPacienteCxSchema);
export const PreValoracion = model('PreVal', PreValoracionSchema);
export const ValEstudios = model('PreEst', ValEstudiosSchema);
export const PrePlan = model('PrePlan', PrePlanSchema);
export const PreNota = model('PreNota', PreNotaSchema);