import { jsonApiInstance } from '@/shared/api/apiInstance';
import { queryOptions } from '@tanstack/react-query';
import type { PizzaDto } from '../PizzasList/api';

export const pizzasApi = {
  baseKey: 'cartPizzas',
  getPizzasOptions: () => {
    return queryOptions({
      queryKey: [pizzasApi.baseKey, 'list'],
      queryFn: (meta) => jsonApiInstance<PizzaDto[]>(`pizzas`, { signal: meta.signal }),
    });
  },
};