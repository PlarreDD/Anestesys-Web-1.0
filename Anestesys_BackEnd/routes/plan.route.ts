import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { saveNuevoPrePlan, savePrePlan,
         updateNuevoPrePlan,
         updatePrePlan } from "../controllers/preanest.controller";


const router = Router();

// POST         /nota          Crear
// PATCH/PUT    /nota/:id      Actualizar

/*------------------- PreValoración --------------------*/
router.post('/', requireToken, savePrePlan);
router.put('/:id',  requireToken, updatePrePlan);
router.post('/add', requireToken, saveNuevoPrePlan);
router.put('/add/:id/:cxid',  requireToken, updateNuevoPrePlan);

export default router;