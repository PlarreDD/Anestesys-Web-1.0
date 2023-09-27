import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { getPaciente,
         createPaciente,
         updatePaciente, 
         getExpedientes} from "../controllers/preanest.controller";

const router = Router();

// GET          /preId          Consultar expedientes
// GET          /preId/:id      Consultar 1 paciente
// POST         /preId          Crear paciente
// PATCH/PUT    /preId/:id      Actualizar paciente

/*------------------- PreId --------------------*/
router.get('/exp', requireToken, getExpedientes)
router.get('/:id', requireToken, getPaciente);
router.post('/', requireToken, createPaciente);
router.put('/:id',  requireToken, updatePaciente);

export default router;