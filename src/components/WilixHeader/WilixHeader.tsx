import React from 'react';
import './WilixHeader.css';

const WilixHeader: React.FC = () => {
  return (
    <h1 className="text-center disable_select">
      W
      <span className="accent_letter">i</span>
      l
      <span className="accent_letter">i</span>
      x Search
    </h1>
  );
};

export default WilixHeader;
