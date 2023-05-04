import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { saveNotaPA,
         updateNotaPA } from "../controllers/postanest.controller";

const router = Router();

/*------------------- PreId --------------------*/
router.post('/', requireToken, saveNotaPA);
router.put('/:id',  requireToken, updateNotaPA);

export default router;