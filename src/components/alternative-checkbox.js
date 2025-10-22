import React from 'react';

const AlternativeCheckbox = ({ isAlternative, setIsAlternative }) => (
    <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <label>
            <input
                type="checkbox"
                checked={isAlternative}
                onChange={(e) => setIsAlternative(e.target.checked)}
            />
            <span style={{ fontSize: 14, color: '#575757ff' }}>Alternativ dosis</span>
        </label>
    </div>
);

export default AlternativeCheckbox;
