import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import DeleteDeckService from '../../service/deck/DeleteDeckService';

class DeleteDeckController {
    async deleteDeck(req: Request, res: Response){
        try {
            const { userId, deckId } = req.params;
            const result = DeleteDeckService.deleteDeckService(deckId, userId);
            return res.status(StatusCodes.OK).json({result});
            
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default new DeleteDeckController();