import mongoose, { Schema } from "mongoose";
import { Solicitacao } from "../entities/Solicitacao";
import {ISolicitacao } from "../interfaces/ISolicitacao";

const schema = new Schema<Solicitacao>(
    {
        id: { type: String, required: false },
        type: { type: String, required: false },
        user_id: { type: String, required: false },
        clientMerchantId: { type: String, required: false },
        status: { type: String, required: false },
        number: { type: String, required: false },
        description: { type: String, required: false },

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


export const SolicitacaoModel = mongoose.model<Solicitacao>("requests", schema);