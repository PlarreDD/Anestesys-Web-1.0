import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { saveNotaPA,
         updateNotaPA,
         listNotaPA, 
         saveNuevoNotaPA,
         updateNuevoNotaPA,
         listNuevoNotaPA} from "../controllers/postanest.controller";

const router = Router();

/*------------------- PreId --------------------*/
router.post('/', requireToken, saveNotaPA);
router.post('/add', requireToken, saveNuevoNotaPA);
router.put('/:id',  requireToken, updateNotaPA);
router.put('/add/:id/:cxid',  requireToken, updateNuevoNotaPA);
router.get('/:id', requireToken, listNotaPA);
router.get('/add/:id/:cxid', requireToken, listNuevoNotaPA);

export default router;