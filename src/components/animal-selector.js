import React from 'react';
import dogImg from '../imgs/animals/dog.png';
import catImg from '../imgs/animals/cat.png';

const AnimalOption = React.memo(({ type, img, label, isSelected, onSelect }) => (
  <label className={`animal-selector-option ${isSelected ? 'selected' : ''}`}>
    <input
      type="radio"
      name="animalType"
      value={type}
      checked={isSelected}
      onChange={() => onSelect(type)}
      className="sr-only"
      aria-label={`Vælg ${label}`}
    />
    <div className="relative group">
      <div className="w-20 h-20 rounded-xl transition-all duration-200">
        <img
          src={img}
          alt={label}
          className="w-full h-full object-cover rounded-xl transition-transform duration-200 group-hover:scale-105"
        />
      </div>
      <span className={`
        absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm font-medium
        ${isSelected ? 'text-primary-700' : 'text-gray-600'}
      `}>
        {label}
      </span>
      {isSelected && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center animate-fade-in">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  </label>
));

const AnimalSelector = ({ animalType, setAnimalType }) => {
  const animals = [
    { type: 'dog', img: dogImg, label: 'Hund' },
    { type: 'cat', img: catImg, label: 'Kat' }
  ];

  return (
    <div className="flex justify-center gap-8 pb-4">
      {animals.map(({ type, img, label }) => (
        <AnimalOption
          key={type}
          type={type}
          img={img}
          label={label}
          isSelected={animalType === type}
          onSelect={setAnimalType}
        />
      ))}
    </div>
  );
};

export default React.memo(AnimalSelector);
