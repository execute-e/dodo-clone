import { useQuery } from "@tanstack/react-query";
import { searchPizzasApi } from "./api";

export function useSearchPizzas(searchQuery: string) {
    const {
        data,
        error,
        isLoading,
        isPlaceholderData,
    } = useQuery({...searchPizzasApi.getSearchPizzasOptions(searchQuery)});

    return {data, error, isLoading, isPlaceholderData}
}