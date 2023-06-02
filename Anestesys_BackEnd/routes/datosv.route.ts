import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { saveMenuTrans,
         updateMenuTrans,
         getModosVent,
         getModoVentilacion,
         updateVentilacion,
         deleteModoVentilacion,
         UpdateBalanceH,
         saveTiemposQX, 
         saveMedicamentos, updateMedicamentos, getMedicamentos, getMedicamento, updateMedicamento, deleteMedicamento } from "../controllers/transanest.controller";

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
/*---------- Datos de medicamentos -------------------- */
router.get('/medic/:pid' , requireToken, getMedicamentos);
router.get('/medic/uno/:id' , requireToken, getMedicamento);
router.post('/medic', requireToken, saveMedicamentos);
router.put('/medic/:pid', requireToken, updateMedicamentos);
router.put('/medic/uno/:id', requireToken, updateMedicamento);
router.delete('/medic/:id', requireToken, deleteMedicamento);
export default router;