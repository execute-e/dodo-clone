import { jsonApiInstance } from '@/shared/api/apiInstance';
import { keepPreviousData, queryOptions } from '@tanstack/react-query';
import type { PizzaDto } from '../PizzasList/api';

export const searchPizzasApi = {
  baseKey: 'searchPizzas',
  getSearchPizzasOptions: (searchQuery: string) => {
    return queryOptions({
      queryKey: [searchPizzasApi.baseKey, searchQuery],
      queryFn: (meta) => jsonApiInstance<PizzaDto[]>(`pizzas`, { signal: meta.signal }),
      select: (data) =>
        data.filter((item) => (searchQuery !== '' ? item.name.includes(searchQuery) : null)),
      placeholderData: keepPreviousData,
    });
  },
};
