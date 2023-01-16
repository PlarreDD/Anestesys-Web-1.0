import mongoose from "mongoose";

mongoose.set('strictQuery', true);

try {
    mongoose.connect(String(process.env.URI_MONGO));
    console.log('Conectado a DB');
} catch (error) {
    console.log("Error de conexión a MongoDB " + error)
}