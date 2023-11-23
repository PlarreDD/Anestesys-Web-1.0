import { Response } from "express";
import { MenuTrans } from "../models/TransAnestesico";
import { UpdateResult } from "mongodb";

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
                modosVentilacion, peep, vt, frecResp, IE, PLimite, Hr,

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

export const saveNuevoMenuTrans = async (req: any, res: Response) => {
    try {
        const { pid, cxid,
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
                modosVentilacion, peep, vt, frecResp, IE, PLimite, Hr,

        } = req.body;

        let menuTrans;

        if( modosVentilacion == undefined ){
            menuTrans = new MenuTrans({ pid, cxid,
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
            menuTrans = new MenuTrans({ pid, cxid,
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

export const updateNuevoMenuTrans = async (req: any, res: Response) => {
    try {
        const { id, cxid } = req.params;
        const { // Datos del ventilador
                modosVentilacion, peep, vt, frecResp, IE, PLimite, Hr
             } = req.body;

        const menuTrans = await MenuTrans.findOneAndUpdate( { pid: id, cxid: cxid },
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

export const getNuevoModosVent = async (req: any, res: Response) => {
    try {
        const{ pid, cxid } = req.params;
        
        const listaModosVent = await MenuTrans.find({pid: pid, cxid: cxid});

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

export const UpdateNuevoBalanceH = async (req: any, res: Response) => {
    try {
        const { id, cxid } = req.params;
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

        const menuTrans = await MenuTrans.findOneAndUpdate( { pid: id, cxid: cxid },
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
                                               { $set : { "tiemposQX.$.ingresoQX": ingresoQX,
                                                          "tiemposQX.$.inicioAn": inicioAn,
                                                          "tiemposQX.$.inicioCx": inicioCx,
                                                          "tiemposQX.$.finCx": finCx,
                                                          "tiemposQX.$.finAn": finAn,
                                                          "tiemposQX.$.egresoQx": egresoQx,
                                                        }
                                               });

        } else {
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

export const saveNuevoTiemposQX = async (req: any, res: Response) => {
    try {
        const { pid, cxid,
                // Tiempos Qx
                ingresoQX, inicioAn, inicioCx, finCx, finAn, egresoQx,
              } = req.body;

        var tiempo: UpdateResult | null = await MenuTrans.findOne({ pid: pid, cxid: cxid });
        const tiempo2: any = tiempo;
        
        if (tiempo) {
            tiempo = await MenuTrans.updateOne({ "tiemposQX._id": tiempo2?.tiemposQX[0]._id },
                                               { $set : { "tiemposQX.$.ingresoQX": ingresoQX,
                                                          "tiemposQX.$.inicioAn": inicioAn,
                                                          "tiemposQX.$.inicioCx": inicioCx,
                                                          "tiemposQX.$.finCx": finCx,
                                                          "tiemposQX.$.finAn": finAn,
                                                          "tiemposQX.$.egresoQx": egresoQx,
                                                        }
                                               });

        } else {
            const menuTrans  = new MenuTrans({ pid, cxid,
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

/* Guardado Datos MSV */
/* Para un nuevo paciente */
export const saveDatosMSV = async (req: any, res: Response) => {
    try {
        const { pid } = req.params;
        const { datosMSV } = req.body;
        
        const menuTrans = await MenuTrans.findOneAndUpdate(
            { pid: pid },
            { $addToSet:{ datosMSV: [
                    {
                        FC: datosMSV[0].FC,
                        Pulso: datosMSV[0].Pulso,
                        PAS: datosMSV[0].PAS,
                        PAD: datosMSV[0].PAD,
                        PAM: datosMSV[0].PAM,
                        SpO2: datosMSV[0].SpO2,
                        EtCO2: datosMSV[0].EtCO2,
                        Temp1: datosMSV[0].Temp1,
                        Temp2: datosMSV[0].Temp2,
                        PVC: datosMSV[0].PVC,
                        PAS_IN: datosMSV[0].PAS_IN,
                        PAD_IN: datosMSV[0].PAD_IN,
                        PAM_IN: datosMSV[0].PAM_IN,
                        FiCO2: datosMSV[0].FiCO2,
                        FR: datosMSV[0].FR,
                        HoraGeneracion: datosMSV[0].HoraGeneracion
                    },
                    {
                        FC: datosMSV[1].FC,
                        Pulso: datosMSV[1].Pulso,
                        PAS: datosMSV[1].PAS,
                        PAD: datosMSV[1].PAD,
                        PAM: datosMSV[1].PAM,
                        SpO2: datosMSV[1].SpO2,
                        EtCO2: datosMSV[1].EtCO2,
                        Temp1: datosMSV[1].Temp1,
                        Temp2: datosMSV[1].Temp2,
                        PVC: datosMSV[1].PVC,
                        PAS_IN: datosMSV[1].PAS_IN,
                        PAD_IN: datosMSV[1].PAD_IN,
                        PAM_IN: datosMSV[1].PAM_IN,
                        FiCO2: datosMSV[1].FiCO2,
                        FR: datosMSV[1].FR,
                        HoraGeneracion: datosMSV[1].HoraGeneracion
                    },
                    {
                        FC: datosMSV[2].FC,
                        Pulso: datosMSV[2].Pulso,
                        PAS: datosMSV[2].PAS,
                        PAD: datosMSV[2].PAD,
                        PAM: datosMSV[2].PAM,
                        SpO2: datosMSV[2].SpO2,
                        EtCO2: datosMSV[2].EtCO2,
                        Temp1: datosMSV[2].Temp1,
                        Temp2: datosMSV[2].Temp2,
                        PVC: datosMSV[2].PVC,
                        PAS_IN: datosMSV[2].PAS_IN,
                        PAD_IN: datosMSV[2].PAD_IN,
                        PAM_IN: datosMSV[2].PAM_IN,
                        FiCO2: datosMSV[2].FiCO2,
                        FR: datosMSV[2].FR,
                        HoraGeneracion: datosMSV[2].HoraGeneracion
                    },
                    {
                        FC: datosMSV[3].FC,
                        Pulso: datosMSV[3].Pulso,
                        PAS: datosMSV[3].PAS,
                        PAD: datosMSV[3].PAD,
                        PAM: datosMSV[3].PAM,
                        SpO2: datosMSV[3].SpO2,
                        EtCO2: datosMSV[3].EtCO2,
                        Temp1: datosMSV[3].Temp1,
                        Temp2: datosMSV[3].Temp2,
                        PVC: datosMSV[3].PVC,
                        PAS_IN: datosMSV[3].PAS_IN,
                        PAD_IN: datosMSV[3].PAD_IN,
                        PAM_IN: datosMSV[3].PAM_IN,
                        FiCO2: datosMSV[3].FiCO2,
                        FR: datosMSV[3].FR,
                        HoraGeneracion: datosMSV[3].HoraGeneracion
                    },
                    {
                        FC: datosMSV[4].FC,
                        Pulso: datosMSV[4].Pulso,
                        PAS: datosMSV[4].PAS,
                        PAD: datosMSV[4].PAD,
                        PAM: datosMSV[4].PAM,
                        SpO2: datosMSV[4].SpO2,
                        EtCO2: datosMSV[4].EtCO2,
                        Temp1: datosMSV[4].Temp1,
                        Temp2: datosMSV[4].Temp2,
                        PVC: datosMSV[4].PVC,
                        PAS_IN: datosMSV[4].PAS_IN,
                        PAD_IN: datosMSV[4].PAD_IN,
                        PAM_IN: datosMSV[4].PAM_IN,
                        FiCO2: datosMSV[4].FiCO2,
                        FR: datosMSV[4].FR,
                        HoraGeneracion: datosMSV[4].HoraGeneracion
                    }
                ]
                }
            });
        return res.json({ menuTrans });
    } catch (error) {
        console.log(error);
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Para una nueva cirugía de un paciente ya existente */
export const saveNuevoDatosMSV = async (req: any, res: Response) => {
    try {
        const { pid, cxid } = req.params;
        const { datosMSV } = req.body;
        
        const menuTrans = await MenuTrans.findOneAndUpdate(
            { pid: pid, cxid: cxid },
            { $addToSet:{ datosMSV: [
                    {
                        FC: datosMSV[0].FC,
                        Pulso: datosMSV[0].Pulso,
                        PAS: datosMSV[0].PAS,
                        PAD: datosMSV[0].PAD,
                        PAM: datosMSV[0].PAM,
                        SpO2: datosMSV[0].SpO2,
                        EtCO2: datosMSV[0].EtCO2,
                        Temp1: datosMSV[0].Temp1,
                        Temp2: datosMSV[0].Temp2,
                        PVC: datosMSV[0].PVC,
                        PAS_IN: datosMSV[0].PAS_IN,
                        PAD_IN: datosMSV[0].PAD_IN,
                        PAM_IN: datosMSV[0].PAM_IN,
                        FiCO2: datosMSV[0].FiCO2,
                        FR: datosMSV[0].FR,
                        HoraGeneracion: datosMSV[0].HoraGeneracion
                    },
                    {
                        FC: datosMSV[1].FC,
                        Pulso: datosMSV[1].Pulso,
                        PAS: datosMSV[1].PAS,
                        PAD: datosMSV[1].PAD,
                        PAM: datosMSV[1].PAM,
                        SpO2: datosMSV[1].SpO2,
                        EtCO2: datosMSV[1].EtCO2,
                        Temp1: datosMSV[1].Temp1,
                        Temp2: datosMSV[1].Temp2,
                        PVC: datosMSV[1].PVC,
                        PAS_IN: datosMSV[1].PAS_IN,
                        PAD_IN: datosMSV[1].PAD_IN,
                        PAM_IN: datosMSV[1].PAM_IN,
                        FiCO2: datosMSV[1].FiCO2,
                        FR: datosMSV[1].FR,
                        HoraGeneracion: datosMSV[1].HoraGeneracion
                    },
                    {
                        FC: datosMSV[2].FC,
                        Pulso: datosMSV[2].Pulso,
                        PAS: datosMSV[2].PAS,
                        PAD: datosMSV[2].PAD,
                        PAM: datosMSV[2].PAM,
                        SpO2: datosMSV[2].SpO2,
                        EtCO2: datosMSV[2].EtCO2,
                        Temp1: datosMSV[2].Temp1,
                        Temp2: datosMSV[2].Temp2,
                        PVC: datosMSV[2].PVC,
                        PAS_IN: datosMSV[2].PAS_IN,
                        PAD_IN: datosMSV[2].PAD_IN,
                        PAM_IN: datosMSV[2].PAM_IN,
                        FiCO2: datosMSV[2].FiCO2,
                        FR: datosMSV[2].FR,
                        HoraGeneracion: datosMSV[2].HoraGeneracion
                    },
                    {
                        FC: datosMSV[3].FC,
                        Pulso: datosMSV[3].Pulso,
                        PAS: datosMSV[3].PAS,
                        PAD: datosMSV[3].PAD,
                        PAM: datosMSV[3].PAM,
                        SpO2: datosMSV[3].SpO2,
                        EtCO2: datosMSV[3].EtCO2,
                        Temp1: datosMSV[3].Temp1,
                        Temp2: datosMSV[3].Temp2,
                        PVC: datosMSV[3].PVC,
                        PAS_IN: datosMSV[3].PAS_IN,
                        PAD_IN: datosMSV[3].PAD_IN,
                        PAM_IN: datosMSV[3].PAM_IN,
                        FiCO2: datosMSV[3].FiCO2,
                        FR: datosMSV[3].FR,
                        HoraGeneracion: datosMSV[3].HoraGeneracion
                    },
                    {
                        FC: datosMSV[4].FC,
                        Pulso: datosMSV[4].Pulso,
                        PAS: datosMSV[4].PAS,
                        PAD: datosMSV[4].PAD,
                        PAM: datosMSV[4].PAM,
                        SpO2: datosMSV[4].SpO2,
                        EtCO2: datosMSV[4].EtCO2,
                        Temp1: datosMSV[4].Temp1,
                        Temp2: datosMSV[4].Temp2,
                        PVC: datosMSV[4].PVC,
                        PAS_IN: datosMSV[4].PAS_IN,
                        PAD_IN: datosMSV[4].PAD_IN,
                        PAM_IN: datosMSV[4].PAM_IN,
                        FiCO2: datosMSV[4].FiCO2,
                        FR: datosMSV[4].FR,
                        HoraGeneracion: datosMSV[4].HoraGeneracion
                    }
                ]
                }
            });
        return res.json({ menuTrans });
    } catch (error) {
        console.log(error);
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Guardado Medicamentos */
export const saveMedicamentos = async (req: any, res: Response) => {
    try {
        const { pid,
                // Datos medicamentos
                tipoMed, medicamento, dosisMed, unidadMed, viaMed, horaInicioMed, horaFinalMed, observacionesMed
              } = req.body;        
        const menuTrans  = await new MenuTrans({ pid,
                                            // Datos del medicamento
                                            medicamentosCx: {
                                                tipoMed: tipoMed, medicamento: medicamento, dosisMed: dosisMed, unidadMed: unidadMed, viaMed: viaMed, 
                                                horaInicioMed: horaInicioMed, horaFinalMed: horaFinalMed, observacionesMed: observacionesMed
                                            },
                                        });
        await menuTrans.save();        
        return res.json({ menuTrans });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const saveNuevoMedicamentos = async (req: any, res: Response) => {
    try {
        const { pid, cxid,
                // Datos medicamentos
                tipoMed, medicamento, dosisMed, unidadMed, viaMed, horaInicioMed, horaFinalMed, observacionesMed
              } = req.body;        
        const menuTrans  = await new MenuTrans({ pid, cxid,
                                            // Datos del medicamento
                                            medicamentosCx: {
                                                tipoMed: tipoMed, medicamento: medicamento, dosisMed: dosisMed, unidadMed: unidadMed, viaMed: viaMed, 
                                                horaInicioMed: horaInicioMed, horaFinalMed: horaFinalMed, observacionesMed: observacionesMed
                                            },
                                        });
        await menuTrans.save();        
        return res.json({ menuTrans });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const updateMedicamentos = async (req: any, res: Response) => {
    try {
        const { pid } = req.params;
        const { medicamentosCx } = req.body;                
        const menuTrans = await MenuTrans.findOneAndUpdate(
            { pid: pid },
            { $push:{
                    medicamentosCx: {
                        tipoMed: medicamentosCx[0], medicamento: medicamentosCx[1], dosisMed: medicamentosCx[2], unidadMed: medicamentosCx[3], 
                        viaMed: medicamentosCx[4], horaInicioMed: medicamentosCx[5], horaFinalMed: medicamentosCx[6], observacionesMed: medicamentosCx[7], 
                    }                                        
                }
            });                
        return res.json({ menuTrans });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const updateNuevoMedicamentos = async (req: any, res: Response) => {
    try {
        const { pid, cxid } = req.params;
        const { medicamentosCx } = req.body;                
        const menuTrans = await MenuTrans.findOneAndUpdate(
            { pid: pid, cxid: cxid },
            { $push:{
                    medicamentosCx: {
                        tipoMed: medicamentosCx[0], medicamento: medicamentosCx[1], dosisMed: medicamentosCx[2], unidadMed: medicamentosCx[3], 
                        viaMed: medicamentosCx[4], horaInicioMed: medicamentosCx[5], horaFinalMed: medicamentosCx[6], observacionesMed: medicamentosCx[7], 
                    }                                        
                }
            });                
        return res.json({ menuTrans });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Función para obtener los medicamentos */
export const getMedicamentos = async (req: any, res: Response) => {
    try {
        const {pid} = req.params;
        
        const medicamento = await MenuTrans.find({pid:pid})
           
        return res.json({medicamento});
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const getNuevoMedicamentos = async (req: any, res: Response) => {
    try {
        const {pid, cxid} = req.params;
        
        const medicamento = await MenuTrans.find({pid:pid, cxid:cxid})
           
        return res.json({medicamento});
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Función para obtener un medicamento */
export const getMedicamento = async (req: any, res: Response) => {
    try {
        const {id} = req.params;

        const medicamento = await MenuTrans.findOne({ "medicamentosCx._id": id },
                                                  { 'medicamentosCx.$': 1 })
        
        return res.json({medicamento});
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Funcion para actualizar un medicamento */
export const updateMedicamento = async (req: any, res: Response) => {
    try {
        const { id } = req.params;
        const { medicamentosCx } = req.body;       
        
        const medicamento = await MenuTrans.updateOne({ "medicamentosCx._id": id },
            {
                $set : {
                            "medicamentosCx.$.tipoMed" : medicamentosCx[0].tipoMed, "medicamentosCx.$.medicamento" : medicamentosCx[0].medicamento,
                            "medicamentosCx.$.dosisMed" : medicamentosCx[0].dosisMed, "medicamentosCx.$.unidadMed" : medicamentosCx[0].unidadMed,
                            "medicamentosCx.$.viaMed" : medicamentosCx[0].viaMed, "medicamentosCx.$.horaInicioMed" : medicamentosCx[0].horaInicioMed,
                            "medicamentosCx.$.horaFinalMed" : medicamentosCx[0].horaFinalMed, "medicamentosCx.$.observacionesMed" : medicamentosCx[0].observacionesMed,
                        }
            }
        );
        
        if (!medicamento) 
            return res.status(404).json({ Error: "No existe el medicamento." });        
        
        return res.json({ medicamento });
    } catch (error) {
        if (error.kind === "ObjectId") {
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }        
        return res.status(500).json({ error: "Error de servidor" });
    }
};

/* Funcion para eliminar un medicamento */
export const deleteMedicamento = async (req: any, res: Response) => {
    try {
        const { id } = req.params;

        const medicamento = await MenuTrans.findOneAndUpdate({ "medicamentosCx._id": id },
                                                           { $pull: { medicamentosCx: { _id: id } } }
        );              
       
        return res.json({ medicamento });
    } catch (error) {
        if (error.kind === "ObjectId") {
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
        
        return res.status(500).json({ error: "Error de servidor" });
    }
};

/* Guardado Relevo */
export const saveRelevos = async (req: any, res: Response) => {
    try {
        const { pid,
                // Datos relevos
                horaRelevo, tipoRel, matriculaRel, anestesiologoRel, observacionesRel
              } = req.body;        
        const menuTrans  = await new MenuTrans({ pid,
                                            // Datos del relevo
                                            relevoCx: {
                                                horaRelevo: horaRelevo, tipoRel: tipoRel, matriculaRel: matriculaRel, anestesiologoRel: anestesiologoRel, observacionesRel: observacionesRel
                                            },
                                        });
        await menuTrans.save();        
        return res.json({ menuTrans });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const saveNuevoRelevos = async (req: any, res: Response) => {
    try {
        const { pid, cxid,
                // Datos relevos
                horaRelevo, tipoRel, matriculaRel, anestesiologoRel, observacionesRel
              } = req.body;        
        const menuTrans  = await new MenuTrans({ pid, cxid,
                                            // Datos del relevo
                                            relevoCx: {
                                                horaRelevo: horaRelevo, tipoRel: tipoRel, matriculaRel: matriculaRel, anestesiologoRel: anestesiologoRel, observacionesRel: observacionesRel
                                            },
                                        });
        await menuTrans.save();        
        return res.json({ menuTrans });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const updateRelevos = async (req: any, res: Response) => {
    try {
        const { pid } = req.params;
        const { relevoCx } = req.body;                
        const menuTrans = await MenuTrans.findOneAndUpdate(
            { pid: pid },
            { $push:{
                relevoCx: {
                        horaRelevo: relevoCx[0], tipoRel: relevoCx[1], matriculaRel: relevoCx[2], anestesiologoRel: relevoCx[3], observacionesRel: relevoCx[4]
                    }
                }
            });        
        return res.json({ menuTrans });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const updateNuevoRelevos = async (req: any, res: Response) => {
    try {
        const { pid, cxid } = req.params;
        const { relevoCx } = req.body;                
        const menuTrans = await MenuTrans.findOneAndUpdate(
            { pid: pid, cxid: cxid },
            { $push:{
                relevoCx: {
                        horaRelevo: relevoCx[0], tipoRel: relevoCx[1], matriculaRel: relevoCx[2], anestesiologoRel: relevoCx[3], observacionesRel: relevoCx[4]
                    }
                }
            });        
        return res.json({ menuTrans });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Función para obtener los relevos */
export const getRelevos = async (req: any, res: Response) => {
    try {
        const {pid} = req.params;
        
        const relevo = await MenuTrans.find({pid:pid})
           
        return res.json({relevo});
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const getNuevoRelevos = async (req: any, res: Response) => {
    try {
        const {pid, cxid} = req.params;
        
        const relevo = await MenuTrans.find({pid:pid, cxid:cxid})
           
        return res.json({relevo});
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Función para obtener un medicamento */
export const getRelevo = async (req: any, res: Response) => {
    try {
        const {id} = req.params;

        const relevo = await MenuTrans.findOne({ "relevoCx._id": id },
                                                  { 'relevoCx.$': 1 })
        
        return res.json({relevo});
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Funcion para actualizar un relevo */
export const updateRelevo = async (req: any, res: Response) => {
    try {
        const { id } = req.params;
        const { relevoCx } = req.body;       
        
        const relevo = await MenuTrans.updateOne({ "relevoCx._id": id },
            {
                $set : {
                            "relevoCx.$.horaRelevo" : relevoCx[0].horaRelevo, "relevoCx.$.tipoRel" : relevoCx[0].tipoRel,
                            "relevoCx.$.matriculaRel" : relevoCx[0].matriculaRel, "relevoCx.$.anestesiologoRel" : relevoCx[0].anestesiologoRel,
                            "relevoCx.$.observacionesRel" : relevoCx[0].observacionesRel,
                        }
            }
        );
        
        if (!relevo) 
            return res.status(404).json({ Error: "No existe el relevo." });        
        
        return res.json({ relevo });
    } catch (error) {
        if (error.kind === "ObjectId") {
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }        
        return res.status(500).json({ error: "Error de servidor" });
    }
};

/* Funcion para eliminar un relevo */
export const deleteRelevo = async (req: any, res: Response) => {
    try {
        const { id } = req.params;

        const relevo = await MenuTrans.findOneAndUpdate({ "relevoCx._id": id },
                                                           { $pull: { relevoCx: { _id: id } } }
        );              
       
        return res.json({ relevo });
    } catch (error) {
        if (error.kind === "ObjectId") {
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
        
        return res.status(500).json({ error: "Error de servidor" });
    }
};

/* Guardado Eventos */
export const saveEventos = async (req: any, res: Response) => {
    try {
        const { pid,
                // Datos relevos
                horaEvento, tipoEve, detalleEvento
              } = req.body;        
        const menuTrans  = await new MenuTrans({ pid,
                                            // Datos del relevo
                                            evCriticoCx: {
                                                horaEvento: horaEvento, tipoEve: tipoEve, detalleEvento: detalleEvento
                                            },
                                        });
        await menuTrans.save();        
        return res.json({ menuTrans });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const saveNuevoEventos = async (req: any, res: Response) => {
    try {
        const { pid, cxid,
                // Datos relevos
                horaEvento, tipoEve, detalleEvento
              } = req.body;        
        const menuTrans  = await new MenuTrans({ pid, cxid,
                                            // Datos del relevo
                                            evCriticoCx: {
                                                horaEvento: horaEvento, tipoEve: tipoEve, detalleEvento: detalleEvento
                                            },
                                        });
        await menuTrans.save();        
        return res.json({ menuTrans });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const updateEventos = async (req: any, res: Response) => {
    try {
        const { pid } = req.params;
        const { evCriticoCx } = req.body;                
        const menuTrans = await MenuTrans.findOneAndUpdate(
            { pid: pid },
            { $push:{
                evCriticoCx: {
                        horaEvento: evCriticoCx[0], tipoEve: evCriticoCx[1], detalleEvento: evCriticoCx[2]
                    }
                }
            });        
        return res.json({ menuTrans });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const updateNuevoEventos = async (req: any, res: Response) => {
    try {
        const { pid, cxid } = req.params;
        const { evCriticoCx } = req.body;                
        const menuTrans = await MenuTrans.findOneAndUpdate(
            { pid: pid, cxid: cxid },
            { $push:{
                evCriticoCx: {
                        horaEvento: evCriticoCx[0], tipoEve: evCriticoCx[1], detalleEvento: evCriticoCx[2]
                    }
                }
            });        
        return res.json({ menuTrans });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Función para obtener los Eventos */
export const getEventos = async (req: any, res: Response) => {
    try {
        const {pid} = req.params;
        
        const evento = await MenuTrans.find({pid:pid})
           
        return res.json({evento});
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const getNuevoEventos = async (req: any, res: Response) => {
    try {
        const {pid, cxid} = req.params;
        
        const evento = await MenuTrans.find({pid:pid, cxid:cxid})
           
        return res.json({evento});
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Función para obtener un Evento */
export const getEvento = async (req: any, res: Response) => {
    try {
        const {id} = req.params;

        const evento = await MenuTrans.findOne({ "evCriticoCx._id": id },
                                                  { 'evCriticoCx.$': 1 })
        
        return res.json({evento});
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Funcion para actualizar un Evento */
export const updateEvento = async (req: any, res: Response) => {
    try {
        const { id } = req.params;
        const { evCriticoCx } = req.body;       
        
        const evento = await MenuTrans.updateOne({ "evCriticoCx._id": id },
            {
                $set : {
                            "evCriticoCx.$.horaEvento" : evCriticoCx[0].horaEvento, "evCriticoCx.$.tipoEve" : evCriticoCx[0].tipoEve,
                            "evCriticoCx.$.detalleEvento" : evCriticoCx[0].detalleEvento
                        }
            }
        );
        
        if (!evento) 
            return res.status(404).json({ Error: "No existe el relevo." });        
        
        return res.json({ evento });
    } catch (error) {
        if (error.kind === "ObjectId") {
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }        
        return res.status(500).json({ error: "Error de servidor" });
    }
};

/* Funcion para eliminar un Evento */
export const deleteEvento = async (req: any, res: Response) => {
    try {
        const { id } = req.params;

        const evento = await MenuTrans.findOneAndUpdate({ "evCriticoCx._id": id },
                                                           { $pull: { evCriticoCx: { _id: id } } }
        );              
       
        return res.json({ evento });
    } catch (error) {
        if (error.kind === "ObjectId") {
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
        
        return res.status(500).json({ error: "Error de servidor" });
    }
};