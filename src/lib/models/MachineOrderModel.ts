import mongoose, { Schema } from "mongoose";
import { MachineOrder } from "../entities/MachineOrder";
import {IMachineOrder } from "../interfaces/IMachineOrder";

const schema = new Schema<MachineOrder>(
    {
        MachineOrderid: { type: String, required: false },
        type: { type: String, required: false },
        amount: { type: String, required: false },
        email: { type: String, required: false },
        cpf: { type: String, required: false },
        cnpj: { type: String, required: false },
        companyName: { type: String, required: false },
        phone_number: { type: String, required: false },

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

    schema.index({ email: 1, type: 1, cpf: 1, cnpj: 1});


export const MachineOrderModel = mongoose.model<MachineOrder>("machineOrder", schema);