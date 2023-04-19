import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { savePrePlan,
         updatePrePlan } from "../controllers/preanest.controller";


const router = Router();

// POST         /nota          Crear
// PATCH/PUT    /nota/:id      Actualizar

/*------------------- PreValoración --------------------*/
router.post('/', requireToken, savePrePlan);
router.put('/:id',  requireToken, updatePrePlan);

export default router;