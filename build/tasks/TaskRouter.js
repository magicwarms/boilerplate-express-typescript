'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
var express_1 = require('express');
var TaskController_1 = __importDefault(require('./TaskController'));
var TaskControllerRouter = /** @class */ (function () {
    function TaskControllerRouter() {
        this._router = express_1.Router();
        this._controller = TaskController_1.default;
        this._configure();
    }
    Object.defineProperty(TaskControllerRouter.prototype, 'router', {
        get: function () {
            return this._router;
        },
        enumerable: false,
        configurable: true,
    });
    /**
     * Connect routes to their matching controller endpoints.
     */
    TaskControllerRouter.prototype._configure = function () {
        var _this = this;
        this._router.get('/', function (_req, res, _next) {
            res.status(200).json(_this._controller.defaultMethod());
        });
    };
    return TaskControllerRouter;
})();
module.exports = new TaskControllerRouter().router;
//# sourceMappingURL=TaskRouter.js.map
