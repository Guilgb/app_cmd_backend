import { IUserPaginate } from '../../interfaces/iUser';
import GetRepositories from '../../repositories/user/GetRepositories';

class GetAllUsersService{


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async get(payload: any): Promise<IUserPaginate>{
        const { page, limit } = payload;
        let validatePage: number;
        let validateLimit: number;
        if (typeof page === 'string') {
            validatePage = Number(page);
        } else {
            validatePage = 1;
        }
        if (typeof limit === 'string') {
            validateLimit = Number(limit);
        } else {
            validateLimit = 10;
        }
        
        const users = await GetRepositories.get(validatePage, validateLimit);
        return users;
    }
}
export default new GetAllUsersService();