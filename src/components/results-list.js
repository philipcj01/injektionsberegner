import React from 'react';

const ResultsList = ({ results, animalType, weight }) => (
    <div className="resultat">
        {results.filter(result => result.dosage !== null).map(({ medicineName, dosage }) => (
            <p key={medicineName}>
                {medicineName}: <strong>{dosage} ml</strong>
            </p>
        ))}
        <p style={{ marginTop: '30px', fontSize: 12, color: '#575757ff' }}>
            Oversigt over medicin til {animalType === 'dog' ? 'hund' : 'kat'} der vejer {weight} kg
        </p>
    </div>
);

export default ResultsList;
