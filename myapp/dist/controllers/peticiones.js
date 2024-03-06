"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPeticion = exports.getPeticiones = void 0;
const getPeticiones = (req, res) => {
    res.json({
        msg: "get Products"
    });
};
exports.getPeticiones = getPeticiones;
const getPeticion = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "get Products",
        id
    });
};
exports.getPeticion = getPeticion;
