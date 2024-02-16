import { IUser, IUserResponse } from '../../interfaces/iUser';
import Post from '../../repositories/user/Post';

class UserServiceCreate{
    async post(req: IUser): Promise<IUserResponse>{

        const result = await Post.post(req);
        return result;
    }
}

export default new UserServiceCreate();