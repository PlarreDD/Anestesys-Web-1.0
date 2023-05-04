import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { saveNota,
         updateNota } from "../controllers/preanest.controller";

const router = Router();

/*------------------- PreId --------------------*/
router.post('/', requireToken, saveNota);
router.put('/:id',  requireToken, updateNota);

export default router;