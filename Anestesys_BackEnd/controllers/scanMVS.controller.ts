import { exec } from 'child_process';
import ping from 'ping';
import { MVS } from "../models/Medicamento";
import { Request, Response, NextFunction } from "express";
import net from "net";

const HOST = '172.16.22.210';
const HL7_PORT = 6664;

export const getMSVData = (_req: Request, res: Response, _next: NextFunction) => {
  let responseSent = false; // Bandera para controlar si ya se ha enviado una respuesta

  const server = net.createServer(function(socket) {
    console.log('Conectado al monitor de signos vítales');

    socket.on('data', function(data) {   
      console.log('DATA:', data.toString());      

      if (!responseSent) {
        const jsonData = data.toString();
        res.json({ datosMSV: jsonData }); // Enviar los datos como parte del objeto de respuesta
        responseSent = true;
        socket.destroy();
      }
    });

    socket.on('error', function(error) {
      console.error('Socket error:', error);
      if (!responseSent) {
        res.status(500).send("Internal Server Error"); // Enviar una respuesta de error si no se ha enviado ninguna respuesta
        responseSent = true; // Actualizar la bandera para indicar que ya se envió una respuesta
      }
    });

    socket.on('close', function() {
      console.log('Disconnected from vital sign monitor');
    });
  });

  server.listen(HL7_PORT, HOST, function() {
    console.log(`Listening for vital sign data on ${HOST}:${HL7_PORT}`);
  });
};

export const registerMSV = async (req: any, res: Response) => {
  const { nombreMVS, dirIPMVS} = req.body;
  
  pingDevice(dirIPMVS)
    .then(async isAlive => {
      if (isAlive){
        console.log(`El dispositivo ${dirIPMVS} está activo.`);
        
        try {
          const monitor = new MVS({ nombreMVS, dirIPMVS});
          await monitor.save();
          return res.json({ monitor });          
        } catch (error) {
          return res.status(500).json({ Error: 'Error de servidor' });          
        }
      }
      else
        return new Error(`El dispositivo ${dirIPMVS} no está activo.`);
      })
    .catch(error => {
      console.error(`Error al hacer ping al dispositivo ${dirIPMVS}: ${error.message}`);
    });
};

export const listMSV = async (req: any, res: Response) => {
  try {
      const monitor = await MVS.find({id: req.id}) 
      return res.json({ monitor });
  } catch (error) {
      return res.status(500).json({Error: 'Error de servidor'});
  }
};

export const deleteMSV = async (req: any, res: Response) => {
  try {
    const { id } = req.params;

    const monitor = await MVS.findByIdAndDelete(id);

    return res.json({ monitor });
} catch (error) {
    if (error.kind === "ObjectId") {
        return res.status(403).json({ error: "Formato de ID incorrecto" });
    }
    
    return res.status(500).json({ error: "Error de servidor" });
}
};

export function pingDevice(deviceIP: string): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    ping.sys.probe(deviceIP, (isAlive: boolean | null) => {
      if (isAlive !== null) {
        resolve(isAlive);
      } else {
        reject(new Error('No se pudo obtener una respuesta del ping.'));
      }
    }, { timeout: 2 });
  });
};

export function getConnectedDevices(callback: (devices: string[]) => void) {
  exec('arp -a', (error, stdout) => {
    if (error) {
      console.error(`Error ejecutando el comando arp: ${error.message}`);
      return;
    }

    const lines = stdout.split('\n');
    const devices: string[] = [];

    lines.forEach(line => {
      const match = line.match(/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/);
      
      if (match) {
        const deviceIP = match[0];
        devices.push(deviceIP);
      }
    });

    callback(devices);
  });
};

/* Funciones de prueba */
// getConnectedDevices(devices => {
//   console.log('Dispositivos conectados:');
//   devices.forEach(device => {
//     console.log(device);
//   });
// });