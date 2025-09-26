import React, { useState } from 'react';
import { useSearchPizzas } from './useSearchPizzas';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const {data, error, isLoading} = useSearchPizzas(searchQuery);

  console.log(data);

  return (
    <div className="flex items-center">
      <input
        type="text"
        className="w-[150px] sm:w-auto lg:w-[400px] p-2 border-2 border-orange-400 border-r-0 rounded-l-md focus-visible:outline-0"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="self-stretch p-2 border-2 border-l-0 border-orange-400 rounded-r-md cursor-pointer focus-visible:outline-0">
        <i className="icon-search hover:text-orange-400 transition-colors"></i>
      </button>
      <div className="absolute"></div>
    </div>
  );
};

export default Search;
