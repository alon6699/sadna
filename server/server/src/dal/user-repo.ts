import { IUser } from '@models/user-model';
import { getRandomInt } from '@shared/functions';
import orm from './mock-orm';

async function getOne(email: string): Promise<IUser | null> {
    const db = await orm.openDb();
    return db.users.find((user: IUser) => user.email === email);
}

async function isExists(id: number): Promise<boolean> {
    const db = await orm.openDb();
    return db.users.some((user: IUser) => user.id === id);
}

async function getAll(): Promise<IUser[]> {
    const db = await orm.openDb();
    return db.users;
}

async function add(user: IUser): Promise<void> {
    const db = await orm.openDb();
    user.id = getRandomInt();
    db.users.push(user);
    return orm.saveDb(db);
}

async function update(user: IUser): Promise<void> {
    const db = await orm.openDb();
    for (let i = 0; i < db.users.length; i++) {
        if (db.users[i].id === user.id) {
            db.users[i] = user;
            return orm.saveDb(db);
        }
    }
}

async function deleteOne(id: number): Promise<void> {
    const db = await orm.openDb();
    for (let i = 0; i < db.users.length; i++) {
        if (db.users[i].id === id) {
            db.users.splice(i, 1);
            return orm.saveDb(db);
        }
    }
}

export default {
    getOne,
    isExists,
    getAll,
    add,
    update,
    delete: deleteOne,
} as const;
