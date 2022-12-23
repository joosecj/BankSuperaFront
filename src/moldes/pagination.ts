import { TransferenciasDTO } from "./transferencia";

export type TransferenciaPage = {
  content: TransferenciasDTO[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}