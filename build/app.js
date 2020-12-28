'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
var dotenv_1 = __importDefault(require('dotenv'));
var express_1 = __importDefault(require('express'));
var morgan_1 = __importDefault(require('morgan'));
var MasterRouter_1 = __importDefault(require('./MasterRouter'));
// load the environment variables from the .env file
dotenv_1.default.config({
    path: '.env',
});
/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.router = MasterRouter_1.default;
    }
    return Server;
})();
// initialize server app
var server = new Server();
server.app.use(
    morgan_1.default(function (tokens, req, res) {
        return [
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'),
            '-',
            tokens['response-time'](req, res),
            'ms',
        ].join(' ');
    }),
);
server.app.use('/api', server.router);
server.app.use(function (err, _req, res) {
    res.status(err.statusCode || 500).json({
        success: false,
        statusCode: err.statusCode,
        message: err.message,
    });
});
// make server listen on some port
(function (port) {
    if (port === void 0) {
        port = process.env.APP_PORT || 5000;
    }
    server.app.listen(port, function () {
        return console.log('> Listening on port ' + port);
    });
})();
//# sourceMappingURL=app.js.map
