"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set('strictQuery', true);
try {
    mongoose_1.default.connect(String(process.env.URI_MONGO));
    console.log('Conectado a DB');
}
catch (error) {
    console.log("Error de conexión a MongoDB " + error);
}
