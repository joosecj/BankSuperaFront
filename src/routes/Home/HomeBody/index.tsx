import { useEffect, useState } from 'react';
import { TransferenciaDTO } from '../../../moldes/transferencia';
import './styles.css';
import * as contaService from '../../../services/conta-service';
import { useParams } from 'react-router-dom';
import CardTransacao from '../../../components/CardTransacao';
import { SaldoTotalPorPeriodoDTO } from '../../../moldes/saldo';

type FormData = {
  firstDate: string;
  lastDate: string;
  operador: string;
}


export default function HomeBody() {
  const params = useParams();
  const [transacao, setTransacao] = useState<TransferenciaDTO[]>([]);
  const [saldo, setSaldo] = useState<SaldoTotalPorPeriodoDTO>();
  const [formData, setFormData] = useState<FormData>({
    firstDate: '',
    lastDate: '',
    operador: '',
  });

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    setFormData(formData);
    console.log(formData);
  }

  useEffect(() => {
    contaService.buscarTransferenciasPorPeriodoConta(Number(params.contaId), formData.firstDate, formData.lastDate, formData.operador)
      .then(response => {
        setTransacao(response.data.content);
      })
  }, [formData, params.contaId])

  useEffect(() => {
    contaService.saldoTotalPeriodo(Number(params.contaId), formData.firstDate, formData.lastDate, formData.operador)
      .then(response => {
        console.log(response);
        setSaldo(response.data);
      })
  }, [formData, params.contaId])


  return (
    <>
      <section className='container-forms'>
        <div className='container'>
          <form className='container-card-form' onSubmit={handleFormSubmit}>
            <div className='card-input'>
              <input
                name="firstDate"
                value={formData.firstDate}
                type="date"
                onChange={handleInputChange}
              />
            </div>
            <div className='card-input'>
              <input
                name="lastDate"
                value={formData.lastDate}
                type="date"
                onChange={handleInputChange}
              />
            </div>
            <div className='card-input'>
              <input
                name="operador"
                value={formData.operador}
                type="text"
                placeholder='Nome operador transacionado'
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Pesquisar</button>
          </form>
        </div>
      </section>
      <section className='container-transacao'>
        <div className='container'>
          {
            saldo &&
            <CardTransacao transacao={transacao} saldo={saldo} />
          }
        </div>

      </section>

    </>
  );
}