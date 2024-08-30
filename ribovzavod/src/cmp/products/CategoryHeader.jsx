import React from 'react';

const CategoryHeader = ({ title, onViewMore }) => {
  return (
    <header className="flex flex-wrap gap-5 justify-between mt-16 w-full max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
      <h2 className="text-3xl font-raleway font-bold rotate-[2.4492937051703357e-16rad] text-zinc-900">
        {title}
      </h2>
      <button
        onClick={onViewMore}
        className="flex overflow-hidden gap-3 font-raleway px-4 py-2 my-auto text-sm font-medium leading-loose whitespace-nowrap rounded bg-black bg-opacity-0 rotate-[2.4492937051703357e-16rad] text-zinc-400 max-md:pl-5"
      >
        <span>Ещё</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b864d6b7f76bde5e175318af161efd8fbee1c43fa409f69028bd4e045b0e2ae?placeholderIfAbsent=true&apiKey=a9c7467058db4c12abf735939a63f358"
          alt=""
          className="object-contain shrink-0 my-auto w-4 aspect-square"
        />
      </button>
    </header>
  );
};

export default CategoryHeader;