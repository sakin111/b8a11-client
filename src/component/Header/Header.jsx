import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const nav = (
    <>
      <NavLink to="/" className="block py-2 pl-3 pr-4 font-bold text-white logo rounded md:bg-transparent md: logo md:p-0 md:dark: logo" aria-current="page">
        Home
      </NavLink>
      <NavLink to="/services" className="block py-2 pl-3 pr-4 font-bold text-white logo rounded md:bg-transparent md: logo md:p-0 md:dark:logo" aria-current="page">
        Services
      </NavLink>
    </>
  );

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <img src="https://i.ibb.co/QQKmMx0/d3d9437c-f14f-4781-82cf-c713afaa5488-removebg-preview.png" className="h-12 mr-3" alt="travela" />
            <span className="self-center text-3xl logo font-custom roboto font-bold whitespace-nowrap dark:text-white">Travela</span>
          </div>
          <div className="flex md:order-2">
            <Link to="/login">
              <input
                type="submit"
                value="Login"
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-7 py-2.5 text-center mr-2 mb-2"
              />
            </Link>
            
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {nav}
              
              <div
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
              className="relative"
            >
              <button
                className="logo font-extrabold focus:outline-none focus:border-none"
              >
                Dashboard
               
              </button>
              {isDropdownOpen && (
                <div
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
                  className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow"
                >
                  <ul >
                    <li className="py-2 px-4 hover:bg-gray-200">Item 1</li>
                    <li className="py-2 px-4 hover:bg-gray-200">Item 2</li>
                    <li className="py-2 px-4 hover:bg-gray-200">Item 3</li>
                    <li className="py-2 px-4 hover:bg-gray-200">Item 4</li>
                  </ul>
                </div>
              )}
            </div>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
