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
         saveMedicamentos, updateMedicamentos, getMedicamentos, getMedicamento, updateMedicamento, deleteMedicamento, 
         getRelevos, getRelevo, saveRelevos, updateRelevos, updateRelevo, deleteRelevo, 
         getEventos, getEvento, saveEventos, updateEventos, updateEvento, deleteEvento, saveDatosMSV} from "../controllers/transanest.controller";

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
/*---------- Datos del MSV -------------------- */
router.put('/msvData/:pid', requireToken, saveDatosMSV);
/*---------- Datos de medicamentos -------------------- */
router.get('/medic/:pid' , requireToken, getMedicamentos);
router.get('/medic/uno/:id' , requireToken, getMedicamento);
router.post('/medic', requireToken, saveMedicamentos);
router.put('/medic/:pid', requireToken, updateMedicamentos);
router.put('/medic/uno/:id', requireToken, updateMedicamento);
router.delete('/medic/:id', requireToken, deleteMedicamento);
/*---------- Datos de relevo -------------------- */
router.get('/relevo/:pid' , requireToken, getRelevos);
router.get('/relevo/uno/:id' , requireToken, getRelevo);
router.post('/relevo', requireToken, saveRelevos);
router.put('/relevo/:pid', requireToken, updateRelevos);
router.put('/relevo/uno/:id', requireToken, updateRelevo);
router.delete('/relevo/:id', requireToken, deleteRelevo);
/*---------- Datos de evento -------------------- */
router.get('/evento/:pid' , requireToken, getEventos);
router.get('/evento/uno/:id' , requireToken, getEvento);
router.post('/evento', requireToken, saveEventos);
router.put('/evento/:pid', requireToken, updateEventos);
router.put('/evento/uno/:id', requireToken, updateEvento);
router.delete('/evento/:id', requireToken, deleteEvento);
export default router;