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
exports.getPeticion = exports.getPeticiones = void 0;
const peticion_1 = __importDefault(require("../models/peticion"));
const getPeticiones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listPeticion = yield peticion_1.default.findAll({
        attributes: ['pet_Id', 'pet_descripcion', 'pet_fecha_registro', 'pet_fecha_respuesta', 'tipo_pe_id', 'abo_documento', 'id_clientes', 'seg_id', 'pet_prioridad']
    });
    res.json(listPeticion);
});
exports.getPeticiones = getPeticiones;
const getPeticion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const peticion = yield peticion_1.default.findByPk(id, {
        attributes: ['pet_Id', 'pet_descripcion', 'pet_fecha_registro', 'pet_fecha_respuesta', 'tipo_pe_id', 'abo_documento', 'id_clientes', 'seg_id', 'pet_prioridad']
    });
    if (peticion) {
        res.json(peticion);
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
});
exports.getPeticion = getPeticion;
