// components/global/Navbar.jsx
import { useState } from 'react';
import { IoIosMenu, IoIosClose  } from "react-icons/io";
import logo from '../../assets/logo/logo.svg'
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Resume', 'Portfolio', 'Services', 'Contact'];

  return (
    <nav className=" shadow-md px-4 py-3 w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left - Logo */}
        <div className="w-full max-w-32 ">
          <img src={logo} alt="" className='size-full object-fill'/>
        </div>

        {/* Middle - Menu (desktop) */}
        <ul className="hidden md:flex space-x-6 text- font-medium">
          {menuItems.map((item) => (
            <li key={item} className="hover:text-blue-600 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Right - Button */}
        <div className="hidden md:block">
          <Button title="Login/Sign" />
        </div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoIosClose size={24} /> : <IoIosMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 bg-white border-t">
          <ul className="flex flex-col space-y-4 px-4 py-2">
            {menuItems.map((item) => (
              <li key={item} className="text-gray-700 hover:text-blue-600">
                {item}
              </li>
            ))}
            <li>
              <Button title="Login/Sign" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
