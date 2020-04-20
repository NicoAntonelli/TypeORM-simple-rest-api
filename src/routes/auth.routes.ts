import { Router } from 'express'
const router: Router = Router();

import { root, signup, login, myprofile, logout } from "../controllers/auth.controller";
import { verifyToken } from "../utils/token.util";

router.get(['/', '/api'], root);
router.post('/api/signup', signup);
router.post('/api/login', login);
router.get('/api/myprofile', verifyToken, myprofile);   // Verified with Token
router.get('/api/logout', verifyToken, logout);         // Verified with Token

export default router;
