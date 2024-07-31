import axios, { AxiosRequestConfig } from 'axios';
import { OperacaoGetPagamentoAgendadoDTO } from './OperacaoGetPagamentoAgendadoDTO';
import { logError, tint } from '../../../../../bin/functions/CursorLog';

export class OperacaoGetPagamentoAgendadoUseCase {
    /* private readonly url: string = 'https://gaph.bancoarbi.com.br/pix/v2/operacao/devolucao_pagamento'; */

    constructor(
        /* private solicitacaoRepository: ISolicitacaoRepository, */
    ) { };

    async run(Data: OperacaoGetPagamentoAgendadoDTO) {
        const axios = require('axios');

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://gaph.bancoarbi.com.br/pix/v2/operacao/get_pagamento_agendado/{id}',
            headers: {
                'Cookie': 'incap_ses_1619_2851654=gmijNONK9AsodnkICNh3FmebqmYAAAAAiEIvKb4ucn6FiVsdVdDsBw==; nlbi_2851654=psLISbo7dz0mh9fbjmm9vwAAAAAe7z/kd0uAUL/l2Z1OwSRP; visid_incap_2851654=/hVVD2aHRi+iTi0MxVUHiNgqqWYAAAAAQUIPAAAAAADA6xn8q3/PbKIm+Ds4i8x2'
            }
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