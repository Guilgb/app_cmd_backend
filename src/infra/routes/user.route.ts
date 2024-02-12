import { Request, Response, Router } from 'express';
import CreateUser from '../../app/controller/user/CreateUserController';

const router = Router();

router.get('/user', (req: Request, res: Response)=>{
    return res.send('ola devs');
});

router.post('/user', CreateUser.post);


export default router;