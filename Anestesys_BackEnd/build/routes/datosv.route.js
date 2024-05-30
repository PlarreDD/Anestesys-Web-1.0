"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const requireToken_1 = require("../middlewares/requireToken");
const transanest_controller_1 = require("../controllers/transanest.controller");
const router = (0, express_1.Router)();
/*----------------- Menú Transanestésico ------------------*/
router.post('/', requireToken_1.requireToken, transanest_controller_1.saveMenuTrans);
router.post('/add', requireToken_1.requireToken, transanest_controller_1.saveNuevoMenuTrans);
router.put('/:id', requireToken_1.requireToken, transanest_controller_1.updateMenuTrans);
router.put('/add/:id/:cxid', requireToken_1.requireToken, transanest_controller_1.updateNuevoMenuTrans);
router.get('/:pid', requireToken_1.requireToken, transanest_controller_1.getModosVent);
router.get('/add/:pid/:cxid', requireToken_1.requireToken, transanest_controller_1.getNuevoModosVent);
router.get('/uno/:dVId', requireToken_1.requireToken, transanest_controller_1.getModoVentilacion);
router.put('/uno/:id', requireToken_1.requireToken, transanest_controller_1.updateVentilacion);
router.delete('/:dVId', requireToken_1.requireToken, transanest_controller_1.deleteModoVentilacion);
router.put('/bh/:id', requireToken_1.requireToken, transanest_controller_1.UpdateBalanceH);
router.put('/bh/add/:id/:cxid', requireToken_1.requireToken, transanest_controller_1.UpdateNuevoBalanceH);
router.put('/bhp/:id', requireToken_1.requireToken, transanest_controller_1.UpdateBalanceHP);
router.put('/bhp/add/:id/:cxid', requireToken_1.requireToken, transanest_controller_1.UpdateNuevoBalanceHP);
router.get('/bhp/:pid', requireToken_1.requireToken, transanest_controller_1.getListaBalanceHP);
router.get('/bhp/add/:pid/:cxid', requireToken_1.requireToken, transanest_controller_1.getNuevoListaBalanceHP);
/*----------------------- Tiempos QX ----------------------*/
router.post('/tqx', requireToken_1.requireToken, transanest_controller_1.saveTiemposQX);
router.post('/tqx/add', requireToken_1.requireToken, transanest_controller_1.saveNuevoTiemposQX);
/*---------- Datos del MSV -------------------- */
router.put('/msvData/:pid', requireToken_1.requireToken, transanest_controller_1.saveDatosMSV);
router.put('/msvData/add/:pid/:cxid', requireToken_1.requireToken, transanest_controller_1.saveNuevoDatosMSV);
/*---------- Datos de medicamentos -------------------- */
router.get('/medic/:pid', requireToken_1.requireToken, transanest_controller_1.getMedicamentos);
router.get('/medic/add/:pid/:cxid', requireToken_1.requireToken, transanest_controller_1.getNuevoMedicamentos);
router.get('/medic/uno/:id', requireToken_1.requireToken, transanest_controller_1.getMedicamento);
router.post('/medic', requireToken_1.requireToken, transanest_controller_1.saveMedicamentos);
router.post('/medic/add', requireToken_1.requireToken, transanest_controller_1.saveNuevoMedicamentos);
router.put('/medic/:pid', requireToken_1.requireToken, transanest_controller_1.updateMedicamentos);
router.put('/medic/add/:pid/:cxid', requireToken_1.requireToken, transanest_controller_1.updateNuevoMedicamentos);
router.put('/medic/uno/:id', requireToken_1.requireToken, transanest_controller_1.updateMedicamento);
router.delete('/medic/:id', requireToken_1.requireToken, transanest_controller_1.deleteMedicamento);
/*---------- Datos de relevo -------------------- */
router.get('/relevo/:pid', requireToken_1.requireToken, transanest_controller_1.getRelevos);
router.get('/relevo/add/:pid/:cxid', requireToken_1.requireToken, transanest_controller_1.getNuevoRelevos);
router.get('/relevo/uno/:id', requireToken_1.requireToken, transanest_controller_1.getRelevo);
router.post('/relevo', requireToken_1.requireToken, transanest_controller_1.saveRelevos);
router.post('/relevo/add', requireToken_1.requireToken, transanest_controller_1.saveNuevoRelevos);
router.put('/relevo/:pid', requireToken_1.requireToken, transanest_controller_1.updateRelevos);
router.put('/relevo/add/:pid/:cxid', requireToken_1.requireToken, transanest_controller_1.updateNuevoRelevos);
router.put('/relevo/uno/:id', requireToken_1.requireToken, transanest_controller_1.updateRelevo);
router.delete('/relevo/:id', requireToken_1.requireToken, transanest_controller_1.deleteRelevo);
/*---------- Datos de evento -------------------- */
router.get('/evento/:pid', requireToken_1.requireToken, transanest_controller_1.getEventos);
router.get('/evento/add/:pid/:cxid', requireToken_1.requireToken, transanest_controller_1.getNuevoEventos);
router.get('/evento/uno/:id', requireToken_1.requireToken, transanest_controller_1.getEvento);
router.post('/evento', requireToken_1.requireToken, transanest_controller_1.saveEventos);
router.post('/evento/add', requireToken_1.requireToken, transanest_controller_1.saveNuevoEventos);
router.put('/evento/:pid', requireToken_1.requireToken, transanest_controller_1.updateEventos);
router.put('/evento/add/:pid/:cxid', requireToken_1.requireToken, transanest_controller_1.updateNuevoEventos);
router.put('/evento/uno/:id', requireToken_1.requireToken, transanest_controller_1.updateEvento);
router.delete('/evento/:id', requireToken_1.requireToken, transanest_controller_1.deleteEvento);
exports.default = router;
