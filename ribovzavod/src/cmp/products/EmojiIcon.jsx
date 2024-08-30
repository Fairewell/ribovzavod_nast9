import React from "react";

function EmojiIcon({ emoji, bgColor, size, rounded, textColor = "text-white" }) {
  return (
    <div className={`overflow-hidden px-4 ${bgColor} ${size} ${rounded} ${textColor}`}>
      {emoji}
    </div>
  );
}

export default EmojiIcon;