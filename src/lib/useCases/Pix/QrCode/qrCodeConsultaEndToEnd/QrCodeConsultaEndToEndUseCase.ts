import axios, { AxiosRequestConfig } from 'axios';
import { QrCodeConsultaEndToEndDTO } from './QrCodeConsultaEndToEndDTO';
import { logError, tint } from '../../../../../bin/functions/CursorLog';

export class QrCodeConsultaEndToEndUseCase {
    private readonly url: string = 'https://gaph.bancoarbi.com.br/pix/v2/open_banking/ordem_pagamento';

    constructor(
        /* private solicitacaoRepository: ISolicitacaoRepository, */
    ) { };

    async run(Data: QrCodeConsultaEndToEndDTO) {
        const axios = require('axios');
        let data = JSON.stringify({
            "codISPB": Data.codISPB,
            "codAgencia": Data.codAgencia,
            "nroConta": Data.nroConta,
            "txid": Data.txid
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://gaph.bancoarbi.com.br/pix/v2/qrcode/consultaQRCodeDinamico',
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