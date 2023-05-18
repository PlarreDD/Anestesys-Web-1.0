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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log("http://localhost:" + PORT));
/*------------------------------------------------------------------*/
import ping from 'ping';

function pingDevice(deviceIP: string): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    ping.sys.probe(deviceIP, (isAlive: boolean | null) => {
      if (isAlive !== null) {
        resolve(isAlive);
      } else {
        reject(new Error('No se pudo obtener una respuesta del ping.'));
      }
    }, { timeout: 2 });
  });
}

const deviceIP = '192.168.0.26';

pingDevice(deviceIP)
  .then(isAlive => {
    if (isAlive) {
      console.log(`El dispositivo ${deviceIP} está activo.`);
    } else {
      console.log(`El dispositivo ${deviceIP} no está activo.`);
    }
  })
  .catch(error => {
    console.error(`Error al hacer ping al dispositivo ${deviceIP}: ${error.message}`);
  });

// import { exec } from 'child_process';

// function getConnectedDevices(callback: (devices: string[]) => void) {
//   exec('arp -a', (error, stdout) => {
//     if (error) {
//       console.error(`Error ejecutando el comando arp: ${error.message}`);
//       return;
//     }

//     const lines = stdout.split('\n');
//     const devices: string[] = [];

//     lines.forEach(line => {
//       const match = line.match(/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/);
      
//       if (match) {
//         const deviceIP = match[0];
//         devices.push(deviceIP);
//       }
//     });

//     callback(devices);
//   });
// }

// getConnectedDevices(devices => {
//   console.log('Dispositivos conectados:');
//   devices.forEach(device => {
//     console.log(device);
//   });
// });