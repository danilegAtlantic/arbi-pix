
export interface OperacaoTratamentoBaixaFalhaDebitoCancelamentoDTO {
    codUsuario: string;
            falhas: [
                {
                    endToEnd: string;
                    dataHoraRegistro: string;
                    descricaoErro: string;
                    codIspb: string;
                    codAgencia: string;
                    nroConta: string;
                    valor: number;
                    desbloqueioRealizado: boolean;
                    interno: boolean;
                }
            ]
};

