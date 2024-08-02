
export interface EbContaMovimentoDTO {
	codInstituicao: string;
	codColigada: string;
	codAgencia: string;
	nroConta: string;
	cpfCnpj: string;
	valor: number;
	codUsuario: string;
	codOperacao: string;
	complemento: string;
	codIspbContraParte: string;
	codBancoContraParte: string;
	codAgenciaContraParte: string;
	nroContaContraParte: string;
	cpfCnpjContraParte: string;
	nomeContraParte: string;
	tipoConta: string;
	tipoContaContraParte: string;
	chaveBloqueio: string;
	endToEnd: string;
	endToEndOriginal: string;
	chaveEnderecamento: string;
	origemMovimento: string;
	tipoMovimento: string;
	nome: string;
	codigoMotivoDevolucao: string;
	referenciaInterna: string;
	idIdempotenteEbank: number;
	desbloqueioRealizado: boolean;
	tipoQRCode: string;
	cnpjIniciadoraPagamento: string;
	uuidBloqueioDevolucaoEspecial: string;
	uuidSolicitacaoDevolucaoEspecial: string;
	motivoMED: string;
	valorCompra: number;
	valorTroco: number;
	valorSaque: number;
	modalidadeAgente: string;
	prestadorDoServicoDeSaque: string;
	finalidadeDaTransacao: string;
	campoLivre: string;
	codAgenciaPix: string;
	numeroContaPix: string;
}

