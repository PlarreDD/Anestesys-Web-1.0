import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { saveEstudios, getEstudios
          } from "../controllers/preanest.controller";


const router = Router();

// POST         /valora          Crear
// PATCH/PUT    /valora/:id      Actualizar

/*------------------- PreValoración --------------------*/
router.get('/' , requireToken, getEstudios)
router.post('/', requireToken, saveEstudios);
// router.put('/:id',  requireToken, updatePreAntecedentes);

export default router;