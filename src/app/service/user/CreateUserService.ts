import { IUser, IUserResponse } from '../../interfaces/iUser';
import CreateUserRepository from '../../repositories/user/CreateUserRepository';

class UserServiceCreate{
    async post(req: IUser): Promise<IUserResponse>{

        const result = await CreateUserRepository.post(req);
        return result;
    }
}

export default new UserServiceCreate();