import React from "react";

const hero = {
  name: "Bertan Sogutlu",
  firstRow: "Creative thinker",
  secondRow: "Minimalism lover",
  bio: "As a full-stack developer, I proficiently manage both client-side and server-side aspects of web development, ensuring holistic solutions that meet both user needs and technical requirements.",
  topics: [
    { text: "Hire Me", logo: "" },
    { text: "Github", logo: "@" },
    { text: "Linkedin", logo: "@" },
  ],
  img:"https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/software-development-specialist.jpg?itok=D8qgVwxb"
};

function Hero() {
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
          {hero.topics.map((item) => {
            return (
              <button className="hero-button">
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
