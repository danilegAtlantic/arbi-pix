import { FindUserParamType } from "../../../bin/functions/IdentifyValue";
import { User } from "../../entities/User";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { UserModel } from "../../models/UserModel";
import { UserTokenModel } from "../../models/UserTokenModel";


export class UserRepository implements IUserRepository {
  
    async createUser(user: User): Promise<User | null | void> {
        return await UserModel.create(user);
    };
   
    async generateToken ():Promise<string> {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';
    
        for (let i = 0; i < 8; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            token += characters.charAt(randomIndex);
        }
    
        return token;
    };
    

    

    async findUserByCpfPhoneNumber(document_number: string, phone_number: string): Promise<string | null> {

        const [userDoc, userContact] = await Promise.all([
            UserModel.findOne({ 'user_info.document_info.cpf.document_number': document_number }),
            UserModel.findOne({ phone_number: phone_number })
        ]);

       /*  console.log(userDoc, userContact); */

        if (!userDoc ) return null;

        return userDoc.user_info.email_address;
    };

    async  findUser(value: string, valueType: FindUserParamType) {
        const userModelName = 'users'; // Nome da coleção do novo modelo
        const userField = 'id'; // Campo no novo modelo correspondente ao campo id
    
        let matchField = '';
    
        switch (valueType) {
            case FindUserParamType.EMAIL:
                matchField = 'user_info.email_address';
                break;
            case FindUserParamType.CNPJ:
                matchField = 'corporate_info.document_info.cnpj';
                break;
            case FindUserParamType.CPF:
                matchField = 'user_info.document_info.cpf.document_number'; // Substitua pelo campo correto no novo modelo
                break;
            default:
                return null;
        }
    
        const agg = [
            {
                $match: {
                    [matchField]: value, // Usar o campo correspondente no novo modelo
                },
            },
            {
                $project: {
                    _id: 0,
                    user: "$$ROOT",
                },
            },
        ];
    
        return (await UserModel.aggregate(agg)).at(0);
    }
    async verifyUserPassword(user: string, password: string){

        const auth = await UserModel.findOne({id:user , stored_password: password});
         
        if (auth!=null){
        return true;
        }
        else{
            return false;
        }

    }
    async updateUserDeviceId(user_id: string, device_id: string): Promise<void> {
        await UserModel.findOneAndUpdate({ id: user_id }, { $set: { device_id: device_id } });
    };
    async updateUserPassword(token: string, cpf: string, new_password: string): Promise<void> {
        console.log("token aqui", token);
        await UserTokenModel.findOneAndUpdate({ token: token }, { $set: { "users.user_info.stored_password": new_password } });
   
    };

   async  checkUserExists(email_address: string, document_number: string): Promise<boolean> {
    // Use a função findOne do modelo UserModel para procurar um usuário
    const user = await UserModel.findOne({
        $or: [
            { email_address: email_address },
            { document_number: document_number },
        ],
    });

    // Se um usuário for encontrado, retorne true; caso contrário, retorne false
    return !!user;
}

async findUserByCnpjEmail(cnpj: string, email_address: string): Promise<User | null> {
    return await UserModel.findOne({
        $or: [
            { "user_info.email_address": email_address },
            { "user_info.document_info.cnpj.document_number": cnpj }
        ]
    });
};
};