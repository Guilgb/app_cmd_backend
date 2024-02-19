import UserSchema from '../../schemas/UserSchema';
import { IUserResponse } from '../../interfaces/iUser';

class DeleteRepositories{
    async delete(id: string):Promise<IUserResponse | null >{
        return await UserSchema.findByIdAndDelete(id);
    }
}


export default new DeleteRepositories();