import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./modules/Layout/Cart.slice";
import { useDispatch, useSelector, useStore } from "react-redux";

export const store = configureStore({
    reducer: {
        [cartSlice.name]: cartSlice.reducer
    }
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();