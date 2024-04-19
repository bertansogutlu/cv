import React, { useContext } from "react";
import DataContext from "../DataProvider";

function Header() {
  const { data, handleLanChange, language, handleModeChange, mode } =
    useContext(DataContext);
  const { header } = data;
  return (
    <header className="w-4/5 m-auto">
      <div className="py-4 flex justify-end items-center max-sm:flex-col">
        <div className="checkbox-apple">
          <input
            className="yep"
            id="check-apple"
            type="checkbox"
            onClick={handleModeChange}
            checked={mode}
          />
          <label htmlFor="check-apple"></label>
        </div>
        <span className="dark:text-[#AEBCCF]">{header.mode}&nbsp;</span>
        <button onClick={handleLanChange}>
          {language === "ing" ? (
            <div className="dark:text-[#AEBCCF]">
              <span className="text-[#3730A3] dark:text-[#B7AAFF]">
                {header.language}
              </span>
              <span className="dark:text-[#AEBCCF]">{header.languageSpan}</span>
            </div>
          ) : (
            <div>
              <span className="dark:text-[#AEBCCF]">
                {" "}
                {header.languageSpan}
              </span>
              <span className="text-[#3730A3] dark:text-[#B7AAFF]">
                {header.language}
              </span>
            </div>
          )}
        </button>
      </div>
      <div className="flex justify-between">
        <div className="mark">
          <p>{header.firstLatter}</p>
        </div>
        <div className="flex gap-6 max-sm:flex-col max-sm:gap-0">
          {header.topics.map((item, key) => {
            return (
              <button className="header-button" key={key}>
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default Header;
