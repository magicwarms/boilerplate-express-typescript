import { NextFunction, Request, Response, Router } from 'express';
import TaskController from './TaskController';

class TaskControllerRouter {
    private _router = Router();
    private _controller = TaskController;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    /**
     * Connect routes to their matching controller endpoints.
     */
    private _configure() {
        this._router.get('/', (_req: Request, res: Response, _next: NextFunction) => {
            res.status(200).json(this._controller.defaultMethod());
        });
    }
}

export = new TaskControllerRouter().router;
