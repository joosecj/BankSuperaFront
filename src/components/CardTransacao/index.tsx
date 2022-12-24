import { SaldoTotalPorPeriodoDTO } from '../../moldes/saldo';
import { TransferenciaDTO } from '../../moldes/transferencia';
import './styles.css';

type Props = {
  transacao: TransferenciaDTO[];
  saldo: SaldoTotalPorPeriodoDTO;

}

export default function CardTransacao({ transacao, saldo }: Props) {
  return (
    <>
      <div className='container-card-transacao'>
        <div className='container-card-saldo'>
          <div className='card-saldo'>
            Saldo total: <span className='total'>R${saldo.total}</span>
          </div>
          <div className='card-saldo mr-bottom'>
          Saldo no período: <span className='total-periodo'>R${saldo.totalPeriodo}</span>
          </div>
        </div>
        <table className="bk-trans-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Valor</th>
              <th>Tipo</th>
              <th>Nome do Operador Transacionado</th>
            </tr>
          </thead>
          <tbody>
            {transacao.map((transacao) => {
              return (
                <tr key={transacao.id}>
                  <th className="show992">{transacao.dataTransferencia}</th>
                  <th className="show576"> R$ {transacao.valor}</th>
                  <th>{transacao.tipo}</th>
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
