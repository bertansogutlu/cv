import React from "react";

const header = {mode : "DARK MODE |", language: "TURKCE", languageSpan: "'YE GEC", firstLatter: "B", topics: ["Skills", "Projects", "Hire Me"]}

function Header() {
  return (
    <header>
      <div className="py-4 flex justify-end items-center">
        <div class="checkbox-apple">
          <input class="yep" id="check-apple" type="checkbox" />
          <label for="check-apple"></label>
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
          {header.topics.map((item) => {
            return <button className="header-button">{item}</button>;
          })}
        </div>
      </div>
    </header>
  );
}

export default Header;
