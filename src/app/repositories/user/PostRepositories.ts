import UserSchema from '../../schemas/UserSchema';
import { IUser } from '../../interfaces/iUser';

class PostRepositories{
    async post(req: IUser):Promise<IUser>{
        return await UserSchema.create(req);
    }
}


export default new PostRepositories();