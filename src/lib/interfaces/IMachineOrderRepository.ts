import { MachineOrder } from "../entities/MachineOrder";

import { IUserFormattedData } from "../../bin/functions/FormatUserData";
import { FindUserParamType } from "../../bin/functions/IdentifyValue"; 
import { User } from "../entities/User";

export interface IMachineOrderRepository {
    createMachineOrder(machineOrder: MachineOrder): Promise<MachineOrder | null>;
    /* findUser(value: string, valueType: FindUserParamType): Promise<IUserFormattedData | null>; */
    /* findUserByCpfPhoneNumber(document_number: string, phone_number: string): Promise<import("mongoose").Types.ObjectId | null>
    updateUserDeviceId(user_id: string, device_id: string): Promise<void>;
    checkUserExists(email_address: string, document_number: string): Promise<boolean>;
    updateUserPassword(cpf: string, new_password: string): Promise<void>;
    generateToken(): Promise<string>;
    verifyUserPassword(user_id:string, password:string): Promise<boolean>; */
};