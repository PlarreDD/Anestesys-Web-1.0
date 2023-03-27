import { Schema, model } from "mongoose";

const MedicamentoSchema = new Schema({
    nombreMedicamento:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    codigoMedicamento:{
        type: String,
        required: false,
        trim: true,
        unique: true,
    }
})

export const Medicamento = model ('Medicamento', MedicamentoSchema);