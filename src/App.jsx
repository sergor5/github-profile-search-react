import './App.scss';
import Navbar from './components/Navbar';
import SearchInput from './components/SearchInput';
import Avatar from './components/Avatar';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleSearchSubmit = async (query) => {
    if (!query) return;
    console.log('Searching', query);
    setIsLoading(true);
    setUserData(null);
    const user = await fetch(`https://api.github.com/users/${query}`)
      .then(
        (res) =>
          new Promise((resolve) =>
            setTimeout(() => {
              resolve(res);
            }, 1000)
          )
      )
      .then((res) => res.json());
    setIsLoading(false);
    setUserData(user);
    console.log(userData);
  };

  return (
    <div className="App h-full min-h-screen transition duration-500 dark:bg-cyan-800 grid place-items-center">
      <div className="w-11/12 md:w-3/5">
        <Navbar />
        <SearchInput onSearchSubmit={handleSearchSubmit} />
        {isLoading && <Card className="mt-4 ">Loading</Card>}
        {userData && (
          <Card className="mt-4 justify-between">
            <Avatar imageURL={userData.avatar_url} />
          </Card>
        )}
      </div>
    </div>
  );
}

export default App;
