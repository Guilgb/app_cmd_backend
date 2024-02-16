import { Router } from 'express';
import CreateUser from '../../app/controller/user/PostController';
import UserPostValidarion from '../../app/middlewares/validations/UserPostValidarion';
import GetAllUserController from '../../app/controller/user/GetController';

const router = Router();

router.post('/user', UserPostValidarion, CreateUser.post);
router.get('/users', GetAllUserController.get);
router.put('/user/:userId');
router.patch('/user/:userId');
router.delete('/user/:userId');



export default router;