import axios, { AxiosRequestConfig } from 'axios';
import { OperacaoDevolucaoPagamentoDTO } from './OperacaoDevolucaoPagamentoDTO';
import { logError, tint } from '../../../../../bin/functions/CursorLog';

export class OperacaoDevolucaoPagamentoUseCase {
    /* private readonly url: string = 'https://gaph.bancoarbi.com.br/pix/v2/operacao/devolucao_pagamento'; */

    constructor(
        /* private solicitacaoRepository: ISolicitacaoRepository, */
    ) { };

    async run(Data: OperacaoDevolucaoPagamentoDTO) {
        const axios = require('axios');
        let data = JSON.stringify({
            "valor": 99999.99,
            "endToEnd": "E01234567202001101754mgiDSOh98El",
            "cpfCnpj": "01234567891234",
            "codUsuario": "_autbank1",
            "reasons": [
                {
                    "code": "BE08",
                    "info": "Informação adicional"
                }
            ],
            "idIdempotente": "c2235223-56d2-4945-8528-f480b9775736",
            "returnId": "D01234567202001101754mgiDSOh98El",
            "canalEntrada": "Mobile App",
            "idDevolucao": "c223522356d249458528f480b9775733",
            "campoLivre": "Informação ao recebedor",
            "prioridade": "HIGH",
            "dataHoraAceitacao": "2021-01-01T00:00:00.000Z"
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://gaph.bancoarbi.com.br/pix/v2/operacao/devolucao_pagamento',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': 'visid_incap_2851654=/hVVD2aHRi+iTi0MxVUHiNgqqWYAAAAAQUIPAAAAAADA6xn8q3/PbKIm+Ds4i8x2'
            },
            data: data
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