import { UserDeviceToken } from "../entities/UserDeviceToken";

export interface IUserDeviceTokenRepository {
    createUserDeviceToken(userDeviceToken: UserDeviceToken): Promise<void>;
};