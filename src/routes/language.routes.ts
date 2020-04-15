import {Router} from 'express'
const router = Router();

import {getLanguages, getLanguage, createLanguage, updateLanguage, deleteLanguage} from '../controllers/language.controller';

router.get('/languages', getLanguages);
router.get('/languages/:id', getLanguage);
router.post('/languages', createLanguage);
router.put('/languages/:id', updateLanguage);
router.delete('/languages/:id', deleteLanguage);

export default router
