import React from "react";
import Hero from "../juniorComponents/Hero"
import Skills from "../juniorComponents/Skills";
import Profile from "../juniorComponents/Profile";
import Projects from "../juniorComponents/Projects";

function Main() {
  return (
    <main className="w-4/5 m-auto">
      <Hero />
      <Skills/>
      <Profile/>
      <Projects/>
    </main>
  );
}

export default Main;
