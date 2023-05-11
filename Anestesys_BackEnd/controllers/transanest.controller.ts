import { Response } from "express";
import { MenuTrans } from "../models/TransAnestesico";

/******************* Menu Trans Anestesico *******************/
export const saveMenuTrans = async (req: any, res: Response) => {
    try {
        const { pid,
                // Datos del ventilador
                modosVentilacion, peep, vt, frecResp, IE, PLimite, Hr
             } = req.body;

        const menuTrans = new MenuTrans({ pid,
                                          // Datos del ventilador
                                          datosVentilador: {
                                            modosVentilacion: modosVentilacion,
                                            peep: peep,
                                            vt: vt,
                                            frecResp: frecResp,
                                            IE: IE,
                                            PLimite: PLimite,
                                            Hr: Hr,
                                          },
                                        });

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
                modosVentilacion, peep, vt, frecResp, IE, PLimite, Hr
             } = req.body;

        const menuTrans = await MenuTrans.findOneAndUpdate( { pid: id },
                                                            { $push: {// Datos del ventilador
                                                                      datosVentilador: {
                                                                        modosVentilacion: modosVentilacion,
                                                                        peep: peep,
                                                                        vt: vt,
                                                                        frecResp: frecResp,
                                                                        IE: IE,
                                                                        PLimite: PLimite,
                                                                        Hr: Hr,
                                                                      },
                                                              }
                                                            });

        return res.json({ menuTrans });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const getModosVent = async (req: any, res: Response) => {
    try {
        const{ pid } = req.params;
        
        const listaModosVent = await MenuTrans.find({pid: pid});

        return res.json({ listaModosVent });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Obtener y mostrar el modo de ventilación seleccionado */
export const getModoVentilacion =async (req: any, res: Response) => {
    try {
        const { dVId } = req.params;
        
        const modoVent = await MenuTrans.findOne({ "datosVentilador._id": dVId },
                                                 { "datosVentilador.$": 1 });

        return res.json({ modoVent });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }    
};

/* Funcion para actualizar un estudio */
export const updateVentilacion = async (req: any, res: Response) => {
    try {
        const { id } = req.params;
        const { datosVentilador } = req.body;       
        
        const ventilador = await MenuTrans.updateOne({ "datosVentilador._id": id },
            {
                $set : {
                            "datosVentilador.$.modosVentilacion" : datosVentilador[0].modosVentilacion,
                            "datosVentilador.$.peep" : datosVentilador[0].peep, 
                            "datosVentilador.$.vt" : datosVentilador[0].vt, 
                            "datosVentilador.$.frecResp" : datosVentilador[0].frecResp,
                            "datosVentilador.$.IE" : datosVentilador[0].IE, 
                            "datosVentilador.$.PLimite" : datosVentilador[0].PLimite,
                            "datosVentilador.$.Hr" : datosVentilador[0].Hr
                        }
            }
        );
        
        if (!ventilador) 
            return res.status(404).json({ Error: "No existe el modo de ventilación." });        
        
        return res.json({ ventilador });
    } catch (error) {
        if (error.kind === "ObjectId") {
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }        
        return res.status(500).json({ error: "Error de servidor" });
    }
};

/* Borrar un modo de ventilación registrado */
export const deleteModoVentilacion = async (req: any, res: Response) => {
    try {
        const { dVId } = req.params;
        
        const modoVent = await MenuTrans.findOneAndUpdate({ "datosVentilador._id": dVId },
                                                          { $pull: { datosVentilador: { _id: dVId }}}
        );              
       
        return res.json({ modoVent });
    } catch (error) {
        if (error.kind === "ObjectId") {
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
        
        return res.status(500).json({ error: "Error de servidor" });
    }
};