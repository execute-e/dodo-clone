import { useAppDispatch } from '@/store';
import type { PizzaDto } from '../PizzasList/api';
import { cartSlice } from '../Cart/Cart.slice';

const PizzaCard = ({ data, countInCart }: { data: PizzaDto; countInCart: number }) => {
  const dispatch = useAppDispatch();

  return (
    <article className="flex flex-col justify-between">
      <div className="flex flex-col">
        <img
          src={`/pizzas/${data.imgName}`}
          alt=""
          className="self-center shrink-0 w-[100%] h-[auto]"
          width="120"
          height="120"
          loading="lazy"
          decoding="async"
        />
        <div className="flex flex-col gap-y-4">
          <h2 className="font-bold text-sm md:text-xl lg:text-2xl xl:text-3xl">{data.name}</h2>
          <p className="leading-none text-gray-500 text-sm">{data.composition}</p>
        </div>
      </div>
      <div className="flex mt-5 justify-between items-center">
        <h3 className="font-bold text-sm md:text-md lg:text-xl xl:text-2xl">{data.price}₽</h3>
        {countInCart ? (
          <div className="flex justify-between items-center w-[30%] h-[45px] border-2 border-orange-400 font-semibold p-2 rounded-2xl">
            <button
              className="font-bold text-xl flex cursor-pointer hover:text-orange-600 transition-colors"
              onClick={() => {
                dispatch(cartSlice.actions.removePizza(data.id));
              }}>
              -
            </button>
            <span>{countInCart}</span>
            <button
              className="font-bold text-xl flex cursor-pointer hover:text-orange-600 transition-colors"
              onClick={() => {
                dispatch(cartSlice.actions.addPizza(data.id));
              }}>
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              dispatch(cartSlice.actions.addPizza(data.id));
            }}
            className="cursor-pointer w-[30%] h-[45px] font-semibold text-orange-800 bg-orange-200 hover:bg-orange-300 transition-colors p-2 rounded-2xl active:bg-orange-500">
            Выбрать
          </button>
        )}
      </div>
    </article>
  );
};

export default PizzaCard;
