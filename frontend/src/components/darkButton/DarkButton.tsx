import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className='bg-gray-600 mr-10 pr-4  border border-yellow-500 dark:border-blue-500 rounded-full'>
        <button
          className={`bg-gray-100 dark:bg-gray-800 duration-700 px-2 py-[0.8rem] rounded-3xl ${
            darkMode ? 'translate-x-4 bg-gray-600' : ''
          }`}
          onClick={handleDarkModeToggle}
        >
          {darkMode ? (
            <FiMoon className="text-blue-500 w-10" />
          ) : (
            <FiSun className="text-yellow-500 w-10" />
          )}
        </button>
    </div>
  );
};

export default DarkModeButton;
