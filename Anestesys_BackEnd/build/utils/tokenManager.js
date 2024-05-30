"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenVerificationErrors = exports.generateRefreshToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (uid) => {
    const expiresIn = 60 * 60 * 24;
    try {
        const token = jsonwebtoken_1.default.sign({ uid }, String(process.env.JWT_SECRET), { expiresIn });
        return { token, expiresIn };
    }
    catch (error) {
        // console.log(error);
    }
};
exports.generateToken = generateToken;
const generateRefreshToken = (uid, res) => {
    const expiresIn = 60 * 60 * 24;
    try {
        const refreshToken = jsonwebtoken_1.default.sign({ uid }, String(process.env.JWT_REFRESH), { expiresIn });
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: !(process.env.MODO === "developer"),
            expires: new Date(Date.now() + expiresIn * 1000),
        });
    }
    catch (error) {
        // console.log(error);
    }
};
exports.generateRefreshToken = generateRefreshToken;
exports.tokenVerificationErrors = {
    "invalid signature": "La firma del JWT no es válida",
    "jwt expired": "JWT expirado",
    "invalid token": "Token no válido",
    "No Bearer": "Utiliza formato Bearer",
    "jwt malformed": "Formato no válido JWT",
};
