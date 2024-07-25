"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const requireToken_1 = require("../middlewares/requireToken");
const preanest_controller_1 = require("../controllers/preanest.controller");
const cirugias_controller_1 = require("../controllers/cirugias.controller");
const router = (0, express_1.Router)();
// GET          /preId          Consultar expedientes
// GET          /preId/:id      Consultar 1 paciente
// POST         /preId          Crear paciente
// PATCH/PUT    /preId/:id      Actualizar paciente
/*------------------- PreId --------------------*/
router.get('/cx/:id', requireToken_1.requireToken, preanest_controller_1.getCirugia);
router.get('/cirugia/cx/:id', requireToken_1.requireToken, preanest_controller_1.getPDFData);
router.get('/exp/:numExpediente', requireToken_1.requireToken, preanest_controller_1.getExpedientes);
router.get('/:id', requireToken_1.requireToken, preanest_controller_1.getPaciente);
router.post('/', requireToken_1.requireToken, preanest_controller_1.createPaciente);
router.put('/:id', requireToken_1.requireToken, preanest_controller_1.updatePaciente);
router.post('/add', requireToken_1.requireToken, preanest_controller_1.createNuevoRegistroPaciente);
router.put('/add/:id', requireToken_1.requireToken, preanest_controller_1.updateNuevoRegistroPaciente);
// router.put('/ante/:id',  requireToken, updateAnteriorPaciente);
router.get('/cie10/uno/:nombre', requireToken_1.requireToken, preanest_controller_1.getCIE10);
router.get('/cie9/uno/:nombre', requireToken_1.requireToken, preanest_controller_1.getCIE9);
///////////////////////// NUEVOS MÉTODOS /////////////////////////
router.post('/cxN/', requireToken_1.requireToken, cirugias_controller_1.saveCx);
router.put('/cxN/:id', requireToken_1.requireToken, cirugias_controller_1.updateFichaId);
router.post('/svE', requireToken_1.requireToken, cirugias_controller_1.savePreEstudios);
router.post('/svMSVd', requireToken_1.requireToken, cirugias_controller_1.saveMSVdat);
router.post('/svMed', requireToken_1.requireToken, cirugias_controller_1.saveMedicamentos);
router.post('/svRel', requireToken_1.requireToken, cirugias_controller_1.saveRelevos);
router.post('/svEv', requireToken_1.requireToken, cirugias_controller_1.saveEventos);
router.post('/svCORN', requireToken_1.requireToken, cirugias_controller_1.saveCasoObsRN);
router.post('/svSumMed', requireToken_1.requireToken, cirugias_controller_1.updateSumaMedicamentos);
router.get('/CN/:id', requireToken_1.requireToken, cirugias_controller_1.getCxN);
router.get('/cx/:id', requireToken_1.requireToken, cirugias_controller_1.getCirugias);
router.delete('/dltE', requireToken_1.requireToken, cirugias_controller_1.deletePreEstudios);
router.delete('/dltMed', requireToken_1.requireToken, cirugias_controller_1.deleteMedicamento);
router.delete('/dltRel', requireToken_1.requireToken, cirugias_controller_1.deleteRelevos);
router.delete('/dltEv', requireToken_1.requireToken, cirugias_controller_1.deleteEventos);
router.delete('/dltCORN', requireToken_1.requireToken, cirugias_controller_1.deleteCasoObsRN);
exports.default = router;
