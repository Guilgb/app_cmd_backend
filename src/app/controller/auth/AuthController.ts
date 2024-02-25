import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import AuthService from '../../service/auth/AuthService';


class AuthController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const result = await AuthService.create(req.body);           
            return res.status(StatusCodes.CREATED).json(result);
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error});
        }
    }
}

export default new AuthController();