"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const peticiones_1 = require("../controllers/peticiones");
const router = (0, express_1.Router)();
router.get('/', peticiones_1.getPeticiones);
router.get('/:id', peticiones_1.getPeticion);
exports.default = router;
