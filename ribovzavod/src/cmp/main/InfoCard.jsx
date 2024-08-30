import React from 'react';
import FeatureItem from './FeatureItem';

function InfoCard({ title, features }) {
  return (
    <div className="flex z-10 flex-col self-stretch px-3.5 py-5 my-auto mr-0 w-full text-lg font-medium text-violet-600 bg-white rounded-3xl shadow-[0px_0px_2px_rgba(23,26,31,0.12)] max-md:mt-10">
      <h2 className="self-center text-2xl font-bold text-center rotate-[2.4492937051703357e-16rad]">
        {title}
      </h2>
      {features.map((feature, index) => (
        <FeatureItem key={index} {...feature} />
      ))}
    </div>
  );
}

export default InfoCard;