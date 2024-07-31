
import { v4 as uuid } from 'uuid';
import { IMachineOrder } from '../interfaces/IMachineOrder';

export class MachineOrder implements IMachineOrder {

    public readonly MachineOrderid: string;
    public type: string;
    public amount: string;
    public email: string;
    public cpf: string;
    public cnpj: string;
    public companyName: string;
    public phone_number: string;

    constructor(props: Omit<MachineOrder, 'id'>) {
        Object.assign(this, props);
        this.MachineOrderid = uuid();
    };
};