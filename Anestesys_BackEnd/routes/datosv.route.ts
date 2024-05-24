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
         getEventos, getEvento, saveEventos, updateEventos, updateEvento, deleteEvento, saveDatosMSV, saveNuevoMenuTrans, updateNuevoMenuTrans, UpdateNuevoBalanceH, getNuevoModosVent, saveNuevoTiemposQX, saveNuevoDatosMSV, saveNuevoMedicamentos, updateNuevoMedicamentos, getNuevoMedicamentos, getNuevoRelevos, saveNuevoRelevos, updateNuevoRelevos, getNuevoEventos, saveNuevoEventos, updateNuevoEventos,
         UpdateBalanceHP,
         UpdateNuevoBalanceHP,
         getListaBalanceHP,
         getNuevoListaBalanceHP} from "../controllers/transanest.controller";

const router = Router();

/*----------------- Menú Transanestésico ------------------*/
router.post('/', requireToken, saveMenuTrans);
router.post('/add', requireToken, saveNuevoMenuTrans);
router.put('/:id',  requireToken, updateMenuTrans);
router.put('/add/:id/:cxid',  requireToken, updateNuevoMenuTrans);
router.get('/:pid', requireToken, getModosVent);
router.get('/add/:pid/:cxid', requireToken, getNuevoModosVent);
router.get('/uno/:dVId', requireToken, getModoVentilacion);
router.put('/uno/:id',  requireToken, updateVentilacion);
router.delete('/:dVId', requireToken, deleteModoVentilacion);
router.put('/bh/:id',  requireToken, UpdateBalanceH);
router.put('/bh/add/:id/:cxid',  requireToken, UpdateNuevoBalanceH);
router.put('/bhp/:id',  requireToken, UpdateBalanceHP);
router.put('/bhp/add/:id/:cxid',  requireToken, UpdateNuevoBalanceHP);
router.get('/bhp/:pid', requireToken, getListaBalanceHP);
router.get('/bhp/add/:pid/:cxid', requireToken, getNuevoListaBalanceHP);
/*----------------------- Tiempos QX ----------------------*/
router.post('/tqx', requireToken, saveTiemposQX);
router.post('/tqx/add', requireToken, saveNuevoTiemposQX);
/*---------- Datos del MSV -------------------- */
router.put('/msvData/:pid', requireToken, saveDatosMSV);
router.put('/msvData/add/:pid/:cxid', requireToken, saveNuevoDatosMSV);
/*---------- Datos de medicamentos -------------------- */
router.get('/medic/:pid' , requireToken, getMedicamentos);
router.get('/medic/add/:pid/:cxid' , requireToken, getNuevoMedicamentos);
router.get('/medic/uno/:id' , requireToken, getMedicamento);
router.post('/medic', requireToken, saveMedicamentos);
router.post('/medic/add', requireToken, saveNuevoMedicamentos);
router.put('/medic/:pid', requireToken, updateMedicamentos);
router.put('/medic/add/:pid/:cxid', requireToken, updateNuevoMedicamentos);
router.put('/medic/uno/:id', requireToken, updateMedicamento);
router.delete('/medic/:id', requireToken, deleteMedicamento);
/*---------- Datos de relevo -------------------- */
router.get('/relevo/:pid' , requireToken, getRelevos);
router.get('/relevo/add/:pid/:cxid' , requireToken, getNuevoRelevos);
router.get('/relevo/uno/:id' , requireToken, getRelevo);
router.post('/relevo', requireToken, saveRelevos);
router.post('/relevo/add', requireToken, saveNuevoRelevos);
router.put('/relevo/:pid', requireToken, updateRelevos);
router.put('/relevo/add/:pid/:cxid', requireToken, updateNuevoRelevos);
router.put('/relevo/uno/:id', requireToken, updateRelevo);
router.delete('/relevo/:id', requireToken, deleteRelevo);
/*---------- Datos de evento -------------------- */
router.get('/evento/:pid' , requireToken, getEventos);
router.get('/evento/add/:pid/:cxid' , requireToken, getNuevoEventos);
router.get('/evento/uno/:id' , requireToken, getEvento);
router.post('/evento', requireToken, saveEventos);
router.post('/evento/add', requireToken, saveNuevoEventos);
router.put('/evento/:pid', requireToken, updateEventos);
router.put('/evento/add/:pid/:cxid', requireToken, updateNuevoEventos);
router.put('/evento/uno/:id', requireToken, updateEvento);
router.delete('/evento/:id', requireToken, deleteEvento);
export default router;