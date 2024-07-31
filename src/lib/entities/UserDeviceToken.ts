import { v4 as uuid } from 'uuid';
import { IUserDeviceToken } from '../interfaces/IUserDeviceToken';

export class UserDeviceToken implements IUserDeviceToken {

    public readonly id: string;
    public user_id: string;
    public device_token: string;

    constructor(props: Omit<UserDeviceToken, 'id'>) {
        Object.assign(this, props);
        this.id = uuid();
    };
};