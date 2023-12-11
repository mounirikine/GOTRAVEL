import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiMenuFries } from 'react-icons/ci';


const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 5);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyles = {
    background: scrolling ? '#ffffff' : 'transparent',
    color: scrolling ? '#000000' : '#ffffff',
    boxShadow: scrolling ? '0px 1px 5px rgba(0, 0, 0, 0.1)' : 'none',
    zIndex:'200000'
  };

  return (
<>
<header className="px-4 lg:px-8 xl:px-10 fixed py-4 sm:py-5 flex justify-between items-center w-full" style={headerStyles}>
      <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          <Link to='/'><span className="logo_font">GO</span>TRAVEL</Link>
        </h1>
      </div>
      <div className="w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5 hidden lg:flex gap-6 justify-end items-center">
        <span className={`font-semibold ${scrolling ? 'text-black' : 'text-white'}`}>
          <Link to="/">This Week Deals</Link>
        </span>
        <span className={`font-semibold ${scrolling ? 'text-black' : 'text-white'}`}>
          <Link to='/gooo'>Login</Link>
        </span>
      </div>
      <div className="lg:hidden flex items-center">
        <span
          className={`text-${scrolling ? 'black' : 'white'} font-extrabold text-3xl   lg:hidden cursor-pointer`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <CiMenuFries  />
        </span>
        {menuOpen && (
          <div className="lg:hidden absolute top-16 right-0 bg-white w-48 py-2 px-4 mt-2 rounded-lg shadow">
            <Link to="/" className="block text-black mb-2">This Week Deals</Link>
            <Link to="/gooo" className="block text-black">Login</Link>
          </div>
        )}
      </div>
      
      
    </header>



</>
   
  );
};

export default Header;
