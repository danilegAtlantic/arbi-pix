
import { Solicitacao } from "../entities/Solicitacao";


export interface ISolicitacaoRepository {

    createRequest(solicitacao: Solicitacao): Promise<Solicitacao | null>;
    
};