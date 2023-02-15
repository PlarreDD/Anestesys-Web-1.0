import { Router } from 'express';
import { infoUser,
         login,
         logout,
         register,
         refreshToken } from '../controllers/auth.controller';
import { requireToken } from '../middlewares/requireToken';
import { requireRefreshToken } from '../middlewares/requireRefreshToken';
import { bodyLoginValidator,
         bodyRegisterValidator } from '../middlewares/validationManager';

const router = Router();

router.post("/login", bodyLoginValidator, login);
router.post("/register", bodyRegisterValidator, register);
router.post('/logout', logout);

router.get('/protected', requireToken, infoUser);
router.get('/refresh', requireRefreshToken, refreshToken);

export default router;