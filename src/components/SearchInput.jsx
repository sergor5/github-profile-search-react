import { SearchIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function SearchInput({ onSearchSubmit, isSearching = true, hasErrors = false }) {
  const [query, setQuery] = useState('');
  const inputAnimation = {
    initial: { x: 0, transition: { duration: 0.6 } },
    shake: { x: [0, 7, 0, -7, 0, 7, 0], transition: { repeat: 0, duration: 0.2, type: 'spring', damping: 10, stiffness: 10 } },
  };
  return (
    <div className="flex justify-between space-x-5 mt-4">
      <AnimatePresence>
        {isSearching ? (
          <motion.div
            className="flex justify-center items-center w-8 h-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { ease: 'easeInOut', duration: 0.5 } }}
            exit={{ opacity: 0 }}
          >
            <svg className="h-8 w-8 animate-spin text-black dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </motion.div>
        ) : (
          <div>
            <SearchIcon className="w-8 h-8 dark:text-white transition hover:-translate-y-0.5 active:translate-y-0" />
          </div>
        )}
      </AnimatePresence>
      <motion.div className="w-5/6" animate={hasErrors ? 'shake' : 'initial'} variants={inputAnimation}>
        <input
          type="text"
          placeholder="Search GitHub username....."
          style={{ border: hasErrors ? '1px solid red' : '' }}
          className="w-full h-8 px-3 rounded-md bg-zinc-400 dark:bg-zinc-600 placeholder-white transition text-black dark:text-white outline-none hover:-translate-y-0.5 focus:translate-y-0"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.code == 'Enter') onSearchSubmit(query);
          }}
        />
      </motion.div>
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
