import React from 'react';
import { navMenuLinks } from '..';
import { MenuIconClose } from '../assets';

const Mobile_menu = (props) => {
  return (
    <div className="fixed top-0 right-0 z-10 min-h-screen w-64 bg-off-white p-6">
      <img
        src={MenuIconClose}
        alt="close menu button"
        onClick={props.onCloseMenu}
        className="mb-16 ml-auto pt-3 hover:cursor-pointer"
      />
      <nav>
        <ul>
          {navMenuLinks.map((links, index) => (
            <li key={index} className="py-3 text-lg">
              <a href="#">{links}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Mobile_menu;
