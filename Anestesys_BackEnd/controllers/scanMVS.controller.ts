import { networkInterfaces } from 'os';

function detectarDispositivosConectados(): string[] {
  const interfaces = networkInterfaces();
  const dispositivosConectados: string[] = [];

  for (const nombreInterface in interfaces) {
    const interfaz = interfaces[nombreInterface];
    if (interfaz) {
      for (const detalle of interfaz) {
        if (!detalle.internal && detalle.family === 'IPv4') {
          dispositivosConectados.push(detalle.address);
        }
      }
    }
  }

  return dispositivosConectados;
}

// Ejemplo de uso
const dispositivos = detectarDispositivosConectados();
console.log('Dispositivos conectados:', dispositivos);