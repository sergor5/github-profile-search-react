import ThemeToggle from './ThemeToggle';

function Navbar() {
  return (
    <div className="flex items-center justify-between flex-wrap bg-gray-300 dark:bg-gray-800 px-3 py-2 rounded-lg transition">
      <div className="dark:text-white font-bold transition">Github User Search</div>
      <ThemeToggle />
    </div>
  );
}

export default Navbar;
