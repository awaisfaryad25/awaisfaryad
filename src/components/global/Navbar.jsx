// components/global/Navbar.jsx
import { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo/awais.svg';
import Button from './Button';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About',  },
    { name: 'Resume', path: '/resume' },
    { name: 'Portfolio', },
    { name: 'Services', },
    { name: 'Contact',  }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="max-w-[1500px] mx-auto shadow-md py-3">
        <div className="w-full max-w-[85%] md:max-w-[85%] mx-auto flex justify-between items-center">
          <div className="w-full max-w-24 md:max-w-32 drop-shadow-[2px_3px_1px_#000000]">
            <Link to="/">
              <img src={logo} alt="Logo" className='size-full object-fill cursor-pointer ' />
            </Link>
          </div>

          <ul className="hidden md:flex space-x-6 font-medium">
            {menuItems.map((item) => (
              <li key={item.name} className="hover:text-[var(--primary)] cursor-pointer ">
                <Link to={item.path} className={`hover:text-[var(--primary)] ${isActive(item.path) ? 'pb-1 pt-0.5 shadow-lg px-3 rounded-full bg-[var(--secondary)] text-[var(--primar)] hover:text-white border border-[var(--primary)]' : ''}`}>
                  <span className='text-shadow-lg/30'>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button title="Login / Sign" />
          </div>

          <div className="md:hidden text-[var(--primary)]">
            <button onClick={() => setIsOpen(true)}><IoIosMenu size={32} /></button>
          </div>
        </div>

        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} menuItems={menuItems} currentPath={location.pathname} />
      </div>
    </nav>
  );
};

export default Navbar;