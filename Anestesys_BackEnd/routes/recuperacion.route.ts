import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { saveRecuperacion,
         updateRecuperacion } from "../controllers/postanest.controller";

const router = Router();

/*------------------- PreId --------------------*/
router.post('/', requireToken, saveRecuperacion);
router.put('/:id',  requireToken, updateRecuperacion);

export default router;