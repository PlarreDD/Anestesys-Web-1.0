import { Schema, model } from "mongoose";

const MedicamentoSchema = new Schema({
    nombreMedicamento:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        uppercase: true
    },
    codigoMedicamento:{
        type: String
    }
})

export const Medicamento = model ('Medicamento', MedicamentoSchema);