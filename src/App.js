import React, { useState } from 'react';
import './App.css';
import { useMedicineOptions } from './hooks/use-medicine-options';
import { useDosageResults } from './hooks/use-dosage-results';
import AnimalSelector from './components/animal-selector';
import WeightInput from './components/weight-input';
import AlternativeCheckbox from './components/alternative-checkbox';
import ResultsList from './components/results-list';

function App() {
  const [animalType, setAnimalType] = useState('dog');
  const [weight, setWeight] = useState('');
  const [isAlternative, setIsAlternative] = useState(false);

  const medicineOptions = useMedicineOptions(animalType);
  const results = useDosageResults(weight, animalType, medicineOptions, isAlternative);

  return (
    <div className="App-root">
      <div className="App">
        <h1>Injektionsberegner</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <AnimalSelector animalType={animalType} setAnimalType={setAnimalType} />

          <br />
          <WeightInput weight={weight} setWeight={setWeight} />
        </form>

        {animalType === 'dog' && (
          <AlternativeCheckbox isAlternative={isAlternative} setIsAlternative={setIsAlternative} />
        )}

        {results && (
          <ResultsList results={results} animalType={animalType} weight={weight} />
        )}
      </div>
    </div>
  );
}

export default App;
