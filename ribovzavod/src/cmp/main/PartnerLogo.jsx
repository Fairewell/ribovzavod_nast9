import React from 'react';

function PartnerLogo({ src, alt, isVisible }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`object-contain shrink-0 max-w-full ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-500 ease-in-out`}
    />
  );
}

export default PartnerLogo