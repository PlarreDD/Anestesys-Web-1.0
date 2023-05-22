import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { pingDevice } from '../controllers/scanMVS.controller';

const router = Router();

router.get('/', requireToken, pingDevice);
// router.get('/:id', requireToken, getMedicamento);
// router.post('/', requireToken, createMedicamento);
// router.put('/:id', requireToken, updateMedicamento);
// router.delete('/:id', requireToken, deleteMedicamento);

export default router;