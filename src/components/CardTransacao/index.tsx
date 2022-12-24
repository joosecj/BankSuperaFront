import { TransferenciaDTO } from '../../moldes/transferencia';
import './styles.css';

type Props = {
  transacao: TransferenciaDTO[];
}

export default function CardTransacao({ transacao }: Props) {
  return (
    <>
      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">Data</th>
              <th className="show576">Valor</th>
              <th>Tipo</th>
              <th className="show992">Nome do Operador Transacionado</th>
            </tr>
          </thead>
          <tbody>
            {transacao.map((transacao) => {
              return (
                <tr key={transacao.id}>
                  <th className="show992">{transacao.dataTransferencia}</th>
                  <th className="show576"> R$ {transacao.valor}</th>
                  <th>{transacao.transferenciaTipo}</th>
                  <th className="show992">{transacao.nomeOperadorTransacao}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );

}
