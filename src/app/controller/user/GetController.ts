import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import GetAllUsersService from '../../service/user/GetService';


class GetAllUserController{
    async get(req: Request, res: Response): Promise<Response>{
        try {
            console.log(req.url);
            const result = await GetAllUsersService.get(req.query);
            return res.status(StatusCodes.ACCEPTED).send(result);
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
        }
    }
}
export default new GetAllUserController();