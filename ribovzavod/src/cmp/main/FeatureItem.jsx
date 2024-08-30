import React from 'react';

function FeatureItem({ icon, text, bgColor, textColor }) {
  return (
    <div className={`flex gap-2 px-5 py-3 mt-3.5 leading-loose ${textColor} whitespace-nowrap ${bgColor} rounded-lg`}>
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 my-auto w-6 aspect-square" />
      <div className="grow shrink w-[133px]">{text}</div>
    </div>
  );
}

export default FeatureItem;