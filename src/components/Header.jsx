import React from "react";

function Header() {
  return (
    <header>
    <div className="py-4 text-right">
      <label class="inline-flex items-center mb-5 cursor-pointer align-top">
        <input type="checkbox" value="" class="sr-only peer " />
        <div class="relative w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#FFE86E] after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#3730A3]"></div>
        <span>&nbsp;DARK MODE |&nbsp;</span>
      </label>
      <button>
        <span className="text-[#3730A3]">TURKCE</span>
        'YE GEC
      </button>
    </div>
    <div className="flex justify-between">
      <div className='mark'><p>B</p></div>
      <div className="flex gap-6">
        {['Skills','Projects','Hire Me'].map(item => {
          return (
            <div className="button">
              {item}
            </div>
          )
        })}
      </div>
    </div>
    </header>
  );
}

export default Header;
