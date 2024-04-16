import React from "react";

function Header() {
  return (
    <header>
      <div className="py-4 flex justify-end items-center">
        <div class="checkbox-apple">
          <input class="yep" id="check-apple" type="checkbox" />
          <label for="check-apple"></label>
        </div>
        <span>DARK MODE |&nbsp;</span>
        <button>
          <span className="text-[#3730A3]">TURKCE</span>
          'YE GEC
        </button>
      </div>
      <div className="flex justify-between">
        <div className="mark">
          <p>B</p>
        </div>
        <div className="flex gap-6">
          {["Skills", "Projects", "Hire Me"].map((item) => {
            return <div className="button">{item}</div>;
          })}
        </div>
      </div>
    </header>
  );
}

export default Header;
