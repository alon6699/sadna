import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import userService from '@services/user-controller';
import { ParamMissingError } from '@shared/errors';

const userRoute = Router();
const { CREATED, OK } = StatusCodes;

userRoute.get('/', async (_: Request, res: Response) => {
    const users = await userService.getAll();
    return res.status(OK).json({users});
});

userRoute.post('/', async (req: Request, res: Response) => {
    const { user } = req.body;
    if (!user) {
        throw new ParamMissingError();
    }
    await userService.addOne(user);
    return res.status(CREATED).end();
});

userRoute.put('/', async (req: Request, res: Response) => {
    const { user } = req.body;
    if (!user) {
        throw new ParamMissingError();
    }
    await userService.updateOne(user);
    return res.status(OK).end();
});

userRoute.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
        throw new ParamMissingError();
    }
    await userService.delete(Number(id));
    return res.status(OK).end();
});

export default userRoute;
