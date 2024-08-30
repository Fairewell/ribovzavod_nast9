import React, { useState, useEffect } from 'react';
import PartnerLogo from './PartnerLogo';

const partnerLogos = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ef9b180345dc400a21ef85bd32042a64c47bb5426e416e5b5d4ada0fdba5ba8?placeholderIfAbsent=true&apiKey=a9c7467058db4c12abf735939a63f358", alt: "Partner logo 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/86be288e60ea4d50c2ae670e2930fa7c1aae0cae09276b1661694483ce45308b?placeholderIfAbsent=true&apiKey=a9c7467058db4c12abf735939a63f358", alt: "Partner logo 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3490a630dc18a4749696afb84a80e879d43f48fe25bf32a7b104ea2ee7b58c16?placeholderIfAbsent=true&apiKey=a9c7467058db4c12abf735939a63f358", alt: "Partner logo 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/59612b9afa504a056ed97cebd3e078afe97f3ec57f2122556488fa384b21bf4e?placeholderIfAbsent=true&apiKey=a9c7467058db4c12abf735939a63f358", alt: "Partner logo 4" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/09deee6355e9d7c3f7745a77dfe32b791e4bf07eb038999c43e3a6da86fdabc1?placeholderIfAbsent=true&apiKey=a9c7467058db4c12abf735939a63f358", alt: "Partner logo 5" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ae0fc175ecd6fcc0dc9494a29325ba26d6d65a491272c68ca2a0291a431f617?placeholderIfAbsent=true&apiKey=a9c7467058db4c12abf735939a63f358", alt: "Partner logo 6" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b061dd3c484040b4098f1aafd473c283f4c739c7ff2ee29356226d498cd65db?placeholderIfAbsent=true&apiKey=a9c7467058db4c12abf735939a63f358", alt: "Partner logo 7" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd3c08a847eb3553e9876693b3121627361ff0b6c8b45d722985f38510adad0d?placeholderIfAbsent=true&apiKey=a9c7467058db4c12abf735939a63f358", alt: "Partner logo 8" }
];

function PartnerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partnerLogos.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (

    <section className="flex overflow-hidden flex-col flex-wrap gap-10 py-16 bg-white">
        <div>
            <h2 className="self-center mt-1 text-5xl font-bold leading-none text-center rotate-[2.4492937051703357e-16rad] text-zinc-700 max-md:text-4xl">
                Features
            </h2>
        </div>
      <div className='flex flex-row'>
      {partnerLogos.map((logo, index) => (
        <PartnerLogo
          key={index}
          src={logo.src}
          alt={logo.alt}
          isVisible={index === currentIndex}
        />
      ))}
      </div>
    </section>
  );
}

export default PartnerSlider;