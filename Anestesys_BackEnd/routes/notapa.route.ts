import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { saveNotaPA,
         updateNotaPA,
         listNotaPA } from "../controllers/postanest.controller";

const router = Router();

/*------------------- PreId --------------------*/
router.post('/', requireToken, saveNotaPA);
router.put('/:id',  requireToken, updateNotaPA);
router.get('/:id', requireToken, listNotaPA);

export default router;