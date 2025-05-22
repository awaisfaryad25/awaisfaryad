import { useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import Button from "./Button";
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, setIsOpen, menuItems, currentPath   }) => {

  const isActive = (path) => {
    return currentPath === path;
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div onClick={() => setIsOpen(false)}
      className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Slide-in panel */}
      <div
        className={`absolute top-0 right-0 h-full w-64 bg-white/20 backdrop-blur-md border-l border-white/30 px-3 py-2 transform transition-transform duration-300 ease-in-out 
          ${ isOpen ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end px-2 text-[var(--primary)]">
          <button onClick={() => setIsOpen(false)}>
            <IoIosClose size={40} />
          </button>
        </div>

        <ul className="flex flex-col space-y-6 px-2 py-4 text-lg font-medium">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-xl hover:text-[var(--primary)] 
                ${ isActive(item.path) ? 'text-[var(--primary)]' : ''}`}
            >
              {item.name}
            </Link>
          ))}
          <li>
            <Button title="Login/Sign" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
