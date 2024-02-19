import UserSchema from '../../schemas/UserSchema';
import { IUser, IUserResponse } from '../../interfaces/iUser';

class UpdateRepositories{
    async update(id: string, req: IUser):Promise<IUserResponse | null>{
        return await UserSchema.findByIdAndUpdate(id, req, {
            new: true,
            runValidators: true,
        }).select('-_id -decks' ).exec();
    }
}


export default new UpdateRepositories();