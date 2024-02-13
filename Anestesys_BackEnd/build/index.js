"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("./database/connectdb");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const preid_route_1 = __importDefault(require("./routes/preid.route"));
const medicamento_route_1 = __importDefault(require("./routes/medicamento.route"));
const valoracion_route_1 = __importDefault(require("./routes/valoracion.route"));
const estudios_route_1 = __importDefault(require("./routes/estudios.route"));
const plan_route_1 = __importDefault(require("./routes/plan.route"));
const nota_route_1 = __importDefault(require("./routes/nota.route"));
const recuperacion_route_1 = __importDefault(require("./routes/recuperacion.route"));
const notapa_route_1 = __importDefault(require("./routes/notapa.route"));
const datosv_route_1 = __importDefault(require("./routes/datosv.route"));
const mvs_route_1 = __importDefault(require("./routes/mvs.route"));
const app = (0, express_1.default)();
const whiteList = [process.env.ORIGIN1, process.env.ORIGIN2];
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        if (!origin || whiteList.includes(origin)) {
            return callback(null, origin);
        }
        return callback(Error("Error de CORS origin " + origin + " No autorizado"));
    },
    credentials: true,
}));
app.use(express_1.default.json()); // Transforma la req.body en formato json
app.use((0, cookie_parser_1.default)());
/*----------------- Login -----------------*/
app.use('/', auth_route_1.default);
/*------------ Pre Anestésico -------------*/
app.use('/preId', preid_route_1.default);
app.use('/valora', valoracion_route_1.default);
app.use('/estudios', estudios_route_1.default);
app.use('/plan', plan_route_1.default);
app.use('/nota', nota_route_1.default);
/*------------ Trans Anestésico -----------*/
app.use("/trans", datosv_route_1.default);
/*------------ Post Anestésico ------------*/
app.use('/notapa', notapa_route_1.default);
app.use('/recupera', recuperacion_route_1.default);
/*----------------- Menú ------------------*/
app.use('/medicamentos', medicamento_route_1.default);
app.use('/mvs', mvs_route_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Conectado en el puerto:" + PORT));
