"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const requireToken_1 = require("../middlewares/requireToken");
const postanest_controller_1 = require("../controllers/postanest.controller");
const router = (0, express_1.Router)();
/*------------------- PreId --------------------*/
router.post('/', requireToken_1.requireToken, postanest_controller_1.saveRecuperacion);
router.post('/add', requireToken_1.requireToken, postanest_controller_1.saveNuevoRecuperacion);
router.put('/:id', requireToken_1.requireToken, postanest_controller_1.updateRecuperacion);
router.put('/add/:id/:cxid', requireToken_1.requireToken, postanest_controller_1.updateNuevoRecuperacion);
exports.default = router;
