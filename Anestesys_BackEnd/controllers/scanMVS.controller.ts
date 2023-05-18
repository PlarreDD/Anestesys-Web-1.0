import { exec } from 'child_process';
import ping from 'ping';

const deviceIP = '192.168.0.26';

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

function getConnectedDevices(callback: (devices: string[]) => void) {
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
}

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

getConnectedDevices(devices => {
  console.log('Dispositivos conectados:');
  devices.forEach(device => {
    console.log(device);
  });
});