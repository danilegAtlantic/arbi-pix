import axios, { AxiosRequestConfig } from 'axios';
import { OperacaoTransacoesPorUsuarioDTO } from './OperacaoTransacoesPorUsuarioDTO';
import { logError, tint } from '../../../../../bin/functions/CursorLog';

export class OperacaoTransacoesPorUsuarioUseCase {
    /* private readonly url: string = 'https://gaph.bancoarbi.com.br/pix/v2/operacao/devolucao_pagamento'; */

    constructor(
        /* private solicitacaoRepository: ISolicitacaoRepository, */
    ) { };

    async run(Data: OperacaoTransacoesPorUsuarioDTO) {
        const axios = require('axios');
        let data = JSON.stringify({
            "codIspb": Data.codIspb,
            "cpfCnpj": Data.cpfCnpj,
            "dataHoraDe":Data.dataHoraDe,
            "dataHoraAte": Data.dataHoraAte,
            "codAgencia": Data.codAgencia,
            "nroConta": Data.nroConta,
            "codUsuario": Data.codUsuario
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://gaph.bancoarbi.com.br/pix/v2/operacao/transacoes_por_usuario',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': 'incap_ses_1619_2851654=gmijNONK9AsodnkICNh3FmebqmYAAAAAiEIvKb4ucn6FiVsdVdDsBw==; nlbi_2851654=psLISbo7dz0mh9fbjmm9vwAAAAAe7z/kd0uAUL/l2Z1OwSRP; visid_incap_2851654=/hVVD2aHRi+iTi0MxVUHiNgqqWYAAAAAQUIPAAAAAADA6xn8q3/PbKIm+Ds4i8x2'
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