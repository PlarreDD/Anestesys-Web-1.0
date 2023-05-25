import { Response } from "express";
import { MenuTrans } from "../models/TransAnestesico";
import { UpdateResult } from "mongodb";

// interface TiempoResult {
//     tiemposQX: any[];
// };

/******************* Menu Trans Anestesico *******************/
export const saveMenuTrans = async (req: any, res: Response) => {
    try {
        const { pid,
                /* Balance Total */
                balanceTotal,
                // Ingresos
                solHartman, solFisio, glucosados, gelatinas,
                almidones, albuminas, paqGlobular, plasmas, 
                plaquetas, crioprecipitados, factor_VII, factor_VIII,
                otrosIngresos,
                // Egresos
                liqAscitis, sangradoAprox, uresis, expoQX,
                reqBasales, ayuno, otrosEgresos,
                /* Técnica Anestésica */
                local, sedación, gralBalanceada, TIVA, multimodal,
                bloqMixto, bloqPeriLum, bloqPeriCaudal, BloqEspinal,
                BloqPlexo, BloqTroncular, bloqPeriToracico, bloqPeriCervical,
                libreOpioides,
                // Datos del ventilador
                modosVentilacion, peep, vt, frecResp, IE, PLimite, Hr
        } = req.body;

        let menuTrans;

        if( modosVentilacion == undefined ){
            menuTrans = new MenuTrans({ pid,
                                        /* Balance Total */
                                        balanceTotal: balanceTotal,
                                        // Ingresos
                                        solHartman: solHartman,
                                        solFisio: solFisio,
                                        glucosados: glucosados,
                                        gelatinas: gelatinas,
                                        almidones: almidones,
                                        albuminas: albuminas,
                                        paqGlobular: paqGlobular,
                                        plasmas: plasmas,
                                        plaquetas: plaquetas,
                                        crioprecipitados: crioprecipitados,
                                        factor_VII: factor_VII,
                                        factor_VIII: factor_VIII,
                                        otrosIngresos: otrosIngresos,
                                        // Egresos
                                        liqAscitis: liqAscitis,
                                        sangradoAprox: sangradoAprox,
                                        uresis: uresis,
                                        expoQX: expoQX,
                                        reqBasales: reqBasales,
                                        ayuno: ayuno,
                                        otrosEgresos: otrosEgresos,
                                        /* Técnica Anestésica */
                                        local: local,
                                        sedación: sedación,
                                        gralBalanceada: gralBalanceada,
                                        TIVA: TIVA,
                                        multimodal: multimodal,
                                        bloqMixto: bloqMixto,
                                        bloqPeriLum: bloqPeriLum,
                                        bloqPeriCaudal: bloqPeriCaudal,
                                        BloqEspinal: BloqEspinal,
                                        BloqPlexo: BloqPlexo,
                                        BloqTroncular: BloqTroncular,
                                        bloqPeriToracico: bloqPeriToracico,
                                        bloqPeriCervical: bloqPeriCervical,
                                        libreOpioides: libreOpioides,
            });
        }
        else{
            menuTrans = new MenuTrans({ pid,
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
        }

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

/* Función de actualización de Balance Hídrico */
export const UpdateBalanceH = async (req: any, res: Response) => {
    try {
        const { id } = req.params;
        const { /* Balance Total */
                balanceTotal,
                // Ingresos
                solHartman, solFisio, glucosados, gelatinas,
                almidones, albuminas, paqGlobular, plasmas, 
                plaquetas, crioprecipitados, factor_VII, factor_VIII,
                otrosIngresos,
                // Egresos
                liqAscitis, sangradoAprox, uresis, expoQX,
                reqBasales, ayuno, otrosEgresos,
                /* Técnica Anestésica */                
                local, sedación, gralBalanceada, TIVA, multimodal,
                bloqMixto, bloqPeriLum, bloqPeriCaudal, BloqEspinal,
                BloqPlexo, BloqTroncular, bloqPeriToracico, bloqPeriCervical,
                libreOpioides,
             } = req.body;

        const menuTrans = await MenuTrans.findOneAndUpdate( { pid: id },
                                                            { /* Balance Total */
                                                              balanceTotal: balanceTotal,
                                                              // Ingresos
                                                              solHartman: solHartman,
                                                              solFisio: solFisio,
                                                              glucosados: glucosados,
                                                              gelatinas: gelatinas,
                                                              almidones: almidones,
                                                              albuminas: albuminas,
                                                              paqGlobular: paqGlobular,
                                                              plasmas: plasmas,
                                                              plaquetas: plaquetas,
                                                              crioprecipitados: crioprecipitados,
                                                              factor_VII: factor_VII,
                                                              factor_VIII: factor_VIII,
                                                              otrosIngresos: otrosIngresos,
                                                              // Egresos
                                                              liqAscitis: liqAscitis,
                                                              sangradoAprox: sangradoAprox,
                                                              uresis: uresis,
                                                              expoQX: expoQX,
                                                              reqBasales: reqBasales,
                                                              ayuno: ayuno,
                                                              otrosEgresos: otrosEgresos,
                                                              /* Técnica Anestésica */
                                                              local: local,
                                                              sedación: sedación,
                                                              gralBalanceada: gralBalanceada,
                                                              TIVA: TIVA,
                                                              multimodal: multimodal,
                                                              bloqMixto: bloqMixto,
                                                              bloqPeriLum: bloqPeriLum,
                                                              bloqPeriCaudal: bloqPeriCaudal,
                                                              BloqEspinal: BloqEspinal,
                                                              BloqPlexo: BloqPlexo,
                                                              BloqTroncular: BloqTroncular,
                                                              bloqPeriToracico: bloqPeriToracico,
                                                              bloqPeriCervical: bloqPeriCervical,
                                                              libreOpioides: libreOpioides,
                                                            });

        return res.json({ menuTrans });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Tiempos QX Guardado/Actualización */
export const saveTiemposQX = async (req: any, res: Response) => {
    try {
        const { pid,
                // Tiempos Qx
                ingresoQX, inicioAn, inicioCx, finCx, finAn, egresoQx,
              } = req.body;

        var tiempo: UpdateResult | null = await MenuTrans.findOne({ pid: pid });
        const tiempo2: any = tiempo;
        
        if (tiempo) {
            tiempo = await MenuTrans.updateOne({ "tiemposQX._id": tiempo2?.tiemposQX[0]._id },
                                               { $set : { "tiemposQX.$.inicioAn": inicioAn,
                                                          "tiemposQX.$.inicioCx": inicioCx,
                                                          "tiemposQX.$.finCx": finCx,
                                                          "tiemposQX.$.finAn": finAn,
                                                          "tiemposQX.$.egresoQx": egresoQx,
                                                        }
                                               });

        } else {
            console.log("No existe, Crea con: " + ingresoQX, inicioAn, inicioCx, finCx, finAn, egresoQx,);
            const menuTrans  = new MenuTrans({ pid,
                                                // Datos del ventilador
                                                tiemposQX: {
                                                    ingresoQX: ingresoQX,
                                                },
                                });

            await menuTrans.save();
        }

        return res.json({ tiempo });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};