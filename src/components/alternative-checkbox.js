import React from 'react';

const AlternativeCheckbox = ({ isAlternative, setIsAlternative }) => (
  <div className="flex items-center justify-center space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
    <label className="flex items-center cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          checked={isAlternative}
          onChange={(e) => setIsAlternative(e.target.checked)}
          className="sr-only"
          aria-describedby="alternative-help"
        />
        <div className={`
          w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center
          ${isAlternative 
            ? 'bg-primary-500 border-primary-500' 
            : 'bg-white border-gray-300 group-hover:border-primary-400'
          }
        `}>
          {isAlternative && (
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>
      
      <div className="ml-3">
        <span className="text-sm font-medium text-gray-800 group-hover:text-primary-700 transition-colors">
          Alternativ dosis
        </span>
        <p id="alternative-help" className="text-xs text-gray-600 mt-1">
          Brug alternative doserings-beregninger for hunde
        </p>
      </div>
    </label>
  </div>
);

export default React.memo(AlternativeCheckbox);
