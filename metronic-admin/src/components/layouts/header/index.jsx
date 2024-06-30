import React, { useEffect, useState } from "react";
import "./index.scss";
import DefaultButton from "@/components/shared/default-button/index.jsx";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  
  const handleScroll = () => {
    setIsSticky(window.scrollY > 75);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={isSticky ? "header header__sticky" : "header"}>
      <div className="theme-container-fluid">
        <div className="header__view">
          <div className="header__info">
            <DefaultButton icon={ "search" }/>
            <DefaultButton icon={ "translate" }/>
            <DefaultButton icon={ "light_mode" }/>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

