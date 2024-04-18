import React, { useContext } from "react";
import DataContext from '../DataProvider'

function Hero() {
  const {data} = useContext(DataContext)
  const {hero} = data
  return (
    <article className="py-10 flex justify-between">
      <div className="w-3/5">
        <div className="flex gap-2 items-center">
          <hr className="border-[#4338CA] dark:text-[#B7AAFF] w-1/12" />
          <h2 className="text-[#4338CA] dark:text-[#B7AAFF]">{hero.name}</h2>
        </div>
        <h1 className="text-6xl py-5">
          <span className="dark:text-[#AEBCCF]">{hero.firstRow}</span>
          <br />
          <span className="dark:text-[#AEBCCF]">{hero.secondRow}</span>
        </h1>
        <p className="py-5 dark:text-[#AEBCCF]">{hero.bio}</p>
        <div className="flex gap-2">
          {hero.topics.map((item, key) => {
            return (
              <button className="hero-button" key={key}>
                {`${item.logo} ${item.text}`}
              </button>
            );
          })}
        </div>
      </div>
      <div className="w-1/3 my-auto">
        <img
          className="aspect-[3/2] rounded-2xl"
          src={hero.img}
          alt={hero.name}
        />
      </div>
    </article>
  );
}

export default Hero;
