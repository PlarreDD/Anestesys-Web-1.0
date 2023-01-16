import jwt, { JwtPayload } from 'jsonwebtoken';
import { tokenVerificationErrors } from '../utils/tokenManager';

export const requireToken = (req: any, res: any, next: any) => {
    interface JWTPayload{
        uid: String
    };

    try {
        let token = req.headers?.authorization;

        if(!token) 
            throw new Error('No Bearer');
           
        token = token.split(" ")[1];
        const { uid } = jwt.verify(token, String(process.env.JWT_SECRET)) as JwtPayload;
        
        req.uid = uid;

        next();
    } catch (error) {
        return res.status(401).send(error);
    }
};