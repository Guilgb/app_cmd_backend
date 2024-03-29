import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserServiceCreate from '../../service/user/PostUserService';

class PostUser {
    async post(req: Request, res: Response){
        try {
            const result = UserServiceCreate.post(req.body);
            return res.status(StatusCodes.CREATED).json({user: (await result).name});
            
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default new PostUser();