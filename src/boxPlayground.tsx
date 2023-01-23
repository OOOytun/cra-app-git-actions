import { useEffect, useState } from 'react';

const randomNumber = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = () => {
  var colorCode = Math.floor(Math.random() * 16777215).toString(16);
  return `#${colorCode}`;
};

const BoxPlayground = () => {
  const [ballProperties, setBallProperties] = useState({
    top: randomNumber(0, 885),
    left: randomNumber(0, 885),
    color: randomColor(),
  });

  const { top, left, color } = ballProperties;

  useEffect(() => {
    setInterval(() => {
      setBallProperties({
        top: randomNumber(0, 885),
        left: randomNumber(0, 885),
        color: randomColor(),
      });
    }, 1000);
  }, []);

  return (
    <div className="container">
      <div
        className="ball"
        style={{ top, left, background: color }}
        onMouseEnter={() => alert('congratz on catching the ball')}
      />
    </div>
  );
};

export default BoxPlayground;
