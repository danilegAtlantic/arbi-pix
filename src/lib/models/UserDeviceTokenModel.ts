import mongoose, { Schema } from "mongoose";
import { UserDeviceToken } from "../entities/UserDeviceToken";

const schema = new Schema<UserDeviceToken>(
    {
        id: { type: String, required: true },
        user_id: { type: String, required: true },
        device_token: { type: String, required: true },
    },
    {
        toJSON: {
            transform: (_, ret): void => {
                ret._id = ret._id;
                delete ret._id;
                delete ret.__v;
                delete ret.createdAt;
                delete ret.updatedAt;
            },
        },
        timestamps: {
            createdAt: true,
            updatedAt: true
        }
    });

export const UserDeviceTokenModel = mongoose.model<UserDeviceToken>("users.devices.tokens", schema);