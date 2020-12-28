import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import morgan from 'morgan';

import MasterRouter from './MasterRouter';
import ErrorHandler from './ErrorHandler';

// load the environment variables from the .env file
dotenv.config({
    path: '.env',
});

/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
class Server {
    public app = express();
    public router = MasterRouter;
}

// initialize server app
const server = new Server();
server.app.use(
    morgan((tokens, req, res) => {
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
server.app.use((err: ErrorHandler, _req: Request, res: Response) => {
    res.status(err.statusCode || 500).json({
        success: false,
        statusCode: err.statusCode,
        message: err.message,
    });
});

// make server listen on some port
((port = process.env.APP_PORT || 5000) => {
    server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();
