import axios, { AxiosRequestConfig } from 'axios';
import { pushReceberNotificacaoDTO } from './pushReceberNotificacaoDTO';
import { logError, tint } from '../../../../../bin/functions/CursorLog';

export class pushReceberNotificacaoUseCase {
    private readonly url: string = 'https://gaph.bancoarbi.com.br/pix/v2/open_banking/ordem_pagamento';

    constructor(
        /* private solicitacaoRepository: ISolicitacaoRepository, */
    ) { };

    async run(Data: pushReceberNotificacaoDTO) {
        const axios = require('axios');
        let data = JSON.stringify({
            "tipoNotificacao": Data.tipoNotificacao,
            "cpfCnpj": Data.cpfCnpj,
            "mensagem": {
                "key": Data.mensagem.key,
                "keyType": Data.mensagem.keyType,
                "account": {
                    "participant": Data.mensagem.account.participant,
                    "branch": Data.mensagem.account.branch,
                    "accountNumber": Data.mensagem.account.accountNumber,
                    "accountType": Data.mensagem.account.accountType,
                    "openingDate": Data.mensagem.account.openingDate
                },
                "owner": {
                    "type": Data.mensagem.owner.type,
                    "taxIdNumber": Data.mensagem.owner.taxIdNumber,
                    "name": Data.mensagem.owner.name,
                    "tradeName": Data.mensagem.owner.tradeName
                },
                "creationDate": "2020-08-07T16:04:30.380Z",
                "keyOwnershipDate": "2020-08-07T16:04:30.380Z",
                "status": "CREATED"
            }
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://gaph.bancoarbi.com.br/pix/v2/push/receber_notificacao',
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