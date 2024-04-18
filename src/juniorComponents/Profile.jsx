import React, { useContext } from "react";
import DataContext from '../DataProvider'


function Profile() {
  const {data} = useContext(DataContext)
  const {profile} = data
  return (
    <article>
      <h3 className="text-3xl font-semibold dark:text-[#AEBCCF]">{profile.articleName}</h3>
      <div className="flex">
        <div className="w-3/8">
          <h4 className="text-xl text-[#4338CA] dark:text-[#B7AAFF] py-3">{profile.profile.topic}</h4>
          <div>
            {profile.profile.info.map((item, key) => {
              return <div className="flex" key={key}>
                <span className="w-1/3 font-semibold text-sm dark:text-[#AEBCCF]">{item.title}</span>
                <p className="w-2/3 text-sm dark:text-[#AEBCCF]">{item.value}</p>
              </div>;
            })}
          </div>
        </div>
        <div className="w-1/2 mx-auto text-xs">
          <h4 className="text-xl text-[#4338CA] dark:text-[#B7AAFF] py-3">{profile.about.topic}</h4>
          <p className="dark:text-[#AEBCCF]">{profile.about.text}</p>
        </div>
      </div>
      <hr className="border-[#4338CA] dark:border-[#B7AAFF] my-10" />
    </article>
  );
}

export default Profile;
