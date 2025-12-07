import { Camper } from '@/types/camper';
import axios from 'axios';

export const getCampers = async () => {
  const res = await axios.get('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers');
  return res.data;
};

export const getCamperById = async (id: number): Promise<Camper> => {
  const res = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`);
  return res.data;
};
