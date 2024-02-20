import { IUserResponse } from '../../interfaces/iUser';
import UserSchema from '../../schemas/UserSchema';

class GetDeckById{
    async getDeckById(id: string): Promise<IUserResponse | null>{
        const result = await UserSchema.findById(id).select('decks').lean();
        return result;
    }
}
export default new GetDeckById();