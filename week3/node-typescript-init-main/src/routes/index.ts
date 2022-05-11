//router index file
import { Router } from 'express';
import { UserController } from '../controllers';

const router = Router();

router.use('/user', UserRouter);

export default router;