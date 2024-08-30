import React from 'react';

const FeatureSection = ({ title, description, linkText, imageSrc, bgColor, linkColor, imagePosition = 'right' }) => {
  return (
    <div className={`overflow-hidden grow px-8 pt-14 pb-8 w-full ${bgColor} rounded-3xl max-md:px-5 max-md:mt-6 max-md:max-w-full`}>
      <div className="flex gap-5 max-md:flex-col">
        <div className={`flex flex-col ${imagePosition === 'right' ? 'w-[63%]' : 'w-[71%]'} max-md:ml-0 max-md:w-full`}>
          <div className="flex flex-col grow items-start text-zinc-700 max-md:mt-10">
            <h3 className="text-3xl font-bold rotate-[2.4492937051703357e-16rad]">{title}</h3>
            <p className="self-stretch mt-1 text-xl font-medium leading-8 rotate-[2.4492937051703357e-16rad]">
              {description}
            </p>
            <a href="#" className={`mt-16 text-base font-semibold leading-loose ${linkColor} rotate-[2.4492937051703357e-16rad] max-md:mt-10`}>
              {linkText}
            </a>
          </div>
        </div>
        <div className={`flex flex-col ml-5 ${imagePosition === 'right' ? 'w-[37%]' : 'w-[29%]'} max-md:ml-0 max-md:w-full`}>
          <img loading="lazy" src={imageSrc} alt="" className={`object-contain mt-4 w-full ${imagePosition === 'right' ? 'aspect-[1.23]' : 'aspect-[0.83] w-[166px]'} max-md:mt-10`} />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection