import "dotenv/config";
import "./database/connectdb";
import cookieParser from "cookie-parser";
import express from 'express';
import cors from 'cors';
// import fs from 'fs';
// import https from 'https';
import authRouter from './routes/auth.route';
import preidRouter from './routes/preid.route';
import medicamentoRouter from './routes/medicamento.route';
import valRouter from './routes/valoracion.route';
import estRouter from './routes/estudios.route';
import planRouter from './routes/plan.route';
import notaRouter from './routes/nota.route';
import recuperaRouter from './routes/recuperacion.route';
import notapaRouter from './routes/notapa.route';
import transRouter from "./routes/datosv.route";
import mvsRouter from "./routes/mvs.route";

const net = require('net');
const app = express();
const whiteList = [process.env.ORIGIN1, process.env.ORIGIN2];

// app.use(
//   cors({
//     origin: function(origin, callback){
//       if(!origin || whiteList.includes(origin)){
//           return callback(null, origin);
//       }
//       return callback(
//           Error("Error de CORS origin " + origin + " No autorizado")
//       );
//     },
//     credentials: true
//   })
// );

const corsOptions = {
  origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean | string) => void) {
    if (!origin || whiteList.includes(origin)) {
      callback(null, origin);
    } else {
      callback(new Error("Acceso no autorizado por CORS"));
    }
  },
  credentials: true,  // Permite el envío de cookies
};

app.use(cors(corsOptions));

app.use(express.json()); // Transforma la req.body en formato json
app.use(cookieParser());

/*----------------- Login -----------------*/
app.use('/', authRouter);
/*------------ Pre Anestésico -------------*/
app.use('/preId', preidRouter);
app.use('/valora', valRouter);
app.use('/estudios', estRouter);
app.use('/plan', planRouter);
app.use('/nota', notaRouter);
/*------------ Trans Anestésico -----------*/
app.use("/trans", transRouter);
/*------------ Post Anestésico ------------*/
app.use('/notapa', notapaRouter);
app.use('/recupera', recuperaRouter);
/*----------------- Menú ------------------*/
app.use('/medicamentos', medicamentoRouter);
app.use('/mvs', mvsRouter);

// Ruta para obtener la dirección IP del cliente
app.get('/api/getClienteIp', (req, res) => {
  const clientIp = req.socket.remoteAddress;

  if (clientIp) {
    const clienteIp = net.isIPv4(clientIp) ? clientIp : clientIp.replace(/^.*:/, '');
    res.json({ clienteIp });  
  }
});

const PORT = process.env.PORT || 5000;

// // Leer los certificados
// const privateKey = fs.readFileSync('./key.pem', 'utf8');
// const certificate = fs.readFileSync('./cert.pem', 'utf8');
// const credentials = { key: privateKey, cert: certificate };

// console.log("Leyo certificados");

// // Crear el servidor HTTPS
// const httpsServer = https.createServer(credentials, app);

// console.log("Creó servidor");

// // Escuchar en el puerto 5000 o el especificado en el .env
// httpsServer.listen(PORT, () => {
//   console.log("Conectado en el puerto:" + process.env.ORIGIN1, process.env.ORIGIN2, PORT);
// });

app.listen(PORT, () =>
    console.log("Conectado en el puerto:" + PORT));