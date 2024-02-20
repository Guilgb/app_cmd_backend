import { isValidObjectId } from 'mongoose';
import { IUserResponse } from '../../interfaces/iUser';
import DeleteUserRepositories from '../../repositories/user/DeleteUserRepositories';
import GetDeckById from '../../repositories/user/GetDeckById';


class DeleteUsersService{

    async deleteUser(id: string): Promise<IUserResponse | null>{
        if (!isValidObjectId(id)) throw console.log('Id not valid');
        
        const associatesUserDeck = await GetDeckById.getDeckById(id);
        if(associatesUserDeck?.decks?.length !== 0) throw console.log('User has decks associated');
        const users = await DeleteUserRepositories.delete(id);
        return users;
    }
}
export default new DeleteUsersService();