import React from 'react';
import { Web3Mobile } from '../assets';

const Hero = () => {
  return (
    <header className="flex min-h-screen flex-col sm:min-h-0">
      <img
        src={Web3Mobile}
        alt="colorful building blocks"
        className="object-cover object-top sm:max-h-72 sm:w-full"
      />
      <div className="sm:mt-7 sm:flex">
        <h1 className="py-5 text-5xl font-extrabold text-very-dark-blue sm:w-1/2 sm:p-0 sm:leading-[55px]">
          The Bright Future of <br className="hidden sm:inline" /> Web 3.0?
        </h1>
        <div className="flex-col justify-between sm:flex sm:w-1/2">
          <p className="text-dark-grayish-blue sm:pb-12">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <div>
            <button className="mt-7 mb-16 block bg-soft-red px-8 py-3 text-xl uppercase tracking-widest text-off-white duration-300 hover:bg-very-dark-blue sm:m-0">
              read more
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
