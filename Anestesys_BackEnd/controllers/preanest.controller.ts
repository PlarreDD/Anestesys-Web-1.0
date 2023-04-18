import { Response } from "express";
import { PreIdPacientes,
         PreIdPacientesCx,
         PreVal,
         PreNota } from "../models/PreAnestesico";

/********************************************************************/
/***************************  ID PACIENTE ***************************/
/********************************************************************/
/* Función para obtener todos los pacientes asociados a un usuario */
export const getAllPacientes = async (req: any, res: Response) => {
    try {
        const pacientes = await PreIdPacientes.find({uid: req.uid})
        
        return res.json({pacientes});
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Funcion para la busqueda de un paciente. Debe estar asociado al usuario */
export const getPaciente = async (req: any, res: Response) => {
    try {
        const pacientes = await PreIdPacientes.find({numExpediente: req.numExpediente})
        
        return res.json({pacientes});
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Funcion para registrar la ficha ID de un paciente */
export const createPaciente = async (req: any, res: Response) => {
    try {
        const { /* Información principal del paciente */
                numExpediente, nomPaciente,
                /* Información adicional del paciente */
                numEpisodio, fechaNPaciente, edadPaciente,
                habitacionPaciente, generoPaciente,
                fechaInPaciente, diagnostico, tipoCx,
                /* Datos CIE */
                cie10, cie9, 
                /* Informacion Médicos */
                cirugia, fechaCx, hrCx,
                /* Informacion Médicos */
                cirujano, anestesiologo, anestesiologoVPA,
                residenteAnestesia,
                /* Datos Demográficos */
                nacionalidad, CURP, folioID, estNacimiento,
                estResidencia, alcaldia, colonia, codigoPostal } = req.body;

        const paciente = new PreIdPacientes({ numExpediente, nomPaciente, uid: req.uid,
                                           fechaNPaciente, edadPaciente, generoPaciente,
                                           /* Datos Demográficos */
                                           nacionalidad, CURP, folioID, estNacimiento,
                                           estResidencia, alcaldia, colonia, codigoPostal });

        const infoCx = new PreIdPacientesCx({ /* Información adicional  del paciente */
                                           numEpisodio, pid: paciente._id,  habitacionPaciente,
                                           fechaInPaciente, diagnostico, tipoCx,
                                           /* Datos CIE */
                                           cie10, cie9, 
                                           /* Informacion Médicos */
                                           cirugia, fechaCx, hrCx,
                                           /* Informacion Médicos */
                                           cirujano, anestesiologo, anestesiologoVPA,
                                           residenteAnestesia });

        await paciente.save();
        await infoCx.save();

        return res.json({ paciente, infoCx });
    } catch (error) {
        return res.status(500).json({ Error: 'Error de servidor' });
    }
};

/* Funcion de actualización de la ficha ID de un paciente */
export const updatePaciente = async (req: any, res: Response) => {
    try {
        const { id } = req.params;
        const updVar = req.body;

        const paciente = await PreIdPacientes.findByIdAndUpdate( id, { nomPaciente: updVar.nomPaciente,
                                                                    fechaNPaciente: updVar.fechaNac,
                                                                    edadPaciente: updVar.edadPaciente,
                                                                    generoPaciente: updVar.genero,
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
                                                                                      fechaInPaciente: updVar.fechaIn,
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
        if (error.kind === "ObjectId") 
            return res.status(403).json({ error: "Formato de ID incorrecto" });
                
        return res.status(500).json({ error: "Error de servidor" });
    }
};
/********************************************************************/
/**************************** Valoración ****************************/
/********************************************************************/
/* Función de registro de valoración pre anetésica */
export const savePreAntecedentes = async (req: any, res: Response) => {
    try {
        const { pid, antPersPat_Alergias, antPersPat_Quirurgicos,
                antPersPat_Endocrinologicos, antPersPat_Urologicos,
                antPersPat_Traumaticos, antPersPat_Ortopedicos,
                antPersPat_Transfusiones, antPersPat_CompAnestPrev,
                antPersPat_EstadoPsiq, antPersPat_MedActual,
                antPersNoPat_HrsAyuno, antPersNoPat_Tabaquismo,
                antPersNoPat_Etilismo, antPersNoPat_Adicciones,
                antPersNoPat_Inmunizaciones, antPersNoPat_AntImportQx,

                sigVit_Edad, sigVit_Temperatura, sigVit_FrecuCardiaca,
                sigVit_FrecuRespiratoria, sigVit_Peso, sigVit_Talla,
                sigVit_IMC, sigVit_TensionArterial, sigVit_SaturacionOxigeno
            } = req.body;

        const preval = new PreVal({
            pid: pid,
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
            antPersNoPat_HrsAyuno:antPersNoPat_HrsAyuno ,
            antPersNoPat_Tabaquismo:antPersNoPat_Tabaquismo ,
            antPersNoPat_Etilismo:antPersNoPat_Etilismo ,
            antPersNoPat_Adicciones:antPersNoPat_Adicciones ,
            antPersNoPat_Inmunizaciones:antPersNoPat_Inmunizaciones ,
            antPersNoPat_AntImportQx:antPersNoPat_AntImportQx ,
            //Signos Vitales
            sigVit_Edad:sigVit_Edad,
            sigVit_Temperatura:sigVit_Temperatura,
            sigVit_FrecuCardiaca:sigVit_FrecuCardiaca,
            sigVit_FrecuRespiratoria:sigVit_FrecuRespiratoria,
            sigVit_Peso:sigVit_Peso,
            sigVit_Talla:sigVit_Talla,
            sigVit_IMC:sigVit_IMC,
            sigVit_TensionArterial:sigVit_TensionArterial,
            sigVit_SaturacionOxigeno:sigVit_SaturacionOxigeno
        });

        await preval.save();

        return res.json({ preval });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }    
};

export const updatePreAntecedentes = async (req: any, res: Response) => {
    try {
        const { id } = req.params;
        const { antPersPat_Alergias, antPersPat_Quirurgicos,
            antPersPat_Endocrinologicos, antPersPat_Urologicos,
            antPersPat_Traumaticos, antPersPat_Ortopedicos,
            antPersPat_Transfusiones, antPersPat_CompAnestPrev,
            antPersPat_EstadoPsiq, antPersPat_MedActual,
            antPersNoPat_HrsAyuno, antPersNoPat_Tabaquismo,
            antPersNoPat_Etilismo, antPersNoPat_Adicciones,
            antPersNoPat_Inmunizaciones, antPersNoPat_AntImportQx,

            sigVit_Edad, sigVit_Temperatura, sigVit_FrecuCardiaca,
            sigVit_FrecuRespiratoria, sigVit_Peso, sigVit_Talla,
            sigVit_IMC, sigVit_TensionArterial, sigVit_SaturacionOxigeno
        } = req.body;

        const preval = await PreVal.findOneAndUpdate({pid: id}, { /* Antecedentes */
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
        sigVit_SaturacionOxigeno:sigVit_SaturacionOxigeno
    });

        return res.json({ preval })
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};
/********************************************************************/
/******************************* NOTA *******************************/
/********************************************************************/
/* Función de registro de nota pre anetésica */
export const saveNota = async (req: any, res: Response) => {
    try {
        const { obsNotaPre, pid } = req.body;
        
        const prenota = new PreNota({ pid: pid,
                                      obsNota: obsNotaPre });
        
        await prenota.save();

        return res.json({ prenota });
    } catch (error) {
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
        return res.status(500).json({Error: 'Error de servidor'});
    }
};