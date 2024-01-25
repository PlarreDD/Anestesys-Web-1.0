import { Router } from 'express';
import { login,
         logout,
         register,
         refreshToken, 
         updateMedico,
         updateValorTutorialPre,
         updateValorTutorialTrans,
         updateValorTutorialPost} from '../controllers/auth.controller';
import { requireRefreshToken } from '../middlewares/requireRefreshToken';
import { bodyLoginValidator,
         bodyRegisterValidator } from '../middlewares/validationManager';

const router = Router();

router.post("/login", bodyLoginValidator, login);
router.post("/register", bodyRegisterValidator, register);
router.put('/updateMed/:id' ,requireRefreshToken, updateMedico)
router.put('/pre/:id', requireRefreshToken, updateValorTutorialPre)
router.put('/trans/:id', requireRefreshToken, updateValorTutorialTrans)
router.put('/post/:id', requireRefreshToken, updateValorTutorialPost)
router.post('/logout', logout);

router.get('/refresh', requireRefreshToken, refreshToken);

export default router;