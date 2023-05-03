import { Response } from "express";
import { PostRecupera,
         PostNotaPA } from "../models/PostAnestesico";

/********************************************************************/
/**************************** RECUPERACION **************************/
/********************************************************************/
export const saveNotaPA = async (req: any, res: Response) => {
    try {
        const { pid,
                // Nota Post Anestésica
                npa_TecAnestFinal, npa_Intubacion, npa_NotaPostAnest,

                // Signos Vitales al Egreso del Quirófano
                signVitEgQx_TA, signVitEgQx_FC, signVitEgQx_FR, signVitEgQx_Temperatura,
                signVitEgQx_Pulso, signVitEgQx_SpO2, signVitEgQx_EgresoPac, } = req.body;
        
        const notaPA = new PostNotaPA({ pid: pid,
                                        // Nota Post Anestésica
                                        npa_TecAnestFinal: npa_TecAnestFinal,
                                        npa_Intubacion: npa_Intubacion,
                                        npa_NotaPostAnest: npa_NotaPostAnest,
                                    
                                        // Signos Vitales al Egreso del Quirófano
                                        signVitEgQx_TA: signVitEgQx_TA,
                                        signVitEgQx_FC: signVitEgQx_FC,
                                        signVitEgQx_FR: signVitEgQx_FR,
                                        signVitEgQx_Temperatura: signVitEgQx_Temperatura,
                                        signVitEgQx_Pulso: signVitEgQx_Pulso,
                                        signVitEgQx_SpO2: signVitEgQx_SpO2,
                                        signVitEgQx_EgresoPac: signVitEgQx_EgresoPac, });

        await notaPA.save();

        return res.json({ notaPA });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const updateNotaPA = async (req: any, res: Response) => {
    try {
        const { id } = req.params;
        const { // Nota Post Anestésica
                npa_TecAnestFinal, npa_Intubacion, npa_NotaPostAnest,

                // Signos Vitales al Egreso del Quirófano
                signVitEgQx_TA, signVitEgQx_FC, signVitEgQx_FR, signVitEgQx_Temperatura,
                signVitEgQx_Pulso, signVitEgQx_SpO2, signVitEgQx_EgresoPac, } = req.body;
        
        const recuperacion = await PostNotaPA.findOneAndUpdate({ pid: id },
                                                               { // Nota Post Anestésica
                                                                 npa_TecAnestFinal: npa_TecAnestFinal,
                                                                 npa_Intubacion: npa_Intubacion,
                                                                 npa_NotaPostAnest: npa_NotaPostAnest,
                                                                  
                                                                 // Signos Vitales al Egreso del Quirófano
                                                                 signVitEgQx_TA: signVitEgQx_TA,
                                                                 signVitEgQx_FC: signVitEgQx_FC,
                                                                 signVitEgQx_FR: signVitEgQx_FR,
                                                                 signVitEgQx_Temperatura: signVitEgQx_Temperatura,
                                                                 signVitEgQx_Pulso: signVitEgQx_Pulso,
                                                                 signVitEgQx_SpO2: signVitEgQx_SpO2,
                                                                 signVitEgQx_EgresoPac: signVitEgQx_EgresoPac, });

        return res.json({ recuperacion })
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/********************************************************************/
/**************************** RECUPERACION **************************/
/********************************************************************/
export const saveRecuperacion = async (req: any, res: Response) => {
    try {
        const { pid,
                notaEval_Obs } = req.body;
        
        const recuperacion = new PostRecupera({ pid: pid,
                                                notaEval_Obs: notaEval_Obs });

        await recuperacion.save();

        return res.json({ recuperacion });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const updateRecuperacion = async (req: any, res: Response) => {
    try {
        const { id } = req.params;
        const { notaEval_Obs } = req.body;
        
        const recuperacion = await PostRecupera.findOneAndUpdate({ pid: id },
                                                                 { notaEval_Obs: notaEval_Obs });

        return res.json({ recuperacion })
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};