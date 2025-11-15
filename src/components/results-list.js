import React, { useMemo } from 'react';

const ResultItem = React.memo(({ medicineName, dosage, index }) => (
  <div 
    className="flex items-center justify-between p-4 bg-white rounded-lg border border-success-500/20 shadow-sm hover:shadow-md transition-all duration-200"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="flex items-center space-x-3">
      <div className="w-3 h-3 bg-success-500 rounded-full flex-shrink-0"></div>
      <span className="font-medium text-gray-800">{medicineName}</span>
    </div>
    <div className="text-right">
      <span className="text-xl font-bold text-success-700">{dosage}</span>
      <span className="text-sm text-gray-600 ml-1">ml</span>
    </div>
  </div>
));

const ResultsList = ({ results, animalType, weight }) => {
  const validResults = useMemo(() => 
    results?.filter(result => result.dosage !== null) || [],
    [results]
  );

  const animalDisplayName = animalType === 'dog' ? 'hund' : 'kat';

  if (!validResults.length) {
    return (
      <div className="result-card text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <p className="text-gray-600">Ingen resultater fundet</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Resultater
        </h2>
        <p className="text-gray-600">
          Medicin til <span className="font-semibold text-primary-700">{animalDisplayName}</span> der vejer{' '}
          <span className="font-semibold text-primary-700">{weight} kg</span>
        </p>
      </div>

      {/* Results */}
      <div className="result-card space-y-3">
        {validResults.map((result, index) => (
          <ResultItem
            key={result.medicineName}
            medicineName={result.medicineName}
            dosage={result.dosage}
            index={index}
          />
        ))}
        
        {/* Summary */}
        <div className="mt-6 pt-4 border-t border-success-500/20">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">
              <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {validResults.length} medicin{validResults.length !== 1 ? 'er' : ''} beregnet
            </span>
            <span className="text-success-700 font-medium">
              Klar til brug
            </span>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start space-x-2">
          <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-sm font-medium text-amber-800 mb-1">Vigtigt</p>
            <p className="text-sm text-amber-700">
              Disse beregninger er kun vejledende. Konsulter altid en dyrlæge før administration af medicin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ResultsList);
