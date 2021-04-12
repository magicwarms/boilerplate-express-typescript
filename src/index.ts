/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./items/items.router";
dotenv.config();
/**
 * App Variables
 */
if (!process.env.APP_PORT) {
    console.log(`Server exited`);
    process.exit(1);
}

const PORT: number = parseInt(process.env.APP_PORT as string, 10);
const app = express();
/**
 *  App Configuration
 */
app.use(helmet());
app.use(
    cors({
        origin: "*",
        optionsSuccessStatus: 200,
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", itemsRouter);
// handle 404
app.use((_req: Request, res: Response) => {
    return res.status(404).json({
        success: true,
        data: {},
        message: "API route not found",
    });
});
// handle 500 Any error
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err);
    return res.status(500).json({
        success: false,
        data: {},
        message: `Error! (${err.message})`,
    });
});
/**
 * Server Activation
 */
app.listen(PORT, () => {
    console.log(`Server started and listening on port ${PORT}`);
});
