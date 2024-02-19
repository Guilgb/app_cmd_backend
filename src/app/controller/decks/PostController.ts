import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import PostService from '../../service/deck/PostService';

class PostUser {
    async post(req: Request, res: Response){
        try {
            const { userID } = req.params;
            const result = PostService.post(req.body, userID);
            return res.status(StatusCodes.CREATED).json({result});
            
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default new PostUser();