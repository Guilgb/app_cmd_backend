import { Router } from 'express';
import PostUser from '../../app/controller/user/PostUserController';
import UserPostValidarion from '../../app/middlewares/validations/UserPostValidarion';
import GetController from '../../app/controller/user/GetUserController';
import UpdateController from '../../app/controller/user/UpdateUserController';
import DeleteUserController from '../../app/controller/user/DeleteUserController';
import AuthVerify from '../../app/middlewares/AuthVerify';
import GetDeckController from '../../app/controller/user/GetDeckController';

const router = Router();

router.get('/user/:userId', AuthVerify, GetDeckController.get);
router.post('/user', UserPostValidarion, PostUser.post);
router.get('/user', AuthVerify, GetController.get);
router.put('/user/:userId', AuthVerify, UpdateController.update);
router.delete('/user/:userId', AuthVerify, DeleteUserController.delete);
router.patch('/user/:userId', AuthVerify);




export default router;