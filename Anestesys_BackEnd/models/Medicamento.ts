import { Schema, model } from "mongoose";

/* Medicamentos */
const MedicamentoSchema = new Schema({
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
const MVSSchema = new Schema({
    nombreMVS: { type: String },
    dirIPMVS: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    }
})

export const Medicamento = model ('Medicamento', MedicamentoSchema);
export const MVS = model ('MVS', MVSSchema);