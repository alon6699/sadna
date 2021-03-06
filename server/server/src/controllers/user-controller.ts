import userRepo from 'src/dal/user-repo';
import { IUser } from '@models/user-model';
import { UserNotFoundError } from '@shared/errors';

function getAll(): Promise<IUser[]> {
    return userRepo.getAll();
}

function addOne(user: IUser): Promise<void> {
    return userRepo.add(user);
}

async function deleteOne(id: number): Promise<void> {
    const persists = await userRepo.isExists(id);
    if (!persists) {
        throw new UserNotFoundError();
    }
    return userRepo.delete(id);
}

export default {
    getAll,
    addOne,
    delete: deleteOne,
} as const;
