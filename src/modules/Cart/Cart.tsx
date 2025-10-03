import { useAppSelector } from '@/store';
import { cartSlice } from './Cart.slice';
import type { PizzaDto } from '../PizzasList/api';
import { Link } from 'react-router-dom';

const Cart = ({ pizzas, err }: { pizzas: PizzaDto[] | undefined; err: Error | null }) => {
  const cart = useAppSelector((state) => cartSlice.selectors.selectPizzasInCart(state));

  if (err) return <div>error: {err.message}</div>;

  return (
    <section className="flex flex-col gap-y-2 pb-10 w-[100%]">
      <h1 className="font-bold text-2xl px-2">Ваша корзина:</h1>
      {Object.keys(cart).length <= 0 ? (
        <div className='flex flex-col items-center gap-y-4 h-[70vh] justify-center'>
          <div className="p-2 text-4xl">Корзина пуста!</div>
          <div className='bg-orange-300 text-orange-800 p-2 rounded-2xl cursor-pointer hover:bg-orange-200 transition-colors'>
            <Link to="home">Сделать заказ</Link>
          </div>
        </div>
      ) : (
        Object.keys(cart).map((item) => (
          <div key={pizzas?.[+item - 1].id}>{pizzas?.[+item - 1].name}</div>
        ))
      )}
    </section>
  );
};

export default Cart;
