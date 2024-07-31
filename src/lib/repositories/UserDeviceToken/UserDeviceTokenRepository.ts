import { UserDeviceToken } from "../../entities/UserDeviceToken";
import { IUserDeviceTokenRepository } from "../../interfaces/IUserDeviceTokenRepository";
import { UserDeviceTokenModel } from "../../models/UserDeviceTokenModel";

export class UserDeviceTokenRepository implements IUserDeviceTokenRepository {
    async createUserDeviceToken(userDeviceToken: UserDeviceToken): Promise<void> {
        await UserDeviceTokenModel.findOneAndUpdate(
            {
                user_id: userDeviceToken.user_id, device_token: userDeviceToken.device_token
            },
            {
                $set: { device_token: userDeviceToken.device_token }
            },
            {
                upsert: true
            });
    };
};