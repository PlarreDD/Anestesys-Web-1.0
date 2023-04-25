import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { saveEstudios, getEstudios, updateEstudios
          } from "../controllers/preanest.controller";

const router = Router();

// POST         /valora          Crear
// PATCH/PUT    /valora/:id      Actualizar

/*------------------- PreValoración --------------------*/
router.get('/' , requireToken, getEstudios)
router.post('/', requireToken, saveEstudios);
router.put('/:vid',  requireToken, updateEstudios);

export default router;