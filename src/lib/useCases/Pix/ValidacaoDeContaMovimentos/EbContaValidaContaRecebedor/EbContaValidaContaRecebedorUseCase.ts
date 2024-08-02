import axios, { AxiosRequestConfig } from 'axios';
import { EvContaValidaContaRecebedorDTO } from './EbContaValidaContaRecebedorDTO';
import { logError, tint } from '../../../../../bin/functions/CursorLog';

export class EvContaValidaContaRecebedorUseCase {
    private readonly url: string = 'https://gaph.bancoarbi.com.br/pix/v2/open_banking/ordem_pagamento';

    constructor(
        /* private solicitacaoRepository: ISolicitacaoRepository, */
    ) { };

    async run(Data: EvContaValidaContaRecebedorDTO) {
        const axios = require('axios');
        let data = JSON.stringify({
            "codInstituicao": Data.codInstituicao,
            "codColigada": Data.codColigada,
            "codAgencia": Data.codAgencia,
            "nroConta": Data.nroConta,
            "cpfCnpj": Data.cpfCnpj,
            "tipoConta": Data.tipoConta,
            "valor": Data.valor,
            "codUsuario": Data.codUsuario,
            "nome": Data.nome,
            "tipoMovimento": Data.tipoMovimento,
            "codOperacao": Data.codOperacao,
            "endToEnd": Data.endToEnd,
            "endToEndOriginal": Data.endToEndOriginal,
            "chaveEnderecamento": Data.chaveEnderecamento,
            "origemMovimento": Data.origemMovimento,
            "referenciaInterna": Data.referenciaInterna,
            "tipoQRCode": Data.tipoQRCode,
            "cnpjIniciadoraPagamento": Data.cnpjIniciadoraPagamento,
            "motivoMED": Data.motivoMED,
            "valorCompra": Data.valorCompra,
            "valorTroco": Data.valorTroco,
            "valorSaque": Data.valorSaque,
            "modalidadeAgente": Data.modalidadeAgente,
            "prestadorDoServicoDeSaque": Data.prestadorDoServicoDeSaque,
            "finalidadeDaTransacao": Data.finalidadeDaTransacao,
            "codAgenciaPix": Data.codAgenciaPix,
            "numeroContaPix": Data.numeroContaPix
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://gaph.bancoarbi.com.br/pix/v2/eb/conta/valida_conta_recebedor',
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