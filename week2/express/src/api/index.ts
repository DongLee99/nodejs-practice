import express, { Router } from 'express';
import { appendFile } from 'fs';

const router: Router = express.Router();

router.use('/user', require('./user'));

module.exports = router;