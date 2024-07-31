import { IEstabelecimentos } from '../interfaces/IEstabelecimentos';

export class Estabelecimentos implements IEstabelecimentos {

     public serialNumber: string;
     public perPage: string;
     public page: string;
     public name: string;
     public clientMerchantId: string;
     public taxId: string;
    
    constructor(props: Omit<Estabelecimentos, 'MachineOrderid'>) {
        Object.assign(this, props);
    };
};