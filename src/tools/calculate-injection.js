export const calculateInjection = (weight, formula) => {
  if (Array.isArray(formula)) {
    const minDosage = weight * formula[0];
    const maxDosage = weight * formula[1];
    return `${minDosage.toFixed(2)} - ${maxDosage.toFixed(2)}`;
  }
  const formulaValue = parseFloat(formula);
  if (isNaN(formulaValue)) {
    return null;
  }
  console.log('Calculating injection with weight:', weight, 'and formula value:', formulaValue);
  const dosage = weight * formulaValue;
  return dosage.toFixed(2) === "0.00" ? dosage.toFixed(3) : dosage.toFixed(2);
};