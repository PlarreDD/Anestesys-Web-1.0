import "dotenv/config";
import "./database/connectdb.ts"
import cookieParser from "cookie-parser";
import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.route';
import preidRouter from './routes/preid.route';
import medicamentoRouter from './routes/medicamento.route';
import notaRouter from './routes/nota.route'

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
app.use('/nota', notaRouter);
/*----------------- Menú ------------------*/
app.use('/medicamentos', medicamentoRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log("http://localhost:" + PORT));