"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const requireToken_1 = require("../middlewares/requireToken");
const preanest_controller_1 = require("../controllers/preanest.controller");
const router = (0, express_1.Router)();
// POST         /nota          Crear
// PATCH/PUT    /nota/:id      Actualizar
/*------------------- PreValoración --------------------*/
router.post('/', requireToken_1.requireToken, preanest_controller_1.savePreAntecedentes);
router.put('/:id', requireToken_1.requireToken, preanest_controller_1.updatePreAntecedentes);
router.post('/add', requireToken_1.requireToken, preanest_controller_1.saveNuevoPreAntecedentes);
router.put('/add/:id/:cxid', requireToken_1.requireToken, preanest_controller_1.updateNuevoPreAntecedentes);
exports.default = router;
