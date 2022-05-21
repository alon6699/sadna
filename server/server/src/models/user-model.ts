export interface IUser {
    id: number;
    name: string;
    email: string;
}

const getNew = (name: string, email: string): IUser => {
    return {
        id: -1,
        email,
        name,
    };
}

const copy = (user: IUser): IUser => {
    return {
        id: user.id,
        email: user.email,
        name: user.name,
    }
}

export default {
    new: getNew,
    copy,
}
