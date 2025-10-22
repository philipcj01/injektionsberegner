import React from 'react';
import dogImg from '../imgs/animals/dog.png';
import catImg from '../imgs/animals/cat.png';

const AnimalSelector = ({ animalType, setAnimalType }) => (
  <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center' }}>
    {[
      { type: 'dog', img: dogImg, label: 'Hund' },
      { type: 'cat', img: catImg, label: 'Kat' }
    ].map(({ type, img, label }) => (
      <label key={type}>
        <input
          type="radio"
          name="animalType"
          value={type}
          checked={animalType === type}
          onChange={() => setAnimalType(type)}
          style={{ display: 'none' }}
        />
        <img
          src={img}
          alt={label}
          style={{
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            border: animalType === type ? '2px solid #357abd' : '2px solid transparent',
            borderRadius: '5px',
          }}
        />
      </label>
    ))}
  </div>
);

export default AnimalSelector;
