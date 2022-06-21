import './App.scss';
import Navbar from './components/Navbar';
import SearchInput from './components/SearchInput';
import Avatar from './components/Avatar';
import Card from './components/Card';

function App() {
  return (
    <div className="App h-full min-h-screen transition duration-500 dark:bg-cyan-800 ">
      <div className="max-w-2xl mx-auto">
        <Navbar />
        <SearchInput />
        <Card className="mt-4">
          <Avatar imageURL={'https://avatars.githubusercontent.com/u/25180681?v=4'} />
        </Card>
      </div>
    </div>
  );
}

export default App;
