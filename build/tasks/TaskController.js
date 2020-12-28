'use strict';
var TaskController = /** @class */ (function () {
    function TaskController() {}
    TaskController.prototype.defaultMethod = function () {
        return {
            text: "You've reached the " + this.constructor.name + ' default method',
        };
    };
    return TaskController;
})();
module.exports = new TaskController();
//# sourceMappingURL=TaskController.js.map
