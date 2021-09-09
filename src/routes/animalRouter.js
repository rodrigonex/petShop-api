import { Router } from 'express';
import AnimalController from '../controller/AnimalController.js';

const router = Router();

router.get('/', AnimalController.getAnimais);
router.get('/:id', AnimalController.getAnimal);
router.post('/', AnimalController.insertAnimal);
router.put('/:id', AnimalController.updateAnimal);
router.get('/proprietario/:id', AnimalController.getAnimalByProprietario);
router.delete('/:id', AnimalController.deleteAnimal);

export default router;
