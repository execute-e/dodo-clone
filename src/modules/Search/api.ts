import { jsonApiInstance } from "@/shared/api/apiInstance"
import { queryOptions } from "@tanstack/react-query"
import type { PizzaDto } from "../Home/api"

export const searchPizzasApi = {
    baseKey: 'searchPizzas',
    getSearchPizzasOptions: (searchQuery: string) => {
        return queryOptions({
            queryKey: [searchPizzasApi.baseKey, searchQuery],
            queryFn: (meta) => jsonApiInstance<PizzaDto[]>(`pizzas`, { signal : meta.signal }),
            select: data => data.filter(item => item.name.includes(searchQuery))
        })
    }
}