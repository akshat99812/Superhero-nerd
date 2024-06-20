
import React from 'react';

interface CardProps {
  id: number;
  name: string;
  url: string;
}

export const SupeCard: React.FC<CardProps> = ({ id, name, url }) => {

  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-black m-2 cursor-pointer shadow-lg hover:shadow-lg hover:shadow-blue-700">
      <img className="w-full h-60" src={url} alt={name} />
      <div className="px-6 py-4 flex justify-center">
        <div className="font-bold text-xl mb-2 text-slate-100">
          {name}
        </div>
      </div>
    </div>
  );
}

