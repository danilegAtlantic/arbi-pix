import axios, { AxiosRequestConfig } from 'axios';
import { OperacaoExtratoDTO } from './OperacaoExtratoDTO';
import { logError, tint } from '../../../../../bin/functions/CursorLog';

export class OperacaoExtratoUseCase {
    /* private readonly url: string = 'https://gaph.bancoarbi.com.br/pix/v2/operacao/devolucao_pagamento'; */

    constructor(
        /* private solicitacaoRepository: ISolicitacaoRepository, */
    ) { };

    async run(Data: OperacaoExtratoDTO) {
        const axios = require('axios');
        let data = JSON.stringify({
            "codIspb": Data.codIspb,
            "codAgencia": Data.codAgencia,
            "nroConta": Data.nroConta,
            "qtdDias": Data.qtdDias,
            "nroMovimento": Data.nroMovimento,
            "endToEnd": Data.endToEnd,
            "endToEndOriginal": Data.endToEndOriginal,
            "origemMovimento": Data.origemMovimento,
            "dataDe": Data.dataDe,
            "dataAte": Data.dataAte
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://gaph.bancoarbi.com.br/pix/v2/operacao/extrato_pix',
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