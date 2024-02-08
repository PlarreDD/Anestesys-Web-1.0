"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MVS = exports.Medicamento = void 0;
const mongoose_1 = require("mongoose");
/* Medicamentos */
const MedicamentoSchema = new mongoose_1.Schema({
    nombreMedicamento: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        uppercase: true
    },
    codigoMedicamento: { type: String }
});
/* Monitor */
const MVSSchema = new mongoose_1.Schema({
    nombreMVS: { type: String },
    dirIPMVS: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    IP_HOST: { type: String },
});
exports.Medicamento = (0, mongoose_1.model)('Medicamento', MedicamentoSchema);
exports.MVS = (0, mongoose_1.model)('MVS', MVSSchema);
