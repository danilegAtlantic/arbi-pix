import axios, { AxiosRequestConfig } from 'axios';
import { OperacaoExtratoPixV2DTO } from './OperacaoExtratoPixV2DTO';
import { logError, tint } from '../../../../../bin/functions/CursorLog';

export class OperacaoExtratoPixV2UseCase {
    /* private readonly url: string = 'https://gaph.bancoarbi.com.br/pix/v2/operacao/devolucao_pagamento'; */

    constructor(
        /* private solicitacaoRepository: ISolicitacaoRepository, */
    ) { };

    async run(Data: OperacaoExtratoPixV2DTO) {
        const axios = require('axios');
        let data = JSON.stringify({
            "codIspb": Data.codIspb,
            "codAgencia": Data.codAgencia,
            "nroConta": Data.nroConta,
            "qtdDias": Data.qtdDias,
            "endToEnd": Data.endToEnd,
            "endToEndOriginal": Data.endToEndOriginal,
            "origemMovimento": Data.origemMovimento,
            "dataDe": Data.dataDe,
            "dataAte": Data.dataAte,
            "cpfCnpjTitular": Data.cpfCnpjTitular
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://gaph.bancoarbi.com.br/pix/v2/operacao/extrato_pix/v2',
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