import { CreateFast } from "../../entities/CreateFast";

import { CreateFastModel} from "../../models/CreateFastModel"
import { ICreateFastRepository } from "../../interfaces/ICreateFastRepository";


export class CreateFastRepository implements ICreateFastRepository {
    

    async createFast(solicitacao: CreateFast): Promise<CreateFast | null> {
        console.log(solicitacao);
        return await  CreateFastModel.create(solicitacao);
    };
    

    

 
};