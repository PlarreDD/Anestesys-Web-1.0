import { Router } from 'express';
import { login,
         logout,
         register,
         refreshToken, 
         updateMedico,
         updateValorTutorialPre,
         updateValorTutorialTrans,
         updateValorTutorialPost,
         updateContrasena,
         updateCirujano,
         listCirujanos,
         deleteCirujano,
         updateAnestVPA,
         listanestVPA,
         deleteanestVPA,
         updateResAnest,
         listaresAnest,
         deleteresAnest } from '../controllers/auth.controller';
import { requireRefreshToken } from '../middlewares/requireRefreshToken';
import { bodyLoginValidator,
         bodyRegisterValidator } from '../middlewares/validationManager';

const router = Router();

router.post("/login", bodyLoginValidator, login);
router.post("/register", bodyRegisterValidator, register);
router.put('/updateMed/:id' ,requireRefreshToken, updateMedico)
router.put('/preTuto/:id', requireRefreshToken, updateValorTutorialPre)
router.put('/transTuto/:id', requireRefreshToken, updateValorTutorialTrans)
router.put('/postTuto/:id', requireRefreshToken, updateValorTutorialPost)
router.put('/password/:id', requireRefreshToken, updateContrasena)

router.put('/updtCrjn/:id', requireRefreshToken, updateCirujano)
router.get('/lstCrjn/:id', requireRefreshToken, listCirujanos)
router.delete('/dltCrjn/:id', requireRefreshToken, deleteCirujano)

router.put('/updtAnestVPA/:id', requireRefreshToken, updateAnestVPA)
router.get('/lstAnestVPA/:id', requireRefreshToken, listanestVPA)
router.delete('/dltAnestVPA/:id', requireRefreshToken, deleteanestVPA)

router.put('/updtResAnest/:id', requireRefreshToken, updateResAnest)
router.get('/lstResAnest/:id', requireRefreshToken, listaresAnest)
router.delete('/dltResAnest/:id', requireRefreshToken, deleteresAnest)

router.post('/logout', logout);

router.get('/refresh', requireRefreshToken, refreshToken);

export default router;