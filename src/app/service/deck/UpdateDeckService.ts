import { isValidObjectId } from 'mongoose';
import { IDeck, IDeckResponse } from '../../interfaces/iDeck';
import GetDecksOfUsers from '../../repositories/user/GetDecksOfUsers';
import UpdateDeckRepositories from '../../repositories/decks/UpdateDeckRepositories';

class UpdateDeckService {
    async updateDeckService(userId: string, deckId: string, payload: IDeck): Promise<IDeckResponse> {
        
        if(!isValidObjectId(deckId) || !isValidObjectId(userId)){
            throw new Error('Id not valid');
        }
        const query = { _id: userId, decks: deckId  };
        const user = await GetDecksOfUsers.getDecksOfUsers(query);
        if(user === null){
            throw new Error('User not found');
        }

        const result = await UpdateDeckRepositories.update(deckId, payload);
        if(result === null){
            throw new Error('Deck not found');
        }
        return result;
    }
}

export default new UpdateDeckService();