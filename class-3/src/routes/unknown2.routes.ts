import { Router } from "express";
import { processData } from "../controllers/unknown2.check";

const router = Router();

router.post("/process", processData);

export default router;