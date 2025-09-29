import { jsonApiInstance } from '@/shared/api/apiInstance';
import { queryOptions } from '@tanstack/react-query';
import type { PizzaDto } from '../PizzasList/api';

export const cartPizzasApi = {
  baseKey: 'cartPizzas',
  getCartPizzasOptions: () => {
    return queryOptions({
      queryKey: [cartPizzasApi.baseKey, 'list'],
      queryFn: (meta) => jsonApiInstance<PizzaDto[]>(`pizzas`, { signal: meta.signal }),
    });
  },
};