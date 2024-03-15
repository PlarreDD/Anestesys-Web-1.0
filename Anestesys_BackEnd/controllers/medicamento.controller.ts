import { Response } from "express";
import { Medicamento } from "../models/Medicamento";
import logger from '../logger';

/* Función para obtener todos los medicamentos */
export const getMedicamentos = async (req: any, res: Response) => {
    try {
        const medicamentos = await Medicamento.find({id: req.id}) 
        return res.json({medicamentos});
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Funcion para la busqueda de un medicamento */
export const getMedicamento = async (req: any, res: Response) => {
    try {
        const {id} = req.params;
        
        const medicamento = await Medicamento.findById(id)
        return res.json({medicamento});
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({Error: 'Error de servidor'});
    }
};

/* Funcion para registrar un medicamento */
export const createMedicamento = async (req: any, res: Response) => {
    try {
        const { nombreMedicamento, codigoMedicamento} = req.body;

        const medicamento = new Medicamento({ nombreMedicamento, codigoMedicamento});
        await medicamento.save();

        return res.json({ medicamento });
    } catch (error) {
        logger.log({
            level: 'error',
            message: 'Error de servidor', error
        });
        return res.status(500).json({ Error: 'Error de servidor' });
    }
};

/* Funcion para actualizar un medicamento */
export const updateMedicamento = async (req: any, res: Response) => {
    try {
        const { id } = req.params;
        const updMed = req.body;

        const medicamento = await Medicamento.findByIdAndUpdate(id, updMed);

        if (!medicamento) 
            return res.status(404).json({ Error: "No existe el medicamento." });        
        
        return res.json({ medicamento });
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

/* Funcion para eliminar un medicamento */
export const deleteMedicamento = async (req: any, res: Response) => {
    try {
        const { id } = req.params;

        const medicamento = await Medicamento.findByIdAndDelete(id);

        return res.json({ medicamento });
    } catch (error) {
        if (error.kind === "ObjectId") {
            logger.log({
                level: 'error',
                message: 'Error de servidor', error
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