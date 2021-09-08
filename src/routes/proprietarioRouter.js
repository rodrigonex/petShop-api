import { Router } from 'express';
import ProprietarioController from '../controller/ProprietarioController.js';

const router = Router();

router.get('/', ProprietarioController.getProprietarios);
router.get('/:id', ProprietarioController.getProprietario);
router.post('/', ProprietarioController.insertProprietario);
router.put('/:id', ProprietarioController.updateProprietario);
router.delete('/:id', ProprietarioController.deleteProprietario);

export default router;
