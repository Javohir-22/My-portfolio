import React, { useState, useEffect } from 'react';

const TypingText = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      setDisplayedText((prev) => prev + text[currentIndex]);
      const timeoutId = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, text, speed]);

  return (
    <div className="relative max-w-2xl py-4 gradient-text leading-tight max-sm:text-4xl text-5xl animate-fadeRight max-[420px]:text-3xl">
      {displayedText}
      <span className="blinking-cursor"></span>
    </div>
  );
};

export default TypingText;
