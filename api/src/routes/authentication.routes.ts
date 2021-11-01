import { Router } from 'express';

import { register } from '../controllers/authentication.controller';

const router = Router();

router.post('/login', () => {});
router.post('/register', register);

export default router;
