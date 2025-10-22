export const calculateInjection = (weight, medicine, formula, animalType, setResult) => {
    if (!weight || !medicine) {
      alert("Udfyld alle felter.");
      return;
    }
    const formulaValue = formula ? formula[animalType] : null;
    console.log('Formula Value:', formulaValue);
    if (!formulaValue) {
      alert("Valgt medicin understøtter ikke den valgte dyretype.");
      return;
    }
    const dosage = weight * formulaValue;
    setResult(dosage.toFixed(2));
  };