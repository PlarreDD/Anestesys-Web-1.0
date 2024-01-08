import { body, param, validationResult } from "express-validator";
import axios from "axios";

export const validationResultExpress = (req:any, res:any, next:any) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    next();
};

export const paramsLinkValidator = [
    param("id", "Formato no válido (expressValidator")
        .trim()
        .notEmpty()
        .escape(),

    validationResultExpress,
];

export const bodyLinkValidator = [
    body("longLink", "Formato link incorrecto")
        .trim()
        .notEmpty()
        .custom(async (value) => {
            try {
                await axios.get(value);
                return value;
            } catch (error) {
                throw new Error("Not found longLink 404");
            }
        }),

    validationResultExpress,
];

export const bodyRegisterValidator = [ 
    body("nomMed", "Formato incorrecto")
        .trim(),

    body("apMed", "Formato incorrecto")
        .trim(),

    body("email", "Formato incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
    
    body("password", "Minimo 6 caracteres")
        .trim()
        .isLength({min: 6}),        

    validationResultExpress,
];

export const bodyLoginValidator = [
    body("email", "Formato incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),

    body("password", "Mínimo 6 caracteres")
        .trim()
        .isLength({min: 6}),

    validationResultExpress,
];