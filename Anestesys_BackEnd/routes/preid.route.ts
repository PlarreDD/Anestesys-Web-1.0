import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { getAllPacientes,
         getPaciente,
         createPaciente,
         updatePaciente } from "../controllers/preid.controller";

const router = Router();

// GET          /preId          Consultar pacientes
// GET          /preId/:id      Consultar 1 paciente
// POST         /preId          Crear paciente
// PATCH/PUT    /preId/:id      Actualizar paciente

router.get('/', requireToken, getAllPacientes);
router.get('/:id', requireToken, getPaciente);
router.post('/', requireToken, createPaciente);
router.put('/:id',  requireToken, updatePaciente)
export default router;