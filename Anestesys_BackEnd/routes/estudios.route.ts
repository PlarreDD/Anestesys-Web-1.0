import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { saveEstudios, getEstudios, updateEstudios, updateEstudio, deleteEstudio, getEstudio
          } from "../controllers/preanest.controller";

const router = Router();

// POST         /valora          Crear
// PATCH/PUT    /valora/:id      Actualizar

/*------------------- PreValoración --------------------*/
router.get('/:vid' , requireToken, getEstudios)
router.get('/uno/:id' , requireToken, getEstudio)
router.post('/', requireToken, saveEstudios);
router.put('/:vid',  requireToken, updateEstudios);
router.put('/uno/:id', requireToken, updateEstudio);

router.delete('/:id', requireToken, deleteEstudio)

export default router;