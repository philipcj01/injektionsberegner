import React, { useState } from 'react';
import './App.css';

function App() {
  const [dyretype, setDyretype] = useState('hund');
  const [vaegt, setVaegt] = useState('');
  const [dosering, setDosering] = useState('');
  const [koncentration, setKoncentration] = useState('');
  const [resultat, setResultat] = useState(null);

  const beregnInjektion = () => {
    if (!vaegt || !dosering || !koncentration) {
      alert("Udfyld alle felter.");
      return;
    }

    const vaegtKg = parseFloat(vaegt);
    const doseringMgKg = parseFloat(dosering);
    const koncMgMl = parseFloat(koncentration);

    const totalMg = vaegtKg * doseringMgKg;
    const volumenMl = totalMg / koncMgMl;

    setResultat(volumenMl.toFixed(2));
  };

  return (
    <div className="App">
      <h1>Injektionsberegner for dyr</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Dyretype:
          <select value={dyretype} onChange={(e) => setDyretype(e.target.value)}>
            <option value="hund">Hund</option>
            <option value="kat">Kat</option>
          </select>
        </label>
        <br />
        <label>
          Vægt (kg):
          <input type="number" step="0.01" value={vaegt} onChange={(e) => setVaegt(e.target.value)} />
        </label>
        <br />
        <label>
          Dosering (mg/kg):
          <input type="number" step="0.01" value={dosering} onChange={(e) => setDosering(e.target.value)} />
        </label>
        <br />
        <label>
          Koncentration (mg/ml):
          <input type="number" step="0.01" value={koncentration} onChange={(e) => setKoncentration(e.target.value)} />
        </label>
        <br />
        <button onClick={beregnInjektion}>Beregn injektionsvolumen</button>
      </form>
      {resultat && (
        <div className="resultat">
          <h2>Resultat</h2>
          <p>Injektionsvolumen: <strong>{resultat} ml</strong></p>
        </div>
      )}
    </div>
  );
}

export default App;
