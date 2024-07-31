
import { CreateFast } from "../entities/CreateFast";


export interface ICreateFastRepository {

    createFast(createFast: CreateFast): Promise<CreateFast | null>;
    
};