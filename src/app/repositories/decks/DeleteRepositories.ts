import { IDeckResponse } from '../../interfaces/iDeck';
import DeckSchema from '../../schemas/MyDecksSchema';

class DeleteRepositories{
    async delete(id: string):Promise<IDeckResponse | null>{
        return await DeckSchema.findByIdAndDelete(id);
    }
}
export default new DeleteRepositories();