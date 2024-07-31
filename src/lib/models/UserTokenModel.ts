import mongoose, { Schema } from "mongoose";
import { UserToken } from "../entities/UserToken";

const schema = new Schema<UserToken>(
    {
        id: { type: String, required: false },
        token: { type: String, required: true },
        data: { type: String, required: false, default: null },
        method: { type: String, required: true },
        type: { type: String, required: true },
        status: { type: String, required: true },
        contact: { type: String, required: true },
        created_date: { type: String, required: false, default: new Date().toISOString() },
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

export const UserTokenModel = mongoose.model<UserToken>("users.tokens", schema);