import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { getPaciente,
         createPaciente,
         updatePaciente, 
         getExpedientes,
         createNuevoRegistroPaciente,
         updateNuevoRegistroPaciente,
         updateAnteriorPaciente,
         getCirugias,
         getPDFData,
         getCIE10,
         getCIE9} from "../controllers/preanest.controller";

import {
    saveCx
} from "../controllers/cirugias.controller";

const router = Router();

// GET          /preId          Consultar expedientes
// GET          /preId/:id      Consultar 1 paciente
// POST         /preId          Crear paciente
// PATCH/PUT    /preId/:id      Actualizar paciente

/*------------------- PreId --------------------*/
router.get('/cx/:id', requireToken, getCirugias)
router.get('/cirugia/cx/:id', requireToken, getPDFData)
router.get('/exp/:numExpediente', requireToken, getExpedientes)
router.get('/:id', requireToken, getPaciente);
router.post('/', requireToken, createPaciente);
router.put('/:id',  requireToken, updatePaciente);
router.post('/add', requireToken, createNuevoRegistroPaciente);
router.put('/add/:id',  requireToken, updateNuevoRegistroPaciente);
router.put('/ante/:id',  requireToken, updateAnteriorPaciente);
router.get('/cie10/uno/:nombre', requireToken, getCIE10);
router.get('/cie9/uno/:nombre', requireToken, getCIE9);

router.post('/cxN', requireToken, saveCx);

export default router;