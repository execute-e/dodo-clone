import React, { useState } from 'react';
import { useSearchPizzas } from './useSearchPizzas';
import SearchResultItem from '../SearchResultItem/SearchResultItem';
import { cartSlice } from '../Cart/Cart.slice';
import { useAppSelector } from '@/store';
import './icons/fontello.css';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpened, setSearchOpened] = useState(false);
  const { data, isPlaceholderData } = useSearchPizzas(searchQuery);
  const cart = useAppSelector((state) => cartSlice.selectors.selectPizzasInCart(state));

  return (
    <div className="flex items-center">
      <div className="relative" >
        <input
          type="text"
          placeholder='Найти пиццу...'
          className={`w-[280px] sm:w-[300px] lg:w-[500px] md:w-[350px] p-2 border-2 border-orange-400 border-r-0 focus-visible:outline-0 ${
            isSearchOpened ? 'border-b-0' : ''
          }`}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setSearchOpened(true);
          }}
        />
        <button
          className={`self-stretch p-2 border-2 border-l-0 border-orange-400  cursor-pointer focus-visible:outline-0 ${
            isSearchOpened ? 'border-b-0' : ''
          }`} onClick={() => {
            setSearchQuery("");
            setSearchOpened(false);
          }}>
          <i className="icon-cancel hover:text-orange-400 transition-colors"></i>
        </button>
        {isSearchOpened && (
          <div
            className={`absolute left-0 right-0 bottom-0 translate-y-10/10 bg-white max-h-[100px] overflow-y-auto border-2 border-orange-500 border-t-0 [scrollbar-width:thin]`}>
            <div className={`transition-opacity ${isPlaceholderData ? 'opacity-50' : ''}`}>
              {data?.map((item) => (
                <SearchResultItem key={item.id} data={item} countInCart={cart[item.id]} />
              ))}
              {data?.length === 0 && <div>Ничего не найдено!</div>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
