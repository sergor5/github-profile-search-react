import { useState } from 'react';
import './App.scss';
import Avatar from './components/Avatar';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Avatar imageURL={'https://avatars.githubusercontent.com/u/25180681?v=4'} />
      <ThemeToggle />
    </div>
  );
}

export default App;
