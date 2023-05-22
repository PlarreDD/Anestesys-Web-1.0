import { exec } from 'child_process';
import ping from 'ping';
import { MVS } from "../models/Medicamento";
import { Response } from "express";

export const registerMSV = async (req: any, res: Response) => {
  try {
      const { nombreMVS, dirIPMVS} = req.body;

      const monitor = new MVS({ nombreMVS, dirIPMVS});
      await monitor.save();

      return res.json({ monitor });
  } catch (error) {
      return res.status(500).json({ Error: 'Error de servidor' });
  }
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
// pingDevice(deviceIP)
//   .then(isAlive => {
//     if (isAlive)
//       console.log(`El dispositivo ${deviceIP} está activo.`);
//     else
//       console.log(`El dispositivo ${deviceIP} no está activo.`);
//     })
//   .catch(error => {
//     console.error(`Error al hacer ping al dispositivo ${deviceIP}: ${error.message}`);
//   });

// getConnectedDevices(devices => {
//   console.log('Dispositivos conectados:');
//   devices.forEach(device => {
//     console.log(device);
//   });
// });