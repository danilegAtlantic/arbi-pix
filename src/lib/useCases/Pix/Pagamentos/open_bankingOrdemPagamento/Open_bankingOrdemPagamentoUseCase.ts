import axios, { AxiosRequestConfig } from 'axios';
import { OpenBankingOrdemPagamentoDTO } from './Open_bankingOrdemPagamentoDTO';
import { logError, tint } from '../../../../../bin/functions/CursorLog';

export class OpenBankingOrdemPagamentooUseCase {
    private readonly url: string = 'https://gaph.bancoarbi.com.br/pix/v2/open_banking/ordem_pagamento';

    constructor(
        /* private solicitacaoRepository: ISolicitacaoRepository, */
    ) { };

    async run(data: OpenBankingOrdemPagamentoDTO) {
        const requestData = JSON.stringify({
            "codInstituicaoPagador": data.codInstituicaoPagador,
            "codAgenciaPagador": data.codAgenciaPagador,
            "nroContaPagador": data.nroContaPagador,
            "tipoContaPagador": data.tipoContaPagador,
            "cpfCnpjPagador": data.cpfCnpjPagador,
            "nomePagador": data.nomePagador,
            "codInstituicaoBeneficiario": data.codInstituicaoBeneficiario,
            "codAgenciaBeneficiario": data.codAgenciaBeneficiario,
            "nroContaBeneficiario": data.nroContaBeneficiario,
            "tipoContaBeneficiario": data.tipoContaBeneficiario,
            "cpfCnpjBeneficiario": data.cpfCnpjBeneficiario,
            "nomeBeneficiario": data.nomeBeneficiario,
            "referenciaInterna": data.referenciaInterna,
            "codUsuario": data.codUsuario,
            "endToEnd": data.endToEnd,
            "chaveEnderecamento": data.chaveEnderecamento,
            "campoLivre": data.campoLivre,
            "idIdempotente": data.idIdempotente,
            "canalEntrada": data.canalEntrada,
            "prioridade": data.prioridade,
            "dataHoraAceitacao": data.dataHoraAceitacao,
            "finalidadeDaTransacao": data.finalidadeDaTransacao,
            "dataPagamento": data.dataPagamento,
            "cnpjIniciadoraPagamento": data.cnpjIniciadoraPagamento,
            "formaDeIniciacao": data.formaDeIniciacao,
            "valorOperacao": data.valorOperacao,
            "dinheiroEmEspecie": data.dinheiroEmEspecie,
            "modalidadeAgente": data.modalidadeAgente,
            "prestadorDoServicoDeSaque": data.prestadorDoServicoDeSaque,
            "nivelServico": data.nivelServico
        });

        const config: AxiosRequestConfig = {
            method: 'post',  // Use 'post' como valor para o tipo Method
            maxBodyLength: Infinity,
            url: this.url,
            headers: { 
                'Content-Type': 'application/json', 
                'Cookie': 'incap_ses_1619_2851654=cSvGIz7BhEijyEUFCNh3FtgqqWYAAAAA1SzwLRnYiullixg8H9bEmA==; nlbi_2851654=uIE+Qi4sgw+YTSRjjmm9vwAAAADYunDzpaRyOgc1EqhVWQJN; visid_incap_2851654=/hVVD2aHRi+iTi0MxVUHiNgqqWYAAAAAQUIPAAAAAADA6xn8q3/PbKIm+Ds4i8x2'
            },
            data: requestData
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