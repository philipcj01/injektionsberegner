import React, { useState } from 'react';
import './App.css';

function App() {
  const [dyretype, setDyretype] = useState('hund');
  const [vaegt, setVaegt] = useState('');
  const [medicin, setMedicinType] = useState('type1');
  const [resultat, setResultat] = useState(null);

  const beregnInjektion = () => {
    if (!vaegt || !medicin) {
      alert("Udfyld alle felter.");
      return;
    }

    const kilogram = parseFloat(vaegt);
    const medicinType = medicin;

    const totalMg = kilogram * 1;
    const volumenMl = totalMg;

    setResultat(volumenMl.toFixed(2));
  };

  return (
    <div className="App-root">
      <div className="App">
        <h1>Injektionsberegner for dyr</h1>
        <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Dyr:
          <select value={dyretype} onChange={(e) => setDyretype(e.target.value)}>
            <option value="hund">Hund</option>
            <option value="kat">Kat</option>
          </select>
        </label>
        <br />
        <label>
          Vægt (kg):
          <input type="number" step="0.10" value={vaegt} onChange={(e) => setVaegt(e.target.value)} />
        </label>
        <br />
        <label>
          Medicin:
          <select value={medicin} onChange={(e) => setMedicinType(e.target.value)}>
            <option value="type1">Type1</option>
            <option value="type2">Type2</option>
          </select>
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
    </div>

  );
}

export default App;
