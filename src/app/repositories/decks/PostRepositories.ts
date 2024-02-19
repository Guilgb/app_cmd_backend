import DeckSchema from '../../schemas/DecksSchema';
import { IDeck, IDeckResponse } from '../../interfaces/iDeck';

class PostRepositories{
    async post(req: IDeck):Promise<IDeckResponse>{
        return await DeckSchema.create(req);
    }
}
export default new PostRepositories();