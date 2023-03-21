import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { getInfo, 
         createPaciente,
         updatePaciente } from "../controllers/preid.controller";

const router = Router();

// GET          /preId          all links
// GET          /preId/:id      all links
// POST         /preId          create links
// PATCH/PUT    /preId/:id      update links
// DELETE       /preId/:id      remove links

router.get('/', requireToken, getInfo);
router.post('/', requireToken, createPaciente);
router.put('/:id',  requireToken, updatePaciente)
export default router;