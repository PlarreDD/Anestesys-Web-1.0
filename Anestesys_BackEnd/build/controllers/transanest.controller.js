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
exports.deleteEvento = exports.updateEvento = exports.getEvento = exports.getNuevoEventos = exports.getEventos = exports.updateNuevoEventos = exports.updateEventos = exports.saveNuevoEventos = exports.saveEventos = exports.deleteRelevo = exports.updateRelevo = exports.getRelevo = exports.getNuevoRelevos = exports.getRelevos = exports.updateNuevoRelevos = exports.updateRelevos = exports.saveNuevoRelevos = exports.saveRelevos = exports.deleteMedicamento = exports.updateMedicamento = exports.getMedicamento = exports.getNuevoMedicamentos = exports.getMedicamentos = exports.updateNuevoMedicamentos = exports.updateMedicamentos = exports.saveNuevoMedicamentos = exports.saveMedicamentos = exports.saveNuevoDatosMSV = exports.saveDatosMSV = exports.saveNuevoTiemposQX = exports.saveTiemposQX = exports.UpdateNuevoBalanceH = exports.UpdateBalanceH = exports.UpdateNuevoBalanceHP = exports.UpdateBalanceHP = exports.getNuevoListaBalanceHP = exports.getListaBalanceHP = exports.deleteModoVentilacion = exports.updateVentilacion = exports.getModoVentilacion = exports.getNuevoModosVent = exports.getModosVent = exports.updateNuevoMenuTrans = exports.updateMenuTrans = exports.saveNuevoMenuTrans = exports.saveMenuTrans = void 0;
const TransAnestesico_1 = require("../models/TransAnestesico");
const logger_1 = __importDefault(require("../logger"));
/******************* Menu Trans Anestesico *******************/
const saveMenuTrans = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid, 
        /* Balance Total */
        balanceTotal, 
        // Ingresos
        solHartman, solFisio, glucosados, gelatinas, almidones, albuminas, paqGlobular, plasmas, plaquetas, crioprecipitados, factor_VII, factor_VIII, otrosIngresos, 
        // Egresos
        liqAscitis, sangradoAprox, uresis, expoQX, reqBasales, ayuno, otrosEgresos, 
        // Datos del ventilador
        modosVentilacion, peep, vt, frecResp, IE, PLimite, Hr } = req.body;
        let menuTrans;
        if (modosVentilacion == undefined) {
            menuTrans = new TransAnestesico_1.MenuTrans({ pid, cxid,
                /* Balance Total */
                balanceTotal: balanceTotal,
                // Ingresos
                solHartman: solHartman,
                solFisio: solFisio,
                glucosados: glucosados,
                gelatinas: gelatinas,
                almidones: almidones,
                albuminas: albuminas,
                paqGlobular: paqGlobular,
                plasmas: plasmas,
                plaquetas: plaquetas,
                crioprecipitados: crioprecipitados,
                factor_VII: factor_VII,
                factor_VIII: factor_VIII,
                otrosIngresos: otrosIngresos,
                // Egresos
                liqAscitis: liqAscitis,
                sangradoAprox: sangradoAprox,
                uresis: uresis,
                expoQX: expoQX,
                reqBasales: reqBasales,
                ayuno: ayuno,
                otrosEgresos: otrosEgresos
            });
        }
        else {
            menuTrans = new TransAnestesico_1.MenuTrans({ pid, cxid,
                // Datos del ventilador
                datosVentilador: {
                    modosVentilacion: modosVentilacion,
                    peep: peep,
                    vt: vt,
                    frecResp: frecResp,
                    IE: IE,
                    PLimite: PLimite,
                    Hr: Hr,
                },
            });
        }
        yield menuTrans.save();
        return res.json({ menuTrans });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveMenuTrans = saveMenuTrans;
const saveNuevoMenuTrans = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid, 
        /* Balance Total */
        balanceTotal, 
        // Ingresos
        solHartman, solFisio, glucosados, gelatinas, almidones, albuminas, paqGlobular, plasmas, plaquetas, crioprecipitados, factor_VII, factor_VIII, otrosIngresos, 
        // Egresos
        liqAscitis, sangradoAprox, uresis, expoQX, reqBasales, ayuno, otrosEgresos, 
        // Datos del ventilador
        modosVentilacion, peep, vt, frecResp, IE, PLimite, Hr, } = req.body;
        let menuTrans;
        if (modosVentilacion == undefined) {
            menuTrans = new TransAnestesico_1.MenuTrans({ pid, cxid,
                /* Balance Total */
                balanceTotal: balanceTotal,
                // Ingresos
                solHartman: solHartman,
                solFisio: solFisio,
                glucosados: glucosados,
                gelatinas: gelatinas,
                almidones: almidones,
                albuminas: albuminas,
                paqGlobular: paqGlobular,
                plasmas: plasmas,
                plaquetas: plaquetas,
                crioprecipitados: crioprecipitados,
                factor_VII: factor_VII,
                factor_VIII: factor_VIII,
                otrosIngresos: otrosIngresos,
                // Egresos
                liqAscitis: liqAscitis,
                sangradoAprox: sangradoAprox,
                uresis: uresis,
                expoQX: expoQX,
                reqBasales: reqBasales,
                ayuno: ayuno,
                otrosEgresos: otrosEgresos
            });
        }
        else {
            menuTrans = new TransAnestesico_1.MenuTrans({ pid, cxid,
                // Datos del ventilador
                datosVentilador: {
                    modosVentilacion: modosVentilacion,
                    peep: peep,
                    vt: vt,
                    frecResp: frecResp,
                    IE: IE,
                    PLimite: PLimite,
                    Hr: Hr,
                },
            });
        }
        yield menuTrans.save();
        return res.json({ menuTrans });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveNuevoMenuTrans = saveNuevoMenuTrans;
const updateMenuTrans = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { // Datos del ventilador
        modosVentilacion, peep, vt, frecResp, IE, PLimite, Hr } = req.body;
        const menuTrans = yield TransAnestesico_1.MenuTrans.findOneAndUpdate({ pid: id }, { $push: {
                datosVentilador: {
                    modosVentilacion: modosVentilacion,
                    peep: peep,
                    vt: vt,
                    frecResp: frecResp,
                    IE: IE,
                    PLimite: PLimite,
                    Hr: Hr,
                },
            }
        });
        return res.json({ menuTrans });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.updateMenuTrans = updateMenuTrans;
const updateNuevoMenuTrans = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, cxid } = req.params;
        const { // Datos del ventilador
        modosVentilacion, peep, vt, frecResp, IE, PLimite, Hr } = req.body;
        const menuTrans = yield TransAnestesico_1.MenuTrans.findOneAndUpdate({ pid: id, cxid: cxid }, { $push: {
                datosVentilador: {
                    modosVentilacion: modosVentilacion,
                    peep: peep,
                    vt: vt,
                    frecResp: frecResp,
                    IE: IE,
                    PLimite: PLimite,
                    Hr: Hr,
                },
            }
        });
        return res.json({ menuTrans });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.updateNuevoMenuTrans = updateNuevoMenuTrans;
const getModosVent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid } = req.params;
        const listaModosVent = yield TransAnestesico_1.MenuTrans.find({ pid: pid });
        return res.json({ listaModosVent });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getModosVent = getModosVent;
const getNuevoModosVent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid } = req.params;
        const listaModosVent = yield TransAnestesico_1.MenuTrans.find({ pid: pid, cxid: cxid });
        return res.json({ listaModosVent });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getNuevoModosVent = getNuevoModosVent;
/* Obtener y mostrar el modo de ventilación seleccionado */
const getModoVentilacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { dVId } = req.params;
        const modoVent = yield TransAnestesico_1.MenuTrans.findOne({ "datosVentilador._id": dVId }, { "datosVentilador.$": 1 });
        return res.json({ modoVent });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getModoVentilacion = getModoVentilacion;
/* Funcion para actualizar un estudio */
const updateVentilacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { datosVentilador } = req.body;
        const ventilador = yield TransAnestesico_1.MenuTrans.updateOne({ "datosVentilador._id": id }, {
            $set: {
                "datosVentilador.$.modosVentilacion": datosVentilador[0].modosVentilacion,
                "datosVentilador.$.peep": datosVentilador[0].peep,
                "datosVentilador.$.vt": datosVentilador[0].vt,
                "datosVentilador.$.frecResp": datosVentilador[0].frecResp,
                "datosVentilador.$.IE": datosVentilador[0].IE,
                "datosVentilador.$.PLimite": datosVentilador[0].PLimite,
                "datosVentilador.$.Hr": datosVentilador[0].Hr
            }
        });
        if (!ventilador)
            return res.status(404).json({ Error: "No existe el modo de ventilación." });
        return res.json({ ventilador });
    }
    catch (error) {
        if (error.kind === "ObjectId") {
            logger_1.default.log({
                level: 'error',
                message: 'Formato de ID incorrecto', error
            });
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ error: "Error de servidor" });
    }
});
exports.updateVentilacion = updateVentilacion;
/* Borrar un modo de ventilación registrado */
const deleteModoVentilacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { dVId } = req.params;
        const modoVent = yield TransAnestesico_1.MenuTrans.findOneAndUpdate({ "datosVentilador._id": dVId }, { $pull: { datosVentilador: { _id: dVId } } });
        return res.json({ modoVent });
    }
    catch (error) {
        if (error.kind === "ObjectId") {
            logger_1.default.log({
                level: 'error',
                message: 'Formato de ID incorrecto', error
            });
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ error: "Error de servidor" });
    }
});
exports.deleteModoVentilacion = deleteModoVentilacion;
/* Función para obtener los balances hídricos parciales */
const getListaBalanceHP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid } = req.params;
        const balance = yield TransAnestesico_1.MenuTrans.find({ pid: pid });
        return res.json({ balance });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getListaBalanceHP = getListaBalanceHP;
/* Función para obtener los nuevos balances hídricos parciales */
const getNuevoListaBalanceHP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid } = req.params;
        const balance = yield TransAnestesico_1.MenuTrans.find({ pid: pid, cxid: cxid });
        return res.json({ balance });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getNuevoListaBalanceHP = getNuevoListaBalanceHP;
/* Función de actualización de Balance Hídrico Parcial */
const UpdateBalanceHP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { horaBalance, ingresos, egresos, balanceP } = req.body;
        const menuTrans = yield TransAnestesico_1.MenuTrans.findOneAndUpdate({ pid: id }, { $push: { balancesParciales: { horaBalance: horaBalance, ingresos: ingresos, egresos: egresos, balanceP: balanceP } } });
        return res.json({ menuTrans });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.UpdateBalanceHP = UpdateBalanceHP;
/* Función Nueva de actualización de Balance Hídrico Parcial */
const UpdateNuevoBalanceHP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, cxid } = req.params;
        const { horaBalance, ingresos, egresos, balanceP } = req.body;
        const menuTrans = yield TransAnestesico_1.MenuTrans.findOneAndUpdate({ pid: id, cxid: cxid }, { $push: { balancesParciales: { horaBalance: horaBalance, ingresos: ingresos, egresos: egresos, balanceP: balanceP } } });
        return res.json({ menuTrans });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.UpdateNuevoBalanceHP = UpdateNuevoBalanceHP;
/* Función de actualización de Balance Hídrico */
const UpdateBalanceH = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { /* Balance Total */ balanceTotal, 
        // Ingresos
        solHartman, solFisio, glucosados, gelatinas, almidones, albuminas, paqGlobular, plasmas, plaquetas, crioprecipitados, factor_VII, factor_VIII, otrosIngresos, 
        // Egresos
        liqAscitis, sangradoAprox, uresis, expoQX, reqBasales, ayuno, otrosEgresos, 
        /* Técnica Anestésica */
        local, sedación, gralBalanceada, TIVA, multimodal, bloqMixto, bloqPeriLum, bloqPeriCaudal, BloqEspinal, BloqPlexo, BloqTroncular, bloqPeriToracico, bloqPeriCervical, libreOpioides, } = req.body;
        const menuTrans = yield TransAnestesico_1.MenuTrans.findOneAndUpdate({ pid: id }, {
            balanceTotal: balanceTotal,
            // Ingresos
            solHartman: solHartman,
            solFisio: solFisio,
            glucosados: glucosados,
            gelatinas: gelatinas,
            almidones: almidones,
            albuminas: albuminas,
            paqGlobular: paqGlobular,
            plasmas: plasmas,
            plaquetas: plaquetas,
            crioprecipitados: crioprecipitados,
            factor_VII: factor_VII,
            factor_VIII: factor_VIII,
            otrosIngresos: otrosIngresos,
            // Egresos
            liqAscitis: liqAscitis,
            sangradoAprox: sangradoAprox,
            uresis: uresis,
            expoQX: expoQX,
            reqBasales: reqBasales,
            ayuno: ayuno,
            otrosEgresos: otrosEgresos,
            /* Técnica Anestésica */
            local: local,
            sedación: sedación,
            gralBalanceada: gralBalanceada,
            TIVA: TIVA,
            multimodal: multimodal,
            bloqMixto: bloqMixto,
            bloqPeriLum: bloqPeriLum,
            bloqPeriCaudal: bloqPeriCaudal,
            BloqEspinal: BloqEspinal,
            BloqPlexo: BloqPlexo,
            BloqTroncular: BloqTroncular,
            bloqPeriToracico: bloqPeriToracico,
            bloqPeriCervical: bloqPeriCervical,
            libreOpioides: libreOpioides
        });
        return res.json({ menuTrans });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.UpdateBalanceH = UpdateBalanceH;
/* Función Nueva de actualización de Balance Hídrico */
const UpdateNuevoBalanceH = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, cxid } = req.params;
        const { /* Balance Total */ balanceTotal, 
        // Ingresos
        solHartman, solFisio, glucosados, gelatinas, almidones, albuminas, paqGlobular, plasmas, plaquetas, crioprecipitados, factor_VII, factor_VIII, otrosIngresos, 
        // Egresos
        liqAscitis, sangradoAprox, uresis, expoQX, reqBasales, ayuno, otrosEgresos, 
        /* Técnica Anestésica */
        local, sedación, gralBalanceada, TIVA, multimodal, bloqMixto, bloqPeriLum, bloqPeriCaudal, BloqEspinal, BloqPlexo, BloqTroncular, bloqPeriToracico, bloqPeriCervical, libreOpioides, } = req.body;
        const menuTrans = yield TransAnestesico_1.MenuTrans.findOneAndUpdate({ pid: id, cxid: cxid }, {
            balanceTotal: balanceTotal,
            // Ingresos
            solHartman: solHartman,
            solFisio: solFisio,
            glucosados: glucosados,
            gelatinas: gelatinas,
            almidones: almidones,
            albuminas: albuminas,
            paqGlobular: paqGlobular,
            plasmas: plasmas,
            plaquetas: plaquetas,
            crioprecipitados: crioprecipitados,
            factor_VII: factor_VII,
            factor_VIII: factor_VIII,
            otrosIngresos: otrosIngresos,
            // Egresos
            liqAscitis: liqAscitis,
            sangradoAprox: sangradoAprox,
            uresis: uresis,
            expoQX: expoQX,
            reqBasales: reqBasales,
            ayuno: ayuno,
            otrosEgresos: otrosEgresos,
            /* Técnica Anestésica */
            local: local,
            sedación: sedación,
            gralBalanceada: gralBalanceada,
            TIVA: TIVA,
            multimodal: multimodal,
            bloqMixto: bloqMixto,
            bloqPeriLum: bloqPeriLum,
            bloqPeriCaudal: bloqPeriCaudal,
            BloqEspinal: BloqEspinal,
            BloqPlexo: BloqPlexo,
            BloqTroncular: BloqTroncular,
            bloqPeriToracico: bloqPeriToracico,
            bloqPeriCervical: bloqPeriCervical,
            libreOpioides: libreOpioides
        });
        return res.json({ menuTrans });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.UpdateNuevoBalanceH = UpdateNuevoBalanceH;
/* Tiempos QX Guardado/Actualización */
const saveTiemposQX = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid, 
        // Tiempos Qx
        ingresoQX, inicioAn, inicioCx, finCx, finAn, egresoQx, } = req.body;
        var tiempo = yield TransAnestesico_1.MenuTrans.findOne({ pid: pid });
        const tiempo2 = tiempo;
        if (tiempo) {
            tiempo = yield TransAnestesico_1.MenuTrans.updateOne({ "tiemposQX._id": tiempo2 === null || tiempo2 === void 0 ? void 0 : tiempo2.tiemposQX[0]._id }, { $set: { "tiemposQX.$.ingresoQX": ingresoQX,
                    "tiemposQX.$.inicioAn": inicioAn,
                    "tiemposQX.$.inicioCx": inicioCx,
                    "tiemposQX.$.finCx": finCx,
                    "tiemposQX.$.finAn": finAn,
                    "tiemposQX.$.egresoQx": egresoQx,
                }
            });
        }
        else {
            const menuTrans = new TransAnestesico_1.MenuTrans({ pid, cxid,
                // Datos del ventilador
                tiemposQX: {
                    ingresoQX: ingresoQX,
                },
            });
            yield menuTrans.save();
        }
        return res.json({ tiempo });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveTiemposQX = saveTiemposQX;
const saveNuevoTiemposQX = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid, 
        // Tiempos Qx
        ingresoQX, inicioAn, inicioCx, finCx, finAn, egresoQx, } = req.body;
        var tiempo = yield TransAnestesico_1.MenuTrans.findOne({ pid: pid, cxid: cxid });
        const tiempo2 = tiempo;
        if (tiempo) {
            tiempo = yield TransAnestesico_1.MenuTrans.updateOne({ "tiemposQX._id": tiempo2 === null || tiempo2 === void 0 ? void 0 : tiempo2.tiemposQX[0]._id }, { $set: { "tiemposQX.$.ingresoQX": ingresoQX,
                    "tiemposQX.$.inicioAn": inicioAn,
                    "tiemposQX.$.inicioCx": inicioCx,
                    "tiemposQX.$.finCx": finCx,
                    "tiemposQX.$.finAn": finAn,
                    "tiemposQX.$.egresoQx": egresoQx,
                }
            });
        }
        else {
            const menuTrans = new TransAnestesico_1.MenuTrans({ pid, cxid,
                // Datos del ventilador
                tiemposQX: {
                    ingresoQX: ingresoQX,
                },
            });
            yield menuTrans.save();
        }
        return res.json({ tiempo });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveNuevoTiemposQX = saveNuevoTiemposQX;
/* Guardado Datos MSV */
/* Para un nuevo paciente */
const saveDatosMSV = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid } = req.params;
        const { datosMSV } = req.body;
        const dataToInsert = datosMSV.map((data) => ({
            FC: data.FC,
            Pulso: data.Pulso,
            PAS: data.PAS,
            PAD: data.PAD,
            PAM: data.PAM,
            SpO2: data.SpO2,
            EtCO2: data.EtCO2,
            Temp1: data.Temp1,
            Temp2: data.Temp2,
            PVC: data.PVC,
            PAS_IN: data.PAS_IN,
            PAD_IN: data.PAD_IN,
            PAM_IN: data.PAM_IN,
            FiCO2: data.FiCO2,
            FR: data.FR,
            HoraGeneracion: data.HoraGeneracion,
        }));
        const menuTrans = yield TransAnestesico_1.MenuTrans.findOneAndUpdate({ pid: pid }, { $addToSet: { datosMSV: { $each: dataToInsert } } });
        return res.json({ menuTrans });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveDatosMSV = saveDatosMSV;
/* Para una nueva cirugía de un paciente ya existente */
const saveNuevoDatosMSV = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid } = req.params;
        const { datosMSV } = req.body;
        const dataToInsert = datosMSV.map((data) => ({
            FC: data.FC,
            Pulso: data.Pulso,
            PAS: data.PAS,
            PAD: data.PAD,
            PAM: data.PAM,
            SpO2: data.SpO2,
            EtCO2: data.EtCO2,
            Temp1: data.Temp1,
            Temp2: data.Temp2,
            PVC: data.PVC,
            PAS_IN: data.PAS_IN,
            PAD_IN: data.PAD_IN,
            PAM_IN: data.PAM_IN,
            FiCO2: data.FiCO2,
            FR: data.FR,
            HoraGeneracion: data.HoraGeneracion,
        }));
        const menuTrans = yield TransAnestesico_1.MenuTrans.findOneAndUpdate({ pid: pid, cxid: cxid }, { $addToSet: { datosMSV: { $each: dataToInsert } } });
        return res.json({ menuTrans });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveNuevoDatosMSV = saveNuevoDatosMSV;
/* Guardado Medicamentos */
const saveMedicamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid, 
        // Datos medicamentos
        tipoMed, medicamento, dosisMed, unidadMed, viaMed, horaInicioMed, horaFinalMed, observacionesMed, valorGrafica } = req.body;
        const menuTrans = yield new TransAnestesico_1.MenuTrans({ pid, cxid,
            // Datos del medicamento
            medicamentosCx: {
                tipoMed: tipoMed, medicamento: medicamento, dosisMed: dosisMed, unidadMed: unidadMed, viaMed: viaMed,
                horaInicioMed: horaInicioMed, horaFinalMed: horaFinalMed, observacionesMed: observacionesMed, valorGrafica: valorGrafica
            },
        });
        yield menuTrans.save();
        return res.json({ menuTrans });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveMedicamentos = saveMedicamentos;
const saveNuevoMedicamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid, 
        // Datos medicamentos
        tipoMed, medicamento, dosisMed, unidadMed, viaMed, horaInicioMed, horaFinalMed, observacionesMed, valorGrafica } = req.body;
        const menuTrans = yield new TransAnestesico_1.MenuTrans({ pid, cxid,
            // Datos del medicamento
            medicamentosCx: {
                tipoMed: tipoMed, medicamento: medicamento, dosisMed: dosisMed, unidadMed: unidadMed, viaMed: viaMed,
                horaInicioMed: horaInicioMed, horaFinalMed: horaFinalMed, observacionesMed: observacionesMed, valorGrafica: valorGrafica
            },
        });
        yield menuTrans.save();
        return res.json({ menuTrans });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveNuevoMedicamentos = saveNuevoMedicamentos;
const updateMedicamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid } = req.params;
        const { medicamentosCx } = req.body;
        const menuTrans = yield TransAnestesico_1.MenuTrans.findOneAndUpdate({ pid: pid }, { $push: {
                medicamentosCx: {
                    tipoMed: medicamentosCx[0], medicamento: medicamentosCx[1], dosisMed: medicamentosCx[2], unidadMed: medicamentosCx[3],
                    viaMed: medicamentosCx[4], horaInicioMed: medicamentosCx[5], horaFinalMed: medicamentosCx[6], observacionesMed: medicamentosCx[7],
                    valorGrafica: medicamentosCx[8]
                }
            }
        });
        return res.json({ menuTrans });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.updateMedicamentos = updateMedicamentos;
const updateNuevoMedicamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid } = req.params;
        const { medicamentosCx } = req.body;
        const menuTrans = yield TransAnestesico_1.MenuTrans.findOneAndUpdate({ pid: pid, cxid: cxid }, { $push: {
                medicamentosCx: {
                    tipoMed: medicamentosCx[0], medicamento: medicamentosCx[1], dosisMed: medicamentosCx[2], unidadMed: medicamentosCx[3],
                    viaMed: medicamentosCx[4], horaInicioMed: medicamentosCx[5], horaFinalMed: medicamentosCx[6], observacionesMed: medicamentosCx[7],
                    valorGrafica: medicamentosCx[8]
                }
            }
        });
        return res.json({ menuTrans });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.updateNuevoMedicamentos = updateNuevoMedicamentos;
/* Función para obtener los medicamentos */
const getMedicamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid } = req.params;
        const medicamento = yield TransAnestesico_1.MenuTrans.find({ pid: pid });
        return res.json({ medicamento });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getMedicamentos = getMedicamentos;
const getNuevoMedicamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid } = req.params;
        const medicamento = yield TransAnestesico_1.MenuTrans.find({ pid: pid, cxid: cxid });
        return res.json({ medicamento });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getNuevoMedicamentos = getNuevoMedicamentos;
/* Función para obtener un medicamento */
const getMedicamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const medicamento = yield TransAnestesico_1.MenuTrans.findOne({ "medicamentosCx._id": id }, { 'medicamentosCx.$': 1 });
        return res.json({ medicamento });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getMedicamento = getMedicamento;
/* Funcion para actualizar un medicamento */
const updateMedicamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { medicamentosCx } = req.body;
        const medicamento = yield TransAnestesico_1.MenuTrans.updateOne({ "medicamentosCx._id": id }, {
            $set: {
                "medicamentosCx.$.tipoMed": medicamentosCx[0].tipoMed, "medicamentosCx.$.medicamento": medicamentosCx[0].medicamento,
                "medicamentosCx.$.dosisMed": medicamentosCx[0].dosisMed, "medicamentosCx.$.unidadMed": medicamentosCx[0].unidadMed,
                "medicamentosCx.$.viaMed": medicamentosCx[0].viaMed, "medicamentosCx.$.horaInicioMed": medicamentosCx[0].horaInicioMed,
                "medicamentosCx.$.horaFinalMed": medicamentosCx[0].horaFinalMed, "medicamentosCx.$.observacionesMed": medicamentosCx[0].observacionesMed,
            }
        });
        if (!medicamento)
            return res.status(404).json({ Error: "No existe el medicamento." });
        return res.json({ medicamento });
    }
    catch (error) {
        if (error.kind === "ObjectId") {
            logger_1.default.log({
                level: 'error',
                message: 'Formato de ID incorrecto', error
            });
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ error: "Error de servidor" });
    }
});
exports.updateMedicamento = updateMedicamento;
/* Funcion para eliminar un medicamento */
const deleteMedicamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const medicamento = yield TransAnestesico_1.MenuTrans.findOneAndUpdate({ "medicamentosCx._id": id }, { $pull: { medicamentosCx: { _id: id } } });
        return res.json({ medicamento });
    }
    catch (error) {
        if (error.kind === "ObjectId") {
            logger_1.default.log({
                level: 'error',
                message: 'Formato de ID incorrecto', error
            });
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ error: "Error de servidor" });
    }
});
exports.deleteMedicamento = deleteMedicamento;
/* Guardado Relevo */
const saveRelevos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid, 
        // Datos relevos
        horaRelevo, tipoRel, matriculaRel, anestesiologoRel, observacionesRel } = req.body;
        const menuTrans = yield new TransAnestesico_1.MenuTrans({ pid, cxid,
            // Datos del relevo
            relevoCx: {
                horaRelevo: horaRelevo, tipoRel: tipoRel, matriculaRel: matriculaRel, anestesiologoRel: anestesiologoRel, observacionesRel: observacionesRel
            },
        });
        yield menuTrans.save();
        return res.json({ menuTrans });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveRelevos = saveRelevos;
const saveNuevoRelevos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid, 
        // Datos relevos
        horaRelevo, tipoRel, matriculaRel, anestesiologoRel, observacionesRel } = req.body;
        const menuTrans = yield new TransAnestesico_1.MenuTrans({ pid, cxid,
            // Datos del relevo
            relevoCx: {
                horaRelevo: horaRelevo, tipoRel: tipoRel, matriculaRel: matriculaRel, anestesiologoRel: anestesiologoRel, observacionesRel: observacionesRel
            },
        });
        yield menuTrans.save();
        return res.json({ menuTrans });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveNuevoRelevos = saveNuevoRelevos;
const updateRelevos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid } = req.params;
        const { relevoCx } = req.body;
        const menuTrans = yield TransAnestesico_1.MenuTrans.findOneAndUpdate({ pid: pid }, { $push: {
                relevoCx: {
                    horaRelevo: relevoCx[0], tipoRel: relevoCx[1], matriculaRel: relevoCx[2], anestesiologoRel: relevoCx[3], observacionesRel: relevoCx[4]
                }
            }
        });
        return res.json({ menuTrans });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.updateRelevos = updateRelevos;
const updateNuevoRelevos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid } = req.params;
        const { relevoCx } = req.body;
        const menuTrans = yield TransAnestesico_1.MenuTrans.findOneAndUpdate({ pid: pid, cxid: cxid }, { $push: {
                relevoCx: {
                    horaRelevo: relevoCx[0], tipoRel: relevoCx[1], matriculaRel: relevoCx[2], anestesiologoRel: relevoCx[3], observacionesRel: relevoCx[4]
                }
            }
        });
        return res.json({ menuTrans });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.updateNuevoRelevos = updateNuevoRelevos;
/* Función para obtener los relevos */
const getRelevos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid } = req.params;
        const relevo = yield TransAnestesico_1.MenuTrans.find({ pid: pid });
        return res.json({ relevo });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getRelevos = getRelevos;
const getNuevoRelevos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid } = req.params;
        const relevo = yield TransAnestesico_1.MenuTrans.find({ pid: pid, cxid: cxid });
        return res.json({ relevo });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getNuevoRelevos = getNuevoRelevos;
/* Función para obtener un medicamento */
const getRelevo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const relevo = yield TransAnestesico_1.MenuTrans.findOne({ "relevoCx._id": id }, { 'relevoCx.$': 1 });
        return res.json({ relevo });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getRelevo = getRelevo;
/* Funcion para actualizar un relevo */
const updateRelevo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { relevoCx } = req.body;
        const relevo = yield TransAnestesico_1.MenuTrans.updateOne({ "relevoCx._id": id }, {
            $set: {
                "relevoCx.$.horaRelevo": relevoCx[0].horaRelevo, "relevoCx.$.tipoRel": relevoCx[0].tipoRel,
                "relevoCx.$.matriculaRel": relevoCx[0].matriculaRel, "relevoCx.$.anestesiologoRel": relevoCx[0].anestesiologoRel,
                "relevoCx.$.observacionesRel": relevoCx[0].observacionesRel,
            }
        });
        if (!relevo)
            return res.status(404).json({ Error: "No existe el relevo." });
        return res.json({ relevo });
    }
    catch (error) {
        if (error.kind === "ObjectId") {
            logger_1.default.log({
                level: 'error',
                message: 'Formato de ID incorrecto', error
            });
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ error: "Error de servidor" });
    }
});
exports.updateRelevo = updateRelevo;
/* Funcion para eliminar un relevo */
const deleteRelevo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const relevo = yield TransAnestesico_1.MenuTrans.findOneAndUpdate({ "relevoCx._id": id }, { $pull: { relevoCx: { _id: id } } });
        return res.json({ relevo });
    }
    catch (error) {
        if (error.kind === "ObjectId") {
            logger_1.default.log({
                level: 'error',
                message: 'Formato de ID incorrecto', error
            });
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ error: "Error de servidor" });
    }
});
exports.deleteRelevo = deleteRelevo;
/* Guardado Eventos */
const saveEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid, 
        // Datos relevos
        horaEvento, tipoEve, detalleEvento } = req.body;
        const menuTrans = yield new TransAnestesico_1.MenuTrans({ pid, cxid,
            // Datos del relevo
            evCriticoCx: {
                horaEvento: horaEvento, tipoEve: tipoEve, detalleEvento: detalleEvento
            },
        });
        yield menuTrans.save();
        return res.json({ menuTrans });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveEventos = saveEventos;
const saveNuevoEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid, 
        // Datos relevos
        horaEvento, tipoEve, detalleEvento } = req.body;
        const menuTrans = yield new TransAnestesico_1.MenuTrans({ pid, cxid,
            // Datos del relevo
            evCriticoCx: {
                horaEvento: horaEvento, tipoEve: tipoEve, detalleEvento: detalleEvento
            },
        });
        yield menuTrans.save();
        return res.json({ menuTrans });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveNuevoEventos = saveNuevoEventos;
const updateEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid } = req.params;
        const { evCriticoCx } = req.body;
        const menuTrans = yield TransAnestesico_1.MenuTrans.findOneAndUpdate({ pid: pid }, { $push: {
                evCriticoCx: {
                    horaEvento: evCriticoCx[0], tipoEve: evCriticoCx[1], detalleEvento: evCriticoCx[2]
                }
            }
        });
        return res.json({ menuTrans });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.updateEventos = updateEventos;
const updateNuevoEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid } = req.params;
        const { evCriticoCx } = req.body;
        const menuTrans = yield TransAnestesico_1.MenuTrans.findOneAndUpdate({ pid: pid, cxid: cxid }, { $push: {
                evCriticoCx: {
                    horaEvento: evCriticoCx[0], tipoEve: evCriticoCx[1], detalleEvento: evCriticoCx[2]
                }
            }
        });
        return res.json({ menuTrans });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.updateNuevoEventos = updateNuevoEventos;
/* Función para obtener los Eventos */
const getEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid } = req.params;
        const evento = yield TransAnestesico_1.MenuTrans.find({ pid: pid });
        return res.json({ evento });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getEventos = getEventos;
const getNuevoEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid } = req.params;
        const evento = yield TransAnestesico_1.MenuTrans.find({ pid: pid, cxid: cxid });
        return res.json({ evento });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getNuevoEventos = getNuevoEventos;
/* Función para obtener un Evento */
const getEvento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const evento = yield TransAnestesico_1.MenuTrans.findOne({ "evCriticoCx._id": id }, { 'evCriticoCx.$': 1 });
        return res.json({ evento });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getEvento = getEvento;
/* Funcion para actualizar un Evento */
const updateEvento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { evCriticoCx } = req.body;
        const evento = yield TransAnestesico_1.MenuTrans.updateOne({ "evCriticoCx._id": id }, {
            $set: {
                "evCriticoCx.$.horaEvento": evCriticoCx[0].horaEvento, "evCriticoCx.$.tipoEve": evCriticoCx[0].tipoEve,
                "evCriticoCx.$.detalleEvento": evCriticoCx[0].detalleEvento
            }
        });
        if (!evento)
            return res.status(404).json({ Error: "No existe el relevo." });
        return res.json({ evento });
    }
    catch (error) {
        if (error.kind === "ObjectId") {
            logger_1.default.log({
                level: 'error',
                message: 'Formato de ID incorrecto', error
            });
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ error: "Error de servidor" });
    }
});
exports.updateEvento = updateEvento;
/* Funcion para eliminar un Evento */
const deleteEvento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const evento = yield TransAnestesico_1.MenuTrans.findOneAndUpdate({ "evCriticoCx._id": id }, { $pull: { evCriticoCx: { _id: id } } });
        return res.json({ evento });
    }
    catch (error) {
        if (error.kind === "ObjectId") {
            logger_1.default.log({
                level: 'error',
                message: 'Formato de ID incorrecto', error
            });
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ error: "Error de servidor" });
    }
});
exports.deleteEvento = deleteEvento;
