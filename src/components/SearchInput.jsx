import { SearchIcon } from '@heroicons/react/solid';

function SearchInput() {
  return (
    <div className="max-w-2xl flex space-x-5 px-5">
      <SearchIcon className="w-8 h-8" />
      <input type="text" placeholder="Search GitHub username....." className="w-5/6 h-8 px-3 rounded-md bg-gray-400 placeholder-white" />
      <button className="bg-green-500 px-4 rounded-md font-bold text-white hover:bg-green-600 transition-colors active:bg-green-800 active:text-gray-300">Search</button>
    </div>
  );
}

export default SearchInput;
