"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const requireToken_1 = require("../middlewares/requireToken");
const preanest_controller_1 = require("../controllers/preanest.controller");
const router = (0, express_1.Router)();
// GET          /preId          Consultar expedientes
// GET          /preId/:id      Consultar 1 paciente
// POST         /preId          Crear paciente
// PATCH/PUT    /preId/:id      Actualizar paciente
/*------------------- PreId --------------------*/
router.get('/cx/:id', requireToken_1.requireToken, preanest_controller_1.getCirugias);
router.get('/cirugia/cx/:id', requireToken_1.requireToken, preanest_controller_1.getPDFData);
router.get('/exp/:numExpediente', requireToken_1.requireToken, preanest_controller_1.getExpedientes);
router.get('/:id', requireToken_1.requireToken, preanest_controller_1.getPaciente);
router.post('/', requireToken_1.requireToken, preanest_controller_1.createPaciente);
router.put('/:id', requireToken_1.requireToken, preanest_controller_1.updatePaciente);
router.post('/add', requireToken_1.requireToken, preanest_controller_1.createNuevoRegistroPaciente);
router.put('/add/:id', requireToken_1.requireToken, preanest_controller_1.updateNuevoRegistroPaciente);
router.put('/ante/:id', requireToken_1.requireToken, preanest_controller_1.updateAnteriorPaciente);
router.get('/cie10/uno/:nombre', requireToken_1.requireToken, preanest_controller_1.getCIE10);
router.get('/cie9/uno/:nombre', requireToken_1.requireToken, preanest_controller_1.getCIE9);
exports.default = router;
