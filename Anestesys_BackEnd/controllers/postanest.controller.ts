import { Response } from "express";
import { PostRecupera } from "../models/PostAnestesico";

/********************************************************************/
/***************************** NOTA UCPA ****************************/
/********************************************************************/
export const saveRecuperacion = async (req: any, res: Response) => {
    try {
        const { pid,
                notaEval_Obs } = req.body;
        
        const recuperacion = new PostRecupera({ pid: pid,
                                                notaEval_Obs: notaEval_Obs });

        await recuperacion.save();

        return res.json(req.body);
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