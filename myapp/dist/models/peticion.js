"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Peticion = connection_1.default.define('peticione', {
    pet_Id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    pet_descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    pet_fecha_registro: {
        type: sequelize_1.DataTypes.DATE
    },
    pet_fecha_respuesta: {
        type: sequelize_1.DataTypes.DATE
    },
    tipo_pe_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    abo_documento: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_clientes: {
        type: sequelize_1.DataTypes.INTEGER
    },
    seg_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    pet_prioridad: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Peticion;
