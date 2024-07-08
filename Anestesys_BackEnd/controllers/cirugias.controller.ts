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
};

export const saveMSVdat = async (req: any, res: Response) => {
    try {
        const {
            pid,
            datosMSV
        } = req.body;

        const dataToInsert = datosMSV.map(
            (data: { 
                FC: any; Pulso: any;
                PAS: any; PAD: any;
                PAM: any; SpO2: any;
                EtCO2: any; Temp1: any;
                Temp2: any; PVC: any;
                PAS_IN: any; PAD_IN: any;
                PAM_IN: any; FiCO2: any;
                FR: any; HoraGeneracion: any;
            }) => ({
                FC: data.FC, Pulso: data.Pulso,
                PAS: data.PAS, PAD: data.PAD,
                PAM: data.PAM, SpO2: data.SpO2,
                EtCO2: data.EtCO2, Temp1: data.Temp1,
                Temp2: data.Temp2, PVC: data.PVC,
                PAS_IN: data.PAS_IN, PAD_IN: data.PAD_IN,
                PAM_IN: data.PAM_IN, FiCO2: data.FiCO2,
                FR: data.FR, HoraGeneracion: data.HoraGeneracion,
                }));

        const cirugia = await Cirugias.findOneAndUpdate(
            { pid: pid },
            { $addToSet:{ datosMSV: { $each: dataToInsert } } });

        return res.json({ cirugia });
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const saveEstudios = async (req: any, res: Response) => {
    try {
        const { pid,
                val_Estudios } = req.body;
        
        const valest = await Cirugias.findOneAndUpdate(
            { pid: pid },
            {$push: {
                val_Estudios: {
                    estudio: val_Estudios[0],
                    especifEstudio: val_Estudios[1]
                }
            }}
        )

        return res.json({ valest });
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};