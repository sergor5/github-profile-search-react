function Card({ children, className = '' }) {
  return (
    <div
      className={`flex items-center flex-wrap bg-opacity-60 bg-gray-300 dark:bg-opacity-60 dark:bg-zinc-800 dark:text-white px-3 py-2 rounded-lg transition  backdrop-blur-lg ${className}`}
      style={{
        boxShadow: 'rgb(0 0 0 / 5%) 0px 1px 3px, rgb(0 0 0 / 5%) 0px 28px 23px -7px, rgb(0 0 0 / 4%) 0px 12px 12px -7px, rgb(255 255 255 / 10%) 0px 1px 0px 1px inset',
      }}
    >
      {children}
    </div>
  );
}

export default Card;
