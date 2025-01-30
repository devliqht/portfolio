import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  delay: number;
  infinite?: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay, infinite }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= text.length) {
      if (infinite) {
        setTimeout(() => {
          setCurrentIndex(0);
          setCurrentText('');
        }, delay);
      }
      return;
    }

    const timeout = window.setTimeout(() => {
      setCurrentText(prevText => prevText + text[currentIndex]); 
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <span>{currentText}</span>;
};

export default Typewriter;