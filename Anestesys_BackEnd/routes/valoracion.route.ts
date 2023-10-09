import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { saveNuevoPreAntecedentes, savePreAntecedentes,
         updateNuevoPreAntecedentes,
         updatePreAntecedentes } from "../controllers/preanest.controller";


const router = Router();

// POST         /nota          Crear
// PATCH/PUT    /nota/:id      Actualizar

/*------------------- PreValoración --------------------*/
router.post('/', requireToken, savePreAntecedentes);
router.put('/:id',  requireToken, updatePreAntecedentes);
router.post('/add', requireToken, saveNuevoPreAntecedentes);
router.put('/add/:id/:cxid', requireToken, updateNuevoPreAntecedentes)

export default router;