import { ISolicitacao } from '../interfaces/ISolicitacao';
import { v4 as uuid } from 'uuid';

export class Solicitacao implements ISolicitacao {

    public readonly id: string;
    public type: string;
    public user_id: string;
    public clientMerchantId: string;
    public status: string;
    public number: string;
    public description: string;
    
    

    constructor(props: Omit<Solicitacao, 'id'>, id?: string) {
        Object.assign(this, props);
        if (!id) this.id = uuid();
    };
};