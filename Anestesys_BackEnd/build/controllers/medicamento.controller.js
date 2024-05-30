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
exports.deleteMedicamento = exports.updateMedicamento = exports.createMedicamento = exports.getMedicamento = exports.getMedicamentos = void 0;
const Medicamento_1 = require("../models/Medicamento");
const logger_1 = __importDefault(require("../logger"));
/* Función para obtener todos los medicamentos */
const getMedicamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const medicamentos = yield Medicamento_1.Medicamento.find({ id: req.id });
        return res.json({ medicamentos });
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
/* Funcion para la busqueda de un medicamento */
const getMedicamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const medicamento = yield Medicamento_1.Medicamento.findById(id);
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
/* Funcion para registrar un medicamento */
const createMedicamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombreMedicamento, codigoMedicamento } = req.body;
        const medicamento = new Medicamento_1.Medicamento({ nombreMedicamento, codigoMedicamento });
        yield medicamento.save();
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
exports.createMedicamento = createMedicamento;
/* Funcion para actualizar un medicamento */
const updateMedicamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updMed = req.body;
        const medicamento = yield Medicamento_1.Medicamento.findByIdAndUpdate(id, updMed);
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
        const medicamento = yield Medicamento_1.Medicamento.findByIdAndDelete(id);
        return res.json({ medicamento });
    }
    catch (error) {
        if (error.kind === "ObjectId") {
            logger_1.default.log({
                level: 'error',
                message: 'Error de servidor', error
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
