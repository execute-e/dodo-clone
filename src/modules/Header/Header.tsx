import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from './images/logo.svg';
import logo2 from './images/logo2.svg';

const Header: React.FC = () => {
  return (
    <header className="p-2 sm:px-0 flex justify-between items-center">
      <div>
      <Link to="home">
        <img
          src={logo1}
          alt=""
          className="hidden md:block md:w-[300px]"
          loading="lazy"
          decoding="async"
        />
      </Link>
      <Link to="home">
        <img src={logo2} alt="" className="md:hidden w-10" loading="lazy" decoding="async" />
      </Link>
      </div>

      <Link to="cart"><span className='bg-orange-400 text-white p-2 rounded-md hover:opacity-70 transition-opacity'>0 руб.</span></Link>
    </header>
  );
};

export default Header;
