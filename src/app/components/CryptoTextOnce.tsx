import React, { useState, useEffect } from 'react';

interface CryptoTextProps {
  text: string;
  className?: string;
}

const CryptoText: React.FC<CryptoTextProps> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  useEffect(() => {
    let iterations = 0;
    let interval: NodeJS.Timeout;

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
    }, 50);

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once on mount

  return <span className={className}>{displayText}</span>;
};

export default CryptoText;
