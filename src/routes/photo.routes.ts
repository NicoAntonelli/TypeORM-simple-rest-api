import {Router} from 'express'
const router = Router();

import {getPhotos, getPhoto, createPhoto, updatePhoto, deletePhoto} from '../controllers/photo.controller';

router.get('/photos', getPhotos);
router.get('/photos/:id', getPhoto);
router.post('/photos', createPhoto);
router.put('/photos/:id', updatePhoto);
router.delete('/photos/:id', deletePhoto);

export default router
