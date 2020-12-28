'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
var express_1 = require('express');
var TaskRouter_1 = __importDefault(require('./tasks/TaskRouter'));
// import ThemeBRouter from './themeB/ThemeBRouter';
var MasterRouter = /** @class */ (function () {
    function MasterRouter() {
        this._router = express_1.Router();
        this._subTaskRouter = TaskRouter_1.default;
        this._configure();
    }
    Object.defineProperty(MasterRouter.prototype, 'router', {
        // private _subrouterB = ThemeBRouter;
        get: function () {
            return this._router;
        },
        enumerable: false,
        configurable: true,
    });
    /**
     * Connect routes to their matching routers.
     */
    MasterRouter.prototype._configure = function () {
        this._router.use('/task', this._subTaskRouter);
        // this._router.use('/themeB', this._subrouterB);
    };
    return MasterRouter;
})();
module.exports = new MasterRouter().router;
//# sourceMappingURL=MasterRouter.js.map
