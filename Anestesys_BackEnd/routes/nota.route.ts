import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { saveNota } from "../controllers/preid.controller";


const router = Router();

// GET          /nota          Consultar pacientes
// GET          /nota/:id      Consultar 1 paciente
// POST         /nota          Crear paciente
// PATCH/PUT    /nota/:id      Actualizar paciente

/*------------------- PreId --------------------*/
router.post('/', requireToken, saveNota);

export default router;