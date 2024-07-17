import { Response } from "express";
import logger from "../logger";
import { Cirugias } from "../models/Cirugias"
import { UpdateResult } from "mongodb"

export const saveCx = async (req: any, res:Response) => {
    try {
        const { pid, id,
            numEpisodio, habitacionPacnt, fechaInPacnt,
            diagnostico, tipoCx,
            cie10, cie9,
            infoProced,
            cuerpoMed,
            antPersPat,
            antPersNoPat,
            sigVit,
            expFis,
            viaAerea,
            perfilBioQ,
            pos_Cuidados,
            sedacion,
            regional,
            anestLocal,
            anestGral,
            obsNotaPre,
            balancesParciales,
            balanceTotal,
            balIng,
            balEgresos,
            datosVentilador,
            tiemposQX,
            notaPA,
            signVitEgQx,
            casoObsRecNac_NumProd,
            notaEval_Obs,
            altaRec,
        } = req.body;

        
        if (id) {
            var cirugia: UpdateResult | null = await Cirugias.findOne({ _id: id });
            const cx: any = cirugia;

            cirugia = await Cirugias.updateOne(
                { "cirugia._id": cx?._id },
                { $set:
                    {
                        numEpisodio, habitacionPacnt, fechaInPacnt,
                        diagnostico, tipoCx,
                        cie10, cie9,
                        infoProced: infoProced[0],
                        cuerpoMed: cuerpoMed[0],
                        antPersPat: antPersPat[0],
                        antPersNoPat: antPersNoPat[0],
                        sigVit: sigVit[0],
                        expFis: expFis[0],
                        viaAerea: viaAerea[0],
                        perfilBioQ: perfilBioQ[0],
                        pos_Cuidados: pos_Cuidados[0],
                        sedacion: sedacion[0],
                        regional: regional[0],
                        anestLocal: anestLocal[0],
                        anestGral: anestGral[0],
                        obsNotaPre,
                        balancesParciales: balancesParciales[0],
                        balanceTotal,
                        balIng: balIng[0],
                        balEgresos: balEgresos[0],
                        datosVentilador: datosVentilador[0],
                        tiemposQX: tiemposQX[0],
                        notaPA: notaPA[0],
                        signVitEgQx: signVitEgQx[0],
                        casoObsRecNac_NumProd,
                        notaEval_Obs,
                        altaRec: altaRec[0],
                    }
                }
            );

            console.log(cirugia);
        }
        else{
            const cirugia = new Cirugias({
                pid: pid,
                numEpisodio, habitacionPacnt, fechaInPacnt,
                diagnostico, tipoCx,
                cie10, cie9,
                infoProced: infoProced[0],
                cuerpoMed: cuerpoMed[0],
                antPersPat: antPersPat[0],
                antPersNoPat: antPersNoPat[0],
                sigVit: sigVit[0],
                expFis: expFis[0],
                viaAerea: viaAerea[0],
                perfilBioQ: perfilBioQ[0],
                pos_Cuidados: pos_Cuidados[0],
                sedacion: sedacion[0],
                regional: regional[0],
                anestLocal: anestLocal[0],
                anestGral: anestGral[0],
                obsNotaPre,
                balancesParciales: balancesParciales[0],
                balanceTotal,
                balIng: balIng[0],
                balEgresos: balEgresos[0],
                datosVentilador: datosVentilador[0],
                tiemposQX: tiemposQX[0],
                notaPA: notaPA[0],
                signVitEgQx: signVitEgQx[0],
                casoObsRecNac_NumProd,
                notaEval_Obs,
                altaRec: altaRec[0],
            });

            await cirugia.save();
            return res.json({ cirugia })
        }

    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error al guardar la ficha de cirugía', error
        });
        
        return res.status(500).json({ Error: 'Error al guardar la ficha de cirugía' });
    }
};

export const savePreEstudios = async (req: any, res: Response) => {
    try {
        const {
            id,
            val_Estudios
        } = req.body;

        const valest = await Cirugias.findOneAndUpdate(
            { _id: id },
            {$push: {
                Estudios: {
                    estudio: val_Estudios[0],
                    especifEstudio: val_Estudios[1]
                }
            }}
        );

        return res.json({ valest });
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const saveMedicamentos = async (req: any, res: Response) => {
    try {
        const {
            id,
            tipoMed, medicamento, dosisMed,
            unidadMed, viaMed, horaInicioMed,
            horaFinalMed, observacionesMed, valorGrafica
        } = req.body

        const cirugia  = await Cirugias.findOneAndUpdate(
            { _id: id },
            // Datos del medicamento
            {$push: {
                medicamentosCx: {
                    tipoMed: tipoMed,
                    medicamento: medicamento,
                    dosisMed: dosisMed,
                    unidadMed: unidadMed,
                    viaMed: viaMed,
                    horaInicioMed: horaInicioMed,
                    horaFinalMed: horaFinalMed,
                    observacionesMed: observacionesMed,
                    valorGrafica: valorGrafica
                },
            }}
        );

        return res.json({ cirugia });
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error al guardar el medicamento', error
        });
        
        return res.status(500).json({ Error: 'Error al guardar el medicamento' });
    }
};

export const saveRelevos = async (req: any, res: Response) => {
    try {
        const {
            id,
            // Datos relevos
            horaRelevo, tipoRel, matriculaRel,
            anestesiologoRel, observacionesRel
        } = req.body;

        const cirugia = await Cirugias.findOneAndUpdate(
            { _id: id },
            { $push: {
                // Datos del relevo
                relevoCx: {
                    horaRelevo: horaRelevo,
                    tipoRel: tipoRel,
                    matriculaRel: matriculaRel,
                    anestesiologoRel: anestesiologoRel,
                    observacionesRel: observacionesRel
                },
            }});

        return res.json({ cirugia });
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const saveEventos = async (req: any, res: Response) => {
    try {
        const {
            id,
            // Datos relevos
            horaEvento, tipoEve,
            detalleEvento, valorGraficaEv
        } = req.body;

        const cirugia = await Cirugias.findOneAndUpdate(
            { _id: id },
            { $push: {
                // Datos del relevo
                evCriticoCx: {
                    horaEvento: horaEvento,
                    tipoEve: tipoEve,
                    detalleEvento: detalleEvento,
                    valorGraficaEv: valorGraficaEv
                },
            }});

        return res.json({ cirugia });
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const saveCasoObsRN = async (req: any, res: Response) => {
    try {
        const {
            id,
            Genero, HrNacimiento,
            Alumbramiento, Apgar1,
            Apgar5, Capurro,
            Peso, Talla
        } = req.body;

        const cirugia = await Cirugias.findOneAndUpdate(
            { _id: id },
            { $push: {
                // Datos del recien nacido
                casoObsRecNac:{
                    Genero: Genero,
                    HrNacimiento: HrNacimiento,
                    Alumbramiento: Alumbramiento,
                    Apgar1: Apgar1,
                    Apgar5: Apgar5,
                    Capurro: Capurro,
                    Peso: Peso,
                    Talla: Talla,
                }
            }});

        return res.json({ cirugia });
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const saveAldreteRec = async (req: any, res: Response) => {
    try {
        const {
            id,
            FrecCard,
            FrecResp,
            TensArte,
            SatO2,
            Muscular,
            Respiracion,
            CirculacionIn,
            Conciencia,
            Coloracion,
            Bromage,
            Nauseas,
            escEVADol
        } = req.body;

        const cirugia = await Cirugias.findOneAndUpdate(
            { _id: id },
            { $push: {
                aldreteRec:{
                    // IN, 15, 30, 45, 60, 90, 120
                    // Frecuencia Cardiaca
                    FrecCard: FrecCard,
                    // Frecuencia Respiratoria
                    FrecResp: FrecResp,
                    // Tension Arterial
                    TensArte: TensArte,
                    // Saturación de O2
                    SatO2: SatO2,
                    // Actividad Muscular
                    Muscular: Muscular,
                    // Respiración
                    Respiracion: Respiracion,
                    // Circulación
                    CirculacionIn: CirculacionIn,
                    // Estado de Conciencia
                    Conciencia: Conciencia,
                    // Coloración
                    Coloracion: Coloracion,
                    // Bromage
                    Bromage: Bromage,
                    // Nauseas/Vomito
                    Nauseas: Nauseas,
                    // Escala de EVA de Dolor
                    escEVADol: escEVADol,
                },
            }}
        );

        return res.json({ cirugia });
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const updateResAnest = async (req: any, res: Response) => {
    try {
        const {
            id,
            CritAldrete
        } = req.body;

        const cirugia = await Cirugias.findOneAndUpdate(
            {_id: id},
            { $addToSet: { CritAldrete: CritAldrete } }
        );

        return res.json({ cirugia });
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Falta probar que funcione correctamente */
export const saveMSVdat = async (req: any, res: Response) => {
    try {
        const {
            id,
            datosMSV
        } = req.body;

        console.log(id, datosMSV);

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
            { _id: id },
            { $addToSet:{ datosMSV: { $each: dataToInsert } } });

        return res.json({ cirugia });
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error al guardar datos del MSV', error
        });
        return res.status(500).json({Error: 'Error al guardar datos del MSV'});
    }
};

export const getCxN = async (req: any, res: Response) => {
    try {
        const { id } = req.params;
        
        const cirugia = await Cirugias.find({ "_id": id })

        return res.json({cirugia})
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });

        return res.status(500).json({Error: 'Error de servidor'});
    }
};