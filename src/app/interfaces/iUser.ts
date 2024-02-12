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

export interface IUserPaginate {
  docs: IUserResponse[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page?: number | undefined;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage?: number | null | undefined;
  nextPage?: number | null | undefined;
}