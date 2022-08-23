import { Router } from 'express';

import { oscAndStatus } from './v1/oscAndStatus.js';

const router = new Router();

router.use('/', oscAndStatus);

export default router;
