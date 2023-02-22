import {Router} from "express";
//import { createLinks, getLinks, getLink, removeLink, updateLink } from "../controllers/link.controller.js";
//import { requireToken } from "../middlewares/requireToken.js";
//import { bodyLinkValidator, paramsLinkValidator } from "../middlewares/validatorManager.js";
const router = Router();

// GET          /links          all links
// GET          /links/:id      all links
// POST         /links          create links
// PATCH/PUT    /links/:id      update links
// DELETE       /links/:id      remove links

// router.get('/', requireToken, getLinks);
//router.get('/:id', requireToken, getLink);// Recurso anterior
// router.get('/:nanoLink', getLink);
// router.post('/', requireToken, bodyLinkValidator, createLinks);
// router.delete('/:id', requireToken, paramsLinkValidator, removeLink);
// router.patch('/:id', requireToken, paramsLinkValidator, bodyLinkValidator, updateLink);

export default router;