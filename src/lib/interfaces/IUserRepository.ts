import { Document, Types } from "mongoose";
import { User } from "../entities/User";
import { FindUserParamType } from "../../bin/functions/IdentifyValue";
import { IUserFormattedData } from "../../bin/functions/FormatUserData";

export interface IUserRepository {
    
    createUser(user: User): Promise<User | null | void>;
    findUser(value: string, valueType: FindUserParamType): Promise<IUserFormattedData | null>;
    findUserByCpfPhoneNumber(document_number: string, phone_number: string): Promise<string | null>
    updateUserDeviceId(user_id: string, device_id: string): Promise<void>;
    checkUserExists(email_address: string, document_number: string): Promise<boolean>;
    updateUserPassword( token: string, cpf: string, new_password: string): Promise<void>;
    generateToken(): Promise<string>;
    verifyUserPassword(user_id:string, password:string): Promise<boolean>;
    findUserByCnpjEmail(cnpj: string, email_address: string): Promise<User | null>;
};