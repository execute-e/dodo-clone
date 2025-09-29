import { useQuery } from "@tanstack/react-query"
import { cartPizzasApi } from "./api"

export const useCartFetch = () => {
    const {
        data, error
    } = useQuery({
        ...cartPizzasApi.getCartPizzasOptions(),
    });

    return {pizzas: data, error};
}