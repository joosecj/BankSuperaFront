import { useEffect, useState } from 'react';
import { TransferenciaDTO } from '../../../moldes/transferencia';
import './styles.css';
import * as contaService from '../../../services/conta-service';
import { useNavigate, useParams } from 'react-router-dom';
import CardTransacao from '../../../components/CardTransacao';
import { SaldoTotalPorPeriodoDTO } from '../../../moldes/saldo';
import Pagination from '../../../components/Pagination';
import { TransferenciaPage } from '../../../moldes/pagination';

type FormData = {
  firstDate: string;
  lastDate: string;
  operador: string;
}


export default function HomeBody() {
  const navigate = useNavigate();
  const params = useParams();
  const [pageNumber, setPageNumber] = useState(0);
  const [transacao, setTransacao] = useState<TransferenciaDTO[]>([]);
  const [saldo, setSaldo] = useState<SaldoTotalPorPeriodoDTO>();
  const [formData, setFormData] = useState<FormData>({
    firstDate: '',
    lastDate: '',
    operador: '',
  });

  const [page, setPage] = useState<TransferenciaPage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 10,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  const handlePageChance = (newPageNumber: number) => {
    setPageNumber(newPageNumber)
  }

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
    contaService.buscarTransferenciasPorPeriodoConta(Number(params.contaId), formData.firstDate, formData.lastDate, formData.operador, pageNumber)
      .then(response => {
        setTransacao(response.data.content);
        setPage(response.data as TransferenciaPage);
      })
      .catch(() => {
        navigate("/");
      });
  }, [formData, params.contaId, pageNumber])

  useEffect(() => {
    contaService.saldoTotalPeriodo(Number(params.contaId), formData.firstDate, formData.lastDate, formData.operador)
      .then(response => {
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

        <Pagination page={page} onChange={handlePageChance} />

      </section>

    </>
  );
}