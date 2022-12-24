import CardTransacao from "../../../components/CardTransacao";
import { TransferenciaDTO } from "../../../moldes/transferencia";

type Props = {
  transacao: TransferenciaDTO[];
}

export default function HomeResult( {transacao} : Props) {
  return (
    <CardTransacao transacao={transacao} />
  );
}