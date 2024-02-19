import { IDeck, IDeckResponse } from '../../interfaces/iDeck';
import DeckSchema from '../../schemas/MyDecksSchema';

class UpdateRepositories{
    async update(id: string, payload: IDeck):Promise<IDeckResponse | null>{
        return await DeckSchema.findByIdAndUpdate(id, payload, {
            returnDocument: 'after',
            runValidators: true
        }).select('-_id').exec();
    }
}
export default new UpdateRepositories();