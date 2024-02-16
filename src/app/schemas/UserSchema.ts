import type { PaginateModel } from 'mongoose';
import { Schema, model } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import uniqueValidator from 'mongoose-unique-validator';
import './MyDecksSchema';



import type { IUser } from '../interfaces/iUser';


const schema = new Schema<IUser>(
    {
        name: {type: String, required: true, minlength: 3, maxlength: 50},
        password: {type: String, required: true, minlength: 6},
        email: {type: String, required: true, unique: true},
        mydecks: [
            {
                type: Schema.ObjectId,
                ref: 'myDecks'
            }
        ],
        
    },
    { versionKey: false }
);

schema.plugin(paginate);
schema.plugin(uniqueValidator);

const User = model<IUser, PaginateModel<IUser>>('User', schema, 'Users');
export default User;