/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as ItemController from "./items.controller";
/**
 * Router Definition2
 */
export const itemsRouter = express.Router();
/**
 * Controller Definitions
 */
itemsRouter.get("/greeting", (_req: Request, res: Response) => {
    try {
        return res.status(200).json({ data: "HELLO" });
    } catch (err) {
        console.log(err);
    }
});
itemsRouter.get("/items/getall", ItemController.findAllMenu);
// GET items

// GET items/:id

// POST items

// PUT items/:id

// DELETE items/:id
