import { Router } from 'express'
const router: Router = Router();

import { getUsers, createUser, getUser, updateUser, deleteUser } from '../controllers/user.controller'

router.get('/api/users', getUsers);
router.get('/api/users/:id', getUser);
router.post('/api/users', createUser);
router.put('/api/users/:id', updateUser);
router.delete('/api/users/:id', deleteUser);

export default router;
