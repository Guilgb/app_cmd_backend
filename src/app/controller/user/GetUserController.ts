import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import GetAllUsersService from '../../service/user/GetUserService';


class GetController{
    async get(req: Request, res: Response): Promise<Response>{
        try {
            const result = await GetAllUsersService.get(req.query);
            return res.status(StatusCodes.ACCEPTED).send(result);
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
        }
    }
}
export default new GetController();