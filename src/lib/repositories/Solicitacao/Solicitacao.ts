import { Solicitacao } from "../../entities/Solicitacao";

import { SolicitacaoModel} from "../../models/SolicitacaoModel"
import { ISolicitacaoRepository } from "../../interfaces/ISolicitacaoRepository";


export class SolicitacaoRepository implements ISolicitacaoRepository {
    

    async createRequest(solicitacao: Solicitacao): Promise<Solicitacao | null> {
        console.log(solicitacao);
        return await  SolicitacaoModel.create(solicitacao);
    };
    

    

 
};