import axios, { AxiosRequestConfig } from 'axios';
import { OperacaoTratamentoBaixaFalhaCreditoDTO } from './OperacaoTratamentoBaixaFalhaCreditoDTO';
import { logError, tint } from '../../../../../bin/functions/CursorLog';

export class OperacaoTratamentoBaixaFalhaCreditoUseCase {
    /* private readonly url: string = 'https://gaph.bancoarbi.com.br/pix/v2/operacao/devolucao_pagamento'; */

    constructor(
        /* private solicitacaoRepository: ISolicitacaoRepository, */
    ) { };

    async run(Data: OperacaoTratamentoBaixaFalhaCreditoDTO) {
        const axios = require('axios');
        let data = JSON.stringify({
            "codUsuario": Data.codUsuario,
            "falhas": [
                {
                    "endToEnd": Data.falhas[0].endToEnd,
                    "dataHoraRegistro": Data.falhas[0].dataHoraRegistro,
                    "descricaoErro": Data.falhas[0].descricaoErro,
                    "codIspb": Data.falhas[0].codIspb,
                    "codAgencia": Data.falhas[0].codAgencia,
                    "nroConta": Data.falhas[0].nroConta,
                    "valor": Data.falhas[0].valor,
                    "desbloqueioRealizado": Data.falhas[0].desbloqueioRealizado,
                    "interno": Data.falhas[0].interno
                }
            ]
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://gaph.bancoarbi.com.br/pix/v2/operacao/tratamento/baixa/falha_credito',
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