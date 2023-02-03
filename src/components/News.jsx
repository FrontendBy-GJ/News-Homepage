import React from 'react';
import { news } from '.';

const News = () => {
  return (
    <section className="mb-16 sm:m-0">
      <div className="bg-very-dark-blue p-6">
        <h2 className="text-4xl font-bold tracking-wider text-soft-orange">
          New
        </h2>
        <ul>
          {news.map((content, index) => (
            <div key={index}>
              <li
                key={index}
                className={`${news.length - 1 === index ? 'p-0' : 'py-8'}`}
              >
                <h3
                  className={`${
                    news.length - 1 === index ? 'mt-8' : 'mb-4'
                  } mb-3 text-lg font-bold text-off-white hover:text-soft-orange`}
                >
                  <a href="#">{content.title}</a>
                </h3>
                <p className="text-sm text-grayish-blue sm:text-lg">
                  {content.content}
                </p>
              </li>
              {news.length - 1 === index ? '' : <hr />}
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default News;
