import { IDeckResponse } from '../../interfaces/iDeck';
import DeckSchema from '../../schemas/DecksSchema';

class DeleteDecksRepositories{
    async delete(id: string):Promise<IDeckResponse | null>{
        return await DeckSchema.findByIdAndDelete(id);
    }
}
export default new DeleteDecksRepositories();