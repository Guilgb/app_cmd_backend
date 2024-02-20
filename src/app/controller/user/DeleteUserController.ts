import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import DeleteUserService from '../../service/user/DeleteUserService';


class DeleteUserController{
    async delete(req: Request, res: Response): Promise<Response>{
        try {
            const userId = req.params.userId;
            const result = await DeleteUserService.deleteUser(userId);
            return res.status(StatusCodes.NO_CONTENT).json({message: 'User deleted', user: result});
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
        }
    }
}
export default new DeleteUserController();