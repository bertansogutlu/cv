import React from "react";

const projects = {
  articleName: "Projects",
  sites: {github: "Github", web: "View Site"},
  projects: [
    {
      topic: "Java Script",
      text: "JavaScript, the cornerstone of web interactivity, empowers developers to breathe life into static web pages through dynamic functionality and seamless user experiences.",
      img: "https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/software-development-specialist.jpg?itok=D8qgVwxb",
      libraries: ["React", "Redux", "Axios"],
      github: "",
      url: "",
    },
    {
      topic: "React.Js",
      text: "React.js, prized for its component-based architecture, streamlines the development process by allowing developers to build scalable and interactive user interfaces with simplicity and efficiency.",
      img: "https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/software-development-specialist.jpg?itok=D8qgVwxb",
      libraries: ["React", "Redux", "Axios"],
      github: "",
      url: "",
    },
    {
      topic: "Node.Js",
      text: "Node.js, utilizing JavaScript, allows developers to build server-side applications with ease, fostering efficient and scalable solutions for modern web development needs.",
      img: "https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/software-development-specialist.jpg?itok=D8qgVwxb",
      libraries: ["React", "Redux", "Axios"],
      github: "",
      url: "",
    },
  ]
}

function Projects() {
  return (
    <article>
      <h3 className="text-3xl font-semibold">{projects.articleName}</h3>
      <div className="flex justify-between">
        {projects.projects.map((item, key) => {
          return (
            <div className="w-1/4" key={key}>
              <img className="pt-5" src={item.img} alt={item.topic} />
              <h4 className="text-xl text-[#4338CA] py-3">{item.topic}</h4>
              <p className="text-xs pb-5">{item.text}</p>
              <div className="flex gap-2">
                {item.libraries.map((item, key) => {
                  return (
                    <div className="text-xs projects-button" key={key}>{item}</div>
                  );
                })}
              </div>
              <div className="flex justify-between pt-5">
                <a className="text-[#3730A3] text-sm" href={item.github}>{projects.sites.github}</a>
                <a className="text-[#3730A3] text-sm" href={item.url}>{projects.sites.web}</a>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default Projects;
