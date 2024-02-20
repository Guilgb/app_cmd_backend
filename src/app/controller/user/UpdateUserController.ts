import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UpdateService from '../../service/user/UpdateUserService';


class UpdateUser {
    async update(req: Request, res: Response){
        try {
            const userId = req.params.userId;
            console.log(userId);
            const result = UpdateService.update(userId, req.body);
            return res.status(StatusCodes.OK).json(result);
            
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default new UpdateUser();