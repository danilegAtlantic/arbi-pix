import axios, { AxiosRequestConfig } from 'axios';
import { OperacaoCancelaPgtoDTO } from './OperacaoCancelaPgtpAgendadoDTO';
import { logError, tint } from '../../../../../bin/functions/CursorLog';

export class OperacaoCancelaPgtoUseCase {
    private readonly url: string = 'https://gaph.bancoarbi.com.br/pix/v2/operacao/cancela_pgto_agendado';

    constructor(
        /* private solicitacaoRepository: ISolicitacaoRepository, */
    ) { };

    async run(data: OperacaoCancelaPgtoDTO) {
        const requestData = JSON.stringify({
            "id": data.id,
            "endToEnd": data.endToEnd,
            "dataPagamento": data.dataPagamento,
            "codInstituicaoSolicitante": data.codInstituicaoSolicitante,
            "codAgenciaSolicitante": data.codAgenciaSolicitante,
            "nroContaSolicitante": data.nroContaSolicitante,
            "cpfCnpjSolicitante": data.cpfCnpjSolicitante,
            "codIspbBackOffice": data.codIspbBackOffice
        });

        const config: AxiosRequestConfig = {
            method: 'post',  // Use 'post' como valor para o tipo Method
            maxBodyLength: Infinity,
            url: this.url,
            headers: { 
                'Content-Type': 'application/json', 
                'Cookie': 'incap_ses_1619_2851654=cSvGIz7BhEijyEUFCNh3FtgqqWYAAAAA1SzwLRnYiullixg8H9bEmA==; nlbi_2851654=uIE+Qi4sgw+YTSRjjmm9vwAAAADYunDzpaRyOgc1EqhVWQJN; visid_incap_2851654=/hVVD2aHRi+iTi0MxVUHiNgqqWYAAAAAQUIPAAAAAADA6xn8q3/PbKIm+Ds4i8x2'
              },
            data: requestData
        };

        try {
            const response = await axios.request(config);
            console.log(JSON.stringify(response.data));



            return {
                status: 200,
                message: "Solicitação enviada com sucesso",
                data: [response.data]
            };
        } catch (error) {
            console.error(logError(), tint("SolicitacaoUseCase"), 'Error sending request:', error);
            return {
                status: 500,
                message: "Erro ao enviar solicitação",
                data: []
            };
        }
    }
}