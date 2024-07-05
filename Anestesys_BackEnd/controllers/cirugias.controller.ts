import { Response } from "express";
import logger from "../logger";
import { Cirugias } from "../models/Cirugias"

export const saveCx = async (req: any, res:Response) => {
    try {
        // console.log(req.body);

        const { pid,
            numEpisodio, habitacionPacnt, fechaInPacnt,
            diagnostico, tipoCx,
            cie10, cie9,
            infoProced,
            cuerpoMed,
        } = req.body;

        const cirugia = new Cirugias({
            pid,
            numEpisodio, habitacionPacnt, fechaInPacnt,
            diagnostico, tipoCx,
            cie10, cie9,
            infoProced: {
                cirugia: infoProced[0].cirugia,
                fechaCx: infoProced[0].fechaCx,
                hrCx: infoProced[0].hrCx,
            },
            cuerpoMed: {
                cirujano: cuerpoMed[0].cirujano,
                anestesiologo: cuerpoMed[0].anestesiologo,
                anestVPA: cuerpoMed[0].anestVPA,
                residAnest: cuerpoMed[0].residAnest,
            },
        });

        console.log(cirugia);

        await cirugia.save();
        
        return res.json({ cirugia })
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error al guardar la ficha de cirugía', error
        });
        
        return res.status(500).json({ Error: 'Error al guardar la ficha de cirugía' });
    }
}