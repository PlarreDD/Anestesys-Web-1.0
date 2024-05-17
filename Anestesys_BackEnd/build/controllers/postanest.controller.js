"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNuevoRecuperacion = exports.updateRecuperacion = exports.saveNuevoRecuperacion = exports.saveRecuperacion = exports.listNuevoNotaPA = exports.listNotaPA = exports.updateNuevoNotaPA = exports.updateNotaPA = exports.saveNuevoNotaPA = exports.saveNotaPA = void 0;
const PostAnestesico_1 = require("../models/PostAnestesico");
const logger_1 = __importDefault(require("../logger"));
/********************************************************************/
/************************ NOTA POST-ANESTÉSICA **********************/
/********************************************************************/
const saveNotaPA = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid, 
        // Nota Post Anestésica
        npa_TecAnestFinal, npa_Intubacion, npa_NotaPostAnest, 
        // Signos Vitales al Egreso del Quirófano
        signVitEgQx_TA, signVitEgQx_FC, signVitEgQx_FR, signVitEgQx_Temperatura, signVitEgQx_Pulso, signVitEgQx_SpO2, signVitEgQx_EgresoPac, 
        //Caso Obstétrico Recien Nacido
        casoObsRecNac_NumProd, casoObsRecNac1_Genero, casoObsRecNac1_HrNacimiento, casoObsRecNac1_Alumbramiento, casoObsRecNac1_Apgar1, casoObsRecNac1_Apgar5, casoObsRecNac1_Capurro, casoObsRecNac1_Peso, casoObsRecNac1_Talla, casoObsRecNac2_Genero, casoObsRecNac2_HrNacimiento, casoObsRecNac2_Alumbramiento, casoObsRecNac2_Apgar1, casoObsRecNac2_Apgar5, casoObsRecNac2_Capurro, casoObsRecNac2_Peso, casoObsRecNac2_Talla, casoObsRecNac3_Genero, casoObsRecNac3_HrNacimiento, casoObsRecNac3_Alumbramiento, casoObsRecNac3_Apgar1, casoObsRecNac3_Apgar5, casoObsRecNac3_Capurro, casoObsRecNac3_Peso, casoObsRecNac3_Talla, casoObsRecNac4_Genero, casoObsRecNac4_HrNacimiento, casoObsRecNac4_Alumbramiento, casoObsRecNac4_Apgar1, casoObsRecNac4_Apgar5, casoObsRecNac4_Capurro, casoObsRecNac4_Peso, casoObsRecNac4_Talla, casoObsRecNac5_Genero, casoObsRecNac5_HrNacimiento, casoObsRecNac5_Alumbramiento, casoObsRecNac5_Apgar1, casoObsRecNac5_Apgar5, casoObsRecNac5_Capurro, casoObsRecNac5_Peso, casoObsRecNac5_Talla, casoObsRecNac6_Genero, casoObsRecNac6_HrNacimiento, casoObsRecNac6_Alumbramiento, casoObsRecNac6_Apgar1, casoObsRecNac6_Apgar5, casoObsRecNac6_Capurro, casoObsRecNac6_Peso, casoObsRecNac6_Talla } = req.body;
        const notaPA = new PostAnestesico_1.PostNotaPA({ pid: pid, cxid: cxid,
            // Nota Post Anestésica
            npa_TecAnestFinal: npa_TecAnestFinal,
            npa_Intubacion: npa_Intubacion,
            npa_NotaPostAnest: npa_NotaPostAnest,
            // Signos Vitales al Egreso del Quirófano
            signVitEgQx_TA: signVitEgQx_TA,
            signVitEgQx_FC: signVitEgQx_FC,
            signVitEgQx_FR: signVitEgQx_FR,
            signVitEgQx_Temperatura: signVitEgQx_Temperatura,
            signVitEgQx_Pulso: signVitEgQx_Pulso,
            signVitEgQx_SpO2: signVitEgQx_SpO2,
            signVitEgQx_EgresoPac: signVitEgQx_EgresoPac,
            //Caso Obstétrico Recien Nacido
            casoObsRecNac_NumProd: casoObsRecNac_NumProd, casoObsRecNac1_Genero: casoObsRecNac1_Genero,
            casoObsRecNac1_HrNacimiento: casoObsRecNac1_HrNacimiento, casoObsRecNac1_Alumbramiento: casoObsRecNac1_Alumbramiento,
            casoObsRecNac1_Apgar1: casoObsRecNac1_Apgar1, casoObsRecNac1_Apgar5: casoObsRecNac1_Apgar5,
            casoObsRecNac1_Capurro: casoObsRecNac1_Capurro, casoObsRecNac1_Peso: casoObsRecNac1_Peso,
            casoObsRecNac1_Talla: casoObsRecNac1_Talla, casoObsRecNac2_Genero: casoObsRecNac2_Genero,
            casoObsRecNac2_HrNacimiento: casoObsRecNac2_HrNacimiento, casoObsRecNac2_Alumbramiento: casoObsRecNac2_Alumbramiento,
            casoObsRecNac2_Apgar1: casoObsRecNac2_Apgar1, casoObsRecNac2_Apgar5: casoObsRecNac2_Apgar5,
            casoObsRecNac2_Capurro: casoObsRecNac2_Capurro, casoObsRecNac2_Peso: casoObsRecNac2_Peso,
            casoObsRecNac2_Talla: casoObsRecNac2_Talla, casoObsRecNac3_Genero: casoObsRecNac3_Genero,
            casoObsRecNac3_HrNacimiento: casoObsRecNac3_HrNacimiento, casoObsRecNac3_Alumbramiento: casoObsRecNac3_Alumbramiento,
            casoObsRecNac3_Apgar1: casoObsRecNac3_Apgar1, casoObsRecNac3_Apgar5: casoObsRecNac3_Apgar5,
            casoObsRecNac3_Capurro: casoObsRecNac3_Capurro, casoObsRecNac3_Peso: casoObsRecNac3_Peso,
            casoObsRecNac3_Talla: casoObsRecNac3_Talla, casoObsRecNac4_Genero: casoObsRecNac4_Genero,
            casoObsRecNac4_HrNacimiento: casoObsRecNac4_HrNacimiento, casoObsRecNac4_Alumbramiento: casoObsRecNac4_Alumbramiento,
            casoObsRecNac4_Apgar1: casoObsRecNac4_Apgar1, casoObsRecNac4_Apgar5: casoObsRecNac4_Apgar5,
            casoObsRecNac4_Capurro: casoObsRecNac4_Capurro, casoObsRecNac4_Peso: casoObsRecNac4_Peso,
            casoObsRecNac4_Talla: casoObsRecNac4_Talla, casoObsRecNac5_Genero: casoObsRecNac5_Genero,
            casoObsRecNac5_HrNacimiento: casoObsRecNac5_HrNacimiento, casoObsRecNac5_Alumbramiento: casoObsRecNac5_Alumbramiento,
            casoObsRecNac5_Apgar1: casoObsRecNac5_Apgar1, casoObsRecNac5_Apgar5: casoObsRecNac5_Apgar5,
            casoObsRecNac5_Capurro: casoObsRecNac5_Capurro, casoObsRecNac5_Peso: casoObsRecNac5_Peso,
            casoObsRecNac5_Talla: casoObsRecNac5_Talla, casoObsRecNac6_Genero: casoObsRecNac6_Genero,
            casoObsRecNac6_HrNacimiento: casoObsRecNac6_HrNacimiento, casoObsRecNac6_Alumbramiento: casoObsRecNac6_Alumbramiento,
            casoObsRecNac6_Apgar1: casoObsRecNac6_Apgar1, casoObsRecNac6_Apgar5: casoObsRecNac6_Apgar5,
            casoObsRecNac6_Capurro: casoObsRecNac6_Capurro, casoObsRecNac6_Peso: casoObsRecNac6_Peso,
            casoObsRecNac6_Talla: casoObsRecNac6_Talla
        });
        yield notaPA.save();
        return res.json({ notaPA });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveNotaPA = saveNotaPA;
const saveNuevoNotaPA = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid, 
        // Nota Post Anestésica
        npa_TecAnestFinal, npa_Intubacion, npa_NotaPostAnest, 
        // Signos Vitales al Egreso del Quirófano
        signVitEgQx_TA, signVitEgQx_FC, signVitEgQx_FR, signVitEgQx_Temperatura, signVitEgQx_Pulso, signVitEgQx_SpO2, signVitEgQx_EgresoPac, 
        //Caso Obstétrico Recien Nacido
        casoObsRecNac_NumProd, casoObsRecNac1_Genero, casoObsRecNac1_HrNacimiento, casoObsRecNac1_Alumbramiento, casoObsRecNac1_Apgar1, casoObsRecNac1_Apgar5, casoObsRecNac1_Capurro, casoObsRecNac1_Peso, casoObsRecNac1_Talla, casoObsRecNac2_Genero, casoObsRecNac2_HrNacimiento, casoObsRecNac2_Alumbramiento, casoObsRecNac2_Apgar1, casoObsRecNac2_Apgar5, casoObsRecNac2_Capurro, casoObsRecNac2_Peso, casoObsRecNac2_Talla, casoObsRecNac3_Genero, casoObsRecNac3_HrNacimiento, casoObsRecNac3_Alumbramiento, casoObsRecNac3_Apgar1, casoObsRecNac3_Apgar5, casoObsRecNac3_Capurro, casoObsRecNac3_Peso, casoObsRecNac3_Talla, casoObsRecNac4_Genero, casoObsRecNac4_HrNacimiento, casoObsRecNac4_Alumbramiento, casoObsRecNac4_Apgar1, casoObsRecNac4_Apgar5, casoObsRecNac4_Capurro, casoObsRecNac4_Peso, casoObsRecNac4_Talla, casoObsRecNac5_Genero, casoObsRecNac5_HrNacimiento, casoObsRecNac5_Alumbramiento, casoObsRecNac5_Apgar1, casoObsRecNac5_Apgar5, casoObsRecNac5_Capurro, casoObsRecNac5_Peso, casoObsRecNac5_Talla, casoObsRecNac6_Genero, casoObsRecNac6_HrNacimiento, casoObsRecNac6_Alumbramiento, casoObsRecNac6_Apgar1, casoObsRecNac6_Apgar5, casoObsRecNac6_Capurro, casoObsRecNac6_Peso, casoObsRecNac6_Talla } = req.body;
        const notaPA = new PostAnestesico_1.PostNotaPA({ pid, cxid,
            // Nota Post Anestésica
            npa_TecAnestFinal: npa_TecAnestFinal,
            npa_Intubacion: npa_Intubacion,
            npa_NotaPostAnest: npa_NotaPostAnest,
            // Signos Vitales al Egreso del Quirófano
            signVitEgQx_TA: signVitEgQx_TA,
            signVitEgQx_FC: signVitEgQx_FC,
            signVitEgQx_FR: signVitEgQx_FR,
            signVitEgQx_Temperatura: signVitEgQx_Temperatura,
            signVitEgQx_Pulso: signVitEgQx_Pulso,
            signVitEgQx_SpO2: signVitEgQx_SpO2,
            signVitEgQx_EgresoPac: signVitEgQx_EgresoPac,
            //Caso Obstétrico Recien Nacido
            casoObsRecNac_NumProd: casoObsRecNac_NumProd, casoObsRecNac1_Genero: casoObsRecNac1_Genero,
            casoObsRecNac1_HrNacimiento: casoObsRecNac1_HrNacimiento, casoObsRecNac1_Alumbramiento: casoObsRecNac1_Alumbramiento,
            casoObsRecNac1_Apgar1: casoObsRecNac1_Apgar1, casoObsRecNac1_Apgar5: casoObsRecNac1_Apgar5,
            casoObsRecNac1_Capurro: casoObsRecNac1_Capurro, casoObsRecNac1_Peso: casoObsRecNac1_Peso,
            casoObsRecNac1_Talla: casoObsRecNac1_Talla, casoObsRecNac2_Genero: casoObsRecNac2_Genero,
            casoObsRecNac2_HrNacimiento: casoObsRecNac2_HrNacimiento, casoObsRecNac2_Alumbramiento: casoObsRecNac2_Alumbramiento,
            casoObsRecNac2_Apgar1: casoObsRecNac2_Apgar1, casoObsRecNac2_Apgar5: casoObsRecNac2_Apgar5,
            casoObsRecNac2_Capurro: casoObsRecNac2_Capurro, casoObsRecNac2_Peso: casoObsRecNac2_Peso,
            casoObsRecNac2_Talla: casoObsRecNac2_Talla, casoObsRecNac3_Genero: casoObsRecNac3_Genero,
            casoObsRecNac3_HrNacimiento: casoObsRecNac3_HrNacimiento, casoObsRecNac3_Alumbramiento: casoObsRecNac3_Alumbramiento,
            casoObsRecNac3_Apgar1: casoObsRecNac3_Apgar1, casoObsRecNac3_Apgar5: casoObsRecNac3_Apgar5,
            casoObsRecNac3_Capurro: casoObsRecNac3_Capurro, casoObsRecNac3_Peso: casoObsRecNac3_Peso,
            casoObsRecNac3_Talla: casoObsRecNac3_Talla, casoObsRecNac4_Genero: casoObsRecNac4_Genero,
            casoObsRecNac4_HrNacimiento: casoObsRecNac4_HrNacimiento, casoObsRecNac4_Alumbramiento: casoObsRecNac4_Alumbramiento,
            casoObsRecNac4_Apgar1: casoObsRecNac4_Apgar1, casoObsRecNac4_Apgar5: casoObsRecNac4_Apgar5,
            casoObsRecNac4_Capurro: casoObsRecNac4_Capurro, casoObsRecNac4_Peso: casoObsRecNac4_Peso,
            casoObsRecNac4_Talla: casoObsRecNac4_Talla, casoObsRecNac5_Genero: casoObsRecNac5_Genero,
            casoObsRecNac5_HrNacimiento: casoObsRecNac5_HrNacimiento, casoObsRecNac5_Alumbramiento: casoObsRecNac5_Alumbramiento,
            casoObsRecNac5_Apgar1: casoObsRecNac5_Apgar1, casoObsRecNac5_Apgar5: casoObsRecNac5_Apgar5,
            casoObsRecNac5_Capurro: casoObsRecNac5_Capurro, casoObsRecNac5_Peso: casoObsRecNac5_Peso,
            casoObsRecNac5_Talla: casoObsRecNac5_Talla, casoObsRecNac6_Genero: casoObsRecNac6_Genero,
            casoObsRecNac6_HrNacimiento: casoObsRecNac6_HrNacimiento, casoObsRecNac6_Alumbramiento: casoObsRecNac6_Alumbramiento,
            casoObsRecNac6_Apgar1: casoObsRecNac6_Apgar1, casoObsRecNac6_Apgar5: casoObsRecNac6_Apgar5,
            casoObsRecNac6_Capurro: casoObsRecNac6_Capurro, casoObsRecNac6_Peso: casoObsRecNac6_Peso,
            casoObsRecNac6_Talla: casoObsRecNac6_Talla
        });
        yield notaPA.save();
        return res.json({ notaPA });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveNuevoNotaPA = saveNuevoNotaPA;
const updateNotaPA = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { // Nota Post Anestésica
        npa_TecAnestFinal, npa_Intubacion, npa_NotaPostAnest, 
        // Signos Vitales al Egreso del Quirófano
        signVitEgQx_TA, signVitEgQx_FC, signVitEgQx_FR, signVitEgQx_Temperatura, signVitEgQx_Pulso, signVitEgQx_SpO2, signVitEgQx_EgresoPac, 
        //Caso Obstétrico Recien Nacido
        casoObsRecNac_NumProd, casoObsRecNac1_Genero, casoObsRecNac1_HrNacimiento, casoObsRecNac1_Alumbramiento, casoObsRecNac1_Apgar1, casoObsRecNac1_Apgar5, casoObsRecNac1_Capurro, casoObsRecNac1_Peso, casoObsRecNac1_Talla, casoObsRecNac2_Genero, casoObsRecNac2_HrNacimiento, casoObsRecNac2_Alumbramiento, casoObsRecNac2_Apgar1, casoObsRecNac2_Apgar5, casoObsRecNac2_Capurro, casoObsRecNac2_Peso, casoObsRecNac2_Talla, casoObsRecNac3_Genero, casoObsRecNac3_HrNacimiento, casoObsRecNac3_Alumbramiento, casoObsRecNac3_Apgar1, casoObsRecNac3_Apgar5, casoObsRecNac3_Capurro, casoObsRecNac3_Peso, casoObsRecNac3_Talla, casoObsRecNac4_Genero, casoObsRecNac4_HrNacimiento, casoObsRecNac4_Alumbramiento, casoObsRecNac4_Apgar1, casoObsRecNac4_Apgar5, casoObsRecNac4_Capurro, casoObsRecNac4_Peso, casoObsRecNac4_Talla, casoObsRecNac5_Genero, casoObsRecNac5_HrNacimiento, casoObsRecNac5_Alumbramiento, casoObsRecNac5_Apgar1, casoObsRecNac5_Apgar5, casoObsRecNac5_Capurro, casoObsRecNac5_Peso, casoObsRecNac5_Talla, casoObsRecNac6_Genero, casoObsRecNac6_HrNacimiento, casoObsRecNac6_Alumbramiento, casoObsRecNac6_Apgar1, casoObsRecNac6_Apgar5, casoObsRecNac6_Capurro, casoObsRecNac6_Peso, casoObsRecNac6_Talla } = req.body;
        const notaPA = yield PostAnestesico_1.PostNotaPA.findOneAndUpdate({ pid: id }, {
            npa_TecAnestFinal: npa_TecAnestFinal,
            npa_Intubacion: npa_Intubacion,
            npa_NotaPostAnest: npa_NotaPostAnest,
            // Signos Vitales al Egreso del Quirófano
            signVitEgQx_TA: signVitEgQx_TA,
            signVitEgQx_FC: signVitEgQx_FC,
            signVitEgQx_FR: signVitEgQx_FR,
            signVitEgQx_Temperatura: signVitEgQx_Temperatura,
            signVitEgQx_Pulso: signVitEgQx_Pulso,
            signVitEgQx_SpO2: signVitEgQx_SpO2,
            signVitEgQx_EgresoPac: signVitEgQx_EgresoPac,
            //Caso Obstétrico Recien Nacido
            casoObsRecNac_NumProd: casoObsRecNac_NumProd, casoObsRecNac1_Genero: casoObsRecNac1_Genero,
            casoObsRecNac1_HrNacimiento: casoObsRecNac1_HrNacimiento, casoObsRecNac1_Alumbramiento: casoObsRecNac1_Alumbramiento,
            casoObsRecNac1_Apgar1: casoObsRecNac1_Apgar1, casoObsRecNac1_Apgar5: casoObsRecNac1_Apgar5,
            casoObsRecNac1_Capurro: casoObsRecNac1_Capurro, casoObsRecNac1_Peso: casoObsRecNac1_Peso,
            casoObsRecNac1_Talla: casoObsRecNac1_Talla, casoObsRecNac2_Genero: casoObsRecNac2_Genero,
            casoObsRecNac2_HrNacimiento: casoObsRecNac2_HrNacimiento, casoObsRecNac2_Alumbramiento: casoObsRecNac2_Alumbramiento,
            casoObsRecNac2_Apgar1: casoObsRecNac2_Apgar1, casoObsRecNac2_Apgar5: casoObsRecNac2_Apgar5,
            casoObsRecNac2_Capurro: casoObsRecNac2_Capurro, casoObsRecNac2_Peso: casoObsRecNac2_Peso,
            casoObsRecNac2_Talla: casoObsRecNac2_Talla, casoObsRecNac3_Genero: casoObsRecNac3_Genero,
            casoObsRecNac3_HrNacimiento: casoObsRecNac3_HrNacimiento, casoObsRecNac3_Alumbramiento: casoObsRecNac3_Alumbramiento,
            casoObsRecNac3_Apgar1: casoObsRecNac3_Apgar1, casoObsRecNac3_Apgar5: casoObsRecNac3_Apgar5,
            casoObsRecNac3_Capurro: casoObsRecNac3_Capurro, casoObsRecNac3_Peso: casoObsRecNac3_Peso,
            casoObsRecNac3_Talla: casoObsRecNac3_Talla, casoObsRecNac4_Genero: casoObsRecNac4_Genero,
            casoObsRecNac4_HrNacimiento: casoObsRecNac4_HrNacimiento, casoObsRecNac4_Alumbramiento: casoObsRecNac4_Alumbramiento,
            casoObsRecNac4_Apgar1: casoObsRecNac4_Apgar1, casoObsRecNac4_Apgar5: casoObsRecNac4_Apgar5,
            casoObsRecNac4_Capurro: casoObsRecNac4_Capurro, casoObsRecNac4_Peso: casoObsRecNac4_Peso,
            casoObsRecNac4_Talla: casoObsRecNac4_Talla, casoObsRecNac5_Genero: casoObsRecNac5_Genero,
            casoObsRecNac5_HrNacimiento: casoObsRecNac5_HrNacimiento, casoObsRecNac5_Alumbramiento: casoObsRecNac5_Alumbramiento,
            casoObsRecNac5_Apgar1: casoObsRecNac5_Apgar1, casoObsRecNac5_Apgar5: casoObsRecNac5_Apgar5,
            casoObsRecNac5_Capurro: casoObsRecNac5_Capurro, casoObsRecNac5_Peso: casoObsRecNac5_Peso,
            casoObsRecNac5_Talla: casoObsRecNac5_Talla, casoObsRecNac6_Genero: casoObsRecNac6_Genero,
            casoObsRecNac6_HrNacimiento: casoObsRecNac6_HrNacimiento, casoObsRecNac6_Alumbramiento: casoObsRecNac6_Alumbramiento,
            casoObsRecNac6_Apgar1: casoObsRecNac6_Apgar1, casoObsRecNac6_Apgar5: casoObsRecNac6_Apgar5,
            casoObsRecNac6_Capurro: casoObsRecNac6_Capurro, casoObsRecNac6_Peso: casoObsRecNac6_Peso,
            casoObsRecNac6_Talla: casoObsRecNac6_Talla
        });
        return res.json({ notaPA });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.updateNotaPA = updateNotaPA;
const updateNuevoNotaPA = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, cxid } = req.params;
        const { // Nota Post Anestésica
        npa_TecAnestFinal, npa_Intubacion, npa_NotaPostAnest, 
        // Signos Vitales al Egreso del Quirófano
        signVitEgQx_TA, signVitEgQx_FC, signVitEgQx_FR, signVitEgQx_Temperatura, signVitEgQx_Pulso, signVitEgQx_SpO2, signVitEgQx_EgresoPac, 
        //Caso Obstétrico Recien Nacido
        casoObsRecNac_NumProd, casoObsRecNac1_Genero, casoObsRecNac1_HrNacimiento, casoObsRecNac1_Alumbramiento, casoObsRecNac1_Apgar1, casoObsRecNac1_Apgar5, casoObsRecNac1_Capurro, casoObsRecNac1_Peso, casoObsRecNac1_Talla, casoObsRecNac2_Genero, casoObsRecNac2_HrNacimiento, casoObsRecNac2_Alumbramiento, casoObsRecNac2_Apgar1, casoObsRecNac2_Apgar5, casoObsRecNac2_Capurro, casoObsRecNac2_Peso, casoObsRecNac2_Talla, casoObsRecNac3_Genero, casoObsRecNac3_HrNacimiento, casoObsRecNac3_Alumbramiento, casoObsRecNac3_Apgar1, casoObsRecNac3_Apgar5, casoObsRecNac3_Capurro, casoObsRecNac3_Peso, casoObsRecNac3_Talla, casoObsRecNac4_Genero, casoObsRecNac4_HrNacimiento, casoObsRecNac4_Alumbramiento, casoObsRecNac4_Apgar1, casoObsRecNac4_Apgar5, casoObsRecNac4_Capurro, casoObsRecNac4_Peso, casoObsRecNac4_Talla, casoObsRecNac5_Genero, casoObsRecNac5_HrNacimiento, casoObsRecNac5_Alumbramiento, casoObsRecNac5_Apgar1, casoObsRecNac5_Apgar5, casoObsRecNac5_Capurro, casoObsRecNac5_Peso, casoObsRecNac5_Talla, casoObsRecNac6_Genero, casoObsRecNac6_HrNacimiento, casoObsRecNac6_Alumbramiento, casoObsRecNac6_Apgar1, casoObsRecNac6_Apgar5, casoObsRecNac6_Capurro, casoObsRecNac6_Peso, casoObsRecNac6_Talla } = req.body;
        const notaPA = yield PostAnestesico_1.PostNotaPA.findOneAndUpdate({ pid: id, cxid: cxid }, {
            npa_TecAnestFinal: npa_TecAnestFinal,
            npa_Intubacion: npa_Intubacion,
            npa_NotaPostAnest: npa_NotaPostAnest,
            // Signos Vitales al Egreso del Quirófano
            signVitEgQx_TA: signVitEgQx_TA,
            signVitEgQx_FC: signVitEgQx_FC,
            signVitEgQx_FR: signVitEgQx_FR,
            signVitEgQx_Temperatura: signVitEgQx_Temperatura,
            signVitEgQx_Pulso: signVitEgQx_Pulso,
            signVitEgQx_SpO2: signVitEgQx_SpO2,
            signVitEgQx_EgresoPac: signVitEgQx_EgresoPac,
            //Caso Obstétrico Recien Nacido
            casoObsRecNac_NumProd: casoObsRecNac_NumProd, casoObsRecNac1_Genero: casoObsRecNac1_Genero,
            casoObsRecNac1_HrNacimiento: casoObsRecNac1_HrNacimiento, casoObsRecNac1_Alumbramiento: casoObsRecNac1_Alumbramiento,
            casoObsRecNac1_Apgar1: casoObsRecNac1_Apgar1, casoObsRecNac1_Apgar5: casoObsRecNac1_Apgar5,
            casoObsRecNac1_Capurro: casoObsRecNac1_Capurro, casoObsRecNac1_Peso: casoObsRecNac1_Peso,
            casoObsRecNac1_Talla: casoObsRecNac1_Talla, casoObsRecNac2_Genero: casoObsRecNac2_Genero,
            casoObsRecNac2_HrNacimiento: casoObsRecNac2_HrNacimiento, casoObsRecNac2_Alumbramiento: casoObsRecNac2_Alumbramiento,
            casoObsRecNac2_Apgar1: casoObsRecNac2_Apgar1, casoObsRecNac2_Apgar5: casoObsRecNac2_Apgar5,
            casoObsRecNac2_Capurro: casoObsRecNac2_Capurro, casoObsRecNac2_Peso: casoObsRecNac2_Peso,
            casoObsRecNac2_Talla: casoObsRecNac2_Talla, casoObsRecNac3_Genero: casoObsRecNac3_Genero,
            casoObsRecNac3_HrNacimiento: casoObsRecNac3_HrNacimiento, casoObsRecNac3_Alumbramiento: casoObsRecNac3_Alumbramiento,
            casoObsRecNac3_Apgar1: casoObsRecNac3_Apgar1, casoObsRecNac3_Apgar5: casoObsRecNac3_Apgar5,
            casoObsRecNac3_Capurro: casoObsRecNac3_Capurro, casoObsRecNac3_Peso: casoObsRecNac3_Peso,
            casoObsRecNac3_Talla: casoObsRecNac3_Talla, casoObsRecNac4_Genero: casoObsRecNac4_Genero,
            casoObsRecNac4_HrNacimiento: casoObsRecNac4_HrNacimiento, casoObsRecNac4_Alumbramiento: casoObsRecNac4_Alumbramiento,
            casoObsRecNac4_Apgar1: casoObsRecNac4_Apgar1, casoObsRecNac4_Apgar5: casoObsRecNac4_Apgar5,
            casoObsRecNac4_Capurro: casoObsRecNac4_Capurro, casoObsRecNac4_Peso: casoObsRecNac4_Peso,
            casoObsRecNac4_Talla: casoObsRecNac4_Talla, casoObsRecNac5_Genero: casoObsRecNac5_Genero,
            casoObsRecNac5_HrNacimiento: casoObsRecNac5_HrNacimiento, casoObsRecNac5_Alumbramiento: casoObsRecNac5_Alumbramiento,
            casoObsRecNac5_Apgar1: casoObsRecNac5_Apgar1, casoObsRecNac5_Apgar5: casoObsRecNac5_Apgar5,
            casoObsRecNac5_Capurro: casoObsRecNac5_Capurro, casoObsRecNac5_Peso: casoObsRecNac5_Peso,
            casoObsRecNac5_Talla: casoObsRecNac5_Talla, casoObsRecNac6_Genero: casoObsRecNac6_Genero,
            casoObsRecNac6_HrNacimiento: casoObsRecNac6_HrNacimiento, casoObsRecNac6_Alumbramiento: casoObsRecNac6_Alumbramiento,
            casoObsRecNac6_Apgar1: casoObsRecNac6_Apgar1, casoObsRecNac6_Apgar5: casoObsRecNac6_Apgar5,
            casoObsRecNac6_Capurro: casoObsRecNac6_Capurro, casoObsRecNac6_Peso: casoObsRecNac6_Peso,
            casoObsRecNac6_Talla: casoObsRecNac6_Talla
        });
        return res.json({ notaPA });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.updateNuevoNotaPA = updateNuevoNotaPA;
const listNotaPA = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const notaPA = yield PostAnestesico_1.PostNotaPA.find({ pid: id });
        return res.json({ notaPA });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.listNotaPA = listNotaPA;
const listNuevoNotaPA = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, cxid } = req.params;
        const notaPA = yield PostAnestesico_1.PostNotaPA.find({ pid: id, cxid: cxid });
        return res.json({ notaPA });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.listNuevoNotaPA = listNuevoNotaPA;
/********************************************************************/
/**************************** RECUPERACION **************************/
/********************************************************************/
const saveRecuperacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid, 
        // Nota de Evaluación UCPA
        notaEval_Obs, 
        // Aldrete de Recuperación
        // Frecuencia Cardiaca
        aldreteRec_FrecCardIn, aldreteRec_FrecCard15, aldreteRec_FrecCard30, aldreteRec_FrecCard45, aldreteRec_FrecCard60, aldreteRec_FrecCard90, aldreteRec_FrecCard120, 
        // Frecuencia Respiratoria
        aldreteRec_FrecRespIn, aldreteRec_FrecResp15, aldreteRec_FrecResp30, aldreteRec_FrecResp45, aldreteRec_FrecResp60, aldreteRec_FrecResp90, aldreteRec_FrecResp120, 
        // Tension Arterial
        aldreteRec_TensArteIn, aldreteRec_TensArte15, aldreteRec_TensArte30, aldreteRec_TensArte45, aldreteRec_TensArte60, aldreteRec_TensArte90, aldreteRec_TensArte120, 
        // Saturación de O2
        aldreteRec_SatO2In, aldreteRec_SatO215, aldreteRec_SatO230, aldreteRec_SatO245, aldreteRec_SatO260, aldreteRec_SatO290, aldreteRec_SatO2120, 
        // Actividad Muscular
        aldreteRec_MuscularIn, aldreteRec_Muscular15, aldreteRec_Muscular30, aldreteRec_Muscular45, aldreteRec_Muscular60, aldreteRec_Muscular90, aldreteRec_Muscular120, 
        // Respiración
        aldreteRec_RespiracionIn, aldreteRec_Respiracion15, aldreteRec_Respiracion30, aldreteRec_Respiracion45, aldreteRec_Respiracion60, aldreteRec_Respiracion90, aldreteRec_Respiracion120, 
        // Circulación
        aldreteRec_CirculacionIn, aldreteRec_Circulacion15, aldreteRec_Circulacion30, aldreteRec_Circulacion45, aldreteRec_Circulacion60, aldreteRec_Circulacion90, aldreteRec_Circulacion120, 
        // Estado de Conciencia
        aldreteRec_ConcienciaIn, aldreteRec_Conciencia15, aldreteRec_Conciencia30, aldreteRec_Conciencia45, aldreteRec_Conciencia60, aldreteRec_Conciencia90, aldreteRec_Conciencia120, 
        // Coloración
        aldreteRec_ColoracionIn, aldreteRec_Coloracion15, aldreteRec_Coloracion30, aldreteRec_Coloracion45, aldreteRec_Coloracion60, aldreteRec_Coloracion90, aldreteRec_Coloracion120, 
        // Aldrete
        // aldreteRec_AldreteIn, aldreteRec_Aldrete15, aldreteRec_Aldrete30, 
        // aldreteRec_Aldrete45, aldreteRec_Aldrete60, aldreteRec_Aldrete90,
        // aldreteRec_Aldrete120,
        // Bromage
        aldreteRec_BromageIn, aldreteRec_Bromage15, aldreteRec_Bromage30, aldreteRec_Bromage45, aldreteRec_Bromage60, aldreteRec_Bromage90, aldreteRec_Bromage120, 
        // Nauseas/Vomito
        aldreteRec_NauseasIn, aldreteRec_Nauseas15, aldreteRec_Nauseas30, aldreteRec_Nauseas45, aldreteRec_Nauseas60, aldreteRec_Nauseas90, aldreteRec_Nauseas120, 
        // Escala de EVA de Dolor
        aldreteRec_escEVADolIn, aldreteRec_escEVADol15, aldreteRec_escEVADol30, aldreteRec_escEVADol45, aldreteRec_escEVADol60, aldreteRec_escEVADol90, aldreteRec_escEVADol120, 
        // Alta Recuperación
        altaRec_0min, altaRec_15min, altaRec_30min, altaRec_45min, altaRec_60min, altaRec_90min, altaRec_120min, altaRec_CalifAldrete, altaRec_Obs, altaRec_FechaAltaRec, altaRec_HrAltaRec, altaRec_NomMedAnest, } = req.body;
        const recuperacion = new PostAnestesico_1.PostRecupera({ pid: pid, cxid: cxid,
            // Nota de Evaluación UCPA
            notaEval_Obs: notaEval_Obs,
            // Aldrete de Recuperación
            // Frecuencia Cardiaca
            aldreteRec_FrecCardIn: aldreteRec_FrecCardIn,
            aldreteRec_FrecCard15: aldreteRec_FrecCard15,
            aldreteRec_FrecCard30: aldreteRec_FrecCard30,
            aldreteRec_FrecCard45: aldreteRec_FrecCard45,
            aldreteRec_FrecCard60: aldreteRec_FrecCard60,
            aldreteRec_FrecCard90: aldreteRec_FrecCard90,
            aldreteRec_FrecCard120: aldreteRec_FrecCard120,
            // Frecuencia Respiratoria
            aldreteRec_FrecRespIn: aldreteRec_FrecRespIn,
            aldreteRec_FrecResp15: aldreteRec_FrecResp15,
            aldreteRec_FrecResp30: aldreteRec_FrecResp30,
            aldreteRec_FrecResp45: aldreteRec_FrecResp45,
            aldreteRec_FrecResp60: aldreteRec_FrecResp60,
            aldreteRec_FrecResp90: aldreteRec_FrecResp90,
            aldreteRec_FrecResp120: aldreteRec_FrecResp120,
            // Tension Arterial
            aldreteRec_TensArteIn: aldreteRec_TensArteIn,
            aldreteRec_TensArte15: aldreteRec_TensArte15,
            aldreteRec_TensArte30: aldreteRec_TensArte30,
            aldreteRec_TensArte45: aldreteRec_TensArte45,
            aldreteRec_TensArte60: aldreteRec_TensArte60,
            aldreteRec_TensArte90: aldreteRec_TensArte90,
            aldreteRec_TensArte120: aldreteRec_TensArte120,
            // Saturación de O2
            aldreteRec_SatO2In: aldreteRec_SatO2In,
            aldreteRec_SatO215: aldreteRec_SatO215,
            aldreteRec_SatO230: aldreteRec_SatO230,
            aldreteRec_SatO245: aldreteRec_SatO245,
            aldreteRec_SatO260: aldreteRec_SatO260,
            aldreteRec_SatO290: aldreteRec_SatO290,
            aldreteRec_SatO2120: aldreteRec_SatO2120,
            // Actividad Muscular
            aldreteRec_MuscularIn: aldreteRec_MuscularIn,
            aldreteRec_Muscular15: aldreteRec_Muscular15,
            aldreteRec_Muscular30: aldreteRec_Muscular30,
            aldreteRec_Muscular45: aldreteRec_Muscular45,
            aldreteRec_Muscular60: aldreteRec_Muscular60,
            aldreteRec_Muscular90: aldreteRec_Muscular90,
            aldreteRec_Muscular120: aldreteRec_Muscular120,
            // Respiración
            aldreteRec_RespiracionIn: aldreteRec_RespiracionIn,
            aldreteRec_Respiracion15: aldreteRec_Respiracion15,
            aldreteRec_Respiracion30: aldreteRec_Respiracion30,
            aldreteRec_Respiracion45: aldreteRec_Respiracion45,
            aldreteRec_Respiracion60: aldreteRec_Respiracion60,
            aldreteRec_Respiracion90: aldreteRec_Respiracion90,
            aldreteRec_Respiracion120: aldreteRec_Respiracion120,
            // Circulación
            aldreteRec_CirculacionIn: aldreteRec_CirculacionIn,
            aldreteRec_Circulacion15: aldreteRec_Circulacion15,
            aldreteRec_Circulacion30: aldreteRec_Circulacion30,
            aldreteRec_Circulacion45: aldreteRec_Circulacion45,
            aldreteRec_Circulacion60: aldreteRec_Circulacion60,
            aldreteRec_Circulacion90: aldreteRec_Circulacion90,
            aldreteRec_Circulacion120: aldreteRec_Circulacion120,
            // Estado de Conciencia
            aldreteRec_ConcienciaIn: aldreteRec_ConcienciaIn,
            aldreteRec_Conciencia15: aldreteRec_Conciencia15,
            aldreteRec_Conciencia30: aldreteRec_Conciencia30,
            aldreteRec_Conciencia45: aldreteRec_Conciencia45,
            aldreteRec_Conciencia60: aldreteRec_Conciencia60,
            aldreteRec_Conciencia90: aldreteRec_Conciencia90,
            aldreteRec_Conciencia120: aldreteRec_Conciencia120,
            // Coloración
            aldreteRec_ColoracionIn: aldreteRec_ColoracionIn,
            aldreteRec_Coloracion15: aldreteRec_Coloracion15,
            aldreteRec_Coloracion30: aldreteRec_Coloracion30,
            aldreteRec_Coloracion45: aldreteRec_Coloracion45,
            aldreteRec_Coloracion60: aldreteRec_Coloracion60,
            aldreteRec_Coloracion90: aldreteRec_Coloracion90,
            aldreteRec_Coloracion120: aldreteRec_Coloracion120,
            // Aldrete
            // aldreteRec_AldreteIn: aldreteRec_AldreteIn,
            // aldreteRec_Aldrete15: aldreteRec_Aldrete15,
            // aldreteRec_Aldrete30: aldreteRec_Aldrete30,
            // aldreteRec_Aldrete45: aldreteRec_Aldrete45,
            // aldreteRec_Aldrete60: aldreteRec_Aldrete60,
            // aldreteRec_Aldrete90: aldreteRec_Aldrete90,
            // aldreteRec_Aldrete120: aldreteRec_Aldrete120,
            // Bromage
            aldreteRec_BromageIn: aldreteRec_BromageIn,
            aldreteRec_Bromage15: aldreteRec_Bromage15,
            aldreteRec_Bromage30: aldreteRec_Bromage30,
            aldreteRec_Bromage45: aldreteRec_Bromage45,
            aldreteRec_Bromage60: aldreteRec_Bromage60,
            aldreteRec_Bromage90: aldreteRec_Bromage90,
            aldreteRec_Bromage120: aldreteRec_Bromage120,
            // Nauseas/Vomito
            aldreteRec_NauseasIn: aldreteRec_NauseasIn,
            aldreteRec_Nauseas15: aldreteRec_Nauseas15,
            aldreteRec_Nauseas30: aldreteRec_Nauseas30,
            aldreteRec_Nauseas45: aldreteRec_Nauseas45,
            aldreteRec_Nauseas60: aldreteRec_Nauseas60,
            aldreteRec_Nauseas90: aldreteRec_Nauseas90,
            aldreteRec_Nauseas120: aldreteRec_Nauseas120,
            // Escala de EVA de Dolor
            aldreteRec_escEVADolIn: aldreteRec_escEVADolIn,
            aldreteRec_escEVADol15: aldreteRec_escEVADol15,
            aldreteRec_escEVADol30: aldreteRec_escEVADol30,
            aldreteRec_escEVADol45: aldreteRec_escEVADol45,
            aldreteRec_escEVADol60: aldreteRec_escEVADol60,
            aldreteRec_escEVADol90: aldreteRec_escEVADol90,
            aldreteRec_escEVADol120: aldreteRec_escEVADol120,
            // Alta Recuperación
            altaRec_CalifAldrete: altaRec_CalifAldrete,
            altaRec_Obs: altaRec_Obs,
            altaRec_FechaAltaRec: altaRec_FechaAltaRec,
            altaRec_HrAltaRec: altaRec_HrAltaRec,
            altaRec_NomMedAnest: altaRec_NomMedAnest,
            altaRec_0min: altaRec_0min,
            altaRec_15min: altaRec_15min,
            altaRec_30min: altaRec_30min,
            altaRec_45min: altaRec_45min,
            altaRec_60min: altaRec_60min,
            altaRec_90min: altaRec_90min,
            altaRec_120min: altaRec_120min
        });
        yield recuperacion.save();
        return res.json({ recuperacion });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveRecuperacion = saveRecuperacion;
const saveNuevoRecuperacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid, 
        // Nota de Evaluación UCPA
        notaEval_Obs, 
        // Aldrete de Recuperación
        // Frecuencia Cardiaca
        aldreteRec_FrecCardIn, aldreteRec_FrecCard15, aldreteRec_FrecCard30, aldreteRec_FrecCard45, aldreteRec_FrecCard60, aldreteRec_FrecCard90, aldreteRec_FrecCard120, 
        // Frecuencia Respiratoria
        aldreteRec_FrecRespIn, aldreteRec_FrecResp15, aldreteRec_FrecResp30, aldreteRec_FrecResp45, aldreteRec_FrecResp60, aldreteRec_FrecResp90, aldreteRec_FrecResp120, 
        // Tension Arterial
        aldreteRec_TensArteIn, aldreteRec_TensArte15, aldreteRec_TensArte30, aldreteRec_TensArte45, aldreteRec_TensArte60, aldreteRec_TensArte90, aldreteRec_TensArte120, 
        // Saturación de O2
        aldreteRec_SatO2In, aldreteRec_SatO215, aldreteRec_SatO230, aldreteRec_SatO245, aldreteRec_SatO260, aldreteRec_SatO290, aldreteRec_SatO2120, 
        // Actividad Muscular
        aldreteRec_MuscularIn, aldreteRec_Muscular15, aldreteRec_Muscular30, aldreteRec_Muscular45, aldreteRec_Muscular60, aldreteRec_Muscular90, aldreteRec_Muscular120, 
        // Respiración
        aldreteRec_RespiracionIn, aldreteRec_Respiracion15, aldreteRec_Respiracion30, aldreteRec_Respiracion45, aldreteRec_Respiracion60, aldreteRec_Respiracion90, aldreteRec_Respiracion120, 
        // Circulación
        aldreteRec_CirculacionIn, aldreteRec_Circulacion15, aldreteRec_Circulacion30, aldreteRec_Circulacion45, aldreteRec_Circulacion60, aldreteRec_Circulacion90, aldreteRec_Circulacion120, 
        // Estado de Conciencia
        aldreteRec_ConcienciaIn, aldreteRec_Conciencia15, aldreteRec_Conciencia30, aldreteRec_Conciencia45, aldreteRec_Conciencia60, aldreteRec_Conciencia90, aldreteRec_Conciencia120, 
        // Coloración
        aldreteRec_ColoracionIn, aldreteRec_Coloracion15, aldreteRec_Coloracion30, aldreteRec_Coloracion45, aldreteRec_Coloracion60, aldreteRec_Coloracion90, aldreteRec_Coloracion120, 
        // Aldrete
        // aldreteRec_AldreteIn, aldreteRec_Aldrete15, aldreteRec_Aldrete30, 
        // aldreteRec_Aldrete45, aldreteRec_Aldrete60, aldreteRec_Aldrete90,
        // aldreteRec_Aldrete120,
        // Bromage
        aldreteRec_BromageIn, aldreteRec_Bromage15, aldreteRec_Bromage30, aldreteRec_Bromage45, aldreteRec_Bromage60, aldreteRec_Bromage90, aldreteRec_Bromage120, 
        // Nauseas/Vomito
        aldreteRec_NauseasIn, aldreteRec_Nauseas15, aldreteRec_Nauseas30, aldreteRec_Nauseas45, aldreteRec_Nauseas60, aldreteRec_Nauseas90, aldreteRec_Nauseas120, 
        // Escala de EVA de Dolor
        aldreteRec_escEVADolIn, aldreteRec_escEVADol15, aldreteRec_escEVADol30, aldreteRec_escEVADol45, aldreteRec_escEVADol60, aldreteRec_escEVADol90, aldreteRec_escEVADol120, 
        // Alta Recuperación
        altaRec_0min, altaRec_15min, altaRec_30min, altaRec_45min, altaRec_60min, altaRec_90min, altaRec_120min, altaRec_CalifAldrete, altaRec_Obs, altaRec_FechaAltaRec, altaRec_HrAltaRec, altaRec_NomMedAnest, } = req.body;
        const recuperacion = new PostAnestesico_1.PostRecupera({ pid, cxid,
            // Nota de Evaluación UCPA
            notaEval_Obs: notaEval_Obs,
            // Aldrete de Recuperación
            // Frecuencia Cardiaca
            aldreteRec_FrecCardIn: aldreteRec_FrecCardIn,
            aldreteRec_FrecCard15: aldreteRec_FrecCard15,
            aldreteRec_FrecCard30: aldreteRec_FrecCard30,
            aldreteRec_FrecCard45: aldreteRec_FrecCard45,
            aldreteRec_FrecCard60: aldreteRec_FrecCard60,
            aldreteRec_FrecCard90: aldreteRec_FrecCard90,
            aldreteRec_FrecCard120: aldreteRec_FrecCard120,
            // Frecuencia Respiratoria
            aldreteRec_FrecRespIn: aldreteRec_FrecRespIn,
            aldreteRec_FrecResp15: aldreteRec_FrecResp15,
            aldreteRec_FrecResp30: aldreteRec_FrecResp30,
            aldreteRec_FrecResp45: aldreteRec_FrecResp45,
            aldreteRec_FrecResp60: aldreteRec_FrecResp60,
            aldreteRec_FrecResp90: aldreteRec_FrecResp90,
            aldreteRec_FrecResp120: aldreteRec_FrecResp120,
            // Tension Arterial
            aldreteRec_TensArteIn: aldreteRec_TensArteIn,
            aldreteRec_TensArte15: aldreteRec_TensArte15,
            aldreteRec_TensArte30: aldreteRec_TensArte30,
            aldreteRec_TensArte45: aldreteRec_TensArte45,
            aldreteRec_TensArte60: aldreteRec_TensArte60,
            aldreteRec_TensArte90: aldreteRec_TensArte90,
            aldreteRec_TensArte120: aldreteRec_TensArte120,
            // Saturación de O2
            aldreteRec_SatO2In: aldreteRec_SatO2In,
            aldreteRec_SatO215: aldreteRec_SatO215,
            aldreteRec_SatO230: aldreteRec_SatO230,
            aldreteRec_SatO245: aldreteRec_SatO245,
            aldreteRec_SatO260: aldreteRec_SatO260,
            aldreteRec_SatO290: aldreteRec_SatO290,
            aldreteRec_SatO2120: aldreteRec_SatO2120,
            // Aldrete
            // aldreteRec_AldreteIn: aldreteRec_AldreteIn,
            // aldreteRec_Aldrete15: aldreteRec_Aldrete15,
            // aldreteRec_Aldrete30: aldreteRec_Aldrete30,
            // aldreteRec_Aldrete45: aldreteRec_Aldrete45,
            // aldreteRec_Aldrete60: aldreteRec_Aldrete60,
            // aldreteRec_Aldrete90: aldreteRec_Aldrete90,
            // aldreteRec_Aldrete120: aldreteRec_Aldrete120,
            // Actividad Muscular
            aldreteRec_MuscularIn: aldreteRec_MuscularIn,
            aldreteRec_Muscular15: aldreteRec_Muscular15,
            aldreteRec_Muscular30: aldreteRec_Muscular30,
            aldreteRec_Muscular45: aldreteRec_Muscular45,
            aldreteRec_Muscular60: aldreteRec_Muscular60,
            aldreteRec_Muscular90: aldreteRec_Muscular90,
            aldreteRec_Muscular120: aldreteRec_Muscular120,
            // Respiración
            aldreteRec_RespiracionIn: aldreteRec_RespiracionIn,
            aldreteRec_Respiracion15: aldreteRec_Respiracion15,
            aldreteRec_Respiracion30: aldreteRec_Respiracion30,
            aldreteRec_Respiracion45: aldreteRec_Respiracion45,
            aldreteRec_Respiracion60: aldreteRec_Respiracion60,
            aldreteRec_Respiracion90: aldreteRec_Respiracion90,
            aldreteRec_Respiracion120: aldreteRec_Respiracion120,
            // Circulación
            aldreteRec_CirculacionIn: aldreteRec_CirculacionIn,
            aldreteRec_Circulacion15: aldreteRec_Circulacion15,
            aldreteRec_Circulacion30: aldreteRec_Circulacion30,
            aldreteRec_Circulacion45: aldreteRec_Circulacion45,
            aldreteRec_Circulacion60: aldreteRec_Circulacion60,
            aldreteRec_Circulacion90: aldreteRec_Circulacion90,
            aldreteRec_Circulacion120: aldreteRec_Circulacion120,
            // Estado de Conciencia
            aldreteRec_ConcienciaIn: aldreteRec_ConcienciaIn,
            aldreteRec_Conciencia15: aldreteRec_Conciencia15,
            aldreteRec_Conciencia30: aldreteRec_Conciencia30,
            aldreteRec_Conciencia45: aldreteRec_Conciencia45,
            aldreteRec_Conciencia60: aldreteRec_Conciencia60,
            aldreteRec_Conciencia90: aldreteRec_Conciencia90,
            aldreteRec_Conciencia120: aldreteRec_Conciencia120,
            // Coloración
            aldreteRec_ColoracionIn: aldreteRec_ColoracionIn,
            aldreteRec_Coloracion15: aldreteRec_Coloracion15,
            aldreteRec_Coloracion30: aldreteRec_Coloracion30,
            aldreteRec_Coloracion45: aldreteRec_Coloracion45,
            aldreteRec_Coloracion60: aldreteRec_Coloracion60,
            aldreteRec_Coloracion90: aldreteRec_Coloracion90,
            aldreteRec_Coloracion120: aldreteRec_Coloracion120,
            // Bromage
            aldreteRec_BromageIn: aldreteRec_BromageIn,
            aldreteRec_Bromage15: aldreteRec_Bromage15,
            aldreteRec_Bromage30: aldreteRec_Bromage30,
            aldreteRec_Bromage45: aldreteRec_Bromage45,
            aldreteRec_Bromage60: aldreteRec_Bromage60,
            aldreteRec_Bromage90: aldreteRec_Bromage90,
            aldreteRec_Bromage120: aldreteRec_Bromage120,
            // Nauseas/Vomito
            aldreteRec_NauseasIn: aldreteRec_NauseasIn,
            aldreteRec_Nauseas15: aldreteRec_Nauseas15,
            aldreteRec_Nauseas30: aldreteRec_Nauseas30,
            aldreteRec_Nauseas45: aldreteRec_Nauseas45,
            aldreteRec_Nauseas60: aldreteRec_Nauseas60,
            aldreteRec_Nauseas90: aldreteRec_Nauseas90,
            aldreteRec_Nauseas120: aldreteRec_Nauseas120,
            // Escala de EVA de Dolor
            aldreteRec_escEVADolIn: aldreteRec_escEVADolIn,
            aldreteRec_escEVADol15: aldreteRec_escEVADol15,
            aldreteRec_escEVADol30: aldreteRec_escEVADol30,
            aldreteRec_escEVADol45: aldreteRec_escEVADol45,
            aldreteRec_escEVADol60: aldreteRec_escEVADol60,
            aldreteRec_escEVADol90: aldreteRec_escEVADol90,
            aldreteRec_escEVADol120: aldreteRec_escEVADol120,
            // Alta Recuperación
            altaRec_CalifAldrete: altaRec_CalifAldrete,
            altaRec_Obs: altaRec_Obs,
            altaRec_FechaAltaRec: altaRec_FechaAltaRec,
            altaRec_HrAltaRec: altaRec_HrAltaRec,
            altaRec_NomMedAnest: altaRec_NomMedAnest,
            altaRec_0min: altaRec_0min,
            altaRec_15min: altaRec_15min,
            altaRec_30min: altaRec_30min,
            altaRec_45min: altaRec_45min,
            altaRec_60min: altaRec_60min,
            altaRec_90min: altaRec_90min,
            altaRec_120min: altaRec_120min
        });
        yield recuperacion.save();
        return res.json({ recuperacion });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveNuevoRecuperacion = saveNuevoRecuperacion;
const updateRecuperacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { // Nota de Evaluación UCPA
        notaEval_Obs, 
        // Aldrete de Recuperación
        // Frecuencia Cardiaca
        aldreteRec_FrecCardIn, aldreteRec_FrecCard15, aldreteRec_FrecCard30, aldreteRec_FrecCard45, aldreteRec_FrecCard60, aldreteRec_FrecCard90, aldreteRec_FrecCard120, 
        // Frecuencia Respiratoria
        aldreteRec_FrecRespIn, aldreteRec_FrecResp15, aldreteRec_FrecResp30, aldreteRec_FrecResp45, aldreteRec_FrecResp60, aldreteRec_FrecResp90, aldreteRec_FrecResp120, 
        // Tension Arterial
        aldreteRec_TensArteIn, aldreteRec_TensArte15, aldreteRec_TensArte30, aldreteRec_TensArte45, aldreteRec_TensArte60, aldreteRec_TensArte90, aldreteRec_TensArte120, 
        // Saturación de O2
        aldreteRec_SatO2In, aldreteRec_SatO215, aldreteRec_SatO230, aldreteRec_SatO245, aldreteRec_SatO260, aldreteRec_SatO290, aldreteRec_SatO2120, 
        // Actividad Muscular
        aldreteRec_MuscularIn, aldreteRec_Muscular15, aldreteRec_Muscular30, aldreteRec_Muscular45, aldreteRec_Muscular60, aldreteRec_Muscular90, aldreteRec_Muscular120, 
        // Respiración
        aldreteRec_RespiracionIn, aldreteRec_Respiracion15, aldreteRec_Respiracion30, aldreteRec_Respiracion45, aldreteRec_Respiracion60, aldreteRec_Respiracion90, aldreteRec_Respiracion120, 
        // Circulación
        aldreteRec_CirculacionIn, aldreteRec_Circulacion15, aldreteRec_Circulacion30, aldreteRec_Circulacion45, aldreteRec_Circulacion60, aldreteRec_Circulacion90, aldreteRec_Circulacion120, 
        // Estado de Conciencia
        aldreteRec_ConcienciaIn, aldreteRec_Conciencia15, aldreteRec_Conciencia30, aldreteRec_Conciencia45, aldreteRec_Conciencia60, aldreteRec_Conciencia90, aldreteRec_Conciencia120, 
        // Coloración
        aldreteRec_ColoracionIn, aldreteRec_Coloracion15, aldreteRec_Coloracion30, aldreteRec_Coloracion45, aldreteRec_Coloracion60, aldreteRec_Coloracion90, aldreteRec_Coloracion120, 
        // Aldrete
        // aldreteRec_AldreteIn, aldreteRec_Aldrete15, aldreteRec_Aldrete30, 
        // aldreteRec_Aldrete45, aldreteRec_Aldrete60, aldreteRec_Aldrete90,
        // aldreteRec_Aldrete120,
        // Bromage
        aldreteRec_BromageIn, aldreteRec_Bromage15, aldreteRec_Bromage30, aldreteRec_Bromage45, aldreteRec_Bromage60, aldreteRec_Bromage90, aldreteRec_Bromage120, 
        // Nauseas/Vomito
        aldreteRec_NauseasIn, aldreteRec_Nauseas15, aldreteRec_Nauseas30, aldreteRec_Nauseas45, aldreteRec_Nauseas60, aldreteRec_Nauseas90, aldreteRec_Nauseas120, 
        // Escala de EVA de Dolor
        aldreteRec_escEVADolIn, aldreteRec_escEVADol15, aldreteRec_escEVADol30, aldreteRec_escEVADol45, aldreteRec_escEVADol60, aldreteRec_escEVADol90, aldreteRec_escEVADol120, 
        // Alta Recuperación
        altaRec_0min, altaRec_15min, altaRec_30min, altaRec_45min, altaRec_60min, altaRec_90min, altaRec_120min, altaRec_CalifAldrete, altaRec_Obs, altaRec_FechaAltaRec, altaRec_HrAltaRec, altaRec_NomMedAnest, } = req.body;
        const recuperacion = yield PostAnestesico_1.PostRecupera.findOneAndUpdate({ pid: id }, {
            notaEval_Obs: notaEval_Obs,
            // Aldrete de Recuperación
            // Frecuencia Cardiaca
            aldreteRec_FrecCardIn: aldreteRec_FrecCardIn,
            aldreteRec_FrecCard15: aldreteRec_FrecCard15,
            aldreteRec_FrecCard30: aldreteRec_FrecCard30,
            aldreteRec_FrecCard45: aldreteRec_FrecCard45,
            aldreteRec_FrecCard60: aldreteRec_FrecCard60,
            aldreteRec_FrecCard90: aldreteRec_FrecCard90,
            aldreteRec_FrecCard120: aldreteRec_FrecCard120,
            // Frecuencia Respiratoria
            aldreteRec_FrecRespIn: aldreteRec_FrecRespIn,
            aldreteRec_FrecResp15: aldreteRec_FrecResp15,
            aldreteRec_FrecResp30: aldreteRec_FrecResp30,
            aldreteRec_FrecResp45: aldreteRec_FrecResp45,
            aldreteRec_FrecResp60: aldreteRec_FrecResp60,
            aldreteRec_FrecResp90: aldreteRec_FrecResp90,
            aldreteRec_FrecResp120: aldreteRec_FrecResp120,
            // Tension Arterial
            aldreteRec_TensArteIn: aldreteRec_TensArteIn,
            aldreteRec_TensArte15: aldreteRec_TensArte15,
            aldreteRec_TensArte30: aldreteRec_TensArte30,
            aldreteRec_TensArte45: aldreteRec_TensArte45,
            aldreteRec_TensArte60: aldreteRec_TensArte60,
            aldreteRec_TensArte90: aldreteRec_TensArte90,
            aldreteRec_TensArte120: aldreteRec_TensArte120,
            // Saturación de O2
            aldreteRec_SatO2In: aldreteRec_SatO2In,
            aldreteRec_SatO215: aldreteRec_SatO215,
            aldreteRec_SatO230: aldreteRec_SatO230,
            aldreteRec_SatO245: aldreteRec_SatO245,
            aldreteRec_SatO260: aldreteRec_SatO260,
            aldreteRec_SatO290: aldreteRec_SatO290,
            aldreteRec_SatO2120: aldreteRec_SatO2120,
            // Aldrete
            //    aldreteRec_AldreteIn: aldreteRec_AldreteIn,
            //    aldreteRec_Aldrete15: aldreteRec_Aldrete15,
            //    aldreteRec_Aldrete30: aldreteRec_Aldrete30,
            //    aldreteRec_Aldrete45: aldreteRec_Aldrete45,
            //    aldreteRec_Aldrete60: aldreteRec_Aldrete60,
            //    aldreteRec_Aldrete90: aldreteRec_Aldrete90,
            //    aldreteRec_Aldrete120: aldreteRec_Aldrete120,
            // Actividad Muscular
            aldreteRec_MuscularIn: aldreteRec_MuscularIn,
            aldreteRec_Muscular15: aldreteRec_Muscular15,
            aldreteRec_Muscular30: aldreteRec_Muscular30,
            aldreteRec_Muscular45: aldreteRec_Muscular45,
            aldreteRec_Muscular60: aldreteRec_Muscular60,
            aldreteRec_Muscular90: aldreteRec_Muscular90,
            aldreteRec_Muscular120: aldreteRec_Muscular120,
            // Respiración
            aldreteRec_RespiracionIn: aldreteRec_RespiracionIn,
            aldreteRec_Respiracion15: aldreteRec_Respiracion15,
            aldreteRec_Respiracion30: aldreteRec_Respiracion30,
            aldreteRec_Respiracion45: aldreteRec_Respiracion45,
            aldreteRec_Respiracion60: aldreteRec_Respiracion60,
            aldreteRec_Respiracion90: aldreteRec_Respiracion90,
            aldreteRec_Respiracion120: aldreteRec_Respiracion120,
            // Circulación
            aldreteRec_CirculacionIn: aldreteRec_CirculacionIn,
            aldreteRec_Circulacion15: aldreteRec_Circulacion15,
            aldreteRec_Circulacion30: aldreteRec_Circulacion30,
            aldreteRec_Circulacion45: aldreteRec_Circulacion45,
            aldreteRec_Circulacion60: aldreteRec_Circulacion60,
            aldreteRec_Circulacion90: aldreteRec_Circulacion90,
            aldreteRec_Circulacion120: aldreteRec_Circulacion120,
            // Estado de Conciencia
            aldreteRec_ConcienciaIn: aldreteRec_ConcienciaIn,
            aldreteRec_Conciencia15: aldreteRec_Conciencia15,
            aldreteRec_Conciencia30: aldreteRec_Conciencia30,
            aldreteRec_Conciencia45: aldreteRec_Conciencia45,
            aldreteRec_Conciencia60: aldreteRec_Conciencia60,
            aldreteRec_Conciencia90: aldreteRec_Conciencia90,
            aldreteRec_Conciencia120: aldreteRec_Conciencia120,
            // Coloración
            aldreteRec_ColoracionIn: aldreteRec_ColoracionIn,
            aldreteRec_Coloracion15: aldreteRec_Coloracion15,
            aldreteRec_Coloracion30: aldreteRec_Coloracion30,
            aldreteRec_Coloracion45: aldreteRec_Coloracion45,
            aldreteRec_Coloracion60: aldreteRec_Coloracion60,
            aldreteRec_Coloracion90: aldreteRec_Coloracion90,
            aldreteRec_Coloracion120: aldreteRec_Coloracion120,
            // Bromage
            aldreteRec_BromageIn: aldreteRec_BromageIn,
            aldreteRec_Bromage15: aldreteRec_Bromage15,
            aldreteRec_Bromage30: aldreteRec_Bromage30,
            aldreteRec_Bromage45: aldreteRec_Bromage45,
            aldreteRec_Bromage60: aldreteRec_Bromage60,
            aldreteRec_Bromage90: aldreteRec_Bromage90,
            aldreteRec_Bromage120: aldreteRec_Bromage120,
            // Nauseas/Vomito
            aldreteRec_NauseasIn: aldreteRec_NauseasIn,
            aldreteRec_Nauseas15: aldreteRec_Nauseas15,
            aldreteRec_Nauseas30: aldreteRec_Nauseas30,
            aldreteRec_Nauseas45: aldreteRec_Nauseas45,
            aldreteRec_Nauseas60: aldreteRec_Nauseas60,
            aldreteRec_Nauseas90: aldreteRec_Nauseas90,
            aldreteRec_Nauseas120: aldreteRec_Nauseas120,
            // Escala de EVA de Dolor
            aldreteRec_escEVADolIn: aldreteRec_escEVADolIn,
            aldreteRec_escEVADol15: aldreteRec_escEVADol15,
            aldreteRec_escEVADol30: aldreteRec_escEVADol30,
            aldreteRec_escEVADol45: aldreteRec_escEVADol45,
            aldreteRec_escEVADol60: aldreteRec_escEVADol60,
            aldreteRec_escEVADol90: aldreteRec_escEVADol90,
            aldreteRec_escEVADol120: aldreteRec_escEVADol120,
            // Alta Recuperación
            altaRec_CalifAldrete: altaRec_CalifAldrete,
            altaRec_Obs: altaRec_Obs,
            altaRec_FechaAltaRec: altaRec_FechaAltaRec,
            altaRec_HrAltaRec: altaRec_HrAltaRec,
            altaRec_NomMedAnest: altaRec_NomMedAnest,
            altaRec_0min: altaRec_0min,
            altaRec_15min: altaRec_15min,
            altaRec_30min: altaRec_30min,
            altaRec_45min: altaRec_45min,
            altaRec_60min: altaRec_60min,
            altaRec_90min: altaRec_90min,
            altaRec_120min: altaRec_120min
        });
        return res.json({ recuperacion });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.updateRecuperacion = updateRecuperacion;
const updateNuevoRecuperacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, cxid } = req.params;
        const { // Nota de Evaluación UCPA
        notaEval_Obs, 
        // Aldrete de Recuperación
        // Frecuencia Cardiaca
        aldreteRec_FrecCardIn, aldreteRec_FrecCard15, aldreteRec_FrecCard30, aldreteRec_FrecCard45, aldreteRec_FrecCard60, aldreteRec_FrecCard90, aldreteRec_FrecCard120, 
        // Frecuencia Respiratoria
        aldreteRec_FrecRespIn, aldreteRec_FrecResp15, aldreteRec_FrecResp30, aldreteRec_FrecResp45, aldreteRec_FrecResp60, aldreteRec_FrecResp90, aldreteRec_FrecResp120, 
        // Tension Arterial
        aldreteRec_TensArteIn, aldreteRec_TensArte15, aldreteRec_TensArte30, aldreteRec_TensArte45, aldreteRec_TensArte60, aldreteRec_TensArte90, aldreteRec_TensArte120, 
        // Saturación de O2
        aldreteRec_SatO2In, aldreteRec_SatO215, aldreteRec_SatO230, aldreteRec_SatO245, aldreteRec_SatO260, aldreteRec_SatO290, aldreteRec_SatO2120, 
        // Actividad Muscular
        aldreteRec_MuscularIn, aldreteRec_Muscular15, aldreteRec_Muscular30, aldreteRec_Muscular45, aldreteRec_Muscular60, aldreteRec_Muscular90, aldreteRec_Muscular120, 
        // Respiración
        aldreteRec_RespiracionIn, aldreteRec_Respiracion15, aldreteRec_Respiracion30, aldreteRec_Respiracion45, aldreteRec_Respiracion60, aldreteRec_Respiracion90, aldreteRec_Respiracion120, 
        // Circulación
        aldreteRec_CirculacionIn, aldreteRec_Circulacion15, aldreteRec_Circulacion30, aldreteRec_Circulacion45, aldreteRec_Circulacion60, aldreteRec_Circulacion90, aldreteRec_Circulacion120, 
        // Estado de Conciencia
        aldreteRec_ConcienciaIn, aldreteRec_Conciencia15, aldreteRec_Conciencia30, aldreteRec_Conciencia45, aldreteRec_Conciencia60, aldreteRec_Conciencia90, aldreteRec_Conciencia120, 
        // Coloración
        aldreteRec_ColoracionIn, aldreteRec_Coloracion15, aldreteRec_Coloracion30, aldreteRec_Coloracion45, aldreteRec_Coloracion60, aldreteRec_Coloracion90, aldreteRec_Coloracion120, 
        // Aldrete
        // aldreteRec_AldreteIn, aldreteRec_Aldrete15, aldreteRec_Aldrete30, 
        // aldreteRec_Aldrete45, aldreteRec_Aldrete60, aldreteRec_Aldrete90,
        // aldreteRec_Aldrete120,
        // Bromage
        aldreteRec_BromageIn, aldreteRec_Bromage15, aldreteRec_Bromage30, aldreteRec_Bromage45, aldreteRec_Bromage60, aldreteRec_Bromage90, aldreteRec_Bromage120, 
        // Nauseas/Vomito
        aldreteRec_NauseasIn, aldreteRec_Nauseas15, aldreteRec_Nauseas30, aldreteRec_Nauseas45, aldreteRec_Nauseas60, aldreteRec_Nauseas90, aldreteRec_Nauseas120, 
        // Escala de EVA de Dolor
        aldreteRec_escEVADolIn, aldreteRec_escEVADol15, aldreteRec_escEVADol30, aldreteRec_escEVADol45, aldreteRec_escEVADol60, aldreteRec_escEVADol90, aldreteRec_escEVADol120, 
        // Alta Recuperación
        altaRec_0min, altaRec_15min, altaRec_30min, altaRec_45min, altaRec_60min, altaRec_90min, altaRec_120min, altaRec_CalifAldrete, altaRec_Obs, altaRec_FechaAltaRec, altaRec_HrAltaRec, altaRec_NomMedAnest, } = req.body;
        const recuperacion = yield PostAnestesico_1.PostRecupera.findOneAndUpdate({ pid: id, cxid: cxid }, {
            notaEval_Obs: notaEval_Obs,
            // Aldrete de Recuperación
            // Frecuencia Cardiaca
            aldreteRec_FrecCardIn: aldreteRec_FrecCardIn,
            aldreteRec_FrecCard15: aldreteRec_FrecCard15,
            aldreteRec_FrecCard30: aldreteRec_FrecCard30,
            aldreteRec_FrecCard45: aldreteRec_FrecCard45,
            aldreteRec_FrecCard60: aldreteRec_FrecCard60,
            aldreteRec_FrecCard90: aldreteRec_FrecCard90,
            aldreteRec_FrecCard120: aldreteRec_FrecCard120,
            // Frecuencia Respiratoria
            aldreteRec_FrecRespIn: aldreteRec_FrecRespIn,
            aldreteRec_FrecResp15: aldreteRec_FrecResp15,
            aldreteRec_FrecResp30: aldreteRec_FrecResp30,
            aldreteRec_FrecResp45: aldreteRec_FrecResp45,
            aldreteRec_FrecResp60: aldreteRec_FrecResp60,
            aldreteRec_FrecResp90: aldreteRec_FrecResp90,
            aldreteRec_FrecResp120: aldreteRec_FrecResp120,
            // Tension Arterial
            aldreteRec_TensArteIn: aldreteRec_TensArteIn,
            aldreteRec_TensArte15: aldreteRec_TensArte15,
            aldreteRec_TensArte30: aldreteRec_TensArte30,
            aldreteRec_TensArte45: aldreteRec_TensArte45,
            aldreteRec_TensArte60: aldreteRec_TensArte60,
            aldreteRec_TensArte90: aldreteRec_TensArte90,
            aldreteRec_TensArte120: aldreteRec_TensArte120,
            // Saturación de O2
            aldreteRec_SatO2In: aldreteRec_SatO2In,
            aldreteRec_SatO215: aldreteRec_SatO215,
            aldreteRec_SatO230: aldreteRec_SatO230,
            aldreteRec_SatO245: aldreteRec_SatO245,
            aldreteRec_SatO260: aldreteRec_SatO260,
            aldreteRec_SatO290: aldreteRec_SatO290,
            aldreteRec_SatO2120: aldreteRec_SatO2120,
            // Aldrete
            //    aldreteRec_AldreteIn: aldreteRec_AldreteIn,
            //    aldreteRec_Aldrete15: aldreteRec_Aldrete15,
            //    aldreteRec_Aldrete30: aldreteRec_Aldrete30,
            //    aldreteRec_Aldrete45: aldreteRec_Aldrete45,
            //    aldreteRec_Aldrete60: aldreteRec_Aldrete60,
            //    aldreteRec_Aldrete90: aldreteRec_Aldrete90,
            //    aldreteRec_Aldrete120: aldreteRec_Aldrete120,
            // Actividad Muscular
            aldreteRec_MuscularIn: aldreteRec_MuscularIn,
            aldreteRec_Muscular15: aldreteRec_Muscular15,
            aldreteRec_Muscular30: aldreteRec_Muscular30,
            aldreteRec_Muscular45: aldreteRec_Muscular45,
            aldreteRec_Muscular60: aldreteRec_Muscular60,
            aldreteRec_Muscular90: aldreteRec_Muscular90,
            aldreteRec_Muscular120: aldreteRec_Muscular120,
            // Respiración
            aldreteRec_RespiracionIn: aldreteRec_RespiracionIn,
            aldreteRec_Respiracion15: aldreteRec_Respiracion15,
            aldreteRec_Respiracion30: aldreteRec_Respiracion30,
            aldreteRec_Respiracion45: aldreteRec_Respiracion45,
            aldreteRec_Respiracion60: aldreteRec_Respiracion60,
            aldreteRec_Respiracion90: aldreteRec_Respiracion90,
            aldreteRec_Respiracion120: aldreteRec_Respiracion120,
            // Circulación
            aldreteRec_CirculacionIn: aldreteRec_CirculacionIn,
            aldreteRec_Circulacion15: aldreteRec_Circulacion15,
            aldreteRec_Circulacion30: aldreteRec_Circulacion30,
            aldreteRec_Circulacion45: aldreteRec_Circulacion45,
            aldreteRec_Circulacion60: aldreteRec_Circulacion60,
            aldreteRec_Circulacion90: aldreteRec_Circulacion90,
            aldreteRec_Circulacion120: aldreteRec_Circulacion120,
            // Estado de Conciencia
            aldreteRec_ConcienciaIn: aldreteRec_ConcienciaIn,
            aldreteRec_Conciencia15: aldreteRec_Conciencia15,
            aldreteRec_Conciencia30: aldreteRec_Conciencia30,
            aldreteRec_Conciencia45: aldreteRec_Conciencia45,
            aldreteRec_Conciencia60: aldreteRec_Conciencia60,
            aldreteRec_Conciencia90: aldreteRec_Conciencia90,
            aldreteRec_Conciencia120: aldreteRec_Conciencia120,
            // Coloración
            aldreteRec_ColoracionIn: aldreteRec_ColoracionIn,
            aldreteRec_Coloracion15: aldreteRec_Coloracion15,
            aldreteRec_Coloracion30: aldreteRec_Coloracion30,
            aldreteRec_Coloracion45: aldreteRec_Coloracion45,
            aldreteRec_Coloracion60: aldreteRec_Coloracion60,
            aldreteRec_Coloracion90: aldreteRec_Coloracion90,
            aldreteRec_Coloracion120: aldreteRec_Coloracion120,
            // Bromage
            aldreteRec_BromageIn: aldreteRec_BromageIn,
            aldreteRec_Bromage15: aldreteRec_Bromage15,
            aldreteRec_Bromage30: aldreteRec_Bromage30,
            aldreteRec_Bromage45: aldreteRec_Bromage45,
            aldreteRec_Bromage60: aldreteRec_Bromage60,
            aldreteRec_Bromage90: aldreteRec_Bromage90,
            aldreteRec_Bromage120: aldreteRec_Bromage120,
            // Nauseas/Vomito
            aldreteRec_NauseasIn: aldreteRec_NauseasIn,
            aldreteRec_Nauseas15: aldreteRec_Nauseas15,
            aldreteRec_Nauseas30: aldreteRec_Nauseas30,
            aldreteRec_Nauseas45: aldreteRec_Nauseas45,
            aldreteRec_Nauseas60: aldreteRec_Nauseas60,
            aldreteRec_Nauseas90: aldreteRec_Nauseas90,
            aldreteRec_Nauseas120: aldreteRec_Nauseas120,
            // Escala de EVA de Dolor
            aldreteRec_escEVADolIn: aldreteRec_escEVADolIn,
            aldreteRec_escEVADol15: aldreteRec_escEVADol15,
            aldreteRec_escEVADol30: aldreteRec_escEVADol30,
            aldreteRec_escEVADol45: aldreteRec_escEVADol45,
            aldreteRec_escEVADol60: aldreteRec_escEVADol60,
            aldreteRec_escEVADol90: aldreteRec_escEVADol90,
            aldreteRec_escEVADol120: aldreteRec_escEVADol120,
            // Alta Recuperación
            altaRec_CalifAldrete: altaRec_CalifAldrete,
            altaRec_Obs: altaRec_Obs,
            altaRec_FechaAltaRec: altaRec_FechaAltaRec,
            altaRec_HrAltaRec: altaRec_HrAltaRec,
            altaRec_NomMedAnest: altaRec_NomMedAnest,
            altaRec_0min: altaRec_0min,
            altaRec_15min: altaRec_15min,
            altaRec_30min: altaRec_30min,
            altaRec_45min: altaRec_45min,
            altaRec_60min: altaRec_60min,
            altaRec_90min: altaRec_90min,
            altaRec_120min: altaRec_120min
        });
        return res.json({ recuperacion });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.updateNuevoRecuperacion = updateNuevoRecuperacion;
