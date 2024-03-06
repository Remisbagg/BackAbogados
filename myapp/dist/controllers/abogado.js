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
exports.updateUsuarios = exports.postUsuarios = void 0;
const abogado_1 = __importDefault(require("../models/abogado"));
const postUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield abogado_1.default.create(body);
        res.json({
            msg: 'El abogado fue agragado'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un Erro comuniquese con soporte'
        });
    }
});
exports.postUsuarios = postUsuarios;
const updateUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const abogado = yield abogado_1.default.findByPk(id);
        if (abogado) {
            yield abogado.update(body);
            res.json({
                msg: 'El usuario fue actualizado'
            });
        }
        else {
            res.status(404).json({
                msg: 'No se encontro el usuario'
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un Erro comuniquese con soporte'
        });
    }
});
exports.updateUsuarios = updateUsuarios;
