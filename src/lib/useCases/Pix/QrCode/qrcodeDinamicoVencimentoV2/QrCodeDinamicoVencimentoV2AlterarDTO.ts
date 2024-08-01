
export interface QrCodeDinamicoVencimentoAlterarV2DTO {
    nomeBeneficiario: string;
    cidade: string;
    cep: string;
    codUsuario: string;
    indValidarChave: boolean;
    codIspb: string;
    referenciaInterna: string;
    documentoId: string;
    documentoRevisao: string;
    pagadorCpf: string;
    pagadorCnpj: string;
    pagadorNome: string;
    recebedorCpf: string;
    recebedorCnpj: string;
    recebedorNomeFantasia: string;
    recebedorLogradouro: string;
    recebedorUf: string;
    valor: number;
    chaveEnderecamento: string;
    solicitacaoPagador: string;
    infoAdicional: [
        {
            nome: string;
            valor: string;
        }
    ],
    reutilizavel: boolean;
    calendarioValidadeAposVencimento: number;
    calendarioVencimento: string;
    pagadorEmail: string;
    pagadorCep: string;
    pagadorLogradouro: string;
    pagadorCidade: string;
    pagadorUf: string;
    valorJuros: number;
    valorMulta: number;
    valorDesconto: number;
    valorAbatimento: number;
    modalidadeMulta: string;
    modalidadeJuros: string;
    modalidadeAbatimento: string;
    modalidadeDesconto: string;
    descontosDataFixa: [
        {
            data: string;
            valorPerc: string;
        }
    ]

};

