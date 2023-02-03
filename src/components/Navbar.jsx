import React, { useState } from 'react';
import { Logo, MenuIcon } from '../assets';
import Backdrop from './Backdrop';
import Mobile_menu from './Mobile_menu';
import { navMenuLinks } from '.';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  function handleOpenMenu() {
    setShowMenu(true);
  }

  function handleCloseMenu() {
    setShowMenu(false);
  }

  return (
    <nav className="flex items-center justify-between py-7">
      <img src={Logo} alt="Web 3 logo" />
      <div className="sm:hidden">
        <img
          src={MenuIcon}
          alt="hamburger menu"
          className="hover:cursor-pointer"
          onClick={handleOpenMenu}
        />
      </div>
      <div className="hidden sm:inline">
        <ul className="flex gap-4">
          {navMenuLinks.map((links, index) => (
            <li key={index}>
              <a href="" className="text-dark-grayish-blue hover:text-soft-red">
                {links}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {showMenu && <Mobile_menu onCloseMenu={handleCloseMenu} />}
      {showMenu && <Backdrop onCloseMenu={handleCloseMenu} />}
    </nav>
  );
};

export default Navbar;
