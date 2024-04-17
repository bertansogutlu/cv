import React from 'react'

function Hero() {
  return (
    <article className="py-10 flex justify-between">
    <div className="w-3/5">
      <div className="flex gap-2 items-center">
        <hr className="border-[#4338CA] w-1/12" />
        <h2 className="text-[#4338CA]">Bertan Sogutlu</h2>
      </div>
      <h1 className="text-6xl py-5">
        <span>Creative thinker</span>
        <br />
        <span>Minimalism lover</span>
      </h1>
      <p className="py-5">
        As a full-stack developer, I proficiently manage both client-side
        and server-side aspects of web development, ensuring holistic
        solutions that meet both user needs and technical requirements.
      </p>
      <div className="flex gap-2">
        {[{text:'Hire Me',logo:""},{text:'Github',logo:'@'},{text:'Linkedin',logo:'@'}].map(item => {
          return (
            <button className="main-button">
              {`${item.logo} ${item.text}`}
            </button>
          )
        })}
      </div>
    </div>
    <div className="w-1/3 my-auto">
      <img className="aspect-[3/2] rounded-2xl" src="https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/software-development-specialist.jpg?itok=D8qgVwxb" alt="" />
    </div>
  </article>
  )
}

export default Hero