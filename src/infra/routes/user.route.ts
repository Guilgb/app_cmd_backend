import { Router } from 'express';
import PostUser from '../../app/controller/user/PostUserController';
import UserPostValidarion from '../../app/middlewares/validations/UserPostValidarion';
import GetController from '../../app/controller/user/GetUserController';
import UpdateController from '../../app/controller/user/UpdateUserController';
import DeleteUserController from '../../app/controller/user/DeleteUserController';
import AuthVerify from '../../app/middlewares/AuthVerify';

const router = Router();

router.post('/user', UserPostValidarion, PostUser.post);
router.get('/user', AuthVerify, GetController.get);
router.put('/user/:userId', AuthVerify, UpdateController.update);
router.delete('/user/:userId', AuthVerify, DeleteUserController.delete);
router.patch('/user/:userId', AuthVerify);



export default router;