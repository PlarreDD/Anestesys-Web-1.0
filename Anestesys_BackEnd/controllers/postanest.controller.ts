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
                // Nota de Evaluación UCPA
                notaEval_Obs,
                // Aldrete de Recuperación
                // Frecuencia Cardiaca
                aldreteRec_FrecCardIn, aldreteRec_FrecCard15, aldreteRec_FrecCard30,
                aldreteRec_FrecCard45, aldreteRec_FrecCard60, aldreteRec_FrecCard90,
                aldreteRec_FrecCard120,
                // Frecuencia Respiratoria
                aldreteRec_FrecRespIn, aldreteRec_FrecResp15, aldreteRec_FrecResp30,
                aldreteRec_FrecResp45, aldreteRec_FrecResp60, aldreteRec_FrecResp90,
                aldreteRec_FrecResp120,
                // Tension Arterial
                aldreteRec_TensArteIn, aldreteRec_TensArte15, aldreteRec_TensArte30,
                aldreteRec_TensArte45, aldreteRec_TensArte60, aldreteRec_TensArte90,
                aldreteRec_TensArte120,
                // Saturación de O2
                aldreteRec_SatO2In, aldreteRec_SatO215, aldreteRec_SatO230,
                aldreteRec_SatO245, aldreteRec_SatO260, aldreteRec_SatO290,
                aldreteRec_SatO2120,
                // Aldrete
                aldreteRec_AldreteIn, aldreteRec_Aldrete15, aldreteRec_Aldrete30, 
                aldreteRec_Aldrete45, aldreteRec_Aldrete60, aldreteRec_Aldrete90,
                aldreteRec_Aldrete120,
                // Bromage
                aldreteRec_BromageIn, aldreteRec_Bromage15, aldreteRec_Bromage30,
                aldreteRec_Bromage45, aldreteRec_Bromage60, aldreteRec_Bromage90,
                aldreteRec_Bromage120,
                // Nauseas/Vomito
                aldreteRec_NauseasIn, aldreteRec_Nauseas15, aldreteRec_Nauseas30,
                aldreteRec_Nauseas45, aldreteRec_Nauseas60, aldreteRec_Nauseas90,
                aldreteRec_Nauseas120,
                // Escala de EVA de Dolor
                aldreteRec_escEVADolIn, aldreteRec_escEVADol15, aldreteRec_escEVADol30,
                aldreteRec_escEVADol45, aldreteRec_escEVADol60, aldreteRec_escEVADol90,
                aldreteRec_escEVADol120,

                // Alta Recuperación
                altaRec_0min, altaRec_15min, altaRec_30min, altaRec_45min, altaRec_60min, altaRec_90min, altaRec_CalifAldrete, altaRec_Obs, altaRec_FechaAltaRec, altaRec_HrAltaRec,
                altaRec_NomMedAnest,
                } = req.body;
        
        const recuperacion = new PostRecupera({ pid: pid,
                                                // Nota de Evaluación UCPA
                                                notaEval_Obs: notaEval_Obs,

                                                // Aldrete de Recuperación
                                                // Frecuencia Cardiaca
                                                aldreteRec_FrecCardIn: aldreteRec_FrecCardIn,
                                                aldreteRec_FrecCard15: aldreteRec_FrecCard15,
                                                aldreteRec_FrecCard30: aldreteRec_FrecCard30,
                                                aldreteRec_FrecCard45: aldreteRec_FrecCard45,
                                                aldreteRec_FrecCard60: aldreteRec_FrecCard60,
                                                aldreteRec_FrecCard90: aldreteRec_FrecCard90,
                                                aldreteRec_FrecCard120: aldreteRec_FrecCard120,
                                                // Frecuencia Respiratoria
                                                aldreteRec_FrecRespIn: aldreteRec_FrecRespIn,
                                                aldreteRec_FrecResp15: aldreteRec_FrecResp15,
                                                aldreteRec_FrecResp30: aldreteRec_FrecResp30,
                                                aldreteRec_FrecResp45: aldreteRec_FrecResp45,
                                                aldreteRec_FrecResp60: aldreteRec_FrecResp60,
                                                aldreteRec_FrecResp90: aldreteRec_FrecResp90,
                                                aldreteRec_FrecResp120: aldreteRec_FrecResp120,
                                                // Tension Arterial
                                                aldreteRec_TensArteIn: aldreteRec_TensArteIn,
                                                aldreteRec_TensArte15: aldreteRec_TensArte15,
                                                aldreteRec_TensArte30: aldreteRec_TensArte30,
                                                aldreteRec_TensArte45: aldreteRec_TensArte45,
                                                aldreteRec_TensArte60: aldreteRec_TensArte60,
                                                aldreteRec_TensArte90: aldreteRec_TensArte90,
                                                aldreteRec_TensArte120: aldreteRec_TensArte120,
                                                // Saturación de O2
                                                aldreteRec_SatO2In: aldreteRec_SatO2In,
                                                aldreteRec_SatO215: aldreteRec_SatO215,
                                                aldreteRec_SatO230: aldreteRec_SatO230,
                                                aldreteRec_SatO245: aldreteRec_SatO245,
                                                aldreteRec_SatO260: aldreteRec_SatO260,
                                                aldreteRec_SatO290: aldreteRec_SatO290,
                                                aldreteRec_SatO2120: aldreteRec_SatO2120,
                                                // Aldrete
                                                aldreteRec_AldreteIn: aldreteRec_AldreteIn,
                                                aldreteRec_Aldrete15: aldreteRec_Aldrete15,
                                                aldreteRec_Aldrete30: aldreteRec_Aldrete30,
                                                aldreteRec_Aldrete45: aldreteRec_Aldrete45,
                                                aldreteRec_Aldrete60: aldreteRec_Aldrete60,
                                                aldreteRec_Aldrete90: aldreteRec_Aldrete90,
                                                aldreteRec_Aldrete120: aldreteRec_Aldrete120,
                                                // Bromage
                                                aldreteRec_BromageIn: aldreteRec_BromageIn,
                                                aldreteRec_Bromage15: aldreteRec_Bromage15,
                                                aldreteRec_Bromage30: aldreteRec_Bromage30,
                                                aldreteRec_Bromage45: aldreteRec_Bromage45,
                                                aldreteRec_Bromage60: aldreteRec_Bromage60,
                                                aldreteRec_Bromage90: aldreteRec_Bromage90,
                                                aldreteRec_Bromage120: aldreteRec_Bromage120,
                                                // Nauseas/Vomito
                                                aldreteRec_NauseasIn: aldreteRec_NauseasIn,
                                                aldreteRec_Nauseas15: aldreteRec_Nauseas15,
                                                aldreteRec_Nauseas30: aldreteRec_Nauseas30,
                                                aldreteRec_Nauseas45: aldreteRec_Nauseas45,
                                                aldreteRec_Nauseas60: aldreteRec_Nauseas60,
                                                aldreteRec_Nauseas90: aldreteRec_Nauseas90,
                                                aldreteRec_Nauseas120: aldreteRec_Nauseas120,
                                                // Escala de EVA de Dolor
                                                aldreteRec_escEVADolIn: aldreteRec_escEVADolIn,
                                                aldreteRec_escEVADol15: aldreteRec_escEVADol15,
                                                aldreteRec_escEVADol30: aldreteRec_escEVADol30,
                                                aldreteRec_escEVADol45: aldreteRec_escEVADol45,
                                                aldreteRec_escEVADol60: aldreteRec_escEVADol60,
                                                aldreteRec_escEVADol90: aldreteRec_escEVADol90,
                                                aldreteRec_escEVADol120: aldreteRec_escEVADol120,
                                                
                                                // Alta Recuperación
                                                altaRec_CalifAldrete: altaRec_CalifAldrete,
                                                altaRec_Obs: altaRec_Obs,
                                                altaRec_FechaAltaRec: altaRec_FechaAltaRec,
                                                altaRec_HrAltaRec: altaRec_HrAltaRec,
                                                altaRec_NomMedAnest: altaRec_NomMedAnest,
                                                altaRec_0min: altaRec_0min,
                                                altaRec_15min: altaRec_15min,
                                                altaRec_30min: altaRec_30min,
                                                altaRec_45min: altaRec_45min,
                                                altaRec_60min: altaRec_60min,
                                                altaRec_90min: altaRec_90min
                                            });

        await recuperacion.save();

        return res.json({ recuperacion });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const updateRecuperacion = async (req: any, res: Response) => {
    try {
        const { id } = req.params;
        const { // Nota de Evaluación UCPA
                notaEval_Obs,
                // Aldrete de Recuperación
                // Frecuencia Cardiaca
                aldreteRec_FrecCardIn, aldreteRec_FrecCard15, aldreteRec_FrecCard30,
                aldreteRec_FrecCard45, aldreteRec_FrecCard60, aldreteRec_FrecCard90,
                aldreteRec_FrecCard120,

                // Frecuencia Respiratoria
                aldreteRec_FrecRespIn, aldreteRec_FrecResp15, aldreteRec_FrecResp30,
                aldreteRec_FrecResp45, aldreteRec_FrecResp60, aldreteRec_FrecResp90,
                aldreteRec_FrecResp120,

                // Tension Arterial
                aldreteRec_TensArteIn, aldreteRec_TensArte15, aldreteRec_TensArte30,
                aldreteRec_TensArte45, aldreteRec_TensArte60, aldreteRec_TensArte90,
                aldreteRec_TensArte120,

                // Saturación de O2
                aldreteRec_SatO2In, aldreteRec_SatO215, aldreteRec_SatO230,
                aldreteRec_SatO245, aldreteRec_SatO260, aldreteRec_SatO290,
                aldreteRec_SatO2120,

                // Aldrete
                aldreteRec_AldreteIn, aldreteRec_Aldrete15, aldreteRec_Aldrete30, 
                aldreteRec_Aldrete45, aldreteRec_Aldrete60, aldreteRec_Aldrete90,
                aldreteRec_Aldrete120,

                // Bromage
                aldreteRec_BromageIn, aldreteRec_Bromage15, aldreteRec_Bromage30,
                aldreteRec_Bromage45, aldreteRec_Bromage60, aldreteRec_Bromage90,
                aldreteRec_Bromage120,

                // Nauseas/Vomito
                aldreteRec_NauseasIn, aldreteRec_Nauseas15, aldreteRec_Nauseas30,
                aldreteRec_Nauseas45, aldreteRec_Nauseas60, aldreteRec_Nauseas90,
                aldreteRec_Nauseas120,

                // Escala de EVA de Dolor
                aldreteRec_escEVADolIn, aldreteRec_escEVADol15, aldreteRec_escEVADol30,
                aldreteRec_escEVADol45, aldreteRec_escEVADol60, aldreteRec_escEVADol90,
                aldreteRec_escEVADol120,
            
                // Alta Recuperación
                altaRec_CalifAldrete, altaRec_Obs, altaRec_FechaAltaRec, altaRec_HrAltaRec,
                altaRec_NomMedAnest,
            } = req.body;
        
        const recuperacion = await PostRecupera.findOneAndUpdate({ pid: id },
                                                                 { // Nota de Evaluación UCPA
                                                                   notaEval_Obs: notaEval_Obs,
                                                                   // Aldrete de Recuperación
                                                                   // Frecuencia Cardiaca
                                                                   aldreteRec_FrecCardIn: aldreteRec_FrecCardIn,
                                                                   aldreteRec_FrecCard15: aldreteRec_FrecCard15,
                                                                   aldreteRec_FrecCard30: aldreteRec_FrecCard30,
                                                                   aldreteRec_FrecCard45: aldreteRec_FrecCard45,
                                                                   aldreteRec_FrecCard60: aldreteRec_FrecCard60,
                                                                   aldreteRec_FrecCard90: aldreteRec_FrecCard90,
                                                                   aldreteRec_FrecCard120: aldreteRec_FrecCard120,

                                                                   // Frecuencia Respiratoria
                                                                   aldreteRec_FrecRespIn: aldreteRec_FrecRespIn,
                                                                   aldreteRec_FrecResp15: aldreteRec_FrecResp15,
                                                                   aldreteRec_FrecResp30: aldreteRec_FrecResp30,
                                                                   aldreteRec_FrecResp45: aldreteRec_FrecResp45,
                                                                   aldreteRec_FrecResp60: aldreteRec_FrecResp60,
                                                                   aldreteRec_FrecResp90: aldreteRec_FrecResp90,
                                                                   aldreteRec_FrecResp120: aldreteRec_FrecResp120,

                                                                   // Tension Arterial
                                                                   aldreteRec_TensArteIn: aldreteRec_TensArteIn,
                                                                   aldreteRec_TensArte15: aldreteRec_TensArte15,
                                                                   aldreteRec_TensArte30: aldreteRec_TensArte30,
                                                                   aldreteRec_TensArte45: aldreteRec_TensArte45,
                                                                   aldreteRec_TensArte60: aldreteRec_TensArte60,
                                                                   aldreteRec_TensArte90: aldreteRec_TensArte90,
                                                                   aldreteRec_TensArte120: aldreteRec_TensArte120,

                                                                   // Saturación de O2
                                                                   aldreteRec_SatO2In: aldreteRec_SatO2In,
                                                                   aldreteRec_SatO215: aldreteRec_SatO215,
                                                                   aldreteRec_SatO230: aldreteRec_SatO230,
                                                                   aldreteRec_SatO245: aldreteRec_SatO245,
                                                                   aldreteRec_SatO260: aldreteRec_SatO260,
                                                                   aldreteRec_SatO290: aldreteRec_SatO290,
                                                                   aldreteRec_SatO2120: aldreteRec_SatO2120,

                                                                   // Aldrete
                                                                   aldreteRec_AldreteIn: aldreteRec_AldreteIn,
                                                                   aldreteRec_Aldrete15: aldreteRec_Aldrete15,
                                                                   aldreteRec_Aldrete30: aldreteRec_Aldrete30,
                                                                   aldreteRec_Aldrete45: aldreteRec_Aldrete45,
                                                                   aldreteRec_Aldrete60: aldreteRec_Aldrete60,
                                                                   aldreteRec_Aldrete90: aldreteRec_Aldrete90,
                                                                   aldreteRec_Aldrete120: aldreteRec_Aldrete120,

                                                                   // Bromage
                                                                   aldreteRec_BromageIn: aldreteRec_BromageIn,
                                                                   aldreteRec_Bromage15: aldreteRec_Bromage15,
                                                                   aldreteRec_Bromage30: aldreteRec_Bromage30,
                                                                   aldreteRec_Bromage45: aldreteRec_Bromage45,
                                                                   aldreteRec_Bromage60: aldreteRec_Bromage60,
                                                                   aldreteRec_Bromage90: aldreteRec_Bromage90,
                                                                   aldreteRec_Bromage120: aldreteRec_Bromage120,

                                                                   // Nauseas/Vomito
                                                                   aldreteRec_NauseasIn: aldreteRec_NauseasIn,
                                                                   aldreteRec_Nauseas15: aldreteRec_Nauseas15,
                                                                   aldreteRec_Nauseas30: aldreteRec_Nauseas30,
                                                                   aldreteRec_Nauseas45: aldreteRec_Nauseas45,
                                                                   aldreteRec_Nauseas60: aldreteRec_Nauseas60,
                                                                   aldreteRec_Nauseas90: aldreteRec_Nauseas90,
                                                                   aldreteRec_Nauseas120: aldreteRec_Nauseas120,

                                                                   // Escala de EVA de Dolor
                                                                   aldreteRec_escEVADolIn: aldreteRec_escEVADolIn,
                                                                   aldreteRec_escEVADol15: aldreteRec_escEVADol15,
                                                                   aldreteRec_escEVADol30: aldreteRec_escEVADol30,
                                                                   aldreteRec_escEVADol45: aldreteRec_escEVADol45,
                                                                   aldreteRec_escEVADol60: aldreteRec_escEVADol60,
                                                                   aldreteRec_escEVADol90: aldreteRec_escEVADol90,
                                                                   aldreteRec_escEVADol120: aldreteRec_escEVADol120,
                                                                
                                                                    // Alta Recuperación
                                                                    altaRec_CalifAldrete: altaRec_CalifAldrete,
                                                                    altaRec_Obs: altaRec_Obs,
                                                                    altaRec_FechaAltaRec: altaRec_FechaAltaRec,
                                                                    altaRec_HrAltaRec: altaRec_HrAltaRec,
                                                                    altaRec_NomMedAnest: altaRec_NomMedAnest,
                                                                 });

        return res.json({ recuperacion })
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};