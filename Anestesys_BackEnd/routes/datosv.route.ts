import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { saveMenuTrans,
         updateMenuTrans,
         getModosVent } from "../controllers/transanest.controller";

const router = Router();

/*------------------- PreId --------------------*/
router.post('/', requireToken, saveMenuTrans);
router.put('/:id',  requireToken, updateMenuTrans);
router.get('/:pid', requireToken, getModosVent);

export default router;