import type { IDeck } from '../../interfaces/iDeck';
import PostRepositories from '../../repositories/decks/PostRepositories';
import { isValidObjectId } from 'mongoose';
import GetIdRepositories from '../../repositories/user/GetIdRepositories';
import UpdateDeckRepositories from '../../repositories/user/UpdatePetRepositories';

class PostService {
    async post(payload: IDeck, userId: string){
        if(!isValidObjectId(userId)) throw console.log('Id not valid "obs: tratar os erros depois"');

        const user = await GetIdRepositories.getId(userId);
        if(user === null) throw console.log('User Not Found "obs: tratar os erros depois"');

        const result = await PostRepositories.post(payload);

        const query = { $push: { decks: [result._id] } };

        await UpdateDeckRepositories.updateDeck(userId, query);

        return result;
    }
}

export default new PostService();