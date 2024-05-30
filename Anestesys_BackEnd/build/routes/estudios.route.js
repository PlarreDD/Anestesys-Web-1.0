"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const requireToken_1 = require("../middlewares/requireToken");
const preanest_controller_1 = require("../controllers/preanest.controller");
const router = (0, express_1.Router)();
// POST         /valora          Crear
// PATCH/PUT    /valora/:id      Actualizar
/*------------------- PreValoración --------------------*/
router.get('/:vid', requireToken_1.requireToken, preanest_controller_1.getEstudios);
router.get('/uno/:id', requireToken_1.requireToken, preanest_controller_1.getEstudio);
router.post('/', requireToken_1.requireToken, preanest_controller_1.saveEstudios);
router.put('/:vid', requireToken_1.requireToken, preanest_controller_1.updateEstudios);
router.put('/uno/:id', requireToken_1.requireToken, preanest_controller_1.updateEstudio);
router.delete('/:id', requireToken_1.requireToken, preanest_controller_1.deleteEstudio);
exports.default = router;
