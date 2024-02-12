import { Router } from 'express';
import CreateUser from '../../app/controller/user/CreateUserController';
import GetAllUserController from '../../app/controller/user/GetAllUserController';
import UserPostValidarion from '../../app/middlewares/validations/UserPostValidarion';

const router = Router();

router.post('/user', UserPostValidarion, CreateUser.post);
router.get('/user', GetAllUserController.get);



export default router;