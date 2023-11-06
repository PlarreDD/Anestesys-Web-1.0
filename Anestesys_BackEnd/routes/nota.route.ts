import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { saveNota,
         saveNuevoNota,
         updateNota, 
         updateNuevoNota} from "../controllers/preanest.controller";

const router = Router();

/*------------------- PreId --------------------*/
router.post('/', requireToken, saveNota);
router.put('/:id',  requireToken, updateNota);
router.post('/add', requireToken, saveNuevoNota);
router.put('/add/:id/:cxid',  requireToken, updateNuevoNota);

export default router;