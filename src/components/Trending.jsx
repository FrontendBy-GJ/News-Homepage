import React from 'react';
import { trending } from '.';

const Trending = () => {
  return (
    <section className="mb-10 flex flex-col gap-5 sm:mt-10 sm:flex-row sm:portrait:mb-20 sm:portrait:flex-col">
      {trending.map((trend, index) => (
        <div key={index} className="flex">
          <img
            src={trend.img}
            alt={trend.alt}
            className="mr-4 w-24 object-cover sm:h-full sm:max-w-fit"
          />
          <div className="flex flex-col">
            <div className="text-4xl font-bold text-grayish-blue">
              {trend.number}
            </div>
            <h3 className="font-bold hover:text-soft-red sm:text-lg">
              <a href="#">{trend.title}</a>
            </h3>
            <p className="text-dark-grayish-blue">{trend.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Trending;
