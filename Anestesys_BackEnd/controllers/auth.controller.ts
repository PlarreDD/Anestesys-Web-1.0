import { User } from "../models/User";
import { generateToken,
         generateRefreshToken } from "../utils/tokenManager";
import bcryptjs from "bcryptjs";
import { Request,
         Response } from "express";    // Obtiene los Response y Request que se envían
import multer from 'multer';
import sharp from 'sharp'; // Para redimensionar la imagen
import nodemailer from 'nodemailer';

const storage = multer.memoryStorage(); // Almacenamiento en memoria
const upload = multer({ storage: storage});

export const register = async (req:Request, res:Response) => {
    const {email, password, nomMed, apMed, fechaNac, cedula, especialidad, foto, tutorialPre, tutorialTrans, tutorialPost} = req.body;

    try{
        let user = await User.findOne({email});

        if(user) throw {code: 11000};

        user = new User({email, password, nomMed, apMed, fechaNac, cedula, especialidad, foto, tutorialPre, tutorialTrans, tutorialPost});
        await user.save();

        await enviarEmail(email, password);

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

const enviarEmail = async (email: string, password: string) => {

    // Configurar el transporte de nodemailer (puedes utilizar tu propio proveedor de correo electrónico)
    const transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'juan.hernandez@biossmann.com', // Reemplazar con tu dirección de correo electrónico
            pass: 'hefuju*2022' // Reemplazar con tu contraseña
        }
    });
    
    // Configurar el contenido del correo electrónico
    const mailOptions = {
        from: 'juan.hernandez@biossmann.com', // Reemplazar con tu dirección de correo electrónico
        to: email,
        subject: 'Confirmación de contraseña Anestesys',
        text: 'Gracias por registrarte en nuestra aplicación. \n\n Tu contraseña es: '+password
    };   

    // Enviar el correo electrónico
    await transporter.sendMail(mailOptions);
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
        let TutorialPre = null;
        let TutorialTrans = null;
        let TutorialPost = null;

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
            TutorialPre = user.tutorialPre
            TutorialTrans = user.tutorialTrans
            TutorialPost = user.tutorialPost
        }

        const respuestaPasword = await bcryptjs.compare(password, user.password);
        
        if(!respuestaPasword) throw {code: 13000};
        
        //Generar el JWT
        const token = generateToken(user.id);
                    
        generateRefreshToken(user.id, res);
        const tkn = token?.token;
        const xprIn = token?.expiresIn;
   
        return res.json( {tkn, xprIn, Nombre, Apellido, FechaNac, Cedula, Especialidad, HoraSesion, Correo, Foto, Id, TutorialPre, TutorialTrans, TutorialPost} );
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
                // Redimensionar la imagen si es necesario
                const resizedBuffer = await sharp(req.file.buffer)
                .resize({ width: 500, height :500 }) // ajusta el ancho según tus necesidades
                .toBuffer();

                const medico = await User.findByIdAndUpdate(id,{ cedula, especialidad, foto: resizedBuffer.toString('base64') },{ new: true });
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

/* Funcion de actualización del valor para mostrar información del tutorial del modulo pre */
export const updateValorTutorialPre = async (req: any, res: Response) => {
    try {
        const { id } = req.params;                        
        const { tutorialPre } = req.body;
        
        const medico = await User.findByIdAndUpdate(id,{ tutorialPre },{ new: true });        
        return res.json({ medico });                    
    } catch (error) {
        if (error.kind === "ObjectId") 
            return res.status(403).json({ error: "Formato de ID incorrecto" });
                
        return res.status(500).json({ error: "Error de servidor" });
    }
};

/* Funcion de actualización del valor para mostrar información del tutorial del modulo trans */
export const updateValorTutorialTrans = async (req: any, res: Response) => {
    try {
        const { id } = req.params;                        
        const { tutorialTrans } = req.body;
        
        const medico = await User.findByIdAndUpdate(id,{ tutorialTrans },{ new: true });        
        return res.json({ medico });                    
    } catch (error) {
        if (error.kind === "ObjectId") 
            return res.status(403).json({ error: "Formato de ID incorrecto" });
                
        return res.status(500).json({ error: "Error de servidor" });
    }
};

/* Funcion de actualización del valor para mostrar información del tutorial del modulo post */
export const updateValorTutorialPost = async (req: any, res: Response) => {
    try {
        const { id } = req.params;                        
        const { tutorialPost } = req.body;
        
        const medico = await User.findByIdAndUpdate(id,{ tutorialPost },{ new: true });        
        return res.json({ medico });                    
    } catch (error) {
        if (error.kind === "ObjectId") 
            return res.status(403).json({ error: "Formato de ID incorrecto" });
                
        return res.status(500).json({ error: "Error de servidor" });
    }
};