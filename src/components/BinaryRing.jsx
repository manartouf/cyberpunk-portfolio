import React, { useEffect, useState } from 'react';
import '../styles/binaryRing.css';

const BinaryRing = () => {
  const [rotation, setRotation] = useState(0);

  const binary = '010101010101010101010101010101';
  const items = binary.split('');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const diff = window.scrollY - lastScrollY;
      setRotation(prev => prev + diff * 0.5); // rotate based on scroll
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="binary-ring"
      style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
    >
      {items.map((bit, index) => (
        <span
          key={index}
          className="bit"
          style={{
            transform: `rotate(${index * (360 / items.length)}deg) translate(80px) rotate(-${index * (360 / items.length)}deg)`,
          }}
        >
          {bit}
        </span>
      ))}
    </div>
  );
};

export default BinaryRing;
