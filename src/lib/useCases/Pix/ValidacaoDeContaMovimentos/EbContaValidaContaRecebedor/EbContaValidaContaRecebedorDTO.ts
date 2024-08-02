
export interface EvContaValidaContaRecebedorDTO {
	codInstituicao: string;
	codColigada: string;
	codAgencia: string;
	nroConta: string;
	cpfCnpj: string;
	tipoConta: string;
	valor: number;
	codUsuario: string;
	nome: string;
	tipoMovimento: string;
	codOperacao: string;
	endToEnd: string;
	endToEndOriginal: string;
	chaveEnderecamento: string;
	origemMovimento: string;
	referenciaInterna: string;
	tipoQRCode: string;
	cnpjIniciadoraPagamento: string;
	motivoMED: string;
	valorCompra: number;
	valorTroco: number;
	valorSaque: number;
	modalidadeAgente: string;
	prestadorDoServicoDeSaque: string;
	finalidadeDaTransacao: string;
	codAgenciaPix: string;
	numeroContaPix: string;
}

