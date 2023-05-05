import { Response } from "express";
import { MenuTrans } from "../models/TransAnestesico";


/******************* Menu Trans Anestesico *******************/
export const saveMenuTrans = async (req: any, res: Response) => {
    try {
        const { pid,
                // Datos del ventilador
                modosVentilacion, peep, vt, frecResp, IE, PLimite,
             } = req.body;

        const menuTrans = new MenuTrans({ pid,
                                          // Datos del ventilador
                                          modosVentilacion, peep, vt, frecResp, IE, PLimite,});

        await menuTrans.save();

        return res.json({ menuTrans });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const updateMenuTrans = async (req: any, res: Response) => {
    try {
        const { id } = req.params;
        const { // Datos del ventilador
                modosVentilacion, peep, vt, frecResp, IE, PLimite,
             } = req.body;

        const menuTrans = await MenuTrans.findOneAndUpdate( { pid: id },
                                                            { // Datos del ventilador
                                                              modosVentilacion, peep, vt, frecResp, IE, PLimite,});

        return res.json({ menuTrans });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};