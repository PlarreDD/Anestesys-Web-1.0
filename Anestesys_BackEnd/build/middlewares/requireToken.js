"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const requireToken = (req, res, next) => {
    var _a;
    try {
        let token = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization;
        if (!token)
            throw new Error('No Bearer');
        token = token.split(" ")[1];
        const { uid } = jsonwebtoken_1.default.verify(token, String(process.env.JWT_SECRET));
        req.uid = uid;
        next();
    }
    catch (error) {
        return res.status(401).send(error);
    }
};
exports.requireToken = requireToken;
