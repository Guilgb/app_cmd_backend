import { IUserResponse } from '../../interfaces/iUser';
import UserSchema from '../../schemas/UserSchema';

class GetDecks{
    async getDecks(id: string): Promise<IUserResponse>{
        console.log(id);
        const result = await UserSchema.findById(id).populate({ path: 'decks', model: 'Deck' }).select('deck');
        
        return result as IUserResponse;
    }
    
}

export default new GetDecks();