import React from 'react';

const WeightInput = ({ weight, setWeight }) => (
    <label>
        <span style={{ fontSize: 14, color: '#575757ff' }}>Vægt (kg):</span>
        <input
            type="number"
            step="0.1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
        />
    </label>
);

export default WeightInput;
