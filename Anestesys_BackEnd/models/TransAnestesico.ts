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
    
    /* Balance Total */
    balanceTotal:{type: String},
    // Ingresos
    solHartman: { type: String },
    solFisio: { type: String },
    glucosados: { type: String },
    gelatinas: { type: String },
    almidones: { type: String },
    albuminas: { type: String },
    paqGlobular: { type: String },
    plasmas: { type: String },
    plaquetas: { type: String },
    crioprecipitados: { type: String },
    factor_VII: { type: String },
    factor_VIII: { type: String },
    otrosIngresos: { type: String },
    // Egresos
    liqAscitis: { type: String },
    sangradoAprox: { type: String },
    uresis: { type: String },
    expoQX: { type: String },
    reqBasales: { type: String },
    ayuno: { type: String },
    otrosEgresos: { type: String },
    /* Técnica Anestésica */
    local: { type: String },
    sedación: { type: String },
    gralBalanceada: { type: String },
    TIVA: { type: String },
    multimodal: { type: String },
    bloqMixto: { type: String },
    bloqPeriLum: { type: String },
    bloqPeriCaudal: { type: String },
    BloqEspinal: { type: String },
    BloqPlexo: { type: String },
    BloqTroncular: { type: String },
    bloqPeriToracico: { type: String },
    bloqPeriCervical: { type: String },
    libreOpioides: { type: String },

    /* Datos del Ventilador */
    datosVentilador: [{
        modosVentilacion: { type: String},
        peep: { type: String},
        vt: { type: String},
        frecResp: { type: String},
        IE: { type: String},
        PLimite: { type: String},
        Hr: { type: String},
    }],

    /* Tiempos Qx */
    tiemposQX: [{
        ingresoQX: { type: String },
        inicioAn: { type: String },
        inicioCx: { type: String },
        finCx: { type: String },
        finAn: { type: String },
        egresoQx: { type: String },
    }],

    /* Medicamentos */
    medicamentosCx: [{
        tipoMed: {type: String},
        medicamento: {type: String},
        dosisMed: {type: String},
        unidadMed: {type: String},
        viaMed: {type: String},
        horaInicioMed: {type: String},
        horaFinalMed: {type: String},
        observacionesMed: {type: String},
    }],

    /* Relevo */
    relevoCx: [{
        horaRelevo:{ type: String },
        tipoRel:{ type: String },
        matriculaRel:{ type: String },
        anestesiologoRel:{ type: String },
        observacionesRel:{ type: String },
    }],

    /* Evento Crítico */
    evCriticoCx: [{
        horaEvento: { type: String },
        tipoEve: { type: String },
        detalleEvento: { type: String },
    }]
});

export const MenuTrans = model('MenuTrans', menuTransSchema);