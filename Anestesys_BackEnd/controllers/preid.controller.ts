import { Request,
         Response } from "express";
import { IdPacientes } from "../models/Paciente";

export const getInfo = (_req:Request, res:Response) => {
    try {
        return res.json({ok: true});
    } catch (error) {
        console.log(error);
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const createPaciente = async (req:Request, res:Response) => {
    try {
        const { numExpediente, nomPaciente,
                /* Información adicional  del paciente */
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

        const paciente = new IdPacientes({ numExpediente, nomPaciente,
                                           /* Información adicional  del paciente */
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
                                           estResidencia, alcaldia, colonia, codigoPostal });
        await paciente.save();

        return res.json({ paciente });
    } catch (error) {
        console.log(error);
        return res.status(500).json({Error: 'Error de servidor'});
    }
};