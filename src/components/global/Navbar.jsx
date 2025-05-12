// components/global/Navbar.jsx
import { useState } from 'react';
import { IoIosMenu, IoIosClose  } from "react-icons/io";
import logo from '../../assets/logo/logo.svg'
import Button from './Button';
import MobileMenu from './MobileMenu';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Resume', 'Portfolio', 'Services', 'Contact'];

  return (
    <nav className=" shadow-md  py-3 w-full fixed top-0 left-0 z-50">
      <div className="w-full max-w-[85%] md:max-w-[85%] mx-auto flex justify-between items-center">
        <div className="w-full max-w-24 md:max-w-32 ">
          <img src={logo} alt="" className='size-full object-fill'/>
        </div>

        {/* Middle - Menu (desktop) */}
        <ul className="hidden md:flex space-x-6 text- font-medium">
          {menuItems.map((item) => (
            <li key={item} className="hover:text-[var(--primary)] cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button title="Login/Sign" />
        </div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden text-[var(--primary)]">
          <button onClick={() => setIsOpen(true)}>
            <IoIosMenu size={32} />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} menuItems={menuItems} />
    </nav>
  );
};

export default Navbar;
