import './App.scss';
import Navbar from './components/Navbar';
import SearchInput from './components/SearchInput';
import Avatar from './components/Avatar';
import Card from './components/Card';

function App() {
  const handleSearchSubmit = async (query) => {
    console.log('Searching', query);
    const user = await fetch(`https://api.github.com/users/${query}`).then((res) => res.json());
    console.log(user);
  };

  return (
    <div className="App h-full min-h-screen transition duration-500 dark:bg-cyan-800 grid place-items-center">
      <div className="w-11/12 md:w-3/5">
        <Navbar />
        <SearchInput onSearchSubmit={handleSearchSubmit} />
        <Card className="mt-4">
          <Avatar imageURL={'https://avatars.githubusercontent.com/u/25180681?v=4'} />
        </Card>
      </div>
    </div>
  );
}

export default App;
