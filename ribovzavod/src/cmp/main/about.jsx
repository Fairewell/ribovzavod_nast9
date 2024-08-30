import React from 'react';
import InfoCard from './InfoCard';
import FeatureItem from './FeatureItem';

const features = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a91080509686af03d650f5267d8a1418c076c909b4ce2d5f5abff217e98a03c?placeholderIfAbsent=true&apiKey=a9c7467058db4c12abf735939a63f358", text: "хихи", bgColor: "bg-violet-50", textColor: "text-violet-600" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e0e42110f66c3ae44da8b30d5f43ef31385d9349720c87bc3d6b72a640c3b1c?placeholderIfAbsent=true&apiKey=a9c7467058db4c12abf735939a63f358", text: "хехе", bgColor: "bg-sky-50", textColor: "text-sky-500" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4c5124b48ec6cd5ff2213a2171a68bf40ebd646f5d302d342bb26da0708c59b?placeholderIfAbsent=true&apiKey=a9c7467058db4c12abf735939a63f358", text: "ааа паника", bgColor: "bg-orange-50", textColor: "text-yellow-700" }
];

function AboutUs() {
  return (
    <section className="flex flex-col items-center px-16 pt-11 bg-white max-md:px-5">
      <div className="w-full max-w-[1176px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto font-medium text-zinc-700 max-md:mt-10 max-md:max-w-full">
              <p className="text-sm leading-loose rotate-[2.4492937051703357e-16rad]">
                hehahah
              </p>
              <h1 className="mt-1 text-5xl font-bold leading-none rotate-[2.4492937051703357e-16rad] max-md:text-4xl">
                О нас
              </h1>
              <p className="self-stretch mt-10 text-xl leading-8 rotate-[2.4492937051703357e-16rad] max-md:max-w-full">
                Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat ullamco ullamco et. Aliqua tempor do consectetur reprehenderit Lorem aliqua commodo occaecat deserunt. Do eiusmod incididunt
              </p>
              <button className="overflow-hidden py-3 mt-7 max-w-full text-lg font-bold leading-loose text-violet-600 bg-white rounded-3xl rotate-[2.4492937051703357e-16rad] w-[242px] max-md:pr-5">
                Узнать больше
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <InfoCard title="Йохахах" features={features} />
                </div>
                <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1f6dad2f627a420f08070c864858a2d0a119ca5136f6c59b7421e34ad30df47?placeholderIfAbsent=true&apiKey=a9c7467058db4c12abf735939a63f358" alt="Decorative image" className="object-contain grow w-full aspect-[0.94] rounded-[244px_244px_0px_0px] max-md:max-w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;