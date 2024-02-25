/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import AuthController from '../../app/controller/auth/AuthController';
// import AuthValidation from '../../app/middlewares/validations/AuthValidate';

const router = Router();

router.post('/auth', AuthController.create);

export default router;