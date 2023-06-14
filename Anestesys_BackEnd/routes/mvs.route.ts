import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { registerMSV,
         listMSV,
         deleteMSV, getMSVData} from '../controllers/scanMVS.controller';    

const router = Router();

router.post('/', requireToken, registerMSV);
router.get('/', requireToken, listMSV);
router.delete('/:id', requireToken, deleteMSV);
router.get('/monitor', requireToken, getMSVData);

export default router;