import type { PaginateResult } from 'mongoose';
import { IUserResponse } from '../../interfaces/iUser';
import UserSchema from '../../schemas/UserSchema';

class GetRepositories{
    async get(page: number, limit: number): Promise<PaginateResult<IUserResponse>>{
        const options = {
            select: '-password',
            // populate: { path: 'decks', model: 'Deck' },
        };
        const result = await UserSchema.paginate({}, { page, limit, ...options });
        return result;
    }
    
}

export default new GetRepositories();