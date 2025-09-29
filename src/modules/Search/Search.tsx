import React, { useRef, useState } from 'react';
import { useSearchPizzas } from './useSearchPizzas';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpened, setSearchOpened] = useState(false);
  const { data, isPlaceholderData } = useSearchPizzas(searchQuery);
  const searchRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex items-center">
      <div className="relative" ref={searchRef}>
        <input
          type="text"
          className={`w-[150px] sm:w-auto lg:w-[400px] p-2 border-2 border-orange-400 border-r-0 focus-visible:outline-0 ${isSearchOpened ? "border-b-0" : ""}`}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setSearchOpened(true);
          }}
          onBlur={(e) => {
            if (e.target === searchRef.current) {
              return;
            }
            
          }}
        />
        <button
          className={`self-stretch p-2 border-2 border-l-0 border-orange-400  cursor-pointer focus-visible:outline-0 ${isSearchOpened ? "border-b-0" : ""}`}>
          <i className="icon-search hover:text-orange-400 transition-colors"></i>
        </button>
        {isSearchOpened && (
          <div className={`absolute left-0 right-0 bottom-0 translate-y-10/10 bg-white max-h-[100px] overflow-y-auto border-2 border-orange-500 border-t-0`}>
          <div className={`transition-opacity ${isPlaceholderData ? "opacity-50" : ""}`}>
            {data?.map((item) => (
              <div>{item.name}</div>
            ))}
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
