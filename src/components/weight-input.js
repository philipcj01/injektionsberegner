import React, { useState, useCallback } from 'react';

const WeightInput = ({ weight, setWeight }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');

  const handleWeightChange = useCallback((e) => {
    const value = e.target.value;
    setWeight(value);
    
    // Real-time validation
    if (value && (isNaN(value) || parseFloat(value) <= 0)) {
      setError('Vægt skal være et positivt tal');
    } else if (value && parseFloat(value) > 200) {
      setError('Vægt virker meget høj - er du sikker?');
    } else {
      setError('');
    }
  }, [setWeight]);

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">
        Dyrets vægt
      </label>
      
      <div className="relative">
        <input
          type="number"
          step="0.1"
          min="0"
          max="200"
          value={weight}
          onChange={handleWeightChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Indtast vægt..."
          className={`
            input-field pr-12 text-lg
            ${error ? 'border-red-400 focus:ring-red-500 focus:border-red-500' : ''}
            ${isFocused ? 'ring-2 ring-primary-500 ring-opacity-20' : ''}
          `}
          aria-describedby={error ? 'weight-error' : 'weight-help'}
          aria-invalid={!!error}
        />
        
        {/* Unit indicator */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <span className={`text-sm font-medium ${isFocused ? 'text-primary-600' : 'text-gray-500'}`}>
            kg
          </span>
        </div>
        
        {/* Weight indicator */}
        {weight && !error && (
          <div className="absolute inset-y-0 right-12 flex items-center pr-2 pointer-events-none">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
      
      {/* Helper text or error */}
      <div className="min-h-[1.25rem]">
        {error ? (
          <p id="weight-error" className="text-sm text-red-600 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        ) : (
          <p id="weight-help" className="text-sm text-gray-500">
            Indtast dyrets vægt i kilogram (f.eks. 5.2)
          </p>
        )}
      </div>
    </div>
  );
};

export default React.memo(WeightInput);
