import { CustomError } from '@shared/errors';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import StatusCodes from 'http-status-codes';
import logger from 'jet-logger';
import morgan from 'morgan';
import apiRouter from './routes/api';

const app = express();
app.use(cors({origin: "*"}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use('/api', apiRouter);
app.use((err: Error | CustomError, _: Request, res: Response, __: NextFunction) => {
    logger.err(err, true);
    const status = (err instanceof CustomError ? err.HttpStatus : StatusCodes.BAD_REQUEST);
    return res.status(status).json({
        error: err.message,
    });
});

export default app;
