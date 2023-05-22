import { exec } from 'child_process';
import ping from 'ping';

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