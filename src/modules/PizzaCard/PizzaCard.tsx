import React from 'react';
import type { PizzaDto } from '../Home/api';

const PizzaCard: React.FC<{ data: PizzaDto }> = ({ data }) => {
  return (
    <article className="flex flex-col justify-between">
      <div className='flex flex-col'>
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
        <button className='cursor-pointer font-semibold text-orange-800 bg-orange-200 hover:bg-orange-300 transition-colors p-2 rounded-2xl active:bg-orange-500'>Выбрать</button>
      </div>
    </article>
  );
};

export default PizzaCard;
