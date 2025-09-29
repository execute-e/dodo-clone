import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type PizzaId = string;

export type InitialCartStateType = {
    pizzas: {
        [pizzaId: PizzaId]: number
    }
}

const initialCartState: InitialCartStateType = {
    pizzas: {
        '1': 2,
        '2': 3,
    },
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    selectors: {
        selectPizzasInCart: (state) => state.pizzas
    },
    reducers: {
        addPizza: (state, action: PayloadAction<{ pizzaId: PizzaId }>) => {
            const { pizzaId } = action.payload;
            const currentPizzaCount = state.pizzas[pizzaId] ?? 0;

            state.pizzas[pizzaId] = currentPizzaCount + 1;
        },
        removePizza: (state, action: PayloadAction<{ pizzaId: PizzaId }>) => {
            const { pizzaId } = action.payload;
            const currentPizzaCount = state.pizzas[pizzaId];

            state.pizzas[pizzaId] = currentPizzaCount - 1;
        },
        removeAllPizzas: (state) => {
            state.pizzas = {};
        }
    }
})