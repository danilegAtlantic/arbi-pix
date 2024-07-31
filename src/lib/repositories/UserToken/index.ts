import { UserToken } from "../../entities/UserToken";
import { IUserTokenRepository } from "../../interfaces/IUserTokenRepository";
import { UserTokenModel } from "../../models/UserTokenModel";

export class UserTokenRepository implements IUserTokenRepository {
    async create(userToken: UserToken): Promise<void> {
        await UserTokenModel.create(userToken);
    };

    async setUserTokenCompleted(token: string): Promise<string> {
        throw new Error("Method not implemented.");
    };
};