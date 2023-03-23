import { Router } from "express";
import { requireToken } from "../middlewares/requireToken";
import { getAllPacientes, 
         createPaciente,
         updatePaciente } from "../controllers/preid.controller";

const router = Router();

// GET          /preId          all links
// GET          /preId/:id      1 link
// POST         /preId          create links
// PATCH/PUT    /preId/:id      update links
// DELETE       /preId/:id      remove links

router.get('/', requireToken, getAllPacientes);
router.post('/', requireToken, createPaciente);
router.put('/:id',  requireToken, updatePaciente)
export default router;