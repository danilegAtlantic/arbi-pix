import mongoose, { Schema } from "mongoose";
import { CreateFast } from "../entities/CreateFast";
import {ISolicitacao } from "../interfaces/ISolicitacao";

const schema = new Schema<CreateFast>(
    {
        id: { type: String, required: false },
        type: { type: String, required: true },
        name: { type: String, required: false },
        phone: { type: String, required: false },
        email: { type: String, required: false },
        cpf: { type: String, required: false },
        cnpj: { type: String, required: false },

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
        timestamps: true,
    });

    /* schema.index({ email: 1, type: 1, cpf: 1, cnpj: 1}); */


export const CreateFastModel = mongoose.model<CreateFast>("create_fast", schema);