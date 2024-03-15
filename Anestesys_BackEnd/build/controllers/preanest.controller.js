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
exports.updateNuevoNota = exports.updateNota = exports.saveNuevoNota = exports.saveNota = exports.updateNuevoPrePlan = exports.updatePrePlan = exports.saveNuevoPrePlan = exports.savePrePlan = exports.deleteEstudio = exports.updateEstudio = exports.getEstudio = exports.getEstudios = exports.updateEstudios = exports.saveEstudios = exports.updateNuevoPreAntecedentes = exports.saveNuevoPreAntecedentes = exports.updatePreAntecedentes = exports.savePreAntecedentes = exports.updateNuevoRegistroPaciente = exports.updateAnteriorPaciente = exports.createNuevoRegistroPaciente = exports.updatePaciente = exports.createPaciente = exports.getPaciente = exports.getPDFData = exports.getCirugias = exports.getCIE9 = exports.getCIE10 = exports.getExpedientes = void 0;
const PreAnestesico_1 = require("../models/PreAnestesico");
const TransAnestesico_1 = require("../models/TransAnestesico");
const PostAnestesico_1 = require("../models/PostAnestesico");
const logger_1 = __importDefault(require("../logger"));
/********************************************************************/
/***************************  ID PACIENTE ***************************/
/********************************************************************/
/* Función para listar los expedientes */
const getExpedientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { numExpediente } = req.params;
        const regex = new RegExp('^' + numExpediente, 'i');
        const expedientes = yield PreAnestesico_1.PreIdPacientes.find({ numExpediente: regex });
        return res.json({ expedientes });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getExpedientes = getExpedientes;
/* Función para listar los datos de CIE-10 */
const getCIE10 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre } = req.params;
        // Crea una expresión regular con RegExp para buscar el nombre que comienza con la palabra proporcionada
        const regex = new RegExp('^' + nombre, 'i');
        const cie10 = yield PreAnestesico_1.PreCatalogoCIE10.find({ nombre: regex });
        return res.json({ cie10 });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getCIE10 = getCIE10;
/* Función para listar los datos de CIE-9 */
const getCIE9 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre } = req.params;
        const regex = new RegExp('^' + nombre, 'i');
        const cie9 = yield PreAnestesico_1.PreCatalogoCIE9.find({ nombre: regex });
        return res.json({ cie9 });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getCIE9 = getCIE9;
/* Función para listar las cirugías */
const getCirugias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const pacientes = yield PreAnestesico_1.PreIdPacientes.find({ numExpediente: id });
        const pacientesCx = yield PreAnestesico_1.PreIdPacientesCx.find({ pid: pacientes[0].id });
        return res.json({ pacientes, pacientesCx });
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
const getPDFData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const pacientesCx = yield PreAnestesico_1.PreIdPacientesCx.find({ "_id": id });
        const pacientesVal = yield PreAnestesico_1.PreValoracion.find({ cxid: pacientesCx[0].id });
        const pacientesEstu = yield PreAnestesico_1.ValEstudios.find({ vid: pacientesVal[0].id });
        const pacientesPlan = yield PreAnestesico_1.PrePlan.find({ cxid: pacientesCx[0].id });
        const pacientesNotaPre = yield PreAnestesico_1.PreNota.find({ cxid: pacientesCx[0].id });
        const pacienteTrans = yield TransAnestesico_1.MenuTrans.find({ cxid: pacientesCx[0].id });
        const pacientesNotaPost = yield PostAnestesico_1.PostNotaPA.find({ cxid: pacientesCx[0].id });
        const pacientesRecu = yield PostAnestesico_1.PostRecupera.find({ cxid: pacientesCx[0].id });
        return res.json({ pacientesCx, pacientesVal, pacientesEstu, pacientesPlan, pacientesNotaPre, pacienteTrans, pacientesNotaPost, pacientesRecu });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getPDFData = getPDFData;
/* Funcion para la busqueda de un paciente. Debe estar asociado al usuario */
const getPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const pacientes = yield PreAnestesico_1.PreIdPacientes.find({ numExpediente: id });
        return res.json({ pacientes });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getPaciente = getPaciente;
/* Funcion para registrar la ficha ID de un paciente */
const createPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { /* Información principal del paciente */ numExpediente, nomPaciente, 
        /* Información adicional del paciente */
        numEpisodio, fechaNPaciente, edadPaciente, habitacionPaciente, generoPaciente, fechaInPaciente, diagnostico, tipoCx, 
        /* Datos CIE */
        cie10, cie9, 
        /* Informacion Médicos */
        cirugia, fechaCx, hrCx, 
        /* Informacion Médicos */
        cirujano, anestesiologo, anestesiologoVPA, residenteAnestesia, 
        /* Datos Demográficos */
        nacionalidad, CURP, folioID, estNacimiento, estResidencia, alcaldia, colonia, codigoPostal } = req.body;
        const paciente = new PreAnestesico_1.PreIdPacientes({ numExpediente, nomPaciente, uid: req.uid,
            fechaNPaciente, edadPaciente, generoPaciente,
            /* Datos Demográficos */
            nacionalidad, CURP, folioID, estNacimiento,
            estResidencia, alcaldia, colonia, codigoPostal });
        const infoCx = new PreAnestesico_1.PreIdPacientesCx({
            numEpisodio, pid: paciente._id, habitacionPaciente,
            fechaInPaciente, diagnostico, tipoCx,
            /* Datos CIE */
            cie10, cie9,
            /* Informacion Médicos */
            cirugia, fechaCx, hrCx,
            /* Informacion Médicos */
            cirujano, anestesiologo, anestesiologoVPA,
            residenteAnestesia
        });
        yield paciente.save();
        yield infoCx.save();
        return res.json({ paciente, infoCx });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.createPaciente = createPaciente;
/* Funcion de actualización de la ficha ID de un paciente */
const updatePaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updVar = req.body;
        const paciente = yield PreAnestesico_1.PreIdPacientes.findByIdAndUpdate(id, { nomPaciente: updVar.nomPaciente,
            fechaNPaciente: updVar.fechaNPaciente,
            edadPaciente: updVar.edadPaciente,
            generoPaciente: updVar.generoPaciente,
            nacionalidad: updVar.nacionalidad,
            CURP: updVar.CURP,
            folioID: updVar.folioID,
            estNacimiento: updVar.estNacimiento,
            estResidencia: updVar.estResidencia,
            alcaldia: updVar.alcaldia,
            colonia: updVar.colonia,
            codigoPostal: updVar.codigoPostal });
        const infoCx = yield PreAnestesico_1.PreIdPacientesCx.findOneAndUpdate({ pid: paciente === null || paciente === void 0 ? void 0 : paciente._id }, { numEpisodio: updVar.numEpisodio,
            habitacionPaciente: updVar.habitacionPaciente,
            fechaInPaciente: updVar.fechaInPaciente,
            /* Datos de cirugía */
            diagnostico: updVar.diagnostico,
            tipoCx: updVar.tipoCx,
            /* Datos CIE */
            cie9: updVar.cie9,
            cie10: updVar.cie10,
            /* Informacion procedimiento */
            cirugia: updVar.cirugia,
            fechaCx: updVar.fechaCx,
            hrCx: updVar.hrCx,
            /* Informacion Médicos */
            cirujano: updVar.cirujano,
            anestesiologo: updVar.anestesiologo,
            anestesiologoVPA: updVar.anestesiologoVPA,
            residenteAnestesia: updVar.residenteAnestesia });
        return res.json({ paciente, infoCx });
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
exports.updatePaciente = updatePaciente;
/* Funcion para crear un nuevo registro de un paciente */
const createNuevoRegistroPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { 
        /* Información adicional del paciente */
        numEpisodio, pid, habitacionPaciente, fechaInPaciente, diagnostico, tipoCx, 
        /* Datos CIE */
        cie10, cie9, 
        /* Informacion Médicos */
        cirugia, fechaCx, hrCx, 
        /* Informacion Médicos */
        cirujano, anestesiologo, anestesiologoVPA, residenteAnestesia } = req.body;
        const infoCx = new PreAnestesico_1.PreIdPacientesCx({
            numEpisodio, pid, habitacionPaciente,
            fechaInPaciente, diagnostico, tipoCx,
            /* Datos CIE */
            cie10, cie9,
            /* Informacion Médicos */
            cirugia, fechaCx, hrCx,
            /* Informacion Médicos */
            cirujano, anestesiologo, anestesiologoVPA,
            residenteAnestesia
        });
        yield infoCx.save();
        return res.json({ infoCx });
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
exports.createNuevoRegistroPaciente = createNuevoRegistroPaciente;
/* Funcion de actualización de la ficha ID de un paciente */
const updateAnteriorPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updVar = req.body;
        const paciente = yield PreAnestesico_1.PreIdPacientes.findByIdAndUpdate(id, { fechaNPaciente: updVar.fechaNPaciente,
            edadPaciente: updVar.edadPaciente,
            generoPaciente: updVar.generoPaciente });
        return res.json({ paciente });
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
exports.updateAnteriorPaciente = updateAnteriorPaciente;
/* Funcion de actualización del nuevo registro de la ficha ID de un paciente */
const updateNuevoRegistroPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updVar = req.body;
        const infoCx = yield PreAnestesico_1.PreIdPacientesCx.findByIdAndUpdate(id, { numEpisodio: updVar.numEpisodio,
            habitacionPaciente: updVar.habitacionPaciente,
            fechaInPaciente: updVar.fechaInPaciente,
            /* Datos de cirugía */
            diagnostico: updVar.diagnostico,
            tipoCx: updVar.tipoCx,
            /* Datos CIE */
            cie9: updVar.cie9,
            cie10: updVar.cie10,
            /* Informacion procedimiento */
            cirugia: updVar.cirugia,
            fechaCx: updVar.fechaCx,
            hrCx: updVar.hrCx,
            /* Informacion Médicos */
            cirujano: updVar.cirujano,
            anestesiologo: updVar.anestesiologo,
            anestesiologoVPA: updVar.anestesiologoVPA,
            residenteAnestesia: updVar.residenteAnestesia });
        return res.json({ infoCx });
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
exports.updateNuevoRegistroPaciente = updateNuevoRegistroPaciente;
/********************************************************************/
/**************************** Valoración ****************************/
/********************************************************************/
/* Función de registro de valoración pre anetésica */
const savePreAntecedentes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid, 
        // Patológicos
        antPersPat_Alergias, antPersPat_Quirurgicos, antPersPat_Endocrinologicos, antPersPat_Urologicos, antPersPat_Traumaticos, antPersPat_Ortopedicos, antPersPat_Transfusiones, antPersPat_CompAnestPrev, antPersPat_EstadoPsiq, antPersPat_MedActual, 
        // No Patológicos
        antPersNoPat_HrsAyuno, antPersNoPat_Tabaquismo, antPersNoPat_Etilismo, antPersNoPat_Adicciones, antPersNoPat_Inmunizaciones, antPersNoPat_AntImportQx, 
        // Exploración Física
        sigVit_Edad, sigVit_Temperatura, sigVit_FrecuCardiaca, sigVit_FrecuRespiratoria, sigVit_Peso, sigVit_Talla, sigVit_IMC, sigVit_TensionArterial, sigVit_SaturacionOxigeno, 
        // Perfil Bioquímico
        perfilBioQ_FechaRealizacion, perfilBioQ_GrupoSanguineo, perfilBioQ_Hemoglobina, perfilBioQ_Hematocrito, perfilBioQ_Plaquetas, perfilBioQ_Leutocitos, perfilBioQ_TP, perfilBioQ_TT, perfilBioQ_TPT, perfilBioQ_INR, perfilBioQ_Glucosa, perfilBioQ_Creatinina, perfilBioQ_Urea, perfilBioQ_Sodio, perfilBioQ_Potasio, perfilBioQ_Cloro, perfilBioQ_Calcio, perfilBioQ_Magnesio, perfilBioQ_BilirrubinaDirecta, perfilBioQ_BilirrubinaIndirecta, perfilBioQ_BilirrubinaTotal, perfilBioQ_Lipasa, perfilBioQ_Amilasa, perfilBioQ_Otros, 
        // Valoración Vía Aérea y Otras Escalas
        viaAerea_Mallampati, viaAerea_PatilAldreti, viaAerea_AperturaBucal, viaAerea_Distancia, viaAerea_Protusion, viaAerea_Ipid, viaAerea_Glasgow, viaAerea_NYHA, viaAerea_Goldman, viaAerea_RiesgoTrombosis, viaAerea_ClasificacionASA, viaAerea_TipoCirugia, viaAerea_RiesgoAnestesico, 
        // Valoración de Aparatos y Sistemas
        expFis_VASCabeza, expFis_VASCuello, expFis_VASRespiratorio, expFis_VASCardioVasc, expFis_VASHipertension, expFis_VASAbdomen, expFis_VASGenUr, expFis_VASMuscEsq, expFis_VASNeuro, expFis_VASPielFaneras, } = req.body;
        const preval = new PreAnestesico_1.PreValoracion({
            pid: pid, cxid: cxid,
            /* Antecedentes */
            // Personales Patológicos
            antPersPat_Alergias: antPersPat_Alergias,
            antPersPat_Quirurgicos: antPersPat_Quirurgicos,
            antPersPat_Endocrinologicos: antPersPat_Endocrinologicos,
            antPersPat_Urologicos: antPersPat_Urologicos,
            antPersPat_Traumaticos: antPersPat_Traumaticos,
            antPersPat_Ortopedicos: antPersPat_Ortopedicos,
            antPersPat_Transfusiones: antPersPat_Transfusiones,
            antPersPat_CompAnestPrev: antPersPat_CompAnestPrev,
            antPersPat_EstadoPsiq: antPersPat_EstadoPsiq,
            antPersPat_MedActual: antPersPat_MedActual,
            //Personales No Patológicos
            antPersNoPat_HrsAyuno: antPersNoPat_HrsAyuno,
            antPersNoPat_Tabaquismo: antPersNoPat_Tabaquismo,
            antPersNoPat_Etilismo: antPersNoPat_Etilismo,
            antPersNoPat_Adicciones: antPersNoPat_Adicciones,
            antPersNoPat_Inmunizaciones: antPersNoPat_Inmunizaciones,
            antPersNoPat_AntImportQx: antPersNoPat_AntImportQx,
            /* Exploración Física */
            //Signos Vitales
            sigVit_Edad: sigVit_Edad,
            sigVit_Temperatura: sigVit_Temperatura,
            sigVit_FrecuCardiaca: sigVit_FrecuCardiaca,
            sigVit_FrecuRespiratoria: sigVit_FrecuRespiratoria,
            sigVit_Peso: sigVit_Peso,
            sigVit_Talla: sigVit_Talla,
            sigVit_IMC: sigVit_IMC,
            sigVit_TensionArterial: sigVit_TensionArterial,
            sigVit_SaturacionOxigeno: sigVit_SaturacionOxigeno,
            // Vía Aérea
            viaAerea_Mallampati: viaAerea_Mallampati,
            viaAerea_PatilAldreti: viaAerea_PatilAldreti,
            viaAerea_AperturaBucal: viaAerea_AperturaBucal,
            viaAerea_Distancia: viaAerea_Distancia,
            viaAerea_Protusion: viaAerea_Protusion,
            viaAerea_Ipid: viaAerea_Ipid,
            viaAerea_Glasgow: viaAerea_Glasgow,
            viaAerea_NYHA: viaAerea_NYHA,
            viaAerea_Goldman: viaAerea_Goldman,
            viaAerea_RiesgoTrombosis: viaAerea_RiesgoTrombosis,
            viaAerea_ClasificacionASA: viaAerea_ClasificacionASA,
            viaAerea_TipoCirugia: viaAerea_TipoCirugia,
            viaAerea_RiesgoAnestesico: viaAerea_RiesgoAnestesico,
            // Laboratorio
            perfilBioQ_FechaRealizacion: perfilBioQ_FechaRealizacion,
            perfilBioQ_GrupoSanguineo: perfilBioQ_GrupoSanguineo,
            perfilBioQ_Hemoglobina: perfilBioQ_Hemoglobina,
            perfilBioQ_Hematocrito: perfilBioQ_Hematocrito,
            perfilBioQ_Plaquetas: perfilBioQ_Plaquetas,
            perfilBioQ_Leutocitos: perfilBioQ_Leutocitos,
            perfilBioQ_TP: perfilBioQ_TP,
            perfilBioQ_TT: perfilBioQ_TT,
            perfilBioQ_TPT: perfilBioQ_TPT,
            perfilBioQ_INR: perfilBioQ_INR,
            perfilBioQ_Glucosa: perfilBioQ_Glucosa,
            perfilBioQ_Creatinina: perfilBioQ_Creatinina,
            perfilBioQ_Urea: perfilBioQ_Urea,
            perfilBioQ_Sodio: perfilBioQ_Sodio,
            perfilBioQ_Potasio: perfilBioQ_Potasio,
            perfilBioQ_Cloro: perfilBioQ_Cloro,
            perfilBioQ_Calcio: perfilBioQ_Calcio,
            perfilBioQ_Magnesio: perfilBioQ_Magnesio,
            perfilBioQ_BilirrubinaDirecta: perfilBioQ_BilirrubinaDirecta,
            perfilBioQ_BilirrubinaIndirecta: perfilBioQ_BilirrubinaIndirecta,
            perfilBioQ_BilirrubinaTotal: perfilBioQ_BilirrubinaTotal,
            perfilBioQ_Lipasa: perfilBioQ_Lipasa,
            perfilBioQ_Amilasa: perfilBioQ_Amilasa,
            perfilBioQ_Otros: perfilBioQ_Otros,
            // Valoración de Aparatos y Sistemas
            expFis_VASCabeza: expFis_VASCabeza,
            expFis_VASCuello: expFis_VASCuello,
            expFis_VASRespiratorio: expFis_VASRespiratorio,
            expFis_VASCardioVasc: expFis_VASCardioVasc,
            expFis_VASHipertension: expFis_VASHipertension,
            expFis_VASAbdomen: expFis_VASAbdomen,
            expFis_VASGenUr: expFis_VASGenUr,
            expFis_VASMuscEsq: expFis_VASMuscEsq,
            expFis_VASNeuro: expFis_VASNeuro,
            expFis_VASPielFaneras: expFis_VASPielFaneras,
        });
        yield preval.save();
        return res.json({ preval });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.savePreAntecedentes = savePreAntecedentes;
const updatePreAntecedentes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { // Patológicos
        antPersPat_Alergias, antPersPat_Quirurgicos, antPersPat_Endocrinologicos, antPersPat_Urologicos, antPersPat_Traumaticos, antPersPat_Ortopedicos, antPersPat_Transfusiones, antPersPat_CompAnestPrev, antPersPat_EstadoPsiq, antPersPat_MedActual, 
        // No Patológicos
        antPersNoPat_HrsAyuno, antPersNoPat_Tabaquismo, antPersNoPat_Etilismo, antPersNoPat_Adicciones, antPersNoPat_Inmunizaciones, antPersNoPat_AntImportQx, 
        // Exploración Física
        sigVit_Edad, sigVit_Temperatura, sigVit_FrecuCardiaca, sigVit_FrecuRespiratoria, sigVit_Peso, sigVit_Talla, sigVit_IMC, sigVit_TensionArterial, sigVit_SaturacionOxigeno, 
        // Perfil Bioquímico
        perfilBioQ_FechaRealizacion, perfilBioQ_GrupoSanguineo, perfilBioQ_Hemoglobina, perfilBioQ_Hematocrito, perfilBioQ_Plaquetas, perfilBioQ_Leutocitos, perfilBioQ_TP, perfilBioQ_TT, perfilBioQ_TPT, perfilBioQ_INR, perfilBioQ_Glucosa, perfilBioQ_Creatinina, perfilBioQ_Urea, perfilBioQ_Sodio, perfilBioQ_Potasio, perfilBioQ_Cloro, perfilBioQ_Calcio, perfilBioQ_Magnesio, perfilBioQ_BilirrubinaDirecta, perfilBioQ_BilirrubinaIndirecta, perfilBioQ_BilirrubinaTotal, perfilBioQ_Lipasa, perfilBioQ_Amilasa, perfilBioQ_Otros, 
        // Valoración Vía Aérea y Otras Escalas
        viaAerea_Mallampati, viaAerea_PatilAldreti, viaAerea_AperturaBucal, viaAerea_Distancia, viaAerea_Protusion, viaAerea_Ipid, viaAerea_Glasgow, viaAerea_NYHA, viaAerea_Goldman, viaAerea_RiesgoTrombosis, viaAerea_ClasificacionASA, viaAerea_TipoCirugia, viaAerea_RiesgoAnestesico, 
        // Valoración de Aparatos y Sistemas
        expFis_VASCabeza, expFis_VASCuello, expFis_VASRespiratorio, expFis_VASCardioVasc, expFis_VASHipertension, expFis_VASAbdomen, expFis_VASGenUr, expFis_VASMuscEsq, expFis_VASNeuro, expFis_VASPielFaneras, } = req.body;
        const preval = yield PreAnestesico_1.PreValoracion.findOneAndUpdate({ pid: id }, {
            // Personales Patológicos
            antPersPat_Alergias: antPersPat_Alergias,
            antPersPat_Quirurgicos: antPersPat_Quirurgicos,
            antPersPat_Endocrinologicos: antPersPat_Endocrinologicos,
            antPersPat_Urologicos: antPersPat_Urologicos,
            antPersPat_Traumaticos: antPersPat_Traumaticos,
            antPersPat_Ortopedicos: antPersPat_Ortopedicos,
            antPersPat_Transfusiones: antPersPat_Transfusiones,
            antPersPat_CompAnestPrev: antPersPat_CompAnestPrev,
            antPersPat_EstadoPsiq: antPersPat_EstadoPsiq,
            antPersPat_MedActual: antPersPat_MedActual,
            //Personales No Patológicos
            antPersNoPat_HrsAyuno: antPersNoPat_HrsAyuno,
            antPersNoPat_Tabaquismo: antPersNoPat_Tabaquismo,
            antPersNoPat_Etilismo: antPersNoPat_Etilismo,
            antPersNoPat_Adicciones: antPersNoPat_Adicciones,
            antPersNoPat_Inmunizaciones: antPersNoPat_Inmunizaciones,
            antPersNoPat_AntImportQx: antPersNoPat_AntImportQx,
            //Signos Vitales
            sigVit_Edad: sigVit_Edad,
            sigVit_Temperatura: sigVit_Temperatura,
            sigVit_FrecuCardiaca: sigVit_FrecuCardiaca,
            sigVit_FrecuRespiratoria: sigVit_FrecuRespiratoria,
            sigVit_Peso: sigVit_Peso,
            sigVit_Talla: sigVit_Talla,
            sigVit_IMC: sigVit_IMC,
            sigVit_TensionArterial: sigVit_TensionArterial,
            sigVit_SaturacionOxigeno: sigVit_SaturacionOxigeno,
            //Laboratorio
            perfilBioQ_FechaRealizacion: perfilBioQ_FechaRealizacion,
            perfilBioQ_GrupoSanguineo: perfilBioQ_GrupoSanguineo,
            perfilBioQ_Hemoglobina: perfilBioQ_Hemoglobina,
            perfilBioQ_Hematocrito: perfilBioQ_Hematocrito,
            perfilBioQ_Plaquetas: perfilBioQ_Plaquetas,
            perfilBioQ_Leutocitos: perfilBioQ_Leutocitos,
            perfilBioQ_TP: perfilBioQ_TP,
            perfilBioQ_TT: perfilBioQ_TT,
            perfilBioQ_TPT: perfilBioQ_TPT,
            perfilBioQ_INR: perfilBioQ_INR,
            perfilBioQ_Glucosa: perfilBioQ_Glucosa,
            perfilBioQ_Creatinina: perfilBioQ_Creatinina,
            perfilBioQ_Urea: perfilBioQ_Urea,
            perfilBioQ_Sodio: perfilBioQ_Sodio,
            perfilBioQ_Potasio: perfilBioQ_Potasio,
            perfilBioQ_Cloro: perfilBioQ_Cloro,
            perfilBioQ_Calcio: perfilBioQ_Calcio,
            perfilBioQ_Magnesio: perfilBioQ_Magnesio,
            perfilBioQ_BilirrubinaDirecta: perfilBioQ_BilirrubinaDirecta,
            perfilBioQ_BilirrubinaIndirecta: perfilBioQ_BilirrubinaIndirecta,
            perfilBioQ_BilirrubinaTotal: perfilBioQ_BilirrubinaTotal,
            perfilBioQ_Lipasa: perfilBioQ_Lipasa,
            perfilBioQ_Amilasa: perfilBioQ_Amilasa,
            perfilBioQ_Otros: perfilBioQ_Otros,
            /* Vía Aérea */
            // Valoración de Vía Aérea y Otras Escalas
            viaAerea_Mallampati: viaAerea_Mallampati,
            viaAerea_PatilAldreti: viaAerea_PatilAldreti,
            viaAerea_AperturaBucal: viaAerea_AperturaBucal,
            viaAerea_Distancia: viaAerea_Distancia,
            viaAerea_Protusion: viaAerea_Protusion,
            viaAerea_Ipid: viaAerea_Ipid,
            viaAerea_Glasgow: viaAerea_Glasgow,
            viaAerea_NYHA: viaAerea_NYHA,
            viaAerea_Goldman: viaAerea_Goldman,
            viaAerea_RiesgoTrombosis: viaAerea_RiesgoTrombosis,
            viaAerea_ClasificacionASA: viaAerea_ClasificacionASA,
            viaAerea_TipoCirugia: viaAerea_TipoCirugia,
            viaAerea_RiesgoAnestesico: viaAerea_RiesgoAnestesico,
            // Valoración de Aparatos y Sistemas
            expFis_VASCabeza: expFis_VASCabeza,
            expFis_VASCuello: expFis_VASCuello,
            expFis_VASRespiratorio: expFis_VASRespiratorio,
            expFis_VASCardioVasc: expFis_VASCardioVasc,
            expFis_VASHipertension: expFis_VASHipertension,
            expFis_VASAbdomen: expFis_VASAbdomen,
            expFis_VASGenUr: expFis_VASGenUr,
            expFis_VASMuscEsq: expFis_VASMuscEsq,
            expFis_VASNeuro: expFis_VASNeuro,
            expFis_VASPielFaneras: expFis_VASPielFaneras,
            // Estudios
        });
        return res.json({ preval });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.updatePreAntecedentes = updatePreAntecedentes;
/* Función de registro de valoración pre anetésica */
const saveNuevoPreAntecedentes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid, 
        // Patológicos
        antPersPat_Alergias, antPersPat_Quirurgicos, antPersPat_Endocrinologicos, antPersPat_Urologicos, antPersPat_Traumaticos, antPersPat_Ortopedicos, antPersPat_Transfusiones, antPersPat_CompAnestPrev, antPersPat_EstadoPsiq, antPersPat_MedActual, 
        // No Patológicos
        antPersNoPat_HrsAyuno, antPersNoPat_Tabaquismo, antPersNoPat_Etilismo, antPersNoPat_Adicciones, antPersNoPat_Inmunizaciones, antPersNoPat_AntImportQx, 
        // Exploración Física
        sigVit_Edad, sigVit_Temperatura, sigVit_FrecuCardiaca, sigVit_FrecuRespiratoria, sigVit_Peso, sigVit_Talla, sigVit_IMC, sigVit_TensionArterial, sigVit_SaturacionOxigeno, 
        // Perfil Bioquímico
        perfilBioQ_FechaRealizacion, perfilBioQ_GrupoSanguineo, perfilBioQ_Hemoglobina, perfilBioQ_Hematocrito, perfilBioQ_Plaquetas, perfilBioQ_Leutocitos, perfilBioQ_TP, perfilBioQ_TT, perfilBioQ_TPT, perfilBioQ_INR, perfilBioQ_Glucosa, perfilBioQ_Creatinina, perfilBioQ_Urea, perfilBioQ_Sodio, perfilBioQ_Potasio, perfilBioQ_Cloro, perfilBioQ_Calcio, perfilBioQ_Magnesio, perfilBioQ_BilirrubinaDirecta, perfilBioQ_BilirrubinaIndirecta, perfilBioQ_BilirrubinaTotal, perfilBioQ_Lipasa, perfilBioQ_Amilasa, perfilBioQ_Otros, 
        // Valoración Vía Aérea y Otras Escalas
        viaAerea_Mallampati, viaAerea_PatilAldreti, viaAerea_AperturaBucal, viaAerea_Distancia, viaAerea_Protusion, viaAerea_Ipid, viaAerea_Glasgow, viaAerea_NYHA, viaAerea_Goldman, viaAerea_RiesgoTrombosis, viaAerea_ClasificacionASA, viaAerea_TipoCirugia, viaAerea_RiesgoAnestesico, 
        // Valoración de Aparatos y Sistemas
        expFis_VASCabeza, expFis_VASCuello, expFis_VASRespiratorio, expFis_VASCardioVasc, expFis_VASHipertension, expFis_VASAbdomen, expFis_VASGenUr, expFis_VASMuscEsq, expFis_VASNeuro, expFis_VASPielFaneras, } = req.body;
        const preval = new PreAnestesico_1.PreValoracion({
            pid,
            cxid,
            /* Antecedentes */
            // Personales Patológicos
            antPersPat_Alergias: antPersPat_Alergias,
            antPersPat_Quirurgicos: antPersPat_Quirurgicos,
            antPersPat_Endocrinologicos: antPersPat_Endocrinologicos,
            antPersPat_Urologicos: antPersPat_Urologicos,
            antPersPat_Traumaticos: antPersPat_Traumaticos,
            antPersPat_Ortopedicos: antPersPat_Ortopedicos,
            antPersPat_Transfusiones: antPersPat_Transfusiones,
            antPersPat_CompAnestPrev: antPersPat_CompAnestPrev,
            antPersPat_EstadoPsiq: antPersPat_EstadoPsiq,
            antPersPat_MedActual: antPersPat_MedActual,
            //Personales No Patológicos
            antPersNoPat_HrsAyuno: antPersNoPat_HrsAyuno,
            antPersNoPat_Tabaquismo: antPersNoPat_Tabaquismo,
            antPersNoPat_Etilismo: antPersNoPat_Etilismo,
            antPersNoPat_Adicciones: antPersNoPat_Adicciones,
            antPersNoPat_Inmunizaciones: antPersNoPat_Inmunizaciones,
            antPersNoPat_AntImportQx: antPersNoPat_AntImportQx,
            /* Exploración Física */
            //Signos Vitales
            sigVit_Edad: sigVit_Edad,
            sigVit_Temperatura: sigVit_Temperatura,
            sigVit_FrecuCardiaca: sigVit_FrecuCardiaca,
            sigVit_FrecuRespiratoria: sigVit_FrecuRespiratoria,
            sigVit_Peso: sigVit_Peso,
            sigVit_Talla: sigVit_Talla,
            sigVit_IMC: sigVit_IMC,
            sigVit_TensionArterial: sigVit_TensionArterial,
            sigVit_SaturacionOxigeno: sigVit_SaturacionOxigeno,
            // Vía Aérea
            viaAerea_Mallampati: viaAerea_Mallampati,
            viaAerea_PatilAldreti: viaAerea_PatilAldreti,
            viaAerea_AperturaBucal: viaAerea_AperturaBucal,
            viaAerea_Distancia: viaAerea_Distancia,
            viaAerea_Protusion: viaAerea_Protusion,
            viaAerea_Ipid: viaAerea_Ipid,
            viaAerea_Glasgow: viaAerea_Glasgow,
            viaAerea_NYHA: viaAerea_NYHA,
            viaAerea_Goldman: viaAerea_Goldman,
            viaAerea_RiesgoTrombosis: viaAerea_RiesgoTrombosis,
            viaAerea_ClasificacionASA: viaAerea_ClasificacionASA,
            viaAerea_TipoCirugia: viaAerea_TipoCirugia,
            viaAerea_RiesgoAnestesico: viaAerea_RiesgoAnestesico,
            // Laboratorio
            perfilBioQ_FechaRealizacion: perfilBioQ_FechaRealizacion,
            perfilBioQ_GrupoSanguineo: perfilBioQ_GrupoSanguineo,
            perfilBioQ_Hemoglobina: perfilBioQ_Hemoglobina,
            perfilBioQ_Hematocrito: perfilBioQ_Hematocrito,
            perfilBioQ_Plaquetas: perfilBioQ_Plaquetas,
            perfilBioQ_Leutocitos: perfilBioQ_Leutocitos,
            perfilBioQ_TP: perfilBioQ_TP,
            perfilBioQ_TT: perfilBioQ_TT,
            perfilBioQ_TPT: perfilBioQ_TPT,
            perfilBioQ_INR: perfilBioQ_INR,
            perfilBioQ_Glucosa: perfilBioQ_Glucosa,
            perfilBioQ_Creatinina: perfilBioQ_Creatinina,
            perfilBioQ_Urea: perfilBioQ_Urea,
            perfilBioQ_Sodio: perfilBioQ_Sodio,
            perfilBioQ_Potasio: perfilBioQ_Potasio,
            perfilBioQ_Cloro: perfilBioQ_Cloro,
            perfilBioQ_Calcio: perfilBioQ_Calcio,
            perfilBioQ_Magnesio: perfilBioQ_Magnesio,
            perfilBioQ_BilirrubinaDirecta: perfilBioQ_BilirrubinaDirecta,
            perfilBioQ_BilirrubinaIndirecta: perfilBioQ_BilirrubinaIndirecta,
            perfilBioQ_BilirrubinaTotal: perfilBioQ_BilirrubinaTotal,
            perfilBioQ_Lipasa: perfilBioQ_Lipasa,
            perfilBioQ_Amilasa: perfilBioQ_Amilasa,
            perfilBioQ_Otros: perfilBioQ_Otros,
            // Valoración de Aparatos y Sistemas
            expFis_VASCabeza: expFis_VASCabeza,
            expFis_VASCuello: expFis_VASCuello,
            expFis_VASRespiratorio: expFis_VASRespiratorio,
            expFis_VASCardioVasc: expFis_VASCardioVasc,
            expFis_VASHipertension: expFis_VASHipertension,
            expFis_VASAbdomen: expFis_VASAbdomen,
            expFis_VASGenUr: expFis_VASGenUr,
            expFis_VASMuscEsq: expFis_VASMuscEsq,
            expFis_VASNeuro: expFis_VASNeuro,
            expFis_VASPielFaneras: expFis_VASPielFaneras,
        });
        yield preval.save();
        return res.json({ preval });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveNuevoPreAntecedentes = saveNuevoPreAntecedentes;
const updateNuevoPreAntecedentes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, cxid } = req.params;
        const { // Patológicos
        antPersPat_Alergias, antPersPat_Quirurgicos, antPersPat_Endocrinologicos, antPersPat_Urologicos, antPersPat_Traumaticos, antPersPat_Ortopedicos, antPersPat_Transfusiones, antPersPat_CompAnestPrev, antPersPat_EstadoPsiq, antPersPat_MedActual, 
        // No Patológicos
        antPersNoPat_HrsAyuno, antPersNoPat_Tabaquismo, antPersNoPat_Etilismo, antPersNoPat_Adicciones, antPersNoPat_Inmunizaciones, antPersNoPat_AntImportQx, 
        // Exploración Física
        sigVit_Edad, sigVit_Temperatura, sigVit_FrecuCardiaca, sigVit_FrecuRespiratoria, sigVit_Peso, sigVit_Talla, sigVit_IMC, sigVit_TensionArterial, sigVit_SaturacionOxigeno, 
        // Perfil Bioquímico
        perfilBioQ_FechaRealizacion, perfilBioQ_GrupoSanguineo, perfilBioQ_Hemoglobina, perfilBioQ_Hematocrito, perfilBioQ_Plaquetas, perfilBioQ_Leutocitos, perfilBioQ_TP, perfilBioQ_TT, perfilBioQ_TPT, perfilBioQ_INR, perfilBioQ_Glucosa, perfilBioQ_Creatinina, perfilBioQ_Urea, perfilBioQ_Sodio, perfilBioQ_Potasio, perfilBioQ_Cloro, perfilBioQ_Calcio, perfilBioQ_Magnesio, perfilBioQ_BilirrubinaDirecta, perfilBioQ_BilirrubinaIndirecta, perfilBioQ_BilirrubinaTotal, perfilBioQ_Lipasa, perfilBioQ_Amilasa, perfilBioQ_Otros, 
        // Valoración Vía Aérea y Otras Escalas
        viaAerea_Mallampati, viaAerea_PatilAldreti, viaAerea_AperturaBucal, viaAerea_Distancia, viaAerea_Protusion, viaAerea_Ipid, viaAerea_Glasgow, viaAerea_NYHA, viaAerea_Goldman, viaAerea_RiesgoTrombosis, viaAerea_ClasificacionASA, viaAerea_TipoCirugia, viaAerea_RiesgoAnestesico, 
        // Valoración de Aparatos y Sistemas
        expFis_VASCabeza, expFis_VASCuello, expFis_VASRespiratorio, expFis_VASCardioVasc, expFis_VASHipertension, expFis_VASAbdomen, expFis_VASGenUr, expFis_VASMuscEsq, expFis_VASNeuro, expFis_VASPielFaneras, } = req.body;
        const preval = yield PreAnestesico_1.PreValoracion.findOneAndUpdate({ pid: id, cxid: cxid }, {
            // Personales Patológicos
            antPersPat_Alergias: antPersPat_Alergias,
            antPersPat_Quirurgicos: antPersPat_Quirurgicos,
            antPersPat_Endocrinologicos: antPersPat_Endocrinologicos,
            antPersPat_Urologicos: antPersPat_Urologicos,
            antPersPat_Traumaticos: antPersPat_Traumaticos,
            antPersPat_Ortopedicos: antPersPat_Ortopedicos,
            antPersPat_Transfusiones: antPersPat_Transfusiones,
            antPersPat_CompAnestPrev: antPersPat_CompAnestPrev,
            antPersPat_EstadoPsiq: antPersPat_EstadoPsiq,
            antPersPat_MedActual: antPersPat_MedActual,
            //Personales No Patológicos
            antPersNoPat_HrsAyuno: antPersNoPat_HrsAyuno,
            antPersNoPat_Tabaquismo: antPersNoPat_Tabaquismo,
            antPersNoPat_Etilismo: antPersNoPat_Etilismo,
            antPersNoPat_Adicciones: antPersNoPat_Adicciones,
            antPersNoPat_Inmunizaciones: antPersNoPat_Inmunizaciones,
            antPersNoPat_AntImportQx: antPersNoPat_AntImportQx,
            //Signos Vitales
            sigVit_Edad: sigVit_Edad,
            sigVit_Temperatura: sigVit_Temperatura,
            sigVit_FrecuCardiaca: sigVit_FrecuCardiaca,
            sigVit_FrecuRespiratoria: sigVit_FrecuRespiratoria,
            sigVit_Peso: sigVit_Peso,
            sigVit_Talla: sigVit_Talla,
            sigVit_IMC: sigVit_IMC,
            sigVit_TensionArterial: sigVit_TensionArterial,
            sigVit_SaturacionOxigeno: sigVit_SaturacionOxigeno,
            //Laboratorio
            perfilBioQ_FechaRealizacion: perfilBioQ_FechaRealizacion,
            perfilBioQ_GrupoSanguineo: perfilBioQ_GrupoSanguineo,
            perfilBioQ_Hemoglobina: perfilBioQ_Hemoglobina,
            perfilBioQ_Hematocrito: perfilBioQ_Hematocrito,
            perfilBioQ_Plaquetas: perfilBioQ_Plaquetas,
            perfilBioQ_Leutocitos: perfilBioQ_Leutocitos,
            perfilBioQ_TP: perfilBioQ_TP,
            perfilBioQ_TT: perfilBioQ_TT,
            perfilBioQ_TPT: perfilBioQ_TPT,
            perfilBioQ_INR: perfilBioQ_INR,
            perfilBioQ_Glucosa: perfilBioQ_Glucosa,
            perfilBioQ_Creatinina: perfilBioQ_Creatinina,
            perfilBioQ_Urea: perfilBioQ_Urea,
            perfilBioQ_Sodio: perfilBioQ_Sodio,
            perfilBioQ_Potasio: perfilBioQ_Potasio,
            perfilBioQ_Cloro: perfilBioQ_Cloro,
            perfilBioQ_Calcio: perfilBioQ_Calcio,
            perfilBioQ_Magnesio: perfilBioQ_Magnesio,
            perfilBioQ_BilirrubinaDirecta: perfilBioQ_BilirrubinaDirecta,
            perfilBioQ_BilirrubinaIndirecta: perfilBioQ_BilirrubinaIndirecta,
            perfilBioQ_BilirrubinaTotal: perfilBioQ_BilirrubinaTotal,
            perfilBioQ_Lipasa: perfilBioQ_Lipasa,
            perfilBioQ_Amilasa: perfilBioQ_Amilasa,
            perfilBioQ_Otros: perfilBioQ_Otros,
            /* Vía Aérea */
            // Valoración de Vía Aérea y Otras Escalas
            viaAerea_Mallampati: viaAerea_Mallampati,
            viaAerea_PatilAldreti: viaAerea_PatilAldreti,
            viaAerea_AperturaBucal: viaAerea_AperturaBucal,
            viaAerea_Distancia: viaAerea_Distancia,
            viaAerea_Protusion: viaAerea_Protusion,
            viaAerea_Ipid: viaAerea_Ipid,
            viaAerea_Glasgow: viaAerea_Glasgow,
            viaAerea_NYHA: viaAerea_NYHA,
            viaAerea_Goldman: viaAerea_Goldman,
            viaAerea_RiesgoTrombosis: viaAerea_RiesgoTrombosis,
            viaAerea_ClasificacionASA: viaAerea_ClasificacionASA,
            viaAerea_TipoCirugia: viaAerea_TipoCirugia,
            viaAerea_RiesgoAnestesico: viaAerea_RiesgoAnestesico,
            // Valoración de Aparatos y Sistemas
            expFis_VASCabeza: expFis_VASCabeza,
            expFis_VASCuello: expFis_VASCuello,
            expFis_VASRespiratorio: expFis_VASRespiratorio,
            expFis_VASCardioVasc: expFis_VASCardioVasc,
            expFis_VASHipertension: expFis_VASHipertension,
            expFis_VASAbdomen: expFis_VASAbdomen,
            expFis_VASGenUr: expFis_VASGenUr,
            expFis_VASMuscEsq: expFis_VASMuscEsq,
            expFis_VASNeuro: expFis_VASNeuro,
            expFis_VASPielFaneras: expFis_VASPielFaneras,
            // Estudios
        });
        return res.json({ preval });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.updateNuevoPreAntecedentes = updateNuevoPreAntecedentes;
// ****** Estudios ******
const saveEstudios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { vid, val_Estudios } = req.body;
        const valest = new PreAnestesico_1.ValEstudios({ vid: vid,
            val_Estudios: { estudio: val_Estudios[0],
                especifEstudio: val_Estudios[1] },
        });
        yield valest.save();
        return res.json({ valest });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveEstudios = saveEstudios;
const updateEstudios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { vid } = req.params;
        const { val_Estudios } = req.body;
        const valest = yield PreAnestesico_1.ValEstudios.findOneAndUpdate({ vid: vid }, { $push: {
                val_Estudios: {
                    estudio: val_Estudios[0],
                    especifEstudio: val_Estudios[1]
                }
            }
        });
        return res.json({ valest });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.updateEstudios = updateEstudios;
/* Función para obtener los estudios */
const getEstudios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { vid } = req.params;
        const estudio = yield PreAnestesico_1.ValEstudios.find({ vid: vid });
        return res.json({ estudio });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getEstudios = getEstudios;
/* Función para obtener un estudio */
const getEstudio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const estudio = yield PreAnestesico_1.ValEstudios.findOne({ "val_Estudios._id": id }, { 'val_Estudios.$': 1 });
        return res.json({ estudio });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.getEstudio = getEstudio;
/* Funcion para actualizar un estudio */
const updateEstudio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { val_Estudios } = req.body;
        const estudio = yield PreAnestesico_1.ValEstudios.updateOne({ "val_Estudios._id": id }, {
            $set: {
                "val_Estudios.$.estudio": val_Estudios[0].estudio,
                "val_Estudios.$.especifEstudio": val_Estudios[0].especifEstudio
            }
        });
        if (!estudio)
            return res.status(404).json({ Error: "No existe el estudio." });
        return res.json({ estudio });
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
exports.updateEstudio = updateEstudio;
/* Funcion para eliminar un estudio */
const deleteEstudio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const estudio = yield PreAnestesico_1.ValEstudios.findOneAndUpdate({ "val_Estudios._id": id }, { $pull: { val_Estudios: { _id: id } } });
        return res.json({ estudio });
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
            message: 'Error de servidor', error
        });
        return res.status(500).json({ error: "Error de servidor" });
    }
});
exports.deleteEstudio = deleteEstudio;
/********************************************************************/
/******************************* PLAN *******************************/
/********************************************************************/
const savePrePlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid, 
        // Posicion y Cuidados
        pos_HorasAyuno, pos_AccesoVenoso, pos_PosicionPaciente, pos_PosicionBrazos, pos_Torniquete, pos_AplicacionTorniquete, pos_Sitio, pos_TiempoIsquemia, pos_ProteccionOjos, pos_ProtecProminencias, pos_TecnicaAnestesica, pos_Premedicacion, pos_EspPremedicacion, pos_Monitoreo, 
        // General
        // Intubación
        general_Induccion, general_Tubo, general_NumeroTubo, general_TipoCanula, general_Globo, general_Presion, general_DifTecnicasIntubacion, general_EspDifTecIntubacion, 
        // Dispositivos Supraglóticos
        general_DispositivosSupro, general_Calibre, general_Complicaciones, general_EspComplicaciones, 
        // Otros Disposotivos
        general_OtrosDispositivos, general_EspOtrosDispositivos, 
        // Regional
        // Bloqueo Neuro-Axial
        regional_Tipo, regional_TipoAguja, regional_Nivel, regional_CalibreAguja, regional_Cateter, regional_OrientacionCateter, regional_ProbDificulNeuro, regional_EspDificultadesNeuro, 
        // Bloqueo Plexo
        regional_Sitio, regional_Opcion, regional_EspSitio, regional_AnestesicoUtilizado, regional_EspAnestesico, regional_ProbDificulPlexo, regional_EspDificulPlexo, 
        // Equipo de Apoyo
        regional_Ultrasonido, regional_EspUltrasonido, regional_Neuroestimulador, regional_EspNeuroestimulador, regional_ProbComplicaciones, regional_EspDificEquipo, 
        // Sedación
        sedacion_Via, sedacion_Opcion, sedacion_Observaciones, sedacion_Medicamentos, 
        // Local
        local_SitioAnestesiaL, local_AnestesicoUtilizado, local_Especificar, } = req.body;
        const preplan = new PreAnestesico_1.PrePlan({ pid: pid, cxid: cxid,
            // Posicion y Cuidados
            pos_HorasAyuno, pos_AccesoVenoso, pos_PosicionPaciente,
            pos_PosicionBrazos, pos_Torniquete, pos_AplicacionTorniquete,
            pos_Sitio, pos_TiempoIsquemia, pos_ProteccionOjos,
            pos_ProtecProminencias, pos_TecnicaAnestesica, pos_Premedicacion,
            pos_EspPremedicacion, pos_Monitoreo,
            // General
            // Intubación
            general_Induccion, general_Tubo, general_NumeroTubo,
            general_TipoCanula, general_Globo, general_Presion,
            general_DifTecnicasIntubacion, general_EspDifTecIntubacion,
            // Dispositivos Supraglóticos
            general_DispositivosSupro, general_Calibre,
            general_Complicaciones, general_EspComplicaciones,
            // Otros Disposotivos
            general_OtrosDispositivos, general_EspOtrosDispositivos,
            // Regional
            // Bloqueo Neuro-Axial
            regional_Tipo, regional_TipoAguja, regional_Nivel,
            regional_CalibreAguja, regional_Cateter,
            regional_OrientacionCateter, regional_ProbDificulNeuro,
            regional_EspDificultadesNeuro,
            // Bloqueo Plexo
            regional_Sitio, regional_Opcion, regional_EspSitio,
            regional_AnestesicoUtilizado, regional_EspAnestesico,
            regional_ProbDificulPlexo, regional_EspDificulPlexo,
            // Equipo de Apoyo
            regional_Ultrasonido, regional_EspUltrasonido,
            regional_Neuroestimulador, regional_EspNeuroestimulador,
            regional_ProbComplicaciones, regional_EspDificEquipo,
            // Sedación
            sedacion_Via, sedacion_Opcion, sedacion_Observaciones,
            sedacion_Medicamentos,
            // Local
            local_SitioAnestesiaL, local_AnestesicoUtilizado,
            local_Especificar });
        yield preplan.save();
        return res.json({ preplan });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.savePrePlan = savePrePlan;
const saveNuevoPrePlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pid, cxid, 
        // Posicion y Cuidados
        pos_HorasAyuno, pos_AccesoVenoso, pos_PosicionPaciente, pos_PosicionBrazos, pos_Torniquete, pos_AplicacionTorniquete, pos_Sitio, pos_TiempoIsquemia, pos_ProteccionOjos, pos_ProtecProminencias, pos_TecnicaAnestesica, pos_Premedicacion, pos_EspPremedicacion, pos_Monitoreo, 
        // General
        // Intubación
        general_Induccion, general_Tubo, general_NumeroTubo, general_TipoCanula, general_Globo, general_Presion, general_DifTecnicasIntubacion, general_EspDifTecIntubacion, 
        // Dispositivos Supraglóticos
        general_DispositivosSupro, general_Calibre, general_Complicaciones, general_EspComplicaciones, 
        // Otros Disposotivos
        general_OtrosDispositivos, general_EspOtrosDispositivos, 
        // Regional
        // Bloqueo Neuro-Axial
        regional_Tipo, regional_TipoAguja, regional_Nivel, regional_CalibreAguja, regional_Cateter, regional_OrientacionCateter, regional_ProbDificulNeuro, regional_EspDificultadesNeuro, 
        // Bloqueo Plexo
        regional_Sitio, regional_Opcion, regional_EspSitio, regional_AnestesicoUtilizado, regional_EspAnestesico, regional_ProbDificulPlexo, regional_EspDificulPlexo, 
        // Equipo de Apoyo
        regional_Ultrasonido, regional_EspUltrasonido, regional_Neuroestimulador, regional_EspNeuroestimulador, regional_ProbComplicaciones, regional_EspDificEquipo, 
        // Sedación
        sedacion_Via, sedacion_Opcion, sedacion_Observaciones, sedacion_Medicamentos, 
        // Local
        local_SitioAnestesiaL, local_AnestesicoUtilizado, local_Especificar, } = req.body;
        const preplan = new PreAnestesico_1.PrePlan({ pid, cxid,
            // Posicion y Cuidados
            pos_HorasAyuno, pos_AccesoVenoso, pos_PosicionPaciente,
            pos_PosicionBrazos, pos_Torniquete, pos_AplicacionTorniquete,
            pos_Sitio, pos_TiempoIsquemia, pos_ProteccionOjos,
            pos_ProtecProminencias, pos_TecnicaAnestesica, pos_Premedicacion,
            pos_EspPremedicacion, pos_Monitoreo,
            // General
            // Intubación
            general_Induccion, general_Tubo, general_NumeroTubo,
            general_TipoCanula, general_Globo, general_Presion,
            general_DifTecnicasIntubacion, general_EspDifTecIntubacion,
            // Dispositivos Supraglóticos
            general_DispositivosSupro, general_Calibre,
            general_Complicaciones, general_EspComplicaciones,
            // Otros Disposotivos
            general_OtrosDispositivos, general_EspOtrosDispositivos,
            // Regional
            // Bloqueo Neuro-Axial
            regional_Tipo, regional_TipoAguja, regional_Nivel,
            regional_CalibreAguja, regional_Cateter,
            regional_OrientacionCateter, regional_ProbDificulNeuro,
            regional_EspDificultadesNeuro,
            // Bloqueo Plexo
            regional_Sitio, regional_Opcion, regional_EspSitio,
            regional_AnestesicoUtilizado, regional_EspAnestesico,
            regional_ProbDificulPlexo, regional_EspDificulPlexo,
            // Equipo de Apoyo
            regional_Ultrasonido, regional_EspUltrasonido,
            regional_Neuroestimulador, regional_EspNeuroestimulador,
            regional_ProbComplicaciones, regional_EspDificEquipo,
            // Sedación
            sedacion_Via, sedacion_Opcion, sedacion_Observaciones,
            sedacion_Medicamentos,
            // Local
            local_SitioAnestesiaL, local_AnestesicoUtilizado,
            local_Especificar });
        yield preplan.save();
        return res.json({ preplan });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveNuevoPrePlan = saveNuevoPrePlan;
const updatePrePlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { // Posicion y Cuidados
        pos_HorasAyuno, pos_AccesoVenoso, pos_PosicionPaciente, pos_PosicionBrazos, pos_Torniquete, pos_AplicacionTorniquete, pos_Sitio, pos_TiempoIsquemia, pos_ProteccionOjos, pos_ProtecProminencias, pos_TecnicaAnestesica, pos_Premedicacion, pos_EspPremedicacion, pos_Monitoreo, 
        // General
        // Intubación
        general_Induccion, general_Tubo, general_NumeroTubo, general_TipoCanula, general_Globo, general_Presion, general_DifTecnicasIntubacion, general_EspDifTecIntubacion, 
        // Dispositivos Supraglóticos
        general_DispositivosSupro, general_Calibre, general_Complicaciones, general_EspComplicaciones, 
        // Otros Disposotivos
        general_OtrosDispositivos, general_EspOtrosDispositivos, 
        // Regional
        // Bloqueo Neuro-Axial
        regional_Tipo, regional_TipoAguja, regional_Nivel, regional_CalibreAguja, regional_Cateter, regional_OrientacionCateter, regional_ProbDificulNeuro, regional_EspDificultadesNeuro, 
        // Bloqueo Plexo
        regional_Sitio, regional_Opcion, regional_EspSitio, regional_AnestesicoUtilizado, regional_EspAnestesico, regional_ProbDificulPlexo, regional_EspDificulPlexo, 
        // Equipo de Apoyo
        regional_Ultrasonido, regional_EspUltrasonido, regional_Neuroestimulador, regional_EspNeuroestimulador, regional_ProbComplicaciones, regional_EspDificEquipo, 
        // Sedación
        sedacion_Via, sedacion_Opcion, sedacion_Observaciones, sedacion_Medicamentos, 
        // Local
        local_SitioAnestesiaL, local_AnestesicoUtilizado, local_Especificar, } = req.body;
        const preplan = yield PreAnestesico_1.PrePlan.findOneAndUpdate({ pid: id }, {
            pos_HorasAyuno, pos_AccesoVenoso, pos_PosicionPaciente,
            pos_PosicionBrazos, pos_Torniquete, pos_AplicacionTorniquete,
            pos_Sitio, pos_TiempoIsquemia, pos_ProteccionOjos,
            pos_ProtecProminencias, pos_TecnicaAnestesica, pos_Premedicacion,
            pos_EspPremedicacion, pos_Monitoreo,
            // General
            // General
            // Intubación
            general_Induccion, general_Tubo, general_NumeroTubo,
            general_TipoCanula, general_Globo, general_Presion,
            general_DifTecnicasIntubacion, general_EspDifTecIntubacion,
            // Dispositivos Supraglóticos
            general_DispositivosSupro, general_Calibre,
            general_Complicaciones, general_EspComplicaciones,
            // Otros Disposotivos
            general_OtrosDispositivos, general_EspOtrosDispositivos,
            // Regional
            // Bloqueo Neuro-Axial
            regional_Tipo, regional_TipoAguja, regional_Nivel,
            regional_CalibreAguja, regional_Cateter,
            regional_OrientacionCateter, regional_ProbDificulNeuro,
            regional_EspDificultadesNeuro,
            // Bloqueo Plexo
            regional_Sitio, regional_Opcion, regional_EspSitio,
            regional_AnestesicoUtilizado, regional_EspAnestesico,
            regional_ProbDificulPlexo, regional_EspDificulPlexo,
            // Equipo de Apoyo
            regional_Ultrasonido, regional_EspUltrasonido,
            regional_Neuroestimulador, regional_EspNeuroestimulador,
            regional_ProbComplicaciones, regional_EspDificEquipo,
            // Sedación
            sedacion_Via, sedacion_Opcion, sedacion_Observaciones,
            sedacion_Medicamentos,
            // Local
            local_SitioAnestesiaL, local_AnestesicoUtilizado,
            local_Especificar,
        });
        return res.json({ preplan });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.updatePrePlan = updatePrePlan;
const updateNuevoPrePlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, cxid } = req.params;
        const { // Posicion y Cuidados
        pos_HorasAyuno, pos_AccesoVenoso, pos_PosicionPaciente, pos_PosicionBrazos, pos_Torniquete, pos_AplicacionTorniquete, pos_Sitio, pos_TiempoIsquemia, pos_ProteccionOjos, pos_ProtecProminencias, pos_TecnicaAnestesica, pos_Premedicacion, pos_EspPremedicacion, pos_Monitoreo, 
        // General
        // Intubación
        general_Induccion, general_Tubo, general_NumeroTubo, general_TipoCanula, general_Globo, general_Presion, general_DifTecnicasIntubacion, general_EspDifTecIntubacion, 
        // Dispositivos Supraglóticos
        general_DispositivosSupro, general_Calibre, general_Complicaciones, general_EspComplicaciones, 
        // Otros Disposotivos
        general_OtrosDispositivos, general_EspOtrosDispositivos, 
        // Regional
        // Bloqueo Neuro-Axial
        regional_Tipo, regional_TipoAguja, regional_Nivel, regional_CalibreAguja, regional_Cateter, regional_OrientacionCateter, regional_ProbDificulNeuro, regional_EspDificultadesNeuro, 
        // Bloqueo Plexo
        regional_Sitio, regional_Opcion, regional_EspSitio, regional_AnestesicoUtilizado, regional_EspAnestesico, regional_ProbDificulPlexo, regional_EspDificulPlexo, 
        // Equipo de Apoyo
        regional_Ultrasonido, regional_EspUltrasonido, regional_Neuroestimulador, regional_EspNeuroestimulador, regional_ProbComplicaciones, regional_EspDificEquipo, 
        // Sedación
        sedacion_Via, sedacion_Opcion, sedacion_Observaciones, sedacion_Medicamentos, 
        // Local
        local_SitioAnestesiaL, local_AnestesicoUtilizado, local_Especificar, } = req.body;
        const preplan = yield PreAnestesico_1.PrePlan.findOneAndUpdate({ pid: id, cxid: cxid }, {
            pos_HorasAyuno, pos_AccesoVenoso, pos_PosicionPaciente,
            pos_PosicionBrazos, pos_Torniquete, pos_AplicacionTorniquete,
            pos_Sitio, pos_TiempoIsquemia, pos_ProteccionOjos,
            pos_ProtecProminencias, pos_TecnicaAnestesica, pos_Premedicacion,
            pos_EspPremedicacion, pos_Monitoreo,
            // General
            // General
            // Intubación
            general_Induccion, general_Tubo, general_NumeroTubo,
            general_TipoCanula, general_Globo, general_Presion,
            general_DifTecnicasIntubacion, general_EspDifTecIntubacion,
            // Dispositivos Supraglóticos
            general_DispositivosSupro, general_Calibre,
            general_Complicaciones, general_EspComplicaciones,
            // Otros Disposotivos
            general_OtrosDispositivos, general_EspOtrosDispositivos,
            // Regional
            // Bloqueo Neuro-Axial
            regional_Tipo, regional_TipoAguja, regional_Nivel,
            regional_CalibreAguja, regional_Cateter,
            regional_OrientacionCateter, regional_ProbDificulNeuro,
            regional_EspDificultadesNeuro,
            // Bloqueo Plexo
            regional_Sitio, regional_Opcion, regional_EspSitio,
            regional_AnestesicoUtilizado, regional_EspAnestesico,
            regional_ProbDificulPlexo, regional_EspDificulPlexo,
            // Equipo de Apoyo
            regional_Ultrasonido, regional_EspUltrasonido,
            regional_Neuroestimulador, regional_EspNeuroestimulador,
            regional_ProbComplicaciones, regional_EspDificEquipo,
            // Sedación
            sedacion_Via, sedacion_Opcion, sedacion_Observaciones,
            sedacion_Medicamentos,
            // Local
            local_SitioAnestesiaL, local_AnestesicoUtilizado,
            local_Especificar,
        });
        return res.json({ preplan });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.updateNuevoPrePlan = updateNuevoPrePlan;
/********************************************************************/
/******************************* NOTA *******************************/
/********************************************************************/
/* Función de registro de nota pre anetésica */
const saveNota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { obsNotaPre, pid, cxid } = req.body;
        const prenota = new PreAnestesico_1.PreNota({ pid: pid, cxid: cxid,
            obsNota: obsNotaPre });
        yield prenota.save();
        return res.json({ prenota });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveNota = saveNota;
const saveNuevoNota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { obsNotaPre, pid, cxid } = req.body;
        const prenota = new PreAnestesico_1.PreNota({ pid: pid, cxid: cxid,
            obsNota: obsNotaPre });
        yield prenota.save();
        return res.json({ prenota });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.saveNuevoNota = saveNuevoNota;
/* Función de actualización de nota pre anetésica */
const updateNota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { obsNotaPre } = req.body;
        const prenota = yield PreAnestesico_1.PreNota.findOneAndUpdate({ pid: id }, { obsNota: obsNotaPre });
        return res.json({ prenota });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.updateNota = updateNota;
const updateNuevoNota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, cxid } = req.params;
        const { obsNotaPre } = req.body;
        const prenota = yield PreAnestesico_1.PreNota.findOneAndUpdate({ pid: id, cxid: cxid }, { obsNota: obsNotaPre });
        return res.json({ prenota });
    }
    catch (error) {
        logger_1.default.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.updateNuevoNota = updateNuevoNota;
