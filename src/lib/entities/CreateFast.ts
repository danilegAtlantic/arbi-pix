import { ICreateFast } from '../interfaces/ICreateFast';
import { v4 as uuid } from 'uuid';

export class CreateFast implements ICreateFast {

    public readonly id: string;
    public type: string;
    public name : string;
    public phone: string;
    public email: string;
    public cpf: string;
    public cnpj: string;
    
    

    constructor(props: Omit<CreateFast, 'id'>, id?: string) {
        Object.assign(this, props);
        if (!id) this.id = uuid();
    };

}