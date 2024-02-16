import type { PaginateResult } from 'mongoose';
import { IUserResponse } from '../../interfaces/iUser';
import UserSchema from '../../schemas/UserSchema';

class GetAllUserRepository{
    async get(page: number, limit: number): Promise<PaginateResult<IUserResponse>>{
        const options = {
            select: '-password',
            // populate: { path: 'deck', model: 'Decks' },
        };
        const result = await UserSchema.paginate({}, { page, limit, ...options });
        return result;
    }
    
}

export default new GetAllUserRepository();