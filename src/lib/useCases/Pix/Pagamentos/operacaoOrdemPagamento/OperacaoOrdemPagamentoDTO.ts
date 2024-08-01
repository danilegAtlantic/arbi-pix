
export interface OperacaoOrdemPagamentoDTO {
	codInstituicaoPagador: string;
	codAgenciaPagador: string;
	nroContaPagador: string;
	tipoContaPagador: string;
	cpfCnpjPagador: string;
	nomePagador: string;
	codInstituicaoBeneficiario: string;
	codAgenciaBeneficiario: string;
	nroContaBeneficiario: string;
	tipoContaBeneficiario: string;
	cpfCnpjBeneficiario: string;
	nomeBeneficiario: string;
	referenciaInterna: string;
	codUsuario: string;
	endToEnd: string;
	chaveEnderecamento: string;
	campoLivre: string;
	idIdempotente: string;
	canalEntrada: string;
	prioridade: string;
	dataHoraAceitacao: string;
	finalidadeDaTransacao: string;
	dataPagamento: string;
	valorOperacao: number;
	dinheiroEmEspecie: number;
	modalidadeAgente: string;
	prestadorDoServicoDeSaque: string;
	nivelServico: string;
};

