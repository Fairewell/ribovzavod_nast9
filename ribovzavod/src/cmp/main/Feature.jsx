import React from 'react';
import FeatureCard from './FeatureCard';
import FeatureSection from './FeatureSection';

const Features = () => {
  const featureCards = [
    {
      title: "Feature",
      description: "Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat",
      linkText: "Узнать больше",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/98a76762f213cc16ee58d82e2a9c4878bfae01367357c9afbf30098f6453e22e?placeholderIfAbsent=true&apiKey=a9c7467058db4c12abf735939a63f358",
      bgColor: "bg-pink-200",
      linkColor: "text-pink-600"
    },
    {
      title: "Feature",
      description: "Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat",
      linkText: "Узнать больше",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/dda47b4beef51bdffed7093ba73e5e72c6537c3bd71da5e98a1137fa5115c578?placeholderIfAbsent=true&apiKey=a9c7467058db4c12abf735939a63f358",
      bgColor: "bg-sky-50",
      linkColor: "text-sky-600"
    }
  ];

  const featureSections = [
    {
      title: "Feature",
      description: "Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat ullamco ulla",
      linkText: "Узнать больше",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/360e256dfe16e2e959f2dd80d5bc41d506508813c62f42131c2e7305b58959cc?placeholderIfAbsent=true&apiKey=a9c7467058db4c12abf735939a63f358",
      bgColor: "bg-purple-300",
      linkColor: "text-violet-700",
      imagePosition: "right"
    },
    {
      title: "Feature",
      description: "Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat ullamco ulla",
      linkText: "Узнать больше",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/58c3cb72e2aabe52b880fe1364eca77f10e91e3e30fceae2f9d25de2281bc445?placeholderIfAbsent=true&apiKey=a9c7467058db4c12abf735939a63f358",
      bgColor: "bg-red-200",
      linkColor: "text-orange-600",
      imagePosition: "left"
    }
  ];

  return (
    <section className="flex flex-col justify-center items-center px-20 py-24 bg-white max-md:px-5">
      <div className="flex flex-col w-full max-w-[1176px] max-md:max-w-full">
        <p className="self-center text-sm font-medium leading-loose text-center rotate-[2.4492937051703357e-16rad] text-zinc-700">
          hehehaha
        </p>
        <h2 className="self-center mt-1 text-5xl font-bold leading-none text-center rotate-[2.4492937051703357e-16rad] text-zinc-700 max-md:text-4xl">
          Features
        </h2>
        <div className="mt-9 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <FeatureCard {...featureCards[0]} />
            </div>
            <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
              <FeatureSection {...featureSections[0]} />
            </div>
          </div>
        </div>
        <div className="mt-6 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
              <FeatureSection {...featureSections[1]} />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <FeatureCard {...featureCards[1]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;