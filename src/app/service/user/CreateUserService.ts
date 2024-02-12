class UserServiceCreate{
    async post(req){
        const result = await CreateUserRepository.post();
        return result;
    }
}

export default new UserServiceCreate;