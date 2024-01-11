import { Router } from 'express';
import { login,
         logout,
         register,
         refreshToken, 
         updateMedico} from '../controllers/auth.controller';
import { requireRefreshToken } from '../middlewares/requireRefreshToken';
import { bodyLoginValidator,
         bodyRegisterValidator } from '../middlewares/validationManager';

const router = Router();

router.post("/login", bodyLoginValidator, login);
router.post("/register", bodyRegisterValidator, register);
router.put('/updateMed/:id' ,requireRefreshToken, updateMedico)
router.post('/logout', logout);

router.get('/refresh', requireRefreshToken, refreshToken);

export default router;