import { Router } from 'express';

import { authenticate, register } from '../controllers/authentication.controller';

const router = Router();

router.post('/login', authenticate);
router.post('/register', register);

export default router;
