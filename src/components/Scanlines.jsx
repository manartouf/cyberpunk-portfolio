import React from 'react';

const Scanlines = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 100,
        opacity: 0.08,
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(0,255,255,0.15) 0px, transparent 1px, transparent 3px)',
      }}
    />
  );
};

export default Scanlines;
