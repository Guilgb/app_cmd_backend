import { IUserResponse } from '../../interfaces/iUser';
import UserSchema from '../../schemas/UserSchema';

class GetDecksOfUsers{
    async getDecksOfUsers(query: {
        id: string,
        decks: string
    }): Promise<IUserResponse | null>{
        const result = await UserSchema.findOne(query);
        return result;
    }
    
}

export default new GetDecksOfUsers();