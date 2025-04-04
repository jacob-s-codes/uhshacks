import React, { useState } from 'react';

interface CryptoTextProps {
  text: string;
  className?: string; // Allows adding custom Tailwind classes
}

const CryptoText: React.FC<CryptoTextProps> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let interval: NodeJS.Timeout;

  const handleMouseEnter = () => {
    let iterations = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split('')
          .map((char, index) => {
            if (index < iterations) {
              return text[index]; // Reveal original character
            }
            return charset[Math.floor(Math.random() * charset.length)];
          })
          .join('')
      );

      if (iterations >= text.length) {
        clearInterval(interval);
      }

      iterations += 1 / 3; // Adjust speed of reveal
    }, 50); // Interval speed
  };

  const handleMouseLeave = () => {
    clearInterval(interval);
    setDisplayText(text); // Reset to original text
  };

  return (
    <span
      className={`hover:cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText}
    </span>
  );
};

export default CryptoText;