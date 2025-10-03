import type { PizzaDto } from "../PizzasList/api";
import AddButton from "../UI/AddButton/AddButton";

const SearchResultItem = ({data, countInCart}: {data: PizzaDto, countInCart: number}) => {
    return (
        <div className="grid grid-cols-3 px-2">
            <img
              src={`/pizzas/${data.imgName}`}
              alt={data.name}
              className="w-[60px] h-[60px]"
              loading="lazy"
              decoding="async"
            />
            <div>
            <h2>{data.name}</h2>
                <span>{data.price}₽</span>
            </div>
                <AddButton countInCart={countInCart} pizzaId={data.id}/>
        </div>
    );
};

export default SearchResultItem;