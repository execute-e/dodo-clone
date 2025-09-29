import { useQuery } from '@tanstack/react-query';
import { PizzasApi } from './api';

export function usePizzasFetch(page: number) {
  const { data, error, isLoading, isPlaceholderData } = useQuery({
    ...PizzasApi.getPizzasOptions(page),
  });

  return {
    pizzas: data,
    error,
    isLoading,
    isPlaceholderData
  };
}
