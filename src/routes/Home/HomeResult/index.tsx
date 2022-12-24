import CardTransacao from "../../../components/CardTransacao";
import { SaldoTotalPorPeriodoDTO } from "../../../moldes/saldo";
import { TransferenciaDTO } from "../../../moldes/transferencia";

type Props = {
  transacao: TransferenciaDTO[];
  saldo: SaldoTotalPorPeriodoDTO;
}

export default function HomeResult({ transacao, saldo }: Props) {
  return (
    <CardTransacao transacao={transacao} saldo={saldo} />
  );
}