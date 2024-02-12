import type { Types } from 'mongoose';

export interface IUser {
  name: string;
  password: string | undefined;
  email: string;
  mydecks?: Types.ObjectId[];
}

export interface IUserResponse {
  _id?: Types.ObjectId;
  name: string;
  password?: string;
  email: string;
  mydecks?: Types.ObjectId[];
}

export interface IUserPasswordResponse {
  _id: Types.ObjectId;
  password: string;
}