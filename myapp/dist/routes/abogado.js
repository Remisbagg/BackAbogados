"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const abogado_1 = require("../controllers/abogado");
const router = (0, express_1.Router)();
router.post('/', abogado_1.postUsuarios);
router.put('/:id', abogado_1.updateUsuarios);
exports.default = router;
