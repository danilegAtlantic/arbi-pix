
export interface OperacaoDevolucaoPagamentoDTO {
  valor: number;
  endToEnd: string;
  cpfCnpj: string;
  codUsuario: string;
  reasons: [
    {
      code: string;
      info: string;
    }
  ],
  idIdempotente: string;
  returnId: string;
  canalEntrada: string;
  idDevolucao: string;
  campoLivre: string;
  prioridade: string;
  dataHoraAceitacao: string;
};

