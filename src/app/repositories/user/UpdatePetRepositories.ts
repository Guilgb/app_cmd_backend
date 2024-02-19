import UserSchema from '../../schemas/UserSchema';
import { IUserResponse } from '../../interfaces/iUser';

class UpdateDeckRepositories{
    async updateDeck(id: string , query: object):Promise<IUserResponse | null>{
        return await UserSchema.findByIdAndUpdate(id, query).select('_id').lean();
    }
}


export default new UpdateDeckRepositories();