"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuTrans = void 0;
/* Modelado para la base de datos de la vista de
 * información del paciente en transanestésico
 */
const mongoose_1 = require("mongoose");
/* Menu Trans */
const menuTransSchema = new mongoose_1.Schema({
    /* Id del paciente para enlazar la tabla */
    pid: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'PreIdPacientes',
        required: true,
    },
    cxid: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'PreIdPacientesCx',
        required: false
    },
    // Balances parciales
    balancesParciales: [
        {
            horaBalance: { type: String },
            ingresos: { type: String },
            egresos: { type: String },
            balanceP: { type: String }
        }
    ],
    /* Balance Total */
    balanceTotal: { type: String },
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
    /* Datos del Ventilador */
    datosVentilador: [{
            modosVentilacion: { type: String },
            peep: { type: String },
            vt: { type: String },
            frecResp: { type: String },
            IE: { type: String },
            PLimite: { type: String },
            Hr: { type: String },
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
            tipoMed: { type: String },
            medicamento: { type: String },
            dosisMed: { type: String },
            unidadMed: { type: String },
            viaMed: { type: String },
            horaInicioMed: { type: String },
            horaFinalMed: { type: String },
            observacionesMed: { type: String },
            valorGrafica: { type: String },
        }],
    /* Suma medicamentos */
    medicamentosSuma: [{
            medicamento: { type: String },
            bolo: { type: String },
            unidadBolo: { type: String },
            infusion: { type: String },
            unidadInfusion: { type: String },
            total: { type: String },
            unidadTotal: { type: String }
        }],
    /* Relevo */
    relevoCx: [{
            horaRelevo: { type: String },
            tipoRel: { type: String },
            matriculaRel: { type: String },
            anestesiologoRel: { type: String },
            observacionesRel: { type: String },
            valorGraficaRel: { type: String }
        }],
    /* Evento Crítico */
    evCriticoCx: [{
            horaEvento: { type: String },
            tipoEve: { type: String },
            detalleEvento: { type: String },
            valorGraficaEv: { type: String }
        }],
    datosMSV: [
        {
            FC: { type: String },
            Pulso: { type: String },
            PAS: { type: String },
            PAD: { type: String },
            PAM: { type: String },
            SpO2: { type: String },
            EtCO2: { type: String },
            Temp1: { type: String },
            Temp2: { type: String },
            PVC: { type: String },
            PAS_IN: { type: String },
            PAD_IN: { type: String },
            PAM_IN: { type: String },
            FiCO2: { type: String },
            FR: { type: String },
            HoraGeneracion: { type: String }
        }
    ]
});
exports.MenuTrans = (0, mongoose_1.model)('MenuTrans', menuTransSchema);
