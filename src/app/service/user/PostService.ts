import { IUser, IUserResponse } from '../../interfaces/iUser';
import PostRepositories from '../../repositories/user/PostRepositories';

class UserServiceCreate{
    async post(req: IUser): Promise<IUserResponse>{

        const result = await PostRepositories.post(req);
        return result;
    }
}

export default new UserServiceCreate();