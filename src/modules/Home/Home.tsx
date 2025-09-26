import React from 'react';
import './icons/fontello.css';
import PizzasList from '../PizzasList/PizzasList';
import Search from '../Search/Search';

const Home: React.FC = () => {

  return (
    <section className="flex flex-col gap-y-10 mt-10 px-2">
      <Search />
      <PizzasList />
    </section>
  );
};

export default Home;
