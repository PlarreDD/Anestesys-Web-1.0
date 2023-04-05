import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { savePreAntecedentes,
         updatePreAntecedentes } from "../controllers/preanest.controller";


const router = Router();

// GET          /nota          Consultar pacientes
// GET          /nota/:id      Consultar 1 paciente
// POST         /nota          Crear paciente
// PATCH/PUT    /nota/:id      Actualizar paciente

/*------------------- PreId --------------------*/
router.post('/', requireToken, savePreAntecedentes);
router.put('/:id',  requireToken, updatePreAntecedentes);

export default router;