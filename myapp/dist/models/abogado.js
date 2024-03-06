"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Abogado = connection_1.default.define('Abogado', {
    abo_Id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    abo_documento: {
        type: sequelize_1.DataTypes.INTEGER
    },
    abo_nombres: {
        type: sequelize_1.DataTypes.STRING
    },
    abo_apellidos: {
        type: sequelize_1.DataTypes.STRING
    },
    abo_status: {
        type: sequelize_1.DataTypes.INTEGER
    },
    abo_fecha_registro: {
        type: sequelize_1.DataTypes.DATE
    },
    abo_password: {
        type: sequelize_1.DataTypes.STRING
    },
    abo_correo: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Abogado;
