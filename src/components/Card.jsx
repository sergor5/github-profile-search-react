function Card({ children, className = '' }) {
  return <div className={`flex items-center flex-wrap bg-gray-300 dark:bg-gray-800 dark:text-white px-3 py-2 rounded-lg transition ${className}`}>{children}</div>;
}

export default Card;
