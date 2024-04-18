import React, { useContext } from "react";
import DataContext from '../DataProvider'

function Header() {
  const {header} = useContext(DataContext)
  return (
    <header>
      <div className="py-4 flex justify-end items-center">
        <div className="checkbox-apple">
          <input className="yep" id="check-apple" type="checkbox" />
          <label htmlFor="check-apple"></label>
        </div>
        <span>{header.mode}&nbsp;</span>
        <button>
          <span className="text-[#3730A3]">{header.language}</span>
          {header.languageSpan}
        </button>
      </div>
      <div className="flex justify-between">
        <div className="mark">
          <p>{header.firstLatter}</p>
        </div>
        <div className="flex gap-6">
          {header.topics.map((item, key) => {
            return <button className="header-button" key={key}>{item}</button>;
          })}
        </div>
      </div>
    </header>
  );
}

export default Header;
