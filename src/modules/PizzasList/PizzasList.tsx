import React, { useState } from 'react';
import { usePizzasFetch } from '../Home/usePizzasFetch';
import PizzaCard from '../PizzaCard/PizzaCard';

const PizzasList: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const { pizzas, error, isLoading } = usePizzasFetch(page);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div className="flex flex-col gap-y-10 pb-10">
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
        {pizzas?.data.map((item) => (
          <PizzaCard data={item} />
        ))}
      </div>
      <div className="flex justify-center gap-x-2">
        {Array.from({ length: pizzas?.pages ?? 0 }).map((_, index) => {
          const pageNumber = index + 1;

          return (
            <button
              disabled={pageNumber === page}
              className={`w-10 h-10 hover:border-orange-500 cursor-pointer transition-colors border-2 disabled:cursor-default ${
                pageNumber === page ? 'border-orange-500' : 'border-gray-200'
              }`}
              key={pageNumber}
              onClick={() => setPage(pageNumber)}>
              {pageNumber}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PizzasList;
