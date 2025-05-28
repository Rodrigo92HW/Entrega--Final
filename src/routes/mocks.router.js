import { Router } from 'express';
import mocksController from '../controllers/mocks.controller.js';

const router = Router();

router.get("/mockingPets", mocksController.creatPets);
router.get("/mockingUsers", mocksController.createUsers);
router.post("/generateData", mocksController.createData);

export default router;