import { //Request,
         Response } from "express";
import { IdPacientes } from "../models/Paciente";

export const getAllPacientes = async (req: any, res: Response) => {
    try {
        const pacientes = await IdPacientes.find({uid: req.uid})
        
        return res.json({pacientes});
    } catch (error) {
        console.log(error);
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

export const createPaciente = async (req: any, res: Response) => {
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

        const paciente = new IdPacientes({ numExpediente, nomPaciente, uid: req.uid,
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
        return res.status(500).json({ Error: 'Error de servidor' });
    }
};

export const updatePaciente = async (req: any, res: Response) => {
    try {
        const { id } = req.params;
        const updVar = req.body;

        const paciente = await IdPacientes.findByIdAndUpdate(id, updVar);

        if (!paciente) 
            return res.status(404).json({ Error: "No existe el paciente." });

        if(!paciente.uid.equals(req.uid))
            return res.status(401).json({ Error: "Este paciente no corresponde a este usuario." });
        
        return res.json({ paciente });
    } catch (error) {
        console.log(error);

        if (error.kind === "ObjectId") {
            return res.status(403).json({ error: "Formato de ID incorrecto" });
        }
        
        return res.status(500).json({ error: "Error de servidor" });
    }
};