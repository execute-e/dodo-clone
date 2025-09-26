import { useQuery } from '@tanstack/react-query';
import { PizzasApi } from './api';

export function usePizzasFetch(page: number) {
  const { data, error, isLoading } = useQuery({
    ...PizzasApi.getPizzasOptions(page),
  });

  return {
    pizzas: data,
    error,
    isLoading,
  };
}
