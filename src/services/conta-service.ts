import axios from 'axios';
import { BASE_URL } from './../utils/system';


export function findAll() {
  return axios.get(`${BASE_URL}/contas?size=10`);
}

export function buscarTransferenciasPorPeriodoConta(id: Number, min: string, max: string, operador: string, page: number) {
  return axios.get(`${BASE_URL}/contas/${id}/extratos?minDate=${min}&maxDate=${max}&operador=${operador}&size=2&page=${page}`)
}


export function saldoTotalPeriodo(id: Number, min: string, max: string, operador: string) {
  return axios.get(`${BASE_URL}/contas/${id}/saldo?minDate=${min}&maxDate=${max}&operador=${operador}`)
}