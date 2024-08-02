import axios, { AxiosRequestConfig } from 'axios';
import { EbContaMovimentoDTO } from './EbContaMovimentoDTO';
import { logError, tint } from '../../../../../bin/functions/CursorLog';

export class EbContaMovimentoUseCase {
    private readonly url: string = 'https://gaph.bancoarbi.com.br/pix/v2/open_banking/ordem_pagamento';

    constructor(
        /* private solicitacaoRepository: ISolicitacaoRepository, */
    ) { };

    async run(Data: EbContaMovimentoDTO) {
        const axios = require('axios');
        let data = JSON.stringify({
            "codInstituicao": Data.codInstituicao,
            "codColigada": Data.codColigada,
            "codAgencia": Data.codAgencia,
            "nroConta": Data.nroConta,
            "cpfCnpj": Data.cpfCnpj,
            "valor": Data.valor,
            "codUsuario": Data.codUsuario,
            "codOperacao": Data.codOperacao,
            "complemento": Data.complemento,
            "codIspbContraParte": Data.codIspbContraParte,
            "codBancoContraParte": Data.codBancoContraParte,
            "codAgenciaContraParte": Data.codAgenciaContraParte,
            "nroContaContraParte": Data.nroContaContraParte,
            "cpfCnpjContraParte": Data.cpfCnpjContraParte,
            "nomeContraParte": Data.nomeContraParte,
            "tipoConta": Data.tipoConta,
            "tipoContaContraParte": Data.tipoContaContraParte,
            "chaveBloqueio": Data.chaveBloqueio,
            "endToEnd": Data.endToEnd,
            "endToEndOriginal": Data.endToEndOriginal,
            "chaveEnderecamento": Data.chaveEnderecamento,
            "origemMovimento": Data.origemMovimento,
            "tipoMovimento": Data.tipoMovimento,
            "nome": Data.nome,
            "codigoMotivoDevolucao": Data.codigoMotivoDevolucao,
            "referenciaInterna": Data.referenciaInterna,
            "idIdempotenteEbank": Data.idIdempotenteEbank,
            "desbloqueioRealizado": Data.desbloqueioRealizado,
            "tipoQRCode": Data.tipoQRCode,
            "cnpjIniciadoraPagamento": Data.cnpjIniciadoraPagamento,
            "uuidBloqueioDevolucaoEspecial": Data.uuidBloqueioDevolucaoEspecial,
            "uuidSolicitacaoDevolucaoEspecial": Data.uuidSolicitacaoDevolucaoEspecial,
            "motivoMED": Data.motivoMED,
            "valorCompra": Data.valorCompra,
            "valorTroco": Data.valorTroco,
            "valorSaque": Data.valorSaque,
            "modalidadeAgente": Data.modalidadeAgente,
            "prestadorDoServicoDeSaque": Data.prestadorDoServicoDeSaque,
            "finalidadeDaTransacao": Data.finalidadeDaTransacao,
            "campoLivre": Data.campoLivre,
            "codAgenciaPix": Data.codAgenciaPix,
            "numeroContaPix": Data.numeroContaPix
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://gaph.bancoarbi.com.br/pix/v2/eb/conta/movimento',
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