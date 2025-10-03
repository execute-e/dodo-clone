import type { PizzaDto } from '../PizzasList/api';
import AddButton from '../UI/AddButton/AddButton';

const CartItem = ({ data, countInCart }: { data: PizzaDto; countInCart: number }) => {
  return (
    <div className="grid grid-cols-[1fr_100px]">
      <div className="flex gap-x-6 items-center">
        <img
          src={`/pizzas/${data.imgName}`}
          alt={data.name}
          className="w-[60px] h-[60px]"
          loading="lazy"
          decoding="async"
        />
        <div>
          <h3>{data.name}</h3>
          <span>Всего: {data.price * countInCart}₽</span>
        </div>
      </div>
      <div className='flex items-center'>
        <AddButton pizzaId={data.id} countInCart={countInCart} />
      </div>
    </div>
  );
};

export default CartItem;
