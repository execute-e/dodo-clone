import { useAppDispatch, useAppSelector } from '@/store';
import { cartSlice } from './Cart.slice';
import type { PizzaDto } from '../PizzasList/api';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const Cart = ({ pizzas, err }: { pizzas: PizzaDto[] | undefined; err: Error | null }) => {
  const cart = useAppSelector((state) => cartSlice.selectors.selectPizzasInCart(state));
  const dispatch = useAppDispatch();

  if (err) return <div>error: {err.message}</div>;

  return (
    <section className="flex flex-col gap-y-2 pb-10 w-[100%]">
      <h1 className="font-bold text-2xl px-2">Ваша корзина:</h1>
      {Object.keys(cart).length <= 0 ? (
        <div className="flex flex-col items-center gap-y-4 min-h-[60vh] justify-center">
          <div className="p-2 text-4xl">Корзина пуста!</div>
          <div className="bg-orange-300 text-orange-800 p-2 rounded-2xl cursor-pointer hover:bg-orange-200 transition-colors">
            <Link to="home">Сделать заказ</Link>
          </div>
        </div>
      ) : (
        <div className="min-h-[60vh] flex flex-col justify-start p-2 gap-y-2">
          <div className="h-[100%] flex flex-col justify-between">
            {Object.keys(cart).map((item) => {
              const currentPizza = pizzas?.[+item - 1];

              if (currentPizza) {
                return <CartItem data={currentPizza} countInCart={cart[item]} />;
              }
            })}

            <button
              onClick={() => {
                dispatch(cartSlice.actions.removeAllPizzas());
              }}
              className="mt-10 p-2 bg-orange-300 hover:bg-orange-200 text-orange-800 cursor-pointer rounded-2xl self-center transition-colors">
              Оформить заказ
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
