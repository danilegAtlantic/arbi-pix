import axios, { AxiosRequestConfig } from 'axios';
import { QrCodeDinamicoImediatoAlterarDTO } from './QrCodeDinamicoImediatoAlterarDTO';
import { logError, tint } from '../../../../../bin/functions/CursorLog';

export class QrCodeDinamicoImediatoAlterarUseCase {
    private readonly url: string = 'https://gaph.bancoarbi.com.br/pix/v2/open_banking/ordem_pagamento';

    constructor(
        /* private solicitacaoRepository: ISolicitacaoRepository, */
    ) { };

    async run(Data: QrCodeDinamicoImediatoAlterarDTO) {
        const axios = require('axios');
        let data = JSON.stringify({
            "urlAcessToken": Data.urlAcessToken,
            "versao": Data.versao,
            "documentoId": Data.documentoId,
            "documentoRevisao": Data.documentoRevisao,
            "calendarioExpiracaoSegundos": Data.calendarioExpiracaoSegundos,
            "pagadorCpf": Data.pagadorCpf,
            "pagadorCnpj": Data.pagadorCnpj,
            "pagadorNome": Data.pagadorNome,
            "recebedorCpf": Data.recebedorCpf,
            "recebedorCnpj": Data.recebedorCnpj,
            "recebedorNomeFantasia": Data.recebedorNomeFantasia,
            "recebedorLogradouro": Data.recebedorLogradouro,
            "recebedorUf": Data.recebedorUf,
            "valorOriginal": Data.valorOriginal,
            "chaveDict": Data.chaveDict,
            "referenciaInterna": Data.referenciaInterna,
            "solicitacaoPagador": Data.solicitacaoPagador,
            "reutilizavel": Data.reutilizavel,
            "infoAdicional": [
                {
                    "nome": Data.infoAdicional[0].nome,
                    "valor": Data.infoAdicional[0].valor
                }
            ],
            "tipoPix": Data.tipoPix,
            "prestadorDoServicoDeSaque": Data.prestadorDoServicoDeSaque,
            "modalidadeAgente": Data.modalidadeAgente,
            "modalidadeAlteracaoTrocoSaque": Data.modalidadeAlteracaoTrocoSaque,
            "valorTrocoSaque": Data.valorTrocoSaque
        });

        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: 'https://gaph.bancoarbi.com.br/pix/v2/qrcode/dinamico/imediato/alterar',
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