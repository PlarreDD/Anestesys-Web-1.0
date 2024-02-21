import "dotenv/config";
import "./database/connectdb";
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

const net = require('net');
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
    credentials: true
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

// Ruta para obtener la dirección IP del cliente
app.get('/api/getClienteIp', (req, res) => {
  const clientIp = req.socket.remoteAddress;

  if (clientIp) {
    const clienteIp = net.isIPv4(clientIp) ? clientIp : clientIp.replace(/^.*:/, '');
    res.json({ clienteIp });
    console.log("IP que manda solicitud:" + clienteIp);    
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
    console.log("Conectado en el puerto:" + PORT));