import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from './../../assets/imgs/logo.png';
import logoMin from './../../assets/imgs/logoMin.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#101010] border-b border-b-[#1d1e20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/pt-br" className="flex-shrink-0 flex items-center mr-32">
              <img
                className="block lg:hidden h-8 w-auto"
                src={logoMin}
                alt="Logo da Archei"
              />
              <img
                className="hidden lg:block w-44"
                src={logo}
                alt="Logo da Archei"
              />
            </Link>
            <div className="hidden sm:ml-6 sm:flex">
              <Link to="/pt-br/sobre" className="px-3 py-2 text-white hover:text-red-600 rounded-md font-medium mr-2">
                Sobre a Archei
              </Link>
              <Link to="/pt-br/oque-fazemos" className="px-3 py-2 text-white hover:text-red-600 rounded-md font-medium mr-2">
                O que fazemos
              </Link>
              <Link to="/pt-br/nosso-trabalho" className="px-3 py-2 text-white hover:text-red-600 rounded-md font-medium mr-2">
                Nosso trabalho
              </Link>
              <Link to="/pt-br/contato" className="px-3 py-2 text-white hover:bg-red-600 font-medium border-2 border-red-600 mr-4">
                Entre em contato
              </Link>
              <Link to="/pt-br/login" className="px-3 py-2 text-white hover:bg-red-700 hover:border-red-700  font-medium border-2 border-red-600 bg-red-600 rounded-lg mr-2">
                Login
              </Link>
              <Link to="/pt-br" className="px-3 py-2 text-white hover:text-red-600 rounded-md font-medium">
                PT-BR
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
              {isMenuOpen ? <HiX className="block h-6 w-6" /> : <HiMenu className="block h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      <nav className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/pt-br/sobre" className="block px-3 py-2 text-white hover:bg-red-700 rounded-md">
            Sobre a Archei
          </Link>
          <Link to="/pt-br/oque-fazemos" className="block px-3 py-2 text-white hover:bg-red-700 rounded-md">
            O que fazemos
          </Link>
          <Link to="/pt-br/nosso-trabalho" className="block px-3 py-2 text-white hover:bg-red-700 rounded-md">
            Nosso trabalho
          </Link>
          <Link to="/pt-br/contato" className="block px-3 py-2 text-white hover:bg-red-700 rounded-md">
            Entre em contato
          </Link>
          </div>
      </nav>
      </header>
  )}
  
  export default Header