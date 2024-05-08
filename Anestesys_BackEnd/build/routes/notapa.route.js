"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const requireToken_1 = require("../middlewares/requireToken");
const postanest_controller_1 = require("../controllers/postanest.controller");
const router = (0, express_1.Router)();
/*------------------- PreId --------------------*/
router.post('/', requireToken_1.requireToken, postanest_controller_1.saveNotaPA);
router.post('/add', requireToken_1.requireToken, postanest_controller_1.saveNuevoNotaPA);
router.put('/:id', requireToken_1.requireToken, postanest_controller_1.updateNotaPA);
router.put('/add/:id/:cxid', requireToken_1.requireToken, postanest_controller_1.updateNuevoNotaPA);
router.get('/:id', requireToken_1.requireToken, postanest_controller_1.listNotaPA);
router.get('/add/:id/:cxid', requireToken_1.requireToken, postanest_controller_1.listNuevoNotaPA);
exports.default = router;
