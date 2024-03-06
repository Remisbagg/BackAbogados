"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const peticion_1 = require("../controllers/peticion");
const router = (0, express_1.Router)();
router.get('/', peticion_1.getPeticiones);
router.get('/:id', peticion_1.getPeticion);
exports.default = router;
