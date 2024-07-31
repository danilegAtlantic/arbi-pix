import axios, { AxiosRequestConfig } from 'axios';
import { OperacaoAvisoSpiDTO } from './OperacaoAvisoSpiDTO';
import { logError, tint } from '../../../../../bin/functions/CursorLog';

export class OperacaoAvisoSpiUseCase {
    private readonly url: string = 'https://gaph.bancoarbi.com.br/pix/v2/operacao/aviso/spi';

    constructor(
        /* private solicitacaoRepository: ISolicitacaoRepository, */
    ) { };

    async run(data: OperacaoAvisoSpiDTO) {
        const requestData = JSON.stringify({
            "horaDe": data.horaDe,
            "horaAte": data.horaAte,
            "dataDe": data.dataDe,
            "dataAte": data.dataAte,
            "codigoAviso": data.codigoAviso
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