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
        const { numExpediente, nomPaciente, numEpisodio, 
                fechaNPaciente, edadPaciente, habitacionPaciente,
                generoPaciente, fechaInPaciente, diagnostico,
                tipoCx, cirugia, cie10, cie9, fechaCx, hrCx,
                cirujano, anestesiologo, anestesiologoVPA } = req.body;

        const paciente = new IdPacientes({ numExpediente, nomPaciente, numEpisodio,
                                           fechaNPaciente, edadPaciente,
                                           habitacionPaciente, generoPaciente,
                                           fechaInPaciente, diagnostico, tipoCx,
                                           cie10, cie9, cirugia, fechaCx, hrCx,
                                           cirujano, anestesiologo, anestesiologoVPA });
        await paciente.save();

        return res.json({paciente});
    } catch (error) {
        console.log(error);
        return res.status(500).json({Error: 'Error de servidor'});
    }
};