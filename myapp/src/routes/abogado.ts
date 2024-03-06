import { Router } from "express";
import { postUsuarios, updateUsuarios } from "../controllers/abogado";

const router = Router();

router.post('/', postUsuarios)
router.put('/:id', updateUsuarios)

export default router;