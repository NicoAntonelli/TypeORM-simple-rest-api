import {Router} from 'express'
const router = Router();

import {getProfiles, getProfile, createProfile, updateProfile, deleteProfile} from '../controllers/profile.controller';

router.get('/profiles', getProfiles);
router.get('/profiles/:id', getProfile);
router.post('/profiles', createProfile);
router.put('/profiles/:id', updateProfile);
router.delete('/profiles/:id', deleteProfile);

export default router
