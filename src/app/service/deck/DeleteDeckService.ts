import { isValidObjectId } from 'mongoose';
import { IDeckResponse } from '../../interfaces/iDeck';
import GetDecksOfUsers from '../../repositories/user/GetDecksOfUsers';
import DeleteDeckRepositories from '../../repositories/user/DeleteDeckRepositories';
import DeleteDecksRepositories from '../../repositories/decks/DeleteDecksRepositories';

class DeleteDeckService{
    async deleteDeckService(deckId: string, userId: string): Promise<IDeckResponse | null>{
        if(!isValidObjectId(deckId) || !isValidObjectId(userId)){
            throw new Error('Id not valid');
        }
        const queryFindUserOfDeck = { _id: userId, decks: deckId  };
        const userFindDeckOfTutor = await GetDecksOfUsers.getDecksOfUsers(queryFindUserOfDeck);

        if(userFindDeckOfTutor === null){
            throw new Error('User not found');
        }

        const queryDeleteDeck = { $pull: { decks: deckId } };
        const userDeleteDeck = await DeleteDeckRepositories.delete(userId, queryDeleteDeck);
        if(userDeleteDeck === null){
            throw new Error('User not found');
        }

        const result = await DeleteDecksRepositories.delete(deckId);

        if(result === null){
            throw new Error('Deck not found');
        }
        
        return result;


    }
}

export default new DeleteDeckService();