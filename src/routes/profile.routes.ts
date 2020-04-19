import { Router } from 'express'
const router: Router = Router();

import { getProfiles, getProfile, createProfile, updateProfile, deleteProfile } from '../controllers/profile.controller';

router.get('/api/profiles', getProfiles);
router.get('/api/profiles/:id', getProfile);
router.post('/api/profiles', createProfile);
router.put('/api/profiles/:id', updateProfile);
router.delete('/api/profiles/:id', deleteProfile);

export default router;
