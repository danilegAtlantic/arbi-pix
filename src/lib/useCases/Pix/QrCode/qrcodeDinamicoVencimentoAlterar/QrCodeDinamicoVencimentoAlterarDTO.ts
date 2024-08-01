
export interface QrCodeDinamicoVencimentoAlterarDTO {
    urlAcessToken: string;
    versao: string;
    documentoId: string;
    documentoRevisao: string;
    calendarioVencimento: string;
    calendarioValidadeAposVencimento: number;
    pagadorCpf: string;
    pagadorCnpj: string;
    pagadorNome: string;
    pagadorEmail: string;
    pagadorCep: string;
    pagadorLogradouro: string;
    pagadorCidade: string;
    pagadorUf: string;
    recebedorCpf: string;
    recebedorCnpj: string;
    recebedorNomeFantasia: string;
    recebedorLogradouro: string;
    recebedorUf: string;
    valorOriginal: number;
    chaveDict: string;
    referenciaInterna: string;
    solicitacaoPagador: string;
    valorJuros: number;
    valorMulta: number;
    valorDesconto: number;
    valorFinal: number;
    modalidadeMulta: string;
    modalidadeJuros: string;
    modalidadeAbatimento: string;
    modalidadeDesconto: string;
    descontosDataFixa: [
        {
            data: string;
            valorPerc: string;
        }
    ],
    reutilizavel: boolean;
    infoAdicional: [
        {
            nome: string;
            valor: string;
        }
    ]

};

