import React from 'react';

const Card = ({ recipe }) => {
  return (
    <div className="flex flex-col">
      <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden flex flex-col relative h-full">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={recipe.imageUrl} alt={recipe.title} />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{recipe.category}</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{recipe.title}</a>
          <p className="mt-2 text-gray-500 flex-grow">{recipe.description}</p>
          <div className="mt-auto text-right">
            <a href="#" className="text-indigo-600 hover:text-indigo-700 font-semibold">Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;