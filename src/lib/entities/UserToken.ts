import { v4 as uuid } from 'uuid';
import { IUserToken, IUserTokenMethod, IUserTokenStatus, IUserTokenType } from '../interfaces/IUserToken';

export class UserToken implements IUserToken {

    public readonly id: string;
    public token: string;
    public data: string | undefined;
    public method: IUserTokenMethod;
    public type: IUserTokenType;
    public contact: string;
    public status: IUserTokenStatus;
    public created_date: string | undefined;

    constructor(props: Omit<UserToken, 'id' | 'data' | 'created_date'>) {
        Object.assign(this, props);
        this.id = uuid();
    };
};