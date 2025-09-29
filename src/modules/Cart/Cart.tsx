import { useAppSelector } from '@/store';
import { useCartFetch } from './useCartFetch';

const Cart = () => {
    const data = useAppSelector((state) => state.cart)

    const {pizzas, error} = useCartFetch();

  return (
    <section className="flex flex-col gap-y-2 pb-10">
      <h1 className="font-bold text-2xl px-2">Ваша корзина:</h1>
      {Object.keys(data.pizzas).map((item) => (
        <div>{pizzas?.[+item - 1].name}</div>
      ))}
    </section>
  );
};

export default Cart;