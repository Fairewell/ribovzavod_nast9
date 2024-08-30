import React from "react";
import EmojiIcon from "./EmojiIcon";

function MainContent() {
  const emojiData = [
    { emoji: "💡", bgColor: "bg-red-500", size: "h-[68px] w-[68px]", rounded: "rounded-[34px]" },
    { emoji: "😍", bgColor: "bg-pink-500", size: "h-[92px] w-[92px]", rounded: "rounded-[46px]" },
    { emoji: "🎉", bgColor: "bg-yellow-400", size: "h-[92px] w-[92px]", rounded: "rounded-[46px]", textColor: "text-yellow-900" },
  ];

  return (
    <main className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex grow items-start pl-4 w-full text-5xl leading-none text-white whitespace-nowrap bg-sky-400 rounded-[156px] max-md:max-w-full max-md:text-4xl">
        {emojiData.map((emoji, index) => (
          <EmojiIcon key={index} {...emoji} />
        ))}
        <div className="flex flex-col items-start px-16 pt-80 pb-10 my-auto bg-zinc-300 max-md:px-5 max-md:pt-24 max-md:max-w-full max-md:text-4xl" />
      </div>
    </main>
  );
}

export default MainContent;