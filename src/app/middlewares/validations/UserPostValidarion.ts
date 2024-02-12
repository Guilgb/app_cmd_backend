import type { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export default (req: Request, res: Response, next: NextFunction): void => {
    try {
        const schema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
                .exist()
                .required(),
            password: Joi.string().exist().required(),
            decks: Joi.forbidden(),
        });

        const { error } = schema.validate(req.body, {
            abortEarly: false,
        });

        if (!(error === undefined)) throw error;

        next();
    } catch (errors) {
        res.status(400).json({
            message: errors
        });
    }
};