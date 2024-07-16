// import { exec } from 'child_process';
// import ping from 'ping';
// import { MVS } from "../models/Medicamento";
// import { Request,
//          Response } from "express";
// import net from "net";

// let HOST = '';
// let serverAnest: any;
// const HL7_PORT = 6664;

// let capturedMsg: any;

// const server = net.createServer(function(socket) {
//   console.log('Conectado al monitor de signos vítales');
  
//   socket.on('data', function(data) {
//     capturedMsg = data;
//   });
  
//   socket.on('error', function(error) {
//     console.error('Socket error:', error);
//   });
  
//   socket.on('close', function() {
//     console.log('Disconnected from vital sign monitor');
//   });
// });

// export const startMSVData = async () => {
//   getConnectedDevices(devices => {
//     HOST = devices[0];

//     serverAnest = server.listen(HL7_PORT, HOST, function() {
//       console.log(`Listening for vital sign data on ${HOST}:${HL7_PORT}`);
//     });
//   });
// };

// export const stopMSVData = async () => {  
//   if(serverAnest){
//     serverAnest.close(function() {
//       console.log('Sign monitor stopped');
//     });
//   }
// };

// export const handleMonitorData = async (_req: Request, res: Response) => {
//   if (capturedMsg) {
//     const hl7String = await capturedMsg.toString();

//     return await res.json({datosMSV:hl7String});
//   } else {
//     console.log('No se ha capturado ningún dato aún');
//   }
// }

// export const registerMSV = async (req: any, res: Response) => {
//   const { nombreMVS, dirIPMVS } = req.body;
//   let IP_HOST;

//   const IP_HOSTPromise = new Promise((resolve) => {
//     getConnectedDevices(devices => {
//       resolve(devices[0]);
//     });
//   });

//   IP_HOST = await IP_HOSTPromise;

//   try {
//     const isAlive = await pingDevice(dirIPMVS);
//     if (isAlive) {
//       const monitor = new MVS({ nombreMVS, dirIPMVS, IP_HOST });
//       await monitor.save();
//       return res.json({ monitor, statusMSV: "Activo" });
//     } else {
//       throw new Error(`El dispositivo ${dirIPMVS} no está activo.`);
//     }
//   } catch (error) {
//     console.error(`Error al hacer ping al dispositivo ${dirIPMVS}: ${error.message}`);
//     return res.status(500).json({ Error: 'Error de servidor' });
//   }
// };

// export const listMSV = async (_req: any, res: Response) => {
//   try {
//     const IP_HOST = await new Promise((resolve) => {
//       getConnectedDevices(devices => {
//         resolve(devices[0]);
//       });
//     });

//     const monitor = await MVS.find({ IP_HOST: IP_HOST });

//     return res.json({ monitor });
//   } catch (error) {
//     return res.status(500).json({ Error: 'Error de servidor' });
//   }
// };

// export const deleteMSV = async (req: any, res: Response) => {
//   try {
//     const { id } = req.params;

//     const monitor = await MVS.findByIdAndDelete(id);

//     return res.json({ monitor });
// } catch (error) {
//     if (error.kind === "ObjectId") {
//         return res.status(403).json({ error: "Formato de ID incorrecto" });
//     }
    
//     return res.status(500).json({ error: "Error de servidor" });
// }
// };

// function pingDevice(deviceIP: string): Promise<boolean> {
//   return new Promise<boolean>((resolve, reject) => {
//     ping.sys.probe(deviceIP, (isAlive: boolean | null) => {
//       if (isAlive !== null) {
//         resolve(isAlive);
//       } else {
//         reject(new Error('No se pudo obtener una respuesta del ping.'));
//       }
//     }, { timeout: 2 });
//   });
// };

// export function getConnectedDevices(callback: (devices: string[]) => void) {
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
// };

// export const statusMSV = async(req: any, res: Response) => {
//   const { dirIPMVS } = req.body;
  
//   pingDevice(dirIPMVS)
//     .then(async isAlive => {
//       if (isAlive){
//         try {
//           return res.json({ statusMSV: "Activo" });
//         } catch (error) {
//           return res.status(500).json({ Error: 'Error de servidor' });
//         }
//       }
//       else{
//         try {
//           return res.json({ statusMSV: "Inactivo" });
//         } catch (error) {
//           return res.status(500).json({ Error: 'Error de servidor' });
//         }
//       }
//     })
//     .catch(error => {
//       console.error(`Error al hacer ping al dispositivo ${dirIPMVS}: ${error.message}`);
//     });
// };