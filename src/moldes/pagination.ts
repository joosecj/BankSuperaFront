import { TransferenciaDTO } from "./transferencia";

export type TransferenciaPage = {
  content: TransferenciaDTO[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}