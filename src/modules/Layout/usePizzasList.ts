import { useQuery } from "@tanstack/react-query"
import { pizzasApi } from "./api"

export const usePizzasList = () => {
    const {
        data, error
    } = useQuery({
        ...pizzasApi.getPizzasOptions(),
    });

    return {pizzas: data, error};
}