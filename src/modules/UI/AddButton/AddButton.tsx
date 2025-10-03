import { cartSlice } from '@/modules/Cart/Cart.slice';
import { useAppDispatch } from '@/store';

const AddButton = ({ countInCart, pizzaId }: { countInCart: number; pizzaId: string }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {countInCart ? (
        <div className="flex justify-between gap-x-4 items-center w-[100%] h-[45px] border-2 border-orange-400 font-semibold p-2 rounded-2xl">
          <button
            className="font-bold text-xl flex cursor-pointer hover:text-orange-600 transition-colors"
            onClick={() => {
              dispatch(cartSlice.actions.removePizza(pizzaId));
            }}>
            -
          </button>
          <span>{countInCart}</span>
          <button
            className="font-bold text-xl flex cursor-pointer hover:text-orange-600 transition-colors"
            onClick={() => {
              dispatch(cartSlice.actions.addPizza(pizzaId));
            }}>
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            dispatch(cartSlice.actions.addPizza(pizzaId));
          }}
          className="cursor-pointer w-[100%] h-[45px] font-semibold text-orange-800 bg-orange-200 hover:bg-orange-300 transition-colors p-2 rounded-2xl active:bg-orange-500">
          Выбрать
        </button>
      )}
    </>
  );
};

export default AddButton;
