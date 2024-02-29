import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import getByEmailToAuth from '../../repositories/user/GetByEmailtoAuth';
import authConfig from '../../config/auth';


import type { IAuth, IAuthResponse } from '../../interfaces/iAuth';

class AutService {
    async create(payload: IAuth): Promise<IAuthResponse | null>{
        const user = await getByEmailToAuth.getByEmailToAuth(payload.email);
        if(user === null) {
            throw new Error('Incorrect email or password, try again!');
        }

        const verifyAuth = await bcrypt.compare(payload.password, user.password);
        if(verifyAuth){
            throw new Error('Incorrect email or password, try again!');
        }

        const auth = jwt.sign(
            {id: user._id, email: payload.email},
            authConfig.secret,
            {
                expiresIn: authConfig.expiresIn,
            }
        );

        const result = { access_token: auth, email: payload.email, password: payload.password, _id: user._id};
        return result;
    }
}

export default new AutService();    