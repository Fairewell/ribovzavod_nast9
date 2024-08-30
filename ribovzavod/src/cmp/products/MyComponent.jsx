import React from "react";
import Header from "./greethead";
import MainContent from "./greetContent";

function MyComponent() {
  return (
    <div className="flex flex-col justify-center items-center px-16 py-32 bg-sky-50 max-md:px-5 max-md:py-24">
      <div className="w-full max-w-[1145px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <Header />
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default MyComponent;