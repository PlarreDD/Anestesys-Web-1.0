import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { getPaciente,
         createPaciente,
         updatePaciente, 
         getExpedientes,
         createNuevoRegistroPaciente,
         updateNuevoRegistroPaciente,
         updateAnteriorPaciente,
         getCirugias} from "../controllers/preanest.controller";

const router = Router();

// GET          /preId          Consultar expedientes
// GET          /preId/:id      Consultar 1 paciente
// POST         /preId          Crear paciente
// PATCH/PUT    /preId/:id      Actualizar paciente

/*------------------- PreId --------------------*/
router.get('/cx/:id', requireToken, getCirugias)
router.get('/exp', requireToken, getExpedientes)
router.get('/:id', requireToken, getPaciente);
router.post('/', requireToken, createPaciente);
router.put('/:id',  requireToken, updatePaciente);
router.post('/add', requireToken, createNuevoRegistroPaciente);
router.put('/add/:id',  requireToken, updateNuevoRegistroPaciente);
router.put('/ante/:id',  requireToken, updateAnteriorPaciente);

export default router;