export interface IAuth {
    _id: string;
    email: string;
    password: string;
}

export interface IAuthResponse {
    access_token: string;
}