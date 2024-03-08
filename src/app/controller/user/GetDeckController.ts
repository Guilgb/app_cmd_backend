import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import GetDeck from '../../service/user/GetDeckUser';


class GetDeckController{
    async get(req: Request, res: Response): Promise<Response>{
        try {
            const result = await GetDeck.getDeckUser(req.params.userId);
            return res.status(StatusCodes.ACCEPTED).send(result);
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
        }
    }
}
export default new GetDeckController();