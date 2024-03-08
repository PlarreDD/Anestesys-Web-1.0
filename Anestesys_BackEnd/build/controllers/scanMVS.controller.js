"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusMSV = exports.getConnectedDevices = exports.deleteMSV = exports.listMSV = exports.registerMSV = exports.handleMonitorData = exports.stopMSVData = exports.startMSVData = void 0;
const child_process_1 = require("child_process");
const ping_1 = __importDefault(require("ping"));
const Medicamento_1 = require("../models/Medicamento");
const net_1 = __importDefault(require("net"));
let HOST = '';
let serverAnest;
const HL7_PORT = 6664;
let capturedMsg;
const server = net_1.default.createServer(function (socket) {
    console.log('Conectado al monitor de signos vítales');
    socket.on('data', function (data) {
        capturedMsg = data;
    });
    socket.on('error', function (error) {
        console.error('Socket error:', error);
    });
    socket.on('close', function () {
        console.log('Disconnected from vital sign monitor');
    });
});
const startMSVData = () => __awaiter(void 0, void 0, void 0, function* () {
    getConnectedDevices(devices => {
        HOST = devices[0];
        serverAnest = server.listen(HL7_PORT, HOST, function () {
            console.log(`Listening for vital sign data on ${HOST}:${HL7_PORT}`);
        });
    });
});
exports.startMSVData = startMSVData;
const stopMSVData = () => __awaiter(void 0, void 0, void 0, function* () {
    if (serverAnest) {
        serverAnest.close(function () {
            console.log('Sign monitor stopped');
        });
    }
});
exports.stopMSVData = stopMSVData;
const handleMonitorData = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (capturedMsg) {
        const hl7String = yield capturedMsg.toString();
        return yield res.json({ datosMSV: hl7String });
    }
    else {
        console.log('No se ha capturado ningún dato aún');
    }
});
exports.handleMonitorData = handleMonitorData;
const registerMSV = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombreMVS, dirIPMVS } = req.body;
    let IP_HOST;
    const IP_HOSTPromise = new Promise((resolve) => {
        getConnectedDevices(devices => {
            resolve(devices[0]);
        });
    });
    IP_HOST = yield IP_HOSTPromise;
    try {
        const isAlive = yield pingDevice(dirIPMVS);
        if (isAlive) {
            const monitor = new Medicamento_1.MVS({ nombreMVS, dirIPMVS, IP_HOST });
            yield monitor.save();
            return res.json({ monitor, statusMSV: "Activo" });
        }
        else {
            throw new Error(`El dispositivo ${dirIPMVS} no está activo.`);
        }
    }
    catch (error) {
        console.error(`Error al hacer ping al dispositivo ${dirIPMVS}: ${error.message}`);
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.registerMSV = registerMSV;
const listMSV = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const IP_HOST = yield new Promise((resolve) => {
            getConnectedDevices(devices => {
                resolve(devices[0]);
            });
        });
        const monitor = yield Medicamento_1.MVS.find({ IP_HOST: IP_HOST });
        return res.json({ monitor });
    }
    catch (error) {
        return res.status(500).json({ Error: 'Error de servidor' });
    }
});
exports.listMSV = listMSV;
const deleteMSV = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const monitor = yield Medicamento_1.MVS.findByIdAndDelete(id);
        return res.json({ monitor });
    }
    catch (error) {
        if (error.kind === "ObjectId") {
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
        return res.status(500).json({ error: "Error de servidor" });
    }
});
exports.deleteMSV = deleteMSV;
function pingDevice(deviceIP) {
    return new Promise((resolve, reject) => {
        ping_1.default.sys.probe(deviceIP, (isAlive) => {
            if (isAlive !== null) {
                resolve(isAlive);
            }
            else {
                reject(new Error('No se pudo obtener una respuesta del ping.'));
            }
        }, { timeout: 2 });
    });
}
;
function getConnectedDevices(callback) {
    (0, child_process_1.exec)('arp -a', (error, stdout) => {
        if (error) {
            console.error(`Error ejecutando el comando arp: ${error.message}`);
            return;
        }
        const lines = stdout.split('\n');
        const devices = [];
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
exports.getConnectedDevices = getConnectedDevices;
;
const statusMSV = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dirIPMVS } = req.body;
    pingDevice(dirIPMVS)
        .then((isAlive) => __awaiter(void 0, void 0, void 0, function* () {
        if (isAlive) {
            try {
                return res.json({ statusMSV: "Activo" });
            }
            catch (error) {
                return res.status(500).json({ Error: 'Error de servidor' });
            }
        }
        else {
            try {
                return res.json({ statusMSV: "Inactivo" });
            }
            catch (error) {
                return res.status(500).json({ Error: 'Error de servidor' });
            }
        }
    }))
        .catch(error => {
        console.error(`Error al hacer ping al dispositivo ${dirIPMVS}: ${error.message}`);
    });
});
exports.statusMSV = statusMSV;
