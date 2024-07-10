import { Response } from "express";
import logger from "../logger";
import { Cirugias } from "../models/Cirugias"

export const saveCx = async (req: any, res:Response) => {
    try {
        const { pid,
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
            Estudios,
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
            medicamentosCx,
            relevoCx,
            evCriticoCx,
            datosMSV,
            notaPA,
            signVitEgQx,
            casoObsRecNac_NumProd,
            casoObsRecNac,
            notaEval_Obs,
            aldreteRec,
            // CritAldrete,// Checar como se pone
            altaRec,
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
            antPersPat:{
                Alergias: antPersPat[0].Alergias,
                Quirurgicos: antPersPat[0].Quirurgicos,
                Endocrinologicos: antPersPat[0].Endocrinologicos,
                Urologicos: antPersPat[0].Urologicos,
                Traumaticos: antPersPat[0].Traumaticos,
                Ortopedicos: antPersPat[0].Ortopedicos,
                Transfusiones: antPersPat[0].Transfusiones,
                CompAnestPrev: antPersPat[0].CompAnestPrev,
                EstadoPsiq: antPersPat[0].EstadoPsiq,
                MedActual: antPersPat[0].MedActual,
            },
            antPersNoPat:{
                HrsAyuno: antPersNoPat[0].HrsAyuno,
                Tabaquismo: antPersNoPat[0].Tabaquismo,
                Etilismo: antPersNoPat[0].Etilismo,
                Adicciones: antPersNoPat[0].Adicciones,
                Inmunizaciones: antPersNoPat[0].Inmunizaciones,
                AntImportQx: antPersNoPat[0].AntImportQx,
            },
            sigVit:{
                Temperatura: sigVit[0].Temperatura,
                FrecCardiaca: sigVit[0].FrecCardiaca,
                FrecRespiratoria: sigVit[0].FrecRespiratoria,
                Peso: sigVit[0].Peso,
                Talla: sigVit[0].Talla,
                IMC: sigVit[0].IMC,
                TensnArt: sigVit[0].TensnArt,
                SatOx: sigVit[0].SatOx,
            },
            expFis:{
                Cabeza: expFis[0].Cabeza,
                Cuello: expFis[0].Cuello,
                Respiratorio: expFis[0].Respiratorio,
                CardioVasc: expFis[0].CardioVasc,
                Hipertension: expFis[0].Hipertension,
                Abdomen: expFis[0].Abdomen,
                GenUr: expFis[0].GenUr,
                MuscEsq: expFis[0].MuscEsq,
                Neuro: expFis[0].Neuro,
                PielFaneras: expFis[0].PielFaneras,
            },
            viaAerea:{
                Mallampati: viaAerea[0].Mallampati,
                PatilAldreti: viaAerea[0].PatilAldreti,
                AperturaBucal: viaAerea[0].AperturaBucal,
                Distancia: viaAerea[0].Distancia,
                Protusion: viaAerea[0].Protusion,
                Ipid: viaAerea[0].Ipid,
                Glasgow: viaAerea[0].Glasgow,
                NYHA: viaAerea[0].NYHA,
                Goldman: viaAerea[0].Goldman,
                RiesgoTrombosis: viaAerea[0].RiesgoTrombosis,
                ClasificacionASA: viaAerea[0].ClasificacionASA,
                TipoCirugia: viaAerea[0].TipoCirugia,
                RiesgoAnestesico: viaAerea[0].RiesgoAnestesico,
            },
            Estudios: {
                estudio: Estudios[0].estudio,
                especifEstudio: Estudios[0].especifEstudio,
            },
            perfilBioQ:{
                FechaRealizacion: perfilBioQ[0].FechaRealizacion,
                GrupoSanguineo: perfilBioQ[0].GrupoSanguineo,
                Hemoglobina: perfilBioQ[0].Hemoglobina,
                Hematocrito: perfilBioQ[0].Hematocrito,
                Plaquetas: perfilBioQ[0].Plaquetas,
                Leutocitos: perfilBioQ[0].Leutocitos,
                TP: perfilBioQ[0].TP,
                TT: perfilBioQ[0].TT,
                TPT: perfilBioQ[0].TPT,
                INR: perfilBioQ[0].INR,
                Glucosa: perfilBioQ[0].Glucosa,
                Creatinina: perfilBioQ[0].Creatinina,
                Urea: perfilBioQ[0].Urea,
                Sodio: perfilBioQ[0].Sodio,
                Potasio: perfilBioQ[0].Potasio,
                Cloro: perfilBioQ[0].Cloro,
                Calcio: perfilBioQ[0].Calcio,
                Magnesio: perfilBioQ[0].Magnesio,
                BilirrubinaDirecta: perfilBioQ[0].BilirrubinaDirecta,
                BilirrubinaIndirecta: perfilBioQ[0].BilirrubinaIndirecta,
                BilirrubinaTotal: perfilBioQ[0].BilirrubinaTotal,
                Lipasa: perfilBioQ[0].Lipasa,
                Amilasa: perfilBioQ[0].Amilasa,
                Otros: perfilBioQ[0].Otros,
            },
            pos_Cuidados:{
                AccesoVenoso: pos_Cuidados[0].AccesoVenoso,
                PosicionPaciente: pos_Cuidados[0].PosicionPaciente,
                PosicionBrazos: pos_Cuidados[0].PosicionBrazos,
                Torniquete: pos_Cuidados[0].Torniquete,
                AplicacionTorniquete: pos_Cuidados[0].AplicacionTorniquete,
                Sitio: pos_Cuidados[0].Sitio,
                TiempoIsquemia: pos_Cuidados[0].TiempoIsquemia,
                ProteccionOjos: pos_Cuidados[0].ProteccionOjos,
                ProtecProminencias: pos_Cuidados[0].ProtecProminencias,
                TecnicaAnestesica: pos_Cuidados[0].TecnicaAnestesica,
                Premedicacion: pos_Cuidados[0].Premedicacion,
                EspPremedicacion: pos_Cuidados[0].EspPremedicacion,
                Monitoreo: pos_Cuidados[0].Monitoreo,
            },
            sedacion:{
                Via: sedacion[0].Via,
                Opcion: sedacion[0].Opcion,
                Observaciones: sedacion[0].Observaciones,
                Medicamentos: sedacion[0].Medicamentos,
            },
            regional:{
                Tipo: regional[0].Tipo,
                TipoAguja: regional[0].TipoAguja,
                Nivel: regional[0].Nivel,
                CalibreAguja: regional[0].CalibreAguja,
                Cateter: regional[0].Cateter,
                OrientacionCateter: regional[0].OrientacionCateter,
                ProbDificulNeuro: regional[0].ProbDificulNeuro,
                EspDificultadesNeuro: regional[0].EspDificultadesNeuro,
                Sitio: regional[0].Sitio,
                Opcion: regional[0].Opcion,
                EspSitio: regional[0].EspSitio,
                AnestesicoUtilizado: regional[0].AnestesicoUtilizado,
                EspAnestesico: regional[0].EspAnestesico,
                ProbDificulPlexo: regional[0].ProbDificulPlexo,
                EspDificulPlexo: regional[0].EspDificulPlexo,
                Ultrasonido: regional[0].Ultrasonido,
                EspUltrasonido: regional[0].EspUltrasonido,
                Neuroestimulador: regional[0].Neuroestimulador,
                EspNeuroestimulador: regional[0].EspNeuroestimulador,
                ProbComplicaciones: regional[0].ProbComplicaciones,
                EspDificEquipo: regional[0].EspDificEquipo,
            },
            anestLocal:{
                SitioAnestesiaL: anestLocal[0].SitioAnestesiaL,
                AnestesicoUtilizado: anestLocal[0].AnestesicoUtilizado,
                Especificar: anestLocal[0].Especificar,
            },
            anestGral:{
                intb_Induccion: anestGral[0].intb_Induccion,
                intb_Tubo: anestGral[0].intb_Tubo,
                intb_NumeroTubo: anestGral[0].intb_NumeroTubo,
                intb_TipoCanula: anestGral[0].intb_TipoCanula,
                intb_Globo: anestGral[0].intb_Globo,
                intb_Presion: anestGral[0].intb_Presion,
                intb_DifTecnicasIntubacion: anestGral[0].intb_DifTecnicasIntubacion,
                intb_EspDifTecIntubacion: anestGral[0].intb_EspDifTecIntubacion,
                supragl_DispositivosSupro: anestGral[0].supragl_DispositivosSupro,
                supragl_Calibre: anestGral[0].supragl_Calibre,
                supragl_Complicaciones: anestGral[0].supragl_Complicaciones,
                supragl_EspComplicaciones: anestGral[0].supragl_EspComplicaciones,
                otrosDisp: anestGral[0].otrosDisp,
                espOtrosDisp: anestGral[0].espOtrosDisp,
            },
            obsNotaPre,
            balancesParciales: {
                horaBalance: balancesParciales[0].horaBalance,
                ingresos: balancesParciales[0].ingresos,
                egresos: balancesParciales[0].egresos,
                balanceP: balancesParciales[0].balanceP,
            },
            balanceTotal,
            balIng:{
                solHartman: balIng[0].solHartman,
                solFisio: balIng[0].solFisio,
                glucosados: balIng[0].glucosados,
                gelatinas: balIng[0].gelatinas,
                almidones: balIng[0].almidones,
                albuminas: balIng[0].albuminas,
                paqGlobular: balIng[0].paqGlobular,
                plasmas: balIng[0].plasmas,
                plaquetas: balIng[0].plaquetas,
                crioprecipitados: balIng[0].crioprecipitados,
                factor_VII: balIng[0].factor_VII,
                factor_VIII: balIng[0].factor_VIII,
                otrosIngresos: balIng[0].otrosIngresos,
            },
            balEgresos:{
                liqAscitis: balEgresos[0].liqAscitis,
                sangradoAprox: balEgresos[0].sangradoAprox,
                uresis: balEgresos[0].uresis,
                expoQX: balEgresos[0].expoQX,
                reqBasales: balEgresos[0].reqBasales,
                ayuno: balEgresos[0].ayuno,
                otrosEgresos: balEgresos[0].otrosEgresos,
            },
            datosVentilador: {
                modosVentilacion: datosVentilador[0].modosVentilacion,
                peep: datosVentilador[0].peep,
                vt: datosVentilador[0].vt,
                frecResp: datosVentilador[0].frecResp,
                IE: datosVentilador[0].IE,
                PLimite: datosVentilador[0].PLimite,
                Hr: datosVentilador[0].Hr,
            },
            tiemposQX: {
                ingresoQX: tiemposQX[0].ingresoQX,
                inicioAn: tiemposQX[0].inicioAn,
                inicioCx: tiemposQX[0].inicioCx,
                finCx: tiemposQX[0].finCx,
                finAn: tiemposQX[0].finAn,
                egresoQx: tiemposQX[0].egresoQx,
            },
            medicamentosCx: {
                tipoMed: medicamentosCx[0].tipoMed,
                medicamento: medicamentosCx[0].medicamento,
                dosisMed: medicamentosCx[0].dosisMed,
                unidadMed: medicamentosCx[0].unidadMed,
                viaMed: medicamentosCx[0].viaMed,
                horaInicioMed: medicamentosCx[0].horaInicioMed,
                horaFinalMed: medicamentosCx[0].horaFinalMed,
                observacionesMed: medicamentosCx[0].observacionesMed,
                valorGrafica: medicamentosCx[0].valorGrafica,
            },
            relevoCx: {
                horaRelevo: relevoCx[0].horaRelevo,
                tipoRel: relevoCx[0].tipoRel,
                matriculaRel: relevoCx[0].matriculaRel,
                anestesiologoRel: relevoCx[0].anestesiologoRel,
                observacionesRel: relevoCx[0].observacionesRel,
                valorGraficaRel: relevoCx[0].valorGraficaRel
            },
            evCriticoCx: {
                horaEvento: evCriticoCx[0].horaEvento,
                tipoEve: evCriticoCx[0].tipoEve,
                detalleEvento: evCriticoCx[0].detalleEvento,
                valorGraficaEv: evCriticoCx[0].valorGraficaEv
            },
            datosMSV: {/* Debo revisar por que este no se modifico */
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
            notaPA:{
                TecAnestFinal: notaPA[0].TecAnestFinal,
                Intubacion: notaPA[0].Intubacion,
                NotaPostAnest: notaPA[0].NotaPostAnest,
            },
            signVitEgQx:{
                TA: signVitEgQx[0].TA,
                FC: signVitEgQx[0].FC,
                FR: signVitEgQx[0].FR,
                Temperatura: signVitEgQx[0].Temperatura,
                Pulso: signVitEgQx[0].Pulso,
                SpO2: signVitEgQx[0].SpO2,
                EgresoPac: signVitEgQx[0].EgresoPac,
            },
            casoObsRecNac_NumProd,
            casoObsRecNac:{
                Genero: casoObsRecNac[0].Genero,
                HrNacimiento: casoObsRecNac[0].HrNacimiento,
                Alumbramiento: casoObsRecNac[0].Alumbramiento,
                Apgar1: casoObsRecNac[0].Apgar1,
                Apgar5: casoObsRecNac[0].Apgar5,
                Capurro: casoObsRecNac[0].Capurro,
                Peso: casoObsRecNac[0].Peso,
                Talla: casoObsRecNac[0].Talla,
            },
            notaEval_Obs,
            aldreteRec:{
                // IN, 15, 30, 45, 60, 90, 120
                // Frecuencia Cardiaca
                FrecCard: aldreteRec[0].FrecCard,
                // Frecuencia Respiratoria
                FrecResp: aldreteRec[0].FrecResp,
                // Tension Arterial
                TensArte: aldreteRec[0].TensArte,
                // Saturación de O2
                SatO2: aldreteRec[0].SatO2,
                // Actividad Muscular
                Muscular: aldreteRec[0].Muscular,
                // Respiración
                Respiracion: aldreteRec[0].Respiracion,
                // Circulación
                CirculacionIn: aldreteRec[0].CirculacionIn,
                // Estado de Conciencia
                Conciencia: aldreteRec[0].Conciencia,
                // Coloración
                Coloracion: aldreteRec[0].Coloracion,
                // Bromage
                Bromage: aldreteRec[0].Bromage,
                // Nauseas/Vomito
                Nauseas: aldreteRec[0].Nauseas,
                // Escala de EVA de Dolor
                escEVADol: aldreteRec[0].escEVADol,
            },
            // 0, 15, 30, 45, 60, 90, 120
            CritAldrete: [String],// Revisarlo
            altaRec:{
                CalifAldrete: altaRec[0].CalifAldrete,
                Obs: altaRec[0].Obs,
                FechaAltaRec: altaRec[0].FechaAltaRec,
                HrAltaRec: altaRec[0].HrAltaRec,
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

/* Los metodos ya deben ser update */
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

export const saveMedicamentos = async (req: any, res: Response) => {
    try {
        const {
            pid,
            tipoMed, medicamento, dosisMed,
            unidadMed, viaMed, horaInicioMed,
            horaFinalMed, observacionesMed, valorGrafica
        } = req.body

        console.log(pid,
            tipoMed, medicamento, dosisMed,
            unidadMed, viaMed, horaInicioMed,
            horaFinalMed, observacionesMed, valorGrafica);

        const cirugia  = await Cirugias.findOneAndUpdate(
            { pid: pid },
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
        const { pid,
                // Datos relevos
                horaRelevo, tipoRel, matriculaRel,
                anestesiologoRel, observacionesRel
              } = req.body;

        const cirugia = await Cirugias.findOneAndUpdate(
            { pid: pid },
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
        const { pid,
                // Datos relevos
                horaEvento, tipoEve,
                detalleEvento, valorGraficaEv
              } = req.body;

        const cirugia = await Cirugias.findOneAndUpdate(
            { pid: pid },
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
            pid,
            Genero, HrNacimiento,
            Alumbramiento, Apgar1,
            Apgar5, Capurro,
            Peso, Talla
        } = req.body;

        const cirugia = await Cirugias.findOneAndUpdate(
            { pid: pid },
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