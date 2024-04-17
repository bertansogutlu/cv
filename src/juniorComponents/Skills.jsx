import React from 'react'

const arr = [
    {
      topic: "Java Script",
      text: "JavaScript, the cornerstone of web interactivity, empowers developers to breathe life into static web pages through dynamic functionality and seamless user experiences.",
    },
    { topic: "React.Js", text: "React.js, prized for its component-based architecture, streamlines the development process by allowing developers to build scalable and interactive user interfaces with simplicity and efficiency." },
    { topic: "Node.Js", text: "Node.js, utilizing JavaScript, allows developers to build server-side applications with ease, fostering efficient and scalable solutions for modern web development needs." },
  ]

function Skills() {
  return (
    <article>
    <h3 className="text-3xl font-semibold">Skills</h3>
    <div className="flex justify-between">
   {arr.map(item=>{
    return (
      <div className="w-1/4">
        <h4 className="text-xl text-[#4338CA] py-3">{item.topic}</h4>
        <p className="text-xs">{item.text}</p>
      </div>
    )
   })}
    </div>
  </article>
  )
}

export default Skills