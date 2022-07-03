import { SearchIcon } from '@heroicons/react/solid';
import { useState } from 'react';

function SearchInput({ onSearchSubmit }) {
  const [query, setQuery] = useState('');
  return (
    <div className="flex justify-between space-x-5 mt-4">
      <SearchIcon className="w-8 h-8 dark:text-white transition hover:-translate-y-0.5 active:translate-y-0" />
      <input
        type="text"
        placeholder="Search GitHub username....."
        className="w-5/6 h-8 px-3 rounded-md bg-zinc-400 dark:bg-zinc-600 placeholder-white transition text-black dark:text-white outline-none hover:-translate-y-0.5 focus:translate-y-0"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.code == 'Enter') onSearchSubmit(query);
        }}
      />
      <button
        style={{
          boxShadow: 'rgb(0 0 0 / 5%) 0px 1px 3px, rgb(0 0 0 / 5%) 0px 28px 23px -7px, rgb(0 0 0 / 4%) 0px 12px 12px -7px, rgb(255 255 255 / 10%) 0px 1px 0px 1px inset',
        }}
        className="bg-emerald-400 px-4 rounded-md font-bold text-white hover:bg-emerald-600 transition active:bg-emerald-800 active:text-gray-300 hover:-translate-y-0.5 active:-translate-y-0"
        onClick={() => onSearchSubmit(query)}
      >
        Search
      </button>
    </div>
  );
}

export default SearchInput;
