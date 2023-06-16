import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { registerMSV,
         listMSV,
         deleteMSV,
         startMSVData,
         stopMSVData,
         handleMonitorData} from '../controllers/scanMVS.controller';    

const router = Router();

router.post('/', requireToken, registerMSV);
router.get('/', requireToken, listMSV);
router.delete('/:id', requireToken, deleteMSV);
router.get('/monitor', requireToken, startMSVData);
router.get('/stop', requireToken, stopMSVData);
router.get('/com', requireToken, handleMonitorData);

export default router;