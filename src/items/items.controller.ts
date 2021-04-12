import { NextFunction, Request, Response } from "express";
import * as ItemService from "./items.service";

export const findAllMenu = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const items = await ItemService.findAllMenu();
        return res.status(200).json({
            data: items,
        });
    } catch (err) {
        next(err);
    }
};
