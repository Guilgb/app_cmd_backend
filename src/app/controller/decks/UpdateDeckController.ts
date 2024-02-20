import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UpdateDeckService from '../../service/deck/UpdateDeckService';

class UpdateDeckController {
    async update(req: Request, res: Response){
        try {
            const deckId = req.params.deckId;
            const userId = req.params.userId;
            const body = req.body;
            const result = await UpdateDeckService.updateDeckService(userId, deckId, body);
            
            return res.status(StatusCodes.OK).json({result});
            
        } catch (error) {
            return res.status(500).json({error: 'deu ruim'});
        }
    }
}

export default new UpdateDeckController();