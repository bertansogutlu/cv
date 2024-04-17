import React from "react";

const profile = {
  topic: "Profile",
  info: [
    { title: "Dogum Tarihi", value: "05.02.1992" },
    { title: "Ikamet Sehri", value: "Antalya" },
    {
      title: "Egitim Durumu",
      value: "Yildiz Technical University, Mechanical Engineer",
    },
    { title: "Tercih Ettigi Rol", value: "Fronted" },
  ],
};

const about = {
  topic: "About Me",
  text: "My technical work experience, which you can see in the details of my resume, has provided me with the habit of working in harmony within teams from different cultures, taking responsibility of project management, capturing challenging deadlines under stress and doing result-oriented work both in Turkey and abroad.",
};

function Profile() {
  return (
    <article>
      <h3 className="text-3xl font-semibold">Profile</h3>
      <div className="flex">
        <div className="w-3/8">
          <h4 className="text-xl text-[#4338CA] py-3">Profile</h4>
          <div>
            {profile.info.map((item) => {
              return <div className="flex">
                <span className="w-1/3 font-semibold text-sm">{item.title}</span>
                <p className="w-2/3 text-sm">{item.value}</p>
              </div>;
            })}
          </div>
        </div>
        <div className="w-1/2 mx-auto text-xs">
          <h4 className="text-xl text-[#4338CA] py-3">{about.topic}</h4>
          <p>{about.text}</p>
        </div>
      </div>
      <hr className="border-[#4338CA] my-10" />
    </article>
  );
}

export default Profile;
