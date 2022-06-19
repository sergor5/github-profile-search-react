import './App.scss';
import Avatar from './components/Avatar';
import SearchInput from './components/SearchInput';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App transition duration-500 dark:bg-cyan-800">
      <Avatar imageURL={'https://avatars.githubusercontent.com/u/25180681?v=4'} />
      <ThemeToggle />
      <SearchInput />
    </div>
  );
}

export default App;
