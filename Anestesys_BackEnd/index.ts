import "dotenv/config";
import "./database/connectdb.ts"
import cookieParser from "cookie-parser";
import express from 'express';
import cors from 'cors';
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

const app = express();
const whiteList = [process.env.ORIGIN1, process.env.ORIGIN2];

app.use(
  cors({
    origin: function(origin, callback){
      if(!origin || whiteList.includes(origin)){
          return callback(null, origin);
      }
      return callback(
          Error("Error de CORS origin " + origin + " No autorizado")
      );
    },
    credentials: true,
  })
);

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log("http://localhost:" + PORT));

import net from 'net'
// import hl7 from 'node-hl7'

const HOST = '192.168.0.103';  // direccion ip de la comptuadora
const PORT_HL7 = 6664;        // puerto del monitor de signos vitales

const server = net.createServer(function(socket) {
  console.log('Connected to vital sign monitor');

  // Listen for data from the vital sign monitor
  socket.on('data', function(data) {    
    console.log('DATA:', data.toString());    
  });

  // Handle socket errors
  socket.on('error', function(error) {
    console.error('Socket error:', error);
  });

  // Handle socket disconnects
  socket.on('close', function() {
    console.log('Disconnected from vital sign monitor');
  });
});

server.listen(PORT_HL7, HOST, function() {
  console.log('Server listening on', HOST + ':' + PORT_HL7);
});