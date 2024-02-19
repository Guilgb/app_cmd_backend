import { Router } from 'express';
import PostUser from '../../app/controller/user/PostUserController';
import UserPostValidarion from '../../app/middlewares/validations/UserPostValidarion';
import GetController from '../../app/controller/user/GetUserController';
import UpdateController from '../../app/controller/user/UpdateUserController';

const router = Router();

router.post('/user', UserPostValidarion, PostUser.post);
router.get('/user', GetController.get);
router.put('/user/:userId', UpdateController.update);
router.patch('/user/:userId');
router.delete('/user/:userId');



export default router;