import React from 'react';
import PizzaCard from '../PizzaCard/PizzaCard';

const Home: React.FC = () => {
  return (
    <section className="flex flex-col gapy-5 mt-10 px-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <input
            type="text"
            className="w-[150px] sm:w-auto lg:w-[400px] p-2 border-2 border-orange-400 border-r-0 rounded-l-md focus-visible:outline-0"
          />
          <button className="self-stretch p-2 border-2 border-l-0 border-orange-400 rounded-r-md cursor-pointer focus-visible:outline-0">
            <i className="icon-search"></i>
          </button>
        </div>
        <button className='cursor-pointer'>Sort by: <span className='text-orange-400'>popularity</span></button>
      </div>
      <div>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </section>
  );
};

export default Home;
