import { isValidObjectId } from 'mongoose';
import { IUser, IUserResponse } from '../../interfaces/iUser';
import UpdateRepositories from '../../repositories/user/UpdateRepositories';


class UpdateService{
    async update(id: string, req: IUser): Promise<IUserResponse>{
        if (!isValidObjectId(id)) {
            throw console.log('Id not valid');
        }
        const users = await UpdateRepositories.update(id, req);

        if(users === null){
            throw console.log('Users not found');
        }
        return users;
    }
}
export default new UpdateService();