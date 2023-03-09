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
        const { numExpediente, nomPaciente, fechaNPaciente,
                edadPaciente, habitacionPaciente, generoPaciente,
                fechaInPaciente, diagnostico, tipoCx,
                cirugia, fechaCx, hrCx,
                cirujano, anestesiologo, anestesiologoVPA } = req.body;

        const paciente = new IdPacientes({ numExpediente, nomPaciente, fechaNPaciente,
                                          edadPaciente, habitacionPaciente, generoPaciente,
                                          fechaInPaciente, diagnostico, tipoCx,
                                          cirugia, fechaCx, hrCx,
                                          cirujano, anestesiologo, anestesiologoVPA });
        await paciente.save();

        return res.json({paciente});
    } catch (error) {
        console.log(error);
        return res.status(500).json({Error: 'Error de servidor'});
    }
};