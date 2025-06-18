import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg w-full h-40">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
