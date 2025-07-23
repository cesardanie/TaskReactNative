import axios from 'axios';

export interface Elemento {
  id: string;
  name: string;
  avatar: string;
}

export const fetchElements = async (): Promise<Elemento[]> => {
  const response = await axios.get<Elemento[]>('https://6172cfe5110a740017222e2b.mockapi.io/elements');
  return response.data;
};