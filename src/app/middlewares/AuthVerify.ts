import type { Request, Response, NextFunction } from 'express';
import jtw from 'jsonwebtoken';
import authConfig from '../config/auth';
import { StatusCodes } from 'http-status-codes';

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const authHeader = req.headers.authorization;

        if(authHeader === undefined) {
            throw new Error('Token not provided');
        }
        const parts = authHeader.split(' ');
        
        if(!(parts.length === 2)) {
            throw new Error('Token malformatted');
        }
        const [scheme, token] = parts;

        if (!/^Bearer$/i.test(scheme))
            throw new Error('Token malformatted');
        jtw.verify(token, authConfig.secret, (err) => {
            if (!(err === null)) throw new Error('Token Invalid');

            next();
        });

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({error: 'Token invalid'});
    }
};