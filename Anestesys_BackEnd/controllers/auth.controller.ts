// se cambio id por _id para el uso de uid revisar su funcionamiento

import { User } from "../models/User";
import { generateToken, generateRefreshToken } from "../utils/tokenManager";
import bcryptjs from "bcryptjs";

interface JWTGen{
    token: StringConstructor
    expiresIn: NumberConstructor
};

export const register = async (req:any, res:any) => {
    const {email, password, nomMed, apMed} = req.body;

    try{
        let user = await User.findOne({email});

        if(user) throw {code: 11000};

        user = new User({email, password, nomMed, apMed});
        await user.save();

        //Generar el JWT
        const {token, expiresIn} = generateToken(user.id) as JWTGen;

        generateRefreshToken(user.id, res);
       
        return res.status(201).json({token, expiresIn});
    }catch(error){
        console.log(error);

        if(error.code === 11000){
            return res.status(400).json({error: "Usuario ya registrado"});
        }

        return res.status(500).json({error: "Error con el servidor"});
    }
};

export const login = async (req:any, res:any) => {   
    try{        
        const {email, password} = req.body;

        let user = await User.findOne({email});

        if(!user) return res.status(403).json({error: "No existe el usuario"});

        //const respuestaPasword = await user.comparePassword(password);//Primera version
        const respuestaPasword = await bcryptjs.compare(password, user.password);//Probando si funciona
        
        if(!respuestaPasword) return res.status(403).json({error: "Contraseña Incorrecta"});
        
        //Generar el JWT
        const {token, expiresIn} = generateToken(user.id) as JWTGen;
            
        generateRefreshToken(user.id, res);
        
        return res.json({token, expiresIn});
    }catch(error){
        console.log(error);
        return res.status(500).json({error: "Error con el servidor"});
    }
};

export const infoUser = async(req:any, res:any) => {
    try{
        const user = await User.findById(req.uid).lean();

        if(user) return res.json({email: user.email, uid: user._id});
                
    }catch(error){
        return res.status(500).json({error: "Error de Servidor"});
    }
};

export const refreshToken = (req:any, res:any) => {
    try {
        const {token, expiresIn} = generateToken(req.uid) as JWTGen;

        return res.json({token, expiresIn});
    } catch (error) {
        console.log(error);

        return res.status(500).json({error: "Error de servidor"});
    }
};

export const logout = (req:any, res:any) => {
    res.clearCookie('refreshToken');
    res.json({ok: true});
};
