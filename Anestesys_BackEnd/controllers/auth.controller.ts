import { User } from "../models/User";
import { generateToken,
         generateRefreshToken } from "../utils/tokenManager";
import bcryptjs from "bcryptjs";
import { Request,
         Response } from "express";    // Obtiene los Response y Request que se envían
import multer from 'multer';

const storage = multer.memoryStorage(); // Almacenamiento en memoria
const upload = multer({ storage: storage });

export const register = async (req:Request, res:Response) => {
    const {email, password, nomMed, apMed, fechaNac, cedula, especialidad, foto} = req.body;

    try{
        let user = await User.findOne({email});

        if(user) throw {code: 11000};

        user = new User({email, password, nomMed, apMed, fechaNac, cedula, especialidad, foto});
        await user.save();

        //Generar el JWT
        const token = generateToken(user.id);

        generateRefreshToken(user.id, res);
       
        return res.status(201).json({token, user});
    }catch(error){
        if(error.code === 11000)
            return res.status(400).json({error: "Usuario ya registrado"});
        
        return res.status(500).json({error: "Error con el servidor"});
    }
};

export const login = async (req:Request, res:Response) => {
    try{        
        const {email, password} = req.body;
        let Nombre = "";
        let Apellido = "";
        let FechaNac = "";
        let Cedula = null;
        let Especialidad = null;
        let HoraSesion = null;
        let Correo = null;
        let Foto = null;
        let Id = null;

        let user = await User.findOne({email});

        if(!user) throw {code: 12000};
        else
        {
            Nombre = user.nomMed;
            Apellido = user.apMed;
            FechaNac = user.fechaNac
            Cedula = user.cedula
            Especialidad = user.especialidad
            Correo = user.email
            Foto = user.foto
            Id = user._id
        }

        const respuestaPasword = await bcryptjs.compare(password, user.password);
        
        if(!respuestaPasword) throw {code: 13000};
        
        //Generar el JWT
        const token = generateToken(user.id);
                    
        generateRefreshToken(user.id, res);
        const tkn = token?.token;
        const xprIn = token?.expiresIn;

        return res.json( {tkn, xprIn, Nombre, Apellido, FechaNac, Cedula, Especialidad, HoraSesion, Correo, Foto, Id} );
    }catch(error){
        if (error.code == 12000)
            return res.status(403).json({error: "Usuario Inválido"});
        else if (error.code == 13000)
            return res.status(403).json({error: "Contraseña Incorrecta"});

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
        return res.status(500).json({error: "Error de servidor"});
    }
};

export const logout = (_req:Request, res:Response) => {
    res.clearCookie('refreshToken');
    res.json({ok: true});
};

/* Funcion de actualización de la ficha ID de un paciente */
export const updateMedico = async (req: any, res: Response) => {
    try {
        const { id } = req.params;
        
        // Manejar la carga de la imagen con Multer
        upload.single('foto')(req, res, async (err: any) => {
            if (err) {
                return res.status(400).json({ error: 'Error al cargar la imagen' });
            }
            
            const { cedula, especialidad } = req.body;

            if(req.file){
                const medico = await User.findByIdAndUpdate(id,{ cedula, especialidad, foto: req.file.buffer.toString('base64') },{ new: true });
                return res.json({ medico });            
            }else{
                const medico = await User.findByIdAndUpdate(id,{ cedula, especialidad },{ new: true });        
                return res.json({ medico });
            }

        });

    } catch (error) {
        if (error.kind === "ObjectId") 
            return res.status(403).json({ error: "Formato de ID incorrecto" });
                
        return res.status(500).json({ error: "Error de servidor" });
    }
};