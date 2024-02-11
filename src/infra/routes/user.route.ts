import { Request, Response, Router } from 'express';

const router = Router();

router.get('/user', (req: Request, res: Response)=>{
    return res.send('ola devs');
});

router.post('/user');


export default router;