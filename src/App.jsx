import './App.scss';
import Navbar from './components/Navbar';
import SearchInput from './components/SearchInput';
import Avatar from './components/Avatar';
import Card from './components/Card';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    user['joined'] = new Date(user.created_at).toDateString(4, 10).slice(4, 15);

    setIsLoading(false);
    setUserData(user);
    console.log(userData);
  };

  return (
    <div className="App h-full min-h-screen transition duration-500 dark:bg-zinc-900 ">
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0, transition: { ease: 'easeInOut', delay: 0.5, duration: 1 } }}
        viewport={{ once: true }}
        className="w-11/12 md:w-3/5 mx-auto pt-48"
      >
        <Navbar />
        <SearchInput onSearchSubmit={handleSearchSubmit} />
        {isLoading && <Card className="mt-4 ">Loading</Card>}
        <AnimatePresence>
          {userData && (
            <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0, transition: { ease: 'easeInOut', duration: 0.5 } }} exit={{ opacity: 0 }} viewport={{ once: true }}>
              <Card className="mt-4 hover:-translate-y-0.5 active:translate-y-0">
                <Avatar imageURL={userData.avatar_url} />
                <div className="flex flex-grow justify-between px-3">
                  <div>
                    <h1 className="font-bold text-2xl">{userData.name}</h1>
                    <span className="font-bold underline">
                      <a href={`https://github.com/${userData.login}`} target="_blank">
                        @{userData.login}
                      </a>
                    </span>
                  </div>
                  <div className="font-mono">Joined at: {userData.joined}</div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scaleY: 0, rotate: 180, transformOrigin: 'top' }}
        whileInView={{ opacity: 1, scaleY: 1, rotate: 180, transition: { ease: 'easeInOut', delay: 0.85, duration: 1 } }}
        viewport={{ once: true }}
        className="Layout_custom-shape-bottom__fexMx"
      >
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="Layout_shape-fill___0zGc"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="Layout_shape-fill___0zGc"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="Layout_shape-fill___0zGc"
          ></path>
        </svg>
      </motion.div>
    </div>
  );
}

export default App;
