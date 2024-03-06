"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const router = (0, express_1.Router)();
router.post('/', usuarios_1.postUsuarios);
router.put('/:id', usuarios_1.updateUsuarios);
exports.default = router;
