import React, { useState, useEffect } from 'react';

const Circle = ({ size, color, marginx, marginy, style }) => (
  <div
    style={{
      width: `${size}em`,
      height: `${size}em`,
      borderRadius: '50%',
      backgroundColor: color,
      marginLeft: `${-marginx}`,
      marginRight: marginx,
      marginTop: `${marginy}`,
      marginBottom: `${-marginy}`,
      ...style,
    }}
  />
);

const Background = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const newCircles = [];
    for (let i = 0; i < 8; i++) {
      var size = Math.random() * 5;
      var color = `hsla(${Math.random() * 360}, 50%, 50%, 0.5)`;
      var left = `${Math.random(10) * 100}%`;
      var top = `${Math.random(15) * 100}%`;
      var marginx = `${Math.random(5) * 100}px`
      var marginy = `${Math.random(5) * 100}px` 
      newCircles.push({ size, color, marginx, marginy, left, top });
    }
    setCircles(newCircles);
  }, []);

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-cols justify-between">
      {circles.map((circle, i) => (
        <Circle key={i} {...circle} />
      ))}
    </div>
  );
};

export default Background;
