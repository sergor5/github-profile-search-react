import { SearchIcon } from '@heroicons/react/solid';
import { useState } from 'react';

function SearchInput({ onSearchSubmit }) {
  const [query, setQuery] = useState('');
  return (
    <div className="flex space-x-5 mt-4">
      <SearchIcon className="w-8 h-8 dark:text-white transition" />
      <input type="text" placeholder="Search GitHub username....." className="w-5/6 h-8 px-3 rounded-md bg-gray-400 placeholder-white" onChange={(e) => setQuery(e.target.value)} />
      <button className="bg-green-500 px-4 rounded-md font-bold text-white hover:bg-green-600 transition-colors active:bg-green-800 active:text-gray-300" onClick={() => onSearchSubmit(query)}>
        Search
      </button>
    </div>
  );
}

export default SearchInput;
