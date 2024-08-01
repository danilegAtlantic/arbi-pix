
export interface QrCodeDinamicoImediatoAlterarDTO {
	urlAcessToken: string;
            versao: string;
            documentoId: string;
            documentoRevisao: string;
            calendarioExpiracaoSegundos: number;
            pagadorCpf: string;
            pagadorCnpj: string;
            pagadorNome: string;
            recebedorCpf: string;
            recebedorCnpj: string;
            recebedorNomeFantasia: string;
            recebedorLogradouro: string;
            recebedorUf: string;
            valorOriginal: number;
            chaveDict: string;
            referenciaInterna: string;
            solicitacaoPagador: string;
            reutilizavel: true,
            infoAdicional: [
                {
                    nome: string;
                    valor: string;
                }
            ],
            tipoPix: string;
            prestadorDoServicoDeSaque: string;
            modalidadeAgente: string;
            modalidadeAlteracaoTrocoSaque: number;
            valorTrocoSaque: number;

};

