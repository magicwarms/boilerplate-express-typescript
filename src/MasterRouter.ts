import { Router } from 'express';
import TaskRouter from './tasks/TaskRouter';
// import ThemeBRouter from './themeB/ThemeBRouter';

class MasterRouter {
    private _router = Router();
    private _subTaskRouter = TaskRouter;
    // private _subrouterB = ThemeBRouter;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    /**
     * Connect routes to their matching routers.
     */
    private _configure() {
        this._router.use('/task', this._subTaskRouter);
        // this._router.use('/themeB', this._subrouterB);
    }
}

export = new MasterRouter().router;
