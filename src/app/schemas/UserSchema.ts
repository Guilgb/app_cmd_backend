import type { PaginateModel } from 'mongoose';
import { Schema, model } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import uniqueValidator from 'mongoose-unique-validator';
import './DecksSchema';



import type { IUser } from '../interfaces/iUser';


const schema = new Schema<IUser>(
    {
        name: {type: String, required: true, minlength: 3, maxlength: 50},
        password: {type: String, required: true, minlength: 6},
        email: {type: String, required: true, unique: true},
        decks: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Decks'
            }
        ],
        
    },
    { versionKey: false }
);

schema.plugin(paginate);
schema.plugin(uniqueValidator);

const User = model<IUser, PaginateModel<IUser>>('User', schema, 'Users');
export default User;