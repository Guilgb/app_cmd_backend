import UserSchema from '../../schemas/UserSchema';
import { IUserResponse } from '../../interfaces/iUser';

class DeleteDeckRepositories{
    async delete(userId: string, query: object):Promise<IUserResponse| null >{
        return await UserSchema.findByIdAndUpdate(userId, query);
    }
}
export default new DeleteDeckRepositories();