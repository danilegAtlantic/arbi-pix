import axios, { AxiosRequestConfig } from 'axios';
import { OperacaoOrdemPagamentoDTO } from './OperacaoOrdemPagamentoDTO';
import { logError, tint } from '../../../../../bin/functions/CursorLog';

export class OperacaoOrdemPagamentoUseCase {
    /* private readonly url: string = 'https://gaph.bancoarbi.com.br/pix/v2/operacao/devolucao_pagamento'; */

    constructor(
        /* private solicitacaoRepository: ISolicitacaoRepository, */
    ) { };

    async run(Data: OperacaoOrdemPagamentoDTO) {
        const axios = require('axios');
        let data = JSON.stringify({
            "codInstituicaoPagador": Data.codInstituicaoPagador,
            "codAgenciaPagador": Data.codAgenciaPagador,
            "nroContaPagador": Data.nroContaPagador,
            "tipoContaPagador": Data.tipoContaPagador,
            "cpfCnpjPagador": Data.cpfCnpjPagador,
            "nomePagador": Data.nomePagador,
            "codInstituicaoBeneficiario": Data.codInstituicaoBeneficiario,
            "codAgenciaBeneficiario": Data.codAgenciaBeneficiario,
            "nroContaBeneficiario": Data.nroContaBeneficiario,
            "tipoContaBeneficiario": Data.tipoContaBeneficiario,
            "cpfCnpjBeneficiario": Data.cpfCnpjBeneficiario,
            "nomeBeneficiario": Data.nomeBeneficiario,
            "referenciaInterna": Data.referenciaInterna,
            "codUsuario": Data.codUsuario,
            "endToEnd": Data.endToEnd,
            "chaveEnderecamento": Data.chaveEnderecamento,
            "campoLivre": Data.campoLivre,
            "idIdempotente": Data.idIdempotente,
            "canalEntrada": Data.canalEntrada,
            "prioridade": Data.prioridade,
            "dataHoraAceitacao": Data.dataHoraAceitacao,
            "finalidadeDaTransacao": Data.finalidadeDaTransacao,
            "dataPagamento": Data.dataPagamento,
            "valorOperacao": Data.valorOperacao,
            "dinheiroEmEspecie": Data.dinheiroEmEspecie,
            "modalidadeAgente": Data.modalidadeAgente,
            "prestadorDoServicoDeSaque": Data.prestadorDoServicoDeSaque,
            "nivelServico": Data.nivelServico
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://gaph.bancoarbi.com.br/pix/v2/operacao/ordem_pagamento',
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