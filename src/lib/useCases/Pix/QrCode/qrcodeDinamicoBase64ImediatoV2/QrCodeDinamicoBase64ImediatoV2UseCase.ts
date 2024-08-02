import axios, { AxiosRequestConfig } from 'axios';
import { QrCodeDinamicoBase64ImediatoV2DTO } from './QrCodeDinamicoBase64ImediatoV2DTO';
import { logError, tint } from '../../../../../bin/functions/CursorLog';

export class QrCodeDinamicoBase64ImediatoV2UseCase {
    private readonly url: string = 'https://gaph.bancoarbi.com.br/pix/v2/open_banking/ordem_pagamento';

    constructor(
        /* private solicitacaoRepository: ISolicitacaoRepository, */
    ) { };

    async run(Data: QrCodeDinamicoBase64ImediatoV2DTO) {
        const axios = require('axios');
        let data = JSON.stringify({
            "nomeBeneficiario": Data.nomeBeneficiario,
            "cidade": Data.cidade,
            "cep": Data.cep,
            "codUsuario": Data.codUsuario,
            "indValidarChave": Data.indValidarChave,
            "codIspb": Data.codIspb,
            "referenciaInterna": Data.referenciaInterna,
            "documentoId": Data.documentoId,
            "documentoRevisao": Data.documentoRevisao,
            "pagadorCpf": Data.pagadorCpf,
            "pagadorCnpj": Data.pagadorCnpj,
            "pagadorNome": Data.pagadorNome,
            "recebedorCpf": Data.recebedorCpf,
            "recebedorCnpj": Data.recebedorCnpj,
            "recebedorNomeFantasia": Data.recebedorNomeFantasia,
            "recebedorLogradouro": Data.recebedorLogradouro,
            "recebedorUf": Data.recebedorUf,
            "valor": Data.valor,
            "chaveEnderecamento": Data.chaveEnderecamento,
            "solicitacaoPagador": Data.solicitacaoPagador,
            "infoAdicional": [
                {
                    "nome": Data.infoAdicional[0].nome,
                    "valor": Data.infoAdicional[0].valor
                }
            ],
            "reutilizavel": Data.reutilizavel,
            "calendarioExpiracaoSegundos": Data.calendarioExpiracaoSegundos,
            "modalidadeAlteracao": Data.modalidadeAlteracao,
            "tipoPix": Data.tipoPix,
            "prestadorDoServicoDeSaque": Data.prestadorDoServicoDeSaque,
            "modalidadeAgente": Data.modalidadeAgente,
            "modalidadeAlteracaoTrocoSaque": Data.modalidadeAlteracaoTrocoSaque,
            "valorTrocoSaque": Data.valorTrocoSaque
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://gaph.bancoarbi.com.br/pix/v2/qrcode/dinamico/base_64/imediato/v2',
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