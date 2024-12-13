import React, { useState } from "react";
import "./Navbar.css";
import logo from '../assets/Navbar/logo.svg'
import Menu from '../assets/Navbar/Menu.svg'
import Cross from '../assets/Navbar/Cross.svg'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <nav id="navbar">
      <div className="container">
        <div className="navRow">
          <a href="#" className="logo">
            <img src={logo} alt="" className="object_fit" />
          </a>
          <div className={`navCenter ${isActive ? "show" : ""}`}>
            <ul className="list">
              <li className="list_item">
                <a className="list_item-link active home" href="#home">
                  Home
                </a>
              </li>
              <li className="list_item">
                <a className="list_item-link" href="#about">
                  About
                </a>
              </li>
              <li className="list_item">
                <a className="list_item-link" href="#resume">
                  Resume
                </a>
              </li>
              <li className="list_item">
                <a className="list_item-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="list_item">
                <a className="list_item-link" href="#blog">
                  Services
                </a>
              </li>
              <li className="list_item">
                <a className="list_item-link" href="#testimonial">
                  Feedback
                </a>
              </li>
              <li className="list_item">
                <a className="list_item-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="navRight">
            <a className="btn btn_CV" href="">
              Download CV
            </a>
          </div>
          <div className="menu">
            <button
              className="btn_menu nav__toggle"
              href="#"
              onClick={toggleMenu}
            >
              <img
                className={`object-fit menu_open ${isActive ? "close" : ""}`}
                src={Menu}
                alt=""
              />
              <img
                className={`menu_close ${isActive ? "open" : ""}`}
                src={Cross}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
