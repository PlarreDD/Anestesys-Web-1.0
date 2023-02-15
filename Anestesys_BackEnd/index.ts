import "dotenv/config";
import "./database/connectdb.ts"
//import cookieParser from "cookie-parser";
import express from 'express';
//import cors from 'cors';
import authRouter from './routes/auth.route';
//import linkRouter from './routes/link.route';
//import redirectRouter from "./routes/redirect.route";

const app = express();
//const whiteList = [process.env.ORIGIN1, process.env.ORIGIN2];

/*app.use(
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
);*/
app.use(express.json()); // Transforma la req.body en formato json
//app.use(cookieParser());
// app.use('/', redirectRouter);
app.use('/', authRouter);
//app.use('/links', linkRouter);

// Pruebas de req en json
// app.get("/", (_req, res) => {
//     res.json({ok: "Prueba"});
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log("http://localhost:" + PORT));