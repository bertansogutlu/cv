import React, { useContext } from "react";
import DataContext from '../DataProvider'


function Projects() {
  const {data} = useContext(DataContext)
  const {projects} = data
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
