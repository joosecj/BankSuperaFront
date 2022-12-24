import axios from 'axios';
import { BASE_URL } from './../utils/system';


export function findAll() {
  return axios.get(`${BASE_URL}/contas?size=10`);
}

export function buscarTransferenciasPorPeriodoConta(id: Number, min: string, max: string, operador: string) {
  return axios.get(`${BASE_URL}/contas/${id}/extratos?minDate=${min}&maxDate=${max}&operador=${operador}`)
}