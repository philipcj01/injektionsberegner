import React, { useState } from 'react';
import './App.css';
import { fetchMedicineOptions } from './tools/retrieve-medicine-options';
import { calculateInjection } from './tools/calculate-injection';

function App() {
  const [animalType, setAnimalType] = useState('dog');
  const [weight, setWeight] = useState('');
  const [medicine, setMedicineType] = useState('');
  const [result, setResult] = useState(null);
  const [formula, setFormula] = useState(null);
  const [medicineOptions, setMedicineOptions] = useState([]);

  const handleCalculateInjection = () => {
    calculateInjection(weight, medicine, formula, animalType, setResult);
  };

  const fetchMedicineOptionsOnLoad = async () => {
    const options = await fetchMedicineOptions();
    setMedicineOptions(options);
  };

  React.useEffect(() => {
    fetchMedicineOptionsOnLoad();
  }, []);

  return (
    <div className="App-root">
      <div className="App">
        <h1>Injektionsberegner</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center' }}>
              <label>
                <input
                  type="radio"
                  name="animalType"
                  value="dog"
                  checked={animalType === 'dog'}
                  onChange={(e) => setAnimalType(e.target.value)}
                  style={{ display: 'none' }}
                />
                <img
                  src={require('./imgs/animals/dog.png')}
                  alt="Hund"
                  style={{
                    width: '50px',
                    height: '50px',
                    cursor: 'pointer',
                    border: animalType === 'dog' ? '2px solid #357abd' : '2px solid transparent',
                    borderRadius: '5px',
                  }}
                />
              </label>
              <label>
                <input
                  type="radio"
                  name="animalType"
                  value="cat"
                  checked={animalType === 'cat'}
                  onChange={(e) => setAnimalType(e.target.value)}
                  style={{ display: 'none' }}
                />
                <img
                  src={require('./imgs/animals/cat.png')}
                  alt="Kat"
                  style={{
                    width: '50px',
                    height: '50px',
                    cursor: 'pointer',
                    border: animalType === 'cat' ? '2px solid #357abd' : '2px solid transparent',
                    borderRadius: '5px',
                  }}
                />
              </label>
            </div>
          </label>
          <br />
          <label>
            <span style={{ fontSize: 14, color: '#575757ff' }}>Vægt (kg):</span>
            <input type="number" step="0.10" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </label>
          <br />
          <label>
            <span style={{ fontSize: 14, color: '#575757ff' }}>Medicin:</span>
            <select value={medicine} onChange={(e) => { setMedicineType(e.target.value); setFormula(medicineOptions.find(option => option.value === e.target.value)?.formula); }}>
              <option value="" disabled>Vælg medicin</option>
              {medicineOptions.filter(option => option.formula[animalType]).map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <br />

          <button onClick={handleCalculateInjection}>Beregn injektionsvolumen</button>
        </form>
        {result && (
          <div className="resultat">
            <p>Injektionsvolumen: <strong>{result} ml</strong></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
