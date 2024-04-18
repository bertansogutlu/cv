import React, { useContext } from 'react'
import DataContext from '../DataProvider'


function Skills() {
  const {data} = useContext(DataContext)
  const {skills} = data
  return (
    <article>
    <h3 className="text-3xl font-semibold dark:text-[#AEBCCF]">{skills.articleTopic}</h3>
    <div className="flex justify-between">
   {skills.skills.map((item, key)=>{
    return (
      <div className="w-1/4" key={key}>
        <h4 className="text-xl text-[#4338CA] dark:text-[#B7AAFF] py-3">{item.topic}</h4>
        <p className="text-xs dark:text-[#AEBCCF]">{item.text}</p>
      </div>
    )
   })}
    </div>
    <hr className="border-[#4338CA] dark:border-[#B7AAFF] my-10" />
  </article>
  )
}

export default Skills