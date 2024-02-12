import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

class CreateUser {

    async post(req: Request, res: Response){
        try {
            const result = req.body;
            return res.status(StatusCodes.CREATED).json({result});
            
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default new CreateUser();