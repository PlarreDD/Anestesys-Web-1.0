//import { tokenVerificationErrors } from '../utils/tokenManager';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const requireRefreshToken = (req:any, res:any, next:any) => {
    interface JWTPayload{
        uid: String
    };

    try {
        const refreshTokenCookie = req.cookies.refreshToken;
            
        if(!refreshTokenCookie) throw new Error("No Existe el Token");
    
        const {uid} = jwt.verify(refreshTokenCookie, String(process.env.JWT_REFRESH)) as JwtPayload;

        req.uid = uid;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json(error/*{error: tokenVerificationErrors[error.message]}*/);
    }
};