import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { BaseResponse } from "../models";

function validateBody(schema: Joi.ObjectSchema): (req: Request, res: Response, next: NextFunction) => void {
    return (req: Request, res: Response, next: NextFunction): void => {
        const { error, value } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            const response: BaseResponse<any> = {
                message: "bad request",
                error: error.details.map((x): string => x.message).toString(),
                data: null
            }

            res.status(400).send(response);
            return;
        }

        req.body = value;

        next();
    };
}

function validateParameter(schema: Joi.ObjectSchema): (req: Request, res: Response, next: NextFunction) => void {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error, value } = schema.validate(req.params, { abortEarly: false });

        if (error) {
            const response: BaseResponse<any> = {
                message: "bad request",
                error: error.details.map((x): string => x.message).toString(),
                data: null
            };

            res.status(400).send(response);

            return;
        }

        req.params = value;
        next();
    };
}

export {
    validateBody,
    validateParameter,
}