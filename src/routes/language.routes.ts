import { Router } from 'express'
const router: Router = Router();

import { getLanguages, getLanguage, createLanguage, updateLanguage, deleteLanguage } from '../controllers/language.controller';

router.get('/api/languages', getLanguages);
router.get('/api/languages/:id', getLanguage);
router.post('/api/languages', createLanguage);
router.put('/api/languages/:id', updateLanguage);
router.delete('/api/languages/:id', deleteLanguage);

export default router;
