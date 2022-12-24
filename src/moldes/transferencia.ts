import { TransferenciaTipo } from "./transacaoTipo";

export type TransferenciaDTO = {
  id: number;
  dataTransferencia: string;
  valor: number;
  transferenciaTipo: TransferenciaTipo;
  nomeOperadorTransacao: string;
}

