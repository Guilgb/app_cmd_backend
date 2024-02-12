import type { PaginateModel } from 'mongoose';
import { Schema, model } from 'mongoose';
import { IDeck } from '../interfaces/iDeck';

const schema = new Schema<IDeck>(
    {
        name_deck: {type: String, required: true, minlength: 3, maxlength: 50 },
        data: {type: Date, required: false},
        Commander: {type: String, required: true,},
        Partner: {type: String, required: false,},
        Wins: {type: Number, required: true},
        Loses: {type: Number, required: true},
        Draws: {type: Number, required: true},
        Link: {type: String, required: true,}
    },
    { versionKey: false }
);
const Deck = model<IDeck, PaginateModel<IDeck>>('Deck', schema, 'Decks');
export default Deck;