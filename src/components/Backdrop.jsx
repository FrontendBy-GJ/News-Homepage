import React from 'react';

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onCloseMenu}
      className="fixed left-0 top-0 min-h-screen w-full bg-very-dark-blue/50"
    ></div>
  );
};

export default Backdrop;
