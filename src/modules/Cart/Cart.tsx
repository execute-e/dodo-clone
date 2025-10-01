import { useAppSelector } from '@/store';
import { cartSlice } from './Cart.slice';
import type { PizzaDto } from '../PizzasList/api';

const Cart = ({
  pizzas,
  err,
}: {
  pizzas: PizzaDto[] | undefined;
  err: Error | null;
}) => {

  const cart = useAppSelector((state) => cartSlice.selectors.selectPizzasInCart(state));

  if (err) return <div>error: {err.message}</div>;

  return (
    <section className="flex flex-col gap-y-2 pb-10">
      <h1 className="font-bold text-2xl px-2">Ваша корзина:</h1>
      {!cart ? (
        <div>Корзина пуста</div>
      ) : (
        Object.keys(cart).map((item) => (
          <div key={pizzas?.[+item - 1].id}>{pizzas?.[+item - 1].name}</div>
        ))
      )}
    </section>
  );
};

export default Cart;
