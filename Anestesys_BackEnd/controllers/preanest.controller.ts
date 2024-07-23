import { Response } from "express";
import { PreIdPacientes, PreIdPacientesCx, PreValoracion, ValEstudios, PrePlan, PreNota, PreCatalogoCIE9, PreCatalogoCIE10 } from "../models/PreAnestesico";
import { MenuTrans } from "../models/TransAnestesico";
import { PostRecupera, PostNotaPA } from "../models/PostAnestesico";
import logger from '../logger';

import { FichaIds } from "../models/Cirugias"

/********************************************************************/
/***************************  ID PACIENTE ***************************/
/********************************************************************/
/* Función para listar los expedientes */
export const getExpedientes = async (req: any, res: Response) =>{
    try {
        const {numExpediente} = req.params

        const regex = new RegExp('^' + numExpediente, 'i');

        const expedientes = await PreIdPacientes.find({numExpediente: regex}) 
        return res.json({expedientes});
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Función para listar los datos de CIE-10 */
export const getCIE10 = async (req: any, res: Response) =>{
    try {
        const {nombre} = req.params

        // Crea una expresión regular con RegExp para buscar el nombre que comienza con la palabra proporcionada
        const regex = new RegExp('^' + nombre, 'i');

        const cie10 = await PreCatalogoCIE10.find({nombre: regex}) 
        return res.json({cie10});
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Función para listar los datos de CIE-9 */
export const getCIE9 = async (req: any, res: Response) =>{
    try {
        const {nombre} = req.params

        const regex = new RegExp('^' + nombre, 'i');

        const cie9 = await PreCatalogoCIE9.find({nombre: regex}) 
        return res.json({cie9});
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Función para listar las cirugías */
export const getCirugias = async (req: any, res: Response) =>{
    try {
        const {id} = req.params;

        const pacientes = await PreIdPacientes.find({numExpediente: id})
        const pacientesCx = await PreIdPacientesCx.find({pid: pacientes[0].id});

        return res.json({pacientes, pacientesCx});
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const getPDFData = async (req: any, res: Response) =>{
    try {
        const {id} = req.params;

        const pacientesCx = await PreIdPacientesCx.find({ "_id": id });
        const pacientesVal = await PreValoracion.find({cxid: pacientesCx[0].id});
        const pacientesEstu = await ValEstudios.find({vid: pacientesVal[0].id});
        const pacientesPlan = await PrePlan.find({cxid: pacientesCx[0].id});
        const pacientesNotaPre = await PreNota.find({cxid: pacientesCx[0].id});

        const pacienteTrans = await MenuTrans.find({cxid: pacientesCx[0].id})
        
        const pacientesNotaPost = await PostNotaPA.find({cxid: pacientesCx[0].id});
        const pacientesRecu = await PostRecupera.find({cxid: pacientesCx[0].id});

        return res.json({pacientesCx, pacientesVal, pacientesEstu, pacientesPlan, pacientesNotaPre, pacienteTrans, pacientesNotaPost, pacientesRecu});
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Funcion para la busqueda de un paciente. Debe estar asociado al usuario */
export const getPaciente = async (req: any, res: Response) => {
    try {
        const {id} = req.params;

        const pacientes = await PreIdPacientes.find({numExpediente: id});        
        return res.json({pacientes});
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Funcion para registrar la ficha ID de un paciente */
export const createPaciente = async (req: any, res: Response) => {
    try {
        const { 
            /* Información principal del paciente */
            numExpediente, nomPaciente,
            /* Información adicional del paciente */
            fechaNPaciente, edadPaciente,
            generoPaciente,
            /* Datos Demográficos */
            nacionalidad, CURP, folioID, estNacimiento,
            estResidencia, alcaldia, colonia, codigoPostal
        } = req.body;        
        
        let expediente = await FichaIds.findOne({numExpediente});

        if(expediente) throw {code: 11000};    

        const paciente = new FichaIds({
            numExpediente, nomPaciente, uid: req.uid,
            fechaNPaciente, edadPaciente, generoPaciente,
            /* Datos Demográficos */
            nacionalidad, CURP, folioID, estNacimiento,
            estResidencia, alcaldia, colonia, codigoPostal });

        await paciente.save();

        console.log("Este es el ID del paciente: " + paciente._id);
        return res.json({ paciente });
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
};

/* Funcion de actualización de la ficha ID de un paciente */
export const updatePaciente = async (req: any, res: Response) => {
    try {
        const { id } = req.params;
        const updVar = req.body;

        const paciente = await PreIdPacientes.findByIdAndUpdate( id, { nomPaciente: updVar.nomPaciente,
                                                                    fechaNPaciente: updVar.fechaNPaciente,
                                                                    edadPaciente: updVar.edadPaciente,
                                                                    generoPaciente: updVar.generoPaciente,
                                                                    nacionalidad: updVar.nacionalidad,
                                                                    CURP: updVar.CURP,
                                                                    folioID: updVar.folioID,
                                                                    estNacimiento: updVar.estNacimiento,
                                                                    estResidencia: updVar.estResidencia,
                                                                    alcaldia: updVar.alcaldia,
                                                                    colonia: updVar.colonia,
                                                                    codigoPostal: updVar.codigoPostal} );
        
        const infoCx = await PreIdPacientesCx.findOneAndUpdate({ pid: paciente?._id }, { numEpisodio: updVar.numEpisodio,
                                                                                      habitacionPaciente: updVar.habitacionPaciente,
                                                                                      fechaInPaciente: updVar.fechaInPaciente,
                                                                                      /* Datos de cirugía */
                                                                                      diagnostico: updVar.diagnostico,
                                                                                      tipoCx: updVar.tipoCx,
                                                                                      /* Datos CIE */
                                                                                      cie9: updVar.cie9,
                                                                                      cie10: updVar.cie10,
                                                                                      /* Informacion procedimiento */
                                                                                      cirugia: updVar.cirugia,
                                                                                      fechaCx: updVar.fechaCx,
                                                                                      hrCx: updVar.hrCx,
                                                                                      /* Informacion Médicos */
                                                                                      cirujano: updVar.cirujano,
                                                                                      anestesiologo: updVar.anestesiologo,
                                                                                      anestesiologoVPA: updVar.anestesiologoVPA,
                                                                                      residenteAnestesia: updVar.residenteAnestesia });
        
        return res.json({ paciente, infoCx });
    } catch (error) {        
        if (error.kind === "ObjectId"){
            logger.log({
                level: 'error',
                message: 'Formato de ID incorrecto', error
            });
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
                
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ error: "Error de servidor" });
    }
};

/* Funcion para crear un nuevo registro de un paciente */
export const createNuevoRegistroPaciente = async (req: any, res: Response) => {
    try {
        const { 
                /* Información adicional del paciente */
                numEpisodio,
                pid,
                habitacionPaciente,
                fechaInPaciente, diagnostico, tipoCx,
                /* Datos CIE */
                cie10, cie9, 
                /* Informacion Médicos */
                cirugia, fechaCx, hrCx,
                /* Informacion Médicos */
                cirujano, anestesiologo, anestesiologoVPA,
                residenteAnestesia} = req.body;

        const infoCx = new PreIdPacientesCx({ /* Información adicional  del paciente */
                                           numEpisodio, pid,  habitacionPaciente,
                                           fechaInPaciente, diagnostico, tipoCx,
                                           /* Datos CIE */
                                           cie10, cie9, 
                                           /* Informacion Médicos */
                                           cirugia, fechaCx, hrCx,
                                           /* Informacion Médicos */
                                           cirujano, anestesiologo, anestesiologoVPA,
                                           residenteAnestesia });

        await infoCx.save();

        return res.json({ infoCx });
    } catch (error) {
        if (error.kind === "ObjectId"){
            logger.log({
                level: 'error',
                message: 'Formato de ID incorrecto', error
            });
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
               
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ error: "Error de servidor" });
    }
};

/* Funcion de actualización de la ficha ID de un paciente */
// export const updateAnteriorPaciente = async (req: any, res: Response) => {
//     try {
//         const { id } = req.params;
//         const updVar = req.body;

//         const paciente = await PreIdPacientes.findByIdAndUpdate( id, {fechaNPaciente: updVar.fechaNPaciente,
//                                                                     edadPaciente: updVar.edadPaciente,
//                                                                     generoPaciente: updVar.generoPaciente} );            
        
//         return res.json({ paciente });
//     } catch (error) {
//         if (error.kind === "ObjectId"){
//             logger.log({
//                 level: 'error',
//                 message: 'Formato de ID incorrecto', error
//             });
//             return res.status(403).json({ error: "Formato de ID incorrecto" });
//         }
                
//         logger.log({
//             level: 'error',
//             message: 'Error de servidor', error
//         });
//         return res.status(500).json({ error: "Error de servidor" });
//     }
// };

/* Funcion de actualización del nuevo registro de la ficha ID de un paciente */
export const updateNuevoRegistroPaciente = async (req: any, res: Response) => {
    try {
        const { id } = req.params;
        const updVar = req.body;
        
        const infoCx = await PreIdPacientesCx.findByIdAndUpdate(id , { numEpisodio: updVar.numEpisodio,
                                                                                      habitacionPaciente: updVar.habitacionPaciente,
                                                                                      fechaInPaciente: updVar.fechaInPaciente,
                                                                                      /* Datos de cirugía */
                                                                                      diagnostico: updVar.diagnostico,
                                                                                      tipoCx: updVar.tipoCx,
                                                                                      /* Datos CIE */
                                                                                      cie9: updVar.cie9,
                                                                                      cie10: updVar.cie10,
                                                                                      /* Informacion procedimiento */
                                                                                      cirugia: updVar.cirugia,
                                                                                      fechaCx: updVar.fechaCx,
                                                                                      hrCx: updVar.hrCx,
                                                                                      /* Informacion Médicos */
                                                                                      cirujano: updVar.cirujano,
                                                                                      anestesiologo: updVar.anestesiologo,
                                                                                      anestesiologoVPA: updVar.anestesiologoVPA,
                                                                                      residenteAnestesia: updVar.residenteAnestesia });
                                                                                          
        return res.json({infoCx });
    } catch (error) {        
        if (error.kind === "ObjectId"){
            logger.log({
                level: 'error',
                message: 'Formato de ID incorrecto', error
            });
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
                
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ error: "Error de servidor" });
    }
};
/********************************************************************/
/**************************** Valoración ****************************/
/********************************************************************/
/* Función de registro de valoración pre anetésica */
export const savePreAntecedentes = async (req: any, res: Response) => {
    try {
        const { pid, cxid,
                // Patológicos
                antPersPat_Alergias, antPersPat_Quirurgicos,
                antPersPat_Endocrinologicos, antPersPat_Urologicos,
                antPersPat_Traumaticos, antPersPat_Ortopedicos,
                antPersPat_Transfusiones, antPersPat_CompAnestPrev,
                antPersPat_EstadoPsiq, antPersPat_MedActual,
                // No Patológicos
                antPersNoPat_HrsAyuno, antPersNoPat_Tabaquismo,
                antPersNoPat_Etilismo, antPersNoPat_Adicciones,
                antPersNoPat_Inmunizaciones, antPersNoPat_AntImportQx,
                // Exploración Física
                sigVit_Edad, sigVit_Temperatura, sigVit_FrecuCardiaca,
                sigVit_FrecuRespiratoria, sigVit_Peso, sigVit_Talla,
                sigVit_IMC, sigVit_TensionArterial, sigVit_SaturacionOxigeno,
                // Perfil Bioquímico
                perfilBioQ_FechaRealizacion, perfilBioQ_GrupoSanguineo,
                perfilBioQ_Hemoglobina, perfilBioQ_Hematocrito, perfilBioQ_Plaquetas,
                perfilBioQ_Leutocitos, perfilBioQ_TP, perfilBioQ_TT,
                perfilBioQ_TPT, perfilBioQ_INR, perfilBioQ_Glucosa,
                perfilBioQ_Creatinina, perfilBioQ_Urea, perfilBioQ_Sodio,
                perfilBioQ_Potasio, perfilBioQ_Cloro, perfilBioQ_Calcio,
                perfilBioQ_Magnesio, perfilBioQ_BilirrubinaDirecta,
                perfilBioQ_BilirrubinaIndirecta, perfilBioQ_BilirrubinaTotal,
                perfilBioQ_Lipasa, perfilBioQ_Amilasa, perfilBioQ_Otros,
                // Valoración Vía Aérea y Otras Escalas
                viaAerea_Mallampati, viaAerea_PatilAldreti, viaAerea_AperturaBucal,
                viaAerea_Distancia, viaAerea_Protusion, viaAerea_Ipid, viaAerea_Glasgow,
                viaAerea_NYHA, viaAerea_Goldman, viaAerea_RiesgoTrombosis,
                viaAerea_ClasificacionASA, viaAerea_TipoCirugia, viaAerea_RiesgoAnestesico,
                // Valoración de Aparatos y Sistemas
                expFis_VASCabeza, expFis_VASCuello, expFis_VASRespiratorio,
                expFis_VASCardioVasc, expFis_VASHipertension, expFis_VASAbdomen,
                expFis_VASGenUr, expFis_VASMuscEsq, expFis_VASNeuro, expFis_VASPielFaneras,
            } = req.body;

        const preval = new PreValoracion({
            pid: pid, cxid: cxid,
            /* Antecedentes */
            // Personales Patológicos
            antPersPat_Alergias: antPersPat_Alergias,
            antPersPat_Quirurgicos: antPersPat_Quirurgicos,
            antPersPat_Endocrinologicos: antPersPat_Endocrinologicos,
            antPersPat_Urologicos: antPersPat_Urologicos,
            antPersPat_Traumaticos: antPersPat_Traumaticos,
            antPersPat_Ortopedicos: antPersPat_Ortopedicos,
            antPersPat_Transfusiones: antPersPat_Transfusiones,
            antPersPat_CompAnestPrev: antPersPat_CompAnestPrev,
            antPersPat_EstadoPsiq: antPersPat_EstadoPsiq,
            antPersPat_MedActual:antPersPat_MedActual ,
            //Personales No Patológicos
            antPersNoPat_HrsAyuno: antPersNoPat_HrsAyuno ,
            antPersNoPat_Tabaquismo: antPersNoPat_Tabaquismo ,
            antPersNoPat_Etilismo: antPersNoPat_Etilismo ,
            antPersNoPat_Adicciones: antPersNoPat_Adicciones ,
            antPersNoPat_Inmunizaciones: antPersNoPat_Inmunizaciones ,
            antPersNoPat_AntImportQx: antPersNoPat_AntImportQx ,
            /* Exploración Física */
            //Signos Vitales
            sigVit_Edad:sigVit_Edad,
            sigVit_Temperatura:sigVit_Temperatura,
            sigVit_FrecuCardiaca:sigVit_FrecuCardiaca,
            sigVit_FrecuRespiratoria:sigVit_FrecuRespiratoria,
            sigVit_Peso:sigVit_Peso,
            sigVit_Talla:sigVit_Talla,
            sigVit_IMC:sigVit_IMC,
            sigVit_TensionArterial:sigVit_TensionArterial,
            sigVit_SaturacionOxigeno:sigVit_SaturacionOxigeno,
            // Vía Aérea
            viaAerea_Mallampati: viaAerea_Mallampati,
            viaAerea_PatilAldreti: viaAerea_PatilAldreti,
            viaAerea_AperturaBucal: viaAerea_AperturaBucal,
            viaAerea_Distancia: viaAerea_Distancia,
            viaAerea_Protusion: viaAerea_Protusion,
            viaAerea_Ipid: viaAerea_Ipid,
            viaAerea_Glasgow: viaAerea_Glasgow,
            viaAerea_NYHA: viaAerea_NYHA,
            viaAerea_Goldman: viaAerea_Goldman,
            viaAerea_RiesgoTrombosis: viaAerea_RiesgoTrombosis,
            viaAerea_ClasificacionASA: viaAerea_ClasificacionASA,
            viaAerea_TipoCirugia: viaAerea_TipoCirugia,
            viaAerea_RiesgoAnestesico: viaAerea_RiesgoAnestesico,
            // Laboratorio
            perfilBioQ_FechaRealizacion: perfilBioQ_FechaRealizacion,
            perfilBioQ_GrupoSanguineo: perfilBioQ_GrupoSanguineo,
            perfilBioQ_Hemoglobina: perfilBioQ_Hemoglobina,
            perfilBioQ_Hematocrito: perfilBioQ_Hematocrito,
            perfilBioQ_Plaquetas: perfilBioQ_Plaquetas,
            perfilBioQ_Leutocitos: perfilBioQ_Leutocitos,
            perfilBioQ_TP: perfilBioQ_TP,
            perfilBioQ_TT: perfilBioQ_TT,
            perfilBioQ_TPT: perfilBioQ_TPT,
            perfilBioQ_INR: perfilBioQ_INR,
            perfilBioQ_Glucosa: perfilBioQ_Glucosa,
            perfilBioQ_Creatinina: perfilBioQ_Creatinina,
            perfilBioQ_Urea: perfilBioQ_Urea,
            perfilBioQ_Sodio: perfilBioQ_Sodio,
            perfilBioQ_Potasio: perfilBioQ_Potasio,
            perfilBioQ_Cloro: perfilBioQ_Cloro,
            perfilBioQ_Calcio: perfilBioQ_Calcio,
            perfilBioQ_Magnesio: perfilBioQ_Magnesio,
            perfilBioQ_BilirrubinaDirecta: perfilBioQ_BilirrubinaDirecta,
            perfilBioQ_BilirrubinaIndirecta: perfilBioQ_BilirrubinaIndirecta,
            perfilBioQ_BilirrubinaTotal: perfilBioQ_BilirrubinaTotal,
            perfilBioQ_Lipasa: perfilBioQ_Lipasa,
            perfilBioQ_Amilasa: perfilBioQ_Amilasa,
            perfilBioQ_Otros: perfilBioQ_Otros,
            // Valoración de Aparatos y Sistemas
            expFis_VASCabeza: expFis_VASCabeza,
            expFis_VASCuello: expFis_VASCuello,
            expFis_VASRespiratorio: expFis_VASRespiratorio,
            expFis_VASCardioVasc: expFis_VASCardioVasc,
            expFis_VASHipertension: expFis_VASHipertension,
            expFis_VASAbdomen: expFis_VASAbdomen,
            expFis_VASGenUr: expFis_VASGenUr,
            expFis_VASMuscEsq: expFis_VASMuscEsq,
            expFis_VASNeuro: expFis_VASNeuro,
            expFis_VASPielFaneras: expFis_VASPielFaneras,
        });

        await preval.save();

        return res.json({ preval });
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const updatePreAntecedentes = async (req: any, res: Response) => {
    try {
        const { id } = req.params;
        const { // Patológicos
                antPersPat_Alergias, antPersPat_Quirurgicos,
                antPersPat_Endocrinologicos, antPersPat_Urologicos,
                antPersPat_Traumaticos, antPersPat_Ortopedicos,
                antPersPat_Transfusiones, antPersPat_CompAnestPrev,
                antPersPat_EstadoPsiq, antPersPat_MedActual,
                // No Patológicos
                antPersNoPat_HrsAyuno, antPersNoPat_Tabaquismo,
                antPersNoPat_Etilismo, antPersNoPat_Adicciones,
                antPersNoPat_Inmunizaciones, antPersNoPat_AntImportQx,
                // Exploración Física
                sigVit_Edad, sigVit_Temperatura, sigVit_FrecuCardiaca,
                sigVit_FrecuRespiratoria, sigVit_Peso, sigVit_Talla,
                sigVit_IMC, sigVit_TensionArterial, sigVit_SaturacionOxigeno,
                // Perfil Bioquímico
                perfilBioQ_FechaRealizacion, perfilBioQ_GrupoSanguineo,
                perfilBioQ_Hemoglobina, perfilBioQ_Hematocrito, perfilBioQ_Plaquetas,
                perfilBioQ_Leutocitos, perfilBioQ_TP, perfilBioQ_TT,
                perfilBioQ_TPT, perfilBioQ_INR, perfilBioQ_Glucosa,
                perfilBioQ_Creatinina, perfilBioQ_Urea, perfilBioQ_Sodio,
                perfilBioQ_Potasio, perfilBioQ_Cloro, perfilBioQ_Calcio,
                perfilBioQ_Magnesio, perfilBioQ_BilirrubinaDirecta,
                perfilBioQ_BilirrubinaIndirecta, perfilBioQ_BilirrubinaTotal,
                perfilBioQ_Lipasa, perfilBioQ_Amilasa, perfilBioQ_Otros,
                // Valoración Vía Aérea y Otras Escalas
                viaAerea_Mallampati, viaAerea_PatilAldreti, viaAerea_AperturaBucal,
                viaAerea_Distancia, viaAerea_Protusion, viaAerea_Ipid, viaAerea_Glasgow,
                viaAerea_NYHA, viaAerea_Goldman, viaAerea_RiesgoTrombosis,
                viaAerea_ClasificacionASA, viaAerea_TipoCirugia, viaAerea_RiesgoAnestesico,
                // Valoración de Aparatos y Sistemas
                expFis_VASCabeza, expFis_VASCuello, expFis_VASRespiratorio,
                expFis_VASCardioVasc, expFis_VASHipertension, expFis_VASAbdomen,
                expFis_VASGenUr, expFis_VASMuscEsq, expFis_VASNeuro, expFis_VASPielFaneras,
        } = req.body;
        
        const preval = await PreValoracion.findOneAndUpdate({ pid: id },
                                                     { /* Antecedentes */
                                                       // Personales Patológicos
                                                       antPersPat_Alergias: antPersPat_Alergias,
                                                       antPersPat_Quirurgicos: antPersPat_Quirurgicos,
                                                       antPersPat_Endocrinologicos: antPersPat_Endocrinologicos,
                                                       antPersPat_Urologicos: antPersPat_Urologicos,
                                                       antPersPat_Traumaticos: antPersPat_Traumaticos,
                                                       antPersPat_Ortopedicos: antPersPat_Ortopedicos,
                                                       antPersPat_Transfusiones: antPersPat_Transfusiones,
                                                       antPersPat_CompAnestPrev: antPersPat_CompAnestPrev,
                                                       antPersPat_EstadoPsiq: antPersPat_EstadoPsiq,
                                                       antPersPat_MedActual:antPersPat_MedActual,
                                                       //Personales No Patológicos
                                                       antPersNoPat_HrsAyuno:antPersNoPat_HrsAyuno,
                                                       antPersNoPat_Tabaquismo:antPersNoPat_Tabaquismo,
                                                       antPersNoPat_Etilismo:antPersNoPat_Etilismo,
                                                       antPersNoPat_Adicciones:antPersNoPat_Adicciones,
                                                       antPersNoPat_Inmunizaciones:antPersNoPat_Inmunizaciones,
                                                       antPersNoPat_AntImportQx:antPersNoPat_AntImportQx, 
                                                       //Signos Vitales
                                                       sigVit_Edad:sigVit_Edad,
                                                       sigVit_Temperatura:sigVit_Temperatura,
                                                       sigVit_FrecuCardiaca:sigVit_FrecuCardiaca,
                                                       sigVit_FrecuRespiratoria:sigVit_FrecuRespiratoria,
                                                       sigVit_Peso:sigVit_Peso,
                                                       sigVit_Talla:sigVit_Talla,
                                                       sigVit_IMC:sigVit_IMC,
                                                       sigVit_TensionArterial:sigVit_TensionArterial,
                                                       sigVit_SaturacionOxigeno:sigVit_SaturacionOxigeno,
                                                       //Laboratorio
                                                       perfilBioQ_FechaRealizacion: perfilBioQ_FechaRealizacion,
                                                       perfilBioQ_GrupoSanguineo: perfilBioQ_GrupoSanguineo,
                                                       perfilBioQ_Hemoglobina: perfilBioQ_Hemoglobina,
                                                       perfilBioQ_Hematocrito: perfilBioQ_Hematocrito,
                                                       perfilBioQ_Plaquetas: perfilBioQ_Plaquetas,
                                                       perfilBioQ_Leutocitos: perfilBioQ_Leutocitos,
                                                       perfilBioQ_TP: perfilBioQ_TP,
                                                       perfilBioQ_TT: perfilBioQ_TT,
                                                       perfilBioQ_TPT: perfilBioQ_TPT,
                                                       perfilBioQ_INR: perfilBioQ_INR,
                                                       perfilBioQ_Glucosa: perfilBioQ_Glucosa,
                                                       perfilBioQ_Creatinina: perfilBioQ_Creatinina,
                                                       perfilBioQ_Urea: perfilBioQ_Urea,
                                                       perfilBioQ_Sodio: perfilBioQ_Sodio,
                                                       perfilBioQ_Potasio: perfilBioQ_Potasio,
                                                       perfilBioQ_Cloro: perfilBioQ_Cloro,
                                                       perfilBioQ_Calcio: perfilBioQ_Calcio,
                                                       perfilBioQ_Magnesio: perfilBioQ_Magnesio,
                                                       perfilBioQ_BilirrubinaDirecta: perfilBioQ_BilirrubinaDirecta,
                                                       perfilBioQ_BilirrubinaIndirecta: perfilBioQ_BilirrubinaIndirecta,
                                                       perfilBioQ_BilirrubinaTotal: perfilBioQ_BilirrubinaTotal,
                                                       perfilBioQ_Lipasa: perfilBioQ_Lipasa,
                                                       perfilBioQ_Amilasa: perfilBioQ_Amilasa,
                                                       perfilBioQ_Otros: perfilBioQ_Otros,
                                                       /* Vía Aérea */
                                                       // Valoración de Vía Aérea y Otras Escalas
                                                       viaAerea_Mallampati: viaAerea_Mallampati,
                                                       viaAerea_PatilAldreti: viaAerea_PatilAldreti,
                                                       viaAerea_AperturaBucal: viaAerea_AperturaBucal,
                                                       viaAerea_Distancia: viaAerea_Distancia,
                                                       viaAerea_Protusion: viaAerea_Protusion,
                                                       viaAerea_Ipid: viaAerea_Ipid,
                                                       viaAerea_Glasgow: viaAerea_Glasgow,
                                                       viaAerea_NYHA: viaAerea_NYHA,
                                                       viaAerea_Goldman: viaAerea_Goldman,
                                                       viaAerea_RiesgoTrombosis: viaAerea_RiesgoTrombosis,
                                                       viaAerea_ClasificacionASA: viaAerea_ClasificacionASA,
                                                       viaAerea_TipoCirugia: viaAerea_TipoCirugia,
                                                       viaAerea_RiesgoAnestesico: viaAerea_RiesgoAnestesico,
                                                       // Valoración de Aparatos y Sistemas
                                                       expFis_VASCabeza: expFis_VASCabeza,
                                                       expFis_VASCuello: expFis_VASCuello,
                                                       expFis_VASRespiratorio: expFis_VASRespiratorio,
                                                       expFis_VASCardioVasc: expFis_VASCardioVasc,
                                                       expFis_VASHipertension: expFis_VASHipertension,
                                                       expFis_VASAbdomen: expFis_VASAbdomen,
                                                       expFis_VASGenUr: expFis_VASGenUr,
                                                       expFis_VASMuscEsq: expFis_VASMuscEsq,
                                                       expFis_VASNeuro: expFis_VASNeuro,
                                                       expFis_VASPielFaneras: expFis_VASPielFaneras,
                                                       // Estudios
                                                    });

        return res.json({ preval })
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Función de registro de valoración pre anetésica */
export const saveNuevoPreAntecedentes = async (req: any, res: Response) => {
    try {
        const { pid, cxid,
                // Patológicos
                antPersPat_Alergias, antPersPat_Quirurgicos,
                antPersPat_Endocrinologicos, antPersPat_Urologicos,
                antPersPat_Traumaticos, antPersPat_Ortopedicos,
                antPersPat_Transfusiones, antPersPat_CompAnestPrev,
                antPersPat_EstadoPsiq, antPersPat_MedActual,
                // No Patológicos
                antPersNoPat_HrsAyuno, antPersNoPat_Tabaquismo,
                antPersNoPat_Etilismo, antPersNoPat_Adicciones,
                antPersNoPat_Inmunizaciones, antPersNoPat_AntImportQx,
                // Exploración Física
                sigVit_Edad, sigVit_Temperatura, sigVit_FrecuCardiaca,
                sigVit_FrecuRespiratoria, sigVit_Peso, sigVit_Talla,
                sigVit_IMC, sigVit_TensionArterial, sigVit_SaturacionOxigeno,
                // Perfil Bioquímico
                perfilBioQ_FechaRealizacion, perfilBioQ_GrupoSanguineo,
                perfilBioQ_Hemoglobina, perfilBioQ_Hematocrito, perfilBioQ_Plaquetas,
                perfilBioQ_Leutocitos, perfilBioQ_TP, perfilBioQ_TT,
                perfilBioQ_TPT, perfilBioQ_INR, perfilBioQ_Glucosa,
                perfilBioQ_Creatinina, perfilBioQ_Urea, perfilBioQ_Sodio,
                perfilBioQ_Potasio, perfilBioQ_Cloro, perfilBioQ_Calcio,
                perfilBioQ_Magnesio, perfilBioQ_BilirrubinaDirecta,
                perfilBioQ_BilirrubinaIndirecta, perfilBioQ_BilirrubinaTotal,
                perfilBioQ_Lipasa, perfilBioQ_Amilasa, perfilBioQ_Otros,
                // Valoración Vía Aérea y Otras Escalas
                viaAerea_Mallampati, viaAerea_PatilAldreti, viaAerea_AperturaBucal,
                viaAerea_Distancia, viaAerea_Protusion, viaAerea_Ipid, viaAerea_Glasgow,
                viaAerea_NYHA, viaAerea_Goldman, viaAerea_RiesgoTrombosis,
                viaAerea_ClasificacionASA, viaAerea_TipoCirugia, viaAerea_RiesgoAnestesico,
                // Valoración de Aparatos y Sistemas
                expFis_VASCabeza, expFis_VASCuello, expFis_VASRespiratorio,
                expFis_VASCardioVasc, expFis_VASHipertension, expFis_VASAbdomen,
                expFis_VASGenUr, expFis_VASMuscEsq, expFis_VASNeuro, expFis_VASPielFaneras,
            } = req.body;

        const preval = new PreValoracion({
            pid,
            cxid,
            /* Antecedentes */
            // Personales Patológicos
            antPersPat_Alergias: antPersPat_Alergias,
            antPersPat_Quirurgicos: antPersPat_Quirurgicos,
            antPersPat_Endocrinologicos: antPersPat_Endocrinologicos,
            antPersPat_Urologicos: antPersPat_Urologicos,
            antPersPat_Traumaticos: antPersPat_Traumaticos,
            antPersPat_Ortopedicos: antPersPat_Ortopedicos,
            antPersPat_Transfusiones: antPersPat_Transfusiones,
            antPersPat_CompAnestPrev: antPersPat_CompAnestPrev,
            antPersPat_EstadoPsiq: antPersPat_EstadoPsiq,
            antPersPat_MedActual:antPersPat_MedActual ,
            //Personales No Patológicos
            antPersNoPat_HrsAyuno: antPersNoPat_HrsAyuno ,
            antPersNoPat_Tabaquismo: antPersNoPat_Tabaquismo ,
            antPersNoPat_Etilismo: antPersNoPat_Etilismo ,
            antPersNoPat_Adicciones: antPersNoPat_Adicciones ,
            antPersNoPat_Inmunizaciones: antPersNoPat_Inmunizaciones ,
            antPersNoPat_AntImportQx: antPersNoPat_AntImportQx ,
            /* Exploración Física */
            //Signos Vitales
            sigVit_Edad:sigVit_Edad,
            sigVit_Temperatura:sigVit_Temperatura,
            sigVit_FrecuCardiaca:sigVit_FrecuCardiaca,
            sigVit_FrecuRespiratoria:sigVit_FrecuRespiratoria,
            sigVit_Peso:sigVit_Peso,
            sigVit_Talla:sigVit_Talla,
            sigVit_IMC:sigVit_IMC,
            sigVit_TensionArterial:sigVit_TensionArterial,
            sigVit_SaturacionOxigeno:sigVit_SaturacionOxigeno,
            // Vía Aérea
            viaAerea_Mallampati: viaAerea_Mallampati,
            viaAerea_PatilAldreti: viaAerea_PatilAldreti,
            viaAerea_AperturaBucal: viaAerea_AperturaBucal,
            viaAerea_Distancia: viaAerea_Distancia,
            viaAerea_Protusion: viaAerea_Protusion,
            viaAerea_Ipid: viaAerea_Ipid,
            viaAerea_Glasgow: viaAerea_Glasgow,
            viaAerea_NYHA: viaAerea_NYHA,
            viaAerea_Goldman: viaAerea_Goldman,
            viaAerea_RiesgoTrombosis: viaAerea_RiesgoTrombosis,
            viaAerea_ClasificacionASA: viaAerea_ClasificacionASA,
            viaAerea_TipoCirugia: viaAerea_TipoCirugia,
            viaAerea_RiesgoAnestesico: viaAerea_RiesgoAnestesico,
            // Laboratorio
            perfilBioQ_FechaRealizacion: perfilBioQ_FechaRealizacion,
            perfilBioQ_GrupoSanguineo: perfilBioQ_GrupoSanguineo,
            perfilBioQ_Hemoglobina: perfilBioQ_Hemoglobina,
            perfilBioQ_Hematocrito: perfilBioQ_Hematocrito,
            perfilBioQ_Plaquetas: perfilBioQ_Plaquetas,
            perfilBioQ_Leutocitos: perfilBioQ_Leutocitos,
            perfilBioQ_TP: perfilBioQ_TP,
            perfilBioQ_TT: perfilBioQ_TT,
            perfilBioQ_TPT: perfilBioQ_TPT,
            perfilBioQ_INR: perfilBioQ_INR,
            perfilBioQ_Glucosa: perfilBioQ_Glucosa,
            perfilBioQ_Creatinina: perfilBioQ_Creatinina,
            perfilBioQ_Urea: perfilBioQ_Urea,
            perfilBioQ_Sodio: perfilBioQ_Sodio,
            perfilBioQ_Potasio: perfilBioQ_Potasio,
            perfilBioQ_Cloro: perfilBioQ_Cloro,
            perfilBioQ_Calcio: perfilBioQ_Calcio,
            perfilBioQ_Magnesio: perfilBioQ_Magnesio,
            perfilBioQ_BilirrubinaDirecta: perfilBioQ_BilirrubinaDirecta,
            perfilBioQ_BilirrubinaIndirecta: perfilBioQ_BilirrubinaIndirecta,
            perfilBioQ_BilirrubinaTotal: perfilBioQ_BilirrubinaTotal,
            perfilBioQ_Lipasa: perfilBioQ_Lipasa,
            perfilBioQ_Amilasa: perfilBioQ_Amilasa,
            perfilBioQ_Otros: perfilBioQ_Otros,
            // Valoración de Aparatos y Sistemas
            expFis_VASCabeza: expFis_VASCabeza,
            expFis_VASCuello: expFis_VASCuello,
            expFis_VASRespiratorio: expFis_VASRespiratorio,
            expFis_VASCardioVasc: expFis_VASCardioVasc,
            expFis_VASHipertension: expFis_VASHipertension,
            expFis_VASAbdomen: expFis_VASAbdomen,
            expFis_VASGenUr: expFis_VASGenUr,
            expFis_VASMuscEsq: expFis_VASMuscEsq,
            expFis_VASNeuro: expFis_VASNeuro,
            expFis_VASPielFaneras: expFis_VASPielFaneras,
        });

        await preval.save();

        return res.json({ preval });
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const updateNuevoPreAntecedentes = async (req: any, res: Response) =>{
    try {
        const { id, cxid } = req.params;
        const { // Patológicos
                antPersPat_Alergias, antPersPat_Quirurgicos,
                antPersPat_Endocrinologicos, antPersPat_Urologicos,
                antPersPat_Traumaticos, antPersPat_Ortopedicos,
                antPersPat_Transfusiones, antPersPat_CompAnestPrev,
                antPersPat_EstadoPsiq, antPersPat_MedActual,
                // No Patológicos
                antPersNoPat_HrsAyuno, antPersNoPat_Tabaquismo,
                antPersNoPat_Etilismo, antPersNoPat_Adicciones,
                antPersNoPat_Inmunizaciones, antPersNoPat_AntImportQx,
                // Exploración Física
                sigVit_Edad, sigVit_Temperatura, sigVit_FrecuCardiaca,
                sigVit_FrecuRespiratoria, sigVit_Peso, sigVit_Talla,
                sigVit_IMC, sigVit_TensionArterial, sigVit_SaturacionOxigeno,
                // Perfil Bioquímico
                perfilBioQ_FechaRealizacion, perfilBioQ_GrupoSanguineo,
                perfilBioQ_Hemoglobina, perfilBioQ_Hematocrito, perfilBioQ_Plaquetas,
                perfilBioQ_Leutocitos, perfilBioQ_TP, perfilBioQ_TT,
                perfilBioQ_TPT, perfilBioQ_INR, perfilBioQ_Glucosa,
                perfilBioQ_Creatinina, perfilBioQ_Urea, perfilBioQ_Sodio,
                perfilBioQ_Potasio, perfilBioQ_Cloro, perfilBioQ_Calcio,
                perfilBioQ_Magnesio, perfilBioQ_BilirrubinaDirecta,
                perfilBioQ_BilirrubinaIndirecta, perfilBioQ_BilirrubinaTotal,
                perfilBioQ_Lipasa, perfilBioQ_Amilasa, perfilBioQ_Otros,
                // Valoración Vía Aérea y Otras Escalas
                viaAerea_Mallampati, viaAerea_PatilAldreti, viaAerea_AperturaBucal,
                viaAerea_Distancia, viaAerea_Protusion, viaAerea_Ipid, viaAerea_Glasgow,
                viaAerea_NYHA, viaAerea_Goldman, viaAerea_RiesgoTrombosis,
                viaAerea_ClasificacionASA, viaAerea_TipoCirugia, viaAerea_RiesgoAnestesico,
                // Valoración de Aparatos y Sistemas
                expFis_VASCabeza, expFis_VASCuello, expFis_VASRespiratorio,
                expFis_VASCardioVasc, expFis_VASHipertension, expFis_VASAbdomen,
                expFis_VASGenUr, expFis_VASMuscEsq, expFis_VASNeuro, expFis_VASPielFaneras,
        } = req.body;
        
        const preval = await PreValoracion.findOneAndUpdate({ pid: id , cxid: cxid},
                                                     { /* Antecedentes */                                                    
                                                       // Personales Patológicos
                                                       antPersPat_Alergias: antPersPat_Alergias,
                                                       antPersPat_Quirurgicos: antPersPat_Quirurgicos,
                                                       antPersPat_Endocrinologicos: antPersPat_Endocrinologicos,
                                                       antPersPat_Urologicos: antPersPat_Urologicos,
                                                       antPersPat_Traumaticos: antPersPat_Traumaticos,
                                                       antPersPat_Ortopedicos: antPersPat_Ortopedicos,
                                                       antPersPat_Transfusiones: antPersPat_Transfusiones,
                                                       antPersPat_CompAnestPrev: antPersPat_CompAnestPrev,
                                                       antPersPat_EstadoPsiq: antPersPat_EstadoPsiq,
                                                       antPersPat_MedActual:antPersPat_MedActual,
                                                       //Personales No Patológicos
                                                       antPersNoPat_HrsAyuno:antPersNoPat_HrsAyuno,
                                                       antPersNoPat_Tabaquismo:antPersNoPat_Tabaquismo,
                                                       antPersNoPat_Etilismo:antPersNoPat_Etilismo,
                                                       antPersNoPat_Adicciones:antPersNoPat_Adicciones,
                                                       antPersNoPat_Inmunizaciones:antPersNoPat_Inmunizaciones,
                                                       antPersNoPat_AntImportQx:antPersNoPat_AntImportQx, 
                                                       //Signos Vitales
                                                       sigVit_Edad:sigVit_Edad,
                                                       sigVit_Temperatura:sigVit_Temperatura,
                                                       sigVit_FrecuCardiaca:sigVit_FrecuCardiaca,
                                                       sigVit_FrecuRespiratoria:sigVit_FrecuRespiratoria,
                                                       sigVit_Peso:sigVit_Peso,
                                                       sigVit_Talla:sigVit_Talla,
                                                       sigVit_IMC:sigVit_IMC,
                                                       sigVit_TensionArterial:sigVit_TensionArterial,
                                                       sigVit_SaturacionOxigeno:sigVit_SaturacionOxigeno,
                                                       //Laboratorio
                                                       perfilBioQ_FechaRealizacion: perfilBioQ_FechaRealizacion,
                                                       perfilBioQ_GrupoSanguineo: perfilBioQ_GrupoSanguineo,
                                                       perfilBioQ_Hemoglobina: perfilBioQ_Hemoglobina,
                                                       perfilBioQ_Hematocrito: perfilBioQ_Hematocrito,
                                                       perfilBioQ_Plaquetas: perfilBioQ_Plaquetas,
                                                       perfilBioQ_Leutocitos: perfilBioQ_Leutocitos,
                                                       perfilBioQ_TP: perfilBioQ_TP,
                                                       perfilBioQ_TT: perfilBioQ_TT,
                                                       perfilBioQ_TPT: perfilBioQ_TPT,
                                                       perfilBioQ_INR: perfilBioQ_INR,
                                                       perfilBioQ_Glucosa: perfilBioQ_Glucosa,
                                                       perfilBioQ_Creatinina: perfilBioQ_Creatinina,
                                                       perfilBioQ_Urea: perfilBioQ_Urea,
                                                       perfilBioQ_Sodio: perfilBioQ_Sodio,
                                                       perfilBioQ_Potasio: perfilBioQ_Potasio,
                                                       perfilBioQ_Cloro: perfilBioQ_Cloro,
                                                       perfilBioQ_Calcio: perfilBioQ_Calcio,
                                                       perfilBioQ_Magnesio: perfilBioQ_Magnesio,
                                                       perfilBioQ_BilirrubinaDirecta: perfilBioQ_BilirrubinaDirecta,
                                                       perfilBioQ_BilirrubinaIndirecta: perfilBioQ_BilirrubinaIndirecta,
                                                       perfilBioQ_BilirrubinaTotal: perfilBioQ_BilirrubinaTotal,
                                                       perfilBioQ_Lipasa: perfilBioQ_Lipasa,
                                                       perfilBioQ_Amilasa: perfilBioQ_Amilasa,
                                                       perfilBioQ_Otros: perfilBioQ_Otros,
                                                       /* Vía Aérea */
                                                       // Valoración de Vía Aérea y Otras Escalas
                                                       viaAerea_Mallampati: viaAerea_Mallampati,
                                                       viaAerea_PatilAldreti: viaAerea_PatilAldreti,
                                                       viaAerea_AperturaBucal: viaAerea_AperturaBucal,
                                                       viaAerea_Distancia: viaAerea_Distancia,
                                                       viaAerea_Protusion: viaAerea_Protusion,
                                                       viaAerea_Ipid: viaAerea_Ipid,
                                                       viaAerea_Glasgow: viaAerea_Glasgow,
                                                       viaAerea_NYHA: viaAerea_NYHA,
                                                       viaAerea_Goldman: viaAerea_Goldman,
                                                       viaAerea_RiesgoTrombosis: viaAerea_RiesgoTrombosis,
                                                       viaAerea_ClasificacionASA: viaAerea_ClasificacionASA,
                                                       viaAerea_TipoCirugia: viaAerea_TipoCirugia,
                                                       viaAerea_RiesgoAnestesico: viaAerea_RiesgoAnestesico,
                                                       // Valoración de Aparatos y Sistemas
                                                       expFis_VASCabeza: expFis_VASCabeza,
                                                       expFis_VASCuello: expFis_VASCuello,
                                                       expFis_VASRespiratorio: expFis_VASRespiratorio,
                                                       expFis_VASCardioVasc: expFis_VASCardioVasc,
                                                       expFis_VASHipertension: expFis_VASHipertension,
                                                       expFis_VASAbdomen: expFis_VASAbdomen,
                                                       expFis_VASGenUr: expFis_VASGenUr,
                                                       expFis_VASMuscEsq: expFis_VASMuscEsq,
                                                       expFis_VASNeuro: expFis_VASNeuro,
                                                       expFis_VASPielFaneras: expFis_VASPielFaneras,
                                                       // Estudios
                                                    });

        return res.json({ preval })
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });  
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

// ****** Estudios ******
export const saveEstudios = async (req: any, res: Response) => {
    try {
        const { vid,
                val_Estudios } = req.body;
        
        const valest = new ValEstudios({ vid: vid,
                                         val_Estudios: { estudio: val_Estudios[0],
                                                         especifEstudio: val_Estudios[1] },
        });
        
        await valest.save();
                
        return res.json({ valest });
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const updateEstudios = async (req: any, res: Response) => {
    try {
        const { vid } = req.params;
        const { val_Estudios } = req.body;
                
        const valest = await ValEstudios.findOneAndUpdate(
            { vid: vid },
            { $push:{
                val_Estudios: {
                    estudio: val_Estudios[0],
                    especifEstudio: val_Estudios[1]
                }
            }
            });
        
        return res.json({ valest });
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Función para obtener los estudios */
export const getEstudios = async (req: any, res: Response) => {
    try {
        const {vid} = req.params;
        
        const estudio = await ValEstudios.find({vid:vid})
        return res.json({estudio});
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Función para obtener un estudio */
export const getEstudio = async (req: any, res: Response) => {
    try {
        const {id} = req.params;

        const estudio = await ValEstudios.findOne({ "val_Estudios._id": id },
                                                  { 'val_Estudios.$': 1 })
        
        return res.json({estudio});
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Funcion para actualizar un estudio */
export const updateEstudio = async (req: any, res: Response) => {
    try {
        const { id } = req.params;
        const { val_Estudios } = req.body;       
        
        const estudio = await ValEstudios.updateOne({ "val_Estudios._id": id },
            {
                $set : {
                            "val_Estudios.$.estudio" : val_Estudios[0].estudio, 
                            "val_Estudios.$.especifEstudio" : val_Estudios[0].especifEstudio
                        }
            }
        );
        
        if (!estudio) 
            return res.status(404).json({ Error: "No existe el estudio." });        
        
        return res.json({ estudio });
    } catch (error) {        
        if (error.kind === "ObjectId") {
            logger.log({
                level: 'error',
                message: 'Formato de ID incorrecto', error
            });
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }        
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ error: "Error de servidor" });
    }
};

/* Funcion para eliminar un estudio */
export const deleteEstudio = async (req: any, res: Response) => {
    try {
        const { id } = req.params;

        const estudio = await ValEstudios.findOneAndUpdate({ "val_Estudios._id": id },
                                                           { $pull: { val_Estudios: { _id: id } } }
        );              
       
        return res.json({ estudio });
    } catch (error) {
        logger.error('Ocurrió un error:', error);
        if (error.kind === "ObjectId") {
            logger.log({
                level: 'error',
                message: 'Formato de ID incorrecto', error
            });
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
        
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ error: "Error de servidor" });
    }
};
/********************************************************************/
/******************************* PLAN *******************************/
/********************************************************************/
export const savePrePlan = async (req: any, res: Response) => {
    try {
        const { pid, cxid,
                // Posicion y Cuidados
                pos_HorasAyuno, pos_AccesoVenoso, pos_PosicionPaciente,
                pos_PosicionBrazos, pos_Torniquete, pos_AplicacionTorniquete,
                pos_Sitio, pos_TiempoIsquemia, pos_ProteccionOjos,
                pos_ProtecProminencias, pos_TecnicaAnestesica, pos_Premedicacion,
                pos_EspPremedicacion, pos_Monitoreo,
                // General
                // Intubación
                general_Induccion, general_Tubo, general_NumeroTubo,
                general_TipoCanula, general_Globo, general_Presion,
                general_DifTecnicasIntubacion, general_EspDifTecIntubacion,
                // Dispositivos Supraglóticos
                general_DispositivosSupro, general_Calibre, general_Complicaciones,
                general_EspComplicaciones, 
                // Otros Disposotivos
                general_OtrosDispositivos, general_EspOtrosDispositivos,
                // Regional
                // Bloqueo Neuro-Axial
                regional_Tipo, regional_TipoAguja, regional_Nivel, regional_CalibreAguja,
                regional_Cateter, regional_OrientacionCateter, regional_ProbDificulNeuro,
                regional_EspDificultadesNeuro,
                // Bloqueo Plexo
                regional_Sitio, regional_Opcion, regional_EspSitio, 
                regional_AnestesicoUtilizado, regional_EspAnestesico,
                regional_ProbDificulPlexo, regional_EspDificulPlexo,
                // Equipo de Apoyo
                regional_Ultrasonido, regional_EspUltrasonido, regional_Neuroestimulador,
                regional_EspNeuroestimulador, regional_ProbComplicaciones,
                regional_EspDificEquipo,
                // Sedación
                sedacion_Via, sedacion_Opcion, sedacion_Observaciones,
                sedacion_Medicamentos,
                // Local
                local_SitioAnestesiaL, local_AnestesicoUtilizado,
                local_Especificar, } = req.body;
        
        const preplan = new PrePlan({ pid: pid, cxid: cxid,
                                      // Posicion y Cuidados
                                      pos_HorasAyuno, pos_AccesoVenoso, pos_PosicionPaciente,
                                      pos_PosicionBrazos, pos_Torniquete, pos_AplicacionTorniquete,
                                      pos_Sitio, pos_TiempoIsquemia, pos_ProteccionOjos,
                                      pos_ProtecProminencias, pos_TecnicaAnestesica, pos_Premedicacion,
                                      pos_EspPremedicacion, pos_Monitoreo,
                                      // General
                                      // Intubación
                                      general_Induccion, general_Tubo, general_NumeroTubo,
                                      general_TipoCanula, general_Globo, general_Presion,
                                      general_DifTecnicasIntubacion, general_EspDifTecIntubacion,
                                      // Dispositivos Supraglóticos
                                      general_DispositivosSupro, general_Calibre,
                                      general_Complicaciones, general_EspComplicaciones, 
                                      // Otros Disposotivos
                                      general_OtrosDispositivos, general_EspOtrosDispositivos,
                                      // Regional
                                      // Bloqueo Neuro-Axial
                                      regional_Tipo, regional_TipoAguja, regional_Nivel,
                                      regional_CalibreAguja, regional_Cateter,
                                      regional_OrientacionCateter, regional_ProbDificulNeuro,
                                      regional_EspDificultadesNeuro,
                                      // Bloqueo Plexo
                                      regional_Sitio, regional_Opcion, regional_EspSitio, 
                                      regional_AnestesicoUtilizado, regional_EspAnestesico,
                                      regional_ProbDificulPlexo, regional_EspDificulPlexo,
                                      // Equipo de Apoyo
                                      regional_Ultrasonido, regional_EspUltrasonido,
                                      regional_Neuroestimulador, regional_EspNeuroestimulador,
                                      regional_ProbComplicaciones, regional_EspDificEquipo,
                                      // Sedación
                                      sedacion_Via, sedacion_Opcion, sedacion_Observaciones,
                                      sedacion_Medicamentos,
                                      // Local
                                      local_SitioAnestesiaL, local_AnestesicoUtilizado,
                                      local_Especificar });
        await preplan.save();
        
        return res.json({ preplan });
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const saveNuevoPrePlan = async (req: any, res: Response) => {
    try {
        const { pid, cxid,
                // Posicion y Cuidados
                pos_HorasAyuno, pos_AccesoVenoso, pos_PosicionPaciente,
                pos_PosicionBrazos, pos_Torniquete, pos_AplicacionTorniquete,
                pos_Sitio, pos_TiempoIsquemia, pos_ProteccionOjos,
                pos_ProtecProminencias, pos_TecnicaAnestesica, pos_Premedicacion,
                pos_EspPremedicacion, pos_Monitoreo,
                // General
                // Intubación
                general_Induccion, general_Tubo, general_NumeroTubo,
                general_TipoCanula, general_Globo, general_Presion,
                general_DifTecnicasIntubacion, general_EspDifTecIntubacion,
                // Dispositivos Supraglóticos
                general_DispositivosSupro, general_Calibre, general_Complicaciones,
                general_EspComplicaciones, 
                // Otros Disposotivos
                general_OtrosDispositivos, general_EspOtrosDispositivos,
                // Regional
                // Bloqueo Neuro-Axial
                regional_Tipo, regional_TipoAguja, regional_Nivel, regional_CalibreAguja,
                regional_Cateter, regional_OrientacionCateter, regional_ProbDificulNeuro,
                regional_EspDificultadesNeuro,
                // Bloqueo Plexo
                regional_Sitio, regional_Opcion, regional_EspSitio, 
                regional_AnestesicoUtilizado, regional_EspAnestesico,
                regional_ProbDificulPlexo, regional_EspDificulPlexo,
                // Equipo de Apoyo
                regional_Ultrasonido, regional_EspUltrasonido, regional_Neuroestimulador,
                regional_EspNeuroestimulador, regional_ProbComplicaciones,
                regional_EspDificEquipo,
                // Sedación
                sedacion_Via, sedacion_Opcion, sedacion_Observaciones,
                sedacion_Medicamentos,
                // Local
                local_SitioAnestesiaL, local_AnestesicoUtilizado,
                local_Especificar, } = req.body;
        
        const preplan = new PrePlan({ pid, cxid,
                                      // Posicion y Cuidados
                                      pos_HorasAyuno, pos_AccesoVenoso, pos_PosicionPaciente,
                                      pos_PosicionBrazos, pos_Torniquete, pos_AplicacionTorniquete,
                                      pos_Sitio, pos_TiempoIsquemia, pos_ProteccionOjos,
                                      pos_ProtecProminencias, pos_TecnicaAnestesica, pos_Premedicacion,
                                      pos_EspPremedicacion, pos_Monitoreo,
                                      // General
                                      // Intubación
                                      general_Induccion, general_Tubo, general_NumeroTubo,
                                      general_TipoCanula, general_Globo, general_Presion,
                                      general_DifTecnicasIntubacion, general_EspDifTecIntubacion,
                                      // Dispositivos Supraglóticos
                                      general_DispositivosSupro, general_Calibre,
                                      general_Complicaciones, general_EspComplicaciones, 
                                      // Otros Disposotivos
                                      general_OtrosDispositivos, general_EspOtrosDispositivos,
                                      // Regional
                                      // Bloqueo Neuro-Axial
                                      regional_Tipo, regional_TipoAguja, regional_Nivel,
                                      regional_CalibreAguja, regional_Cateter,
                                      regional_OrientacionCateter, regional_ProbDificulNeuro,
                                      regional_EspDificultadesNeuro,
                                      // Bloqueo Plexo
                                      regional_Sitio, regional_Opcion, regional_EspSitio, 
                                      regional_AnestesicoUtilizado, regional_EspAnestesico,
                                      regional_ProbDificulPlexo, regional_EspDificulPlexo,
                                      // Equipo de Apoyo
                                      regional_Ultrasonido, regional_EspUltrasonido,
                                      regional_Neuroestimulador, regional_EspNeuroestimulador,
                                      regional_ProbComplicaciones, regional_EspDificEquipo,
                                      // Sedación
                                      sedacion_Via, sedacion_Opcion, sedacion_Observaciones,
                                      sedacion_Medicamentos,
                                      // Local
                                      local_SitioAnestesiaL, local_AnestesicoUtilizado,
                                      local_Especificar });
        await preplan.save();
        
        return res.json({ preplan });
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const updatePrePlan = async (req: any, res: Response) => {
    try {
        const { id } = req.params;

        const { // Posicion y Cuidados
                pos_HorasAyuno, pos_AccesoVenoso, pos_PosicionPaciente,
                pos_PosicionBrazos, pos_Torniquete, pos_AplicacionTorniquete,
                pos_Sitio, pos_TiempoIsquemia, pos_ProteccionOjos,
                pos_ProtecProminencias, pos_TecnicaAnestesica, pos_Premedicacion,
                pos_EspPremedicacion, pos_Monitoreo,
                // General
                // Intubación
                general_Induccion, general_Tubo, general_NumeroTubo,
                general_TipoCanula, general_Globo, general_Presion,
                general_DifTecnicasIntubacion, general_EspDifTecIntubacion,
                // Dispositivos Supraglóticos
                general_DispositivosSupro, general_Calibre, general_Complicaciones,
                general_EspComplicaciones, 
                // Otros Disposotivos
                general_OtrosDispositivos, general_EspOtrosDispositivos,
                // Regional
                // Bloqueo Neuro-Axial
                regional_Tipo, regional_TipoAguja, regional_Nivel, regional_CalibreAguja,
                regional_Cateter, regional_OrientacionCateter, regional_ProbDificulNeuro,
                regional_EspDificultadesNeuro,
                // Bloqueo Plexo
                regional_Sitio, regional_Opcion, regional_EspSitio, 
                regional_AnestesicoUtilizado, regional_EspAnestesico,
                regional_ProbDificulPlexo, regional_EspDificulPlexo,
                // Equipo de Apoyo
                regional_Ultrasonido, regional_EspUltrasonido, regional_Neuroestimulador,
                regional_EspNeuroestimulador, regional_ProbComplicaciones,
                regional_EspDificEquipo,
                // Sedación
                sedacion_Via, sedacion_Opcion, sedacion_Observaciones,
                sedacion_Medicamentos,
                // Local
                local_SitioAnestesiaL, local_AnestesicoUtilizado,
                local_Especificar, } = req.body;
        
        const preplan = await PrePlan.findOneAndUpdate( { pid: id },
                                                        { // Posicion y Cuidados
                                                          pos_HorasAyuno, pos_AccesoVenoso, pos_PosicionPaciente,
                                                          pos_PosicionBrazos, pos_Torniquete, pos_AplicacionTorniquete,
                                                          pos_Sitio, pos_TiempoIsquemia, pos_ProteccionOjos,
                                                          pos_ProtecProminencias, pos_TecnicaAnestesica, pos_Premedicacion,
                                                          pos_EspPremedicacion, pos_Monitoreo,
                                                          // General
                                                          // General
                                                          // Intubación
                                                          general_Induccion, general_Tubo, general_NumeroTubo,
                                                          general_TipoCanula, general_Globo, general_Presion,
                                                          general_DifTecnicasIntubacion, general_EspDifTecIntubacion,
                                                          // Dispositivos Supraglóticos
                                                          general_DispositivosSupro, general_Calibre,
                                                          general_Complicaciones, general_EspComplicaciones,
                                                          // Otros Disposotivos
                                                          general_OtrosDispositivos, general_EspOtrosDispositivos,
                                                          // Regional
                                                          // Bloqueo Neuro-Axial
                                                          regional_Tipo, regional_TipoAguja, regional_Nivel,
                                                          regional_CalibreAguja, regional_Cateter,
                                                          regional_OrientacionCateter, regional_ProbDificulNeuro,
                                                          regional_EspDificultadesNeuro,
                                                          // Bloqueo Plexo
                                                          regional_Sitio, regional_Opcion, regional_EspSitio, 
                                                          regional_AnestesicoUtilizado, regional_EspAnestesico,
                                                          regional_ProbDificulPlexo, regional_EspDificulPlexo,
                                                          // Equipo de Apoyo
                                                          regional_Ultrasonido, regional_EspUltrasonido,
                                                          regional_Neuroestimulador, regional_EspNeuroestimulador,
                                                          regional_ProbComplicaciones, regional_EspDificEquipo,
                                                          // Sedación
                                                          sedacion_Via, sedacion_Opcion, sedacion_Observaciones,
                                                          sedacion_Medicamentos,
                                                          // Local
                                                          local_SitioAnestesiaL, local_AnestesicoUtilizado,
                                                          local_Especificar, })

        return res.json({ preplan });
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const updateNuevoPrePlan = async (req: any, res: Response) => {
    try {
        const { id, cxid} = req.params;

        const { // Posicion y Cuidados
                pos_HorasAyuno, pos_AccesoVenoso, pos_PosicionPaciente,
                pos_PosicionBrazos, pos_Torniquete, pos_AplicacionTorniquete,
                pos_Sitio, pos_TiempoIsquemia, pos_ProteccionOjos,
                pos_ProtecProminencias, pos_TecnicaAnestesica, pos_Premedicacion,
                pos_EspPremedicacion, pos_Monitoreo,
                // General
                // Intubación
                general_Induccion, general_Tubo, general_NumeroTubo,
                general_TipoCanula, general_Globo, general_Presion,
                general_DifTecnicasIntubacion, general_EspDifTecIntubacion,
                // Dispositivos Supraglóticos
                general_DispositivosSupro, general_Calibre, general_Complicaciones,
                general_EspComplicaciones, 
                // Otros Disposotivos
                general_OtrosDispositivos, general_EspOtrosDispositivos,
                // Regional
                // Bloqueo Neuro-Axial
                regional_Tipo, regional_TipoAguja, regional_Nivel, regional_CalibreAguja,
                regional_Cateter, regional_OrientacionCateter, regional_ProbDificulNeuro,
                regional_EspDificultadesNeuro,
                // Bloqueo Plexo
                regional_Sitio, regional_Opcion, regional_EspSitio, 
                regional_AnestesicoUtilizado, regional_EspAnestesico,
                regional_ProbDificulPlexo, regional_EspDificulPlexo,
                // Equipo de Apoyo
                regional_Ultrasonido, regional_EspUltrasonido, regional_Neuroestimulador,
                regional_EspNeuroestimulador, regional_ProbComplicaciones,
                regional_EspDificEquipo,
                // Sedación
                sedacion_Via, sedacion_Opcion, sedacion_Observaciones,
                sedacion_Medicamentos,
                // Local
                local_SitioAnestesiaL, local_AnestesicoUtilizado,
                local_Especificar, } = req.body;
        
        const preplan = await PrePlan.findOneAndUpdate( { pid: id, cxid:cxid },
                                                        { // Posicion y Cuidados
                                                          pos_HorasAyuno, pos_AccesoVenoso, pos_PosicionPaciente,
                                                          pos_PosicionBrazos, pos_Torniquete, pos_AplicacionTorniquete,
                                                          pos_Sitio, pos_TiempoIsquemia, pos_ProteccionOjos,
                                                          pos_ProtecProminencias, pos_TecnicaAnestesica, pos_Premedicacion,
                                                          pos_EspPremedicacion, pos_Monitoreo,
                                                          // General
                                                          // General
                                                          // Intubación
                                                          general_Induccion, general_Tubo, general_NumeroTubo,
                                                          general_TipoCanula, general_Globo, general_Presion,
                                                          general_DifTecnicasIntubacion, general_EspDifTecIntubacion,
                                                          // Dispositivos Supraglóticos
                                                          general_DispositivosSupro, general_Calibre,
                                                          general_Complicaciones, general_EspComplicaciones,
                                                          // Otros Disposotivos
                                                          general_OtrosDispositivos, general_EspOtrosDispositivos,
                                                          // Regional
                                                          // Bloqueo Neuro-Axial
                                                          regional_Tipo, regional_TipoAguja, regional_Nivel,
                                                          regional_CalibreAguja, regional_Cateter,
                                                          regional_OrientacionCateter, regional_ProbDificulNeuro,
                                                          regional_EspDificultadesNeuro,
                                                          // Bloqueo Plexo
                                                          regional_Sitio, regional_Opcion, regional_EspSitio, 
                                                          regional_AnestesicoUtilizado, regional_EspAnestesico,
                                                          regional_ProbDificulPlexo, regional_EspDificulPlexo,
                                                          // Equipo de Apoyo
                                                          regional_Ultrasonido, regional_EspUltrasonido,
                                                          regional_Neuroestimulador, regional_EspNeuroestimulador,
                                                          regional_ProbComplicaciones, regional_EspDificEquipo,
                                                          // Sedación
                                                          sedacion_Via, sedacion_Opcion, sedacion_Observaciones,
                                                          sedacion_Medicamentos,
                                                          // Local
                                                          local_SitioAnestesiaL, local_AnestesicoUtilizado,
                                                          local_Especificar, })

        return res.json({ preplan });
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};
/********************************************************************/
/******************************* NOTA *******************************/
/********************************************************************/
/* Función de registro de nota pre anetésica */
export const saveNota = async (req: any, res: Response) => {
    try {
        const { obsNotaPre, pid, cxid } = req.body;
        
        const prenota = new PreNota({ pid: pid, cxid: cxid,
                                      obsNota: obsNotaPre });
        
        await prenota.save();

        return res.json({ prenota });
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const saveNuevoNota = async (req: any, res: Response) => {
    try {
        const { obsNotaPre, pid, cxid } = req.body;
        
        const prenota = new PreNota({ pid: pid, cxid:cxid,
                                      obsNota: obsNotaPre });
        
        await prenota.save();

        return res.json({ prenota });
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Función de actualización de nota pre anetésica */
export const updateNota = async (req: any, res: Response) => {
    try {
        const { id } = req.params;
        const { obsNotaPre } = req.body;

        const prenota = await PreNota.findOneAndUpdate({pid: id}, { obsNota: obsNotaPre });

        return res.json({ prenota })
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const updateNuevoNota = async (req: any, res: Response) => {
    try {
        const { id, cxid } = req.params;
        const { obsNotaPre } = req.body;

        const prenota = await PreNota.findOneAndUpdate({pid: id, cxid: cxid}, { obsNota: obsNotaPre });

        return res.json({ prenota })
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};