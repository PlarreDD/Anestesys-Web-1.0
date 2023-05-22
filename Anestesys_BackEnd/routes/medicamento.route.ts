import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { getMedicamentos,
         getMedicamento,
         createMedicamento,
         updateMedicamento,
         deleteMedicamento } from '../controllers/medicamento.controller';

const router = Router();

router.get('/', requireToken, getMedicamentos);
router.get('/:id', requireToken, getMedicamento);
router.post('/', requireToken, createMedicamento);
router.put('/:id', requireToken, updateMedicamento);
router.delete('/:id', requireToken, deleteMedicamento);

export default router;