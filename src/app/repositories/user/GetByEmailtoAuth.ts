import { IUserPasswordResponse } from '../../interfaces/iUser';
import UserSchema from '../../schemas/UserSchema';

class getByEmailToAuth{
    async getByEmailToAuth(email: string): Promise<IUserPasswordResponse | null>{
        return await UserSchema.findOne({email}).select('password _id').lean();
    }
}

export default new getByEmailToAuth();