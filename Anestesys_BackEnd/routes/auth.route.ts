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
         listCirujanos } from '../controllers/auth.controller';
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

router.post('/logout', logout);

router.get('/refresh', requireRefreshToken, refreshToken);

export default router;