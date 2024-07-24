"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyLoginValidator = exports.bodyRegisterValidator = exports.bodyLinkValidator = exports.paramsLinkValidator = exports.validationResultExpress = void 0;
const express_validator_1 = require("express-validator");
const axios_1 = __importDefault(require("axios"));
const validationResultExpress = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
exports.validationResultExpress = validationResultExpress;
exports.paramsLinkValidator = [
    (0, express_validator_1.param)("id", "Formato no válido (expressValidator")
        .trim()
        .notEmpty()
        .escape(),
    exports.validationResultExpress,
];
exports.bodyLinkValidator = [
    (0, express_validator_1.body)("longLink", "Formato link incorrecto")
        .trim()
        .notEmpty()
        .custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield axios_1.default.get(value);
            return value;
        }
        catch (error) {
            throw new Error("Not found longLink 404");
        }
    })),
    exports.validationResultExpress,
];
exports.bodyRegisterValidator = [
    (0, express_validator_1.body)("nomMed", "Formato incorrecto")
        .trim(),
    (0, express_validator_1.body)("apMed", "Formato incorrecto")
        .trim(),
    (0, express_validator_1.body)("email", "Formato incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
    (0, express_validator_1.body)("password", "Minimo 6 caracteres")
        .trim()
        .isLength({ min: 6 }),
    exports.validationResultExpress,
];
exports.bodyLoginValidator = [
    (0, express_validator_1.body)("email", "Formato incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
    (0, express_validator_1.body)("password", "Mínimo 6 caracteres")
        .trim()
        .isLength({ min: 6 }),
    exports.validationResultExpress,
];
