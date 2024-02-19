import { Router } from 'express';
import PostUser from '../../app/controller/user/PostController';
import UserPostValidarion from '../../app/middlewares/validations/UserPostValidarion';
import GetController from '../../app/controller/user/GetController';

const router = Router();

router.post('/user', UserPostValidarion, PostUser.post);
router.get('/user', GetController.get);
router.put('/user/:userId');
router.patch('/user/:userId');
router.delete('/user/:userId');



export default router;