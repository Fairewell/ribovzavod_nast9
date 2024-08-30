import React from "react";

function Header() {
  return (
    <header className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex z-10 flex-col items-start self-stretch my-auto max-md:mt-10 max-md:-mr-3 max-md:max-w-full">
        <h1 className="self-stretch text-5xl font-bold leading-none text-violet-600 rotate-[2.4492937051703357e-16rad] max-md:max-w-full max-md:text-4xl">
          Эта рыба просто имба
        </h1>
        <p className="text-sm font-medium leading-6 text-gray-600 rotate-[2.4492937051703357e-16rad] max-md:max-w-full">
          Non enim eu excepteur cupidatat consectetur do ea est reprehenderit incididunt irure veniam cupidatat est non amet. Enim duis aute tempor laboris ipsum dolore non.
        </p>
        <button className="overflow-hidden px-12 py-3 mt-5 text-lg font-semibold leading-loose text-white whitespace-nowrap bg-violet-600 rounded rotate-[2.4492937051703357e-16rad] shadow-[0px_0px_2px_rgba(109,49,237,0.12)] max-md:px-5">
          КУПИКУПИ
        </button>
      </div>
    </header>
  );
}

export default Header;