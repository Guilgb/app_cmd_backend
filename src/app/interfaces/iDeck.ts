import type { Types } from 'mongoose';

export interface IDeck {
    name_deck: string
    format: string
    data: Date
    Commander : string
    Partner?: string
    Wins: number
    Loses: number
    Draws: number
    Link: string
}

export interface IDeckResponse {
    _id?: Types.ObjectId;
    name_deck: string
    format: string
    data: Date
    Commander : string
    Partner?: string
    Wins: number
    Loses: number
    Draws: number
    Link: string
}

