import { IUserResponse } from '../../interfaces/iUser';
import UserSchema from '../../schemas/UserSchema';

class GetIdRepositories{
    async getId(userId: string): Promise<IUserResponse | null>{
        const result = await UserSchema.findById(userId);
        return result;
    }
    
}

export default new GetIdRepositories();