import GetDeck from '../../repositories/user/GetUserDeck';

class GetDeckUsers {
    async getDeckUser(id: string) {

        const alldeck = await GetDeck.getDecks(id);
        const decks: unknown[] = alldeck.decks as unknown[];
        decks.map((deck) => {console.log(deck);});
        return decks;


    }
}

export default new GetDeckUsers();