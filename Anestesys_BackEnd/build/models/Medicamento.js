"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Medicamento = void 0;
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
// const MVSSchema = new Schema({
//     nombreMVS: { type: String },
//     dirIPMVS: {
//         type: String,
//         required: true,
//         trim: true,
//         unique: true,
//     },
//     IP_HOST: { type: String },
// })
exports.Medicamento = (0, mongoose_1.model)('Medicamento', MedicamentoSchema);
// export const MVS = model ('MVS', MVSSchema);
