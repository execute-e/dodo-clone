import { jsonApiInstance } from '@/shared/api/apiInstance';
import { queryOptions } from '@tanstack/react-query';

export type PaginatedResult<T> = {
  data: T[];
  first: number;
  prev: number | null;
  next: number | null;
  pages: number;
  items: number;
}

export type PizzaDto = {
  id: string;
  name: string;
  price: number;
  composition: string;
  popularity: number;
  imgName: string;
};

export const PizzasApi = {
  baseKey: 'pizzas',
  getPizzasOptions: (page: number) => {
    return queryOptions({
      queryKey: [PizzasApi.baseKey, page],
      queryFn: (meta) =>
        jsonApiInstance<PaginatedResult<PizzaDto>>(`pizzas?_page=${page}&_per_page=4`, { signal: meta.signal }),
    });
  },
};
