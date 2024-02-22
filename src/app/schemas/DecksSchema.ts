import type { PaginateModel } from 'mongoose';
import { Schema, model } from 'mongoose';
import { IDeck } from '../interfaces/iDeck';

const schema = new Schema<IDeck>(
    {
        name_deck: {type: String, required: true, minlength: 3, maxlength: 50 },
        format: {type: String, required: true, minlength: 3, maxlength: 20 },
        data: {type: Date, required: false},
        Commander: {type: String, required: true,},
        Partner: {type: String, required: false,},
        Wins: {type: Number, required: false},
        Loses: {type: Number, required: false},
        Draws: {type: Number, required: false},
        Link: {type: String, required: true,}
    },
    { versionKey: false }
);
const Deck = model<IDeck, PaginateModel<IDeck>>('Deck', schema, 'Decks');
export default Deck;