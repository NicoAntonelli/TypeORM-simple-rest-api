import { Router } from 'express'
const router: Router = Router();

import { getPhotos, getPhoto, createPhoto, updatePhoto, deletePhoto } from '../controllers/photo.controller';

router.get('/api/photos', getPhotos);
router.get('/api/photos/:id', getPhoto);
router.post('/api/photos', createPhoto);
router.put('/api/photos/:id', updatePhoto);
router.delete('/api/photos/:id', deletePhoto);

export default router;
