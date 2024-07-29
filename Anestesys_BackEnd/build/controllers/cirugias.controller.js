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
exports.getCirugias = exports.getCxN = exports.saveMSVdat = exports.updateSumaMedicamentos = exports.updateResAnest = exports.saveAldreteRec = exports.deleteCasoObsRN = exports.saveCasoObsRN = exports.deleteEventos = exports.saveEventos = exports.deleteRelevos = exports.saveRelevos = exports.deleteMedicamento = exports.saveMedicamentos = exports.deletePreEstudios = exports.savePreEstudios = exports.saveCx = exports.updateFichaId = void 0;
const logger_1 = __importDefault(require("../logger"));
const Cirugias_1 = require("../models/Cirugias");
const updateFichaId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const update = req.body;
        const cirugia = yield Cirugias_1.FichaIds.findByIdAndUpdate(id, {
            fechaNPaciente: update.fechaNPaciente,
            edadPaciente: update.edadPaciente,
            generoPaciente: update.generoPaciente,
            nacionalidad: update.nacionalidad,
            CURP: update.CURP,
            folioID: update.folioID,
            estNacimiento: update.estNacimiento,
            alcaldia: update.alcaldia,
            colonia: update.colonia,
            codigoPostal: update.codigoPostal,
        });
        return res.json({ cirugia });
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
exports.updateFichaId = updateFichaId;
const saveCx = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid, numEpisodio, habitacionPacnt, fechaInPacnt, diagnostico, tipoCx, cie10, cie9, infoProced, cuerpoMed, antPersPat, antPersNoPat, sigVit, expFis, viaAerea, perfilBioQ, pos_Cuidados, sedacion, regional, anestLocal, anestGral, obsNotaPre, balancesParciales, balanceTotal, balIng, balEgresos, datosVentilador, tiemposQX, notaPA, signVitEgQx, casoObsRecNac_NumProd, notaEval_Obs, altaRec, } = req.body;
        if (cxid) {
            var cirugia = yield Cirugias_1.Cirugias.findOne({ _id: cxid });
            const cx = cirugia;
            cirugia = yield Cirugias_1.Cirugias.updateOne({ "cirugia._id": cx === null || cx === void 0 ? void 0 : cx._id }, { $set: {
                    numEpisodio: numEpisodio,
                    habitacionPacnt: habitacionPacnt,
                    fechaInPacnt: fechaInPacnt,
                    diagnostico: diagnostico,
                    tipoCx: tipoCx,
                    cie10: cie10,
                    cie9: cie9,
                    infoProced: infoProced[0],
                    cuerpoMed: cuerpoMed[0],
                    antPersPat: antPersPat[0],
                    antPersNoPat: antPersNoPat[0],
                    sigVit: sigVit[0],
                    expFis: expFis[0],
                    viaAerea: viaAerea[0],
                    perfilBioQ: perfilBioQ[0],
                    pos_Cuidados: pos_Cuidados[0],
                    sedacion: sedacion[0],
                    regional: regional[0],
                    anestLocal: anestLocal[0],
                    anestGral: anestGral[0],
                    obsNotaPre,
                    balancesParciales: balancesParciales[0],
                    balanceTotal,
                    balIng: balIng[0],
                    balEgresos: balEgresos[0],
                    datosVentilador: datosVentilador[0],
                    tiemposQX: tiemposQX[0],
                    notaPA: notaPA[0],
                    signVitEgQx: signVitEgQx[0],
                    casoObsRecNac_NumProd,
                    notaEval_Obs,
                    altaRec: altaRec[0],
                }
            });
            console.log(cirugia);
        }
        else {
            const cirugia = new Cirugias_1.Cirugias({
                pid: pid,
                numEpisodio: numEpisodio,
                habitacionPacnt: habitacionPacnt,
                fechaInPacnt: fechaInPacnt,
                diagnostico: diagnostico,
                tipoCx: tipoCx,
                cie10: cie10,
                cie9: cie9,
                infoProced: infoProced[0],
                cuerpoMed: cuerpoMed[0],
                antPersPat: antPersPat[0],
                antPersNoPat: antPersNoPat[0],
                sigVit: sigVit[0],
                expFis: expFis[0],
                viaAerea: viaAerea[0],
                perfilBioQ: perfilBioQ[0],
                pos_Cuidados: pos_Cuidados[0],
                sedacion: sedacion[0],
                regional: regional[0],
                anestLocal: anestLocal[0],
                anestGral: anestGral[0],
                obsNotaPre,
                balancesParciales: balancesParciales[0],
                balanceTotal,
                balIng: balIng[0],
                balEgresos: balEgresos[0],
                datosVentilador: datosVentilador[0],
                tiemposQX: tiemposQX[0],
                notaPA: notaPA[0],
                signVitEgQx: signVitEgQx[0],
                casoObsRecNac_NumProd,
                notaEval_Obs,
                altaRec: altaRec[0],
            });
            yield cirugia.save();
            return res.json({ cirugia });
        }
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error al guardar la ficha de cirugía', error
        });
        return res.status(500).json({ Error: 'Error al guardar la ficha de cirugía' });
    }
});
exports.saveCx = saveCx;
const savePreEstudios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, val_Estudios } = req.body;
        const valest = yield Cirugias_1.Cirugias.findOneAndUpdate({ _id: id }, { $push: {
                Estudios: {
                    estudio: val_Estudios[0],
                    especifEstudio: val_Estudios[1]
                }
            } });
        return res.json({ valest });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error al guardar los Estudios', error
        });
        return res.status(500).json({ Error: 'Error al guardar los Estudios' });
    }
});
exports.savePreEstudios = savePreEstudios;
const deletePreEstudios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cxID, estID } = req.body;
        const cirugia = yield Cirugias_1.Cirugias.findOneAndUpdate({ "_id": cxID }, { $pull: {
                Estudios: { _id: estID }
            }
        });
        return res.json({ cirugia });
    }
    catch (error) {
        logger_1.default.error('Ocurrió un error:', error);
        if (error.kind === "ObjectId") {
            logger_1.default.log({
                level: 'error',
                message: 'Formato de ID incorrecto', error
            });
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
        logger_1.default.log({
            level: 'error',
            message: 'Error al borrar los Estudios', error
        });
        return res.status(500).json({ error: "Error al borrar los Estudios" });
    }
});
exports.deletePreEstudios = deletePreEstudios;
const saveMedicamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, tipoMed, medicamento, dosisMed, unidadMed, viaMed, horaInicioMed, horaFinalMed, observacionesMed, valorGrafica } = req.body;
        const cirugia = yield Cirugias_1.Cirugias.findOneAndUpdate({ _id: id }, 
        // Datos del medicamento
        { $push: {
                medicamentosCx: {
                    tipoMed: tipoMed,
                    medicamento: medicamento,
                    dosisMed: dosisMed,
                    unidadMed: unidadMed,
                    viaMed: viaMed,
                    horaInicioMed: horaInicioMed,
                    horaFinalMed: horaFinalMed,
                    observacionesMed: observacionesMed,
                    valorGrafica: valorGrafica
                },
            } });
        return res.json({ cirugia });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error al guardar el medicamento', error
        });
        return res.status(500).json({ Error: 'Error al guardar el medicamento' });
    }
});
exports.saveMedicamentos = saveMedicamentos;
const deleteMedicamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cxID, medID } = req.body;
        const cirugia = yield Cirugias_1.Cirugias.findOneAndUpdate({ "_id": cxID }, { $pull: {
                medicamentosCx: { _id: medID }
            }
        });
        return res.json({ cirugia });
    }
    catch (error) {
        logger_1.default.error('Ocurrió un error:', error);
        if (error.kind === "ObjectId") {
            logger_1.default.log({
                level: 'error',
                message: 'Formato de ID incorrecto', error
            });
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
        logger_1.default.log({
            level: 'error',
            message: 'Error al borrar los Medicamentos', error
        });
        return res.status(500).json({ error: "Error al borrar los Medicamentos" });
    }
});
exports.deleteMedicamento = deleteMedicamento;
const saveRelevos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, 
        // Datos relevos
        horaRelevo, tipoRel, matriculaRel, anestesiologoRel, observacionesRel } = req.body;
        const cirugia = yield Cirugias_1.Cirugias.findOneAndUpdate({ _id: id }, { $push: {
                // Datos del relevo
                relevoCx: {
                    horaRelevo: horaRelevo,
                    tipoRel: tipoRel,
                    matriculaRel: matriculaRel,
                    anestesiologoRel: anestesiologoRel,
                    observacionesRel: observacionesRel
                },
            } });
        return res.json({ cirugia });
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
const deleteRelevos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cxID, relID } = req.body;
        const cirugia = yield Cirugias_1.Cirugias.findOneAndUpdate({ "_id": cxID }, { $pull: {
                relevoCx: { _id: relID }
            }
        });
        return res.json({ cirugia });
    }
    catch (error) {
        logger_1.default.error('Ocurrió un error:', error);
        if (error.kind === "ObjectId") {
            logger_1.default.log({
                level: 'error',
                message: 'Formato de ID incorrecto', error
            });
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
        logger_1.default.log({
            level: 'error',
            message: 'Error al borrar los Relevos', error
        });
        return res.status(500).json({ error: "Error al borrar los Relevos" });
    }
});
exports.deleteRelevos = deleteRelevos;
const saveEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, 
        // Datos relevos
        horaEvento, tipoEve, detalleEvento, valorGraficaEv } = req.body;
        const cirugia = yield Cirugias_1.Cirugias.findOneAndUpdate({ _id: id }, { $push: {
                // Datos del relevo
                evCriticoCx: {
                    horaEvento: horaEvento,
                    tipoEve: tipoEve,
                    detalleEvento: detalleEvento,
                    valorGraficaEv: valorGraficaEv
                },
            } });
        return res.json({ cirugia });
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
const deleteEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cxID, evID } = req.body;
        const cirugia = yield Cirugias_1.Cirugias.findOneAndUpdate({ "_id": cxID }, { $pull: {
                evCriticoCx: { _id: evID }
            }
        });
        return res.json({ cirugia });
    }
    catch (error) {
        logger_1.default.error('Ocurrió un error:', error);
        if (error.kind === "ObjectId") {
            logger_1.default.log({
                level: 'error',
                message: 'Formato de ID incorrecto', error
            });
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
        logger_1.default.log({
            level: 'error',
            message: 'Error al borrar los Relevos', error
        });
        return res.status(500).json({ error: "Error al borrar los Relevos" });
    }
});
exports.deleteEventos = deleteEventos;
const saveCasoObsRN = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, Genero, HrNacimiento, Alumbramiento, Apgar1, Apgar5, Capurro, Peso, Talla } = req.body;
        const cirugia = yield Cirugias_1.Cirugias.findOneAndUpdate({ _id: id }, { $push: {
                // Datos del recien nacido
                casoObsRecNac: {
                    Genero: Genero,
                    HrNacimiento: HrNacimiento,
                    Alumbramiento: Alumbramiento,
                    Apgar1: Apgar1,
                    Apgar5: Apgar5,
                    Capurro: Capurro,
                    Peso: Peso,
                    Talla: Talla,
                }
            } });
        return res.json({ cirugia });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveCasoObsRN = saveCasoObsRN;
const deleteCasoObsRN = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cxID, cornID } = req.body;
        const cirugia = yield Cirugias_1.Cirugias.findOneAndUpdate({ "_id": cxID }, { $pull: {
                casoObsRecNac: { _id: cornID }
            }
        });
        return res.json({ cirugia });
    }
    catch (error) {
        logger_1.default.error('Ocurrió un error:', error);
        if (error.kind === "ObjectId") {
            logger_1.default.log({
                level: 'error',
                message: 'Formato de ID incorrecto', error
            });
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
        logger_1.default.log({
            level: 'error',
            message: 'Error al borrar el Caso obstetrico', error
        });
        return res.status(500).json({ error: "Error al borrar el Caso obstetrico" });
    }
});
exports.deleteCasoObsRN = deleteCasoObsRN;
const saveAldreteRec = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, FrecCard, FrecResp, TensArte, SatO2, Muscular, Respiracion, CirculacionIn, Conciencia, Coloracion, Bromage, Nauseas, escEVADol } = req.body;
        const cirugia = yield Cirugias_1.Cirugias.findOneAndUpdate({ _id: id }, { $push: {
                aldreteRec: {
                    // IN, 15, 30, 45, 60, 90, 120
                    // Frecuencia Cardiaca
                    FrecCard: FrecCard,
                    // Frecuencia Respiratoria
                    FrecResp: FrecResp,
                    // Tension Arterial
                    TensArte: TensArte,
                    // Saturación de O2
                    SatO2: SatO2,
                    // Actividad Muscular
                    Muscular: Muscular,
                    // Respiración
                    Respiracion: Respiracion,
                    // Circulación
                    CirculacionIn: CirculacionIn,
                    // Estado de Conciencia
                    Conciencia: Conciencia,
                    // Coloración
                    Coloracion: Coloracion,
                    // Bromage
                    Bromage: Bromage,
                    // Nauseas/Vomito
                    Nauseas: Nauseas,
                    // Escala de EVA de Dolor
                    escEVADol: escEVADol,
                },
            } });
        return res.json({ cirugia });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveAldreteRec = saveAldreteRec;
const updateResAnest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, CritAldrete } = req.body;
        const cirugia = yield Cirugias_1.Cirugias.findOneAndUpdate({ _id: id }, { $addToSet: { CritAldrete: CritAldrete } });
        return res.json({ cirugia });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.updateResAnest = updateResAnest;
const updateSumaMedicamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, medicamentosSuma } = req.body;
        const cirugia = yield Cirugias_1.Cirugias.findOneAndUpdate({ _id: id }, { $addToSet: { medicamentosSuma: medicamentosSuma } });
        return res.json({ cirugia });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.updateSumaMedicamentos = updateSumaMedicamentos;
/* Falta probar que funcione correctamente */
const saveMSVdat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, datosMSV } = req.body;
        const dataToInsert = datosMSV.map((data) => ({
            FC: data.FC, Pulso: data.Pulso,
            PAS: data.PAS, PAD: data.PAD,
            PAM: data.PAM, SpO2: data.SpO2,
            EtCO2: data.EtCO2, Temp1: data.Temp1,
            Temp2: data.Temp2, PVC: data.PVC,
            PAS_IN: data.PAS_IN, PAD_IN: data.PAD_IN,
            PAM_IN: data.PAM_IN, FiCO2: data.FiCO2,
            FR: data.FR, HoraGeneracion: data.HoraGeneracion,
        }));
        console.log(id, dataToInsert);
        const cirugia = yield Cirugias_1.Cirugias.findOneAndUpdate({ _id: id }, { $addToSet: { datosMSV: { $each: dataToInsert } } });
        return res.json({ cirugia });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error al guardar datos del MSV', error
        });
        return res.status(500).json({ Error: 'Error al guardar datos del MSV' });
    }
});
exports.saveMSVdat = saveMSVdat;
const getCxN = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const cirugia = yield Cirugias_1.Cirugias.find({ "_id": id });
        return res.json({ cirugia });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getCxN = getCxN;
const getCirugias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const ficha = yield Cirugias_1.FichaIds.find({ numExpediente: id });
        const cirugias = yield Cirugias_1.Cirugias.find({ pid: ficha[0].id });
        return res.json({ ficha, cirugias });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getCirugias = getCirugias;
