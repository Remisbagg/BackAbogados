import { Router } from "express";
import { getPeticion, getPeticiones } from "../controllers/peticion";

const router = Router();

router.get('/', getPeticiones)

router.get('/:id', getPeticion);

export default router;