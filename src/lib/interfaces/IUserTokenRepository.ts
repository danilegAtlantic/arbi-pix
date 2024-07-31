import { UserToken } from './../entities/UserToken';

export interface IUserTokenRepository {
    create(userToken: UserToken): Promise<void>;
    setUserTokenCompleted(token: string): Promise<string>;
};