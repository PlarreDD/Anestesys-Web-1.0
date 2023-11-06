import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { saveNuevoRecuperacion, saveRecuperacion,
         updateNuevoRecuperacion,
         updateRecuperacion } from "../controllers/postanest.controller";

const router = Router();

/*------------------- PreId --------------------*/
router.post('/', requireToken, saveRecuperacion);
router.post('/add', requireToken, saveNuevoRecuperacion);
router.put('/:id',  requireToken, updateRecuperacion);
router.put('/add/:id/:cxid',  requireToken, updateNuevoRecuperacion);

export default router;