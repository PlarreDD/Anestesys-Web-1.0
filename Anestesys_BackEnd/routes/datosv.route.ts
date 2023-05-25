import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { saveMenuTrans,
         updateMenuTrans,
         getModosVent,
         getModoVentilacion,
         updateVentilacion,
         deleteModoVentilacion,
         UpdateBalanceH,
         saveTiemposQX } from "../controllers/transanest.controller";

const router = Router();

/*----------------- Menú Transanestésico ------------------*/
router.post('/', requireToken, saveMenuTrans);
router.put('/:id',  requireToken, updateMenuTrans);
router.get('/:pid', requireToken, getModosVent);
router.get('/uno/:dVId', requireToken, getModoVentilacion);
router.put('/uno/:id',  requireToken, updateVentilacion);
router.delete('/:dVId', requireToken, deleteModoVentilacion);
router.put('/bh/:id',  requireToken, UpdateBalanceH);
/*----------------------- Tiempos QX ----------------------*/
router.post('/tqx', requireToken, saveTiemposQX);

export default router;