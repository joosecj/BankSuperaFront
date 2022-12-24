import { useEffect, useState } from 'react';
import { TransferenciaDTO } from '../../../moldes/transferencia';
import './styles.css';
import * as contaService from '../../../services/conta-service';
import { Outlet, useParams } from 'react-router-dom';
import CardTransacao from '../../../components/CardTransacao';

type FormData = {
  firstDate: string;
  lastDate: string;
  operador: string;
}


export default function HomeBody() {
  const params = useParams();
  const [transacao, setTransacao] = useState<TransferenciaDTO[]>([]);
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


  return (
    <>
      <section>
        <div className='container'>
        <form onSubmit={handleFormSubmit}>
            <div>
              <input
                name="firstDate"
                value={formData.firstDate}
                type="date"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                name="lastDate"
                value={formData.lastDate}
                type="date"
                onChange={handleInputChange}
              />
            </div>
            <div>
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
      <Outlet />

      <CardTransacao transacao={transacao} />


    </>
  );
}