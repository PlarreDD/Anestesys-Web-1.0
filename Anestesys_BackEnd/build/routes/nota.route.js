"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const requireToken_1 = require("../middlewares/requireToken");
const preanest_controller_1 = require("../controllers/preanest.controller");
const router = (0, express_1.Router)();
/*------------------- PreId --------------------*/
router.post('/', requireToken_1.requireToken, preanest_controller_1.saveNota);
router.put('/:id', requireToken_1.requireToken, preanest_controller_1.updateNota);
router.post('/add', requireToken_1.requireToken, preanest_controller_1.saveNuevoNota);
router.put('/add/:id/:cxid', requireToken_1.requireToken, preanest_controller_1.updateNuevoNota);
exports.default = router;
