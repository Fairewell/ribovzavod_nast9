import React from 'react';

const CategoryNav = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <nav className="flex sm:flex-nowrap xs:flex-wrap gap-5 justify-between self-center max-w-full text-sm font-medium leading-loose text-center text-zinc-400 w-[684px]">
      {categories.map(category => (
        <button
          key={category.id}
          className={`flex flex-col items-center ${selectedCategory === category.id ? 'text-zinc-900' : ''}`}
          onClick={() => onSelectCategory(category.id)}
        >
          <img
            loading="lazy"
            src={category.iconUrl}
            alt={category.name}
            className="object-contain w-24 aspect-square"
          />
          <div className="self-center mt-3 rotate-[2.4492937051703357e-16rad]">
            {category.name}
          </div>
        </button>
      ))}
    </nav>
  );
};

export default CategoryNav;