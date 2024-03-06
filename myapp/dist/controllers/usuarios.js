"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUsuarios = exports.postUsuarios = void 0;
const postUsuarios = (req, res) => {
    const { body } = req;
    res.json({
        msg: "post usuarios",
        body
    });
};
exports.postUsuarios = postUsuarios;
const updateUsuarios = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "post usuarios",
        id,
        body
    });
};
exports.updateUsuarios = updateUsuarios;
