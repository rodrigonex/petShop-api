import { Router } from 'express';
import AnimalController from '../controller/AnimalController.js';

const router = Router();

router.get('/', AnimalController.getAnimais);
router.get('/:id', AnimalController.getAnimal);
router.post('/', AnimalController.insertAnimal);

export default router;
