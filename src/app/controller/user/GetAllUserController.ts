import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import GetAllUsersService from '../../service/user/GetAllUsersService';

class GetAllUserController{

    async get(req: Request, res: Response){
        try {
            const result = await GetAllUsersService.get(req.query);
            return result;
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
        }
    }

}
export default new GetAllUserController();