"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireRefreshToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const requireRefreshToken = (req, res, next) => {
    try {
        const refreshTokenCookie = req.cookies.refreshToken;
        if (!refreshTokenCookie)
            throw new Error("No Existe el Token");
        const { uid } = jsonwebtoken_1.default.verify(refreshTokenCookie, String(process.env.JWT_REFRESH));
        req.uid = uid;
        next();
    }
    catch (error) {
        res.status(401).json(error /*{error: tokenVerificationErrors[error.message]}*/);
    }
};
exports.requireRefreshToken = requireRefreshToken;
