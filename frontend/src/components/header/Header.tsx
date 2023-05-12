import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logoWhite from "./../../assets/imgs/logoWhite.png";
import logoBlack from "./../../assets/imgs/logoBlack.png";
import { FiSun, FiMoon } from "react-icons/fi";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <header className="bg-white dark:bg-[#101010] border-b border-b-gray-200 dark:border-b-[#2e2e2e]">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between h-20">
          <div className="flex items-center mt-0">
            <Link
              to="/pt-br"
              className="flex-shrink-0 flex items-center mr-32 ml-64"
            >
              <img
                className="w-56 mb-3"
                src={darkMode ? logoWhite : logoBlack}
                alt="Logo da Archei"
              />
            </Link>
            <div className="hidden sm:ml-6 sm:flex">
              <Link
                to="/pt-br/sobre"
                className="px-3 py-2 duration-200 dark:text-white hover:text-red-600 rounded-md font-semibold mr-2"
              >
                Sobre a Archei
              </Link>
              <Link
                to="/pt-br/oque-fazemos"
                className="px-3 py-2 duration-200 dark:text-white hover:text-red-600 rounded-md font-semibold mr-2"
              >
                O que fazemos
              </Link>
              <Link
                to="/pt-br/nosso-trabalho"
                className="px-3 py-2 duration-200 dark:text-white hover:text-red-600 rounded-md font-semibold mr-2"
              >
                Nosso trabalho
              </Link>
              <Link
                to="/pt-br/contato"
                className="px-3 py-2 duration-200 dark:text-white hover:bg-red-600 hover:text-white dark:hover:text-black font-semibold border-2 border-red-600 mr-4"
              >
                Entre em contato
              </Link>
              <Link
                to="/pt-br"
                className="px-3 py-2 duration-200 dark:text-white hover:text-red-600 rounded-md font-semibold mr-[20rem]"
              >
                PT-BR
              </Link>
              <div className={`${darkMode ? "bg-gray-700 mr-10 pr-4  border-2 border-red-500 dark:border-red-500 rounded-full" : "bg-gray-300 mr-10 pr-4  border-2 border-red-500 dark:border-red-500 rounded-full"}`}>
                <button
                  className={`bg-gray-100 dark:bg-gray-800 duration-700 px-2 py-[0.8rem] rounded-3xl ${
                    darkMode ? "translate-x-4 bg-gray-600" : ""
                  }`}
                  onClick={handleDarkModeToggle}
                >
                  {darkMode ? (
                    <FiMoon className="text-red-500 w-10" />
                  ) : (
                    <FiSun className="text-red-500 w-10" />
                  )}
                </button>
              </div>
              <Link
                to="/pt-br/login"
                className="px-3 py-2 duration-200 dark:text-white hover:bg-red-600 hover:text-white dark:hover:text-black border-red-600  font-semibold border-2 rounded-lg mr-2"
              >
                Login
              </Link>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-red-700 hover:text-[#101010] hover:bg-red-700 focus:outline-none focus:ring-inset focus:ring-0"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={handleToggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <HiX className="block h-6 w-6" />
              ) : (
                <HiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      <nav
        className={`sm:hidden ${isMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/pt-br/sobre"
            className="block px-3 py-2 text-white hover:bg-red-700 rounded-md"
          >
            Sobre a Archei
          </Link>
          <Link
            to="/pt-br/oque-fazemos"
            className="block px-3 py-2 text-white hover:bg-red-700 rounded-md"
          >
            O que fazemos
          </Link>
          <Link
            to="/pt-br/nosso-trabalho"
            className="block px-3 py-2 text-white hover:bg-red-700 rounded-md"
          >
            Nosso trabalho
          </Link>
          <Link
            to="/pt-br/contato"
            className="block px-3 py-2 text-white hover:bg-red-700 rounded-md"
          >
            Entre em contato
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
