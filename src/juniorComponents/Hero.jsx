import React, { useContext } from "react";
import DataContext from '../DataProvider'

function Hero() {
  const {data} = useContext(DataContext)
  const {hero} = data
  return (
    <article className="py-10 flex justify-between">
      <div className="w-3/5">
        <div className="flex gap-2 items-center">
          <hr className="border-[#4338CA] w-1/12" />
          <h2 className="text-[#4338CA]">{hero.name}</h2>
        </div>
        <h1 className="text-6xl py-5">
          <span>{hero.firstRow}</span>
          <br />
          <span>{hero.secondRow}</span>
        </h1>
        <p className="py-5">{hero.bio}</p>
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
