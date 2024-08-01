
export interface QrCodeDinamicoImagemBase64DTO {
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
    calendarioExpiracaoSegundos: number;
    modalidadeAlteracao: number;
    tipoPix: string;
    prestadorDoServicoDeSaque: string;
    modalidadeAgente: string;
    modalidadeAlteracaoTrocoSaque: number;
    valorTrocoSaque: number;

};

