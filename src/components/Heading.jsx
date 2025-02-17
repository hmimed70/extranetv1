import React from 'react';

const Heading = ({ text, size }) => {
  const sizeClass = size === 'large' ? 'text-3xl' : size === 'small' ? 'text-sm' : 'text-base';

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-1">
        <h3 className={`font-semibold ${sizeClass} text-center`} style={{fontSize: size}}>
          {text}
        </h3>
      </div>
    </div>
  );
};

export default Heading;
