import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [toggle, setToggleMenu] = useState(false);

  return (
    <div className="gpt__navbar">
      <div className="gpt__navbar-links">
        <div className="gpt__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#whatgpt">What is GPT?</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#feature">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
        </div>
        <div className="gpt__navbar-links_sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
        
        <div className="gpt__navbar-menu">
          {toggle ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggle && (
           <div className="gpt__navbar-menu_container scale-up-center">
           <div className="gpt__navbar-menu_container-links">
             <p><a href="#home">Home</a></p>
             <p><a href="#whatgpt">What is GPT3?</a></p>
             <p><a href="#possibility">Open AI</a></p>
             <p><a href="#feature">Case Studies</a></p>
             <p><a href="#blog">Library</a></p>
           </div>
           <div className="gpt__navbar-menu_container-links-sign">
             <p>Sign in</p>
             <button type="button">Sign up</button>
           </div>
         </div>
          )}
        </div>
      
    </div>
  );
};

export default Navbar;
