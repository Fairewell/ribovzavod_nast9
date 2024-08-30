import React from 'react';

const FeatureCard = ({ title, description, linkText, imageSrc, bgColor, linkColor }) => {
  return (
    <div className={`flex overflow-hidden flex-col pt-14 pl-8 mx-auto w-full ${bgColor} rounded-3xl text-zinc-700`}>
      <h3 className="self-start text-3xl font-bold rotate-[2.4492937051703357e-16rad]">{title}</h3>
      <p className="mt-1 mr-8 text-xl font-medium leading-8 rotate-[2.4492937051703357e-16rad] max-md:mr-2.5">
        {description}
      </p>
      <div className={`flex gap-5 justify-between mt-2.5 text-base font-semibold leading-loose ${linkColor}`}>
        <a href="#" className="my-auto rotate-[2.4492937051703357e-16rad]">{linkText}</a>
        <img loading="lazy" src={imageSrc} alt="" className="object-contain shrink-0 max-w-full aspect-[1.16] w-[130px]" />
      </div>
    </div>
  );
};

export default FeatureCard;