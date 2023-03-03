import { User } from "../models/User";
import { generateToken,
         generateRefreshToken } from "../utils/tokenManager";
import bcryptjs from "bcryptjs";
import { Request,
         Response } from "express";    // Obtiene los Response y Request que se envían 

export const register = async (req:Request, res:Response) => {
    const {email, password, nomMed, apMed} = req.body;

    try{
        let user = await User.findOne({email});

        if(user) throw {code: 11000};

        user = new User({email, password, nomMed, apMed});
        await user.save();

        //Generar el JWT
        const token = generateToken(user.id);

        generateRefreshToken(user.id, res);
       
        return res.status(201).json({token});
    }catch(error){
        console.log(error);

        if(error.code === 11000) return res.status(400).json({error: "Usuario ya registrado"});
        
        return res.status(500).json({error: "Error con el servidor"});
    }
};

export const login = async (req:Request, res:Response) => {
    try{        
        const {email, password} = req.body;
        var Nombre = "";
        var Apellido = "";

        let user = await User.findOne({email});

        if(!user)
            return res.status(403).json({error: "No existe el usuario"});
        else{
            Nombre = user.nomMed;
            Apellido = user.apMed;
        }

        const respuestaPasword = await bcryptjs.compare(password, user.password);
        
        if(!respuestaPasword) return res.status(403).json({error: "Contraseña Incorrecta"});
        
        //Generar el JWT
        const token = generateToken(user.id);
                    
        generateRefreshToken(user.id, res);
        const tkn = token?.token;
        const xprIn = token?.expiresIn;

        return res.json( {tkn, xprIn, Nombre, Apellido} );
    }catch(error){
        console.log(error);
        return res.status(500).json({error: "Error con el servidor"});
    }
};

export const refreshToken = (req:any, res:Response) => {
    try {
        const token = generateToken(req.uid);

        const tkn = token?.token;
        const xprIn = token?.expiresIn;

        return res.json({tkn, xprIn});
    } catch (error) {
        console.log(error);

        return res.status(500).json({error: "Error de servidor"});
    }
};

export const logout = (_req:Request, res:Response) => {
    res.clearCookie('refreshToken');
    res.json({ok: true});
};
