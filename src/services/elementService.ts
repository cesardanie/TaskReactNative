import axios from 'axios';
import { Elemento } from '../types/elementTypes';

export const fetchElements = async (): Promise<Elemento[]> => {
  const response = await axios.get<Elemento[]>('https://6172cfe5110a740017222e2b.mockapi.io/elements');
  return response.data;
};
