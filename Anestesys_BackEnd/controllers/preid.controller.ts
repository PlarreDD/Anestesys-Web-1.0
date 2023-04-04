import { Response } from "express";
import { IdPacientes,
         IdPacientesCx,
         IdNota } from "../models/PreAnestesico";
// import { IdPacientesCx } from "../models/PacienteCirugía";

/********************************************************************/
/***************************  ID PACIENTE ***************************/
/********************************************************************/
/* Función para obtener todos los pacientes asociados a un usuario */
export const getAllPacientes = async (req: any, res: Response) => {
    try {
        const pacientes = await IdPacientes.find({uid: req.uid})
        
        return res.json({pacientes});
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Funcion para la busqueda de un paciente. Debe estar asociado al usuario */
export const getPaciente = async (req: any, res: Response) => {
    try {
        const pacientes = await IdPacientes.find({numExpediente: req.numExpediente})
        
        return res.json({pacientes});
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Funcion para registrar la ficha ID de un paciente */
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
                                           fechaNPaciente, edadPaciente, generoPaciente,
                                           /* Datos Demográficos */
                                           nacionalidad, CURP, folioID, estNacimiento,
                                           estResidencia, alcaldia, colonia, codigoPostal });

        const infoCx = new IdPacientesCx({ /* Información adicional  del paciente */
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

        const paciente = await IdPacientes.findByIdAndUpdate( id, { nomPaciente: updVar.nomPaciente,
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
        
        const infoCx = await IdPacientesCx.findOneAndUpdate({ pid: paciente?._id }, { numEpisodio: updVar.numEpisodio,
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
/******************************* NOTA *******************************/
/********************************************************************/
/* Función de registro de nota pre anetésica */
export const saveNota = async (req: any, res: Response) => {
    try {
        const { obsNotaPre, pid } = req.body;
        
        const idnota = new IdNota({ pid: pid, obsNota: obsNotaPre });
        
        await idnota.save();

        return res.json({ idnota });
    } catch (error) {
        return res.status(500).json({Error: 'Error de servidor'});
    }
}