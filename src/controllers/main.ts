import { RequestHandler, Request, Response } from "express";

export const getRoot: RequestHandler = (req: Request, res: Response) => {
    res.send('<h1>Servidor ok</h1>');
};